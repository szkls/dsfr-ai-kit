#!/usr/bin/env node
// Contrôle d'un écran DSFR : npm run check -- <nom-d-ecran>
// Contrôles : 1. fidélité aux snippets officiels, 2. classes inconnues et styles en ligne,
// 3. contenus (faux-texte, libellés génériques), 4. accessibilité (axe) et captures d'écran,
// 5. documentation lue : chaque composant présent a sa ligne « Doc lue : reference/doc/composants/<nom>.md » dans conception.md.
// Rapport : screens/<nom>/rapport-tests.md. Code de sortie 1 si écart au contrôle 1, 2 ou 5.

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

// ---------- Index des composants et des modèles -> pages d'exemple ----------
const components = [];
for (const line of readFileSync(join(ROOT, 'reference', 'composants.md'), 'utf8').split('\n')) {
  const m = line.match(/^\| ([^|]+) \| ([a-z-]+) \| (node_modules[^|]+\.html) \|/);
  if (m) components.push({ title: m[1].trim(), id: m[2], example: m[3].trim() });
}
for (const line of readFileSync(join(ROOT, 'reference', 'modeles.md'), 'utf8').split('\n')) {
  const m = line.match(/^\| (page type|bloc fonctionnel) \| ([^|]+) \| ([a-z/-]+) \| (node_modules[^|]+\.html) \|/);
  if (m) components.push({ title: m[2].trim(), id: m[3], example: m[4].trim() });
}
// Pages d'exemple complémentaires d'un composant : sous-dossiers officiels du paquet (ex. link/back-to-top, link/download,
// tile/download), hors exemples dépréciés.
for (const c of [...components]) {
  const m = c.example.match(/^(node_modules\/@gouvfr\/dsfr\/example\/component\/[a-z-]+)\/index\.html$/);
  if (!m || !existsSync(join(ROOT, m[1]))) continue;
  for (const d of readdirSync(join(ROOT, m[1]), { withFileTypes: true })) {
    if (d.isDirectory() && d.name !== 'deprecated' && existsSync(join(ROOT, m[1], d.name, 'index.html'))) components.push({ ...c, example: `${m[1]}/${d.name}/index.html` });
  }
}
// Attributs de comportement ou d'état : leur présence dépend du contenu, de la page ou du JS du DSFR, pas du composant.
// id : identifiants techniques des exemples ; aria-current : page ou élément courant (navigation, fil d'Ariane) ;
// aria-labelledby : retiré par le JS du DSFR sur les modales de l'en-tête en desktop.
// Parties que la doc du composant déclare facultatives : leur absence n'est pas un écart ; toute autre partie manquante en reste un.
// Tuile : « Une description, optionnelle », « Un texte de détail, optionnel », « Une première zone de détail, composée d'une
// précision sous forme de tags […] ou de badges — En option ». Mise en avant : « Un titre — En option ».
// Modale : « Une icône — En option » dans le titre (span d'icône du titre, voir optionalKey).
const OPTIONAL_PARTS = new Set(['fr-tile__desc', 'fr-tile__detail', 'fr-tile__start', 'fr-callout__title']);
// Modificateurs combinables selon la doc : le type d'une alerte (info, warning, error, success) se combine avec sa taille,
// alors que le paquet ne montre la taille SM qu'en type info ; à taille égale, les types sont interchangeables.
const modifierAxis = (c) => c.replace(/^fr-alert--(info|warning|error|success)$/, 'fr-alert--(type)');
function optionalKey(child, parent) {
  const cls = (child.c || []).find((x) => OPTIONAL_PARTS.has(x));
  if (cls) return cls;
  if ((parent.c || []).includes('fr-modal__title') && child.t === 'span' && [child.p, ...(child.c || [])].some((x) => x && x.startsWith('fr-icon-'))) return 'icone-du-titre';
  return null;
}
const BEHAVIOUR_ATTRS = new Set(['autocomplete', 'spellcheck', 'autocapitalize', 'autocorrect', 'placeholder', 'value', 'required', 'aria-required', 'disabled', 'checked', 'selected', 'readonly', 'maxlength', 'minlength', 'pattern', 'inputmode', 'lang', 'target', 'rel', 'title', 'hreflang', 'download', 'role', 'id', 'aria-current', 'aria-labelledby']);
const IGNORE_ATTRS = [...BEHAVIOUR_ATTRS];

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
  // les classes présentes dans le balisage officiel sont connues même sans règle CSS (ex. fr-footer__content-item)
  for (const f of fragments) for (const m of f.html.matchAll(/class="([^"]*)"/g)) for (const c of m[1].split(/\s+/)) if (c.startsWith('fr-')) knownClasses.add(c);
  const roots = await page.evaluate(snippetRootPrimaries, { fragments, utilityRe: UTILITY_CLASS_RE });
  const normalized = await page.evaluate(normalizeFragments, { fragments, roots, utilityRe: UTILITY_CLASS_RE, ignoreAttrs: IGNORE_ATTRS });
  for (const n of normalized) {
    const meta = fragmentsMeta[n.id];
    for (const it of n.items) {
      (library[it.primary] ??= []).push({ component: meta.component.title, id: meta.component.id, nested: it.nested, variant: it.nested ? `${meta.variant} (élément imbriqué <${it.norm.t}>)` : meta.variant, norm: it.norm });
    }
  }
  // propriétaire d'une classe racine : l'unique composant dont la page d'exemple la présente comme racine d'extrait
  const owners = {};
  for (const [primary, entries] of Object.entries(library)) { const ids = new Set(entries.filter((e) => !e.nested).map((e) => e.id)); if (ids.size === 1) owners[primary] = [...ids][0]; }
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
    const a = await page.evaluate(analyseDocument, { roots, utilityRe: UTILITY_CLASS_RE, ignoreAttrs: IGNORE_ATTRS });

    // 1. Fidélité aux snippets
    const matched = []; // blocs déjà traités (pour retrouver le composant du bloc parent)
    for (const b of a.blocks) {
      const parent = [...matched].reverse().find((m) => b.path.startsWith(m.path + ' > '));
      // les variantes du composant parent sont essayées en premier : un sous-bloc partagé par
      // plusieurs composants (ex. fr-messages-group) est ainsi étiqueté avec le bon composant ;
      // à égalité, une variante racine de la page du composant passe avant un élément imbriqué d'un autre composant
      // (un lien seul est ainsi étiqueté « Lien », pas « Mot de passe ») ; à égalité encore, le composant qui porte le nom de la
      // classe racine passe en premier (fr-modal : Modale plutôt que le panneau du gestionnaire de consentement)
      const own = b.primary.replace(/^fr-/, '');
      const variants = [...(library[b.primary] || [])].sort((x, y) => ((parent && y.id === parent.id) - (parent && x.id === parent.id)) || ((y.id === own) - (x.id === own)) || (x.nested - y.nested));
      let best = null;
      for (const v of variants) {
        const d = diff(b.norm, v.norm, `${b.norm.t}.${b.primary}`);
        if (!best || d.score < best.score) best = { ...d, v };
        if (d.score === 0) break;
      }
      // un bloc de premier niveau (hors de tout autre bloc) est attribué au composant propriétaire de sa classe racine, même si
      // l'extrait le plus proche vient d'une mise en situation d'un autre composant (ex. pagination dans la page des tableaux)
      const ownerId = !parent && owners[b.primary];
      const owner = ownerId ? components.find((c) => c.id === ownerId) : null;
      r1.push({ file, path: b.path, component: owner ? owner.title : best ? best.v.component : '?', id: owner ? owner.id : best ? best.v.id : null, ok: best && best.score === 0, variant: best ? best.v.variant : '—', detail: best ? (best.score === 0 ? 'identique' : best.first) : 'aucun extrait de référence' });
      matched.push({ path: b.path, id: owner ? owner.id : best ? best.v.id : null });
    }
    // 2. Classes inconnues, non-DSFR, styles en ligne
    for (const c of a.classes) {
      if (!c.cls.startsWith('fr-')) r2.push({ file, path: c.path, problem: 'classe hors DSFR (préfixe fr- attendu)', value: c.cls });
      else if (!knownClasses.has(c.cls)) r2.push({ file, path: c.path, problem: 'classe fr-* inconnue du DSFR', value: c.cls });
    }
    // seuls les styles écrits dans le fichier comptent : le JS du DSFR pose lui-même des variables CSS en ligne
    // (ex. --table-offset sur le tableau) selon le moment de l'analyse
    const authoredStyles = [...readFileSync(join(screenDir, file), 'utf8').matchAll(/\sstyle="([^"]*)"/g)].map((m) => m[1].trim()).filter(Boolean);
    for (const s of a.styles) if (authoredStyles.some((v) => s.value.includes(v) || v.includes(s.value.trim()))) r2.push({ file, path: s.path, problem: 'attribut style en ligne', value: s.value });
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

  // ---------- 5. Documentation lue par composant (conception.md) ----------
  // Tout composant du paquet présent dans l'écran doit avoir, dans conception.md, une ligne
  // « Doc lue : reference/doc/composants/<nom-technique>.md » (la copie de la doc du site, voir scripts/fetch-doc.mjs).
  const conceptionPath = join(screenDir, 'conception.md');
  const conception = existsSync(conceptionPath) ? readFileSync(conceptionPath, 'utf8') : '';
  const docRead = new Set([...conception.matchAll(/Doc lue\s*:\s*`?reference\/doc\/composants\/([a-z-]+)\.md`?/g)].map((m) => m[1]));
  const componentIds = new Set(components.filter((c) => c.example.includes('/example/component/')).map((c) => c.id));
  const used = new Map();
  for (const x of r1) if (x.id && componentIds.has(x.id) && !used.has(x.id)) used.set(x.id, x.component);
  const r5 = [];
  for (const [id, title] of [...used].sort((a, b) => a[0].localeCompare(b[0]))) {
    const docFile = `reference/doc/composants/${id}.md`;
    const hasDoc = existsSync(join(ROOT, docFile));
    const read = docRead.has(id);
    r5.push({ id, title, docFile, ok: read, detail: read ? 'ligne « Doc lue » présente' : (conception ? 'ligne « Doc lue » absente de conception.md' : 'conception.md absent') + (hasDoc ? '' : ' ; fichier de doc introuvable, lancer npm run doc') });
  }

  // ---------- Rapport ----------
  const n1 = r1.filter((x) => !x.ok).length, n2 = r2.length, n3 = r3.length, n4 = r4.length, n5 = r5.filter((x) => !x.ok).length;
  const blocking = n1 + n2 + n5;
  const md = [];
  md.push(`# Rapport de tests : ${screenName}`, '', `Généré par tests/check.mjs le ${new Date().toISOString().slice(0, 10)} — DSFR ${JSON.parse(readFileSync(join(PKG, 'package.json'), 'utf8')).version} — fichiers : ${files.join(', ')}`, '');
  md.push(`**Verdict : ${blocking === 0 ? 'CONFORME' : 'NON CONFORME'} — ${n1} écart(s) de snippet, ${n2} classe(s) inconnue(s) ou style(s) en ligne, ${n3} problème(s) de contenu, ${n4} violation(s) axe, ${n5} composant(s) sans ligne « Doc lue ».**`, '');
  md.push('## 1. Fidélité aux snippets officiels', '', `${r1.length} bloc(s) de composant analysé(s) contre les extraits des pages d'exemple des composants et des modèles (blocs fonctionnels). Tolérances : textes, valeurs d'attributs, attributs supplémentaires, attributs de comportement ou d'état (autocomplete, spellcheck, required, id, aria-current, aria-labelledby…), niveau des titres h1 à h6, classes d'espacement et de grille, lignes de liste libres en nombre et en ordre (chaque ligne doit correspondre à un type de ligne de l'exemple), sous-composant imbriqué interchangeable (un lien à la place d'un bouton), chacun étant comparé à part contre ses propres variantes, contenu libre du bloc refermable des accordéons. Un bloc est conforme s'il correspond à au moins une variante.`, '');
  md.push('| Fichier | Endroit | Composant | Résultat | Variante la plus proche | Détail |', '|---|---|---|---|---|---|');
  for (const x of r1) md.push(`| ${x.file} | ${cell(x.path)} | ${cell(x.component)} | ${x.ok ? 'conforme' : '**écart**'} | ${cell(x.variant)} | ${cell(x.detail)} |`);
  if (!r1.length) md.push('| — | — | — | aucun bloc de composant trouvé | — | — |');
  md.push('', '## 2. Classes inconnues et styles en ligne', '', 'Classes connues : celles des deux CSS du paquet et celles du balisage des extraits officiels.', '', '| Fichier | Endroit | Problème | Valeur |', '|---|---|---|---|');
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
  md.push('', '## 5. Documentation lue par composant', '', `Chaque composant du paquet présent dans l'écran doit avoir dans \`conception.md\` une ligne « Doc lue : reference/doc/composants/<nom-technique>.md » (copie intégrale de la doc du site, \`npm run doc\`). Un composant sans cette ligne est un écart bloquant.`, '', '| Composant | Fichier de doc attendu | Résultat | Détail |', '|---|---|---|---|');
  for (const x of r5) md.push(`| ${cell(x.title)} (${x.id}) | ${x.docFile} | ${x.ok ? 'conforme' : '**écart**'} | ${cell(x.detail)} |`);
  if (!r5.length) md.push('| — | — | aucun composant du paquet identifié | — |');
  md.push('');
  const reportPath = join(screenDir, 'rapport-tests.md');
  writeFileSync(reportPath, md.join('\n'));
  console.log(`\nRapport : ${relative(ROOT, reportPath)}`);
  console.log(`Verdict : ${blocking === 0 ? 'CONFORME' : 'NON CONFORME'} — ${n1} écart(s) de snippet, ${n2} classe(s)/style(s), ${n3} contenu(s), ${n4} violation(s) axe, ${n5} composant(s) sans « Doc lue ».`);
  process.exitCode = blocking > 0 ? 1 : 0;
} finally {
  await browser.close();
  await server.close();
}

