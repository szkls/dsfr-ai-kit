# Case à cocher

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher/design-de-la-case-a-cocher · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher/code-de-la-case-a-cocher · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher/accessibilite-de-la-case-a-cocher · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher/demonstration-de-la-case-a-cocher
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

La case à cocher est un élément d’interaction avec l’interface permettant à l’usager de sélectionner une ou plusieurs options dans une liste.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher

### Quand utiliser ce composant ?

Utiliser les cases à cocher pour permettre à l’utilisateur de sélectionner une ou plusieurs options dans une liste.

> **Information**
> Bien différencier les cases à cocher des boutons radio ou liste déroulante. Les cases à cocher sont recommandées lorsque l’utilisateur doit effectuer une sélection multiple (de 0 à N éléments) dans une liste ou pour permettre un choix binaire (lorsque l’utilisateur peut sélectionner ou désélectionner une seule option).

Au-delà de 5 choix ou lorsque l’espace est restreint, utilisez une liste déroulante.

Si vous souhaitez contraindre le choix de l’utilisateur à une seule option, choisissez les boutons radio.

### Comment utiliser ce composant ?

- **Utiliser la case à cocher seule ou en liste** , selon son contexte d’utilisation.

> **À faire :** Utiliser la case à cocher au sein d’un formulaire.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/checkbox/use/do-1.png)

- **Privilégier une disposition en liste verticale** des cases à cocher lorsqu’elles sont en liste, la version horizontale étant plus difficile à lire pour les utilisateurs, notamment lorsque les options sont nombreuses.

### Règles éditoriales

- Il est important de **rédiger des libellés clairs et concis** pour faciliter la compréhension des options et du choix à réaliser.
- **Maintenir une cohérence dans les libellés** des boutons radio en utilisant des termes logiques entre eux et cohérents avec le reste du site.
- **Conserver une unité dans le format** d’écriture de tous les libellés de case à cocher, en mettant uniquement la première lettre en majuscule et sans ponctuer la fin d’un libellé.
- **Accompagner la ou les cases à cocher d’un texte d’aide pour clarifier la nature du contenu attendu,** lorsque nécessaire. Si cette information est essentielle, éviter de la masquer dans une infobulle.

> **À faire :** Accompagner les cases à cocher d’un texte d’aide pour clarifier la nature du contenu attendu.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/checkbox/edit/do-1.png)

> **À ne pas faire :** Ne pas masquer le texte d’aide dans une infobulle.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/checkbox/edit/dont-1.png)

#### Contenu associé

- **[Bouton radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio)**  
  Présentation du composant Bouton radio permettant à l’usager de sélectionner une option unique parmi un ensemble limité de choix.

- **[Champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)**  
  Présentation du composant Champ de saisie permettant à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.

- **[Formulaire](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/formulaire)**  
  Présentation du composant Formulaire permettant l'agencement des éléments de saisie de données et des messages d'état.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher/design-de-la-case-a-cocher

![Anatomie de la case à cocher](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/checkbox/design/anatomy/anatomy-1.png)

1. Une légende, décrivant le contexte du groupe de cases à cocher — Obligatoire
2. Une description additionnelle, pour la légende — En option
3. Une case à cocher — Obligatoire
4. Un libellé, associé à la case à cocher — Obligatoire
5. Un texte additionnel, accompagnant chaque case à cocher / libellé — En option

### Variations

**Liste verticale**

*(Démonstration interactive « checkboxes-group--default-group » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=checkboxes-group--default-group&nav=0&globals=theme%3Alight)*

La variation verticale d’une liste de cases à cocher est la plus courante et la plus facile à lire pour l’utilisateur.

**Liste horizontale**

*(Démonstration interactive « checkboxes-group--inline » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=checkboxes-group--inline&nav=0&globals=theme%3Alight)*

La variation horizontale d’une liste de cases à cocher est à utiliser uniquement lorsqu’il n’y a 2 options ou que les libellés des entrées sont courts.

**Liste avec texte d’aide**

Il est recommandé d’ajouter un texte d’aide qui accompagne les cases à cocher afin de faciliter le choix de l’utilisateur. Ces précisions peuvent être apportées de deux façons :

- Par l’ajout d’un texte sous le titre du groupe de cases à cocher, afin d’apporter une précision à l’intitulé du groupe.

