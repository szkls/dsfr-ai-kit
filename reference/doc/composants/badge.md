# Badge

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge/design-du-badge · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge/code-du-badge · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge/accessibilite-du-badge · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge/demonstration-du-badge
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

Le badge est un élément d’indication permettant de valoriser une information liée à un élément précis du site.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge

*(Démonstration interactive « badge--badge » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=badge--badge&nav=0&globals=theme%3Alight)*

### Quand utiliser ce composant ?

Utiliser le badge pour mettre en avant une information de type “statut” ou “état” sur un élément du site.

> **Information**
> Bien différencier le badge du tag. Opter pour le tag pour catégoriser, classer ou organiser des contenus à l'aide de mots-clés.

### Comment utiliser ce composant ?

- **Associer le badge à une information donnée** pour en préciser le statut ou l’état associé. Il ne s’agit pas d’un composant cliquable, son unique usage est informatif.
- **Placer le badge directement à côté** **de l’élément** qu’il illustre. Peu importe le contexte, le système veut que le badge soit au premier niveau de lecture.

> **À faire :** Associer un badge à du texte ou un lien, en haut d’une page article par exemple.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/badge/use/do-1.png)

> **À faire :** Placer un badge au sein d’un élément de navigation, par exemple le menu latéral, pour apporter des précisions.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/badge/use/do-2.png)

> **À faire :** Intégrer un badge au sein de cartes ou de tuiles.e.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/badge/use/do-3.png)

> **À faire :** Utiliser un badge au sein d’une cellule d’un tableau.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/badge/use/do-4.png)

### Règles éditoriales

- **Préférer un texte concis et explicite** afin de limiter la taille du badge.

> **À faire :** Proposer un libellé court et explicite.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/badge/edit/do-1.png)

> **À ne pas faire :** Ne pas rédiger des libellés trop longs. La taille du badge doit rester raisonnable.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/badge/edit/dont-1.png)

- **Conserver une unité dans l’usage des badges** à travers le site pour en garantir la bonne compréhension par l’usager.

> **À faire :** Utiliser des badges identiques pour indiquer une information similaire à travers le site.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/badge/edit/do-2.png)

> **À ne pas faire :** Ne pas utiliser le même badge pour traduire des informations distinctes.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/badge/edit/dont-2.png)

#### Contenu associé

- **[Tag](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tag)**  
  Présentation du composant Tag destiné à la catégorisation ou au filtrage de contenus dans une interface.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge/design-du-badge

![Anatomie du badge](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/badge/design/anatomy/anatomy-1.png)

1. Une icône, uniquement pour les badges système — En option
2. Un libellé, en majuscule — Obligatoire
3. Un fond — Obligatoire

### Variations

**Badge standard**

**Badge système avec icône**

- Succès
- Avertissement
- Erreur
- Information
- Nouveauté

Utiliser cette variation pour préciser l’information donnée par le texte du badge avec l’icône correspondante.

L’ajout d’une icône est autorisée, et automatique en code, uniquement pour les badges système.

**Badge système sans icône**

Il est possible d’utiliser un badge système sans icône.

### Tailles

Le badge est disponible en 2 tailles :

- SM pour small

- MD pour medium - taille par défaut

### États

Le badge n’est sujet à aucun changement d’état.

### Personnalisation

Les badges systèmes ne sont pas personnalisables.

> **À faire :** Utiliser l’icône et la couleur système correspondantes à l’information fournie.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/badge/design/custom/do-1.png)

> **À ne pas faire :** Ne pas changer l’icône et la couleur d’un badge système.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/badge/design/custom/dont-1.png)

La couleur des badges standard peut être personnalisée, parmi les couleurs illustratives autorisées uniquement.

**Tableau personnalisation design**

| Éléments | Indice thème clair | Indice thème sombre |
|---|---|---|
| **Fond** | Indice **950** <br> *exemple : `$pink-tuile-950`* | Indice **100** <br> *exemple : `$pink-tuile-100`* |
| **Texte** | Indice **sun** <br> *exemple : `$pink-tuile-sun-425`* | Indice **moon** <br> *exemple : `$pink-tuile-moon-750`* |

> **À faire :** Utiliser une couleur illustrative sur un badge standard (exemple : `$Pink-tuile`).
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/badge/design/custom/do-2.png)

