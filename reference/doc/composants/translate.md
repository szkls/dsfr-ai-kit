# Sélecteur de langues

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/selecteur-de-langues · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/selecteur-de-langues/design-du-selecteur-de-langues · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/selecteur-de-langues/code-du-selecteur-de-langues · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/selecteur-de-langues/accessibilite-du-selecteur-de-langues · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/selecteur-de-langues/demonstration-du-selecteur-de-langues
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

Le sélecteur de langues est un élément d’interaction avec l’interface permettant à l’usager de choisir la langue dans laquelle est affiché le contenu du site.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/selecteur-de-langues

*(Démonstration interactive « translate--translate » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=translate--translate&nav=0&globals=theme%3Alight)*

### Quand utiliser ce composant ?

**Utiliser le sélecteur de langues dès lors qu’un site est disponible en plusieurs langues.**

> **Information**
> Son usage est préconisé à partir de trois langues au moins (en général, il s’agira du français et deux autres langues), bien qu’il est techniquement possible d’utiliser le sélecteur de langue pour un site en deux langues. Cependant, en vertu de [la loi n° 94-665 du 4 août 1994 relative à l'emploi de la langue française](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000349929/2022-06-17/) , et conformément à [la politique gouvernementale constante en faveur du plurilinguisme](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000000411109) , nous recommandons fortement de proposer une traduction en deux langues au moins (en plus du français).

### Comment utiliser ce composant ?

- **Intégrer le sélecteur de langues dans l’en-tête du site** , en lieu et place d’un accès rapide parmi les 3 disponibles. Lorsqu’il est présent, il est forcément sur l’accès rapide le plus à droite (le dernier en mobile), à part quand un bouton tertiaire encadré y est déjà présent (par exemple : “Connexion”).

> **À faire :** Proposer le sélecteur de langues en remplacement d’un des accès rapides parmi les trois disponibles.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/translate/use/do-1.png)

> **À ne pas faire :** Ne pas ajouter un accès rapide en plus pour y intégrer le sélecteur de langues.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/translate/use/dont-1.png)

> **À faire :** Placer systématiquement le sélecteur de langues sur l’emplacement le plus à droite des accès rapides.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/translate/use/do-2.png)

> **À ne pas faire :** Ne pas proposer le sélecteur de langues sur un emplacement autre que celui le plus à droite des accès rapides.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/translate/use/dont-2.png)

- **Proposer autant de langues que souhaité** tout en considérant que les symboles dans les librairies ne prévoient que jusqu'à huit langues maximum.

### Règles éditoriales

- **Indiquer une langue par [son code ISO](https://fr.wikipedia.org/wiki/Liste_des_codes_ISO_639-1) puis son nom en toutes lettres, dans la langue cible** .

> **À faire :** Indiquer chaque langue par son code ISO et son nom en toutes lettres, dans la langue cible.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/translate/edit/do-1.png)

> **À ne pas faire :** Ne pas dissocier le nom indiqué de la langue cible.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/translate/edit/dont-1.png)

#### Contenu associé

- **[Bouton](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton)**  
  Présentation du composant Bouton permettant à l’usager d’exécuter une action dans une interface numérique.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/selecteur-de-langues/design-du-selecteur-de-langues

![Anatomie du sélecteur de langue](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/translate/design/anatomy/anatomy-1.png)

1. Un bouton tertiaire avec icône — Obligatoire
2. L’item de la langue active — Obligatoire
3. Une liste déroulante des autres langues disponibles — Obligatoire
4. Un séparateur, entre chaque proposition de langue — Obligatoire

### Variations

**Bouton avec bordure**

*(Démonstration interactive « translate--button-tertiary » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=translate--button-tertiary&nav=0&globals=theme%3Alight)*

**Bouton sans bordure**

*(Démonstration interactive « translate--button-tertiary-no-outline » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=translate--button-tertiary-no-outline&nav=0&globals=theme%3Alight)*

En desktop, la langue active est affichée dans le bouton sans son nom en toutes lettres (dans un souci de place) puis la liste déroulante reprend la langue active avant d’afficher les options.

En mobile, la langue active est affichée en entier mais n’est pas répétée dans la liste déroulante.

### Tailles

Le sélecteur de langues propose une taille unique, non personnalisable.

### États

**Etat au clic**

L’état au clic correspond au comportement constaté par l’usager une fois la liste déroulante ouverte, après avoir cliqué sur le bouton.

**Etat au survol**

L’état au survol correspond au comportement constaté par l’usager lorsqu’il survole le bouton avec sa souris. Il existe 2 états au survol :

- Lorsque le bouton est non cliqué
- Lorsque le bouton est cliqué

### Personnalisation

Le sélecteur de langues n’est pas personnalisable.

Toutefois, certains éléments sont optionnels - voir [la structure du composant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/selecteur-de-langues/design-du-selecteur-de-langues#selecteur-de-langue) .

> **À faire :** Garder un fond transparent pour le sélecteur de langues.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/translate/design/custom/do-1.png)

