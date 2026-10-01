// Outil « aides en cas de décès » (parcours-deces-assistant du site) : formulaire de situation et aides proposées.
import { esc, ind, lien, ext, page, ecrire, lienRetour, tuile, brief, conception, docComposant, radios } from './lib.mjs';
const corps = (inner) => `        <div class="fr-container fr-mt-4v fr-mb-8v">
            <div class="fr-grid-row fr-grid-row--gutters">
                <div class="fr-col-12 fr-col-lg-8">
${ind(inner, 20)}
                </div>
            </div>
        </div>`;
const nombre = (id, nom, libelle) => `<div class="fr-input-group">
    <label class="fr-label" for="${id}">
        ${esc(libelle)}
        <span class="fr-hint-text">ans</span>
    </label>
    <input class="fr-input" aria-describedby="${id}-messages" id="${id}" name="${nom}" type="number" inputmode="numeric" min="0">
    <div class="fr-messages-group" id="${id}-messages" aria-live="polite">
    </div>
</div>`;
const cases = (id, legende, options) => `<fieldset class="fr-fieldset" id="${id}" aria-labelledby="${id}-legend ${id}-messages">
    <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="${id}-legend">
        ${esc(legende)}
    </legend>
${options.map((o, i) => `    <div class="fr-fieldset__element">
        <div class="fr-checkbox-group">
            <input name="${id}" value="${i + 1}" id="${id}-${i + 1}" type="checkbox" aria-describedby="${id}-${i + 1}-messages">
            <label class="fr-label" for="${id}-${i + 1}">
                ${esc(o)}
            </label>
            <div class="fr-messages-group" id="${id}-${i + 1}-messages" aria-live="polite">
            </div>
        </div>
    </div>`).join('\n')}
    <div class="fr-messages-group" id="${id}-messages" aria-live="polite">
    </div>
</fieldset>`;
const sansRequis = (h) => h.replace(/ data-requis/g, '').replace(/ required/g, '');
const AIDES = [
  ['Aide aux Situations de Rupture (ASIR)', "L'Aide aux situations de Rupture (ASIR) est une aide ponctuelle, de 3 mois maximum, proposée par l'Assurance Retraite aux personnes retraités (Gir 5/6 ou on girées) permettant de faire face aux situations de rupture, telles que la perte d’un conjoint. L’ASIR vise une amélioration des conditions de vie à domicile, ainsi qu’un accompagnement administratif, de gestion budgétaire, de soutien moral et d’aide dans les tâches domestiques. La demande doit être faite dans les 6 mois suivant le décès et l'aide pourra être mise en place après évaluation des besoins.", 'https://www.lassuranceretraite.fr/portail-info/files/live/sites/pub/files/PDF/demande-aide-situa-rupture.pdf'],
  ['Allocation de Solidarité aux Personnes Agées', "L’allocation de solidarité aux personnes âgées (ASPA) vise à garantir un minimum de ressources aux personnes aux revenus faibles, versée à partir de 65 ans ou après l'âge légal de départ à la retraite dans certaines situations. Si vous êtes reconnu inapte au travail ou ayant une incapacité permanente d’au moins 50% la condition d'âge est comprise entre 62 et 65 ans.", 'https://www.lassuranceretraite.fr/portail-info/files/live/sites/pub/files/PDF/PS/demande-aspa.pdf'],
  ['Capital Décès pour les ayants droit', "Le capital décès est une indemnité qui garantit le versement d'un capital aux ayants droit d'un salarié décédé, sous certaines conditions. Son montant est forfaitaire. Les ayants droit doivent en faire la demande à la Caisse Primaire d'Assurance Maladie (CPAM) dont dépendait le défunt au moment du décès. La demande de capital décès doit être faite dans un certain délai.", 'https://www.ameli.fr/sites/default/files/formualires/169/s3180.pdf']
];
const SIMULER = [['Aides au Logement', 'AL', 'mds-simulateur-aide-logement'], ['Revenu de Solidarité Active', 'RSA', 'mds-simulateur-rsa-pa'], ['Complémentaire Santé Solidaire', 'CSS', 'mds-simulateur-css']];
const ecran = 'mds-parcours-deces-aides';
const formulaire = `<form id="form-aides-deces" novalidate>
    <h3>À propos du défunt</h3>
${ind([nombre('age-defunt', 'age_defunt', 'Âge du défunt'), cases('situation-defunt', 'Situation du défunt', ['Retraité', 'Salarié', "Demandeur d'emploi", 'En arrêt maladie', 'Autre Situation']), sansRequis(radios('pension-defunt', 'pension_defunt', "Le défunt bénéficiait-il d'une pension, d'une rente ou d'une allocation ?", [['oui', 'Oui'], ['non', 'Non']], { enLigne: true })), `<div data-si-oui="pension_defunt" hidden>\n${ind(cases('pensions-defunt', 'Pension, rente ou allocation du défunt', ["Pension d'invalidité", 'Rente Accident du travail/maladie professionnelle', 'AAH Allocation Adulte Handicapé']), 4)}\n</div>`].join('\n'), 4)}
    <h3 class="fr-mt-6v">À propos de vous</h3>
${ind([nombre('age-demandeur', 'age_demandeur', 'Votre âge'), sansRequis(radios('lien-defunt', 'lien_defunt', 'Votre lien avec le défunt', [['marie', 'Marié(e)'], ['pacse', 'Pacsé(e)/Concubin(e)'], ['divorce', 'Divorcé(e)'], ['enfant', 'Enfant']])), sansRequis(radios('remarie', 'remarie', 'Etes-vous remarié(e) ?', [['oui', 'Oui'], ['non', 'Non']], { enLigne: true })), sansRequis(radios('enfants-charge', 'enfants_charge', 'Avez-vous des enfants à charge ?', [['oui', 'Oui'], ['non', 'Non']], { enLigne: true })), `<div data-si-oui="enfants_charge" hidden>\n${ind(sansRequis(`<div class="fr-input-group">\n    <label class="fr-label" for="nombre-enfants">\n        Nombre d'enfants à charge\n    </label>\n    <input class="fr-input" aria-describedby="nombre-enfants-messages" id="nombre-enfants" name="nombre_enfants" type="number" inputmode="numeric" min="0">\n    <div class="fr-messages-group" id="nombre-enfants-messages" aria-live="polite">\n    </div>\n</div>`), 4)}\n</div>`, sansRequis(radios('caisse-maladie', 'caisse_maladie', "Votre caisse d'assurance maladie", [['cpam', 'CPAM'], ['msa', 'MSA'], ['autre', 'Autre']])), sansRequis(radios('caisse-famille', 'caisse_famille', "Votre caisse d'allocations familiales", [['caf', 'CAF'], ['msa', 'MSA'], ['aucune', 'Aucune']]))].join('\n'), 4)}
    <ul class="fr-btns-group fr-btns-group--inline-md fr-mt-4v">
        <li>
            <button class="fr-btn" type="submit">Afficher les aides et prestations</button>
        </li>
        <li>
            <button class="fr-btn fr-btn--secondary" type="reset">Réinitialiser</button>
        </li>
    </ul>
</form>`;
const resultats = (visible) => `<div id="resultats-aides" class="fr-mt-8v"${visible ? '' : ' hidden'}>
    <h2 id="titre-resultats" tabindex="-1">VOUS POURRIEZ PRETENDRE A …</h2>
${AIDES.map(([t, d, pdf]) => `    <h3 class="fr-mt-6v">${esc(t)}</h3>\n    <p>${esc(d)}</p>\n    <p>\n        <a href="${pdf}" target="_blank" rel="noopener external" title="Télécharger le formulaire de demande - ${esc(t)} - nouvelle fenêtre" class="fr-link">Télécharger le formulaire de demande</a>\n    </p>`).join('\n')}
    <h2 class="fr-mt-8v">PENSEZ A SIMULER VOS AIDES EN CAS DE DIMINUTION DE VOS REVENUS</h2>
    <div class="fr-grid-row fr-grid-row--gutters">
${SIMULER.map(([t, s, e], i) => `        <div class="fr-col-12 fr-col-md-4">\n${ind(tuile({ id: `tile-simuler-${i + 1}`, titre: t, href: lien(e), detail: s }), 12)}\n        </div>`).join('\n')}
    </div>
</div>`;
const SCRIPT = `    <script>
      (function () {
        var form = document.getElementById('form-aides-deces'), res = document.getElementById('resultats-aides');
        function conditions() { document.querySelectorAll('[data-si-oui]').forEach(function (b) { var c = form.querySelector('input[name="' + b.getAttribute('data-si-oui') + '"]:checked'); b.hidden = !(c && c.value === 'oui'); }); }
        form.addEventListener('change', conditions);
        form.addEventListener('reset', function () { setTimeout(function () { conditions(); res.hidden = true; }, 0); });
        form.addEventListener('submit', function (e) { e.preventDefault(); res.hidden = false; document.getElementById('titre-resultats').focus(); });
        conditions();
      })();
    </script>
  `;
