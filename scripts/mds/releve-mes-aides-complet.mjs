// « Simuler mes aides » : parcours complet avec une situation modeste (personne seule, 30 ans, locataire, sans ressource).
import { chromium } from 'playwright';
import fs from 'node:fs';
const OUT = new URL('./releves/', import.meta.url).pathname;
const b = await chromium.launch(); const p = await (await b.newContext({ locale: 'fr-FR', viewport: { width: 1248, height: 1000 } })).newPage();
const BASE = 'https://www.mesdroitssociaux.gouv.fr/dd1pnds-ria/#destination/';
const fermer = () => p.evaluate(() => { [...document.querySelectorAll('button')].filter((x) => /^fermer$/i.test(x.textContent.trim()) && !x.closest('mat-dialog-container form')).forEach((x) => x.click()); });
const texte = () => p.evaluate(() => (document.querySelector('main') || document.body).innerText);
const clic = (re) => p.evaluate((re) => { const x = [...document.querySelectorAll('button')].filter((y) => y.offsetHeight).find((y) => new RegExp(re).test(y.textContent.replace(/\s+/g, ' ').trim())); if (!x) return null; x.click(); return x.textContent.replace(/\s+/g, ' ').trim(); }, re);
const out = {};
await p.goto(BASE + 'simu-foyer', { waitUntil: 'networkidle', timeout: 90000 }); await p.waitForTimeout(2500); await fermer();
// données personnelles
console.log('ouvre', await clic('VOUS')); await p.waitForTimeout(2000);
const nbDlg = await p.evaluate(() => [...document.querySelectorAll('[role=dialog], mat-dialog-container, .cdk-overlay-pane')].map((d) => d.tagName + ':' + d.innerText.slice(0, 60).replace(/\n/g, ' ')));
console.log('dialogues', JSON.stringify(nbDlg));
const dlg = p.locator('.cdk-overlay-pane:has-text("Préciser vos données personnelles")').last();
await dlg.locator('input[type=text]').first().fill('Camille').catch(() => {});
const dates = dlg.locator('input[type=text]:not(:first-child)');
console.log('textes dans la fenêtre', await dlg.locator('input[type=text]').count(), await dlg.evaluate((d) => [...d.querySelectorAll('input')].map((i) => i.type + '|' + (i.getAttribute('aria-label') || i.placeholder || i.name)).join(' ; ')).catch((e) => e.message));
console.log('champs date :', await dates.count());
const vals = ['12', '05', '1995']; for (let i = 0; i < Math.min(3, await dates.count()); i++) { await dates.nth(i).fill(vals[i]); }
await dlg.locator('label:has-text("Féminin"), mat-radio-button:has-text("Féminin")').first().click().catch(() => {});
await dlg.locator('button:has-text("Valider")').click(); await p.waitForTimeout(1500);
out.foyer = await texte(); console.log('FOYER', out.foyer.replace(/\n+/g, ' | ').slice(0, 500));
await clic('^Suivant'); await p.waitForTimeout(2000); out.situation = await texte(); console.log('SITUATION', out.situation.replace(/\n+/g, ' | ').slice(0, 400));
await clic('^Suivant'); await p.waitForTimeout(2000); out.logement1 = await texte();
// logement : code postal, locataire, loyer
const cp = p.locator('main input[type=text], main input:not([type])').first(); await cp.fill('75011'); await p.waitForTimeout(1500);
await p.locator('mat-option, [role=option]').first().click().catch(() => {});
await p.locator('main label:has-text("locataire"), main mat-radio-button:has-text("locataire"), main button:has-text("locataire")').first().click().catch(() => {});
await p.waitForTimeout(1200); out.logement = await texte(); console.log('LOGEMENT', out.logement.replace(/\n+/g, ' | ').slice(0, 900));
const champsLog = await p.evaluate(() => [...document.querySelectorAll('main input')].filter((i) => i.offsetHeight).map((i) => i.getAttribute('aria-label') || i.placeholder || i.name || i.id));
console.log('champs logement', champsLog);
const inputs = p.locator('main input[type=text]:visible, main input[type=number]:visible');
for (let i = 1; i < await inputs.count(); i++) { if (!(await inputs.nth(i).inputValue())) await inputs.nth(i).fill('450'); }
await clic('^Suivant'); await p.waitForTimeout(2000); out.ressources = await texte(); console.log('RESSOURCES', out.ressources.replace(/\n+/g, ' | ').slice(0, 600));
const rfr = p.locator('main input:visible').first(); await rfr.fill('0').catch(() => {});
// fenêtre « Ajouter des ressources »
await clic('Ajouter des ressources'); await p.waitForTimeout(1500);
out.dialogueRessources = await p.evaluate(() => [...document.querySelectorAll('mat-dialog-container')].map((d) => d.innerText).join('\n----\n'));
console.log('DIALOGUE RESSOURCES', out.dialogueRessources.replace(/\n+/g, ' | ').slice(0, 2500));
await p.evaluate(() => { const d = [...document.querySelectorAll('mat-dialog-container')].pop(); if (d) [...d.querySelectorAll('button')].find((x) => /Annuler|fermer/i.test(x.textContent))?.click(); }); await p.waitForTimeout(800);
await clic('aucune ressource'); await p.waitForTimeout(800);
await clic('^Suivant'); await p.waitForTimeout(4000);
out.resultat = await texte(); console.log('RESULTAT', out.resultat.replace(/\n+/g, ' | ').slice(0, 4000));
out.liensResultat = await p.evaluate(() => [...document.querySelectorAll('main a[href], main button')].filter((x) => x.offsetHeight).map((x) => x.textContent.replace(/\s+/g, ' ').trim() + ' -> ' + (x.getAttribute('href') || '')));
fs.writeFileSync(`${OUT}mes-aides-complet.json`, JSON.stringify(out, null, 1));
await p.screenshot({ path: `${OUT}mes-aides-resultat.png`, fullPage: true });
await b.close();
