// Met à jour les parties communes de toutes les pages screens/mds-* : en-tête (lien d'accueil, menu, rubrique courante
// conservée), pied de page, panneau de gestion des cookies, script commun du prototype, boutons « Gérer les cookies ».
// La source est screens/mds-accueil/index.html, corrigée ici en premier.
import fs from 'node:fs';
import path from 'node:path';
import { SCREENS, CONSENT, SCRIPT_PROTO, gabarit, entete, lien } from './lib.mjs';

const fichiers = (d) => fs.readdirSync(path.join(SCREENS, d)).filter((f) => f.endsWith('.html')).map((f) => path.join(SCREENS, d, f));
const ecrans = fs.readdirSync(SCREENS).filter((d) => d.startsWith('mds-'));
const entre = (s, a, b) => [s.indexOf(a), s.indexOf(b, s.indexOf(a)) + b.length];

// 1. corriger le modèle
const A = path.join(SCREENS, 'mds-accueil/index.html');
let a = fs.readFileSync(A, 'utf8');
a = a.replace(/<a href="\/" title="/g, `<a href="${lien('mds-accueil')}" title="`).replace(/ href="\/"/g, ` href="${lien('mds-accueil')}"`)
  .replace(/<header role="banner" class="fr-header">/, '<header role="banner" class="fr-header" id="top">')
  .replace(/<a id="nav-accueil" type="link" href="[^"]*"/, `<a id="nav-accueil" type="link" href="${lien('mds-accueil')}"`)
  .replace(/<a id="nav-services" type="link" href="[^"]*"/, `<a id="nav-services" type="link" href="${lien('mds-vos-services')}"`)
  .replace('<button id="footer__bottom-link-5" type="button" class="fr-footer__bottom-link" data-fr-opened="false" aria-controls="fr-consent-modal">Gérer les cookies</button>', '<a id="footer__bottom-link-5" href="#fr-consent-modal" class="fr-footer__bottom-link">Gérer les cookies</a>')
  .replace(/<a id="footer__bottom-link-5" href="#" class="fr-footer__bottom-link">Gérer les cookies<\/a>/, '<a id="footer__bottom-link-5" href="#fr-consent-modal" class="fr-footer__bottom-link">Gérer les cookies</a>');
if (!a.includes('<dialog id="fr-consent-modal"')) a = a.replace('    </footer>\n', `    </footer>\n    ${CONSENT}\n`);
fs.writeFileSync(A, a);

// 2. propager
const g = gabarit();
let n = 0;
for (const d of ecrans) for (const f of fichiers(d)) {
  let h = fs.readFileSync(f, 'utf8'); const avant = h;
  const [hs, he] = entre(h, '<header ', '</header>');
  const ancien = h.slice(hs, he);
  const m = ancien.match(/<a id="nav-(accueil|services|evenements)"[^>]*aria-current="(page|true)"/) || ancien.match(/<a id="nav-(accueil|services|evenements)"[^>]*class="fr-nav__link" aria-current="(page|true)"/);
  h = h.slice(0, hs) + entete(g.header, m ? m[1] : null, m ? m[2] : 'page') + h.slice(he);
  const [fs0, fe] = entre(h, '<footer class="fr-footer"', '</footer>');
  h = h.slice(0, fs0) + g.footer + h.slice(fe);
  if (h.includes('<dialog id="fr-consent-modal"')) { const [cs, ce] = entre(h, '<dialog id="fr-consent-modal"', '</dialog>'); h = h.slice(0, cs) + g.consent + h.slice(ce); }
  else h = h.replace('    </footer>\n', `    </footer>\n    ${g.consent}\n`);
  if (!h.includes('_mds/prototype.js')) h = h.replace(/(<script type="text\/javascript" nomodule src="[^"]*dsfr\.nomodule\.min\.js"><\/script>\n)/, `$1${SCRIPT_PROTO}`);
  // boutons « Gérer les cookies » des vidéos : ouvrent le panneau
  h = h.replace(/<button type="button" class="fr-btn fr-btn--secondary">Gérer les cookies<\/button>/g, '<button type="button" class="fr-btn fr-btn--secondary" data-fr-opened="false" aria-controls="fr-consent-modal">Gérer les cookies</button>');
  if (h !== avant) { fs.writeFileSync(f, h); n++; }
}
console.log(`${n} fichiers mis à jour sur ${ecrans.length} écrans`);
