# Liste déroulante

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante/design-de-la-liste-deroulante · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante/code-de-la-liste-deroulante · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante/accessibilite-de-la-liste-deroulante · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante/demonstration-de-la-liste-deroulante
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

La liste déroulante est un élément d’interaction avec l’interface permettant à l’usager de choisir un élément dans une liste donnée.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante

*(Démonstration interactive « select--select » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=select--select&nav=0&globals=theme%3Alight)*

### Quand utiliser ce composant ?

Utiliser la liste déroulante pour permettre à l’usager de sélectionner une unique option dans une liste.

> **Information**
> Bien différencier les listes déroulantes des boutons radio ou cases à cocher. Les listes déroulantes sont à privilégier lorsque l’usager doit choisir un seul élément parmi 6 à 15 choix possibles et que l’espace d’affichage des options est limité.

Évitez l’usage de listes déroulantes lorsqu’elles comportent peu de propositions. Dans ce cas, optez pour [des boutons radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio) , dont la compréhension est plus simple pour les usagers.

Si plusieurs choix sont possibles, optez pour [des cases à cocher](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher) , plus simples à utiliser que l’option multiple de la liste déroulante (nécessitant une combinaison avec la touche ctrl).

### Comment utiliser ce composant ?

- **Contextualiser l’usage de la liste déroulante** , notamment lorsqu’elle est utilisée en dehors d’un panneau de filtres ou d’un formulaire. L’usager doit comprendre l’action proposée.

> **À faire :** Contextualiser l’usage de la liste déroulante afin de permettre à l’usager de comprendre l’action proposée.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/select/use/do-1.png)

### Règles éditoriales

La liste déroulante suit les mêmes règles éditoriales que le composant [bouton radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio) .

#### Contenu associé

- **[Barre de recherche](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/barre-de-recherche)**  
  Présentation du composant Barre de recherche permettant d’accéder rapidement à un contenu via un mot clé ou une phrase.

- **[Bouton radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio)**  
  Présentation du composant Bouton radio permettant à l’usager de sélectionner une option unique parmi un ensemble limité de choix.

- **[Case à cocher](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher)**  
  Présentation du composant Case à cocher permettant à l’usager de sélectionner une ou plusieurs options dans une liste de manière indépendante.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante/design-de-la-liste-deroulante

![Anatomie de la liste déroulante](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/select/design/anatomy/anatomy-1.png)

1. Un libellé — Obligatoire
2. Une description additionnelle — En option
3. Un champ — Obligatoire
4. Un chevron orienté vers le bas, indiquant que la liste se déroule — Obligatoire

### Variations

**Liste déroulante avec texte d’aide**

*(Démonstration interactive « select--hint » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=select--hint&nav=0&globals=theme%3Alight)*

Il est recommandé d’ajouter un texte d’aide sous le libellé de la liste déroulante afin de faciliter le choix de l’usager.

### Tailles

La largeur de la liste déroulante s’adapte à la taille de son conteneur.

### États

**Etat d’erreur**

L'état d’erreur est signalé par un changement de couleur ainsi que l’affichage d’une ligne rouge (cf. couleurs fonctionnelles : le rouge est la couleur de l’état erreur) et d’un message d’erreur en-dessous du composant.

*(Démonstration interactive « select--select » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=select--select&nav=0&args=status%3Aerror&globals=theme%3Alight)*

**Etat de succès**

L'état de succès est signalé par un changement de couleur ainsi que l’affichage d’une ligne verte (cf. couleurs fonctionnelles : le vert est la couleur de l’état succès) et d’un message de succès en-dessous du composant.

*(Démonstration interactive « select--select » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=select--select&nav=0&args=status%3Avalid&globals=theme%3Alight)*

**Etat désactivé**

L'état désactivé indique que l’usager ne peux pas interagir avec la liste déroulante.

*(Démonstration interactive « select--select » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=select--select&nav=0&args=disabled%3Atrue&globals=theme%3Alight)*

Cet état peut être utilisé pour empêcher l'utilisateur d'interagir avec la liste jusqu'à ce qu'une autre action soit terminée.

### Personnalisation

La liste déroulante n’est pas personnalisable.

Toutefois, certains éléments sont optionnels - voir [la structure du composant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante/design-de-la-liste-deroulante#liste-deroulante) .

> **À faire :** Utiliser uniquement une typographie noire.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/select/design/custom/do-1.png)

> **À ne pas faire :** Ne pas personnaliser la couleur des textes.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/select/design/custom/dont-1.png)

#### Contenu associé

- **[Barre de recherche](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/barre-de-recherche)**  
  Présentation du composant Barre de recherche permettant d’accéder rapidement à un contenu via un mot clé ou une phrase.

- **[Bouton radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio)**  
  Présentation du composant Bouton radio permettant à l’usager de sélectionner une option unique parmi un ensemble limité de choix.

