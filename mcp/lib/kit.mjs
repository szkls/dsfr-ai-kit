// Accès en lecture au kit DSFR pour le serveur MCP : reference/ (index et copie de la doc), fiches/,
// templates/, screens/, skills/ et le paquet node_modules/@gouvfr/dsfr (pages d'exemple).
// Aucune donnée propre : tout est relu à chaque appel, une montée de version du DSFR suffit à mettre à jour.

import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, resolve, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
const DATA_DIR = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'data');

export const read = (rel) => readFileSync(join(ROOT, rel), 'utf8');
export const exists = (rel) => existsSync(join(ROOT, rel));
export const norm = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// ---------- utilitaires ----------
export function decode(s) {
  return s.replace(/&#39;/g, "'").replace(/&#x27;/g, "'").replace(/&#34;/g, '"').replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&');
}
function cells(line) {
  return line.replace(/^\|\s?/, '').replace(/\s?\|$/, '').split(/(?<!\\)\|/).map((c) => c.trim().replace(/\\\|/g, '|'));
}
function tableRows(markdown) {
  return markdown.split('\n').filter((l) => /^\| /.test(l) && !/^\|\s*-{3}/.test(l) && !/^\|-{3}/.test(l)).map(cells);
}
const docLink = (cell) => (cell.match(/\((https?:[^)]+)\)/) || [])[1] || '';

// ---------- index : composants et modèles ----------
export function components() {
  if (!exists('reference/composants.md')) return [];
  const rows = tableRows(read('reference/composants.md')).filter((r) => r[1] && /^[a-z-]+$/.test(r[1]) && r[2]?.startsWith('node_modules'));
  return rows.map((r) => ({ title: r[0], id: r[1], example: r[2], variants: r[3], css: r[4], docUrl: docLink(r[5] || ''), docFile: r[6] && r[6] !== '—' ? r[6] : '' }));
}
export function models() {
  if (!exists('reference/modeles.md')) return [];
  const rows = tableRows(read('reference/modeles.md')).filter((r) => /^(page type|bloc fonctionnel)$/.test(r[0]));
  return rows.map((r) => ({ category: r[0], title: r[1], id: r[2], example: r[3], variants: r[4], css: r[5], docUrl: docLink(r[6] || ''), docFile: modelDocFile(r[2], docLink(r[6] || '')) }));
}
export function docIndex() {
  return exists('reference/doc/index.json') ? JSON.parse(read('reference/doc/index.json')) : null;
}
// modèle du paquet -> fichier de doc du site : par le dernier segment de l'URL de doc, avec deux alias
// (le site nomme « adresse-electronique » et « numero-de-telephone » ce que le paquet appelle email et tel)
const MODEL_ALIAS = { email: 'adresse-electronique', tel: 'numero-de-telephone' };
function modelDocFile(id, docUrl) {
  const idx = docIndex(); if (!idx) return '';
  const last = (docUrl || '').split('/').filter(Boolean).pop() || '';
  const wanted = MODEL_ALIAS[last] || last;
  const subj = idx.subjects.find((s) => s.section === 'modeles' && (s.subject === wanted || s.subject === norm(id)));
  return subj && exists(subj.file) ? subj.file : '';
}
export function version() {
  return exists('reference/version.md') ? (read('reference/version.md').match(/DSFR installé : ([\d.]+)/) || [])[1] || '' : '';
}

