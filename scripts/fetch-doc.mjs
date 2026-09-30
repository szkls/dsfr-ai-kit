#!/usr/bin/env node
// Copie la documentation écrite du site officiel systeme-de-design.gouv.fr dans reference/doc/
// (composants, fondamentaux, modèles), un fichier markdown par sujet, sans rien résumer ni couper.
// Le site est protégé par Cloudflare et rendu par JavaScript : on lit les pages avec Playwright
// (déjà installé pour les tests). Relancer : npm run doc   (appelé aussi par npm run index)
//
// Options : --only <mot,mot>  ne traite que les sujets dont l'adresse contient un des mots
//           --concurrency <n> pages lues en parallèle (défaut 4)

import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'reference', 'doc');
const SITE = 'https://www.systeme-de-design.gouv.fr';
const PREFIX = '/version-courante/fr/';
const SECTIONS = { composants: 'composants', fondamentaux: 'fondamentaux', modeles: 'modeles' };
const DSFR_VERSION = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8')).dependencies['@gouvfr/dsfr'];
const TODAY = new Date().toISOString().slice(0, 10);
const NOTICE = 'copié par script, ne pas modifier';

const args = process.argv.slice(2);
const only = (args.includes('--only') ? args[args.indexOf('--only') + 1] : '').split(',').filter(Boolean);
const concurrency = Number(args.includes('--concurrency') ? args[args.indexOf('--concurrency') + 1] : 4);

