# Accordéon

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/accordeon · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/accordeon/design-de-l-accordeon · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/accordeon/code-de-l-accordeon · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/accordeon/accessibilite-de-l-accordeon · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/accordeon/demonstration-de-l-accordeon
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

L’accordéon est un élément d’interaction avec l’interface permettant à l’usager d'afficher ou de masquer une section de contenu présentée dans une page.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/accordeon

*(Démonstration interactive « accordion--accordion » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=accordion--accordion&nav=0&globals=theme%3Alight)*

### Quand utiliser ce composant ?

L’accordéon est utilisé pour mettre en forme du contenu dans une page.

> **Attention**
> Son objectif principal étant d’économiser de l’espace, il doit principalement être utilisé au sein de longues pages de contenu.

### Comment utiliser ce composant ?

- **Alléger des pages de contenus denses** en permettant à l’utilisateur de consulter uniquement ce dont il a besoin.

> **À ne pas faire :** Ne pas utiliser les accordéons au sein d’une modale. Ils servent à mettre en forme du contenu au sein de longues pages.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/accordion/use/dont-1.png)

- **Simplifier l’expérience de l’usager** en le guidant dans des parcours complexes.
- **Adapter son utilisation au contexte** . L’accordéon ne doit pas être utilisé si l’utilisateur a besoin de lire tous les contenus présents sur la page.
- **Privilégier des interactions simples** (bouton ou lien par exemple). L’accordéon n’a pas vocation à intégrer des composants complexes.

> **À faire :** Privilégier des interactions simples (bouton ou lien, par exemple) au sein des accordéons.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/accordion/use/do-1.png)

> **À ne pas faire :** Ne pas intégrer des composants trop complexes aux accordéons.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/accordion/use/dont-2.png)

### Règles éditoriales

- **Rédiger un titre d’en-tête clair, explicite et précis** . L’utilisateur doit comprendre facilement le contenu proposé par l’accordéon.
- **Soigner la mise en forme** de l’accordéon en y ajoutant les types de contenu correspondant à vos besoins. Si le contenu de l’accordéon est trop succinct, il est certainement préférable de le remplacer par une liste ou un simple paragraphe.

> **À faire :** Privilégier l’usage de texte ou de liste à puces si le contenu de l’accordéon est trop succinct.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/accordion/edit/do-1.png)

> **À ne pas faire :** Ne pas utiliser les accordéons pour mettre en forme des contenus très courts.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/accordion/edit/dont-1.png)

#### Contenu associé

- **[Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale)**  
  Présentation du composant Modale permettant de focaliser l’attention de l’usager sur une tâche ou une information sans quitter la page.

- **[Onglet](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/onglet)**  
  Présentation du composant Onglets pour structurer du contenu lié dans un espace restreint avec des recommandations d’usage et d’accessibilité.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/accordeon/design-de-l-accordeon

![Anatomie de l'accordéon](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/accordion/design/anatomy/anatomy-1.png)

1. Un en-tête, correspondant au titre de la section — Obligatoire
2. Un chevron orienté vers le bas, indiquant que le panneau peut s'ouvrir. Il est orienté vers le haut quand le panneau peut se refermer — Obligatoire
3. Une zone de contenu libre, masquée par défaut — Obligatoire
4. Un séparateur — Obligatoire

### Variations

**Groupe d’accordéons**

- Par défaut, les accordéons compris dans un groupe d’accordéons sont fermés. Seuls l’en-tête et le chevron sont visibles.
- La totalité de la barre d’en-tête est cliquable. Au clic, le contenu est révélé, ou caché, et le chevron change d'orientation en conséquence.
- Par défaut, le groupe d’accordéons ne permet l’ouverture que d’un accordéon à la fois. Le clic sur un accordéon du groupe entraîne la fermeture de l’accordéon précédemment ouvert.

> **Information**
> L'utilisation d'accordéons non liés entre eux (seuls et non au sein d’un groupe) reste toutefois possible, permettant l'ouverture de chaque accordéon indépendamment des autres.

#### Tailles

La largeur de l’accordéon s’adapte à la taille de son conteneur. Toutefois, il est recommandé de ne pas excéder une largeur de 8 colonnes, s’agissant d’un composant de mise en forme de contenu.

#### États

**État au clic**

L’état au clic correspond au comportement constaté par l’usager une fois le panneau ouvert, après avoir cliqué sur l’accordéon.

**État au survol**

L’état au survol correspond au comportement constaté par l’utilisateur lorsqu’il survol le bouton d'ouverture de l’accordéon avec sa souris. Il existe 2 états au survol :

- Lorsque l’accordéon est non cliqué
- Lorsque l’accordéon est cliqué

#### Personnalisation

Les accordéons ne sont pas personnalisables.

> **À faire :** Utiliser uniquement la couleur bleu pour les accordéons.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/accordion/design/custom/do-1.png)

