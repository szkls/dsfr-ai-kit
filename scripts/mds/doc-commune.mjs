// Ajoute à chaque conception mds la section commune « Panneau de gestion des cookies » (lignes Doc lue modal et consent).
import fs from 'node:fs';
import path from 'node:path';
import { SCREENS } from './lib.mjs';
export const SECTION = `### Panneau de gestion des cookies (consent, modal)
- Doc lue : reference/doc/composants/consent.md — modale de gestion des cookies présente sur toutes les pages, ouverte par le lien « Gérer les cookies » du pied de page et par les boutons « Gérer les cookies » des vidéos ; premier bloc « Tout accepter / Tout refuser » et boutons « Accepter / Refuser » par service, libellés imposés par la doc (le site écrit « Autoriser ») ; services du site : Assurer le fonctionnement du site (obligatoire, refus désactivé), TOLD, Dailymotion, Piano Analytics, avec leurs liens de politique de confidentialité ; bouton du site « Enregistrer mes préférences ».
- Doc lue : reference/doc/composants/modal.md — \`dialog.fr-modal\` en fin de \`body\`, titre h2 relié par \`aria-labelledby\`, bouton Fermer ; le lien du pied de page reste un lien (extrait officiel du pied de page) et ouvre la modale par l'API \`dsfr(…).modal.disclose()\`, ouverture programmatique prévue par la doc, le DSFR rendant le focus à l'élément d'origine.
`;
let n = 0;
for (const d of fs.readdirSync(SCREENS).filter((x) => x.startsWith('mds-'))) {
  const f = path.join(SCREENS, d, 'conception.md'); if (!fs.existsSync(f)) continue;
  let s = fs.readFileSync(f, 'utf8'); if (s.includes('### Panneau de gestion des cookies')) continue;
  const i = s.indexOf('## Composants propres à la page');
  s = i >= 0 ? s.slice(0, i) + SECTION + '\n' + s.slice(i) : s + '\n' + SECTION;
  fs.writeFileSync(f, s); n++;
}
console.log(n, 'conceptions complétées');
