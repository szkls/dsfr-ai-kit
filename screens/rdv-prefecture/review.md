# Review : Prendre rendez-vous en préfecture

Relecture indépendante (skill dsfr-review, passe 1 sur 2) — 2026-09-30 — DSFR 1.15.3.
Fichiers relus : brief.md, conception.md, index.html, etat-erreurs-saisie.html, etat-succes.html, etat-erreur-serveur.html, rapport-tests.md et captures. Fiches consultées : alert, breadcrumb, button, checkbox, footer, header, input, radio. Le relecteur n'a rien corrigé.

## Ce qui a été vérifié et qui est conforme

- **Fidélité du code** : chaque bloc `fr-` correspond à son snippet d'origine (en-tête « Header sans navigation », fil d'Ariane, squelette de la page type register 1-single, blocs fonctionnels nom / email / tel, champ avec texte additionnel et champ en erreur, ensemble de boutons radio avec et sans erreur, case à cocher seule avec et sans erreur, bouton submit, lien seul, alertes succès et erreur, pied de page minimal). Les seuls ajouts sont des attributs tolérés (`name`, `aria-required`, `role` sur les alertes, identifiants) et des classes d'espacement DSFR.
- **Bon composant pour l'usage** : les choix suivent les fiches (radio pour 3 options, case à cocher pour le consentement, un seul bouton primaire, Annuler en lien de navigation, alertes non refermables, pas de modale, pas de bouton désactivé).
- **Fondamentaux** : aucune classe hors préfixe `fr-`, aucun style en ligne, aucune couleur ni taille en dur, aucun faux-texte. Rendu vérifié sur les captures 320 px et 1248 px.
- **États** : les quatre états du brief existent, un fichier par état.
- **Contenus** : tous les textes de la rubrique 4 sont repris mot pour mot (titre, chapô, mention, libellés, aides, options, messages d'erreur, succès, erreur serveur).

## Écarts

| N° | Fichier et endroit | Règle enfreinte et source | Correction attendue | Gravité |
|---|---|---|---|---|
| 1 | Les 4 fichiers, entre `</header>` et `<main>` (aucun lien d'évitement) | Le brief impose le niveau RGAA AA. Le RGAA demande au moins un lien d'accès au contenu principal sur chaque page (critère 12.7) ; doc officielle du composant Liens d'évitement (skiplink), section accessibilité. La page type register ne l'inclut pas, mais c'est un modèle de démonstration, pas une dispense. | Ajouter le composant Liens d'évitement copié depuis `node_modules/@gouvfr/dsfr/example/component/skiplink/index.html`, en premier dans `body`, pointant vers `#content`. | bloquant |
| 2 | etat-succes.html ligne 75 et etat-erreur-serveur.html ligne 76 (titres des alertes) | La doc officielle de l'alerte (section accessibilité) : « Le type d'alerte doit être indiqué textuellement dans le contenu de l'alerte par les termes information, erreur, succès ou attention ». Fiche `fiches/alert.md`, règles de contenu et points d'accessibilité. Les titres actuels reprennent le brief mot pour mot, donc la correction passe par une décision sur le brief (question déjà ouverte dans conception.md). | Louis tranche : compléter le brief (par exemple « Succès : votre demande a bien été envoyée », « Erreur : votre demande n'a pas pu être envoyée »), puis reporter dans les deux fichiers. | bloquant |
| 3 | index.html, etat-erreurs-saisie.html, etat-erreur-serveur.html : champs Nom, Prénom, Adresse électronique, Date souhaitée et case de consentement (`aria-required="true"` sans `required`) | Doc officielle formulaire et champ de saisie (accessibilité) : « utiliser l'attribut required pour indiquer que le champ est obligatoire ». Fiches `input.md` et `checkbox.md`, points d'accessibilité. L'écart est assumé dans conception.md pour ne pas bloquer la navigation du prototype. | Remettre `required` sur chaque champ obligatoire (les blocs restent conformes aux snippets, l'attribut est toléré). Si la navigation du prototype pose problème, préférer `novalidate` sur le formulaire plutôt que de retirer l'attribut. | à corriger |
| 4 | Les 4 fichiers, pied de page, paragraphe `fr-footer__content-desc` | Le texte de présentation du pied de page reprend le chapô de la page (« Renseignez vos coordonnées… »). Fiche `fiches/footer.md`, règles de contenu : ce texte décrit le service ou l'organisation. Le brief ne fournit aucun texte pour cet emplacement ; règle absolue 3 d'AGENTS.md : demander plutôt que de combler. | Demander à Louis un texte de présentation du service, ou supprimer le paragraphe (il est optionnel dans le composant). | à corriger |
| 5 | etat-erreurs-saisie.html : champs Adresse électronique (ligne 120) et Numéro de téléphone (ligne 130) vides alors que leur message d'erreur est affiché | Le brief (rubrique 5) définit l'état comme « courriel invalide, téléphone invalide » : ces erreurs supposent une valeur saisie. Un téléphone facultatif laissé vide ne peut pas être « invalide », l'état est donc incohérent tel quel. Le brief ne donne pas de valeurs d'exemple ; règle absolue 3 d'AGENTS.md : demander avant de générer (question déjà ouverte dans conception.md). | Louis fournit un courriel et un téléphone invalides d'exemple, à mettre en `value` sur ces deux champs. | à corriger |
| 6 | etat-erreur-serveur.html : tous les champs vides | Le brief (rubriques 4 et 5) : page d'erreur serveur « avec les saisies conservées », et le texte de l'alerte annonce « Vos informations ont été conservées ». Les champs vides contredisent le message. Même cause que l'écart 5. | Louis fournit un jeu de valeurs saisies valides, à reporter dans les champs (dont un motif coché et la case cochée). | à corriger |
| 7 | index.html ligne 86 et 135, etat-erreur-serveur.html ligne 90 et 139 : `fieldset` avec `aria-labelledby` pointant vers le groupe de messages, sans `role="group"` | Fiches `radio.md` et `checkbox.md` : « Messages d'erreur ou d'aide du groupe : aria-labelledby sur le fieldset et role="group" ». Le snippet officiel hors erreur n'a pas ce rôle, le code est donc fidèle au snippet ; la fiche est en brouillon. | Aucune action tant que la fiche n'est pas validée. Si Louis valide la fiche, ajouter `role="group"` sur les deux fieldsets dans les états sans erreur. | suggestion |
| 8 | Les 3 fichiers de formulaire, libellé de la case à cocher (point final) | Fiche `fiches/checkbox.md`, règles de contenu : pas de ponctuation finale. Le libellé reprend le brief mot pour mot. | Décision sur le brief : retirer le point final si Louis le souhaite. | suggestion |
| 9 | etat-succes.html lignes 84 à 92 : conteneur gris du formulaire conservé pour n'y loger que le lien « Retour à mes démarches » | Aucune règle DSFR enfreinte ; le fond gris est un reste du squelette de la page type, sans contenu de formulaire. Le lien isolé dans un grand bloc gris est peu lisible sur mobile (capture 320 px). | Placer le lien directement sous l'alerte, dans le premier conteneur, et retirer le bloc gris. | suggestion |
| 10 | Les 3 fichiers de formulaire, libellé « Numéro de téléphone (facultatif) » | Les exemples du DSFR utilisent majoritairement « (optionnel) » (102 occurrences contre 18 pour « (facultatif) », les deux existent). Le brief donne « (facultatif) ». | Choisir une formulation unique pour tout le site ; « (optionnel) » est l'usage dominant du DSFR. | suggestion |

## Critères d'acceptation du brief (rubrique 7)

| Critère | Résultat |
|---|---|
| Champs obligatoires signalés selon la règle du DSFR, mention standard présente | Conforme pour la mention visible ; réserve sur l'attribut `required` (écart 3) |
| Chaque texte d'aide sous son champ | Conforme |
| État erreurs de saisie : chaque message sous son champ, style d'erreur du composant | Conforme pour les messages et le style ; réserve sur les valeurs saisies (écart 5) |
| Motif en boutons radio avec légende | Conforme |
| Envoyer la demande en bouton primaire, Annuler en lien | Conforme |
| États succès et erreur serveur en fichiers séparés, contenus mot pour mot | Conforme |
| En-tête et pied de page DSFR avec bloc-marque et nom de service | Conforme |
| Aucune classe hors DSFR, aucun style en ligne, aucun faux-texte | Conforme |

## Verdict

Non conforme : 2 bloquant(s) — 4 à corriger, 4 suggestions.

Les deux bloquants (lien d'évitement absent, type d'alerte non nommé dans le titre) sont rapides à lever ; le second, comme les écarts 4, 5 et 6, demande une décision ou un contenu de Louis avant la seconde passe.
