# scripts/mds — prototype DSFR de mesdroitssociaux.gouv.fr

Outillage qui produit et vérifie les écrans `screens/mds-*` : la partie publique (hors connexion) du site traduite en DSFR et reliée en prototype navigable. Entrée : `npm run serve`, puis http://localhost:8000/ (redirige vers l'accueil). Le fichier `serve.json` garde les adresses telles quelles pour que les liens relatifs fonctionnent.

## Relever le site
- `releve-page.mjs <nom> <chemin> [--clics]` : contenu d'une page (accordéons dépliés) et destination de ses boutons ; résultat dans `releves/<nom>.json`.
- `explore-simulateur.mjs <nom> <chemin> [reponses.json]` : parcourt un simulateur public écran par écran avec des réponses d'essai (aucune demande déposée).
- `releve-prerequis.mjs`, `releve-articles.mjs`, `releve-cookies-actus.mjs`, `releve-aides-deces*.mjs`, `releve-mes-aides*.mjs`, `releve-acces-demande.mjs` : relevés particuliers.

## Produire les écrans
`lib.mjs` (gabarit et briques DSFR), `liens-internes.mjs` (adresses du site → écrans), `convertir-etape.mjs` (écran de simulateur relevé → formulaire DSFR). Chaque `build-*.mjs` écrit `index.html`, les états `etat-*.html`, `brief.md` et `conception.md` de ses écrans :
- `build-services-parcours.mjs` : Vos services, pages « Connexion à… », limite du prototype (FranceConnect), six parcours ;
- `build-actualites.mjs`, `build-transcriptions.mjs` ;
- `build-simulateurs.mjs` (hub et pages d'entrée), `build-primes.mjs`, `build-cmg.mjs`, `build-rsa.mjs`, `build-mes-aides.mjs`, `build-aides-deces.mjs`.

Ordre pour tout régénérer : les `build-*.mjs`, puis `sync-layout.mjs` (en-tête, pied de page et panneau cookies communs, à partir de mds-accueil), `doc-commune.mjs` puis `relier.mjs` (liens restés provisoires).

## Vérifier
- `verifier-liens.mjs` : chaque lien mène à un fichier ou une ancre présents, chaque bouton à une action ; doit afficher 0 problème.
- `visite.mjs [adresse du serveur]` : visite en navigateur depuis l'accueil, erreurs HTTP et JavaScript, écrans jamais atteints.
- `tester-tout.sh` : `npm run check` sur tous les écrans mds, résumé dans `releves/_tests.txt`.
- `verif-prime.mjs` : parcours complet de la simulation de la prime à la naissance.

Les scripts communs du prototype sont dans `screens/_mds/` : `prototype.js` (FranceConnect, panneau cookies) et `simulation.js` (contrôle des champs, mémoire des réponses, récapitulatifs).
