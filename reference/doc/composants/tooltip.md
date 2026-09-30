# Infobulle

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/infobulle · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/infobulle/design-de-l-infobulle · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/infobulle/code-de-l-infobulle · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/infobulle/accessibilite-de-l-infobulle · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/infobulle/demonstration-de-l-infobulle
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

L’infobulle (ou bulle d’aide, aide contextuelle) est un élément d’indication permettant d’afficher un contenu complémentaire lié à un élément précis de l’interface.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/infobulle

Elle est cachée par défaut et s’affiche par-dessus le reste de la page lors du survol ou au clic de l’élément associé.

*(Démonstration interactive « tooltip--tooltip » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=tooltip--tooltip&nav=0&globals=theme%3Alight)*

### Quand utiliser ce composant ?

**Utiliser l’infobulle uniquement lorsqu’il n’est pas possible d’afficher l’information directement dans le contenu de la page** , sans la cacher dans une bulle. L’information contenue dans l’infobulle ne doit pas être essentielle à la bonne compréhension du parcours par l’usager.

**A noter :** Privilégier son usage sur des sites principalement consultés sur desktop. Elle est à éviter sur des sites enregistrant une forte fréquentation mobile car certaines de ses variations ne s’affiche pas sur mobile.

Dans ce cas, plutôt qu’une infobulle, il est possible d’utiliser une [alerte](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/alerte) , un [accordéon](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/accordeon) , une [mise en avant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-avant) ou même une zone personnalisée.

### Comment utiliser ce composant ?

- **Utiliser l’infobulle pour apporter des précisions non essentielles** sur un élément de la page.

> **À faire :** Utiliser une infobulle pour préciser un libellé dans un formulaire, par exemple.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tooltip/use/do-1.png)

> **À ne pas faire :** Ne pas répéter des éléments déjà visibles dans une infobulle.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tooltip/use/dont-1.png)

- **Conserver un format de texte simple** n’incluant pas de mise en forme riche (gras, italique etc.)

> **À faire :** Ne pas inclure de graisse ou d’italique au texte de l’infobulle.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tooltip/use/dont-2.png)

- **Exclure tous types d’interactions** (boutons, liens etc.) **ou de médias** au sein de l’infobulle.

> **À ne pas faire :** Ne pas ajouter de lien au sein de l’infobulle.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tooltip/use/dont-3.png)

- **Limiter le nombre d’infobulles** proposé dans une même page.
- **Empêcher l’ouverture de plusieurs infobulles** dans un même affichage.

> **À faire :** Permettre l’ouverture d’une seule infobulle à la fois.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tooltip/use/do-2.png)

> **À ne pas faire :** Ne pas permettre l’ouverture de plusieurs infobulles en simultanée.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tooltip/use/dont-4.png)

- **Utiliser une flèche pour lier la zone de texte à l’élément associé** afin que l’usager comprenne à quoi l’infobulle se réfère.

> **À faire :** Utiliser une flèche pour lier la zone de texte à l’élément associé. L’usager doit comprendre à quoi l’infobulle se réfère.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tooltip/use/do-3.png)

> **À ne pas faire :** Ne pas dissocier la zone de texte à l’élément associé.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tooltip/use/dont-5.png)

### Règles éditoriales

- **Rédiger un texte concis et explicite** garantissant la compréhension de l’usager.
- **Privilégier un texte court** pour ne démultiplier la taille de l’infobulle.

> **À faire :** Proposer un texte court afin que la taille de l’infobulle reste équilibrée.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tooltip/edit/do-1.png)

> **À ne pas faire :** Ne pas proposer de texte trop long, qui déformerait l’infobulle.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tooltip/edit/dont-1.png)

#### Contenu associé

- **[Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale)**  
  Présentation du composant Modale permettant de focaliser l’attention de l’usager sur une tâche ou une information sans quitter la page.

