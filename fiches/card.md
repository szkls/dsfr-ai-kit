# Carte (card)

**Statut :** brouillon (à valider par Louis) — 2026-09-30

## Quand l'utiliser
Pour offrir un raccourci ou un point d'entrée vers une page de contenu, avec un aperçu de cette page (image, description, détails). Les cartes vont presque toujours en collection : listes de liens, grilles de contenus, blocs de mise en avant. Sur une même ligne, toutes les cartes ont la même hauteur et la même structure. Depuis la version 1.5, la doc ne fait plus de différence d'usage entre carte et tuile : le choix est visuel.

## Quand ne pas l'utiliser, et quoi prendre à la place
Pas isolée, ni pour porter l'action principale d'une page : c'est un bouton (button). Si aucun aperçu n'est utile et que seul le titre compte, la tuile (tile) est plus légère. Pas de lien ni d'action dans la zone de détail : ils vont dans la zone d'action prévue. Pas de titre souligné quand toute la carte est cliquable.

## Quelle variante dans quel cas
- Verticale : le cas courant ; sur mobile, toute carte devient verticale et prend toute la largeur.
- Horizontale : bureau uniquement ; image à 33 %, 40 % (défaut) ou 50 % de la largeur.
- De téléchargement : pour proposer un fichier ; horizontale même sur mobile, icône de téléchargement obligatoire, pas plus de 4 à la suite.
- Tailles SM, MD, LG : selon le nombre de colonnes occupées (verticale : 3-4, 4-6, 6-8 colonnes ; horizontale : 4-6, 6-8, 8-12). La taille change aussi les espacements, le titre, l'icône, les tags et badges.
- Esthétiques : fond gris, ombre portée, sans bordure, sans fond.
- Entièrement cliquable : uniquement si la carte ne contient aucun autre élément cliquable.

## Règles de contenu
Titres et descriptions synthétiques. Un contenu distinct par carte, sans réutiliser plusieurs fois la même image. Même structure de contenu pour toutes les cartes d'un ensemble. Carte de téléchargement : titre précédé de « Télécharger », nom du fichier, langue si différente de la page, format et poids obligatoires dans la zone de détail. Images dimensionnées pour bien s'adapter aux différents écrans.

## Points d'accessibilité à ne pas rater
- Le lien est porté uniquement par le titre, qui doit être explicite ; la zone cliquable peut ensuite être étendue à toute la carte.
- Le niveau de titre dépend de la page, pas forcément un h3.
- Dans le code, image, description, badges, tags, détails et boutons viennent après le titre.
- L'image est décorative ou informative selon le contexte : adapter son alternative.
- Quand la carte entière est cliquable, l'indication de focus entoure la carte, pas seulement le lien.

## Erreurs vues sur nos projets
<!-- vide au départ, à remplir par l'équipe -->

## Références
- Doc officielle : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/carte
- Nom technique dans reference/composants.md : `card`
