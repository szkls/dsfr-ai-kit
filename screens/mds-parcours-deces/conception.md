# Conception : Parcours décès

Écran produit avec la skill dsfr-designer et les outils du serveur dsfr-kit (get_fundamental, get_component, check_screen). Contenus relevés sur le site le 30/09/2026 : dix-neuf pavés dépliés, chaque lien suivi pour relever sa destination, fenêtre « Vous venez de perdre un enfant ? » ouverte et livrets pesés.

## Fondamentaux
- Doc lue : reference/doc/fondamentaux/couleurs.md — règles appliquées : aucune couleur en dur, fonds et textes par les tokens des composants ; texte de mention pour la date (`fr-text-mention--grey`).
- Doc lue : reference/doc/fondamentaux/typographie.md — règles appliquées : un seul h1, un h2 par section, h3 pour les sous-titres et les titres de tuiles ou d'accordéons ; chapô en `fr-text--lead` ; corps de texte limité à 8 colonnes.
- Doc lue : reference/doc/fondamentaux/grille-et-points-de-rupture.md — règles appliquées : `fr-container` › `fr-grid-row fr-grid-row--gutters` › `fr-col-*`, pleine largeur sur mobile, 8 colonnes de texte à partir de LG, grilles de tuiles ou de blocs à 2 colonnes MD et 3 colonnes LG.
- Doc lue : reference/doc/fondamentaux/espacement.md — règles appliquées : classes d'espacement en nomenclature « v » uniquement (`fr-mt-4v`, `fr-mt-6v`, `fr-mb-8v`, `fr-mt-2v`).
- Doc lue : reference/doc/fondamentaux/icone.md — règles appliquées : icônes fonctionnelles du DSFR avec libellé uniquement (`fr-icon-arrow-left-line` sur le lien de retour, `fr-icon-arrow-up-fill` sur « Haut de page », icônes intégrées des liens externes, de téléchargement et du bouton Fermer).
- Doc lue : reference/doc/fondamentaux/pictogramme.md — règles appliquées : aucun pictogramme sur cette page (tuiles sans en-tête).

## Point de départ
Aucun modèle de page correspondant dans le DSFR (voir mds-accueil) : squelette `screens/_gabarit.html`, en-tête, navigation, pied de page et liens d'évitement repris à l'identique de `screens/mds-accueil/index.html` pour que le prototype soit navigable, fil d'Ariane sous l'en-tête, corps de page sur 8 colonnes. La navigation marque « Vos événements de vie » comme rubrique courante (`aria-current="page"` sur le hub, `aria-current="true"` dans les parcours) ; l'en-tête porte l'identifiant `top`, cible du lien « Haut de page ».

