# Brief : Prérequis pour simuler le revenu de Solidarité Active (RSA) et la Prime d'Activité (PA), traduit en DSFR

## 1. Le service et son public
mesdroitssociaux.gouv.fr. Usagers de mesdroitssociaux.gouv.fr, avant connexion. Contenus relevés sur https://www.mesdroitssociaux.gouv.fr/simulateurs/rsa-pa (variantes relevées pour chaque réponse) le 01/10/2026 (outillage : scripts/mds/, relevés bruts dans scripts/mds/releves/).

## 2. La user story
En tant qu'usager, je veux savoir si le simulateur du RSA et de la prime d'activité convient à ma situation, afin de simuler au bon endroit.

## 3. Le point de départ
Gabarit commun du prototype (en-tête, navigation, pied de page et panneau cookies de mds-accueil), corps sur 8 colonnes.

## 4. Les contenus réels
Titre (h1) : Prérequis pour simuler le revenu de Solidarité Active (RSA) et la Prime d'Activité (PA). Introduction : Avant de commencer à simuler le Revenu de Solidarité Active (RSA) et la Prime d'Activité (PA), nous aurions besoin des informations suivantes : Trois questions Oui/Non : Avez-vous des personnes à charge dans votre foyer qui ont des ressources ? Ex : salaires, prestations sociales, etc. ; Êtes-vous travailleur indépendant ? Exerce une activité à son propre compte sans être lié à un employeur par un contrat de travail.Ex : auto-entrepreneur, artisan, free-lance, etc. ; La valeur de votre patrimoine immobilier et/ou financier est-elle supérieure à 30 000 € ? Patrimoine financier : livret A, assurance vie, PEA, PEL, etc.Patrimoine immobilier (hors résidence principale et biens à usage professionnel) : terrain nu, appartement, immeuble, etc.. Toutes à Non : bouton « Simuler le RSA et la PA ». Une réponse Oui : « Votre situation n'est pas prise en compte dans ce simulateur » ; Pour simuler vos droits au Revenu de Solidarité Active (RSA) et à la Prime d'Activité (PA), nous vous invitons à utiliser le simulateur "Simuler mes aides". ; bouton Simuler mes aides.

## 5. Les états et le parcours
Un seul fichier, contenu de fin affiché selon les réponses (petit script de la page). « Simuler le RSA et la PA » mène à la simulation du prototype, « Simuler mes aides » au simulateur global.

## 6. Les contraintes
Niveau RGAA AA, mobile d'abord, aucune image (illustrations du site retirées), aucun style hors DSFR, un seul h1.

## 7. Les critères d'acceptation
- Textes mot pour mot ; aucune classe hors DSFR, aucun style en ligne, aucun faux-texte.
- Aucun lien sans destination : chaque lien mène à un écran du prototype, à un site externe ou à la page de limite du prototype pour les écrans connectés.