// ---------- Comparaison structurelle ----------
function diff(a, b, path) {
  let score = 0, first = null;
  const note = (m, w = 1) => { score += w; if (!first) first = m; };
  const lbl = (n) => `<${n.t}${n.p ? '.' + n.p : ''}>`;
  // un sous-composant (bouton, lien…) imbriqué est comparé à part, contre ses propres variantes : ici seule sa présence compte,
  // quel que soit son élément (la doc autorise par exemple un lien ou un bouton dans une mise en avant)
  if (a.b || b.b) { if (!!a.b !== !!b.b) note(`${path} : sous-composant ${a.b ? 'inattendu' : 'attendu'} ${lbl(a.b ? a : b)}`, 3); return { score, first }; }
  if (a.t !== b.t) { note(`${path} : balise ${lbl(a)} au lieu de ${lbl(b)}`, 5); return { score, first }; }
  const ac = a.c.map(modifierAxis), bc = b.c.map(modifierAxis);
  for (const m of b.c.filter((x) => !ac.includes(modifierAxis(x)))) note(`${path} : classe ${m} manquante`);
  for (const e of a.c.filter((x) => !bc.includes(modifierAxis(x)))) note(`${path} : classe ${e} en trop`);
  for (const m of b.a.filter((x) => !BEHAVIOUR_ATTRS.has(x) && !a.a.includes(x))) note(`${path} : attribut ${m} manquant`);
  // listes (ul, ol) : les lignes d'un écran sont libres en nombre et en ordre ; chaque ligne doit correspondre à un type de ligne de l'exemple
  if ((a.t === 'ul' || a.t === 'ol') && a.k.length && b.k.length) {
    for (const ca of a.k) {
      let bestD = null;
      for (const cb of b.k) { const d = diff(ca, cb, `${path} > ${ca.t}${ca.p ? '.' + ca.p : ''}`); if (!bestD || d.score < bestD.score) bestD = d; if (bestD.score === 0) break; }
      score += bestD.score; if (!first && bestD.first) first = bestD.first;
    }
    return { score, first };
  }
  const bk = b.k.filter((c) => { const key = optionalKey(c, b); return !key || a.k.some((x) => optionalKey(x, a) === key); });
  const n = Math.max(a.k.length, bk.length);
  for (let i = 0; i < n; i++) {
    const ca = a.k[i], cb = bk[i];
    if (!ca) { note(`${path} : élément ${lbl(cb)} manquant`, 2); continue; }
    if (!cb) { note(`${path} : élément ${lbl(ca)} en trop`, 2); continue; }
    const d = diff(ca, cb, `${path} > ${ca.t}${ca.p ? '.' + ca.p : ''}`);
    score += d.score; if (!first && d.first) first = d.first;
  }
  return { score, first };
}
function cell(s) { return String(s ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' '); }