> **À ne pas faire :** Ne pas appliquer de fond au sélecteur de langues.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/translate/design/custom/dont-1.png)

> **À faire :** Personnaliser le sélecteur de langues en y ajoutant une bordure.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/translate/design/custom/do-2.png)

> **À ne pas faire :** Ne pas proposer une autre variation de bouton pour le sélecteur de langues.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/translate/design/custom/dont-2.png)

#### Contenu associé

- **[Bouton](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton)**  
  Présentation du composant Bouton permettant à l’usager d’exécuter une action dans une interface numérique.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/selecteur-de-langues/code-du-selecteur-de-langues

### HTML

#### Structure du composant

Le composant **Sélecteur de langue** permet de choisir la langue de l'interface. Sa structure, reposant sur le modèle du composant **Navigation principale** est la suivante :

- Le sélecteur de langue est un élément HTML `<div>` défini par les classes `fr-translate` et `fr-nav`.
- Il doit contenir un élément HTML `<div>` défini par la classe `fr-nav__item`, contenant :
  - Un `<button>` de type "button".
    - Il est défini par les classes `fr-translate__btn`, `fr-btn` et `fr-btn--tertiary`.
    - Le libellé du bouton doit reprendre l'abréviation de la langue active (ex: "FR") ainsi que hors écran le libellé explicite de la langue active (ex: `<span
       class="fr-hidden-lg">&nbsp;-
       Français</span>`)
    - Le bouton dispose d'un attribut `title`, sa valeur doit être "Sélectionner une langue".
    - Le bouton dispose d'un attribut `aria-expanded`, sa valeur [true|false] défini si le collapse est ouvert ou fermé
    - Le bouton est lié au collapse via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` du collapse.
  - Un bloc refermable, défini par les classes `fr-collapse`, `fr-translate__menu` et `fr-menu`, est une `<div>` placée après le bouton. Il s'agit d'un élément générique du core utilisé par d'autres composants tels que la navigation ou la transcription.
    - Il dispose d'un attribut `id` obligatoire, pour être lié au bouton d'ouverture.
    - Son contenu est composé d'une liste d'éléments `<ul>` définie par la classe `fr-menu__list` :
      - Chaque langue cible dans le menu est un élément `<li>`, contenant un lien `<a>` défini par les classes `fr-translate__language` et `fr-nav__link`.
      - Le libellé des liens est composé de l'abréviation de la langue et du libellé explicite de la langue (ex: "FR - Français").
      - Les liens disposent d'un attribut `hreflang` et un attribut `lang`, dont les valeurs spécifient la langue cible.
      - La langue active dispose d'un attribut `aria-current="true"`.

**Exemple de structure HTML**

```html
<div class="fr-translate fr-nav">
    <div class="fr-nav__item">
        <button aria-controls="translate-menu" aria-expanded="false" title="Sélectionner une langue" type="button" class="fr-translate__btn fr-btn fr-btn--tertiary">FR<span class="fr-hidden-lg">&nbsp;- Français</span>
        </button>
        <div class="fr-collapse fr-translate__menu fr-menu" id="translate-menu">
            <ul class="fr-menu__list">
                <li>
                    <a class="fr-translate__language fr-nav__link" hreflang="fr" lang="fr" href="/fr/" aria-current="true">FR - Français</a>
                </li>
                <li>
                    <a class="fr-translate__language fr-nav__link" hreflang="en" lang="en" href="/en/">EN - English</a>
                </li>
            </ul>
        </div>
    </div>
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
| Button | Oui |
| Navigation | Oui |
| Translate | Oui |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/button/button.min.css" rel="stylesheet">
<link href="dist/component/navigation/navigation.min.css" rel="stylesheet">
<link href="dist/component/translate/translate.min.css" rel="stylesheet">
```

#### Variantes de sélecteur de langue sans bordure

Le sélecteur de langue peut être utilisé avec un bouton sans bordure avec l'utilisation de la classe `fr-btn--tertiary-no-outline` sur le bouton.

**Exemples de sélecteur de langue sans bordure**

```html
<div class="fr-translate fr-nav">
    <div class="fr-nav__item">
        <button aria-controls="translate" aria-expanded="false" type="button" class="fr-translate__btn fr-btn fr-btn--tertiary-no-outline">FR<span class="fr-hidden-lg">&nbsp;- Français</span>
        </button>
        <!-- Liste des langues -->
    </div>
</div>
```

---

### JavaScript

Pour fonctionner le composant Sélecteur de langue nécessite l'utilisation de JavaScript. Ses fonctionnalités sont disponibles dans le core et le composant [Navigation](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale/code-de-la-navigation-principale) .

Il est donc nécessaire d'importer ces fichiers js à la fin de la page (avant `</body>`) :

```html
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/navigation/navigation.module.min.js"></script>
```

NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```html
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/navigation/navigation.nomodule.min.js"></script>
```

