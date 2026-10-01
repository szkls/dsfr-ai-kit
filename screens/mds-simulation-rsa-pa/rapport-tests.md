# Rapport de tests : mds-simulation-rsa-pa

Généré par tests/check.mjs le 2026-10-01 — DSFR 1.15.3 — fichiers : index.html, etat-foyer.html, etat-logement-recap.html, etat-logement.html, etat-ressources-autres.html, etat-ressources-montants.html, etat-ressources-situation.html, etat-ressources-synthese.html, etat-ressources.html, etat-resultat.html

**Verdict : CONFORME — 0 écart(s) de snippet, 0 classe(s) inconnue(s) ou style(s) en ligne, 0 problème(s) de contenu, 0 violation(s) axe, 0 composant(s) sans ligne « Doc lue ».**

## 1. Fidélité aux snippets officiels

436 bloc(s) de composant analysé(s) contre les extraits des pages d'exemple des composants et des modèles (blocs fonctionnels). Tolérances : textes, valeurs d'attributs, attributs supplémentaires, attributs de comportement ou d'état (autocomplete, spellcheck, required, id, aria-current, aria-labelledby…), niveau des titres h1 à h6, classes d'espacement et de grille, lignes de liste libres en nombre et en ordre (chaque ligne doit correspondre à un type de ligne de l'exemple), sous-composant imbriqué interchangeable (un lien à la place d'un bouton), chacun étant comparé à part contre ses propres variantes, contenu libre du bloc refermable des accordéons. Un bloc est conforme s'il correspond à au moins une variante.

