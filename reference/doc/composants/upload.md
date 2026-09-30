# Ajout de fichier

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/ajout-de-fichier · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/ajout-de-fichier/design-de-l-ajout-de-fichier · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/ajout-de-fichier/code-de-l-ajout-de-fichier · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/ajout-de-fichier/accessibilite-de-l-ajout-de-fichier · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/ajout-de-fichier/demonstration-de-l-ajout-de-fichier
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

L’ajout de fichier est un élément d’interaction avec l’interface qui permet à l’usager de sélectionner et d’envoyer un ou plusieurs fichiers.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/ajout-de-fichier

*(Démonstration interactive « upload--upload » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=upload--upload&nav=0&globals=theme%3Alight)*

### Quand utiliser ce composant ?

Proposer l’ajout de fichier uniquement si l’envoi d’un ou plusieurs fichier est essentiel à votre service.

### Comment utiliser ce composant ?

- **Intégrer l’ajout de fichier à un formulaire** pour permettre le chargement de fichiers.

> **À faire :** Cas d’usage au sein d’un formulaire.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/upload/use/do-1.png)

- **Afficher le format, poids et autres consignes pour que le fichier soit conforme** à ce qui est attendu.
- **Préciser les erreurs rencontrées** lors de l’envoi de fichier (format, poids etc.)

> **À faire :** Traduire précisément l’erreur pour qu’elle soit clairement identifiable.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/upload/use/do-2.png)

- **Utiliser l’ajout de fichiers multiples** lorsque l’usager doit sélectionner des fichiers de mêmes natures et respectant les mêmes contraintes.

> **À faire :** Utiliser l’ajout multiple de fichiers si les fichiers à sélectionner sont de mêmes natures et/ou respectent les mêmes contraintes.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/upload/use/do-3.png)

> **À ne pas faire :** Ne pas proposer plusieurs champs d’ajout de fichier si les fichiers à sélectionner sont de mêmes natures et/ou respectent les mêmes contraintes.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/upload/use/dont-1.png)

- **Préférer plusieurs champs d’ajout de fichier unique** lorsque l’usager doit sélectionner des fichiers de différentes natures, avec des contraintes spécifiques.

> **À faire :** Préférer plusieurs champs d’ajout de fichier si les fichiers à sélectionner sont de différentes natures et/ou ont des contraintes spécifiques.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/upload/use/do-4.png)

### Règles éditoriales

Il est à noter que le navigateur ajoute automatiquement un message à coté du bouton d’ajout de fichier. Ce message n’est pas modifiable et dépend du navigateur utilisé.

Ce message indique le nom du fichier ajouté ou le nombre de fichiers ajoutés lorsqu’il y en a plusieurs.

La langue de ce texte dépend de la langue configurée sur le navigateur de l’utilisateur.

#### Contenu associé

- **[Formulaire](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/formulaire)**  
  Présentation du composant Formulaire permettant l'agencement des éléments de saisie de données et des messages d'état.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/ajout-de-fichier/design-de-l-ajout-de-fichier

![Anatomie de l'interrupteur](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/upload/design/anatomy/anatomy-1.png)

1. Un libellé, exprimant clairement l’action attendue pour l’usager (par défaut “Ajouter un fichier") — Obligatoire
2. Un texte explicatif, précisant les contraintes au niveau du ou des fichiers attendus (format, poids, nombre de fichiers possible etc.) — Obligatoire
3. Un bouton “Parcourir”, le texte dépendant du navigateur utilisé — Obligatoire
4. Le nom du ou des fichiers, par défaut “Aucun fichier sélectionné” — Obligatoire

Au clic sur “Parcourir”, la boite de dialogue de sélection de fichier s’affiche. Les noms des fichiers sélectionnés viennent s’afficher à la place du texte par défaut.

### Variations

**Ajout multiple**

Utiliser l’ajout multiple dès lors que l’usager doit sélectionner plus d’un fichier.

*(Démonstration interactive « upload--multiple » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=upload--multiple&nav=0&globals=theme%3Alight)*

### Tailles

L’ajout de fichier est disponible dans une seule taille. Sa largeur n’est pas contrainte, toutefois, dans le respect des bonnes pratiques UX, il est recommandé de conserver les éléments textuels sur une largeur de 8 colonnes maximum.

### États

**Etat d’erreur**

L'état d’erreur est signalé par un changement de couleur (cf. couleurs système : le rouge est la couleur de l’état erreur) et l’affichage d’un message d’erreur en-dessous du composant.

*(Démonstration interactive « upload--error » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=upload--error&nav=0&globals=theme%3Alight)*

**Etat désactivé**

L’état désactivé indique que l'usager ne peut pas interagir avec le bouton.

*(Démonstration interactive « upload--disabled » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=upload--disabled&nav=0&globals=theme%3Alight)*

> **Information**
> **N’utiliser cet état que très ponctuellement** , pour indiquer à l’usager qu’il doit procéder à une action en amont par exemple.

### Personnalisation

L’ajout de fichier n’est pas personnalisable.

> **À ne pas faire :** Ne pas personnaliser la couleur du bouton par défaut.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/upload/design/custom/dont-1.png)

> **À ne pas faire :** Ne pas personnaliser la couleur des textes d’accompagnement.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/upload/design/custom/dont-2.png)

