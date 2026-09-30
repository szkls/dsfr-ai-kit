# Liens d'évitement

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liens-d-evitement · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liens-d-evitement/design-des-liens-d-evitement · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liens-d-evitement/code-des-liens-d-evitement · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liens-d-evitement/accessibilite-des-liens-d-evitement · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liens-d-evitement/demonstration-des-liens-d-evitement
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

Les liens d’évitement sont un système de navigation secondaire permettant à l’usager naviguant au clavier, ou équipé d’un lecteur d'écran, d’accéder plus rapidement à des zones précises de la page.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liens-d-evitement

*(Démonstration interactive « skiplink--skiplink » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=skiplink--skiplink&nav=0&globals=theme%3Alight)*

*Appuyez sur la touche tab pour faire apparaître les liens d'évitement.*

### Quand utiliser ce composant ?

**Intégrer des liens d’évitement est une obligation** pour l’ensemble des sites.

Ils garantissent la navigation au clavier ou par un lecteur d’écran et aident les usagers à accéder rapidement à des fonctionnalités importantes (contenu, menu, recherche, pied de page etc.).

### Comment utiliser ce composant ?

- **Placer systématiquement les liens d’évitement en tout début de page.** Ils doivent figurer parmi les premiers éléments accessibles au clavier.

> **À faire :** Positionner les liens d’évitement au dessus du header.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/skiplink/use/do-1.png)

> **À ne pas faire :** Ne pas positionner les liens d’évitement ailleurs qu’au dessus du header.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/skiplink/use/dont-1.png)

- **Masquer le composant par défaut** . Il apparaît en haut de page uniquement lorsqu’un de ses liens reçoit le focus (navigation clavier).
- **Proposer uniquement des liens simples** au sein du composant.

> **À faire :** Ne pas proposer des liens d’évitement avec icônes.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/skiplink/use/dont-2.png)

- **Uniformiser le contenu, la position et la forme des liens d’évitement** à travers l’ensemble du site.
- **Limiter le nombre de liens d’évitement proposés** afin d’en garantir l’efficacité.

> **À ne pas faire :** Ne pas proposer un nombre trop important de liens d’évitement. - **Choisir les liens affichés en fonction des éléments clés présents dans le site** . Le lien minimum est “Accéder au contenu”, les autres liens doivent être choisis au cas par cas, en fonction des fonctionnalités/zones clés. ### Règles éditoriales - **Privilégier des liens courts et explicites** garantissant la compréhension de l’usager.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/skiplink/use/dont-3.png)

#### Contenu associé

- **[Lien](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lien)**  
  Présentation du composant Lien permettant à l’usager d’accéder à un autre contenu, sur la même page ou sur une autre page, interne ou externe.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liens-d-evitement/design-des-liens-d-evitement

![Anatomie des liens d'évitement](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/skiplink/design/anatomy/anatomy-1.png)

1. Un ou plusieurs liens simples — Obligatoire
2. Un fond gris — Obligatoire

### Variations

Les liens d’évitement ne propose aucune variation.

### Tailles

La largeur des liens d’évitement s’adapte à leur contenu, tout en étant dépendante de la taille du conteneur principal de la page.

### États

**Etat au focus**

L’état au focus correspond au comportement constaté par l’usager lorsqu’il sélectionne un lien via la navigation au clavier.

### Personnalisation

Les liens d’évitement ne sont pas personnalisables.

> **À ne pas faire :** Ne pas personnaliser la couleur de fond des liens d’évitement.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/skiplink/design/custom/dont-1.png)

#### Contenu associé

- **[Lien](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lien)**  
  Présentation du composant Lien permettant à l’usager d’accéder à un autre contenu, sur la même page ou sur une autre page, interne ou externe.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liens-d-evitement/code-des-liens-d-evitement

### HTML

#### Structure du composant

Le composant **Liens d'évitement** permet aux utilisateurs de naviguer rapidement vers les sections principales de la page.

**Toujours placé en haut de la page** , sa structure est la suivante :

