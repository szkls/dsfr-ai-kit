// « Simuler mes aides » (58 aides) : l'ancienne application du site traduite en démarche DSFR à étapes.
import { esc, ind, lien, page, ecrire, etapes, radios, dateUnique, brief, conception, docComposant, SCRIPT_SIMU } from './lib.mjs';
const ECRAN = 'mds-simulation-mes-aides';
const corps = (inner) => `        <div class="fr-container fr-mt-4v fr-mb-8v">\n            <div class="fr-grid-row fr-grid-row--gutters">\n                <div class="fr-col-12 fr-col-lg-8">\n${ind(inner, 20)}\n                </div>\n            </div>\n        </div>`;
const fil = (label) => [{ label: 'Simuler vos aides', href: lien('mds-simulateurs') }, { label: 'Simuler mes aides', href: lien(ECRAN) }, { label }];
const RETOUR = (texte, href) => `<a href="${href}" class="fr-btn fr-btn--secondary fr-icon-arrow-left-line fr-btn--icon-left fr-mb-6v">${esc(texte)}</a>`;
const BOUTONS = `<ul class="fr-btns-group fr-btns-group--inline-md fr-mt-4v">
    <li>
        <button class="fr-btn" type="submit">Suivant</button>
    </li>
    <li>
        <button class="fr-btn fr-btn--secondary" type="reset">Réinitialiser</button>
    </li>
</ul>`;
const texte = (id, nom, libelle, aide, { requis = false, nombre = false } = {}) => `<div class="fr-input-group"${requis ? ' data-requis' : ''}>
    <label class="fr-label" for="${id}">
        ${esc(libelle)}${aide ? `\n        <span class="fr-hint-text">${esc(aide)}</span>` : ''}
    </label>
    <input class="fr-input" aria-describedby="${id}-messages" id="${id}" name="${nom}" type="${nombre ? 'number' : 'text'}"${nombre ? ' inputmode="numeric" min="0"' : ''}${requis ? ' required' : ''}>
    <div class="fr-messages-group" id="${id}-messages" aria-live="polite">
    </div>
</div>`;
const libre = (h) => h.replace(/ data-requis/g, '').replace(/ required/g, '');
const cases = (id, legende, options) => `<fieldset class="fr-fieldset" id="${id}" aria-labelledby="${id}-legend ${id}-messages">
    <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="${id}-legend">
        ${esc(legende)}
    </legend>
${options.map(([nom, lib, aide], i) => `    <div class="fr-fieldset__element">
        <div class="fr-checkbox-group">
            <input name="${nom}" value="oui" id="${id}-${i + 1}" type="checkbox" aria-describedby="${id}-${i + 1}-messages">
            <label class="fr-label" for="${id}-${i + 1}">
                ${esc(lib)}${aide ? `\n                <span class="fr-hint-text">${esc(aide)}</span>` : ''}
            </label>
            <div class="fr-messages-group" id="${id}-${i + 1}-messages" aria-live="polite">
            </div>
        </div>
    </div>`).join('\n')}
    <div class="fr-messages-group" id="${id}-messages" aria-live="polite">
    </div>
</fieldset>`;
const personne = (p, legende) => [texte(`${p}-prenom`, `${p}_prenom`, 'Prénom', null), dateUnique(`${p}-naissance`, 'Date de naissance').replace(/name="(jour|mois|annee)"/g, `name="${p}_$1"`), libre(radios(`${p}-sexe`, `${p}_sexe`, 'Sexe', [['feminin', 'Féminin'], ['masculin', 'Masculin']], { enLigne: true }))].join('\n');
const etat = (fichier, titre, n, suivant, contenu) => ecrire(ECRAN, fichier, page({ titre: `${titre} - Simuler mes aides`, fil: fil(titre), main: corps(`${etapes(titre, n, 5, suivant)}\n${contenu}`), script: SCRIPT_SIMU }).replace('<main role="main" id="content">', '<main role="main" id="content" data-simulation="mes-aides">'));
// 1. foyer
etat('index.html', 'Votre foyer', 1, 'Votre situation', `<h1 class="fr-mt-6v">Votre foyer</h1>
<p>Vous pouvez modifier sur cet écran la composition de votre foyer pour effectuer votre simulation.</p>
<form action="etat-situation.html" data-etape="foyer" novalidate>
    <h2>Vous</h2>
    <p class="fr-text--sm">Préciser vos données personnelles</p>
${ind(personne('vous'), 4).replace('<div class="fr-input-group">', '<div class="fr-input-group">')}
    <h2 class="fr-mt-6v">Votre situation matrimoniale</h2>
${ind(radios('vie', 'vie', 'Vous vivez', [['seul', 'seul(e)'], ['couple', 'en couple']], { enLigne: true }), 4)}
    <div data-si="vie=couple" hidden>
${ind(libre(radios('duree-couple', 'duree_couple', 'depuis', [['plus18', 'plus de 18 mois'], ['moins18', 'moins de 18 mois']])), 8)}
        <h3>Votre conjoint</h3>
${ind(personne('conjoint'), 8)}
    </div>
    <h2 class="fr-mt-6v">Enfants ou personnes à charge</h2>
    <button type="button" class="fr-btn fr-btn--secondary fr-icon-add-line fr-btn--icon-left" data-afficher="bloc-enfant" aria-expanded="false" aria-controls="bloc-enfant">ajouter un enfant ou une personne à charge</button>
    <div id="bloc-enfant" class="fr-mt-4v" hidden>
        <h3>Ajouter un enfant ou une personne à charge</h3>
${ind(personne('enfant'), 8)}
    </div>
${ind(BOUTONS, 4)}
</form>`);
// 2. situation
etat('etat-situation.html', 'Votre situation', 2, 'Votre logement', `${RETOUR("Revenir à l'étape foyer", 'index.html')}
<h1>Votre situation</h1>
<p>Passez directement à l'étape suivante si vous n'êtes dans aucune de ces situations</p>
<form action="etat-logement.html" data-etape="situation" novalidate>
${ind(cases('situations', 'vous êtes...', [['reprise', "en reprise d'activité"], ['cer', 'en CER ou en PPAE'], ['handicap', 'en situation de handicap'], ['invalidite', 'en situation d’invalidité'], ['alsace', 'régime Alsace Moselle']]), 4)}
    <div data-si="reprise=oui" hidden>
${ind(libre(radios('reprise-en', 'reprise_en', 'vous reprenez votre activité en', [['formation', 'formation'], ['cdd', 'CDD'], ['cdi', 'CDI'], ['entreprise', "création ou reprise d'entreprise"]])), 8)}
    </div>
${ind(BOUTONS, 4)}
</form>`);
// 3. logement
const ouiNon = (id, nom, leg) => libre(radios(id, nom, leg, [['oui', 'oui'], ['non', 'non']], { enLigne: true }));
etat('etat-logement.html', 'Votre logement', 3, 'Vos ressources', `${RETOUR("Revenir à l'étape situation", 'etat-situation.html')}
<h1>Votre logement</h1>
<form action="etat-ressources.html" data-etape="logement" novalidate>
${ind(texte('code-postal', 'code_postal', 'Le code postal de votre résidence principale est...', null, { requis: true }), 4)}
${ind(radios('statut', 'statut', 'Vous êtes actuellement', [['locataire', 'locataire'], ['proprietaire', 'propriétaire'], ['autre', 'autre']]), 4)}
    <div data-si="statut=locataire" hidden>
${ind([libre(radios('conventionne', 'conventionne', 'Votre logement est...', [['oui', 'conventionné'], ['non', 'non conventionné'], ['nsp', 'je ne sais pas']])), ouiNon('colocation', 'colocation', "Il s’agit d'une colocation"), ouiNon('chambre', 'chambre', "Il s’agit d'une chambre"), libre(radios('meuble', 'meuble', 'Votre logement est...', [['non', 'non meublé'], ['oui', 'meublé/hôtel'], ['foyer', 'foyer/résidence/EHPAD ou autres structures assimilées'], ['crous', 'logement CROUS']])), ouiNon('parente', 'parente', 'Vous avez un lien de parenté avec le propriétaire...')].join('\n'), 8)}
    </div>
${ind(BOUTONS, 4)}
</form>`);
// 4. ressources
etat('etat-ressources.html', 'Vos ressources', 4, 'Résultat', `${RETOUR("Revenir à l'étape logement", 'etat-logement.html')}
<h1>Vos ressources</h1>
<form action="etat-resultat.html" data-etape="ressources" novalidate>
${ind(texte('rfr', 'rfr', 'Revenu fiscal de référence 2024 du foyer', '(présent sur votre avis d’imposition 2025) en €', { nombre: true }), 4)}
    <p>Pensez à compléter vos ressources des 12 derniers mois pour chaque membre du foyer.</p>
    <p>Les résultats de la simulation seront basés sur ces informations.</p>
${ind(cases('aucune-ressource', 'Vous', [['aucune', 'aucune ressource']]), 4)}
    <p>
        <a href="etat-ressources-ajout.html" class="fr-btn fr-btn--secondary fr-icon-add-line fr-btn--icon-left">Ajouter des ressources</a>
    </p>
${ind(BOUTONS, 4)}
</form>`);
etat('etat-ressources-ajout.html', 'Vos ressources', 4, 'Résultat', `${RETOUR('Retour résumé', 'etat-ressources.html')}
<h1>Ajoutez des ressources supplémentaires</h1>
<p>Indiquez toutes vos ressources nettes imposables, avant prélèvement à la source, perçues en France comme à l'étranger.</p>
<form action="etat-resultat.html" data-etape="ressources-ajout" novalidate>
${ind(cases('categories', 'Catégories de ressources', [['activite', "Revenus d'activité :", "salaires, primes, revenus de stage, bénéfice industriel et commercial, non commercial ou agricole, chômage, prime d'activité, chiffre d'affaires"], ['indemnites', 'Indemnités :', "indemnité journalière maladie, maternité, paternité, professionnelle, d'accident du travail, de volontariat, travailleur indépendant et exploitant agricole, dédommagement victime de l'amiante"], ['pensions', 'Pensions ou rentes :', "d'invalidité, retraite, réversion, rente, d'accident du travail, ATEXA, de combattant"], ['alimentaires', 'Pensions alimentaires, charges et frais :', 'pensions alimentaires reçues, versées, prestations compensatoires reçues, autres charges à déduire du revenu, frais déductibles'], ['allocations', 'Allocations :', "prestations familiales (allocations familiales, prestations liées à l'arrivée, à la garde, au handicap d'un enfant...), allocation logement, minima sociaux (AAH, RSA)"], ['patrimoine', 'Revenus patrimoniaux et gains :', 'revenus locatifs, revenus du capital, plus-values et gains divers, gains exceptionnels']]), 4)}
    <button class="fr-btn" type="submit">Suivant</button>
</form>`);
// 5. résultat
etat('etat-resultat.html', 'Résultat', 5, null, `${RETOUR("Revenir à l'étape ressources", 'etat-ressources.html')}
<h1>Résultat</h1>
<div class="fr-alert fr-alert--info">
    <h2 class="fr-alert__title">Information : résultat de la simulation</h2>
    <p>Selon les informations qui ont été saisies, vous ne pouvez pas bénéficier de prestation sociale.</p>
</div>
<ul class="fr-links-group fr-mt-6v">
    <li>
        <a href="index.html" class="fr-link fr-icon-pencil-line fr-link--icon-left">Modifier la simulation</a>
    </li>
    <li>
        <a href="${lien('mds-simulateurs')}" class="fr-link fr-icon-arrow-left-line fr-link--icon-left">Revenir aux simulateurs</a>
    </li>
</ul>`);
ecrire(ECRAN, 'brief.md', brief({ titre: '« Simuler mes aides » (58 aides), traduit en DSFR', source: 'https://www.mesdroitssociaux.gouv.fr/dd1pnds-ria/#destination/simu-foyer et ses étapes simu-situation, simu-logement, simu-ressources, simu-resultat (ancienne application hors charte, ouvertes une à une avec leurs fenêtres d\'édition)', story: "En tant qu'usager, je veux décrire mon foyer, ma situation, mon logement et mes ressources une seule fois, afin de connaître toutes les aides auxquelles je peux prétendre.", depart: 'Démarche à étapes DSFR (Foyer, Situation, Logement, Ressources, Résultat). Les fenêtres d\'édition du site (données personnelles, situation matrimoniale, enfant à charge) deviennent des champs dans la page, comme le recommande la doc de la modale pour les formulaires.', contenus: "Foyer : « Vous pouvez modifier sur cet écran la composition de votre foyer pour effectuer votre simulation. » ; Vous (Prénom, Date de naissance, Sexe Féminin/Masculin) ; Vous vivez seul(e) / en couple, depuis plus de 18 mois / moins de 18 mois ; conjoint ; « ajouter un enfant ou une personne à charge ». Situation : « Passez directement à l'étape suivante si vous n'êtes dans aucune de ces situations » ; vous êtes... en reprise d'activité (formation, CDD, CDI, création ou reprise d'entreprise), en CER ou en PPAE, en situation de handicap, en situation d’invalidité, régime Alsace Moselle. Logement : code postal ; locataire / propriétaire / autre ; pour un locataire : conventionné, colocation, chambre, meublé, lien de parenté. Ressources : revenu fiscal de référence 2024 du foyer (présent sur votre avis d’imposition 2025), rappel des 12 derniers mois, aucune ressource, Ajouter des ressources (six catégories décrites). Résultat relevé : « Selon les informations qui ont été saisies, vous ne pouvez pas bénéficier de prestation sociale. » Boutons Suivant et Réinitialiser.", etats: 'index.html, etat-situation, etat-logement, etat-ressources, etat-ressources-ajout, etat-resultat. Questions conditionnelles affichées selon les réponses ; le résultat est celui relevé, sans calcul.' }));
ecrire(ECRAN, 'conception.md', conception({ titre: 'Simuler mes aides', intro: "Traduction en DSFR de l'ancienne application du simulateur global.", composants: [docComposant('stepper', "Indicateur d'étapes", 'cinq étapes, résultat sans étape suivante.'), docComposant('form', 'Formulaire', 'une étape par page, boutons « Suivant » et « Réinitialiser » du site en groupe de boutons ; date de naissance obligatoire et situation de vie obligatoires, le reste facultatif comme sur le site.'), '- Doc lue : reference/doc/modeles/date-unique.md — dates de naissance en trois champs.', docComposant('radio', 'Bouton radio', 'sexe, vie seul(e)/en couple, statut et détails du logement.'), docComposant('checkbox', 'Case à cocher', 'situations (cinq choix) et catégories de ressources (six choix, gardées en cases car le choix est multiple ; précision de chaque catégorie en texte d\'aide).'), docComposant('input', 'Champ de saisie', 'prénoms, code postal, revenu fiscal de référence.'), docComposant('alert', 'Alerte', 'résultat en alerte « information » statique.'), docComposant('modal', 'Modale', 'écartée : la doc la déconseille pour des formulaires ; les fenêtres d\'édition du site deviennent des champs dans la page.')].join('\n'), note: "**Retenus** : étapes, questions et libellés du site (en minuscules, comme sur le site). **Écartés** : illustrations, panneau « SYNTHÈSE » latéral, bulle « Le saviez-vous ? », fenêtres d'édition. **Écarts assumés** : liens « Revenir à l'étape … » ajoutés (l'indicateur DSFR n'est pas cliquable, contrairement à la frise du site) ; titre « Votre conjoint » et légende « Catégories de ressources » ajoutés pour structurer les champs ; un seul bloc enfant ; le résultat affiché est celui relevé sans données, car le site n'a pas pu être parcouru avec une situation complète. **Questions ouvertes** : relever les écrans de saisie de chaque catégorie de ressources et un résultat avec aides ; confirmer les champs obligatoires." }));
console.log('Simuler mes aides écrit');
