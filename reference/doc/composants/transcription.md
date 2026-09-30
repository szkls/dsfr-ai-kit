# Transcription

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/transcription · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/transcription/design-de-la-transcription · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/transcription/code-de-la-transcription · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/transcription/accessibilite-de-la-transcription · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/transcription/demonstration-de-la-transcription
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

La transcription est un élément d’interaction avec l’interface permettant à l’usager d'afficher ou de masquer le texte traduisant un contenu média au sein d’une page.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/transcription

*(Démonstration interactive « transcription--transcription » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=transcription--transcription&nav=0&globals=theme%3Alight)*

### Quand utiliser ce composant ?

Proposer une transcription pour accompagnée un [contenu média](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/contenu-medias) , en la plaçant directement sous ce dernier, dans une zone à déployer au clic.

### Comment utiliser ce composant ?

- **Garantir que la zone à déployer et le contenu tiennent sur un même écran** , sans nécessiter de défilement.
- **Afficher la transcription sur la même page que le contenu média** pour permettre la lecture simultanée.
- **Masquer la transcription quand celle-ci est longue** , dans une zone à développer au clic ou sur une page séparée (modale) atteinte via un lien.

> **À faire :** Ajouter la transcription directement sous le contenu média associé, accessible simultanément.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/transcription/use/do-1.png)

> **À ne pas faire :** Ne pas positionner la transcription avant le contenu média ou trop loin, pour que les deux soient consultés en même temps.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/transcription/use/dont-1.png)

### Règles éditoriales

- **Proposer une transcription textuelle pertinente et accessible** .

#### Contenu associé

- **[Accordéon](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/accordeon)**  
  Présentation du composant Accordéon permettant à l’usager d’afficher ou de masquer une section de contenu pour alléger une page dense.

- **[Contenu médias](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/contenu-medias)**  
  Présentation du composant Contenu média permettant d’intégrer images, vidéos ou sons dans une page tout en respectant des règles éditoriales claires.

- **[Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale)**  
  Présentation du composant Modale permettant de focaliser l’attention de l’usager sur une tâche ou une information sans quitter la page.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/transcription/design-de-la-transcription

![Anatomie de la transcription](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/transcription/design/anatomy/anatomy-1.png)

1. Un libellé “Transcription”, avec icône — Obligatoire
2. Un chevron orienté vers le bas, indiquant que la transcription peut s'ouvrir. Il est orienté vers le haut quand la transcription peut se refermer — Obligatoire
3. Un contenu — Obligatoire
4. Un bouton “Agrandir“, pour ouvrir la transcription en modale — Obligatoire
5. Un bouton “Fermer”, pour refermer la modale — Obligatoire
6. Un titre de modale, avec ou sans icône — En option

### Variations

La transcription ne propose aucune variation.

Toutefois, au delà de son format accordéon, il est également possible de la consulter en plein écran dans une vue dédiée, via l’ouverture d’une modale.

Les deux vues sont ici complémentaires.

### Tailles

La transcription reprend l’apparence et le fonctionnement d’un [accordéon](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/accordeon) .

Toutefois, la hauteur de celui-ci est fixe pour permettre aux usagers d’avoir accès à la transcription en même temps que le média associé.

Sous forme de modale, la transcription profite des mêmes tailles que celles disponibles pour le [composant modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale) lui-même.

### États

L’accordéon, dans le contexte d'une transcription, est soumis aux mêmes états que le [composant accordéon](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/accordeon) lui-même.

### Personnalisation

Au même titre que les composants [accordéon](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/accordeon) et [modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale) qui la constituent, la transcription n’est pas personnalisable.

Toutefois, certains éléments sont optionnels - voir [la structure du composant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/transcription) .

#### Contenu associé

- **[Accordéon](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/accordeon)**  
  Présentation du composant Accordéon permettant à l’usager d’afficher ou de masquer une section de contenu pour alléger une page dense.