const main = (visible) => corps(`<p>
    ${lienRetour('Retour au parcours Décès', lien('mds-parcours-deces'))}
</p>
<h1>Vous faites face au décès d’un proche</h1>
<p class="fr-text--lead">Lors du décès d'un proche, certaines démarches doivent être faites rapidement.</p>
<h2>A PROPOS DE VOUS ET DU DEFUNT</h2>
<p>En fonction de la situation du défunt et de la vôtre, retrouvez en détail les aides et prestations dont vous pouvez bénéficier.</p>
${formulaire}
${resultats(visible)}`);
const fil = [{ label: 'Vos évènements de vie', href: lien('mds-evenements-de-vie') }, { label: 'Vous faites face au décès d’un proche', href: lien('mds-parcours-deces') }, { label: 'Aides et prestations' }];
ecrire(ecran, 'index.html', page({ titre: 'Aides et prestations en cas de décès', rubrique: 'evenements', courant: 'true', fil, main: main(false), script: SCRIPT }));
ecrire(ecran, 'etat-resultats.html', page({ titre: 'Aides et prestations en cas de décès', rubrique: 'evenements', courant: 'true', fil, main: main(true), script: SCRIPT }));
ecrire(ecran, 'brief.md', brief({ titre: 'Outil « aides en cas de décès », traduit en DSFR', source: 'https://www.mesdroitssociaux.gouv.fr/vos-evenements-de-vie/parcours-deces-assistant (questions remplies pas à pas, aides affichées pour une situation d\'essai)', story: "En tant que proche d'une personne décédée, je veux décrire la situation du défunt et la mienne, afin de connaître les aides et prestations que je peux demander.", contenus: "Retour au parcours Décès. Titre et chapô du parcours. « A PROPOS DE VOUS ET DU DEFUNT » et son texte. À propos du défunt : Âge du défunt (ans) ; Situation du défunt (Retraité, Salarié, Demandeur d'emploi, En arrêt maladie, Autre Situation, choix multiples) ; Le défunt bénéficiait-il d'une pension, d'une rente ou d'une allocation ? (Oui/Non ; si Oui : Pension d'invalidité, Rente Accident du travail/maladie professionnelle, AAH Allocation Adulte Handicapé). À propos de vous : Votre âge ; Votre lien avec le défunt (Marié(e), Pacsé(e)/Concubin(e), Divorcé(e), Enfant) ; Etes-vous remarié(e) ? ; Avez-vous des enfants à charge ? (si Oui : Nombre d'enfants à charge) ; Votre caisse d'assurance maladie (CPAM, MSA, Autre) ; Votre caisse d'allocations familiales (CAF, MSA, Aucune). Boutons Afficher les aides et prestations, Réinitialiser. Résultats : « VOUS POURRIEZ PRETENDRE A … » : ASIR, ASPA, Capital Décès pour les ayants droit, chacune avec sa description et son formulaire PDF ; « PENSEZ A SIMULER VOS AIDES EN CAS DE DIMINUTION DE VOS REVENUS » : Aides au Logement (AL), Revenu de Solidarité Active (RSA), Complémentaire Santé Solidaire (CSS).", etats: 'index.html (formulaire) et etat-resultats.html (aides affichées). Les questions conditionnelles apparaissent selon les réponses ; « Afficher les aides et prestations » montre la liste relevée pour la situation d\'essai (retraité de 75 ans, conjoint marié) : le prototype ne recalcule pas les aides selon les réponses.' }));
ecrire(ecran, 'conception.md', conception({ titre: 'Aides en cas de décès', intro: 'Outil du parcours décès, sur le site affiché à la place du parcours ; ici écran à part relié au parcours.', composants: [docComposant('form', 'Formulaire', 'questions en deux groupes titrés h3 (« À propos du défunt », « À propos de vous »), aucune réponse obligatoire (comme sur le site), groupe de boutons en fin de formulaire : envoi et réinitialisation.'), docComposant('checkbox', 'Case à cocher', 'deux ensembles de cases (situation du défunt, 5 choix ; pensions, 3 choix), liste verticale comme le demande la doc.'), docComposant('radio', 'Bouton radio', 'Oui/Non en ligne ; lien avec le défunt et caisses en liste verticale.'), docComposant('input', 'Champ de saisie', 'âges et nombre d\'enfants en champs numériques, « ans » en texte d\'aide.'), docComposant('tile', 'Tuile', 'trois tuiles vers les simulateurs du prototype, sigle en détail.')].join('\n'), note: "**Retenus** : questions, ordre et textes du site ; aides relevées avec leur formulaire. **Écartés** : bouton « MODIFIER MES INFORMATIONS » qui replie le formulaire sur le site (le formulaire reste visible au-dessus des résultats). **Écarts assumés** : les aides affichées sont celles relevées pour une situation d'essai, pas un calcul ; « Faire une simulation » mène sur le site au hub des simulateurs, ici directement au simulateur de chaque aide ; les liens de téléchargement sont des liens externes (le poids des fichiers n'est pas connu, le lien de téléchargement du DSFR l'exige) ; l'outil devient un écran à part au lieu de remplacer le contenu du parcours. **Questions ouvertes** : fournir les règles d'attribution pour calculer les aides ; libellé « Pension, rente ou allocation du défunt » ajouté comme légende du second groupe de cases, absent du site." }));
console.log('outil aides décès écrit');