// ---------------------------------------------------------------------------------------------
// Conversion HTML -> markdown, exécutée DANS le navigateur (fonction autonome, sans dépendance).
// Retourne { title, intro, tab, tabIndex, markdown, links }.
// ---------------------------------------------------------------------------------------------
function convertPage() {
  const root = document.querySelector('.content-editorial') || document.querySelector('main');
  if (!root) return null;
  const abs = (u) => { try { return new URL(u, location.href).href; } catch { return u; } };
  const clean = (s) => s.replace(/\s+/g, ' ');
  const SKIP = ['nav.fr-breadcrumb', '.dsfr-doc-tab-navigation', '.dsfr-doc-edit', 'button', 'script', 'style', 'noscript'];
  const isSkipped = (el) => SKIP.some((s) => el.matches(s));

  // --- texte en ligne ---
  function inline(node) {
    if (node.nodeType === Node.TEXT_NODE) return clean(node.nodeValue);
    if (node.nodeType !== Node.ELEMENT_NODE || isSkipped(node)) return '';
    const el = node;
    const tag = el.tagName.toLowerCase();
    const kids = () => [...el.childNodes].map(inline).join('');
    switch (tag) {
      case 'br': return '  \n';
      case 'img': return el.getAttribute('src') ? `![${clean(el.getAttribute('alt') || '')}](${abs(el.getAttribute('src'))})` : '';
      case 'a': {
        const t = kids().trim(); const h = el.getAttribute('href');
        if (!t) return '';
        return h && !h.startsWith('javascript') ? `[${t}](${abs(h)})` : t;
      }
      case 'b': case 'strong': { const t = kids().trim(); return t ? ` **${t}** ` : ''; }
      case 'i': case 'em': { const t = kids().trim(); return t ? ` *${t}* ` : ''; }
      case 'code': case 'kbd': { const t = el.textContent.trim(); return t ? '`' + t.replace(/`/g, '\\`') + '`' : ''; }
      case 'sup': return `^${kids().trim()}`;
      case 'sub': return kids();
      case 'iframe': return storybook(el);
      default: return kids();
    }
  }
  const para = (el) => inline(el).replace(/[ \t]+/g, ' ').replace(/ ?(  \n) ?/g, '$1').trim();
  function storybook(el) {
    const src = el.getAttribute('src'); if (!src) return '';
    const id = (src.match(/[?&]id=([^&]+)/) || [])[1];
    return `*(Démonstration interactive${id ? ' « ' + id + ' »' : ''} : ${abs(src)})*`;
  }

  // --- blocs ---
  function block(el, depth) {
    if (el.nodeType === Node.TEXT_NODE) { const t = clean(el.nodeValue).trim(); return t ? [t] : []; }
    if (el.nodeType !== Node.ELEMENT_NODE || isSkipped(el)) return [];
    const tag = el.tagName.toLowerCase();
    const m = tag.match(/^h([1-6])$/);
    if (m) {
      const level = Math.min(6, Number(m[1]) + 1); // le titre du fichier est le seul h1
      const t = para(el); return t ? ['#'.repeat(level) + ' ' + t] : [];
    }
    if (tag === 'p') { const t = para(el); return t ? [t] : []; }
    if (tag === 'hr') return ['---'];
    if (tag === 'pre') {
      const code = el.querySelector('code') || el;
      const lang = ((el.className + ' ' + code.className).match(/language-([\w-]+)/) || [])[1] || '';
      return ['```' + lang.toLowerCase() + '\n' + el.textContent.replace(/\n+$/, '') + '\n```'];
    }
    if (tag === 'ul' || tag === 'ol') return [list(el, tag === 'ol', depth)];
    if (tag === 'table') return [table(el)];
    if (tag === 'iframe') return [storybook(el)];
    if (tag === 'img') { const s = inline(el); return s ? [s] : []; }
    if (tag === 'dl') return [dl(el)];
    if (el.matches('.fr-callout, .fr-highlight, .fr-alert, .fr-notice')) return [quote(el)];
    if (el.matches('.dsfr-doc-guideline')) return [guideline(el)];
    if (el.matches('.dsfr-doc-anatomy')) return anatomy(el);
    if (el.matches('.fr-tile, .fr-card')) return [tile(el)];
    if (el.matches('.fr-accordion')) return accordion(el);
    if (el.matches('.fr-tabs')) return tabs(el);
    // conteneur générique : on descend
    const out = [];
    let pending = [];
    const flush = () => { const t = pending.join('').replace(/[ \t]+/g, ' ').trim(); if (t) out.push(t); pending = []; };
    for (const child of el.childNodes) {
      const isInline = child.nodeType === Node.TEXT_NODE || (child.nodeType === Node.ELEMENT_NODE && !isSkipped(child) &&
        ['a', 'b', 'strong', 'i', 'em', 'code', 'span', 'br', 'sup', 'sub', 'kbd', 'small', 'abbr', 'time', 'label'].includes(child.tagName.toLowerCase()) &&
        !child.querySelector('p, ul, ol, table, pre, h1, h2, h3, h4, h5, h6, div'));
      if (isInline) pending.push(inline(child)); else { flush(); out.push(...block(child, depth)); }
    }
    flush();
    return out;
  }
  function list(el, ordered, depth) {
    const items = [];
    let n = 0;
    for (const li of el.children) {
      if (li.tagName.toLowerCase() !== 'li') continue;
      n++;
      const parts = block(li, depth + 1);
      const marker = ordered ? `${n}. ` : '- ';
      const pad = ' '.repeat(marker.length);
      const body = parts.map((p, i) => p.split('\n').map((line, j) => (i === 0 && j === 0 ? marker : pad) + line).join('\n')).join('\n');
      items.push(body || marker.trim());
    }
    return items.join('\n');
  }
  function dl(el) {
    const out = [];
    for (const c of el.children) {
      const t = para(c); if (!t) continue;
      out.push(c.tagName.toLowerCase() === 'dt' ? `- **${t}**` : `  ${t}`);
    }
    return out.join('\n');
  }
  function cell(td) {
    const parts = block(td, 0);
    return parts.join('<br>').replace(/\n/g, '<br>').replace(/\|/g, '\\|').trim();
  }
  function table(el) {
    const rows = [...el.querySelectorAll('tr')].filter((tr) => tr.closest('table') === el);
    if (!rows.length) return '';
    const grid = rows.map((tr) => [...tr.children].map(cell));
    const width = Math.max(...grid.map((r) => r.length));
    grid.forEach((r) => { while (r.length < width) r.push(''); });
    const caption = el.querySelector('caption');
    const head = grid[0], body = grid.slice(1);
    const lines = [];
    if (caption && para(caption)) lines.push(`**${para(caption)}**`, '');
    lines.push('| ' + head.join(' | ') + ' |', '|' + head.map(() => '---').join('|') + '|');
    for (const r of body) lines.push('| ' + r.join(' | ') + ' |');
    return lines.join('\n');
  }
  function quote(el) {
    const titleEl = el.querySelector('.fr-callout__title, .fr-alert__title, .fr-notice__title');
    const title = titleEl ? para(titleEl) : '';
    const rest = [...el.childNodes].filter((n) => n !== titleEl).flatMap((n) => block(n, 0));
    const lines = [];
    if (title) lines.push(`**${title}**`);
    lines.push(...rest.join('\n\n').split('\n'));
    return lines.map((l) => '> ' + l).join('\n');
  }
  function guideline(el) {
    const kind = el.matches('.dsfr-doc-guideline--dont') ? 'À ne pas faire' : 'À faire';
    const titleEl = el.querySelector('.dsfr-doc-guideline__title');
    const title = titleEl ? para(titleEl) : kind;
    const img = el.querySelector('img');
    const text = [...(el.querySelector('.dsfr-doc-guideline__content') || el).childNodes]
      .filter((n) => n !== titleEl && !(n.nodeType === 1 && n.tagName === 'IMG')).flatMap((n) => block(n, 0)).join(' ');
    const lines = [`**${title} :** ${text}`.trim()];
    if (img && img.getAttribute('src')) lines.push(`![${clean(img.getAttribute('alt') || title)}](${abs(img.getAttribute('src'))})`);
    return lines.map((l) => '> ' + l).join('\n');
  }
  function anatomy(el) {
    const out = [];
    const img = el.querySelector('img');
    if (img && img.getAttribute('src')) out.push(`![${clean(img.getAttribute('alt') || 'Anatomie')}](${abs(img.getAttribute('src'))})`);
    const pins = [...el.querySelectorAll('.dsfr-doc-anatomy__pin')];
    if (pins.length) out.push(pins.map((p, i) => `${i + 1}. ${para(p)}`).join('\n'));
    else out.push(...[...el.children].filter((c) => c !== img).flatMap((c) => block(c, 0)));
    return out;
  }
  function tile(el) {
    const parts = [];
    const title = el.querySelector('.fr-tile__title, .fr-card__title');
    if (title) parts.push(`**${para(title)}**`);
    for (const sel of ['.fr-tile__detail', '.fr-card__detail', '.fr-tile__desc', '.fr-card__desc', '.fr-tile__start', '.fr-card__start', '.fr-tile__end', '.fr-card__end']) {
      for (const p of el.querySelectorAll(sel)) { const t = block(p, 0).join(' '); if (t) parts.push(t); }
    }
    return '- ' + parts.join('  \n  ');
  }
  // les intitulés d'accordéons et d'onglets sont des boutons : on lit leur texte directement
  const btnText = (b) => clean(b.textContent).trim();
  function accordion(el) {
    const out = [];
    for (const btn of el.querySelectorAll('.fr-accordion__btn')) { const t = btnText(btn); if (t) out.push(`#### ${t}`); }
    for (const c of el.querySelectorAll('.fr-collapse')) out.push(...block(c, 0));
    return out;
  }
  function tabs(el) {
    const out = [];
    const labels = [...el.querySelectorAll('.fr-tabs__tab')].map(btnText);
    const panels = [...el.querySelectorAll('.fr-tabs__panel')];
    panels.forEach((p, i) => { if (labels[i]) out.push(`#### ${labels[i]}`); out.push(...block(p, 0)); });
    return out;
  }

  // --- en-tête de page : le titre est le h1, ou à défaut le premier titre placé avant les onglets
  //     (les pages « accessibilité » commencent par un h2) ---
  const nav = root.querySelector('.dsfr-doc-tab-navigation');
  let h1 = root.querySelector('h1');
  if (!h1) {
    for (const c of root.children) {
      if (c === nav) break;
      if (/^H[1-3]$/.test(c.tagName)) { h1 = c; break; }
    }
  }
  const title = h1 ? para(h1) : document.title.replace(/\s*-\s*Système de Design de l’État\s*$/, '');
  let intro = '';
  if (h1) { const next = h1.nextElementSibling; if (next && next.tagName === 'P') intro = para(next); }
  let tab = '', tabIndex = 0;
  if (nav) {
    const tabsEls = [...nav.querySelectorAll('.dsfr-doc-tab-navigation__tab')];
    const cur = tabsEls.findIndex((t) => t.tagName !== 'A' || t.getAttribute('aria-current'));
    tabIndex = cur < 0 ? 0 : cur;
    tab = cur < 0 ? '' : clean(tabsEls[cur].textContent).trim();
  }

  // --- corps : tout sauf h1, chapô, fil d'Ariane, onglets ---
  const parts = [];
  for (const child of root.childNodes) {
    if (child === h1) continue;
    if (h1 && child === h1.nextElementSibling && child.tagName === 'P') continue;
    parts.push(...block(child, 0));
  }
  const markdown = parts.join('\n\n').replace(/\n{3,}/g, '\n\n').trim();
  const links = [...new Set([...root.querySelectorAll('a[href]')].map((a) => a.getAttribute('href')).filter(Boolean).map((h) => h.split('#')[0].split('?')[0]))];
  return { title, intro, tab, tabIndex, markdown, links, pageTitle: document.title };
}

// ---------------------------------------------------------------------------------------------
// Découverte des pages : plan du site + liens internes (union), limitée aux trois sections.
// ---------------------------------------------------------------------------------------------
const sectionOf = (path) => { const m = path.match(/^\/version-courante\/fr\/(composants|fondamentaux|modeles)\/(.+)$/); return m ? { section: m[1], rest: m[2] } : null; };

async function discover(page) {
  const found = new Set();
  await page.goto(SITE + '/sitemap.xml', { waitUntil: 'domcontentloaded', timeout: 90000 });
  const xml = await page.content();
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const path = m[1].replace(SITE, '').split('#')[0].split('?')[0];
    if (sectionOf(path)) found.add(path);
  }
  for (const sec of Object.keys(SECTIONS)) {
    await page.goto(SITE + PREFIX + sec, { waitUntil: 'domcontentloaded', timeout: 90000 });
    await page.waitForTimeout(1000);
    const links = await page.evaluate(() => [...document.querySelectorAll('a[href]')].map((a) => a.getAttribute('href')));
    for (const h of links) { const p = (h || '').split('#')[0].split('?')[0]; if (sectionOf(p)) found.add(p); }
  }
  return found;
}

// ---------------------------------------------------------------------------------------------
// Lecture d'une page avec reprise (Cloudflare, réseau).
// ---------------------------------------------------------------------------------------------
async function readPage(page, path) {
  let lastErr = '';
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      await page.goto(SITE + path, { waitUntil: 'domcontentloaded', timeout: 90000 });
      const title = await page.title();
      if (/just a moment|attention required/i.test(title)) throw new Error('page de vérification Cloudflare');
      await page.waitForSelector('.content-editorial, main', { timeout: 30000 });
      await page.waitForLoadState('networkidle', { timeout: 5000 }).catch(() => {});
      const data = await page.evaluate(convertPage);
      if (!data || !data.markdown) throw new Error('contenu vide');
      return data;
    } catch (e) {
      lastErr = e.message;
      await page.waitForTimeout(3000 * attempt);
    }
  }
  throw new Error(`${path} : ${lastErr}`);
}

