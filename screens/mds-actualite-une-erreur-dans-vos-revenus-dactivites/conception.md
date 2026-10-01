# Conception : Article Une erreur dans vos revenus d'activités ?

Écran produit avec la skill dsfr-designer et les outils du serveur dsfr-kit (get_fundamental, get_component, check_screen). Gabarit « article » commun aux 32 actualités.

## Fondamentaux
- Doc lue : reference/doc/fondamentaux/couleurs.md — règles appliquées : aucune couleur en dur, fonds et textes portés par les composants.
- Doc lue : reference/doc/fondamentaux/typographie.md — règles appliquées : un seul h1, hiérarchie de titres continue, chapô en `fr-text--lead`, corps de texte limité à 8 colonnes.
- Doc lue : reference/doc/fondamentaux/grille-et-points-de-rupture.md — règles appliquées : `fr-container` › `fr-grid-row fr-grid-row--gutters` › `fr-col-*`, pleine largeur sur mobile.
- Doc lue : reference/doc/fondamentaux/espacement.md — règles appliquées : classes d'espacement en nomenclature « v » uniquement.
- Doc lue : reference/doc/fondamentaux/icone.md — règles appliquées : icônes fonctionnelles du DSFR avec libellé (flèches des liens, icônes intégrées des composants), aucune icône seule.
- Doc lue : reference/doc/fondamentaux/pictogramme.md — règles appliquées : aucun pictogramme ajouté, images du site retirées.

## Point de départ
Gabarit commun du prototype : en-tête, navigation, pied de page, panneau cookies et liens d'évitement repris de screens/mds-accueil/index.html et tenus à jour par scripts/mds/sync-layout.mjs ; fil d'Ariane sous l'en-tête ; écran généré par scripts/mds/ à partir des relevés du site.

## Composants communs à toutes les pages
### Liens d'évitement (skiplink)
- Doc lue : reference/doc/composants/skiplink.md — trois liens (Contenu, Menu, Pied de page) vers des ancres présentes.
### En-tête (header)
- Doc lue : reference/doc/composants/header.md — nom du service, lien d'accueil vers mds-accueil, FranceConnect dans les outils, `role="banner"`.
### Bloc marque (logo)
- Doc lue : reference/doc/composants/logo.md — intitulé « République Française », taille par défaut.
### Navigation principale (navigation)
- Doc lue : reference/doc/composants/navigation.md — liens directs Accueil, Vos services, Vos événements de vie ; rubrique courante marquée par `aria-current`.
### Boutons FranceConnect et ProConnect (connect)
- Doc lue : reference/doc/composants/connect.md — bouton FranceConnect et lien d'information, intitulés non modifiés ; dans le prototype, le bouton mène à la page de limite des écrans connectés.
### Fil d'Ariane (breadcrumb)
- Doc lue : reference/doc/composants/breadcrumb.md — sous l'en-tête, page courante non cliquable avec `aria-current="page"`.
### Lien (link)
- Doc lue : reference/doc/composants/link.md — liens de retour et d'action avec icône, liens externes en nouvelle fenêtre avec `title` « … - nouvelle fenêtre », « Haut de page » en fin de contenu.
### Bouton (button)
- Doc lue : reference/doc/composants/button.md — boutons du menu et de fermeture, boutons d'action propres à la page.
### Pied de page (footer)
- Doc lue : reference/doc/composants/footer.md — pied de page minimal, liens du bas reliés aux écrans du prototype, « Gérer les cookies » ouvre le panneau.
### Panneau de gestion des cookies (consent, modal)
- Doc lue : reference/doc/composants/consent.md — modale de gestion des cookies présente sur toutes les pages, ouverte par le lien « Gérer les cookies » du pied de page et par les boutons « Gérer les cookies » des vidéos ; premier bloc « Tout accepter / Tout refuser » et boutons « Accepter / Refuser » par service, libellés imposés par la doc (le site écrit « Autoriser ») ; services du site : Assurer le fonctionnement du site (obligatoire, refus désactivé), TOLD, Dailymotion, Piano Analytics, avec leurs liens de politique de confidentialité ; bouton du site « Enregistrer mes préférences ».
- Doc lue : reference/doc/composants/modal.md — `dialog.fr-modal` en fin de `body`, titre h2 relié par `aria-labelledby`, bouton Fermer ; le lien du pied de page reste un lien (extrait officiel du pied de page) et ouvre la modale par l'API `dsfr(…).modal.disclose()`, ouverture programmatique prévue par la doc, le DSFR rendant le focus à l'élément d'origine.

## Composants propres à la page
Aucun composant supplémentaire : titres, paragraphes, listes et liens (voir Lien) ; la date en texte de mention (`fr-text-mention--grey`).

## Note de conception
**Retenus** : texte intégral du site, chapô repris du résumé de la liste, liens d'action en « Lien icon à droite » ou « Lien externe ». **Écartés** : image d'illustration. **Écarts assumés** : « Publié le » ajouté devant la date (le site n'affiche que la date) ; les boutons-liens du site deviennent des liens, puisqu'ils naviguent. **Questions ouvertes** : aucune.