- **[Contenu médias](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/contenu-medias)**  
  Présentation du composant Contenu média permettant d’intégrer images, vidéos ou sons dans une page tout en respectant des règles éditoriales claires.

- **[Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale)**  
  Présentation du composant Modale permettant de focaliser l’attention de l’usager sur une tâche ou une information sans quitter la page.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/transcription/code-de-la-transcription

### HTML

#### Structure du composant

Le composant **Transcription** permet d'afficher et de masquer du contenu textuel.

Sa structure est la suivante :

- Le conteneur de la transcription est un élément HTML `<div>` défini par la classe `fr-transcription`.
- Le bouton pour afficher/masquer le contenu est défini par la classe `fr-transcription__btn`, et son libellé constitue le titre.
  - Le bouton doit être de type "button".
  - Le bouton dispose d'un attribut `aria-expanded`, sa valeur [true|false] défini si le collapse est ouvert ou fermé
  - Le bouton est lié au collapse via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` du collapse.
- Le bloc refermable, défini par la classe `fr-collapse`, est une `<div>` placée après le bouton. Il s'agit d'un élément générique du core utilisé par d'autres composants tels que la navigation ou l'accordéon.
  - Il dispose d'un attribut `id` obligatoire, pour être lié au bouton d'ouverture.
  - Le bloc refermable contient le pied de page de la transcription, élément HTML `<div>`, défini par la classe `fr-transcription__footer`.
    - Le pied de page contient un conteneur, élément HTML `<div>`, défini par la classe `fr-transcription__actions-group` pour inclure les boutons d'action.
      - Le bouton d'ouverture de la modale est un élément HTML `<button>`, défini par les classes `fr-btn` et `fr-btn--fullscreen`, et son titre est "Agrandir".
        - Le bouton doit être de type "button".
        - Le bouton dispose d'un attribut `aria-label`, dont la valeur est "Agrandir la transcription".
        - Le bouton dispose d'un attribut `data-fr-opened`, sa valeur [true|false] défini si le collapse est ouvert ou fermé
        - Le bouton est lié à la modale via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` de la modale.
  - Le bloc refermable contient une modale, élément HTML `<div>` définie par la classe `fr-modal`, pour afficher le contenu en plein écran.
    - Elle dispose d'un attribut `id` obligatoire, pour être lié au bouton d'ouverture.
    - la modale est lié à son titre via l'attribut `aria-labelledby`, dont la valeur doit correspondre à l'attribut `id` du titre.
    - Le contenu de la modale reprend la structure du composant [Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale) et son contenu est libre, mais nécessite l'utilisation des balises adéquates, il n'est pas correcte de placer du texte directement dans une `<div>`.

**Exemple de structure HTML**

```html
<div class="fr-transcription">
    <button type="button" class="fr-transcription__btn" aria-expanded="false" aria-controls="fr-transcription-collapse">Transcription</button>
    <div class="fr-collapse" id="fr-transcription-collapse">
        <div class="fr-transcription__footer">
            <div class="fr-transcription__actions-group">
                <button aria-controls="fr-transcription-modal" aria-label="Agrandir la transcription" data-fr-opened="false" type="button" class="fr-btn--fullscreen fr-btn">Agrandir</button>
            </div>
        </div>
        <div id="fr-transcription-modal" class="fr-modal" aria-labelledby="fr-transcription-modal-title">
            <div class="fr-container fr-container--fluid fr-container-md">
                <div class="fr-grid-row fr-grid-row--center">
                    <div class="fr-col-12 fr-col-md-10 fr-col-lg-8">
                        <div class="fr-modal__body">
                            <div class="fr-modal__header">
                                <button aria-controls="fr-transcription-modal" title="Fermer" type="button" class="fr-btn--close fr-btn">Fermer</button>
                            </div>
                            <div class="fr-modal__content">
                                <h1 id="fr-transcription-modal-title" class="fr-modal__title">
                                    Titre de la transcription
                                </h1>
                                <!-- Contenu de la transcription -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
| Modal | Oui |
| Transcription | Oui |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/button/button.min.css" rel="stylesheet">
<link href="dist/component/modal/modal.min.css" rel="stylesheet">
<link href="dist/component/transcription/transcription.min.css" rel="stylesheet">
```

