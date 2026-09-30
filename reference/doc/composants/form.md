# Formulaire

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/formulaire · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/formulaire/design-du-formulaire · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/formulaire/code-du-formulaire · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/formulaire/accessibilite-du-formulaire · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/formulaire/demonstration-du-formulaire
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/formulaire

Page en cours de création...

#### Contenu associé

- **[Bouton radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio)**  
  Présentation du composant Bouton radio permettant à l’usager de sélectionner une option unique parmi un ensemble limité de choix.

- **[Champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)**  
  Présentation du composant Champ de saisie permettant à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.

- **[Liste déroulante](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante)**  
  Présentation du composant Liste déroulante permettant à l’usager de sélectionner une option unique parmi un ensemble de choix dans un espace limité.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/formulaire/design-du-formulaire

Page en cours de création...

#### Contenu associé

- **[Bouton radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio)**  
  Présentation du composant Bouton radio permettant à l’usager de sélectionner une option unique parmi un ensemble limité de choix.

- **[Champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)**  
  Présentation du composant Champ de saisie permettant à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.

- **[Liste déroulante](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante)**  
  Présentation du composant Liste déroulante permettant à l’usager de sélectionner une option unique parmi un ensemble de choix dans un espace limité.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/formulaire/code-du-formulaire

### HTML

Un **formulaire** permet de collecter des informations de l'utilisateur. Il est composé d'un ou plusieurs champs, et ces informations sont envoyées à un serveur au clic sur un bouton de soumission ou dynamiquement au changement de valeur d'un champ.

Le DSFR propose des styles pour structurer des ensembles de champs de formulaire, la gestion des erreurs, des messages d'aide et des messages de succès.

De la même manière que pour les champs de formulaire unitaires, des états d'erreur et succès ainsi que des messages d'erreur/succès/avertissement/information peuvent être ajoutés à un **ensemble d'éléments** de formulaire (fieldset).

La structure d'un ensemble de champs de formulaire, dans un `<form>` est la suivante :

- Un ensemble de champs de formulaire est défini par un élément `<fieldset>`.
  - Celui-ci doit contenir une légende `<legend>`, obligatoire.
  - Chaque champ de formulaire est contenu dans un élément `<div>` défini par la classe `fr-fieldset__element`. C'est ces éléments qui permettront d'agencer les champs et de gérer les espacements. Ces éléments peuvent être placés en ligne avec la classe `fr-fieldset__element--inline`.
  - Comme pour chaque champ de formulaire, le groupe de champs, représenté par un fieldset, peut contenir un message d'erreur/information/avertissement/succès via un bloc `fr-messages-group`.

**Exemple de structure de formulaire simple**

#### Déplier pour voir le code

```html
<form action="" method="post">
    <fieldset class="fr-fieldset" aria-labelledby="text-legend text-messages">
        <legend class="fr-fieldset__legend" id="text-legend">
            Légende pour l’ensemble des éléments
            <span class="fr-hint-text">Texte de description additionnel</span>
        </legend>
        <div class="fr-fieldset__element">
            <div class="fr-input-group">
                <label class="fr-label" for="text-1">
                    Libellé champ de saisie
                </label>
                <input class="fr-input" name="text-1" id="text-1" type="text">
            </div>
        </div>
        <div class="fr-fieldset__element">
            <div class="fr-input-group">
                <label class="fr-label" for="text-2">
                    Libellé champ de saisie
                </label>
                <input class="fr-input" name="text-2" id="text-2" type="text">
            </div>
        </div>
        <div class="fr-messages-group" id="text-messages" aria-live="polite">
        </div>
    </fieldset>

    <button class="fr-btn" type="submit">
        Enregistrer les informations
    </button>
</form>
```

**Exemple de structure de formulaire en erreur**

#### Déplier pour voir le code

```html
<form action="" method="post">
    <fieldset class="fr-fieldset fr-fieldset--error" aria-labelledby="text-legend text-messages">
        <legend class="fr-fieldset__legend" id="text-legend">
            Légende pour l’ensemble des éléments
        </legend>
        <div class="fr-fieldset__element">
            <div class="fr-input-group">
                <label class="fr-label" for="text-1">
                    Libellé champ de saisie
                </label>
                <input class="fr-input" name="text-1" id="text-1" type="text">
            </div>
        </div>
        <div class="fr-fieldset__element">
            <div class="fr-input-group">
                <label class="fr-label" for="text-2">
                    Libellé champ de saisie
                </label>
                <input class="fr-input" name="text-2" id="text-2" type="text">
            </div>
        </div>
        <div class="fr-messages-group" id="text-messages" aria-live="polite">
            <p class="fr-message fr-message--error">Texte d’erreur obligatoire</p>
        </div>
    </fieldset>

    <button class="fr-btn" type="submit">
        Enregistrer les informations
    </button>
</form>
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

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/form/form.min.css" rel="stylesheet">
```

#### Variantes de fieldset-element

Les éléments de fieldset peuvent être disposés **en ligne** avec la classe `fr-fieldset__element--inline`. Il est aussi possible de définir la disposition en ligne en desktop uniquement `fr-fieldset__element--inline@md` : Disposition en ligne à partir du breakpoint `md` - 48em (768px).

