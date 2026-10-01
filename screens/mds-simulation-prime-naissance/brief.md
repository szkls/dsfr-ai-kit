# Brief : Simulation de la prime à la naissance en 4 étapes, traduite en DSFR

## 1. Le service et son public
mesdroitssociaux.gouv.fr. Usagers de mesdroitssociaux.gouv.fr, avant connexion. Contenus relevés sur https://www.mesdroitssociaux.gouv.fr/votre-simulateur/prime-naissance/formulaire-foyer (parcouru jusqu'au résultat avec des réponses d'essai ; aucune demande déposée) le 01/10/2026 (outillage : scripts/mds/, relevés bruts dans scripts/mds/releves/).

## 2. La user story
En tant que futur parent, je veux renseigner mon foyer et mes ressources, vérifier mes réponses et connaître le montant de la prime à la naissance, afin de savoir si je peux la demander.

## 3. Le point de départ
Gabarit commun ; démarche à étapes avec indicateur d'étapes, conforme au modèle de formulaire du DSFR (page d'introduction séparée : mds-simulateur-prime-naissance).

## 4. Les contenus réels
Étape 1 « Votre foyer » : Vous êtes (Célibataire / En couple — Marié, pacsé ou union libre) ; Nombre d'enfants à charge actuellement dans votre foyer (Exemple : 2) ; Nombre d'enfants à naître (Exemple : 2) ; Date de naissance prévisionnelle (Jour, Mois, Année). Étape 2 « Vos ressources » : si en couple, deux questions sur un revenu net d'activité de plus de 6 306 € en 2024 (vous, votre conjoint) et la fenêtre « Où trouver le revenu net d'activité… » ; Revenus nets imposables de 2024 de votre foyer en euros et la fenêtre « Où trouver le revenu net imposable du foyer ? ». Étape 3 « Récapitulatif » : réponses, Modifier le foyer, Modifier les ressources, Voir le résultat. Étape 4 « Résultat » : Simulation terminée !, avertissement, montant 1 093,08 € par enfant à naître, versement, fenêtre « Accéder à la demande » (Faire une demande à la MSA / à la CAF), tuile vers les démarches liées à l'arrivée d'un enfant, questions dépliables. Message d'erreur des champs : « Veuillez renseigner cette information ».

## 5. Les états et le parcours
index.html (foyer), etat-ressources, etat-ressources-couple, etat-recapitulatif, etat-resultat, etat-resultat-non-eligible (revenu au-dessus du plafond, relevé avec un couple à 95 000 €). Les réponses sont gardées d'un écran à l'autre et reprises dans le récapitulatif ; le montant et le mois de versement suivent la saisie ; l'éligibilité n'est pas recalculée (plafonds non publiés sur le site).

## 6. Les contraintes
Niveau RGAA AA, mobile d'abord, aucune image (illustrations du site retirées), aucun style hors DSFR, un seul h1.

## 7. Les critères d'acceptation
- Textes mot pour mot ; aucune classe hors DSFR, aucun style en ligne, aucun faux-texte.
- Aucun lien sans destination : chaque lien mène à un écran du prototype, à un site externe ou à la page de limite du prototype pour les écrans connectés.
- Chaque champ obligatoire vide affiche l'état d'erreur DSFR et le message du site.
- Le récapitulatif reprend les réponses saisies.