#### Contenu associé

- **[Formulaire](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/formulaire)**  
  Présentation du composant Formulaire permettant l'agencement des éléments de saisie de données et des messages d'état.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/ajout-de-fichier/code-de-l-ajout-de-fichier

### HTML

#### Structure du composant

Le composant **Ajout de fichier** permet aux utilisateurs de sélectionner et envoyer un ou plusieurs fichiers.

Sa structure est la suivante :

- Le composant ajout de fichier est un élément HTML `<div>` défini par la classe `fr-upload-group` et contenant :
  - Le libellé est un élément HTML de type `<label>`, obligatoire :
    - Défini par la classe `fr-label`.
    - Il dispose de l'attribut `for` dont la valeur est égale à l'ID du champ de fichier.
    - Il doit inclure un texte explicatif, obligatoire, dans un élément HTML `<span>` défini par la classe `fr-hint-text`.
  - Le champ de fichier est un élément HTML `<input>` de type `file`, obligatoire :
    - Défini par la classe `fr-upload`.
    - Il dispose d'un attribut `id` obligatoire, pour être lié au libellé et d'un attribut `name` dont la valeur est libre.
    - Il peut disposer d'un attribut `aria-describedby` dont la valeur est égale à l'ID du groupe de messages.
    - Il peut disposer d'un attribut `multiple` dans le cas d'un composant ajout de fichiers multiples.
  - Le groupe de messages est un élément HTML `<div>` défini par la classe `fr-messages-group`.
    - Il dispose d'un attribut `id` pour être lié au champ de fichier et d'un attribut `aria-live="polite"`.
    - Le groupe de messages peut contenir un message d'erreur de type `<p>` défini par les classes `fr-message` et `fr-message--error`.

**Exemple de structure HTML**

```html
<div class="fr-upload-group">
    <label class="fr-label" for="file-upload">
        Ajouter un fichier
        <span class="fr-hint-text">Indication : taille maximale : 500 Mo. Formats supportés : jpg, png, pdf. Plusieurs fichiers possibles. Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
    </label>
    <input class="fr-upload" aria-describedby="file-upload-messages" type="file" id="file-upload" name="file-upload">
    <div class="fr-messages-group" id="file-upload-messages" aria-live="polite"></div>
</div>
```

> **Information**
> L'ajout d'un attribut `accept` sur l'`<input>` permet de restreindre les formats de fichiers sélectionnables par l'usager. Il est recommandé d'utiliser cet attribut pour indiquer les formats attendus (par exemple, `accept=".jpg,.png,.pdf"`). Cet attribut ne peut se substituer à la validation côté serveur, mais il améliore l'expérience utilisateur en filtrant les fichiers proposés.

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
| Upload | Oui |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/form/form.min.css" rel="stylesheet">
<link href="dist/component/upload/upload.min.css" rel="stylesheet">
```

#### Variante d'ajout de fichier avec erreur

Le composant Ajout de fichier peut être affiché en état d'erreur avec l'utilisation de la classe `fr-upload-group--error` et comporter dans le groupe de messages un message d'erreur.

**Exemple de variante d'ajout de fichier avec erreur**

```html
<div class="fr-upload-group fr-upload-group--error">
    <label class="fr-label" for="file-upload-with-error">
        Ajouter un fichier
        <span class="fr-hint-text">Indication : taille maximale : 500 Mo. Formats supportés : jpg, png, pdf. Plusieurs fichiers possibles. Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
    </label>
    <input class="fr-upload" aria-describedby="file-upload-with-error-messages" type="file" id="file-upload-with-error" name="file-upload-with-error">
    <div class="fr-messages-group" id="file-upload-with-error-messages" aria-live="polite">
        <p class="fr-message fr-message--error">Format de fichier non supporté</p>
    </div>