*(Démonstration interactive « checkboxes-group--hint » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=checkboxes-group--hint&nav=0&globals=theme%3Alight)*

- Par l’ajout d’un texte sous le libellé de chaque case à cocher, afin d’apporter une précision à chaque élément.

*(Démonstration interactive « checkboxes-group--hint-group » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=checkboxes-group--hint-group&nav=0&globals=theme%3Alight)*

### Tailles

La case à cocher est proposée en taille MD par défaut (24px) afin d’optimiser son ergonomie et son accessibilité en ayant une zone cliquable confortable.

*(Démonstration interactive « checkboxes-group--size-md » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=checkboxes-group--size-md&nav=0&globals=theme%3Alight)*

Il existe également une version en taille SM (16 px) correspondant à la taille standard proposée par les navigateurs.

*(Démonstration interactive « checkboxes-group--size-sm » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=checkboxes-group--size-sm&nav=0&globals=theme%3Alight)*

### États

**État d’erreur**

L'état d’erreur est signalé par un changement de couleur ainsi que l’affichage d’une ligne rouge (cf. couleurs fonctionnelles : le rouge est la couleur de l’état erreur) et d’un message d’erreur en-dessous du composant.

*(Démonstration interactive « checkboxes-group--error » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=checkboxes-group--error&nav=0&globals=theme%3Alight)*

**État de succès**

L'état de succès est signalé par un changement de couleur ainsi que l’affichage d’une ligne verte (cf. couleurs fonctionnelles : le vert est la couleur de l’état succès) et d’un message de succès en-dessous du composant.

*(Démonstration interactive « checkboxes-group--success » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=checkboxes-group--success&nav=0&globals=theme%3Alight)*

**État désactivé**

L'état désactivé indique que l’utilisateur ne peut pas interagir avec la case à cocher.

*(Démonstration interactive « checkboxes-group--disabled » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=checkboxes-group--disabled&nav=0&globals=theme%3Alight)*

**État indéterminé**

L'état indéterminé peut être utilisé pour indiquer à l’utilisateur qu'un groupe de checkboxes avec une action commune est partiellement sélectionné. Typiquement, cet état pourra être utilisé lorsqu'un tableau proposera une case à cocher générale dans son en-tête et que l'ensemble des lignes ne seront pas sélectionnées.

*(Démonstration interactive « checkbox--indeterminate » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=checkbox--indeterminate&nav=0&globals=theme%3Alight)*

### Personnalisation

Les cases à cocher ne sont pas personnalisables. Toutefois, certains éléments sont optionnels - voir [la structure du composant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher/design-de-la-case-a-cocher#case-a-cocher) .

> **À faire :** Utiliser uniquement la couleur bleu pour les cases à cocher.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/checkbox/design/custom/do-1.png)

> **À ne pas faire :** Ne pas personnaliser la couleur des cases à cocher.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/checkbox/design/custom/dont-1.png)

> **À faire :** Utiliser uniquement une typographie noire.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/checkbox/design/custom/do-2.png)

> **À ne pas faire :** Ne pas personnaliser la couleur des textes.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/checkbox/design/custom/dont-2.png)

#### Contenu associé

- **[Bouton radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio)**  
  Présentation du composant Bouton radio permettant à l’usager de sélectionner une option unique parmi un ensemble limité de choix.

- **[Champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)**  
  Présentation du composant Champ de saisie permettant à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.

- **[Formulaire](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/formulaire)**  
  Présentation du composant Formulaire permettant l'agencement des éléments de saisie de données et des messages d'état.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher/code-de-la-case-a-cocher

### HTML

#### Structure du composant

Le composant **Case à cocher** , ci-après nommée **Checkbox** , est un élément interactif permettant de sélectionner une ou plusieurs options. Sa structure est la suivante :

- La checkbox doit être **contenu** dans un élément HTML `<div>` défini par la classe `fr-checkbox-group`.
- La checkbox est un élément HTML `<input>` de type `checkbox` défini par la classe `fr-checkbox`.
- La checkbox doit être associée à un **label** `<label>` avec la classe `fr-label`.
- Une **description additionnelle** de l'option - optionnelle - peut être ajoutée dans le label, elle est définie par un élément `<span>` et la classe utilitaire `fr-hint-text`.
- Un **message** d'erreur ou de succès peut être associé à la checkbox en utilisant un élément `<div>` avec la classe `fr-messages-group` dans lequel on peut ajouter un message `fr-message`. Son attribut`id` doit être associé à l'attribut `aria-describedby` de la checkbox. Ce bloc peut être placé vide et être rempli dynamiquement, auquel cas il doit être annoncé à l'utilisateur en utilisant l'attribut `aria-live="polite"`.

