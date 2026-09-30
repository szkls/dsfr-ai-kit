# Tag

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tag · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tag/design-du-tag · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tag/code-du-tag · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tag/accessibilite-du-tag · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tag/demonstration-du-tag
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

Le tag est un élément d’indication ou d’interaction (selon les contextes) permettant de catégoriser, classer, organiser les contenus d’un site à l’aide de mots clés. Il aide les usagers à rechercher et à trouver facilement une information.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tag

*(Démonstration interactive « tag--tag » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=tag--tag&nav=0&globals=theme%3Alight)*

### Quand utiliser ce composant ?

- **Utiliser le tag en l’associant à un contenu** (carte, en-tête etc.) pour le catégoriser (par thème, sujet, type de contenu etc). Dans ce contexte, le tag peut être cliquable ou non cliquable.

> **Information**
> Bien différencier le tag du [badge](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge) . Le tag ne sert pas à donner le statut du contenu auquel il est associé. 
>  Il ne sert pas non plus à donner des informations de complément à la catégorisation (auteur, date, lieu par exemple). Pour ce faire, utiliser l’élément « détail » prévu sur [les cartes](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/carte) , et la typo XS « mention » pour les page de contenu.

- **Utiliser le tag en tant que filtre** , dans une page liste ou de recherche par exemple. Dans ce contexte, le tag peut être sélectionnable ou supprimable.

### Comment utiliser ce composant ?

- **Utiliser le tag non cliquable** pour afficher une information sur un contenu.
- **Utiliser le tag cliquable** pour donner accès à une page avec des contenus associés à ce tag (liste de contenus, liste de résultats de recherche etc).
- **Utiliser le tag sélectionnable** pour permettre d’activer ou désactiver un filtre.
- **Utiliser le tag supprimable** pour permettre de désactiver un filtre. Il sert de rappel à un filtre qui a préalablement été coché dans une sidebar ou une liste déroulante.
- **Limiter le nombre de tags proposés au sein d’un groupe** pour ne pas noyer l’usager d’informations ou, dans le contexte de filtres, lui permettre de rapidement scanner la liste disponible.
- **Préférer l’usage de tags supprimables associés à une liste déroulantes** plutôt que d’un groupe de tags sélectionnables lorsque leur nombre excède 6 tags.

> **À faire :** Utiliser des tags supprimables associés à une liste déroulante dès lors qu’il y a plus de 6 options possibles.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tag/use/do-1.png)

> **À ne pas faire :** Ne pas utiliser plus de 6 tags sélectionnables pour un même filtre.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tag/use/dont-1.png)

> **À ne pas faire :** Ne pas utiliser un tag pour mettre en forme du contenu.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tag/use/dont-2.png)

### Règles éditoriales

- **Préférer des libellés courts et clairs** pour que l’information relayée par le tag soit facilement identifiable de l’usager.
- **Construire des libellés en base d’un mot-clé ou d’une expression** permettant de catégoriser le contenu auquel les tags sont associés.

> **À faire :** Penser des libellés pertinents, qui vont à l’essentiel.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tag/edit/do-1.png)

> **À ne pas faire :** Ne pas proposer des libellés longs et complexes.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tag/edit/dont-1.png)

#### Contenu associé

- **[Badge](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge)**  
  Présentation du composant Badge utilisé pour afficher une information de type statut ou état liée à un élément de l’interface.

- **[Carte](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/carte)**  
  Présentation du composant Carte permettant de rediriger l’usager vers une page éditoriale, en lui donnant un aperçu. Elle peut intégrer des médias, actions, tags ou boutons et se décline en différents formats.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tag/design-du-tag

![Anatomie du tag](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tag/design/anatomy/anatomy-1.png)

1. Une icône — En option
2. Un fond de couleur — Obligatoire
3. Un libellé — Obligatoire
4. Une coche, uniquement s'il s'agit d'un tag sélectionnable en état cliqué — Obligatoire
5. Une croix, uniquement s'il s'agit d'un tag supprimable — Obligatoire

