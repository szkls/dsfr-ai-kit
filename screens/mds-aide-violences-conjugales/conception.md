# Conception : Aide d'urgence aux victimes de violences conjugales

Écran produit avec la skill dsfr-designer et les outils du serveur dsfr-kit (get_fundamental, get_component, check_screen). Contenus relevés sur le site le 01/10/2026 : FAQ dépliée, 35 combinaisons du calculateur, toutes les branches du test d'éligibilité, destination de chaque lien ; aucune demande envoyée.

## Fondamentaux
- Doc lue : reference/doc/fondamentaux/couleurs.md — règles appliquées : aucune couleur en dur, fonds et textes par les tokens des composants ; texte de mention pour la date (`fr-text-mention--grey`).
- Doc lue : reference/doc/fondamentaux/typographie.md — règles appliquées : un seul h1, un h2 par section, h3 pour les sous-titres et les titres de tuiles ou d'accordéons ; chapô en `fr-text--lead` ; corps de texte limité à 8 colonnes.
- Doc lue : reference/doc/fondamentaux/grille-et-points-de-rupture.md — règles appliquées : `fr-container` › `fr-grid-row fr-grid-row--gutters` › `fr-col-*`, pleine largeur sur mobile, 8 colonnes de texte à partir de LG, grilles de tuiles ou de blocs à 2 colonnes MD et 3 colonnes LG.
- Doc lue : reference/doc/fondamentaux/espacement.md — règles appliquées : classes d'espacement en nomenclature « v » uniquement (`fr-mt-4v`, `fr-mt-6v`, `fr-mb-8v`, `fr-mt-2v`).
- Doc lue : reference/doc/fondamentaux/icone.md — règles appliquées : aucune icône ajoutée à la main ; seules les icônes intégrées des composants (alertes, lien et bouton externes, chevrons des accordéons) ; les icônes décoratives du site (sablier, coche, flèches) sont retirées.
- Doc lue : reference/doc/fondamentaux/pictogramme.md — règles appliquées : aucun pictogramme ; l'illustration du site est retirée (images interdites par le brief).

## Point de départ
Aucun modèle de page correspondant dans le DSFR (voir mds-accueil) : squelette `screens/_gabarit.html`, en-tête, navigation, pied de page et liens d'évitement repris à l'identique de `screens/mds-accueil/index.html` pour que le prototype soit navigable, fil d'Ariane sous l'en-tête, corps de page sur 8 colonnes ; aucune rubrique de la navigation n'est courante. La demande se fait sur le site de la MSA ou de la CAF : le modèle de page de formulaire ne s'applique pas, la page est une page de présentation de démarche avec test d'éligibilité, ce que recommande la doc des formulaires (« avoir systématiquement une page en amont pour présenter l'objet de la démarche »).

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
- Doc lue : reference/doc/composants/link.md — « Lien externe » (nouvelle fenêtre, `title` « … - nouvelle fenêtre ») pour arretonslesviolences.gouv.fr et service-public.fr, liens d'ancre vers les questions de la FAQ, « Groupe de liens » sous les messages de refus.
### Bouton (button)
- Doc lue : reference/doc/composants/button.md — « Accéder à la demande d'aide » en lien de style bouton primaire (ancre vers le test), « Faire la demande sur le site de la MSA / de la CAF » en lien de style bouton primaire externe (un seul visible à la fois), « Calculer le montant » en bouton secondaire `type="button"` car il ne soumet rien.
### Pied de page (footer)
- Doc lue : reference/doc/composants/footer.md — pied de page minimal identique à mds-accueil ; « Qui sommes-nous ? » mène à l'écran correspondant du prototype.

### Panneau de gestion des cookies (consent, modal)
- Doc lue : reference/doc/composants/consent.md — modale de gestion des cookies présente sur toutes les pages, ouverte par le lien « Gérer les cookies » du pied de page et par les boutons « Gérer les cookies » des vidéos ; premier bloc « Tout accepter / Tout refuser » et boutons « Accepter / Refuser » par service, libellés imposés par la doc (le site écrit « Autoriser ») ; services du site : Assurer le fonctionnement du site (obligatoire, refus désactivé), TOLD, Dailymotion, Piano Analytics, avec leurs liens de politique de confidentialité ; bouton du site « Enregistrer mes préférences ».
- Doc lue : reference/doc/composants/modal.md — `dialog.fr-modal` en fin de `body`, titre h2 relié par `aria-labelledby`, bouton Fermer ; le lien du pied de page reste un lien (extrait officiel du pied de page) et ouvre la modale par l'API `dsfr(…).modal.disclose()`, ouverture programmatique prévue par la doc, le DSFR rendant le focus à l'élément d'origine.

