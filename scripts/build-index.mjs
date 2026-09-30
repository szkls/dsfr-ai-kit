#!/usr/bin/env node
// Génère reference/ (composants.md, modeles.md, version.md) à partir du paquet
// node_modules/@gouvfr/dsfr. Aucune dépendance externe. Relancer : npm run index

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PKG = join(ROOT, 'node_modules', '@gouvfr', 'dsfr');
const OUT = join(ROOT, 'reference');
const HEADER = 'Fichier généré par scripts/build-index.mjs, ne pas modifier à la main';

// --- lecture minimale d'un .package.yml (clés simples + listes de premier niveau) ---
function readPackageYml(file) {
  const data = {};
  let currentKey = null;
  for (const raw of readFileSync(file, 'utf8').split('\n')) {
    if (!raw.trim() || raw.trim().startsWith('#')) continue;
    const indent = raw.length - raw.trimStart().length;
    const line = raw.trim();
    if (indent === 0) {
      const m = line.match(/^([\w-]+):\s*(.*)$/);
      if (!m) continue;
      currentKey = m[1];
      data[currentKey] = m[2] === '' ? [] : m[2];
    } else if (indent === 2 && line.startsWith('- ') && Array.isArray(data[currentKey])) {
      data[currentKey].push(line.slice(2).trim());
    }
    // les blocs imbriqués (example: style: ...) sont ignorés volontairement
  }
  return data;
}

// --- extraction des titres h2/h3 d'une page d'exemple ---
function decode(s) {
  return s
    .replace(/&#39;/g, "'").replace(/&#34;/g, '"').replace(/&#x27;/g, "'").replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
}
function headings(htmlFile) {
  if (!existsSync(htmlFile)) return [];
  const html = readFileSync(htmlFile, 'utf8');
  const found = collect(html, /<h([23])(\s[^>]*)?>([\s\S]*?)<\/h\1>/g);
  // certaines pages (blocs fonctionnels) ne titrent leurs variantes qu'en h4
  return found.length ? found : collect(html, /<h(4)(\s[^>]*)?>([\s\S]*?)<\/h\1>/g);
}
function collect(html, regex) {
  const found = [];
  for (const m of html.matchAll(regex)) {
    // titres de l'habillage des pages d'exemple (fenêtre « Paramètres d'affichage »), pas des variantes
    if (/fr-modal__title/.test(m[2] || '')) continue;
    const text = decode(m[3].replace(/<[^>]+>/g, ''));
    if (!text || text === 'Extrait de code' || found.includes(text)) continue;
    found.push(text);
  }
  return found;
}

// --- sous-pages d'exemple (dossiers contenant un index.html, en profondeur) ---
function subPages(dir, base = dir) {
  const out = [];
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir).sort()) {
    const p = join(dir, name);
    if (!statSync(p).isDirectory()) continue;
    if (existsSync(join(p, 'index.html'))) out.push(relative(base, p));
    out.push(...subPages(p, base));
  }
  return out;
}

// --- tous les .package.yml sous un dossier src ---
function findPackages(dir, base = dir) {
  const out = [];
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir).sort()) {
    const p = join(dir, name);
    if (!statSync(p).isDirectory() || name.startsWith('_')) continue;
    if (existsSync(join(p, '.package.yml'))) out.push({ rel: relative(base, p), yml: readPackageYml(join(p, '.package.yml')) });
    out.push(...findPackages(p, base));
  }
  return out;
}