### Variations

**Tag non cliquable**

*(Démonstration interactive « tag--size-md » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=tag--size-md&nav=0&globals=theme%3Alight)*

**Tag cliquable**

*(Démonstration interactive « tag--tag-clickable » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=tag--tag-clickable&nav=0&globals=theme%3Alight)*

**Tag sélectionnable**

*(Démonstration interactive « tag--tag-pressable » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=tag--tag-pressable&nav=0&globals=theme%3Alight)*

**Tag supprimable**

*(Démonstration interactive « tag--tag-dismissible » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=tag--tag-dismissible&nav=0&globals=theme%3Alight)*

> **Information**
> Cette variation n’autorise pas l’utilisation d’icône, autre que la croix de suppression présente par défaut.

**Groupe de tags**

*(Démonstration interactive « tags-group--size-md » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=tags-group--size-md&nav=0&globals=theme%3Alight)*

Tous les tags peuvent être utilisés à plusieurs dans des groupes de tags. Dans ce cas-là ils appliquent des espacement préalablement définis par le DSFR.

### Tailles

Toutes les variations de tags sont disponibles en 2 tailles, pour pouvoir s’adapter au contexte d’affichage :

- SM pour small

*(Démonstration interactive « tag--size-sm » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=tag--size-sm&nav=0&globals=theme%3Alight)*

- MD pour medium - taille par défaut

*(Démonstration interactive « tag--size-md » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=tag--size-md&nav=0&globals=theme%3Alight)*

À noter que pour le groupe de tags en taille SM, le padding autour du tag est plus important que lorsqu’il est utilisé seul pour faciliter le clic en mobile.

### États

Le tag non cliquable est le seul qui n’est sujet à aucun changement d’état.

**Etat au survol**

L’état au survol correspond au comportement constaté par l’usager lorsqu’il survole le tag avec sa souris.

- Tag cliquable
- Tag sélectionnable
- Tag supprimable

**Etat cliqué**

L’état au clic correspond au comportement constaté par l’usager une fois un tag sélectionné, après avoir cliqué dessus.

- Tag sélectionnable

### Personnalisation

Seule la couleur des tags cliquables peut être personnalisée, parmi les couleurs illustratives autorisées uniquement.

**Tableau personnalisation design**

| Éléments | Indice thème clair | Indice thème sombre |
|---|---|---|
| **Fond** | Indice **925** <br> exemple : `$pink-tuile-925` | Indice **125** <br> exemple : `$pink-tuile-125` |
| **Texte et icône** | Indice **sun** <br> exemple : `$pink-tuile-sun-425` | Indice **moon** <br> exemple : `$pink-tuile-moon-750` |

La personnalisation des tags doit se faire avec parcimonie et avec un objectif précis (permettre d'en faire ressortir un type ou le sens, par exemple).

> **Information**
> Si vous personnalisez la couleur illustrative des badges, attention à la couleur d’arrière-plan sur laquelle ils sont positionnés à travers l’ensemble du site.

> **À faire :** Personnaliser uniquement la couleur des tags cliquables.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tag/design/custom/do-1.png)

> **À ne pas faire :** Ne pas proposer les autres variations de tags en couleur.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tag/design/custom/dont-1.png)

> **À faire :** Associer le tag cliquable à une couleur pour valoriser l’information transmise, ici le type de support.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tag/design/custom/do-2.png)

> **À ne pas faire :** Ne pas dépasser une ou deux couleurs de tags par page.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tag/design/custom/dont-2.png)

> **À faire :** Ajouter une icône au tag au besoin.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tag/design/custom/do-3.png)

> **À ne pas faire :** Ne pas cumuler la croix du tag supprimable (icône par défaut) avec une seconde icône.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tag/design/custom/dont-3.png)

#### Contenu associé