- **[Paramètres d'affichage](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/parametres-d-affichage)**  
  Présentation du composant Paramètres d’affichage permettant à l’usager de modifier le thème visuel d’un site entre mode clair et mode sombre.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/infobulle/design-de-l-infobulle

Elle est cachée par défaut et s’affiche par-dessus le reste de la page lors du survol ou au clic de l’élément associé.

![Anatomie de l'infobulle](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tooltip/design/anatomy/anatomy-1.png)

1. Un texte simple, sans formatage riche — Obligatoire
2. Un cadre — Obligatoire
3. Une flèche pointant vers l’élément associé — Obligatoire
4. Une zone de déclenchement, sous forme de bouton tertiaire sans contour avec icône, dans le cas d’un déclenchement au clic — Obligatoire

### Variations

L’infobulle compte deux variations, suivant le type de déclenchement.

**Déclenchement au clic (ou information contextuelle)**

- Privilégier cette variation si le contexte le permet.
- Adosser l’icône représentant le point d’interrogation et permettant de déclencher l’infobulle à l’élément auquel elle se rapporte.

**Déclenchement au survol (ou au focus)**

- Réserver son usage aux cas où il n’est pas possible d’afficher l’information autrement ou qu’il n’y a pas la place d’intégrer une zone de déclenchement, et aux parcours majoritairement en desktop car elle ne s’affiche pas en mobile.

### Tailles

La taille de l’infobulle s’adapte à son contenu.

### États

L’infobulle n’est sujette à aucun changement d’état.

### Personnalisation

L’infobulle n'est pas personnalisable.

> **À faire :** Ne pas personnaliser la couleur de fond de l’infobulle.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tooltip/design/custom/dont-1.png)

> **À ne pas faire :** Ne pas personnaliser l’icône de l’infobulle.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tooltip/design/custom/dont-2.png)

#### Contenu associé

- **[Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale)**  
  Présentation du composant Modale permettant de focaliser l’attention de l’usager sur une tâche ou une information sans quitter la page.

- **[Paramètres d'affichage](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/parametres-d-affichage)**  
  Présentation du composant Paramètres d’affichage permettant à l’usager de modifier le thème visuel d’un site entre mode clair et mode sombre.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/infobulle/code-de-l-infobulle

Elle est cachée par défaut et s’affiche par-dessus le reste de la page lors du survol ou au clic de l’élément associé.

### HTML

#### Structure du composant

Il existe deux types d’ **Infobulles** suivant son déclenchement.

##### Déclenchement au survol

L’infobulle au survol se compose des éléments suivants :

1. Une zone de déclenchement :
   - Doit être un element focusable (`<a>`, `<input>`, `<select>`, `<textarea>`, etc) pour déclencher l'affichage du conteneur à la prise de focus.
   - Elle est liée au conteneur via l'attribut `aria-describedby`, sa valeur doit correspondre à l'attribut `id` du conteneur.
2. Un conteneur pour le texte de l'infobulle :
   - Représenté par un élément `<span>`.
   - Doit avoir un attribut `id` obligatoire, pour être lié à la zone de déclenchement.
   - Doit avoir un attribut `role="tooltip"`.
   - Doit avoir les classes `fr-tooltip` et `fr-placement`.

**Exemple de structure HTML**

```html
<a class="fr-link" aria-describedby="tooltip-1" href="[à modifier]">
    Exemple
</a>
<span class="fr-tooltip fr-placement" id="tooltip-1" role="tooltip">
    Lorem [...] elit ut.
</span>
```

##### Déclenchement au clic

L’infobulle au clic se compose des éléments suivants :

1. Une zone de déclenchement :
   - La zone de déclenchement est une balise `<button type="button">`.
   - Elle est liée au conteneur via l'attribut `aria-describedby`, sa valeur doit correspondre à l'attribut `id` du conteneur.
   - Doit avoir les classes `fr-btn--tooltip fr-btn`.
2. Un conteneur pour le texte de l'infobulle :
   - Représenté par un élément `<span>`.
   - Doit avoir un attribut `id` obligatoire, pour être lié à la zone de déclenchement.
   - Doit avoir un attribut `role="tooltip"`.
   - Doit avoir les classes `fr-tooltip` et `fr-placement`.

**Exemple de structure HTML**

```html
<button class="fr-btn--tooltip fr-btn" type="button" aria-describedby="tooltip-2">
    Information contextuelle
</button>
<span class="fr-tooltip fr-placement" id="tooltip-2" role="tooltip">
    Lorem [...] elit ut.
</span>
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
| tooltip | Oui |  |
| Button | Non | Pour la version avec ouverture au clic |
| Link | Non | Pour la version avec ouverture au survol |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/tooltip/tooltip.min.css" rel="stylesheet">
```

---

### JavaScript

L'infobulle est un composant qui nécessite l'importation de fichiers JavaScript spécifiques pour son fonctionnement de base.

#### Installation du JavaScript

Chaque composant utilisant javascript possède un fichier Js spécifique et requiert le fichier Js du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```html
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/tooltip/tooltip.module.min.js"></script>
```

NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```html
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/tooltip/tooltip.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur le tooltip, les éléments suivants sont instanciés :

- Le conteneur, via la classe : `fr-tooltip`
- Le déclencheur, via l'attribut : `aria-describedby` lié à l'`id` du conteneur

Une fois chargé, le Js ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés

#### API

Il est possible d'interagir avec les instances du composants en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :

```js
const elem = document.getElementById('ID_TOOLTIP');
dsfr(elem).tooltip.show();
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

###### tooltip

**parent**

| **Description** | Retourne l'instance du dsfr parente |
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
| **Exemple** | `dsfr(elem).tooltip.node` |

**isEnabled**

| **Description** | Défini si le fonctionnement de l'infobulle est activé ou non |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tooltip.isEnabled = false` |

**isShown**

| **Description** | Défini si l'infobulle est affichée ou non |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tooltip.isShown = false` |

**show**

| **Description** | Affiche l'infobulle |
|---|---|
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).tooltip.show()` |

**hide**

| **Description** | Cache l'infobulle |
|---|---|
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).tooltip.hide()` |

