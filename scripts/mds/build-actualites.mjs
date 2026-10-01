// Liste des actualités (3 pages de 12) et les 32 articles, à partir de releves/articles.json.
import { releve, esc, ind, lien, ext, page, ecrire, lienRetour, lienSuite, tuile, brief, conception, docComposant } from './lib.mjs';
import { interne } from './liens-internes.mjs';
const A = releve('articles');
const slugOf = (u) => u.replace(/.*\/actualites\//, '').replace(/-\d{4}-\d{2}-\d{2}\/?$/, '').slice(0, 48).replace(/-$/, '');
const ecranArticle = (i) => (i === 0 ? 'mds-actualite-article' : 'mds-actualite-' + slugOf(A[i].url));
const ecranListe = (p) => (p === 1 ? 'mds-actualites' : 'mds-actualites-page-' + p);
const PAR_PAGE = 12; const NB = Math.ceil(A.length / PAR_PAGE);
const pageDe = (i) => Math.floor(i / PAR_PAGE) + 1;
const date = (x) => x.contenu.find((b) => b.k === 'h2').texte;
const chapo = (x) => x.resume.replace(/^\d{2}\/\d{2}\/\d{4}\s*/, '').replace(x.titre, '').trim();
const court = (t) => { const m = t.split(/\s+/); return m.length > 4 ? m.slice(0, 4).join(' ') + '…' : t; };
// « En savoir plus » (libellé du site) : le sujet de l'article est ajouté au title pour les lecteurs d'écran
let titreCourant = '';
const action = (texte, href) => { const i = interne(href); if (i) return lienSuite(texte, i); return /^En savoir plus$/i.test(texte) ? ext(href, texte).replace(`title="${texte} - nouvelle fenêtre"`, `title="${texte} : ${titreCourant.replace(/"/g, '&quot;')} - nouvelle fenêtre"`) : ext(href, texte); };

// ---------- articles
A.forEach((x, i) => {
  titreCourant = x.titre;
  const out = []; let liste = null;
  const ferme = () => { if (liste) { out.push(`<ul>\n${liste.map((l) => `    <li>${l}</li>`).join('\n')}\n</ul>`); liste = null; } };
  const enrichir = (b) => { let h = esc(b.texte); for (const l of b.liens || []) { const i2 = interne(l.href); const a = i2 ? `<a href="${i2}">${esc(l.texte)}</a>` : `<a href="${esc(l.href.replace(/\]$/, ''))}" target="_blank" rel="noopener external" title="${esc(l.texte)} - nouvelle fenêtre">${esc(l.texte)}</a>`; h = h.replace(esc(l.texte), a); } return h; };
  for (const b of x.contenu) {
    if (['h1', 'h2', 'image'].includes(b.k) || (b.k === 'bouton' && /^Revenir/.test(b.texte))) continue;
    if (b.k === 'li') { (liste ??= []).push(enrichir(b)); continue; }
    ferme();
    if (b.k === 'p' || b.k === 'texte') out.push(`<p>${enrichir(b)}</p>`);
    else if (b.k === 'lien') out.push(`<p>\n    ${action(b.texte, b.href)}\n</p>`);
    else if (b.k === 'bouton') { const d = x.destinations.find((y) => y.texte === b.texte); const href = d && (d.ouvre || d.url); out.push(`<p>\n    ${href ? action(b.texte, href) : esc(b.texte)}\n</p>`); }
    else if (b.k.startsWith('h')) out.push(`<h2>${esc(b.texte)}</h2>`);
  }
  ferme();
  const liste1 = ecranListe(pageDe(i));
  const ecran = ecranArticle(i);
  ecrire(ecran, 'index.html', page({ titre: x.titre, fil: [{ label: 'Actualités', href: lien(liste1) }, { label: court(x.titre) }], main: `        <div class="fr-container fr-mt-4v fr-mb-8v">
            <div class="fr-grid-row fr-grid-row--gutters">
                <div class="fr-col-12 fr-col-lg-8">
                    <h1>${esc(x.titre)}</h1>
                    <p class="fr-text--sm fr-text-mention--grey">Publié le ${esc(date(x))}</p>
${chapo(x) ? `                    <p class="fr-text--lead">${esc(chapo(x))}</p>\n` : ''}${ind(out.join('\n'), 20)}
                    <p class="fr-mt-6v">
                        ${lienRetour('Revenir à la liste des actualités', lien(liste1))}
                    </p>
                </div>
            </div>
        </div>` }));
  ecrire(ecran, 'brief.md', brief({ titre: `Article « ${x.titre} », traduit en DSFR`, source: x.url, story: "En tant qu'usager, je veux lire une actualité du portail et suivre son lien d'action, afin de connaître un changement qui me concerne.", depart: 'Gabarit « article » du prototype (même que mds-actualite-article).', contenus: `Fil d'Ariane : Accueil > Actualités > ${court(x.titre)}. Titre (h1) : ${x.titre}. Date : ${date(x)}. Chapô : ${chapo(x) || '(aucun)'}. Corps : ${x.contenu.filter((b) => ['p', 'li', 'texte'].includes(b.k)).length} paragraphes ou éléments de liste, liens d'action : ${x.contenu.filter((b) => b.k === 'lien' || (b.k === 'bouton' && !/^Revenir/.test(b.texte))).map((b) => b.texte).join(' ; ') || 'aucun'}. Image retirée. Lien de retour vers la liste.`, etats: 'Un seul état. Les liens vers le site mènent aux écrans du prototype (connexion, simulateurs, parcours), les autres s\'ouvrent dans une nouvelle fenêtre.' }));
  ecrire(ecran, 'conception.md', conception({ titre: `Article ${x.titre}`, intro: 'Gabarit « article » commun aux 32 actualités.', composants: 'Aucun composant supplémentaire : titres, paragraphes, listes et liens (voir Lien) ; la date en texte de mention (`fr-text-mention--grey`).', note: '**Retenus** : texte intégral du site, chapô repris du résumé de la liste, liens d\'action en « Lien icon à droite » ou « Lien externe ». **Écartés** : image d\'illustration. **Écarts assumés** : « Publié le » ajouté devant la date (le site n\'affiche que la date) ; les boutons-liens du site deviennent des liens, puisqu\'ils naviguent. **Questions ouvertes** : aucune.' }));
});

// ---------- listes
const pagination = (p) => {
  const a = (cls, id, title, label, cible, actif) => actif ? `            <a class="fr-pagination__link${cls}" id="${id}" href="${lien(ecranListe(cible))}" title="${title}">\n                ${label}\n            </a>` : `            <a class="fr-pagination__link${cls}" id="${id}" title="${title}" aria-disabled="true" role="link">\n                ${label}\n            </a>`;
  const items = [a(' fr-pagination__link--first', 'pagination-first', 'Première page', 'Première page', 1, p > 1), a(' fr-pagination__link--prev fr-pagination__link--lg-label', 'pagination-prev', 'Page précédente', 'Page précédente', p - 1, p > 1)];
  for (let k = 1; k <= NB; k++) items.push(k === p ? `            <a class="fr-pagination__link" id="pagination-${k}" aria-current="page" title="Page ${k}">\n                ${k}\n            </a>` : `            <a class="fr-pagination__link" id="pagination-${k}" href="${lien(ecranListe(k))}" title="Page ${k}">\n                ${k}\n            </a>`);
  items.push(a(' fr-pagination__link--next fr-pagination__link--lg-label', 'pagination-next', 'Page suivante', 'Page suivante', p + 1, p < NB), a(' fr-pagination__link--last', 'pagination-last', 'Dernière page', 'Dernière page', NB, p < NB));
  return `<nav role="navigation" class="fr-pagination fr-mt-6v" aria-label="Pagination" data-fr-analytics-page-total="${NB}">
    <ul class="fr-pagination__list">
${items.map((it) => `        <li>\n${it}\n        </li>`).join('\n')}
    </ul>
</nav>`;
};
for (let p = 1; p <= NB; p++) {
  const lot = A.map((x, i) => ({ x, i })).slice((p - 1) * PAR_PAGE, p * PAR_PAGE);
  const ecran = ecranListe(p);
  ecrire(ecran, 'index.html', page({ titre: p === 1 ? 'Actualités' : `Actualités - page ${p}`, fil: [{ label: 'Actualités' }], main: `        <div class="fr-container fr-mt-4v fr-mb-8v">
            <div class="fr-grid-row fr-grid-row--gutters">
                <div class="fr-col-12 fr-col-lg-8">
                    <h1>ACTUALITÉS</h1>
                    <p class="fr-text--lead">En ce moment sur mesdroitssociaux.gouv.fr</p>
                </div>
            </div>
            <div class="fr-grid-row fr-grid-row--gutters">
${lot.map(({ x, i }) => `                <div class="fr-col-12 fr-col-md-6 fr-col-lg-4">
${ind(tuile({ id: `tile-actu-${i + 1}`, titre: x.titre, href: lien(ecranArticle(i)), detail: date(x), niveau: 2 }), 20)}
                </div>`).join('\n')}
            </div>
${ind(pagination(p), 12)}
            <p class="fr-mt-6v">
                ${lienRetour("Revenir à l'accueil", lien('mds-accueil'))}
            </p>
        </div>` }));
  ecrire(ecran, 'brief.md', brief({ titre: `Actualités${p > 1 ? ` (page ${p})` : ''}, traduites en DSFR`, source: 'https://www.mesdroitssociaux.gouv.fr/accueil/actualites', story: "En tant qu'usager, je veux parcourir les actualités du portail et ouvrir celle qui m'intéresse, afin de me tenir informé.", contenus: `Titre (h1) : ACTUALITÉS. Chapô : En ce moment sur mesdroitssociaux.gouv.fr. Tuiles ${lot[0].i + 1} à ${lot[lot.length - 1].i + 1} des ${A.length} actualités du site, titre et date : ${lot.map(({ x }) => x.titre).join(' ; ')}. Pagination de ${NB} pages (le site affiche les ${A.length} actualités sur une seule page). Lien de retour vers l'accueil.`, etats: `Page ${p} sur ${NB}. Chaque tuile mène à son article ; la pagination mène aux autres pages de la liste.` }));
  ecrire(ecran, 'conception.md', conception({ titre: `Actualités${p > 1 ? ` page ${p}` : ''}`, intro: 'Gabarit « liste » des actualités.', composants: [docComposant('tile', 'Tuile', 'tuiles sans pictogramme, titre h2 en lien étendu vers l\'article, date en détail ; grille 1, 2 puis 3 colonnes.'), docComposant('pagination', 'Pagination', `${NB} pages, page courante avec \`aria-current="page"\`, liens désactivés par \`aria-disabled\` et \`role="link"\` en début et fin de liste, comme l'extrait officiel.`)].join('\n'), note: `**Retenus** : douze tuiles par page, ordre du site. **Écartés** : images des actualités. **Écarts assumés** : pagination ajoutée (le site affiche tout sur une page) pour garder une liste courte. **Questions ouvertes** : aucune.` }));
}
console.log(`${A.length} articles et ${NB} pages de liste écrits`);
