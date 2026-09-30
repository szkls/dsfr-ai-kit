# Case à cocher (checkbox)

**Statut :** brouillon (à valider par Louis) — 2026-09-30

## Quand l'utiliser
Pour une sélection multiple (de zéro à plusieurs options) dans une liste courte, ou pour un choix binaire unique du type « j'accepte les conditions ». Utiliser la case seule ou en liste selon le contexte, de préférence en liste verticale, plus lisible.

## Quand ne pas l'utiliser, et quoi prendre à la place
Si l'usager ne doit retenir qu'une seule option, prendre les boutons radio (radio). Au-delà de 5 options ou quand l'espace est restreint, prendre une liste déroulante (select). Pour activer ou désactiver un réglage avec effet immédiat, regarder l'interrupteur (toggle).

## Quelle variante dans quel cas
- Liste verticale : le cas courant.
- Liste horizontale : seulement avec 2 options ou des libellés très courts.
- Texte d'aide sous le titre du groupe, ou sous chaque case : dès qu'une précision aide au choix.
- Taille MD (par défaut) : zone de clic confortable ; taille SM uniquement si la place manque vraiment.
- État indéterminé : pour une case « tout sélectionner » quand seule une partie des lignes est cochée (tableau par exemple).

## Règles de contenu
Libellés clairs et concis, cohérents entre eux et avec le site, première lettre en majuscule, pas de ponctuation finale. Un texte d'aide pour clarifier ce qui est attendu ; s'il est essentiel, ne pas le cacher dans une infobulle. Couleur bleue uniquement pour les cases, typographie noire uniquement.

## Points d'accessibilité à ne pas rater
- Un label relié explicitement à chaque case (for = id, id unique) : cliquer sur le libellé coche la case.
- Regrouper les cases liées dans un fieldset avec une legend explicite, non graissée.
- Si le groupe porte un message d'erreur ou d'aide, relier legend et message par aria-labelledby et ajouter role="group".
- Obligatoire : mention visible en début de formulaire et attribut required.
- Éviter l'état désactivé, mal contrasté.

## Erreurs vues sur nos projets
<!-- vide au départ, à remplir par l'équipe -->

## Références
- Doc officielle : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher
- Nom technique dans reference/composants.md : `checkbox`
