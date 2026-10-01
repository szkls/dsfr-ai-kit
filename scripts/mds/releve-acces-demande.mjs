// Parcourt le simulateur jusqu'au résultat puis relève la destination des boutons de la fenêtre « Accéder à la demande ».
import { chromium } from 'playwright';
import fs from 'node:fs';
const OUT = new URL('./releves/', import.meta.url).pathname;
const res = {};
const browser = await chromium.launch({ headless: true });
for (const prime of ['prime-naissance', 'prime-adoption']) {
  const ctx = await browser.newContext({ locale: 'fr-FR', viewport: { width: 1248, height: 1000 } }); const page = await ctx.newPage();
  await page.goto(`https://www.mesdroitssociaux.gouv.fr/votre-simulateur/${prime}/formulaire-foyer`, { waitUntil: 'networkidle' }); await page.waitForTimeout(1500);
  await page.evaluate(() => { const b = [...document.querySelectorAll('button')].find((x) => /^fermer$/i.test(x.textContent.trim())); b && b.click(); });
  await page.click('label:has-text("Célibataire")');
  const inputs = page.locator('main input.fr-input'); const vals = ['1', '1', '14', '03', '2027'];
  for (let i = 0; i < 5; i++) { await inputs.nth(i).click(); await inputs.nth(i).type(vals[i]); }
  await page.click('main button:has-text("Suivant")'); await page.waitForTimeout(2000);
  await page.locator('main input.fr-input').first().type('15000'); await page.click('main button:has-text("Suivant")'); await page.waitForTimeout(2000);
  await page.click('main button:has-text("Voir le résultat")'); await page.waitForTimeout(3000);
  await page.click('main button:has-text("Accéder à la demande")'); await page.waitForTimeout(800);
  res[prime] = [];
  for (const lab of ['Faire une demande à la MSA', 'Faire une demande à la CAF']) {
    const [popup] = await Promise.all([ctx.waitForEvent('page', { timeout: 6000 }).catch(() => null), page.evaluate((lab) => { const b = [...document.querySelectorAll('button, a')].find((x) => x.textContent.includes(lab)); return b && (b.getAttribute('href') || b.click()); }, lab)]);
    let url = null; if (popup) { await popup.waitForLoadState('domcontentloaded').catch(() => {}); url = popup.url(); await popup.close(); }
    const href = await page.evaluate((lab) => [...document.querySelectorAll('button, a')].find((x) => x.textContent.includes(lab))?.getAttribute('href'), lab);
    res[prime].push({ libelle: lab, href, onglet: url, page: page.url() });
  }
  await ctx.close();
}
fs.writeFileSync(`${OUT}acces-demande.json`, JSON.stringify(res, null, 1)); console.log(JSON.stringify(res, null, 1));
await browser.close();
