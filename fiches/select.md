# Liste déroulante (select)

**Statut :** brouillon (à valider par Louis) — 2026-09-30

## Quand l'utiliser
Pour faire choisir une seule option dans une liste, quand il y a entre 6 et 15 propositions et que la place pour les afficher toutes manque. La doc insiste pour que l'usage soit contextualisé par un libellé clair, surtout hors formulaire ou panneau de filtres, afin que l'usager comprenne ce qu'il choisit.

## Quand ne pas l'utiliser, et quoi prendre à la place
Avec peu d'options (5 ou moins), préférer les boutons radio (radio), plus faciles à comprendre. Si plusieurs choix sont possibles, prendre des cases à cocher (checkbox) plutôt que la sélection multiple d'une liste, peu maniable. Pour une saisie libre, un champ de saisie (input).

## Quelle variante dans quel cas
- Liste simple : le cas courant.
- Liste avec texte d'aide sous le libellé : recommandée dès que le choix demande une précision.
- États erreur et succès : avec message sous le composant.
- État désactivé : seulement pour bloquer le choix tant qu'une autre action n'est pas terminée, et avec parcimonie.

## Règles de contenu
Mêmes règles éditoriales que les boutons radio : libellés d'options clairs, concis, cohérents entre eux et avec le reste du site, première lettre en majuscule, pas de ponctuation finale. Un texte d'aide plutôt qu'une infobulle pour toute information essentielle. Ne pas personnaliser la couleur des textes.

## Points d'accessibilité à ne pas rater
- Un label relié explicitement à la liste (for = id, id unique).
- Le libellé est visible et accolé à la liste, jamais remplacé par la première option.
- Champ obligatoire : mention visible en début de formulaire et attribut required.
- Messages d'erreur ou d'information reliés au champ (aria-describedby) ou annoncés par une live region.
- État désactivé mal contrasté : l'éviter autant que possible.

## Erreurs vues sur nos projets
<!-- vide au départ, à remplir par l'équipe -->

## Références
- Doc officielle : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante
- Nom technique dans reference/composants.md : `select`
