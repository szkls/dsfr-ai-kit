// Ancienne application « Simuler mes aides » (dd1pnds-ria) : tente d'ouvrir chaque étape par son adresse et relève son contenu,
// y compris les fenêtres d'édition ouvertes par les boutons « crayon » ou « ajouter ».
import { chromium } from 'playwright';
import fs from 'node:fs';
const OUT = new URL('./releves/', import.meta.url).pathname;
const b = await chromium.launch(); const ctx = await b.newContext({ locale: 'fr-FR', viewport: { width: 1248, height: 1000 } }); const p = await ctx.newPage();
const BASE = 'https://www.mesdroitssociaux.gouv.fr/dd1pnds-ria/#destination/';
const res = {};
const lire = () => p.evaluate(() => { const t = (s) => (s || '').replace(/\s+/g, ' ').trim(); const main = document.querySelector('main') || document.body; const champs = [...main.querySelectorAll('input, select, textarea, mat-select, button')].filter((c) => c.offsetHeight).map((c) => `${c.tagName.toLowerCase()}${c.type ? ':' + c.type : ''} « ${t(c.textContent || c.getAttribute('aria-label') || c.placeholder || '')} » ${c.name || c.getAttribute('formcontrolname') || ''}`); return { url: location.href, texte: main.innerText, champs }; });
for (const etape of ['simu-foyer', 'simu-situation', 'simu-logement', 'simu-ressources', 'simu-resultat', 'simu-synthese', 'simu-resultats']) {
  await p.goto('about:blank'); await p.goto(BASE + etape, { waitUntil: 'networkidle', timeout: 90000 }); await p.waitForTimeout(2500);
  await p.evaluate(() => { [...document.querySelectorAll('button')].filter((x) => /^(fermer|close)$/i.test(x.textContent.trim())).forEach((x) => x.click()); });
  res[etape] = await lire();
  console.log('=====', etape, '->', res[etape].url, '\n', res[etape].texte.slice(0, 900).replace(/\n+/g, ' | '));
}
// fenêtres d'édition de l'étape foyer
await p.goto('about:blank'); await p.goto(BASE + 'simu-foyer', { waitUntil: 'networkidle' }); await p.waitForTimeout(2500);
await p.evaluate(() => { [...document.querySelectorAll('button')].filter((x) => /^(fermer)$/i.test(x.textContent.trim())).forEach((x) => x.click()); });
const ouvreurs = await p.evaluate(() => [...document.querySelectorAll('main button')].filter((x) => x.offsetHeight).map((x) => x.textContent.replace(/\s+/g, ' ').trim()));
res.dialogues = [];
for (const o of ouvreurs.filter((x) => !/Suivant|Réinitialiser/.test(x))) {
  await p.goto('about:blank'); await p.goto(BASE + 'simu-foyer', { waitUntil: 'networkidle' }); await p.waitForTimeout(2000);
  await p.evaluate((o) => { const x = [...document.querySelectorAll('main button')].find((y) => y.textContent.replace(/\s+/g, ' ').trim() === o); x && x.click(); }, o);
  await p.waitForTimeout(1500);
  const d = await p.evaluate(() => [...document.querySelectorAll('mat-dialog-container, [role=dialog]')].filter((x) => !/gestion des cookies/i.test(x.textContent)).map((x) => ({ texte: x.innerText, champs: [...x.querySelectorAll('input, select, mat-select, button, mat-radio-button, mat-checkbox')].map((c) => `${c.tagName.toLowerCase()}${c.type ? ':' + c.type : ''} « ${(c.textContent || c.getAttribute('aria-label') || c.placeholder || '').replace(/\s+/g, ' ').trim()} » ${c.name || c.getAttribute('formcontrolname') || ''}`) })));
  res.dialogues.push({ ouvreur: o, dialogues: d });
  console.log('-- fenêtre', o, ':', JSON.stringify(d).slice(0, 1200));
}
fs.writeFileSync(`${OUT}mes-aides-etapes.json`, JSON.stringify(res, null, 1));
await b.close();
