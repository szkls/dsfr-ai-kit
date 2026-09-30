#!/usr/bin/env node
// Contrôle d'un écran DSFR : npm run check -- <nom-d-ecran>
// Contrôles : 1. fidélité aux snippets officiels, 2. classes inconnues et styles en ligne,
// 3. contenus (faux-texte, libellés génériques), 4. accessibilité (axe) et captures d'écran.
// Rapport : screens/<nom>/rapport-tests.md. Code de sortie 1 si écart au contrôle 1 ou 2.

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync, accessSync, statSync } from 'node:fs';
import { join, dirname, resolve, relative, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';
import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import { startServer } from './lib/server.mjs';
import { UTILITY_CLASS_RE, extractSnippets, normalizeFragments, snippetRootPrimaries, analyseDocument } from './lib/browser.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const PKG = join(ROOT, 'node_modules', '@gouvfr', 'dsfr');
const WIDTHS = [320, 576, 768, 992, 1248];

// ---------- 0. Arguments et fichiers de l'écran ----------
const arg = process.argv[2];
if (!arg) { console.error('Usage : npm run check -- <nom-d-ecran>   (dossier screens/<nom>/ ou chemin d\'un dossier)'); process.exit(2); }
const screenDir = existsSync(resolve(ROOT, arg)) && statSync(resolve(ROOT, arg)).isDirectory() ? resolve(ROOT, arg) : join(ROOT, 'screens', arg);
if (!existsSync(screenDir)) { console.error(`Dossier introuvable : ${relative(ROOT, screenDir)}`); process.exit(2); }
const files = readdirSync(screenDir).filter((f) => f === 'index.html' || /^etat-.*\.html$/.test(f)).sort((a, b) => (a === 'index.html' ? -1 : b === 'index.html' ? 1 : a.localeCompare(b)));
if (!files.length) { console.error(`Aucun index.html ni etat-*.html dans ${relative(ROOT, screenDir)}`); process.exit(2); }
const screenName = basename(screenDir);
console.log(`Écran : ${relative(ROOT, screenDir)} (${files.join(', ')})`);

// ---------- Navigateur Playwright (installation si besoin) ----------
try { accessSync(chromium.executablePath()); } catch {
  console.log('Navigateur Playwright absent : installation de Chromium…');
  execSync('npx playwright install chromium', { stdio: 'inherit', cwd: ROOT });
}

// ---------- Index des composants -> pages d'exemple ----------
const components = [];
for (const line of readFileSync(join(ROOT, 'reference', 'composants.md'), 'utf8').split('\n')) {
  const m = line.match(/^\| ([^|]+) \| ([a-z-]+) \| (node_modules[^|]+\.html) \|/);
  if (m) components.push({ title: m[1].trim(), id: m[2], example: m[3].trim() });
}

// ---------- Classes connues du DSFR ----------
const knownClasses = new Set();
for (const css of ['dist/dsfr.min.css', 'dist/utility/utility.min.css']) {
  const text = readFileSync(join(PKG, css), 'utf8');
  for (const m of text.matchAll(/\.(fr-[A-Za-z0-9_-]+)/g)) knownClasses.add(m[1]);
}

const server = await startServer(ROOT);
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1248, height: 800 } });
const page = await ctx.newPage();
const fragmentsMeta = [];
const library = {}; // primary class -> [{component, variant, norm}]
try {
  // ---------- Bibliothèque de snippets officiels ----------
  process.stdout.write('Lecture des extraits officiels… ');
  const fragments = [];
  for (const c of components) {
    if (!existsSync(join(ROOT, c.example))) continue;
    await page.goto(`${server.url}/${c.example}`, { waitUntil: 'domcontentloaded' });
    const snippets = await page.evaluate(extractSnippets);
    for (const s of snippets) { const id = fragments.length; fragments.push({ id, html: s.html }); fragmentsMeta.push({ id, component: c, variant: s.variant }); }
  }
  await page.goto('about:blank');
  const roots = await page.evaluate(snippetRootPrimaries, { fragments, utilityRe: UTILITY_CLASS_RE });
  const normalized = await page.evaluate(normalizeFragments, { fragments, roots, utilityRe: UTILITY_CLASS_RE });
  for (const n of normalized) {
    const meta = fragmentsMeta[n.id];
    for (const it of n.items) {
      (library[it.primary] ??= []).push({ component: meta.component.title, id: meta.component.id, variant: it.nested ? `${meta.variant} (élément imbriqué <${it.norm.t}>)` : meta.variant, norm: it.norm });
    }
  }
  console.log(`${fragments.length} extraits, ${roots.length} classes racines, ${Object.values(library).reduce((s, a) => s + a.length, 0)} variantes.`);

  // ---------- Analyse de chaque fichier ----------
  const r1 = [], r2 = [], r3 = [], r4 = [], captures = [];
  const capDir = join(screenDir, 'captures');
  mkdirSync(capDir, { recursive: true });
  for (const file of files) {
    const rel = relative(ROOT, join(screenDir, file));
    process.stdout.write(`Analyse de ${file}… `);
    await page.setViewportSize({ width: 1248, height: 800 });
    await page.goto(`${server.url}/${rel}`, { waitUntil: 'load' });
    const a = await page.evaluate(analyseDocument, { roots, utilityRe: UTILITY_CLASS_RE });

    // 1. Fidélité aux snippets
    const matched = []; // blocs déjà traités (pour retrouver le composant du bloc parent)
    for (const b of a.blocks) {
      const parent = [...matched].reverse().find((m) => b.path.startsWith(m.path + ' > '));
      // les variantes du composant parent sont essayées en premier : un sous-bloc partagé par
      // plusieurs composants (ex. fr-messages-group) est ainsi étiqueté avec le bon composant
      const variants = [...(library[b.primary] || [])].sort((x, y) => (parent && y.id === parent.id) - (parent && x.id === parent.id));
      let best = null;
      for (const v of variants) {
        const d = diff(b.norm, v.norm, `${b.norm.t}.${b.primary}`);
        if (!best || d.score < best.score) best = { ...d, v };
        if (d.score === 0) break;
      }
      r1.push({ file, path: b.path, component: best ? best.v.component : '?', ok: best && best.score === 0, variant: best ? best.v.variant : '—', detail: best ? (best.score === 0 ? 'identique' : best.first) : 'aucun extrait de référence' });
      matched.push({ path: b.path, id: best ? best.v.id : null });
    }
    // 2. Classes inconnues, non-DSFR, styles en ligne
    for (const c of a.classes) {
      if (!c.cls.startsWith('fr-')) r2.push({ file, path: c.path, problem: 'classe hors DSFR (préfixe fr- attendu)', value: c.cls });
      else if (!knownClasses.has(c.cls)) r2.push({ file, path: c.path, problem: 'classe fr-* inconnue du DSFR', value: c.cls });
    }
    for (const s of a.styles) r2.push({ file, path: s.path, problem: 'attribut style en ligne', value: s.value });
    // 3. Contenus
    const fauxRe = /lorem|ipsum|\bà compléter\b|\[[^\]]*\]|^(titre|texte|libellé|description)\b/i;
    for (const t of a.texts) if (fauxRe.test(t.text)) r3.push({ file, path: t.path, problem: 'faux-texte', value: t.text.slice(0, 80) });
    for (const t of a.attrTexts) if (/\[[^\]]*\]|lorem|ipsum|à modifier|à compléter/i.test(t.value)) r3.push({ file, path: t.path, problem: `faux-texte dans l'attribut ${t.attr}`, value: t.value.slice(0, 80) });
    const genericRe = /^(cliquez ici|cliquer ici|ici|en savoir plus|lire la suite|voir plus|plus d'infos?|link|button)$/i;
    for (const c of a.controls) {
      if (!c.label) r3.push({ file, path: c.path, problem: `${c.tag === 'a' ? 'lien' : 'bouton'} sans libellé`, value: '' });
      else if (genericRe.test(c.label)) r3.push({ file, path: c.path, problem: `libellé générique de ${c.tag === 'a' ? 'lien' : 'bouton'}`, value: c.label });
    }
    // 4. Accessibilité (axe) et captures
    const axe = await new AxeBuilder({ page }).analyze();
    for (const v of axe.violations) r4.push({ file, impact: v.impact || '—', rule: v.id, help: v.help, nodes: v.nodes.length, targets: v.nodes.slice(0, 3).map((n) => n.target.join(' ')).join(' ; ') });
    for (const w of WIDTHS) {
      await page.setViewportSize({ width: w, height: 800 });
      const out = join(capDir, `${file.replace(/\.html$/, '')}-${w}.png`);
      await page.screenshot({ path: out, fullPage: true });
      captures.push(relative(screenDir, out));
    }
    console.log(`${a.blocks.length} blocs, ${axe.violations.length} violation(s) axe.`);
  }

  // ---------- Rapport ----------
  const n1 = r1.filter((x) => !x.ok).length, n2 = r2.length, n3 = r3.length, n4 = r4.length;
  const md = [];
  md.push(`# Rapport de tests : ${screenName}`, '', `Généré par tests/check.mjs le ${new Date().toISOString().slice(0, 10)} — DSFR ${JSON.parse(readFileSync(join(PKG, 'package.json'), 'utf8')).version} — fichiers : ${files.join(', ')}`, '');
  md.push(`**Verdict : ${n1 + n2 === 0 ? 'CONFORME' : 'NON CONFORME'} — ${n1} écart(s) de snippet, ${n2} classe(s) inconnue(s) ou style(s) en ligne, ${n3} problème(s) de contenu, ${n4} violation(s) axe.**`, '');
  md.push('## 1. Fidélité aux snippets officiels', '', `${r1.length} bloc(s) de composant analysé(s). Tolérances : textes, valeurs d'attributs, attributs supplémentaires, classes d'espacement et de grille, répétitions d'éléments identiques (lignes de liste). Un bloc est conforme s'il correspond à au moins une variante de la page d'exemple.`, '');
  md.push('| Fichier | Endroit | Composant | Résultat | Variante la plus proche | Détail |', '|---|---|---|---|---|---|');
  for (const x of r1) md.push(`| ${x.file} | ${cell(x.path)} | ${cell(x.component)} | ${x.ok ? 'conforme' : '**écart**'} | ${cell(x.variant)} | ${cell(x.detail)} |`);
  if (!r1.length) md.push('| — | — | — | aucun bloc de composant trouvé | — | — |');
  md.push('', '## 2. Classes inconnues et styles en ligne', '', '| Fichier | Endroit | Problème | Valeur |', '|---|---|---|---|');
  for (const x of r2) md.push(`| ${x.file} | ${cell(x.path)} | ${x.problem} | ${cell(x.value)} |`);
  if (!r2.length) md.push('| — | — | aucun problème | — |');
  md.push('', '## 3. Contenus', '', '| Fichier | Endroit | Problème | Texte |', '|---|---|---|---|');
  for (const x of r3) md.push(`| ${x.file} | ${cell(x.path)} | ${x.problem} | ${cell(x.value)} |`);
  if (!r3.length) md.push('| — | — | aucun problème | — |');
  md.push('', '## 4. Accessibilité (axe) et rendu', '', '| Fichier | Gravité | Règle | Description | Éléments | Premiers éléments concernés |', '|---|---|---|---|---|---|');
  for (const x of r4) md.push(`| ${x.file} | ${x.impact} | ${x.rule} | ${cell(x.help)} | ${x.nodes} | ${cell(x.targets)} |`);
  if (!r4.length) md.push('| — | — | — | aucune violation | — | — |');
  md.push('', `Captures d'écran (largeurs ${WIDTHS.join(', ')} px) :`, '');
  for (const c of captures) md.push(`- ${c}`);
  md.push('');
  const reportPath = join(screenDir, 'rapport-tests.md');
  writeFileSync(reportPath, md.join('\n'));
  console.log(`\nRapport : ${relative(ROOT, reportPath)}`);
  console.log(`Verdict : ${n1 + n2 === 0 ? 'CONFORME' : 'NON CONFORME'} — ${n1} écart(s) de snippet, ${n2} classe(s)/style(s), ${n3} contenu(s), ${n4} violation(s) axe.`);
  process.exitCode = n1 + n2 > 0 ? 1 : 0;
} finally {
  await browser.close();
  await server.close();
}