D'autres classes sont disponibles pour gérer la **taille des éléments** , notamment pour les champs de saisie :

- La classe `fr-fieldset__element--inline-grow` : La taille du champ s'adapte à la largeur restante.
- La classe `fr-fieldset__element--postal` : Taille d'un champ code postal (240px).
- La classe `fr-fieldset__element--number` : Taille d'un champ numéro de rue, jour, ou mois - 5 chiffres max (80px).
- La classe `fr-fieldset__element--year` : Taille d'un champ année (112px).

**Exemple de variantes de fieldset-element**

```html
<div class="fr-fieldset__element fr-fieldset__element--number">
    <!-- Champs numéro de rue -->
</div>
<div class="fr-fieldset__element fr-fieldset__element--inline fr-fieldset__element--inline-grow">
    <!-- Champs nom de rue sur le reste de la ligne -->
</div>
<div class="fr-fieldset__element fr-fieldset__element--postal">
    <!-- Champs code postal, à la ligne -->
</div>
<div class="fr-fieldset__element fr-fieldset__element--inline@md">
    <!-- Champs ville, en ligne en desktop et à la ligne en mobile -->
</div>
<div class="fr-fieldset__element fr-fieldset__element--year">
    <!-- Champs année de naissance -->
</div>
```

#### Variantes d'états

Les formulaires peuvent avoir différents états définis sur le fieldset :

- La classe `fr-fieldset--error` : Groupe de champs **en erreur** .
- La classe `fr-fieldset--success` : Groupe de champs **validé** .
- L'attribut `disabled` : Groupe de champs **désactivé** .

**Exemples de variantes d'états**

```html
<fieldset class="fr-fieldset fr-fieldset--error">
    <!-- Champs en erreur -->
</fieldset>
<fieldset class="fr-fieldset fr-fieldset--success">
    <!-- Champs validés -->
</fieldset>
```

#### Variantes de messages

Les groupes de champs peuvent contenir des messages d'erreur, d'information, d'avertissement ou de succès via un bloc `fr-messages-group`. Ce bloc peut contenir un ou plusieurs messages, définis par la classe `fr-message` et une variante de type de message :

- La classe `fr-message--error` : Message d' **erreur** .
- La classe `fr-message--info` : Message d' **information** .
- La classe `fr-message--warning` : Message d' **avertissement** .
- La classe `fr-message--success` : Message de **succès** .

Dans le cas d'un groupe de champs en état d'erreur ou de succès, un message d'erreur ou de succès est obligatoire.

**Exemples de variantes de messages**

```html
<div class="fr-messages-group" id="text-messages" aria-live="polite">
    <p class="fr-message fr-message--error">Texte d’erreur obligatoire</p>
    <p class="fr-message fr-message--info">Texte d’information</p>
    <p class="fr-message fr-message--warning">Texte d’avertissement</p>
    <p class="fr-message fr-message--success">Texte de succès</p>
</div>
```

---

### JavaScript

Les formulaires **ne nécessitent pas l'utilisation de JavaScript** pour leur fonctionnement de base dans le DSFR.

Cependant, il est possible d'utiliser des bibliothèques JavaScript tierces pour ajouter des fonctionnalités supplémentaires, comme la validation des champs, l'envoi dynamique des données, etc. 
 Il est recommandé d'utiliser des bibliothèques JavaScript qui respectent les principes d'accessibilité et de performance.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+form+)

#### [v1.13.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.13.0) - 4 décembre 2024

