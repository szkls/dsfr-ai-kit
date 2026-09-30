---
name: dsfr-review
description: Relire un écran produit dans screens/<nom>/ contre son brief, les fiches de l'équipe, la copie intégrale de la documentation officielle (reference/doc/) et les snippets officiels du DSFR, et produire un rapport d'écarts. À lancer dans un contexte séparé de celui qui a généré l'écran.
---

# dsfr-review

Relecture indépendante d'un écran DSFR. Le relecteur constate et documente ; il ne corrige rien et ne réécrit rien.

## Entrées
Lire, dans cet ordre : `screens/<nom>/brief.md`, `screens/<nom>/conception.md`, `screens/<nom>/index.html` et chaque fichier `etat-*.html`, les fiches de `fiches/` concernées, l'index `reference/` (la colonne « Doc du site » de `reference/composants.md` donne le fichier de doc de chaque composant), puis la documentation copiée dans `reference/doc/` : le fichier complet de chaque composant présent dans l'écran, les cinq fondamentaux (`couleurs.md`, `typographie.md`, `grille-et-points-de-rupture.md`, `espacement.md`, `icone.md`) et le modèle de page retenu dans `reference/doc/modeles/`. Lire aussi AGENTS.md pour les règles absolues. Le serveur MCP dsfr (SocialGouv) ne sert qu'à vérifier une nouveauté absente de `reference/doc/`.

**Avec le serveur MCP dsfr-kit** (quand ses outils sont disponibles) : `get_component(nom)` renvoie pour chaque composant la doc complète, la fiche et les snippets exacts à comparer au code de l'écran ; `get_fundamental(nom)` les cinq fondamentaux ; `get_page_model(nom)` le modèle retenu ; `search_doc(texte)` un point transverse ; `check_screen(nom)` le dernier rapport de tests. Sans le serveur, lire les mêmes fichiers dans `reference/`, `fiches/` et `templates/`. Les contrôles et les gravités ne changent pas.

## Contrôles, dans l'ordre
1. **Fidélité du code** : chaque bloc `fr-` est comparé au snippet d'origine de sa page d'exemple (chemin dans `reference/composants.md`) : structure, classes, attributs. Tout écart est noté.
2. **Bon composant et bon usage, contre la doc complète** : pour chaque composant présent, relire en entier `reference/doc/composants/<nom-technique>.md` et vérifier l'écran contre chacune de ses parties : présentation (quand l'utiliser, comment l'utiliser, règles éditoriales, « à faire / à ne pas faire »), design (variantes, tailles, états, personnalisation), code (structure, classes, attributs), accessibilité (règles, restitution, critères RGAA). Une fiche `fiches/<nom-technique>.md` validée prime sur la doc en cas de désaccord ; une fiche en brouillon la complète. Vérifier aussi que `conception.md` porte pour ce composant une ligne « Doc lue : reference/doc/composants/<nom-technique>.md » et que les règles qu'elle annonce sont bien appliquées dans le code.
3. **Fondamentaux, contre les cinq fichiers de `reference/doc/fondamentaux/`** : couleurs (rôles et tokens, aucune couleur en dur, contrastes), typographie (échelle de titres et de textes, classes officielles), grille et points de rupture (conteneurs, colonnes, comportement mobile), espacements (classes d'espacement uniquement, valeurs de l'échelle), icônes et pictogrammes (uniquement ceux du DSFR, usage décoratif ou porteur de sens). Vérifier les lignes « Doc lue » de la section « Fondamentaux » de `conception.md`.
4. **Accessibilité de base** : libellés des champs, attributs ARIA, ordre des titres, contrastes, lien d'évitement, en complément de la partie accessibilité de chaque doc de composant.
5. **Cohérence avec le brief** : chaque critère d'acceptation (rubrique 7) est marqué conforme ou non conforme.
6. **Présence de chaque état** listé au brief (rubrique 5), avec un fichier par état.
7. **Contenus identiques au brief** : aucun texte ajouté, modifié ou inventé.

## Sortie
Écrire `screens/<nom>/review.md` avec un tableau, une ligne par écart :

| N° | Fichier et endroit | Règle enfreinte et source | Correction attendue | Gravité |
|---|---|---|---|---|

- Source : citer le fichier de doc et la section exacte, par exemple « reference/doc/composants/button.md, section Design › Tailles » ou « reference/doc/fondamentaux/espacement.md, section Échelle » ; sinon la fiche (`fiches/<nom>.md`, rubrique) ou le snippet (chemin de la page d'exemple et nom de la variante).
- Gravité : `bloquant` (non conforme au DSFR ou au brief), `à corriger` (écart mineur), `suggestion`.
- Un composant présent dans l'écran sans ligne « Doc lue » dans `conception.md` est un écart `bloquant` (même règle que le contrôle 5 des tests).

Terminer par un verdict d'une ligne : « Conforme », ou « Non conforme : N bloquant(s) ».

## Limite
Deux passes au maximum sur un même écran. Si des bloquants subsistent après la deuxième passe, remettre la main à l'humain avec le dernier rapport, sans troisième passe.

## Pour l'humain
L'utilisateur n'est pas développeur : expliquer chaque étape en une phrase simple, s'arrêter en cas d'écart avec l'attendu.
