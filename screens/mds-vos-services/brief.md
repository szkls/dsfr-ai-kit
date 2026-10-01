# Brief : Vos services, traduite en DSFR

## 1. Le service et son public
mesdroitssociaux.gouv.fr. Usagers de mesdroitssociaux.gouv.fr, avant connexion. Contenus relevés sur https://www.mesdroitssociaux.gouv.fr/services le 01/10/2026 (outillage : scripts/mds/, relevés bruts dans scripts/mds/releves/).

## 2. La user story
En tant qu'usager, je veux voir tous les services du portail sur une page, afin d'accéder au simulateur ou à mon espace.

## 3. Le point de départ
Gabarit commun du prototype (en-tête, navigation, pied de page et panneau cookies de mds-accueil), corps sur 8 colonnes.

## 4. Les contenus réels
Titre (h1) : Vos services. Chapô : Consultez l’ensemble de vos droits sociaux : vos droits, vos ressources, votre attestation employeur, vos signalements, votre activité professionnelle et simulez vos aides. Six cartes du site, dans l'ordre : Vos simulateurs (Simulez rapidement les aides sociales auxquelles vous pouvez prétendre.) ; Vos droits (Consultez vos droits sociaux, trouvez vos contacts et faites vos démarches.) ; Vos ressources (Consultez l’ensemble de vos ressources sur les douze derniers mois.) ; Votre activité professionnelle (Consultez les informations déclarées par vos employeurs, et téléchargez votre relevé d'activité.) ; Vos signalements (Suivez les signalements d’erreurs que avez effectués.) ; Vos rappels (Consultez vos rappels relatifs à vos droits sociaux pour ne rien oublier !). Illustrations retirées. Lien Haut de page.

## 5. Les états et le parcours
Un seul état. « Vos simulateurs » mène au hub des simulateurs ; les cinq autres services mènent à leur page « Connexion à… ».

## 6. Les contraintes
Niveau RGAA AA, mobile d'abord, aucune image (illustrations du site retirées), aucun style hors DSFR, un seul h1.

## 7. Les critères d'acceptation
- Textes mot pour mot ; aucune classe hors DSFR, aucun style en ligne, aucun faux-texte.
- Aucun lien sans destination : chaque lien mène à un écran du prototype, à un site externe ou à la page de limite du prototype pour les écrans connectés.
