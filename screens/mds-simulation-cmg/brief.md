# Brief : Simulation du CMG structure, traduite en DSFR

## 1. Le service et son public
mesdroitssociaux.gouv.fr. Usagers de mesdroitssociaux.gouv.fr, avant connexion. Contenus relevés sur https://www.mesdroitssociaux.gouv.fr/votre-simulateur/aide-garde-enfant/cmg (parcouru jusqu'au résultat avec une situation d'essai : célibataire en activité à 51-80 %, un enfant né en mars 2027 gardé en micro-crèche pour 1 200 € par mois ; aucune demande déposée) le 01/10/2026 (outillage : scripts/mds/, relevés bruts dans scripts/mds/releves/).

## 2. La user story
En tant que parent qui fait garder son enfant en structure non conventionnée, je veux renseigner mon foyer, mon mode de garde et mes ressources, afin d'estimer le CMG structure et le reste à ma charge.

## 3. Le point de départ
Démarche à étapes avec indicateur d'étapes (Foyer, Mode de garde, Ressources, Résultat), page d'introduction séparée : mds-simulateur-cmg. Écrans produits par scripts/mds/build-cmg.mjs à partir du relevé (convertisseur scripts/mds/convertir-etape.mjs).

## 4. Les contenus réels
Écrans : Questions préliminaires ; Votre profil ; Enfant à garder ; Récapitulatif de votre foyer ; Votre mode de garde ; Récapitulatif de votre mode de garde ; Vos ressources ; Récapitulatif de vos ressources ; Résultat. Questions, aides, fenêtres d'aide (Description des différents modes de garde, Vous ne trouvez pas votre mode de garde ?, Vous ne connaissez pas le montant des frais de garde ?, Où trouver le revenu fiscal de référence ?, Vous n’avez pas d’avis d’imposition ?), récapitulatifs et résultat (1 014,90 € /mois pour mars 2027, reste à charge 185,10 €, fenêtre « Accéder à la demande du CMG structure » vers la MSA et la CAF, deux questions « En savoir plus ») repris du site.

## 5. Les états et le parcours
index.html (questions préliminaires), etat-demandeur, etat-recap-foyer, etat-enfant, etat-mode-de-garde, etat-recap-mode-de-garde, etat-ressources, etat-recap-ressources, etat-resultat. Les boutons enchaînent les écrans ; les champs obligatoires vides affichent l'erreur DSFR ; les récapitulatifs et le résultat montrent la situation d'essai (pas de calcul).

## 6. Les contraintes
Niveau RGAA AA, mobile d'abord, aucune image (illustrations du site retirées), aucun style hors DSFR, un seul h1.

## 7. Les critères d'acceptation
- Textes mot pour mot ; aucune classe hors DSFR, aucun style en ligne, aucun faux-texte.
- Aucun lien sans destination : chaque lien mène à un écran du prototype, à un site externe ou à la page de limite du prototype pour les écrans connectés.
