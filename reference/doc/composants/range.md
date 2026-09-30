# Curseur

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/curseur · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/curseur/design-du-curseur · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/curseur/code-du-curseur · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/curseur/accessibilite-du-curseur · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/curseur/demonstration-du-curseur
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

Le curseur est un élément d’interaction avec l’interface permettant à l’usager de délimiter manuellement une sélection par rapport à une valeur minimale et maximale.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/curseur

*(Démonstration interactive « range--range » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=range--range&nav=0&globals=theme%3Alight)*

### Quand utiliser ce composant ?

**Utiliser un curseur lorsque la valeur saisie est imprécise ou à déterminer** , par exemple, la luminosité d’un écran. Il sert à montrer en temps réel l’impact des options choisies et à éclairer la prise de décision.

> **Information**
> Préférer un [champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie) ou une [liste déroulante](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante) lorsque la valeur à renseigner est précise, comme une année de naissance par exemple, ou que le nombre de valeurs spécifiques parmi lesquelles choisir est important.

Le curseur n’a pas vocation à communiquer un état d’avancement quelconque. Pour ce type d’usage, utiliser l’ [indicateur d’étapes](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/indicateur-d-etapes) .

### Comment utiliser ce composant ?

- **Eviter d’intégrer un curseur au sein d’un formulaire** , sauf cas exceptionnel.
- **Lier l’usage du curseur à une actualisation du résultat en temps réel** , en fonction de la valeur sélectionnée. Par exemple, en tant que filtre déterminant l’affichage de donnée dans une liste ou un tableau.
- **Considérer que la valeur du curseur est toujours en nombre** . Des unités peuvent ensuite y être ajoutées (k€, €, kg, etc).

> **À faire :** Proposer une fourchette de valeurs exclusivement en nombre.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/range/use/do-1.png)

> **À ne pas faire :** Ne pas proposer des valeurs littérales et approximatives.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/range/use/dont-1.png)

- **Proposer des échelles de valeur adaptées,** ni trop petites ni trop larges.

> **À faire :** Utiliser des cases à cocher ou des boutons radios, en cas d’échelle de valeur trop petite.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/range/use/do-2.png)

> **À ne pas faire :** Ne pas proposer une échelle de valeur non-adaptée, ici trop petite.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/range/use/dont-2.png)

> **À faire :** Proposer des échelles de valeur adaptées, ni trop petites ni trop larges.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/range/use/do-3.png)

> **À ne pas faire :** Ne pas proposer une échelle de valeur non-adaptée, ici trop grande.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/range/use/dont-3.png)

- **Utiliser le curseur lorsque vous avez l’espace de le faire** , notamment lorsque l’échelle de valeur est large. Si l’espace est limité, un [champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie) est certainement un meilleur choix.

> **À faire :** Utiliser un champ de saisie est certainement un meilleur choix lorsque l’échelle de valeur est large et l’espace limité.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/range/use/do-4.png)

### Règles éditoriales

Le curseur n’est régit par aucune règle éditoriale spécifique.

#### Contenu associé

- **[Bouton radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio)**  
  Présentation du composant Bouton radio permettant à l’usager de sélectionner une option unique parmi un ensemble limité de choix.

- **[Champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)**  
  Présentation du composant Champ de saisie permettant à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.

- **[Liste déroulante](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante)**  
  Présentation du composant Liste déroulante permettant à l’usager de sélectionner une option unique parmi un ensemble de choix dans un espace limité.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/curseur/design-du-curseur

![Anatomie du bouton](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/range/design/anatomy/anatomy-1.png)

1. Un libellé, associé au curseur — Obligatoire
2. Un texte de description additionnel — En option
3. Une piste avec poignée et valeur sélectionnée — Obligatoire
4. Une valeur minimale et maximale — En option

### Variations

**Curseur simple**

*(Démonstration interactive « range--range » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=range--range&nav=0&globals=theme%3Alight)*

- Utiliser le curseur simple pour permettre à l’usager de choisir une plage, en partant d’un minimum fixe prédéfini.

**Curseur double**

*(Démonstration interactive « range--range » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=range--range&nav=0&args=isDouble%3Atrue&globals=theme%3Alight)*

- Utiliser le curseur double pour permettre à l’usager de choisir une plage, sans valeur prédéfinie.

**Curseur cranté**

*(Démonstration interactive « range--range » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=range--range&nav=0&args=isStep%3Atrue&globals=theme%3Alight)*

