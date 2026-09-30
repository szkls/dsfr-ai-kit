# Indicateur d'étapes

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/indicateur-d-etapes · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/indicateur-d-etapes/design-de-l-indicateur-d-etapes · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/indicateur-d-etapes/code-de-l-indicateur-d-etapes · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/indicateur-d-etapes/accessibilite-de-l-indicateur-d-etapes · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/indicateur-d-etapes/demonstration-de-l-indicateur-d-etapes
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

L’indicateur d'étapes est un élément éditorial permettant d’accompagner l’usager au sein d’un formulaire ou une démarche en plusieurs étapes.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/indicateur-d-etapes

*(Démonstration interactive « stepper--stepper » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=stepper--stepper&nav=0&globals=theme%3Alight)*

### Quand utiliser ce composant ?

**Utiliser l’indicateur d’étapes dans le cadre d’un processus linéaire** , tel un formulaire ou une démarche en ligne, pour indiquer à l’usager où il se trouve dans le parcours.

> **Information**
> L’indicateur d’étapes ne permet pas de naviguer d’une étape à l’autre. Pour cela, préférer l’usage des [boutons](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton) .

### Comment utiliser ce composant ?

- **Positionner systématiquement l’indicateur d’étapes en haut de page** afin qu’il soit immédiatement visible.
- **Proposer une page d’introduction en début de formulaire ou de démarche** , pour présenter les différentes étapes. L’indicateur d’étapes ne figure pas sur cette première page.
- **Identifier avec soin les champs demandés aux usagers et les rassembler dans des sections similaires** . Plus le parcours est long, plus le risque d’abandon est élevé et le nombre maximal d’étapes proposées par le composant est de 8.
- **Clôturer le formulaire ou la démarche par une étape de confirmation** , afin de notifier l’usager de la fin du parcours. Sur cette dernière étape, le titre de l’étape suivante ne doit pas être affiché.

### Règles éditoriales

- **Rédiger des titres d’étapes clairs et unique** . L’usager doit comprendre facilement le cheminement de la démarche.

> **À faire :** Aiguiller l’usager sur les différentes étapes composant la démarche en proposant des titres explicites.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/stepper/edit/do-1.png)

> **À ne pas faire :** Ne pas répéter des titres d’étapes ou indiquer le numéro de l’étape dans le titre, celui-ci étant déjà indiqué dans un champ spécifique.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/stepper/edit/dont-1.png)

#### Contenu associé

- **[Champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)**  
  Présentation du composant Champ de saisie permettant à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.

- **[Formulaire](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/formulaire)**  
  Présentation du composant Formulaire permettant l'agencement des éléments de saisie de données et des messages d'état.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/indicateur-d-etapes/design-de-l-indicateur-d-etapes

![Anatomie du bouton](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/stepper/design/anatomy/anatomy-1.png)

1. Le numéro de l'étape en cours et le nombre d'étapes total — Obligatoire
2. Le titre de l'étape en cours — Obligatoire
3. Une barre de progression, qui contient autant de sections qu’il y a d’étapes, avec les étapes validées et en cours indiquées en bleu — Obligatoire
4. Le titre de l'étape suivante — Obligatoire

> **Information**
> Aucun des éléments de l’indicateur d'étapes n’est cliquable.

### Variations

L’indicateur d’étapes ne propose aucune variation.

### Tailles

La largeur de l’indicateur d’étapes s’adapte à la taille de son conteneur.

### États

L’indicateur d’étapes n’est sujet à aucun changement d’état.

### Personnalisation

L’indicateur d’étapes n’est pas personnalisable.

> **À faire :** Conserver la barre de progression en l’état.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/stepper/design/custom/do-1.png)

> **À ne pas faire :** Ne pas personnaliser la couleur ou le design de la barre de progression.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/stepper/design/custom/dont-1.png)

#### Contenu associé

- **[Champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)**  
  Présentation du composant Champ de saisie permettant à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.

