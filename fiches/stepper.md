# Indicateur d'étapes (stepper)

**Statut :** brouillon (à valider par Louis) — 2026-09-30

## Quand l'utiliser
Dans un parcours linéaire en plusieurs étapes, formulaire ou démarche en ligne, pour dire à l'usager où il en est. Il se place systématiquement en haut de page. Le parcours commence par une page d'introduction qui présente les étapes (sans indicateur) et se termine par une étape de confirmation, sur laquelle le titre de l'étape suivante n'apparaît pas. Huit étapes au maximum, car plus le parcours est long, plus le risque d'abandon est élevé.

## Quand ne pas l'utiliser, et quoi prendre à la place
Il ne sert pas à naviguer : aucun élément n'est cliquable. Pour passer d'une étape à l'autre, ce sont des boutons (button). Pas pour un parcours non linéaire ni pour organiser du contenu de lecture, où l'on prendra des onglets (tab) ou des accordéons (accordion).

## Quelle variante dans quel cas
- Aucune variante : le composant est unique, non personnalisable, avec sa barre de progression telle quelle.

## Règles de contenu
Titres d'étapes clairs et uniques, qui permettent de comprendre le cheminement. Ne pas répéter un titre, ne pas mettre le numéro dans le titre (il est déjà affiché à part). Regrouper avec soin les champs en sections cohérentes pour limiter le nombre d'étapes.

## Points d'accessibilité à ne pas rater
- Le titre de l'étape en cours est dans un titre HTML (h2, h3… selon la page).
- Le nom de l'étape suivante est dans un simple paragraphe.
- La barre de progression est purement illustrative : aucune alternative ni attribut ARIA nécessaire.

## Erreurs vues sur nos projets
<!-- vide au départ, à remplir par l'équipe -->

## Références
- Doc officielle : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/indicateur-d-etapes
- Nom technique dans reference/composants.md : `stepper`
