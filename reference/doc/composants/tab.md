# Onglet

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/onglet · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/onglet/design-de-l-onglet · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/onglet/code-de-l-onglet · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/onglet/accessibilite-de-l-onglet · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/onglet/demonstration-de-l-onglet
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

Le système d’onglets permet de structurer et de présenter plusieurs sections de contenu liées, en affichant une seule section à la fois dans un espace limité.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/onglet

### Quand utiliser ce composant ?

Utiliser le système d'onglets pour regrouper du contenu lié dans un espace limité ou diviser un contenu dense en sections accessibles individuellement, afin de faciliter la lecture pour l’usager.

> **Information**
> Il est recommandé d’utiliser des onglets si vous avez moins de 5 sections. Si vous avez plus de 5 sections, utilisez plutôt des [accordéons](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/accordeon) 
>  N’utilisez pas les onglets pour naviguer entre différentes pages, préférez un menu latéral ou un sommaire.

### Comment utiliser ce composant ?

- **Trier les onglets en fonction des besoins des usagers** , en plaçant le plus important en premier.
- **Séparer le contenu utilement, en sections clairement identifiées** . Dans le cas contraire, les onglets perdent de leur pertinence.
- **Adapter leur utilisation au contexte** . Les onglets ne doivent pas être utilisés si l’usager a besoin de lire le contenu de l’ensemble des sections.
- **Intégrer les onglets dans des pages de contenu de préférence courtes** afin qu’ils ne se perdent pas dans la masse d’information. L’usager doit pouvoir y revenir facilement si nécessaire.

### Règles éditoriales

- **Rédiger un titre d’onglet clair, explicite et concis** . L’utilisateur doit comprendre facilement le contenu proposé par chacun des onglets.

#### Contenu associé

- **[Accordéon](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/accordeon)**  
  Présentation du composant Accordéon permettant à l’usager d’afficher ou de masquer une section de contenu pour alléger une page dense.

- **[Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale)**  
  Présentation du composant Modale permettant de focaliser l’attention de l’usager sur une tâche ou une information sans quitter la page.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/onglet/design-de-l-onglet

![Anatomie de l'onglet](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tab/design/anatomy/anatomy-1.png)

1. Un libellé d’onglet, cliquable, qui permet d’afficher la zone de contenu associée — Obligatoire
2. Une bordure pour l’onglet en état “courant” — Obligatoire
3. Une icône, à gauche du titre — En option
4. Un fond blanc — Obligatoire
5. Une zone de contenu — Obligatoire

### Variations

**Responsive**

*(Démonstration interactive « tabs--tabs » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=tabs--tabs&nav=0&globals=theme%3Alight)*

En mobile, les onglets affichent un scroll horizontal qui permet d’accéder à l’ensemble des sections.

### Tailles

La largeur du composant s’adapte à la taille de son conteneur. Si le nombre d’onglets dépasse la largeur du conteneur, un scroll horizontal permet de naviguer entre les différents onglets.

*(Démonstration interactive « tabs--tabs » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=tabs--tabs&nav=0&globals=theme%3Alight)*

Il est toutefois recommandé de ne pas excéder une largeur de 8 colonnes, s’agissant d’un composant à intégrer au sein de pages de contenu.

Par ailleurs, la largeur des onglets eux-mêmes s’adapte à la taille de leur contenu. C’est pourquoi il est recommandé de proposer des titres concis, afin de permettre la juxtaposition de l’ensemble des onglets, sans forcer le scroll horizontal.

### États

**État au clic**

L’état au clic correspond au comportement constaté par l’usager une fois un onglet sélectionné, après avoir cliqué dessus.

**État au survol**

L’état au survol correspond au comportement constaté par l’usager lorsqu’il survole les onglets.

### Personnalisation

Les onglets ne sont pas personnalisables.

Toutefois, certains éléments sont optionnels et les icônes peuvent être changées - voir la [structure du composant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/onglet) .

> **À faire :** Utiliser uniquement la couleur de fond par défaut des onglets.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tab/design/custom/do-1.png)

