# fiches/

Règles d'usage par composant DSFR, écrites à la main par l'équipe. Elles complètent la documentation officielle, elles ne la remplacent pas.

## Le gabarit
Chaque fiche suit `_gabarit.md` et s'appelle `fiches/<nom-technique>.md` (le nom technique est celui de `reference/composants.md`). Rubriques, dans l'ordre : quand l'utiliser ; quand ne pas l'utiliser et quoi prendre à la place ; quelle variante dans quel cas ; règles de contenu ; points d'accessibilité à ne pas rater ; erreurs vues sur nos projets ; références.

## Usage seulement, pas de factuel
Une fiche ne contient que des règles d'usage. Tout ce qui est factuel et regénérable (chemin de la page d'exemple, liste des variantes, dépendances CSS, version du DSFR) vit dans `reference/` et n'est pas recopié ici, pour ne pas diverger à la prochaine montée de version.

## Cycle brouillon puis validé
1. **Brouillon** : la fiche est rédigée depuis la documentation officielle (serveur MCP dsfr), reformulée sans rien inventer. Statut : `brouillon (à valider par Louis)` avec la date.
2. **Validé** : Louis relit, corrige, complète « Erreurs vues sur nos projets » si besoin, puis passe le statut à `validé` avec la date.
3. Les skills (dsfr-designer, dsfr-review) lisent les fiches quel que soit leur statut, mais une fiche validée prime sur la documentation officielle en cas de désaccord ; une fiche en brouillon ne fait que la compléter.
