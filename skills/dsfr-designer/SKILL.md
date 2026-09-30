---
name: dsfr-designer
description: Concevoir et assembler un écran, une page, une maquette ou un formulaire conforme au DSFR à partir d'un brief situé dans screens/<nom>/brief.md. À utiliser dès qu'on demande de produire un écran DSFR.
---

# dsfr-designer

Méthode pour produire un écran DSFR en HTML pur, du brief à la livraison. Suivre les huit étapes dans l'ordre, sans en sauter. Les détails sont dans `reference/`.

## 1. Lire AGENTS.md
Lire AGENTS.md à la racine et rappeler ses cinq règles absolues en une ligne chacune avant de commencer. Elles s'appliquent à tout ce qui suit.

## 2. Lire et vérifier le brief
Lire `screens/<nom>/brief.md`. Vérifier qu'il contient les sept rubriques de `reference/brief-gabarit.md`, chacune renseignée. S'il en manque une, ou si une rubrique est vide ou ambiguë : poser la question à l'utilisateur et s'arrêter. Ne jamais combler un vide soi-même.

## 3. Choisir le point de départ
Chercher d'abord un écran de `templates/` qui correspond au besoin. Sinon, choisir un modèle de page dans `reference/modeles.md`. Écrire le choix et sa raison dans `screens/<nom>/conception.md` (section « Point de départ »).

## 4. Lister les composants
Pour chaque besoin du brief, choisir le composant dans `reference/composants.md`. Lire la fiche `fiches/<composant>.md` quand elle existe : elle prime sur l'intuition. En cas de doute sur l'usage ou une variante, interroger le serveur MCP dsfr (`get_component_doc`, `search_components`). Écrire la liste dans `conception.md` (section « Composants ») avec, pour chacun : la raison du choix et la variante retenue.

## 5. Assembler l'écran
Partir de `screens/_gabarit.html` (chemins CSS/JS déjà corrects depuis `screens/<nom>/` après ajustement d'un niveau : `../../node_modules/...`). Pour chaque composant, ouvrir sa page d'exemple (chemin donné par l'index), copier le bloc HTML exact de la variante retenue, puis adapter uniquement les contenus du brief.

Interdit : écrire un composant de mémoire ; ajouter une classe hors préfixe `fr-` ; mettre une couleur, une taille ou un espacement en dur (style inline ou CSS maison) ; inventer un texte.

## 6. Produire un fichier par état
Pour chaque état listé au brief (rubrique 5) : `index.html` pour l'état initial, puis `etat-<nom>.html` pour chaque autre état. Les liens entre états suivent le parcours décrit au brief.

## 7. Autocontrôle
Relire chaque bloc `fr-` de chaque fichier contre son snippet d'origine dans la page d'exemple : structure, classes, attributs. Lancer les tests de `tests/` s'il y en a. Corriger avant de livrer.

## 8. Livrer
Compléter `conception.md` avec une note de conception d'une demi-page : composants retenus et écartés, écarts assumés par rapport au modèle, questions ouvertes. Puis proposer à l'utilisateur d'ouvrir l'écran sur `http://localhost:8000/screens/<nom>/` avec `npm run serve`.

## Pour l'humain
L'utilisateur n'est pas développeur : expliquer chaque étape en une phrase simple, s'arrêter en cas d'écart avec l'attendu. La relecture se fait ensuite avec la skill `dsfr-review`, dans un contexte séparé.
