// Relevé d'une page de mesdroitssociaux.gouv.fr : structure lisible (titres, paragraphes, listes, liens, champs),
// classes fr-* conservées, destination des liens-boutons relevée en cliquant (window.open intercepté).
// Usage : node scripts/mds/releve-page.mjs <nom> <chemin> [--clics]
import { chromium } from 'playwright';
import fs from 'node:fs';
const [,, nom, chemin, opt] = process.argv;
const OUT = new URL('./releves/', import.meta.url).pathname;
const CIBLE = chemin.startsWith('http') ? chemin : 'https://www.mesdroitssociaux.gouv.fr' + chemin;
const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ locale: 'fr-FR', viewport: { width: 1248, height: 900 } });
const page = await ctx.newPage();
const load = async () => { await page.goto('about:blank'); await page.goto(CIBLE, { waitUntil: 'networkidle', timeout: 90000 }); await page.waitForTimeout(2000);
  await page.evaluate(() => { const b = [...document.querySelectorAll('button')].find((x) => /^fermer$/i.test(x.textContent.trim())); b && b.click(); window.__o = null; window.open = (u) => { window.__o = String(u); return null; }; }); await page.waitForTimeout(300); };
await load();
// déplier les accordéons et contenus repliés avant le relevé
await page.evaluate(async () => { for (const b of document.querySelectorAll('main [aria-expanded="false"], main mat-expansion-panel-header')) { const c = b.getAttribute('aria-controls'); const cible = c && document.getElementById(c); if (cible && (cible.classList.contains('fr-modal') || cible.tagName === 'DIALOG')) continue; if (b.closest('nav, .fr-breadcrumb')) continue; try { b.click(); } catch (e) {} await new Promise((r) => setTimeout(r, 80)); } });
await page.waitForTimeout(600);
const data = await page.evaluate(() => {
  const t = (s) => (s || '').replace(/\s+/g, ' ').trim();
  const root = document.querySelector('main') || document.body; const out = [];
  const cls = (e) => { const c = (e.getAttribute('class') || '').split(/\s+/).filter((x) => /^fr-/.test(x)).join('.'); return c ? ` {${c}}` : ''; };
  const lk = (el) => [...el.querySelectorAll('a[href]')].map((a) => ` [lien "${t(a.textContent)}" -> ${a.getAttribute('href')}${a.target === '_blank' ? ' (nouvelle fenêtre)' : ''}]`).join('');
  const walk = (el) => { for (const ch of el.children) {
    if (['SCRIPT', 'STYLE', 'svg', 'MAT-ICON', 'HEADER', 'FOOTER'].includes(ch.tagName)) continue;
    if (!(ch.offsetHeight || ['A', 'INPUT'].includes(ch.tagName))) continue; const tag = ch.tagName.toLowerCase();
    if (/^h[1-6]$/.test(tag)) { out.push('#'.repeat(+tag[1]) + ' ' + t(ch.textContent) + cls(ch) + lk(ch)); continue; }
    if (tag === 'p') { const s = t(ch.textContent); if (s) out.push(s + cls(ch) + lk(ch)); continue; }
    if (tag === 'li' && !ch.querySelector('ul,ol,p,div,h2,h3,h4')) { out.push('- ' + t(ch.textContent) + cls(ch) + lk(ch)); continue; }
    if (tag === 'a') { out.push(`[lien "${t(ch.textContent)}" -> ${ch.getAttribute('href')}${ch.target === '_blank' ? ' (nouvelle fenêtre)' : ''}]` + cls(ch)); continue; }
    if (tag === 'button' || ch.getAttribute('role') === 'link') { const s = t(ch.textContent).replace(/^(keyboard_arrow_right|arrow_forward|open_in_new)\s*/, ''); if (s) out.push(`[bouton "${s}"]` + cls(ch)); continue; }
    if (tag === 'label' || tag === 'legend') { out.push(`[${tag} "${t(ch.textContent)}"]` + cls(ch)); continue; }
    if (['input', 'select', 'textarea'].includes(tag)) { out.push(`[${tag} type=${ch.type} name=${ch.name} id=${ch.id}${tag === 'select' ? ' options=' + [...ch.options].map((o) => o.text).join('|') : ''}]`); continue; }
    if (tag === 'img') { out.push(`[image alt="${ch.getAttribute('alt') || ''}"]`); continue; }
    if (tag === 'table') { out.push('[tableau]\n' + [...ch.querySelectorAll('tr')].map((tr) => '| ' + [...tr.children].map((c) => t(c.textContent)).join(' | ') + ' |').join('\n')); continue; }
    const c = cls(ch); if (c && /fr-(card|tile|callout|highlight|accordion|alert|notice|stepper|badges-group|tags-group)(?![-_])/.test(c)) out.push(`<${c.slice(2, -1)}>`);
    if (ch.children.length) walk(ch); else { const s = t(ch.textContent); if (s && s.length < 3000) out.push(s + c); } } };
  walk(root);
  const h1 = [...root.querySelectorAll('h1')].filter((h) => h.offsetHeight).map((h) => t(h.textContent));
  return { h1, title: document.title, lignes: out.filter((l, i, a) => l && l !== a[i - 1]) };
});
// destinations des boutons et liens-boutons
if (opt === '--clics') {
  const libelles = await page.evaluate(() => [...(document.querySelector('main') || document.body).querySelectorAll('button, [role="link"]')].filter((e) => e.offsetHeight && !e.closest('header, footer')).map((e) => e.textContent.replace(/\s+/g, ' ').trim()).filter(Boolean));
  data.destinations = [];
  const vus = new Set();
  for (let i = 0; i < libelles.length; i++) {
    const lab = libelles[i]; const k = lab + '#' + libelles.slice(0, i).filter((x) => x === lab).length; if (vus.has(k)) continue; vus.add(k);
    if (/^(fermer|Tout accepter|Tout refuser|Enregistrer)/i.test(lab)) continue;
    const n = libelles.slice(0, i).filter((x) => x === lab).length;
    await page.evaluate(({ lab, n }) => { window.__o = null; const el = [...(document.querySelector('main') || document.body).querySelectorAll('button, [role="link"]')].filter((e) => e.offsetHeight && !e.closest('header, footer') && e.textContent.replace(/\s+/g, ' ').trim() === lab)[n]; el && el.click(); }, { lab, n });
    await page.waitForTimeout(1500);
    const o = await page.evaluate(() => window.__o).catch(() => null);
    const u = page.url();
    const dlg = await page.evaluate(() => [...document.querySelectorAll('mat-dialog-container')].map((d) => d.innerText.replace(/\s+/g, ' ').slice(0, 200)).join(' || ')).catch(() => '');
    data.destinations.push({ libelle: lab, ouvre: o, url: u !== CIBLE ? u : null, fenetre: dlg || null });
    if (u !== CIBLE || dlg) await load();
  }
}
fs.writeFileSync(`${OUT}${nom}.json`, JSON.stringify({ url: CIBLE, ...data }, null, 1));
await page.screenshot({ path: `${OUT}${nom}.png`, fullPage: true });
console.log(`${nom} : ${data.title} | h1 ${JSON.stringify(data.h1)} | ${data.lignes.length} lignes${data.destinations ? ' | ' + data.destinations.length + ' destinations' : ''}`);
await browser.close();