## Composants propres à la page
### Mise en avant (callout)
- Doc lue : reference/doc/composants/callout.md — « Une procédure discrète » : titre h2, description, lien externe vers la page « effacer vos traces » ; sans accentuation de couleur ; les deux phrases du site forment la description unique du composant.
### Accordéon (accordion)
- Doc lue : reference/doc/composants/accordion.md — huit questions en groupe dissocié, fermées par défaut, titres h2 (aucun titre de section au-dessus sur le site) ; chaque section porte un identifiant pour les liens « Qui peut bénéficier de cette aide ? » des messages de refus, qui ouvrent l'accordéon par l'API `dsfr(…).collapse.disclose()` documentée ; le calculateur reste dans la question « Quel est le montant de l'aide financière ? », comme sur le site.
### Formulaire (form)
- Doc lue : reference/doc/composants/form.md — chaque question est un `fieldset` avec légende et `fr-messages-group` ; mention « Toutes les questions sont obligatoires. » en tête du test (texte du site) et attribut `required` sur les choix ; pas d'élément `form` ni de bouton de soumission, rien n'est envoyé.
- Doc lue : reference/doc/modeles/formulaires.md — page de présentation en amont de la démarche, une colonne, libellés au-dessus des champs.
### Bouton radio (radio)
- Doc lue : reference/doc/composants/radio.md — groupes de boutons radio, légende en graisse normale (`fr-fieldset__legend--regular`), aucun choix présélectionné ; Oui / Non en ligne (deux options courtes, seul cas où la doc autorise la liste horizontale) ; organisme et nombre d'enfants en liste verticale ; texte d'aide de la question 1/2 dans la légende (`fr-hint-text`).
### Liste déroulante (select)
- Doc lue : reference/doc/composants/select.md — la question des ressources a sept réponses : la doc du bouton radio demande une liste déroulante au-delà de cinq choix (et la doc de la liste déroulante la réserve aux listes de 6 à 15 choix) ; libellé et texte d'aide du site, option de départ « Sélectionner une option » de l'extrait officiel.
### Alerte (alert)
- Doc lue : reference/doc/composants/alert.md — refus : alerte « attention » taille SM sans titre, `role="alert"` car ajoutée après une réponse ; orientation : alerte « succès » avec titre h3 et description, `role="status"` ; montant : alerte « information » avec titre h3 (le montant) et description (aide ou prêt), `role="status"` ; aucune n'est refermable ni ne disparaît seule.
### Tuile (tile)
- Doc lue : reference/doc/composants/tile.md — « Voir aussi » : trois tuiles verticales à lien externe, titre h3, description et détail (le nom du site, comme sur la page d'origine).

## Note de conception
**Retenus** : présentation, procédure discrète en mise en avant, FAQ en accordéons, calculateur et test d'éligibilité qui s'affichent au fil des réponses (petit script de la page : le DSFR fournit les composants, pas l'enchaînement), barème du site reproduit à l'identique, orientation MSA ou CAF.
**Écartés** : illustration et icônes décoratives du site ; « boutons radio riches » (les cases encadrées du site) au profit des radios simples, plus sobres et recommandées pour Oui / Non ; formulaire de demande, qui n'existe pas sur cette page.
**Écarts assumés** : la question des ressources passe de sept boutons radio à une liste déroulante (règle de la doc) ; la liste des ressources prises en compte est placée avant la question au lieu d'entre la question et les choix ; une espace manquante est ajoutée après « l'auteur des violences. » ; « procés verbal » est repris tel quel ; les alertes de refus et de succès ne nomment pas leur type (« attention », « succès ») comme le demande la doc d'accessibilité, faute de texte fourni.
**Questions ouvertes** : (1) barème du site incohérent pour « 4 enfants ou plus » : 574 € en prêt pour toutes les tranches de ressources, moins que pour 3 enfants ; à faire confirmer par la CNAF ou la MSA. (2) Comme sur le site, « Calculer le montant » ne dit rien si une réponse manque ; le prototype place seulement le focus sur la question sans réponse ; un message d'erreur est à rédiger. (3) Ajouter un bouton de sortie rapide de la page, pratique courante sur les services pour victimes de violences, absent du site et du DSFR. (4) Mentionner le type des alertes dans leur texte.