| Fichier | Endroit | Composant | Résultat | Variante la plus proche | Détail |
|---|---|---|---|---|---|
| index.html | body > div.fr-skiplinks:nth-of-type(1) | Liens d'évitement | conforme | Liens d’évitement | identique |
| index.html | body > div.fr-skiplinks:nth-of-type(1) > nav > ul > li:nth-of-type(1) > a.fr-link | Liens d'évitement | conforme | Liens d’évitement (élément imbriqué <a>) | identique |
| index.html | body > div.fr-skiplinks:nth-of-type(1) > nav > ul > li:nth-of-type(2) > a.fr-link | Liens d'évitement | conforme | Liens d’évitement (élément imbriqué <a>) | identique |
| index.html | body > div.fr-skiplinks:nth-of-type(1) > nav > ul > li:nth-of-type(3) > a.fr-link | Liens d'évitement | conforme | Liens d’évitement (élément imbriqué <a>) | identique |
| index.html | body > header.fr-header | En-tête | conforme | Header sans navigation avec un seul raccourci | identique |
| index.html | body > header.fr-header > div:nth-of-type(1) > div > div > div.fr-enlarge-link:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p.fr-logo | En-tête | conforme | Header minimal (élément imbriqué <p>) | identique |
| index.html | body > header.fr-header > div:nth-of-type(1) > div > div > div.fr-enlarge-link:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > button.fr-btn | En-tête | conforme | Header minimal (élément imbriqué <button>) | identique |
| index.html | body > header.fr-header > div:nth-of-type(1) > div > div > div:nth-of-type(2) > div > div.fr-connect-group | Bouton FranceConnect | conforme | Bouton FranceConnect | identique |
| index.html | body > header.fr-header > div.fr-modal:nth-of-type(2) | En-tête | conforme | Header minimal (élément imbriqué <div>) | identique |
| index.html | body > header.fr-header > div.fr-modal:nth-of-type(2) > div > button.fr-btn | En-tête | conforme | Header minimal (élément imbriqué <button>) | identique |
| index.html | body > header.fr-header > div.fr-modal:nth-of-type(2) > div > div > div.fr-connect-group | Bouton FranceConnect | conforme | Bouton FranceConnect | identique |
| index.html | body > header.fr-header > div.fr-modal:nth-of-type(2) > div > nav.fr-nav | En-tête | conforme | Header minimal (élément imbriqué <nav>) | identique |
| index.html | body > div:nth-of-type(2) > nav.fr-breadcrumb | Fil d'Ariane | conforme | Fil d’Ariane avec liens | identique |
| index.html | body > main > div > div > div > p > a.fr-btn | Bouton | conforme | Bouton secondaire icon à gauche | identique |
| index.html | body > main > div > div > div > div.fr-stepper | Indicateur d'étapes | conforme | Titre de l’étape en cours Étape 1 sur 3 | identique |
| index.html | body > main > div > div > div > form > div.fr-input-group | Champ de saisie | conforme | Champ de type "text" | identique |
| index.html | body > main > div > div > div > form > div.fr-input-group > div.fr-messages-group | Champ de saisie | conforme | Champ de type "text" (élément imbriqué <div>) | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) | Bloc fonctionnel de date unique | conforme | Défaut | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) > div:nth-of-type(1) > div.fr-input-group | Bloc fonctionnel de date unique | conforme | Défaut (élément imbriqué <div>) | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) > div:nth-of-type(2) > div.fr-input-group | Bloc fonctionnel de date unique | conforme | Défaut (élément imbriqué <div>) | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) > div:nth-of-type(3) > div.fr-input-group | Bloc fonctionnel de date unique | conforme | Défaut (élément imbriqué <div>) | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) > div.fr-messages-group:nth-of-type(4) | Bloc fonctionnel de date unique | conforme | Défaut (élément imbriqué <div>) | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(2) | Formulaire | conforme | Ensemble de boutons radio | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(2) > div.fr-messages-group:nth-of-type(3) | Formulaire | conforme | Ensemble de champs de saisie (élément imbriqué <div>) | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(3) | Formulaire | conforme | Ensemble de boutons radio | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(3) > div.fr-messages-group:nth-of-type(5) | Formulaire | conforme | Ensemble de champs de saisie (élément imbriqué <div>) | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(4) | Formulaire | conforme | Ensemble de boutons radio | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(4) > div.fr-messages-group:nth-of-type(3) | Formulaire | conforme | Ensemble de champs de saisie (élément imbriqué <div>) | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(5) | Case à cocher | conforme | Ensemble de cases à cocher | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(5) > div:nth-of-type(1) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(5) > div:nth-of-type(1) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(5) > div:nth-of-type(2) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(5) > div:nth-of-type(2) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(5) > div:nth-of-type(3) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher avec texte d’aide | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(5) > div:nth-of-type(3) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(5) > div:nth-of-type(4) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(5) > div:nth-of-type(4) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(5) > div.fr-messages-group:nth-of-type(5) | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(6) | Case à cocher | conforme | Ensemble de cases à cocher | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(6) > div:nth-of-type(1) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher avec texte d’aide | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(6) > div:nth-of-type(1) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(6) > div:nth-of-type(2) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher avec texte d’aide | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(6) > div:nth-of-type(2) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(6) > div:nth-of-type(3) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher avec texte d’aide | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(6) > div:nth-of-type(3) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(6) > div:nth-of-type(4) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(6) > div:nth-of-type(4) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(6) > div.fr-messages-group:nth-of-type(5) | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(7) | Case à cocher | conforme | Ensemble de cases à cocher | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(7) > div:nth-of-type(1) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(7) > div:nth-of-type(1) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(7) > div:nth-of-type(2) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(7) > div:nth-of-type(2) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(7) > div:nth-of-type(3) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher avec texte d’aide | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(7) > div:nth-of-type(3) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(7) > div:nth-of-type(4) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(7) > div:nth-of-type(4) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| index.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(7) > div.fr-messages-group:nth-of-type(5) | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| index.html | body > main > div > div > div > form > button.fr-btn | Bouton | conforme | Bouton simple | identique |
| index.html | body > footer.fr-footer | Pied de page | conforme | Pied de page minimal | identique |
| index.html | body > footer.fr-footer > div > div:nth-of-type(1) > div.fr-enlarge-link:nth-of-type(1) > a > p.fr-logo | Pied de page | conforme | Pied de page minimal (élément imbriqué <p>) | identique |
| index.html | body > dialog.fr-modal | Modale | conforme | Titre de la modale | identique |
| index.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(1) > button.fr-btn | Modale | conforme | Titre de la modale (élément imbriqué <button>) | identique |
| index.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(1) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| index.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(2) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| index.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(3) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| index.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(4) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| index.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(5) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| index.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > ul.fr-btns-group | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <ul>) | identique |
| index.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > ul.fr-btns-group > li > button.fr-btn | Gestionnaire de consentement | conforme | À propos des cookies sur nomdusite.gouv.fr (élément imbriqué <button>) | identique |
| etat-foyer.html | body > div.fr-skiplinks:nth-of-type(1) | Liens d'évitement | conforme | Liens d’évitement | identique |
| etat-foyer.html | body > div.fr-skiplinks:nth-of-type(1) > nav > ul > li:nth-of-type(1) > a.fr-link | Liens d'évitement | conforme | Liens d’évitement (élément imbriqué <a>) | identique |
| etat-foyer.html | body > div.fr-skiplinks:nth-of-type(1) > nav > ul > li:nth-of-type(2) > a.fr-link | Liens d'évitement | conforme | Liens d’évitement (élément imbriqué <a>) | identique |
| etat-foyer.html | body > div.fr-skiplinks:nth-of-type(1) > nav > ul > li:nth-of-type(3) > a.fr-link | Liens d'évitement | conforme | Liens d’évitement (élément imbriqué <a>) | identique |
| etat-foyer.html | body > header.fr-header | En-tête | conforme | Header sans navigation avec un seul raccourci | identique |
| etat-foyer.html | body > header.fr-header > div:nth-of-type(1) > div > div > div.fr-enlarge-link:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p.fr-logo | En-tête | conforme | Header minimal (élément imbriqué <p>) | identique |
| etat-foyer.html | body > header.fr-header > div:nth-of-type(1) > div > div > div.fr-enlarge-link:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > button.fr-btn | En-tête | conforme | Header minimal (élément imbriqué <button>) | identique |
| etat-foyer.html | body > header.fr-header > div:nth-of-type(1) > div > div > div:nth-of-type(2) > div > div.fr-connect-group | Bouton FranceConnect | conforme | Bouton FranceConnect | identique |
| etat-foyer.html | body > header.fr-header > div.fr-modal:nth-of-type(2) | En-tête | conforme | Header minimal (élément imbriqué <div>) | identique |
| etat-foyer.html | body > header.fr-header > div.fr-modal:nth-of-type(2) > div > button.fr-btn | En-tête | conforme | Header minimal (élément imbriqué <button>) | identique |
| etat-foyer.html | body > header.fr-header > div.fr-modal:nth-of-type(2) > div > div > div.fr-connect-group | Bouton FranceConnect | conforme | Bouton FranceConnect | identique |
| etat-foyer.html | body > header.fr-header > div.fr-modal:nth-of-type(2) > div > nav.fr-nav | En-tête | conforme | Header minimal (élément imbriqué <nav>) | identique |
| etat-foyer.html | body > div:nth-of-type(2) > nav.fr-breadcrumb | Fil d'Ariane | conforme | Fil d’Ariane avec liens | identique |
| etat-foyer.html | body > main > div > div > div > p:nth-of-type(1) > a.fr-btn | Bouton | conforme | Bouton secondaire icon à gauche | identique |
| etat-foyer.html | body > main > div > div > div > div.fr-stepper | Indicateur d'étapes | conforme | Titre de l’étape en cours Étape 1 sur 3 | identique |
| etat-foyer.html | body > main > div > div > div > p:nth-of-type(2) > a.fr-btn | Bouton | conforme | Bouton secondaire icon à gauche | identique |
| etat-foyer.html | body > main > div > div > div > p:nth-of-type(5) > a.fr-btn | Bouton | conforme | Bouton icon à droite | identique |
| etat-foyer.html | body > footer.fr-footer | Pied de page | conforme | Pied de page minimal | identique |
| etat-foyer.html | body > footer.fr-footer > div > div:nth-of-type(1) > div.fr-enlarge-link:nth-of-type(1) > a > p.fr-logo | Pied de page | conforme | Pied de page minimal (élément imbriqué <p>) | identique |
| etat-foyer.html | body > dialog.fr-modal | Modale | conforme | Titre de la modale | identique |
| etat-foyer.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(1) > button.fr-btn | Modale | conforme | Titre de la modale (élément imbriqué <button>) | identique |
| etat-foyer.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(1) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-foyer.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(2) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-foyer.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(3) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-foyer.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(4) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-foyer.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(5) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-foyer.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > ul.fr-btns-group | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <ul>) | identique |
| etat-foyer.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > ul.fr-btns-group > li > button.fr-btn | Gestionnaire de consentement | conforme | À propos des cookies sur nomdusite.gouv.fr (élément imbriqué <button>) | identique |
| etat-logement-recap.html | body > div.fr-skiplinks:nth-of-type(1) | Liens d'évitement | conforme | Liens d’évitement | identique |
| etat-logement-recap.html | body > div.fr-skiplinks:nth-of-type(1) > nav > ul > li:nth-of-type(1) > a.fr-link | Liens d'évitement | conforme | Liens d’évitement (élément imbriqué <a>) | identique |
| etat-logement-recap.html | body > div.fr-skiplinks:nth-of-type(1) > nav > ul > li:nth-of-type(2) > a.fr-link | Liens d'évitement | conforme | Liens d’évitement (élément imbriqué <a>) | identique |
| etat-logement-recap.html | body > div.fr-skiplinks:nth-of-type(1) > nav > ul > li:nth-of-type(3) > a.fr-link | Liens d'évitement | conforme | Liens d’évitement (élément imbriqué <a>) | identique |
| etat-logement-recap.html | body > header.fr-header | En-tête | conforme | Header sans navigation avec un seul raccourci | identique |
| etat-logement-recap.html | body > header.fr-header > div:nth-of-type(1) > div > div > div.fr-enlarge-link:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p.fr-logo | En-tête | conforme | Header minimal (élément imbriqué <p>) | identique |
| etat-logement-recap.html | body > header.fr-header > div:nth-of-type(1) > div > div > div.fr-enlarge-link:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > button.fr-btn | En-tête | conforme | Header minimal (élément imbriqué <button>) | identique |
| etat-logement-recap.html | body > header.fr-header > div:nth-of-type(1) > div > div > div:nth-of-type(2) > div > div.fr-connect-group | Bouton FranceConnect | conforme | Bouton FranceConnect | identique |
| etat-logement-recap.html | body > header.fr-header > div.fr-modal:nth-of-type(2) | En-tête | conforme | Header minimal (élément imbriqué <div>) | identique |
| etat-logement-recap.html | body > header.fr-header > div.fr-modal:nth-of-type(2) > div > button.fr-btn | En-tête | conforme | Header minimal (élément imbriqué <button>) | identique |
| etat-logement-recap.html | body > header.fr-header > div.fr-modal:nth-of-type(2) > div > div > div.fr-connect-group | Bouton FranceConnect | conforme | Bouton FranceConnect | identique |
| etat-logement-recap.html | body > header.fr-header > div.fr-modal:nth-of-type(2) > div > nav.fr-nav | En-tête | conforme | Header minimal (élément imbriqué <nav>) | identique |
| etat-logement-recap.html | body > div:nth-of-type(2) > nav.fr-breadcrumb | Fil d'Ariane | conforme | Fil d’Ariane avec liens | identique |
| etat-logement-recap.html | body > main > div > div > div > p:nth-of-type(1) > a.fr-btn | Bouton | conforme | Bouton secondaire icon à gauche | identique |
| etat-logement-recap.html | body > main > div > div > div > div.fr-stepper | Indicateur d'étapes | conforme | Titre de l’étape en cours Étape 1 sur 3 | identique |
| etat-logement-recap.html | body > main > div > div > div > p:nth-of-type(3) > a.fr-btn | Bouton | conforme | Bouton secondaire icon à gauche | identique |
| etat-logement-recap.html | body > main > div > div > div > p:nth-of-type(4) > a.fr-btn | Bouton | conforme | Bouton icon à droite | identique |
| etat-logement-recap.html | body > footer.fr-footer | Pied de page | conforme | Pied de page minimal | identique |
| etat-logement-recap.html | body > footer.fr-footer > div > div:nth-of-type(1) > div.fr-enlarge-link:nth-of-type(1) > a > p.fr-logo | Pied de page | conforme | Pied de page minimal (élément imbriqué <p>) | identique |
| etat-logement-recap.html | body > dialog.fr-modal | Modale | conforme | Titre de la modale | identique |
| etat-logement-recap.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(1) > button.fr-btn | Modale | conforme | Titre de la modale (élément imbriqué <button>) | identique |
| etat-logement-recap.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(1) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-logement-recap.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(2) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-logement-recap.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(3) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-logement-recap.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(4) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-logement-recap.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(5) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-logement-recap.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > ul.fr-btns-group | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <ul>) | identique |
| etat-logement-recap.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > ul.fr-btns-group > li > button.fr-btn | Gestionnaire de consentement | conforme | À propos des cookies sur nomdusite.gouv.fr (élément imbriqué <button>) | identique |
| etat-logement.html | body > div.fr-skiplinks:nth-of-type(1) | Liens d'évitement | conforme | Liens d’évitement | identique |
| etat-logement.html | body > div.fr-skiplinks:nth-of-type(1) > nav > ul > li:nth-of-type(1) > a.fr-link | Liens d'évitement | conforme | Liens d’évitement (élément imbriqué <a>) | identique |
| etat-logement.html | body > div.fr-skiplinks:nth-of-type(1) > nav > ul > li:nth-of-type(2) > a.fr-link | Liens d'évitement | conforme | Liens d’évitement (élément imbriqué <a>) | identique |
| etat-logement.html | body > div.fr-skiplinks:nth-of-type(1) > nav > ul > li:nth-of-type(3) > a.fr-link | Liens d'évitement | conforme | Liens d’évitement (élément imbriqué <a>) | identique |
| etat-logement.html | body > header.fr-header | En-tête | conforme | Header sans navigation avec un seul raccourci | identique |
| etat-logement.html | body > header.fr-header > div:nth-of-type(1) > div > div > div.fr-enlarge-link:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p.fr-logo | En-tête | conforme | Header minimal (élément imbriqué <p>) | identique |
| etat-logement.html | body > header.fr-header > div:nth-of-type(1) > div > div > div.fr-enlarge-link:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > button.fr-btn | En-tête | conforme | Header minimal (élément imbriqué <button>) | identique |
| etat-logement.html | body > header.fr-header > div:nth-of-type(1) > div > div > div:nth-of-type(2) > div > div.fr-connect-group | Bouton FranceConnect | conforme | Bouton FranceConnect | identique |
| etat-logement.html | body > header.fr-header > div.fr-modal:nth-of-type(2) | En-tête | conforme | Header minimal (élément imbriqué <div>) | identique |
| etat-logement.html | body > header.fr-header > div.fr-modal:nth-of-type(2) > div > button.fr-btn | En-tête | conforme | Header minimal (élément imbriqué <button>) | identique |
| etat-logement.html | body > header.fr-header > div.fr-modal:nth-of-type(2) > div > div > div.fr-connect-group | Bouton FranceConnect | conforme | Bouton FranceConnect | identique |
| etat-logement.html | body > header.fr-header > div.fr-modal:nth-of-type(2) > div > nav.fr-nav | En-tête | conforme | Header minimal (élément imbriqué <nav>) | identique |
| etat-logement.html | body > div:nth-of-type(2) > nav.fr-breadcrumb | Fil d'Ariane | conforme | Fil d’Ariane avec liens | identique |
| etat-logement.html | body > main > div > div > div > p > a.fr-btn | Bouton | conforme | Bouton secondaire icon à gauche | identique |
| etat-logement.html | body > main > div > div > div > div.fr-stepper | Indicateur d'étapes | conforme | Titre de l’étape en cours Étape 1 sur 3 | identique |
| etat-logement.html | body > main > div > div > div > form > div.fr-input-group:nth-of-type(1) | Champ de saisie | conforme | Champ de type "text" | identique |
| etat-logement.html | body > main > div > div > div > form > div.fr-input-group:nth-of-type(1) > div.fr-messages-group | Champ de saisie | conforme | Champ de type "text" (élément imbriqué <div>) | identique |
| etat-logement.html | body > main > div > div > div > form > fieldset.fr-fieldset | Formulaire | conforme | Ensemble de boutons radio | identique |
| etat-logement.html | body > main > div > div > div > form > fieldset.fr-fieldset > div.fr-messages-group:nth-of-type(5) | Formulaire | conforme | Ensemble de champs de saisie (élément imbriqué <div>) | identique |
| etat-logement.html | body > main > div > div > div > form > div.fr-input-group:nth-of-type(2) | Champ de saisie | conforme | Champ de type "text" | identique |
| etat-logement.html | body > main > div > div > div > form > div.fr-input-group:nth-of-type(2) > div.fr-messages-group | Champ de saisie | conforme | Champ de type "text" (élément imbriqué <div>) | identique |
| etat-logement.html | body > main > div > div > div > form > button.fr-btn | Bouton | conforme | Bouton simple | identique |
| etat-logement.html | body > footer.fr-footer | Pied de page | conforme | Pied de page minimal | identique |
| etat-logement.html | body > footer.fr-footer > div > div:nth-of-type(1) > div.fr-enlarge-link:nth-of-type(1) > a > p.fr-logo | Pied de page | conforme | Pied de page minimal (élément imbriqué <p>) | identique |
| etat-logement.html | body > dialog.fr-modal | Modale | conforme | Titre de la modale | identique |
| etat-logement.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(1) > button.fr-btn | Modale | conforme | Titre de la modale (élément imbriqué <button>) | identique |
| etat-logement.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(1) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-logement.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(2) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-logement.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(3) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-logement.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(4) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-logement.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(5) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-logement.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > ul.fr-btns-group | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <ul>) | identique |
| etat-logement.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > ul.fr-btns-group > li > button.fr-btn | Gestionnaire de consentement | conforme | À propos des cookies sur nomdusite.gouv.fr (élément imbriqué <button>) | identique |
| etat-ressources-autres.html | body > div.fr-skiplinks:nth-of-type(1) | Liens d'évitement | conforme | Liens d’évitement | identique |
| etat-ressources-autres.html | body > div.fr-skiplinks:nth-of-type(1) > nav > ul > li:nth-of-type(1) > a.fr-link | Liens d'évitement | conforme | Liens d’évitement (élément imbriqué <a>) | identique |
| etat-ressources-autres.html | body > div.fr-skiplinks:nth-of-type(1) > nav > ul > li:nth-of-type(2) > a.fr-link | Liens d'évitement | conforme | Liens d’évitement (élément imbriqué <a>) | identique |
| etat-ressources-autres.html | body > div.fr-skiplinks:nth-of-type(1) > nav > ul > li:nth-of-type(3) > a.fr-link | Liens d'évitement | conforme | Liens d’évitement (élément imbriqué <a>) | identique |
| etat-ressources-autres.html | body > header.fr-header | En-tête | conforme | Header sans navigation avec un seul raccourci | identique |
| etat-ressources-autres.html | body > header.fr-header > div:nth-of-type(1) > div > div > div.fr-enlarge-link:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p.fr-logo | En-tête | conforme | Header minimal (élément imbriqué <p>) | identique |
| etat-ressources-autres.html | body > header.fr-header > div:nth-of-type(1) > div > div > div.fr-enlarge-link:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > button.fr-btn | En-tête | conforme | Header minimal (élément imbriqué <button>) | identique |
| etat-ressources-autres.html | body > header.fr-header > div:nth-of-type(1) > div > div > div:nth-of-type(2) > div > div.fr-connect-group | Bouton FranceConnect | conforme | Bouton FranceConnect | identique |
| etat-ressources-autres.html | body > header.fr-header > div.fr-modal:nth-of-type(2) | En-tête | conforme | Header minimal (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > header.fr-header > div.fr-modal:nth-of-type(2) > div > button.fr-btn | En-tête | conforme | Header minimal (élément imbriqué <button>) | identique |
| etat-ressources-autres.html | body > header.fr-header > div.fr-modal:nth-of-type(2) > div > div > div.fr-connect-group | Bouton FranceConnect | conforme | Bouton FranceConnect | identique |
| etat-ressources-autres.html | body > header.fr-header > div.fr-modal:nth-of-type(2) > div > nav.fr-nav | En-tête | conforme | Header minimal (élément imbriqué <nav>) | identique |
| etat-ressources-autres.html | body > div:nth-of-type(2) > nav.fr-breadcrumb | Fil d'Ariane | conforme | Fil d’Ariane avec liens | identique |
| etat-ressources-autres.html | body > main > div > div > div > p > a.fr-btn | Bouton | conforme | Bouton secondaire icon à gauche | identique |
| etat-ressources-autres.html | body > main > div > div > div > div.fr-stepper | Indicateur d'étapes | conforme | Titre de l’étape en cours Étape 1 sur 3 | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) | Case à cocher | conforme | Ensemble de cases à cocher | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) > div:nth-of-type(1) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) > div:nth-of-type(1) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) > div:nth-of-type(2) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) > div:nth-of-type(2) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) > div:nth-of-type(3) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) > div:nth-of-type(3) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) > div:nth-of-type(4) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) > div:nth-of-type(4) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) > div:nth-of-type(5) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) > div:nth-of-type(5) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) > div:nth-of-type(6) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) > div:nth-of-type(6) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) > div.fr-messages-group:nth-of-type(7) | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(2) | Case à cocher | conforme | Ensemble de cases à cocher | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(2) > div:nth-of-type(1) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(2) > div:nth-of-type(1) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(2) > div:nth-of-type(2) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher avec texte d’aide | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(2) > div:nth-of-type(2) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(2) > div:nth-of-type(3) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(2) > div:nth-of-type(3) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(2) > div:nth-of-type(4) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(2) > div:nth-of-type(4) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(2) > div:nth-of-type(5) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(2) > div:nth-of-type(5) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(2) > div:nth-of-type(6) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(2) > div:nth-of-type(6) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(2) > div:nth-of-type(7) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(2) > div:nth-of-type(7) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(2) > div:nth-of-type(8) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(2) > div:nth-of-type(8) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(2) > div.fr-messages-group:nth-of-type(9) | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(3) | Case à cocher | conforme | Ensemble de cases à cocher | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(3) > div:nth-of-type(1) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(3) > div:nth-of-type(1) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(3) > div:nth-of-type(2) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(3) > div:nth-of-type(2) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(3) > div:nth-of-type(3) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(3) > div:nth-of-type(3) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(3) > div:nth-of-type(4) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(3) > div:nth-of-type(4) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(3) > div:nth-of-type(5) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(3) > div:nth-of-type(5) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(3) > div:nth-of-type(6) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(3) > div:nth-of-type(6) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(3) > div:nth-of-type(7) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(3) > div:nth-of-type(7) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(3) > div:nth-of-type(8) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(3) > div:nth-of-type(8) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(3) > div:nth-of-type(9) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher avec texte d’aide | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(3) > div:nth-of-type(9) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(3) > div:nth-of-type(10) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(3) > div:nth-of-type(10) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(3) > div:nth-of-type(11) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(3) > div:nth-of-type(11) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(3) > div:nth-of-type(12) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(3) > div:nth-of-type(12) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(3) > div.fr-messages-group:nth-of-type(13) | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(4) | Case à cocher | conforme | Ensemble de cases à cocher | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(4) > div:nth-of-type(1) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(4) > div:nth-of-type(1) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(4) > div:nth-of-type(2) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(4) > div:nth-of-type(2) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(4) > div:nth-of-type(3) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(4) > div:nth-of-type(3) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(4) > div:nth-of-type(4) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(4) > div:nth-of-type(4) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(4) > div:nth-of-type(5) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(4) > div:nth-of-type(5) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(4) > div.fr-messages-group:nth-of-type(6) | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(5) | Case à cocher | conforme | Ensemble de cases à cocher | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(5) > div:nth-of-type(1) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher avec texte d’aide | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(5) > div:nth-of-type(1) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(5) > div:nth-of-type(2) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(5) > div:nth-of-type(2) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(5) > div:nth-of-type(3) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(5) > div:nth-of-type(3) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(5) > div:nth-of-type(4) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(5) > div:nth-of-type(4) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(5) > div:nth-of-type(5) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(5) > div:nth-of-type(5) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(5) > div:nth-of-type(6) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(5) > div:nth-of-type(6) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(5) > div:nth-of-type(7) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(5) > div:nth-of-type(7) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > fieldset.fr-fieldset:nth-of-type(5) > div.fr-messages-group:nth-of-type(8) | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-autres.html | body > main > div > div > div > form > button.fr-btn | Bouton | conforme | Bouton simple | identique |
| etat-ressources-autres.html | body > footer.fr-footer | Pied de page | conforme | Pied de page minimal | identique |
| etat-ressources-autres.html | body > footer.fr-footer > div > div:nth-of-type(1) > div.fr-enlarge-link:nth-of-type(1) > a > p.fr-logo | Pied de page | conforme | Pied de page minimal (élément imbriqué <p>) | identique |
| etat-ressources-autres.html | body > dialog.fr-modal | Modale | conforme | Titre de la modale | identique |
| etat-ressources-autres.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(1) > button.fr-btn | Modale | conforme | Titre de la modale (élément imbriqué <button>) | identique |
| etat-ressources-autres.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(1) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-ressources-autres.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(2) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-ressources-autres.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(3) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-ressources-autres.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(4) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-ressources-autres.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(5) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-ressources-autres.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > ul.fr-btns-group | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <ul>) | identique |
| etat-ressources-autres.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > ul.fr-btns-group > li > button.fr-btn | Gestionnaire de consentement | conforme | À propos des cookies sur nomdusite.gouv.fr (élément imbriqué <button>) | identique |
| etat-ressources-montants.html | body > div.fr-skiplinks:nth-of-type(1) | Liens d'évitement | conforme | Liens d’évitement | identique |
| etat-ressources-montants.html | body > div.fr-skiplinks:nth-of-type(1) > nav > ul > li:nth-of-type(1) > a.fr-link | Liens d'évitement | conforme | Liens d’évitement (élément imbriqué <a>) | identique |
| etat-ressources-montants.html | body > div.fr-skiplinks:nth-of-type(1) > nav > ul > li:nth-of-type(2) > a.fr-link | Liens d'évitement | conforme | Liens d’évitement (élément imbriqué <a>) | identique |
| etat-ressources-montants.html | body > div.fr-skiplinks:nth-of-type(1) > nav > ul > li:nth-of-type(3) > a.fr-link | Liens d'évitement | conforme | Liens d’évitement (élément imbriqué <a>) | identique |
| etat-ressources-montants.html | body > header.fr-header | En-tête | conforme | Header sans navigation avec un seul raccourci | identique |
| etat-ressources-montants.html | body > header.fr-header > div:nth-of-type(1) > div > div > div.fr-enlarge-link:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p.fr-logo | En-tête | conforme | Header minimal (élément imbriqué <p>) | identique |
| etat-ressources-montants.html | body > header.fr-header > div:nth-of-type(1) > div > div > div.fr-enlarge-link:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > button.fr-btn | En-tête | conforme | Header minimal (élément imbriqué <button>) | identique |
| etat-ressources-montants.html | body > header.fr-header > div:nth-of-type(1) > div > div > div:nth-of-type(2) > div > div.fr-connect-group | Bouton FranceConnect | conforme | Bouton FranceConnect | identique |
| etat-ressources-montants.html | body > header.fr-header > div.fr-modal:nth-of-type(2) | En-tête | conforme | Header minimal (élément imbriqué <div>) | identique |
| etat-ressources-montants.html | body > header.fr-header > div.fr-modal:nth-of-type(2) > div > button.fr-btn | En-tête | conforme | Header minimal (élément imbriqué <button>) | identique |
| etat-ressources-montants.html | body > header.fr-header > div.fr-modal:nth-of-type(2) > div > div > div.fr-connect-group | Bouton FranceConnect | conforme | Bouton FranceConnect | identique |
| etat-ressources-montants.html | body > header.fr-header > div.fr-modal:nth-of-type(2) > div > nav.fr-nav | En-tête | conforme | Header minimal (élément imbriqué <nav>) | identique |
| etat-ressources-montants.html | body > div:nth-of-type(2) > nav.fr-breadcrumb | Fil d'Ariane | conforme | Fil d’Ariane avec liens | identique |
| etat-ressources-montants.html | body > main > div > div > div > p:nth-of-type(1) > a.fr-btn | Bouton | conforme | Bouton secondaire icon à gauche | identique |
| etat-ressources-montants.html | body > main > div > div > div > div.fr-stepper | Indicateur d'étapes | conforme | Titre de l’étape en cours Étape 1 sur 3 | identique |
| etat-ressources-montants.html | body > main > div > div > div > form > div.fr-input-group:nth-of-type(1) | Champ de saisie | conforme | Champ avec texte additionnel | identique |
| etat-ressources-montants.html | body > main > div > div > div > form > div.fr-input-group:nth-of-type(1) > div.fr-messages-group | Champ de saisie | conforme | Champ de type "text" (élément imbriqué <div>) | identique |
| etat-ressources-montants.html | body > main > div > div > div > form > div.fr-input-group:nth-of-type(2) | Champ de saisie | conforme | Champ avec texte additionnel | identique |
| etat-ressources-montants.html | body > main > div > div > div > form > div.fr-input-group:nth-of-type(2) > div.fr-messages-group | Champ de saisie | conforme | Champ de type "text" (élément imbriqué <div>) | identique |
| etat-ressources-montants.html | body > main > div > div > div > form > div.fr-input-group:nth-of-type(3) | Champ de saisie | conforme | Champ avec texte additionnel | identique |
| etat-ressources-montants.html | body > main > div > div > div > form > div.fr-input-group:nth-of-type(3) > div.fr-messages-group | Champ de saisie | conforme | Champ de type "text" (élément imbriqué <div>) | identique |
| etat-ressources-montants.html | body > main > div > div > div > form > div.fr-input-group:nth-of-type(4) | Champ de saisie | conforme | Champ avec texte additionnel | identique |
| etat-ressources-montants.html | body > main > div > div > div > form > div.fr-input-group:nth-of-type(4) > div.fr-messages-group | Champ de saisie | conforme | Champ de type "text" (élément imbriqué <div>) | identique |
| etat-ressources-montants.html | body > main > div > div > div > form > button.fr-btn | Bouton | conforme | Bouton simple | identique |
| etat-ressources-montants.html | body > main > div > div > div > p:nth-of-type(2) > a.fr-btn | Bouton | conforme | Bouton tertiaire | identique |
| etat-ressources-montants.html | body > footer.fr-footer | Pied de page | conforme | Pied de page minimal | identique |
| etat-ressources-montants.html | body > footer.fr-footer > div > div:nth-of-type(1) > div.fr-enlarge-link:nth-of-type(1) > a > p.fr-logo | Pied de page | conforme | Pied de page minimal (élément imbriqué <p>) | identique |
| etat-ressources-montants.html | body > dialog.fr-modal | Modale | conforme | Titre de la modale | identique |
| etat-ressources-montants.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(1) > button.fr-btn | Modale | conforme | Titre de la modale (élément imbriqué <button>) | identique |
| etat-ressources-montants.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(1) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-ressources-montants.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(2) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-ressources-montants.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(3) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-ressources-montants.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(4) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-ressources-montants.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(5) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-ressources-montants.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > ul.fr-btns-group | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <ul>) | identique |
| etat-ressources-montants.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > ul.fr-btns-group > li > button.fr-btn | Gestionnaire de consentement | conforme | À propos des cookies sur nomdusite.gouv.fr (élément imbriqué <button>) | identique |
| etat-ressources-situation.html | body > div.fr-skiplinks:nth-of-type(1) | Liens d'évitement | conforme | Liens d’évitement | identique |
| etat-ressources-situation.html | body > div.fr-skiplinks:nth-of-type(1) > nav > ul > li:nth-of-type(1) > a.fr-link | Liens d'évitement | conforme | Liens d’évitement (élément imbriqué <a>) | identique |
| etat-ressources-situation.html | body > div.fr-skiplinks:nth-of-type(1) > nav > ul > li:nth-of-type(2) > a.fr-link | Liens d'évitement | conforme | Liens d’évitement (élément imbriqué <a>) | identique |
| etat-ressources-situation.html | body > div.fr-skiplinks:nth-of-type(1) > nav > ul > li:nth-of-type(3) > a.fr-link | Liens d'évitement | conforme | Liens d’évitement (élément imbriqué <a>) | identique |
| etat-ressources-situation.html | body > header.fr-header | En-tête | conforme | Header sans navigation avec un seul raccourci | identique |
| etat-ressources-situation.html | body > header.fr-header > div:nth-of-type(1) > div > div > div.fr-enlarge-link:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p.fr-logo | En-tête | conforme | Header minimal (élément imbriqué <p>) | identique |
| etat-ressources-situation.html | body > header.fr-header > div:nth-of-type(1) > div > div > div.fr-enlarge-link:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > button.fr-btn | En-tête | conforme | Header minimal (élément imbriqué <button>) | identique |
| etat-ressources-situation.html | body > header.fr-header > div:nth-of-type(1) > div > div > div:nth-of-type(2) > div > div.fr-connect-group | Bouton FranceConnect | conforme | Bouton FranceConnect | identique |
| etat-ressources-situation.html | body > header.fr-header > div.fr-modal:nth-of-type(2) | En-tête | conforme | Header minimal (élément imbriqué <div>) | identique |
| etat-ressources-situation.html | body > header.fr-header > div.fr-modal:nth-of-type(2) > div > button.fr-btn | En-tête | conforme | Header minimal (élément imbriqué <button>) | identique |
| etat-ressources-situation.html | body > header.fr-header > div.fr-modal:nth-of-type(2) > div > div > div.fr-connect-group | Bouton FranceConnect | conforme | Bouton FranceConnect | identique |
| etat-ressources-situation.html | body > header.fr-header > div.fr-modal:nth-of-type(2) > div > nav.fr-nav | En-tête | conforme | Header minimal (élément imbriqué <nav>) | identique |
| etat-ressources-situation.html | body > div:nth-of-type(2) > nav.fr-breadcrumb | Fil d'Ariane | conforme | Fil d’Ariane avec liens | identique |
| etat-ressources-situation.html | body > main > div > div > div > p > a.fr-btn | Bouton | conforme | Bouton secondaire icon à gauche | identique |
| etat-ressources-situation.html | body > main > div > div > div > div.fr-stepper | Indicateur d'étapes | conforme | Titre de l’étape en cours Étape 1 sur 3 | identique |
| etat-ressources-situation.html | body > main > div > div > div > form > fieldset.fr-fieldset | Case à cocher | conforme | Ensemble de cases à cocher | identique |
| etat-ressources-situation.html | body > main > div > div > div > form > fieldset.fr-fieldset > div:nth-of-type(1) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-situation.html | body > main > div > div > div > form > fieldset.fr-fieldset > div:nth-of-type(1) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-situation.html | body > main > div > div > div > form > fieldset.fr-fieldset > div:nth-of-type(2) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-situation.html | body > main > div > div > div > form > fieldset.fr-fieldset > div:nth-of-type(2) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-situation.html | body > main > div > div > div > form > fieldset.fr-fieldset > div:nth-of-type(3) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-situation.html | body > main > div > div > div > form > fieldset.fr-fieldset > div:nth-of-type(3) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-situation.html | body > main > div > div > div > form > fieldset.fr-fieldset > div:nth-of-type(4) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher avec texte d’aide | identique |
| etat-ressources-situation.html | body > main > div > div > div > form > fieldset.fr-fieldset > div:nth-of-type(4) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-situation.html | body > main > div > div > div > form > fieldset.fr-fieldset > div:nth-of-type(5) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-situation.html | body > main > div > div > div > form > fieldset.fr-fieldset > div:nth-of-type(5) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-situation.html | body > main > div > div > div > form > fieldset.fr-fieldset > div:nth-of-type(6) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-situation.html | body > main > div > div > div > form > fieldset.fr-fieldset > div:nth-of-type(6) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-situation.html | body > main > div > div > div > form > fieldset.fr-fieldset > div:nth-of-type(7) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-situation.html | body > main > div > div > div > form > fieldset.fr-fieldset > div:nth-of-type(7) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-situation.html | body > main > div > div > div > form > fieldset.fr-fieldset > div:nth-of-type(8) > div.fr-checkbox-group | Case à cocher | conforme | Case à cocher seule | identique |
| etat-ressources-situation.html | body > main > div > div > div > form > fieldset.fr-fieldset > div:nth-of-type(8) > div.fr-checkbox-group > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-situation.html | body > main > div > div > div > form > fieldset.fr-fieldset > div.fr-messages-group:nth-of-type(9) | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-ressources-situation.html | body > main > div > div > div > form > button.fr-btn | Bouton | conforme | Bouton simple | identique |
| etat-ressources-situation.html | body > footer.fr-footer | Pied de page | conforme | Pied de page minimal | identique |
| etat-ressources-situation.html | body > footer.fr-footer > div > div:nth-of-type(1) > div.fr-enlarge-link:nth-of-type(1) > a > p.fr-logo | Pied de page | conforme | Pied de page minimal (élément imbriqué <p>) | identique |
| etat-ressources-situation.html | body > dialog.fr-modal | Modale | conforme | Titre de la modale | identique |
| etat-ressources-situation.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(1) > button.fr-btn | Modale | conforme | Titre de la modale (élément imbriqué <button>) | identique |
| etat-ressources-situation.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(1) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-ressources-situation.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(2) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-ressources-situation.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(3) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-ressources-situation.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(4) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-ressources-situation.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(5) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-ressources-situation.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > ul.fr-btns-group | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <ul>) | identique |
| etat-ressources-situation.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > ul.fr-btns-group > li > button.fr-btn | Gestionnaire de consentement | conforme | À propos des cookies sur nomdusite.gouv.fr (élément imbriqué <button>) | identique |
| etat-ressources-synthese.html | body > div.fr-skiplinks:nth-of-type(1) | Liens d'évitement | conforme | Liens d’évitement | identique |
| etat-ressources-synthese.html | body > div.fr-skiplinks:nth-of-type(1) > nav > ul > li:nth-of-type(1) > a.fr-link | Liens d'évitement | conforme | Liens d’évitement (élément imbriqué <a>) | identique |
| etat-ressources-synthese.html | body > div.fr-skiplinks:nth-of-type(1) > nav > ul > li:nth-of-type(2) > a.fr-link | Liens d'évitement | conforme | Liens d’évitement (élément imbriqué <a>) | identique |
| etat-ressources-synthese.html | body > div.fr-skiplinks:nth-of-type(1) > nav > ul > li:nth-of-type(3) > a.fr-link | Liens d'évitement | conforme | Liens d’évitement (élément imbriqué <a>) | identique |
| etat-ressources-synthese.html | body > header.fr-header | En-tête | conforme | Header sans navigation avec un seul raccourci | identique |
| etat-ressources-synthese.html | body > header.fr-header > div:nth-of-type(1) > div > div > div.fr-enlarge-link:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p.fr-logo | En-tête | conforme | Header minimal (élément imbriqué <p>) | identique |
| etat-ressources-synthese.html | body > header.fr-header > div:nth-of-type(1) > div > div > div.fr-enlarge-link:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > button.fr-btn | En-tête | conforme | Header minimal (élément imbriqué <button>) | identique |
| etat-ressources-synthese.html | body > header.fr-header > div:nth-of-type(1) > div > div > div:nth-of-type(2) > div > div.fr-connect-group | Bouton FranceConnect | conforme | Bouton FranceConnect | identique |
| etat-ressources-synthese.html | body > header.fr-header > div.fr-modal:nth-of-type(2) | En-tête | conforme | Header minimal (élément imbriqué <div>) | identique |
| etat-ressources-synthese.html | body > header.fr-header > div.fr-modal:nth-of-type(2) > div > button.fr-btn | En-tête | conforme | Header minimal (élément imbriqué <button>) | identique |
| etat-ressources-synthese.html | body > header.fr-header > div.fr-modal:nth-of-type(2) > div > div > div.fr-connect-group | Bouton FranceConnect | conforme | Bouton FranceConnect | identique |
| etat-ressources-synthese.html | body > header.fr-header > div.fr-modal:nth-of-type(2) > div > nav.fr-nav | En-tête | conforme | Header minimal (élément imbriqué <nav>) | identique |
| etat-ressources-synthese.html | body > div:nth-of-type(2) > nav.fr-breadcrumb | Fil d'Ariane | conforme | Fil d’Ariane avec liens | identique |
| etat-ressources-synthese.html | body > main > div > div > div > p:nth-of-type(1) > a.fr-btn | Bouton | conforme | Bouton secondaire icon à gauche | identique |
| etat-ressources-synthese.html | body > main > div > div > div > div.fr-stepper | Indicateur d'étapes | conforme | Titre de l’étape en cours Étape 1 sur 3 | identique |
| etat-ressources-synthese.html | body > main > div > div > div > p:nth-of-type(13) > a.fr-btn | Bouton | conforme | Bouton secondaire icon à gauche | identique |
| etat-ressources-synthese.html | body > main > div > div > div > p:nth-of-type(14) > a.fr-btn | Bouton | conforme | Bouton icon à droite | identique |
| etat-ressources-synthese.html | body > footer.fr-footer | Pied de page | conforme | Pied de page minimal | identique |
| etat-ressources-synthese.html | body > footer.fr-footer > div > div:nth-of-type(1) > div.fr-enlarge-link:nth-of-type(1) > a > p.fr-logo | Pied de page | conforme | Pied de page minimal (élément imbriqué <p>) | identique |
| etat-ressources-synthese.html | body > dialog.fr-modal | Modale | conforme | Titre de la modale | identique |
| etat-ressources-synthese.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(1) > button.fr-btn | Modale | conforme | Titre de la modale (élément imbriqué <button>) | identique |
| etat-ressources-synthese.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(1) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-ressources-synthese.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(2) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-ressources-synthese.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(3) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-ressources-synthese.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(4) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-ressources-synthese.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(5) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-ressources-synthese.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > ul.fr-btns-group | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <ul>) | identique |
| etat-ressources-synthese.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > ul.fr-btns-group > li > button.fr-btn | Gestionnaire de consentement | conforme | À propos des cookies sur nomdusite.gouv.fr (élément imbriqué <button>) | identique |
| etat-ressources.html | body > div.fr-skiplinks:nth-of-type(1) | Liens d'évitement | conforme | Liens d’évitement | identique |
| etat-ressources.html | body > div.fr-skiplinks:nth-of-type(1) > nav > ul > li:nth-of-type(1) > a.fr-link | Liens d'évitement | conforme | Liens d’évitement (élément imbriqué <a>) | identique |
| etat-ressources.html | body > div.fr-skiplinks:nth-of-type(1) > nav > ul > li:nth-of-type(2) > a.fr-link | Liens d'évitement | conforme | Liens d’évitement (élément imbriqué <a>) | identique |
| etat-ressources.html | body > div.fr-skiplinks:nth-of-type(1) > nav > ul > li:nth-of-type(3) > a.fr-link | Liens d'évitement | conforme | Liens d’évitement (élément imbriqué <a>) | identique |
| etat-ressources.html | body > header.fr-header | En-tête | conforme | Header sans navigation avec un seul raccourci | identique |
| etat-ressources.html | body > header.fr-header > div:nth-of-type(1) > div > div > div.fr-enlarge-link:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p.fr-logo | En-tête | conforme | Header minimal (élément imbriqué <p>) | identique |
| etat-ressources.html | body > header.fr-header > div:nth-of-type(1) > div > div > div.fr-enlarge-link:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > button.fr-btn | En-tête | conforme | Header minimal (élément imbriqué <button>) | identique |
| etat-ressources.html | body > header.fr-header > div:nth-of-type(1) > div > div > div:nth-of-type(2) > div > div.fr-connect-group | Bouton FranceConnect | conforme | Bouton FranceConnect | identique |
| etat-ressources.html | body > header.fr-header > div.fr-modal:nth-of-type(2) | En-tête | conforme | Header minimal (élément imbriqué <div>) | identique |
| etat-ressources.html | body > header.fr-header > div.fr-modal:nth-of-type(2) > div > button.fr-btn | En-tête | conforme | Header minimal (élément imbriqué <button>) | identique |
| etat-ressources.html | body > header.fr-header > div.fr-modal:nth-of-type(2) > div > div > div.fr-connect-group | Bouton FranceConnect | conforme | Bouton FranceConnect | identique |
| etat-ressources.html | body > header.fr-header > div.fr-modal:nth-of-type(2) > div > nav.fr-nav | En-tête | conforme | Header minimal (élément imbriqué <nav>) | identique |
| etat-ressources.html | body > div:nth-of-type(2) > nav.fr-breadcrumb | Fil d'Ariane | conforme | Fil d’Ariane avec liens | identique |
| etat-ressources.html | body > main > div > div > div > p:nth-of-type(1) > a.fr-btn | Bouton | conforme | Bouton secondaire icon à gauche | identique |
| etat-ressources.html | body > main > div > div > div > div.fr-stepper | Indicateur d'étapes | conforme | Titre de l’étape en cours Étape 1 sur 3 | identique |
| etat-ressources.html | body > main > div > div > div > p:nth-of-type(4) > a.fr-btn | Bouton | conforme | Bouton icon à droite | identique |
| etat-ressources.html | body > footer.fr-footer | Pied de page | conforme | Pied de page minimal | identique |
| etat-ressources.html | body > footer.fr-footer > div > div:nth-of-type(1) > div.fr-enlarge-link:nth-of-type(1) > a > p.fr-logo | Pied de page | conforme | Pied de page minimal (élément imbriqué <p>) | identique |
| etat-ressources.html | body > dialog.fr-modal | Modale | conforme | Titre de la modale | identique |
| etat-ressources.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(1) > button.fr-btn | Modale | conforme | Titre de la modale (élément imbriqué <button>) | identique |
| etat-ressources.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(1) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-ressources.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(2) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-ressources.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(3) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-ressources.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(4) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-ressources.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(5) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-ressources.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > ul.fr-btns-group | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <ul>) | identique |
| etat-ressources.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > ul.fr-btns-group > li > button.fr-btn | Gestionnaire de consentement | conforme | À propos des cookies sur nomdusite.gouv.fr (élément imbriqué <button>) | identique |
| etat-resultat.html | body > div.fr-skiplinks:nth-of-type(1) | Liens d'évitement | conforme | Liens d’évitement | identique |
| etat-resultat.html | body > div.fr-skiplinks:nth-of-type(1) > nav > ul > li:nth-of-type(1) > a.fr-link | Liens d'évitement | conforme | Liens d’évitement (élément imbriqué <a>) | identique |
| etat-resultat.html | body > div.fr-skiplinks:nth-of-type(1) > nav > ul > li:nth-of-type(2) > a.fr-link | Liens d'évitement | conforme | Liens d’évitement (élément imbriqué <a>) | identique |
| etat-resultat.html | body > div.fr-skiplinks:nth-of-type(1) > nav > ul > li:nth-of-type(3) > a.fr-link | Liens d'évitement | conforme | Liens d’évitement (élément imbriqué <a>) | identique |
| etat-resultat.html | body > header.fr-header | En-tête | conforme | Header sans navigation avec un seul raccourci | identique |
| etat-resultat.html | body > header.fr-header > div:nth-of-type(1) > div > div > div.fr-enlarge-link:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p.fr-logo | En-tête | conforme | Header minimal (élément imbriqué <p>) | identique |
| etat-resultat.html | body > header.fr-header > div:nth-of-type(1) > div > div > div.fr-enlarge-link:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > button.fr-btn | En-tête | conforme | Header minimal (élément imbriqué <button>) | identique |
| etat-resultat.html | body > header.fr-header > div:nth-of-type(1) > div > div > div:nth-of-type(2) > div > div.fr-connect-group | Bouton FranceConnect | conforme | Bouton FranceConnect | identique |
| etat-resultat.html | body > header.fr-header > div.fr-modal:nth-of-type(2) | En-tête | conforme | Header minimal (élément imbriqué <div>) | identique |
| etat-resultat.html | body > header.fr-header > div.fr-modal:nth-of-type(2) > div > button.fr-btn | En-tête | conforme | Header minimal (élément imbriqué <button>) | identique |
| etat-resultat.html | body > header.fr-header > div.fr-modal:nth-of-type(2) > div > div > div.fr-connect-group | Bouton FranceConnect | conforme | Bouton FranceConnect | identique |
| etat-resultat.html | body > header.fr-header > div.fr-modal:nth-of-type(2) > div > nav.fr-nav | En-tête | conforme | Header minimal (élément imbriqué <nav>) | identique |
| etat-resultat.html | body > div:nth-of-type(2) > nav.fr-breadcrumb | Fil d'Ariane | conforme | Fil d’Ariane avec liens | identique |
| etat-resultat.html | body > main > div > div > div > div.fr-stepper | Indicateur d'étapes | conforme | Titre de l’étape en cours Étape 1 sur 3 | identique |
| etat-resultat.html | body > main > div > div > div > p:nth-of-type(4) > a.fr-link | Lien | conforme | Lien seul | identique |
| etat-resultat.html | body > main > div > div > div > p:nth-of-type(5) > a.fr-btn | Bouton | conforme | Bouton secondaire | identique |
| etat-resultat.html | body > main > div > div > div > p:nth-of-type(7) > a.fr-link | Lien | conforme | Lien seul | identique |
| etat-resultat.html | body > footer.fr-footer | Pied de page | conforme | Pied de page minimal | identique |
| etat-resultat.html | body > footer.fr-footer > div > div:nth-of-type(1) > div.fr-enlarge-link:nth-of-type(1) > a > p.fr-logo | Pied de page | conforme | Pied de page minimal (élément imbriqué <p>) | identique |
| etat-resultat.html | body > dialog.fr-modal | Modale | conforme | Titre de la modale | identique |
| etat-resultat.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(1) > button.fr-btn | Modale | conforme | Titre de la modale (élément imbriqué <button>) | identique |
| etat-resultat.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(1) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-resultat.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(2) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-resultat.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(3) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-resultat.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(4) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-resultat.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > div.fr-consent-service:nth-of-type(5) > fieldset.fr-fieldset | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <fieldset>) | identique |
| etat-resultat.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > ul.fr-btns-group | Gestionnaire de consentement | conforme | Panneau de gestion des cookies (élément imbriqué <ul>) | identique |
| etat-resultat.html | body > dialog.fr-modal > div > div > div > div > div:nth-of-type(2) > div.fr-consent-manager > ul.fr-btns-group > li > button.fr-btn | Gestionnaire de consentement | conforme | À propos des cookies sur nomdusite.gouv.fr (élément imbriqué <button>) | identique |

