# Rapport de tests : ecran-test

Généré par tests/check.mjs le 2026-09-30 — DSFR 1.15.3 — fichiers : index.html

**Verdict : NON CONFORME — 2 écart(s) de snippet, 1 classe(s) inconnue(s) ou style(s) en ligne, 1 problème(s) de contenu, 3 violation(s) axe.**

## 1. Fidélité aux snippets officiels

7 bloc(s) de composant analysé(s) contre les extraits des pages d'exemple des composants et des modèles (blocs fonctionnels). Tolérances : textes, valeurs d'attributs, attributs supplémentaires, attributs de comportement propres au champ (autocomplete, spellcheck, required…), niveau des titres h1 à h6, classes d'espacement et de grille, répétitions d'éléments identiques (lignes de liste). Un bloc est conforme s'il correspond à au moins une variante.

| Fichier | Endroit | Composant | Résultat | Variante la plus proche | Détail |
|---|---|---|---|---|---|
| index.html | body > nav.fr-breadcrumb | Fil d'Ariane | conforme | Fil d’Ariane avec liens | identique |
| index.html | body > div.fr-alert:nth-of-type(1) | Alerte | conforme | Titre | identique |
| index.html | body > div.fr-input-group:nth-of-type(2) | Champ de saisie | conforme | Champ de type "text" | identique |
| index.html | body > div.fr-input-group:nth-of-type(2) > div.fr-messages-group | Champ de saisie | conforme | Champ de type "text" (élément imbriqué <div>) | identique |
| index.html | body > button.fr-btn:nth-of-type(1) | Bouton | conforme | Bouton simple | identique |
| index.html | body > button.fr-btn:nth-of-type(2) | Bouton | **écart** | Bouton simple | button.fr-btn : classe fr-btn--rouge en trop |
| index.html | body > button.fr-btn:nth-of-type(3) | Bouton | **écart** | Bouton simple | button.fr-btn : élément <strong> en trop |

## 2. Classes inconnues et styles en ligne

Classes connues : celles des deux CSS du paquet et celles du balisage des extraits officiels.

| Fichier | Endroit | Problème | Valeur |
|---|---|---|---|
| index.html | body > button.fr-btn:nth-of-type(2) | classe fr-* inconnue du DSFR | fr-btn--rouge |

## 3. Contenus

| Fichier | Endroit | Problème | Texte |
|---|---|---|---|
| index.html | body > p | faux-texte | Lorem ipsum dolor sit amet, consectetur adipiscing elit. |

## 4. Accessibilité (axe) et rendu

| Fichier | Gravité | Règle | Description | Éléments | Premiers éléments concernés |
|---|---|---|---|---|---|
| index.html | moderate | heading-order | Heading levels should only increase by one | 1 | h3 |
| index.html | moderate | landmark-one-main | Document should have one main landmark | 1 | html |
| index.html | moderate | region | All page content should be contained by landmarks | 5 | h1 ; #alert-1 ; label |

Captures d'écran (largeurs 320, 576, 768, 992, 1248 px) :

- captures/index-320.png
- captures/index-576.png
- captures/index-768.png
- captures/index-992.png
- captures/index-1248.png
