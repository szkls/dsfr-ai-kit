# Champ de saisie (input)

**Statut :** brouillon (à valider par Louis) — 2026-09-30

## Quand l'utiliser
Pour laisser l'usager saisir librement du texte ou des données : nom, adresse, numéro, commentaire. C'est le composant de base de tout formulaire dès que la réponse n'est pas prévisible à l'avance. La doc recommande de présenter les champs en liste verticale, libellé au-dessus du champ, et d'ajuster la largeur du champ à la longueur attendue (un code postal plus court qu'un e-mail).

## Quand ne pas l'utiliser, et quoi prendre à la place
Jamais pour un choix fermé : prendre une liste déroulante (select), des boutons radio (radio) ou des cases à cocher (checkbox) selon le nombre d'options et le type de choix. Pour un champ de recherche, utiliser la barre de recherche (search). Pour un mot de passe, le composant dédié (password). Éviter l'état désactivé : la doc conseille plutôt de masquer le champ tant que sa saisie n'est pas requise.

## Quelle variante dans quel cas
- Champ simple : une courte ligne de texte ou de nombre.
- Zone de texte (textarea) : plusieurs lignes, par exemple un commentaire ou une description.
- Champ avec icône : uniquement illustratif, l'icône n'apporte aucune fonction.
- Champ date, nombre, champ avec bouton d'action : quand le type de donnée ou l'action associée le justifie.
- États erreur et succès : toujours accompagnés d'un message sous le champ, jamais la couleur seule.

## Règles de contenu
Le libellé est obligatoire, visible et placé au-dessus du champ. Ajouter un texte d'aide sous le libellé quand un format précis est attendu, avec un exemple si possible. Ne rien cacher d'essentiel dans une infobulle. Limiter le placeholder : il ne remplace jamais un libellé et ne doit porter qu'une aide secondaire. Utiliser le même libellé partout où l'on demande la même information. Le message d'erreur doit proposer un exemple de valeur attendue. Indiquer systématiquement la réussite ou l'échec de la soumission.

## Points d'accessibilité à ne pas rater
- Un label relié explicitement au champ (attribut for = id du champ, id unique dans la page).
- Signaler les champs obligatoires par une mention visible en début de formulaire et l'attribut required.
- Le format attendu doit être annoncé avant la validation, et relié au champ (aria-describedby).
- Pour toute donnée personnelle (nom, e-mail, adresse…), ajouter l'attribut autocomplete adapté.
- L'état désactivé est mal contrasté et déroutant pour certains usagers : l'éviter.

## Erreurs vues sur nos projets
<!-- vide au départ, à remplir par l'équipe -->

## Références
- Doc officielle : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie
- Nom technique dans reference/composants.md : `input`