> **À ne pas faire :** Ne pas personnaliser la couleur de fond des onglets.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tab/design/custom/dont-1.png)

> **À faire :** Utiliser uniquement la taille de typographie prévue pour le titre des onglets.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tab/design/custom/do-2.png)

> **À ne pas faire :** Ne pas augmenter la taille de typographie du titre des onglets.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tab/design/custom/dont-2.png)

#### Contenu associé

- **[Accordéon](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/accordeon)**  
  Présentation du composant Accordéon permettant à l’usager d’afficher ou de masquer une section de contenu pour alléger une page dense.

- **[Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale)**  
  Présentation du composant Modale permettant de focaliser l’attention de l’usager sur une tâche ou une information sans quitter la page.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/onglet/code-de-l-onglet

### HTML

#### Structure du composant

Le composant **Onglet** est un élément interactif permettant de basculer entre plusieurs sections de contenu.

Sa structure est la suivante :

- Le conteneur des onglets est une balise `<div>` avec la classe `fr-tabs`.
- Les onglets sont contenus dans une liste `<ul>` avec la classe `fr-tabs__list`.
  - La liste possède un rôle `tablist` et attribut `aria-label` précisant le nom du système d'onglets.
- Chaque onglet est un élément `<li>` avec le rôle `presentation` contenant :
  - Un élément `<button>` avec la classe `fr-tabs__tab` et le rôle `tab`.
    - Le bouton doit être de type "button".
    - Le bouton dispose d'un attribut `aria-selected`, sa valeur [true|false] défini si l'onglet est actif.
    - Le bouton dispose d'un attribut `tabindex`, sa valeur [0|-1] défini si l'onglet est actif [0] ou inactif [-1].
    - Le bouton est lié au panneau de contenu via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` du panneau.
- Chaque contenu d'onglet est un élément `<div>` avec la classe `fr-tabs__panel` et le rôle `tabpanel`.
  - Le panneau actif possède la classe `fr-tabs__panel--selected`.
  - Le panneau est lié au bouton de l'onglet via l'attribut `aria-labelledby`, sa valeur doit correspondre à l'attribut `id` du bouton.
  - Son contenu est libre, mais nécessite l'utilisation des balises adéquates, il n'est pas correcte de placer du texte directement dans une `<div>`.

**Exemple de structure HTML**

```html
<div class="fr-tabs">
    <ul class="fr-tabs__list" role="tablist" aria-label="[A modifier | nom du système d'onglet]">
        <li role="presentation">
            <button type="button" id="tab-1" class="fr-tabs__tab" tabindex="0" role="tab" aria-selected="true" aria-controls="tab-1-panel">Libellé onglet 1</button>
        </li>
        <li role="presentation">
            <button type="button" id="tab-2" class="fr-tabs__tab" tabindex="-1" role="tab" aria-selected="false" aria-controls="tab-2-panel">Libellé onglet 2</button>
        </li>
        <li role="presentation">
            <button type="button" id="tab-3" class="fr-tabs__tab" tabindex="-1" role="tab" aria-selected="false" aria-controls="tab-3-panel">Libellé onglet 3</button>
        </li>
    </ul>
    <div id="tab-1-panel" class="fr-tabs__panel fr-tabs__panel--selected" role="tabpanel" aria-labelledby="tab-1" tabindex="0">
        <!-- Contenu du panneau 1 -->
    </div>
    <div id="tab-2-panel" class="fr-tabs__panel" role="tabpanel" aria-labelledby="tab-2" tabindex="0">
        <!-- Contenu du panneau 2 -->
    </div>
    <div id="tab-3-panel" class="fr-tabs__panel" role="tabpanel" aria-labelledby="tab-3" tabindex="0">
        <!-- Contenu du panneau 3 -->
    </div>