const cell = (s) => String(s ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
const list = (arr) => (arr && arr.length ? arr.join(', ') : '—');

function buildRows(entries, exampleBase, category) {
  return entries.map(({ rel, yml }) => {
    const exampleDir = join(PKG, 'example', exampleBase, rel);
    const examplePath = existsSync(join(exampleDir, 'index.html'))
      ? relative(ROOT, join(exampleDir, 'index.html')) : '';
    const variants = headings(join(exampleDir, 'index.html'));
    const subs = subPages(exampleDir);
    const variantCell = [
      variants.length ? variants.join(' · ') : '',
      subs.length ? `sous-pages : ${subs.join(', ')}` : ''
    ].filter(Boolean).join(' — ') || '—';
    return {
      category,
      title: yml.title || '',
      id: rel,
      example: examplePath || '(aucune page d\'exemple)',
      variants: variantCell,
      style: list(yml.style),
      doc: typeof yml.doc === 'string' && yml.doc ? yml.doc : '—'
    };
  });
}

// --- composants ---
const components = buildRows(findPackages(join(PKG, 'src', 'dsfr', 'component')), 'component', 'composant');
// --- modèles : pages types + blocs fonctionnels ---
const models = [
  ...buildRows(findPackages(join(PKG, 'src', 'dsfr', 'layout', 'page')), 'layout/page', 'page type'),
  ...buildRows(findPackages(join(PKG, 'src', 'dsfr', 'layout', 'pattern')), 'layout/pattern', 'bloc fonctionnel')
];

const version = JSON.parse(readFileSync(join(PKG, 'package.json'), 'utf8')).version;
const today = new Date().toISOString().slice(0, 10);

// --- copie de la documentation du site (reference/doc/, produite par scripts/fetch-doc.mjs) ---
const docIndexFile = join(OUT, 'doc', 'index.json');
const docIndex = existsSync(docIndexFile) ? JSON.parse(readFileSync(docIndexFile, 'utf8')) : null;
const docSubjects = (docIndex?.subjects || []).filter((s) => s.section === 'composants');
const docByTechnical = new Map(docSubjects.map((s) => [s.technical, s]));
for (const c of components) {
  const d = docByTechnical.get(c.id);
  c.docFile = d && existsSync(join(ROOT, d.file)) ? d.file : '—';
}
const componentsWithoutDoc = components.filter((c) => c.docFile === '—').map((c) => c.id);
const docWithoutComponent = docSubjects.filter((s) => !components.some((c) => c.id === s.technical)).map((s) => `${s.technical} (${s.title})`);
const docNote = docIndex
  ? [
      `Colonne « Doc du site » : copie intégrale de la documentation officielle, récupérée le ${docIndex.fetched} par scripts/fetch-doc.mjs (à lire en entier avant d'employer un composant).`,
      `- Composants du paquet sans page de doc trouvée sur le site : ${componentsWithoutDoc.length ? componentsWithoutDoc.join(', ') : 'aucun'}.`,
      `- Pages de doc du site sans composant dans le paquet : ${docWithoutComponent.length ? docWithoutComponent.join(', ') : 'aucune'}.`
    ].join('\n')
  : 'Colonne « Doc du site » : vide, reference/doc/index.json est absent. Lancer `npm run doc`.';

function table(rows, withCategory) {
  const head = withCategory
    ? ['Catégorie', 'Nom français', 'Nom technique', 'Page d\'exemple', 'Variantes repérées', 'Dépendances CSS', 'Doc officielle']
    : ['Nom français', 'Nom technique', 'Page d\'exemple', 'Variantes repérées', 'Dépendances CSS', 'Doc officielle', 'Doc du site (copie)'];
  const lines = [`| ${head.join(' | ')} |`, `|${head.map(() => '---').join('|')}|`];
  for (const r of rows) {
    const cols = [r.title, r.id, r.example, r.variants, r.style, r.doc === '—' ? '—' : `[doc](${r.doc})`];
    if (withCategory) cols.unshift(r.category);
    else cols.push(r.docFile || '—');
    lines.push(`| ${cols.map(cell).join(' | ')} |`);
  }
  return lines.join('\n');
}

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'composants.md'),
  `${HEADER}\n\n# Composants DSFR ${version}\n\n${components.length} composants. Chemins relatifs à la racine du dépôt.\n\n${docNote}\n\n${table(components, false)}\n`);
writeFileSync(join(OUT, 'modeles.md'),
  `${HEADER}\n\n# Modèles DSFR ${version}\n\n${models.length} modèles (pages types et blocs fonctionnels). Chemins relatifs à la racine du dépôt.\n\n${table(models, true)}\n`);
writeFileSync(join(OUT, 'version.md'),
  `${HEADER}\n\n# Version\n\n- DSFR installé : ${version}\n- Généré le : ${today}\n`);

console.log(`reference/ généré : ${components.length} composants, ${models.length} modèles, DSFR ${version}, ${today}`);
if (!docIndex) console.warn('Attention : reference/doc/index.json absent, la colonne « Doc du site » est vide (lancer npm run doc).');
else {
  console.log(`Doc du site : ${docSubjects.length} composant(s) documenté(s), ${components.length - componentsWithoutDoc.length}/${components.length} composants du paquet reliés.`);
  if (componentsWithoutDoc.length) console.warn(`  Composants sans page de doc : ${componentsWithoutDoc.join(', ')}`);
  if (docWithoutComponent.length) console.warn(`  Pages de doc sans composant dans le paquet : ${docWithoutComponent.join(', ')}`);
}