// ---------------------------------------------------------------------------------------------
// Regroupement par sujet et écriture des fichiers.
// ---------------------------------------------------------------------------------------------
const RANK = { presentation: 0, design: 1, code: 2, accessibilite: 3, demonstration: 4 };
function kindOf(section, rest) {
  const segs = rest.split('/');
  if (section === 'composants') {
    if (segs.length === 1) return { subject: segs[0], kind: 'presentation' };
    const k = (segs[1].match(/^(design|code|accessibilite|demonstration)-/) || [])[1] || segs[1];
    return { subject: segs[0], kind: k };
  }
  if (section === 'fondamentaux') return { subject: segs[0], kind: segs.length === 1 ? 'presentation' : segs[1] };
  // modèles : un fichier par sujet feuille ; les deux pages d'entrée ont leur propre fichier
  return { subject: segs[segs.length - 1], kind: 'presentation' };
}
const TAB_LABEL = { presentation: 'Présentation', design: 'Design', code: 'Code', accessibilite: 'Accessibilité', demonstration: 'Démonstration' };

// noms techniques : ceux de reference/composants.md, retrouvés via le nom anglais du menu latéral
function technicalNames() {
  const file = join(ROOT, 'reference', 'composants.md');
  if (!existsSync(file)) return [];
  return [...readFileSync(file, 'utf8').matchAll(/^\| [^|]+ \| ([a-z-]+) \| node_modules/gm)].map((m) => m[1]);
}
const KNOWN = technicalNames();
function technicalFor(slug, english) {
  const e = (english || '').toLowerCase().replace(/[^a-z]/g, '');
  if (e && KNOWN.includes(e)) return e;
  if (e) return e; // composant du site absent du paquet : on garde son nom anglais
  return slug;
}

