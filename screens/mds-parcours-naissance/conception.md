# Conception : Parcours naissance

Écran produit avec la skill dsfr-designer et les outils du serveur dsfr-kit (get_fundamental, get_component, check_screen). Contenus relevés sur le site le 30/09/2026 : soixante-dix-huit pavés dépliés, chaque lien suivi pour relever sa destination, fenêtre « VOUS VIVEZ SEUL(E) ? » ouverte.

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
## Composants propres à la page
### Tag (tag)
- Doc lue : reference/doc/composants/tag.md — un tag non cliquable « Famille » sous le titre, en `p.fr-tag`.
### Mise en avant (callout)
- Doc lue : reference/doc/composants/callout.md — deux mises en avant sans titre reprenant les encadrés « Prime à la naissance » (lien de style bouton vers le simulateur, provisoire) et « VOUS VIVEZ SEUL(E) ? » (`button` qui ouvre la modale).
### Modale (modal)
- Doc lue : reference/doc/composants/modal.md — modale simple de taille MD en fin de `body`, titre h2, trois rubriques en h3 (style `fr-h6`) avec leur texte et leurs deux liens externes CAF et MSA.
### Tuile (tile)
- Doc lue : reference/doc/composants/tile.md — trois tuiles horizontales en fin de page pour les sites 1000 Premiers Jours, Mémo Santé Enfant et Mon Espace Santé : titre h3 lien externe, description ; placées après « Haut de page » comme le demande la doc du lien.
### Sommaire (summary)
- Doc lue : reference/doc/composants/summary.md — sommaire à deux niveaux (périodes puis délais), extrait « Sommaire » à sous-liste de la doc, titre en h2, ancres identiques aux titres h2 et h3, non fixé au défilement, largeur 8 colonnes.
### Accordéon (accordion)
- Doc lue : reference/doc/composants/accordion.md — un accordéon par démarche (les pavés dépliables du site), groupes dissociés (`data-fr-group="false"`) pour pouvoir en ouvrir plusieurs, fermés par défaut, titre en h5 sous le groupe h4, contenu libre en paragraphes, listes et liens.

## Note de conception
**Retenus** : même gabarit que le parcours décès, preuve qu'il se transpose. **Écartés** : illustration et logos des sites partenaires (images interdites) ; encadré « VOS ORGANISMES » et sa fenêtre « Modifier ces choix », qui personnalisent la page selon la caisse de l'usager : par défaut le site affiche tout, le prototype aussi. **Écarts assumés** : titre repris de la tuile du hub au lieu de « VOUS ATTENDEZ UN ENFANT » ; les trois sites partenaires sont regroupés sous un h2 « Aller plus loin », intitulé repris du parcours emploi du site car ils n'ont pas de titre de section ; le texte « Vous pouvez également bénéficier d'une majoration... » est tronqué sur le site et repris tel quel ; les démarches répétées d'un mois à l'autre (Mon Espace Santé, démarches en ligne) sont gardées comme sur le site. **Questions ouvertes** : compléter la phrase tronquée de la modale ; décider si la personnalisation par organisme doit revenir, sous forme de filtre DSFR.