**Exemple de structure HTML simple**

```html
<div class="fr-checkbox-group">
    <input id="checkbox" type="checkbox" aria-describedby="checkbox-messages">
    <label class="fr-label" for="checkbox">
        Libellé checkbox
        <span class="fr-hint-text">Description optionnelle</span>
    </label>
    <div class="fr-messages-group" id="checkbox-messages" aria-live="polite">
    </div>
</div>
```

#### Groupe de checkboxes

Pour **regrouper plusieurs checkboxes liées** , utilisez un élément `<fieldset>` avec une légende `<legend>`. Cela permet de structurer les options de manière accessible.

- L'élément `<fieldset>` est défini par la classe `fr-fieldset`.
- La légende `<legend>` est définie par la classe `fr-fieldset__legend`. Par défaut une légende sera en gras car le fieldset est utilisé pour regroupé plusieurs champs ayant chacun un label. Dans le cas des checkboxes la légende est visuellement perçue comme le label du groupe de checkboxes. On ajoutera donc la classe `fr-fieldset__legend--regular` pour repasser la légende sur une graisse standard.
- Une description additionnelle pour la légende - optionnelle - peut être ajoutée dans la légende, elle est définie par un élément `<span>` et la classe utilitaire `fr-hint-text`.
- Chaque élément de checkbox est contenu dans un élément `<div>` défini par la classe `fr-fieldset__element`. Ces éléments peuvent être placés en ligne avec la classe `fr-fieldset__element--inline`.
- Comme pour chaque checkbox, le groupe de checkbox, représenté par un fieldset, peut contenir un message d'erreur/information/succès via un bloc `fr-messages-group`.

**Exemple de groupe de checkboxes**

#### Déplier pour voir le code

```html
<fieldset class="fr-fieldset" aria-labelledby="checkboxes-legend checkboxes-messages">
    <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="checkboxes-legend">
        Légende pour l’ensemble des éléments
    </legend>
    <div class="fr-fieldset__element">
        <div class="fr-checkbox-group">
            <input name="checkboxes-1" id="checkboxes-1" type="checkbox">
            <label class="fr-label" for="checkboxes-1">
                Libellé case à cocher
            </label>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-checkbox-group">
            <input checked name="checkboxes-2" id="checkboxes-2" type="checkbox">
            <label class="fr-label" for="checkboxes-2">
                Libellé case à cocher
            </label>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-checkbox-group">
            <input name="checkboxes-3" id="checkboxes-3" type="checkbox">
            <label class="fr-label" for="checkboxes-3">
                Libellé case à cocher
            </label>
        </div>
    </div>
    <div class="fr-messages-group" id="checkboxes-messages" aria-live="polite">
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
| Checkbox | Oui |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/form/form.min.css" rel="stylesheet">
<link href="dist/component/checkbox/checkbox.min.css" rel="stylesheet">
```

#### Variantes de tailles

La checkbox est disponible en deux variantes de tailles :

- En taille MD : par défaut.
- En taille SM : définie par la classe `fr-checkbox-group--sm`.

**Exemples de variantes de tailles**

```html
<div class="fr-checkbox-group fr-checkbox-group--sm">
    <input id="checkbox-sm" type="checkbox">
    <label class="fr-label" for="checkbox-sm">
        Libellé checkbox taille SM
    </label>
</div>
```

#### Variantes d'états

La checkbox est disponible en plusieurs variantes d'états :

- La checkbox avec **erreur** : définie par la classe `fr-checkbox-group--error`.
- La checkbox avec **succès** : définie par la classe `fr-checkbox-group--valid`.
- La checkbox **désactivée** : définie par l'attribut `disabled` sur l'élément `<input>`.
- La checkbox **indéterminée** : définie par la propriété du DOM `indeterminate` fixée à `true` sur l'élément `<input>` via du code JavaScript.

Dans le cas d'utilisation d'un groupe de checkboxes, ces états sont définis sur le groupe (le fieldset), et non sur chaque checkbox.

