// Socle commun du prototype mesdroitssociaux : gabarit (en-tête, pied de page, panneau cookies) et briques HTML
// copiées des extraits officiels du DSFR (voir reference/doc et node_modules/@gouvfr/dsfr/example).
import fs from 'node:fs';
import path from 'node:path';
export const ROOT = path.resolve(new URL('../..', import.meta.url).pathname);
export const SCREENS = path.join(ROOT, 'screens');
export const RELEVES = path.join(ROOT, 'scripts/mds/releves');
export const releve = (nom) => JSON.parse(fs.readFileSync(path.join(RELEVES, nom + '.json'), 'utf8'));
export const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const ind = (html, n) => html.split('\n').map((l) => (l.trim() ? ' '.repeat(n) + l : l)).join('\n');
export const lien = (ecran) => `../${ecran}/index.html`;
export const ext = (url, texte, cls = 'fr-link') => `<a href="${esc(url)}" target="_blank" rel="noopener external" title="${esc(texte)} - nouvelle fenêtre"${cls ? ` class="${cls}"` : ''}>${esc(texte)}</a>`;

// ---------- gabarit : source unique = screens/mds-accueil/index.html
const accueil = () => fs.readFileSync(path.join(SCREENS, 'mds-accueil/index.html'), 'utf8');
const entre = (s, a, b) => s.slice(s.indexOf(a), s.indexOf(b, s.indexOf(a)) + b.length);
export const gabarit = () => {
  const h = accueil();
  return {
    head: h.slice(0, h.indexOf('<title>')),
    skip: h.match(/<div class="fr-skiplinks">[\s\S]*?<\/nav>\n    <\/div>/)[0],
    header: entre(h, '<header ', '</header>'),
    footer: entre(h, '<footer class="fr-footer"', '</footer>'),
    consent: h.includes('<dialog id="fr-consent-modal"') ? entre(h, '<dialog id="fr-consent-modal"', '</dialog>') : CONSENT,
    scripts: h.slice(h.indexOf('    <script type="module" src='))
  };
};
// en-tête avec la rubrique courante : 'accueil' | 'services' | 'evenements' | null ; valeur 'page' ou 'true'
export const entete = (header, rubrique, valeur = 'page') => {
  let h = header.replace(/ aria-current="(page|true)"/g, '');
  const id = { accueil: 'nav-accueil', services: 'nav-services', evenements: 'nav-evenements' }[rubrique];
  if (id) h = h.replace(new RegExp(`(<a id="${id}"[^>]*class="fr-nav__link")`), `$1 aria-current="${valeur}"`);
  return h;
};

// ---------- panneau de gestion des cookies (extrait « Panneau de gestion des cookies » du composant consent)
const service = (n, titre, desc, { obligatoire = false } = {}) => `                            <div class="fr-consent-service">
                                <fieldset aria-labelledby="finality-${n}-legend finality-${n}-desc" role="group" class="fr-fieldset">
                                    <legend id="finality-${n}-legend" class="fr-consent-service__title">${titre}</legend>
                                    <div class="fr-consent-service__radios">
                                        <div class="fr-radio-group">
                                            <input${obligatoire ? ' checked' : ''} type="radio" id="consent-finality-${n}-accept" name="consent-finality-${n}">
                                            <label class="fr-label" for="consent-finality-${n}-accept">
                                                Accepter
                                            </label>
                                        </div>
                                        <div class="fr-radio-group">
                                            <input${obligatoire ? ' disabled' : ''} type="radio" id="consent-finality-${n}-refuse" name="consent-finality-${n}">
                                            <label class="fr-label" for="consent-finality-${n}-refuse">
                                                Refuser
                                            </label>
                                        </div>
                                    </div>
                                    <p id="finality-${n}-desc" class="fr-consent-service__desc">${desc}</p>
                                </fieldset>
                            </div>`;
