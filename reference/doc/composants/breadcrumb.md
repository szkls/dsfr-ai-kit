# Fil d'Ariane

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/fil-d-ariane · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/fil-d-ariane/design-du-fil-d-ariane · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/fil-d-ariane/code-du-fil-d-ariane · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/fil-d-ariane/accessibilite-du-fil-d-ariane · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/fil-d-ariane/demonstration-du-fil-d-ariane
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

Le fil d’Ariane est un système de navigation secondaire qui permet à l’usager de se situer sur le site qu’il consulte.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/fil-d-ariane

*(Démonstration interactive « breadcrumb--breadcrumb » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=breadcrumb--breadcrumb&nav=0&globals=theme%3Alight)*

### Quand utiliser ce composant ?

**Proposer un fil d'Ariane est fortement recommandé sur l’ensemble des sites** , particulièrement lorsque l’arborescence possède plus de 2 niveaux. Il permet à l’usager de revenir à une page de niveau supérieur en l’utilisant à la place du bouton « Retour » du navigateur ou de [la navigation principale.](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale)

**Utiliser le fil d’Ariane permet également d’aider l’usager à se repérer dans l’arborescence d’un site** . Il indique à l’usager sa position courante et donne des informations sur l’architecture du site.

### Comment utiliser ce composant ?

- **Afficher le fil d’Ariane sur l’ensemble des pages du site** , à l’exception de la page d'accueil.
- **Conserver le même emplacement pour le fil d’Ariane** au sein de l’ensemble des pages, de préférence entre le header et le contenu principal de la page.

> **À faire :** Positionner le fil d’Ariane sous le header
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/breadcrumb/use/do-1.png)

> **À ne pas faire :** Ne pas positionner le fil d’Ariane ailleurs que sous le header
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/breadcrumb/use/dont-1.png)

- **Positionner le fil d’Ariane sur fond neutre** . Il ne doit pas être superposé à un arrière-plan de couleur ou une image.

> **À faire :** Appliquer le fil d’Ariane sur fond blanc avant le haut de page s’il propose un fond de couleur ou un motif.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/breadcrumb/use/do-2.png)

> **À ne pas faire :** Ne pas superposer le fil d’Ariane à un fond de couleur ou un motif.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/breadcrumb/use/dont-2.png)

- **Rendre chacun des éléments cliquable** , à l’exception de la page consultée.

> **À faire :** Rendre chacun des éléments cliquable, à l’exception de la page consultée.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/breadcrumb/use/do-3.png)

> **À ne pas faire :** Ne pas proposer un fil d’Ariane non cliquable.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/breadcrumb/use/dont-3.png)

- **Mettre en place un fil d’Ariane basé sur la position courante de la page dans la hiérarchie principale du site** et non sur l’historique de navigation de l’usager, ce qui est susceptible de créer de la confusion. Si plusieurs chemins sont possibles pour une même page, le fil d’Ariane doit en présenter un seul afin de conserver une hiérarchie cohérente entre les pages.

> **À faire :** Adapter le positionnement du fil d’Ariane lorsqu’il est accompagné d’un menu latéral.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/breadcrumb/use/do-4.png)

### Règles éditoriales

- **Eviter que le fil d’Ariane soit trop long** et passe sur plusieurs lignes, afin qu’il reste lisible. Si les titres des pages du site sont longs, il est conseillé de n’afficher que les 4 premiers mots du nom de la page courante et d’indiquer que l’élément est tronqué par l’affichage de “…”

> **À faire :** Tronquer le libellé de la page lorsque le titre est trop long.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/breadcrumb/edit/do-1.png)

> **À ne pas faire :** Ne pas proposer un titre long sur deux lignes.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/breadcrumb/edit/dont-1.png)

#### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.

- **[Navigation principale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale)**  
  Présentation du composant Navigation principale organisant les grandes rubriques d’un site et permettant à l’usager de s’orienter dans son arborescence.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/fil-d-ariane/design-du-fil-d-ariane

