// Simulation du CMG structure (9 écrans relevés jusqu'au résultat), convertis en formulaires DSFR.
import { releve, esc, ind, lien, ext, page, ecrire, etapes, modale, ouvrirModale, accordeons, lienRetour, brief, conception, docComposant, SCRIPT_SIMU } from './lib.mjs';
import { convertir } from './convertir-etape.mjs';
const R = releve('simu-cmg').etapes; const ECRAN = 'mds-simulation-cmg';
const corps = (inner) => `        <div class="fr-container fr-mt-4v fr-mb-8v">\n            <div class="fr-grid-row fr-grid-row--gutters">\n                <div class="fr-col-12 fr-col-lg-8">\n${ind(inner, 20)}\n                </div>\n            </div>\n        </div>`;
const fil = (label) => [{ label: 'Simuler vos aides', href: lien('mds-simulateurs') }, { label: "Aide à la garde d'enfant", href: lien('mds-simulateur-garde-enfant') }, { label: 'CMG structure', href: lien('mds-simulateur-cmg') }, { label }];
const RETOUR = 'fr-btn fr-btn--secondary fr-icon-arrow-left-line fr-btn--icon-left';
const SUITE = 'fr-btn fr-icon-arrow-right-line fr-btn--icon-right';
const MODIF = 'fr-link fr-icon-pencil-line fr-link--icon-left';
const QUITTER = { 'Quitter la simulation': [lien('mds-simulateur-cmg'), RETOUR] };
const prep = (lignes) => lignes.map((l) => (l === '- Modifier' ? '[bouton "Modifier"]' : l)).filter((l) => l !== '- Supprimer');
const ecrireEtat = (fichier, n, opts) => {
  const e = R[n]; const { html, dialogues, titre } = convertir(prep(e.lignesCompletes), { cle: 'cmg', modales: e.modales, ...opts });
  const propre = html.replace(/\n?<!-- bouton non relié : [^>]* -->/g, '');
  ecrire(ECRAN, fichier, page({ titre: `${titre} - Simulation du CMG structure`, fil: fil(titre), main: corps(propre), dialogues, script: SCRIPT_SIMU }).replace('<main role="main" id="content">', '<main role="main" id="content" data-simulation="cmg">'));
  return titre;
};
const t = [];
t.push(ecrireEtat('index.html', 1, { suivant: 'etat-demandeur.html', boutonsLiens: { ...QUITTER } }));
t.push(ecrireEtat('etat-demandeur.html', 2, { suivant: 'etat-recap-foyer.html', boutonsLiens: { ...QUITTER } }));
t.push(ecrireEtat('etat-enfant.html', 4, { suivant: 'etat-recap-foyer.html', boutonsLiens: { ...QUITTER } }));
t.push(ecrireEtat('etat-recap-foyer.html', 5, { boutonsLiens: { ...QUITTER, Modifier: [['etat-demandeur.html', MODIF], ['etat-enfant.html', MODIF]], 'Ajouter un enfant à garder': ['etat-enfant.html', 'fr-btn fr-btn--secondary fr-icon-add-line fr-btn--icon-left'], 'Étape suivante': ['etat-mode-de-garde.html', SUITE] } }));
t.push(ecrireEtat('etat-mode-de-garde.html', 6, { suivant: 'etat-recap-mode-de-garde.html', boutonsLiens: { "Revenir à l'étape foyer": ['etat-recap-foyer.html', RETOUR] } }));
t.push(ecrireEtat('etat-recap-mode-de-garde.html', 7, { boutonsLiens: { "Revenir à l'étape foyer": ['etat-recap-foyer.html', RETOUR], 'Modifier le mode de garde': ['etat-mode-de-garde.html', 'fr-btn fr-btn--secondary fr-icon-pencil-line fr-btn--icon-left'], 'Étape suivante': ['etat-ressources.html', SUITE] } }));
t.push(ecrireEtat('etat-ressources.html', 8, { suivant: 'etat-recap-ressources.html', boutonsLiens: { 'Revenir à l’étape mode de garde': ['etat-recap-mode-de-garde.html', RETOUR] } }));
t.push(ecrireEtat('etat-recap-ressources.html', 9, { boutonsLiens: { 'Revenir à l’étape mode de garde': ['etat-recap-mode-de-garde.html', RETOUR], 'Modifier les ressources': ['etat-ressources.html', 'fr-btn fr-btn--secondary fr-icon-pencil-line fr-btn--icon-left'], 'Voir le résultat': ['etat-resultat.html', 'fr-btn'] } }));
// résultat (écrit à partir du relevé)
const dest = Object.fromEntries(R[10].destinations.map((d) => [d.texte, d.ouvre || d.href]));
ecrire(ECRAN, 'etat-resultat.html', page({ titre: 'Résultat - Simulation du CMG structure', fil: fil('Résultat'), main: corps(`${etapes('Résultat', 4, 4, null)}
<h1 class="fr-mt-6v">Résultat</h1>
<div class="fr-alert fr-alert--success">
    <h2 class="fr-alert__title">Simulation terminée</h2>
    <p>Ce résultat est une simulation. Il ne garantit pas l'accès à l’aide et au montant indiqué. Il n’engage pas les organismes de sécurité sociale.</p>
</div>
<p class="fr-text--lg fr-text--bold fr-mt-6v">D’après les informations que vous avez saisies, il semble que vous pouvez bénéficier de cette aide.</p>
<h2 class="fr-h3">CMG Structure</h2>
<p class="fr-mb-0">Montant estimé de l'aide pour le mois de mars 2027</p>
<p class="fr-text--lead fr-mb-0">1 014,90 € /mois</p>
<p>Montant total des frais de garde par mois : 1 200 € Reste à votre charge : 185,10 €</p>
${ouvrirModale('modale-acces-demande-cmg', 'Accéder à la demande du CMG', 'fr-btn fr-mb-6v')}
<h2 class="fr-mt-6v">Récapitulatif de votre simulation</h2>
<p>
    <a href="etat-recap-ressources.html" class="fr-link">Ouvrir le récapitulatif de votre simulation</a>
</p>
<ul class="fr-links-group">
    <li>
        ${lienRetour("Revenir à l'accueil", lien('mds-accueil'))}
    </li>
    <li>
        <a href="index.html" class="fr-link fr-icon-pencil-line fr-link--icon-left">Modifier la simulation</a>
    </li>
</ul>
<h2 class="fr-mt-6v">En savoir plus</h2>
${accordeons('accordion-cmg', [{ titre: 'Si vous avez plusieurs modes de garde', html: '<p>Si vous utilisez plusieurs modes de garde, vous devez vous rapprocher de votre organisme de prestations familiales (CAF ou MSA) afin d’estimer vos droits.</p>' }, { titre: 'Si votre enfant est gardé la nuit, les jours fériés et/ou dimanche', html: "<p>Si votre enfant est gardé au minimum 25 h par mois sur des horaires spécifiques*, une majoration de 10 % peut s'appliquer au montant estimé, dans la limite des 85 % des frais de garde.</p>\n<p>*Horaires spécifiques : le dimanche, les jours fériés, la nuit entre 22 h et 6 h du matin</p>" }], 3)}`), dialogues: modale('modale-acces-demande-cmg', 'Accéder à la demande du CMG structure', `<p>Cliquez sur l'organisme dont vous dépendez pour accéder à la demande. Votre CAF (Caisse d'Allocations Familiales) ou MSA (Mutualité Sociale Agricole) calculera votre droit réel au moment de votre demande.</p>
<p>Si vous ne savez pas de quel organisme social vous dépendez, sélectionnez la CAF.</p>
<ul class="fr-btns-group">
    <li>
        ${ext(dest['Faire une demande à la MSA'], 'Faire une demande à la MSA', 'fr-btn')}
    </li>
    <li>
        ${ext(dest['Faire une demande à la CAF'], 'Faire une demande à la CAF', 'fr-btn')}
    </li>
</ul>`), script: SCRIPT_SIMU }).replace('<main role="main" id="content">', '<main role="main" id="content" data-simulation="cmg">'));
ecrire(ECRAN, 'brief.md', brief({ titre: 'Simulation du CMG structure, traduite en DSFR', source: 'https://www.mesdroitssociaux.gouv.fr/votre-simulateur/aide-garde-enfant/cmg (parcouru jusqu\'au résultat avec une situation d\'essai : célibataire en activité à 51-80 %, un enfant né en mars 2027 gardé en micro-crèche pour 1 200 € par mois ; aucune demande déposée)', story: "En tant que parent qui fait garder son enfant en structure non conventionnée, je veux renseigner mon foyer, mon mode de garde et mes ressources, afin d'estimer le CMG structure et le reste à ma charge.", depart: 'Démarche à étapes avec indicateur d\'étapes (Foyer, Mode de garde, Ressources, Résultat), page d\'introduction séparée : mds-simulateur-cmg. Écrans produits par scripts/mds/build-cmg.mjs à partir du relevé (convertisseur scripts/mds/convertir-etape.mjs).', contenus: `Écrans : ${t.join(' ; ')} ; Résultat. Questions, aides, fenêtres d'aide (Description des différents modes de garde, Vous ne trouvez pas votre mode de garde ?, Vous ne connaissez pas le montant des frais de garde ?, Où trouver le revenu fiscal de référence ?, Vous n’avez pas d’avis d’imposition ?), récapitulatifs et résultat (1 014,90 € /mois pour mars 2027, reste à charge 185,10 €, fenêtre « Accéder à la demande du CMG structure » vers la MSA et la CAF, deux questions « En savoir plus ») repris du site.`, etats: 'index.html (questions préliminaires), etat-demandeur, etat-recap-foyer, etat-enfant, etat-mode-de-garde, etat-recap-mode-de-garde, etat-ressources, etat-recap-ressources, etat-resultat. Les boutons enchaînent les écrans ; les champs obligatoires vides affichent l\'erreur DSFR ; les récapitulatifs et le résultat montrent la situation d\'essai (pas de calcul).' }));
ecrire(ECRAN, 'conception.md', conception({ titre: 'Simulation du CMG structure', intro: 'Démarche à étapes, un état par écran du site.', composants: [docComposant('stepper', "Indicateur d'étapes", 'quatre étapes, pas d\'étape suivante sur le résultat.'), docComposant('form', 'Formulaire', 'un formulaire par écran de saisie, contrôle des champs vides à l\'envoi avec l\'état d\'erreur DSFR.'), '- Doc lue : reference/doc/modeles/date-unique.md — dates d\'accueil et de naissance de l\'enfant.', docComposant('radio', 'Bouton radio', 'questions Oui/Non et choix du mode de garde ; précisions en texte d\'aide.'), docComposant('input', 'Champ de saisie', 'prénom, nombre d\'enfants, frais de garde, revenu fiscal de référence.'), docComposant('alert', 'Alerte', 'avertissement PreParE et alerte de résultat.'), docComposant('modal', 'Modale', "fenêtres d'aide et « Accéder à la demande du CMG structure »."), docComposant('accordion', 'Accordéon', '« En savoir plus » du résultat.')].join('\n'), note: "**Retenus** : écrans, questions et textes du site. **Écartés** : boutons « Supprimer » (enfant, conjoint) et leurs fenêtres de confirmation ; lien « Télécharger le récapitulatif de votre simulation » (PDF produit par le site) ; fenêtre « Une erreur est survenue ». **Écarts assumés** : récapitulatifs et résultat figés sur la situation d'essai ; « Ouvrir le récapitulatif de votre simulation » mène au dernier récapitulatif ; les issues négatives des questions préliminaires ne sont pas maquettées. **Questions ouvertes** : calcul réel du montant." }));
console.log('CMG écrit :', t.join(' | '));
