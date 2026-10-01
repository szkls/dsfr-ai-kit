// Hub des simulateurs et pages d'entrée : aide au logement, CSS (connexion), AAH et RSA-PA (prérequis), garde d'enfant, CMG.
import { releve, esc, ind, lien, ext, page, ecrire, lienRetour, hautDePage, tuile, accordeons, brief, conception, docComposant } from './lib.mjs';
const corps = (inner) => `        <div class="fr-container fr-mt-4v fr-mb-8v">
            <div class="fr-grid-row fr-grid-row--gutters">
                <div class="fr-col-12 fr-col-lg-8">
${ind(inner, 20)}
                </div>
            </div>
        </div>`;
const HUB = lien('mds-simulateurs'), MES_AIDES = lien('mds-simulation-mes-aides');
const filHub = (label) => [{ label: 'Simuler vos aides', href: HUB }, { label }];
const retour = `<p>\n    ${lienRetour('Revenir aux simulateurs', HUB)}\n</p>`;
const CONNECT = `<div class="fr-connect-group">
    <button class="fr-connect" type="button">
        <span class="fr-connect__login">S’identifier avec</span>
        <span class="fr-connect__brand">FranceConnect</span>
    </button>
    <p>
        <a href="https://franceconnect.gouv.fr/" target="_blank" rel="noopener" title="Qu’est-ce que FranceConnect ? - nouvelle fenêtre">Qu’est-ce que FranceConnect ?</a>
    </p>
</div>`;
const blocConnexion = (aide, extra = '') => `<h2 class="fr-h4 fr-mt-6v">Plus rapide, plus simple</h2>
<p class="fr-text--lg">Connectez-vous et simulez ${aide} avec vos informations pré-remplies.</p>
${CONNECT}
${extra}<h2 class="fr-h4 fr-mt-6v">Sans identification</h2>
<p>Sans vous identifier, vous pouvez simuler diverses aides dont ${aide} depuis le simulateur "Simuler mes aides".</p>
<a href="${MES_AIDES}" class="fr-btn fr-btn--secondary">Simuler mes aides</a>`;
const ecrireDoc = (ecran, b, c) => { ecrire(ecran, 'brief.md', brief(b)); ecrire(ecran, 'conception.md', conception(c)); };
const DOC_CONNECT = docComposant('connect', 'Bouton FranceConnect', 'bouton dans le corps de page avec son lien d\'information ; il mène à la page de limite du prototype.');

