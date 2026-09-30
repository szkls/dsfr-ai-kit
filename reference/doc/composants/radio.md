# Bouton radio

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio/design-du-bouton-radio · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio/code-du-bouton-radio · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio/accessibilite-du-bouton-radio · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio/demonstration-du-bouton-radio
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

Le bouton radio est un élément d’interaction avec l’interface permettant à l’usager de réaliser un choix unique parmi plusieurs options.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio

*(Démonstration interactive « radio--radio » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=radio--radio&nav=0&globals=theme%3Alight)*

### Quand utiliser ce composant ?

Utiliser les boutons radio pour permettre à l’utilisateur de sélectionner une option unique dans une liste.

> **Information**
> Bien différencier les boutons radio des cases à cocher ou liste déroulante. Les boutons radio sont recommandés lorsque l’utilisateur doit choisir un seul élément parmi 2 à 5 choix possibles.

Si plusieurs choix sont possibles ou que la sélection n’est pas obligatoire, privilégiez le composant case à cocher.

Au-delà de 5 choix ou lorsque l’espace est restreint, utilisez pour une liste déroulante.

### Comment utiliser ce composant ?

- **Considérer toujours le bouton radio comme un groupe de boutons radio** . Le bouton radio ne peut pas être utilisé seul, dans la mesure où il permet de faire un choix entre différentes options (minimum 2).

> **À faire :** Utiliser les boutons radios pour permettre à l’usager de faire un choix entre différentes options.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/radio/use/do-1.png)

> **À ne pas faire :** Ne pas proposer de bouton radio seul.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/radio/use/dont-1.png)

- **Privilégier une disposition en liste verticale** des boutons radio, une liste horizontale étant plus difficile à lire, notamment lorsque les options sont nombreuses.
- **Éviter de sélectionner une option par défaut** pour que le choix de l’usager soit conscient (en particulier si celui-ci est obligatoire).

> **À faire :** Proposer des choix sans sélectionner une option par défaut.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/radio/use/do-2.png)

> **À ne pas faire :** Ne pas pousser une option par défaut afin de laisser l’usager faire son choix en conscience.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/radio/use/dont-2.png)

### Règles éditoriales

- Il est important de **rédiger des libellés clairs et concis** pour faciliter la compréhension des options et du choix à réaliser.
- **Maintenir une cohérence dans les libellés** des boutons radio en utilisant des termes logiques entre eux et cohérents avec le reste du site.
- **Conserver une unité dans le format** d’écriture de tous les libellés de boutons radio, en mettant uniquement la première lettre en majuscule et sans ponctuer la fin d’un libellé.
- **Accompagner les boutons radio d’un texte d’aide pour clarifier la nature du contenu attendu** lorsque nécessaire. Si cette information est essentielle, éviter de la masquer dans une infobulle.

> **À faire :** Accompagner les boutons radio d’un texte d’aide pour clarifier la nature du contenu attendu.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/radio/edit/do-1.png)

> **À ne pas faire :** Ne pas masquer le texte d’aide dans une infobulle.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/radio/edit/dont-1.png)

#### Contenu associé

- **[Case à cocher](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher)**  
  Présentation du composant Case à cocher permettant à l’usager de sélectionner une ou plusieurs options dans une liste de manière indépendante.

- **[Champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)**  
  Présentation du composant Champ de saisie permettant à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.

- **[Liste déroulante](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante)**  
  Présentation du composant Liste déroulante permettant à l’usager de sélectionner une option unique parmi un ensemble de choix dans un espace limité.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio/design-du-bouton-radio

![Anatomie du bouton](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/radio/design/anatomy/anatomy-1.png)

1. Une légende, décrivant le contexte du groupe de boutons radio — Obligatoire
2. Une description additionnelle, pour la légende — En option
3. Un bouton radio — Obligatoire
4. Un libellé, associé à chaque bouton — Obligatoire
5. Un texte additionnel, accompagnant chaque bouton / libellé — En option

### Variations

**Liste horizontale**

Privilégier les listes verticales aux listes horizontales, plus difficiles à lire pour l’utilisateur.

