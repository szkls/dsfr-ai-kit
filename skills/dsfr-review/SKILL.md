---
name: dsfr-review
description: Relire un écran produit dans screens/<nom>/ contre son brief, les fiches de l'équipe et les snippets officiels du DSFR, et produire un rapport d'écarts. À lancer dans un contexte séparé de celui qui a généré l'écran.
---

# dsfr-review

Relecture indépendante d'un écran DSFR. Le relecteur constate et documente ; il ne corrige rien et ne réécrit rien.

## Entrées
Lire, dans cet ordre : `screens/<nom>/brief.md`, `screens/<nom>/conception.md`, `screens/<nom>/index.html` et chaque fichier `etat-*.html`, les fiches de `fiches/` concernées, et l'index `reference/`. Lire aussi AGENTS.md pour les règles absolues.

## Contrôles, dans l'ordre
1. **Fidélité du code** : chaque bloc `fr-` est comparé au snippet d'origine de sa page d'exemple (chemin dans `reference/composants.md`) : structure, classes, attributs. Tout écart est noté.
2. **Bon composant pour l'usage** : le composant choisi est celui que la fiche `fiches/<composant>.md` prescrit pour ce besoin ; à défaut de fiche, la doc officielle via le serveur MCP dsfr.
3. **Fondamentaux** : couleurs par rôle (aucune couleur en dur), typographie, grille, espacements, icônes du DSFR uniquement.
4. **Accessibilité de base** : libellés des champs, attributs ARIA, ordre des titres, contrastes.
5. **Cohérence avec le brief** : chaque critère d'acceptation (rubrique 7) est marqué conforme ou non conforme.
6. **Présence de chaque état** listé au brief (rubrique 5), avec un fichier par état.
7. **Contenus identiques au brief** : aucun texte ajouté, modifié ou inventé.

## Sortie
Écrire `screens/<nom>/review.md` avec un tableau, une ligne par écart :

| N° | Fichier et endroit | Règle enfreinte et source | Correction attendue | Gravité |
|---|---|---|---|---|

- Source : fiche, doc officielle ou snippet, avec le chemin ou le nom.
- Gravité : `bloquant` (non conforme au DSFR ou au brief), `à corriger` (écart mineur), `suggestion`.

Terminer par un verdict d'une ligne : « Conforme », ou « Non conforme : N bloquant(s) ».

## Limite
Deux passes au maximum sur un même écran. Si des bloquants subsistent après la deuxième passe, remettre la main à l'humain avec le dernier rapport, sans troisième passe.

## Pour l'humain
L'utilisateur n'est pas développeur : expliquer chaque étape en une phrase simple, s'arrêter en cas d'écart avec l'attendu.