- **[ajout du message d'avertissement 'warning'](https://github.com/GouvernementFR/dsfr/pull/1015)**  
  #1015  
  - Ajout de la classe fr-message--warning
- Ajout d'exemples de messages dans la page d'exemple formulaire  
  ✨ feat  
  form

#### [v1.11.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.0) - 11 décembre 2023

- **[token de couleur de la légende](https://github.com/GouvernementFR/dsfr/pull/783)**  
  #783  
  - la légende du fieldset passe en $text-label-grey à la place de $text-title-grey  
  🐛 fix  
  form

- **[met a jour les espacements des icônes](https://github.com/GouvernementFR/dsfr/pull/766)**  
  #766  
  - place l’icône à 16px du bord droit des champs de saisie
- ajuste le padding-right à 44px sur les champs de saisie avec icône
- corrige la largeur des class fr-fieldset__content pour la version dépréciée  
  🐛 fix  
  form input

#### [v1.10.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.10.0) - 19 juillet 2023

- **[correctif barre état iOS](https://github.com/GouvernementFR/dsfr/pull/712)**  
  #712  
  - Sur iOS, la barre d'état d'erreur ou validation est discontinue
- corrige le problème de manière générique  
  🐛 fix  
  form

- **[correctif focus des radios riches dépréciés](https://github.com/GouvernementFR/dsfr/pull/715)**  
  #715  
  - corrige le décalage du focus sur les boutons radio en version dépréciée  
  🐛 fix  
  form

- **[met a jour les libelles des indications](https://github.com/GouvernementFR/dsfr/pull/674)**  
  #674  
  - retrait de la capitalisation des mentions d'indication  
  🐛 fix  
  form

- **[correctif alignement icône des messages](https://github.com/GouvernementFR/dsfr/pull/670)**  
  #670  
  - l'icône à gauche des messages d'erreur/succès sur plusieurs lignes doit être accrochée en haut et non pas centrée  
  🐛 fix  
  form

#### [v1.8.2](https://github.com/GouvernementFR/dsfr/releases/tag/v1.8.2) - 9 novembre 2022

- **[ajout du css deprecated legacy](https://github.com/GouvernementFR/dsfr/pull/439)**  
  #439  
  fix  
  form

#### [v1.8.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.8.0) - 27 octobre 2022

- **[correction accessiblité des formulaires](https://github.com/GouvernementFR/dsfr/pull/438)**  
  #438  
  fix  
  form

- **[error & disabled](https://github.com/GouvernementFR/dsfr/pull/428)**  
  #428  
  fix  
  form upload

- **[Ajout des fr-control et correction des pattern civility & name](https://github.com/GouvernementFR/dsfr/pull/401)**  
  #401  
  refactor  
  form

#### [v1.3.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.3.1) - 7 février 2022

- **[correction de la gestion de l'attribut checked et de la page d'exemple de form](https://github.com/GouvernementFR/dsfr/pull/208)**  
  #208  
  fix  
  checkbox form radio toggle

##### Contenu associé

- **[Bouton radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio)**  
  Présentation du composant Bouton radio permettant à l’usager de sélectionner une option unique parmi un ensemble limité de choix.

- **[Champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)**  
  Présentation du composant Champ de saisie permettant à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.

- **[Liste déroulante](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante)**  
  Présentation du composant Liste déroulante permettant à l’usager de sélectionner une option unique parmi un ensemble de choix dans un espace limité.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/formulaire/accessibilite-du-formulaire

Les composants de formulaire sont conçus pour être accessibles et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction spécifique n’est associée au formulaire.

Les interactions clavier du formulaire sont celles liées aux éléments de formulaire qu’il contient :

- [champs de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie/accessibilite-du-champ-de-saisie) ,
- [boutons](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton/accessibilite-du-bouton) ,
- [liste déroulante](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante/accessibilite-de-la-liste-deroulante) ,
- [cases à cocher](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher/accessibilite-de-la-case-a-cocher) ,
- [boutons radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio/accessibilite-du-bouton-radio) ,
- [ajout de fichier](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/ajout-de-fichier/accessibilite-de-l-ajout-de-fichier) , etc.

### Règles d’accessibilité

#### Regroupement de champs

- Utiliser un élément `<fieldset>` accompagné d’un élément `<legend>` pour regrouper un ensemble de champs de formulaire de même nature lorsque les étiquettes des champs ne sont pas suffisamment explicites.
- La légende du regroupement doit être pertinente.

#### Message d’information, d’avertissement ou d’erreur

Il existe différentes méthodes pour gérer les messages d’information, d’avertissement ou d’erreur d’un formulaire de manière accessible selon le contexte.

Il est possible d’indiquer l’information, l’avertissement ou l’erreur :

- dans l’étiquette du champ,
- dans un passage de texte avant le formulaire,
- dans un passage de texte relié au champ de saisie avec l’attribut `aria-describedby`,
- avec une live region : `role="alert"`, `role="status"`, `aria-live="assertive",
   aria-live="polite"` (dans certains contextes uniquement).

#### Champs obligatoires

Ajouter une mention visible pour tout le monde au début du formulaire et utiliser l’attribut `required` pour indiquer que le champ est obligatoire.

---

### Critères RGAA applicables

- **Couleurs :** 3.2, 3.3
- **Présentation de l’information :** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Formulaires :** 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7, 11.8, 11.9, 11.10, 11.11, 11.12, 11.13
- **Navigation :** 12.8, 12.9
- **Consultation :** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Tutoriel WAI - Formulaires](https://www.w3.org/WAI/tutorials/forms/)
- [Live regions ARIA et mauvaises pratiques](https://access42.net/quand-utiliser-live-regions-aria/)

##### Contenu associé

- **[Bouton radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio)**  
  Présentation du composant Bouton radio permettant à l’usager de sélectionner une option unique parmi un ensemble limité de choix.

- **[Champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)**  
  Présentation du composant Champ de saisie permettant à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.

- **[Liste déroulante](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante)**  
  Présentation du composant Liste déroulante permettant à l’usager de sélectionner une option unique parmi un ensemble de choix dans un espace limité.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/formulaire/demonstration-du-formulaire

*(Démonstration interactive « form--docs » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=form--docs&nav=0&globals=theme%3Alight)*

#### Contenu associé

- **[Bouton radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio)**  
  Présentation du composant Bouton radio permettant à l’usager de sélectionner une option unique parmi un ensemble limité de choix.

- **[Champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)**  
  Présentation du composant Champ de saisie permettant à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.

- **[Liste déroulante](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante)**  
  Présentation du composant Liste déroulante permettant à l’usager de sélectionner une option unique parmi un ensemble de choix dans un espace limité.
