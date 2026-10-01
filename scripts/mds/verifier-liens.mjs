// Vérifie que chaque lien et chaque bouton du prototype mène quelque part : fichier présent, ancre présente, lien externe,
// bouton relié à une modale, à un menu, à un filtre, à un formulaire ou à un script connu.
import fs from 'node:fs';
import path from 'node:path';
import { SCREENS, ROOT } from './lib.mjs';
const pages = [];
for (const d of fs.readdirSync(SCREENS).filter((x) => x.startsWith('mds-'))) for (const f of fs.readdirSync(path.join(SCREENS, d)).filter((x) => x.endsWith('.html'))) pages.push(path.join(SCREENS, d, f));
const ids = (h) => new Set([...h.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
const pb = []; let liens = 0, boutons = 0;
for (const p of pages) {
  const h = fs.readFileSync(p, 'utf8'); const mesIds = ids(h); const rel = path.relative(SCREENS, p);
  for (const m of h.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)) {
    const href = (m[1].match(/\shref="([^"]*)"/) || [])[1]; const txt = m[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().slice(0, 60);
    if (href === undefined) { if (!/aria-current="page"|aria-disabled="true"/.test(m[1])) pb.push(`${rel} : lien sans adresse « ${txt} »`); continue; }
    liens++;
    if (href === '#' || href === '') { pb.push(`${rel} : lien vide « ${txt} »`); continue; }
    if (/^(https?:|mailto:|tel:)/.test(href)) continue;
    const [chemin, ancre] = href.split('#');
    if (!chemin) { if (!mesIds.has(ancre)) pb.push(`${rel} : ancre #${ancre} absente (« ${txt} »)`); continue; }
    let cible = path.resolve(path.dirname(p), chemin); if (chemin.endsWith('/')) cible = path.join(cible, 'index.html');
    if (!fs.existsSync(cible)) { pb.push(`${rel} : page absente ${href} (« ${txt} »)`); continue; }
    if (ancre && cible.endsWith('.html') && !ids(fs.readFileSync(cible, 'utf8')).has(ancre)) pb.push(`${rel} : ancre #${ancre} absente de ${href}`);
  }
  for (const m of h.matchAll(/<button\b([^>]*)>([\s\S]*?)<\/button>/g)) {
    boutons++; const a = m[1]; const txt = m[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().slice(0, 60);
    if (/aria-controls="|aria-pressed=|type="submit"|type="reset"|class="fr-connect"|fr-accordion__btn|fr-breadcrumb__button|fr-consent-service__collapse-btn|id="(bouton-calcul|consent-enregistrer)"/.test(a)) {
      const c = (a.match(/aria-controls="([^"]+)"/) || [])[1]; if (c && !mesIds.has(c)) pb.push(`${rel} : bouton « ${txt} » relié à #${c} absent`);
      continue;
    }
    pb.push(`${rel} : bouton sans action « ${txt} »`);
  }
  for (const m of h.matchAll(/<script\b[^>]*src="([^"]+)"/g)) { const c = path.resolve(path.dirname(p), m[1]); if (!fs.existsSync(c)) pb.push(`${rel} : script absent ${m[1]}`); }
}
console.log(`${pages.length} pages, ${liens} liens, ${boutons} boutons vérifiés ; ${pb.length} problème(s)`);
for (const x of pb) console.log(' - ' + x);
process.exitCode = pb.length ? 1 : 0;