## 2. Classes inconnues et styles en ligne

Classes connues : celles des deux CSS du paquet et celles du balisage des extraits officiels.

| Fichier | Endroit | Problème | Valeur |
|---|---|---|---|
| — | — | aucun problème | — |

## 3. Contenus

| Fichier | Endroit | Problème | Texte |
|---|---|---|---|
| — | — | aucun problème | — |

## 4. Accessibilité (axe) et rendu

| Fichier | Gravité | Règle | Description | Éléments | Premiers éléments concernés |
|---|---|---|---|---|---|
| — | — | — | aucune violation | — | — |

Captures d'écran (largeurs 320, 576, 768, 992, 1248 px) :

- captures/index-320.png
- captures/index-576.png
- captures/index-768.png
- captures/index-992.png
- captures/index-1248.png
- captures/etat-foyer-320.png
- captures/etat-foyer-576.png
- captures/etat-foyer-768.png
- captures/etat-foyer-992.png
- captures/etat-foyer-1248.png
- captures/etat-logement-recap-320.png
- captures/etat-logement-recap-576.png
- captures/etat-logement-recap-768.png
- captures/etat-logement-recap-992.png
- captures/etat-logement-recap-1248.png
- captures/etat-logement-320.png
- captures/etat-logement-576.png
- captures/etat-logement-768.png
- captures/etat-logement-992.png
- captures/etat-logement-1248.png
- captures/etat-ressources-autres-320.png
- captures/etat-ressources-autres-576.png
- captures/etat-ressources-autres-768.png
- captures/etat-ressources-autres-992.png
- captures/etat-ressources-autres-1248.png
- captures/etat-ressources-montants-320.png
- captures/etat-ressources-montants-576.png
- captures/etat-ressources-montants-768.png
- captures/etat-ressources-montants-992.png
- captures/etat-ressources-montants-1248.png
- captures/etat-ressources-situation-320.png
- captures/etat-ressources-situation-576.png
- captures/etat-ressources-situation-768.png
- captures/etat-ressources-situation-992.png
- captures/etat-ressources-situation-1248.png
- captures/etat-ressources-synthese-320.png
- captures/etat-ressources-synthese-576.png
- captures/etat-ressources-synthese-768.png
- captures/etat-ressources-synthese-992.png
- captures/etat-ressources-synthese-1248.png
- captures/etat-ressources-320.png
- captures/etat-ressources-576.png
- captures/etat-ressources-768.png
- captures/etat-ressources-992.png
- captures/etat-ressources-1248.png
- captures/etat-resultat-320.png
- captures/etat-resultat-576.png
- captures/etat-resultat-768.png
- captures/etat-resultat-992.png
- captures/etat-resultat-1248.png