- Groupe en **erreur** : définie par la classe `fr-fieldset--error`.
- Groupe en **succès** : définie par la classe `fr-fieldset--valid`.
- Groupe **désactivée** : définie par l'attribut `disabled` sur l'élément `<fieldset>`.

**Exemples de variantes d'états**

#### Déplier pour voir le code

**Erreur**

```html
<div class="fr-checkbox-group fr-checkbox-group--error">
    <input id="checkbox-error" type="checkbox" aria-describedby="checkbox-messages-error">
    <label class="fr-label" for="checkbox-error">
        Libellé checkbox avec erreur
    </label>
    <div class="fr-messages-group" id="checkbox-messages-error" aria-live="polite">
        <p class="fr-message fr-message--error">Texte d’erreur</p>
    </div>
</div>
```

**Succès**

```html
<div class="fr-checkbox-group fr-checkbox-group--valid">
    <input id="checkbox-valid" type="checkbox" aria-describedby="checkbox-messages-valid">
    <label class="fr-label" for="checkbox-valid">
        Libellé checkbox avec succès
    </label>
    <div class="fr-messages-group" id="checkbox-messages-valid" aria-live="polite">
        <p class="fr-message fr-message--valid">Texte de succès</p>
    </div>
</div>
```

**Désactivé**

```html
<div class="fr-checkbox-group">
    <input id="checkbox-disabled" type="checkbox" disabled>
    <label class="fr-label" for="checkbox-disabled">
        Libellé checkbox désactivée
    </label>
</div>
```

**Exemple de variante d'état au niveau du groupe**

#### Déplier pour voir le code

**Erreur**

```html
<fieldset class="fr-fieldset fr-fieldset--error" aria-labelledby="checkboxes-legend checkboxes-messages">
    <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="checkboxes-legend">
        Légende pour l’ensemble des éléments en erreur
    </legend>
    <div class="fr-fieldset__element">
        <div class="fr-checkbox-group">(...)</div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-checkbox-group">(...)</div>
    </div>
    <div class="fr-messages-group" id="checkboxes-messages" aria-live="polite">
        <p class="fr-message fr-message--error">Texte d’erreur globale</p>
    </div>
</fieldset>
```

**Succès**

```html
<fieldset class="fr-fieldset fr-fieldset--valid" aria-labelledby="checkboxes-legend checkboxes-messages">
    <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="checkboxes-legend">
        Légende pour l’ensemble des éléments en succès
    </legend>
    <div class="fr-fieldset__element">
        <div class="fr-checkbox-group">(...)</div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-checkbox-group">(...)</div>
    </div>
    <div class="fr-messages-group" id="checkboxes-messages" aria-live="polite">
        <p class="fr-message fr-message--error">Texte de succès global</p>
    </div>
</fieldset>
```

**Désactivé**

```html
<fieldset class="fr-fieldset" disabled aria-labelledby="checkboxes-legend checkboxes-messages">
    <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="checkboxes-legend">
        Légende pour l’ensemble des éléments déactivés
    </legend>
    <div class="fr-fieldset__element">
        <div class="fr-checkbox-group">(...)</div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-checkbox-group">(...)</div>
    </div>
    <div class="fr-messages-group" id="checkboxes-messages" aria-live="polite">
    </div>
</fieldset>
```

---

### JavaScript

Le composant Case à cocher **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

Un script est disponible pour faire remonter les évènements de changement d'état des checkboxes, mais il n'est pas nécessaire pour le fonctionnement du composant. Ce script est notamment utilisé pour gérer la selection des lignes d'un tableau.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+checkbox+)

#### [v1.15.3](https://github.com/GouvernementFR/dsfr/releases/tag/v1.15.3) - 8 septembre 2026

