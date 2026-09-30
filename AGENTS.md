# Kit de génération d'écrans DSFR

## Ce dépôt
Ce dépôt sert à produire des écrans conformes au Système de Design de l'État (DSFR) à partir d'une user story, en HTML DSFR pur, puis à les livrer dans Figma. Le DSFR officiel est installé en dépendance npm épinglée dans node_modules/@gouvfr/dsfr ; c'est la seule source de vérité pour le code des composants.

## Règles absolues
1. Aucun markup DSFR écrit de mémoire : chaque composant est copié depuis node_modules/@gouvfr/dsfr/example (ou depuis un écran de templates/) puis adapté au contenu.
2. Aucune classe CSS hors du DSFR (préfixe fr-), aucune couleur, taille ou espacement en dur.
3. Aucun contenu inventé : les textes viennent du brief ; s'il manque quelque chose, demander avant de générer.
4. Chaque écran vit dans screens/<nom>/ avec son brief.md, son index.html et un fichier HTML par état.
5. La documentation officielle est copiée intégralement dans reference/doc/ (un fichier par composant, fondamental et modèle, régénéré par npm run doc) : on la lit en entier pour chaque composant employé, et on le note dans conception.md (« Doc lue : … »). Le serveur MCP dsfr (SocialGouv) ne sert qu'à vérifier une nouveauté absente de cette copie. Les règles d'usage propres à l'équipe sont dans fiches/.

## Comment lire le kit
Quand le serveur MCP local « dsfr-kit » (mcp/) est disponible, les composants, fondamentaux, modèles et templates se lisent par ses outils : get_component (doc complète, fiche et snippets exacts en une réponse), get_fundamental, get_page_model, get_template, search_doc, check_screen. Sinon, on lit directement les fichiers de reference/, fiches/ et templates/ comme indiqué dans les skills. Les deux chemins lisent les mêmes fichiers : les règles ne changent pas.

## Démarche
Concevoir : skills/dsfr-designer/SKILL.md. Relire : skills/dsfr-review/SKILL.md. Livrer dans Figma : skills/dsfr-figma/SKILL.md. Monter de version : skills/dsfr-update/SKILL.md.

## Où sont les choses
fiches/ règles d'usage par composant · templates/ écrans de référence · screens/ écrans produits · tests/ contrôles · scripts/ outillage · mcp/ serveur MCP local du kit (npm run mcp).

## Pour l'humain
L'utilisateur n'est pas développeur : expliquer chaque étape en une phrase simple, s'arrêter en cas d'écart avec l'attendu.