## 5. Documentation lue par composant

Chaque composant du paquet présent dans l'écran doit avoir dans `conception.md` une ligne « Doc lue : reference/doc/composants/<nom-technique>.md » (copie intégrale de la doc du site, `npm run doc`). Un composant sans cette ligne est un écart bloquant.

| Composant | Fichier de doc attendu | Résultat | Détail |
|---|---|---|---|
| Fil d'Ariane (breadcrumb) | reference/doc/composants/breadcrumb.md | conforme | ligne « Doc lue » présente |
| Bouton (button) | reference/doc/composants/button.md | conforme | ligne « Doc lue » présente |
| Case à cocher (checkbox) | reference/doc/composants/checkbox.md | conforme | ligne « Doc lue » présente |
| Bouton FranceConnect (connect) | reference/doc/composants/connect.md | conforme | ligne « Doc lue » présente |
| Gestionnaire de consentement (consent) | reference/doc/composants/consent.md | conforme | ligne « Doc lue » présente |
| Pied de page (footer) | reference/doc/composants/footer.md | conforme | ligne « Doc lue » présente |
| Formulaire (form) | reference/doc/composants/form.md | conforme | ligne « Doc lue » présente |
| En-tête (header) | reference/doc/composants/header.md | conforme | ligne « Doc lue » présente |
| Champ de saisie (input) | reference/doc/composants/input.md | conforme | ligne « Doc lue » présente |
| Lien (link) | reference/doc/composants/link.md | conforme | ligne « Doc lue » présente |
| Modale (modal) | reference/doc/composants/modal.md | conforme | ligne « Doc lue » présente |
| Liens d'évitement (skiplink) | reference/doc/composants/skiplink.md | conforme | ligne « Doc lue » présente |
| Indicateur d'étapes (stepper) | reference/doc/composants/stepper.md | conforme | ligne « Doc lue » présente |