*(Démonstration interactive « radios-group--inline-group » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=radios-group--inline-group&nav=0&globals=theme%3Alight)*

Cette variation horizontale est donc à utiliser uniquement lorsqu’il n’y a que 2 options possibles ou que les libellés des entrées sont courts.

**Liste avec texte d’aide**

Il est recommandé d’ajouter un texte d’aide qui accompagne les boutons radio afin de faciliter le choix de l’utilisateur. Ces précisions peuvent être apportées de deux façons :

- Par l’ajout d’un texte sous le titre du groupe de boutons radio, afin d’apporter une précision à l’intitulé du groupe.

*(Démonstration interactive « radios-group--hint » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=radios-group--hint&nav=0&globals=theme%3Alight)*

- Par l’ajout d’un texte sous le libellé de chaque bouton radio, afin d’apporter une précision à chaque élément.

*(Démonstration interactive « radios-group--hint-group » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=radios-group--hint-group&nav=0&globals=theme%3Alight)*

**Boutons radio riches**

Utiliser les boutons radio riches pour permettre à l’usager de sélectionner une option unique dans une liste d’options illustrées.

À la différence des boutons radio simples, le [pictogramme](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/pictogramme) du bouton radio riche permet d’illustrer et d’accompagner l’usager dans son choix.

Celui-ci est personnalisable.

**Liste horizontale**

- Avec description

*(Démonstration interactive « radios-group--radios-rich-inline-hint-group » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=radios-group--radios-rich-inline-hint-group&nav=0&globals=theme%3Alight)*

- Sans description

*(Démonstration interactive « radios-group--radios-rich-inline-group » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=radios-group--radios-rich-inline-group&nav=0&globals=theme%3Alight)*

- Sans pictogramme

*(Démonstration interactive « radios-group--radios-rich-no-image-inline-group » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=radios-group--radios-rich-no-image-inline-group&nav=0&globals=theme%3Alight)*

**Liste verticale**

- Avec description

*(Démonstration interactive « radios-group--radios-rich-hint-group » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=radios-group--radios-rich-hint-group&nav=0&globals=theme%3Alight)*

- Sans description

*(Démonstration interactive « radios-group--radios-rich-group » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=radios-group--radios-rich-group&nav=0&globals=theme%3Alight)*

- Sans pictogramme

*(Démonstration interactive « radios-group--radios-rich-no-image-group » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=radios-group--radios-rich-no-image-group&nav=0&globals=theme%3Alight)*

### Tailles

Le bouton radio est proposé en taille MD par défaut (24px) afin d’optimiser son ergonomie et son accessibilité en ayant une zone cliquable confortable.

*(Démonstration interactive « radios-group--size-md » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=radios-group--size-md&nav=0&globals=theme%3Alight)*

Il existe également une version en taille SM (16 px) correspondant à la taille standard proposée par les navigateurs.

*(Démonstration interactive « radios-group--size-sm » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=radios-group--size-sm&nav=0&globals=theme%3Alight)*

### États

**Etat d’erreur**

L'état d’erreur est signalé par un changement de couleur ainsi que l’affichage d’une ligne rouge (cf. couleurs fonctionnelles : le rouge est la couleur de l’état erreur) et d’un message d’erreur en-dessous du composant.

*(Démonstration interactive « radios-group--status-error » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=radios-group--status-error&nav=0&globals=theme%3Alight)*

**Etat de succès**

L'état de succès est signalé par un changement de couleur ainsi que l’affichage d’une ligne verte (cf. couleurs fonctionnelles : le vert est la couleur de l’état succès) et d’un message de succès en-dessous du composant.

*(Démonstration interactive « radios-group--status-valid » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=radios-group--status-valid&nav=0&globals=theme%3Alight)*

**Etat désactivé**

L'état désactivé indique que l’utilisateur ne peux pas interagir avec le bouton radio.

*(Démonstration interactive « radios-group--disabled » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=radios-group--disabled&nav=0&globals=theme%3Alight)*

### **Personnalisation**

Les boutons radio ne sont pas personnalisables. Toutefois, certains éléments sont optionnels - voir [la structure du composant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio/design-du-bouton-radio#bouton-radio) .

> **À faire :** Utiliser uniquement la couleur bleu pour les boutons radio.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/radio/design/custom/do-1.png)