</div>
```

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](https://www.systeme-de-design.gouv.fr/version-courante/fr/premiers-pas/vous-etes-developpeur/prise-en-main#les-css) .

**Dépendances CSS**

| Dépendance | Obligatoire | Remarque |
|---|---|---|
| Core | Oui |  |
| Tab | Oui |  |
| Utility | Non | Uniquement pour l'ajout d'icône |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/tab/tab.min.css" rel="stylesheet">
```

#### Variante avec icônes

Les onglets peuvent avoir une icône juxtaposée à gauche, elle est ajoutée via la **classe utilitaire d'icône** `fr-icon--NOM-ICONE` (voir [Icônes](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/icone) ), associée à une **classe de positionnement** de l'icône `fr-tag--icon-left`.

**Exemple de variante avec icônes**

#### Déplier pour voir le code

```html
<div class="fr-tabs">
    <ul class="fr-tabs__list" role="tablist" aria-label="[A modifier | nom du système d'onglet]">
        <li role="presentation">
            <button type="button" id="tab-1" class="fr-tabs__tab fr-icon-checkbox-circle-line fr-tabs__tab--icon-left" tabindex="0" role="tab" aria-selected="true" aria-controls="tab-1-panel">Libellé onglet 1</button>
        </li>
        <li role="presentation">
            <button type="button" id="tab-2" class="fr-tabs__tab fr-icon-checkbox-circle-line fr-tabs__tab--icon-left" tabindex="-1" role="tab" aria-selected="false" aria-controls="tab-2-panel">Libellé onglet 2</button>
        </li>
        <li role="presentation">
            <button type="button" id="tab-3" class="fr-tabs__tab fr-icon-checkbox-circle-line fr-tabs__tab--icon-left" tabindex="-1" role="tab" aria-selected="false" aria-controls="tab-3-panel">Libellé onglet 3</button>
        </li>
    </ul>
    <div id="tab-1-panel" class="fr-tabs__panel fr-tabs__panel--selected" role="tabpanel" aria-labelledby="tab-1" tabindex="0">
        <!-- Contenu du panneau 1 -->
    </div>
    <div id="tab-2-panel" class="fr-tabs__panel" role="tabpanel" aria-labelledby="tab-2" tabindex="0">
        <!-- Contenu du panneau 2 -->
    </div>
    <div id="tab-3-panel" class="fr-tabs__panel" role="tabpanel" aria-labelledby="tab-3" tabindex="0">
        <!-- Contenu du panneau 3 -->
    </div>
</div>
```

#### Variantes 100% largeur du viewport en mobile

Les onglets peuvent s'afficher em mobile sur la totalité de la largeur du viewport avec l'utilisation de la classe `fr-tabs--viewport-width`.

**Exemple de variante 100% largeur du viewport en mobile**

```html
<div class="fr-tabs fr-tabs--viewport-width">
    <!-- Contenu des onglets -->
</div>
```

---

### JavaScript

#### Installation du JavaScript

Pour fonctionner, le composant onglet nécessite l'utilisation de JavaScript. Chaque composant utilisant JavaScript possède un fichier JS spécifique et requiert le fichier JS du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```html
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/tab/tab.module.min.js"></script>
```

NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```html
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/tab/tab.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur l'Onglet, les éléments suivants sont instanciés :

- Le conteneur, via la classe : `fr-tabs`
- La liste des onglets, via la classe : `fr-tabs__list`
- L'onglet, via la classe : `fr-tabs__tab`
- Le panneau d'onglet, via la classe `fr-tabs__panel`

Une fois chargé, le JS ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés.

#### API

Il est possible d'interagir avec les instances du composant en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :

```js
const elem = document.getElementById('ID_TAB');
dsfr(elem).tabsGroup.isEnabled;
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

##### tabsGroup

**current**

| **Description** | Retourne l'API de l'onglet ouvert. |
|---|---|
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).tabsGroup.current` |

**hasFocus**

