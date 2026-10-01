// Parcourt un simulateur public de mesdroitssociaux.gouv.fr étape par étape : relève chaque écran (titres, textes,
// champs avec libellés, aides, options), remplit avec des réponses plausibles et passe à l'écran suivant.
// Aucune donnée n'est envoyée à une administration : ces simulateurs calculent sans dépôt de demande.
// Usage : node scripts/mds/explore-simulateur.mjs <nom> <chemin> [reponses.json]
import { chromium } from 'playwright';
import fs from 'node:fs';
const [,, nom, chemin, repFile] = process.argv;
const OUT = new URL('./releves/', import.meta.url).pathname;
const CIBLE = chemin.startsWith('http') ? chemin : 'https://www.mesdroitssociaux.gouv.fr' + chemin;
const reponses = repFile ? JSON.parse(fs.readFileSync(repFile, 'utf8')) : {};
const browser = await chromium.launch({ headless: true });
const page = await (await browser.newContext({ locale: 'fr-FR', viewport: { width: 1248, height: 1000 } })).newPage();
await page.goto(CIBLE, { waitUntil: 'networkidle', timeout: 90000 }); await page.waitForTimeout(2000);
await page.evaluate(() => { const b = [...document.querySelectorAll('button')].find((x) => /^fermer$/i.test(x.textContent.trim())); b && b.click(); window.open = (u) => { window.__o = String(u); return null; }; });
const etapes = [];
const releve = () => page.evaluate(() => {
  const t = (s) => (s || '').replace(/\s+/g, ' ').trim();
  const root = document.querySelector('main') || document.body; const out = [];
  const cls = (e) => { const c = (e.getAttribute('class') || '').split(/\s+/).filter((x) => /^fr-/.test(x)).join('.'); return c ? ` {${c}}` : ''; };
  const labelOf = (i) => t((i.id && document.querySelector(`label[for="${CSS.escape(i.id)}"]`)?.textContent) || i.closest('label')?.textContent || i.getAttribute('aria-label') || '');
  const walk = (el) => { for (const ch of el.children) {
    if (['SCRIPT', 'STYLE', 'svg', 'MAT-ICON', 'HEADER', 'FOOTER'].includes(ch.tagName)) continue;
    if (!(ch.offsetHeight || ['INPUT', 'A'].includes(ch.tagName))) continue; const tag = ch.tagName.toLowerCase();
    if (/^h[1-6]$/.test(tag)) { out.push('#'.repeat(+tag[1]) + ' ' + t(ch.textContent) + cls(ch)); continue; }
    if (tag === 'p') { const s = t(ch.textContent); if (s) out.push(s + cls(ch) + [...ch.querySelectorAll('a[href]')].map((a) => ` [lien "${t(a.textContent)}" -> ${a.getAttribute('href')}]`).join('')); continue; }
    if (tag === 'li' && !ch.querySelector('ul,ol,p,div,input')) { out.push('- ' + t(ch.textContent) + cls(ch)); continue; }
    if (tag === 'a') { out.push(`[lien "${t(ch.textContent)}" -> ${ch.getAttribute('href')}]` + cls(ch)); continue; }
    if (tag === 'button') { const s = t(ch.textContent); if (s) out.push(`[bouton "${s}"]` + cls(ch)); continue; }
    if (tag === 'legend') { out.push(`[légende "${t(ch.textContent)}"]` + cls(ch)); continue; }
    if (tag === 'label') { if (!ch.control || !['radio', 'checkbox'].includes(ch.control.type)) out.push(`[libellé "${t(ch.textContent)}"]` + cls(ch)); continue; }
    if (tag === 'input') { if (ch.type === 'hidden') continue; out.push(`[champ ${ch.type} name=${ch.name}${['radio', 'checkbox'].includes(ch.type) ? ' « ' + labelOf(ch) + ' »' : ''}${ch.getAttribute('inputmode') ? ' inputmode=' + ch.getAttribute('inputmode') : ''}${ch.required ? ' requis' : ''}]` + cls(ch)); continue; }
    if (tag === 'select') { out.push(`[liste name=${ch.name} options=${[...ch.options].map((o) => t(o.text)).join(' | ')}]` + cls(ch)); continue; }
    if (tag === 'textarea') { out.push(`[zone de texte name=${ch.name}]`); continue; }
    const c = cls(ch); if (c && /fr-(stepper|callout|alert|notice|highlight|accordion|card|tile)(?![-_])/.test(c)) out.push(`<${c.slice(2, -1)}>`);
    if (ch.children.length) walk(ch); else { const s = t(ch.textContent); if (s && s.length < 2000) out.push(s + c); } } };
  walk(root); return out.filter((l, i, a) => l && l !== a[i - 1]);
});
// remplissage : la page marque chaque champ vide et propose une valeur, puis Playwright saisit au clavier ou clique
const remplir = async (rep) => {
  const plan = await page.evaluate((rep) => {
    const root = document.querySelector('main') || document.body; const plan = [];
    const t = (s) => (s || '').replace(/\s+/g, ' ').trim();
    const labelOf = (i) => { let l = t((i.id && document.querySelector(`label[for="${CSS.escape(i.id)}"]`)?.textContent) || i.closest('label')?.textContent || ''); if (!l) { let p = i.previousElementSibling; while (p && p.tagName !== 'LABEL') p = p.previousElementSibling; if (!p && i.parentElement) { p = i.parentElement.previousElementSibling; while (p && p.tagName !== 'LABEL' && !p.querySelector?.('label')) p = p.previousElementSibling; if (p && p.tagName !== 'LABEL') p = p.querySelector('label'); } l = t(p?.textContent || ''); } if (!l) { let a = i.parentElement; for (let k = 0; k < 4 && a && !l; k++, a = a.parentElement) { const lb = a.querySelector('label'); if (lb && !lb.control?.matches('[type=radio],[type=checkbox]')) l = t(lb.textContent); } } return l || t(i.getAttribute('aria-label') || i.placeholder || ''); };
    let n = 0; const mark = (el) => { const k = 'x' + (window.__k = (window.__k || 0) + 1); el.setAttribute('data-explore', k); return `[data-explore="${k}"]`; };
    const groupes = {}; for (const r of root.querySelectorAll('input[type=radio]')) { const vis = r.offsetParent || (r.id && document.querySelector(`label[for="${CSS.escape(r.id)}"]`)?.offsetHeight); if (vis) (groupes[r.name || r.id] ??= []).push(r); }
    for (const [nm, rs] of Object.entries(groupes)) { if (rs.some((r) => r.checked)) continue; const legend = t(rs[0].closest('fieldset')?.querySelector('legend')?.textContent || nm); const voulu = Object.entries(rep).find(([k]) => legend.includes(k)); const ouiNon = rs.length === 2 && rs.map(labelOf).join('|') === 'Oui|Non';
      const cible = (voulu && rs.find((r) => labelOf(r) === voulu[1])) || (ouiNon ? rs[1] : rs[0]); const lab = cible.id && document.querySelector(`label[for="${CSS.escape(cible.id)}"]`); plan.push({ action: 'clic', sel: mark(lab || cible), note: `${legend.slice(0, 70)} = ${labelOf(cible)}` }); }
    const cases = {}; for (const c of root.querySelectorAll('input[type=checkbox]')) { const vis = c.offsetParent || (c.id && document.querySelector(`label[for="${CSS.escape(c.id)}"]`)?.offsetHeight); if (vis) (cases[c.name || c.id] ??= []).push(c); }
    for (const [nm, cs] of Object.entries(cases)) { if (cs.some((c) => c.checked) || cs.length < 2) continue; const legend = t(cs[0].closest('fieldset')?.querySelector('legend')?.textContent || nm); const voulu = Object.entries(rep).find(([k]) => legend.includes(k) || nm === k); if (voulu && voulu[1] === '__aucun__') continue; const cible = (voulu && cs.find((c) => labelOf(c).startsWith(voulu[1]))) || cs[0]; const lab = cible.id && document.querySelector(`label[for="${CSS.escape(cible.id)}"]`); plan.push({ action: 'clic', sel: mark(lab || cible), note: `[case] ${legend.slice(0, 60)} = ${labelOf(cible)}` }); }
    for (const i of root.querySelectorAll('input:not([type=radio]):not([type=checkbox]):not([type=hidden]):not([type=submit]), textarea')) {
      if (!i.offsetParent || i.value) continue; const lab = labelOf(i);
      const ctx = t(i.closest('fieldset')?.querySelector('legend')?.textContent || '') + ' ' + lab;
      const futur = /prévisionnelle|à naître|prévue|arrivée|début|commence/i.test(ctx);
      const voulu = Object.entries(rep).find(([k]) => ctx.includes(k));
      const v = voulu ? voulu[1]
        : i.type === 'date' ? (futur ? '2027-03-14' : '1990-05-12')
        : /^Jour/i.test(lab) ? '14' : /^Mois/i.test(lab) ? (futur ? '03' : '05') : /^Année/i.test(lab) ? (futur ? '2027' : /enfant/i.test(ctx) ? '2020' : '1990')
        : /date|né le|naissance/i.test(lab) ? (futur ? '14/03/2027' : '12/05/1990')
        : /code postal|ville|commune/i.test(lab) ? '75011'
        : /^(nombre|combien)/i.test(lab) ? '1'
        : /âge/i.test(lab) ? '35'
        : /montant|revenu|salaire|€|ressource|loyer|pension|allocation|indemnit/i.test(ctx + ' ' + i.name) || i.type === 'number' || ['numeric', 'decimal'].includes(i.inputMode) ? '1200'
        : /commune|ville/i.test(lab) ? 'Paris' : 'Test';
      plan.push({ action: 'saisie', sel: mark(i), valeur: String(v), note: `${ctx.slice(0, 70)} = ${v}` });
    }
    for (const sl of root.querySelectorAll('select')) { if (!sl.offsetParent || sl.value) continue; const o = [...sl.options].find((x) => x.value && !x.disabled); if (o) plan.push({ action: 'liste', sel: mark(sl), valeur: o.value, note: `[liste] = ${t(o.text)}` }); }
    return plan;
  }, rep);
  for (const p of plan) {
    try {
      if (p.action === 'clic') await page.click(p.sel, { timeout: 3000 });
      else if (p.action === 'saisie') {
        await page.click(p.sel, { timeout: 3000 }); await page.keyboard.press('Meta+A'); await page.type(p.sel, p.valeur, { delay: 30 });
        await page.waitForTimeout(1200);
        // champ à autocomplétion : choisir la première proposition affichée
        const opt = await page.evaluate(() => { const o = [...document.querySelectorAll('[role=option], [role=listbox] li, .autocomplete li, ul[class*=suggest] li')].find((x) => x.offsetHeight); if (!o) return null; o.setAttribute('data-explore-opt', '1'); return o.textContent.replace(/\s+/g, ' ').trim(); });
        if (opt) { await page.click('[data-explore-opt="1"]'); p.note += ' → ' + opt; await page.waitForTimeout(400); } else await page.keyboard.press('Tab');
      }
      else await page.selectOption(p.sel, p.valeur);
    } catch (e) { p.note += ' (échec ' + e.message.slice(0, 40) + ')'; }
    await page.waitForTimeout(120);
  }
  return plan.map((p) => p.note);
};
const suivant = () => page.evaluate(() => {
  const root = document.querySelector('main') || document.body;
  const bs = [...root.querySelectorAll('button, a.fr-btn, input[type=submit]')].filter((b) => b.offsetHeight && !b.disabled);
  const b = bs.find((x) => /^(Suivant|Continuer|Étape suivante|Valider|Enregistrer|Calculer|Voir (le|les|mes) résultats?|Lancer la simulation|Simuler|Commencer|Passer à l'étape|Compléter|Terminer|Accéder aux résultats|Ajouter l'enfant)/i.test((x.textContent || x.value || '').replace(/\s+/g, ' ').trim()));
  if (!b) return null; const lab = (b.textContent || b.value).replace(/\s+/g, ' ').trim(); b.click(); return lab;
});
// déplie les accordéons et lit les fenêtres (modales) ouvertes par les boutons de l'écran
const deplier = async () => {
  const modales = [];
  await page.evaluate(() => { for (const b of document.querySelectorAll('main button[aria-expanded="false"]')) { if (b.closest('.fr-modal')) continue; const c = b.getAttribute('aria-controls'); const cible = c && document.getElementById(c); if (cible && cible.classList.contains('fr-modal')) continue; b.click(); } });
  await page.waitForTimeout(500);
  const ouvreurs = await page.evaluate(() => [...document.querySelectorAll('main button[aria-controls]')].filter((b) => { const c = document.getElementById(b.getAttribute('aria-controls')); return c && c.classList.contains('fr-modal') && b.offsetHeight; }).map((b) => b.getAttribute('aria-controls')));
  for (const id of ouvreurs) {
    await page.evaluate((id) => document.querySelector(`main button[aria-controls="${id}"]`).click(), id); await page.waitForTimeout(700);
    modales.push(await page.evaluate((id) => { const d = document.getElementById(id); const t = (s) => (s || '').replace(/\s+/g, ' ').trim(); return { id, titre: t(d.querySelector('.fr-modal__title, h1, h2')?.textContent), texte: [...d.querySelectorAll('p, li, h3, h4, a')].map((e) => (e.tagName === 'A' ? `[lien "${t(e.textContent)}" -> ${e.getAttribute('href')}]` : (e.tagName === 'LI' ? '- ' : e.tagName.startsWith('H') ? '### ' : '') + t(e.textContent))).filter((x) => x && x !== '- ') }; }, id));
    await page.keyboard.press('Escape'); await page.waitForTimeout(400);
  }
  return modales;
};
const destinations = async () => {
  const url = page.url(); const out = [];
  const libelles = await page.evaluate(() => [...document.querySelectorAll('main a, main button')].filter((e) => e.offsetHeight && !e.getAttribute('aria-expanded') && !/Haut de page/.test(e.textContent)).map((e) => ({ texte: e.textContent.replace(/\s+/g, ' ').trim(), href: e.getAttribute('href') })));
  for (const l of libelles) {
    if (l.href && !l.href.startsWith('#')) { out.push(l); continue; }
    await page.evaluate((txt) => { window.__o = null; window.open = (u) => { window.__o = String(u); return null; }; const e = [...document.querySelectorAll('main a, main button')].find((x) => x.offsetHeight && x.textContent.replace(/\s+/g, ' ').trim() === txt); e && e.click(); }, l.texte);
    await page.waitForTimeout(1500);
    const o = await page.evaluate(() => window.__o).catch(() => null);
    out.push({ ...l, ouvre: o, url: page.url() !== url ? page.url() : null });
    if (page.url() !== url) { await page.goBack().catch(() => {}); await page.waitForTimeout(1500); }
  }
  return out;
};
let ajoutTente = '';
for (let i = 0; i < 25; i++) {
  const url = page.url();
  const prec = etapes[etapes.length - 1];
  if (prec && prec.url === url && (prec.erreurs || []).some((e) => /ajouter/i.test(e)) && ajoutTente !== url) {
    ajoutTente = url;
    const ajout = await page.evaluate(() => { const b = [...document.querySelectorAll('main button, main a')].find((x) => x.offsetHeight && /^Ajouter/.test(x.textContent.replace(/\s+/g, ' ').trim())); if (!b) return null; const l = b.textContent.replace(/\s+/g, ' ').trim(); b.click(); return l; });
    if (ajout) { console.log('   clic sur « ' + ajout + ' »'); await page.waitForTimeout(2000); continue; }
  }
  const modales = await deplier();
  const lignes = await releve();
  await page.screenshot({ path: `${OUT}${nom}-etape-${i + 1}.png`, fullPage: true });
  const fait = await remplir(reponses);
  await page.waitForTimeout(700);
  const apres = await releve(); // champs apparus après réponse (questions conditionnelles)
  const fait2 = await remplir(reponses); await page.waitForTimeout(500);
  const apres2 = fait2.length ? await releve() : apres;
  const fait3 = fait2.length ? await remplir(reponses) : []; await page.waitForTimeout(400);
  const final = fait3.length ? await releve() : apres2;
  const bouton = await suivant();
  etapes.push({ url, lignes, lignesCompletes: final, modales, reponses: [...fait, ...fait2, ...fait3], bouton });
  if (!bouton) etapes[etapes.length - 1].destinations = await destinations();
  console.log(`étape ${i + 1} : ${url} | ${lignes.find((l) => l.startsWith('#')) || ''} | ${fait.length + fait2.length + fait3.length} réponses | bouton ${bouton}`);
  if (!bouton) break;
  await page.waitForTimeout(2500);
  const erreurs = await page.evaluate(() => [...document.querySelectorAll('.fr-error-text, .fr-message--error, .fr-alert--error, [role=alert]')].filter((e) => e.offsetHeight).map((e) => e.textContent.replace(/\s+/g, ' ').trim()).filter(Boolean));
  if (erreurs.length) { etapes[etapes.length - 1].erreurs = erreurs; console.log('   erreurs :', erreurs.join(' / ').slice(0, 300)); }
}
fs.writeFileSync(`${OUT}${nom}.json`, JSON.stringify({ url: CIBLE, etapes }, null, 1));
await browser.close();
