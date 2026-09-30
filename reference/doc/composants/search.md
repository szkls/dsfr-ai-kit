# Barre de recherche

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/barre-de-recherche · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/barre-de-recherche/design-de-la-barre-de-recherche · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/barre-de-recherche/code-de-la-barre-de-recherche · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/barre-de-recherche/accessibilite-de-la-barre-de-recherche · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/barre-de-recherche/demonstration-de-la-barre-de-recherche
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

La barre de recherche est un système de navigation permettant à l'usager d’accéder rapidement à un contenu en lançant une recherche sur un mot clé ou une phrase.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/barre-de-recherche

*(Démonstration interactive « search--search » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=search--search&nav=0&globals=theme%3Alight)*

### Quand utiliser ce composant

Utiliser la barre de recherche pour proposer une recherche globale (au sein d’un site) ou une recherche contextuelle (au sein d’une page, d’un composant dédié etc.).

### Comment utiliser ce composant

- **Proposer une barre de recherche assez large pour afficher 27 caractères minimum** . Cela permet à l’usager de saisir plusieurs termes qui restent visibles au sein du champ. Il peut ainsi facilement vérifier sa recherche avant de la soumettre.

> **À faire :** Proposer une barre de recherche de largeur correcte permettant d’afficher 27 caractères minimum.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/search/use/do-1.png)

> **À ne pas faire :** Ne pas utiliser de barre de recherche trop étroite où les 27 caractères ne sont pas lisibles.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/search/use/dont-1.png)

- **Intégrer la barre de recherche globale à l’en-tête** (cf. composant “ [En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete) ”) pour qu’elle soit accessible depuis l’ensemble des pages de votre site. Dans ce cas, la recherche doit se faire sur tout le contenu du site.

> **À faire :** Intégrer la barre de recherche globale à l’en-tête du site.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/search/use/do-2.png)

> **À ne pas faire :** Ne pas placer la barre de recherche globale ailleurs que dans l’en-tête ou modifier son positionnement au sein de l’en-tête.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/search/use/dont-2.png)

- **Valoriser la barre de recherche globale sur la page d’accueil** dès lors qu’elle constitue le point de départ de la navigation pour l’usager. Dans ce cas, elle doit être présentée comme l’élément le plus important de votre page d’accueil.
- **Ne pas afficher deux barres de recherches sur un même écran**

### Règles éditoriales

- **Rédiger un libellé de champ de saisie clair et concis** . L’usager doit comprendre facilement le contexte de la recherche (globale, par type de contenu, etc.)

> **À faire :** Rédiger un libellé de champ de saisie clair permettant à l’usager de comprendre le contexte de la recherche.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/search/edit/do-1.png)

- **Conserver le libellé “Rechercher” pour le bouton de recherche** . Il est clair pour l’usager et respecte les règles éditoriales préconisées pour le contenu des boutons.

#### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/barre-de-recherche/design-de-la-barre-de-recherche

![Anatomie de la barre de recherche](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/search/design/anatomy/anatomy-1.png)

1. Un champ — Obligatoire
2. Un bouton — Obligatoire
3. Un texte d’exemple — Obligatoire

### Variations

La barre de recherche n’a pas de variation.

### Tailles

La barre de recherche est disponible en 2 tailles :

- MD pour medium

*(Démonstration interactive « search--default » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=search--default&nav=0&globals=theme%3Alight)*

- LG pour large

*(Démonstration interactive « search--size-lg » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=search--size-lg&nav=0&globals=theme%3Alight)*

La largeur de la barre de recherche s’adapte à la taille de son conteneur.

> **Information**
> La taille du bouton est toujours définie par son libellé. Ici, c’est donc bien la taille du champ de saisie qui évolue jusqu’à prendre la totalité de la largeur du conteneur.

- **Choisir la barre de recherche MD** lorsqu'il y a des contraintes d'espace dans vos interfaces. Le cas d’usage principal est l’accès à la recherche globale depuis l’en-tête. Il peut également être spécifique à certains composants dans le cas de recherche contextuelle (exemple : recherche pour filtrer des listes ou à l’intérieur d’un tableau de données).
- **Choisir la barre de recherche LG** pour présenter un moteur de recherche global à l’intérieur d'une page (exemple : mise en avant de la recherche depuis la page d’accueil, moteur de recherche sur la liste de résultats de recherche etc.).

> **Information**
> En responsive version mobile et tablette, il est obligatoire d’utiliser le format MD qui est le plus adapté.

Si vous utilisez le format LG en desktop, le composant sera donc automatiquement redimensionné au format MD.

### États

La barre de recherche n’est sujette à aucun changement d’état.

### Personnalisation

La barre de recherche n’est pas personnalisable.

> **À ne pas faire :** Ne pas personnaliser la couleur du bouton de recherche
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/search/design/custom/dont-1.png)

> **À ne pas faire :** Ne pas personnaliser la couleur du liseré de la barre de recherche.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/search/design/custom/dont-2.png)

