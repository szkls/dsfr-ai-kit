---
name: dsfr-designer
description: Concevoir et assembler un écran, une page, une maquette ou un formulaire conforme au DSFR à partir d'un brief situé dans screens/<nom>/brief.md. À utiliser dès qu'on demande de produire un écran DSFR.
---

# dsfr-designer

Méthode pour produire un écran DSFR en HTML pur, du brief à la livraison. Suivre les neuf étapes dans l'ordre, sans en sauter. Les détails sont dans `reference/`. La documentation officielle du site systeme-de-design.gouv.fr est copiée intégralement dans `reference/doc/` (un fichier par composant, fondamental et modèle) : c'est là qu'on la lit, pas de mémoire, pas en ligne.

## 1. Lire AGENTS.md
Lire AGENTS.md à la racine et rappeler ses cinq règles absolues en une ligne chacune avant de commencer. Elles s'appliquent à tout ce qui suit.

## 2. Lire et vérifier le brief
Lire `screens/<nom>/brief.md`. Vérifier qu'il contient les sept rubriques de `reference/brief-gabarit.md`, chacune renseignée. S'il en manque une, ou si une rubrique est vide ou ambiguë : poser la question à l'utilisateur et s'arrêter. Ne jamais combler un vide soi-même.

## 3. Lire les fondamentaux, une fois par écran
Avant tout choix de composant, lire en entier les cinq fichiers de `reference/doc/fondamentaux/` : `couleurs.md`, `typographie.md`, `grille-et-points-de-rupture.md`, `espacement.md`, `icone.md` (et `pictogramme.md` si l'écran utilise des pictogrammes). Écrire dans `screens/<nom>/conception.md` une section « Fondamentaux » avec, pour chacun, une ligne « Doc lue : reference/doc/fondamentaux/<nom>.md » suivie des règles de ce fondamental appliquées à cet écran (par exemple : rôles de couleur employés, échelle de titres, colonnes de grille aux points de rupture, classes d'espacement, icônes utilisées).

## 4. Choisir le point de départ
Chercher d'abord un écran de `templates/` qui correspond au besoin. Sinon, choisir un modèle de page dans `reference/modeles.md`, puis lire en entier sa doc dans `reference/doc/modeles/<nom>.md` (pages types et blocs fonctionnels). Écrire le choix et sa raison dans `conception.md` (section « Point de départ »), avec une ligne « Doc lue : reference/doc/modeles/<nom>.md » et les règles du modèle appliquées (structure imposée, éléments obligatoires, écarts assumés).

## 5. Lister les composants et lire leur doc en entier
Pour chaque besoin du brief, choisir le composant dans `reference/composants.md` (la colonne « Doc du site » donne son fichier de doc). Pour chaque composant retenu, dans cet ordre :
1. lire en entier `reference/doc/composants/<nom-technique>.md` (présentation, design, code, accessibilité) ;
2. lire la fiche `fiches/<nom-technique>.md` quand elle existe : une fiche validée prime sur la doc en cas de désaccord, une fiche en brouillon la complète ;
3. écrire dans `conception.md` (section « Composants »), pour ce composant, une ligne « Doc lue : reference/doc/composants/<nom-technique>.md » suivie des règles de la doc appliquées à cet écran : la variante choisie et pourquoi, les règles de contenu suivies, les points d'accessibilité retenus.

Sans cette ligne, le composant ne peut pas être utilisé : le contrôle 5 des tests le signale comme écart bloquant. Le serveur MCP dsfr ne sert plus qu'à vérifier une nouveauté, par exemple un composant ou une variante absents de `reference/doc/` ; dans ce cas, le dire à l'utilisateur et proposer `npm run doc`.

## 6. Assembler l'écran
Partir de `screens/_gabarit.html` (chemins CSS/JS déjà corrects depuis `screens/<nom>/` après ajustement d'un niveau : `../../node_modules/...`). Pour chaque composant, ouvrir sa page d'exemple (chemin donné par l'index), copier le bloc HTML exact de la variante retenue, puis adapter uniquement les contenus du brief. Le snippet n'est copié qu'après lecture complète de la doc du composant (étape 5).

Interdit : écrire un composant de mémoire ; ajouter une classe hors préfixe `fr-` ; mettre une couleur, une taille ou un espacement en dur (style inline ou CSS maison) ; inventer un texte.

## 7. Produire un fichier par état
Pour chaque état listé au brief (rubrique 5) : `index.html` pour l'état initial, puis `etat-<nom>.html` pour chaque autre état. Les liens entre états suivent le parcours décrit au brief.

## 8. Autocontrôle
Relire chaque bloc `fr-` de chaque fichier contre son snippet d'origine dans la page d'exemple : structure, classes, attributs. Vérifier que chaque composant présent a sa ligne « Doc lue » dans `conception.md`. Lancer `npm run check -- <nom>` et corriger avant de livrer.

## 9. Livrer
Compléter `conception.md` avec une note de conception d'une demi-page : composants retenus et écartés, écarts assumés par rapport au modèle, questions ouvertes. Puis proposer à l'utilisateur d'ouvrir l'écran sur `http://localhost:8000/screens/<nom>/` avec `npm run serve`.

## Gabarit des lignes « Doc lue » dans conception.md
```
## Fondamentaux
- Doc lue : reference/doc/fondamentaux/couleurs.md — règles appliquées : …
- Doc lue : reference/doc/fondamentaux/typographie.md — règles appliquées : …
(idem grille-et-points-de-rupture, espacement, icone)

## Point de départ
- Doc lue : reference/doc/modeles/<nom>.md — règles appliquées : …

## Composants
### Bouton (button)
- Doc lue : reference/doc/composants/button.md
- Variante choisie et pourquoi : …
- Règles de contenu suivies : …
- Points d'accessibilité : …
```

## Pour l'humain
L'utilisateur n'est pas développeur : expliquer chaque étape en une phrase simple, s'arrêter en cas d'écart avec l'attendu. La relecture se fait ensuite avec la skill `dsfr-review`, dans un contexte séparé.