function slugify(s) {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function header(title, sources, section) {
  return [
    `# ${title}`,
    '',
    `> Source : ${sources.map((s) => SITE + s).join(' · ')}`,
    `> Section : ${section} · Récupéré le : ${TODAY} · DSFR ${DSFR_VERSION} (package.json) · ${NOTICE}`,
    '',
  ].join('\n');
}

async function main() {
  mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ locale: 'fr-FR' });
  const page = await ctx.newPage();
  console.log('Découverte des pages…');
  const paths = await discover(page);
  console.log(`${paths.size} pages trouvées (plan du site + liens des sections).`);

  // menu latéral des composants : « Bouton (Button) » -> nom anglais
  await page.goto(SITE + PREFIX + 'composants/bouton', { waitUntil: 'domcontentloaded', timeout: 90000 });
  await page.waitForTimeout(1000);
  const english = await page.evaluate(() => {
    const out = {};
    for (const a of document.querySelectorAll('.fr-sidemenu__link[href*="/composants/"]')) {
      const slug = a.getAttribute('href').split('/composants/')[1].split('/')[0];
      const m = a.textContent.match(/\(([^)]+)\)/);
      if (slug && m) out[slug] = m[1].trim();
    }
    return out;
  });
  await page.close();

  // lecture en parallèle
  const queue = [...paths].filter((p) => !only.length || only.some((w) => p.includes(w))).sort();
  const results = new Map();
  const failures = [];
  let done = 0;
  const worker = async () => {
    const p = await ctx.newPage();
    while (queue.length) {
      const path = queue.shift();
      try {
        const data = await readPage(p, path);
        results.set(path, data);
        for (const l of data.links) if (sectionOf(l) && !paths.has(l) && !results.has(l)) { paths.add(l); queue.push(l); }
      } catch (e) { failures.push(e.message); }
      done++;
      if (done % 20 === 0 || !queue.length) console.log(`  ${done} page(s) lue(s)…`);
    }
    await p.close();
  };
  await Promise.all(Array.from({ length: concurrency }, worker));
  await browser.close();

  // regroupement
  const subjects = new Map(); // key section/subject -> { section, subject, pages: [] }
  for (const [path, data] of results) {
    const { section, rest } = sectionOf(path);
    const { subject, kind } = kindOf(section, rest);
    const key = `${section}/${subject}`;
    if (!subjects.has(key)) subjects.set(key, { section, subject, pages: [] });
    subjects.get(key).pages.push({ path, kind, ...data });
  }

  if (!only.length) for (const sec of Object.values(SECTIONS)) rmSync(join(OUT, sec), { recursive: true, force: true });
  const index = [];
  for (const { section, subject, pages } of [...subjects.values()].sort((a, b) => a.section.localeCompare(b.section) || a.subject.localeCompare(b.subject))) {
    pages.sort((a, b) => (RANK[a.kind] ?? 10 + a.tabIndex) - (RANK[b.kind] ?? 10 + b.tabIndex) || a.path.localeCompare(b.path));
    const first = pages[0];
    const fileBase = section === 'composants' ? technicalFor(subject, english[subject]) : slugify(subject);
    const dir = join(OUT, SECTIONS[section]);
    mkdirSync(dir, { recursive: true });
    const file = join(dir, `${fileBase}.md`);
    const body = [header(first.title, pages.map((p) => p.path), section)];
    if (first.intro) body.push(first.intro, '');
    for (const pg of pages) {
      const label = pg.tab || TAB_LABEL[pg.kind] || pg.title;
      body.push(`## ${label}`, '', `> Page : ${SITE + pg.path}`, '');
      if (pg !== first && pg.intro && pg.intro !== first.intro) body.push(pg.intro, '');
      body.push(pg.markdown, '');
    }
    writeFileSync(file, body.join('\n').replace(/\n{3,}/g, '\n\n'));
    index.push({ section, subject, technical: section === 'composants' ? fileBase : undefined, title: first.title, file: `reference/doc/${SECTIONS[section]}/${fileBase}.md`, pages: pages.map((p) => ({ url: SITE + p.path, kind: p.kind, tab: p.tab, title: p.pageTitle })) });
  }

  // index machine (lu par build-index.mjs et par les tests) et concaténation humaine
  if (!only.length) {
    writeFileSync(join(OUT, 'index.json'), JSON.stringify({ site: SITE, fetched: TODAY, dsfr: DSFR_VERSION, pages: results.size, failures, subjects: index }, null, 2) + '\n');
    concat(index);
  }

  console.log(`\n${results.size} page(s) copiée(s), ${index.length} fichier(s) écrit(s) dans reference/doc/.`);
  for (const sec of Object.keys(SECTIONS)) console.log(`  ${sec} : ${index.filter((i) => i.section === sec).length} sujet(s), ${index.filter((i) => i.section === sec).reduce((n, i) => n + i.pages.length, 0)} page(s)`);
  if (failures.length) { console.error(`\n${failures.length} page(s) NON récupérée(s) :\n  ` + failures.join('\n  ')); process.exitCode = 1; }
}