// ---------- documentation copiée ----------
export function docText(file) { return file && exists(file) ? read(file) : ''; }
// résumé d'usage en une ligne : première phrase du chapô du fichier de doc
export function docSummary(file) {
  const txt = docText(file); if (!txt) return '';
  const lines = txt.split('\n');
  let i = 0;
  while (i < lines.length && (!lines[i].trim() || lines[i].startsWith('#') || lines[i].startsWith('>'))) i++;
  const p = (lines[i] || '').replace(/\*\*/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').trim();
  if (!p || p.startsWith('## ')) return '';
  const m = p.match(/^.*?[.!?](\s|$)/);
  return (m ? m[0] : p).trim().slice(0, 300);
}
export function fiche(id) { return exists(`fiches/${id}.md`) ? read(`fiches/${id}.md`) : ''; }

// ---------- recherche d'un composant / fondamental / modèle par nom ----------
export function findComponent(q) {
  const n = norm(q), list = components(), idx = docIndex();
  const bySite = idx?.subjects.find((s) => s.section === 'composants' && (s.subject === n || s.technical === n || norm(s.title) === n));
  let c = list.find((x) => x.id === n || norm(x.title) === n || (bySite && x.id === bySite.technical));
  if (!c && bySite) return { siteOnly: bySite }; // documenté sur le site mais absent du paquet : pas de rapprochement approximatif
  if (!c) { const part = list.filter((x) => x.id.includes(n) || norm(x.title).includes(n)); if (part.length === 1) c = part[0]; }
  return c || null;
}
const FUNDAMENTAL_ALIAS = { couleur: 'couleurs', couleurs: 'couleurs', typo: 'typographie', typographie: 'typographie', grille: 'grille-et-points-de-rupture', grilles: 'grille-et-points-de-rupture', 'grille-et-mise-en-page': 'grille-et-points-de-rupture', 'points-de-rupture': 'grille-et-points-de-rupture', espacement: 'espacement', espacements: 'espacement', icone: 'icone', icones: 'icone', icons: 'icone', pictogramme: 'pictogramme', pictogrammes: 'pictogramme', 'icones-et-pictogrammes': 'icone', ombres: 'systeme-d-ombres-et-d-elevation', medias: 'medias', principes: 'les-principes-a-respecter', favicon: 'icone-de-favori' };
export function fundamentals() {
  const dir = 'reference/doc/fondamentaux';
  if (!exists(dir)) return [];
  return readdirSync(join(ROOT, dir)).filter((f) => f.endsWith('.md')).map((f) => { const file = `${dir}/${f}`; const name = f.replace(/\.md$/, ''); return { name, file, title: (docText(file).match(/^# (.+)$/m) || [])[1] || name, summary: docSummary(file) }; });
}
export function findFundamental(q) {
  const n = FUNDAMENTAL_ALIAS[norm(q)] || norm(q);
  const list = fundamentals();
  return list.find((f) => f.name === n || norm(f.title) === n) || list.find((f) => f.name.includes(n)) || null;
}
export function findModel(q) {
  const n = norm(q), list = models();
  return list.find((m) => norm(m.id) === n || norm(m.title) === n || (m.docUrl && m.docUrl.split('/').pop() === n) || (m.docFile && m.docFile.endsWith(`/${n}.md`)))
    || (list.filter((m) => norm(m.id).includes(n) || norm(m.title).includes(n)).length === 1 ? list.find((m) => norm(m.id).includes(n) || norm(m.title).includes(n)) : null);
}

// ---------- extraits de code des pages d'exemple du paquet ----------
// Chaque page d'exemple alterne titres de variante (h2/h3/h4) et blocs « Extrait de code » (<pre><code>).
export function snippets(examplePath) {
  if (!examplePath || !exists(examplePath)) return [];
  const html = read(examplePath);
  const out = [];
  let heading = '';
  const re = /<h([2-4])(\s[^>]*)?>([\s\S]*?)<\/h\1>|<pre[^>]*>\s*<code[^>]*>([\s\S]*?)<\/code>\s*<\/pre>/g;
  for (const m of html.matchAll(re)) {
    if (m[1]) {
      if (/fr-modal__title/.test(m[2] || '')) continue;
      const t = decode(m[3].replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim();
      if (t && t !== 'Extrait de code') heading = t;
    } else {
      const code = decode(m[4]).replace(/\n+$/, '');
      if (/<[a-z]/i.test(code)) out.push({ variant: heading || '(sans titre)', html: code });
    }
  }
  return out;
}
export function subPages(exampleFile) {
  const dir = dirname(join(ROOT, exampleFile));
  const out = [];
  (function walk(d) {
    if (!existsSync(d)) return;
    for (const name of readdirSync(d).sort()) {
      const p = join(d, name);
      if (!statSync(p).isDirectory()) continue;
      if (existsSync(join(p, 'index.html'))) out.push(relative(ROOT, join(p, 'index.html')));
      walk(p);
    }
  })(dir);
  return out;
}
// corps utile d'une page type : de <main> à </main> (sinon le body entier)
export function pageBody(file) {
  const html = docText(file);
  const m = html.match(/<main[\s\S]*?<\/main>/) || html.match(/<body[\s\S]*?<\/body>/);
  return m ? m[0] : html;
}

// ---------- templates (écrans de référence de l'équipe) ----------
export function templates() {
  if (!exists('templates')) return [];
  return readdirSync(join(ROOT, 'templates')).filter((n) => statSync(join(ROOT, 'templates', n)).isDirectory() && exists(`templates/${n}/index.html`)).map((n) => {
    const dir = `templates/${n}`;
    const ficheFile = ['fiche.md', 'README.md', 'brief.md'].map((f) => `${dir}/${f}`).find(exists) || '';
    const states = readdirSync(join(ROOT, dir)).filter((f) => /^etat-.*\.html$/.test(f)).sort();
    return { name: n, dir, ficheFile, states, summary: ficheFile ? docSummary(ficheFile) || read(ficheFile).split('\n').find((l) => l.trim() && !l.startsWith('#')) || '' : '' };
  });
}

// ---------- écrans produits ----------
export function screen(nom) {
  const dir = `screens/${nom}`;
  if (!exists(dir) || !statSync(join(ROOT, dir)).isDirectory()) return null;
  const files = readdirSync(join(ROOT, dir));
  const has = (f) => files.includes(f);
  return {
    name: nom, dir,
    brief: has('brief.md') ? read(`${dir}/brief.md`) : '',
    conception: has('conception.md') ? read(`${dir}/conception.md`) : '',
    index: has('index.html') ? read(`${dir}/index.html`) : '',
    states: files.filter((f) => /^etat-.*\.html$/.test(f)).sort(),
    review: has('review.md') ? read(`${dir}/review.md`) : '',
    report: has('rapport-tests.md') ? read(`${dir}/rapport-tests.md`) : '',
    files: files.filter((f) => !f.startsWith('.')).sort()
  };
}
export function screens() {
  if (!exists('screens')) return [];
  return readdirSync(join(ROOT, 'screens')).filter((n) => !n.startsWith('_') && statSync(join(ROOT, 'screens', n)).isDirectory());
}
export function skill(name) { return exists(`skills/${name}/SKILL.md`) ? read(`skills/${name}/SKILL.md`) : ''; }
export function briefTemplate() {
  for (const f of ['reference/brief-gabarit.md', 'skills/dsfr-designer/reference/brief-gabarit.md']) if (exists(f)) return { file: f, text: read(f) };
  return null;
}

// ---------- recherche plein texte dans la doc copiée (et les fiches) ----------
const fold = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
export function searchDoc(query, { max = 20, fiches = true } = {}) {
  const words = fold(query).split(/\s+/).filter(Boolean);
  if (!words.length) return [];
  const files = [];
  for (const sec of ['composants', 'fondamentaux', 'modeles']) {
    const dir = `reference/doc/${sec}`;
    if (exists(dir)) for (const f of readdirSync(join(ROOT, dir))) if (f.endsWith('.md')) files.push(`${dir}/${f}`);
  }
  if (fiches && exists('fiches')) for (const f of readdirSync(join(ROOT, 'fiches'))) if (f.endsWith('.md') && !f.startsWith('_')) files.push(`fiches/${f}`);
  const hits = [];
  for (const file of files) {
    const heads = [];
    let para = [];
    const flush = () => {
      if (!para.length) return;
      const text = para.join('\n');
      const f = fold(text);
      if (words.every((w) => f.includes(w))) {
        const score = words.reduce((n, w) => n + f.split(w).length - 1, 0);
        hits.push({ file, heading: heads.filter(Boolean).join(' › '), excerpt: text.length > 700 ? text.slice(0, 700) + '…' : text, score });
      }
      para = [];
    };
    for (const line of read(file).split('\n')) {
      const h = line.match(/^(#{1,6}) (.+)$/);
      if (h) { flush(); const lvl = h[1].length; heads.length = lvl; heads[lvl - 1] = h[2].replace(/\*\*/g, ''); continue; }
      if (!line.trim()) { flush(); continue; }
      para.push(line);
    }
    flush();
  }
  return hits.sort((a, b) => b.score - a.score || a.file.localeCompare(b.file)).slice(0, max);
}

// ---------- données réalistes (mcp/data/*.json, enrichissables) ----------
export function dataTypes() {
  return existsSync(DATA_DIR) ? readdirSync(DATA_DIR).filter((f) => f.endsWith('.json')).map((f) => f.replace(/\.json$/, '')).sort() : [];
}
function rng(seed) {
  let h = 2166136261;
  for (const ch of String(seed)) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); }
  return () => { h += 0x6D2B79F5; let t = h; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
export function realisticData(type, count = 5, seed) {
  const t = norm(type);
  const file = join(DATA_DIR, `${t}.json`);
  if (!existsSync(file)) return null;
  const data = JSON.parse(readFileSync(file, 'utf8'));
  const items = Array.isArray(data.items) ? data.items : [];
  const random = rng(seed ?? Date.now());
  const pool = [...items];
  const picked = [];
  while (picked.length < Math.min(count, pool.length)) picked.push(pool.splice(Math.floor(random() * pool.length), 1)[0]);
  const rendered = t === 'dates' ? picked.map(renderDate) : picked;
  return { type: t, description: data.description || '', note: data.note || '', total: items.length, items: rendered, file: relative(ROOT, file) };
}
function renderDate(item) {
  const d = new Date();
  if (item.annee) d.setFullYear(item.annee, (item.mois || 1) - 1, item.jour || 1);
  if (item.decalageJours) d.setDate(d.getDate() + item.decalageJours);
  if (item.decalageMois) d.setMonth(d.getMonth() + item.decalageMois);
  if (item.finDeMois) d.setMonth(d.getMonth() + 1, 0);
  const pad = (n) => String(n).padStart(2, '0');
  return { ...item, 'JJ/MM/AAAA': `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`, 'AAAA-MM-JJ': `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`, long: new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long' }).format(d) };
}

// ---------- tests d'un écran ----------
export function checkScreen(nom) {
  return new Promise((resolveP) => {
    execFile('npm', ['run', 'check', '--', nom], { cwd: ROOT, timeout: 600000, maxBuffer: 64 * 1024 * 1024 }, (err, stdout, stderr) => {
      resolveP({ code: err ? (typeof err.code === 'number' ? err.code : 1) : 0, stdout: String(stdout || ''), stderr: String(stderr || ''), error: err && typeof err.code !== 'number' ? err.message : '' });
    });
  });
}
