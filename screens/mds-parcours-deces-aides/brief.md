# Brief : Outil « aides en cas de décès », traduit en DSFR

## 1. Le service et son public
mesdroitssociaux.gouv.fr. Usagers de mesdroitssociaux.gouv.fr, avant connexion. Contenus relevés sur https://www.mesdroitssociaux.gouv.fr/vos-evenements-de-vie/parcours-deces-assistant (questions remplies pas à pas, aides affichées pour une situation d'essai) le 01/10/2026 (outillage : scripts/mds/, relevés bruts dans scripts/mds/releves/).

## 2. La user story
En tant que proche d'une personne décédée, je veux décrire la situation du défunt et la mienne, afin de connaître les aides et prestations que je peux demander.

## 3. Le point de départ
Gabarit commun du prototype (en-tête, navigation, pied de page et panneau cookies de mds-accueil), corps sur 8 colonnes.

## 4. Les contenus réels
Retour au parcours Décès. Titre et chapô du parcours. « A PROPOS DE VOUS ET DU DEFUNT » et son texte. À propos du défunt : Âge du défunt (ans) ; Situation du défunt (Retraité, Salarié, Demandeur d'emploi, En arrêt maladie, Autre Situation, choix multiples) ; Le défunt bénéficiait-il d'une pension, d'une rente ou d'une allocation ? (Oui/Non ; si Oui : Pension d'invalidité, Rente Accident du travail/maladie professionnelle, AAH Allocation Adulte Handicapé). À propos de vous : Votre âge ; Votre lien avec le défunt (Marié(e), Pacsé(e)/Concubin(e), Divorcé(e), Enfant) ; Etes-vous remarié(e) ? ; Avez-vous des enfants à charge ? (si Oui : Nombre d'enfants à charge) ; Votre caisse d'assurance maladie (CPAM, MSA, Autre) ; Votre caisse d'allocations familiales (CAF, MSA, Aucune). Boutons Afficher les aides et prestations, Réinitialiser. Résultats : « VOUS POURRIEZ PRETENDRE A … » : ASIR, ASPA, Capital Décès pour les ayants droit, chacune avec sa description et son formulaire PDF ; « PENSEZ A SIMULER VOS AIDES EN CAS DE DIMINUTION DE VOS REVENUS » : Aides au Logement (AL), Revenu de Solidarité Active (RSA), Complémentaire Santé Solidaire (CSS).

## 5. Les états et le parcours
index.html (formulaire) et etat-resultats.html (aides affichées). Les questions conditionnelles apparaissent selon les réponses ; « Afficher les aides et prestations » montre la liste relevée pour la situation d'essai (retraité de 75 ans, conjoint marié) : le prototype ne recalcule pas les aides selon les réponses.

## 6. Les contraintes
Niveau RGAA AA, mobile d'abord, aucune image (illustrations du site retirées), aucun style hors DSFR, un seul h1.

## 7. Les critères d'acceptation
- Textes mot pour mot ; aucune classe hors DSFR, aucun style en ligne, aucun faux-texte.
- Aucun lien sans destination : chaque lien mène à un écran du prototype, à un site externe ou à la page de limite du prototype pour les écrans connectés.
