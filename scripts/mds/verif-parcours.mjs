// Parcourt la simulation du CMG et « Simuler mes aides » en remplissant chaque écran ; signale tout blocage.
import { chromium } from 'playwright';
const U = (process.argv[2] || 'http://localhost:8000/') + 'screens/';
const b = await chromium.launch(); const p = await (await b.newContext()).newPage();
const err = []; p.on('pageerror', (e) => err.push(e.message));
const remplir = async () => p.evaluate(() => {
  const vus = new Set();
  document.querySelectorAll('form input').forEach((i) => {
    if (i.disabled || i.closest('[hidden]')) return;
    if (i.type === 'radio') { if (vus.has(i.name)) return; vus.add(i.name); const l = document.querySelector(`label[for="${i.id}"]`); (l || i).click(); return; }
    if (i.type === 'checkbox') return;
    if (!i.value) { i.value = /annee|year/i.test(i.name + i.id) ? '2027' : /mois|month/i.test(i.name + i.id) ? '03' : /jour|day/i.test(i.name + i.id) ? '14' : i.type === 'number' ? '1' : 'Camille'; i.dispatchEvent(new Event('input', { bubbles: true })); }
  });
});
const suivre = async (depart, n) => {
  await p.goto(U + depart, { waitUntil: 'load' }); const chemin = [];
  for (let k = 0; k < n; k++) {
    chemin.push(p.url().split('/screens/')[1]);
    const form = await p.$('form[data-etape]');
    if (process.env.TRACE) console.log('  …', p.url().split('/screens/')[1], !!form);
    if (form) {
      const avant = p.url();
      await p.click('form[data-etape] button[type=submit]', { timeout: 5000 }); await p.waitForTimeout(500);
      if (p.url() === avant) {
        const erreurs = await p.locator('.fr-message--error').count(); chemin.push(`(envoi vide : ${erreurs} erreur(s))`);
        await remplir(); await p.click('form[data-etape] button[type=submit]', { timeout: 5000 });
      }
    } else {
      const suite = await p.$('main a.fr-btn.fr-icon-arrow-right-line, main a.fr-btn:not(.fr-btn--secondary):not(.fr-btn--tertiary)');
      if (!suite) break; await suite.click();
    }
    await p.waitForLoadState('load'); await p.waitForTimeout(300);
  }
  return chemin;
};
console.log('CMG :', (await suivre('mds-simulation-cmg/index.html', 12)).join(' → '));
console.log('Mes aides :', (await suivre('mds-simulation-mes-aides/index.html', 8)).join(' → '));
// questions conditionnelles de « Simuler mes aides »
await p.goto(U + 'mds-simulation-mes-aides/index.html', { waitUntil: 'load' });
await p.click('label[for="vie-2"]'); await p.waitForTimeout(200);
const conjoint = await p.locator('[data-si="vie=couple"]').isVisible();
await p.click('button[data-afficher="bloc-enfant"]'); await p.waitForTimeout(200);
console.log('conjoint visible si en couple :', conjoint, '| bloc enfant ouvert :', await p.locator('#bloc-enfant').isVisible());
console.log('RSA :', (await suivre('mds-simulation-rsa-pa/index.html', 12)).join(' → '));
console.log('erreurs JS :', err);
await b.close();