> **À ne pas faire :** Ne pas personnaliser la couleur des boutons radio.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/radio/design/custom/dont-1.png)

> **À faire :** Utiliser uniquement une typographie noire.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/radio/design/custom/do-2.png)

> **À ne pas faire :** Ne pas personnaliser la couleur des textes.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/radio/design/custom/dont-2.png)

#### Contenu associé

- **[Case à cocher](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher)**  
  Présentation du composant Case à cocher permettant à l’usager de sélectionner une ou plusieurs options dans une liste de manière indépendante.

- **[Champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)**  
  Présentation du composant Champ de saisie permettant à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.

- **[Liste déroulante](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante)**  
  Présentation du composant Liste déroulante permettant à l’usager de sélectionner une option unique parmi un ensemble de choix dans un espace limité.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio/code-du-bouton-radio

### HTML

#### Structure du composant

Le composant Bouton radio, ci-après nommé **Radio** , est un élément interactif permettant de sélectionner une seule option parmi un groupe d'options. Il n'est pas utilisé seul, mais toujours dans un ensemble de radios. Un radio seul correspond en fait à une **option** .

Sa structure est la suivante :

- Le Radio doit être contenu dans un élément HTML `<div>` défini par la classe `fr-radio-group`.
- Le Radio est un élément HTML `<input>` de type `radio` défini par la classe `fr-radio`.
- Le radio doit être associé à un libellé `<label>` avec la classe `fr-label`.
- Une description additionnelle de l'option, optionnelle, peut être ajoutée dans le label, elle est définie par un élément `<span>` et la classe utilitaire `fr-hint-text`.

**Exemple de structure HTML simple**

```html
<div class="fr-radio-group">
    <input id="radio" type="radio" name="radio" aria-describedby="radio-messages">
    <label class="fr-label" for="radio">
        Libellé bouton radio
        <span class="fr-hint-text">Description optionnelle</span>
    </label>
</div>
```

#### Groupe de radios

Un bouton radio seul ne fait pas sens, il doit **toujours être dans un ensemble de boutons radio** , pour cela, utilisez un élément `<fieldset>` avec une légende `<legend>`. Cela permet de structurer les options de manière accessible.

- L'élément `<fieldset>` est défini par la classe `fr-fieldset`.
- La légende `<legend>` est définie par la classe `fr-fieldset__legend`. Par défaut une légende sera en gras car le fieldset est utilisé pour regrouper plusieurs champs ayant chacun un label. Dans le cas des radios, la légende est visuellement perçue comme le label du groupe de radios. On ajoutera donc la classe `fr-fieldset__legend--regular` pour repasser la légende sur une graisse standard.
- Une description additionnelle pour la légende - optionnelle - peut être ajoutée dans la légende, elle est définie par un élément `<span>` et la classe utilitaire `fr-hint-text`.
- Chaque élément de radio est contenu dans un élément `<div>` défini par la classe `fr-fieldset__element`. Ces éléments peuvent être placés en ligne avec la classe `fr-fieldset__element--inline`.
- L'ensemble de radios, représenté par un fieldset, peut contenir un message d'erreur ou succès via un bloc `fr-messages-group`.

**Exemple de groupe de radios**

#### Déplier pour voir le code

```html
<fieldset class="fr-fieldset" aria-labelledby="radio-legend radio-messages">
    <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="radio-legend">
        Légende pour l’ensemble des éléments
    </legend>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input value="1" type="radio" id="radio-1" name="radio">
            <label class="fr-label" for="radio-1">
                Libellé bouton radio
            </label>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input value="2" type="radio" id="radio-2" name="radio">
            <label class="fr-label" for="radio-2">
                Libellé bouton radio
            </label>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input value="3" type="radio" id="radio-3" name="radio">
            <label class="fr-label" for="radio-3">
                Libellé bouton radio
            </label>
        </div>
    </div>
    <div class="fr-messages-group" id="radio-messages" aria-live="polite">
    </div>
</fieldset>
```

#### Bouton radio riche

