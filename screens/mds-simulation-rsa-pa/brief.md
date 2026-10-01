# Brief : Simulation du RSA et de la prime d'activité, traduite en DSFR

## 1. Le service et son public
mesdroitssociaux.gouv.fr. Usagers de mesdroitssociaux.gouv.fr, avant connexion. Contenus relevés sur https://www.mesdroitssociaux.gouv.fr/vos-simulateurs/#/rsa-pa/foyer (parcouru jusqu'au résultat avec une situation d'essai : personne seule salariée avec plusieurs ressources, locataire à Paris ; aucune demande déposée) le 01/10/2026 (outillage : scripts/mds/, relevés bruts dans scripts/mds/releves/).

## 2. La user story
En tant qu'usager, je veux décrire mon foyer, mes ressources et mon logement, afin d'estimer mes droits au RSA et à la prime d'activité.

## 3. Le point de départ
Démarche à étapes (Foyer, Ressources, Logement, Résultat) ; la page de prérequis mds-simulateur-rsa-pa sert d'introduction. Écrans produits par scripts/mds/build-rsa.mjs (convertisseur scripts/mds/convertir-etape.mjs).

## 4. Les contenus réels
Écrans repris du site : Ajouter une personne (index.html) ; Informations sur votre foyer (etat-foyer.html) ; Vous êtes déjà à la moitié de la simulation (etat-ressources.html) ; En activité salariée (etat-ressources-situation.html) ; Salaires dont primes (etat-ressources-montants.html) ; Toutes les ressources (etat-ressources-autres.html) ; Informations sur vos ressources (etat-ressources-synthese.html) ; Votre logement (etat-logement.html) ; Informations sur votre logement (etat-logement-recap.html) ; Résultats (etat-resultat.html). Les montants sont demandés en net fiscal avant prélèvement à la source, mois par mois sur quatre mois. Résultat relevé : « Simulation terminée ! », « D’après les informations que vous avez communiquées, vous n’êtes éligible à aucune des aides. », renvoi vers la CAF ou la MSA, lien vers « Je donne mon avis ».

## 5. Les états et le parcours
Un état par écran ; les boutons enchaînent les écrans et contrôlent les champs obligatoires ; le récapitulatif du foyer, la synthèse des ressources, le récapitulatif du logement et le résultat montrent la situation d'essai.

## 6. Les contraintes
Niveau RGAA AA, mobile d'abord, aucune image (illustrations du site retirées), aucun style hors DSFR, un seul h1.

## 7. Les critères d'acceptation
- Textes mot pour mot ; aucune classe hors DSFR, aucun style en ligne, aucun faux-texte.
- Aucun lien sans destination : chaque lien mène à un écran du prototype, à un site externe ou à la page de limite du prototype pour les écrans connectés.
