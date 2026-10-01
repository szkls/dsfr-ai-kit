// Ouvre chaque actualité (boutons « Lire la suite » sans adresse) et relève l'article : adresse, titre, date, contenu, liens.
import { chromium } from 'playwright';
import fs from 'node:fs';
const OUT = new URL('./releves/', import.meta.url).pathname;
const browser = await chromium.launch({ headless: true });
const page = await (await browser.newContext({ locale: 'fr-FR', viewport: { width: 1248, height: 1000 } })).newPage();
const LISTE = 'https://www.mesdroitssociaux.gouv.fr/accueil/actualites';
const load = async (u) => { await page.goto('about:blank'); await page.goto(u, { waitUntil: 'networkidle', timeout: 90000 }); await page.waitForTimeout(1800); await page.evaluate(() => { const b = [...document.querySelectorAll('button')].find((x) => /^fermer$/i.test(x.textContent.trim())); b && b.click(); window.__o = null; window.open = (u) => { window.__o = String(u); return null; }; }); };
await load(LISTE);
const n = await page.evaluate(() => [...document.querySelectorAll('main [role=link]')].filter((e) => /Lire la suite/.test(e.textContent)).length);
const articles = [];
for (let i = 0; i < n; i++) {
  await load(LISTE);
  const carte = await page.evaluate((i) => { const t = (s) => (s || '').replace(/\s+/g, ' ').trim(); const e = [...document.querySelectorAll('main [role=link]')].filter((x) => /Lire la suite/.test(x.textContent))[i]; let c = e; while (c && !c.querySelector('h2,h3,h4')) c = c.parentElement; const r = { titre: t(c?.querySelector('h2,h3,h4')?.textContent), resume: t(c?.innerText).replace(/keyboard_arrow_right Lire la suite/, '') }; e.click(); return r; }, i);
  await page.waitForTimeout(2500);
  const art = await page.evaluate(() => {
    const t = (s) => (s || '').replace(/\s+/g, ' ').trim(); const main = document.querySelector('main'); const out = [];
    const walk = (el) => { for (const ch of el.children) { if (['SCRIPT', 'STYLE', 'svg', 'MAT-ICON'].includes(ch.tagName) || !ch.offsetHeight && ch.tagName !== 'A') continue; const tag = ch.tagName.toLowerCase();
      if (/^h[1-6]$/.test(tag)) { out.push({ k: 'h' + tag[1], texte: t(ch.textContent) }); continue; }
      if (tag === 'p') { const s = t(ch.textContent); if (s) out.push({ k: 'p', texte: s, liens: [...ch.querySelectorAll('a[href]')].map((a) => ({ texte: t(a.textContent), href: a.getAttribute('href') })) }); continue; }
      if (tag === 'li' && !ch.querySelector('ul,ol,p,div')) { out.push({ k: 'li', texte: t(ch.textContent), liens: [...ch.querySelectorAll('a[href]')].map((a) => ({ texte: t(a.textContent), href: a.getAttribute('href') })) }); continue; }
      if (tag === 'a') { out.push({ k: 'lien', texte: t(ch.textContent), href: ch.getAttribute('href') }); continue; }
      if (tag === 'button' || ch.getAttribute('role') === 'link') { const s = t(ch.textContent).replace(/^(keyboard_arrow_right|keyboard_arrow_left|arrow_forward|open_in_new)\s*/, ''); if (s) out.push({ k: 'bouton', texte: s }); continue; }
      if (tag === 'img') { out.push({ k: 'image', alt: ch.getAttribute('alt') || '' }); continue; }
      if (tag === 'table') { out.push({ k: 'tableau', lignes: [...ch.querySelectorAll('tr')].map((tr) => [...tr.children].map((c) => t(c.textContent))) }); continue; }
      if (ch.children.length) walk(ch); else { const s = t(ch.textContent); if (s) out.push({ k: 'texte', texte: s }); } } };
    walk(main); return out;
  });
  // destinations des boutons de l'article (sauf retour)
  const url = page.url(); const dest = [];
  for (const b of art.filter((x) => x.k === 'bouton' && !/^Revenir/.test(x.texte))) {
    await load(url);
    await page.evaluate((lab) => { window.__o = null; const e = [...document.querySelectorAll('main button, main [role=link]')].find((x) => x.textContent.replace(/\s+/g, ' ').includes(lab)); e && e.click(); }, b.texte);
    await page.waitForTimeout(1500);
    dest.push({ texte: b.texte, ouvre: await page.evaluate(() => window.__o).catch(() => null), url: page.url() !== url ? page.url() : null });
  }
  articles.push({ ...carte, url, contenu: art, destinations: dest });
  console.log(i + 1, url, '|', art.length, 'blocs |', dest.length, 'boutons');
}
fs.writeFileSync(`${OUT}articles.json`, JSON.stringify(articles, null, 1));
await browser.close();