> **À ne pas faire :** Ne pas personnaliser la couleur des accordéons.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/accordion/design/custom/dont-1.png)

> **À faire :** Utiliser uniquement la taille de typographie prévue pour l’en-tête des accordéons.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/accordion/design/custom/do-2.png)

> **À ne pas faire :** Ne pas augmenter la taille de typographie de l’en-tête des accordéons.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/accordion/design/custom/dont-2.png)

##### Contenu associé

- **[Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale)**  
  Présentation du composant Modale permettant de focaliser l’attention de l’usager sur une tâche ou une information sans quitter la page.

- **[Onglet](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/onglet)**  
  Présentation du composant Onglets pour structurer du contenu lié dans un espace restreint avec des recommandations d’usage et d’accessibilité.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/accordeon/code-de-l-accordeon

### HTML

#### Structure du composant

Le composant **Accordéon** est composé de deux parties : son titre qui contient le bouton d'ouverture, et un bloc de contenu libre refermable, dit "collapse". Sa structure est la suivante :

- Le conteneur de l'accordéon est une balise `<section>` avec la classe `fr-accordion`.
- Son titre est contenu dans un niveau d'entête `<hx>` (ou éventuellement `<p>`), variable en fonction de sa hiérarchie dans la page (par défaut h3), et possède la classe `fr-accordion__title`.
- Un `<button>` est placé dans cette balise `<hx>`, et son libellé constitue le titre.
  - Le bouton doit être de type "button".
  - Le bouton dispose d'un attribut `aria-expanded`, sa valeur [true|false] défini si le collapse est ouvert ou fermé
  - Le bouton est lié au collapse via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` du collapse.
- Le bloc refermable, défini par la classe `fr-collapse`, est une `<div>` placée après le titre. Il s'agit d'un élément générique du core utilisé par d'autres composants tels que la navigation ou la transcription.
  - Il dispose d'un attribut `id` obligatoire, pour être lié au bouton d'ouverture.
  - Son contenu est libre, mais nécessite l'utilisation des balises adéquates, il n'est pas correcte de placer du texte directement dans une `<div>`.

**Exemple de structure HTML**

```html
<section class="fr-accordion">
    <h3 class="fr-accordion__title">
        <button type="button" class="fr-accordion__btn" aria-expanded="false" aria-controls="accordion-1">Libellé accordéon</button>
    </h3>
    <div id="accordion-1" class="fr-collapse">
        <!-- données de l'accordéon -->
    </div>
</section>
```

#### Groupe d'accordéons

L'accordéon peut être utilisé en groupe de plusieurs éléments, liés ou non entre eux. Les accordéons sont disposés à la suite dans un conteneur.

- Le conteneur est une `<div>` défini par la classe `fr-accordions-group`
- Le conteneur peut posséder un attribut `data-fr-group`, sa valeur [true|false] permet de lier les accordéons entre eux ou non. Si `true`, lorsqu'un accordion est ouvert les autres se referment. Si `false`, il est possible d'en ouvrir plusieurs. Si l'attribut n'est pas défini les accordéons sont groupés par défaut.

**Exemple de structure HTML**

```html
<div class="fr-accordions-group" data-fr-group="true">
  <section class="fr-accordion">
    ...
  </section>
  <section class="fr-accordion">
    ...
  </section>