</div>
```

#### Variante d'ajout de fichiers multiples

Afin de pouvoir sélectionner plusieurs fichiers, il faut ajouter l'attribut `multiple` à la balise input

**Exemple de variante d'ajout de fichiers multiples**

```html
<div class="fr-upload-group">
    <label class="fr-label" for="file-upload-multiple">
        Ajouter des fichiers
        <span class="fr-hint-text">Indication : taille maximale : 500 Mo. Formats supportés : jpg, png, pdf. Plusieurs fichiers possibles. Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
    </label>
    <input class="fr-upload" aria-describedby="file-upload-multiple-messages" multiple type="file" id="file-upload-multiple" name="file-upload-multiple">
    <div class="fr-messages-group" id="file-upload-multiple-messages" aria-live="polite">
    </div>
</div>
```

#### Variante d'ajout de fichier désactivé

Le composant Ajout de fichier peut être désactivé avec l'utilisation de la classe `fr-upload-group--disabled` et comporter dans le groupe de messages un message d'erreur.

**Exemple de variante d'ajout de fichier désactivé**

```html
<div class="fr-upload-group fr-upload-group--disabled">
    <!-- Contenu de l'ajout de fichier désactivé -->
</div>
```

---

### JavaScript

Le composant Ajout de fichier **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+upload)

#### [v1.8.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.8.0) - 27 octobre 2022

- **[error & disabled](https://github.com/GouvernementFR/dsfr/pull/428)**  
  #428  
  fix  
  form upload

#### [v1.2.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.2.1) - 29 novembre 2021

- **[ajout aria described](https://github.com/GouvernementFR/dsfr/pull/141)**  
  #141  
  fix  
  upload

#### [v1.2.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.2.0) - 17 novembre 2021

- **[disabled input-upload & curseur pointeur](https://github.com/GouvernementFR/dsfr/pull/102)**  
  #102  
  fix  
  upload

- **[ajout du composant upload](https://github.com/GouvernementFR/dsfr/pull/43)**  
  #43  
  feat  
  upload

##### Contenu associé

- **[Formulaire](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/formulaire)**  
  Présentation du composant Formulaire permettant l'agencement des éléments de saisie de données et des messages d'état.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/ajout-de-fichier/accessibilite-de-l-ajout-de-fichier

Le composant **Ajout de fichier** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Lorsque le focus est positionné sur le champ d’ajout de fichier :

- `Entrée` ou `Espace` : ouvre la boîte de dialogue d’ajout de fichier.
- `Échap` : referme la boîte de dialogue d’ajout de fichier.

### Règles d’accessibilité

- Le champ d’ajout de fichier possède un nom accessible avec un `label` relié au champ avec une liaison entre l’attribut `for` et l’attribut id du champ d'ajout de fichier.
- Un **message** d'erreur, d'information, ou de succès peut être associé au champ d'ajout de fichier. Son attribut `id` doit être associé à l'attribut `aria-describedby` du champ d'ajout de fichier.

#### Contrastes de couleurs

Le composant est suffisamment contrasté en thème clair et en thème sombre.

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Ajout de fichier.

> **Information**
> Avec les lecteurs d’écran mobiles, le focus est repositionné en haut de page au lieu d’être repositionné sur le composant.

---

### Critères RGAA applicables

- **Couleurs :** 3.2
- **Présentation de l’information :** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Formulaires :** 11.1, 11.2, 11.4, 11.10, 11.11
- **Navigation :** 12.8, 12.9
- **Consultation :** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Input type file](https://html.spec.whatwg.org/#file-upload-state-(type=file))

##### Contenu associé

- **[Formulaire](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/formulaire)**  
  Présentation du composant Formulaire permettant l'agencement des éléments de saisie de données et des messages d'état.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/ajout-de-fichier/demonstration-de-l-ajout-de-fichier

*(Démonstration interactive « upload--docs » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=upload--docs&nav=0&globals=theme%3Alight)*

#### Contenu associé

- **[Formulaire](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/formulaire)**  
  Présentation du composant Formulaire permettant l'agencement des éléments de saisie de données et des messages d'état.