> **À ne pas faire :** Ne pas utiliser une icône dans un badge standard.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/badge/design/custom/dont-2.png)

> **À ne pas faire :** Ne pas utiliser une couleur système pour un badge standard.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/badge/design/custom/dont-3.png)

#### Contenu associé

- **[Tag](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tag)**  
  Présentation du composant Tag destiné à la catégorisation ou au filtrage de contenus dans une interface.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge/code-du-badge

### HTML

#### Structure du composant

Le composant **Badge** est un élément visuel destiné à fournir des informations contextuelles ou des indicateurs d'état. Sa structure est la suivante :

- Le Badge est un élément HTML `<p>` avec la classe `fr-badge`.
- Son contenu est textuel et doit être succinct (exemple : "Libellé badge").

**Exemple de structure HTML**

```html
<p class="fr-badge">Libellé badge</p>
```

#### Groupe de badges

Lorsque plusieurs badges sont utilisés ensemble, ils doivent être regroupés dans un conteneur, de classe `fr-badges-group`, afin de maintenir une cohérence visuelle et fonctionnelle.

```html
<ul class="fr-badges-group">
  <li>
      <p class="fr-badge">Badge 1</p>
  </li>
  <li>
      <p class="fr-badge">Badge 2</p>
  </li>
</ul>
```

