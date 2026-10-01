# Brief : Limite du prototype : connexion avec FranceConnect

## 1. Le service et son public
mesdroitssociaux.gouv.fr. Usagers de mesdroitssociaux.gouv.fr, avant connexion. Contenus relevés sur le comportement du bouton « S’identifier avec FranceConnect » du site (redirection vers oidc.franceconnect.gouv.fr) le 01/10/2026 (outillage : scripts/mds/, relevés bruts dans scripts/mds/releves/).

## 2. La user story
En tant que personne qui teste le prototype, je veux comprendre ce qui se passerait au clic sur FranceConnect, afin de ne pas tomber sur une erreur ni sur un faux écran de FranceConnect.

## 3. Le point de départ
Gabarit commun du prototype (en-tête, navigation, pied de page et panneau cookies de mds-accueil), corps sur 8 colonnes.

## 4. Les contenus réels
Page propre au prototype, pas au site : titre (h1) « Connexion avec FranceConnect » ; alerte d'information « Information : limite du prototype » qui explique la redirection réelle et que les écrans connectés ne sont pas maquettés ; liens « Revenir à l'accueil » et « Simuler vos aides sans vous connecter ». Aucun écran de FranceConnect n'est imité : c'est un service tiers.

## 5. Les états et le parcours
Un seul état. Atteinte par tous les boutons FranceConnect du prototype et par les liens qui exigent une connexion (formulaire de contact, relevés de l'article).

## 6. Les contraintes
Niveau RGAA AA, mobile d'abord, aucune image (illustrations du site retirées), aucun style hors DSFR, un seul h1.

## 7. Les critères d'acceptation
- Textes mot pour mot ; aucune classe hors DSFR, aucun style en ligne, aucun faux-texte.
- Aucun lien sans destination : chaque lien mène à un écran du prototype, à un site externe ou à la page de limite du prototype pour les écrans connectés.
