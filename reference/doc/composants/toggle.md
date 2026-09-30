# Interrupteur

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/interrupteur · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/interrupteur/design-de-l-interrupteur · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/interrupteur/code-de-l-interrupteur · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/interrupteur/accessibilite-de-l-interrupteur · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/interrupteur/demonstration-de-l-interrupteur
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

L’interrupteur est un élément d’interaction avec l’interface qui permet à l’usager de faire un choix entre deux états opposés (activé / désactivé).

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/interrupteur

*(Démonstration interactive « toggle--toggle » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=toggle--toggle&nav=0&globals=theme%3Alight)*

### Quand utiliser ce composant ?

Privilégier l’usage des interrupteurs pour paramétrer des fonctionnalités transverses (exemple : activation / désactivation des notifications). Le changement d'état de l’interrupteur doit avoir un effet immédiat et ne nécessite pas de validation.

### Comment utiliser ce composant ?

- **Prioriser la composition interrupteur avec statut Activé/désactivé** qui est la plus accessible et la plus intelligible.
- **Utiliser l’interrupteur en groupe** pour constituer une liste d’actions de même nature.

> **À faire :** Utiliser l’interrupteur en groupe pour constituer une liste d’actions de même nature.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/toggle/use/do-1.png)

> **À ne pas faire :** Ne pas regrouper des interrupteurs qui n’ont rien à voir.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/toggle/use/dont-1.png)

- **Respecter un format unique pour tous les interrupteurs d’un même groupe** (ajout d’une description, d'un statut etc.) ****

> **À faire :** Respecter un format unique pour tous les interrupteurs d’un même groupe.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/toggle/use/do-2.png)

> **À ne pas faire :** Ne pas proposer des formats différents entre les interrupteurs d’un même groupe.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/toggle/use/dont-2.png)

### Règles éditoriales

- **Rédiger un libellé clair, explicite et concis** pour faciliter la compréhension de l’usager.
- **Accompagner le libellé d’une description** lorsque celui-ci ne permet pas, à lui seul, de comprendre l’action requise par l’usager.

> **À faire :** Accompagner le libellé d’une description lorsqu’il ne permet pas, à lui seul, de comprendre l’action requise par l’usager.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/toggle/edit/do-1.png)

- **Ajouter un titre au composant** pour clarifier le cadre dans lequel il est utilisé.

> **À faire :** Ajouter un titre au composant pour clarifier le cadre dans lequel il est utilisé.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/toggle/edit/do-2.png)

#### Contenu associé

- **[Bouton radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio)**  
  Présentation du composant Bouton radio permettant à l’usager de sélectionner une option unique parmi un ensemble limité de choix.

- **[Case à cocher](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher)**  
  Présentation du composant Case à cocher permettant à l’usager de sélectionner une ou plusieurs options dans une liste de manière indépendante.

- **[Contrôle segmenté](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/controle-segmente)**  
  Présentation du composant Contrôle segmenté permettant à l’usager de choisir une vue parmi plusieurs options d’affichage disponibles dans une interface.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/interrupteur/design-de-l-interrupteur

