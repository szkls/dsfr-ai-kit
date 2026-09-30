# En-tête (header)

**Statut :** brouillon (à valider par Louis) — 2026-09-30

## Quand l'utiliser
Sur tous les sites de la sphère gouvernementale, en haut de chaque page. L'en-tête identifie le site (bloc marque, nom du site, baseline) et donne accès à la recherche et aux fonctionnalités clés. Il contient toujours un lien vers la page d'accueil. La navigation principale est un composant distinct : l'en-tête peut vivre seul, par exemple pour un site outil ou une page unique.

## Quand ne pas l'utiliser, et quoi prendre à la place
Il n'y a pas d'alternative : l'en-tête est obligatoire. En revanche, ne pas y loger le menu de navigation lui-même, qui relève de la navigation principale (navigation). Ne pas proposer un logo opérateur seul sans nom de site. Ne rien déplacer, ne pas changer la typographie du nom et de la baseline, ne pas changer le type des boutons d'accès rapides.

## Quelle variante dans quel cas
- En-tête simple (bloc marque, nom du site, baseline) : site sans recherche ni accès rapides.
- Avec accès rapides : pour mettre en avant des pages ou fonctions clés, par exemple la connexion à un espace personnel.
- Avec recherche : pour rendre le moteur de recherche immédiatement accessible.
- Complet (accès rapides et recherche) : quand les deux sont utiles.
- Avec badge « Bêta » : quand le service n'est pas en version stable.
- En berne : uniquement en période de deuil national.

## Règles de contenu
Libellés d'accès rapides clairs et concis. Le nom du site, et si possible une baseline, accompagnent le bloc marque pour donner du contexte. Le bloc marque respecte la charte de marque de l'État. Les boutons tertiaires des accès rapides sont sans contour, sauf éventuellement celui le plus à droite.

## Points d'accessibilité à ne pas rater
- L'élément header porte role="banner".
- Le lien vers l'accueil est placé sur le nom du site (ou le bloc marque), avec un title du type « Accueil - Nom du site ».
- Si le bloc marque n'est pas « République Française » mais une autre entité, elle doit apparaître aussi.
- Les règles des composants intégrés s'appliquent : bloc marque, liens, boutons, barre de recherche, navigation, modale, sélecteur de langue.

## Erreurs vues sur nos projets
<!-- vide au départ, à remplir par l'équipe -->

## Références
- Doc officielle : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete
- Nom technique dans reference/composants.md : `header`