export const CONSENT = `<dialog id="fr-consent-modal" class="fr-modal" aria-labelledby="fr-consent-modal-title">
        <div class="fr-container fr-container--fluid fr-container-md">
            <div class="fr-grid-row fr-grid-row--center">
                <div class="fr-col-12 fr-col-md-10 fr-col-lg-8">
                    <div class="fr-modal__body">
                        <div class="fr-modal__header">
                            <button aria-controls="fr-consent-modal" title="Fermer" type="button" id="button-consent-close" class="fr-btn--close fr-btn">Fermer</button>
                        </div>
                        <div class="fr-modal__content">
                            <h2 id="fr-consent-modal-title" class="fr-modal__title">
                                Panneau de gestion des cookies
                            </h2>
                            <div class="fr-consent-manager">
                                <div class="fr-consent-service fr-consent-manager__header">
                                    <fieldset class="fr-fieldset">
                                        <legend id="finality-legend" class="fr-consent-service__title">Vous pouvez indiquer vos préférences de gestion des cookies sur le site mesdroitssociaux.gouv.fr. <a href="../mds-mentions-legales/index.html#cookies">En savoir plus sur les cookies et les données personnelles</a>
                                        </legend>
                                        <div class="fr-consent-service__radios">
                                            <div class="fr-radio-group">
                                                <input type="radio" id="consent-all-accept" name="consent-all">
                                                <label class="fr-label" for="consent-all-accept">
                                                    Tout accepter
                                                </label>
                                            </div>
                                            <div class="fr-radio-group">
                                                <input type="radio" id="consent-all-refuse" name="consent-all">
                                                <label class="fr-label" for="consent-all-refuse">
                                                    Tout refuser
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
${ind([
  service(0, 'Assurer le fonctionnement du site', 'Ces cookies sont indispensables pour la navigation sur les pages. Ils ne peuvent pas être désactivés.', { obligatoire: true }),
  service(1, 'TOLD', `C’est un outil externe à mes droits sociaux. Il vous permet, si vous acceptez les cookies, de donner votre avis sur les pages que vous allez visiter. ${ext('https://www.told.club/legal', 'Voir les mentions légales de TOLD', '')}`),
  service(2, 'Dailymotion', `Les vidéos permettent de présenter le fonctionnement du site et des services proposés. ${ext('https://legal.dailymotion.com/fr/politique-de-confidentialite/', 'Voir la politique de confidentialité de Dailymotion', '')}`),
  service(3, 'Piano Analytics', `La mesure de l'audience du site contribue à l'amélioration continue de son ergonomie, de sa navigation et de ses contenus. Les informations collectées sont anonymes. ${ext('https://www.piano.io/legal/privacy-policy#cookies-and-similar-technologies', 'Voir la politique de confidentialité de Piano Analytics', '')}`)
].join('\n'), 4)}
                                <ul class="fr-consent-manager__buttons fr-btns-group fr-btns-group--right fr-btns-group--inline-sm">
                                    <li>
                                        <button type="button" class="fr-btn" id="consent-enregistrer">Enregistrer mes préférences</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </dialog>`;
export const SCRIPT_PROTO = '    <script src="../_mds/prototype.js"></script>\n';

// ---------- page complète
export const fil = (items) => `    <div class="fr-container">
        <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
            <button type="button" class="fr-breadcrumb__button" aria-expanded="false" aria-controls="breadcrumb-page">Voir le fil d’Ariane</button>
            <div class="fr-collapse" id="breadcrumb-page">
                <ol class="fr-breadcrumb__list">
                    <li>
                        <a class="fr-breadcrumb__link" id="breadcrumb-accueil" href="${lien('mds-accueil')}">Accueil</a>
                    </li>
${items.slice(0, -1).map((it, i) => `                    <li>
                        <a class="fr-breadcrumb__link" id="breadcrumb-${i + 1}" href="${it.href}">${esc(it.label)}</a>
                    </li>`).join('\n')}
                    <li>
                        <a class="fr-breadcrumb__link" aria-current="page">${esc(items[items.length - 1].label)}</a>
                    </li>
                </ol>
            </div>
        </nav>
    </div>`;
export const page = ({ titre, rubrique = null, courant = 'page', fil: items, main, dialogues = '', script = '' }) => {
  const g = gabarit();
  return `${g.head}<title>${esc(titre)} - Mes droits sociaux</title>
  </head>
  <body>
    ${g.skip}
    ${entete(g.header, rubrique, courant)}
${items ? fil(items) : ''}
    <main role="main" id="content">
${main}
    </main>
    ${g.footer}
    ${g.consent}
${dialogues}
${g.scripts.replace('</body>', `${script}</body>`)}`;
};
export const ecrire = (ecran, fichier, html) => { const d = path.join(SCREENS, ecran); fs.mkdirSync(d, { recursive: true }); fs.writeFileSync(path.join(d, fichier), html); };

