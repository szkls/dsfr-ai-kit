// Vos services, pages « Connexion à… », page de limite du prototype (FranceConnect) et les six parcours DSFR du site.
import { interne } from './liens-internes.mjs';
import { releve, esc, ind, lien, ext, page, ecrire, lienRetour, hautDePage, tuile, brief, conception, docComposant } from './lib.mjs';

const CONNECT = `<div class="fr-connect-group">
    <button class="fr-connect" type="button">
        <span class="fr-connect__login">S’identifier avec</span>
        <span class="fr-connect__brand">FranceConnect</span>
    </button>
    <p>
        <a href="https://franceconnect.gouv.fr/" target="_blank" rel="noopener" title="Qu’est-ce que FranceConnect ? - nouvelle fenêtre">Qu’est-ce que FranceConnect ?</a>
    </p>
</div>`;
const corps = (inner, large = false) => `        <div class="fr-container fr-mt-4v fr-mb-8v">
${large ? inner : `            <div class="fr-grid-row fr-grid-row--gutters">
                <div class="fr-col-12 fr-col-lg-8">
${inner}
                </div>
            </div>`}
        </div>`;

// ---------- connexion à…
const CNX = [['droits', 'cnx-droits', 'Vos droits'], ['ressources', 'cnx-ressources', 'Vos ressources'], ['activite-professionnelle', 'cnx-activite', 'Votre activité professionnelle'], ['rappels', 'cnx-rappels', 'Vos rappels'], ['signalements', 'cnx-signalements', 'Vos signalements']];
for (const [slug, rel, service] of CNX) {
  const r = releve(rel); const h1 = r.h1[0]; const lead = r.lignes.find((l) => l.includes('{fr-text--lead}')).replace(/ \{.*$/, '');
  const ecran = 'mds-connexion-' + slug;
  ecrire(ecran, 'index.html', page({ titre: h1, rubrique: 'services', courant: 'true', fil: [{ label: 'Vos services', href: lien('mds-vos-services') }, { label: h1 }], main: corps(`                    <h1>${esc(h1)}</h1>
                    <p class="fr-text--lead">${esc(lead)}</p>
${ind(CONNECT, 20)}
                    <p class="fr-mt-6v">
                        ${lienRetour('Revenir à vos services', lien('mds-vos-services'))}
                    </p>`) }));
  ecrire(ecran, 'brief.md', brief({ titre: `${h1}, traduite en DSFR`, source: r.url, story: `En tant qu'usager qui veut consulter « ${service} », je veux comprendre que je dois m'identifier et pouvoir le faire avec FranceConnect, afin d'accéder à mes informations.`, contenus: `Fil d'Ariane : Accueil > Vos services > ${h1}. Titre (h1) : ${h1}. Chapô : ${lead} Bouton FranceConnect avec le lien « Qu’est-ce que FranceConnect ? ». Illustration du site retirée. Lien de retour vers Vos services.`, etats: 'Un seul état. Le bouton FranceConnect mène à la page de limite du prototype (mds-connexion-franceconnect) : les écrans connectés ne sont pas maquettés.' }));
  ecrire(ecran, 'conception.md', conception({ titre: h1, intro: 'Page de connexion d\'un service, gabarit commun aux cinq pages « Connexion à… » du site.', composants: docComposant('connect', 'Bouton FranceConnect', 'bouton FranceConnect dans le corps de page, extrait officiel « fr-connect-group », lien d\'information en nouvelle fenêtre ; le bouton seul porte l\'action, comme le demande la doc.'), note: '**Retenus** : chapô du site, bouton FranceConnect, lien de retour. **Écartés** : illustration (images interdites). **Écarts assumés** : lien de retour ajouté pour ne pas laisser de cul-de-sac, absent du site. **Questions ouvertes** : aucune.' }));
}

// ---------- page de limite du prototype
ecrire('mds-connexion-franceconnect', 'index.html', page({ titre: 'Connexion avec FranceConnect', fil: [{ label: 'Connexion avec FranceConnect' }], main: corps(`                    <h1>Connexion avec FranceConnect</h1>
                    <div class="fr-alert fr-alert--info">
                        <h2 class="fr-alert__title">Information : limite du prototype</h2>
                        <p>Sur mesdroitssociaux.gouv.fr, ce bouton vous redirige vers FranceConnect pour vous identifier, puis vers votre espace personnel. Les écrans connectés ne font pas partie de ce prototype.</p>
                    </div>
                    <ul class="fr-links-group fr-mt-6v">
                        <li>
                            ${lienRetour("Revenir à l'accueil", lien('mds-accueil'))}
                        </li>
                        <li>
                            ${lienRetour('Simuler vos aides sans vous connecter', lien('mds-simulateurs'))}
                        </li>
                    </ul>`) }));
ecrire('mds-connexion-franceconnect', 'brief.md', brief({ titre: 'Limite du prototype : connexion avec FranceConnect', source: 'le comportement du bouton « S’identifier avec FranceConnect » du site (redirection vers oidc.franceconnect.gouv.fr)', story: "En tant que personne qui teste le prototype, je veux comprendre ce qui se passerait au clic sur FranceConnect, afin de ne pas tomber sur une erreur ni sur un faux écran de FranceConnect.", contenus: "Page propre au prototype, pas au site : titre (h1) « Connexion avec FranceConnect » ; alerte d'information « Information : limite du prototype » qui explique la redirection réelle et que les écrans connectés ne sont pas maquettés ; liens « Revenir à l'accueil » et « Simuler vos aides sans vous connecter ». Aucun écran de FranceConnect n'est imité : c'est un service tiers.", etats: "Un seul état. Atteinte par tous les boutons FranceConnect du prototype et par les liens qui exigent une connexion (formulaire de contact, relevés de l'article)." }));
ecrire('mds-connexion-franceconnect', 'conception.md', conception({ titre: 'Limite du prototype (FranceConnect)', intro: 'Page technique du prototype : elle remplace la redirection vers FranceConnect.', composants: docComposant('alert', 'Alerte', 'alerte « information » taille MD, titre h2 qui nomme le type comme le demande la doc d\'accessibilité, description ; statique (affichée au chargement), donc sans rôle `alert` ni `status`.'), note: "**Retenus** : message neutre et liens de sortie. **Écartés** : imitation de l'écran de choix de compte de FranceConnect (service tiers, il ne doit pas être reproduit). **Écarts assumés** : page sans équivalent sur le site, contenu rédigé pour le prototype et signalé comme tel. **Questions ouvertes** : aucune." }));

// ---------- Vos services
{
  const r = releve('services'); const lignes = r.lignes;
  const lead = lignes.find((l) => l.includes('{fr-mt-3w.fr-text--xl}')).replace(/ \{.*$/, '');
  const dest = { simulateurs: 'mds-simulateurs', droits: 'mds-connexion-droits', ressources: 'mds-connexion-ressources', 'activite-professionnelle': 'mds-connexion-activite-professionnelle', signalements: 'mds-connexion-signalements', rappels: 'mds-connexion-rappels' };
  const cartes = []; for (let i = 0; i < lignes.length; i++) { const m = lignes[i].match(/^## (.+?) \{fr-card__title\} \[lien "[^"]*" -> ([^\]]+)\]/); if (m) cartes.push({ titre: m[1], href: lien(dest[m[2]]), desc: lignes[i + 1].replace(/ \{.*$/, '') }); }
  ecrire('mds-vos-services', 'index.html', page({ titre: 'Vos services', rubrique: 'services', fil: [{ label: 'Vos services' }], main: corps(`            <div class="fr-grid-row fr-grid-row--gutters">
                <div class="fr-col-12 fr-col-lg-8">
                    <h1>Vos services</h1>
                    <p class="fr-text--lead">${esc(lead)}</p>
                </div>
            </div>
            <div class="fr-grid-row fr-grid-row--gutters">
${cartes.map((c, i) => `                <div class="fr-col-12 fr-col-md-6">
${ind(tuile({ id: `tile-service-${i + 1}`, titre: c.titre, href: c.href, desc: c.desc, horizontal: true, niveau: 2 }), 20)}
                </div>`).join('\n')}
            </div>
${hautDePage()}`, true) }));
  ecrire('mds-vos-services', 'brief.md', brief({ titre: 'Vos services, traduite en DSFR', source: r.url, story: 'En tant qu\'usager, je veux voir tous les services du portail sur une page, afin d\'accéder au simulateur ou à mon espace.', contenus: `Titre (h1) : Vos services. Chapô : ${lead} Six cartes du site, dans l'ordre : ${cartes.map((c) => `${c.titre} (${c.desc})`).join(' ; ')}. Illustrations retirées. Lien Haut de page.`, etats: 'Un seul état. « Vos simulateurs » mène au hub des simulateurs ; les cinq autres services mènent à leur page « Connexion à… ».' }));
  ecrire('mds-vos-services', 'conception.md', conception({ titre: 'Vos services', intro: 'Page de rubrique de la navigation principale.', composants: docComposant('tile', 'Tuile', 'les cartes illustrées du site deviennent des tuiles horizontales sans pictogramme (l\'en-tête de tuile est optionnel selon la doc), titre h2 en lien étendu et description ; grille 1 puis 2 colonnes. La carte DSFR exige une image pour la variante horizontale, que le brief interdit.'), note: '**Retenus** : tuiles horizontales, ordre du site. **Écartés** : cartes illustrées. **Écarts assumés** : aucun. **Questions ouvertes** : aucune.' }));
}

// ---------- parcours DSFR du site
const PARCOURS = [['emploi', 'evv-emploi'], ['adoption', 'evv-adoption'], ['garde-enfants', 'evv-garde'], ['autonomie', 'evv-autonomie'], ['handicap-enfant', 'evv-handicap-enfant'], ['handicap-adulte', 'evv-handicap-adulte']];
const internes = { '/votre-simulateur/prime-adoption': 'mds-simulateur-prime-adoption', '/votre-simulateur/aide-garde-enfant': 'mds-simulateur-garde-enfant', '/simulateurs': 'mds-simulateurs', '/votre-simulateur/prime-naissance': 'mds-simulateur-prime-naissance' };
for (const [slug, rel] of PARCOURS) {
  const r = releve(rel); const L = r.lignes; const h1 = r.h1[0];
  const tag = L.find((l) => / \{fr-tag\}$/.test(l)).replace(/ \{fr-tag\}$/, '');
  const lead = L.find((l) => l.includes('{fr-mt-3w.fr-text--xl}')).replace(/ \{.*$/, '');
  const sections = [{ titre: null, tuiles: [] }];
  for (let i = 0; i < L.length; i++) {
    const t = L[i].match(/^(##+) (.+?) \{fr-tile__title\} \[lien "[^"]*" -> ([^\]]+?)( \(nouvelle fenêtre\))?\]$/);
    if (t) { const desc = (L[i + 1] || '').endsWith('{fr-tile__desc}') ? L[i + 1].replace(/ \{fr-tile__desc\}$/, '') : null; let cat = null; if (L[i + 2] === '<fr-badges-group>') cat = L[i + 3].replace(/ \{.*$/, ''); const href = t[3]; const ecran = interne(href); sections[sections.length - 1].tuiles.push({ titre: t[2], href: ecran || href, externe: !ecran, desc, cat }); continue; }
    const s = L[i].match(/^## (.+?)( \{.*\})?$/); if (s && !L[i].includes('fr-tile__title')) sections.push({ titre: s[1], tuiles: [] });
  }
  const ecran = 'mds-parcours-' + slug; let k = 0;
  const html = sections.map((s, si) => `${s.titre ? `            <h2 class="fr-mt-8v">${esc(s.titre)}</h2>\n` : ''}            <div class="fr-grid-row fr-grid-row--gutters${si === 0 ? ' fr-mt-2v' : ''}">
${s.tuiles.map((t) => `                <div class="fr-col-12 fr-col-md-6">
${ind(tuile({ id: `tile-parcours-${++k}`, titre: t.titre, href: t.href, externe: t.externe, desc: t.desc, tags: t.cat ? [t.cat.charAt(0) + t.cat.slice(1).toLowerCase()] : null, horizontal: true, niveau: s.titre ? 3 : 2 }), 20)}
                </div>`).join('\n')}
            </div>`).join('\n');
  ecrire(ecran, 'index.html', page({ titre: h1, rubrique: 'evenements', courant: 'true', fil: [{ label: 'Vos évènements de vie', href: lien('mds-evenements-de-vie') }, { label: h1 }], main: corps(`            <div class="fr-grid-row fr-grid-row--gutters">
                <div class="fr-col-12 fr-col-lg-8">
                    <p>
                        ${lienRetour('Revenir aux évènements de vie', lien('mds-evenements-de-vie'))}
                    </p>
                    <h1>${esc(h1)}</h1>
                    <p class="fr-tag">${esc(tag)}</p>
                    <p class="fr-text--lead fr-mt-4v">${esc(lead)}</p>
                </div>
            </div>
${html}
${hautDePage()}`, true) }));
  const toutes = sections.flatMap((s) => s.tuiles);
  ecrire(ecran, 'brief.md', brief({ titre: `Parcours « ${h1} », traduit en DSFR`, source: r.url, story: `En tant qu'usager concerné par l'évènement « ${h1} », je veux trouver les aides, démarches et sites de référence, afin d'être accompagné.`, depart: 'Gabarit commun du prototype ; parcours déjà en DSFR sur le site, repris pour que le hub des évènements de vie ne mène à aucune impasse.', contenus: `Fil d'Ariane : Accueil > Vos évènements de vie > ${h1}. Lien de retour, titre (h1) ${h1}, tag ${tag}, chapô « ${lead} ». ${sections.map((s) => `${s.titre ? `Section « ${s.titre} » : ` : 'Tuiles : '}${s.tuiles.map((t) => `${t.titre}${t.cat ? ` [${t.cat}]` : ''}`).join(' ; ')}`).join('. ')}. Haut de page.`, etats: `Un seul état. ${toutes.filter((t) => !t.externe).length} tuile(s) mènent à un écran du prototype, ${toutes.filter((t) => t.externe).length} à des sites externes en nouvelle fenêtre.` }));
  ecrire(ecran, 'conception.md', conception({ titre: `Parcours ${h1}`, intro: 'Parcours déjà en DSFR sur le site ; même gabarit que les parcours décès et naissance du prototype.', composants: [docComposant('tag', 'Tag', 'tag non cliquable du thème sous le titre ; dans les tuiles, la catégorie (« Simulateur », « Service public », « Aides »…) devient un tag non cliquable dans `fr-tile__start` : le site utilise des badges, mais la doc du badge le réserve aux statuts et renvoie au tag pour catégoriser.'), docComposant('tile', 'Tuile', 'tuiles horizontales sans pictogramme (en-tête optionnel selon la doc), titre en lien étendu, description, catégorie en tag ; titres h2 dans la première liste, h3 sous les sections « Vos sites de référence » ou « Vos interlocuteurs ».')].join('\n'), note: '**Retenus** : structure et ordre du site. **Écartés** : badges de couleur. **Écarts assumés** : catégories en tags et en casse de phrase (le site les écrit en capitales dans des badges) ; le bouton « Revenir aux évènements de vie » du site devient un lien, puisqu\'il navigue. **Questions ouvertes** : aucune.' }));
}
console.log('services, 5 connexions, limite FranceConnect et 6 parcours écrits');
