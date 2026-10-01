# Brief : Prérequis pour simuler la Complémentaire Santé Solidaire (CSS), traduit en DSFR

## 1. Le service et son public
mesdroitssociaux.gouv.fr. Usagers de mesdroitssociaux.gouv.fr, avant connexion. Contenus relevés sur https://www.mesdroitssociaux.gouv.fr/simulateurs/complementaire-sante-solidaire le 01/10/2026 (outillage : scripts/mds/, relevés bruts dans scripts/mds/releves/).

## 2. La user story
En tant qu'usager, je veux simuler la Complémentaire Santé Solidaire, soit en me connectant pour avoir mes informations pré-remplies, soit sans identification, afin de connaître mes droits.

## 3. Le point de départ
Gabarit commun du prototype (en-tête, navigation, pied de page et panneau cookies de mds-accueil), corps sur 8 colonnes.

## 4. Les contenus réels
Lien Revenir aux simulateurs. Titre (h1) : Prérequis pour simuler la Complémentaire Santé Solidaire (CSS). « Plus rapide, plus simple » : Connectez-vous et simulez la Complémentaire Santé Solidaire avec vos informations pré-remplies ; bouton FranceConnect. Encart MSA : Vous êtes célibataire et adhérent de la MSA ? … Nous vous conseillons de réaliser cette démarche sur un ordinateur. « Sans identification » : texte et bouton Simuler mes aides.

## 5. Les états et le parcours
Un seul état. FranceConnect mène à la page de limite du prototype ; « Simuler mes aides » au simulateur global.

## 6. Les contraintes
Niveau RGAA AA, mobile d'abord, aucune image (illustrations du site retirées), aucun style hors DSFR, un seul h1.

## 7. Les critères d'acceptation
- Textes mot pour mot ; aucune classe hors DSFR, aucun style en ligne, aucun faux-texte.
- Aucun lien sans destination : chaque lien mène à un écran du prototype, à un site externe ou à la page de limite du prototype pour les écrans connectés.
