# Kit de génération d'écrans DSFR

## Ce dépôt
Ce dépôt sert à produire des écrans conformes au Système de Design de l'État (DSFR) à partir d'une user story, en HTML DSFR pur, puis à les livrer dans Figma. Le DSFR officiel est installé en dépendance npm épinglée dans node_modules/@gouvfr/dsfr ; c'est la seule source de vérité pour le code des composants.

## Règles absolues
1. Aucun markup DSFR écrit de mémoire : chaque composant est copié depuis node_modules/@gouvfr/dsfr/example (ou depuis un écran de templates/) puis adapté au contenu.
2. Aucune classe CSS hors du DSFR (préfixe fr-), aucune couleur, taille ou espacement en dur.
3. Aucun contenu inventé : les textes viennent du brief ; s'il manque quelque chose, demander avant de générer.
4. Chaque écran vit dans screens/<nom>/ avec son brief.md, son index.html et un fichier HTML par état.
5. La documentation officielle se consulte via le serveur MCP dsfr ; les règles d'usage propres à l'équipe sont dans fiches/.

## Démarche
Concevoir : skills/dsfr-designer/SKILL.md. Relire : skills/dsfr-review/SKILL.md. Livrer dans Figma : skills/dsfr-figma/SKILL.md. Monter de version : skills/dsfr-update/SKILL.md.

## Où sont les choses
fiches/ règles d'usage par composant · templates/ écrans de référence · screens/ écrans produits · tests/ contrôles · scripts/ outillage.

## Pour l'humain
L'utilisateur n'est pas développeur : expliquer chaque étape en une phrase simple, s'arrêter en cas d'écart avec l'attendu.
