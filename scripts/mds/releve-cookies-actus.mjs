// Relève le panneau de gestion des cookies (ouvert depuis le pied de page) et la liste paginée des actualités.
import { chromium } from 'playwright';
import fs from 'node:fs';
const OUT = new URL('./releves/', import.meta.url).pathname;
const browser = await chromium.launch({ headless: true });
const page = await (await browser.newContext({ locale: 'fr-FR', viewport: { width: 1248, height: 1000 } })).newPage();
await page.goto('https://www.mesdroitssociaux.gouv.fr/accueil', { waitUntil: 'networkidle', timeout: 90000 }); await page.waitForTimeout(2500);
const panneau = await page.evaluate(() => { const t = (s) => (s || '').replace(/\s+/g, ' ').trim(); const d = [...document.querySelectorAll('mat-dialog-container, [role=dialog], .cdk-overlay-pane')].find((x) => /gestion des cookies/i.test(x.textContent)); if (!d) return null; const out = []; const walk = (el) => { for (const ch of el.children) { const tag = ch.tagName.toLowerCase(); if (['svg', 'mat-icon', 'script'].includes(tag)) continue; if (/^h[1-6]$/.test(tag)) { out.push('#'.repeat(+tag[1]) + ' ' + t(ch.textContent)); continue; } if (tag === 'p') { out.push(t(ch.textContent) + [...ch.querySelectorAll('a[href]')].map((a) => ` [lien "${t(a.textContent)}" -> ${a.getAttribute('href')}]`).join('')); continue; } if (tag === 'a') { out.push(`[lien "${t(ch.textContent)}" -> ${ch.getAttribute('href')}]`); continue; } if (tag === 'button' || ch.getAttribute('role') === 'link') { out.push(`[bouton "${t(ch.textContent).replace(/keyboard_arrow_right\s*/, '')}"]`); continue; } if (tag === 'label') { out.push(`[libellé "${t(ch.textContent)}"]`); continue; } if (tag === 'input') { out.push(`[champ ${ch.type} name=${ch.name}]`); continue; } if (ch.children.length) walk(ch); else if (t(ch.textContent)) out.push(t(ch.textContent)); } }; walk(d); return out.filter((l, i, a) => l && l !== a[i - 1]); });
// destinations des liens du panneau
const liens = [];
for (const lab of ['En savoir plus sur les cookies et les données personnelles', 'Voir les mentions légales de TOLD', 'Voir la politique de confidentialité de Dailymotion', 'Voir la politique de confidentialité de Piano Analytics', 'cliquant ici']) {
  await page.goto('about:blank'); await page.goto('https://www.mesdroitssociaux.gouv.fr/accueil', { waitUntil: 'networkidle', timeout: 90000 }); await page.waitForTimeout(2000);
  const r = await page.evaluate((lab) => { window.__o = null; window.open = (u) => { window.__o = String(u); return null; }; const e = [...document.querySelectorAll('[role=link], a, button')].find((x) => x.textContent.includes(lab)); if (!e) return 'introuvable'; const h = e.getAttribute('href'); e.click(); return h; }, lab);
  await page.waitForTimeout(1500);
  liens.push({ libelle: lab, href: r, ouvre: await page.evaluate(() => window.__o).catch(() => null), url: page.url() });
}
// actualités : trois pages de liste
const actus = [];
await page.goto('https://www.mesdroitssociaux.gouv.fr/accueil/actualites', { waitUntil: 'networkidle', timeout: 90000 }); await page.waitForTimeout(2000);
for (let p = 1; p <= 4; p++) {
  const items = await page.evaluate(() => { const t = (s) => (s || '').replace(/\s+/g, ' ').trim(); return [...document.querySelectorAll('main a[href*="/actualites/"], main [role=link]')].filter((a) => a.offsetHeight).map((a) => ({ texte: t(a.textContent), href: a.getAttribute('href') })); });
  const cartes = await page.evaluate(() => { const t = (s) => (s || '').replace(/\s+/g, ' ').trim(); return [...document.querySelectorAll('main mat-card, main .card, main article, main [class*=card]')].filter((c) => c.offsetHeight && c.querySelector('h2,h3,h4')).map((c) => ({ titre: t(c.querySelector('h2,h3,h4').textContent), texte: t(c.innerText).slice(0, 400) })); });
  actus.push({ page: p, url: page.url(), items, cartes });
  const suivant = await page.evaluate(() => { const b = [...document.querySelectorAll('main button, main a')].find((x) => /suivante|^›$|chevron_right|navigate_next/i.test(x.textContent + ' ' + (x.getAttribute('aria-label') || '')) && !x.disabled); if (!b) return false; b.click(); return true; });
  if (!suivant) break; await page.waitForTimeout(2000);
}
fs.writeFileSync(`${OUT}cookies.json`, JSON.stringify({ panneau, liens }, null, 1));
fs.writeFileSync(`${OUT}actualites-liste.json`, JSON.stringify(actus, null, 1));
console.log('panneau :', panneau && panneau.length, 'lignes ; liens', JSON.stringify(liens.map((l) => [l.libelle.slice(0, 20), l.href, l.ouvre]))); console.log('actus :', actus.map((a) => a.page + ':' + a.items.length + '/' + a.cartes.length).join(' '));
await browser.close();
