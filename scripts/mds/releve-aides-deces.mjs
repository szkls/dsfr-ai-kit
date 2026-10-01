// Relève l'outil « aides en cas de décès » (parcours-deces-assistant) : champs du formulaire de situation et liste d'aides.
import { chromium } from 'playwright';
import fs from 'node:fs';
const OUT = new URL('./releves/', import.meta.url).pathname;
const b = await chromium.launch(); const p = await (await b.newContext({ locale: 'fr-FR', viewport: { width: 1248, height: 1000 } })).newPage();
await p.goto('https://www.mesdroitssociaux.gouv.fr/vos-evenements-de-vie/parcours-deces-assistant', { waitUntil: 'networkidle', timeout: 90000 }); await p.waitForTimeout(2500);
await p.evaluate(() => { const x = [...document.querySelectorAll('button')].find((y) => /^fermer$/i.test(y.textContent.trim())); x && x.click(); });
// déplier tout ce qui est repliable dans main
for (let k = 0; k < 2; k++) { await p.evaluate(async () => { for (const e of document.querySelectorAll('main [aria-expanded="false"], main mat-expansion-panel-header')) { try { e.click(); } catch (x) {} await new Promise((r) => setTimeout(r, 100)); } }); await p.waitForTimeout(800); }
const r = await p.evaluate(() => {
  const t = (s) => (s || '').replace(/\s+/g, ' ').trim(); const main = document.querySelector('main');
  const champs = [...main.querySelectorAll('input, select, textarea, mat-select, mat-checkbox, mat-radio-button, mat-slide-toggle')].map((c) => ({ tag: c.tagName.toLowerCase(), type: c.type || '', name: c.name || c.getAttribute('formcontrolname') || '', id: c.id, label: t((c.id && document.querySelector(`label[for="${c.id}"]`)?.textContent) || c.closest('label, mat-checkbox, mat-radio-button, mat-slide-toggle, mat-form-field')?.textContent || c.getAttribute('aria-label') || ''), visible: !!(c.offsetHeight || c.closest('label')?.offsetHeight) }));
  return { texte: main.innerText, champs, html: main.innerHTML.replace(/ _ngcontent-[a-z0-9-]+=""/g, '').replace(/<!--[\s\S]*?-->/g, '').slice(0, 30000) };
});
fs.writeFileSync(`${OUT}deces-aides-complet.json`, JSON.stringify(r, null, 1));
await p.screenshot({ path: `${OUT}deces-aides.png`, fullPage: true });
console.log(r.texte.slice(0, 6000)); console.log(JSON.stringify(r.champs.slice(0, 40)));
await b.close();