- Utiliser le curseur cranté pour permettre à l’usager de choisir une plage, en contraignant les valeurs possibles.

**Sans indicateurs minimum et maximum**

*(Démonstration interactive « range--range » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=range--range&nav=0&args=indicators%3Afalse&globals=theme%3Alight)*

**Avec préfixe et suffixe**

*(Démonstration interactive « range--range » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=range--range&nav=0&args=prefix%3Aprefix%3Bsuffix%3Asuffix&globals=theme%3Alight)*

### Tailles

Le curseur est disponible en 2 tailles :

- SM pour small
- MD pour medium

En desktop, la taille minimum est de 180 px et la taille maximum est de 588 px.

En mobile, la taille minimum est de 136 px et la taille maximum est de 288 px mais il est conseillé de préférer la version MD.

### États

**État désactivé**

L’état désactivé indique que l'usager ne peut pas interagir avec le curseur.

*(Démonstration interactive « range--range » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=range--range&nav=0&args=disabled%3Atrue&globals=theme%3Alight)*

> **Attention**
> N’utiliser cet état que très ponctuellement, pour indiquer à l’usager qu’il doit procéder à une action en amont par exemple.

**Etat d’erreur**

L'état d’erreur est signalé par un changement de couleur du libellé ainsi que l’affichage d’une ligne rouge (cf. couleurs fonctionnelles : le rouge est la couleur de l’état erreur) et d’un message d’erreur en-dessous du composant.

*(Démonstration interactive « range--range » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=range--range&nav=0&args=status%3Aerror&globals=theme%3Alight)*

**Etat de succès**

L'état de succès est signalé par un changement de couleur du libellé ainsi que l’affichage d’une ligne verte (cf. couleurs fonctionnelles : le vert est la couleur de l’état succès) et d’un message de succès en-dessous du composant.

### Personnalisation

Le curseur n’est pas personnalisable.

Toutefois, certains éléments sont optionnels - [voir la structure du composant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/curseur/design-du-curseur#curseur) .

> **À ne pas faire :** Ne pas personnaliser la couleur de la piste.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/range/design/custom/dont-1.png)

> **À ne pas faire :** Ne pas personnaliser la forme de la poignée.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/range/design/custom/dont-2.png)

#### Contenu associé

- **[Bouton radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio)**  
  Présentation du composant Bouton radio permettant à l’usager de sélectionner une option unique parmi un ensemble limité de choix.

- **[Champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)**  
  Présentation du composant Champ de saisie permettant à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.

- **[Liste déroulante](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante)**  
  Présentation du composant Liste déroulante permettant à l’usager de sélectionner une option unique parmi un ensemble de choix dans un espace limité.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/curseur/code-du-curseur

### HTML

#### Structure du composant

Le composant **Curseur** permet à l'utilisateur de sélectionner une valeur dans une plage définie. Sa structure est la suivante :

- Le conteneur global du composant curseur doit être un élément HTML `<div>` défini par la classe `fr-range-group`.
- Le libellé du curseur, obligatoire, doit être un élément HTML `<label>` avec la classe `fr-label`.
  - Son attribut `id` doit être associé à l'attribut `aria-labelledby` du curseur.
- Une description additionnelle du curseur, optionnelle, peut être ajoutée dans le libellé, elle est définie par un élément `<span>` et la classe utilitaire `fr-hint-text`.
- L'élément curseur est contenu dans un élément HTML `<div>` défini par la classe `fr-range`.
- La valeur courante affichée du curseur est un élément HTML `<span>` défini par la classe `fr-range__output`.
- Le curseur est un élément HTML `<input>` de type `range` défini par la classe `fr-range__input`.
  - La valeur par défaut du curseur est définie par l'attribut `value`.
  - Les valeurs minimales et maximale du curseur autorisées sont définies par les attribut `min` et `max` du curseur.
  - Le pas du curseur est défini par l'attribut `step`.
- Les valeurs minimales et maximales affichées, optionnelles, sont des éléments HTML `<span>` définis par les classes `fr-range__min` et `fr-range__max` et disposant d'un attribut `aria-hidden="true"`.
- Un message d'erreur ou de succès peut être associé au curseur en utilisant un élément HTML `<div>` avec la classe `fr-messages-group` dans lequel on peut ajouter un message `fr-message`.
  - Son attribut `id` doit être associé à l'attribut `aria-describedby` du curseur.
  - Ce bloc peut être placé vide et être rempli dynamiquement, auquel cas il doit être annoncé à l'utilisateur en utilisant l'attribut `aria-live="polite"`.

