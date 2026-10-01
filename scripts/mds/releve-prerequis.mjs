// Relève les variantes d'une page de prérequis à questions Oui/Non : pour chaque combinaison (tout Non, puis une question à Oui),
// le texte affiché sous les questions et la destination des boutons.
// Usage : node scripts/mds/releve-prerequis.mjs <nom> <chemin>
import { chromium } from 'playwright';
import fs from 'node:fs';
const [,, nom, chemin] = process.argv;
const OUT = new URL('./releves/', import.meta.url).pathname;
const CIBLE = 'https://www.mesdroitssociaux.gouv.fr' + chemin;
const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ locale: 'fr-FR', viewport: { width: 1248, height: 1000 } });
const page = await ctx.newPage();
const load = async () => { await page.goto('about:blank'); await page.goto(CIBLE, { waitUntil: 'networkidle', timeout: 90000 }); await page.waitForTimeout(1500);
  await page.evaluate(() => { const b = [...document.querySelectorAll('button')].find((x) => /^fermer$/i.test(x.textContent.trim())); b && b.click(); window.__o = null; window.open = (u) => { window.__o = String(u); return null; }; }); };
const groupes = async () => page.evaluate(() => [...new Set([...document.querySelectorAll('main input[type=radio]')].map((r) => r.name))]);
const choisir = async (i, lab) => { const sel = await page.evaluate(({ i, lab }) => { const names = [...new Set([...document.querySelectorAll('main input[type=radio]')].map((r) => r.name))]; const r = [...document.querySelectorAll(`main input[name="${names[i]}"]`)].find((x) => document.querySelector(`label[for="${CSS.escape(x.id)}"]`).textContent.trim() === lab); const l = document.querySelector(`label[for="${CSS.escape(r.id)}"]`); l.setAttribute('data-p', '1'); return '[data-p="1"]'; }, { i, lab }); await page.click(sel); await page.evaluate(() => document.querySelector('[data-p]').removeAttribute('data-p')); await page.waitForTimeout(400); };
const apres = () => page.evaluate(() => { const t = (s) => (s || '').replace(/\s+/g, ' ').trim(); const main = document.querySelector('main'); const last = [...main.querySelectorAll('fieldset')].pop(); const out = []; let n = last; while (n && n !== main) { let s = n.nextElementSibling; while (s) { if (s.offsetHeight) out.push(t(s.innerText).replace(/(keyboard_arrow_right|arrow_forward|open_in_new)/g, '').slice(0, 1500)); s = s.nextElementSibling; } n = n.parentElement; if (out.length) break; } return out; });
const boutons = () => page.evaluate(() => [...document.querySelector('main').querySelectorAll('button, a.fr-btn')].filter((b) => b.offsetHeight && !/Revenir aux simulateurs|Haut de page/.test(b.textContent)).map((b) => b.textContent.replace(/\s+/g, ' ').trim()));
const res = [];
await load(); const n = (await groupes()).length;
for (let k = -1; k < n; k++) {
  await load();
  for (let i = 0; i < n; i++) await choisir(i, i === k ? 'Oui' : 'Non');
  const texte = await apres(); const bs = await boutons(); const dest = [];
  for (const b of bs) { await load(); for (let i = 0; i < n; i++) await choisir(i, i === k ? 'Oui' : 'Non'); await page.evaluate((b) => { window.__o = null; [...document.querySelector('main').querySelectorAll('button, a.fr-btn')].find((x) => x.textContent.replace(/\s+/g, ' ').trim() === b).click(); }, b); await page.waitForTimeout(2500); dest.push({ bouton: b, ouvre: await page.evaluate(() => window.__o).catch(() => null), url: page.url() }); }
  res.push({ oui: k, texte, destinations: dest });
  console.log(`question à Oui : ${k} | ${texte.join(' / ').slice(0, 300)} | ${JSON.stringify(dest)}`);
}
fs.writeFileSync(`${OUT}${nom}-variantes.json`, JSON.stringify(res, null, 1));
await browser.close();
