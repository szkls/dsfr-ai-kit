# Brief : Simulation de la prime à la naissance : présentation, traduite en DSFR

## 1. Le service et son public
mesdroitssociaux.gouv.fr. Usagers de mesdroitssociaux.gouv.fr, avant connexion. Contenus relevés sur https://www.mesdroitssociaux.gouv.fr/votre-simulateur/prime-naissance le 01/10/2026 (outillage : scripts/mds/, relevés bruts dans scripts/mds/releves/).

## 2. La user story
En tant que futur parent, je veux savoir ce qu'il faut préparer avant de simuler la prime à la naissance, afin de la simuler sans interruption.

## 3. Le point de départ
Gabarit commun du prototype (en-tête, navigation, pied de page et panneau cookies de mds-accueil), corps sur 8 colonnes.

## 4. Les contenus réels
Fil d'Ariane : Accueil > Simuler vos aides > Prime à la naissance. Titre (h1) : Simulation de la prime à la naissance. Chapô : La prime à la naissance permet d'aider à financer les premières dépenses liées à l'arrivée de votre enfant en fonction de vos ressources. « Préparez vos documents » : du dernier avis d'imposition de votre foyer sur 2024. Bouton Commencer la simulation. Questions dépliables : Qui peut en bénéficier ? (Tous les parents qui attendent un enfant et dont les ressources ne dépassent pas le seuil en vigueur.) ; Quand est-elle versée ? (La prime est versée en une seule fois au cours du 7ème mois de grossesse.). Lien de retour vers les simulateurs.

## 5. Les états et le parcours
Un seul état. « Commencer la simulation » mène à l'étape 1 de mds-simulation-prime-naissance et efface une simulation en cours.

## 6. Les contraintes
Niveau RGAA AA, mobile d'abord, aucune image (illustrations du site retirées), aucun style hors DSFR, un seul h1.

## 7. Les critères d'acceptation
- Textes mot pour mot ; aucune classe hors DSFR, aucun style en ligne, aucun faux-texte.
- Aucun lien sans destination : chaque lien mène à un écran du prototype, à un site externe ou à la page de limite du prototype pour les écrans connectés.