![Anatomie de l'interrupteur](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/toggle/design/anatomy/anatomy-1.png)

1. Une légende décrivant le contexte, uniquement dans le cadre d'un groupe d'interrupteurs — Obligatoire
2. Une description additionnelle pour la légende — En option
3. Un interrupteur — Obligatoire
4. Un libellé, associé à l'interrupteur — Obligatoire
5. Un texte "état" décrivant l'état de l'interrupteur (activé / désactivé), placé en dessous du bouton et conseillé afin de faciliter la compréhension de l'usager — En option
6. Un séparateur — En option
7. Un texte additionnel, accompagnant chaque interrupteur / libellé — En option

### Variations

**Interrupteur simple**

*(Démonstration interactive « toggle--toggle » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=toggle--toggle&nav=0&globals=theme%3Alight)*

**Interrupteur avec description**

*(Démonstration interactive « toggle--description » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=toggle--description&nav=0&globals=theme%3Alight)*

**Interrupteur avec état**

*(Démonstration interactive « toggle--state » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=toggle--state&nav=0&globals=theme%3Alight)*

**Groupe d’interrupteurs**

Utiliser l’interrupteur en groupe pour constituer une liste d’actions de même nature.

*(Démonstration interactive « toggle-group--toggle-group » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=toggle-group--toggle-group&nav=0&globals=theme%3Alight)*

Lorsqu’il est utilisé en groupe, l’interrupteur doit toujours respecter le même format. Si le premier interrupteur affiche l'état, une description, ou le séparateur optionnel, alors l’ensemble des interrupteurs du groupe devront également afficher ces éléments.

**Groupe d’interrupteurs avec séparateurs**

*(Démonstration interactive « toggle-group--border-group » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=toggle-group--border-group&nav=0&globals=theme%3Alight)*

### Tailles

La largeur de l’interrupteur s’adapte à la taille de son conteneur. Si l’interrupteur se trouve dans un conteneur large avec le bouton à droite du libellé, attention à ce qu’il ne s’en détache pas visuellement.

### États

**État d’erreur**

L'état d’erreur est signalé par un changement de couleur ainsi que l’affichage d’une ligne rouge (cf. couleurs système : le rouge est la couleur de l’état erreur) et d’un message d’erreur en-dessous du composant.

*(Démonstration interactive « toggle--error » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=toggle--error&nav=0&globals=theme%3Alight)*

**Etat de succès**

L'état de succès est signalé par un changement de couleur ainsi que l’affichage d’une ligne verte (cf. couleurs système : le vert est la couleur de l’état succès) et d’un message de succès en-dessous du composant.

*(Démonstration interactive « toggle--valid » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=toggle--valid&nav=0&globals=theme%3Alight)*

**État désactivé**

L’état désactivé indique que l'usager ne peut pas interagir avec le bouton.

*(Démonstration interactive « toggle--disabled » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=toggle--disabled&nav=0&globals=theme%3Alight)*

Dans le cas d’un interrupteur, il permet d’afficher un choix déjà effectué et/ou ne pouvant être modifié par l’usager.

### Personnalisation

Les interrupteurs ne sont pas personnalisables.

Toutefois, certains éléments sont optionnels - voir [la structure du composant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/interrupteur) .

> **À faire :** Utiliser uniquement la couleur bleu pour les interrupteurs.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/toggle/design/custom/do-1.png)

> **À ne pas faire :** Ne pas personnaliser la couleur des interrupteurs.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/toggle/design/custom/dont-1.png)

> **À faire :** Conserver la coche lorsque l’interrupteur est activé.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/toggle/design/custom/do-2.png)

> **À ne pas faire :** Ne pas supprimer ou personnaliser l’icône de l’interrupteur.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/toggle/design/custom/dont-2.png)

#### Contenu associé

- **[Bouton radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio)**  
  Présentation du composant Bouton radio permettant à l’usager de sélectionner une option unique parmi un ensemble limité de choix.

- **[Case à cocher](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher)**  
  Présentation du composant Case à cocher permettant à l’usager de sélectionner une ou plusieurs options dans une liste de manière indépendante.

- **[Contrôle segmenté](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/controle-segmente)**  
  Présentation du composant Contrôle segmenté permettant à l’usager de choisir une vue parmi plusieurs options d’affichage disponibles dans une interface.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/interrupteur/code-de-l-interrupteur

### HTML

#### Structure du composant

Le composant **Interrupteur** , est un élément interactif permettant de basculer entre deux états.

Sa structure est la suivante :

- L'Interrupteur doit être contenu dans un élément HTML `<div>` défini par la classe `fr-toggle`.
- L'interrupteur est un élément HTML `<input>` de type `checkbox` défini par la classe `fr-toggle__input`.
- L'interrupteur doit être associé à un libellé `<label>` avec la classe `fr-toggle__label`.
  - L'interrupteur peut afficher de manière optionnelle un état par l'utilisation des attributs `data-fr-checked-label` et `data-fr-unchecked-label` dont les valeurs seront affichées si l'interrupteur est coché ou non.
