# Menu latéral

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/menu-lateral · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/menu-lateral/design-du-menu-lateral · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/menu-lateral/code-du-menu-lateral · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/menu-lateral/accessibilite-du-menu-lateral · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/menu-lateral/demonstration-du-menu-lateral
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

Le menu latéral est un système de navigation secondaire présentant une liste verticale de liens placée à côté du contenu.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/menu-lateral

### Quand utiliser ce composant ?

Proposer le menu latéral pour permettre à l’usager de naviguer entre les différentes pages d’une rubrique ou d’un même thème.

Il est recommandé d’utiliser le menu latéral sur des sites ayant un niveau de profondeur assez important (2 niveaux de navigation ou plus).

> **Attention**
> Bien différencier le menu latéral du sommaire. Le [sommaire](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/sommaire) est utilisé pour naviguer entre les différentes sections d’une même page. Il ne présente pas des liens mais des ancres.

### Comment utiliser ce composant ?

- **Proposer des pages n’étant pas déjà rattachées à la navigation principale** au sein du menu latéral. Il ne s’agit pas d’une redite mais bien d’une navigation secondaire et complémentaire.
- **Indiquer à l’usager où il se trouve dans la hiérarchie de navigation** en affichant la page active. Pour cela, l’élément de menu correspondant à la page courante doit être en état “actif”.

> **À faire :** Indiquer la page active au sein du menu latéral pour que l’usager sache où il se trouve.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/sidemenu/use/do-1.png)

> **À ne pas faire :** Ne pas laisser l’usager déduire sa position au sein du menu latéral.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/sidemenu/use/dont-1.png)

- **Placer le menu latéral à gauche ou à droite de la page** , selon le besoin. Quel que soit son positionnement, il prend une largeur de 3 colonnes sur toute la hauteur de la page.

> **À faire :** Positionner le menu latéral à gauche ou à droite du contenu, sur une largeur de 3 colonnes, sur toute la hauteur de la page.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/sidemenu/use/do-2.png)

> **À ne pas faire :** Ne pas repasser le contenu de la page sur une grille de 12 colonnes en présence d’un menu latéral.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/sidemenu/use/dont-2.png)

- **Réintégrer les éléments de navigation du menu latéral dans le menu burger** si vous choisissez de le cacher en version mobile.

### Règles éditoriales

- **Garder le même nom de rubrique dans le menu et dans le contenu** , pour donner un repère à l’usager.

> **À faire :** Avoir le même nom de rubrique dans le contenu et au sein du menu latéral.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/sidemenu/edit/do-1.png)

> **À ne pas faire :** Ne pas changer le nom de la rubrique au sein du menu latéral pour ne pas perdre l’usager.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/sidemenu/edit/dont-1.png)

- **Raccourcir les titres des liens au sein du menu latéral par rapport aux titres véritables des pages** si ces derniers apparaissent trop longs.

#### Contenu associé

