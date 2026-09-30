# Pagination (pagination)

**Statut :** brouillon (à valider par Louis) — 2026-09-30

## Quand l'utiliser
Quand une liste est trop longue pour une seule page, à partir de 20 éléments environ. Elle se place toujours en bas de la liste, met en évidence la page courante, affiche la dernière page pour que l'usager connaisse le total, et le renvoie en haut de page à chaque changement. Le même fonctionnement se conserve sur tout le site et sur toutes les tailles d'écran.

## Quand ne pas l'utiliser, et quoi prendre à la place
Pas pour une liste courte (20 éléments ou moins) qui tient sur une page. La doc préfère la pagination au chargement automatique ou à un bouton « Voir plus », aussi pour le référencement. Pas pour un parcours par étapes : indicateur d'étapes (stepper) et boutons.

## Quelle variante dans quel cas
- Avec « Précédent » et « Suivant », désactivés sur la première et la dernière page.
- Avec accès rapide à la première et à la dernière page (boutons dédiés, ou pages « 1 » et dernière).
- Avec troncature « … » : quand le total dépasse les 5 à 7 pages affichées ; double troncature si la page courante est à 5 pages ou plus des deux extrémités.
- Mobile : moins de numéros visibles, icônes « < » et « > » pour précédent et suivant, idéalement sur une seule ligne.

## Règles de contenu
Aucune règle éditoriale spécifique. Ne pas personnaliser le fond bleu qui marque la page active.

## Points d'accessibilité à ne pas rater
- Structurée dans un nav avec role="navigation" et aria-label="pagination".
- Les liens sont dans une liste (ul, li).
- La page courante porte aria-current="page" et n'est pas cliquable.
- Chaque numéro de page a un title qui explicite sa fonction.
- Les liens désactivés n'ont pas de href et portent aria-disabled="true" avec role="link".

## Erreurs vues sur nos projets
<!-- vide au départ, à remplir par l'équipe -->

## Références
- Doc officielle : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pagination
- Nom technique dans reference/composants.md : `pagination`