**Exemple de structure HTML**

```html
<div class="fr-range-group">
    <label for="range-1" class="fr-label">
        Libellé
        <span class="fr-hint-text">Texte de description additionnel, valeur de 0 à 100.</span>
    </label>
    <div class="fr-range">
        <span class="fr-range__output" aria-hidden="true">50</span>
        <input id="range-1" name="range" type="range" max="100" value="50" aria-describedby="range-messages">
        <span class="fr-range__min" aria-hidden="true">0</span>
        <span class="fr-range__max" aria-hidden="true">100</span>
    </div>
    <div class="fr-messages-group" id="range-messages" aria-live="polite">
    </div>
</div>
```

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](https://www.systeme-de-design.gouv.fr/version-courante/fr/premiers-pas/vous-etes-developpeur/prise-en-main#les-css) .

**Dépendances CSS**

| Dépendance | Obligatoire |
|---|---|
| Core | Oui |
| Range | Oui |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/range/range.min.css" rel="stylesheet">
```

#### Variante de taille

Le curseur est disponible en deux variantes de tailles pour s'adapter à différents contextes d'utilisation. Pour appliquer une variante de taille, ajoutez une des classes suivantes à l'élément `<div class="fr-range">` :

- En taille MD : par défaut.
- En taille SM : définie par la classe `fr-range--sm`.

**Exemple de variante de taille**

```html
<div class="fr-range-group">
    <label id="range-sm-label" class="fr-label">Libellé</label>
    <div class="fr-range fr-range--sm">
      <!-- Contenu du curseur -->
    </div>
</div>
```

#### Variante de curseur cranté

Le curseur peut afficher des crans avec l'utilisation de la classe `fr-range--step`.

**Exemple de curseur cranté**

```html
<div class="fr-range-group">
    <label id="range-step-label" class="fr-label">Libellé</label>
    <div class="fr-range fr-range--step">
      <!-- Contenu du curseur -->
    </div>
</div>
```

#### Variante de curseur avec préfixe et suffixe

Le curseur peut afficher des préfixe et suffixe autour des valeurs courante, minimale et maximale avec l'utilisation des attributs `data-fr-prefix` et `data-fr-suffix` sur l'élément `<div class="fr-range">`.

**Exemple de curseur avec préfixe et suffixe**

```html
<div class="fr-range-group">
    <label id="range-prefix-suffix-label" class="fr-label">Libellé</label>
    <div class="fr-range" data-fr-prefix="~" data-fr-suffix="%">
      <!-- Contenu du curseur -->
    </div>
</div>
```

#### Variantes d'états

Les états d'erreur/succès/désactivé sont gérés au niveau du groupe. Pour ajouter un état à un curseur, ajoutez une des classes suivantes :

- La classe `fr-range-group--error` : Indique une erreur.
- La classe `fr-range-group--valid` : Indique un succès.
- L'attribut `fr-range-group--disabled` : Indique un état désactivé.
  - Dans le cas du curseur désactivé l'ajout de l'attribut `disabled` sur le ou les éléments `<input>` est nécessaire.

Un message d'erreur ou de succès doit être ajouté dans un bloc `fr-messages-group` à la fin du groupe du curseur et doit être lié au curseur via un attribut `aria-describedby`.

**Exemple de curseur avec erreur**

#### Déplier pour voir le code

```html
<div class="fr-range-group fr-range-group--error">
    <label for="range-error" class="fr-label">
        Libellé
        <span class="fr-hint-text">Texte de description additionnel, valeur de 0 à 100.</span>
    </label>
    <div class="fr-range">
        <span class="fr-range__output" aria-hidden="true">50</span>
        <input id="range-error" name="range-error" type="range" max="100" value="50" aria-describedby="range-error-messages">
        <span class="fr-range__min" aria-hidden="true">0</span>
        <span class="fr-range__max" aria-hidden="true">100</span>
    </div>
    <div class="fr-messages-group" id="range-error-messages" aria-live="polite">
        <p class="fr-message fr-message--error" id="range-error-message-error">Valeur sélectionnée impossible</p>
    </div>
</div>
```

**Exemple de curseur avec succès**

#### Déplier pour voir le code

```html
<div class="fr-range-group fr-range-group--succes">
    <label for="range-succes" class="fr-label">
        Libellé
        <span class="fr-hint-text">Texte de description additionnel, valeur de 0 à 100.</span>
    </label>
    <div class="fr-range">
        <span class="fr-range__output" aria-hidden="true">50</span>
        <input id="range-succes" name="range-succes" type="range" max="100" value="50" aria-describedby="range-success-messages">
        <span class="fr-range__min" aria-hidden="true">0</span>
        <span class="fr-range__max" aria-hidden="true">100</span>
    </div>
    <div class="fr-messages-group" id="range-success-messages" aria-live="polite">
        <p class="fr-message fr-message--valid" id="range-success-message-success">Texte de validation</p>
    </div>
</div>
```

**Exemple de curseur désactivée**

#### Déplier pour voir le code

```html
<div class="fr-range-group fr-range-group--disabled">
    <label for="range-disabled" class="fr-label">
        Libellé
        <span class="fr-hint-text">Texte de description additionnel, valeur de 0 à 100.</span>
    </label>
    <div class="fr-range">
        <span class="fr-range__output" aria-hidden="true">20</span>
        <input id="range-disabled" name="range-disabled" type="range" max="100" value="20" disabled aria-describedby="range-disabled-messages">
        <span class="fr-range__min" aria-hidden="true">0</span>
        <span class="fr-range__max" aria-hidden="true">100</span>
    </div>
    <div class="fr-messages-group" id="range-disabled-messages" aria-live="polite">
    </div>
</div>
```

#### Variante de curseur double

Le curseur double permet de disposer de deux poignées de selection pour les valeurs minimale et maximale par l'ajout d'un second élément HTML `<input>` de type `range`.

**Exemple de curseur double**

```html
<div class="fr-range-group">
    <label id="range-double-label" class="fr-label">
        Libellé
        <span class="fr-hint-text">Texte de description additionnel, valeur de 0 à 100.</span>
    </label>
    <div class="fr-range fr-range--double">
        <span class="fr-range__output" aria-hidden="true">25 - 75</span>
        <input id="range-double" name="range-double" type="range" aria-label="Valeur minimale" aria-labelledby="range-double range-double-label" max="100" value="25" aria-describedby="range-double-messages">
        <input id="range-double-2" name="range-double-2" type="range" aria-label="Valeur maximale" aria-labelledby="range-double-2 range-double-label" max="100" value="75" aria-describedby="range-double-messages">
        <span class="fr-range__min" aria-hidden="true">0</span>
        <span class="fr-range__max" aria-hidden="true">100</span>
    </div>
    <div class="fr-messages-group" id="range-double-messages" aria-live="polite">
    </div>
</div>
```

---

### JavaScript

#### Installation du JavaScript

Pour fonctionner, le composant curseur nécessite l'utilisation de JavaScript. Chaque composant utilisant JavaScript possède un fichier JS spécifique et requiert le fichier JS du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```html
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/range/range.module.min.js"></script>
```

NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```html
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/range/range.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur le curseur, les éléments suivants sont instanciés :

- Le conteneur, via la classe : `fr-range`
- Le ou les curseurs dans leur conteneur, via la classe : `fr-range` et les éléments `<input>` de type `<range>`
- La valeur courante, via la classe : `fr-range__output`
- Les valeurs minimale et maximale, via les classes `fr-range__min` et `fr-range__max`

Une fois chargé, le JS ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés.

#### API

Il est possible d'interagir avec les instances du composant en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :

```js
const elem = document.getElementById('ID_TAB');
dsfr(elem).range.isEnabled;
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

###### range

**isEnabled**

| **Description** | Défini si le fonctionnement du curseur est activé ou non |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).range.isEnabled = false` |

**node**

| **Description** | Renvoie le noeud HTML de l'élément. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).range.node` |

###### rangeInput

**value**

| **Description** | Retourne la valeur courante du curseur. |
|---|---|
| **Type** | property |
| **Retour** | Number |
| **Exemple** | `dsfr(elem).rangeInput.value` |

**isEnabled**

| **Description** | Défini si le fonctionnement du curseur est activé ou non |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).rangeInput.isEnabled = false` |

**node**

| **Description** | Renvoie le noeud HTML de l'élément. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).rangeInput.node` |