- **[Fil d'Ariane](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/fil-d-ariane)**  
  Présentation du composant fil d’Ariane, navigation secondaire permettant à l’usager de se repérer dans l’arborescence d’un site et de revenir à un niveau supérieur.

- **[Sommaire](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/sommaire)**  
  Présentation du composant Sommaire permettant à l’usager de naviguer facilement entre les sections d’une page longue à l’aide de liens ancrés.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/menu-lateral/design-du-menu-lateral

![Anatomie du menu latéral](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/sidemenu/design/anatomy/anatomy-1.png)

1. Le titre de la rubrique — En option
2. Un chevron orienté vers le bas, indiquant que la section du menu peut s‘ouvrir. Il est orienté vers le haut quand la section peut se refermer — Obligatoire
3. Un séparateur — Obligatoire
4. Une bordure lorsque l’item est en état “courant” — Obligatoire
5. Des liens directs ou dépliants, à minima pour le niveau 1 — Obligatoire

### Variations

**Menu latéral avec un seul niveau d’arborescence (accès direct)**

*(Démonstration interactive « sidemenu--link » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=sidemenu--link&nav=0&globals=theme%3Alight)*

Il est composé d’une liste de liens vers les pages de la rubrique courante.

**Menu latéral avec deux niveaux d’arborescence**

*(Démonstration interactive « sidemenu--sidemenu » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=sidemenu--sidemenu&nav=0&globals=theme%3Alight)*

Il permet d’afficher les niveaux secondaires d’une rubrique. Le clic sur le premier niveau fait apparaitre la liste des liens lui étant rattachée.

**Menu latéral avec trois niveaux d’arborescence**

*(Démonstration interactive « sidemenu--submenu-sidemenu » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=sidemenu--submenu-sidemenu&nav=0&globals=theme%3Alight)*

Il permet d’afficher les niveaux 1, 2 et 3 imbriqués d’une rubrique.

**Menu latéral fixe**

Le menu latéral peut également s’afficher de manière fixe sur votre page, afin de rester visible tout au long de la navigation de l’utilisateur sur la page ouverte.

**Menu latéral fixe, affiché sur 100% de la hauteur de page**

Enfin vous pouvez afficher un menu latéral fixe sur 100% de la hauteur de votre page.

**Responsive**

*(Démonstration interactive « sidemenu--sidemenu » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=sidemenu--sidemenu&nav=0&globals=theme%3Alight)*

En version mobile, le menu latéral est masqué par défaut et est remplacé par le bouton ‘Dans cette rubrique'. Au clic sur ce dernier, le menu se déplie et affiche l’ensemble de la liste de liens.

### Tailles

Le menu latéral prend une largeur fixe de 3 colonnes.

### États

**État au clic**

L’état au clic correspond au comportement constaté par l’usager une fois une section du menu latéral ouverte, après avoir cliqué sur le premier niveau de navigation.

**État au survol**

L’état au survol correspond au comportement constaté par l’usager lorsqu’il survole une section ou un lien du menu latéral avec sa souris. Il existe 2 états au survol :

- Lorsque la section est fermée ou qu’il s’agit d’un lien direct
- Lorsque la section est ouverte

**État actif**

L’état actif correspond au comportement constaté par l’usager après avoir cliqué sur un des liens du menu latéral. Il renseigne sur la page courante en cours de consultation.

### Personnalisation

Le menu latéral n’est pas personnalisable.

Toutefois, certains éléments sont optionnels - voir [la structure du composant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/menu-lateral/design-du-menu-lateral#menu-lateral) .

> **À faire :** Utiliser uniquement la couleur bleu pour la page active du menu latéral.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/sidemenu/design/custom/do-1.png)

> **À ne pas faire :** Ne pas personnaliser la couleur de la page active du menu latéral.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/sidemenu/design/custom/dont-1.png)

#### Contenu associé

