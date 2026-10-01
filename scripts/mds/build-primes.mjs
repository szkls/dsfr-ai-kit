// Simulateurs « prime à la naissance » et « prime à l'adoption » : présentation + simulation en 4 étapes.
import { esc, ind, lien, ext, page, ecrire, lienRetour, tuile, accordeons, brief, conception, docComposant, modale, ouvrirModale, etapes, champNombre, radios, dateUnique, SCRIPT_SIMU, releve } from './lib.mjs';
const ACCES = releve('acces-demande');
const PRIMES = {
  naissance: { titre: 'prime à la naissance', Titre: 'Prime à la naissance', montant: '1093.08', montantTexte: '1 093,08 €', arrivee: "Nombre d'enfants à naître", recapArrivee: "Nombre d'enfants à naitre", legendeDate: 'Date de naissance prévisionnelle', recapDate: 'Date de naissance prévisionnelle', unite: 'enfant à naître', versement: ['-2'], texteVersement: ['La prime est versée en une seule fois au cours du 7ème mois de grossesse. Si vous demandez la prime de naissance, le versement devrait avoir lieu en ', '.'], servicePublic: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F2550', tuileParcours: true, couple: true,
    presentation: { lead: "La prime à la naissance permet d'aider à financer les premières dépenses liées à l'arrivée de votre enfant en fonction de vos ressources.", qui: 'Tous les parents qui attendent un enfant et dont les ressources ne dépassent pas le seuil en vigueur.', quand: 'La prime est versée en une seule fois au cours du 7ème mois de grossesse.' } },
  adoption: { titre: "prime à l'adoption", Titre: "Prime à l'adoption", montant: '2186.16', montantTexte: '2 186,16 €', arrivee: "Nombre d'enfants de moins de 20 ans qui vont être adoptés", recapArrivee: "Nombre d'enfants à adopter", legendeDate: "Date d'arrivée dans le foyer du ou des enfants adoptés", recapDate: "Date d'arrivée", unite: 'enfant à adopter', versement: ['0', '2'], texteVersement: ["La prime est versée en une seule fois au cours des deux mois suivants l'arrivée de l'enfant dans votre foyer. Si vous demandez la prime d'adoption, le versement devrait avoir lieu ", '.'], servicePublic: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F13220', tuileParcours: false, couple: false,
    presentation: { lead: "La prime à l'adoption permet d'aider à financer les premières dépenses liées à l'arrivée de votre enfant en fonction de vos ressources.", qui: "Les parents qui accueillent en vue d'une adoption ou adoptent un enfant de moins de 20 ans.", quand: "les deux mois suivants l'arrivée de l'enfant ou à la date du jugement." } }
};
const corps = (inner) => `        <div class="fr-container fr-mt-4v fr-mb-8v">
            <div class="fr-grid-row fr-grid-row--gutters">
                <div class="fr-col-12 fr-col-lg-8">
${ind(inner, 20)}
                </div>
            </div>
        </div>`;
const MENTION = '<p class="fr-text--sm">Toutes les informations demandées sont obligatoires</p>';
const btnRetour = (texte, href) => `<a href="${href}" class="fr-btn fr-btn--secondary fr-icon-arrow-left-line fr-btn--icon-left fr-mb-6v">${esc(texte)}</a>`;
const MODALES_RESSOURCES = [
  modale('modale-revenu-imposable', 'Où trouver le revenu net imposable du foyer ?', `<p>Le revenu net imposable se trouve sur la ligne “Revenu imposable” de votre avis d'impôt.</p>`),
  modale('modale-revenu-activite', "Où trouver le revenu net d'activité pour chaque membre du foyer ?", `<p>Le revenu net d'activité se trouve sur la ligne “Salaires, pensions, rentes nets” de votre avis d'impôt.</p>`)
].join('\n    ');
const MODALE_ORGANISMES = modale('modale-organismes-adoption', "Les organismes autorisés pour l'adoption", `<p>Il existe plusieurs organismes qui accompagnent les parents pour adopter un enfant :</p>
<ul>
    <li>L'Aide Sociale à l'Enfance (ASE) : ${ext('https://lannuaire.service-public.gouv.fr/navigation/cg', 'service public présent dans chaque département', '')}, s'occupe des enfants qui peuvent être adoptés en France.</li>
    <li>Les ${ext('https://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/les-acteurs-de-l-adoption-internationale/les-operateurs-de-l-adoption-internationale/organismes-autorises-pour-l-adoption-oaa/', "Organismes Autorisés pour l'Adoption", '')} (OAA) : associations privées, contrôlées par l'État. Elles peuvent aider à adopter en France ou dans un autre pays.</li>
    <li>L' ${ext('https://www.agence-adoption.fr/', "Agence Française de l'Adoption", '')} (AFA) : organisme public. Il aide à adopter à l'étranger.</li>
    <li>Les ${ext('https://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/les-acteurs-de-l-adoption-internationale/', 'autorités étrangères compétentes', '')} : si vous adoptez dans un autre pays, l'organisme local doit être reconnu par la France.</li>
</ul>`);

