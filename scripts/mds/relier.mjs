// Relie les liens encore provisoires (href="#") des pages mds à leur destination, d'après leur libellé.
import fs from 'node:fs';
import path from 'node:path';
import { SCREENS, lien, esc } from './lib.mjs';
const E = (u) => ({ externe: u });
const CIBLES = {
  'Vos services': lien('mds-vos-services'), 'Voir tous les services': lien('mds-vos-services'),
  'Voir les simulateurs': lien('mds-simulateurs'), 'Votre simulateur': lien('mds-simulateurs'), 'Effectuer une simulation': lien('mds-simulateurs'), 'Vos simulateurs': lien('mds-simulateurs'),
  'Simuler vos droits': lien('mds-simulateurs'), 'Simuler vos droits aux prestations sociales et familiales': lien('mds-simulateurs'), 'Simuler vos droits pour bénéficier d’aide selon votre mode de garde': lien('mds-simulateur-garde-enfant'),
  'Simuler la prime à la naissance': lien('mds-simulateur-prime-naissance'), 'Simulation de la prime de naissance': lien('mds-simulateur-prime-naissance'),
  'Vos droits': lien('mds-connexion-droits'), 'Consultez vos droits': lien('mds-connexion-droits'),
  'Vos ressources': lien('mds-connexion-ressources'), 'Accéder à vos ressources': lien('mds-connexion-ressources'),
  'Votre activité professionnelle': lien('mds-connexion-activite-professionnelle'), 'Voir votre activité salariée': lien('mds-connexion-activite-professionnelle'),
  'Vos signalements': lien('mds-connexion-signalements'), 'Vos rappels': lien('mds-connexion-rappels'),
  'Accéder au formulaire': lien('mds-connexion-franceconnect'),
  'Vous cherchez un emploi': lien('mds-parcours-emploi'), 'Vous recherchez un emploi': lien('mds-parcours-emploi'),
  'Vous adoptez un enfant': lien('mds-parcours-adoption'), 'Vous avez besoin de faire garder vos enfants': lien('mds-parcours-garde-enfants'),
  'Autonomie et grand âge': lien('mds-parcours-autonomie'), 'Votre enfant est en situation de handicap': lien('mds-parcours-handicap-enfant'), 'Vous êtes en situation de handicap': lien('mds-parcours-handicap-adulte'),
  'Gérer les cookies': '#fr-consent-modal',
  'Voir la transcription textuelle du tuto vidéo « La page d\'accueil »': lien('mds-transcription-page-accueil'),
  'Voir la transcription textuelle du tuto vidéo « Vos droits »': lien('mds-transcription-vos-droits'),
  'Voir la transcription textuelle du tuto vidéo « Votre simulateur »': lien('mds-transcription-votre-simulateur'),
  'Voir la transcription textuelle du tuto vidéo « Vos ressources »': lien('mds-transcription-vos-ressources'),
  'Voir la transcription textuelle du tuto vidéo « Vos signalements »': lien('mds-transcription-vos-signalements'),
  'Voir la transcription textuelle': lien('mds-transcription-presentation-generale'),
  'Pourquoi et comment vous connecter avec France Connect ?': '../mds-faq/index.html#rubrique-2',
  'Voir la vidéo « FranceConnect expliqué en 2 minutes »': E('https://www.dailymotion.com/video/x78xrdm'),
  'Découvrir notre page Dailymotion': E('https://www.dailymotion.com/playlist/x6iuls'),
  'S’informer sur vos droits': lien('mds-parcours-deces-aides'), 'Découvrir les aides que vous pouvez demander': lien('mds-parcours-deces-aides'),
  'En savoir plus sur les démarches en cas de décès': E('https://www.lassuranceretraite.fr/portail-info/portail-info/home/actif/travailleur-independant/veuvage/formalites-administratives.html')
};
let n = 0; const restes = new Set();
for (const d of fs.readdirSync(SCREENS).filter((x) => x.startsWith('mds-'))) for (const f of fs.readdirSync(path.join(SCREENS, d)).filter((x) => x.endsWith('.html'))) {
  const p = path.join(SCREENS, d, f); let h = fs.readFileSync(p, 'utf8'); const avant = h;
  h = h.replace(/<a\b([^>]*?)href="#"([^>]*)>([\s\S]*?)<\/a>/g, (m, a1, a2, inner) => {
    const txt = inner.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    const c = CIBLES[txt];
    if (!c) { restes.add(`${d}/${f} : ${txt}`); return m; }
    if (typeof c === 'string') return `<a${a1}href="${c}"${a2}>${inner}</a>`;
    const attrs = (a1 + a2).replace(/\s(target|rel|title)="[^"]*"/g, '');
    return `<a${attrs.replace(/\s+$/, '')} href="${esc(c.externe)}" target="_blank" rel="noopener external" title="${esc(txt)} - nouvelle fenêtre">${inner}</a>`.replace('<a ', '<a ').replace(/<a\s+/, '<a ');
  });
  if (h !== avant) { fs.writeFileSync(p, h); n++; }
}
console.log(n, 'fichiers reliés'); if (restes.size) console.log('liens restés provisoires :\n' + [...restes].join('\n'));
