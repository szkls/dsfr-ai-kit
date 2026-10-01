// Outil « aides en cas de décès » : répond pas à pas aux questions qui apparaissent et relève chaque état de la page.
import { chromium } from 'playwright';
import fs from 'node:fs';
const OUT = new URL('./releves/', import.meta.url).pathname;
const b = await chromium.launch(); const p = await (await b.newContext({ locale: 'fr-FR', viewport: { width: 1248, height: 1000 } })).newPage();
await p.goto('https://www.mesdroitssociaux.gouv.fr/vos-evenements-de-vie/parcours-deces-assistant', { waitUntil: 'networkidle', timeout: 90000 }); await p.waitForTimeout(2500);
await p.evaluate(() => { const x = [...document.querySelectorAll('button')].find((y) => /^fermer$/i.test(y.textContent.trim())); x && x.click(); });
const etats = []; const faits = new Set();
for (let tour = 0; tour < 14; tour++) {
  const champs = await p.evaluate(() => { const t = (s) => (s || '').replace(/\s+/g, ' ').trim(); const main = document.querySelector('main'); let k = 0;
    return [...main.querySelectorAll('input, mat-select, select')].filter((c) => c.offsetHeight || c.closest('label')?.offsetHeight || c.closest('mat-radio-button, mat-checkbox')?.offsetHeight).map((c) => { const id = 'x' + (k++); c.setAttribute('data-x', id); const box = c.closest('mat-radio-button, mat-checkbox, label'); return { id, tag: c.tagName.toLowerCase(), type: c.type || '', name: c.name || c.getAttribute('formcontrolname') || '', checked: !!c.checked, value: c.value || '', label: t(box?.textContent || c.getAttribute('aria-label') || ''), groupe: t(c.closest('fieldset, mat-radio-group, .question, .form-group, div')?.querySelector('legend, label, p, h3, h4')?.textContent || '') }; }); });
  const texte = await p.evaluate(() => document.querySelector('main').innerText);
  etats.push({ tour, texte, champs });
  // une nouvelle réponse par tour : premier champ non rempli
  const libre = champs.find((c) => !faits.has(c.name + '|' + c.groupe) && ((c.type === 'text' || c.type === 'number') ? !c.value : (c.type === 'radio' || c.type === 'checkbox') ? !champs.some((x) => x.name === c.name && x.checked) : c.tag === 'mat-select'));
  if (!libre) break;
  faits.add(libre.name + '|' + libre.groupe);
  if (libre.type === 'text' || libre.type === 'number') { await p.click(`[data-x="${libre.id}"]`); await p.type(`[data-x="${libre.id}"]`, /âge/i.test(libre.name + libre.groupe) || /Age/.test(libre.name) ? '75' : '1'); await p.keyboard.press('Tab'); }
  else if (libre.tag === 'mat-select') { await p.click(`[data-x="${libre.id}"]`); await p.waitForTimeout(500); await p.click('mat-option >> nth=0').catch(() => {}); }
  else { const lab = await p.evaluate((id) => { const c = document.querySelector(`[data-x="${id}"]`); const l = c.closest('label') || (c.id && document.querySelector(`label[for="${c.id}"]`)) || c.closest('mat-radio-button, mat-checkbox'); l.setAttribute('data-xl', id); return true; }, libre.id); await p.click(`[data-xl="${libre.id}"]`).catch(() => {}); }
  await p.waitForTimeout(1200);
  console.log('tour', tour, ':', libre.name || libre.groupe.slice(0, 40), '=', libre.label.slice(0, 50));
}
// afficher les aides et relever la liste avec ses liens
await p.evaluate(() => { window.open = (u) => { (window.__o ||= []).push(String(u)); return null; }; [...document.querySelectorAll('main button')].find((x) => /Afficher les aides/.test(x.textContent))?.click(); });
await p.waitForTimeout(3000);
for (let k = 0; k < 2; k++) { await p.evaluate(async () => { for (const e of document.querySelectorAll('main [aria-expanded="false"], main mat-expansion-panel-header')) { try { e.click(); } catch (x) {} await new Promise((r) => setTimeout(r, 120)); } }); await p.waitForTimeout(800); }
const resultats = await p.evaluate(() => { const t = (s) => (s || '').replace(/\s+/g, ' ').trim(); const main = document.querySelector('main'); return { texte: main.innerText, liens: [...main.querySelectorAll('a[href]')].map((a) => ({ texte: t(a.textContent), href: a.getAttribute('href') })), boutonsLiens: [...main.querySelectorAll('[role=link], button')].filter((e) => e.offsetHeight).map((e) => t(e.textContent)).filter(Boolean) }; });
// destinations des liens-boutons de la liste
const dest = [];
for (const lab of [...new Set(resultats.boutonsLiens)].filter((x) => !/Réinitialiser|Afficher les aides|Retour au parcours|Haut de page/.test(x))) {
  await p.evaluate((lab) => { window.__o = []; const e = [...document.querySelectorAll('main [role=link], main button')].find((x) => x.offsetHeight && x.textContent.replace(/\s+/g, ' ').trim() === lab); e && e.click(); }, lab);
  await p.waitForTimeout(900); dest.push({ libelle: lab, ouvre: await p.evaluate(() => (window.__o || []).join(' ')) });
}
// chaque aide : texte « En savoir plus » et formulaire à télécharger (par position)
const aides = await p.evaluate(async () => {
  const t = (s) => (s || '').replace(/\s+/g, ' ').trim(); const out = [];
  const savoir = [...document.querySelectorAll('main *')].filter((e) => e.children.length === 0 && t(e.textContent) === 'En savoir plus');
  for (const s of savoir) { (s.closest('button, [role=button], a, [tabindex]') || s).click(); await new Promise((r) => setTimeout(r, 600)); }
  const tele = [...document.querySelectorAll('main [role=link], main button, main a')].filter((e) => /Télécharger le formulaire/.test(e.textContent));
  for (let i = 0; i < tele.length; i++) { window.__o = []; tele[i].click(); await new Promise((r) => setTimeout(r, 500)); out.push({ i, ouvre: (window.__o || []).join(' ') }); }
  return { telechargements: out, texte: document.querySelector('main').innerText };
});
etats.push({ resultats, destinations: dest, aides });
fs.writeFileSync(`${OUT}deces-aides-progressif.json`, JSON.stringify(etats, null, 1));
await p.screenshot({ path: `${OUT}deces-aides-final.png`, fullPage: true });
console.log('---- résultats ----\n' + etats.at(-1).resultats.texte.slice(etats.at(-1).resultats.texte.indexOf('Afficher les aides')).slice(0, 7000)); console.log(JSON.stringify(etats.at(-1).aides.telechargements)); const tx = etats.at(-1).aides.texte; console.log(tx.slice(tx.indexOf('VOUS POURRIEZ'), tx.indexOf('PENSEZ A SIMULER')));
await b.close();