- Une description additionnelle de l'option - optionnelle - peut être ajoutée après le libellé, elle est définie par un élément `<p>` et la classe utilitaire `fr-hint-text`.
- Un message d'erreur ou de succès peut être associé à l'interrupteur en utilisant un élément `<div>` avec la classe `fr-messages-group` dans lequel on peut ajouter un message `fr-message`. Son attribut `id` doit être associé à l'attribut `aria-describedby` de l'interrupteur. Ce bloc peut être placé vide et être rempli dynamiquement, auquel cas il doit être annoncé à l'utilisateur en utilisant l'attribut `aria-live="polite"`.

**Exemple de structure HTML simple**

```html
<div class="fr-toggle">
    <input type="checkbox" class="fr-toggle__input" id="toggle" aria-describedby="toggle-messages toggle-hint">
    <label class="fr-toggle__label" for="toggle" data-fr-checked-label="Activé" data-fr-unchecked-label="Désactivé">Libellé de l'interrupteur</label>
    <p class="fr-hint-text" id="toggle-hint">Texte de description additionnel</p>
    <div class="fr-messages-group" id="toggle-messages" aria-live="polite">
    </div>
</div>
```

#### Groupe d'interrupteurs

Pour **regrouper plusieurs interrupteurs liées** , utilisez un élément `<fieldset>` avec une légende `<legend>`. Cela permet de structurer les options de manière accessible.

- L'élément `<fieldset>` est défini par la classe `fr-fieldset`.
- La légende `<legend>` est définie par la classe `fr-fieldset__legend`. Par défaut une légende sera en gras car le fieldset est utilisé pour regroupé plusieurs champs ayant chacun un label. Dans le cas des interrupteurs la légende est visuellement perçue comme le label du groupe d'interrupteurs. On ajoutera donc la classe `fr-fieldset__legend--regular` pour repasser la légende sur une graisse standard.
- Une description additionnelle pour la légende - optionnelle - peut être ajoutée dans la légende, elle est définie par un élément `<span>` et la classe utilitaire `fr-hint-text`.
- Chaque élément interrupteur est contenu dans un élément `<div>` défini par la classe `fr-fieldset__element`. Ces éléments peuvent être placés en ligne avec la classe `fr-fieldset__element--inline`.
- Comme pour chaque interrupteur, le groupe d'interrupteurs, représenté par un fieldset, peut contenir un message d'erreur/information/succès via un bloc `fr-messages-group`.

**Exemple de groupe d'interrupteurs**

#### Déplier pour voir le code

```html
<fieldset class="fr-fieldset" aria-labelledby="toggles-legend toggles-messages">
    <legend class="fr-fieldset__legend" id="toggles-legend">
        Légende pour l’ensemble des éléments
    </legend>
    <div class="fr-fieldset__element">
        <ul class="fr-toggle__list">
            <li>
                <div class="fr-toggle">
                    <input type="checkbox" class="fr-toggle__input" id="toggle-01" aria-describedby="toggle-01-messages">
                    <label class="fr-toggle__label" for="toggle-01">Libellé de l'interrupteur</label>
                    <div class="fr-messages-group" id="toggle-01-messages" aria-live="polite">
                    </div>
                </div>
            </li>
            <li>
                <div class="fr-toggle">
                    <input type="checkbox" class="fr-toggle__input" id="toggle-02" aria-describedby="toggle-02-messages">
                    <label class="fr-toggle__label" for="toggle-02">Libellé de l'interrupteur</label>
                    <div class="fr-messages-group" id="toggle-02-messages" aria-live="polite">
                    </div>
                </div>
            </li>
            <li>
                <div class="fr-toggle">
                    <input type="checkbox" class="fr-toggle__input" id="toggle-03" aria-describedby="toggle-03-messages">
                    <label class="fr-toggle__label" for="toggle-03">Libellé de l'interrupteur</label>
                    <div class="fr-messages-group" id="toggle-03-messages" aria-live="polite">
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="fr-messages-group" id="toggles-messages" aria-live="polite">
    </div>
</fieldset>
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
| Form | Oui |
| Toggle | Oui |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/form/form.min.css" rel="stylesheet">
<link href="dist/component/toggle/toggle.min.css" rel="stylesheet">
```

#### Variante d’interrupteurs avec statut