- **[Fil d'Ariane](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/fil-d-ariane)**  
  Présentation du composant fil d’Ariane, navigation secondaire permettant à l’usager de se repérer dans l’arborescence d’un site et de revenir à un niveau supérieur.

- **[Sommaire](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/sommaire)**  
  Présentation du composant Sommaire permettant à l’usager de naviguer facilement entre les sections d’une page longue à l’aide de liens ancrés.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/menu-lateral/code-du-menu-lateral

### HTML

#### Structure du composant

Le composant **Menu latéral** permet aux utilisateurs de naviguer entre les différentes pages d’une rubrique ou d’un même thème.

Sa structure est conçue pour s’adapter aux écrans mobiles et comprend les éléments suivants :

- Le conteneur principal, obligatoire, du menu latéral est un élément HTML `<nav>` défini par la classe `fr-sidemenu`.
  - Il dispose d'attribut `aria-labelledby`, dont la valeur doit correspondre à l'attribut `id` du titre du menu latéral.
- Le conteneur intérieur, obligatoire, du menu latéral est un élément HTML `<div>` défini par la classe `fr-sidemenu__inner`, contenant :
  - Le bouton d'ouverture, obligatoire, affiché uniquement en mobile est un élément HTML `<button>` de type `button` défini par la classe `fr-sidemenu__btn`.
    - Le libellé du bouton indique l'action d'ouverture du menu latéral en vue mobile.
    - Le bouton dispose d'un attribut `aria-expanded`, sa valeur [true|false] défini si le bloc refermable du menu latéral est ouvert ou fermé.
    - Le bouton est lié au bloc refermable via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` du bloc refermable.
  - Le bloc refermable, obligatoire, défini par la classe `fr-collapse`, est un élément HTML `<div>` placé après le bouton. Il s'agit d'un élément générique du core utilisé par d'autres composants tels que la navigation ou l'accordéon.
    - Il dispose d'un attribut `id` obligatoire, pour être lié au bouton d'ouverture.
    - Le bloc refermable contient :
      - Le titre, optionnel, du menu latéral est un élément HTML `<div>` défini par la classe `fr-sidemenu__title`.
      - La liste de liens ou de sous-sections, obligatoire, est un élément HTML `<ul>` placé après le titre et défini par la classe `fr-sidemenu__list`.
        - Chaque élément `<li>` défini par la classe `fr-sidemenu__item` de la liste contient :
          - Un lien, un élément HTML `<a>` défini par la classe `fr-sidemenu__link`.
          - L'élément actif de la liste est défini par la classe `fr-sidemenu__item--active` et le lien contenu dispose d'un attribut `aria-current="page"`.

**Exemple de structure HTML simple**

```html
<nav class="fr-sidemenu" aria-labelledby="fr-sidemenu-title">
  <div class="fr-sidemenu__inner">
    <button class="fr-sidemenu__btn" aria-controls="fr-sidemenu-wrapper" aria-expanded="false">Dans cette rubrique</button>
    <div class="fr-collapse" id="fr-sidemenu-wrapper">
      <div class="fr-sidemenu__title" id="fr-sidemenu-title">Titre de rubrique</div>
      <ul class="fr-sidemenu__list">
        <li class="fr-sidemenu__item fr-sidemenu__item--active">
          <a class="fr-sidemenu__link" href="#" target="_self" aria-current="page">Accès direct</a>
        </li>
        <li class="fr-sidemenu__item">
          <a class="fr-sidemenu__link" href="#" target="_self">Accès direct</a>
        </li>
        <li class="fr-sidemenu__item">
          <a class="fr-sidemenu__link" href="#" target="_self">Accès direct</a>
        </li>
        <li class="fr-sidemenu__item">
          <a class="fr-sidemenu__link" href="#" target="_self">Accès direct</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

#### Sous-sections

Le menu latéral peut contenir jusqu'à trois niveaux d’arborescence et permettent d’afficher les niveaux 1, 2 et 3 imbriqués d’une rubrique.

- Le conteneur d'une sous-section est un élément de la liste de liens `<li>` défini par la classe `fr-sidemenu__item` contenant :
  - Le bouton d'ouverture de la sous-section, un élément HTML `<button>` de type `button` défini par la classe `fr-sidemenu__btn`.
    - Le libellé du bouton indique le nom de la sous-section.
    - Le bouton dispose d'un attribut `aria-expanded`, sa valeur [true|false] défini si le bloc refermable de la sous-section est ouvert ou fermé.
    - Le bouton est lié au bloc refermable via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` du bloc refermable.
    - Le bouton dispose d'un attribut `aria-current`, sa valeur [true|false] défini si le bouton est actif.
  - Le bloc refermable, défini par la classe `fr-collapse`, est un élément HTML `<div>` placé après le bouton.
    - Il dispose d'un attribut `id` obligatoire, pour être lié au bouton d'ouverture.
    - Le bloc refermable contient une liste de liens pouvant contenir un troisième niveau d'imbrication du menu latéral basé sur la même structure de sous-section.

**Exemple de structure HTML**

#### Déplier pour voir le code

```html
<nav class="fr-sidemenu" role="navigation" aria-labelledby="sidemenu-title">
  <div class="fr-sidemenu__inner">
    <button aria-expanded="false" aria-controls="sidemenu" type="button" class="fr-sidemenu__btn">Dans cette rubrique</button>
    <div class="fr-collapse" id="sidemenu">
      <p class="fr-sidemenu__title" id="sidemenu-title">Titre de rubrique</p>
      <ul class="fr-sidemenu__list">
        <li class="fr-sidemenu__item">
          <button aria-expanded="true" aria-controls="sidemenu-submenu-level-02" aria-current="true" type="button" class="fr-sidemenu__btn">Entrée menu active</button>
          <div class="fr-collapse" id="sidemenu-submenu-level-02">
            <ul class="fr-sidemenu__list">
              <li class="fr-sidemenu__item">
                <a href="#" class="fr-sidemenu__link">Accès direct niveau 2</a>
              </li>
              <li class="fr-sidemenu__item">
                <button aria-expanded="true" aria-controls="sidemenu-submenu-level-03" aria-current="true" type="button" class="fr-sidemenu__btn">Entrée menu active</button>
                <div class="fr-collapse" id="sidemenu-submenu-level-03">
                  <ul class="fr-sidemenu__list">
                    <li class="fr-sidemenu__item">
                      <a href="#" class="fr-sidemenu__link">Accès direct niveau 3</a>
                    </li>
                    <li class="fr-sidemenu__item">
                      <a aria-current="page" href="#" class="fr-sidemenu__link">Accès direct niveau 3</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li class="fr-sidemenu__item">
          <a href="#" class="fr-sidemenu__link">Accès direct</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
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
| Sidemenu | Oui |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/sidemenu/sidemenu.min.css" rel="stylesheet">
```

#### Variante de menu latéral fixe

Le menu latéral peut s’afficher de manière fixe sur votre page, afin de rester visible tout au long de la navigation de l’utilisateur sur la page ouverte avec l'utilisation de la classe `fr-sidemenu--sticky`.

**Exemples de variante de menu latéral fixe**

```html
<nav class="fr-sidemenu fr-sidemenu--sticky" role="navigation" aria-labelledby="sidemenu-sticky-title">
    <!-- Contenu du menu latéral fixe -->
</nav>
```

#### Variante de menu latéral fixe, affiché sur 100% de la hauteur de page

Le menu latéral peut s’afficher de manière fixe sur 100% de la hauteur de votre page avec l'utilisation de la classe `fr-sidemenu--sticky-full-height`.

**Exemples de variante de menu latéral fixe, affiché sur 100% de la hauteur de page**

```html
<nav class="fr-sidemenu fr-sidemenu--sticky-full-height" role="navigation" aria-labelledby="sidemenu-sticky-full-height-title">
    <!-- Contenu du menu latéral fixe, affiché sur 100% de la hauteur de page -->
</nav>
```

#### Variante de menu latéral à droite de la page

Le menu latéral peut être placé à droite de la page avec l'utilisation de la classe `fr-sidemenu--right` afin que la bordure se positionne à gauche du menu. On peut également le rendre fixe avec l'utilisation de la classe `fr-sidemenu--sticky`.

**Exemples de variante de menu latéral à droite de la page**

```html
<nav class="fr-sidemenu fr-sidemenu--right" role="navigation" aria-labelledby="sidemenu-right-title">
    <!-- Contenu du menu latéral à droite de la page -->
</nav>
```

---

### JavaScript

#### Installation du JavaScript

Pour fonctionner le composant menu latéral nécessite l'utilisation de JavaScript. Chaque composant utilisant javascript possède un fichier Js spécifique et requiert le fichier Js du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```html
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/sidemenu/sidemenu.module.min.js"></script>
```

NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```html
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/sidemenu/sidemenu.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur le menu latéral, les éléments suivants sont instanciés :

- La liste de liens, via la classe : `fr-sidemenu__list`.
- Les éléments de la liste, via la classe : `fr-sidemenu__item`.
- Le bouton d'ouverture, via la classe `fr-sidemenu__btn`.
- La sous-section, via la classe `fr-collapse`.

Une fois chargé, le Js ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés.

#### API

Il est possible d'interagir avec les instances du composants en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :

```js
const elem = document.getElementById('ID_SOUS_SECTION');
dsfr(elem).collapse.disclose();
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

##### sidemenuList

**current**

| **Description** | Retourne l'API de la sous-section ouverte. <br> *Si aucune sous-section n'est ouverte, ou si plusieurs sous-sections sont ouvertes, renvoie `null`.* |
|---|---|
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).sidemenuList.current` |

**hasFocus**

| **Description** | Renvoie vrai si le focus est sur un des éléments du groupe. |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).sidemenuList.hasFocus` |

**index**

| **Description** | Retourne ou modifie l'index de la sous-section courante. <br> *Si aucune sous-section n'est ouverte, l'index vaut 0.* |
|---|---|
| **Type** | property |
| **Retour** | Number |
| **Exemple** | `dsfr(elem).sidemenuList.index` <br> `dsfr(elem).sidemenuList.index = 2` |

**isGrouped**

| **Description** | Défini si les sous-sections du groupe sont liées en eux ou non. <br> *Si `true`, lorsqu'une sous-section est ouverte les autres se referment. Si `false`, il est possible d'en ouvrir plusieurs. Si l'attribut n'est pas défini les sous-sections sont groupées par défaut.* |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).sidemenuList.isGrouped` <br> `dsfr(elem).sidemenuList.isGrouped = true` |