#### Instances

Sur le sélecteur de langue, les éléments suivants sont instanciés :

- La navigation, via la classe : `fr-nav`
- L'element de navigation, via la classe : `fr-nav__item`
- Le bouton d'ouverture, via la classe `fr-translate__btn`
- Le collapse, via la classe `fr-collapse`

Une fois chargé, le Js ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés

#### API

Il est possible d'interagir avec les instances du composants en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :

```js
const elem = document.getElementById('ID_COLLAPSE');
dsfr(elem).collapse.disclose();
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

##### navigation

**current**

| **Description** | Retourne l'API du collapse ouvert. <br> *Si aucun collapse n'est ouvert, ou si plusieurs collapses sont ouverts, renvoie `null`.* |
|---|---|
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).navigation.current` |

**index**

| **Description** | Retourne ou modifie l'index de l'accordéon courant. <br> *Si aucun collapse n'est ouvert, l'index vaut 0.* |
|---|---|
| **Type** | property |
| **Retour** | Number |
| **Exemple** | `dsfr(elem).navigation.index` <br> `dsfr(elem).navigation.index = -1` |

**isEnabled**

| **Description** | Défini si le fonctionnement du sélecteur de langue est activé ou non |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).navigation.isEnabled = false` |

**hasFocus**

| **Description** | Renvoie vrai si le focus est sur un des éléments du groupe. |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).navigation.hasFocus` |

##### navigationItem

**isEnabled**

| **Description** | Défini si le fonctionnement de la navigation est activé ou non |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).navigationItem.isEnabled = false` |

##### collapseButton

**focus**

| **Description** | Replace le focus sur le bouton |
|---|---|
| **Type** | function |
| **Arguments** | none |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).collapseButton.focus()` |

**parent**

| **Description** | Retourne l'instance du dsfr parente, ici le sélecteur de langue |
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

**conceal**

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

| **Description** | Défini si le fonctionnement du sélecteur de langue est activé ou non |
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

| **Description** | Retourne l'instance du dsfr parent, ici le sélecteur de langue |
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

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+translate)

#### [v1.15.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.15.0) - 17 juillet 2026

- **[corrige le snippet de code du sélecteur de langue](https://github.com/GouvernementFR/dsfr/pull/1431)**  
  #1431  
  - Retrait de la balise et du role "nav"  
  📝 docs  
  translate

#### [v1.14.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.14.1) - 29 août 2025

- **[modification du markup nav en div](https://github.com/GouvernementFR/dsfr/pull/1229)**  
  #1229  
  - Le composant sélecteur de langue ne doit plus utiliser une balise `<nav>` avec l'attribut `role=navigation`, mais une simple `<div>` pour alléger la lecture sur les lecteurs d'écrans.  
  🐛 fix  
  translate

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

#### [v1.7.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.7.0) - 21 juillet 2022

- **[Ajout du sélecteur de langue](https://github.com/GouvernementFR/dsfr/pull/359)**  
  #359  
  feat  
  translate

##### Contenu associé

- **[Bouton](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton)**  
  Présentation du composant Bouton permettant à l’usager d’exécuter une action dans une interface numérique.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/selecteur-de-langues/accessibilite-du-selecteur-de-langues

Le composant **Sélecteur de langue** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

#### Structuration

##### Bouton d’ouverture

- Le bouton d’ouverture du sélecteur de langue possède deux attributs ARIA :
  - `aria-expanded` défini à :
    - `true` lorsque la liste déroulante des autres langues est affichée,
    - `false` lorsque la liste déroulante des autres langues est masquée.
  - `aria-controls` qui relie le bouton à la zone contrôlée et dont la valeur doit correspondre à l’attribut `id` de la zone de contenu.

##### Liste de langues

- La liste de langues est structurée dans une liste `ul` `li`.
- Le lien actif de la liste de langues porte un attribut `aria-current=”true”`.
- Chaque lien de la liste de langues disposent d'un attribut `hreflang` et un attribut `lang`, dont les valeurs spécifient la langue cible.
- Une langue est indiquée par son code [ISO 639-1](https://fr.wikipedia.org/wiki/Liste_des_codes_ISO_639-1) , puis son nom en toute lettres et dans la langue cible. Par exemple, on écrira "EN - English", et pas "EN - Anglais".

#### Contrastes de couleurs

Le composant Sélecteur de langue est suffisamment contrasté en thème clair.

En thème sombre, le bouton d’ouverture est insuffisamment contrasté au survol.

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Sélecteur de langue.

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)

##### Contenu associé

- **[Bouton](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton)**  
  Présentation du composant Bouton permettant à l’usager d’exécuter une action dans une interface numérique.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/selecteur-de-langues/demonstration-du-selecteur-de-langues

### Démonstration

#### Contenu associé

- **[Bouton](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton)**  
  Présentation du composant Bouton permettant à l’usager d’exécuter une action dans une interface numérique.
