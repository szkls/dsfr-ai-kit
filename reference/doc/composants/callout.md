# Mise en avant

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-avant · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-avant/design-de-la-mise-en-avant · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-avant/code-de-la-mise-en-avant · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-avant/accessibilite-de-la-mise-en-avant · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-avant/demonstration-de-la-mise-en-avant
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

La mise en avant est un élément éditorial permettant de mettre en forme du contenu dans une page.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-avant

*(Démonstration interactive « callout--callout » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=callout--callout&nav=0&globals=theme%3Alight)*

### Quand utiliser ce composant ?

Utiliser la mise en avant pour mettre l’accent sur une information complémentaire au contenu principal.

Elle permet une distinction rapide et facile par l’usager.

> **Attention**
> Bien différencier la mise en avant de la mise en exergue. La [mise en exergue](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-exergue) est utilisée pour distinguer une information importante au sein du contenu principal d’une page.

### Comment utiliser ce composant ?

- **Insérer la mise en avant** au sein d’un contenu éditorial.
- **Prioriser les informations que vous souhaitez valoriser** afin d’utiliser une ou deux mises en avant maximum par page. Plus leur nombre est important, moins elles attireront l’œil de l’usager.
- **Adapter l’usage de la mise en avant à l’information que vous souhaitez relayée** . Par exemple, les messages d’erreur ou de confirmation ne sont pas considérés comme des mises en avant mais bien des [alertes](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/alerte) .

> **À faire :** Utiliser la mise en avant pour valoriser une information importante.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/callout/use/do-1.png)

> **À ne pas faire :** Ne pas utiliser la mise en avant pour indiquer une erreur, par exemple.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/callout/use/dont-1.png)

### Règles éditoriales

- **Présenter l’information de façon synthétique** afin qu’elle soit facilement lue et comprise de l’usager.

#### Contenu associé

- **[Citation](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/citation)**  
  Présentation du composant Citation permettant d’intégrer un extrait de discours ou de texte au sein d’un contenu éditorial, en respectant des règles précises de forme.

- **[Mise en exergue](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-exergue)**  
  Présentation du composant éditorial Mise en exergue destiné à distinguer une information importante au sein du contenu principal d’une page.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-avant/design-de-la-mise-en-avant

![Anatomie de la mise en avant](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/callout/design/anatomy/anatomy-1.png)

1. Une icône, pour aider à la compréhension du message — En option
2. Un titre — En option
3. Une description — Obligatoire
4. Un bouton pour inciter à l’action ou un lien pour naviguer vers un autre contenu — En option
5. Une bordure de couleur — Obligatoire

### Variations

La mise en avant ne propose aucune variation.

### Tailles

La largeur de la mise en avant s’adapte à la taille de son conteneur.

Toutefois, il est recommandé de ne pas excéder une largeur de 8 colonnes, s’agissant d’un composant à intégrer au sein de pages de contenu.

### États

La mise en avant n’est sujette à aucun changement d’état.

### Personnalisation

Les éléments fond et bordure de la mise en avant sont personnalisables et peuvent utiliser l’ensemble les couleurs illustratives.

> **À faire :** Personnaliser la mise en avant avec l’ensemble des couleurs illustratives d’indice $main pour la bordure et $950 pour le fond.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/callout/design/custom/do-1.png)

> **À ne pas faire :** Ne pas utiliser une couleur illustrative ou des indices autre que ceux autorisés.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/callout/design/custom/dont-1.png)

**Titre du tableau**

| Éléments | Indice thème clair | Indice thème sombre |
|---|---|---|
| **Bordure `$border-default-blue-france`** | Indice **main** <br> exemple : `$green-emeraude-main-632` | Indice **main** <br> exemple : `$green-emeraude-main-632` |
| **Fond `$background-contrast-neutral`** | Indice **950** <br> exemple : `$green-emeraude-950` | Indice **100** <br> exemple : `$green-emeraude-100` |