###### rangeOutput

**isEnabled**

| **Description** | Défini si le fonctionnement du curseur est activé ou non |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).rangeOutput.isEnabled = false` |

**node**

| **Description** | Renvoie le noeud HTML de l'élément. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).rangeOutput.node` |

###### rangeLimit

**isEnabled**

| **Description** | Défini si le fonctionnement du curseur est activé ou non |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).rangeLimit.isEnabled = false` |

**node**

| **Description** | Renvoie le noeud HTML de l'élément. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).rangeLimit.node` |

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+range+)

#### [v1.15.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.15.0) - 17 juillet 2026

- **[utilisation de la liaison for/id sur le curseur simple](https://github.com/GouvernementFR/dsfr/pull/1407)**  
  #1407  
  - Corrige le contrôle Storybook "size"
- Utilise la liaison for/id comme préconisé dans la partie accessibilité
- Corrige les exemples du curseur double
- Cache la valeur par défaut du curseur aux APIs d'accessibilité  
  ✨ feat  
  range

#### [v1.14.2](https://github.com/GouvernementFR/dsfr/releases/tag/v1.14.2) - 17 septembre 2025

- **[build storybook & ajout input label value](https://github.com/GouvernementFR/dsfr/pull/1286)**  
  #1286  
  - Correction de la page storybook du curseur
- Ajout de la possibilité de modifier les intitulés des aria-label des inputs sur le curseur double  
  🐛 fix  
  range

#### [v1.14.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.14.1) - 29 août 2025

- **[ajout attribut aria-label curseur double](https://github.com/GouvernementFR/dsfr/pull/1232)**  
  #1232  
  - Ajout d'attributs aria-label "Valeur minimale" et "Valeur maximale" sur les input du curseur double, pour décrire leur usage
- Correction de l'id dans l'exemple du curseur simple  
  🐛 fix  
  range

#### [v1.13.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.13.0) - 4 décembre 2024

- **[ajout de la possibilité de changer la value en JS](https://github.com/GouvernementFR/dsfr/pull/1025)**  
  #1025  
  - Le composant est mis à jour graphiquement au changement de value des inputs en js.
- Ajout d'un accesseur "value" dans l'api du range  
  🐛 fix  
  range

- **[amélioration du rendu en mode contrasté](https://github.com/GouvernementFR/dsfr/pull/1011)**  
  #1011  
  - Amélioration du design du curseur en mode couleurs forcées  
  🐛 fix  
  range

#### [v1.12.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.12.0) - 19 juin 2024

- **[bug js boucle infinie et step désactivé](https://github.com/GouvernementFR/dsfr/pull/931)**  
  #931  
  - corrige la boucle infinie qui fait crash la page lorsque stepwidth = 0
- corrige le style du curseur avec étape désactivé
- ajout d'exemples de curseurs double désactivé et avec étape désactivé
- corrige la modification de valeur du deuxième input lorsque le min dépasse le max ou l'inverse sur le curseur double  
  🐛 fix  
  range

#### [v1.11.2](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.2) - 4 mars 2024

- **[correctif dispose input](https://github.com/GouvernementFR/dsfr/pull/891)**  
  #891  
  - corrige un bug js sur l'écouteur d'événement  
  🐛 fix  
  range

#### [v1.11.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.0) - 11 décembre 2023

- **[version optimisée en accessibilité](https://github.com/GouvernementFR/dsfr/pull/841)**  
  #841  
  - redesign du composant en ajoutant une bordure à la track pour être plus visible
- changement de la structure html pour être accessible
- lint  
  ✨ feat  
  range

- **[dépendance à scheme](https://github.com/GouvernementFR/dsfr/pull/823)**  
  #823  
  - ajout de la dépendance à scheme dans la configuration du package range  
  🐛 fix  
  range

- **[ajout du composant curseur](https://github.com/GouvernementFR/dsfr/pull/817)**  
  #817  
  - Les curseurs sont des entrées numériques qui permettent de voir graphiquement la sélection d'une plage entre une valeur minimale et une valeur maximale. Ils servent à montrer en temps réelle les options choisies et éclairer la prise de décision.  
  ✨ feat  
  range

##### Contenu associé

- **[Bouton radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio)**  
  Présentation du composant Bouton radio permettant à l’usager de sélectionner une option unique parmi un ensemble limité de choix.

- **[Champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)**  
  Présentation du composant Champ de saisie permettant à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.

- **[Liste déroulante](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante)**  
  Présentation du composant Liste déroulante permettant à l’usager de sélectionner une option unique parmi un ensemble de choix dans un espace limité.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/curseur/accessibilite-du-curseur

Le composant **Curseur** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Lorsque le focus est positionné sur le curseur :

- `Flèche gauche` ou `Flèche bas` : diminue la valeur du curseur.
- `Flèche droite` ou `Flèche haut` : augmente la valeur du curseur.

### Règles d’accessibilité

#### Intitulé pertinent : nom accessible

Un curseur doit avoir une **étiquette pertinente** . On doit en comprendre la fonction sans ambiguïté.

Son nom accessible est calculé par ordre de priorité à partir de :

- l’attribut `aria-labelledby`,
- l’attribut `aria-label`,
- l’élément `<label>`,
- l’attribut `title` en l’absence d’une autre méthode de nommage.

##### Curseur simple

Dans le cas du curseur simple, utiliser l’élément `<label>` avec une **liaison explicite** entre l’attribut `for` de l’élément `<label>` et l'attribut `id`.

Préciser les valeurs minimum et maximale dans le texte de description additionnel.

##### Curseur double

Pour le curseur double avec deux `input type="range"`, on peut utiliser l’attribut `aria-labelledby` ou l’attribut `aria-label`.

En cas d’utilisation de l’attribut `aria-labelledby`, le texte additionnel doit être très explicite pour permettre de comprendre qu’il y a deux curseurs (un minimum / un maximum).

Si `aria-label` est la méthode retenue, il faudra veiller à ce que le contenu de l’étiquette visible soit bien repris.

Exemple : `aria-label="[Minimum - Label Texte de description
 additionnel]"` et `aria-label="[Maximum - Label Texte de description
 additionnel]"`

#### Étiquette visible et accolée

L’étiquette est visible et accolée au curseur.

#### État désactivé

> **Attention**
> **L’état désactivé du curseur peut poser des problèmes d’utilisabilité et d’accessibilité pour les personnes handicapées** (personnes déficientes visuelles ainsi que les personnes qui ont un handicap cognitif ou mental).

Les éléments du curseur désactivé sont insuffisamment contrastés. Il ne s’agit néanmoins pas d’une non-conformité au RGAA (cas particulier).

#### Message d’information, d’avertissement ou d’erreur

Il existe différentes méthodes pour gérer les messages d’information, d’avertissement ou d’erreur d’un formulaire de manière accessible selon le contexte.

Il est possible d’indiquer l’information, l’avertissement ou l’erreur :

- dans l’étiquette du champ,
- dans un passage de texte avant le formulaire,
- dans un passage de texte relié au champ de saisie avec l’attribut `aria-describedby`,
- avec une live region : `role="alert"`, `role="status"`, `aria-live="assertive",
   aria-live="polite"` (dans certains contextes uniquement).

#### Contrastes de couleurs

Le composant Curseur est suffisamment contrasté en thème clair et en thème sombre.

---

### Restitution par les lecteurs d’écran

L’input type="range" est bien supporté par les différents lecteurs d’écran.

Il est vocalisé « curseur » (VoiceOver, TalkBack), « potentiomètre » (Narrateur, NVDA, JAWS).

Par défaut, les lecteurs d’écran restituent le **nom, la description, l’état et le type** . L’ordre peut varier en fonction des lecteurs d’écran et de leur configuration.

#### Restitution de l'état désactivé

L’attribut `disabled` est restitué différemment selon les lecteurs d’écran :

- VoiceOver macOS et iOS : « estompé »
- NVDA et JAWS : « bouton non disponible »
- Narrateur et Talkback : « bouton désactivé »

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Spécification HTML – élément input](https://html.spec.whatwg.org/#the-input-element)
- [Spécification HTML – type range](https://html.spec.whatwg.org/#range-state-(type=range))

##### Contenu associé

- **[Bouton radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio)**  
  Présentation du composant Bouton radio permettant à l’usager de sélectionner une option unique parmi un ensemble limité de choix.

- **[Champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)**  
  Présentation du composant Champ de saisie permettant à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.

- **[Liste déroulante](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante)**  
  Présentation du composant Liste déroulante permettant à l’usager de sélectionner une option unique parmi un ensemble de choix dans un espace limité.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/curseur/demonstration-du-curseur

*(Démonstration interactive « range--docs » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=range--docs&nav=0&globals=theme%3Alight)*

#### Contenu associé

- **[Bouton radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio)**  
  Présentation du composant Bouton radio permettant à l’usager de sélectionner une option unique parmi un ensemble limité de choix.

- **[Champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)**  
  Présentation du composant Champ de saisie permettant à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.

- **[Liste déroulante](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante)**  
  Présentation du composant Liste déroulante permettant à l’usager de sélectionner une option unique parmi un ensemble de choix dans un espace limité.
