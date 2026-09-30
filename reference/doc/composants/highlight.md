# Mise en exergue

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-exergue · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-exergue/design-de-la-mise-en-exergue · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-exergue/code-de-la-mise-en-exergue · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-exergue/accessibilite-de-la-mise-en-exergue · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-exergue/demonstration-de-la-mise-en-exergue
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

La mise en exergue est un élément éditorial permettant de mettre en forme du contenu dans une page.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-exergue

*(Démonstration interactive « highlight--highlight » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=highlight--highlight&nav=0&globals=theme%3Alight)*

### Quand utiliser ce composant ?

Utiliser la mise en exergue pour distinguer une information importante au sein du contenu principal d’une page (par exemple, une reformulation ou une reprise de texte).

Elle permet une identification rapide et facile par l’usager.

> **Attention**
> Bien différencier la mise en exergue de la mise en avant. La [mise en avant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-avant) est utilisée pour mettre l’accent sur une information complémentaire au contenu principal.

### Comment utiliser ce composant ?

- **Insérer la mise en exergue** au sein d’un contenu éditorial.
- **Conserver l’écart prévu** afin que la mise en exergue ne soit pas alignée à gauche avec le corps du texte. Cela permet notamment de l’identifier plus facilement.

> **À faire :** Intégrer une mise en exergue au sein d’un contenu en conservant l’alinéa prévu. L’objectif étant d’opérer une distinction.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/highlight/use/do-1.png)

> **À ne pas faire :** Ne pas minimiser la mise en exergue au sein du contenu en alignant la bordure au corps du texte.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/highlight/use/dont-1.png)

- **Adapter l’usage de la mise en exergue à l’information que vous souhaitez relayée** . Par exemple, les messages d’erreur ou de confirmation ne sont pas considérés comme des mises en avant mais bien des [alertes](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/alerte) .

### Règles éditoriales

- **Présenter l’information de façon synthétique** afin qu’elle soit facilement lue et comprise de l’usager.

#### Contenu associé

- **[Citation](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/citation)**  
  Présentation du composant Citation permettant d’intégrer un extrait de discours ou de texte au sein d’un contenu éditorial, en respectant des règles précises de forme.

- **[Mise en avant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-avant)**  
  Présentation du composant Mise en avant, élément éditorial servant à valoriser une information complémentaire dans une page de contenu.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-exergue/design-de-la-mise-en-exergue

![Anatomie de la mise en exergue](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/highlight/design/anatomy/anatomy-1.png)

1. Une bordure — Obligatoire
2. Un texte — Obligatoire

### Variations

La mise en exergue ne propose aucune variation.

### Tailles

La mise en exergue est disponible en trois tailles :

- SM pour small

*(Démonstration interactive « highlight--size-sm » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=highlight--size-sm&nav=0&globals=theme%3Alight)*

- MD pour medium - taille par défaut.

*(Démonstration interactive « highlight--default » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=highlight--default&nav=0&globals=theme%3Alight)*

- LG pour large.

*(Démonstration interactive « highlight--size-lg » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=highlight--size-lg&nav=0&globals=theme%3Alight)*

### États

La mise en exergue n’est sujette à aucun changement d’état.

### Personnalisation

Seule la couleur de la bordure de la mise en exergue est personnalisable.

Elle peut utiliser l’ensemble des couleurs illustratives.

> **À faire :** Personnaliser la bordure de la mise en exergue avec l’ensemble des couleurs illustratives d’indice $main.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/highlight/design/custom/do-1.png)

> **À ne pas faire :** Ne pas utiliser une couleur illustrative ou des indices autre que ceux autorisés.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/highlight/design/custom/dont-1.png)

**Titre du tableau**

| Éléments | Indice thème clair | Indice thème sombre |
|---|---|---|
| **Bordure `$border-default-blue-france`** | Indice **main** <br> exemple : `$green-emeraude-main-632` | Indice **main** <br> exemple : `$green-emeraude-main-632` |

#### Contenu associé

- **[Citation](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/citation)**  
  Présentation du composant Citation permettant d’intégrer un extrait de discours ou de texte au sein d’un contenu éditorial, en respectant des règles précises de forme.

- **[Mise en avant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-avant)**  
  Présentation du composant Mise en avant, élément éditorial servant à valoriser une information complémentaire dans une page de contenu.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-exergue/code-de-la-mise-en-exergue

