// Visite le prototype comme un usager : part de l'accueil (servi par npm run serve), suit tous les liens internes,
// relève les pages en erreur, les ressources introuvables (404) et les erreurs JavaScript. Teste aussi FranceConnect et le panneau cookies.
import { chromium } from 'playwright';
const BASE = process.argv[2] || 'http://localhost:8000/';
const b = await chromium.launch(); const ctx = await b.newContext(); const p = await ctx.newPage();
const a404 = new Set(), erreursJs = [], vues = new Set(), file = [new URL('screens/mds-accueil/', BASE).href];
p.on('response', (r) => { if (r.status() >= 400 && r.url().startsWith(BASE)) a404.add(`${r.status()} ${r.url()} (depuis ${p.url()})`); });
p.on('pageerror', (e) => erreursJs.push(`${p.url()} : ${e.message}`));
const norm = (u) => { const x = new URL(u); x.hash = ''; x.search = ''; return x.href; };
while (file.length) {
  const u = file.shift(); if (vues.has(u)) continue; vues.add(u);
  const r = await p.goto(u, { waitUntil: 'load' }).catch((e) => null);
  if (!r || r.status() >= 400) { a404.add(`${r ? r.status() : 'échec'} ${u}`); continue; }
  const liens = await p.evaluate(() => [...document.querySelectorAll('a[href]')].map((a) => a.href));
  for (const l of liens) { if (!l.startsWith(BASE)) continue; const n = norm(l); if (/\.(pdf|png|jpg|svg|css|js)$/.test(n)) continue; if (!vues.has(n)) file.push(n); }
}
// FranceConnect et panneau cookies depuis une page quelconque
await p.goto(new URL('screens/mds-vos-services/', BASE).href, { waitUntil: 'load' });
await p.click('header .fr-connect'); await p.waitForLoadState('load');
const fc = p.url();
await p.goto(new URL('screens/mds-faq/', BASE).href, { waitUntil: 'load' }); await p.waitForTimeout(500);
await p.click('a[href="#fr-consent-modal"]'); await p.waitForTimeout(600);
const cookies = await p.evaluate(() => document.getElementById('fr-consent-modal').classList.contains('fr-modal--opened'));
const fs = await import('node:fs'); const orphelins = fs.readdirSync('screens').filter((d) => d.startsWith('mds-')).filter((d) => ![...vues].some((v) => v.includes(`/screens/${d}/`)));
console.log('écrans jamais atteints par un lien :', orphelins.join(', ') || 'aucun');
console.log(`${vues.size} pages visitées ; ${a404.size} erreur(s) HTTP ; ${erreursJs.length} erreur(s) JavaScript`);
console.log('FranceConnect mène à :', fc.replace(BASE, '/'), '| panneau cookies ouvert :', cookies);
for (const x of [...a404].slice(0, 30)) console.log(' - ' + x);
for (const x of erreursJs.slice(0, 30)) console.log(' - JS ' + x);
await b.close();
