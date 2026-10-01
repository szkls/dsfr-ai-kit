# Brief : « Simuler mes aides » (58 aides), traduit en DSFR

## 1. Le service et son public
mesdroitssociaux.gouv.fr. Usagers de mesdroitssociaux.gouv.fr, avant connexion. Contenus relevés sur https://www.mesdroitssociaux.gouv.fr/dd1pnds-ria/#destination/simu-foyer et ses étapes simu-situation, simu-logement, simu-ressources, simu-resultat (ancienne application hors charte, ouvertes une à une avec leurs fenêtres d'édition) le 01/10/2026 (outillage : scripts/mds/, relevés bruts dans scripts/mds/releves/).

## 2. La user story
En tant qu'usager, je veux décrire mon foyer, ma situation, mon logement et mes ressources une seule fois, afin de connaître toutes les aides auxquelles je peux prétendre.

## 3. Le point de départ
Démarche à étapes DSFR (Foyer, Situation, Logement, Ressources, Résultat). Les fenêtres d'édition du site (données personnelles, situation matrimoniale, enfant à charge) deviennent des champs dans la page, comme le recommande la doc de la modale pour les formulaires.

## 4. Les contenus réels
Foyer : « Vous pouvez modifier sur cet écran la composition de votre foyer pour effectuer votre simulation. » ; Vous (Prénom, Date de naissance, Sexe Féminin/Masculin) ; Vous vivez seul(e) / en couple, depuis plus de 18 mois / moins de 18 mois ; conjoint ; « ajouter un enfant ou une personne à charge ». Situation : « Passez directement à l'étape suivante si vous n'êtes dans aucune de ces situations » ; vous êtes... en reprise d'activité (formation, CDD, CDI, création ou reprise d'entreprise), en CER ou en PPAE, en situation de handicap, en situation d’invalidité, régime Alsace Moselle. Logement : code postal ; locataire / propriétaire / autre ; pour un locataire : conventionné, colocation, chambre, meublé, lien de parenté. Ressources : revenu fiscal de référence 2024 du foyer (présent sur votre avis d’imposition 2025), rappel des 12 derniers mois, aucune ressource, Ajouter des ressources (six catégories décrites). Résultat relevé : « Selon les informations qui ont été saisies, vous ne pouvez pas bénéficier de prestation sociale. » Boutons Suivant et Réinitialiser.

## 5. Les états et le parcours
index.html, etat-situation, etat-logement, etat-ressources, etat-ressources-ajout, etat-resultat. Questions conditionnelles affichées selon les réponses ; le résultat est celui relevé, sans calcul.

## 6. Les contraintes
Niveau RGAA AA, mobile d'abord, aucune image (illustrations du site retirées), aucun style hors DSFR, un seul h1.

## 7. Les critères d'acceptation
- Textes mot pour mot ; aucune classe hors DSFR, aucun style en ligne, aucun faux-texte.
- Aucun lien sans destination : chaque lien mène à un écran du prototype, à un site externe ou à la page de limite du prototype pour les écrans connectés.
