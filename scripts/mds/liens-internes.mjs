// Correspondance entre les adresses du site et les écrans du prototype.
import { lien } from './lib.mjs';
const TABLE = [
  [/\/activite-professionnelle\/?$/, 'mds-connexion-activite-professionnelle'],
  [/\/ressources\/?$/, 'mds-connexion-ressources'],
  [/\/accueil\/vos-droits\/?$|\/droits\/?$/, 'mds-connexion-droits'],
  [/\/rappels\/?$/, 'mds-connexion-rappels'],
  [/\/signalements\/?$/, 'mds-connexion-signalements'],
  [/\/services\/?$/, 'mds-vos-services'],
  [/parcours-deces-assistant/, 'mds-parcours-deces-aides'],
  [/\/vos-evenements-de-vie\/parcours-deces\/?$/, 'mds-parcours-deces'],
  [/\/vos-evenements-de-vie\/parcours-naissance\/?$/, 'mds-parcours-naissance'],
  [/\/evenements-de-vie\/?$/, 'mds-evenements-de-vie'],
  [/foireAuxQuestionsFooter/, 'mds-faq'],
  [/contactFooter/, 'mds-contact'],
  [/\/votre-simulateur\/prime-naissance/, 'mds-simulateur-prime-naissance'],
  [/\/votre-simulateur\/prime-adoption/, 'mds-simulateur-prime-adoption'],
  [/\/votre-simulateur\/aide-garde-enfant\/cmg/, 'mds-simulateur-cmg'],
  [/\/votre-simulateur\/aide-garde-enfant/, 'mds-simulateur-garde-enfant'],
  [/\/simulateurs\/aide-logement/, 'mds-simulateur-aide-logement'],
  [/\/simulateurs\/allocation-adulte-handicape/, 'mds-simulateur-aah'],
  [/\/simulateurs\/complementaire-sante-solidaire/, 'mds-simulateur-css'],
  [/\/simulateurs\/rsa-pa/, 'mds-simulateur-rsa-pa'],
  [/simu-foyer/, 'mds-simulation-mes-aides'],
  [/\/simulateurs\/?$|\/votre-simulateur\/accueil/, 'mds-simulateurs'],
  [/\/avvc/, 'mds-aide-violences-conjugales'],
  [/\/accueil\/?$|^https?:\/\/(www\.)?mesdroitssociaux\.gouv\.fr\]?\/?$/, 'mds-accueil']
];
// renvoie le chemin de l'écran du prototype, ou null si l'adresse est externe
export const interne = (href) => {
  if (!href) return null;
  let h = href.trim();
  if (!/^[a-z]+:/i.test(h) && !h.startsWith('/') && !h.startsWith('#')) h = '/' + h; // adresse relative du site
  if (!/^\/|mesdroitssociaux\.gouv\.fr/.test(h)) return null;
  const t = TABLE.find(([re]) => re.test(h));
  return t ? lien(t[1]) : lien('mds-accueil');
};
