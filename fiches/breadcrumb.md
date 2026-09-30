# Fil d'Ariane (breadcrumb)

**Statut :** brouillon (à valider par Louis) — 2026-09-30

## Quand l'utiliser
Fortement recommandé sur tous les sites, surtout dès que l'arborescence dépasse 2 niveaux. Il montre à l'usager où il se trouve et lui permet de remonter d'un niveau sans passer par le bouton « Retour » ou la navigation principale. Il s'affiche sur toutes les pages sauf l'accueil, toujours au même endroit, de préférence entre l'en-tête et le contenu principal, sur fond neutre.

## Quand ne pas l'utiliser, et quoi prendre à la place
Pas sur la page d'accueil. Pas pour refléter l'historique de navigation de l'usager : il reflète la position de la page dans la hiérarchie du site, avec un seul chemin même si plusieurs sont possibles. Pas superposé à une image ou un fond de couleur. Pour naviguer entre les sections d'une même page, c'est le sommaire (summary) ou le menu latéral (sidemenu).

## Quelle variante dans quel cas
- Version bureau : le fil complet sur une ligne.
- Version mobile : un bouton « Voir le fil d'Ariane » qui déplie le fil au clic, sur plusieurs lignes si besoin. À conserver, ne pas supprimer le fil sur mobile.
- Avec menu latéral : adapter le positionnement.

## Règles de contenu
Chaque élément est cliquable sauf la page consultée. Le fil tient sur une ligne : si le titre de la page courante est long, n'afficher que ses 4 premiers mots suivis de « … ». Ne pas changer la structure ni la couleur du texte.

## Points d'accessibilité à ne pas rater
- Structuré dans un nav avec role="navigation" et aria-label="vous êtes ici :", placé hors du contenu principal (main).
- Les éléments sont dans une liste numérotée (ol, li).
- La page courante n'est pas un lien, n'est pas soulignée et porte aria-current="page".
- Sur mobile, après activation du bouton, le focus se place sur le premier élément du fil.
- Même emplacement sur toutes les pages : c'est une obligation.

## Erreurs vues sur nos projets
<!-- vide au départ, à remplir par l'équipe -->

## Références
- Doc officielle : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/fil-d-ariane
- Nom technique dans reference/composants.md : `breadcrumb`