- **[bug du storybook checkbox intederminée](https://github.com/GouvernementFR/dsfr/pull/1507)**  
  #1507  
  - Corrige l'iframe dans le site de doc et l'url vers le js de la checkbox indéterminée.  
  📝 docs  
  checkbox

#### [v1.15.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.15.0) - 17 juillet 2026

- **[changement de selecteur des input+label](https://github.com/GouvernementFR/dsfr/pull/1380)**  
  #1380  
  - Rend le sélecteur du label qui suit les inputs de type radio/checkbox moins sensible à la structure du DOM.
  - Utilisation d'un "~" plutot que "+".
  - Impacte les composants radio, checkbox, password, segmented, form  
  🐛 fix  
  checkbox radio

- **[ajoute l'état indéterminé](https://github.com/GouvernementFR/dsfr/pull/1361)**  
  #1361  
  - Ajoute la case à cocher en état indéterminé  
  ✨ feat  
  checkbox

#### [v1.11.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.0) - 11 décembre 2023

- **[tokens de couleur](https://github.com/GouvernementFR/dsfr/pull/760)**  
  #760  
  - mise à jour des tokens de couleurs sur checkbox, radio, radio-rich, toggle  
  🐛 fix  
  radio radio-rich toggle checkbox

- **[met a jour le token de la coche](https://github.com/GouvernementFR/dsfr/pull/762)**  
  #762  
  - passe la couleur de la coche en $text-inverted-blue-france  
  🐛 fix  
  checkbox

#### [v1.10.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.10.0) - 19 juillet 2023

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

- **[placement de l'input caché & alignement sm](https://github.com/GouvernementFR/dsfr/pull/539)**  
  #539  
  Corrige le mauvais placement du curseur sur les cases à cocher et les boutons radio lors de l'utilisation de VoiceOver (screen reader de MacOs)  
  fix  
  checkbox radio

#### [v1.3.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.3.1) - 7 février 2022

- **[correction de la gestion de l'attribut checked et de la page d'exemple de form](https://github.com/GouvernementFR/dsfr/pull/208)**  
  #208  
  fix  
  checkbox form radio toggle

- **[ajout de l'attribut checked](https://github.com/GouvernementFR/dsfr/pull/198)**  
  #198  
  fix  
  checkbox radio toggle

- **[exemple checkbox sup et sub](https://github.com/GouvernementFR/dsfr/pull/197)**  
  #197  
  fix  
  checkbox

##### Contenu associé

- **[Bouton radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio)**  
  Présentation du composant Bouton radio permettant à l’usager de sélectionner une option unique parmi un ensemble limité de choix.

- **[Champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)**  
  Présentation du composant Champ de saisie permettant à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.

- **[Formulaire](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/formulaire)**  
  Présentation du composant Formulaire permettant l'agencement des éléments de saisie de données et des messages d'état.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher/accessibilite-de-la-case-a-cocher

Le composant **Case à cocher** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Lorsque le focus est positionné sur le composant :

- `Espace` : coche ou décoche la case à cocher.

Dans un groupe de cases à cocher :

- `Tab` : déplace le focus sur le prochain élément focalisable.
- `Maj + Tab` : déplace le focus sur l'élément focalisable précédent.

### Règles d’accessibilité

#### Intitulé pertinent : nom accessible

Une case à cocher doit avoir une **étiquette pertinente** . On doit en comprendre la fonction sans ambiguïté.

Son nom accessible est calculé par ordre de priorité à partir de :

- l’attribut `aria-labelledby`,
- l’attribut `aria-label`,
- l’élément `<label>`,
- l’attribut `title` en l’absence d’une autre méthode de nommage.

**Privilégier l’élément `<label>`** pour nommer le composant.

> **Avertissement**
> Le RGAA exige une **liaison explicite** entre l’attribut `for` de l’élément `<label>` et l'attribut `id` de la case à cocher.
> 
> L’attribut `for` du label doit correspondre à l'attribut `id` de la case à cocher. La valeur de l’attribut `id` doit être unique dans la page.

La liaison explicite `for`/`id` permet :

- d’assurer une compatibilité avec l’ensemble des technologies d’assistance (ex. le contrôle vocal),
- de cocher ou décocher la case à cocher en cliquant sur l’étiquette et ainsi d’étendre la zone de clic.

#### Étiquette visible et accolée

L’étiquette est visible et accolée à la case à cocher.

#### État désactivé

> **Attention**
> **L’état désactivé d’une case à cocher peut poser des problèmes d’utilisabilité et d’accessibilité pour les personnes handicapées** (personnes déficientes visuelles ainsi que les personnes qui ont un handicap cognitif ou mental).

La bordure, la coche et l’étiquette de la case à cocher désactivée sont insuffisamment contrastées. Il ne s’agit néanmoins pas d’une non-conformité au RGAA (cas particulier).

#### Message d’information, d’avertissement ou d’erreur

Il existe différentes méthodes pour gérer les messages d’information, d’avertissement ou d’erreur d’un formulaire de manière accessible selon le contexte.

Il est possible d’indiquer l’information, l’avertissement ou l’erreur :

- dans l’étiquette du champ,
- dans un passage de texte avant le formulaire,
- dans un passage de texte relié au champ de saisie avec l’attribut `aria-describedby`,
- avec une live region : `role="alert"`, `role="status"`, `aria-live="assertive",
   aria-live="polite"` (dans certains contextes uniquement).

#### Champs obligatoires

Ajouter une mention visible pour tout le monde au début du formulaire et utiliser l’attribut `required` pour indiquer que la case à cocher est obligatoire.

#### Groupe de cases à cocher

- Utiliser des groupes de cases à cocher pour des options liées, en les regroupant dans un élément `<fieldset>` avec une légende `<legend>`.
  - La **légende** doit être explicite et décrire le groupe d'options. Elle ne doit pas être en gras puisqu’elle n’est pas considérée ici comme le titre d’un regroupement de champs mais comme le libellé de l'ensemble d'options.
  - Si le **fieldset contient des messages** d’erreur, d'informations ou de succès, il doit être associé à un attribut `aria-labelledby` pour lier la légende et les messages. Les id des éléments doivent être séparés par un espace. Il faudra également ajouter l’attribut `role="group"` à l’élément `<fieldset>` pour améliorer le rendu des technologies d’assistance.

#### Contrastes de couleurs

Par défaut, le composant Case à cocher est suffisamment contrasté en thème clair et en thème sombre.

**Contrastes par défaut**

| Thème | Bordure | Coche | Étiquette |
|---|---|---|---|
| **Thème clair** | 14,9:1 | 14,9:1 | 18,1:1 |
| **Thème sombre** | 5,8:1 | 4,7:1 | 18,1:1 |

En cas de succès ou d’erreur, le ratio de contraste de la bordure et celui de l’étiquette sont de 5,8 en thème clair et sombre.

---

### Restitution par les lecteurs d’écran

Par défaut, les lecteurs d’écran restituent le **nom, la description, l’état et le type** . L’ordre peut varier en fonction des lecteurs d’écran et de leur configuration.

L’attribut `disabled` est restitué différemment selon les lecteurs d’écran :

- VoiceOver macOS et iOS : « estompé »
- NVDA et JAWS : « case à cocher non disponible »
- Narrateur et Talkback : « case à cocher désactivée »

La proriété du DOM `indeterminate` est aussi restituée différemment selon les lecteurs d’écran :

- VoiceOver macOS et iOS : « mixé, case à chocé »
- NVDA et JAWS : « case à cocher semi-coché »
- Narrateur et Talkback : « case à cocher indéterminée »

---

### Critères RGAA applicables

- **Couleurs :** 3.1, 3.2, 3.3
- **Présentation de l’information :** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Formulaires :** 11.1, 11.2, 11.4, 11.5, 11.6, 11.7, 11.8, 11.10, 11.11
- **Navigation :** 12.8, 12.9
- **Consultation :** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Spécification HTML – élément input](https://html.spec.whatwg.org/#the-input-element)
- [Spécification HTML – type checkbox](https://html.spec.whatwg.org/#checkbox-state-(type=checkbox))
- [Live regions ARIA et mauvaises pratiques](https://access42.net/quand-utiliser-live-regions-aria/)

##### Contenu associé

- **[Bouton radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio)**  
  Présentation du composant Bouton radio permettant à l’usager de sélectionner une option unique parmi un ensemble limité de choix.

- **[Champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)**  
  Présentation du composant Champ de saisie permettant à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.

- **[Formulaire](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/formulaire)**  
  Présentation du composant Formulaire permettant l'agencement des éléments de saisie de données et des messages d'état.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher/demonstration-de-la-case-a-cocher

#### Contenu associé

- **[Bouton radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio)**  
  Présentation du composant Bouton radio permettant à l’usager de sélectionner une option unique parmi un ensemble limité de choix.

- **[Champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)**  
  Présentation du composant Champ de saisie permettant à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.

- **[Formulaire](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/formulaire)**  
  Présentation du composant Formulaire permettant l'agencement des éléments de saisie de données et des messages d'état.