// ---------- Comparaison structurelle ----------
function diff(a, b, path) {
  let score = 0, first = null;
  const note = (m, w = 1) => { score += w; if (!first) first = m; };
  const lbl = (n) => `<${n.t}${n.p ? '.' + n.p : ''}>`;
  if (a.t !== b.t) { note(`${path} : balise ${lbl(a)} au lieu de ${lbl(b)}`, 5); return { score, first }; }
  if (a.b || b.b) { if (!!a.b !== !!b.b) note(`${path} : sous-composant ${a.b ? 'inattendu' : 'attendu'} ${lbl(a.b ? a : b)}`, 3); return { score, first }; }
  for (const m of b.c.filter((x) => !a.c.includes(x))) note(`${path} : classe ${m} manquante`);
  for (const e of a.c.filter((x) => !b.c.includes(x))) note(`${path} : classe ${e} en trop`);
  for (const m of b.a.filter((x) => !a.a.includes(x))) note(`${path} : attribut ${m} manquant`);
  const n = Math.max(a.k.length, b.k.length);
  for (let i = 0; i < n; i++) {
    const ca = a.k[i], cb = b.k[i];
    if (!ca) { note(`${path} : élément ${lbl(cb)} manquant`, 2); continue; }
    if (!cb) { note(`${path} : élément ${lbl(ca)} en trop`, 2); continue; }
    const d = diff(ca, cb, `${path} > ${ca.t}${ca.p ? '.' + ca.p : ''}`);
    score += d.score; if (!first && d.first) first = d.first;
  }
  return { score, first };
}
function cell(s) { return String(s ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' '); }