![Anatomie du fil d'Ariane](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/breadcrumb/design/anatomy/anatomy-1.png)

1. Un lien vers la racine du site (page d’accueil) — Obligatoire
2. Des liens vers les pages depuis la racine du site, si la hiérarchie du site comporte plus d’un niveau — Obligatoire
3. Texte de la page courante, seul élément non cliquable — Obligatoire

### Variations

**Version mobile**

Le fil d’Ariane doit être maintenu sur mobile et apparaître de la manière suivante :

*(Démonstration interactive « breadcrumb--breadcrumb » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=breadcrumb--breadcrumb&nav=0&globals=theme%3Alight)*

- Afficher par défaut un bouton “Voir le fil d’Ariane”.
- Faire apparaître le fil d’Ariane au clic sur le bouton, sur plusieurs lignes si nécessaire.

### Tailles

La largeur du fil d’Ariane s’adapte à son contenu, tout en étant dépendante de la taille du conteneur principal de la page.

### États

Le fil d’Ariane n’est sujet à aucun changement d’état.

### Personnalisation

Le fil d’Ariane n’est pas personnalisable.

> **À ne pas faire :** Ne pas changer la structure du fil d’Ariane.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/breadcrumb/design/custom/dont-1.png)

> **À ne pas faire :** Ne pas changer la couleur du texte du fil d’Ariane.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/breadcrumb/design/custom/dont-1.png)

#### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.

- **[Navigation principale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale)**  
  Présentation du composant Navigation principale organisant les grandes rubriques d’un site et permettant à l’usager de s’orienter dans son arborescence.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/fil-d-ariane/code-du-fil-d-ariane

### HTML

#### Structure du composant

Le composant **Fil d’Ariane** permet aux utilisateurs de comprendre leur position dans la hiérarchie d’un site. Sa structure est conçue pour s’adapter aux écrans mobiles et comprend les éléments suivants :

1. Un conteneur principal sous la balise `<nav>` :
   - Doit avoir l’attribut `role="navigation"` pour indiquer sa fonction.
   - Utilise l’attribut `aria-label` pour fournir une description contextuelle, par exemple `aria-label="vous êtes ici :"`.
2. Un bouton d’affichage en mobile :
   - Représenté par un élément `<button>` avec la classe `fr-breadcrumb__button`.
   - Possède les attributs :
     - `aria-expanded` [true|false] pour indiquer si le fil d’Ariane est visible ou non.
     - `aria-controls` pour relier le bouton à l’élément `<div>` qui contient le fil d’Ariane.
3. Une zone de contenu avec le fil d’Ariane :
   - Représentée par une `<div>` avec la classe `fr-collapse`.
   - Doit inclure un identifiant unique (ex. `id="breadcrumb-1"`) pour être liée au bouton.
4. Une liste ordonnée `<ol>` avec la classe `fr-breadcrumb__list`, contenant les éléments du fil d’Ariane dont chaque segment est un élément `<li>` :
   - Les segments avec des liens utilisent une balise `<a>` avec la classe `fr-breadcrumb__link`.
   - Le segment actuel utilise `aria-current="page"` pour indiquer la page courante.

**Exemple de structure HTML**

```html
<nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
    <button class="fr-breadcrumb__button" aria-expanded="false" aria-controls="breadcrumb-1">
        Voir le fil d’Ariane
    </button>
    <div class="fr-collapse" id="breadcrumb-1">
        <ol class="fr-breadcrumb__list">
            <li>
                <a class="fr-breadcrumb__link" href="#/">Accueil</a>
            </li>
            <li>
                <a class="fr-breadcrumb__link" href="#/segment-1/">Segment 1</a>
            </li>
            <li>
                <a class="fr-breadcrumb__link" href="#/segment-1/segment-2/">Segment 2</a>
            </li>
            <li>
                <a class="fr-breadcrumb__link" aria-current="page">Page Actuelle</a>
            </li>
        </ol>
    </div>
</nav>
```