**mode**

| **Description** | Défini le mode de placement de l'infobulle |
|---|---|
| **Type** | property |
| **Retour** | 'placement_auto' \| 'placement_manual' |
| **Exemple** | `dsfr(elem).tooltip.mode =<br> 'placement_manual'` |

**align**

| **Description** | Défini l'alignement vertical de l'infobulle en `mode='placement_manual'` |
|---|---|
| **Type** | property |
| **Retour** | 'align_start' \| 'align_center' \| 'align_end' |
| **Exemple** | `dsfr(elem).tooltip.align =<br> 'align_start'` |

**place**

| **Description** | Définit le placement horizontal de l'infobulle par rapport au déclencheur en `mode='placement_manual'` |
|---|---|
| **Type** | property |
| **Retour** | 'place_top' \| 'place_bottom' \| 'place_left' \| 'place_right' |
| **Exemple** | `dsfr(elem).tooltip.place =<br> 'place_top'` |

###### tooltipReferent

**parent**

| **Description** | Retourne l'instance du dsfr parente |
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
| **Exemple** | `dsfr(elem).tooltipReferent.node` |

**isEnabled**

| **Description** | Défini si le fonctionnement du déclencheur est activé ou non |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tooltipReferent.isEnabled =<br> false` |

#### Événements

Le Système de Design fournit des événements personnalisés pour les actions uniques de la part de certains composants réactifs listés sur la page de l' [API Javascript](https://www.systeme-de-design.gouv.fr/version-courante/fr/premiers-pas/vous-etes-developpeur/api-javascript) .

Sur l’infobulle, les événements suivants sont disponibles :

**événements**

| Événement | Action | Élément | Attribut |
|---|---|---|---|
| `dsfr.show` | Affichage de l’infobulle | tooltip | `data-fr-js-tab-tooltip` |
| `dsfr.hide` | Masquage de l’infobulle | tooltip | `data-fr-js-tab-tooltip` |

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+tooltip+)

#### [v1.15.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.15.0) - 17 juillet 2026

- **[correction des ouvertures/fermeture du tooltip](https://github.com/GouvernementFR/dsfr/pull/1447)**  
  #1447  
  - Corrige la fermeture sur IOS et la fermeture au tab
- Une information contextuelle ne reste plus ouverte après un clic
- Cliquer une seconde fois sur une infobulle la referme maintenant  
  🐛 fix  
  tooltip

- **[empeche fermeture au click sur tooltip](https://github.com/GouvernementFR/dsfr/pull/1382)**  
  #1382  
  - Sur les tooltips ouverts au clic sur le btn, cliquer sur le tooltip ne ferme plus celui-ci. Ce qui permet de sélectionner et copier coller son contenu.  
  🐛 fix  
  tooltip

#### [v1.14.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.14.1) - 29 août 2025

- **[placmeent du focus a la fermeture clavier](https://github.com/GouvernementFR/dsfr/pull/1213)**  
  #1213  
  - Corrige le retour du focus lorsque l'on ferme le tooltip via la touche échap. Problème constaté notamment au sein d'une modale.  
  🐛 fix  
  tooltip

#### [v1.14.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.14.0) - 25 juin 2025

- **[fermeture du tooltip avant la fermeture de la modale](https://github.com/GouvernementFR/dsfr/pull/1174)**  
  #1174  
  ✨ feat  
  modal tooltip

#### [v1.13.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.13.0) - 4 décembre 2024

- **[positionnement du tooltip dans header & modale](https://github.com/GouvernementFR/dsfr/pull/1010)**  
  #1010  
  - Correction du placement du tooltip dans un élément possédant un filter (modal, header)
- Gestion du placement en position absolute plutot que fixed  
  🐛 fix  
  core tooltip

#### [v1.11.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.1) - 31 janvier 2024

- **[fallback du fond en conic gradiant](https://github.com/GouvernementFR/dsfr/pull/863)**  
  #863  
  - ajout d'un fallback en linear-gradiant pour les navigateur qui ne supporte pas le conic-gradiant (ex: firefox < 83)  
  🐛 fix  
  tooltip

#### [v1.10.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.10.0) - 19 juillet 2023

- **[retrait exemple texte](https://github.com/GouvernementFR/dsfr/pull/710)**  
  #710  
  - l'utilisation d'un tooltip sur un texte pose des problèmes de restitution
- cet usage est déconseillé
- retrait de l'exemple  
  📝 doc  
  tooltip

- **[interaction globale et focus iOS](https://github.com/GouvernementFR/dsfr/pull/691)**  
  #691  
  - Correctif à la pression de la touche Escape sur la modale : si l'élément actif (focus) est un élément de formulaire ou un média, la modale n'est pas refermée pas pour permettre l'interaction native de l'élément actif
- Correctif iOS de la prise de focus au clic
- Fermeture des tooltips dés au clic sur n'importe quel endroit
- Fermeture des tooltip à la pression sur la touche escape, où que soit le focus  
  🐛 fix  
  tooltip modal

- **[a11y tooltip hover](https://github.com/GouvernementFR/dsfr/pull/686)**  
  #686  
  - autorise le survol sur l'information contextuelle
- ajoute un `tabindex="0"` sur l'example dans un texte
- arrondi la valeur de placements de la flèche verticale à 2 décimales
- retire le `aria-hidden="true"` et ajoute `display="none"`  
  🐛 fix  
  tooltip

- **[mise a jour exemple](https://github.com/GouvernementFR/dsfr/pull/666)**  
  #666  
  - Dans l'exemple "Information contextuelle dans un tableau", remplacement de l'information contextuelle par une infobulle (interaction au clic plutôt qu'au survol)  
  🐛 fix  
  tooltip

- **[ajout de la fonctionnalité Tooltip](https://github.com/GouvernementFR/dsfr/pull/486)**  
  #486  
  Le composant `Infobulle` (ou `bulle d’aide`, `aide contextuelle`) permet d’afficher du contenu dans le contexte de navigation (non modal), à propos et lors de l’interaction avec un élément précis de l’interface. Il est caché par défaut, et s’affiche au survol ou au clic de l’élément associé, par-dessus le reste de la page.  
  🎉 feat  
  tooltip

##### Contenu associé

- **[Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale)**  
  Présentation du composant Modale permettant de focaliser l’attention de l’usager sur une tâche ou une information sans quitter la page.

- **[Paramètres d'affichage](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/parametres-d-affichage)**  
  Présentation du composant Paramètres d’affichage permettant à l’usager de modifier le thème visuel d’un site entre mode clair et mode sombre.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/infobulle/accessibilite-de-l-infobulle

Elle est cachée par défaut et s’affiche par-dessus le reste de la page lors du survol ou au clic de l’élément associé.

Le composant **Infobulle** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

L’infobulle doit être accessible au clavier, lorsque le focus est placé sur l'élément déclencheur de l'infobulle, celle-ci devient visible.

`Échap` ferme l’infobulle que le focus soit placé sur l’élément déclencheur ou non.

### Règles d’accessibilité

- L’élément qui déclenche l’infobulle a l'attribut `aria-describedby` défini sur l’`id` de l'infobulle.
- L’élément qui sert de conteneur d’infobulle a l'attribut `role="tooltip"`.
- Assurez-vous que le texte de l'infobulle est clair et concis.

> **Attention**
> L’utilisation d’une infobulle déclenchée au survol n'est pas une bonne pratique en soi. L’information ne sera pas visible pour les personnes handicapées qui utilisent le contrôle vocal. Il est impossible de garantir l’accessibilité de cette variante du composant. Évitez tant que possible son utilisation. Préférez des libellés clairs ou un texte descriptif visible.

#### Contrastes des textes

Le composant Infobulle est suffisamment contrasté en thème clair et en thème sombre.

### Restitution par les lecteurs d’écran

Les lecteurs d’écran restituent différemment le composant Infobulle.

#### Infobulle déclenchée au survol

Seul le Narrateur ne restitue pas l’infobulle déclenchée au survol.

> **Information**
> Avec NVDA et JAWS, en navigation en mode revue (curseur virtuel), la liaison aria-describedby n’est pas restituée sur l’infobulle déclenchée au survol. Il est nécessaire de naviguer sur le lien à la tabulation.

#### Infobulle déclenchée au clic

Tous les lecteurs d’écran restituent le contenu de l’infobulle déclenchée au clic.

> **Information**
> Avec NVDA, en mode revue, la liaison aria-describedby n’est pas restituée sur l’infobulle déclenchée au clic. Il est nécessaire de naviguer sur le lien à la tabulation. Il s’agit d’un comportement référencé par NVDA. Voir [commentaire Github](https://github.com/nvaccess/nvda/issues/9153#issuecomment-578381262) .

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
- **Liens :** 6.1, 6.2
- **Scripts :** 7.1, 7.3
- **Présentation de l’information :** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.8, 10.11, 10.12, 10.13, 10.14
- **Consultation :** 13.9

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Rôle tooltip](https://www.w3.org/TR/wai-aria/#tooltip)

##### Contenu associé

- **[Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale)**  
  Présentation du composant Modale permettant de focaliser l’attention de l’usager sur une tâche ou une information sans quitter la page.

- **[Paramètres d'affichage](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/parametres-d-affichage)**  
  Présentation du composant Paramètres d’affichage permettant à l’usager de modifier le thème visuel d’un site entre mode clair et mode sombre.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/infobulle/demonstration-de-l-infobulle

Elle est cachée par défaut et s’affiche par-dessus le reste de la page lors du survol ou au clic de l’élément associé.

*(Démonstration interactive « tooltip--docs » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=tooltip--docs&nav=0&globals=theme%3Alight)*

#### Contenu associé

- **[Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale)**  
  Présentation du composant Modale permettant de focaliser l’attention de l’usager sur une tâche ou une information sans quitter la page.

- **[Paramètres d'affichage](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/parametres-d-affichage)**  
  Présentation du composant Paramètres d’affichage permettant à l’usager de modifier le thème visuel d’un site entre mode clair et mode sombre.