- **[Case à cocher](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher)**  
  Présentation du composant Case à cocher permettant à l’usager de sélectionner une ou plusieurs options dans une liste de manière indépendante.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante/code-de-la-liste-deroulante

### HTML

#### Structure du composant

Le composant **Liste déroulante** permet à l'utilisateur de choisir une option parmi une liste déroulante. Sa structure est la suivante :

- La liste déroulante doit être contenue dans un élément HTML `<div>` défini par la classe `fr-select-group`.
- La liste déroulante est un élément HTML `<select>` défini par la classe `fr-select`.
- La liste déroulante doit être associée à un libellé `<label>` avec la classe `fr-label`.
- Une description additionnelle de l'option - optionnelle - peut être ajoutée dans le libellé, elle est définie par un élément `<span>` et la classe utilitaire `fr-hint-text`.
- Chaque option est un élément `<option>` contenu dans le `<select>`.
- Un message d'erreur ou de succès peut être associé à la liste déroulante en utilisant un élément HTML `<div>` avec la classe `fr-messages-group` dans lequel on peut ajouter un message `fr-message`.
  - Son attribut `id` doit être associé à l'attribut `aria-describedby` de la liste déroulante.
  - Ce bloc peut être placé vide et être rempli dynamiquement, auquel cas il doit être annoncé à l'utilisateur en utilisant l'attribut `aria-live="polite"`.

**Exemple de structure HTML simple**

```html
<div class="fr-select-group">
    <label class="fr-label" for="select-hint">
        Libellé pour liste déroulante
        <span class="fr-hint-text">Texte de description additionnel</span>
    </label>
    <select class="fr-select" aria-describedby="select-hint-messages" id="select-hint" name="select-hint">
        <option value="" selected disabled>Sélectionner une option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <div class="fr-messages-group" id="select-hint-messages" aria-live="polite">
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
| Form | Oui |
| Select | Oui |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/form/form.min.css" rel="stylesheet">
<link href="dist/component/select/select.min.css" rel="stylesheet">
```

#### Variantes d'états

Les états d'erreur/succès/désactivé sont gérés au niveau du groupe. Pour ajouter un état à une liste déroulante, ajoutez une des classes suivantes :

- La classe `fr-select-group--error` : Indique une erreur.
- La classe `fr-select-group--valid` : Indique un succès.
- L'attribut `fr-select-group--disabled` : Indique un état désactivé.

Un message d'erreur ou de succès doit être ajouté dans un bloc `fr-messages-group` à la fin du groupe de la liste déroulante et doit être lié à la liste déroulante via un attribut `aria-describedby`.

**Exemple de liste déroulante avec erreur**

#### Déplier pour voir le code

```html
<div class="fr-select-group fr-select-group--error">
    <label class="fr-label" for="select-error">
        Libellé pour liste déroulante
    </label>
    <select class="fr-select" aria-describedby="select-error-messages" id="select-error" name="select-error">
        <option value="" selected disabled>Sélectionner une option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <div class="fr-messages-group" id="select-error-messages" aria-live="polite">
        <p class="fr-message fr-message--error" id="select-error-message-error">Texte d’erreur obligatoire</p>
    </div>
</div>
```

**Exemple de liste déroulante avec succès**

#### Déplier pour voir le code

```html
<div class="fr-select-group fr-select-group--valid">
    <label class="fr-label" for="select-valid">
        Libellé pour liste déroulante
    </label>
    <select class="fr-select" aria-describedby="select-valid-messages" id="select-valid" name="select-valid">
        <option value="" selected disabled>Sélectionner une option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <div class="fr-messages-group" id="select-valid-messages" aria-live="polite">
        <p class="fr-message fr-message--valid" id="select-valid-message-valid">Texte de validation</p>
    </div>
</div>
```

**Exemple de liste déroulante désactivée**

#### Déplier pour voir le code

```html
<div class="fr-select-group fr-select-group--disabled">
    <label class="fr-label" for="select-disabled">
        Libellé pour liste déroulante
    </label>
    <select class="fr-select" aria-describedby="select-disabled-messages" disabled id="select-disabled" name="select-disabled">
        <option value="" selected disabled>Sélectionner une option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <div class="fr-messages-group" id="select-disabled-messages" aria-live="polite">
    </div>
</div>
```

#### Variantes de liste déroulante avec groupe d'options

L'élément HTML `<optgroup>` est utilisé pour regrouper les options associées dans une liste déroulante.

Si vous disposez d’une longue liste d’options, les groupes d’options associées sont plus faciles à gérer pour un utilisateur.

**Exemple de liste déroulante avec groupe d'options**

#### Déplier pour voir le code

```html
<div class="fr-select-group">
    <label class="fr-label" for="select-group">
        Libellé pour liste déroulante
    </label>
    <select class="fr-select" aria-describedby="select-group-messages" id="select-group" name="select-group">
        <option value="" selected disabled>Selectionnez une option</option>
        <optgroup label="Groupe 1">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </optgroup>
        <optgroup label="Groupe 2">
            <option value="5">Option 5</option>
            <option value="6">Option 6</option>
            <option value="7">Option 7</option>
        </optgroup>
    </select>
    <div class="fr-messages-group" id="select-group-messages" aria-live="polite">
    </div>
</div>
```

