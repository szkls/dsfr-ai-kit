# Brief : Prendre rendez-vous en préfecture

## 1. Le service et son public
Service en ligne d'une préfecture permettant aux usagers de prendre rendez-vous pour une démarche liée au permis de conduire. Public : tout usager majeur, souvent sur mobile, pas toujours à l'aise avec le numérique.

## 2. La user story
En tant qu'usager, je veux demander un rendez-vous en préfecture pour une démarche liée à mon permis de conduire, afin d'obtenir un créneau sans me déplacer.

## 3. Le point de départ
Modèle de page de formulaire du DSFR. Pas de template maison.

## 4. Les contenus réels
Titre de page : Prendre rendez-vous en préfecture
Introduction : Renseignez vos coordonnées et le motif de votre demande. Vous recevrez une confirmation par courriel sous 48 heures.
Mention des champs obligatoires : la formulation standard du DSFR.
Champ Nom (obligatoire), champ Prénom (obligatoire).
Champ Adresse électronique (obligatoire), aide : Format attendu : nom@exemple.fr
Champ Numéro de téléphone (facultatif), aide : Format attendu : 10 chiffres, par exemple 06 12 34 56 78
Groupe de boutons radio Motif du rendez-vous (obligatoire), options : Renouvellement du permis ; Permis perdu ou volé ; Échange d'un permis étranger.
Champ Date souhaitée (obligatoire), aide : Format attendu : JJ/MM/AAAA, à partir de demain
Case à cocher (obligatoire) : J'accepte que mes données soient utilisées pour traiter ma demande de rendez-vous.
Bouton principal : Envoyer la demande. Lien secondaire : Annuler.
Messages d'erreur : Nom : Veuillez renseigner votre nom. Prénom : Veuillez renseigner votre prénom. Adresse électronique : Veuillez renseigner une adresse électronique valide, par exemple nom@exemple.fr. Téléphone : Le numéro doit comporter 10 chiffres. Motif : Veuillez choisir un motif. Date : Veuillez indiquer une date au format JJ/MM/AAAA, à partir de demain. Consentement : Vous devez accepter le traitement de vos données pour envoyer la demande.
Succès : titre Votre demande a bien été envoyée ; texte : Vous recevrez une confirmation à l'adresse indiquée sous 48 heures. ; lien : Retour à mes démarches.
Erreur serveur : titre Votre demande n'a pas pu être envoyée ; texte : Une erreur technique est survenue. Vos informations ont été conservées, vous pouvez réessayer. ; bouton : Réessayer.

## 5. Les états et le parcours
États : initial ; erreurs de saisie (tous les champs obligatoires vides, courriel invalide, téléphone invalide) ; succès ; erreur serveur.
Parcours : l'usager arrive depuis la page Mes démarches (fil d'Ariane : Accueil > Mes démarches > Prendre rendez-vous). Envoyer valide le formulaire : en cas d'erreur, la page se réaffiche avec les erreurs sous chaque champ et le focus sur la première ; en cas de succès, la page de succès ; en cas d'erreur technique, la page d'erreur serveur avec les saisies conservées. Annuler renvoie vers Mes démarches.

## 6. Les contraintes
Niveau RGAA AA. Écran conçu d'abord pour mobile. Pas de modale, pas de bouton désactivé, pas d'alerte qui disparaît seule. Les erreurs sont affichées sous chaque champ concerné selon le composant officiel, pas dans un bloc global uniquement.

## 7. Les critères d'acceptation
- Chaque champ obligatoire est signalé selon la règle du DSFR et le formulaire porte la mention standard des champs obligatoires.
- Chaque texte d'aide de la rubrique 4 apparaît sous son champ.
- Dans l'état erreurs de saisie, chaque message d'erreur de la rubrique 4 apparaît sous son champ, avec le style d'erreur du composant.
- Le motif est un groupe de boutons radio avec une légende, pas une liste déroulante.
- Le bouton Envoyer la demande est un bouton primaire, Annuler est un lien ou un bouton secondaire, jamais un bouton primaire.
- Les états succès et erreur serveur existent en fichiers séparés et reprennent mot pour mot les contenus de la rubrique 4.
- L'en-tête et le pied de page sont ceux du DSFR, avec le bloc-marque et un nom de service.
- Aucune classe hors DSFR, aucun style en ligne, aucun faux-texte.
