# Tag (tag)

**Statut :** brouillon (à valider par Louis) — 2026-09-30

## Quand l'utiliser
Pour catégoriser, classer ou organiser des contenus par mots-clés (thème, sujet, type de contenu), associé à une carte, un en-tête de page, etc. Ou comme filtre dans une page de liste ou de recherche. Limiter le nombre de tags dans un groupe pour que l'usager puisse balayer la liste d'un coup d'œil.

## Quand ne pas l'utiliser, et quoi prendre à la place
Pas pour donner le statut d'un contenu : c'est le badge (badge). Pas pour des compléments comme l'auteur, la date ou le lieu : utiliser la zone « détail » des cartes (card) ou la typographie XS « mention » dans une page. Pas pour mettre en forme du texte. Au-delà de 6 options de filtre, préférer une liste déroulante (select) accompagnée de tags supprimables plutôt qu'un groupe de tags sélectionnables.

## Quelle variante dans quel cas
- Non cliquable : afficher une information de catégorie sur un contenu.
- Cliquable : donner accès à une page de contenus associés (liste, résultats de recherche).
- Sélectionnable : activer ou désactiver un filtre, 6 au maximum par filtre.
- Supprimable : rappeler un filtre déjà choisi ailleurs (liste déroulante, panneau latéral) et permettre de le retirer ; pas d'autre icône que la croix.
- Groupe de tags : plusieurs tags avec les espacements prévus par le DSFR.
- Tailles SM et MD (par défaut) ; en groupe SM, la zone de clic est agrandie pour le mobile.

## Règles de contenu
Libellés courts et clairs, construits sur un mot-clé ou une expression. Une icône est possible au besoin, sauf sur le tag supprimable. Seule la couleur des tags cliquables peut être personnalisée, parmi les couleurs illustratives, avec parcimonie et dans un but précis, sans dépasser une ou deux couleurs par page.

## Points d'accessibilité à ne pas rater
- Tag non cliquable : paragraphe seul, ou span dans un élément sémantique ; plusieurs tags à la suite vont dans une liste.
- Tag cliquable : un vrai lien (a href), en liste si plusieurs.
- Tag sélectionnable ou supprimable : un vrai bouton ; le sélectionnable porte aria-pressed true ou false.
- Tag supprimable : un aria-label du type « Retirer le filtre [libellé] », qui reprend le texte visible.
- Après suppression d'un tag, replacer le focus à un endroit pertinent.

## Erreurs vues sur nos projets
<!-- vide au départ, à remplir par l'équipe -->

## Références
- Doc officielle : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tag
- Nom technique dans reference/composants.md : `tag`