// ---------- aide au logement, CSS : connexion ou simulateur global
for (const [ecran, rel, aide, extra] of [['mds-simulateur-aide-logement', 'sim-logement', 'les Aides au Logement', ''], ['mds-simulateur-css', 'sim-css', 'la Complémentaire Santé Solidaire', `<p class="fr-mb-0 fr-text--bold">Vous êtes célibataire et adhérent de la MSA (Mutualité Sociale Agricole) ?</p>
<p class="fr-mb-0">Si vous avez droit à la fin de la simulation, faites votre demande directement sur le site de la MSA avec les informations déjà remplies !</p>
<p>Nous vous conseillons de réaliser cette démarche sur un ordinateur.</p>
`]]) {
  const r = releve(rel); const h1 = r.h1[0];
  ecrire(ecran, 'index.html', page({ titre: h1, fil: filHub(h1.replace('Prérequis pour simuler ', '').replace(/^(les|la|l') ?/, '')), main: corps(`${retour}
<h1>${esc(h1)}</h1>
${blocConnexion(aide, extra)}`) }));
  ecrireDoc(ecran, { titre: `${h1}, traduit en DSFR`, source: r.url, story: `En tant qu'usager, je veux simuler ${aide}, soit en me connectant pour avoir mes informations pré-remplies, soit sans identification, afin de connaître mes droits.`, contenus: `Lien Revenir aux simulateurs. Titre (h1) : ${h1}. « Plus rapide, plus simple » : Connectez-vous et simulez ${aide} avec vos informations pré-remplies ; bouton FranceConnect.${extra ? ' Encart MSA : Vous êtes célibataire et adhérent de la MSA ? … Nous vous conseillons de réaliser cette démarche sur un ordinateur.' : ''} « Sans identification » : texte et bouton Simuler mes aides.`, etats: 'Un seul état. FranceConnect mène à la page de limite du prototype ; « Simuler mes aides » au simulateur global.' }, { titre: h1, intro: 'Page d\'entrée d\'un simulateur qui demande une connexion.', composants: DOC_CONNECT, note: '**Retenus** : deux voies, connexion ou simulateur global. **Écartés** : aucun. **Écarts assumés** : les boutons « Revenir aux simulateurs » et « Simuler mes aides » du site naviguent : le premier devient un lien, le second un lien de style bouton secondaire. **Questions ouvertes** : aucune.' });
}

// ---------- prérequis RSA-PA et AAH (questions Oui/Non, texte selon les réponses)
const coupe = (l) => { const i = l.indexOf('?'); return i > 0 && i < l.length - 1 ? [l.slice(0, i + 1).trim(), l.slice(i + 1).trim()] : [l, null]; };
const question = (id, legende) => { const [q, aide] = coupe(legende); return `<fieldset class="fr-fieldset" id="${id}" aria-labelledby="${id}-legend ${id}-messages">
    <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="${id}-legend">
        ${esc(q)}${aide ? `\n        <span class="fr-hint-text">${esc(aide)}</span>` : ''}
    </legend>
    <div class="fr-fieldset__element${aide ? '' : ' fr-fieldset__element--inline'}">
        <div class="fr-radio-group">
            <input value="oui" type="radio" id="${id}-1" name="${id}">
            <label class="fr-label" for="${id}-1">
                Oui
            </label>
        </div>
    </div>
    <div class="fr-fieldset__element${aide ? '' : ' fr-fieldset__element--inline'}">
        <div class="fr-radio-group">
            <input value="non" type="radio" id="${id}-2" name="${id}">
            <label class="fr-label" for="${id}-2">
                Non
            </label>
        </div>
    </div>
    <div class="fr-messages-group" id="${id}-messages" aria-live="polite">
    </div>
</fieldset>`; };
// issues : [condition (indice de la question à Oui, -1 = toutes à Non), html]
const SCRIPT_PREREQUIS = (ids) => `    <script>
      (function () {
        var ids = ${JSON.stringify(ids)};
        function maj() {
          var v = ids.map(function (id) { var c = document.querySelector('input[name="' + id + '"]:checked'); return c ? c.value : null; });
          var complet = v.every(function (x) { return x; });
          var oui = v.indexOf('oui');
          document.querySelectorAll('[data-issue]').forEach(function (el) { el.hidden = !complet || +el.getAttribute('data-issue') !== oui; });
        }
        document.querySelector('form[data-prerequis]').addEventListener('change', maj);
        maj();
      })();
    </script>
  `;
const prerequis = ({ ecran, rel, variantes, aide, issues }) => {
  const r = releve(rel); const h1 = r.h1[0];
  const legendes = r.lignes.filter((l) => l.startsWith('[legend')).map((l) => l.match(/^\[legend "(.*)"\]/)[1]);
  const ids = legendes.map((_, i) => `question-${i + 1}`);
  const intro = r.lignes.find((l) => l.includes('{fr-text--xl}')).replace(/ \{.*$/, '');
  ecrire(ecran, 'index.html', page({ titre: h1, fil: filHub(aide), main: corps(`${retour}
<h1>${esc(h1)}</h1>
<p class="fr-text--lead">${esc(intro)}</p>
<form data-prerequis>
${ind(legendes.map((l, i) => question(ids[i], l)).join('\n'), 4)}
</form>
${issues.map(([k, html]) => `<div data-issue="${k}" class="fr-mt-4v" hidden>\n${ind(html, 4)}\n</div>`).join('\n')}`), script: SCRIPT_PREREQUIS(ids) }));
  return { r, h1, legendes, intro };
};
const alerteSituation = (titre, texte) => `<div class="fr-alert fr-alert--info" role="status">
    <h2 class="fr-alert__title">${esc(titre)}</h2>
    <p>${esc(texte)}</p>
</div>
<p class="fr-mt-4v">
    <a href="${MES_AIDES}" class="fr-btn fr-btn--secondary">Simuler mes aides</a>
</p>`;
{
  const RSA = 'Pour simuler vos droits au Revenu de Solidarité Active (RSA) et à la Prime d\'Activité (PA), nous vous invitons à utiliser le simulateur "Simuler mes aides".';
  const p = prerequis({ ecran: 'mds-simulateur-rsa-pa', rel: 'sim-rsa-pa', aide: 'RSA et Prime d\'Activité', issues: [[-1, `<a href="${lien('mds-simulation-rsa-pa')}" class="fr-btn">Simuler le RSA et la PA</a>`], ...[0, 1, 2].map((k) => [k, alerteSituation("Votre situation n'est pas prise en compte dans ce simulateur", RSA)])] });
  ecrireDoc('mds-simulateur-rsa-pa', { titre: `${p.h1}, traduit en DSFR`, source: p.r.url + ' (variantes relevées pour chaque réponse)', story: "En tant qu'usager, je veux savoir si le simulateur du RSA et de la prime d'activité convient à ma situation, afin de simuler au bon endroit.", contenus: `Titre (h1) : ${p.h1}. Introduction : ${p.intro} Trois questions Oui/Non : ${p.legendes.join(' ; ')}. Toutes à Non : bouton « Simuler le RSA et la PA ». Une réponse Oui : « Votre situation n'est pas prise en compte dans ce simulateur » ; ${RSA} ; bouton Simuler mes aides.`, etats: 'Un seul fichier, contenu de fin affiché selon les réponses (petit script de la page). « Simuler le RSA et la PA » mène à la simulation du prototype, « Simuler mes aides » au simulateur global.' }, { titre: 'Prérequis RSA et prime d\'activité', intro: 'Page de questions préalables.', composants: [docComposant('form', 'Formulaire', 'questions regroupées dans un `form` sans envoi ; chaque question est un `fieldset` avec légende et `fr-messages-group`.'), docComposant('radio', 'Bouton radio', 'trois groupes Oui / Non, en liste verticale quand la question a une précision en texte d\'aide (la doc préfère les listes verticales), en ligne sinon (deux options courtes).'), docComposant('alert', 'Alerte', 'alerte « information » avec titre, `role="status"` car affichée après les réponses.')].join('\n'), note: '**Retenus** : questions et issues du site. **Écartés** : aucun. **Écarts assumés** : la précision de chaque question (« Ex : … ») passe en texte d\'aide sous la légende ; le message de situation non prise en compte devient une alerte d\'information. **Questions ouvertes** : aucune.' });
}
{
  const p = prerequis({ ecran: 'mds-simulateur-aah', rel: 'sim-aah', aide: 'Allocation aux Adultes Handicapés', issues: [
    [-1, blocConnexion("l'Allocation aux Adultes Handicapés")],
    [0, alerteSituation('Vous avez plus de 62 ans', 'Au dessus de 62 ans, l\'Allocation aux Adultes Handicapés ne peut plus être perçue. Vous avez la possibilité de simuler d\'autres aides sur le simulateur "Simuler mes aides".')],
    [1, alerteSituation('Travailleurs non salarié', 'Votre situation n\'est pas prise en compte dans ce simulateur. Nous vous invitons à simuler l\'Allocation aux Adultes Handicapés sur le simulateur "Simuler mes aides".')],
    [2, `<div class="fr-alert fr-alert--info fr-alert--sm" role="status">\n    <p>Si vous travaillez en Etablissement et Service d’Accompagnement par le Travail (ESAT), le simulateur de l’Allocation aux Adultes Handicapés ne prend pas en compte cette situation. Votre droit à l’AAH sera calculé comme un salarié.</p>\n</div>\n${blocConnexion("l'Allocation aux Adultes Handicapés").replace(/<button class="fr-connect"/, '<button class="fr-connect"')}`]
  ] });
  ecrireDoc('mds-simulateur-aah', { titre: `${p.h1}, traduit en DSFR`, source: p.r.url + ' (variantes relevées pour chaque réponse)', story: "En tant que personne en situation de handicap, je veux savoir si le simulateur de l'AAH convient à ma situation, afin de simuler au bon endroit.", contenus: `Titre (h1) : ${p.h1}. Introduction : ${p.intro} Trois questions Oui/Non : ${p.legendes.join(' ; ')}. Toutes à Non : connexion FranceConnect (« Plus rapide, plus simple ») ou « Sans identification » et Simuler mes aides. Plus de 62 ans : message et Simuler mes aides. Non salarié : message et Simuler mes aides. ESAT : information puis les deux voies.`, etats: 'Un seul fichier, fin de page selon les réponses (petit script de la page).' }, { titre: 'Prérequis AAH', intro: 'Page de questions préalables.', composants: [docComposant('form', 'Formulaire', 'questions regroupées dans un `form` sans envoi ; chaque question est un `fieldset` avec légende et `fr-messages-group`.'), docComposant('radio', 'Bouton radio', 'trois groupes Oui / Non, en liste verticale quand la question a une précision en texte d\'aide, en ligne sinon.'), docComposant('alert', 'Alerte', 'alertes « information » avec titre (62 ans, non salarié) ou petite sans titre (ESAT), `role="status"`.'), DOC_CONNECT].join('\n'), note: '**Retenus** : questions et issues du site. **Écartés** : aucun. **Écarts assumés** : les messages deviennent des alertes d\'information ; le même bloc de connexion est repris pour la réponse ESAT. **Questions ouvertes** : aucune.' });
}

// ---------- garde d'enfant
{
  const r = releve('sim-garde'); const L = r.lignes; const h1 = r.h1[0];
  const d = Object.fromEntries(r.destinations.map((x) => [x.libelle, x.ouvre]));
  const liste = (debut, fin) => { const i = L.findIndex((l) => l.startsWith(debut)); const out = []; for (let k = i + 1; k < L.length && !L[k].startsWith(fin) && !L[k].startsWith('#') && !L[k].startsWith('['); k++) out.push(L[k]); return out.map((l) => l.replace(/ \{fr-[^}]*\}$/, '')); };
  const lis = (items) => `<ul>\n${items.map((l) => `    <li>${esc(l.replace(/^- /, ''))}</li>`).join('\n')}\n</ul>`;
  const conv = liste('Les modes de garde en structure conventionnée', '###');
  const nonconv = liste('Les modes de garde en structure non conventionnée', '##');
  const direct = liste('Les modes de garde en emploi direct', '[lien "Haut');
  const btnExt = (texte) => ext(d[texte], texte, 'fr-btn');
  ecrire('mds-simulateur-garde-enfant', 'index.html', page({ titre: h1, fil: filHub("Aide à la garde d'enfant"), main: corps(`${retour}
<h1>${esc(h1)}</h1>
<p class="fr-text--lead">${esc(L[1].replace(/ \{.*$/, ''))}</p>
<div id="callout-modes-accueil" class="fr-callout">
    <h2 class="fr-callout__title">Connaître les différents modes d'accueil à côté de chez vous</h2>
    <p class="fr-callout__text">Pour connaître les différents modes d'accueil à côté de chez vous ou de votre travail, rendez-vous sur le site ${ext('https://monenfant.fr/', 'monenfant.fr', '')}</p>
</div>
<h2 class="fr-mt-8v">Une aide pour la garde d’enfant en structure</h2>
<p class="fr-text--lg">Une organisation (établissement ou service) qui propose l’accueil des enfants. Les parents paient directement la structure employant les professionnels en charge de la garde des enfants.</p>
<h3>Garde d’enfant en structure conventionnée</h3>
<p class="fr-text--lg">La Prestation de Service Unique (PSU) est une aide versée aux Etablissements d’Accueil du Jeune Enfant (EAJE), qui permet à ces établissements d’appliquer un tarif réduit aux familles selon leurs revenus.</p>
<p>
    ${btnExt('Simuler la PSU')}
</p>
${accordeons('accordion-conv', [{ titre: 'Les modes de garde en structure conventionnée', html: `<p>${esc(conv[0])}</p>\n${lis(conv.slice(1))}` }], 4)}
<h3 class="fr-mt-6v">Garde d’enfant en structure non conventionnée</h3>
<p class="fr-text--lg">Le Complément de libre choix du Mode de Garde structure (CMG structure) est une aide versée aux parents pour faire garder leurs enfants par une structure non conventionnée. Une structure non conventionnée n’a pas signé de contrat avec la CAF (Caisse d’Allocations Familiales) pour percevoir directement des aides financières.</p>
<p>
    <a href="${lien('mds-simulateur-cmg')}" class="fr-btn">Simuler le CMG structure</a>
</p>
${accordeons('accordion-nonconv', [{ titre: 'Les modes de garde en structure non conventionnée', html: lis(nonconv) }], 4)}
<h2 class="fr-mt-8v">Une aide pour la garde d’enfant en emploi direct</h2>
<p>Le Complément de libre choix du Mode de Garde emploi direct (CMG emploi direct)</p>
<ul>
    <li>Les parents gèrent le contrat et paient directement la personne qui garde leur enfant. Pour en savoir plus, rendez-vous sur le site ${ext('https://www.urssaf.fr/accueil/services/services-particuliers/service-pajemploi.html', 'Pajemploi', '')}</li>
    <li>Les parents gèrent le contrat et déclarent la personne qui garde leur enfant au service de l’Urssaf. Pour en savoir plus, rendez-vous sur le site ${ext('https://www.urssaf.fr/accueil/services/services-particuliers/service-pajemploi/service-pajemploi-plus.html', 'Pajemploi+', '')}</li>
</ul>
<p>
    ${btnExt('Simuler le CMG emploi direct')}
</p>
${accordeons('accordion-direct', [{ titre: 'Les modes de garde en emploi direct', html: lis(direct) }], 3)}
${hautDePage(0)}`) }));
  ecrireDoc('mds-simulateur-garde-enfant', { titre: `${h1}, traduite en DSFR`, source: r.url, story: "En tant que parent, je veux comprendre les aides à la garde selon le mode de garde, afin de simuler la bonne aide.", contenus: `Titre (h1) : ${h1}. Chapô du site. Mise en avant monenfant.fr. Deux sections (structure : conventionnée avec PSU, non conventionnée avec CMG structure ; emploi direct : CMG emploi direct, Pajemploi, Pajemploi+), trois listes dépliables des modes de garde, trois boutons de simulation (PSU sur monenfant.fr, CMG structure dans le prototype, CMG emploi direct sur urssaf.fr).`, etats: 'Un seul état.' }, { titre: 'Aides à la garde d\'enfants', intro: 'Page de présentation de trois simulateurs.', composants: [docComposant('callout', 'Mise en avant', 'titre et texte avec lien externe vers monenfant.fr.'), docComposant('accordion', 'Accordéon', 'listes des modes de garde repliées, titres au niveau de leur section.')].join('\n'), note: '**Retenus** : textes et ordre du site. **Écartés** : aucun. **Écarts assumés** : les boutons externes deviennent des liens de style bouton en nouvelle fenêtre ; l\'accordéon « structure conventionnée » reprend tel quel un contenu du site qui mélange crèches et règles du CMG. **Questions ouvertes** : vérifier ce contenu avec la CNAF.' });
}
// ---------- CMG structure : présentation
{
  const r = releve('sim-cmg'); const L = r.lignes; const h1 = r.h1[0];
  ecrire('mds-simulateur-cmg', 'index.html', page({ titre: h1, fil: [{ label: 'Simuler vos aides', href: HUB }, { label: "Aide à la garde d'enfant", href: lien('mds-simulateur-garde-enfant') }, { label: 'CMG structure' }], main: corps(`<p>\n    ${lienRetour("Revenir aux aides à la garde d'enfants", lien('mds-simulateur-garde-enfant'))}\n</p>
<h1>${esc(h1)}</h1>
<p class="fr-text--lead">${esc(L[1].replace(/ \{.*$/, ''))}</p>
<h2>Préparez vos documents</h2>
<ul>
    <li>des avis d’imposition de votre foyer, sur les deux dernières années 2025 et 2024.</li>
    <li>d’une estimation de vos frais de garde par mois.</li>
</ul>
<div id="callout-un-mode" class="fr-callout">
    <h2 class="fr-callout__title">Le simulateur prend en compte un seul mode de garde par simulation</h2>
    <p class="fr-callout__text">Le simulateur est en cours de construction. Si vous voulez : comparer plusieurs modes de garde, vous pouvez refaire la simulation en changeant de mode de garde ; cumuler différents modes de garde, vous pouvez vous rapprocher de votre CAF ou MSA</p>
</div>
<a href="${lien('mds-simulation-cmg')}" class="fr-btn fr-icon-arrow-right-line fr-btn--icon-right">Commencer la simulation</a>`) }));
  ecrireDoc('mds-simulateur-cmg', { titre: `${h1}, traduite en DSFR`, source: r.url, story: "En tant que parent qui fait garder son enfant en structure non conventionnée, je veux savoir quoi préparer avant de simuler le CMG structure.", contenus: `Titre (h1) : ${h1}. Chapô. « Préparez vos documents » (avis d'imposition 2025 et 2024, estimation des frais de garde par mois). Mise en avant « Le simulateur prend en compte un seul mode de garde par simulation ». Bouton Commencer la simulation.`, etats: 'Un seul état. « Commencer la simulation » mène à la simulation du CMG du prototype.' }, { titre: 'CMG structure (présentation)', intro: 'Page d\'introduction de la démarche.', composants: docComposant('callout', 'Mise en avant', 'titre et texte, sans action.'), note: '**Retenus** : textes du site. **Écartés** : aucun. **Écarts assumés** : le texte de la mise en avant, collé sans ponctuation sur le site, est ponctué (« construction. Si », « mode de garde ; cumuler »). **Questions ouvertes** : aucune.' });
}

// ---------- hub
{
  const r = releve('simulateurs'); const L = r.lignes;
  const ecranDe = { '/dd1pnds-ria/#destination/simu-foyer': 'mds-simulation-mes-aides', '/votre-simulateur/aide-garde-enfant': 'mds-simulateur-garde-enfant', 'simulateurs/aide-logement': 'mds-simulateur-aide-logement', 'simulateurs/allocation-adulte-handicape': 'mds-simulateur-aah', 'simulateurs/complementaire-sante-solidaire': 'mds-simulateur-css', '/votre-simulateur/prime-adoption': 'mds-simulateur-prime-adoption', '/votre-simulateur/prime-naissance': 'mds-simulateur-prime-naissance', 'simulateurs/rsa-pa': 'mds-simulateur-rsa-pa', '/avvc': 'mds-aide-violences-conjugales' };
  const tuiles = [];
  for (let i = 0; i < L.length; i++) { const m = L[i].match(/^### (.+?) \{fr-tile__title\} \[lien "[^"]*" -> ([^\]]+)\]/); if (!m) continue; const t = { titre: m[1], href: lien(ecranDe[m[2]]), desc: L[i + 1].replace(/ \{.*$/, ''), tags: [], duree: null }; for (let k = i + 2; k < L.length && !L[k].startsWith('<fr-tile') && !L[k].startsWith('['); k++) { const tg = L[k].match(/^(.+?) \{fr-tag(\.[^}]*)?\}$/); if (tg) { if (/min$/.test(tg[1])) t.duree = tg[1]; else t.tags.push(tg[1]); } } tuiles.push(t); }
  const [global, ...autres] = tuiles;
  const themes = ['Famille', 'Handicap', 'Logement', 'Santé', 'Solidarité', 'Urgence'];
  const lead = L.find((l) => l.includes('{fr-mt-3w.fr-text--xl}')).replace(/ \{.*$/, '');
  ecrire('mds-simulateurs', 'index.html', page({ titre: 'Simuler vos aides', rubrique: 'services', courant: 'true', fil: [{ label: 'Vos services', href: lien('mds-vos-services') }, { label: 'Simuler vos aides' }], main: `        <div class="fr-container fr-mt-4v fr-mb-8v">
            <div class="fr-grid-row fr-grid-row--gutters">
                <div class="fr-col-12 fr-col-lg-8">
                    <h1>Simuler vos aides</h1>
                    <p class="fr-text--lead">${esc(lead)}</p>
                    <h2>Simuler 58 aides en une seule fois</h2>
                    <p class="fr-text--lg">Découvrez en une seule fois, les aides sociales dont vous pouvez bénéficier. Ce simulateur officiel est gratuit et sécurisé.</p>
                </div>
            </div>
            <div class="fr-grid-row fr-grid-row--gutters">
                <div class="fr-col-12 fr-col-lg-8">
${ind(tuile({ id: 'tile-simuler-mes-aides', titre: global.titre, href: global.href, desc: global.desc, detail: global.duree, horizontal: true }), 20)}
                </div>
            </div>
            <div class="fr-grid-row fr-grid-row--gutters">
                <div class="fr-col-12 fr-col-lg-8">
                    <p class="fr-text--bold fr-mb-2v fr-mt-8v" id="filtres-titre">Filtrer par thèmes :</p>
                    <ul class="fr-tags-group" id="filtres-themes" aria-labelledby="filtres-titre">
${themes.map((t) => `                        <li>\n                            <button class="fr-tag" type="button" aria-pressed="false">${t}</button>\n                        </li>`).join('\n')}
                    </ul>
                    <p class="fr-mt-4v" id="compteur-simulateurs" role="status">${autres.length} simulateurs affichés</p>
                </div>
            </div>
            <div class="fr-grid-row fr-grid-row--gutters" id="liste-simulateurs">
${autres.map((t, i) => `                <div class="fr-col-12 fr-col-md-6">
${ind(tuile({ id: `tile-simulateur-${i + 1}`, titre: t.titre, href: t.href, desc: t.desc, detail: t.duree, tags: t.tags, horizontal: true }), 20)}
                </div>`).join('\n')}
            </div>
${hautDePage()}
        </div>`, script: `    <script>
      (function () {
        var group = document.getElementById('filtres-themes'), counter = document.getElementById('compteur-simulateurs');
        var columns = document.querySelectorAll('#liste-simulateurs > div');
        function apply() {
          var active = []; group.querySelectorAll('button[aria-pressed="true"]').forEach(function (b) { active.push(b.textContent.trim()); });
          var shown = 0;
          columns.forEach(function (c) { var tags = [].map.call(c.querySelectorAll('.fr-tile__start .fr-tag'), function (t) { return t.textContent.trim(); }); var visible = !active.length || tags.some(function (t) { return active.indexOf(t) !== -1; }); c.hidden = !visible; if (visible) shown++; });
          counter.textContent = shown + (shown > 1 ? ' simulateurs affichés' : ' simulateur affiché');
        }
        group.addEventListener('click', function () { setTimeout(apply, 50); });
      })();
    </script>
  ` }));
  ecrireDoc('mds-simulateurs', { titre: 'Simuler vos aides (hub des simulateurs), traduit en DSFR', source: r.url, story: "En tant qu'usager, je veux voir tous les simulateurs, filtrer par thème et lancer celui qui me concerne, afin d'estimer mes aides.", contenus: `Titre (h1) : Simuler vos aides. Chapô : ${lead} « Simuler 58 aides en une seule fois » et sa tuile (${global.desc}, ${global.duree}). Filtres par thèmes : ${themes.join(', ')}. ${autres.length} tuiles : ${autres.map((t) => `${t.titre} [${t.tags.join(', ')}] ${t.duree}`).join(' ; ')}.`, etats: 'Un seul état ; filtrage par tags sélectionnables (script de la page). Chaque tuile mène à l\'écran du simulateur dans le prototype.' }, { titre: 'Simuler vos aides', intro: 'Page de rubrique des simulateurs, rattachée à « Vos services ».', composants: [docComposant('tag', 'Tag', 'six tags sélectionnables (limite de la doc) pour filtrer ; dans les tuiles, tags non cliquables du thème et de « Connecté » en groupe dans `fr-tile__start`.'), docComposant('tile', 'Tuile', 'tuiles horizontales sans pictogramme, titre h3 en lien étendu, description, durée en détail.')].join('\n'), note: '**Retenus** : simulateur global mis en avant, filtres et tuiles du site. **Écartés** : aucun. **Écarts assumés** : la durée (« 5 min ») passe du tag au détail de tuile, car ce n\'est pas une catégorie ; compteur ajouté, comme sur le hub des évènements de vie. **Questions ouvertes** : aucune.' });
}
console.log('hub et pages d\'entrée des simulateurs écrits');