Il est conseillé d’afficher un statut sous l'interrupteur pour signifier textuellement l'activation et la désactivation du champ. Des attributs placés sur le `label` permettent d'ajouter ces textes, de cette manière ils peuvent être traduits. Utiliser l'attribut `data-fr-checked-label` pour le status "Activer" et `data-fr-unchecked-label` pour le status "Désactivé".

**Exemple de variante d’interrupteur avec statut**

```html
<div class="fr-toggle">
    <input type="checkbox" class="fr-toggle__input" id="toggle-status" aria-describedby="toggle-status-messages">
    <label class="fr-toggle__label" for="toggle-status" data-fr-checked-label="Activé" data-fr-unchecked-label="Désactivé">Libellé de l'interrupteur</label>
    <div class="fr-messages-group" id="toggle-status-messages" aria-live="polite">
    </div>
</div>
```

#### Variante d’interrupteurs avec séparateur

Il est possible d’afficher un séparateur horizontal sous l’interrupteur, avec l'utilisation de la classe `fr-toggle--border-bottom`.

**Exemple de variante d’interrupteur avec séparateur**

```html
<div class="fr-toggle fr-toggle--border-bottom">
    <input type="checkbox" class="fr-toggle__input" id="toggle-label-left" aria-describedby="toggle-label-left-messages">
    <label class="fr-toggle__label" for="toggle-label-left">Libellé de l'interrupteur</label>
    <div class="fr-messages-group" id="toggle-label-left-messages" aria-live="polite">
    </div>
</div>
```

#### Variantes d'états

L’interrupteur est disponible en plusieurs variantes d'états :

- L’interrupteur avec **erreur** : défini par la classe `fr-toggle----error`.
- L’interrupteur avec **succès** : défini par la classe `fr-toggle----valid`.
- L’interrupteur **désactivé** : défini par l'attribut `disabled` sur l'élément `<input>`.

Dans le cas d'utilisation d'un groupe d’interrupteurs, ces états sont définis sur le groupe (le fieldset), et non sur chaque interrupteur.

- Groupe en **erreur** : défini par la classe `fr-fieldset--error`.
- Groupe en **succès** : défini par la classe `fr-fieldset--valid`.
- Groupe **désactivé** : défini par l'attribut `disabled`.

**Exemples de variantes d'états**

#### Déplier pour voir le code

**Erreur**

```html
<div class="fr-toggle fr-toggle--error">
    <input type="checkbox" class="fr-toggle__input" id="toggle-error" aria-describedby="toggle-error-messages">
    <label class="fr-toggle__label" for="toggle-error">Libellé de l'interrupteur avec erreur</label>
    <div class="fr-messages-group" id="toggle-error-messages" aria-live="polite">
        <p class="fr-message fr-message--error" id="toggle-error-message-error">Texte d’erreur obligatoire</p>
    </div>
</div>
```

**Succès**

```html
<div class="fr-toggle fr-toggle--valid">
    <input type="checkbox" class="fr-toggle__input" id="toggle-valid" aria-describedby="toggle-valid-messages">
    <label class="fr-toggle__label" for="toggle-valid">Libellé de l'interrupteur avec succès</label>
    <div class="fr-messages-group" id="toggle-valid-messages" aria-live="polite">
        <p class="fr-message fr-message--valid" id="toggle-valid-message-valid">Texte de validation</p>
    </div>
</div>
```

**Désactivé**

```html
<div class="fr-toggle">
    <input type="checkbox" class="fr-toggle__input" id="toggle-disabled" disabled aria-describedby="toggle-disabled-messages">
    <label class="fr-toggle__label" for="toggle-disabled">Libellé de l'interrupteur désactivé</label>
    <div class="fr-messages-group" id="toggle-disabled-messages" aria-live="polite">
    </div>
</div>
```

**Exemple de variante d'état au niveau du groupe**

#### Déplier pour voir le code

**Erreur**