- **[Formulaire](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/formulaire)**  
  Présentation du composant Formulaire permettant l'agencement des éléments de saisie de données et des messages d'état.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/indicateur-d-etapes/code-de-l-indicateur-d-etapes

### HTML

#### Structure du composant

Le composant **Indicateur d'étapes** est un élément permettant de visualiser les étapes d'un processus.

Sa structure est la suivante :

- Le conteneur du stepper est un élément HTML `<div>` défini par la classe `fr-stepper`.
- Le titre de l'étape en cours, obligatoire, est contenu dans un niveau d'entête `<hx>`, variable en fonction de sa hiérarchie dans la page (par défaut h2), et possède la classe `fr-stepper__title`.
  - Le numéro de l'étape et le nombre d'étapes total, obligatoires, sont précisés à l'intérieur du titre dans un élément HTML `<span>` défini par la classe `fr-stepper__state`.
- La barre de progression, obligatoire, un élément HTML `<div>` défini par la classe `fr-stepper__steps`.
  - La balise possède des attributs `data-fr-steps` et `data-fr-current-step` pour définir le nombre total d'étapes et l'étape actuelle.
- Les détails de l'étape sont un élément HTML `<p>` défini par la classe `fr-stepper__details` et contiennent :
  - Le titre de l'étape suivante, obligatoire, dans un élément HTML `<span>`.

**Exemple de structure HTML**

```html
<div class="fr-stepper">
    <h2 class="fr-stepper__title">
        Titre de l’étape en cours
        <span class="fr-stepper__state">Étape 1 sur 3</span>
    </h2>
    <div class="fr-stepper__steps" data-fr-current-step="1" data-fr-steps="3"></div>
    <p class="fr-stepper__details">
        <span class="fr-text--bold">Étape suivante :</span> Titre de la prochaine étape
    </p>
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
| Stepper | Oui |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/stepper/stepper.min.css" rel="stylesheet">
```

---

### JavaScript

Le composant Indicateur d'étapes **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+stepper+)

##### Contenu associé

- **[Champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)**  
  Présentation du composant Champ de saisie permettant à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.

- **[Formulaire](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/formulaire)**  
  Présentation du composant Formulaire permettant l'agencement des éléments de saisie de données et des messages d'état.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/indicateur-d-etapes/accessibilite-de-l-indicateur-d-etapes

Le composant **Indicateur d'étapes** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Il n'y a aucune interaction spécifique au composant **Indicateur d’étapes** .

### Règles d’accessibilité

- Le titre de l’étape en cours est contenu dans un élément `<hx>`.
- Le nom de l’étape suivante est dans un élément `<p>`.
- La barre de progression ne nécessite aucune alternative ni attribut ARIA (car purement illustrative).

### Contrastes de couleurs

Le composant Indicateur d’étapes est suffisamment contrasté en thème clair et en thème sombre dans ses différentes versions.

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Indicateur d’étapes.

### Critères RGAA applicables

- **Couleurs :** 3.2
- **Éléments obligatoires** 8.9
- **Structuration :** 9.1
- **Présentation de l’information :** 10.1, 10.2, 10.4, 10.5, 10.11, 10.12
- **Consultation :** 13.9

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)

#### Contenu associé

- **[Champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)**  
  Présentation du composant Champ de saisie permettant à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.

- **[Formulaire](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/formulaire)**  
  Présentation du composant Formulaire permettant l'agencement des éléments de saisie de données et des messages d'état.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/indicateur-d-etapes/demonstration-de-l-indicateur-d-etapes

*(Démonstration interactive « stepper--docs » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=stepper--docs&nav=0&globals=theme%3Alight)*

#### Contenu associé

- **[Champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)**  
  Présentation du composant Champ de saisie permettant à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.

- **[Formulaire](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/formulaire)**  
  Présentation du composant Formulaire permettant l'agencement des éléments de saisie de données et des messages d'état.
