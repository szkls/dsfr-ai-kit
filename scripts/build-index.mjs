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

function table(rows, withCategory) {
  const head = withCategory
    ? ['Catégorie', 'Nom français', 'Nom technique', 'Page d\'exemple', 'Variantes repérées', 'Dépendances CSS', 'Doc officielle']
    : ['Nom français', 'Nom technique', 'Page d\'exemple', 'Variantes repérées', 'Dépendances CSS', 'Doc officielle'];
  const lines = [`| ${head.join(' | ')} |`, `|${head.map(() => '---').join('|')}|`];
  for (const r of rows) {
    const cols = [r.title, r.id, r.example, r.variants, r.style, r.doc === '—' ? '—' : `[doc](${r.doc})`];
    if (withCategory) cols.unshift(r.category);
    lines.push(`| ${cols.map(cell).join(' | ')} |`);
  }
  return lines.join('\n');
}

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'composants.md'),
  `${HEADER}\n\n# Composants DSFR ${version}\n\n${components.length} composants. Chemins relatifs à la racine du dépôt.\n\n${table(components, false)}\n`);
writeFileSync(join(OUT, 'modeles.md'),
  `${HEADER}\n\n# Modèles DSFR ${version}\n\n${models.length} modèles (pages types et blocs fonctionnels). Chemins relatifs à la racine du dépôt.\n\n${table(models, true)}\n`);
writeFileSync(join(OUT, 'version.md'),
  `${HEADER}\n\n# Version\n\n- DSFR installé : ${version}\n- Généré le : ${today}\n`);

console.log(`reference/ généré : ${components.length} composants, ${models.length} modèles, DSFR ${version}, ${today}`);
