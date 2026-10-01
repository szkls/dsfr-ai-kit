// « Simuler mes aides » : fenêtre « Ajouter des ressources » de l'étape ressources et fenêtres de l'étape logement.
import { chromium } from 'playwright';
import fs from 'node:fs';
const OUT = new URL('./releves/', import.meta.url).pathname;
const b = await chromium.launch(); const p = await (await b.newContext({ locale: 'fr-FR', viewport: { width: 1248, height: 1000 } })).newPage();
const res = {};
for (const [etape, bouton] of [['simu-ressources', 'Ajouter des ressources'], ['simu-logement', 'locataire'], ['simu-situation', 'en reprise']]) {
  await p.goto('about:blank'); await p.goto('https://www.mesdroitssociaux.gouv.fr/dd1pnds-ria/#destination/' + etape, { waitUntil: 'networkidle', timeout: 90000 }); await p.waitForTimeout(2000);
  const ok = await p.evaluate((bouton) => { const x = [...document.querySelectorAll('main button, main label, main mat-radio-button, main mat-checkbox')].find((y) => y.offsetHeight && y.textContent.replace(/\s+/g, ' ').trim().startsWith(bouton)); if (!x) return false; x.click(); return true; }, bouton);
  await p.waitForTimeout(1800);
  res[etape] = await p.evaluate(() => ({ dialogues: [...document.querySelectorAll('mat-dialog-container, [role=dialog]')].filter((x) => !/gestion des cookies/i.test(x.textContent)).map((x) => x.innerText), main: (document.querySelector('main') || document.body).innerText, html: (document.querySelector('main') || document.body).innerHTML.replace(/ _ngcontent-[a-z0-9-]+=""/g, '').replace(/<!--[\s\S]*?-->/g, '').slice(0, 12000) }));
  console.log('=====', etape, bouton, ok, '\n', res[etape].dialogues.join('\n---\n').slice(0, 3000), '\nMAIN', res[etape].main.replace(/\n+/g, ' | ').slice(0, 1200));
}
fs.writeFileSync(`${OUT}mes-aides-fenetres.json`, JSON.stringify(res, null, 1));
await b.close();