> **À ne pas faire :** Ne pas personnaliser l’icône du bouton de recherche.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/search/design/custom/dont-3.png)

#### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/barre-de-recherche/code-de-la-barre-de-recherche

### HTML

#### Structure du composant

Le composant **Barre de recherche** est un système de navigation qui permet à l'utilisateur d’accéder rapidement à un contenu en lançant une recherche sur un mot clé ou une expression. Le composant doit être utilisé dans un formulaire `<form>`, pour permettre un fonctionnement sans JS.

Sa structure est la suivante :

- Le conteneur de la barre de recherche doit être un élément HTML `<div>` avec le rôle `search` défini par la classe `fr-search-bar`.
- Le champ de recherche est un élément HTML `<input>` de type `search` défini par la classe `fr-input`.
- Le champ de recherche doit être associée à un libellé `<label>` avec la classe `fr-label`.
- Le bouton de recherche est un élément HTML `<button>` défini par la classe `fr-btn` et dispose d'un attribut `title` indiquant son action. Son type doit être défini à `submit` pour soumettre le formulaire au click ou avec la touche "entrée".
- Un message d'erreur ou de succès peut être associé au champ de recherche en utilisant un élément HTML `<div>` avec la classe `fr-messages-group` dans lequel on peut ajouter un message : un élément `<p>` avec la classe `fr-message`, et un modifier `fr-message--error` ou `fr-message--valid`.
  - Son attribut`id` doit être associé à l'attribut `aria-describedby` du champ de recherche.
  - Ce bloc peut être placé vide et être rempli dynamiquement, auquel cas il doit être annoncé à l'utilisateur en utilisant l'attribut `aria-live="polite"`.

**Exemple de structure HTML**

```html
<div class="fr-search-bar" role="search">
    <label class="fr-label" for="search-input">
        Rechercher
    </label>
    <input class="fr-input" aria-describedby="search-input-messages" placeholder="Rechercher" id="search-input" type="search">
    <div class="fr-messages-group" id="search-input-messages" aria-live="polite">
    </div>
    <button title="Rechercher" type="submit" class="fr-btn">Rechercher</button>
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
| Input | Oui |
| Button | Oui |
| Search | Oui |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/input/input.min.css" rel="stylesheet">
<link href="dist/component/button/button.min.css" rel="stylesheet">
<link href="dist/component/search/search.min.css" rel="stylesheet">
```

#### Variante de taille

La barre de recherche est disponible en deux variantes de tailles pour s'adapter à différents contextes d'utilisation. Pour appliquer une variante de taille, ajoutez une des classes suivantes à l'élément `<div class="fr-search-bar">` :

- En taille MD : par défaut.
- En taille LG : définie par la classe `fr-search-bar--lg`.

**Exemple de variante de taille**

```html
<div class="fr-search-bar fr-search-bar--lg" role="search">
  <!-- Contenu de la barre de recherche -->
</div>
```

#### Variante avec libellé

Par défaut, le libellé du champ de recherche est positionné hors écran. Pour rendre le libellé visible, ajoutez la classe `fr-search-bar--labelled` à l'élément `<div class="fr-search-bar">`. Ne pas utiliser cette variante dans le cas d'une recherche globale dans la page (dans le header), car le libellé est déjà présent dans le bouton de recherche.

**Exemple de variante avec libellé**

```html
<div class="fr-search-bar fr-search-bar--labelled" role="search">
  <!-- Contenu de la barre de recherche -->
</div>
```

---

### JavaScript

Le composant Barre de recherche **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+search+)

##### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/barre-de-recherche/accessibilite-de-la-barre-de-recherche

Le composant **Barre de recherche** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

L’ensemble des règles d’accessibilité du [champs de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie/accessibilite-du-champ-de-saisie) doivent être respectées.

- Le conteneur de la barre de recherche possède un `role="search"`.
- Le champ de recherche est de type `search`.
- Le champ de recherche a une étiquette positionnée, par défaut, hors écran. Le bouton de recherche adjacent permet de comprendre la nature et fonction du champ.
- Le bouton de recherche a un intitulé et un attribut title explicite.

### Contrastes de couleurs

Le composant Barre de recherche est suffisamment contrasté en thème clair et en thème sombre.

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Barre de recherche.

---

### Critères RGAA applicables

- **Couleurs :** 3.2, 3.3
- **Présentation de l’information :** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Formulaires :** 11.1, 11.2, 11.9
- **Navigation :** 12.1, 12.5, 12.6, 12.8, 12.9
- **Consultation :** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Rôle search](https://www.w3.org/TR/wai-aria/#search)
- [Technique G167 WCAG](https://www.w3.org/WAI/WCAG21/Techniques/general/G167) : labelliser un champ avec un bouton adjacent explicite.

#### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/barre-de-recherche/demonstration-de-la-barre-de-recherche

*(Démonstration interactive « search--docs » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=search--docs&nav=0&globals=theme%3Alight)*

#### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.
