# Alerte (alert)

**Statut :** brouillon (à valider par Louis) — 2026-09-30

## Quand l'utiliser
Pour attirer l'attention de l'usager sur une information sans interrompre sa tâche, en réaction à une action (envoi d'un formulaire) ou à un événement (rechargement de page). L'alerte se place en tête du contenu qu'elle concerne : haut de page, haut de formulaire, haut de bloc. Elle doit rendre l'action attendue aussi simple que possible, en la décrivant.

## Quand ne pas l'utiliser, et quoi prendre à la place
Pas pour une information qui doit interrompre et exiger une décision : prendre la modale (modal). Pas pour un message temporaire qui disparaît seul (toast) : la doc le proscrit pour des raisons d'accessibilité. Pas pour un message d'erreur propre à un seul champ : utiliser le message d'erreur du champ de saisie (input). Pas pour une mise en valeur éditoriale sans caractère d'alerte : voir mise en avant (callout) ou mise en exergue (highlight).

## Quelle variante dans quel cas
- Erreur : plusieurs erreurs dans un formulaire, ou une erreur bloquante.
- Succès : une action ou une tâche terminée correctement.
- Information : une information importante à mettre en avant.
- Attention : un risque ou un point de vigilance.
- Simple (titre seul) quand le titre suffit ; avec description pour donner le détail ; avec bouton de fermeture pour laisser l'usager la masquer une fois lue.
- Taille SM quand l'espace est réduit (le titre devient optionnel, la description obligatoire) ; MD par défaut.

## Règles de contenu
Un titre clair et concis qui nomme la nature du message (« Erreur : … », « Succès : … »), car l'icône et la couleur ne suffisent pas à tout le monde. Une description qui détaille le problème et l'action attendue. Ton courtois, on accompagne l'usager sans le blâmer. Aucun jargon technique. Ne changer ni la couleur ni le pictogramme, ils sont liés au sens du message.

## Points d'accessibilité à ne pas rater
- Le type d'alerte est écrit en toutes lettres dans le contenu : information, erreur, succès ou attention.
- Le niveau de titre s'adapte à la page, ce n'est pas toujours un h3.
- Alerte ajoutée après chargement : role="alert" pour erreur et attention, role="status" pour succès et information.
- Le bouton de fermeture a un intitulé explicite (« Masquer le message ») et le focus est replacé à un endroit pertinent après fermeture.
- Ne jamais faire disparaître une alerte sans action de l'usager.

## Erreurs vues sur nos projets
<!-- vide au départ, à remplir par l'équipe -->

## Références
- Doc officielle : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/alerte
- Nom technique dans reference/composants.md : `alert`
