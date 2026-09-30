# Couleur

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/couleurs · https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/couleurs/utilisation-des-couleurs-dans-le-dsfr · https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/couleurs/rechercher-une-couleur
> Section : fondamentaux · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

Les couleurs du Système de Design de l'État sont issues de la [Marque de l’État](https://www.info.gouv.fr/marque-de-letat) . Elles font partie prenante de l’identité du DSFR et leur bon usage est essentiel pour maintenir l’harmonie visuelle ainsi que les repères de navigation des usagers.

## Palette

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/couleurs

La palette de couleurs du système de design de l’État est définie par [la charte graphique de l'État](https://www.info.gouv.fr/marque-de-letat) . Elle permet de créer une cohérence entre les interfaces et d’offrir une expérience optimale à l’utilisateur. Leur respect renforce la reconnaissance de la parole de l’État. Chaque couleur est représentée par un “design token”, c’est-à-dire un nom transverse au design (à travers les bibliothèques Sketch et Figma) et au code.

### Convention de nommage des tokens

La nomenclature des tokens d’options est la suivante :

COULEUR- NOM - VARIANTE - INDICE - ÉTAT

- La couleur indique la nuance (sur l’arc en ciel) : bleu, vert, rouge, gris…
- Le nom est celui hérité de la charte de l'État, le cas échéant.
- La variante indique si la couleur est une couleur de référence (“main”), une variante pour thème clair (“sun”) ou thème sombre (“moon”). La plupart des couleurs n’ont pas de variante.
- L’indice est le niveau de luminosité de la couleur, et sert à vérifier l’accessibilité des associations de couleurs. Consultez [l’article de présentation détaillée du système de couleurs](https://www.systeme-de-design.gouv.fr/version-courante/fr/a-propos/articles-et-actualites/refonte-du-systeme-de-couleur) pour en savoir plus.
- L'état indique, le cas échéant, la variation de la couleur au survol ou en état actif.

À chaque token est rattaché une valeur hexadécimale, une valeur RGB et une valeur HSL. Par exemple, la couleur de référence pour le vert “Tilleul Verveine” :

**green-tilleul-verveine-main-707**

#B7A73F 
rgb(183,167,63) 
hsl(52deg 48.8% 48.2%)

**hover** 
#a19237 
rgb(161,146,55)

**active** 
#908331 
rgb(144,131,49)

L’utilisation de la palette de couleurs est obligatoire pour l’ensemble des sites. Il est en conséquence prohibé d’utiliser d’autres couleurs que celles proposées.

La palette de couleur du Système de Design de l’État comprend deux parties : la palette “thème clair” et la palette “thème sombre”. Chacune de ces parties se décompose en catégories :

- [couleurs primaires](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/couleurs#couleurs-primaires)
- [couleurs neutres (“neutral”)](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/couleurs#couleurs-neutres)
- [couleurs système](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/couleurs#couleurs-systeme)
- [couleurs illustratives](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/couleurs#couleurs-illustratives)

#### Couleurs primaires

Construites à partir des deux grandes couleurs de la marque de l'État (bleu et rouge, le blanc étant intégrés aux neutres), elles sont utilisées pour marquer l’identité de l’État dans des composants qui véhiculent l’image de la marque (comme le bloc marque), ou sur lesquels il est nécessaire d’attirer l’attention de l’utilisateur, tels que les éléments cliquables ou les états actifs.

*(Démonstration interactive : https://www.systeme-de-design.gouv.fr/static/html/v1.14/palette/primaire.html)*

#### Couleurs neutres

Couleurs de base utilisées dans les typographies, fonds, contours et séparateurs dans la majorité des composants. Elles sont notamment utilisées dans les éléments non cliquables et pour représenter les états inactifs.

*(Démonstration interactive : https://www.systeme-de-design.gouv.fr/static/html/v1.14/palette/neutre.html)*

#### Couleurs système

Couleurs utilisées exclusivement pour représenter des états et des statuts.

*(Démonstration interactive : https://www.systeme-de-design.gouv.fr/static/html/v1.14/palette/systeme.html)*

#### Couleurs illustratives

Couleurs complémentaires de la charte de l'État, pouvant servir à la composition d’illustration. Dans le contexte du Système de Design de l'État, ces couleurs sont également utilisables pour accentuer des composants, c’est-à-dire varier la couleur de certains éléments (texte, fonds, bordures) pour apporter de la diversité ou une hiérarchie visuelle.

L’utilisation des couleurs illustratives est possible sur certains composants : Voir la liste des composants accentuables.

*(Démonstration interactive : https://www.systeme-de-design.gouv.fr/static/html/v1.14/palette/accent.html)*

Le Système de Design de l'État propose des composants adaptés à deux modes de couleurs :

- Le thème clair : pour être accessible sur fond clair.
- Le thème sombre : pour être accessible sur fond foncé.

L’utilisation du thème sombre est notamment recommandé pour réduire la consommation d'énergie et réduire la fatigue oculaire.

> **Information**
> Il n'est pas autorisé de mélanger les couleurs du thème clair et celles du thème sombre.

Les correspondances suivantes sont intégrées en code, en tant que sous-couche technique. Pour appliquer une couleur à un contexte, préférer l’utilisation des tokens de décision, qui intègrent la correspondance thème clair / thème sombre.

#### Couleurs primaires

**Bleu France**

| Correspondance | Thème clair | Thème sombre |
|---|---|---|
| **strong** | `$blue-france-sun-113` | `$blue-france-625` |
| **softest** | `$blue-france-850` | `$blue-france-200` |
| **light** | `$blue-france-925` | `$blue-france-125` |
| **lighter** | `$blue-france-950` | `$blue-france-100` |
| **lightest** | `$blue-france-975` | `$blue-france-75` |
| **main** | `$blue-france-main-525` | `$blue-france-main-525` |
| **inverted** | `$blue-france-975` | `$blue-france-113` |

**Rouge Marianne**

| Correspondance | Thème clair | Thème sombre |
|---|---|---|
| **strong** | `$red-marianne-425` | `$red-marianne-625` |
| **softest** | `$red-marianne-850` | `$red-marianne-200` |
| **light** | `$red-marianne-925` | `$red-marianne-125` |
| **lighter** | `$red-marianne-950` | `$red-marianne-100` |
| **lightest** | `$red-marianne-975` | `$red-marianne-75` |
| **main** | `$red-marianne-main-472` | `$red-marianne-main-472` |
| **inverted** | `$blue-france-975` | `$blue-france-113` |

#### Couleur neutre

**Gris**

| Correspondance | Thème clair | Thème sombre |
|---|---|---|
| **absolute-black** | `$grey-0` | `$grey-1000` |
| **black** | `$grey-50` | `$grey-1000` |
| **darkest** | `$grey-75` | `$grey-975` |
| **darker** | `$grey-100` | `$grey-950` |
| **dark** | `$grey-125` | `$grey-925` |
| **strongest** | `$grey-200` | `$grey-850` |
| **strong** | `$grey-425` | `$grey-625` |
| **soft** | `$grey-625` | `$grey-425` |
| **softest** | `$grey-850` | `$grey-200` |
| **light** | `$grey-925` | `$grey-125` |
| **lighter** | `$grey-950` | `$grey-100` |
| **lightest** | `$grey-975` | `$grey-75` |
| **white** | `$grey-1000` | `$grey-50` |
| **border** | `$grey-900` | `$grey-175` |
| **raised** | `$grey-1000` | `$grey-75` |
| **overlap** | `$grey-1000` | `$grey-100` |
| **lifted** | `$grey-1000` | `$grey-75` |
| **alt-raised** | `$grey-975` | `$grey-100` |
| **alt-overlap** | `$grey-975` | `$grey-125` |
| **contrast-raised** | `$grey-950` | `$grey-125` |
| **contrast-overlap** | `$grey-950` | `$grey-150` |

#### Couleurs système

Les couleurs systèmes sont : Info, warning, error, success.

**Exemple avec la couleur Info**

| Correspondance | Thème clair | Thème sombre |
|---|---|---|
| **strong** | `$info-425` | `$info-625` |
| **softest** | `$info-850` | `$info-200` |
| **light** | `$info-925` | `$info-125` |
| **lighter** | `$info-950` | `$info-100` |
| **lightest** | `$info-975` | `$info-75` |
| **main** | `$info-main-525` | `$info-main-525` |

#### Couleurs illustratives

Les couleurs illustratives sont : green-tilleul-verveine, green-bourgeon, green-emeraude, green-menthe, green-archipel, blue-ecume, blue-cumulus, purple-glycine, pink-macaron, pink-tuile, yellow-tournesol, yellow-moutarde, orange-terre-battue, brown-cafe-creme, brown-caramel, brown-opera, beige-gris-galet.

**Déclinaisons des couleurs illustratives**

| Correspondance | Thème clair | Thème sombre |
|---|---|---|
| **strong** | /couleur sun/ | /couleur moon/ |
| **softest** | `$xx-850` | `$xx-200` |
| **light** | `$xx-925` | `$xx-125` |
| **lighter** | `$xx-950` | `$xx-100` |
| **lightest** | `$xx-975` | `$xx-75` |
| **main** | /couleur main/ | /couleur main/ |

### Règles d’usage

#### Dans les composants existants

Au sein de l’existant, des tokens de décision sont systématiquement appliqués, en vue d’optimiser l’affichage des composants mais également la compréhension des interfaces. Pour comprendre le rôle et le fonctionnement des tokens de décisions, [consultez la page dédiée](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/couleurs/utilisation-des-couleurs-dans-le-dsfr) .

Il n’est pas permis de remplacer un token de décision au sein d’un composant si cela n’est pas indiqué dans la documentation (section “Accentuation” dans les pages de composants).

#### Accentuation

L’accentuation des composants est réglementée : un tableau récapitulatif des éléments qu’il est possible d’accentuer sur chaque composant est détaillé dans la page de documentation (paragraphe ‘Personnalisation > Couleurs d’accent’).

À l’heure actuelle, seuls les composants suivants sont ouverts à l’accentuation :

- [Badge](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge) (Fond, texte)
- [Carte](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/carte) (Fond blanc ou gris)
- [Citation](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/citation) (Icône)
- [Mise en avant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-avant) (Fond et bordure)
- [Mise en exergue](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-exergue) (Bordure)
- [Tableau](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tableau) (Fond et bordure)
- [Tag](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tag) (Fond , texte et icône)
- [Tuile](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tuile) (Fond blanc ou gris)

D’autres composants seront ajoutés à ce périmètre au fur et à mesure des mises à jour du Système de Design de l'État. N’hésitez pas à nous faire des suggestions sur le sujet, sur le Slack ou en ouvrant un ticket.

#### Au-delà du Système de Design de l'État

Si vous êtes amenés à créer des pages uniques ou des composants inédits, prenez soin d’utiliser au maximum les [tokens de décisions](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/couleurs/utilisation-des-couleurs-dans-le-dsfr) . Si ce n’est pas possible, merci de respecter les correspondances clair / sombre indiquées ci-dessus.

#### Hors des composants

La couleur est utile en dehors des composants :

- Pour les fonds de page, il existe des tokens de décision dédiés.
- Pour les pictogrammes illustratifs, utiliser les tokens appropriés.
- Pour les illustrations, il est important en premier lieu de sélectionner des couleurs harmonieuses et correspondant à la thématique. Éviter un nombre de teintes trop important (moins de 5) qui compliqueront la conception et la force de l’illustration.

### Accessibilité

Vos interfaces doivent être conformes aux exigences du [Référentiel Général d’Amélioration de l’Accessibilité - RGAA dans sa version 4](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/) :

- Toute information visuelle (exemple couleur ou illustration) doit être accompagnée d’une information textuelle dans le code (exemple classe, titre, description ou modificateur). Ces règles sont détaillées au cas par cas dans la section Accessibilité de chaque composant ;
- Vous devez respecter des ratios de contraste accessibles ;
- L’ensemble des composants proposés respecte les normes exigées par le RGAA, mais lors de vos modifications de couleurs, vous devrez vérifier vos propres contrastes. Vous pouvez utiliser des outils en ligne ou des plugins comme [Stark](https://www.getstark.co/) ou [Cluse](https://cluse.cc/) .

Pour connaître la réglementation, vous pouvez vous rendre sur ce site : [Critères et tests - RGAA](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode-rgaa/criteres/#topic3)

## Usage

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/couleurs/utilisation-des-couleurs-dans-le-dsfr

La palette de couleurs du Système de Design de l'État n’est pas utilisée à l'état brut dans les composants : elle sert de fondation à une nomenclature contextuelle, exprimée par des design tokens de décision.

> **Information**
> On distingue deux typologies de “design token” que nous utilisons pour les couleurs : option et décision. Les “options” sont les tokens de couleurs hors contexte, la palette brute à votre disposition. En pratique, les “décisions” recensent les usages contextuels de ces options dans le Système de Design (par exemple, sur un fond, une bordure, un texte).

![](https://www.systeme-de-design.gouv.fr/v1.15/asset/core/color/usage/color/Couleurs_model_483484ec62.png)

### Convention de nommage des tokens

La nomenclature des tokens de décisions est la suivante :

CONTEXTE - USAGE - VARIANTE - COULEUR

Par exemple : BACKGROUND - ACTION - LOW - BLUE-FRANCE soit **`$background-action-low-blue-france`**

- Le contexte est choisi parmi les suivants : fond, bordure, texte (les icônes sont assimilées au texte quand elles y sont associées), et illustration
- L’usage fait référence à la fonction signifiée par l’élément, que ce soit un potentiel (action), un état (actif, désactivé, erreur, succès, etc.) ou une hiérarchie (défaut, titre, libellé, contraste, etc.)
- La variante (optionnel) nuance l’importance de l'élément lorsque c’est nécessaire : important (high) ou mineur (low).
- La couleur indique quelle famille de couleurs est utilisée par le token : les neutres (nuances de gris), le bleu France, une des couleurs système.

Chaque token fait référence à deux couleurs de la palette d’options : une pour le thème clair, et une pour le thème sombre. Il y a une unique paire de nuances pour chaque couleur. Dans notre exemple du token `$background-action-low-blue-france`, il s’agit du couple `$blue-france-925` et `$blue-france-125`.

[Arborescence de tous les tokens de décision (sur Figma)](https://www.figma.com/file/yo9dg7nZb69TAd2Hh9N1xK/Tokens-v2)

### La palette de décisions

#### Les couleurs de fond

**Les couleurs de fond**

| Description de l’usage | Token | Thème clair | Thème sombre |
|---|---|---|---|
| Fond de blocs ou de sections <br> Exemple : pied de page | `$background-alt-grey` | `$grey-975` | `$grey-75` |
| Fond de bloc de page aux couleurs de l’État <br> Exemple : lettre d’information et réseaux sociaux. | `$background-alt-blue-france` | `$blue-france-975` | `$blue-france-75` |
| Fond de composant contrastant <br> Exemples : mise en avant, champ de saisie | `$background-contrast-grey` | `$grey-950` | `$grey-100` |
| Fond de composant en relief <br> Exemples : en-tête, menu déroulant | `$background-elevated-grey` | `$grey-1000` | `$grey-75` |
| Fond de composant cliquable important et portant l’identité de l’État <br> Exemple : bouton primaire | `$background-action-high-blue-france` | `$blue-france-sun-113` | `$blue-france-625` |
| Fond de composant cliquable mineur et portant l’identité de l’État <br> Exemple : tag cliquable | `$background-action-low-blue-france` | `$blue-france-925` | `$blue-france-125` |
| Fond de composant actif et portant l’identité de l’État <br> Exemple : pagination | `$background-active-blue-france` | `$blue-france-sun-113` | `$blue-france-625` |
| Fond de composant ouvert et portant l’identité de l’État <br> Exemple : élément de navigation | `$background-open-blue-france` | `$blue-france-925` | `$blue-france-125` |
| Fond de composant désactivé <br> Exemples : boutons, tag | `$background-disabled-grey` | `$grey-925` | `$grey-125` |
| Fond de composant en état d’erreur <br> Exemple : alerte | `$background-flat-error` | `$error-425` | `$error-625` |
| Fond de composant en état d’avertissement <br> Exemple : alerte | `$background-flat-warning` | `$warning-425` | `$warning-625` |
| Fond de composant en état de succès <br> Exemple : alerte | `$background-flat-success` | `$success-425` | `$success-625` |
| Fond de composant en état d’information <br> Exemple : alerte | `$background-flat-info` | `$info-425` | `$info-625` |
| Fonds de page et de composant par défaut <br> Exemples : pied de page, modale, onglet | `$background-default-grey` | `$grey-1000` | `$grey-50` |

#### Les couleurs de texte

> **Information**
> Quand elles sont associées à du texte, les icônes sont assimilées à celui-ci.

**Les couleurs de texte**

| Description de l’usage | Token | Thème clair | Thème sombre |
|---|---|---|---|
| Titre ou élément équivalent <br> Exemples : titres éditoriaux, titre de tableau | `$text-title-grey` | `$grey-50` | `$grey-1000` |
| Titre portant l’identité de l’État | `$text-title-blue-france` | `$blue-france-sun-113` | `$blue-france-625` |
| Corps de texte | `$text-default-grey` | `$grey-200` | `$grey-850` |
| Texte de mentions ou de détail | `$text-mention-grey` | `$grey-425` | `$grey-625` |
| Texte de libellé <br> Exemple : éléments de formulaire | `$text-label-grey` | `$grey-50` | `$grey-1000` |
| Texte cliquable important et portant l’identité de l’État <br> Exemple : bouton secondaire | `$text-action-high-blue-france` | `$blue-france-sun-113` | `$blue-france-625` |
| Texte cliquable important <br> Exemple : accordéon, élément de navigation | `$text-action-high-grey` | `$grey-50` | `$grey-1000` |
| Texte ou icône contrastant en nuances de gris <br> Exemple : alerte | `$text-inverted-grey` | `$grey-1000` | `$grey-50` |
| Texte ou icône contrastant portant l’identité de l’État <br> Exemples : bouton primaire, pagination, tag | `$text-inverted-blue-france` | `$blue-france-975` | `$blue-france-113` |
| Texte actif portant l’identité de l’État <br> Exemples : élément de navigation, interrupteur | `$text-active-blue-france` | `$blue-france-sun-113` | `$blue-france-625` |
| Texte actif neutre <br> Exemple : fil d’Ariane | `$text-active-grey` | `$grey-50` | `$grey-1000` |
| Texte désactivé | `$text-disabled-grey` | `$grey-625` | `$grey-425` |
| Texte ou icône en état d’erreur <br> Exemples : champ de saisie, élément de formulaire | `$text-default-error` | `$error-425` | `$error-625` |
| Texte ou icône en état de succès <br> Exemples : champ de saisie, élément de formulaire | `$text-default-success` | `$success-425` | `$success-625` |

#### Les couleurs d’illustrations

**Les couleurs d'illustrations**

| Description de l’usage | Token | Thème clair | Thème sombre |
|---|---|---|---|
| Couleur dominante d’illustration (60%) <br> Exemple : illustration des options de paramètres d’affichage | `$artwork-major-blue-france` | `$blue-france-sun-113` | `$blue-france-625` |
| Icône portant l’identité de l’État ou couleur mineure d’illustration (30%) <br> Exemple : citation | `$artwork-minor-blue-france` | `$blue-france-main-525` | `$blue-france-main-525` |

### Les usages

Il est recommandé d’utiliser autant que possible les tokens de décision lors de la création d'écrans à partir du Système de Design de l'État:

- Si le bon token n’existe pas, se référer aux couleurs d’options, en prenant garde à respecter les correspondance thème clair / thème sombre. Vous pouvez aussi nous signaler votre nouveau cas d’usage sur Tchap, avec un ticket ou lors des bureaux !
- Les tokens sont présents dans libraires Sketch et Figma, ainsi que dans le code, avec à chaque fois de petites spécificités liées à l’outil.
- Certains éléments portant des tokens de décision peuvent être accentués, c’est-à-dire changés de couleur parmi la palette illustrative. Référez-vous à la documentation de chaque composant pour connaître les couleurs utilisables !

#### Accentuation des composants

L’accentuation des composants est réglementée : un tableau récapitulatif des éléments qu’il est possible d’accentuer sur chaque composant est détaillé dans la page de documentation (paragraphe ‘Personnalisation > Couleurs d’accent’).

À l’heure actuelle, seuls les composants suivants sont ouverts à l’accentuation :

- Badge (Fond)
- Carte (Fond blanc ou gris)
- Citation (Icône)
- Mise en avant (Fond et bordure)
- Mise en exergue (Bordure)
- Tag - cliquable (Fond , texte et icône)
- Tuile (Fond blanc ou gris)

D’autres composants seront ajoutés à ce périmètre au fur et à mesure des mises à jour du Système de Design de l'État. N’hésitez pas à nous faire des suggestions sur le sujet, sur le Tchap ou [en ouvrant un ticket](https://gouvfr.atlassian.net/servicedesk/customer/portals) .

## Recherche

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/couleurs/rechercher-une-couleur

Rechercher une couleur

Filtrer par contexte

Tous

Fonds

Textes

Bordures

Artwork

#### Background

##### default

- **grey**  
  fr-background-default--grey  
  - background
- default  
  fr-background-default--grey

##### alt

- **grey**  
  fr-background-alt--grey  
  - background
- alt  
  fr-background-alt--grey

- **blue-france**  
  fr-background-alt--blue-france  
  - background
- alt  
  fr-background-alt--blue-france

- **red-marianne**  
  fr-background-alt--red-marianne  
  - background
- alt  
  fr-background-alt--red-marianne

- **green-tilleul-verveine**  
  fr-background-alt--green-tilleul-verveine  
  - background
- alt  
  fr-background-alt--green-tilleul-verveine

- **green-bourgeon**  
  fr-background-alt--green-bourgeon  
  - background
- alt  
  fr-background-alt--green-bourgeon

- **green-emeraude**  
  fr-background-alt--green-emeraude  
  - background
- alt  
  fr-background-alt--green-emeraude

- **green-menthe**  
  fr-background-alt--green-menthe  
  - background
- alt  
  fr-background-alt--green-menthe

- **green-archipel**  
  fr-background-alt--green-archipel  
  - background
- alt  
  fr-background-alt--green-archipel

- **blue-ecume**  
  fr-background-alt--blue-ecume  
  - background
- alt  
  fr-background-alt--blue-ecume

- **blue-cumulus**  
  fr-background-alt--blue-cumulus  
  - background
- alt  
  fr-background-alt--blue-cumulus

- **purple-glycine**  
  fr-background-alt--purple-glycine  
  - background
- alt  
  fr-background-alt--purple-glycine

- **pink-macaron**  
  fr-background-alt--pink-macaron  
  - background
- alt  
  fr-background-alt--pink-macaron

- **pink-tuile**  
  fr-background-alt--pink-tuile  
  - background
- alt  
  fr-background-alt--pink-tuile

- **yellow-tournesol**  
  fr-background-alt--yellow-tournesol  
  - background
- alt  
  fr-background-alt--yellow-tournesol

- **yellow-moutarde**  
  fr-background-alt--yellow-moutarde  
  - background
- alt  
  fr-background-alt--yellow-moutarde

- **orange-terre-battue**  
  fr-background-alt--orange-terre-battue  
  - background
- alt  
  fr-background-alt--orange-terre-battue

- **brown-cafe-creme**  
  fr-background-alt--brown-cafe-creme  
  - background
- alt  
  fr-background-alt--brown-cafe-creme

- **brown-caramel**  
  fr-background-alt--brown-caramel  
  - background
- alt  
  fr-background-alt--brown-caramel

- **brown-opera**  
  fr-background-alt--brown-opera  
  - background
- alt  
  fr-background-alt--brown-opera

- **beige-gris-galet**  
  fr-background-alt--beige-gris-galet  
  - background
- alt  
  fr-background-alt--beige-gris-galet

##### contrast

- **grey**  
  fr-background-contrast--grey  
  - background
- contrast  
  fr-background-contrast--grey

- **blue-france**  
  fr-background-contrast--blue-france  
  - background
- contrast  
  fr-background-contrast--blue-france

- **red-marianne**  
  fr-background-contrast--red-marianne  
  - background
- contrast  
  fr-background-contrast--red-marianne

- **green-tilleul-verveine**  
  fr-background-contrast--green-tilleul-verveine  
  - background
- contrast  
  fr-background-contrast--green-tilleul-verveine

- **green-bourgeon**  
  fr-background-contrast--green-bourgeon  
  - background
- contrast  
  fr-background-contrast--green-bourgeon

- **green-emeraude**  
  fr-background-contrast--green-emeraude  
  - background
- contrast  
  fr-background-contrast--green-emeraude

- **green-menthe**  
  fr-background-contrast--green-menthe  
  - background
- contrast  
  fr-background-contrast--green-menthe

- **green-archipel**  
  fr-background-contrast--green-archipel  
  - background
- contrast  
  fr-background-contrast--green-archipel

- **blue-ecume**  
  fr-background-contrast--blue-ecume  
  - background
- contrast  
  fr-background-contrast--blue-ecume

- **blue-cumulus**  
  fr-background-contrast--blue-cumulus  
  - background
- contrast  
  fr-background-contrast--blue-cumulus

- **purple-glycine**  
  fr-background-contrast--purple-glycine  
  - background
- contrast  
  fr-background-contrast--purple-glycine

- **pink-macaron**  
  fr-background-contrast--pink-macaron  
  - background
- contrast  
  fr-background-contrast--pink-macaron

- **pink-tuile**  
  fr-background-contrast--pink-tuile  
  - background
- contrast  
  fr-background-contrast--pink-tuile

- **yellow-tournesol**  
  fr-background-contrast--yellow-tournesol  
  - background
- contrast  
  fr-background-contrast--yellow-tournesol

- **yellow-moutarde**  
  fr-background-contrast--yellow-moutarde  
  - background
- contrast  
  fr-background-contrast--yellow-moutarde

- **orange-terre-battue**  
  fr-background-contrast--orange-terre-battue  
  - background
- contrast  
  fr-background-contrast--orange-terre-battue

- **brown-cafe-creme**  
  fr-background-contrast--brown-cafe-creme  
  - background
- contrast  
  fr-background-contrast--brown-cafe-creme

- **brown-caramel**  
  fr-background-contrast--brown-caramel  
  - background
- contrast  
  fr-background-contrast--brown-caramel

- **brown-opera**  
  fr-background-contrast--brown-opera  
  - background
- contrast  
  fr-background-contrast--brown-opera

- **beige-gris-galet**  
  fr-background-contrast--beige-gris-galet  
  - background
- contrast  
  fr-background-contrast--beige-gris-galet

- **info**  
  fr-background-contrast--info  
  - background
- contrast  
  fr-background-contrast--info

- **success**  
  fr-background-contrast--success  
  - background
- contrast  
  fr-background-contrast--success

- **warning**  
  fr-background-contrast--warning  
  - background
- contrast  
  fr-background-contrast--warning

- **error**  
  fr-background-contrast--error  
  - background
- contrast  
  fr-background-contrast--error

##### flat

- **grey**  
  fr-background-flat--grey  
  - background
- flat  
  fr-background-flat--grey

- **blue-france**  
  fr-background-flat--blue-france  
  - background
- flat  
  fr-background-flat--blue-france

- **red-marianne**  
  fr-background-flat--red-marianne  
  - background
- flat  
  fr-background-flat--red-marianne

- **green-tilleul-verveine**  
  fr-background-flat--green-tilleul-verveine  
  - background
- flat  
  fr-background-flat--green-tilleul-verveine

- **green-bourgeon**  
  fr-background-flat--green-bourgeon  
  - background
- flat  
  fr-background-flat--green-bourgeon

- **green-emeraude**  
  fr-background-flat--green-emeraude  
  - background
- flat  
  fr-background-flat--green-emeraude

- **green-menthe**  
  fr-background-flat--green-menthe  
  - background
- flat  
  fr-background-flat--green-menthe

- **green-archipel**  
  fr-background-flat--green-archipel  
  - background
- flat  
  fr-background-flat--green-archipel

- **blue-ecume**  
  fr-background-flat--blue-ecume  
  - background
- flat  
  fr-background-flat--blue-ecume

- **blue-cumulus**  
  fr-background-flat--blue-cumulus  
  - background
- flat  
  fr-background-flat--blue-cumulus

- **purple-glycine**  
  fr-background-flat--purple-glycine  
  - background
- flat  
  fr-background-flat--purple-glycine

- **pink-macaron**  
  fr-background-flat--pink-macaron  
  - background
- flat  
  fr-background-flat--pink-macaron

- **pink-tuile**  
  fr-background-flat--pink-tuile  
  - background
- flat  
  fr-background-flat--pink-tuile

- **yellow-tournesol**  
  fr-background-flat--yellow-tournesol  
  - background
- flat  
  fr-background-flat--yellow-tournesol

- **yellow-moutarde**  
  fr-background-flat--yellow-moutarde  
  - background
- flat  
  fr-background-flat--yellow-moutarde

- **orange-terre-battue**  
  fr-background-flat--orange-terre-battue  
  - background
- flat  
  fr-background-flat--orange-terre-battue

- **brown-cafe-creme**  
  fr-background-flat--brown-cafe-creme  
  - background
- flat  
  fr-background-flat--brown-cafe-creme

- **brown-caramel**  
  fr-background-flat--brown-caramel  
  - background
- flat  
  fr-background-flat--brown-caramel

- **brown-opera**  
  fr-background-flat--brown-opera  
  - background
- flat  
  fr-background-flat--brown-opera

- **beige-gris-galet**  
  fr-background-flat--beige-gris-galet  
  - background
- flat  
  fr-background-flat--beige-gris-galet

- **info**  
  fr-background-flat--info  
  - background
- flat  
  fr-background-flat--info

- **success**  
  fr-background-flat--success  
  - background
- flat  
  fr-background-flat--success

- **warning**  
  fr-background-flat--warning  
  - background
- flat  
  fr-background-flat--warning

- **error**  
  fr-background-flat--error  
  - background
- flat  
  fr-background-flat--error

##### action-high

- **grey**  
  fr-background-action-high--grey  
  - background
- action-high  
  fr-background-action-high--grey

- **blue-france**  
  fr-background-action-high--blue-france  
  - background
- action-high  
  fr-background-action-high--blue-france

- **red-marianne**  
  fr-background-action-high--red-marianne  
  - background
- action-high  
  fr-background-action-high--red-marianne

- **green-tilleul-verveine**  
  fr-background-action-high--green-tilleul-verveine  
  - background
- action-high  
  fr-background-action-high--green-tilleul-verveine

- **green-bourgeon**  
  fr-background-action-high--green-bourgeon  
  - background
- action-high  
  fr-background-action-high--green-bourgeon

- **green-emeraude**  
  fr-background-action-high--green-emeraude  
  - background
- action-high  
  fr-background-action-high--green-emeraude

- **green-menthe**  
  fr-background-action-high--green-menthe  
  - background
- action-high  
  fr-background-action-high--green-menthe

- **green-archipel**  
  fr-background-action-high--green-archipel  
  - background
- action-high  
  fr-background-action-high--green-archipel

- **blue-ecume**  
  fr-background-action-high--blue-ecume  
  - background
- action-high  
  fr-background-action-high--blue-ecume

- **blue-cumulus**  
  fr-background-action-high--blue-cumulus  
  - background
- action-high  
  fr-background-action-high--blue-cumulus

- **purple-glycine**  
  fr-background-action-high--purple-glycine  
  - background
- action-high  
  fr-background-action-high--purple-glycine

- **pink-macaron**  
  fr-background-action-high--pink-macaron  
  - background
- action-high  
  fr-background-action-high--pink-macaron

- **pink-tuile**  
  fr-background-action-high--pink-tuile  
  - background
- action-high  
  fr-background-action-high--pink-tuile

- **yellow-tournesol**  
  fr-background-action-high--yellow-tournesol  
  - background
- action-high  
  fr-background-action-high--yellow-tournesol

- **yellow-moutarde**  
  fr-background-action-high--yellow-moutarde  
  - background
- action-high  
  fr-background-action-high--yellow-moutarde

- **orange-terre-battue**  
  fr-background-action-high--orange-terre-battue  
  - background
- action-high  
  fr-background-action-high--orange-terre-battue

- **brown-cafe-creme**  
  fr-background-action-high--brown-cafe-creme  
  - background
- action-high  
  fr-background-action-high--brown-cafe-creme

- **brown-caramel**  
  fr-background-action-high--brown-caramel  
  - background
- action-high  
  fr-background-action-high--brown-caramel

- **brown-opera**  
  fr-background-action-high--brown-opera  
  - background
- action-high  
  fr-background-action-high--brown-opera

- **beige-gris-galet**  
  fr-background-action-high--beige-gris-galet  
  - background
- action-high  
  fr-background-action-high--beige-gris-galet

- **info**  
  fr-background-action-high--info  
  - background
- action-high  
  fr-background-action-high--info

- **success**  
  fr-background-action-high--success  
  - background
- action-high  
  fr-background-action-high--success

- **warning**  
  fr-background-action-high--warning  
  - background
- action-high  
  fr-background-action-high--warning

- **error**  
  fr-background-action-high--error  
  - background
- action-high  
  fr-background-action-high--error

##### action-low

- **blue-france**  
  fr-background-action-low--blue-france  
  - background
- action-low  
  fr-background-action-low--blue-france

- **red-marianne**  
  fr-background-action-low--red-marianne  
  - background
- action-low  
  fr-background-action-low--red-marianne

- **green-tilleul-verveine**  
  fr-background-action-low--green-tilleul-verveine  
  - background
- action-low  
  fr-background-action-low--green-tilleul-verveine

- **green-bourgeon**  
  fr-background-action-low--green-bourgeon  
  - background
- action-low  
  fr-background-action-low--green-bourgeon

- **green-emeraude**  
  fr-background-action-low--green-emeraude  
  - background
- action-low  
  fr-background-action-low--green-emeraude

- **green-menthe**  
  fr-background-action-low--green-menthe  
  - background
- action-low  
  fr-background-action-low--green-menthe

- **green-archipel**  
  fr-background-action-low--green-archipel  
  - background
- action-low  
  fr-background-action-low--green-archipel

- **blue-ecume**  
  fr-background-action-low--blue-ecume  
  - background
- action-low  
  fr-background-action-low--blue-ecume

- **blue-cumulus**  
  fr-background-action-low--blue-cumulus  
  - background
- action-low  
  fr-background-action-low--blue-cumulus

- **purple-glycine**  
  fr-background-action-low--purple-glycine  
  - background
- action-low  
  fr-background-action-low--purple-glycine

- **pink-macaron**  
  fr-background-action-low--pink-macaron  
  - background
- action-low  
  fr-background-action-low--pink-macaron

- **pink-tuile**  
  fr-background-action-low--pink-tuile  
  - background
- action-low  
  fr-background-action-low--pink-tuile

- **yellow-tournesol**  
  fr-background-action-low--yellow-tournesol  
  - background
- action-low  
  fr-background-action-low--yellow-tournesol

- **yellow-moutarde**  
  fr-background-action-low--yellow-moutarde  
  - background
- action-low  
  fr-background-action-low--yellow-moutarde

- **orange-terre-battue**  
  fr-background-action-low--orange-terre-battue  
  - background
- action-low  
  fr-background-action-low--orange-terre-battue

- **brown-cafe-creme**  
  fr-background-action-low--brown-cafe-creme  
  - background
- action-low  
  fr-background-action-low--brown-cafe-creme

- **brown-caramel**  
  fr-background-action-low--brown-caramel  
  - background
- action-low  
  fr-background-action-low--brown-caramel

- **brown-opera**  
  fr-background-action-low--brown-opera  
  - background
- action-low  
  fr-background-action-low--brown-opera

- **beige-gris-galet**  
  fr-background-action-low--beige-gris-galet  
  - background
- action-low  
  fr-background-action-low--beige-gris-galet

#### Text

##### default

- **grey**  
  fr-text-default--grey  
  - text
- default  
  fr-text-default--grey

- **info**  
  fr-text-default--info  
  - text
- default  
  fr-text-default--info

- **success**  
  fr-text-default--success  
  - text
- default  
  fr-text-default--success

- **warning**  
  fr-text-default--warning  
  - text
- default  
  fr-text-default--warning

- **error**  
  fr-text-default--error  
  - text
- default  
  fr-text-default--error

##### title

- **grey**  
  fr-text-title--grey  
  - text
- title  
  fr-text-title--grey

- **blue-france**  
  fr-text-title--blue-france  
  - text
- title  
  fr-text-title--blue-france

- **red-marianne**  
  fr-text-title--red-marianne  
  - text
- title  
  fr-text-title--red-marianne

##### label

- **grey**  
  fr-text-label--grey  
  - text
- label  
  fr-text-label--grey

- **blue-france**  
  fr-text-label--blue-france  
  - text
- label  
  fr-text-label--blue-france

- **red-marianne**  
  fr-text-label--red-marianne  
  - text
- label  
  fr-text-label--red-marianne

- **green-tilleul-verveine**  
  fr-text-label--green-tilleul-verveine  
  - text
- label  
  fr-text-label--green-tilleul-verveine

- **green-bourgeon**  
  fr-text-label--green-bourgeon  
  - text
- label  
  fr-text-label--green-bourgeon

- **green-emeraude**  
  fr-text-label--green-emeraude  
  - text
- label  
  fr-text-label--green-emeraude

- **green-menthe**  
  fr-text-label--green-menthe  
  - text
- label  
  fr-text-label--green-menthe

- **green-archipel**  
  fr-text-label--green-archipel  
  - text
- label  
  fr-text-label--green-archipel

- **blue-ecume**  
  fr-text-label--blue-ecume  
  - text
- label  
  fr-text-label--blue-ecume

- **blue-cumulus**  
  fr-text-label--blue-cumulus  
  - text
- label  
  fr-text-label--blue-cumulus

- **purple-glycine**  
  fr-text-label--purple-glycine  
  - text
- label  
  fr-text-label--purple-glycine

- **pink-macaron**  
  fr-text-label--pink-macaron  
  - text
- label  
  fr-text-label--pink-macaron

- **pink-tuile**  
  fr-text-label--pink-tuile  
  - text
- label  
  fr-text-label--pink-tuile

- **yellow-tournesol**  
  fr-text-label--yellow-tournesol  
  - text
- label  
  fr-text-label--yellow-tournesol

- **yellow-moutarde**  
  fr-text-label--yellow-moutarde  
  - text
- label  
  fr-text-label--yellow-moutarde

- **orange-terre-battue**  
  fr-text-label--orange-terre-battue  
  - text
- label  
  fr-text-label--orange-terre-battue

- **brown-cafe-creme**  
  fr-text-label--brown-cafe-creme  
  - text
- label  
  fr-text-label--brown-cafe-creme

- **brown-caramel**  
  fr-text-label--brown-caramel  
  - text
- label  
  fr-text-label--brown-caramel

- **brown-opera**  
  fr-text-label--brown-opera  
  - text
- label  
  fr-text-label--brown-opera

- **beige-gris-galet**  
  fr-text-label--beige-gris-galet  
  - text
- label  
  fr-text-label--beige-gris-galet

##### mention

- **grey**  
  fr-text-mention--grey  
  - text
- mention  
  fr-text-mention--grey

##### inverted

- **grey**  
  fr-text-inverted--grey  
  - text
- inverted  
  fr-text-inverted--grey

- **blue-france**  
  fr-text-inverted--blue-france  
  - text
- inverted  
  fr-text-inverted--blue-france

- **red-marianne**  
  fr-text-inverted--red-marianne  
  - text
- inverted  
  fr-text-inverted--red-marianne

- **info**  
  fr-text-inverted--info  
  - text
- inverted  
  fr-text-inverted--info

- **success**  
  fr-text-inverted--success  
  - text
- inverted  
  fr-text-inverted--success

- **warning**  
  fr-text-inverted--warning  
  - text
- inverted  
  fr-text-inverted--warning

- **error**  
  fr-text-inverted--error  
  - text
- inverted  
  fr-text-inverted--error

- **green-tilleul-verveine**  
  fr-text-inverted--green-tilleul-verveine  
  - text
- inverted  
  fr-text-inverted--green-tilleul-verveine

- **green-bourgeon**  
  fr-text-inverted--green-bourgeon  
  - text
- inverted  
  fr-text-inverted--green-bourgeon

- **green-emeraude**  
  fr-text-inverted--green-emeraude  
  - text
- inverted  
  fr-text-inverted--green-emeraude

- **green-menthe**  
  fr-text-inverted--green-menthe  
  - text
- inverted  
  fr-text-inverted--green-menthe

- **green-archipel**  
  fr-text-inverted--green-archipel  
  - text
- inverted  
  fr-text-inverted--green-archipel

- **blue-ecume**  
  fr-text-inverted--blue-ecume  
  - text
- inverted  
  fr-text-inverted--blue-ecume

- **blue-cumulus**  
  fr-text-inverted--blue-cumulus  
  - text
- inverted  
  fr-text-inverted--blue-cumulus

- **purple-glycine**  
  fr-text-inverted--purple-glycine  
  - text
- inverted  
  fr-text-inverted--purple-glycine

- **pink-macaron**  
  fr-text-inverted--pink-macaron  
  - text
- inverted  
  fr-text-inverted--pink-macaron

- **pink-tuile**  
  fr-text-inverted--pink-tuile  
  - text
- inverted  
  fr-text-inverted--pink-tuile

- **yellow-tournesol**  
  fr-text-inverted--yellow-tournesol  
  - text
- inverted  
  fr-text-inverted--yellow-tournesol

- **yellow-moutarde**  
  fr-text-inverted--yellow-moutarde  
  - text
- inverted  
  fr-text-inverted--yellow-moutarde

- **orange-terre-battue**  
  fr-text-inverted--orange-terre-battue  
  - text
- inverted  
  fr-text-inverted--orange-terre-battue

- **brown-cafe-creme**  
  fr-text-inverted--brown-cafe-creme  
  - text
- inverted  
  fr-text-inverted--brown-cafe-creme

- **brown-caramel**  
  fr-text-inverted--brown-caramel  
  - text
- inverted  
  fr-text-inverted--brown-caramel

- **brown-opera**  
  fr-text-inverted--brown-opera  
  - text
- inverted  
  fr-text-inverted--brown-opera

- **beige-gris-galet**  
  fr-text-inverted--beige-gris-galet  
  - text
- inverted  
  fr-text-inverted--beige-gris-galet

##### action-high

- **grey**  
  fr-text-action-high--grey  
  - text
- action-high  
  fr-text-action-high--grey

- **blue-france**  
  fr-text-action-high--blue-france  
  - text
- action-high  
  fr-text-action-high--blue-france

- **red-marianne**  
  fr-text-action-high--red-marianne  
  - text
- action-high  
  fr-text-action-high--red-marianne

- **green-tilleul-verveine**  
  fr-text-action-high--green-tilleul-verveine  
  - text
- action-high  
  fr-text-action-high--green-tilleul-verveine

- **green-bourgeon**  
  fr-text-action-high--green-bourgeon  
  - text
- action-high  
  fr-text-action-high--green-bourgeon

- **green-emeraude**  
  fr-text-action-high--green-emeraude  
  - text
- action-high  
  fr-text-action-high--green-emeraude

- **green-menthe**  
  fr-text-action-high--green-menthe  
  - text
- action-high  
  fr-text-action-high--green-menthe

- **green-archipel**  
  fr-text-action-high--green-archipel  
  - text
- action-high  
  fr-text-action-high--green-archipel

- **blue-ecume**  
  fr-text-action-high--blue-ecume  
  - text
- action-high  
  fr-text-action-high--blue-ecume

- **blue-cumulus**  
  fr-text-action-high--blue-cumulus  
  - text
- action-high  
  fr-text-action-high--blue-cumulus

- **purple-glycine**  
  fr-text-action-high--purple-glycine  
  - text
- action-high  
  fr-text-action-high--purple-glycine

- **pink-macaron**  
  fr-text-action-high--pink-macaron  
  - text
- action-high  
  fr-text-action-high--pink-macaron

- **pink-tuile**  
  fr-text-action-high--pink-tuile  
  - text
- action-high  
  fr-text-action-high--pink-tuile

- **yellow-tournesol**  
  fr-text-action-high--yellow-tournesol  
  - text
- action-high  
  fr-text-action-high--yellow-tournesol

- **yellow-moutarde**  
  fr-text-action-high--yellow-moutarde  
  - text
- action-high  
  fr-text-action-high--yellow-moutarde

- **orange-terre-battue**  
  fr-text-action-high--orange-terre-battue  
  - text
- action-high  
  fr-text-action-high--orange-terre-battue

- **brown-cafe-creme**  
  fr-text-action-high--brown-cafe-creme  
  - text
- action-high  
  fr-text-action-high--brown-cafe-creme

- **brown-caramel**  
  fr-text-action-high--brown-caramel  
  - text
- action-high  
  fr-text-action-high--brown-caramel

- **brown-opera**  
  fr-text-action-high--brown-opera  
  - text
- action-high  
  fr-text-action-high--brown-opera

- **beige-gris-galet**  
  fr-text-action-high--beige-gris-galet  
  - text
- action-high  
  fr-text-action-high--beige-gris-galet

#### Border

##### default

- **grey**  
  fr-border-default--grey  
  - border
- default  
  fr-border-default--grey

- **blue-france**  
  fr-border-default--blue-france  
  - border
- default  
  fr-border-default--blue-france

- **red-marianne**  
  fr-border-default--red-marianne  
  - border
- default  
  fr-border-default--red-marianne

- **green-tilleul-verveine**  
  fr-border-default--green-tilleul-verveine  
  - border
- default  
  fr-border-default--green-tilleul-verveine

- **green-bourgeon**  
  fr-border-default--green-bourgeon  
  - border
- default  
  fr-border-default--green-bourgeon

- **green-emeraude**  
  fr-border-default--green-emeraude  
  - border
- default  
  fr-border-default--green-emeraude

- **green-menthe**  
  fr-border-default--green-menthe  
  - border
- default  
  fr-border-default--green-menthe

- **green-archipel**  
  fr-border-default--green-archipel  
  - border
- default  
  fr-border-default--green-archipel

- **blue-ecume**  
  fr-border-default--blue-ecume  
  - border
- default  
  fr-border-default--blue-ecume

- **blue-cumulus**  
  fr-border-default--blue-cumulus  
  - border
- default  
  fr-border-default--blue-cumulus

- **purple-glycine**  
  fr-border-default--purple-glycine  
  - border
- default  
  fr-border-default--purple-glycine

- **pink-macaron**  
  fr-border-default--pink-macaron  
  - border
- default  
  fr-border-default--pink-macaron

- **pink-tuile**  
  fr-border-default--pink-tuile  
  - border
- default  
  fr-border-default--pink-tuile

- **yellow-tournesol**  
  fr-border-default--yellow-tournesol  
  - border
- default  
  fr-border-default--yellow-tournesol

- **yellow-moutarde**  
  fr-border-default--yellow-moutarde  
  - border
- default  
  fr-border-default--yellow-moutarde

- **orange-terre-battue**  
  fr-border-default--orange-terre-battue  
  - border
- default  
  fr-border-default--orange-terre-battue

- **brown-cafe-creme**  
  fr-border-default--brown-cafe-creme  
  - border
- default  
  fr-border-default--brown-cafe-creme

- **brown-caramel**  
  fr-border-default--brown-caramel  
  - border
- default  
  fr-border-default--brown-caramel

- **brown-opera**  
  fr-border-default--brown-opera  
  - border
- default  
  fr-border-default--brown-opera

- **beige-gris-galet**  
  fr-border-default--beige-gris-galet  
  - border
- default  
  fr-border-default--beige-gris-galet

##### plain

- **grey**  
  fr-border-plain--grey  
  - border
- plain  
  fr-border-plain--grey

- **blue-france**  
  fr-border-plain--blue-france  
  - border
- plain  
  fr-border-plain--blue-france

- **red-marianne**  
  fr-border-plain--red-marianne  
  - border
- plain  
  fr-border-plain--red-marianne

- **info**  
  fr-border-plain--info  
  - border
- plain  
  fr-border-plain--info

- **success**  
  fr-border-plain--success  
  - border
- plain  
  fr-border-plain--success

- **warning**  
  fr-border-plain--warning  
  - border
- plain  
  fr-border-plain--warning

- **error**  
  fr-border-plain--error  
  - border
- plain  
  fr-border-plain--error

- **green-tilleul-verveine**  
  fr-border-plain--green-tilleul-verveine  
  - border
- plain  
  fr-border-plain--green-tilleul-verveine

- **green-bourgeon**  
  fr-border-plain--green-bourgeon  
  - border
- plain  
  fr-border-plain--green-bourgeon

- **green-emeraude**  
  fr-border-plain--green-emeraude  
  - border
- plain  
  fr-border-plain--green-emeraude

- **green-menthe**  
  fr-border-plain--green-menthe  
  - border
- plain  
  fr-border-plain--green-menthe

- **green-archipel**  
  fr-border-plain--green-archipel  
  - border
- plain  
  fr-border-plain--green-archipel

- **blue-ecume**  
  fr-border-plain--blue-ecume  
  - border
- plain  
  fr-border-plain--blue-ecume

- **blue-cumulus**  
  fr-border-plain--blue-cumulus  
  - border
- plain  
  fr-border-plain--blue-cumulus

- **purple-glycine**  
  fr-border-plain--purple-glycine  
  - border
- plain  
  fr-border-plain--purple-glycine

- **pink-macaron**  
  fr-border-plain--pink-macaron  
  - border
- plain  
  fr-border-plain--pink-macaron

- **pink-tuile**  
  fr-border-plain--pink-tuile  
  - border
- plain  
  fr-border-plain--pink-tuile

- **yellow-tournesol**  
  fr-border-plain--yellow-tournesol  
  - border
- plain  
  fr-border-plain--yellow-tournesol

- **yellow-moutarde**  
  fr-border-plain--yellow-moutarde  
  - border
- plain  
  fr-border-plain--yellow-moutarde

- **orange-terre-battue**  
  fr-border-plain--orange-terre-battue  
  - border
- plain  
  fr-border-plain--orange-terre-battue

- **brown-cafe-creme**  
  fr-border-plain--brown-cafe-creme  
  - border
- plain  
  fr-border-plain--brown-cafe-creme

- **brown-caramel**  
  fr-border-plain--brown-caramel  
  - border
- plain  
  fr-border-plain--brown-caramel

- **brown-opera**  
  fr-border-plain--brown-opera  
  - border
- plain  
  fr-border-plain--brown-opera

- **beige-gris-galet**  
  fr-border-plain--beige-gris-galet  
  - border
- plain  
  fr-border-plain--beige-gris-galet

#### Artwork

Les couleurs artwork sont à utiliser pour créer des illustrations SVG réactives aux thèmes clair/sombre. Les classes utilitaires proposées permettent de styliser la propriété "fill" des éléments SVG. Dans le cas des pictogrammes, seules les couleurs **mineures** sont utilisables via une classe "fr-artwork--[couleur]" sur l'élément svg.

##### major

- **blue-france**  
  fr-artwork-major--blue-france  
  - artwork
- major  
  fr-artwork-major--blue-france

- **red-marianne**  
  fr-artwork-major--red-marianne  
  - artwork
- major  
  fr-artwork-major--red-marianne

- **green-tilleul-verveine**  
  fr-artwork-major--green-tilleul-verveine  
  - artwork
- major  
  fr-artwork-major--green-tilleul-verveine

- **green-bourgeon**  
  fr-artwork-major--green-bourgeon  
  - artwork
- major  
  fr-artwork-major--green-bourgeon

- **green-emeraude**  
  fr-artwork-major--green-emeraude  
  - artwork
- major  
  fr-artwork-major--green-emeraude

- **green-menthe**  
  fr-artwork-major--green-menthe  
  - artwork
- major  
  fr-artwork-major--green-menthe

- **green-archipel**  
  fr-artwork-major--green-archipel  
  - artwork
- major  
  fr-artwork-major--green-archipel

- **blue-ecume**  
  fr-artwork-major--blue-ecume  
  - artwork
- major  
  fr-artwork-major--blue-ecume

- **blue-cumulus**  
  fr-artwork-major--blue-cumulus  
  - artwork
- major  
  fr-artwork-major--blue-cumulus

- **purple-glycine**  
  fr-artwork-major--purple-glycine  
  - artwork
- major  
  fr-artwork-major--purple-glycine

- **pink-macaron**  
  fr-artwork-major--pink-macaron  
  - artwork
- major  
  fr-artwork-major--pink-macaron

- **pink-tuile**  
  fr-artwork-major--pink-tuile  
  - artwork
- major  
  fr-artwork-major--pink-tuile

- **yellow-tournesol**  
  fr-artwork-major--yellow-tournesol  
  - artwork
- major  
  fr-artwork-major--yellow-tournesol

- **yellow-moutarde**  
  fr-artwork-major--yellow-moutarde  
  - artwork
- major  
  fr-artwork-major--yellow-moutarde

- **orange-terre-battue**  
  fr-artwork-major--orange-terre-battue  
  - artwork
- major  
  fr-artwork-major--orange-terre-battue

- **brown-cafe-creme**  
  fr-artwork-major--brown-cafe-creme  
  - artwork
- major  
  fr-artwork-major--brown-cafe-creme

- **brown-caramel**  
  fr-artwork-major--brown-caramel  
  - artwork
- major  
  fr-artwork-major--brown-caramel

- **brown-opera**  
  fr-artwork-major--brown-opera  
  - artwork
- major  
  fr-artwork-major--brown-opera

- **beige-gris-galet**  
  fr-artwork-major--beige-gris-galet  
  - artwork
- major  
  fr-artwork-major--beige-gris-galet

##### minor

- **blue-france**  
  fr-artwork-minor--blue-france  
  - artwork
- minor  
  fr-artwork-minor--blue-france

- **red-marianne**  
  fr-artwork-minor--red-marianne  
  - artwork
- minor  
  fr-artwork-minor--red-marianne

- **green-tilleul-verveine**  
  fr-artwork-minor--green-tilleul-verveine  
  - artwork
- minor  
  fr-artwork-minor--green-tilleul-verveine

- **green-bourgeon**  
  fr-artwork-minor--green-bourgeon  
  - artwork
- minor  
  fr-artwork-minor--green-bourgeon

- **green-emeraude**  
  fr-artwork-minor--green-emeraude  
  - artwork
- minor  
  fr-artwork-minor--green-emeraude

- **green-menthe**  
  fr-artwork-minor--green-menthe  
  - artwork
- minor  
  fr-artwork-minor--green-menthe

- **green-archipel**  
  fr-artwork-minor--green-archipel  
  - artwork
- minor  
  fr-artwork-minor--green-archipel

- **blue-ecume**  
  fr-artwork-minor--blue-ecume  
  - artwork
- minor  
  fr-artwork-minor--blue-ecume

- **blue-cumulus**  
  fr-artwork-minor--blue-cumulus  
  - artwork
- minor  
  fr-artwork-minor--blue-cumulus

- **purple-glycine**  
  fr-artwork-minor--purple-glycine  
  - artwork
- minor  
  fr-artwork-minor--purple-glycine

- **pink-macaron**  
  fr-artwork-minor--pink-macaron  
  - artwork
- minor  
  fr-artwork-minor--pink-macaron

- **pink-tuile**  
  fr-artwork-minor--pink-tuile  
  - artwork
- minor  
  fr-artwork-minor--pink-tuile

- **yellow-tournesol**  
  fr-artwork-minor--yellow-tournesol  
  - artwork
- minor  
  fr-artwork-minor--yellow-tournesol

- **yellow-moutarde**  
  fr-artwork-minor--yellow-moutarde  
  - artwork
- minor  
  fr-artwork-minor--yellow-moutarde

- **orange-terre-battue**  
  fr-artwork-minor--orange-terre-battue  
  - artwork
- minor  
  fr-artwork-minor--orange-terre-battue

- **brown-cafe-creme**  
  fr-artwork-minor--brown-cafe-creme  
  - artwork
- minor  
  fr-artwork-minor--brown-cafe-creme

- **brown-caramel**  
  fr-artwork-minor--brown-caramel  
  - artwork
- minor  
  fr-artwork-minor--brown-caramel

- **brown-opera**  
  fr-artwork-minor--brown-opera  
  - artwork
- minor  
  fr-artwork-minor--brown-opera

- **beige-gris-galet**  
  fr-artwork-minor--beige-gris-galet  
  - artwork
- minor  
  fr-artwork-minor--beige-gris-galet

##### decorative

- **grey**  
  fr-artwork-decorative--grey  
  - artwork
- decorative  
  fr-artwork-decorative--grey

- **blue-france**  
  fr-artwork-decorative--blue-france  
  - artwork
- decorative  
  fr-artwork-decorative--blue-france

- **red-marianne**  
  fr-artwork-decorative--red-marianne  
  - artwork
- decorative  
  fr-artwork-decorative--red-marianne

- **green-tilleul-verveine**  
  fr-artwork-decorative--green-tilleul-verveine  
  - artwork
- decorative  
  fr-artwork-decorative--green-tilleul-verveine

- **green-bourgeon**  
  fr-artwork-decorative--green-bourgeon  
  - artwork
- decorative  
  fr-artwork-decorative--green-bourgeon

- **green-emeraude**  
  fr-artwork-decorative--green-emeraude  
  - artwork
- decorative  
  fr-artwork-decorative--green-emeraude

- **green-menthe**  
  fr-artwork-decorative--green-menthe  
  - artwork
- decorative  
  fr-artwork-decorative--green-menthe

- **green-archipel**  
  fr-artwork-decorative--green-archipel  
  - artwork
- decorative  
  fr-artwork-decorative--green-archipel

- **blue-ecume**  
  fr-artwork-decorative--blue-ecume  
  - artwork
- decorative  
  fr-artwork-decorative--blue-ecume

- **blue-cumulus**  
  fr-artwork-decorative--blue-cumulus  
  - artwork
- decorative  
  fr-artwork-decorative--blue-cumulus

- **purple-glycine**  
  fr-artwork-decorative--purple-glycine  
  - artwork
- decorative  
  fr-artwork-decorative--purple-glycine

- **pink-macaron**  
  fr-artwork-decorative--pink-macaron  
  - artwork
- decorative  
  fr-artwork-decorative--pink-macaron

- **pink-tuile**  
  fr-artwork-decorative--pink-tuile  
  - artwork
- decorative  
  fr-artwork-decorative--pink-tuile

- **yellow-tournesol**  
  fr-artwork-decorative--yellow-tournesol  
  - artwork
- decorative  
  fr-artwork-decorative--yellow-tournesol

- **yellow-moutarde**  
  fr-artwork-decorative--yellow-moutarde  
  - artwork
- decorative  
  fr-artwork-decorative--yellow-moutarde

- **orange-terre-battue**  
  fr-artwork-decorative--orange-terre-battue  
  - artwork
- decorative  
  fr-artwork-decorative--orange-terre-battue

- **brown-cafe-creme**  
  fr-artwork-decorative--brown-cafe-creme  
  - artwork
- decorative  
  fr-artwork-decorative--brown-cafe-creme

- **brown-caramel**  
  fr-artwork-decorative--brown-caramel  
  - artwork
- decorative  
  fr-artwork-decorative--brown-caramel

- **brown-opera**  
  fr-artwork-decorative--brown-opera  
  - artwork
- decorative  
  fr-artwork-decorative--brown-opera

- **beige-gris-galet**  
  fr-artwork-decorative--beige-gris-galet  
  - artwork
- decorative  
  fr-artwork-decorative--beige-gris-galet

##### background

- **grey**  
  fr-artwork-background--grey  
  - artwork
- background  
  fr-artwork-background--grey

- **blue-france**  
  fr-artwork-background--blue-france  
  - artwork
- background  
  fr-artwork-background--blue-france

- **red-marianne**  
  fr-artwork-background--red-marianne  
  - artwork
- background  
  fr-artwork-background--red-marianne

- **green-tilleul-verveine**  
  fr-artwork-background--green-tilleul-verveine  
  - artwork
- background  
  fr-artwork-background--green-tilleul-verveine

- **green-bourgeon**  
  fr-artwork-background--green-bourgeon  
  - artwork
- background  
  fr-artwork-background--green-bourgeon

- **green-emeraude**  
  fr-artwork-background--green-emeraude  
  - artwork
- background  
  fr-artwork-background--green-emeraude

- **green-menthe**  
  fr-artwork-background--green-menthe  
  - artwork
- background  
  fr-artwork-background--green-menthe

- **green-archipel**  
  fr-artwork-background--green-archipel  
  - artwork
- background  
  fr-artwork-background--green-archipel

- **blue-ecume**  
  fr-artwork-background--blue-ecume  
  - artwork
- background  
  fr-artwork-background--blue-ecume

- **blue-cumulus**  
  fr-artwork-background--blue-cumulus  
  - artwork
- background  
  fr-artwork-background--blue-cumulus

- **purple-glycine**  
  fr-artwork-background--purple-glycine  
  - artwork
- background  
  fr-artwork-background--purple-glycine

- **pink-macaron**  
  fr-artwork-background--pink-macaron  
  - artwork
- background  
  fr-artwork-background--pink-macaron

- **pink-tuile**  
  fr-artwork-background--pink-tuile  
  - artwork
- background  
  fr-artwork-background--pink-tuile

- **yellow-tournesol**  
  fr-artwork-background--yellow-tournesol  
  - artwork
- background  
  fr-artwork-background--yellow-tournesol

- **yellow-moutarde**  
  fr-artwork-background--yellow-moutarde  
  - artwork
- background  
  fr-artwork-background--yellow-moutarde

- **orange-terre-battue**  
  fr-artwork-background--orange-terre-battue  
  - artwork
- background  
  fr-artwork-background--orange-terre-battue

- **brown-cafe-creme**  
  fr-artwork-background--brown-cafe-creme  
  - artwork
- background  
  fr-artwork-background--brown-cafe-creme

- **brown-caramel**  
  fr-artwork-background--brown-caramel  
  - artwork
- background  
  fr-artwork-background--brown-caramel

- **brown-opera**  
  fr-artwork-background--brown-opera  
  - artwork
- background  
  fr-artwork-background--brown-opera

- **beige-gris-galet**  
  fr-artwork-background--beige-gris-galet  
  - artwork
- background  
  fr-artwork-background--beige-gris-galet

##### motif

- **grey**  
  fr-artwork-motif--grey  
  - artwork
- motif  
  fr-artwork-motif--grey

- **blue-france**  
  fr-artwork-motif--blue-france  
  - artwork
- motif  
  fr-artwork-motif--blue-france

- **red-marianne**  
  fr-artwork-motif--red-marianne  
  - artwork
- motif  
  fr-artwork-motif--red-marianne

- **green-tilleul-verveine**  
  fr-artwork-motif--green-tilleul-verveine  
  - artwork
- motif  
  fr-artwork-motif--green-tilleul-verveine

- **green-bourgeon**  
  fr-artwork-motif--green-bourgeon  
  - artwork
- motif  
  fr-artwork-motif--green-bourgeon

- **green-emeraude**  
  fr-artwork-motif--green-emeraude  
  - artwork
- motif  
  fr-artwork-motif--green-emeraude

- **green-menthe**  
  fr-artwork-motif--green-menthe  
  - artwork
- motif  
  fr-artwork-motif--green-menthe

- **green-archipel**  
  fr-artwork-motif--green-archipel  
  - artwork
- motif  
  fr-artwork-motif--green-archipel

- **blue-ecume**  
  fr-artwork-motif--blue-ecume  
  - artwork
- motif  
  fr-artwork-motif--blue-ecume

- **blue-cumulus**  
  fr-artwork-motif--blue-cumulus  
  - artwork
- motif  
  fr-artwork-motif--blue-cumulus

- **purple-glycine**  
  fr-artwork-motif--purple-glycine  
  - artwork
- motif  
  fr-artwork-motif--purple-glycine

- **pink-macaron**  
  fr-artwork-motif--pink-macaron  
  - artwork
- motif  
  fr-artwork-motif--pink-macaron

- **pink-tuile**  
  fr-artwork-motif--pink-tuile  
  - artwork
- motif  
  fr-artwork-motif--pink-tuile

- **yellow-tournesol**  
  fr-artwork-motif--yellow-tournesol  
  - artwork
- motif  
  fr-artwork-motif--yellow-tournesol

- **yellow-moutarde**  
  fr-artwork-motif--yellow-moutarde  
  - artwork
- motif  
  fr-artwork-motif--yellow-moutarde

- **orange-terre-battue**  
  fr-artwork-motif--orange-terre-battue  
  - artwork
- motif  
  fr-artwork-motif--orange-terre-battue

- **brown-cafe-creme**  
  fr-artwork-motif--brown-cafe-creme  
  - artwork
- motif  
  fr-artwork-motif--brown-cafe-creme

- **brown-caramel**  
  fr-artwork-motif--brown-caramel  
  - artwork
- motif  
  fr-artwork-motif--brown-caramel

- **brown-opera**  
  fr-artwork-motif--brown-opera  
  - artwork
- motif  
  fr-artwork-motif--brown-opera

- **beige-gris-galet**  
  fr-artwork-motif--beige-gris-galet  
  - artwork
- motif  
  fr-artwork-motif--beige-gris-galet