---

### JavaScript

Le composant Liste déroulante **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+select+)

##### Contenu associé

- **[Barre de recherche](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/barre-de-recherche)**  
  Présentation du composant Barre de recherche permettant d’accéder rapidement à un contenu via un mot clé ou une phrase.

- **[Bouton radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio)**  
  Présentation du composant Bouton radio permettant à l’usager de sélectionner une option unique parmi un ensemble limité de choix.

- **[Case à cocher](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher)**  
  Présentation du composant Case à cocher permettant à l’usager de sélectionner une ou plusieurs options dans une liste de manière indépendante.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante/accessibilite-de-la-liste-deroulante

Le composant **Liste déroulante** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Lorsque le focus est positionné sur la liste déroulante :

- `Flèche bas` : ouvre la liste déroulante et permet de naviguer entre les options.
- `Flèche haut` : ouvre la liste déroulante et permet de naviguer entre les options.
- `Espace` : ouvre la liste déroulante et sélectionne l’option mise en surbrillance.

### Règles d’accessibilité

#### Intitulé pertinent : nom accessible

Une liste déroulante doit avoir une **étiquette pertinente** . On doit en comprendre la fonction sans ambiguïté.

Son nom accessible est calculé par ordre de priorité à partir de :

- l’attribut `aria-labelledby`,
- l’attribut `aria-label`,
- l’élément `<label>`,
- l’attribut `title` en l’absence d’une autre méthode de nommage.

**Privilégier l’élément `<label>`** pour nommer le composant.

> **Avertissement**
> Le RGAA exige une **liaison explicite** entre l’attribut `for` de l’élément `<label>` et l'attribut `id` de la liste déroulante.
> 
> L’attribut `for` du label doit correspondre à l'attribut `id` de la liste déroulante. La valeur de l’attribut `id` doit être unique dans la page.

La liaison explicite `for`/`id` permet d’assurer une compatibilité avec l’ensemble des technologies d’assistance (ex. le contrôle vocal).

#### Étiquette visible et accolée

L’étiquette est visible et accolée à la liste déroulante.

#### État désactivé

> **Attention**
> **L’état désactivé d’une liste déroulante peut poser des problèmes d’utilisabilité et d’accessibilité pour les personnes handicapées** (personnes déficientes visuelles ainsi que les personnes qui ont un handicap cognitif ou mental).

La bordure, la coche et l’étiquette de la liste déroulante désactivée sont insuffisamment contrastées. Il ne s’agit néanmoins pas d’une non-conformité au RGAA (cas particulier).

#### Message d’information, d’avertissement ou d’erreur

Il existe différentes méthodes pour gérer les messages d’information, d’avertissement ou d’erreur d’un formulaire de manière accessible selon le contexte.

Il est possible d’indiquer l’information, l’avertissement ou l’erreur :

- dans l’étiquette du champ,
- dans un passage de texte avant le formulaire,
- dans un passage de texte relié au champ de saisie avec l’attribut `aria-describedby`,
- avec une live region : `role="alert"`, `role="status"`, `aria-live="assertive",
   aria-live="polite"` (dans certains contextes uniquement).

#### Champ obligatoire

Ajouter une mention visible pour tout le monde au début du formulaire et utiliser l’attribut `required` pour indiquer que sélectionner une option est obligatoire.

#### Contrastes de couleurs

Par défaut, le composant Liste déroulante est suffisamment contrasté en thème clair et en thème sombre.

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

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Spécification HTML – élément input](https://html.spec.whatwg.org/#the-input-element)

##### Contenu associé

- **[Barre de recherche](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/barre-de-recherche)**  
  Présentation du composant Barre de recherche permettant d’accéder rapidement à un contenu via un mot clé ou une phrase.

- **[Bouton radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio)**  
  Présentation du composant Bouton radio permettant à l’usager de sélectionner une option unique parmi un ensemble limité de choix.

- **[Case à cocher](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher)**  
  Présentation du composant Case à cocher permettant à l’usager de sélectionner une ou plusieurs options dans une liste de manière indépendante.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante/demonstration-de-la-liste-deroulante

#### Contenu associé

- **[Barre de recherche](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/barre-de-recherche)**  
  Présentation du composant Barre de recherche permettant d’accéder rapidement à un contenu via un mot clé ou une phrase.

- **[Bouton radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio)**  
  Présentation du composant Bouton radio permettant à l’usager de sélectionner une option unique parmi un ensemble limité de choix.

- **[Case à cocher](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher)**  
  Présentation du composant Case à cocher permettant à l’usager de sélectionner une ou plusieurs options dans une liste de manière indépendante.
