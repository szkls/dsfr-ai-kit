# Tableaux (table)

**Statut :** brouillon (à valider par Louis) — 2026-09-30

## Quand l'utiliser
Pour présenter des données structurées en lignes et colonnes, quand l'usager doit analyser ou comparer des informations, ou lire les valeurs exactes derrière un graphique. La doc réserve le tableau aux vrais jeux de données : à partir de 4 lignes ou 3 colonnes environ. On peut y insérer des composants autorisés (texte, chiffres, icône, tag, badge, bouton, lien, champ, infobulle, interrupteur, liste déroulante).

## Quand ne pas l'utiliser, et quoi prendre à la place
Jamais pour faire de la mise en page. Pour des données très simples ou un petit volume (moins de 4 lignes ou 3 colonnes), envisager un autre format : liste, cartes (card) ou tuiles (tile). Sur mobile, la doc conseille une vue plus adaptée comme la liste plutôt que le tableau. Ce n'est pas un tableur : aucun calcul sur les données.

## Quelle variante dans quel cas
- Bordures horizontales seules (par défaut) ; bordures verticales en plus si le tableau est complexe.
- Première colonne fixée : quand le tableau est plus large que l'écran et doit défiler.
- Retour à la ligne automatique ou largeur de colonne minimale : selon la longueur des contenus.
- Cellules fusionnées : tableau complexe, avec les précautions d'accessibilité ci-dessous.
- Densité SM, MD ou LG : selon la quantité de données, sans changer la taille des composants imbriqués.
- Tri par colonne, pagination dans la barre d'outils, choix du nombre de lignes par page, cases à cocher pour sélectionner des lignes : à ajouter quand le volume le justifie.

## Règles de contenu
Titres de colonnes et de lignes clairs et concis, majuscule initiale, pas de ponctuation finale. Contenu des cellules synthétique. Écrire « N/A » dans toute cellule vide. Indiquer l'unité de mesure dans le titre de colonne, pas dans chaque cellule. Chiffres alignés à droite, le reste à gauche. Placement fixe : cases à cocher à gauche, actions de colonne à droite de l'en-tête, actions de ligne dans la dernière cellule à droite, avec des boutons secondaires ou tertiaires.

## Points d'accessibilité à ne pas rater
- Un titre pertinent dans la balise caption.
- Les en-têtes de lignes et de colonnes sont des th, avec scope="row" ou scope="col" (inutile s'il n'y a qu'une seule ligne ou colonne d'en-têtes).
- Tableau à cellules fusionnées : un résumé du tableau, et chaque cellule reliée à ses en-têtes par l'attribut headers.
- Sur petit écran, les informations clés doivent rester visibles au premier coup d'œil.

## Erreurs vues sur nos projets
<!-- vide au départ, à remplir par l'équipe -->

## Références
- Doc officielle : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tableau
- Nom technique dans reference/composants.md : `table`