- **[Badge](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge)**  
  Présentation du composant Badge utilisé pour afficher une information de type statut ou état liée à un élément de l’interface.

- **[Carte](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/carte)**  
  Présentation du composant Carte permettant de rediriger l’usager vers une page éditoriale, en lui donnant un aperçu. Elle peut intégrer des médias, actions, tags ou boutons et se décline en différents formats.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tag/code-du-tag

### HTML

#### Structure du composant

Le composant **Tag** est un élément permettant de marquer ou de catégoriser des éléments et peut être utilisé dans deux contextes :

- Dans le contenu (carte, en-tête, liste) : il catégorise le contenu auquel il est apposé. Il peut être cliquable ou non cliquable.
- En tant que filtre (dans une page de résultats de recherche par exemple). Dans ce cas il peut-être :
  - activable comme filtre en place à sélectionner/désélectionner,
  - supprimable, il sert de rappel à un filtre qui a été coché dans une sidebar ou une liste déroulante.

##### Tag non cliquable

Sa structure est la suivante :

- Le **Tag** est un élément HTML `<p>` défini par la classe `fr-tag`.

**Exemple de Tag non cliquable**

```html
<p class="fr-tag">Libellé tag non cliquable</p>
```

##### Tag cliquable

Sa structure est la suivante :

- Le **Tag cliquable** est un élément HTML `<a>` ou `<button>` avec la classe `fr-tag`.

**Exemple de Tag cliquable**

```html
<a href="#" class="fr-tag">Tag cliquable lien</a>
<button type="button" class="fr-tag">Libellé tag cliquable bouton</button>
```

##### Tag activable

Sa structure est la suivante :

- Le **Tag activable** est un élément HTML `<button>` avec la classe `fr-tag` et l'attribut `aria-pressed`, sa valeur [true|false] défini si le tag est activé.

**Exemple de Tag activable**

```html
<button type="button" class="fr-tag" aria-pressed="false">Libellé tag activable</button>
```

##### Tag supprimable

Sa structure est la suivante :

- Le **Tag activable** est un élément HTML `<button>` avec les classes `fr-tag` et `fr-tag--dismiss`.

**Exemple de Tag supprimable**

```html
<button class="fr-tag fr-tag--dismiss" type="button" aria-label="Retirer [À MODIFIER - le filtre Libellé tag supprimable]">Libellé tag supprimable</button>
```

##### Groupe de tags

Les tags peuvent être utilisés à plusieurs dans des groupes de tags `fr-tags-group`. Dans ce cas-là ils appliquent des espacement préalablement définis par le DSFR.

**Exemple de groupe de tags**

