# Conception : Foire aux questions

Écran produit avec la skill dsfr-designer et les outils du serveur dsfr-kit (get_fundamental, get_component, check_screen). Contenus relevés sur le site le 30/09/2026, rubrique par rubrique, chaque question dépliée (7 rubriques, 25 questions directes et 60 questions groupées par thème).

## Fondamentaux
- Doc lue : reference/doc/fondamentaux/couleurs.md — règles appliquées : aucune couleur en dur, fonds et textes par les tokens des composants ; texte de mention pour la date (`fr-text-mention--grey`).
- Doc lue : reference/doc/fondamentaux/typographie.md — règles appliquées : un seul h1, un h2 par section, h3 pour les sous-titres et les titres de tuiles ou d'accordéons ; chapô en `fr-text--lead` ; corps de texte limité à 8 colonnes.
- Doc lue : reference/doc/fondamentaux/grille-et-points-de-rupture.md — règles appliquées : `fr-container` › `fr-grid-row fr-grid-row--gutters` › `fr-col-*`, pleine largeur sur mobile, 8 colonnes de texte à partir de LG, grilles de tuiles ou de blocs à 2 colonnes MD et 3 colonnes LG.
- Doc lue : reference/doc/fondamentaux/espacement.md — règles appliquées : classes d'espacement en nomenclature « v » uniquement (`fr-mt-4v`, `fr-mt-6v`, `fr-mb-8v`, `fr-mt-2v`).
- Doc lue : reference/doc/fondamentaux/icone.md — règles appliquées : icônes fonctionnelles du DSFR avec libellé uniquement (`fr-icon-arrow-right-line`, `fr-icon-arrow-left-line` sur les liens).
- Doc lue : reference/doc/fondamentaux/pictogramme.md — règles appliquées : aucun pictogramme sur cette page (tuiles sans en-tête).

## Point de départ
Aucun modèle de page correspondant dans le DSFR (voir mds-accueil) : squelette `screens/_gabarit.html`, en-tête, navigation, pied de page et liens d'évitement repris à l'identique de `screens/mds-accueil/index.html` pour que le prototype soit navigable, fil d'Ariane sous l'en-tête, corps de page sur 8 colonnes. Le pied de page relie désormais ses liens du bas aux écrans du prototype (FAQ, Contact, Qui sommes-nous, Mentions légales, Accessibilité, Plan du site).

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
- Doc lue : reference/doc/composants/summary.md — placé sous le titre (ou le chapô), titre « Sommaire » en h2, ancres reprenant exactement les titres h2 des sections, `nav role="navigation" aria-labelledby`, fond gris conservé, non fixé au défilement, largeur 8 colonnes.
### Accordéon (accordion)
- Doc lue : reference/doc/composants/accordion.md — groupes d'accordéons dissociés (`data-fr-group="false"`), fermés par défaut, un accordéon par question, titre de l'accordéon au niveau de titre de son contexte (h3 sous une rubrique, h4 sous un thème), bouton avec `aria-expanded` et `aria-controls`, réponses en paragraphes.

## Note de conception
**Retenus** : sommaire des sept rubriques, un h2 par rubrique, accordéons h3 pour les questions directes, sous-thèmes en h3 (« Vous avez des questions sur… », thèmes de « Vos questions ? ») avec accordéons h4 ; lien final vers Contact. **Écartés** : menu latéral du site (les rubriques tiennent dans un sommaire), onglets (trop de contenu par rubrique). **Écarts assumés** : les listes à puces du site à l'intérieur des réponses sont rendues en paragraphes successifs (le site les livre sans structure de liste) ; les liens du site vers des pages connectées (« Vos ressources ») sont rendus en texte simple ; libellés de liens repris tels quels, dont « cliquez ici » (deux occurrences). **Questions ouvertes** : reformuler les libellés « cliquez ici » ; le titre de la première question est en capitales sur le site.