// ---------- briques (extraits officiels)
export const lienRetour = (texte, href) => `<a href="${href}" class="fr-link fr-icon-arrow-left-line fr-link--icon-left">${esc(texte)}</a>`;
export const lienSuite = (texte, href, id) => `<a href="${href}"${id ? ` id="${id}"` : ''} class="fr-link fr-icon-arrow-right-line fr-link--icon-right">${esc(texte)}</a>`;
export const hautDePage = (n = 12) => ind(`<p class="fr-mt-6v">
    <a id="link-haut-de-page" href="#top" class="fr-link fr-icon-arrow-up-fill fr-link--icon-left">Haut de page</a>
</p>`, n);
// tuile : { id, titre, href, externe, desc, detail, tag, horizontal, niveau }
export const tuile = (t) => {
  const a = t.externe ? `<a href="${esc(t.href)}" target="_blank" rel="noopener external" title="${esc(t.titre)} - nouvelle fenêtre">${esc(t.titre)}</a>` : `<a href="${t.href}">${esc(t.titre)}</a>`;
  return `<div class="fr-tile${t.sm ? ' fr-tile--sm' : ''}${t.horizontal ? ' fr-tile--horizontal' : ''} fr-enlarge-link" id="${t.id}">
    <div class="fr-tile__body">
        <div class="fr-tile__content">
            <h${t.niveau || 3} class="fr-tile__title">
                ${a}
            </h${t.niveau || 3}>
${t.desc ? `            <p class="fr-tile__desc">${esc(t.desc)}</p>\n` : ''}${t.detail ? `            <p class="fr-tile__detail">${esc(t.detail)}</p>\n` : ''}${t.tags ? `            <div class="fr-tile__start">\n${t.tags.length === 1 ? `                <p class="fr-tag">${esc(t.tags[0])}</p>` : `                <ul class="fr-tags-group">\n${t.tags.map((x) => `                    <li>\n                        <p class="fr-tag">${esc(x)}</p>\n                    </li>`).join('\n')}\n                </ul>`}\n            </div>\n` : ''}        </div>
    </div>
</div>`;
};
export const accordeons = (prefixe, items, niveau = 3) => `<div data-fr-group="false" class="fr-accordions-group">
${items.map((it, i) => `    <section class="fr-accordion"${it.id ? ` id="${it.id}"` : ''}>
        <h${niveau} class="fr-accordion__title">
            <button type="button" class="fr-accordion__btn" aria-expanded="false" aria-controls="${prefixe}-${i + 1}">${esc(it.titre)}</button>
        </h${niveau}>
        <div class="fr-collapse" id="${prefixe}-${i + 1}">
${ind(it.html, 12)}
        </div>
    </section>`).join('\n')}
</div>`;