Le composant bouton radio propose une variante de bouton radio riche. Cette variante permet d'ajouter une bordure et un pictogramme, optionnel. La différence se caractérise par la classe `fr-radio-rich` et l'ajout d'un élément `<div>` de classe `fr-radio-rich__pictogram` contenant un pictogramme SVG.

Le regroupement de radios riches se fait de la même manière que pour les radios simples.

**Exemple de bouton radio riche**

```html
<div class="fr-radio-group fr-radio-rich">
    <input value="1" type="radio" id="radio-rich-1" name="radio-rich">
    <label class="fr-label" for="radio-rich-1">
        Libellé bouton radio
    </label>
    <div class="fr-radio-rich__pictogram">
        <svg aria-hidden="true" class="fr-artwork" viewBox="0 0 80 80" width="80px" height="80px">
            <use class="fr-artwork-decorative" href="../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-decorative"></use>
            <use class="fr-artwork-minor" href="../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-minor"></use>
            <use class="fr-artwork-major" href="../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-major"></use>
        </svg>
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
| Radio | Oui |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/radio/radio.min.css" rel="stylesheet">
```

#### Variante de taille

Le composant Bouton radio propose une variante de taille pour s'adapter à différents contextes d'utilisation. Pour appliquer une variante de taille, ajoutez une des classes suivantes à l'élément `<div class="fr-radio-group">` :

- Par défaut : Taille MD.
- `fr-radio-group--sm` : Taille SM.

#### Variantes du radio bouton riche

La variante de bouton radio riche est définie par la classe `fr-radio-rich`. Pour ajouter un pictogramme, ajoutez un élément `<div>` de classe `fr-radio-rich__pictogram` contenant un pictogramme SVG. Le pictogramme doit être ajouté avec ses 3 parties : `fr-artwork-decorative`, `fr-artwork-minor` et `fr-artwork-major`. La partie mineur peut être accentuée via les classes utilitaires d'artwork `fr-artwork--NOM-COULEUR`, ex : fr-artwork--green-emeraude. Voir la [documentation des pictogrammes](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/pictogramme) pour plus d'informations.

Il est aussi possible d'utiliser cette variante **sans pictogramme** . Il suffit pour cela de ne pas ajouter l'élément `<div>` de classe `fr-radio-rich__pictogram`.

Les boutons radios riches sont aussi disponibles en taille SM et MD.

#### Variantes d'états

Les boutons radios étant toujours utilisés en groupe, les états d'erreur/succès sont gérés au niveau du groupe. Pour ajouter un état à un bouton radio, ajoutez une des propriétés suivantes à l'élément `<fieldset class="fr-fieldset">` :

- La classe `fr-fieldset--error` : Indique une erreur.
- La classe `fr-fieldset--valid` : Indique un succès.
- L'attribut `disabled` : Indique un état désactivé.

Un message d'erreur ou de succès doit être ajouté dans un bloc `fr-messages-group` à la fin du fieldset et doit être lié au fieldset via un attribut `aria-describedby`.

**Exemple de groupe de radios avec erreur**

#### Déplier pour voir le code

```html
<fieldset class="fr-fieldset fr-fieldset--error" role="group" aria-labelledby="radio-legend radio-messages">
    <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="radio-legend">
        Légende pour l’ensemble des éléments en erreur
    </legend>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input value="1" type="radio" id="radio-1" name="radio">
            <label class="fr-label" for="radio-1">
                Libellé bouton radio 1
            </label>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input value="2" type="radio" id="radio-2" name="radio">
            <label class="fr-label" for="radio-2">
                Libellé bouton radio 2
            </label>
        </div>
    </div>
    <div class="fr-messages-group" id="radio-messages" aria-live="polite">
        <p class="fr-message fr-message--error" id="radio-message-error">Texte d’erreur</p>
    </div>
</fieldset>
```

**Exemple de groupe de radios avec succès**

#### Déplier pour voir le code