Par ailleurs, certains éléments sont optionnels et les icônes peuvent être changées - voir [la structure du composant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-avant/design-de-la-mise-en-avant#mise-en-avant) .

#### Contenu associé

- **[Citation](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/citation)**  
  Présentation du composant Citation permettant d’intégrer un extrait de discours ou de texte au sein d’un contenu éditorial, en respectant des règles précises de forme.

- **[Mise en exergue](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-exergue)**  
  Présentation du composant éditorial Mise en exergue destiné à distinguer une information importante au sein du contenu principal d’une page.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-avant/code-de-la-mise-en-avant

### HTML

#### Structure du composant

Le composant **Mise en avant** permet de mettre en évidence des informations importantes. Sa structure est conçue pour s’adapter aux écrans mobiles et comprend les éléments suivants :

1. Un conteneur principal sous la balise `<div>` :
   - Doit avoir la classe `fr-callout`.
   - Peut avoir une classe `fr-icon-NOM-ICONE` pour ajouter une icône avant le titre.
2. Un titre pour la mise en avant :
   - Représenté par un élément `<hx>`, suivant le niveau d'entête voulu, avec la classe `fr-callout__title`.
3. Une zone de contenu pour le texte de la mise en avant :
   - Représentée par un élément `<p>` avec la classe `fr-callout__text`.
4. D'autres éléments facultatifs comme un lien ou un bouton.

**Exemple de structure HTML**

```html
<div class="fr-callout">
  <h3 class="fr-callout__title">Titre de la mise en avant</h3>
  <p class="fr-callout__text">Contenu de la mise en avant.</p>
  <button type="button" class="fr-btn">Libellé bouton</button>
</div>
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
| Callout | Oui |  |
| Button | Non | Uniquement si ajout d'un bouton à l'intérieur |
| Utility | Non | Uniquement pour l'ajout d'icône |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/callout/callout.min.css" rel="stylesheet">
```

#### Variantes de style

- **Ajout d'icône** : Le composant Mise en avant peut intégrer une icône, il suffit pour cela d'ajouter la classe `fr-icon-NOM-ICON` au même niveau que la classe `fr-callout`.
- **Accentuation** : Le composant est accentuable, permettant le changement de la couleur de fond et de la bordure latérale. Pour cela, ajouter la classe `fr-callout-NOM-COULEUR` au même niveau que la classe `fr-callout`.

**Exemple de variante de style**

```html
<div class="fr-callout fr-callout--green-emeraude">
```

### JavaScript

Le composant Mise en avant **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+callout+)

#### [v1.14.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.14.0) - 25 juin 2025

- **[ajoute espacement sur la classe de titre](https://github.com/GouvernementFR/dsfr/pull/1173)**  
  #1173  
  ✨ feat  
  callout

#### [v1.11.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.0) - 11 décembre 2023

- **[background image à la place de box shadow](https://github.com/GouvernementFR/dsfr/pull/746)**  
  #746  
  - refactorisation de la bordure en background-image à la place de box-shadow  
  ♻️ refactor  
  highlight callout

#### [v1.2.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.2.0) - 17 novembre 2021

- **[accentuation du background](https://github.com/GouvernementFR/dsfr/pull/125)**  
  #125  
  fix  
  callout

##### Contenu associé

- **[Citation](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/citation)**  
  Présentation du composant Citation permettant d’intégrer un extrait de discours ou de texte au sein d’un contenu éditorial, en respectant des règles précises de forme.

- **[Mise en exergue](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-exergue)**  
  Présentation du composant éditorial Mise en exergue destiné à distinguer une information importante au sein du contenu principal d’une page.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-avant/accessibilite-de-la-mise-en-avant

Le composant **Mise en avant** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

#### Structuration

Il n’y a pas de sémantique spécifique associée à ce composant. La mise en avant n’est donc pas restituée par les lecteurs d’écran, seul son contenu l’est.

L'icône et la bordure sont une mise en avant visuelle et décorative du contenu. **L’information doit être portée uniquement par le texte.**

- Pour insister sur la mise en avant et permettre aux personnes aveugles d’y accéder rapidement, ajouter un titre.
- Le niveau de titre dépend du contexte de la page et ne sera pas toujours un `<h3>`.

> **À ne pas faire :** Ne pas utiliser la mise en exergue pour une citation.
> ![Mise en exergue utilisée pour une citation](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/callout/accessibility/accessibility/dont-1.png)

### Contrastes de couleurs

Par défaut, le texte du composant est suffisamment contrasté avec le fond en thème clair et en thème sombre.

---

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Mise en avant.

---

### Critères RGAA applicables

- **Couleurs** : 3.2
- **Scripts :** 7.1, 7.3
- **Éléments obligatoires :** 8.9
- **Structuration :** 9.3
- **Présentation de l’information :** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Consultation :** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)

##### Contenu associé

- **[Citation](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/citation)**  
  Présentation du composant Citation permettant d’intégrer un extrait de discours ou de texte au sein d’un contenu éditorial, en respectant des règles précises de forme.

- **[Mise en exergue](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-exergue)**  
  Présentation du composant éditorial Mise en exergue destiné à distinguer une information importante au sein du contenu principal d’une page.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-avant/demonstration-de-la-mise-en-avant

#### Contenu associé

- **[Citation](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/citation)**  
  Présentation du composant Citation permettant d’intégrer un extrait de discours ou de texte au sein d’un contenu éditorial, en respectant des règles précises de forme.

- **[Mise en exergue](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-exergue)**  
  Présentation du composant éditorial Mise en exergue destiné à distinguer une information importante au sein du contenu principal d’une page.