```html
<ul class="fr-tags-group">
    <li>
        <p class="fr-tag">Libellé tag 1</p>
    </li>
    <li>
        <p class="fr-tag">Libellé tag 2</p>
    </li>
    <li>
        <p class="fr-tag">Libellé tag 3</p>
    </li>
</ul>
```

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](https://www.systeme-de-design.gouv.fr/version-courante/fr/premiers-pas/vous-etes-developpeur/prise-en-main#les-css) .

**Dépendances CSS**

| Dépendance | Obligatoire | Remarque |
|---|---|---|
| Core | Oui |  |
| Tag | Oui |  |
| Utility | Non | Uniquement pour l'ajout d'icône |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/tag/tag.min.css" rel="stylesheet">
```

#### Variantes de tailles

Le tag est disponible en deux variantes de tailles :

- En taille MD : par défaut.
- En taille SM : définie par la classe `fr-tag--sm`.

**Exemples de variantes de taille**

```html
<p class="fr-tag fr-tag--sm">Libellé tag non cliquable taille SM</p>
<a class="fr-tag fr-tag--sm" href="#">Libellé tag cliquable taille SM</a>
<button class="fr-tag fr-tag--sm" aria-pressed="false" type="button">Libellé tag activable taille SM</button>
<button class="fr-tag fr-tag--sm fr-tag--dismiss" type="button" aria-label="Retirer [À MODIFIER - le filtre Libellé tag taille SM]">Libellé tag supprimable taille SM</button>
```

#### Variante avec icône

Le tag peut avoir une icône juxtaposée à gauche, elle est ajoutée via la **classe utilitaire d'icône** `fr-icon--NOM-ICONE` (voir [Icônes](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/icone) ), associée à une **classe de positionnement** de l'icône `fr-tag--icon-left`.

**Exemples de variantes avec icône**

```html
<p class="fr-tag fr-icon-arrow-left-line fr-tag--icon-left">Libellé tag non cliquable avec icône</p>
<a class="fr-tag fr-icon-arrow-left-line fr-tag--icon-left" href="#">Libellé tag cliquable avec icône</a>
<button class="fr-tag fr-icon-information-line fr-tag--icon-left" aria-pressed="false" type="button">Libellé tag activable avec icône</button>
```

#### Variante désactivée

Le style désactivé du tag cliquable est appliqué par le retrait de l'attribut `href` sur l'élément `<a>` ou par l'ajout de l'attribut `disabled` sur l'élément `<button>`. Le tag est alors grisé et les effets au survol et au clic sont retirés. Le pointeur de la souris prend la valeur "not-allowed" au survol du bouton ce qui change son style. Sur le tag cliquable désactivé avec l'élément `<a>`, l'attribut `role="link"` et `aria-disabled` seront nécessaires pour les technologies d'assistance.

**Exemples de variantes désactivées**

```html
<a class="fr-tag" aria-disabled="true" role="link">Libellé tag cliquable désactivé</a>
<button class="fr-tag" type="button" disabled>Libellé tag cliquable désactivé</button>
<button class="fr-tag" aria-pressed="false" type="button" disabled>Libellé tag activable désactivé</button>
<button class="fr-tag fr-tag--dismiss" type="button" aria-label="Retirer [À MODIFIER - le filtre Libellé tag supprimable désactivé]" disabled>Libellé tag supprimable désactivé</button>
```

#### Accentuation

Le tag cliquable est accentuable, permettant le changement de la couleur de fond. Pour cela, ajouter la classe `fr-tag--NOM-COULEUR` au même niveau que la classe `fr-tag`.

**Exemple de variante accentuée**

```html
<a class="fr-tag fr-tag--green-emeraude" href="#">Libellé tag cliquable accentué</a>
```

#### Variantes de taille du groupe de tag

Le groupe de tag est disponible en deux variantes de tailles :

- En taille MD : par défaut.
- En taille SM : définie par la classe `fr-tags-group--sm`.

**Exemples de variantes de taille**

#### Déplier pour voir le code

**Groupe de tags non cliquables SM**

```html
<ul class="fr-tags-group fr-tags-group--sm">
    <li>
        <p class="fr-tag">Libellé tag non cliquable SM 1</p>
    </li>
    <li>
        <p class="fr-tag">Libellé tag non cliquable SM 2</p>
    </li>
    <li>
        <p class="fr-tag">Libellé tag non cliquable SM 3</p>
    </li>
</ul>
```

**Groupe de tags cliquables SM**

```html
<ul class="fr-tags-group fr-tags-group--sm">
    <li>
        <a class="fr-tag" href="#">Libellé tag cliquable SM 1</a>
    </li>
    <li>
        <a class="fr-tag" href="#">Libellé tag cliquable SM 2</a>
    </li>
    <li>
        <a class="fr-tag" href="#">Libellé tag cliquable SM 3</a>
    </li>
</ul>
```

**Groupe de tags sélectionnables SM**

```html
<ul class="fr-tags-group fr-tags-group--sm">
    <li>
        <button class="fr-tag" type="button" aria-pressed="false">Libellé tag sélectionnable SM 1</button>
    </li>
    <li>
        <button class="fr-tag" type="button" aria-pressed="false">Libellé tag sélectionnable SM 2</button>
    </li>
    <li>
        <button class="fr-tag" type="button" aria-pressed="false">Libellé tag sélectionnable SM 3</button>
    </li>
</ul>
```

**Groupe de tags supprimables SM**

```html
<ul class="fr-tags-group fr-tags-group--sm">
    <li>
        <button class="fr-tag fr-tag--dismiss" type="button" aria-label="Retirer [À MODIFIER - le filtre Libellé tag supprimable SM 1]">Libellé tag supprimable SM 1</button>
    </li>
    <li>
        <button class="fr-tag fr-tag--dismiss" type="button" aria-label="Retirer [À MODIFIER - le filtre Libellé tag supprimable SM 2]">Libellé tag supprimable SM 2</button>
    </li>
    <li>
        <button class="fr-tag fr-tag--dismiss" type="button" aria-label="Retirer [À MODIFIER - le filtre Libellé tag supprimable SM 3]">Libellé tag supprimable SM 3</button>
    </li>
</ul>
```

---

### JavaScript

#### Installation du JavaScript

Pour fonctionner, le composant Tag nécessite l'utilisation de JavaScript pour les tags activables supprimables. Chaque composant utilisant JavaScript possède un fichier JS spécifique et requiert le fichier JS du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```html
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/tag/tag.module.min.js"></script>
```

NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```html
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/tag/tag.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur le Tag, les éléments suivants sont instanciés :

- Le Tag activable, via la classe : `fr-tag` et l'attribut `aria-pressed`.
- Le Tag supprimable, via la classe `fr-tag--dismiss`.

Une fois chargé, le JS ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés.

#### API

Il est possible d'interagir avec les instances du composant en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :

```js
const elem = document.getElementById('ID_TAG');
dsfr(elem).tagDismissible.isEnabled;
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

###### toggle

**isEnabled**

| **Description** | Défini si le fonctionnement du tag activable est activé ou non |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).toggle.isEnabled = false` |

**pressed**

| **Description** | Renvoi l'état du tag activable |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).toggle.pressed = false` |

**toggle**

| **Description** | Fait varier l'état checked/unchecked et la valeur de l'attribut `aria-pressed` du tag activable |
|---|---|
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).toggle.toggle()` |

**node**

| **Description** | Renvoie le noeud HTML de l'élément. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).toggle.node` |