---

### JavaScript

#### Installation du JavaScript

Le composant Transcription nécessite l'utilisation de JavaScript pour fonctionner correctement. Son comportement de déplié le contenu utilise le fonctionnement du collapse du core, et il utilise le composant [Modal](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale) pour ouvrir le contenu en grand.

Son import doit se faire à la fin de la page, avant la fermeture de la balise `</body>`, et de préférence avec les fichiers minifiés, car plus légers.

Dépendances JS

| Dépendance | Obligatoire |
|---|---|
| Core | Oui |
| Modal | Oui |
| Transcription | Oui |

:::

**Exemple d'imports JavaScript**

```html
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/modal/modal.module.min.js"></script>
<script type="module" src="dist/component/transcription/transcription.module.min.js"></script>
```

NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```html
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/modal/modal.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/transcription/transcription.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur la transcription, les éléments suivants sont instanciés :

- La transcription, via la classe : `fr-transcription`
- Le bouton d'ouverture de l'accordéon, via la classe `fr-transcription__btn`
- Le collapse, via la classe `fr-collapse`
- Le bouton d'ouverture de la modale, via l'attribut' `aria-controls`
- La modale, via la classe `fr-modal`

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

###### transcription

**isEnabled**

| **Description** | Défini si le fonctionnement de la transcription est activé ou non |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).transcription.isEnabled = false` |

###### collapseButton

**focus**

| **Description** | Replace le focus sur le bouton |
|---|---|
| **Type** | function |
| **Arguments** | none |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).collapseButton.focus()` |

**parent**

| **Description** | Retourne l'instance du dsfr parente, ici la transcription |
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

###### collapse

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

| **Description** | Retourne l'instance du dsfr parent, ici la transcription |
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

###### modalButton

**focus**

| **Description** | Replace le focus sur le bouton |
|---|---|
| **Type** | function |
| **Arguments** | none |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).modalButton.focus()` |

**parent**

| **Description** | Retourne l'instance du dsfr parente, ici la transcription |
|---|---|
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).parent` |

**node**

| **Description** | Renvoie le noeud HTML de l'élément. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).modalButton.node` |

###### modal

**conceal**

| **Description** | Ferme la modale |
|---|---|
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).modal.conceal()` |

**disclose**

| **Description** | Ouvre la modale |
|---|---|
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).modal.disclose()` |

**isDisclosed**

| **Description** | Retourne vrai si la modale est ouverte |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).modal.isDisclosed` |

**isEnabled**

| **Description** | Défini si le fonctionnement de la modale est activé ou non |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).modal.isEnabled = false` |

**group**

| **Description** | Retourne l'API du groupe, ou null s'il n'y a pas de groupe |
|---|---|
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).modal.group` |

**buttons**

| **Description** | Retourne un tableau de boutons d'ouverture de la modal |
|---|---|
| **Type** | property |
| **Retour** | Array |
| **Exemple** | `dsfr(elem).modal.buttons` |

**focus**

| **Description** | Replace le focus sur le bouton de la modale |
|---|---|
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).modal.focus()` |

**parent**

| **Description** | Retourne l'instance du dsfr parent, ici la transcription |
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

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Aclosed+is%3Amerged+transcription)

#### [v1.15.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.15.0) - 17 juillet 2026