```html
<fieldset class="fr-fieldset fr-fieldset--valid" role="group" aria-labelledby="radio-legend radio-messages">
    <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="radio-legend">
        Légende pour l’ensemble des éléments en succès
    </legend>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input value="1" type="radio" id="radio-1" name="radio">
            <label class="fr-label" for="radio-1">
                Libellé bouton radio 1
            </label>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input value="2" type="radio" id="radio-2" name="radio">
            <label class="fr-label" for="radio-2">
                Libellé bouton radio 2
            </label>
        </div>
    </div>
    <div class="fr-messages-group" id="radio-messages" aria-live="polite">
        <p class="fr-message fr-message--error" id="radio-message-error">Texte de succès</p>
    </div>
</fieldset>
```

**Exemple de groupe de radios désactivés**

#### Déplier pour voir le code

```html
<fieldset class="fr-fieldset" disabled role="group" aria-labelledby="radio-legend radio-messages">
    <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="radio-legend">
        Légende pour l’ensemble des éléments désactivés
    </legend>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input value="1" type="radio" id="radio-1" name="radio">
            <label class="fr-label" for="radio-1">
                Libellé bouton radio 1
            </label>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input value="2" type="radio" id="radio-2" name="radio">
            <label class="fr-label" for="radio-2">
                Libellé bouton radio 2
            </label>
        </div>
    </div>
    <div class="fr-messages-group" id="radio-messages" aria-live="polite">
    </div>
</fieldset>
```

---

### JavaScript

Le composant Bouton radio **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+radio+)

#### [v1.15.3](https://github.com/GouvernementFR/dsfr/releases/tag/v1.15.3) - 8 septembre 2026

