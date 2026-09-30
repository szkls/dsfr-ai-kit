# Bouton radio (radio)

**Statut :** brouillon (à valider par Louis) — 2026-09-30

## Quand l'utiliser
Pour un choix unique parmi 2 à 5 options visibles d'un coup. Un bouton radio n'existe qu'en groupe : il y a toujours au moins deux options. Préférer la liste verticale et ne pas présélectionner d'option, pour que le choix soit conscient, surtout s'il est obligatoire.

## Quand ne pas l'utiliser, et quoi prendre à la place
Si plusieurs réponses sont possibles ou si la sélection est facultative, prendre des cases à cocher (checkbox). Au-delà de 5 options ou quand la place manque, prendre une liste déroulante (select). Ne jamais proposer un bouton radio seul.

## Quelle variante dans quel cas
- Liste verticale : le cas courant.
- Liste horizontale : seulement avec 2 options ou des libellés courts.
- Texte d'aide sous le titre du groupe, ou sous chaque option : dès qu'une précision aide au choix.
- Boutons radio riches (avec pictogramme, avec ou sans description) : pour des options illustrées, le pictogramme aidant à choisir.
- Taille MD par défaut ; SM uniquement si la place manque.

## Règles de contenu
Libellés clairs et concis, cohérents entre eux et avec le site, première lettre en majuscule, pas de ponctuation finale. Texte d'aide plutôt qu'infobulle pour toute information essentielle. Couleur bleue uniquement, typographie noire uniquement.

## Points d'accessibilité à ne pas rater
- Regrouper les options dans un fieldset avec une legend visible et explicite, non graissée.
- Tous les radios d'un groupe partagent le même attribut name, sinon la navigation aux flèches ne fonctionne pas.
- Un label relié explicitement à chaque radio (for = id, id unique).
- Messages d'erreur ou d'aide du groupe : aria-labelledby sur le fieldset et role="group".
- Les images des boutons radio riches sont décoratives ; éviter l'état désactivé.

## Erreurs vues sur nos projets
<!-- vide au départ, à remplir par l'équipe -->

## Références
- Doc officielle : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio
- Nom technique dans reference/composants.md : `radio`