| **Description** | Renvoie vrai si le focus est sur un des éléments du groupe. |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tabsGroup.hasFocus` |

**index**

| **Description** | Retourne ou modifie l'index de l'onglet courant. |
|---|---|
| **Type** | property |
| **Retour** | Number |
| **Exemple** | `dsfr(elem).tabsGroup.index` <br> `dsfr(elem).tabsGroup.index = 2` |

**isGrouped**

| **Description** | Défini si les onglets du groupe sont liés entre eux ou non. |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tabsGroup.isGrouped` <br> `dsfr(elem).tabsGroup.isGrouped = true` |

**isEnabled**

| **Description** | Défini si le fonctionnement des onglets est activé ou non |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tabsGroup.isEnabled = false` |

**length**

| **Description** | Retourne le nombre d'onglets dans le groupe. |
|---|---|
| **Type** | property |
| **Retour** | Number |
| **Exemple** | `dsfr(elem).tabsGroup.length` |

**members**

| **Description** | Renvoie un tableau d'objets correspondant aux discloses des onglets du groupe. |
|---|---|
| **Type** | property |
| **Retour** | Array |
| **Exemple** | `dsfr(elem).tabsGroup.members` |

**node**

| **Description** | Renvoie le noeud HTML de l'élément. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).tabsGroup.node` |

###### tabsList

**isEnabled**

| **Description** | Défini si le fonctionnement de l'onglet est activé ou non |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tabsList.isEnabled = false` |

**node**

| **Description** | Renvoie le noeud HTML de l'élément. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).tabsList.node` |

###### tabButton

**focus**

| **Description** | Replace le focus sur le bouton |
|---|---|
| **Type** | function |
| **Arguments** | none |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tabButton.focus()` |

**isEnabled**

| **Description** | Défini si le fonctionnement de l'onglet est activé ou non |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tabButton.isEnabled = false` |

**node**

| **Description** | Renvoie le noeud HTML de l'élément. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).tabButton.node` |

###### tabPanel

**disclose**

| **Description** | Ouvre le panneau |
|---|---|
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).tabPanel.disclose()` |

**isDisclosed**

| **Description** | Retourne vrai si le panneau est ouvert |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tabPanel.isDisclosed` |

**group**

| **Description** | Retourne l'API du groupe, ou null s'il n'y a pas de groupe |
|---|---|
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).tabPanel.group` |

**buttons**

| **Description** | Retourne un tableau de boutons d'ouverture du panneau |
|---|---|
| **Type** | property |
| **Retour** | Array |
| **Exemple** | `dsfr(elem).tabPanel.buttons` |

**focus**

| **Description** | Replace le focus sur le bouton du panneau |
|---|---|
| **Type** | function |
| **Arguments** | none |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tabPanel.focus()` |

**isEnabled**

| **Description** | Défini si le fonctionnement de l'onglet est activé ou non |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tabPanel.isEnabled = false` |

**node**

| **Description** | Renvoie le noeud HTML de l'élément. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).tabPanel.node` |

#### Événements

Le Système de Design fournit des événements personnalisés pour les actions uniques de la part de certains composants réactifs listés sur la page de l' [API Javascript](https://www.systeme-de-design.gouv.fr/version-courante/fr/premiers-pas/vous-etes-developpeur/api-javascript) .

Sur les onglets, les événements suivants sont disponibles :

**événements**

| Événement | Action | Élément | Attribut |
|---|---|---|---|
| `dsfr.conceal` | Fermeture de l'onglet | tab panel | `data-fr-js-tab-panel` |
| `dsfr.disclose` | Ouverture de l'onglet | tab panel | `data-fr-js-tab-panel` |
| `dsfr.click` | Click sur le bouton d'ouverture | TabButton | `data-fr-js-tab-button` |

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+tab+)

#### [v1.15.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.15.0) - 17 juillet 2026