</div>
```

---

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](https://www.systeme-de-design.gouv.fr/version-courante/fr/premiers-pas/vous-etes-developpeur/prise-en-main#les-css) .

**Dépendances CSS**

| Dépendance | Obligatoire |
|---|---|
| Core | Oui |
| Accordéon | Oui |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/accordion/accordion.min.css" rel="stylesheet">
```

#### Variante de style

Sur l'accordéon, aucune variation ni accentuation n'est possible.

Quand le JavaScript est activé, le bloc refermable (collapse) reçoit la classe `fr-collapse--expanded` lorsque le bouton lié possède l'attribut `aria-expanded="true"`. C'est cette classe qui ouvre le collapse.

---

### JavaScript

Pour fonctionner le composant accordéon nécessite l'utilisation de JavaScript.

#### Installation du JavaScript

Chaque composant utilisant javascript possède un fichier Js spécifique et requiert le fichier Js du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```html
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/accordion/accordion.module.min.js"></script>
```

NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```html
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/accordion/accordion.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur l'accordéon, les éléments suivants sont instanciés :

- Le groupe, via la classe : `fr-accordions-group`
- L'accordéon, via la classe : `fr-accordion`
- Le bouton d'ouverture, via la classe `fr-accordion__btn`
- Le collapse, via la classe `fr-collapse`

Une fois chargé, le Js ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés

#### API

Il est possible d'interagir avec les instances du composants en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :

```javascript
const elem = document.getElementById('ID_COLLAPSE');
dsfr(elem).collapse.disclose();
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

##### accordion

**node**

| **Description** | Renvoie le noeud HTML de l'élément. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).accordion.node` |

**isEnabled**

| **Description** | Défini si le fonctionnement de l'accordéon est activé ou non |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).accordion.isEnabled = false` |

##### accordionGroup

**current**

| **Description** | Retourne l'API du collapse ouvert. <br> *Si aucun collapse n'est ouvert, ou si plusieurs collapses sont ouverts, renvoie `null`.* |
|---|---|
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).accordionsGroup.current` |

**hasFocus**

| **Description** | Renvoie `true` si le focus est sur un des éléments du groupe. |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).accordionsGroup.hasFocus` |

**index**

| **Description** | Retourne ou modifie l'index de l'accordéon courant. <br> *Si aucun collapse n'est ouvert, l'index vaut 0.* |
|---|---|
| **Type** | property |
| **Retour** | Number |
| **Exemple** | `dsfr(elem).accordionsGroup.index` <br> `dsfr(elem).accordionsGroup.index = 2` |

**isGrouped**

| **Description** | Défini si les accordéons du groupe sont liés en eux ou non. <br> *Si `true`, lorsqu'un accordion est ouvert les autres se referment. Si `false`, il est possible d'en ouvrir plusieurs. Si l'attribut n'est pas défini les accordéons sont groupés par défaut.* |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).accordionsGroup.isGrouped` <br> `dsfr(elem).accordionsGroup.isGrouped = true` |

**length**

| **Description** | Retourne le nombre d'accordéons dans le groupe. |
|---|---|
| **Type** | property |
| **Retour** | Number |
| **Exemple** | `dsfr(elem).accordionsGroup.length` |

**members**

| **Description** | Renvoie un tableau d'objets correspondant aux collapses des accordéons du groupe. |
|---|---|
| **Type** | property |
| **Retour** | Array |
| **Exemple** | `dsfr(elem).accordionsGroup.members` |

**node**

| **Description** | Renvoie le noeud HTML de l'élément. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).accordionsGroup.node` |