for (const [cle, P] of Object.entries(PRIMES)) {
  const presentation = `mds-simulateur-prime-${cle}`, simu = `mds-simulation-prime-${cle}`;
  const fil = [{ label: 'Simuler vos aides', href: lien('mds-simulateurs') }, { label: P.Titre, href: lien(presentation) }];
  const acces = ACCES[`prime-${cle}`];
  // ---------- présentation
  ecrire(presentation, 'index.html', page({ titre: `Simulation de la ${P.titre}`, fil: [fil[0], { label: P.Titre }], main: corps(`<h1>Simulation de la ${esc(P.titre)}</h1>
<p class="fr-text--lead">${esc(P.presentation.lead)}</p>
<h2>Préparez vos documents</h2>
<ul>
    <li>du dernier avis d'imposition de votre foyer sur 2024</li>
</ul>
<a href="${lien(simu)}" class="fr-btn fr-mb-6v" data-recommencer>Commencer la simulation</a>
${accordeons(`accordion-${cle}`, [{ titre: 'Qui peut en bénéficier ?', html: `<p>${esc(P.presentation.qui)}</p>` }, { titre: 'Quand est-elle versée ?', html: `<p>${esc(P.presentation.quand)}</p>` }], 2)}
<p class="fr-mt-6v">
    ${lienRetour('Revenir aux simulateurs', lien('mds-simulateurs'))}
</p>`), script: SCRIPT_SIMU.replace('simulation.js"', `simulation.js" data-presentation="${cle}"`) }).replace('<main role="main" id="content">', `<main role="main" id="content" data-simulation="prime-${cle}" data-montant="${P.montant}">`));
  ecrire(presentation, 'brief.md', brief({ titre: `Simulation de la ${P.titre} : présentation, traduite en DSFR`, source: `https://www.mesdroitssociaux.gouv.fr/votre-simulateur/prime-${cle}`, story: `En tant que futur parent, je veux savoir ce qu'il faut préparer avant de simuler la ${P.titre}, afin de la simuler sans interruption.`, contenus: `Fil d'Ariane : Accueil > Simuler vos aides > ${P.Titre}. Titre (h1) : Simulation de la ${P.titre}. Chapô : ${P.presentation.lead} « Préparez vos documents » : du dernier avis d'imposition de votre foyer sur 2024. Bouton Commencer la simulation. Questions dépliables : Qui peut en bénéficier ? (${P.presentation.qui}) ; Quand est-elle versée ? (${P.presentation.quand}). Lien de retour vers les simulateurs.`, etats: `Un seul état. « Commencer la simulation » mène à l'étape 1 de ${simu} et efface une simulation en cours.` }));
  ecrire(presentation, 'conception.md', conception({ titre: `Simulation de la ${P.titre} (présentation)`, intro: "Page d'introduction de la démarche, recommandée par la doc de l'indicateur d'étapes (« proposer une page d'introduction » sans indicateur).", composants: docComposant('accordion', 'Accordéon', 'deux questions dépliables, groupe dissocié, titres h2, réponse en paragraphe.'), note: '**Retenus** : structure du site. **Écartés** : aucun. **Écarts assumés** : « Commencer la simulation » est un lien de style bouton (il navigue) ; lien de retour ajouté. **Questions ouvertes** : la liste « Préparez vos documents » commence par « du dernier avis… » sans phrase d\'introduction, comme sur le site.' }));

  // ---------- simulation
  const racine = (html) => html.replace('<main role="main" id="content">', `<main role="main" id="content" data-simulation="prime-${cle}" data-montant="${P.montant}">`);
  const etat = (fichier, titre, contenu, dialogues = '') => ecrire(simu, fichier, racine(page({ titre: `${titre} - Simulation de la ${P.titre}`, fil: [...fil, { label: titre }], main: corps(contenu), dialogues, script: SCRIPT_SIMU })));
  // étape 1 : foyer
  etat('index.html', 'Votre foyer', `${btnRetour('Quitter la simulation', lien(presentation))}
${etapes('Foyer', 1, 4, 'Ressources')}
<h1 class="fr-mt-6v">Votre foyer</h1>
${MENTION}
${cle === 'adoption' ? `<div id="callout-organismes" class="fr-callout">
    <h2 class="fr-callout__title">Les organismes autorisés pour l'adoption</h2>
    <p class="fr-callout__text">Si l'adoption respecte les conditions prévues, vous pouvez obtenir la prime d'adoption.</p>
    ${ouvrirModale('modale-organismes-adoption', "En savoir plus sur les organismes autorisés pour l'adoption")}
</div>
` : ''}<form action="etat-ressources.html" data-etape="foyer" novalidate>
${ind([radios('situation', 'situation', 'Vous êtes', [['celibataire', 'Célibataire'], ['couple', 'En couple', 'Marié, pacsé ou union libre']]), champNombre('enfants-charge', 'enfants_charge', "Nombre d'enfants à charge actuellement dans votre foyer", 'Exemple : 2'), champNombre('enfants-arrivee', 'enfants_arrivee', P.arrivee, 'Exemple : 2'), dateUnique('date-arrivee', P.legendeDate)].join('\n'), 4)}
    <button class="fr-btn" type="submit">Suivant</button>
</form>`, cle === 'adoption' ? MODALE_ORGANISMES : '');
  // étape 2 : ressources (questions sur le conjoint si « en couple »)
  const ressources = (couple) => `${btnRetour("Revenir à l'étape foyer", 'index.html')}
${etapes('Ressources', 2, 4, 'Récapitulatif')}
<h1 class="fr-mt-6v">Vos ressources</h1>
${MENTION}
<form action="etat-recapitulatif.html" data-etape="ressources" novalidate>
${P.couple ? `    <div data-si="situation=couple"${couple ? '' : ' hidden'}>
        <h2 class="fr-h4">Vos revenus nets d'activités ainsi que ceux de votre conjoint</h2>
        <p class="fr-mb-0">Le calcul de la prime à la naissance varie en fonction de la situation de votre foyer</p>
        ${ouvrirModale('modale-revenu-activite', "Où trouver le revenu net d'activité pour chaque membre du foyer ?", 'fr-btn fr-btn--tertiary-no-outline fr-mb-6v')}
${ind([radios('activite-vous', 'activite_vous', "Vous avez perçu un revenu net d'activité de plus de 6 306 € en 2024", [['oui', 'Oui'], ['non', 'Non']], { aideLegende: "Exemple : activité professionnelle, indemnités journalières d'accident de travail ou de maladie professionnelle." }), radios('activite-conjoint', 'activite_conjoint', "Votre conjoint a perçu un revenu net d'activité de plus de 6 306 € en 2024", [['oui', 'Oui'], ['non', 'Non']], { aideLegende: "Exemple : activité professionnelle, indemnités journalières d'accident de travail ou de maladie professionnelle." })].join('\n'), 8)}
    </div>
` : ''}${ind(champNombre('revenu', 'revenu', 'Revenus nets imposables de 2024 de votre foyer en euros', "Si vous avez plusieurs avis d'impôt sur l'année 2024, il vous faudra additionner les différents revenus net imposable. Exemple : 18000"), 4)}
    ${ouvrirModale('modale-revenu-imposable', 'Où trouver le revenu net imposable du foyer ?', 'fr-btn fr-btn--tertiary-no-outline fr-mb-6v')}
    <button class="fr-btn" type="submit">Suivant</button>
</form>`;
  etat('etat-ressources.html', 'Vos ressources', ressources(false), MODALES_RESSOURCES);
  if (P.couple) etat('etat-ressources-couple.html', 'Vos ressources', ressources(true), MODALES_RESSOURCES);
  // étape 3 : récapitulatif
  etat('etat-recapitulatif.html', 'Récapitulatif', `${btnRetour("Revenir à l'étape ressources", 'etat-ressources.html')}
${etapes('Récapitulatif', 3, 4, 'Résultat')}
<h1 class="fr-mt-6v">Récapitulatif</h1>
<h2 class="fr-h3">Votre foyer</h2>
<ul>
    <li>Vous êtes : <span data-valeur="situation">Célibataire</span></li>
    <li>Nombre d'enfants actuellement à charge dans votre foyer : <span data-valeur="enfants_charge">1</span></li>
    <li>${esc(P.recapArrivee)} : <span data-valeur="enfants_arrivee">1</span></li>
    <li>${esc(P.recapDate)} : <span data-valeur="date">14/03/2027</span></li>
</ul>
<a href="index.html" class="fr-btn fr-btn--secondary fr-icon-pencil-line fr-btn--icon-left fr-mb-6v">Modifier le foyer</a>
<h2 class="fr-h3">Vos ressources</h2>
<ul>
${P.couple ? `    <li data-si="situation=couple" hidden>Vous avez perçu un revenu net d'activité de plus de 6 306 € en 2024 : <span data-valeur="activite_vous">Non</span></li>
    <li data-si="situation=couple" hidden>Votre conjoint a perçu un revenu net d'activité de plus de 6 306 € en 2024 : <span data-valeur="activite_conjoint">Non</span></li>
` : ''}    <li>Revenus nets imposables de 2024 de votre foyer : <span data-valeur="revenu">1 200 €</span></li>
</ul>
<a href="etat-ressources.html" class="fr-btn fr-btn--secondary fr-icon-pencil-line fr-btn--icon-left fr-mb-6v">Modifier les ressources</a>
<p>
    <a href="etat-resultat.html" class="fr-btn fr-icon-arrow-right-line fr-btn--icon-right">Voir le résultat</a>
</p>`);
  // étape 4 : résultat
  const liensFin = `<ul class="fr-links-group">
    <li>
        ${lienRetour("Revenir à l'accueil", lien('mds-accueil'))}
    </li>
    <li>
        <a href="index.html" class="fr-link fr-icon-pencil-line fr-link--icon-left">Modifier la simulation</a>
    </li>
</ul>
${P.tuileParcours ? `<div class="fr-grid-row fr-mt-4v">
    <div class="fr-col-12 fr-col-md-6">
${ind(tuile({ id: 'tile-demarches-naissance', titre: "Découvrir toutes les démarches liées à l'arrivée d'un enfant", href: lien('mds-parcours-naissance'), sm: true }), 8)}
    </div>
</div>
` : ''}<h2 class="fr-mt-8v">Comprendre le résultat de votre simulation</h2>`;
  const ALERTE = `<div class="fr-alert fr-alert--success">
    <h2 class="fr-alert__title">Simulation terminée !</h2>
    <p>Ce résultat est une simulation. Il ne garantit pas l'accès à l'aide et au montant indiqué. Il n'engage pas les organismes de sécurité sociale.</p>
</div>`;
  etat('etat-resultat.html', 'Résultat', `${etapes('Résultat', 4, 4, null)}
<h1 class="fr-mt-6v">Résultat</h1>
${ALERTE}
<p class="fr-text--lg fr-text--bold fr-mt-6v">D'après les informations que vous avez saisies, il semble que vous pouvez bénéficier de cette aide.</p>
<h2 class="fr-h6 fr-mb-0">${esc(P.Titre)}</h2>
<p class="fr-text--lead fr-mb-0" data-montant-total>${esc(P.montantTexte)}</p>
<p>Versement en une seule fois. Le montant est prévu pour <span data-nombre-enfants>1</span> <span data-unite="${esc(P.unite.replace('enfant ', 'enfants '))}">${esc(P.unite)}</span>.</p>
${ouvrirModale('modale-acces-demande', `Accéder à la demande de la ${P.titre}`, 'fr-btn fr-mb-6v')}
${liensFin}
${accordeons(`accordion-resultat-${cle}`, [{ titre: "Comment et quand sera versée l'aide ?", html: `<p>${esc(P.texteVersement[0])}<span data-versement="${P.versement.join(',')}">${cle === 'naissance' ? 'janvier 2027' : 'entre mars 2027 et mai 2027'}</span>${esc(P.texteVersement[1])}</p>` }, { titre: 'Comment les ressources du foyer sont-elles prises en compte ?', html: `<ul>\n    <li>le revenu est inférieur au plafond de ressource.</li>\n</ul>\n<p>\n    ${ext(P.servicePublic, 'service-public.gouv.fr')}\n</p>` }], 3)}`, modale('modale-acces-demande', 'Accéder à la demande', `<p>Cliquez sur l'organisme dont vous dépendez pour accéder à la demande. Votre CAF (Caisse d'Allocations Familiales) ou MSA (Mutualité Sociale Agricole) calculera votre droit réel au moment de votre demande.</p>
<p>Si vous ne savez pas de quel organisme social vous dépendez, sélectionnez la CAF.</p>
<ul class="fr-btns-group">
${acces.map((a) => `    <li>\n        ${ext(a.onglet, a.libelle, 'fr-btn')}\n    </li>`).join('\n')}
</ul>`));
  if (cle === 'naissance') etat('etat-resultat-non-eligible.html', 'Résultat', `${etapes('Résultat', 4, 4, null)}
<h1 class="fr-mt-6v">Résultat</h1>
${ALERTE}
<p class="fr-text--lg fr-text--bold fr-mt-6v fr-mb-0">D'après les informations que vous avez saisies, il semble que vous ne pouvez pas bénéficier de cette aide.</p>
<p>Vous pouvez toujours vous rapprocher de votre ${ext('https://wwwd.caf.fr/wps/portal/caffr/aidesetdemarches/mesdemarches/faireunedemandedeprestation?codeThematique=Vie%20personnelle#DPN', "CAF (Caisse d'Allocations Familiales)", '')} ou de votre ${ext('https://www.msa.fr/lfp/web/msa/famille/paje-allocation-base-prime-naissance', 'MSA (Mutualité Sociale Agricole)', '')} afin de vérifier vos droits.</p>
${liensFin}
${accordeons('accordion-resultat-non-eligible', [{ titre: "Pourquoi je ne bénéficie pas de l'aide ?", html: `<ul>\n    <li>le revenu est supérieur au plafond de ressource d'un couple avec un revenu.</li>\n</ul>\n<p>\n    ${ext(P.servicePublic, 'service-public.gouv.fr')}\n</p>` }], 3)}`);
  ecrire(simu, 'brief.md', brief({ titre: `Simulation de la ${P.titre} en 4 étapes, traduite en DSFR`, source: `https://www.mesdroitssociaux.gouv.fr/votre-simulateur/prime-${cle}/formulaire-foyer (parcouru jusqu'au résultat avec des réponses d'essai ; aucune demande déposée)`, story: `En tant que futur parent, je veux renseigner mon foyer et mes ressources, vérifier mes réponses et connaître le montant de la ${P.titre}, afin de savoir si je peux la demander.`, depart: 'Gabarit commun ; démarche à étapes avec indicateur d\'étapes, conforme au modèle de formulaire du DSFR (page d\'introduction séparée : ' + presentation + ').', contenus: `Étape 1 « Votre foyer » : Vous êtes (Célibataire / En couple — Marié, pacsé ou union libre) ; Nombre d'enfants à charge actuellement dans votre foyer (Exemple : 2) ; ${P.arrivee} (Exemple : 2) ; ${P.legendeDate} (Jour, Mois, Année)${cle === 'adoption' ? " ; mise en avant « Les organismes autorisés pour l'adoption » et sa fenêtre (ASE, OAA, AFA, autorités étrangères)" : ''}. Étape 2 « Vos ressources » : ${P.couple ? "si en couple, deux questions sur un revenu net d'activité de plus de 6 306 € en 2024 (vous, votre conjoint) et la fenêtre « Où trouver le revenu net d'activité… » ; " : ''}Revenus nets imposables de 2024 de votre foyer en euros et la fenêtre « Où trouver le revenu net imposable du foyer ? ». Étape 3 « Récapitulatif » : réponses, Modifier le foyer, Modifier les ressources, Voir le résultat. Étape 4 « Résultat » : Simulation terminée !, avertissement, montant ${P.montantTexte} par ${P.unite}, versement, fenêtre « Accéder à la demande » (Faire une demande à la MSA / à la CAF)${P.tuileParcours ? ', tuile vers les démarches liées à l\'arrivée d\'un enfant' : ''}, questions dépliables. Message d'erreur des champs : « Veuillez renseigner cette information ».`, etats: `index.html (foyer), etat-ressources${P.couple ? ', etat-ressources-couple' : ''}, etat-recapitulatif, etat-resultat${cle === 'naissance' ? ', etat-resultat-non-eligible (revenu au-dessus du plafond, relevé avec un couple à 95 000 €)' : ''}. Les réponses sont gardées d'un écran à l'autre et reprises dans le récapitulatif ; le montant et le mois de versement suivent la saisie ; l'éligibilité n'est pas recalculée (plafonds non publiés sur le site).`, criteres: ['Chaque champ obligatoire vide affiche l\'état d\'erreur DSFR et le message du site.', 'Le récapitulatif reprend les réponses saisies.'] }));
  ecrire(simu, 'conception.md', conception({ titre: `Simulation de la ${P.titre}`, intro: 'Démarche à étapes ; chaque étape est un état de l\'écran.', composants: [
    docComposant('stepper', "Indicateur d'étapes", 'en haut de chaque étape, titre h2 de l\'étape, « Étape n sur 4 », barre de progression ; pas d\'étape suivante sur le résultat, comme le demande la doc ; aucun élément cliquable.'),
    docComposant('form', 'Formulaire', 'un `form` par étape, mention « Toutes les informations demandées sont obligatoires » en tête (texte du site), `required` sur les champs ; contrôle à l\'envoi : `fr-fieldset--error` ou `fr-input-group--error` et `fr-message--error` « Veuillez renseigner cette information » (texte du site) dans le `fr-messages-group` du champ.'),
    '- Doc lue : reference/doc/modeles/date-unique.md — bloc « date unique » (Jour, Mois, Année avec exemples), extrait officiel du modèle.',
    docComposant('radio', 'Bouton radio', 'Célibataire / En couple avec texte d\'aide sur l\'option ; Oui / Non en ligne pour les questions sur le revenu d\'activité.'),
    docComposant('input', 'Champ de saisie', 'champs numériques (`type="number"`, `inputmode="numeric"`) avec libellé et exemple en texte d\'aide.'),
    docComposant('modal', 'Modale', `fenêtres d'aide « Où trouver… », ${cle === 'adoption' ? '« Les organismes autorisés pour l\'adoption », ' : ''}« Accéder à la demande » ; ouvertes par des boutons tertiaires ou primaires.`),
    docComposant('alert', 'Alerte', 'alerte « succès » « Simulation terminée ! » avec l\'avertissement du site ; statique.'),
    docComposant('accordion', 'Accordéon', 'questions « Comprendre le résultat de votre simulation », titres h3.'),
    P.tuileParcours ? docComposant('tile', 'Tuile', 'petite tuile vers le parcours naissance du prototype.') : '',
    P.couple ? '' : docComposant('callout', 'Mise en avant', "« Les organismes autorisés pour l'adoption » : titre, texte et bouton qui ouvre la fenêtre.")
  ].filter(Boolean).join('\n'), note: `**Retenus** : étapes, champs, fenêtres et textes du site ; réponses mémorisées et récapitulatif réel. **Écartés** : fenêtre « Une erreur est survenue » du calcul (pas de calcul serveur dans le prototype). **Écarts assumés** : l'éligibilité n'est pas calculée ; le résultat éligible s'affiche toujours${cle === 'naissance' ? ', le résultat non éligible est un état à part' : ''} ; le montant est multiplié par le nombre d'enfants saisi (le site écrit « le montant est prévu pour 1 ${P.unite} ») ; les liens-boutons du site (Quitter, Modifier, retours) sont des liens de style bouton puisqu'ils naviguent. **Questions ouvertes** : publier les plafonds de ressources pour calculer l'éligibilité.` }));
}
console.log('primes naissance et adoption écrites');