---

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](https://www.systeme-de-design.gouv.fr/version-courante/fr/premiers-pas/vous-etes-developpeur/prise-en-main#les-css) .

**Dépendances CSS**

| Dépendance | Obligatoire | Remarque |
|---|---|---|
| Core | Oui |  |
| Badge | Oui |  |
| Utility | Non | Uniquement pour l'ajout d'icône |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/badge/badge.min.css" rel="stylesheet">
```

#### Variantes systèmes

Les badges systèmes peuvent avoir des styles définis pour différents status. Pour appliquer une variante système, ajoutez une des classes suivantes à l'élément `<p class="fr-badge">` :

- `fr-badge--info` : Indique une information.
- `fr-badge--warning` : Indique un avertissement.
- `fr-badge--error` : Indique une erreur.
- `fr-badge--success` : Indique un succès.
- `fr-badge--new` : Indique une nouveauté

Les badges système sont liés à une icône, celle-ci n'est pas modifiable mais peut être retirée. Pour cela utilisez la classe : `fr-badge--no-icon`

**Exemples de badges systèmes**

```html
<p class="fr-badge fr-badge--info">Information</p>
<p class="fr-badge fr-badge--warning">Avertissement</p>
<p class="fr-badge fr-badge--error">Erreur</p>
<p class="fr-badge fr-badge--success">Succès</p>
<p class="fr-badge fr-badge--new">Nouveau</p>
```

#### Variantes d'accentuation

Les badges sont disponibles dans toutes les couleurs d'accentuation via la classe : `fr-badge--NOM-COULEUR`. Retrouver la liste des couleurs d'accentuation sur la [page couleurs](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/couleurs) .

**Exemples de badges systèmes**

```html
<p class="fr-badge fr-badge--yellow-moutarde">intitulé</p>
<p class="fr-badge fr-badge--green-menthe">intitulé</p>
```

#### Variantes de taille

Les badges peuvent être affichés dans deux tailles différentes. Par défaut, la taille standard est utilisée, mais il est possible d'ajouter la classe suivante pour ajuster la taille :

- `fr-badge--sm` : Petit badge.

**Exemples de tailles de badges**

```html
<p class="fr-badge fr-badge--sm">Petit badge</p>
<p class="fr-badge">Badge moyen</p>
```

---

### JavaScript

Le composant Badge **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+badge+)

#### [v1.15.3](https://github.com/GouvernementFR/dsfr/releases/tag/v1.15.3) - 8 septembre 2026

- **[utilisation de span dans groupe de badge](https://github.com/GouvernementFR/dsfr/pull/1498)**  
  #1498  
  - utilise l'élément html span pour les groupes  
  🐛 fix  
  badge

#### [v1.14.3](https://github.com/GouvernementFR/dsfr/releases/tag/v1.14.3) - 15 décembre 2025

- **[titre page accessibilite en h2](https://github.com/GouvernementFR/dsfr/pull/1334)**  
  #1334  
  📝 docs  
  badge

#### [v1.10.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.10.0) - 19 juillet 2023

- **[retrait du z-index](https://github.com/GouvernementFR/dsfr/pull/630)**  
  #630  
  - retrait du z-index: 1 qui pose problème dans une modale avec footer.  
  🐛 fix  
  link button tag badge

#### [v1.6.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.6.0) - 14 juin 2022

- **[correction espacements des groupes](https://github.com/GouvernementFR/dsfr/pull/311)**  
  #311  
  refactor  
  header link button follow share tag badge

#### [v1.3.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.3.0) - 18 janvier 2022

- **[ajout du composant badge](https://github.com/GouvernementFR/dsfr/pull/59)**  
  #59  
  feat  
  badge

##### Contenu associé

- **[Tag](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tag)**  
  Présentation du composant Tag destiné à la catégorisation ou au filtrage de contenus dans une interface.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge/accessibilite-du-badge

Le composant **Badge** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Le composant Badge n’est pas interactif. Il n’y a donc pas d'interaction au clavier associée.

### Règles d’accessibilité

#### Structuration

- Par défaut, utiliser un élément `<p>` lorsque le badge est utilisé seul.
- Si le badge est utilisé à l’intérieur d’un élément qui possède une sémantique (`<p>`, `<li>`…), utiliser un élément `<span>`.
- En cas d’utilisation de plusieurs badges à la suite, les structurer dans une liste.

#### Badge système avec icône

L’information doit être donnée par le texte du badge. L’icône est purement décorative.

#### Contrastes de couleurs

Le composant Badge est suffisamment contrasté en thème clair et en thème sombre dans ses différentes versions.

> **Avertissement**
> En cas de personnalisation, la couleur du texte et la couleur du fond doivent être suffisamment contrastées (ratio minimum de 4.5:1).

##### Badge par défaut

En thème clair et en thème sombre, le ratio de contraste du composant Badge par défaut est de 9,8:1.

##### Accentuations

**Contrastes des accentuations**

| Accentuation | Thème clair | Thème sombre |
|---|---|---|
| **green-tilleul-verveine** | 5:1 | 8,91:1 |
| **green-bourgeon** | 4,9:1 | 7,42:1 |
| **green-emeraude** | 4,95:1 | 7,33:1 |
| **green-menthe** | 5,78:1 | 5,41:1 |
| **green-archipel** | 5,47:1 | 6,54:1 |
| **blue-ecume** | 8,49:1 | 5,73:1 |
| **blue-cumulus** | 5,87:1 | 6,88:1 |
| **purple-glycine** | 6,84:1 | 5,05:1 |
| **pink-macaron** | 5,24:1 | 9,34:1 |
| **pink-tuile** | 4,94:1 | 7,22:1 |
| **yellow-tournesol** | 5,21:1 | 12,21:1 |
| **yellow-moutarde** | 6,25:1 | 10,13:1 |
| **orange-terre-battue** | 5,83:1 | 5,72:1 |
| **brown-cafe-creme** | 5,59:1 | 10,89:1 |
| **brown-caramel** | 4,94:1 | 11,47:1 |
| **brown-opera** | 5,43:1 | 9,01:1 |
| **beige-gris-galet** | 5,22:1 | 9,01:1 |

##### Badge système

**Contrastes des badges système**

| Statut | Thème clair | Thème sombre |
|---|---|---|
| **Succès** | 4,95:1 | 4,95:1 |
| **Avertissement** | 4,95:1 | 4,94:1 |
| **Erreur** | 4,96:1 | 4,95:1 |
| **Information** | 4,93:1 | 4,94:1 |
| **Nouveauté** | 6,25:1 | 10,13:1 |

---

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Badge.

---

### Critères RGAA applicables

- **Couleurs :** 3.2
- **Éléments obligatoires** 8.9
- **Structuration :** 9.3
- **Présentation de l’information :** 10.1, 10.2, 10.4, 10.5, 10.11, 10.12
- **Consultation :** 13.9

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)

##### Contenu associé

- **[Tag](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tag)**  
  Présentation du composant Tag destiné à la catégorisation ou au filtrage de contenus dans une interface.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge/demonstration-du-badge

#### Contenu associé

- **[Tag](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tag)**  
  Présentation du composant Tag destiné à la catégorisation ou au filtrage de contenus dans une interface.