**length**

| **Description** | Retourne le nombre de sous-sections dans le groupe. |
|---|---|
| **Type** | property |
| **Retour** | Number |
| **Exemple** | `dsfr(elem).sidemenuList.length` |

**members**

| **Description** | Renvoie un tableau d'objets correspondant aux sous-sections du groupe. |
|---|---|
| **Type** | property |
| **Retour** | Array |
| **Exemple** | `dsfr(elem).sidemenuList.members` |

**node**

| **Description** | Renvoie le noeud HTML de l'élément. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).sidemenuList.node` |

##### sidemenuItem

**isEnabled**

| **Description** | Défini si le fonctionnement du menu latéral est activé ou non |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).sidemenuItem.isEnabled = false` |

**node**

| **Description** | Renvoie le noeud HTML de l'élément. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).sidemenuItem.node` |

##### collapseButton

**focus**

| **Description** | Replace le focus sur le bouton |
|---|---|
| **Type** | function |
| **Arguments** | none |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).collapseButton.focus()` |

**isEnabled**

| **Description** | Défini si le fonctionnement du bouton du menu latéral est activé ou non |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).collapseButton.isEnabled = false` |

**node**

| **Description** | Renvoie le noeud HTML de l'élément. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).collapseButton.node` |

##### collapse

**conceal**

