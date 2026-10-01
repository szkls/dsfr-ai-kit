# Brief : Parcours « Vous cherchez un emploi », traduit en DSFR

## 1. Le service et son public
mesdroitssociaux.gouv.fr. Usagers de mesdroitssociaux.gouv.fr, avant connexion. Contenus relevés sur https://www.mesdroitssociaux.gouv.fr/evenements-de-vie/parcours-emploi-aides le 01/10/2026 (outillage : scripts/mds/, relevés bruts dans scripts/mds/releves/).

## 2. La user story
En tant qu'usager concerné par l'évènement « Vous cherchez un emploi », je veux trouver les aides, démarches et sites de référence, afin d'être accompagné.

## 3. Le point de départ
Gabarit commun du prototype ; parcours déjà en DSFR sur le site, repris pour que le hub des évènements de vie ne mène à aucune impasse.

## 4. Les contenus réels
Fil d'Ariane : Accueil > Vos évènements de vie > Vous cherchez un emploi. Lien de retour, titre (h1) Vous cherchez un emploi, tag Emploi, chapô « Les personnes en recherche d'emploi peuvent être accompagnées et bénéficier d'aides financières. ». Tuiles : Découvrir toutes les aides financières possibles [AIDES] ; Estimer vos droits et allocations [SIMULATEUR] ; Comprendre le calcul de l'allocation [CALCUL] ; A chaque situation son allocation [RÈGLES]. Section « Aller plus loin » : Quels services pour vous ? ; Allocations : attention aux idées reçues ! ; Laissez-vous guider avec les vidéos France Travail. Haut de page.

## 5. Les états et le parcours
Un seul état. 0 tuile(s) mènent à un écran du prototype, 7 à des sites externes en nouvelle fenêtre.

## 6. Les contraintes
Niveau RGAA AA, mobile d'abord, aucune image (illustrations du site retirées), aucun style hors DSFR, un seul h1.

## 7. Les critères d'acceptation
- Textes mot pour mot ; aucune classe hors DSFR, aucun style en ligne, aucun faux-texte.
- Aucun lien sans destination : chaque lien mène à un écran du prototype, à un site externe ou à la page de limite du prototype pour les écrans connectés.