- **[correction de la propriété storybook pictogramName](https://github.com/GouvernementFR/dsfr/pull/1520)**  
  #1520  
  - Passage de la propriété pictogramName d'une string à un select listant tous les pictogrammes  
  🐛 fix  
  tile radio

#### [v1.15.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.15.0) - 17 juillet 2026

- **[changement de selecteur des input+label](https://github.com/GouvernementFR/dsfr/pull/1380)**  
  #1380  
  - Rend le sélecteur du label qui suit les inputs de type radio/checkbox moins sensible à la structure du DOM.
  - Utilisation d'un "~" plutot que "+".
  - Impacte les composants radio, checkbox, password, segmented, form  
  🐛 fix  
  checkbox radio

#### [v1.13.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.13.0) - 4 décembre 2024

- **[radio riche sans pictogramme compact](https://github.com/GouvernementFR/dsfr/pull/1047)**  
  #1047  
  - modification du bouton radio pour une version compacte du radio riche sans pictogramme  
  ✨ feat  
  radio

#### [v1.11.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.0) - 11 décembre 2023

- **[tokens de couleur](https://github.com/GouvernementFR/dsfr/pull/760)**  
  #760  
  - mise à jour des tokens de couleurs sur checkbox, radio, radio-rich, toggle  
  🐛 fix  
  radio radio-rich toggle checkbox

#### [v1.10.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.10.1) - 4 septembre 2023

- **[correctif couleur manquante](https://github.com/GouvernementFR/dsfr/pull/757)**  
  #757  
  - Erreur dans le build du CSS suite au manque d'une couleur  
  🐛 fix  
  radio

#### [v1.10.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.10.0) - 19 juillet 2023

- **[radio rich sans images & pictogram à la place d'img](https://github.com/GouvernementFR/dsfr/pull/540)**  
  #540  
  Les radios riches doivent utiliser des pictogrammes et non des images :  
  - Retrait des images
- Ajout de pictogramme  
  Le snippet :  
  <div class="fr-radio-group fr-radio-rich"> <input value="1" type="radio" id="radio-rich-1" name="radio-rich"> <label class="fr-label" for="radio-rich-1"> Libellé bouton radio </label> <div class="fr-radio-rich__img"> <img src="../../../example/img/placeholder.1x1.png" alt="[À MODIFIER - vide ou texte alternatif de l’image]" /> </div> </div>  
  DEVIENT :  
  <div class="fr-radio-group fr-radio-rich"> <input value="1" type="radio" id="radio-rich-1" name="radio-rich"> <label class="fr-label" for="radio-rich-1"> Libellé bouton radio </label> <div class="fr-radio-rich__pictogram"> <svg aria-hidden="true" class="fr-artwork" viewBox="0 0 80 80" width="80px" height="80px"> <use class="fr-artwork-decorative" href="../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-decorative"></use> <use class="fr-artwork-minor" href="../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-minor"></use> <use class="fr-artwork-major" href="../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-major"></use> </svg> </div> </div>  
  Remplacer buildings/city-hall par la catégorie et le nom du pictogramme désiré  
  Breaking change:  
  `fr-radio-rich__img` devient `fr-radio-rich__pictogram`  
  ✨ feat 💥 Breaking change  
  radio

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

#### [v1.3.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.3.0) - 18 janvier 2022

- **[sup sub exemple](https://github.com/GouvernementFR/dsfr/pull/188)**  
  #188  
  fix  
  radio

#### [v1.2.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.2.0) - 17 novembre 2021

- **[bordure sur la classe radio-rich__img](https://github.com/GouvernementFR/dsfr/pull/122)**  
  #122  
  fix  
  radio

##### Contenu associé

- **[Case à cocher](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher)**  
  Présentation du composant Case à cocher permettant à l’usager de sélectionner une ou plusieurs options dans une liste de manière indépendante.

- **[Champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)**  
  Présentation du composant Champ de saisie permettant à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.

- **[Liste déroulante](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante)**  
  Présentation du composant Liste déroulante permettant à l’usager de sélectionner une option unique parmi un ensemble de choix dans un espace limité.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio/accessibilite-du-bouton-radio

### Accessibilité

Le composant **Bouton radio** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

#### Interactions clavier

Au passage du focus, le bouton radio actif reçoit le focus. Si aucun radio du groupe n’est sélectionné, c’est le premier radio de l’ensemble qui obtient le focus. Lorsque le focus est positionné sur un radio :

- `Espace` : Sélectionne le radio s’il n’est pas déjà sélectionné.
- `Flèche droite` ou `Flèche bas` : place le focus sur le prochain radio de l'ensemble, décoche le radio précédent s’il est sélectionné et coche le radio qui reçoit le focus. Si le focus est sur le dernier radio de l'ensemble, place le focus sur le premier radio de l'ensemble.
- `Flèche gauche` ou `Flèche haut` : place le focus sur le radio précédent de l’ensemble, décoche le radio précédemment sélectionné et coche le radio qui reçoit le focus. Si le focus est sur le premier radio de l'ensemble, place le focus sur le dernier radio de l’ensemble.

#### Règles d’accessibilité

##### Intitulé pertinent : nom accessible

Un bouton radio doit avoir une **étiquette pertinente** . On doit comprendre l’option sans ambiguïté.

Son nom accessible est calculé par ordre de priorité à partir de :

- l’attribut `aria-labelledby`,
- l’attribut `aria-label`,
- l’élément `<label>`,
- l’attribut `title` en l’absence d’une autre méthode de nommage.

**Privilégier l’élément `<label>`** pour nommer le composant.

> **Avertissement**
> Le RGAA exige une **liaison explicite** entre l’attribut `for` de l’élément `<label>` et l'attribut `id` du bouton radio.
> 
> L’attribut `for` du label doit correspondre à l'attribut `id` du bouton radio. La valeur de l’attribut `id` doit être unique dans la page.

La liaison explicite `for`/`id` permet :

- d’assurer une compatibilité avec l’ensemble des technologies d’assistance (ex. le contrôle vocal),
- de cocher ou décocher le bouton radio en cliquant sur l’étiquette et ainsi d’étendre la zone de clic.

##### Étiquette visible et accolée

L’étiquette est visible et accolée au bouton radio.

##### État désactivé

> **Attention**
> **L’état désactivé d’un bouton radio peut poser des problèmes d’utilisabilité et d’accessibilité pour les personnes handicapées** (personnes déficientes visuelles ainsi que les personnes qui ont un handicap cognitif ou mental).

La bordure et l’étiquette du bouton radio désactivé sont insuffisamment contrastées. Il ne s’agit néanmoins pas d’une non-conformité au RGAA (cas particulier).

##### Message d’information, d’avertissement ou d’erreur

Il existe différentes méthodes pour gérer les messages d’information, d’avertissement ou d’erreur d’un formulaire de manière accessible selon le contexte.

Il est possible d’indiquer l’information, l’avertissement ou l’erreur :

- dans l’étiquette du champ,
- dans un passage de texte avant le formulaire,
- dans un passage de texte relié au champ de saisie avec l’attribut `aria-describedby`,
- avec une live region : `role="alert"`, `role="status"`, `aria-live="assertive",
   aria-live="polite"` (dans certains contextes uniquement).

##### Champs obligatoires

- Ajouter une mention visible pour tout le monde au début du formulaire et utiliser l’attribut `required` pour indiquer que sélectionner un bouton radio est obligatoire.

##### Regroupement des boutons radio

- Les boutons radio doivent être regroupés dans un élément `<fieldset>` avec une légende `<legend>`.
  - La **légende** doit être visible, explicite et décrire le groupe d'options. Elle ne doit pas être en gras puisqu’elle n’est pas considérée ici comme le titre d’un regroupement de champs mais comme le libellé de l'ensemble d'options.
  - Si le **fieldset contient des messages** d’erreur, d'informations ou de succès, il doit être associé à un attribut `aria-labelledby` pour lier la légende et les messages. Les id des éléments doivent être séparés par un espace. Il faudra également ajouter l’attribut `role="group"` à l’élément `<fieldset>` pour améliorer le rendu des technologies d’assistance.
- **Les radios d’un groupe sont liés** par leur attribut `name`. Les radios d’un même groupe doivent avoir le même attribut `name`. Cela permet notamment aux personnes handicapées motrices de ne pas avoir à tabuler sur chaque option.

##### Bouton radio riche

Les images des boutons radio riches doivent être décoratives.

##### Contrastes de couleurs

Par défaut, le composant Bouton radio est suffisamment contrasté en thème clair et en thème sombre.

**Contrastes par défaut**

| Thème | Bordure | Point | Étiquette |
|---|---|---|---|
| **Thème clair** | 14,9:1 | 14,9:1 | 18,1:1 |
| **Thème sombre** | 5,8:1 | 5,8:1 | 18,1:1 |

En cas de succès ou d’erreur, le ratio de contraste de la bordure et celui de l’étiquette sont de 5,8 en thème clair et sombre.

---

#### Restitution par les lecteurs d’écran

Par défaut, les lecteurs d’écran restituent le **nom, la description, l’état et le type** . L’ordre peut varier en fonction des lecteurs d’écran et de leur configuration.

L’attribut `disabled` est restitué différemment selon les lecteurs d’écran :

- VoiceOver macOS et iOS : « estompé »
- NVDA et JAWS : « bouton non disponible »
- Narrateur et Talkback : « bouton désactivé »

---

#### Critères RGAA applicables

- **Couleurs** : 3.2, 3.3
- **Présentation de l’information** : 10.1, 10.2, 10.4, 10.5, 10.7, 10.11, 10.12
- **Formulaires** : 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7, 11.9
- **Navigation** : 12.9

---

#### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Spécification HTML – élément input](https://html.spec.whatwg.org/#the-input-element)
- [Spécification HTML – type radio](https://html.spec.whatwg.org/#checkbox-state-(type=radio))
- [Live regions ARIA : bonnes et mauvaises pratiques](https://access42.net/quand-utiliser-live-regions-aria/)

###### Contenu associé

- **[Case à cocher](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher)**  
  Présentation du composant Case à cocher permettant à l’usager de sélectionner une ou plusieurs options dans une liste de manière indépendante.

- **[Champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)**  
  Présentation du composant Champ de saisie permettant à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.

- **[Liste déroulante](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante)**  
  Présentation du composant Liste déroulante permettant à l’usager de sélectionner une option unique parmi un ensemble de choix dans un espace limité.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio/demonstration-du-bouton-radio

#### Contenu associé

- **[Case à cocher](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher)**  
  Présentation du composant Case à cocher permettant à l’usager de sélectionner une ou plusieurs options dans une liste de manière indépendante.

- **[Champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)**  
  Présentation du composant Champ de saisie permettant à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.

- **[Liste déroulante](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante)**  
  Présentation du composant Liste déroulante permettant à l’usager de sélectionner une option unique parmi un ensemble de choix dans un espace limité.