| **Description** | Ferme la sous-section |
|---|---|
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).collapse.conceal()` |

**disclose**

| **Description** | Ouvre la sous-section |
|---|---|
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).collapse.disclose()` |

**isDisclosed**

| **Description** | Retourne vrai si la sous-section est ouverte |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).collapse.isDisclosed` |

**isEnabled**

| **Description** | Défini si le fonctionnement du menu latéral est activé ou non |
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

| **Description** | Retourne un tableau de boutons d'ouverture de la sous-section |
|---|---|
| **Type** | property |
| **Retour** | Array |
| **Exemple** | `dsfr(elem).collapse.buttons` |

**focus**

| **Description** | Replace le focus sur le bouton de la sous-section |
|---|---|
| **Type** | function |
| **Arguments** | none |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).collapse.focus()` |

**parent**

| **Description** | Retourne l'instance du dsfr parent, ici le menu latéral |
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

Dans la version mobile du menu latéral et sur chaque menu déroulant du menu latéral, les événements suivants sont disponibles :

**événements**

| Événement | Action | Élément | Attribut |
|---|---|---|---|
| `dsfr.conceal` | Fermeture de l'élément | Collapse | `data-fr-js-collapse` |
| `dsfr.disclose` | Ouverture de l'élément | Collapse | `data-fr-js-collapse` |
| `dsfr.click` | Click sur le bouton d'ouverture | CollapseButton | `data-fr-js-collapse-button` |

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+sidemenu+)

#### [v1.15.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.15.0) - 17 juillet 2026