##### accordion

**isEnabled**

| **Description** | Défini si le fonctionnement de l'accordéon est activé ou non |
|---|---|
| **Type** | property |
| **Retour** | true \| false |
| **Exemple** | `dsfr(elem).accordion.isEnabled = false` |

##### collapseButton

**focus**

| **Description** | Replace le focus sur le bouton |
|---|---|
| **Type** | function |
| **Arguments** | none |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).collapseButton.focus()` |

**parent**

| **Description** | Retourne l'instance du dsfr parente, ici l'accordéon |
|---|---|
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).parent` |

**node**

| **Description** | Renvoie le noeud HTML de l'élément. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).collapseButton.node` |

##### collapse

**concea**

| **Description** | Ferme le collapse |
|---|---|
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).collapse.conceal()` |

**disclose**

| **Description** | Ouvre le collapse |
|---|---|
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).collapse.disclose()` |

**isDisclosed**

| **Description** | Retourne vrai si le collapse est ouvert |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).collapse.isDisclosed` |

**isEnabled**

| **Description** | Défini si le fonctionnement de l'accordéon est activé ou non |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).collapse.isEnabled = false` |

**group**

| **Description** | Retourne l'API du groupe, ou null s'il n'y a pas de groupe |
|---|---|
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).collapse.group` |

**buttons**

| **Description** | Retourne un tableau de boutons d'ouverture du collapse |
|---|---|
| **Type** | property |
| **Retour** | Array |
| **Exemple** | `dsfr(elem).collapse.buttons` |

**focus**

| **Description** | Replace le focus sur le bouton du collapse |
|---|---|
| **Type** | function |
| **Arguments** | none |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).collapse.focus()` |

**parent**

| **Description** | Retourne l'instance du dsfr parent, ici l'accordéon |
|---|---|
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).parent` |

**children**

| **Description** | Renvoie un tableau d'instances enfants |
|---|---|
| **Type** | property |
| **Retour** | Array |
| **Exemple** | `dsfr(elem).children` |

**node**

| **Description** | Renvoie le noeud HTML de l'élément. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).collapse.node` |

#### Événements

Le Système de Design fournit des événements personnalisés pour les actions uniques de la part de certains composants réactifs listés sur la page de l' [API Javascript](https://www.systeme-de-design.gouv.fr/version-courante/fr/premiers-pas/vous-etes-developpeur/api-javascript) .

Sur l'accordéon et le groupe d'accordéons, les événements suivants sont disponibles :

**événements**

| Événement | Action | Élément | Attribut |
|---|---|---|---|
| `dsfr.conceal` | Fermeture de l'élément | Collapse | `data-fr-js-collapse` |
| `dsfr.disclose` | Ouverture de l'élément | Collapse | `data-fr-js-collapse` |
| `dsfr.click` | Click sur le bouton d'ouverture | CollapseButton | `data-fr-js-collapse-button` |

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+accordion+)

#### [v1.13.2](https://github.com/GouvernementFR/dsfr/releases/tag/v1.13.2) - 15 mai 2025

