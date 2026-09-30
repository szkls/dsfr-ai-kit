# Modale (modal)

**Statut :** brouillon (à valider par Louis) — 2026-09-30

## Quand l'utiliser
Pour concentrer l'attention de l'usager sur une tâche ou une information précise, sans lui faire perdre la page en cours. Elle s'ouvre sur un clic de bouton. Cas typiques cités par la doc : gestionnaire de consentement, paramètres d'affichage, formulaire simple, demande d'un choix, affichage d'un média. À utiliser avec parcimonie, car elle interrompt l'expérience. La page derrière est figée et l'usager reprend exactement où il était en fermant.

## Quand ne pas l'utiliser, et quoi prendre à la place
Pas pour un simple complément de contenu (« En savoir plus ») : prendre un accordéon (accordion). Pas pour une décision complexe qui demande de consulter d'autres sources : la traiter dans une page. Pas pour un message qui ne demande pas d'interruption : une alerte (alert). Pas de composant complexe dedans : s'en tenir à des interactions simples (bouton, bouton radio, lien).

## Quelle variante dans quel cas
- Modale simple : information ou contenu à consulter.
- Modale avec zone d'action : pour guider vers une action, avec un bouton primaire seul ou un groupe de boutons hiérarchisé.
- Tailles SM, MD (par défaut), LG : selon le volume du contenu ; la hauteur est plafonnée à 80 % de l'écran sur bureau, le contenu défile au-delà.
- Alignée en haut sur mobile : variante de position, sinon la modale occupe presque tout l'écran mobile.

## Règles de contenu
Tout type de contenu est possible, dans la limite des règles ci-dessus : peu d'interactions, simples, et pas de décision lourde. Un titre explicite qui sert de nom à la modale.

## Points d'accessibilité à ne pas rater
- L'élément qui ouvre la modale est un bouton ; à la fermeture, le focus revient sur ce bouton (ou à un endroit pertinent s'il a disparu).
- La modale est nommée par aria-labelledby pointant sur son titre (h2 à h6 selon la page, ou un paragraphe).
- Le focus reste piégé dans la modale tant qu'elle est ouverte, et se place sur le premier élément atteignable à l'ouverture.
- Échap ferme la modale ; le défilement de la page est bloqué pendant l'ouverture.
- Sur mobile, les lecteurs d'écran ne capturent pas encore le focus : limite connue de la version actuelle.

## Erreurs vues sur nos projets
<!-- vide au départ, à remplir par l'équipe -->

## Références
- Doc officielle : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale
- Nom technique dans reference/composants.md : `modal`