- **[correction des éléments désactivés](https://github.com/GouvernementFR/dsfr/pull/1419)**  
  #1419  
  🐛 fix  
  sidemenu

- **[corrige l'affichage mobile lors d'une utilisation sans accordéon](https://github.com/GouvernementFR/dsfr/pull/1403)**  
  #1403  
  Sans accordéon, le composant est rendu avec deux erreurs :  
  - Les éléments de premier niveau sont séparés par deux bordures
- Quand il n'y a qu'un sous-élément, une bordure est dessinée entre celui-ci et le premier niveau.  
  🐛 fix  
  sidemenu

#### [v1.13.2](https://github.com/GouvernementFR/dsfr/releases/tag/v1.13.2) - 15 mai 2025

- **[collapses ouverts au chargement](https://github.com/GouvernementFR/dsfr/pull/1140)**  
  #1140  
  - Ajout de la classe `fr-collapse--expanded` en html, sur les collapse ouverts par défaut, pour éviter l'ouverture après le chargement du js.
- Ajout d'exemples d'accordéon et sidemenu avec collapses ouverts au chargement  
  🐛 fix  
  sidemenu accordion

#### [v1.13.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.13.1) - 26 mars 2025

- **[correctif template ejs](https://github.com/GouvernementFR/dsfr/pull/1073)**  
  #1073  
  - Correctif des variables des templates sidemenu, navigation, header  
  🐛 fix  
  sidemenu navigation header

#### [v1.13.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.13.0) - 4 décembre 2024

- **[correction focus croppé](https://github.com/GouvernementFR/dsfr/pull/1008)**  
  #1008  
  - Correction du focus croppé sur la navigation latérale
- Correction du focus croppé sur le header en mobile  
  🐛 feat  
  header sidemenu

#### [v1.11.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.0) - 11 décembre 2023

- **[correction marge interne](https://github.com/GouvernementFR/dsfr/pull/793)**  
  #793  
  - retire 1v de padding gauche et droite sur `fr-sidemenu__inner` en desktop  
  🐛 fix  
  sidemenu

#### [v1.10.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.10.0) - 19 juillet 2023

- **[correction de la couleur des liens du sidemenu](https://github.com/GouvernementFR/dsfr/pull/698)**  
  #698  
  - Effet de bord du passage du bouton mobile en bleu, l'ensemble des boutons du sidemenu est passé en bleu.
- Ce correctif amène la spécificité nécessaire pour avoir les boutons et lien en `text default grey`  
  🐛 fix  
  sidemenu

- **[homogénéisation des espacements et indentation](https://github.com/GouvernementFR/dsfr/pull/678)**  
  #678  
  - Uniformisation du menu latéral, navigation, et accordéon
  - ajout d'un fond open-blue-france et du texte en blue-france sur les boutons d'ouverture en état ouvert
  - ajout de marge pour indenter les sous menus
  - ajustement des espacements
- Ajustement de la navigation du header en mobile
- Ajustement de la taille max de la navigation dans le header en desktop  
  ✨ feat  
  navigation header sidemenu

- **[suppression variante et correctif style bouton mobile](https://github.com/GouvernementFR/dsfr/pull/660)**  
  #660  
  - Suppression de la variante avec bordure
- Corrige le style du bouton mobile en action-high-blue-france (cohérence navigation/accordion)  
  🐛 fix  
  sidemenu

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

- **[niveau de titre des composants](https://github.com/GouvernementFR/dsfr/pull/420)**  
  #420  
  fix  
  tile summary sidemenu

- **[sidemenu disparait à l'ouverture modale FF](https://github.com/GouvernementFR/dsfr/pull/406)**  
  #406  
  fix  
  sidemenu

#### [v1.6.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.6.0) - 14 juin 2022

- **[changement balise du titre](https://github.com/GouvernementFR/dsfr/pull/290)**  
  #290  
  fix  
  sidemenu

#### [v1.4.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.4.0) - 16 mars 2022

- **[correction hauteur & scroll sidemenu sticky](https://github.com/GouvernementFR/dsfr/pull/243)**  
  #243  
  fix  
  sidemenu

- **[correction hauteur sidemenu sticky](https://github.com/GouvernementFR/dsfr/pull/223)**  
  #223  
  fix  
  sidemenu

#### [v1.3.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.3.1) - 7 février 2022

- **[correction focus coupés](https://github.com/GouvernementFR/dsfr/pull/204)**  
  #204  
  fix  
  navigation sidemenu

#### [v1.2.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.2.1) - 29 novembre 2021

- **[correction du hover des liens](https://github.com/GouvernementFR/dsfr/pull/151)**  
  #151  
  fix  
  sidemenu

- **[ajoute le chevron sur le aria-expanded](https://github.com/GouvernementFR/dsfr/pull/146)**  
  #146  
  feat  
  sidemenu

#### [v1.2.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.2.0) - 17 novembre 2021

- **[bordures en desktop](https://github.com/GouvernementFR/dsfr/pull/77)**  
  #77  
  fix  
  sidemenu

##### Contenu associé

- **[Fil d'Ariane](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/fil-d-ariane)**  
  Présentation du composant fil d’Ariane, navigation secondaire permettant à l’usager de se repérer dans l’arborescence d’un site et de revenir à un niveau supérieur.

- **[Sommaire](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/sommaire)**  
  Présentation du composant Sommaire permettant à l’usager de naviguer facilement entre les sections d’une page longue à l’aide de liens ancrés.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/menu-lateral/accessibilite-du-menu-lateral

Le composant **Menu latéral** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

- `Entrée` ou `Espace` :
  - Lorsque le focus est placé sur le bouton d'ouverture du menu latéral, et que sa sous-section associée est fermée, ouvre la sous-section.
  - Lorsque le focus est placé sur le bouton d'ouverture du menu latéral, et que sa sous-section associée est déjà ouverte, referme la sous-section.
- `Tab` : Place le focus sur le prochain élément focalisable.
- `shift` + `Tab` : Place le focus sur l'élément focalisable précédent.

### Règles d’accessibilité

#### Structuration

- Le menu latéral est un système de navigation secondaire. Il doit être structuré dans un élément `nav role="navigation"`.
- Le conteneur principal du menu latéral possède un attribut `aria-labelledby` défini sur l’ID du titre du menu latéral afin de nommer et donner un contexte explicite à la navigation.
- Les éléments du menu latéral sont structurés dans une liste avec les éléments `ul` et `li`.

##### Éléments actifs

- Le lien actif dispose d’un attribut `aria-current="page"`.
- Si une sous-section associée à un bouton d'ouverture de la navigation est active, le bouton a un attribut `aria-current` défini sur "true".

##### Entrée de menu

- Les boutons d’ouverture et de fermeture des menus déroulants et mega-menus possèdent :
  - un attribut `aria-expanded` défini à `true`lorsque le sous-menu est affiché, à `false`lorsque la sous-section est fermée.
  - un attribut `aria-controls` défini sur l'ID du bloc refermable associé.

#### Contrastes de couleurs

Le composant Menu latéral est suffisamment contrasté en thème clair.

En thème sombre, le contraste est insuffisant au survol sur les items de menu actifs.

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Menu latéral.

---

### Critères RGAA applicables

- **Couleurs** : 3.1, 3.2
- **Liens** : 6.1, 6.2
- **Scripts** : 7.1, 7.3
- **Structuration** : 9.2, 9.3
- **Présentation de l’information** : 10.1, 10.2, 10.3,10.4, 10.5, 10.7, 10.8, 10.11, 10.12
- **Navigation** : 12.2, 12.6, 12.8, 12.9
- **Consultation :** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Élément nav](https://html.spec.whatwg.org/#the-nav-element)

##### Contenu associé

- **[Fil d'Ariane](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/fil-d-ariane)**  
  Présentation du composant fil d’Ariane, navigation secondaire permettant à l’usager de se repérer dans l’arborescence d’un site et de revenir à un niveau supérieur.

- **[Sommaire](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/sommaire)**  
  Présentation du composant Sommaire permettant à l’usager de naviguer facilement entre les sections d’une page longue à l’aide de liens ancrés.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/menu-lateral/demonstration-du-menu-lateral

#### Contenu associé

- **[Fil d'Ariane](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/fil-d-ariane)**  
  Présentation du composant fil d’Ariane, navigation secondaire permettant à l’usager de se repérer dans l’arborescence d’un site et de revenir à un niveau supérieur.

- **[Sommaire](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/sommaire)**  
  Présentation du composant Sommaire permettant à l’usager de naviguer facilement entre les sections d’une page longue à l’aide de liens ancrés.