- **[collapses ouverts au chargement](https://github.com/GouvernementFR/dsfr/pull/1140)**  
  #1140  
  - Ajout de la classe `fr-collapse--expanded` en html, sur les collapse ouverts par défaut, pour éviter l'ouverture après le chargement du js.
- Ajout d'exemples d'accordéon et sidemenu avec collapses ouverts au chargement  
  🐛 fix  
  sidemenu accordion

#### [v1.13.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.13.0) - 4 décembre 2024

- **[ouverture initiale des accordéons dégroupés](https://github.com/GouvernementFR/dsfr/pull/1032)**  
  #1032  
  - Correction lorsque tous les disclosures d'un groupe avec l'attribut group="false" sont ouverts au chargement  
  🐛 fix  
  accordion

#### [v1.11.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.1) - 31 janvier 2024

- **[ajoute un attribut pour dégrouper](https://github.com/GouvernementFR/dsfr/pull/860)**  
  #860  
  - ajout d'un attribut `data-fr-group="false"` pour dissocier le comportement d'ouverture/fermeture des accordéons à l'intérieur d'un groupe d'accordéons
- étend l'utilisation de cet attribut aux composants héritant du collapses-group : la navigation (uniquement en mobile) et le menu latéral  
  ✨ feat  
  accordions-group

- **[corrige le focus dans un groupe](https://github.com/GouvernementFR/dsfr/pull/867)**  
  #867  
  🐛 fix  
  accordion

#### [v1.10.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.10.0) - 19 juillet 2023

- **[Ajustement sur l'état défaut et actif](https://github.com/GouvernementFR/dsfr/pull/564)**  
  #564  
  Harmonisation avec la navigation sur Accordion, Sidemenu, Translate et Transcription :  
  - Passage icône et intitulé en action-high-blue-france
- Ajout background-open-blue-france sur le bouton lorsque l'élément est ouvert
- Icône “arrow-down-s-ligne” (la même que sur navigation)
- Accordion, Translate : Retrait changement de graisse (normal -> bold) à l'ouverture et graisse constante en medium  
  🐛 fix  
  accordion transcription translate sidemenu

#### [v1.8.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.8.0) - 27 octobre 2022

- **[correction token de couleur](https://github.com/GouvernementFR/dsfr/pull/432)**  
  #432  
  fix  
  accordion

#### [v1.4.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.4.0) - 16 mars 2022

- **[a11y retrait des ul li du groupe d'accordéon](https://github.com/GouvernementFR/dsfr/pull/214)**  
  #214  
  fix  
  accordion

##### Contenu associé

- **[Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale)**  
  Présentation du composant Modale permettant de focaliser l’attention de l’usager sur une tâche ou une information sans quitter la page.

- **[Onglet](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/onglet)**  
  Présentation du composant Onglets pour structurer du contenu lié dans un espace restreint avec des recommandations d’usage et d’accessibilité.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/accordeon/accessibilite-de-l-accordeon

Le composant Accordéon est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Lorsque le focus est sur le bouton d’ouverture de l’accordéon :

- `Entrée` : ouvre ou ferme la zone de contenu associée.
- `Espace` : ouvre ou ferme la zone de contenu associée.

Navigation entre les accordéons :

- `Tab` : déplace le focus sur le bouton suivant.
- `Maj` + `Tab` : déplace le focus sur le bouton précédent.

Si une zone de contenu de l’accordéon est ouverte, tous les éléments interactifs à l’intérieur sont inclus dans le parcours de navigation au clavier.

### Règles d’accessibilité

Le composant **Accordéon** s’appuie sur le motif de conception ARIA Accordion de l’[Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/about/introduction/) (APG).

#### Titre de l’accordéon

- Le titre de l’accordéon doit être explicite et permettre de comprendre le contenu proposé.
- Le niveau titre de l’accordéon doit être cohérent avec le reste de la page.

#### Bouton de l’accordéon

- Il est placé à l’intérieur de la balise `hx`, autour du texte.
- Il possède deux attributs ARIA :
  - `aria-expanded` défini à :
    - `true` lorsque la zone de contenu contrôlée est affichée,
    - `false` lorsque la zone de contenu contrôlée est masquée.
  - `aria-controls` qui relie le bouton à la zone contrôlée et dont la valeur doit correspondre à l’attribut `id` de la zone de contenu.

#### Groupe d’accordéons

Le comportement par défaut du « Groupe d’accordéons » (ouverture d’un accordéon à la fois seulement) peut poser des problèmes d’utilisabilité pour certaines personnes handicapées.

L’option « Groupe d’accordéons dissociés » est à privilégier par défaut.

#### Contrastes de couleurs

Le composant Accordéon est suffisamment contrasté en thème clair.

Au survol du bouton en thème sombre, le ratio de contraste entre le texte et le fond du bouton est insuffisant.

Le chevron est insuffisamment contrasté au survol uniquement lorsque l’accordéon est ouvert.

**Contraste du texte et du chevron de l’accordéon**

| État du bouton | Thème clair | Thème sombre |
|---|---|---|
| **fermé - par défaut** | 14,9:1 | 5,76:1 |
| **fermé - au survol** | 13,79:1 | 4:1 |
| **ouvert - par défaut** | 11,83:1 | 4,55:1 |
| **ouvert - au survol** | 13,79:1 | 2,6:1 |

### Restitution par les lecteurs d’écran

L’attribut `aria-expanded` est restitué différemment selon les lecteurs d’écran.

- Lorsque l’accordéon est fermé (`aria-expanded="false"`) : « réduit » ou « condensé » (VoiceOver macOS)
- Lorsque l’accordéon est ouvert : « développé » (NVDA, Narrateur, VoiceOver iOS) ou « étendu » (JAWS, VoiceOver macOS, Talkback).

> **Avertissement**
> - Selon la version de macOS, un [bug de VoiceOver](https://bugs.webkit.org/show_bug.cgi?id=284804) fait qu’il ne restitue pas le changement d’état lorsque le bouton est actionné.
> - Narrateur vocalise le changement d’état lorsque le bouton est actionné **uniquement avec Microsoft Edge** . Sur Chrome et Firefox, le changement d’état n’est pas vocalisé lorsque le bouton est actionné.
> 
> Ce sont des bugs des lecteurs d’écran et non un problème avec le composant.

#### Versions navigateurs et lecteurs d’écran

Les tests de restitution ont été effectués en ajoutant le lecteur d’écran intégré à Windows 11 (Narrateur) et le navigateur web Chrome à l’environnement de tests du RGAA.

Versions des navigateurs web :

- Firefox 137
- Chrome 135
- Safari 18.4 (sur macOS uniquement)
- Microsoft Edge 135 (sur Windows 11 uniquement)

Version des lecteurs d’écran :

- NVDA 2024.4.2
- JAWS 2024
- VoiceOver macOS 15.4
- Narrateur (Windows 11)
- VoiceOver iOS

---

### Critères RGAA applicables

- **Couleurs :** 3.2, 3.3
- **Scripts :** 7.1, 7.3
- **Structuration :** 9.1
- **Présentation de l’information :** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.8, 10.11, 10.12
- **Navigation :** 12.8, 12.9, 12.11
- **Consultation :** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Attribut aria-expanded — spécification ARIA](https://www.w3.org/TR/wai-aria-1.3/#aria-expanded)
- [Attribut aria-controls — spécification ARIA](https://www.w3.org/TR/wai-aria-1.3/#aria-controls)
- [Motif de conception WAI-ARIA Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)

##### Contenu associé

- **[Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale)**  
  Présentation du composant Modale permettant de focaliser l’attention de l’usager sur une tâche ou une information sans quitter la page.

- **[Onglet](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/onglet)**  
  Présentation du composant Onglets pour structurer du contenu lié dans un espace restreint avec des recommandations d’usage et d’accessibilité.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/accordeon/demonstration-de-l-accordeon

*(Démonstration interactive « accordion--docs » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=accordion--docs&nav=0&globals=theme%3Alight)*

*(Démonstration interactive « accordions-group--docs » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=accordions-group--docs&nav=0&globals=theme%3Alight)*

#### Contenu associé

- **[Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale)**  
  Présentation du composant Modale permettant de focaliser l’attention de l’usager sur une tâche ou une information sans quitter la page.

- **[Onglet](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/onglet)**  
  Présentation du composant Onglets pour structurer du contenu lié dans un espace restreint avec des recommandations d’usage et d’accessibilité.
