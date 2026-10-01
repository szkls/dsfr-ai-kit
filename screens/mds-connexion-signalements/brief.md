# Brief : Connexion à vos signalements, traduite en DSFR

## 1. Le service et son public
mesdroitssociaux.gouv.fr. Usagers de mesdroitssociaux.gouv.fr, avant connexion. Contenus relevés sur https://www.mesdroitssociaux.gouv.fr/signalements le 01/10/2026 (outillage : scripts/mds/, relevés bruts dans scripts/mds/releves/).

## 2. La user story
En tant qu'usager qui veut consulter « Vos signalements », je veux comprendre que je dois m'identifier et pouvoir le faire avec FranceConnect, afin d'accéder à mes informations.

## 3. Le point de départ
Gabarit commun du prototype (en-tête, navigation, pied de page et panneau cookies de mds-accueil), corps sur 8 colonnes.

## 4. Les contenus réels
Fil d'Ariane : Accueil > Vos services > Connexion à vos signalements. Titre (h1) : Connexion à vos signalements. Chapô : Après vous être identifié via le bouton FranceConnect, vous pourrez suivre les signalements d’erreurs que vous avez effectués. Bouton FranceConnect avec le lien « Qu’est-ce que FranceConnect ? ». Illustration du site retirée. Lien de retour vers Vos services.

## 5. Les états et le parcours
Un seul état. Le bouton FranceConnect mène à la page de limite du prototype (mds-connexion-franceconnect) : les écrans connectés ne sont pas maquettés.

## 6. Les contraintes
Niveau RGAA AA, mobile d'abord, aucune image (illustrations du site retirées), aucun style hors DSFR, un seul h1.

## 7. Les critères d'acceptation
- Textes mot pour mot ; aucune classe hors DSFR, aucun style en ligne, aucun faux-texte.
- Aucun lien sans destination : chaque lien mène à un écran du prototype, à un site externe ou à la page de limite du prototype pour les écrans connectés.