###### tagDismissible

**isEnabled**

| **Description** | Défini si le fonctionnement du tag supprimable est activé ou non |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tagDismissible.isEnabled = false` |

**node**

| **Description** | Renvoie le noeud HTML de l'élément. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).tagDismissible.node` |

#### Événements

Le Système de Design fournit des événements personnalisés pour les actions uniques de la part de certains composants réactifs listés sur la page de l' [API Javascript](https://www.systeme-de-design.gouv.fr/version-courante/fr/premiers-pas/vous-etes-developpeur/api-javascript) .

Sur le tag, les événements suivants sont disponibles :

**événements**

| Événement | Action | Élément | Attribut |
|---|---|---|---|
| `dsfr.dismiss` | Suppression du tag supprimable | TagDismissible | `data-fr-js-tag-dismissible` |
| `dsfr.click` | Click sur le tag supprimable | TagDismissible | `data-fr-js-tag-dismissible` |
| `dsfr.click` | Click sur le tag sélectionnable | Toggle | `data-fr-js-toggle` |

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+tag+)

#### [v1.13.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.13.1) - 26 mars 2025

- **[bug hover tags sélectionnables désactivés](https://github.com/GouvernementFR/dsfr/pull/1058)**  
  #1058  
  - Correction du hover des tags sélectionnables désactivés  
  🐛 fix  
  tag

#### [v1.11.2](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.2) - 4 mars 2024

- **[corrige le hover des tags cliquables](https://github.com/GouvernementFR/dsfr/pull/887)**  
  #887  
  - le hover des tags cliquables avait disparu  
  🐛 fix  
  tag

#### [v1.11.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.0) - 11 décembre 2023

- **[token de couleur du tag selectionnable](https://github.com/GouvernementFR/dsfr/pull/780)**  
  #780  
  - utilisation du token $text-inverted-blue-france sur la couleur du texte des tag selectionnable et supprimable à la place de $text-inverted-grey
- remplacement du token de couleur de fond des tag selectionnable par $background-active-blue-france au lieu de $background-action-high-blue-france  
  🐛 fix  
  tag

#### [v1.10.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.10.0) - 19 juillet 2023

- **[retrait du z-index](https://github.com/GouvernementFR/dsfr/pull/630)**  
  #630  
  - retrait du z-index: 1 qui pose problème dans une modale avec footer.  
  🐛 fix  
  link button tag badge

#### [v1.8.5](https://github.com/GouvernementFR/dsfr/releases/tag/v1.8.5) - 28 novembre 2022

- **[correction régression lien tag](https://github.com/GouvernementFR/dsfr/pull/480)**  
  #480  
  fix  
  tag

#### [v1.8.2](https://github.com/GouvernementFR/dsfr/releases/tag/v1.8.2) - 9 novembre 2022

- **[déplacement du focus sur les tags supprimables](https://github.com/GouvernementFR/dsfr/pull/453)**  
  #453  
  fix  
  tag

#### [v1.8.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.8.0) - 27 octobre 2022

- **[correction tag selectionnable hover](https://github.com/GouvernementFR/dsfr/pull/430)**  
  #430  
  fix  
  tag

#### [v1.6.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.6.0) - 14 juin 2022

- **[correctif icône lien extérieur](https://github.com/GouvernementFR/dsfr/pull/333)**  
  #333  
  fix  
  core link button tag card

- **[correction espacements des groupes](https://github.com/GouvernementFR/dsfr/pull/311)**  
  #311  
  refactor  
  header link button follow share tag badge

#### [v1.4.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.4.1) - 29 mars 2022

- **[correction tag activable sm et dans un group sm](https://github.com/GouvernementFR/dsfr/pull/258)**  
  #258  
  fix  
  tag

#### [v1.3.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.3.0) - 18 janvier 2022

- **[sélectionnable](https://github.com/GouvernementFR/dsfr/pull/189)**  
  #189  
  fix  
  tag

- **[role & aria link disabled](https://github.com/GouvernementFR/dsfr/pull/181)**  
  #181  
  fix  
  link tag pagination share

- **[correctif js tag](https://github.com/GouvernementFR/dsfr/pull/180)**  
  #180  
  - fix(core): correctif js
- fix(tag): correctif js  
  fix  
  tag

- **[Ajout des composants tag activable et tag supprimable](https://github.com/GouvernementFR/dsfr/pull/166)**  
  #166  
  feat  
  tag

##### Contenu associé

- **[Badge](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge)**  
  Présentation du composant Badge utilisé pour afficher une information de type statut ou état liée à un élément de l’interface.

- **[Carte](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/carte)**  
  Présentation du composant Carte permettant de rediriger l’usager vers une page éditoriale, en lui donnant un aperçu. Elle peut intégrer des médias, actions, tags ou boutons et se décline en différents formats.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tag/accessibilite-du-tag

Le composant **Tag** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

#### Tag non cliquable

- Par défaut, utiliser un élément `<p>` lorsque le tag est utilisé seul.
- Si le tag est utilisé à l’intérieur d’un élément qui possède une sémantique (`<p>`, `li`), utiliser un élément `<span>`.
- En cas d’utilisation de plusieurs tags à la suite, les structurer dans une liste.

#### Tag cliquable

- Un tag cliquable doit être un lien (élément `<a href>`).
- En cas d’utilisation de plusieurs tags cliquables à la suite, les structurer dans une liste.

Voir les [règles d'accessibilité du composant Lien](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lien/accessibilite-du-lien#regles-d-accessibilite) .

#### Tag sélectionnable / supprimable

- Un tag sélectionnable ou supprimable doit être un bouton (élément `<button>`).
- Le tag sélectionnable possède un attribut `aria-pressed` avec les valeurs `false` ou `true` pour transmettre son état aux personnes aveugles.
- Le tag supprimable possède un attribut `aria-label` pour donner un libellé explicite au bouton. La valeur de l’attribut doit obligatoirement contenir l’intitulé visible du tag. Ex. `aria-label="Retirer le filtre [label tag]"`.
- Attention à repositionner le focus à un endroit pertinent lors de la suppression du tag.

Voir les [règles d’accessibilité du composant Bouton](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton/accessibilite-du-bouton#regles-d-accessibilite) .

### Contrastes de couleurs

Le composant Tag est suffisamment contrasté en thème clair. Il l’est également en thème sombre dans sa version par défaut.

**Contrastes de couleurs**

| Élément | Thème clair | Thème sombre |
|---|---|---|
| **Tag par défaut** | 15,6:1 | 15,52:1 |
| **Tag cliquable / Tag non sélectionné** | 11,83:1 | 4,55:1 |
| **Tag cliquable / Tag non sélectionné au survol** | 8,72:1 | 2,6:1 |
| **Tag sélectionné / Tag supprimable** | 13,75:1 | 4,74:1 |
| **Tag sélectionné / Tag supprimable au survol** | 7,58:1 | 7,47:1 |

---

### Restitution par les lecteurs d’écran

Par défaut, les lecteurs d’écran restituent le **nom, la description, l’état et le type** . L’ordre peut varier en fonction des lecteurs d’écran et de leur configuration.

L’attribut `aria-pressed` est restitué différemment selon les lecteurs d’écran :

- **VoiceOver macOS et iOS :** « bouton de basculement ». Sur macOS, seul l’état sélectionné est restitué « sélectionné ». Sur iOS, VoiceOver restitue l’état (« non enfoncé / enfoncé » ou « coché / non coché » à l’activation ou désactivation du bouton).
- **NVDA et JAWS :** « bouton bascule » pour NVDA et « bouton à bascule » pour JAWS, les états sont restitués « non enfoncé / enfoncé ».
- **Narrateur et Talkback :** « bouton d'activation / désactivation », les états sont restitués « désactivé / activé ».

---

### Critères RGAA applicables

- **Couleurs** : 3.2, 3.3
- **Liens** : 6.1, 6.2
- **Scripts** : 7.1, 7.3
- **Éléments obligatoires** : 8.9
- **Structuration** : 9.3
- **Présentation de l’information** : 10.1, 10.2, 10.4, 10.5, 10.7, 10.11, 10.12
- **Navigation** : 12.8, 12.9
- **Consultation :** 13.9, 13.11

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)

##### Contenu associé

- **[Badge](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge)**  
  Présentation du composant Badge utilisé pour afficher une information de type statut ou état liée à un élément de l’interface.

- **[Carte](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/carte)**  
  Présentation du composant Carte permettant de rediriger l’usager vers une page éditoriale, en lui donnant un aperçu. Elle peut intégrer des médias, actions, tags ou boutons et se décline en différents formats.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tag/demonstration-du-tag

*(Démonstration interactive « tag--docs » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=tag--docs&nav=0&globals=theme%3Alight)*

*(Démonstration interactive « tags-group--docs » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=tags-group--docs&nav=0&globals=theme%3Alight)*

#### Contenu associé

- **[Badge](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge)**  
  Présentation du composant Badge utilisé pour afficher une information de type statut ou état liée à un élément de l’interface.

- **[Carte](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/carte)**  
  Présentation du composant Carte permettant de rediriger l’usager vers une page éditoriale, en lui donnant un aperçu. Elle peut intégrer des médias, actions, tags ou boutons et se décline en différents formats.