function concat(index) {
  const order = ['composants', 'fondamentaux', 'modeles'];
  const label = { composants: 'Composants', fondamentaux: 'Fondamentaux', modeles: 'Modèles' };
  const out = [
    '# Documentation DSFR (copie du site officiel)', '',
    `> Concaténation de tous les fichiers de reference/doc/, pour lecture humaine. Les skills lisent les fichiers unitaires.`,
    `> Source : ${SITE} · Récupéré le : ${TODAY} · DSFR ${DSFR_VERSION} · ${NOTICE}`, '',
    '## Sommaire', '',
  ];
  const anchor = (t) => slugify(t);
  for (const sec of order) {
    out.push(`- **${label[sec]}**`);
    for (const s of index.filter((i) => i.section === sec)) out.push(`  - [${s.title}](#${anchor(s.title)}) (${s.file})`);
  }
  out.push('');
  for (const sec of order) {
    out.push(`---`, '', `# ${label[sec]}`, '');
    for (const s of index.filter((i) => i.section === sec)) {
      const txt = readFileSync(join(ROOT, s.file), 'utf8');
      out.push(txt.trim(), '');
    }
  }
  writeFileSync(join(OUT, 'DOCUMENTATION-DSFR.md'), out.join('\n'));
}

main().catch((e) => { console.error(e); process.exit(1); });