## Composants communs à toutes les pages institutionnelles
### Liens d'évitement (skiplink)
- Doc lue : reference/doc/composants/skiplink.md — variante unique, trois liens (Contenu, Menu, Pied de page) vers des ancres présentes ; `nav role="navigation" aria-label="Accès rapide"`.
### En-tête (header)
- Doc lue : reference/doc/composants/header.md — « Header avec nom de service, lien d'accès », FranceConnect dans les outils ; `role="banner"`, lien d'accueil sur le nom du service avec `title` au format de la doc ; aucune entrée de navigation n'est marquée courante car la page n'est pas une rubrique de la navigation.
### Bloc marque (logo)
- Doc lue : reference/doc/composants/logo.md — taille par défaut, intitulé « République Française » seul.
### Navigation principale (navigation)
- Doc lue : reference/doc/composants/navigation.md — liens directs, trois entrées ; « Vos événements de vie » mène au hub et porte `aria-current`, comme le prévoit la doc pour la rubrique courante.
### Boutons FranceConnect et ProConnect (connect)
- Doc lue : reference/doc/composants/connect.md — bouton FranceConnect avec son lien d'information, intitulés non modifiés.
### Fil d'Ariane (breadcrumb)
- Doc lue : reference/doc/composants/breadcrumb.md — variante unique, sous l'en-tête, hors du `main`, sur fond blanc ; page courante non cliquable avec `aria-current="page"` ; libellé tronqué à quatre mots quand le titre est long ; même emplacement sur toutes les pages.
### Lien (link)
- Doc lue : reference/doc/composants/link.md — « Lien icon à gauche » pour le retour, « Lien Haut de page » (`fr-icon-arrow-up-fill`, cible `#top`) en fin de contenu et avant le maillage comme le demande la doc, « Lien externe » (nouvelle fenêtre, `title` « … - nouvelle fenêtre ») pour tous les sites partenaires, « Lien de téléchargement » (`fr-link--download`, libellé commençant par « Télécharger », détail format et poids) pour les livrets PDF.
### Bouton (button)
- Doc lue : reference/doc/composants/button.md — boutons secondaires dans les mises en avant (un bouton pour ouvrir une modale, un lien de style bouton pour naviguer), bouton Fermer des modales ; aucun bouton primaire pour ne pas concurrencer le contenu.
### Pied de page (footer)
- Doc lue : reference/doc/composants/footer.md — pied de page minimal identique à mds-accueil, liens du bas reliés aux écrans du prototype.
### Panneau de gestion des cookies (consent, modal)
- Doc lue : reference/doc/composants/consent.md — modale de gestion des cookies présente sur toutes les pages, ouverte par le lien « Gérer les cookies » du pied de page et par les boutons « Gérer les cookies » des vidéos ; premier bloc « Tout accepter / Tout refuser » et boutons « Accepter / Refuser » par service, libellés imposés par la doc (le site écrit « Autoriser ») ; services du site : Assurer le fonctionnement du site (obligatoire, refus désactivé), TOLD, Dailymotion, Piano Analytics, avec leurs liens de politique de confidentialité ; bouton du site « Enregistrer mes préférences ».
- Doc lue : reference/doc/composants/modal.md — `dialog.fr-modal` en fin de `body`, titre h2 relié par `aria-labelledby`, bouton Fermer ; le lien du pied de page reste un lien (extrait officiel du pied de page) et ouvre la modale par l'API `dsfr(…).modal.disclose()`, ouverture programmatique prévue par la doc, le DSFR rendant le focus à l'élément d'origine.

## Composants propres à la page
### Tag (tag)
- Doc lue : reference/doc/composants/tag.md — un tag non cliquable « Famille » sous le titre, en `p.fr-tag`, comme sur les six parcours DSFR du site.
### Mise en avant (callout)
- Doc lue : reference/doc/composants/callout.md — deux mises en avant sans titre (la description est obligatoire, le titre facultatif) reprenant les encadrés du site : texte de l'encadré et action en bouton secondaire ; « S’informer sur l'accompagnement » est un `button` qui ouvre la modale.
### Modale (modal)
- Doc lue : reference/doc/composants/modal.md — modale simple de taille MD, placée en fin de `body` comme le conseille la doc, ouverte par un `button` relié par `aria-controls`, titre h2 relié par `aria-labelledby`, bouton Fermer ; contenu : deux paragraphes et la liste des cinq livrets en liens de téléchargement.
### Sommaire (summary)
- Doc lue : reference/doc/composants/summary.md — sommaire à deux niveaux (périodes puis délais), extrait « Sommaire » à sous-liste de la doc, titre en h2, ancres identiques aux titres h2 et h3, non fixé au défilement, largeur 8 colonnes.
### Accordéon (accordion)
- Doc lue : reference/doc/composants/accordion.md — un accordéon par démarche (les pavés dépliables du site), groupes dissociés (`data-fr-group="false"`) pour pouvoir en ouvrir plusieurs, fermés par défaut, titre en h5 sous le groupe h4, contenu libre en paragraphes, listes et liens.

## Note de conception
**Retenus** : gabarit des parcours DSFR du site (retour, titre de la tuile du hub, tag, chapô), mises en avant pour les encadrés, sommaire à deux niveaux, frise en titres h2/h3/h4 et démarches en accordéons, modale pour la fenêtre du site. **Écartés** : illustration du haut de page (interdite), frise graphique et sommaire latéral fixe (pas de composant DSFR, sommaire en haut de contenu à la place). **Écarts assumés** : le titre suit la tuile du hub (« Vous faites face au décès d’un proche ») au lieu de l'ancien « VOUS DEVEZ FAIRE FACE AU DECES D'UN PROCHE » ; les libellés des livrets sont préfixés par « Télécharger le livret » comme l'exige le lien de téléchargement ; « Découvrir les aides que vous pouvez demander » ouvre sur le site un outil de recherche d'aides intégré à la page, non repris ici (lien provisoire) ; les listes à un seul élément du site sont regroupées quand elles se suivent. **Questions ouvertes** : refaire l'outil « aides en cas de décès » (formulaire de situation) ; titres de démarches en minuscule initiale, repris du site.