- **[déplace le focus au press sur les flèches directionnelles](https://github.com/GouvernementFR/dsfr/pull/1389)**  
  #1389  
  - Lorsque que l'on change d'onglet au clavier, via les touches directionnelles, le focus se positionne sur le bouton actif  
  🐛 fix  
  tab

- **[corrige la marge du variant viewport-width](https://github.com/GouvernementFR/dsfr/pull/1341)**  
  #1341  
  - Retire le calcul de marge en vw, erroné sur firefox qui compte la scrollbar dans le viewport  
  🐛 fix  
  tab

#### [v1.14.2](https://github.com/GouvernementFR/dsfr/releases/tag/v1.14.2) - 17 septembre 2025

- **[ajoute un fond blanc au panel des onglets](https://github.com/GouvernementFR/dsfr/pull/1302)**  
  #1302  
  - Corrige le fond transparent du tab panel
- Corrige la hauteur du panel (4px en trop)  
  🐛 fix  
  tab

#### [v1.13.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.13.0) - 4 décembre 2024

- **[correction de l'ombre au scroll en RTL](https://github.com/GouvernementFR/dsfr/pull/1051)**  
  #1051  
  - Correction de l'ombre au scroll en direction RTL  
  🐛 fix  
  tab

#### [v1.10.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.10.0) - 19 juillet 2023

- **[correction onglets imbriqués en legacy](https://github.com/GouvernementFR/dsfr/pull/628)**  
  #628  
  - correction des marges sur les tabs imbriqués sur IE
- correction disclosure et disclosureGroup IE
- correction syntax error selecteur Collapse  
  🐛 fix  
  tab

- **[correctif tab legacy & margin top des headings](https://github.com/GouvernementFR/dsfr/pull/621)**  
  #621  
  - Corrige la taille de l'icône
- Corrige l'alignement du contenu du tab_panel
- Ajustement du padding de la tab__list
- Retire les margin-top des headings (h1 -> h6)  
  🐛 fix  
  tab core

- **[écoute des événements de clavier déplacé sur la liste d'onglets](https://github.com/GouvernementFR/dsfr/pull/531)**  
  #531  
  L'écoute des événements de clavier se faisant sur le composant, il est impossible d'interagir avec des éléments de formulaire dans le contenu de l'onglet -> l'écoute est déplacée au niveau de la liste des onglets, ce qui en exclut le contenu  
  🐛 fix  
  tab

#### [v1.4.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.4.0) - 16 mars 2022

- **[correction z-index des tab-panels](https://github.com/GouvernementFR/dsfr/pull/232)**  
  #232  
  fix  
  tab

- **[injection js de styles en variables css](https://github.com/GouvernementFR/dsfr/pull/225)**  
  #225  
  fix  
  core tab modal button

#### [v1.3.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.3.0) - 18 janvier 2022

- **[retrait du smooth scroll](https://github.com/GouvernementFR/dsfr/pull/172)**  
  #172  
  fix  
  tab

- **[ajout de l'ombre au scroll & recentrage des boutons](https://github.com/GouvernementFR/dsfr/pull/159)**  
  #159  
  feat  
  tab

- **[ajout modifieur viewport-width](https://github.com/GouvernementFR/dsfr/pull/142)**  
  #142  
  feat  
  tab

- **[corrige le scroll horizontal](https://github.com/GouvernementFR/dsfr/pull/89)**  
  #89  
  fix  
  tab

##### Contenu associé

- **[Accordéon](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/accordeon)**  
  Présentation du composant Accordéon permettant à l’usager d’afficher ou de masquer une section de contenu pour alléger une page dense.

- **[Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale)**  
  Présentation du composant Modale permettant de focaliser l’attention de l’usager sur une tâche ou une information sans quitter la page.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/onglet/accessibilite-de-l-onglet

Le composant **Onglet** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Pour la liste des onglets :

- `Tab` :
  - Lorsque le focus arrive dans la liste des onglets, place le focus sur l'onglet actif.
  - Lorsque le focus est placé sur l'onglet actif, déplace le focus sur le panneau de l'onglet actif.
  - Lorsque le focus est placé sur le panneau de l'onglet actif, déplace le focus sur le prochain élément focalisable.
- `Maj + Tab` :
  - Lorsque le focus est placé sur l'onglet actif, déplace le focus sur l'élément focalisable précédent.
  - Lorsque le focus est placé sur le panneau de l'onglet actif, déplace le focus sur le panneau de l'onglet actif.
- `Flèche gauche` ou `Flèche droite` :
  - Lorsque le focus est placé sur l'onglet actif, navigue entre les onglets.

### Règles d’accessibilité

Le composant **Onglet** s’appuie sur le motif de conception ARIA Tabs de l’[Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/about/introduction/) (APG).

#### Structuration

##### Liste d’onglets

- Le conteneur des onglets a un `role="tablist"`.
- Le système d’onglets doit avoir un nom accessible. On peut utiliser un attribut `aria-label` ou une liaison avec un attribut `aria-labelledby`.
- Chaque élement `<li>` de la liste des onglets a un rôle `presentation`.

##### Onglets

- Chaque onglet a un `role="tab"` et est associé à son panneau avec l’attribut `aria-controls`.
- Un attribut `aria-selected`est placé sur chaque onglet. Sa valeur est définie à :
  - `true` : lorsque l’onglet est sélectionné,
  - `false` : lorsque l’onglet n’est pas sélectionné.
- L’onglet sélectionné est également signalé par la couleur et la forme.
- Les onglets non sélectionnés ont un attribut `tabindex="-1"` pour ne pas prendre le focus.

##### Panneaux de contenu

- Chaque élément contenant le panneau de contenu d’un onglet a le rôle `tabpanel` et un attribut `tabindex="0"` pour aider les technologies d’assistance à naviguer vers le contenu.
- Le panneau est associé à l’onglet avec l’attribut `aria-labelledby`.

#### Scroll horizontal

Le composant utilise le scroll horizontal natif du navigateur lorsque le nombre d’onglets dépasse la largeur du conteneur.

Le critère 13.10 du RGAA ne s’applique donc pas (cas particulier).

#### Contrastes de couleurs

Le composant Onglet est suffisamment contrasté en thème clair et en thème sombre.

---

### Restitution par les lecteurs d’écran

La restitution du système d’onglets est restitué différemment selon les lecteurs d’écran.

- Lorsque le lecteur d’écran est sur la liste d’onglets (`role="tablist"`) : le nom et le rôle sont restitués, sauf sur VoiceOver iOS qui ne restitue rien.
- Lorsque le lecteur d’écran est sur un onglet (`role="tab"`, `aria-selected`) : le nom, le rôle et l’état sont restitués par tous les lecteurs d’écran.
- Lorsque le lecteur d’écran est positionné sur le panneau (`role="tabpanel"`) : le nom, le rôle sont restitués, sauf sur VoiceOver iOS qui ne restitue rien.

#### Versions navigateurs et lecteurs d’écran

Les tests de restitution ont été effectués en ajoutant le lecteur d’écran intégré à Windows 11 (Narrateur) et le navigateur web Chrome à l’environnement de tests du RGAA.

Versions des navigateurs web :

- Firefox 138
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

- **Couleurs :** 3.1, 3.2
- **Scripts :** 7.1, 7.3
- **Présentation de l’information :** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Navigation :** 12.8, 12.9
- **Consultation :** 13.9, 13.11

#### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Motif de conception WAI-ARIA Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)

##### Contenu associé

- **[Accordéon](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/accordeon)**  
  Présentation du composant Accordéon permettant à l’usager d’afficher ou de masquer une section de contenu pour alléger une page dense.

- **[Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale)**  
  Présentation du composant Modale permettant de focaliser l’attention de l’usager sur une tâche ou une information sans quitter la page.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/onglet/demonstration-de-l-onglet

#### Contenu associé

- **[Accordéon](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/accordeon)**  
  Présentation du composant Accordéon permettant à l’usager d’afficher ou de masquer une section de contenu pour alléger une page dense.

- **[Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale)**  
  Présentation du composant Modale permettant de focaliser l’attention de l’usager sur une tâche ou une information sans quitter la page.
