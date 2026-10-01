# Brief : Prérequis pour simuler l'Allocation aux Adultes Handicapés (AAH), traduit en DSFR

## 1. Le service et son public
mesdroitssociaux.gouv.fr. Usagers de mesdroitssociaux.gouv.fr, avant connexion. Contenus relevés sur https://www.mesdroitssociaux.gouv.fr/simulateurs/allocation-adulte-handicape (variantes relevées pour chaque réponse) le 01/10/2026 (outillage : scripts/mds/, relevés bruts dans scripts/mds/releves/).

## 2. La user story
En tant que personne en situation de handicap, je veux savoir si le simulateur de l'AAH convient à ma situation, afin de simuler au bon endroit.

## 3. Le point de départ
Gabarit commun du prototype (en-tête, navigation, pied de page et panneau cookies de mds-accueil), corps sur 8 colonnes.

## 4. Les contenus réels
Titre (h1) : Prérequis pour simuler l'Allocation aux Adultes Handicapés (AAH). Introduction : Avant de commencer à simuler l'Allocation aux Adultes Handicapés, nous aurions besoin des informations suivantes : Trois questions Oui/Non : Avez-vous plus de 62 ans ? ; Êtes-vous travailleur non salarié ? C'est une personne qui exerce une activité à son propre compte sans être lié à un employeur par un contrat de travail (auto-entrepreneur, artisan,...) ; Êtes-vous travailleur ESAT ? C'est une personne en situation d'handicap qui exerce une activité professionnelle au sein d'un Etablissement et Service d'Accompagnement par le Travail (ESAT).. Toutes à Non : connexion FranceConnect (« Plus rapide, plus simple ») ou « Sans identification » et Simuler mes aides. Plus de 62 ans : message et Simuler mes aides. Non salarié : message et Simuler mes aides. ESAT : information puis les deux voies.

## 5. Les états et le parcours
Un seul fichier, fin de page selon les réponses (petit script de la page).

## 6. Les contraintes
Niveau RGAA AA, mobile d'abord, aucune image (illustrations du site retirées), aucun style hors DSFR, un seul h1.

## 7. Les critères d'acceptation
- Textes mot pour mot ; aucune classe hors DSFR, aucun style en ligne, aucun faux-texte.
- Aucun lien sans destination : chaque lien mène à un écran du prototype, à un site externe ou à la page de limite du prototype pour les écrans connectés.