- **[corrige la démo et ajoute le titre de la modale](https://github.com/GouvernementFR/dsfr/pull/1465)**  
  #1465  
  - Ajoute la possibilité de paramétrer le titre de la modal de transcription dans le storybook
- Correction de la documentation transcription  
  🐛 fix  
  transcription

#### [v1.14.2](https://github.com/GouvernementFR/dsfr/releases/tag/v1.14.2) - 17 septembre 2025

- **[corrige affichage dans storybook](https://github.com/GouvernementFR/dsfr/pull/1290)**  
  #1290  
  - corrige l'affichage des modales ouvertes dans storybook  
  🐛 fix  
  display transcription

#### [v1.10.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.10.0) - 19 juillet 2023

- **[correctif title et label bouton Agrandir](https://github.com/GouvernementFR/dsfr/pull/708)**  
  #708  
  - Retrait du title sur le bouton agrandir
- Ajout label agrandir dans les exemples de content  
  🐛 fix  
  transcription content

- **[a11y retour audit](https://github.com/GouvernementFR/dsfr/pull/684)**  
  #684  
  - place le bouton d’agrandissement avant la modale et inverse les élements via css
- ajoute `aria-label=”Agrandir la transcription”` sur le bouton d’agrandissement
- remplace la balise dialog par une balise div
- système d'activation / désactivation de la modale avec ajout / retrait dynamique de `role="dialog"` à l'ouverture / fermeture de la modale
- système de vérification et de correction pour l' **accessible name** de la modale, avec warning explicatifs  
  🐛 fix  
  transcription

- **[déplacement bouton modale](https://github.com/GouvernementFR/dsfr/pull/680)**  
  #680  
  - Pour déterminer le bouton primaire qui sert à l’ouverture, un disclosure filtre parmi les boutons qui lui sont reliés et retire ceux qui se trouve à l’intérieur du contenu du disclosure (ce sont les boutons de fermeture)
- Actuellement, la transcription a le bouton d'ouverture de modale à l'intérieur de son contenu, ce qui bloque le fonctionnement, le bouton n'étant pas reconnu comme primaire.
- Le correctif déplace le bouton après la dialog de la modal et restitue le fonctionnement de la transcription  
  🐛 fix  
  transcription

- **[Ajustement sur l'état défaut et actif](https://github.com/GouvernementFR/dsfr/pull/564)**  
  #564  
  Harmonisation avec la navigation sur Accordion, Sidemenu, Translate et Transcription :  
  - Passage icône et intitulé en action-high-blue-france
- Ajout background-open-blue-france sur le bouton lorsque l'élément est ouvert
- Icône “arrow-down-s-ligne” (la même que sur navigation)
- Accordion, Translate : Retrait changement de graisse (normal -> bold) à l'ouverture et graisse constante en medium  
  🐛 fix  
  accordion transcription translate sidemenu

#### [v1.9.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.9.1) - 11 avril 2023

- **[corrige largeur du bouton a l'ouverture de la modale](https://github.com/GouvernementFR/dsfr/pull/565)**  
  #565  
  à l'ouverture de la modale de la transcription, le déplacement des éléments en position fixed change la taille du bouton de la transcription à sa taille minimum. La largeur étendue à 100% permet de la conserver constante.  
  🐛 fix  
  transcription

#### [v1.8.5](https://github.com/GouvernementFR/dsfr/releases/tag/v1.8.5) - 28 novembre 2022

- **[correction de la pleine largeur du composant](https://github.com/GouvernementFR/dsfr/pull/483)**  
  #483  
  fix  
  transcription

#### [v1.8.4](https://github.com/GouvernementFR/dsfr/releases/tag/v1.8.4) - 15 novembre 2022

- **[correction sur la présence du titre de la modale](https://github.com/GouvernementFR/dsfr/pull/466)**  
  #466  
  fix  
  transcription

#### [v1.8.2](https://github.com/GouvernementFR/dsfr/releases/tag/v1.8.2) - 9 novembre 2022

- **[titre du contenu (a11y)](https://github.com/GouvernementFR/dsfr/pull/452)**  
  #452  
  fix  
  transcription

#### [v1.8.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.8.0) - 27 octobre 2022

- **[ajoute le composant transcription](https://github.com/GouvernementFR/dsfr/pull/412)**  
  #412  
  feat  
  transcription

##### Contenu associé

- **[Accordéon](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/accordeon)**  
  Présentation du composant Accordéon permettant à l’usager d’afficher ou de masquer une section de contenu pour alléger une page dense.

- **[Contenu médias](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/contenu-medias)**  
  Présentation du composant Contenu média permettant d’intégrer images, vidéos ou sons dans une page tout en respectant des règles éditoriales claires.

- **[Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale)**  
  Présentation du composant Modale permettant de focaliser l’attention de l’usager sur une tâche ou une information sans quitter la page.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/transcription/accessibilite-de-la-transcription

Le composant **Transcription** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

Voir les interactions au clavier pour le [composant Accordéon](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/accordeon/accessibilite-de-l-accordeon#regles-d-accessibilite) et le [composant Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale/accessibilite-de-la-modale#regles-d-accessibilite) .

### Règles d’accessibilité

- La transcription contient un bouton d'ouverture d'accordéon avec le type="button".
  - Le bouton d'ouverture de l'accordéon a l'attribut `aria-controls` défini sur l'ID du collapse.
  - Si le collapse de l'accordéon est visible, le bouton a l'attribut `aria-expanded` défini sur true. Si le collapse de l'accordéon n'est pas visible, `aria-expanded` est défini sur false.
- L'accordéon de la transcription contient un bouton d'ouverture de la modale de transcription avec le type="button".
  - Le bouton d'ouverture de la modale dispose d'un attribut `aria-label` dont la valeur "Agrandir la transcription" explicite l'action d'ouverture de la modale.
  - Le bouton d'ouverture de la modale a l'attribut `aria-controls` défini sur l'ID de la modale.
  - Si la modale est visible, le bouton a l'attribut `data-fr-opened` défini sur true. Si la modale n'est pas visible, `data-fr-opened` est défini sur false.
- La modale de transcription est un élément HTML "div" avec la classe `fr-modal`.
  - La modale dispose d'un attribut `aria-labelledby` défini sur l'ID du titre de la modale.
  - La modale de transcription doit contenir un titre de niveau `Hx` en fonction de la structure de la page. Il peut être caché visuellement mais doit être présent dans le DOM pour les lecteurs d'écran.
- La modale de transcription contient un bouton de fermeture de type="button".
  - Le bouton de fermeture de la modale dispose d'un attribut `aria-controls` défini sur l'ID de la modale.

#### Contrastes de couleurs

Le composant Transcription est suffisamment contrasté en thème clair.

### Restitution par les lecteurs d’écran

Voir les tests de restitution pour le [composant Accordéon](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/accordeon/accessibilite-de-l-accordeon#regles-d-accessibilite) et le [composant Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale/accessibilite-de-la-modale#regles-d-accessibilite) .

---

### Critères RGAA applicables

- **Couleurs** : 3.2
- **Liens** : 6.1, 6.2
- **Scripts** : 7.1, 7.3
- **Présentation de l’information** : 10.1, 10.2, 10.3,10.4, 10.5, 10.7, 10.8, 10.11, 10.12
- **Navigation** : 12.8, 12.9
- **Consultation :** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)

##### Contenu associé

- **[Accordéon](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/accordeon)**  
  Présentation du composant Accordéon permettant à l’usager d’afficher ou de masquer une section de contenu pour alléger une page dense.

- **[Contenu médias](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/contenu-medias)**  
  Présentation du composant Contenu média permettant d’intégrer images, vidéos ou sons dans une page tout en respectant des règles éditoriales claires.

- **[Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale)**  
  Présentation du composant Modale permettant de focaliser l’attention de l’usager sur une tâche ou une information sans quitter la page.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/transcription/demonstration-de-la-transcription

### Démonstration

#### Contenu associé

- **[Accordéon](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/accordeon)**  
  Présentation du composant Accordéon permettant à l’usager d’afficher ou de masquer une section de contenu pour alléger une page dense.

- **[Contenu médias](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/contenu-medias)**  
  Présentation du composant Contenu média permettant d’intégrer images, vidéos ou sons dans une page tout en respectant des règles éditoriales claires.

- **[Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale)**  
  Présentation du composant Modale permettant de focaliser l’attention de l’usager sur une tâche ou une information sans quitter la page.