```html
<fieldset class="fr-fieldset fr-fieldset--error" aria-labelledby="toggles-error-legend toggles-error-messages">
    <legend class="fr-fieldset__legend" id="toggles-error-legend">
        Légende pour l’ensemble des éléments en erreur
    </legend>
    <div class="fr-fieldset__element">
        <ul class="fr-toggle__list">
            <li>
                <div class="fr-toggle fr-toggle--border-bottom">(...)</div>
            </li>
            <li>
                <div class="fr-toggle fr-toggle--border-bottom">(...)</div>
            </li>
            <li>
                <div class="fr-toggle fr-toggle--border-bottom">(...)</div>
            </li>
        </ul>
    </div>
    <div class="fr-messages-group" id="toggles-error-messages" aria-live="polite">
        <p class="fr-message fr-message--error" id="toggles-error-message-error">Texte d’erreur globale</p>
    </div>
</fieldset>
```

**Succès**

```html
<fieldset class="fr-fieldset fr-fieldset--valid" aria-labelledby="toggles-valid-legend toggles-valid-messages">
    <legend class="fr-fieldset__legend" id="toggles-valid-legend">
        Légende pour l’ensemble des éléments en succès
    </legend>
    <div class="fr-fieldset__element">
        <ul class="fr-toggle__list">
            <li>
                <div class="fr-toggle fr-toggle--border-bottom">(...)</div>
            </li>
            <li>
                <div class="fr-toggle fr-toggle--border-bottom">(...)</div>
            </li>
            <li>
                <div class="fr-toggle fr-toggle--border-bottom">(...)</div>
            </li>
        </ul>
    </div>
    <div class="fr-messages-group" id="toggles-valid-messages" aria-live="polite">
        <p class="fr-message fr-message--error" id="toggles-valid-message-error">Texte de succès global</p>
    </div>
</fieldset>
```

**Désactivé**

```html
<fieldset class="fr-fieldset" disabled aria-labelledby="toggles-disabled-legend toggles-disabled-messages">
    <legend class="fr-fieldset__legend" id="toggles-disabled-legend">
        Légende pour l’ensemble des éléments désactivés
    </legend>
    <div class="fr-fieldset__element">
        <ul class="fr-toggle__list">
            <li>
                <div class="fr-toggle fr-toggle--border-bottom">(...)</div>
            </li>
            <li>
                <div class="fr-toggle fr-toggle--border-bottom">(...)</div>
            </li>
            <li>
                <div class="fr-toggle fr-toggle--border-bottom">(...)</div>
            </li>
        </ul>
    </div>
    <div class="fr-messages-group" id="toggles-disabled-messages" aria-live="polite">
    </div>
</fieldset>
```

---

### JavaScript

#### Installation du JavaScript

Pour fonctionner le composant interrupteur nécessite l'utilisation de JavaScript uniquement pour la variante avec état affiché. Chaque composant utilisant javascript possède un fichier Js spécifique et requiert le fichier Js du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```html
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/toggle/toggle.module.min.js"></script>
```

NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```html
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/toggle/toggle.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur l'interrupteur, les éléments suivants sont instanciés :

- L'interrupteur, via la classe : `fr-toggle__input`.
- Le libellé, via la classe `fr-toggle__label` et les attributs `checked-label` ou `unchecked-label`.

Une fois chargé, le Js ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés.

#### API

Il est possible d'interagir avec les instances du composants en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :

```js
const elem = document.getElementById('ID_COLLAPSE');
dsfr(elem).toggleInput.isEnabled;
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

##### toggleInput

**isEnabled**

| **Description** | Défini si le fonctionnement de l'interrupteur est activé ou non |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).toggleInput.isEnabled = false` |

**node**

| **Description** | Renvoie le noeud HTML de l'élément. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).toggleInput.node` |

##### toggleStatusLabel

**isEnabled**

| **Description** | Défini si le fonctionnement de l'interrupteur est activé ou non |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).toggleStatusLabel.isEnabled =<br> false` |

**node**

| **Description** | Renvoie le noeud HTML de l'élément. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).toggleStatusLabel.node` |

**update**