#### Comportement en mobile

- En affichage mobile, seul le bouton avec la classe `fr-breadcrumb__button` est visible par défaut.
- Lors d’un clic sur ce bouton :
  - L’attribut `aria-expanded` passe de `false` à `true`.
  - La `<div>` avec la classe `fr-collapse` devient visible, affichant le contenu du fil d’Ariane.

---

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](https://www.systeme-de-design.gouv.fr/version-courante/fr/premiers-pas/vous-etes-developpeur/prise-en-main#les-css) .

**Dépendances CSS**

| Dépendance | Obligatoire |
|---|---|
| Core | Oui |
| Breadcrumb | Oui |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/breadcrumb/breadcrumb.min.css" rel="stylesheet">
```

#### Variantes de style

- **Affichage par défaut** : Le fil d’Ariane est masqué sur mobile, seul le bouton est visible.
- **Affichage étendu** : Lorsque l’attribut `aria-expanded` du bouton est à `true`, la classe `fr-collapse--expanded` est ajoutée au conteneur `<div>` pour le rendre visible.

---

### JavaScript

Pour fonctionner le composant fil d’Ariane nécessite l'utilisation de JavaScript.

#### Installation du JavaScript

Chaque composant utilisant javascript possède un fichier Js spécifique et requiert le fichier Js du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```html
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/breadcrumb/breadcrumb.module.min.js"></script>
```

NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```html
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/breadcrumb/breadcrumb.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur le fil d’Ariane, les éléments suivants sont instanciés :

- Le bouton d'ouverture, via la classe `fr-breadcrumb__button`
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

###### breadcrumb

**disclose**

| **Description** | Ouvre le fil d’Ariane. |
|---|---|
| **Type** | function |
| **Arguments** | Aucun |
| **Retour** | Aucun |
| **Exemple** | dsfr(breadcrumb).breadcrumb.disclose() |

**node**

| **Description** | Retourne le noeud HTML de l'élément `<nav>`. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | dsfr(breadcrumb).breadcrumb.node |

###### collapseButton

**focus**

| **Description** | Replace le focus sur le bouton. |
|---|---|
| **Type** | function |
| **Arguments** | Aucun |
| **Retour** | Aucun |
| **Exemple** | dsfr(breadcrumbButton).breadcrumbButton.focus() |

**node**

| **Description** | Retourne le noeud HTML correspondant au bouton. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | dsfr(breadcrumbButton).breadcrumbButton.node |

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

| **Description** | Défini si le fonctionnement du collapse est activé ou non |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).collapse.isEnabled = false` |

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

| **Description** | Retourne l'instance du dsfr parent, ici le breadcrumb |
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

Sur le Fil d’Ariane, en mode mobile les événements suivants sont disponibles :

**événements**

| Événement | Action | Élément | Attribut |
|---|---|---|---|
| `dsfr.conceal` | Fermeture de l'élément | Collapse | `data-fr-js-collapse` |
| `dsfr.disclose` | Ouverture de l'élément | Collapse | `data-fr-js-collapse` |
| `dsfr.click` | Click sur le bouton d'ouverture | CollapseButton | `data-fr-js-collapse-button` |

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+breadcrumb+)

#### [v1.14.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.14.1) - 29 août 2025

- **[retire trailing slash](https://github.com/GouvernementFR/dsfr/pull/1266)**  
  #1266  
  - Retrait du dernier "/" en fin d'url des liens du fil d'arianne  
  🐛 fix  
  breadcrumb

#### [v1.12.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.12.0) - 19 juin 2024

- **[alignement vertical des icônes de chevron](https://github.com/GouvernementFR/dsfr/pull/933)**  
  #933  
  🐛 fix  
  breadcrumb

#### [v1.9.3](https://github.com/GouvernementFR/dsfr/releases/tag/v1.9.3) - 17 mai 2023

- **[ajoute une page exemple alternative](https://github.com/GouvernementFR/dsfr/pull/600)**  
  #600  
  - étiquette d'élément span rendue possible sur l'élément courant du fil d'ariane
- ajout d'une page d'exemple avec boutons  
  🐛 fix  
  breadcrumb

##### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.

- **[Navigation principale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale)**  
  Présentation du composant Navigation principale organisant les grandes rubriques d’un site et permettant à l’usager de s’orienter dans son arborescence.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/fil-d-ariane/accessibilite-du-fil-d-ariane

Le fil d’Ariane est un système de navigation secondaire qui permet à l’usager de se situer sur le site qu’il consulte.

Le composant **Fil d’Ariane** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

> **Information**
> Le fil d’Ariane n’est pas obligatoire dans le cadre du respect du RGAA. Il s’agit d’un critère d’accessibilité de niveau AAA de WCAG.
> 
> Son usage est néanmoins fortement recommandé pour aider les personnes avec un handicap cognitif notamment à mieux se repérer sur le site.

#### Structuration

- Le fil d’Ariane est un système de navigation secondaire. Il doit être structuré dans un élément `nav role="navigation"`.
- L’attribut `aria-label="vous êtes ici :"` est utilisé pour nommer et donner un contexte explicite à la navigation.
- Le fil d’Ariane doit être placé en dehors du contenu principal (`main`) afin de permettre au lien d’accès au d’éviter tous les liens de navigation.
- Les éléments du fil d’Ariane sont structurés dans une liste numérotée avec les éléments `ol` et `li`.

En version mobile, l’affichage direct du fil d’Ariane est remplacé par un bouton « Voir le fil d’Ariane ». À l’activation du bouton, le bouton disparaît et le focus est replacé sur le premier élément du fil d’Ariane.

**Il est obligatoire de conserver le même emplacement pour le fil d’Ariane au sein d’un ensemble de pages.**

##### Identification de la page courante

- La page courante n’est pas structurée dans un lien et n’est pas soulignée.
- Elle est en plus identifiée explicitement avec un attribut `aria-current="page"` pour les personnes aveugles.

### Contrastes de couleurs

Le composant Fil d’Ariane est suffisamment contrasté en thème clair et en thème sombre.

**Contrastes des textes — composant Fil d’Ariane**

| Élément | Thème clair | Thème sombre |
|---|---|---|
| **lien / bouton** | 5,74:1 | 5,82:1 |
| **page courante** | 11,37:1 | 11,5:1 |

---

### Restitution par les lecteurs d’écran

L’attribut `aria-current="page"` peut être restitué différemment selon les lecteurs d’écran.

- VoiceOver macOS, Narrateur : « page actuelle »
- NVDA, JAWS : « page courante »
- Talkback, VoiceOver iOS : « page active »

À noter : VoiceOver iOS et Narrateur ne restituent pas `aria-current` sur un élément `a` sans attribut `href`.

La page courante est alors indiquée implicitement aux personnes aveugles car celle-ci n’est pas structurée dans un lien, contrairement aux autres pages.

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
- [Attribut aria-current](https://www.w3.org/TR/wai-aria-1.1/#aria-current)
- [Critère de succès WCAG 2.4.8 AAA — Localisation](https://www.w3.org/Translations/WCAG21-fr/#location)

##### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.

- **[Navigation principale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale)**  
  Présentation du composant Navigation principale organisant les grandes rubriques d’un site et permettant à l’usager de s’orienter dans son arborescence.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/fil-d-ariane/demonstration-du-fil-d-ariane

*(Démonstration interactive « breadcrumb--docs » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=breadcrumb--docs&nav=0&globals=theme%3Alight)*

#### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.

- **[Navigation principale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale)**  
  Présentation du composant Navigation principale organisant les grandes rubriques d’un site et permettant à l’usager de s’orienter dans son arborescence.