- Le conteneur des liens d'évitement est un élément HTML `<div>` défini par la classe `fr-skiplinks`.
- Les liens d'évitement sont entourés par un élément HTML `<nav>` défini par la classe `fr-container` avec le rôle `navigation` et comportant un attribut `aria-label` dont la valeur est "Accès rapide".
- La liste des liens d'évitement est un élément HTML `<ul>` défini par la classe `fr-skiplinks__list`.
- Chaque élément `<li>` de la liste contient :
  - Un lien d'évitement, un élément HTML `<a>` défini par la classe `fr-link`.

> **Attention**
> Les liens d'évitement pointent vers des ancres (`#intitulé`), qui doivent être présentes dans la page. Par exemple, Le lien `<a class="fr-link"
>  href="#content">Contenu</a>` ne peut fonctionner que si un élément avec l’id “content” est présent dans la page (comme `<main id=”content”>`), à l’endroit souhaité.

**Exemple de structure HTML**

```html
<div class="fr-skiplinks">
    <nav role="navigation" aria-label="Accès rapide" class="fr-container">
        <ul class="fr-skiplinks__list">
            <li>
                <a class="fr-link" href="#content">Contenu</a>
            </li>
            <li>
                <a class="fr-link" href="#header-navigation">Menu</a>
            </li>
            <li>
                <a class="fr-link" href="#header-search">Recherche</a>
            </li>
            <li>
                <a class="fr-link" href="#footer">Pied de page</a>
            </li>
        </ul>
    </nav>
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
| Link | Oui |
| Skiplink | Oui |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/link/link.min.css" rel="stylesheet">
<link href="dist/component/skiplink/skiplink.min.css" rel="stylesheet">
```

---

### JavaScript

Le composant Liens d'évitement **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+skiplink+)

##### Contenu associé

- **[Lien](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lien)**  
  Présentation du composant Lien permettant à l’usager d’accéder à un autre contenu, sur la même page ou sur une autre page, interne ou externe.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liens-d-evitement/accessibilite-des-liens-d-evitement

Le composant **Liens d'évitement** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

> **Information**
> Le RGAA demande qu’ **au moins un lien d’accès au contenu principal** soit présent et fonctionnel sur chaque page web sauf cas particulier (site constitué d’une seule page ou accès direct au contenu principal).
> 
> Cela permet aux personnes handicapées motrices d’éviter les blocs répétés (ex. menu, fil d’Ariane). Les liens d’évitement ou d’accès rapide sont également utilisés dans une moindre mesure par les personnes aveugles.

#### Structuration

- Les liens d’évitement / accès rapide doivent être à l’intérieur d’un élément `<nav role="navigation>`.
- L’attribut `aria-label="Accès rapide"` est utilisé pour nommer et donner un contexte explicite à la navigation.
- S’il y a plusieurs liens :
  - les liens doivent être structurés avec une liste `<ul><li>`,
  - le lien d’accès « Contenu » est le premier de la liste.

#### Présentation

Les liens d’évitement sont positionnés hors écran et apparaissent à la navigation au clavier lors de la prise de focus.

#### Contrastes de couleurs

Le composant **Liens d'évitement** est suffisamment contrasté en thème clair (ratio de 12,8:1) et en thème sombre (ratio de 4,9:1).

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant.

---

### Critères RGAA applicables

- **Couleurs** : 3.2
- **Liens** : 6.1, 6.2
- **Structuration** : 9.2, 9.3
- **Présentation de l’information** : 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Navigation** : 12.2, 12.6, 12.8, 12.9
- **Consultation** : 13.9, 13.11

---

#### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)

##### Contenu associé

- **[Lien](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lien)**  
  Présentation du composant Lien permettant à l’usager d’accéder à un autre contenu, sur la même page ou sur une autre page, interne ou externe.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liens-d-evitement/demonstration-des-liens-d-evitement

*(Démonstration interactive « skiplink--docs » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=skiplink--docs&nav=0&globals=theme%3Alight)*

#### Contenu associé

- **[Lien](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lien)**  
  Présentation du composant Lien permettant à l’usager d’accéder à un autre contenu, sur la même page ou sur une autre page, interne ou externe.