// ---------- documentation de chaque écran (brief.md, conception.md)
const DATE_RELEVE = '01/10/2026';
export const brief = ({ titre, source, public: pub = 'Usagers de mesdroitssociaux.gouv.fr, avant connexion.', story, depart = 'Gabarit commun du prototype (en-tête, navigation, pied de page et panneau cookies de mds-accueil), corps sur 8 colonnes.', contenus, etats = 'Un seul état.', criteres = [] }) => `# Brief : ${titre}

## 1. Le service et son public
mesdroitssociaux.gouv.fr. ${pub} Contenus relevés sur ${source} le ${DATE_RELEVE} (outillage : scripts/mds/, relevés bruts dans scripts/mds/releves/).

## 2. La user story
${story}

## 3. Le point de départ
${depart}

## 4. Les contenus réels
${contenus}

## 5. Les états et le parcours
${etats}

## 6. Les contraintes
Niveau RGAA AA, mobile d'abord, aucune image (illustrations du site retirées), aucun style hors DSFR, un seul h1.

## 7. Les critères d'acceptation
${['Textes mot pour mot ; aucune classe hors DSFR, aucun style en ligne, aucun faux-texte.', 'Aucun lien sans destination : chaque lien mène à un écran du prototype, à un site externe ou à la page de limite du prototype pour les écrans connectés.', ...criteres].map((c) => '- ' + c).join('\n')}
`;
export const FONDAMENTAUX = `## Fondamentaux
- Doc lue : reference/doc/fondamentaux/couleurs.md — règles appliquées : aucune couleur en dur, fonds et textes portés par les composants.
- Doc lue : reference/doc/fondamentaux/typographie.md — règles appliquées : un seul h1, hiérarchie de titres continue, chapô en \`fr-text--lead\`, corps de texte limité à 8 colonnes.
- Doc lue : reference/doc/fondamentaux/grille-et-points-de-rupture.md — règles appliquées : \`fr-container\` › \`fr-grid-row fr-grid-row--gutters\` › \`fr-col-*\`, pleine largeur sur mobile.
- Doc lue : reference/doc/fondamentaux/espacement.md — règles appliquées : classes d'espacement en nomenclature « v » uniquement.
- Doc lue : reference/doc/fondamentaux/icone.md — règles appliquées : icônes fonctionnelles du DSFR avec libellé (flèches des liens, icônes intégrées des composants), aucune icône seule.
- Doc lue : reference/doc/fondamentaux/pictogramme.md — règles appliquées : aucun pictogramme ajouté, images du site retirées.

## Point de départ
Gabarit commun du prototype : en-tête, navigation, pied de page, panneau cookies et liens d'évitement repris de screens/mds-accueil/index.html et tenus à jour par scripts/mds/sync-layout.mjs ; fil d'Ariane sous l'en-tête ; écran généré par scripts/mds/ à partir des relevés du site.

## Composants communs à toutes les pages
### Liens d'évitement (skiplink)
- Doc lue : reference/doc/composants/skiplink.md — trois liens (Contenu, Menu, Pied de page) vers des ancres présentes.
### En-tête (header)
- Doc lue : reference/doc/composants/header.md — nom du service, lien d'accueil vers mds-accueil, FranceConnect dans les outils, \`role="banner"\`.
### Bloc marque (logo)
- Doc lue : reference/doc/composants/logo.md — intitulé « République Française », taille par défaut.
### Navigation principale (navigation)
- Doc lue : reference/doc/composants/navigation.md — liens directs Accueil, Vos services, Vos événements de vie ; rubrique courante marquée par \`aria-current\`.
### Boutons FranceConnect et ProConnect (connect)
- Doc lue : reference/doc/composants/connect.md — bouton FranceConnect et lien d'information, intitulés non modifiés ; dans le prototype, le bouton mène à la page de limite des écrans connectés.
### Fil d'Ariane (breadcrumb)
- Doc lue : reference/doc/composants/breadcrumb.md — sous l'en-tête, page courante non cliquable avec \`aria-current="page"\`.
### Lien (link)
- Doc lue : reference/doc/composants/link.md — liens de retour et d'action avec icône, liens externes en nouvelle fenêtre avec \`title\` « … - nouvelle fenêtre », « Haut de page » en fin de contenu.
### Bouton (button)
- Doc lue : reference/doc/composants/button.md — boutons du menu et de fermeture, boutons d'action propres à la page.
### Pied de page (footer)
- Doc lue : reference/doc/composants/footer.md — pied de page minimal, liens du bas reliés aux écrans du prototype, « Gérer les cookies » ouvre le panneau.
`;
export const conception = ({ titre, intro, composants, note }) => {
  const s = fs.readFileSync(new URL('./doc-commune.mjs', import.meta.url), 'utf8');
  const cookies = s.slice(s.indexOf('### Panneau de gestion des cookies'), s.indexOf('`;\nlet n = 0;')).replace(/\\`/g, '`');
  return `# Conception : ${titre}

Écran produit avec la skill dsfr-designer et les outils du serveur dsfr-kit (get_fundamental, get_component, check_screen). ${intro}

${FONDAMENTAUX}${cookies}
## Composants propres à la page
${composants}

## Note de conception
${note}
`;
};
export const docComposant = (nom, titre, usage) => `### ${titre} (${nom})\n- Doc lue : reference/doc/composants/${nom}.md — ${usage}`;

// modale simple (extrait « Modale simple ») ; contenu libre
export const modale = (id, titre, contenu) => `<dialog id="${id}" class="fr-modal" aria-labelledby="${id}-title">
        <div class="fr-container fr-container--fluid fr-container-md">
            <div class="fr-grid-row fr-grid-row--center">
                <div class="fr-col-12 fr-col-md-8 fr-col-lg-6">
                    <div class="fr-modal__body">
                        <div class="fr-modal__header">
                            <button aria-controls="${id}" title="Fermer" type="button" class="fr-btn--close fr-btn">Fermer</button>
                        </div>
                        <div class="fr-modal__content">
                            <h2 id="${id}-title" class="fr-modal__title">${esc(titre)}</h2>
${ind(contenu, 28)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </dialog>`;
export const ouvrirModale = (id, texte, cls = 'fr-btn fr-btn--tertiary-no-outline') => `<button type="button" class="${cls}" data-fr-opened="false" aria-controls="${id}">${esc(texte)}</button>`;
// indicateur d'étapes (extrait officiel) ; sur la dernière étape, pas d'étape suivante
export const etapes = (titre, n, total, suivante) => `<div class="fr-stepper">
    <h2 class="fr-stepper__title">
        ${esc(titre)}
        <span class="fr-stepper__state">Étape ${n} sur ${total}</span>
    </h2>
    <div class="fr-stepper__steps" data-fr-current-step="${n}" data-fr-steps="${total}"></div>
${suivante ? `    <p class="fr-stepper__details">
        <span class="fr-text--bold">Étape suivante :</span> ${esc(suivante)}
    </p>
` : ''}</div>`;
// champs (extraits officiels)
export const champNombre = (id, nom, libelle, aide) => `<div class="fr-input-group" data-requis>
    <label class="fr-label" for="${id}">
        ${esc(libelle)}
        <span class="fr-hint-text">${esc(aide)}</span>
    </label>
    <input class="fr-input" aria-describedby="${id}-messages" id="${id}" name="${nom}" type="number" inputmode="numeric" min="0" required>
    <div class="fr-messages-group" id="${id}-messages" aria-live="polite">
    </div>
</div>`;
export const radios = (id, nom, legende, options, { enLigne = false, aideLegende = null } = {}) => `<fieldset class="fr-fieldset" id="${id}" aria-labelledby="${id}-legend ${id}-messages" data-requis>
    <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="${id}-legend">
        ${esc(legende)}${aideLegende ? `
        <span class="fr-hint-text">${esc(aideLegende)}</span>` : ''}
    </legend>
${options.map(([valeur, libelle, aide], i) => `    <div class="fr-fieldset__element${enLigne ? ' fr-fieldset__element--inline' : ''}">
        <div class="fr-radio-group">
            <input value="${valeur}" type="radio" id="${id}-${i + 1}" name="${nom}" required>
            <label class="fr-label" for="${id}-${i + 1}">
                ${esc(libelle)}${aide ? `
                <span class="fr-hint-text">${esc(aide)}</span>` : ''}
            </label>
        </div>
    </div>`).join('\n')}
    <div class="fr-messages-group" id="${id}-messages" aria-live="polite">
    </div>
</fieldset>`;
export const dateUnique = (id, legende) => `<fieldset class="fr-fieldset" id="${id}-fieldset" role="group" aria-labelledby="${id}-fieldset-legend ${id}-fieldset-messages" data-requis>
    <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="${id}-fieldset-legend">
        ${esc(legende)}
    </legend>
    <div class="fr-fieldset__element fr-fieldset__element--inline fr-fieldset__element--number">
        <div class="fr-input-group">
            <label class="fr-label" for="${id}-day">
                Jour
                <span class="fr-hint-text">Exemple : 14</span>
            </label>
            <input class="fr-input" name="jour" id="${id}-day" type="text" inputmode="numeric" required>
        </div>
    </div>
    <div class="fr-fieldset__element fr-fieldset__element--inline fr-fieldset__element--number">
        <div class="fr-input-group">
            <label class="fr-label" for="${id}-month">
                Mois
                <span class="fr-hint-text">Exemple : 12</span>
            </label>
            <input class="fr-input" name="mois" id="${id}-month" type="text" inputmode="numeric" required>
        </div>
    </div>
    <div class="fr-fieldset__element fr-fieldset__element--inline fr-fieldset__element--inline-grow fr-fieldset__element--year">
        <div class="fr-input-group">
            <label class="fr-label" for="${id}-year">
                Année
                <span class="fr-hint-text">Exemple : 1984</span>
            </label>
            <input class="fr-input" name="annee" id="${id}-year" type="text" inputmode="numeric" required>
        </div>
    </div>
    <div class="fr-messages-group" id="${id}-fieldset-messages" aria-live="polite">
    </div>
</fieldset>`;
export const SCRIPT_SIMU = '    <script src="../_mds/simulation.js"></script>\n';
