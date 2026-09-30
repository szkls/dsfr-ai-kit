# Onglets (tab)

**Statut :** brouillon (à valider par Louis) — 2026-09-30

## Quand l'utiliser
Pour regrouper des contenus liés dans un espace limité, ou découper un contenu dense en sections consultables une par une, quand il y a moins de 5 sections. De préférence dans des pages courtes, pour que les onglets ne se perdent pas dans la masse. L'onglet le plus important se place en premier.

## Quand ne pas l'utiliser, et quoi prendre à la place
Au-delà de 5 sections, prendre des accordéons (accordion). Jamais pour naviguer entre des pages : prendre un menu latéral (sidemenu) ou un sommaire (summary). Pas si l'usager a besoin de lire toutes les sections d'un coup : dans ce cas, afficher le contenu en continu.

## Quelle variante dans quel cas
- Onglets standard, avec ou sans icône.
- Sur mobile et quand les onglets dépassent la largeur, un défilement horizontal apparaît : préférer des titres courts pour l'éviter.
- Largeur recommandée : pas plus de 8 colonnes de la grille.

## Règles de contenu
Titres d'onglets clairs, explicites et concis. Chaque section doit être clairement identifiée, sinon les onglets perdent leur intérêt. Ne pas changer la couleur de fond ni agrandir la typographie des titres.

## Points d'accessibilité à ne pas rater
- Le composant suit le motif ARIA « Tabs » : conteneur role="tablist", chaque onglet role="tab" relié à son panneau par aria-controls, chaque panneau role="tabpanel" relié à son onglet par aria-labelledby.
- Le système d'onglets a un nom accessible (aria-label ou aria-labelledby).
- aria-selected vaut true sur l'onglet actif, false sur les autres, qui ont tabindex="-1".
- Les panneaux ont tabindex="0" pour être atteignables.
- Au clavier, les flèches gauche et droite passent d'un onglet à l'autre.

## Erreurs vues sur nos projets
<!-- vide au départ, à remplir par l'équipe -->

## Références
- Doc officielle : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/onglet
- Nom technique dans reference/composants.md : `tab`
