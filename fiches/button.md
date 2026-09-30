# Bouton (button)

**Statut :** brouillon (à valider par Louis) — 2026-09-30

## Quand l'utiliser
Pour déclencher une action dans la page : envoyer un formulaire, ouvrir une modale, réinitialiser, annuler. Le bouton primaire porte l'action principale, et la doc recommande de s'en tenir à un seul par page. Les autres actions passent en secondaire ou tertiaire pour garder l'attention sur l'action principale.

## Quand ne pas l'utiliser, et quoi prendre à la place
Pour aller vers une autre page ou un autre endroit de la page, c'est un lien (link), pas un bouton : ne pas appliquer le style bouton à un lien ni l'inverse. Ne pas mettre deux boutons primaires côte à côte, et ne pas hiérarchiser deux boutons tertiaires par la seule présence d'un contour. L'état désactivé est fortement déconseillé : il n'est pas accessible au clavier et induit en erreur.

## Quelle variante dans quel cas
- Primaire : l'action principale, une seule par page.
- Secondaire : une action moins importante (réinitialiser un formulaire).
- Tertiaire, avec ou sans contour : actions contextuelles ou alternatives (fermer, annuler, partager, copier un lien).
- Avec icône à gauche ou à droite : pour préciser l'action ; icône seule uniquement pour des actions récurrentes et évidentes (loupe, engrenage).
- Tailles MD ou LG en priorité ; SM réservé à l'intérieur d'autres composants ; même taille sur toute une page.
- Groupe de boutons : 3 boutons maximum, un seul primaire, placé en premier si le groupe est à gauche ou centré, en dernier s'il est à droite.

## Règles de contenu
Un verbe d'action à l'infinitif en tête, texte court et explicite sur ce qui va se passer, sans « je » ni verbe conjugué. Ne pas nommer le bouton ni sa position (« cliquez sur le bouton ci-dessous »). Majuscule en début de libellé, jamais tout en capitales. Éviter un libellé si long que le bouton passe sur deux lignes. Ne pas répéter dans le bouton ce que dit déjà l'instruction voisine. Couleur bleue uniquement.

## Points d'accessibilité à ne pas rater
- Un intitulé textuel précis (pas « OK ») ; si aria-label est utilisé, il reprend le texte visible.
- Bouton avec icône seule : ajouter un title reprenant l'intitulé, et en limiter l'usage.
- Ne jamais désactiver le bouton d'envoi d'un formulaire, ni justifier une désactivation par une infobulle.
- Bouton pour agir, lien pour naviguer : ne pas confondre les deux éléments.
- Au survol, le texte des boutons secondaires et tertiaires est insuffisamment contrasté en thème sombre : à garder en tête.

## Erreurs vues sur nos projets
<!-- vide au départ, à remplir par l'équipe -->

## Références
- Doc officielle : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton
- Nom technique dans reference/composants.md : `button`
