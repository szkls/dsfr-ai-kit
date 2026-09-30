# Conception : Prendre rendez-vous en préfecture

## Point de départ
Aucun écran dans `templates/`. Le brief demande le « modèle de page de formulaire du DSFR » : le paquet ne contient pas de page type portant ce nom. La page type la plus proche dans `reference/modeles.md` est **Pages de création de compte (register), sous-page 1-single** : un formulaire simple sur une page, avec en-tête, fil d'Ariane, titre, chapô, mention des champs obligatoires, fieldset et bouton d'envoi. Elle sert de squelette (structure de `main`, grille, conteneur du formulaire). Les champs sont pris dans les **blocs fonctionnels** nom et prénom (name), email, téléphone (tel), qui correspondent exactement aux champs du brief.

## Composants
| Composant | Raison du choix | Variante retenue |
|---|---|---|
| En-tête (header) | Obligatoire sur tout site de l'État ; le brief demande bloc-marque et nom de service, pas de navigation ni de recherche. | « Header sans navigation » |
| Fil d'Ariane (breadcrumb) | Le brief donne le chemin Accueil > Mes démarches > Prendre rendez-vous ; positionné sous l'en-tête comme dans la page register. | « Fil d'Ariane avec liens » (3 niveaux) |
| Formulaire (form) | Regroupe les champs dans un fieldset avec légende, mention standard des champs obligatoires, messages de formulaire. | « Ensemble de champs de saisie » pour la structure fieldset / fieldset__element |
| Bloc nom et prénom (name) | Fournit Nom et Prénom avec les bons attributs autocomplete. | « Défaut » |
| Bloc email (email) | Champ Adresse électronique avec texte d'aide et variante erreur. | « Demande d'une adresse électronique » et sa variante « Erreur » |
| Bloc téléphone (tel) | Champ Numéro de téléphone avec texte d'aide et variante erreur. | « Demande d'un numéro de téléphone » et sa variante « Erreur » |
| Champ de saisie (input) | Date souhaitée : le brief impose un seul champ au format JJ/MM/AAAA avec texte d'aide. | « Champ avec texte additionnel » et « Champ en erreur avec texte d'erreur » |
| Bouton radio (radio) | Motif : choix unique parmi 3 options, donc radio et non liste déroulante (fiche radio : 2 à 5 options). Aucune option présélectionnée (fiche). | « Ensemble de boutons radio » et « Ensemble de boutons radio avec erreur » |
| Case à cocher (checkbox) | Consentement : choix binaire obligatoire (fiche checkbox). | « Case à cocher seule » et « Case à cocher seule avec erreur » |
| Bouton (button) | Envoyer la demande : action principale, bouton primaire unique (fiche button). Réessayer sur l'état erreur serveur : bouton primaire de cette page. | « Bouton type submit » du composant formulaire |
| Lien (link) | Annuler renvoie vers Mes démarches : c'est une navigation, donc un lien et non un bouton (fiche button). | « Lien seul » |
| Alerte (alert) | États succès et erreur serveur : message en tête du contenu, nature du message dans le titre (fiche alert), jamais refermée automatiquement (contrainte du brief). | « Succès » et « Erreur » avec description |
| Pied de page (footer) | Obligatoire ; liens obligatoires de l'écosystème de l'État, mention d'accessibilité (fiche footer). | « Pied de page minimal » |

### Composants écartés
- Bloc fonctionnel date (3 champs jour / mois / année) : le brief demande un seul champ Date souhaitée au format JJ/MM/AAAA.
- Liste déroulante (select) pour le motif : 3 options seulement, la fiche impose les boutons radio.
- Modale (modal) : interdite par le brief.
- Indicateur d'étapes (stepper) : parcours sur une seule page.

## Note de conception

**Composants retenus.** En-tête sans navigation (bloc-marque République Française, nom de service « Démarches en ligne de la préfecture », baseline « Permis de conduire »), fil d'Ariane à trois niveaux, squelette de la page type création de compte (titre, chapô, formulaire sur fond gris), mention standard des champs obligatoires, bloc nom et prénom, bloc email, bloc téléphone, champ de saisie avec aide pour la date, groupe de boutons radio pour le motif, case à cocher seule pour le consentement, bouton primaire d'envoi, lien Annuler, alertes succès et erreur, pied de page minimal. Les contenus manquants au brief (nom de service, bloc-marque, baseline, texte du pied de page, mention d'accessibilité) ont été demandés à Louis avant génération.

**Composants écartés.** Bloc fonctionnel date à trois champs (le brief impose un champ unique JJ/MM/AAAA), liste déroulante pour le motif (3 options : boutons radio), modale (interdite), indicateur d'étapes (une seule page).

**Écarts assumés par rapport au modèle.**
- Le paquet n'a pas de « page de formulaire » : la page type création de compte (1-single) sert de squelette, sans le bloc FranceConnect ni le mot de passe.
- Le champ obligatoire est signalé par `aria-required="true"` (comme dans la page type) et non `required`, pour que la navigation entre états du prototype ne soit pas bloquée par la validation du navigateur.
- Le lien Annuler est un lien simple (fr-link) placé sous le bouton d'envoi : c'est une navigation, la fiche bouton interdit de lui donner le style d'un bouton.
- La légende du bloc nom et prénom est masquée à l'écran (comme dans le bloc fonctionnel) et reprend les deux libellés du brief : « Nom et prénom ».
- Les alertes utilisent un titre h2 (la doc DSFR précise que le niveau dépend de la page) et portent `role="status"` (succès) ou `role="alert"` (erreur) pour être annoncées si elles sont insérées dynamiquement.
- Parcours du prototype : le bouton Envoyer de l'état initial mène à l'état erreurs de saisie, celui de l'état erreurs de saisie et le bouton Réessayer mènent à l'état succès. En production, c'est la validation serveur qui décide.

**Questions ouvertes.**
- Les titres d'alerte reprennent mot pour mot le brief. La règle d'accessibilité du DSFR demande que la nature du message (« succès », « erreur ») figure textuellement dans l'alerte : faut-il ajuster les titres du brief, par exemple « Succès : votre demande a bien été envoyée » ?
- L'état erreurs de saisie et l'état erreur serveur affichent les messages mais des champs vides : le brief ne fournit pas de valeurs saisies d'exemple (courriel invalide, téléphone invalide, saisies conservées). En fournir permettrait des captures plus réalistes.
- Le libellé « (facultatif) » du téléphone vient du brief ; les exemples du DSFR utilisent « (optionnel) ». À trancher pour la cohérence du site.
- Les adresses des pages Accueil, Mes démarches, plan du site, mentions légales, etc. sont des chemins provisoires (`/mes-demarches`…), à remplacer par les vraies adresses.
- Espacement au-dessus du bouton d'envoi : le formulaire n'ayant pas de fieldset englobant, la marge de l'élément de fieldset de la page type manquait ; remplacée par la classe d'espacement DSFR `fr-mt-6v` (1,5 rem, valeur équivalente à celle de la page type). Corrigé après contrôle visuel de Louis.