### HTML

#### Structure du composant

Le composant **Mise en exergue** permet de mettre en évidence des informations importantes. Sa structure est conçue pour s’adapter aux écrans mobiles et comprend les éléments suivants :

1. Un conteneur principal sous la balise `<div>` :
   - Doit avoir la classe `fr-highlight`.
2. Une zone de contenu pour le texte de la mise en exergue :
   - Représentée par un élément `<p>`.

**Exemple de structure HTML**

```html
<div class="fr-highlight">
    <p>Lorem [...] elit ut.</p>
</div>
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
| Highlight | Oui |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/highlight/highlight.min.css" rel="stylesheet">
```

#### Variantes de taille

Le texte de la mise en exergue peut être de différentes tailles :

- Par défaut en taille md.
- `fr-text--sm` : Petit texte.
- `fr-text--lg` : Grand texte.

**Exemple de texte de différentes tailles**

```html
<div class="fr-highlight">
  <p class="fr-text--lg">Lorem [...] elit ut.</p>
</div>
```

#### Variantes d'accentuation

Le composant Mise en exergue est accentuable, permettant le changement de la couleur de la bordure latérale. Pour cela, ajouter la classe `fr-highlight--NOM-COULEUR` au même niveau que la classe `fr-highlight`.

**Exemple de structure accentuée**

```html
<div class="fr-highlight fr-highlight--green-emeraude">
    <p>Lorem [...] elit ut.</p>
</div>
```

### JavaScript

Le composant Mise en exergue **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+highlight+)

#### [v1.11.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.0) - 11 décembre 2023

- **[met à jour les espacements](https://github.com/GouvernementFR/dsfr/pull/777)**  
  #777  
  - passe le padding à 5v en mobile et 9v en desktop  
  🐛 fix  
  highlight

- **[background image à la place de box shadow](https://github.com/GouvernementFR/dsfr/pull/746)**  
  #746  
  - refactorisation de la bordure en background-image à la place de box-shadow  
  ♻️ refactor  
  highlight callout

##### Contenu associé

- **[Citation](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/citation)**  
  Présentation du composant Citation permettant d’intégrer un extrait de discours ou de texte au sein d’un contenu éditorial, en respectant des règles précises de forme.

- **[Mise en avant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-avant)**  
  Présentation du composant Mise en avant, élément éditorial servant à valoriser une information complémentaire dans une page de contenu.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-exergue/accessibilite-de-la-mise-en-exergue

Le composant **Mise en exergue** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

#### Structuration

Il n’y a pas de sémantique spécifique associée à ce composant. La mise en exergue n’est donc pas restituée par les lecteurs d’écran, seul son contenu l’est.

La bordure est une mise en avant visuelle et décorative du contenu. **L’information doit être portée uniquement par le texte.**

> **À ne pas faire :** Ne pas utiliser la mise en exergue pour une citation.
> ![Mise en exergue utilisée pour une citation](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/highlight/accessibility/accessibility/dont-1.png)

#### Contrastes de couleurs

Le texte du composant est suffisamment contrasté avec le fond en thème clair (11,4:1) et en thème sombre (11:1). La bordure est perceptible en thème clair (4,2) et en thème sombre (4,3:1).

> **Information**
> La bordure est décorative et n’a pas besoin d’être suffisamment contrastée.

---

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Mise en exergue.

---

### Critères RGAA applicables

- **Couleurs** : 3.2
- **Éléments obligatoires** : 8.9
- **Présentation de l’information** : 10.1, 10.2, 10.4, 10.5, 10.7, 10.11, 10.12

#### Références

- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)

##### Contenu associé

- **[Citation](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/citation)**  
  Présentation du composant Citation permettant d’intégrer un extrait de discours ou de texte au sein d’un contenu éditorial, en respectant des règles précises de forme.

- **[Mise en avant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-avant)**  
  Présentation du composant Mise en avant, élément éditorial servant à valoriser une information complémentaire dans une page de contenu.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-exergue/demonstration-de-la-mise-en-exergue

#### Contenu associé

- **[Citation](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/citation)**  
  Présentation du composant Citation permettant d’intégrer un extrait de discours ou de texte au sein d’un contenu éditorial, en respectant des règles précises de forme.

- **[Mise en avant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-avant)**  
  Présentation du composant Mise en avant, élément éditorial servant à valoriser une information complémentaire dans une page de contenu.
