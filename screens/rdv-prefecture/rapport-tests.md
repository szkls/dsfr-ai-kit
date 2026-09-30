# Rapport de tests : rdv-prefecture

Généré par tests/check.mjs le 2026-09-30 — DSFR 1.15.3 — fichiers : index.html, etat-erreur-serveur.html, etat-erreurs-saisie.html, etat-succes.html

**Verdict : NON CONFORME — 0 écart(s) de snippet, 0 classe(s) inconnue(s) ou style(s) en ligne, 0 problème(s) de contenu, 0 violation(s) axe, 10 composant(s) sans ligne « Doc lue ».**

## 1. Fidélité aux snippets officiels

80 bloc(s) de composant analysé(s) contre les extraits des pages d'exemple des composants et des modèles (blocs fonctionnels). Tolérances : textes, valeurs d'attributs, attributs supplémentaires, attributs de comportement ou d'état (autocomplete, spellcheck, required, id, aria-current, aria-labelledby…), niveau des titres h1 à h6, classes d'espacement et de grille, répétitions d'éléments identiques (lignes de liste), sous-composant imbriqué interchangeable (un lien à la place d'un bouton), chacun étant comparé à part contre ses propres variantes. Un bloc est conforme s'il correspond à au moins une variante.

| Fichier | Endroit | Composant | Résultat | Variante la plus proche | Détail |
|---|---|---|---|---|---|
| index.html | body > header.fr-header | En-tête | conforme | Header sans navigation | identique |
| index.html | body > header.fr-header > div > div > div > div.fr-enlarge-link > div:nth-of-type(1) > div > p.fr-logo | En-tête | conforme | Header minimal (élément imbriqué <p>) | identique |
| index.html | body > div > nav.fr-breadcrumb | Fil d'Ariane | conforme | Fil d’Ariane avec liens | identique |
| index.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) | Bloc fonctionnel de civilité | conforme | Demande de situation familiale | identique |
| index.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) > div:nth-of-type(1) > div.fr-input-group | Champ de saisie | conforme | Champ de type "text" | identique |
| index.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) > div:nth-of-type(1) > div.fr-input-group > div.fr-messages-group | Champ de saisie | conforme | Champ de type "text" (élément imbriqué <div>) | identique |
| index.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) > div:nth-of-type(2) > div.fr-input-group | Champ de saisie | conforme | Champ de type "text" | identique |
| index.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) > div:nth-of-type(2) > div.fr-input-group > div.fr-messages-group | Champ de saisie | conforme | Champ de type "text" (élément imbriqué <div>) | identique |
| index.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) > div.fr-messages-group:nth-of-type(3) | Bloc fonctionnel de civilité | conforme | Demande du sexe (élément imbriqué <div>) | identique |
| index.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > div.fr-input-group:nth-of-type(1) | Champ de saisie | conforme | Champ avec texte additionnel | identique |
| index.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > div.fr-input-group:nth-of-type(1) > div.fr-messages-group | Champ de saisie | conforme | Champ de type "text" (élément imbriqué <div>) | identique |
| index.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > div.fr-input-group:nth-of-type(2) | Champ de saisie | conforme | Champ avec texte additionnel | identique |
| index.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > div.fr-input-group:nth-of-type(2) > div.fr-messages-group | Champ de saisie | conforme | Champ de type "text" (élément imbriqué <div>) | identique |
| index.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > fieldset.fr-fieldset:nth-of-type(2) | Formulaire | conforme | Ensemble de boutons radio | identique |
| index.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > fieldset.fr-fieldset:nth-of-type(2) > div.fr-messages-group:nth-of-type(4) | Formulaire | conforme | Ensemble de champs de saisie (élément imbriqué <div>) | identique |
| index.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > div.fr-input-group:nth-of-type(3) | Champ de saisie | conforme | Champ avec texte additionnel | identique |
| index.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > div.fr-input-group:nth-of-type(3) > div.fr-messages-group | Champ de saisie | conforme | Champ de type "text" (élément imbriqué <div>) | identique |
| index.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > div.fr-checkbox-group:nth-of-type(4) | Case à cocher | conforme | Case à cocher seule | identique |
| index.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > div.fr-checkbox-group:nth-of-type(4) > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| index.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > ul.fr-btns-group | Bouton | conforme | Groupe de boutons inline à partir du breakpoint SM | identique |
| index.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > ul.fr-btns-group > li > button.fr-btn | Bouton | conforme | Bouton simple | identique |
| index.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > p:nth-of-type(2) > a.fr-link | Lien | conforme | Lien seul | identique |
| index.html | body > footer.fr-footer | Pied de page | conforme | Pied de page minimal | identique |
| index.html | body > footer.fr-footer > div > div:nth-of-type(1) > div.fr-enlarge-link:nth-of-type(1) > a > p.fr-logo | Pied de page | conforme | Pied de page minimal (élément imbriqué <p>) | identique |
| etat-erreur-serveur.html | body > header.fr-header | En-tête | conforme | Header sans navigation | identique |
| etat-erreur-serveur.html | body > header.fr-header > div > div > div > div.fr-enlarge-link > div:nth-of-type(1) > div > p.fr-logo | En-tête | conforme | Header minimal (élément imbriqué <p>) | identique |
| etat-erreur-serveur.html | body > div > nav.fr-breadcrumb | Fil d'Ariane | conforme | Fil d’Ariane avec liens | identique |
| etat-erreur-serveur.html | body > main > div:nth-of-type(1) > div > div > div.fr-alert | Alerte | conforme | Erreur détectée dans le formulaire | identique |
| etat-erreur-serveur.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) | Bloc fonctionnel de civilité | conforme | Demande de situation familiale | identique |
| etat-erreur-serveur.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) > div:nth-of-type(1) > div.fr-input-group | Champ de saisie | conforme | Champ de type "text" | identique |
| etat-erreur-serveur.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) > div:nth-of-type(1) > div.fr-input-group > div.fr-messages-group | Champ de saisie | conforme | Champ de type "text" (élément imbriqué <div>) | identique |
| etat-erreur-serveur.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) > div:nth-of-type(2) > div.fr-input-group | Champ de saisie | conforme | Champ de type "text" | identique |
| etat-erreur-serveur.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) > div:nth-of-type(2) > div.fr-input-group > div.fr-messages-group | Champ de saisie | conforme | Champ de type "text" (élément imbriqué <div>) | identique |
| etat-erreur-serveur.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) > div.fr-messages-group:nth-of-type(3) | Bloc fonctionnel de civilité | conforme | Demande du sexe (élément imbriqué <div>) | identique |
| etat-erreur-serveur.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > div.fr-input-group:nth-of-type(1) | Champ de saisie | conforme | Champ avec texte additionnel | identique |
| etat-erreur-serveur.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > div.fr-input-group:nth-of-type(1) > div.fr-messages-group | Champ de saisie | conforme | Champ de type "text" (élément imbriqué <div>) | identique |
| etat-erreur-serveur.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > div.fr-input-group:nth-of-type(2) | Champ de saisie | conforme | Champ avec texte additionnel | identique |
| etat-erreur-serveur.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > div.fr-input-group:nth-of-type(2) > div.fr-messages-group | Champ de saisie | conforme | Champ de type "text" (élément imbriqué <div>) | identique |
| etat-erreur-serveur.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > fieldset.fr-fieldset:nth-of-type(2) | Formulaire | conforme | Ensemble de boutons radio | identique |
| etat-erreur-serveur.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > fieldset.fr-fieldset:nth-of-type(2) > div.fr-messages-group:nth-of-type(4) | Formulaire | conforme | Ensemble de champs de saisie (élément imbriqué <div>) | identique |
| etat-erreur-serveur.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > div.fr-input-group:nth-of-type(3) | Champ de saisie | conforme | Champ avec texte additionnel | identique |
| etat-erreur-serveur.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > div.fr-input-group:nth-of-type(3) > div.fr-messages-group | Champ de saisie | conforme | Champ de type "text" (élément imbriqué <div>) | identique |
| etat-erreur-serveur.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > div.fr-checkbox-group:nth-of-type(4) | Case à cocher | conforme | Case à cocher seule | identique |
| etat-erreur-serveur.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > div.fr-checkbox-group:nth-of-type(4) > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule (élément imbriqué <div>) | identique |
| etat-erreur-serveur.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > ul.fr-btns-group | Bouton | conforme | Groupe de boutons inline à partir du breakpoint SM | identique |
| etat-erreur-serveur.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > ul.fr-btns-group > li > button.fr-btn | Bouton | conforme | Bouton simple | identique |
| etat-erreur-serveur.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > p:nth-of-type(2) > a.fr-link | Lien | conforme | Lien seul | identique |
| etat-erreur-serveur.html | body > footer.fr-footer | Pied de page | conforme | Pied de page minimal | identique |
| etat-erreur-serveur.html | body > footer.fr-footer > div > div:nth-of-type(1) > div.fr-enlarge-link:nth-of-type(1) > a > p.fr-logo | Pied de page | conforme | Pied de page minimal (élément imbriqué <p>) | identique |
| etat-erreurs-saisie.html | body > header.fr-header | En-tête | conforme | Header sans navigation | identique |
| etat-erreurs-saisie.html | body > header.fr-header > div > div > div > div.fr-enlarge-link > div:nth-of-type(1) > div > p.fr-logo | En-tête | conforme | Header minimal (élément imbriqué <p>) | identique |
| etat-erreurs-saisie.html | body > div > nav.fr-breadcrumb | Fil d'Ariane | conforme | Fil d’Ariane avec liens | identique |
| etat-erreurs-saisie.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) | Bloc fonctionnel de civilité | conforme | Demande de situation familiale | identique |
| etat-erreurs-saisie.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) > div:nth-of-type(1) > div.fr-input-group | Champ de saisie | conforme | Champ en erreur avec texte d'erreur | identique |
| etat-erreurs-saisie.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) > div:nth-of-type(1) > div.fr-input-group > div.fr-messages-group | Champ de saisie | conforme | Champ en erreur avec texte d'erreur (élément imbriqué <div>) | identique |
| etat-erreurs-saisie.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) > div:nth-of-type(2) > div.fr-input-group | Champ de saisie | conforme | Champ en erreur avec texte d'erreur | identique |
| etat-erreurs-saisie.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) > div:nth-of-type(2) > div.fr-input-group > div.fr-messages-group | Champ de saisie | conforme | Champ en erreur avec texte d'erreur (élément imbriqué <div>) | identique |
| etat-erreurs-saisie.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > fieldset.fr-fieldset:nth-of-type(1) > div.fr-messages-group:nth-of-type(3) | Bloc fonctionnel de civilité | conforme | Demande du sexe (élément imbriqué <div>) | identique |
| etat-erreurs-saisie.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > div.fr-input-group:nth-of-type(1) | Bloc fonctionnel de demande d'email | conforme | Demande d'une adresse électronique - Erreur | identique |
| etat-erreurs-saisie.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > div.fr-input-group:nth-of-type(1) > div.fr-messages-group | Bloc fonctionnel de demande d'email | conforme | Demande d'une adresse électronique - Erreur (élément imbriqué <div>) | identique |
| etat-erreurs-saisie.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > div.fr-input-group:nth-of-type(2) | Bloc fonctionnel de demande d'email | conforme | Demande d'une adresse électronique - Erreur | identique |
| etat-erreurs-saisie.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > div.fr-input-group:nth-of-type(2) > div.fr-messages-group | Bloc fonctionnel de demande d'email | conforme | Demande d'une adresse électronique - Erreur (élément imbriqué <div>) | identique |
| etat-erreurs-saisie.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > fieldset.fr-fieldset:nth-of-type(2) | Bouton radio | conforme | Ensemble de boutons radio avec erreur | identique |
| etat-erreurs-saisie.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > fieldset.fr-fieldset:nth-of-type(2) > div.fr-messages-group:nth-of-type(4) | Bouton radio | conforme | Ensemble de boutons radio avec erreur (élément imbriqué <div>) | identique |
| etat-erreurs-saisie.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > div.fr-input-group:nth-of-type(3) | Bloc fonctionnel de demande d'email | conforme | Demande d'une adresse électronique - Erreur | identique |
| etat-erreurs-saisie.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > div.fr-input-group:nth-of-type(3) > div.fr-messages-group | Bloc fonctionnel de demande d'email | conforme | Demande d'une adresse électronique - Erreur (élément imbriqué <div>) | identique |
| etat-erreurs-saisie.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > div.fr-checkbox-group:nth-of-type(4) | Case à cocher | conforme | Case à cocher seule avec erreur | identique |
| etat-erreurs-saisie.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > div.fr-checkbox-group:nth-of-type(4) > div.fr-messages-group | Case à cocher | conforme | Case à cocher seule avec erreur (élément imbriqué <div>) | identique |
| etat-erreurs-saisie.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > ul.fr-btns-group | Bouton | conforme | Groupe de boutons inline à partir du breakpoint SM | identique |
| etat-erreurs-saisie.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > ul.fr-btns-group > li > button.fr-btn | Bouton | conforme | Bouton simple | identique |
| etat-erreurs-saisie.html | body > main > div:nth-of-type(2) > div > div > div > div > div > form > p:nth-of-type(2) > a.fr-link | Lien | conforme | Lien seul | identique |
| etat-erreurs-saisie.html | body > footer.fr-footer | Pied de page | conforme | Pied de page minimal | identique |
| etat-erreurs-saisie.html | body > footer.fr-footer > div > div:nth-of-type(1) > div.fr-enlarge-link:nth-of-type(1) > a > p.fr-logo | Pied de page | conforme | Pied de page minimal (élément imbriqué <p>) | identique |
| etat-succes.html | body > header.fr-header | En-tête | conforme | Header sans navigation | identique |
| etat-succes.html | body > header.fr-header > div > div > div > div.fr-enlarge-link > div:nth-of-type(1) > div > p.fr-logo | En-tête | conforme | Header minimal (élément imbriqué <p>) | identique |
| etat-succes.html | body > div > nav.fr-breadcrumb | Fil d'Ariane | conforme | Fil d’Ariane avec liens | identique |
| etat-succes.html | body > main > div:nth-of-type(1) > div > div > div.fr-alert | Alerte | conforme | Succès de l'envoi | identique |
| etat-succes.html | body > main > div:nth-of-type(2) > div > div > div > div > div > p > a.fr-link | Lien | conforme | Lien seul | identique |
| etat-succes.html | body > footer.fr-footer | Pied de page | conforme | Pied de page minimal | identique |
| etat-succes.html | body > footer.fr-footer > div > div:nth-of-type(1) > div.fr-enlarge-link:nth-of-type(1) > a > p.fr-logo | Pied de page | conforme | Pied de page minimal (élément imbriqué <p>) | identique |

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
- captures/etat-erreur-serveur-320.png
- captures/etat-erreur-serveur-576.png
- captures/etat-erreur-serveur-768.png
- captures/etat-erreur-serveur-992.png
- captures/etat-erreur-serveur-1248.png
- captures/etat-erreurs-saisie-320.png
- captures/etat-erreurs-saisie-576.png
- captures/etat-erreurs-saisie-768.png
- captures/etat-erreurs-saisie-992.png
- captures/etat-erreurs-saisie-1248.png
- captures/etat-succes-320.png
- captures/etat-succes-576.png
- captures/etat-succes-768.png
- captures/etat-succes-992.png
- captures/etat-succes-1248.png