| **Description** | Met a jour la taille de l'emplacement de l'état de l'interrupteur |
|---|---|
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).toggleStatusLabel.update()` |

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+toggle+)

#### [v1.14.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.14.1) - 29 août 2025

- **[retrait css inutile](https://github.com/GouvernementFR/dsfr/pull/1274)**  
  #1274  
  - Retire une propriété CSS non conforme et inutile dans print.scss  
  🐛 fix  
  toggle

- **[retrait de l'interrupteur avec libellé à gauche](https://github.com/GouvernementFR/dsfr/pull/1225)**  
  #1225  
  - La variation interrupteur avec libellé à droite est problématique en termes d'accessibilité, notamment en navigation avec loupe d'écran. Nous avons décidé de la retirer. Celle-ci reste fonctionnelle mais ne doit plus être utilisée.
- Correction et amélioration de la documentation de l'interrupteur.  
  ✨ fix  
  toggle

#### [v1.13.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.13.1) - 26 mars 2025

- **[Corrige la taille du focus sur le bouton](https://github.com/GouvernementFR/dsfr/pull/1078)**  
  #1078  
  - Corrige la taille du focus pour que la hauteur du focus corresponde à la hauteur du bouton.  
  🐛 fix  
  toggle

#### [v1.13.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.13.0) - 4 décembre 2024

- **[correction groupe d'interrupteurs dépréciés](https://github.com/GouvernementFR/dsfr/pull/1006)**  
  #1006  
  - Correction des espacements des groupes d'interrupteurs dépréciés  
  🐛 fix  
  toggle

#### [v1.12.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.12.0) - 19 juin 2024

- **[ajoute les messages erreur et valide sur interrupteur simple](https://github.com/GouvernementFR/dsfr/pull/954)**  
  #954  
  - retrait des marges avant et après le composant
- ajoute la bordure en état d'erreur/succès  
  🐛 fix  
  toggle

- **[retour à la ligne statut activé/désactivé](https://github.com/GouvernementFR/dsfr/pull/928)**  
  #928  
  - corrige le retour à la ligne sur le label "activé/désactivé"  
  🐛 fix  
  toggle

#### [v1.11.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.0) - 11 décembre 2023

- **[largeur max du label & libellé](https://github.com/GouvernementFR/dsfr/pull/819)**  
  #819  
  - augmentation de la largeur max du libellé du label, la marge de 10v passe à 8v
- changement du libellé du label et du texte additionnel  
  🐛 fix  
  toggle

- **[tokens de couleur](https://github.com/GouvernementFR/dsfr/pull/760)**  
  #760  
  - mise à jour des tokens de couleurs sur checkbox, radio, radio-rich, toggle  
  🐛 fix  
  radio radio-rich toggle checkbox

- **[couleur label & espacements](https://github.com/GouvernementFR/dsfr/pull/771)**  
  #771  
  - utilisation du token de couleur $text-label-grey sur le label de l'interrupteur
- ajout de 4px de marge entre la coche et le texte activer/desactiver  
  🐛 fix  
  toggle

#### [v1.10.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.10.0) - 19 juillet 2023

- **[retrait tap-highlight-color iOS](https://github.com/GouvernementFR/dsfr/pull/703)**  
  #703  
  - Au clic sur le toggle sur iOS, l'effet de highlight est présent
- Retrait de cet effet avec la propriété [-webkit-tap-highlight-color](https://developer.mozilla.org/fr/docs/Web/CSS/-webkit-tap-highlight-color)  
  🐛 fix  
  toggle

- **[passage input en bleu et refactorisation](https://github.com/GouvernementFR/dsfr/pull/502)**  
  #502  
  Uniformisation des champs à cocher toggle/radio/checkbox  
  toggle:  
  - Ajout des variants toggle error/valid
- Retrait du css sur input `appearance:none`
- bordure en background svg
- le toggle est maintenant placé dans un fieldset  
  radio:  
  - Le contour devient bleu
- retrait du fond blanc du radio bouton (transparence)
- input déssiné en background image  
  radio-rich:  
  - L'outline au focus englobe tout le radio-riche, plus l'input  
  checkbox:  
  - Le contour devient bleu
- correction changement d'état au mouse-down (), maintenant au mouse up  
  Form:  
  - les hint-text des champs désactivés passent en couleur `--text-disabled-grey`  
  ♻️ refactor  
  radio checkbox toggle

#### [v1.9.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.9.0) - 1 mars 2023

- **[rend le composant compatible avec vite+svelte](https://github.com/GouvernementFR/dsfr/pull/518)**  
  #518  
  fix  
  toggle

#### [v1.8.2](https://github.com/GouvernementFR/dsfr/releases/tag/v1.8.2) - 9 novembre 2022

- **[bug IE label et statut actif](https://github.com/GouvernementFR/dsfr/pull/443)**  
  #443  
  fix  
  toggle

#### [v1.4.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.4.0) - 16 mars 2022

- **[correction z-index de toggle](https://github.com/GouvernementFR/dsfr/pull/213)**  
  #213  
  fix  
  toggle modal

#### [v1.3.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.3.1) - 7 février 2022

- **[correction de l'état précoché de l'interrupteur](https://github.com/GouvernementFR/dsfr/pull/210)**  
  #210  
  fix  
  toggle

- **[correction de la gestion de l'attribut checked et de la page d'exemple de form](https://github.com/GouvernementFR/dsfr/pull/208)**  
  #208  
  fix  
  checkbox form radio toggle

- **[ajout de l'attribut checked](https://github.com/GouvernementFR/dsfr/pull/198)**  
  #198  
  fix  
  checkbox radio toggle

- **[status width](https://github.com/GouvernementFR/dsfr/pull/193)**  
  #193  
  fix  
  toggle

- **[patch 1.3.1 - status width & modal icon aria-hidden](https://github.com/GouvernementFR/dsfr/pull/192)**  
  #192  
  fix  
  toggle modal

#### [v1.3.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.3.0) - 18 janvier 2022

- **[statut activer/desactiver a11y](https://github.com/GouvernementFR/dsfr/pull/185)**  
  #185  
  fix  
  toggle

#### [v1.2.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.2.0) - 17 novembre 2021

- **[espacement composant](https://github.com/GouvernementFR/dsfr/pull/104)**  
  #104  
  fix  
  toggle

##### Contenu associé

- **[Bouton radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio)**  
  Présentation du composant Bouton radio permettant à l’usager de sélectionner une option unique parmi un ensemble limité de choix.

- **[Case à cocher](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher)**  
  Présentation du composant Case à cocher permettant à l’usager de sélectionner une ou plusieurs options dans une liste de manière indépendante.

- **[Contrôle segmenté](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/controle-segmente)**  
  Présentation du composant Contrôle segmenté permettant à l’usager de choisir une vue parmi plusieurs options d’affichage disponibles dans une interface.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/interrupteur/accessibilite-de-l-interrupteur

Le composant **Interrupteur** , est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Lorsque le focus est positionné sur l’interrupteur :

- `Espace` : active ou désactive l’interrupteur.

Dans un groupe d’interrupteurs :

- `Tab` : déplace le focus sur le prochain élément focalisable.
- `Maj + Tab` : déplace le focus sur l'élément focalisable précédent.

### Règles d’accessibilité

#### Intitulé pertinent : nom accessible

Un interrupteur doit avoir une **étiquette pertinente** . On doit en comprendre la fonction sans ambiguïté.

Son nom accessible est calculé par ordre de priorité à partir de :

- l’attribut `aria-labelledby`,
- l’attribut `aria-label`,
- l’élément `<label>`,
- l’attribut `title` en l’absence d’une autre méthode de nommage.

**Privilégier l’élément `<label>`** pour nommer le composant.

> **Avertissement**
> Le RGAA exige une **liaison explicite** entre l’attribut `for` de l’élément `<label>` et l'attribut `id` de l’interrupteur.
> 
> L’attribut `for` du label doit correspondre à l'attribut `id` de l’interrupteur. La valeur de l’attribut `id` doit être unique dans la page.

La liaison explicite `for`/`id` permet :

- d’assurer une compatibilité avec l’ensemble des technologies d’assistance (ex. le contrôle vocal),
- de cocher ou décocher l’interrupteur en cliquant sur l’étiquette et ainsi d’étendre la zone de clic.

#### Étiquette visible et accolée

L’étiquette est visible et doit être accolée à l’interrupteur.

#### État désactivé

> **Attention**
> **L’état désactivé de l’interrupteur peut poser des problèmes d’utilisabilité et d’accessibilité pour les personnes handicapées** (personnes déficientes visuelles ainsi que les personnes qui ont un handicap cognitif ou mental).

La bordure, la coche et l’étiquette de l’interrupteur désactivé sont insuffisamment contrastées. Il ne s’agit néanmoins pas d’une non-conformité au RGAA (cas particulier).

#### Message d’information, d’avertissement ou d’erreur

Il existe différentes méthodes pour gérer les messages d’information, d’avertissement ou d’erreur d’un formulaire de manière accessible selon le contexte.

Il est possible d’indiquer l’information, l’avertissement ou l’erreur :

- dans l’étiquette du champ,
- dans un passage de texte avant le formulaire,
- dans un passage de texte relié au champ de saisie avec l’attribut `aria-describedby`,
- avec une live region : `role="alert"`, `role="status"`, `aria-live="assertive",
   aria-live="polite"` (dans certains contextes uniquement).

#### Groupe d’interrupteurs

- Utiliser des groupes d’interrupteurs pour des options liées, en les regroupant dans un élément `<fieldset>` avec une légende `<legend>`.
- Si le **fieldset contient des messages** d’erreur, d'informations ou de succès, il doit être associé à un attribut `aria-labelledby` pour lier la légende et les messages. Les id des éléments doivent être séparés par un espace. Il faudra également ajouter l’attribut `role="group"` à l’élément `<fieldset>` pour améliorer le rendu des technologies d’assistance.

#### Contrastes de couleurs

Par défaut, le composant Interrupteur est suffisamment contrasté en thème clair et en thème sombre.

**Contrastes par défaut**

| Thème | Bordure | Coche | Étiquette |
|---|---|---|---|
| **Thème clair** | 14,9:1 | 14,9:1 | 18,1:1 |
| **Thème sombre** | 5,8:1 | 4,7:1 | 18,1:1 |

---

### Restitution par les lecteurs d’écran

Par défaut, les lecteurs d’écran restituent le **nom, la description, l’état et le type** . L’ordre peut varier en fonction des lecteurs d’écran et de leur configuration.

L’attribut `disabled` est restitué différemment selon les lecteurs d’écran :

- VoiceOver macOS et iOS : « estompé »
- NVDA et JAWS : « bouton non disponible »
- Narrateur et Talkback : « bouton désactivé »

---

### Critères RGAA applicables

- **Couleurs :** 3.1, 3.2, 3.3
- **Présentation de l’information :** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Formulaires :** 11.1, 11.2, 11.4, 11.5, 11.6, 11.7, 11.8, 11.10, 11.11
- **Navigation :** 12.8, 12.9
- **Consultation :** 13.9, 13.11

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Spécification HTML – élément input](https://html.spec.whatwg.org/#the-input-element)
- [Spécification HTML – type checkbox](https://html.spec.whatwg.org/#radio-button-state-(type=checkbox))
- [Live regions ARIA et mauvaises pratiques](https://access42.net/quand-utiliser-live-regions-aria/)

##### Contenu associé

- **[Bouton radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio)**  
  Présentation du composant Bouton radio permettant à l’usager de sélectionner une option unique parmi un ensemble limité de choix.

- **[Case à cocher](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher)**  
  Présentation du composant Case à cocher permettant à l’usager de sélectionner une ou plusieurs options dans une liste de manière indépendante.

- **[Contrôle segmenté](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/controle-segmente)**  
  Présentation du composant Contrôle segmenté permettant à l’usager de choisir une vue parmi plusieurs options d’affichage disponibles dans une interface.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/interrupteur/demonstration-de-l-interrupteur

*(Démonstration interactive « toggle--docs » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=toggle--docs&nav=0&globals=theme%3Alight)*

*(Démonstration interactive « toggle-group--docs » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=toggle-group--docs&nav=0&globals=theme%3Alight)*

#### Contenu associé

- **[Bouton radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio)**  
  Présentation du composant Bouton radio permettant à l’usager de sélectionner une option unique parmi un ensemble limité de choix.

- **[Case à cocher](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher)**  
  Présentation du composant Case à cocher permettant à l’usager de sélectionner une ou plusieurs options dans une liste de manière indépendante.

- **[Contrôle segmenté](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/controle-segmente)**  
  Présentation du composant Contrôle segmenté permettant à l’usager de choisir une vue parmi plusieurs options d’affichage disponibles dans une interface.
