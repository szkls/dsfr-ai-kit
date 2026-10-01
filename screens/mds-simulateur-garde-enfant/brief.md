# Brief : Simulation des aides à la garde d’enfants, traduite en DSFR

## 1. Le service et son public
mesdroitssociaux.gouv.fr. Usagers de mesdroitssociaux.gouv.fr, avant connexion. Contenus relevés sur https://www.mesdroitssociaux.gouv.fr/votre-simulateur/aide-garde-enfant le 01/10/2026 (outillage : scripts/mds/, relevés bruts dans scripts/mds/releves/).

## 2. La user story
En tant que parent, je veux comprendre les aides à la garde selon le mode de garde, afin de simuler la bonne aide.

## 3. Le point de départ
Gabarit commun du prototype (en-tête, navigation, pied de page et panneau cookies de mds-accueil), corps sur 8 colonnes.

## 4. Les contenus réels
Titre (h1) : Simulation des aides à la garde d’enfants. Chapô du site. Mise en avant monenfant.fr. Deux sections (structure : conventionnée avec PSU, non conventionnée avec CMG structure ; emploi direct : CMG emploi direct, Pajemploi, Pajemploi+), trois listes dépliables des modes de garde, trois boutons de simulation (PSU sur monenfant.fr, CMG structure dans le prototype, CMG emploi direct sur urssaf.fr).

## 5. Les états et le parcours
Un seul état.

## 6. Les contraintes
Niveau RGAA AA, mobile d'abord, aucune image (illustrations du site retirées), aucun style hors DSFR, un seul h1.

## 7. Les critères d'acceptation
- Textes mot pour mot ; aucune classe hors DSFR, aucun style en ligne, aucun faux-texte.
- Aucun lien sans destination : chaque lien mène à un écran du prototype, à un site externe ou à la page de limite du prototype pour les écrans connectés.
