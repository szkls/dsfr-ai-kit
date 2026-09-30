# Conception : Le Montant Net Social

Écran produit avec la skill dsfr-designer et les outils du serveur dsfr-kit. Contenus issus du brief, relevés sur le site le 30/09/2026, réponses des questions dépliables comprises.

## Fondamentaux
- Doc lue : reference/doc/fondamentaux/couleurs.md — règles appliquées : aucune couleur en dur, fonds et textes par les tokens des composants ; texte de mention pour la date (`fr-text-mention--grey`).
- Doc lue : reference/doc/fondamentaux/typographie.md — règles appliquées : un seul h1, un h2 par section, h3 pour les sous-titres et les titres de tuiles ou d'accordéons ; chapô en `fr-text--lead` ; corps de texte limité à 8 colonnes.
- Doc lue : reference/doc/fondamentaux/grille-et-points-de-rupture.md — règles appliquées : `fr-container` › `fr-grid-row fr-grid-row--gutters` › `fr-col-*`, pleine largeur sur mobile, 8 colonnes de texte à partir de LG, grilles de tuiles ou de blocs à 2 colonnes MD et 3 colonnes LG.
- Doc lue : reference/doc/fondamentaux/espacement.md — règles appliquées : classes d'espacement en nomenclature « v » uniquement (`fr-mt-4v`, `fr-mt-6v`, `fr-mb-8v`, `fr-mt-2v`).
- Doc lue : reference/doc/fondamentaux/icone.md — règles appliquées : icônes fonctionnelles du DSFR avec libellé uniquement (`fr-icon-arrow-right-line`, `fr-icon-arrow-left-line` sur les liens).
- Doc lue : reference/doc/fondamentaux/pictogramme.md — règles appliquées : aucun pictogramme sur cette page (tuiles sans en-tête).

## Point de départ
Aucun modèle de page correspondant dans le DSFR (voir mds-accueil) : squelette `screens/_gabarit.html`, en-tête, navigation, pied de page et liens d'évitement repris à l'identique de `screens/mds-accueil/index.html` pour que le prototype soit navigable, fil d'Ariane sous l'en-tête, corps de page sur 8 colonnes.

## Composants communs à toutes les pages institutionnelles
### Liens d'évitement (skiplink)
- Doc lue : reference/doc/composants/skiplink.md — variante unique, trois liens (Contenu, Menu, Pied de page) vers des ancres présentes ; `nav role="navigation" aria-label="Accès rapide"`.
### En-tête (header)
- Doc lue : reference/doc/composants/header.md — « Header avec nom de service, lien d'accès », FranceConnect dans les outils ; `role="banner"`, lien d'accueil sur le nom du service avec `title` au format de la doc ; aucune entrée de navigation n'est marquée courante car la page n'est pas une rubrique de la navigation.
### Bloc marque (logo)
- Doc lue : reference/doc/composants/logo.md — taille par défaut, intitulé « République Française » seul.
### Navigation principale (navigation)
- Doc lue : reference/doc/composants/navigation.md — liens directs, trois entrées ; Accueil mène à l'écran mds-accueil du prototype.
### Boutons FranceConnect et ProConnect (connect)
- Doc lue : reference/doc/composants/connect.md — bouton FranceConnect avec son lien d'information, intitulés non modifiés.
### Fil d'Ariane (breadcrumb)
- Doc lue : reference/doc/composants/breadcrumb.md — variante unique, sous l'en-tête, hors du `main`, sur fond blanc ; page courante non cliquable avec `aria-current="page"` ; libellé tronqué à quatre mots quand le titre est long ; même emplacement sur toutes les pages.
### Lien (link)
- Doc lue : reference/doc/composants/link.md — « Lien icon à droite » pour les liens d'action, « Lien icon à gauche » pour les liens de retour, « Lien seul » pour les transcriptions, « Lien externe » (nouvelle fenêtre avec `title`) pour Dailymotion ; libellés du site.
### Bouton (button)
- Doc lue : reference/doc/composants/button.md — seuls boutons : Menu et Fermer de l'en-tête, et « Gérer les cookies » en secondaire quand la page a des vidéos ; aucun bouton primaire, aucun bouton désactivé.
### Pied de page (footer)
- Doc lue : reference/doc/composants/footer.md — pied de page minimal identique à mds-accueil ; « Qui sommes-nous ? » mène à l'écran correspondant du prototype.
## Composants propres à la page
### Sommaire (summary)
- Doc lue : reference/doc/composants/summary.md — placé entre le chapô et le contenu, titre « Sommaire » en `<p>` (autorisé depuis la 1.15), ancres reprenant exactement les quatre titres h2, `nav role="navigation" aria-labelledby`, fond gris conservé, non fixé au défilement, largeur 8 colonnes.
### Accordéon (accordion)
- Doc lue : reference/doc/composants/accordion.md — groupe d'accordéons dissociés (`data-fr-group="false"`, variante recommandée par la doc pour l'accessibilité), fermés par défaut, titres en h3 cohérents avec la page, bouton dans le titre avec `aria-expanded` et `aria-controls`, contenu en paragraphes ; réservé aux deux sections de questions, dont les réponses sont longues ; les dates clés restent en titres et paragraphes car l'usager doit pouvoir tout lire.

## Note de conception
**Retenus** : sommaire, dates clés en h3 + texte, deux groupes d'accordéons pour les douze questions, lien de retour. **Écartés** : illustration (interdite), mise en avant, frise chronologique (pas de composant DSFR). **Écarts assumés** : titres en capitales repris du site ; la réponse « Quels éléments ne sont pas pris en compte » est rendue en une phrase ponctuée là où le site enchaîne des lignes sans ponctuation. **Questions ouvertes** : passer les titres en casse de phrase ; « mesdroitssociaux.fr » sans « .gouv » dans une réponse est repris tel quel.
