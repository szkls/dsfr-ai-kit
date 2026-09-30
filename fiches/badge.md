# Badge (badge)

**Statut :** brouillon (à valider par Louis) — 2026-09-30

## Quand l'utiliser
Pour signaler le statut ou l'état d'un élément précis : à côté d'un titre ou d'un lien, dans un menu latéral, dans une carte ou une tuile, dans une cellule de tableau. Le badge se place directement à côté de ce qu'il qualifie, au premier niveau de lecture. Il est purement informatif, jamais cliquable.

## Quand ne pas l'utiliser, et quoi prendre à la place
Pas pour catégoriser ou classer un contenu par mots-clés : c'est le tag (tag). Pas comme élément cliquable ou filtre : tag cliquable ou sélectionnable. Ne pas utiliser un même badge pour deux informations différentes, ni deux badges différents pour la même information.

## Quelle variante dans quel cas
- Badge standard : une information de statut propre au site ; sa couleur peut être choisie parmi les couleurs illustratives, jamais une couleur système, et sans icône.
- Badge système avec icône : succès, avertissement, erreur, information, nouveauté ; l'icône et la couleur sont imposées et ajoutées automatiquement.
- Badge système sans icône : même sens, sans l'icône.
- Tailles SM et MD (par défaut).

## Règles de contenu
Libellé court et explicite, pour garder un badge de taille raisonnable. Cohérence sur tout le site : un même badge pour une même information. Sur un badge système, l'information est portée par le texte, pas par l'icône ni la couleur.

## Points d'accessibilité à ne pas rater
- Badge seul : un paragraphe ; badge dans un élément déjà sémantique (paragraphe, élément de liste) : un span.
- Plusieurs badges à la suite : les structurer dans une liste.
- L'icône d'un badge système est décorative, le texte doit suffire.
- En cas de couleur personnalisée, garder un contraste texte/fond d'au moins 4,5:1.

## Erreurs vues sur nos projets
<!-- vide au départ, à remplir par l'équipe -->

## Références
- Doc officielle : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge
- Nom technique dans reference/composants.md : `badge`