## 5. Documentation lue par composant

Chaque composant du paquet présent dans l'écran doit avoir dans `conception.md` une ligne « Doc lue : reference/doc/composants/<nom-technique>.md » (copie intégrale de la doc du site, `npm run doc`). Un composant sans cette ligne est un écart bloquant.

| Composant | Fichier de doc attendu | Résultat | Détail |
|---|---|---|---|
| Alerte (alert) | reference/doc/composants/alert.md | **écart** | ligne « Doc lue » absente de conception.md |
| Fil d'Ariane (breadcrumb) | reference/doc/composants/breadcrumb.md | **écart** | ligne « Doc lue » absente de conception.md |
| Bouton (button) | reference/doc/composants/button.md | **écart** | ligne « Doc lue » absente de conception.md |
| Case à cocher (checkbox) | reference/doc/composants/checkbox.md | **écart** | ligne « Doc lue » absente de conception.md |
| Pied de page (footer) | reference/doc/composants/footer.md | **écart** | ligne « Doc lue » absente de conception.md |
| Formulaire (form) | reference/doc/composants/form.md | **écart** | ligne « Doc lue » absente de conception.md |
| En-tête (header) | reference/doc/composants/header.md | **écart** | ligne « Doc lue » absente de conception.md |
| Champ de saisie (input) | reference/doc/composants/input.md | **écart** | ligne « Doc lue » absente de conception.md |
| Lien (link) | reference/doc/composants/link.md | **écart** | ligne « Doc lue » absente de conception.md |
| Bouton radio (radio) | reference/doc/composants/radio.md | **écart** | ligne « Doc lue » absente de conception.md |
