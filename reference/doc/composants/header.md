# En-tête

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete/design-de-l-en-tete · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete/code-de-l-en-tete · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete/accessibilite-de-l-en-tete · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete/demonstration-de-l-en-tete
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

L’en-tête est un élément de navigation permettant aux usagers d’identifier sur quel site ils se trouvent et de leur donner un accès simplifié au moteur de recherche et à certaines pages ou fonctionnalités clés du site.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete

*(Démonstration interactive « header--header » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=header--header&nav=0&globals=theme%3Alight)*

### Quand utiliser ce composant ?

**Intégrer l’en-tête sur l’ensemble des sites de la sphère gouvernementale** . Au sein d’un site, l’en-tête doit être affiché en haut de chacune des pages.

### Comment utiliser ce composant ?

- **Utiliser l’en-tête simple** (bloc Marque, nom du site et baseline) pour les sites n’ayant pas l’utilité d’un moteur de recherche, ni d’accès rapides.
- **Utiliser l’en-tête avec accès rapides** pour les sites souhaitant mettre en avant certaines pages ou fonctionnalités clés, par exemple la connexion à un espace sécurisé.
- **Utiliser l’en-tête avec la recherche** pour les sites souhaitant rendre facilement accessible leur moteur de recherche.
- **Utiliser la version complète** (accès rapides et moteur de recherche) pour les sites souhaitant combinés les deux fonctionnalités.
- **Ajouter un badge comportant la mention "Bêta" à l’en-tête** pour notifier l’usager que le site ou l’applicatif n’est pas en version stable.
- **Compléter l’en-tête d’une navigation principale** si nécessaire. L’en-tête peut tout à fait vivre seul, sans système de navigation principale, par exemple dans le cas de one-pager ou de site outil. [La navigation principale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale) est un composant dissocié de l’en-tête.
- **Intégrer un lien vers la page d’accueil du site au sein de l’en-tête** . Son emplacement peut varier selon les éléments présents dans l’en-tête.

### Règles éditoriales

- **Proposer des libellés d’accès rapides clairs et concis** afin que l’usager comprenne facilement les pages ou fonctionnalités auxquelles il peut accéder.
- **Eviter de proposer un logo opérateur seul** et préférer l’accompagner du nom de site, voire d’une baseline, pour apporter du contexte à l’usager.

#### Contenu associé

- **[Navigation principale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale)**  
  Présentation du composant Navigation principale organisant les grandes rubriques d’un site et permettant à l’usager de s’orienter dans son arborescence.

- **[Pied de page](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page)**  
  Présentation du composant Pied de page destiné à structurer les informations complémentaires et les liens secondaires en bas de page.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete/design-de-l-en-tete

![Anatomie de l'en-tête](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/header/design/anatomy/anatomy-1.png)

1. Le bloc marque — Obligatoire
2. Un logo opérateur, au format vertical ou horizontal — En option
3. Le nom du site — En option
4. Une baseline, sous le nom du site — En option
5. Des boutons d’accès rapides, jusqu’à 3 maximum — En option
6. Une barre de recherche, de taille medium — En option

### Variations

**En-tête en berne**

*(Démonstration interactive « header--header-minimal » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=header--header-minimal&nav=0&args=isMourning%3Atrue&globals=theme%3Alight)*

Lors des périodes de deuil national, il est possible d’utiliser la version en berne du header. La Marianne s’affichera alors dans sa version en berne.

**Responsive**

*(Démonstration interactive « header--tool-links-search » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=header--tool-links-search&nav=0&globals=theme%3Alight)*

En version mobile, l’en-tête se compose d’une zone haute intégrant les éléments obligatoires liés au bloc marque. Le bloc marque suit les mêmes règle de composition que pour le desktop et doit respecter [la charte de marque de l'État](https://www.gouvernement.fr/marque-Etat) .

Il est complété d’une potentielle zone basse comprenant :

- Le nom du site - si présent,
- Le pictogramme “loupe” pour accéder à la recherche - si présente.

Il permet l’affichage de la barre de recherche dans un “overlay” dédié.

- Le pictogramme “burger” pour accéder au menu principal - si accès rapides et/ou navigation principale présents ( [voir en détail la navigation mobile](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale) ).

Il permet l’affichage du menu principal dans un “overlay“ dédié.

### Tailles

La largeur de l’en-tête est de taille fixe et prend les 12 colonnes disponibles de la grille.

La hauteur minimale de l’en-tête est également de taille fixe, puis celle-ci s’agrandit en fonction de la hauteur du bloc marque.

### États

L’en-tête n’est sujet à aucun changement d’état.

### Personnalisation

L’en-tête n’est pas personnalisable.

Toutefois, certains éléments sont optionnels - voir [la structure du composant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete/design-de-l-en-tete#en-tete) .

> **À faire :** Considérer que chaque élément de l’en-tête à une place définie et conserver leur design en l’état, sans personnalisation.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/header/design/custom/do-1.png)

> **À ne pas faire :** Ne pas modifier le positionnement des éléments de l’en-tête.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/header/design/custom/dont-1.png)

> **À ne pas faire :** Ne pas modifier les tailles et types de typographie du nom du site et de la baseline.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/header/design/custom/dont-2.png)

> **À ne pas faire :** Ne pas personnaliser le type de bouton des accès rapides.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/header/design/custom/dont-3.png)

> **À ne pas faire :** Ne pas proposer de contour aux boutons tertiaires, hormis s’il s’agit de celui positionner le plus à droite.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/header/design/custom/dont-4.png)

#### Contenu associé

- **[Navigation principale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale)**  
  Présentation du composant Navigation principale organisant les grandes rubriques d’un site et permettant à l’usager de s’orienter dans son arborescence.

- **[Pied de page](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page)**  
  Présentation du composant Pied de page destiné à structurer les informations complémentaires et les liens secondaires en bas de page.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete/code-de-l-en-tete

### HTML

#### Structure du composant

Le composant **En-tête** permet aux utilisateurs d’identifier sur quel site ils se trouvent. Il peut donner accès à la recherche et à certaines pages ou fonctionnalités clés.

Il est constitué d'un élément HTML `<header>` de classe `fr-header`, avec l'attribut `role="banner"` contenant :

- Un premier conteneur du corps de l'en-tête, est un élément HTML `<div>` défini par la classe `fr-header__body`.
  - Ce bloc doit contenir un élément HTML `<div>` de classe `fr-container` qui permet de centrer le contenu.
  - Un bloc de ligne de corps de l'en-tête, un élément HTML `<div>` défini par la classe `fr-header__body-row`, contenant :
    - Un conteneur du bloc marque (voir [Marque de l'état](https://www.info.gouv.fr/marque-de-letat) ), un élément HTML `<div>` de classes `fr-header__brand` et `fr-enlarge-link` pour étendre le lien à l’ensemble du bloc-marque et pouvant comporter deux sous-conteneurs :
      - Un conteneur de la partie supérieure, obligatoire, un élément HTML `<div>` de classes `fr-header__brand-top` contenant :
        - À minima le bloc marque dans un élément HTML `<div>` de classes `fr-header__logo`, il s'agit du composant [Bloc-marque de l'état](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bloc-marque/code-du-bloc-marque) de classe `fr-logo`.
        - Il peut aussi contenir un logo opérateur de l'État, une image (ou SVG) contenue dans un élément HTML `<div>` de classe `fr-header__operator`.
          - Utiliser un attribut `style="max-width:10rem;"`, avec comme valeur la largeur max du logo en fonction de son format (10rem pour du 16:9).
          - L'attribut `alt` doit être renseigné avec le nom de l'opérateur.
          - Le lien pointant vers l'accueil est alors positionné au niveau du logo de l'opérateur, il est automatiquement étendu à toute la zone du bloc marque.
          - L'attribut `title` du lien doit être renseigné sous la forme "Retour à l’accueil du site - [texte alternatif de l’image (nom de l'opérateur ou du site serviciel)] - République Française".
      - Et un bloc nom de service et description, optionnel, dans un élément HTML `<div>` de classe `fr-header__service`. - Le lien `<a>` dont l'attribut `title` doit être renseigné sous la forme "Accueil - [À MODIFIER - Nom du site / service] - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)" est alors placé sur le paragraphe `<p>` défini par la classe `fr-header__service-title` contenant le "nom de service". - Une description, optionnelle, dans un paragraphe `<p>` défini par la classe `fr-header__service-tagline`.
    - Un bloc d'accès rapides, optionnel, dans un élément HTML `<div>` de classes `fr-header__tools` et pouvant contenir :
      - La liste de liens d'accès rapides, optionnelle, est placée dans un élément HTML `<div>` de classes `fr-header__tools-links`, il s'agit d'un élément HTML `<ul>` de classes `fr-btns-group` (voir [Groupes de boutons](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton/code-du-bouton#groupes-de-boutons) ) contenant des liens, comme par exemple la connexion à un espace sécurisé et limité à 3 accès rapides maximum.
      - La barre de recherche, optionnelle, est placée dans un élément HTML `<div>` de classes `fr-header__search` (voir [Barre de recherche](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/barre-de-recherche/code-de-la-barre-de-recherche) ) et `fr-modal` pour s'afficher dans une modale en mobile (voir [Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale/code-de-la-modale) ).
      - Le sélecteur de langue, optionnel, est placé à la suite des liens d'accès rapides (voir [Sélecteur de langue](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/selecteur-de-langues/code-du-selecteur-de-langues) ).
      - Le bouton des paramètres d'affichage, optionnels, est placé à la suite des liens d'accès rapides et avant le sélecteur de langue (voir [Paramètre d'affichage](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/parametres-d-affichage/code-des-parametres-d-affichage) ).
    - Le conteneur de la navigation principale mobile, dans un élément HTML `<div>` de classes `fr-header__navbar` pouvant contenir :
      - Le bouton d'ouverture, obligatoire, du menu principale en mobile, un élément HTML `<button>` de type `button` défini par les classes `fr-btn` et `fr-btn--menu`.
        - Le bouton dispose d'un attribut `data-fr-opened`, sa valeur [true|false] défini si le bloc refermable de la navigation est ouvert ou fermé.
        - Le bouton est lié au bloc refermable via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` du bloc refermable.
      - Le bouton d'ouverture de la modale de recherche en mobile, optionnel, un élément HTML `<button>` de type `button` défini par les classes `fr-btn` et `fr-btn--search`.
        - Le bouton dispose d'un attribut `data-fr-opened`, sa valeur [true|false] défini si la modale de recherche est ouverte ou fermée.
        - Le bouton est lié à la modale de recherche via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` de la modale de recherche.
- Un second conteneur, de la navigation principale de l'en-tête dans un élément HTML `<div>` défini par les classes `fr-header__menu` et `fr-modal`, pour s'afficher dans une modale en mobile (voir [Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale/code-de-la-modale) ).
  - La modale de la navigation principale de l'en-tête contient un premier conteneur des liens d'accès rapides, un élément HTML `<div>` défini par la classe `fr-header__menu-links`, laissée vide et servant à dupliquer en Javascript pour le mobile les liens contenus dans la balise définie par la classe `fr-header__tools-links`.
  - La navigation principale de l'en-tête est contenue dans un élément HTML `<nav>` défini par la classe `fr-nav` (voir [Navigation principale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale/code-de-la-navigation-principale) ).

**Exemple de structure minimale**

#### Déplier pour voir le code

```html
<header role="banner" class="fr-header">
    <div class="fr-header__body">
        <div class="fr-container">
            <div class="fr-header__body-row">
                <div class="fr-header__brand fr-enlarge-link">
                    <div class="fr-header__brand-top">
                        <div class="fr-header__logo">
                            <a href="/" title="Accueil - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)">
                                <p class="fr-logo">
                                    Intitulé
                                    <br>officiel
                                </p>
                            </a>
                        </div>
                        <div class="fr-header__navbar">
                            <button data-fr-opened="false" aria-controls="modal-header" title="Menu" type="button" id="button-header" class="fr-btn--menu fr-btn">Menu</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="fr-header__menu fr-modal" id="modal-header" aria-labelledby="button-header">
        <div class="fr-container">
            <button aria-controls="modal-header" title="Fermer" type="button" id="button-2168" class="fr-btn--close fr-btn">Fermer</button>
            <div class="fr-header__menu-links">
            </div>
            <nav class="fr-nav" role="navigation" aria-label="Menu principal">
                <ul class="fr-nav__list">
                    <li class="fr-nav__item">
                        <a type="link" href="#" class="fr-nav__link">accès direct</a>
                    </li>
                    <li class="fr-nav__item">
                        <a type="link" href="#" class="fr-nav__link">accès direct</a>
                    </li>
                    <li class="fr-nav__item">
                        <a type="link" href="#" class="fr-nav__link">accès direct</a>
                    </li>
                    <li class="fr-nav__item">
                        <a type="link" href="#" class="fr-nav__link">accès direct</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</header>
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
| Logo | Oui |  |
| Header | Oui |  |
| Button | Non | Si utilisation de boutons, ou d'une barre de recherche |
| Navigation | Non | Si utilisation d'une navigation principale |
| Search | Non | Si utilisation d'une barre de recherche |
| Link | Non | Si utilisation de liens d'accès rapide |
| Translate | Non | Si utilisation d'un sélecteur de langue |
| Modal | Non | Si utilisation d'un des 4 éléments précédents, qui s'ouvrent dans une modale en mobile |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/logo/logo.min.css" rel="stylesheet">
<link href="dist/component/header/header.min.css" rel="stylesheet">
```

#### Variante sans navigation

Le composant en-tête peut être utilisé sans navigation.

**Exemple de variante sans navigation**

#### Déplier pour voir le code

```html
<header role="banner" class="fr-header">
    <div class="fr-header__body">
        <div class="fr-container">
            <div class="fr-header__body-row">
                <div class="fr-header__brand fr-enlarge-link">
                    <div class="fr-header__brand-top">
                        <div class="fr-header__logo">
                            <p class="fr-logo">
                                Intitulé
                                <br>officiel
                            </p>
                        </div>
                    </div>
                    <div class="fr-header__service">
                        <a href="/" title="Accueil - [À MODIFIER - Nom du site / service] - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)">
                            <p class="fr-header__service-title">
                                Nom du site / service
                            </p>
                        </a>
                        <p class="fr-header__service-tagline">baseline - précisions sur l‘organisation</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
```

#### Variante avec une liste de raccourcis

Le composant en-tête peut être utilisé avec une liste de raccourcis.

**Exemple de variante avec une liste de raccourcis**

#### Déplier pour voir le code

```html
<header role="banner" class="fr-header">
    <div class="fr-header__body">
        <div class="fr-container">
            <div class="fr-header__body-row">
                <div class="fr-header__brand fr-enlarge-link">
                    <div class="fr-header__brand-top">
                        <div class="fr-header__logo">
                            <p class="fr-logo">
                                Intitulé
                                <br>officiel
                            </p>
                        </div>
                        <div class="fr-header__navbar">
                            <button data-fr-opened="false" aria-controls="modal-nav" title="Menu" type="button" id="button-menu" class="fr-btn--menu fr-btn">Menu</button>
                        </div>
                    </div>
                    <div class="fr-header__service">
                        <a href="/" title="Accueil - [À MODIFIER - Nom du site / service] - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)">
                            <p class="fr-header__service-title">
                                Nom du site / service
                            </p>
                        </a>
                        <p class="fr-header__service-tagline">baseline - précisions sur l‘organisation</p>
                    </div>
                </div>
                <div class="fr-header__tools">
                    <div class="fr-header__tools-links">
                        <ul class="fr-btns-group">
                            <li>
                                <a href="[url - à modifier]" class="fr-btn--team fr-btn">Contact</a>
                            </li>
                            <li>
                                <a href="[url - à modifier]" class="fr-btn--briefcase fr-btn">Espace recruteur</a>
                            </li>
                            <li>
                                <a href="[url - à modifier]" class="fr-btn--account fr-btn">Espace particulier</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="fr-header__menu fr-modal" id="modal-nav" aria-labelledby="button-menu">
        <div class="fr-container">
            <button aria-controls="modal-nav" title="Fermer" type="button" id="button-2188" class="fr-btn--close fr-btn">Fermer</button>
            <div class="fr-header__menu-links">
            </div>
        </div>
    </div>
</header>
```

#### Variante avec selecteur de langues

Le composant en-tête peut être utilisé avec le selecteur de langues.

**Exemple de variante avec selecteur de langues**

#### Déplier pour voir le code

```html
<header role="banner" class="fr-header">
    <div class="fr-header__body">
        <div class="fr-container">
            <div class="fr-header__body-row">
                <div class="fr-header__brand fr-enlarge-link">
                    <div class="fr-header__brand-top">
                        <div class="fr-header__logo">
                            <p class="fr-logo">
                                Intitulé
                                <br>officiel
                            </p>
                        </div>
                        <div class="fr-header__navbar">
                            <button data-fr-opened="false" aria-controls="modal-nav" title="Menu" type="button" id="button-menu" class="fr-btn--menu fr-btn">Menu</button>
                        </div>
                    </div>
                    <div class="fr-header__service">
                        <a href="/" title="Accueil - [À MODIFIER - Nom du site / service] - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)">
                            <p class="fr-header__service-title">
                                Nom du site / service
                            </p>
                        </a>
                        <p class="fr-header__service-tagline">baseline - précisions sur l‘organisation</p>
                    </div>
                </div>
                <div class="fr-header__tools">
                    <div class="fr-header__tools-links">
                        <nav role="navigation" class="fr-translate fr-nav">
                            <div class="fr-nav__item">
                                <button aria-controls="translate" aria-expanded="false" type="button" class="fr-translate__btn fr-btn">FR<span class="fr-hidden-lg">&nbsp;- Français</span>
                                </button>
                                <div class="fr-collapse fr-translate__menu fr-menu" id="translate">
                                    <ul class="fr-menu__list">
                                        <li>
                                            <a class="fr-translate__language fr-nav__link" hreflang="fr" lang="fr" href="/fr/" aria-current="true">FR - Français</a>
                                        </li>
                                        <li>
                                            <a class="fr-translate__language fr-nav__link" hreflang="en" lang="en" href="/en/">EN - English</a>
                                        </li>
                                        <li>
                                            <a class="fr-translate__language fr-nav__link" hreflang="es" lang="es" href="/es/">ES - Español</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="fr-header__menu fr-modal" id="modal-nav" aria-labelledby="button-menu">
        <div class="fr-container">
            <button aria-controls="modal-nav" title="Fermer" type="button" id="button-2188" class="fr-btn--close fr-btn">Fermer</button>
            <div class="fr-header__menu-links">
            </div>
        </div>
    </div>
</header>
```

#### Variante avec selecteur de langues et paramètre d'affichage

Le composant en-tête peut être utilisé avec le selecteur de langues et paramètre d'affichage.

**Exemple de variante avec selecteur de langues et paramètre d'affichage**

#### Déplier pour voir le code

```html
<header role="banner" class="fr-header">
    <div class="fr-header__body">
        <div class="fr-container">
            <div class="fr-header__body-row">
                <div class="fr-header__brand fr-enlarge-link">
                    <div class="fr-header__brand-top">
                        <div class="fr-header__logo">
                            <p class="fr-logo">
                                Intitulé
                                <br>officiel
                            </p>
                        </div>
                        <div class="fr-header__navbar">
                            <button data-fr-opened="false" aria-controls="modal-nav" title="Menu" type="button" id="button-menu" class="fr-btn--menu fr-btn">Menu</button>
                        </div>
                    </div>
                    <div class="fr-header__service">
                        <a href="/" title="Accueil - [À MODIFIER - Nom du site / service] - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)">
                            <p class="fr-header__service-title">
                                Nom du site / service
                            </p>
                        </a>
                        <p class="fr-header__service-tagline">baseline - précisions sur l‘organisation</p>
                    </div>
                </div>
                <div class="fr-header__tools">
                    <div class="fr-header__tools-links">
                        <button aria-controls="fr-theme-modal" data-fr-opened="false" type="button" class="fr-icon-theme-fill fr-btn--icon-left fr-btn fr-btn">Paramètres d'affichage</button>
                        <nav role="navigation" class="fr-translate fr-nav">
                            <div class="fr-nav__item">
                                <button aria-controls="translate" aria-expanded="false" type="button" class="fr-translate__btn fr-btn">FR<span class="fr-hidden-lg">&nbsp;- Français</span>
                                </button>
                                <div class="fr-collapse fr-translate__menu fr-menu" id="translate">
                                    <ul class="fr-menu__list">
                                        <li>
                                            <a class="fr-translate__language fr-nav__link" hreflang="fr" lang="fr" href="/fr/" aria-current="true">FR - Français</a>
                                        </li>
                                        <li>
                                            <a class="fr-translate__language fr-nav__link" hreflang="en" lang="en" href="/en/">EN - English</a>
                                        </li>
                                        <li>
                                            <a class="fr-translate__language fr-nav__link" hreflang="es" lang="es" href="/es/">ES - Español</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="fr-header__menu fr-modal" id="modal-nav" aria-labelledby="button-menu">
        <div class="fr-container">
            <button aria-controls="modal-nav" title="Fermer" type="button" class="fr-btn--close fr-btn">Fermer</button>
            <div class="fr-header__menu-links">
            </div>
        </div>
    </div>
</header>
```

#### Variante avec logo opérateur vertical, recherche

Le composant en-tête peut être utilisé avec un logo opérateur vertical et la barre de recherche.

**Exemple de variante avec logo opérateur vertical, recherche**

#### Déplier pour voir le code

```html
<header role="banner" class="fr-header">
    <div class="fr-header__body">
        <div class="fr-container">
            <div class="fr-header__body-row">
                <div class="fr-header__brand fr-enlarge-link">
                    <div class="fr-header__brand-top">
                        <div class="fr-header__logo">
                            <p class="fr-logo">
                                République
                                <br>Française
                            </p>
                        </div>
                        <div class="fr-header__operator">
                            <a href="/" title="Accueil - [À MODIFIER - texte alternatif de l’image : nom de l'opérateur ou du site serviciel] - République Française">
                                <img class="fr-responsive-img" style="max-width:3.5rem;" src="../../../example/img/placeholder.3x4.png" alt="[À MODIFIER - texte alternatif de l’image]" />
                                <!-- L’alternative de l’image (attribut alt) doit impérativement être renseignée et reprendre le texte visible dans l’image -->
                            </a>
                        </div>
                        <div class="fr-header__navbar">
                            <button data-fr-opened="false" aria-controls="modal-search" title="Rechercher" type="button" id="button-search" class="fr-btn--search fr-btn">Rechercher</button>
                            <button data-fr-opened="false" aria-controls="modal-nav" title="Menu" type="button" id="button-menu" class="fr-btn--menu fr-btn">Menu</button>
                        </div>
                    </div>
                </div>
                <div class="fr-header__tools">
                    <div class="fr-header__search fr-modal" id="modal-search" aria-labelledby="button-search">
                        <div class="fr-container fr-container-lg--fluid">
                            <button aria-controls="modal-search" title="Fermer" type="button" class="fr-btn--close fr-btn">Fermer</button>
                            <div class="fr-search-bar" role="search">
                                <label class="fr-label" for="search-input">
                                    Rechercher
                                </label>
                                <input class="fr-input" aria-describedby="search-input-messages" placeholder="Rechercher" id="search-input" type="search">
                                <div class="fr-messages-group" id="search-input-messages" aria-live="polite">
                                </div>
                                <button title="Rechercher" type="button" class="fr-btn">Rechercher</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="fr-header__menu fr-modal" id="modal-nav" aria-labelledby="button-menu">
        <div class="fr-container">
            <button aria-controls="modal-nav" title="Fermer" type="button" class="fr-btn--close fr-btn">Fermer</button>
            <div class="fr-header__menu-links">
            </div>
            <nav class="fr-nav" role="navigation" aria-label="Menu principal">
                <ul class="fr-nav__list">
                    <li class="fr-nav__item">
                        <a type="link" href="#" class="fr-nav__link">accès direct</a>
                    </li>
                    <li class="fr-nav__item">
                        <a type="link" href="#" class="fr-nav__link">accès direct</a>
                    </li>
                    <li class="fr-nav__item">
                        <a type="link" href="#" class="fr-nav__link">accès direct</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</header>
```

#### Variante avec logo opérateur horizontal, nom de service, lien d’accès, recherche

Le composant en-tête peut être utilisé avec un logo opérateur horizontal, nom de service, lien d’accès et la barre de recherche.

**Exemple de variante avec logo opérateur horizontal, nom de service, lien d’accès, recherche**

#### Déplier pour voir le code

```html
<header role="banner" class="fr-header">
    <div class="fr-header__body">
        <div class="fr-container">
            <div class="fr-header__body-row">
                <div class="fr-header__brand fr-enlarge-link">
                    <div class="fr-header__brand-top">
                        <div class="fr-header__logo">
                            <p class="fr-logo">
                                République
                                <br>Française
                            </p>
                        </div>
                        <div class="fr-header__operator">
                            <img class="fr-responsive-img" style="max-width:8rem;" src="../../../example/img/placeholder.16x9.png" alt="[À MODIFIER - texte alternatif de l’image]" />
                            <!-- L’alternative de l’image (attribut alt) doit impérativement être renseignée et reprendre le texte visible dans l’image -->
                        </div>
                        <div class="fr-header__navbar">
                            <button data-fr-opened="false" aria-controls="modal-search" title="Rechercher" type="button" id="button-search" class="fr-btn--search fr-btn">Rechercher</button>
                            <button data-fr-opened="false" aria-controls="modal-nav" title="Menu" type="button" id="button-menu" class="fr-btn--menu fr-btn">Menu</button>
                        </div>
                    </div>
                    <div class="fr-header__service">
                        <a href="/" title="Accueil - [À MODIFIER - Nom du site / service] - [À MODIFIER - texte alternatif de l’image : nom de l'opérateur ou du site serviciel] - République Française">
                            <p class="fr-header__service-title">
                                Nom du site / service
                            </p>
                        </a>
                        <p class="fr-header__service-tagline">baseline - précisions sur l‘organisation</p>
                    </div>
                </div>
                <div class="fr-header__tools">
                    <div class="fr-header__tools-links">
                        <ul class="fr-btns-group">
                            <li>
                                <a href="[url - à modifier]" class="fr-btn--team fr-btn">Contact</a>
                            </li>
                            <li>
                                <a href="[url - à modifier]" class="fr-btn--briefcase fr-btn">Espace recruteur</a>
                            </li>
                            <li>
                                <a href="[url - à modifier]" class="fr-btn--account fr-btn">Espace particulier</a>
                            </li>
                        </ul>
                    </div>
                    <div class="fr-header__search fr-modal" id="modal-search" aria-labelledby="button-search">
                        <div class="fr-container fr-container-lg--fluid">
                            <button aria-controls="modal-search" title="Fermer" type="button" class="fr-btn--close fr-btn">Fermer</button>
                            <div class="fr-search-bar" role="search">
                                <label class="fr-label" for="search-input">
                                    Rechercher
                                </label>
                                <input class="fr-input" aria-describedby="search-input-messages" placeholder="Rechercher" id="search-input" type="search">
                                <div class="fr-messages-group" id="search-input-messages" aria-live="polite">
                                </div>
                                <button title="Rechercher" type="button" class="fr-btn">Rechercher</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="fr-header__menu fr-modal" id="modal-nav" aria-labelledby="button-menu">
        <div class="fr-container">
            <button aria-controls="modal-nav" title="Fermer" type="button" class="fr-btn--close fr-btn">Fermer</button>
            <div class="fr-header__menu-links">
            </div>
            <nav class="fr-nav" role="navigation" aria-label="Menu principal">
                <ul class="fr-nav__list">
                    <li class="fr-nav__item">
                        <a type="link" href="#" class="fr-nav__link">accès direct</a>
                    </li>
                    <li class="fr-nav__item">
                        <a type="link" href="#" class="fr-nav__link">accès direct</a>
                    </li>
                    <li class="fr-nav__item">
                        <a type="link" href="#" class="fr-nav__link">accès direct</a>
                    </li>
                    <li class="fr-nav__item">
                        <a type="link" href="#" class="fr-nav__link">accès direct</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</header>
```

#### Variante avec badge BETA

Le composant en-tête peut être utilisé avec un badge "BETA" accolé au nom du site / service.

**Exemple de variante avec badge BETA**

#### Déplier pour voir le code

```html
<header role="banner" class="fr-header">
    <div class="fr-header__body">
        <div class="fr-container">
            <div class="fr-header__body-row">
                <div class="fr-header__brand fr-enlarge-link">
                    <div class="fr-header__brand-top">
                        <div class="fr-header__logo">
                            <p class="fr-logo">
                                Intitulé
                                <br>officiel
                            </p>
                        </div>
                    </div>
                    <div class="fr-header__service">
                        <a href="/" title="Accueil - [À MODIFIER - Nom du site / service] - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)">
                            <p class="fr-header__service-title">
                                Nom du site / service
                                <span class="fr-badge fr-badge--sm fr-badge--green-emeraude">BETA</span>
                            </p>
                        </a>
                        <p class="fr-header__service-tagline">baseline - précisions sur l‘organisation</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
```

#### Variante avec raccourcis dupliqués, pour Angular, React et Vue

Dans le cadre de l'utilisation du DSFR dans un contexte de Single-page application ( [SPA](https://developer.mozilla.org/fr/docs/Glossary/SPA) ) l'API du DSFR permet de désactiver la recopie Javascript des raccourcis dans la modale de navigation principale en mobile avec l'utilisation des modes mis à disposition à l'instanciation de l'API JS du DSFR (voir [API Javascript du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/premiers-pas/vous-etes-developpeur/api-javascript) ).

> **Attention**
> Il faudra dupliquer manuellement les liens et boutons présents dans le bloc d'accès rapide défini par la classe `fr-header__tools-links` dans le conteneur prévu à cet effet dans la modale mobile de la navigation principale défini par la classe `fr-header__menu-links`. Pensez à modifier les `id`.

**Exemple de variante avec raccourcis dupliqués, pour Angular, React et Vue**

#### Déplier pour voir le code

```html
<header role="banner" class="fr-header">
    <div class="fr-header__body">
        <div class="fr-container">
            <div class="fr-header__body-row">
                <div class="fr-header__brand fr-enlarge-link">
                    <div class="fr-header__brand-top">
                        <div class="fr-header__logo">
                            <a href="/" title="Accueil - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)">
                                <p class="fr-logo">
                                    Intitulé
                                    <br>officiel
                                </p>
                            </a>
                        </div>
                        <div class="fr-header__navbar">
                            <button data-fr-opened="false" aria-controls="modal-menu" title="Menu" type="button" id="button-menu" class="fr-btn--menu fr-btn">Menu</button>
                        </div>
                    </div>
                </div>
                <div class="fr-header__tools">
                    <div class="fr-header__tools-links">
                        <ul class="fr-btns-group">
                            <li>
                                <a href="[url - à modifier]" class="fr-btn--team fr-btn">Contact</a>
                            </li>
                            <li>
                                <a href="[url - à modifier]" class="fr-btn--briefcase fr-btn">Espace recruteur</a>
                            </li>
                            <li>
                                <a href="[url - à modifier]" class="fr-btn--account fr-btn">Espace particulier</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="fr-header__menu fr-modal" id="modal-menu" aria-labelledby="button-menu">
        <div class="fr-container">
            <button aria-controls="modal-menu" title="Fermer" type="button" class="fr-btn--close fr-btn">Fermer</button>
            <div class="fr-header__menu-links">
                <ul class="fr-btns-group">
                    <li>
                        <a href="[url - à modifier]" class="fr-btn--team fr-btn fr-btn">Contact</a>
                    </li>
                    <li>
                        <a href="[url - à modifier]" class="fr-btn--briefcase fr-btn fr-btn">Espace recruteur</a>
                    </li>
                    <li>
                        <a href="[url - à modifier]" class="fr-btn--account fr-btn fr-btn">Espace particulier</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</header>
```

#### Variante deuil national

Lors des périodes de deuil national, il est possible d’utiliser la version en berne de l'en-tête, en ajoutant à la balise `<html>` l’attribut `data-fr-mourning`. La Marianne s’affichera alors dans sa version en berne.

**Exemple de variante deuil national**

```html
<html lang="fr" data-fr-mourning>
```

---

### JavaScript

En dehors de la version minimal, les versions avec navigation, avec liens d'accès rapides, avec barre de recherche, ou avec sélecteur de langues, nécessitent l'utilisation de JavaScript pour l'ouverture de modales en mobile.

#### Installation du JavaScript

Pour fonctionner correctement, le JavaScript du composant et de ses dépendances doivent être importés. L'import doit se faire à la fin de la page, avant la balise `</body>`, et de préférence avec les fichiers minifiés, car plus légers.

**Dépendances JS**

| Dépendance | Obligatoire |
|---|---|
| Core | Oui |
| Navigation | Oui |
| Modal | Oui |
| Header | Oui |

**Exemple d'imports JavaScript**

```html
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/navigation/navigation.module.min.js"></script>
<script type="module" src="dist/component/modal/modal.module.min.js"></script>
<script type="module" src="dist/component/header/header.module.min.js"></script>
```

NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`

Pour fonctionner sur Internet Explorer 11, des fichiers legacy, en version nomodule ES5, peuvent aussi être importés :

```html
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/navigation/navigation.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/modal/modal.nomodule.min.js"></
<script type="text/javascript" nomodule src="dist/component/header/header.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### SPA

Afin d'éviter une duplication du code HTML et d'alourdir les snippets de code, le DSFR duplique et injecte automatiquement en JavaScript les éléments d'accès rapide présents dans le conteneur `fr-header__tools-links` vers le conteneur `fr-header__menu-links` de la modale de navigation principale en mobile.

Dans le cadre de l'utilisation du DSFR dans un contexte de Single-page application (Angular, Vue, React, etc..), il peut être nécessaire d'effectuer la recopie des éléments placés dans `fr-header__tools-links` au sein de la modale de navigation principale en mobile **avant** d’exécuter les scripts du DSFR, afin que ces éléments soient pris en compte par votre Framework. Les modes `vue`, `angular`, `react` de [l'API Javascript du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/premiers-pas/vous-etes-developpeur/api-javascript#mode) permettent de désactiver les manipulation du DOM par le DSFR et de lancer manuellement le script du DSFR après le chargement de la SPA avec `dsfr.start()`.

#### Instances

Sur l'en-tête', les éléments suivants sont instanciés :

- Le conteneur principal, via la classe : `fr-header`.
- Le conteneur des liens d'accès direct, via la classe : `fr-header__tools-links`.
- Le conteneur des liens d'accès direct dans la modale de la navigation principale en mobile, via la classe : `fr-header__menu-links`.
- Les boutons et liens d'accès direct, via les classes `fr-header__tools-links` et `fr-btns-group` ou `fr-links-group`.
- Les modales de la barre de recherche et de la navigation principale en mobile, via les classes `fr-header__search` plus `fr-modal` et `fr-header__menu` plus `fr-modal`.

Une fois chargé, le Js ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés.

#### API

Il est possible d'interagir avec les instances du composants en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :

```js
const elem = document.getElementById('ID_SOUS_SECTION');
dsfr(elem).collapse.disclose();
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

###### headerModal

**isEnabled**

| **Description** | Défini si le fonctionnement de la modale de navigation principale mobile est activé ou non |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).headerModal.isEnabled = false` |

**node**

| **Description** | Renvoie le noeud HTML de l'élément. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).headerModal.node` |

###### modal & modalButton

voir [Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale/code-de-la-modale#api)

#### Événements

Le Système de Design fournit des événements personnalisés pour les actions uniques de la part de certains composants réactifs listés sur la page de l' [API Javascript](https://www.systeme-de-design.gouv.fr/version-courante/fr/premiers-pas/vous-etes-developpeur/api-javascript) .

En version mobile, sur la modale de navigation principale, les événements suivants sont disponibles :

**événements**

| Événement | Action | Élément | Attribut |
|---|---|---|---|
| `dsfr.conceal` | Fermeture de la modale | Modal | `data-fr-js-modal` |
| `dsfr.disclose` | Ouverture de la modale | Modal | `data-fr-js-modal` |
| `dsfr.click` | Click sur le bouton d'ouverture | ModalButton | `data-fr-js-modal-button` |

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+header+)

#### [v1.15.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.15.0) - 17 juillet 2026

- **[améliore l'affichage des éléments de l'en-tête et de la navigation en mobile](https://github.com/GouvernementFR/dsfr/pull/1367)**  
  #1367  
  - Uniformise les marges des raccourcis dans une liste
- Affiche un raccourci de la même façon avec ou sans liste
- Cache le séparateur des raccourcis quand il n'y a pas de navigation
- Identifie comme "actif" les N1 dépliants dans la navigation
- Aligne pas tous les éléments uniformément dans l'en-tête  
  🐛 fix  
  header navigation

- **[typo doc design header](https://github.com/GouvernementFR/dsfr/pull/1363)**  
  #1363  
  📝 docs  
  header

#### [v1.13.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.13.1) - 26 mars 2025

- **[correctif template ejs](https://github.com/GouvernementFR/dsfr/pull/1073)**  
  #1073  
  - Correctif des variables des templates sidemenu, navigation, header  
  🐛 fix  
  sidemenu navigation header

#### [v1.13.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.13.0) - 4 décembre 2024

- **[retrait aria-label sur modales désactivées](https://github.com/GouvernementFR/dsfr/pull/1018)**  
  #1018  
  - En desktop, lorsque les modales de menu et recherche sont désactivés, les attributs aria-label et aria-labelledby sont retirés  
  🐛 fix  
  header

- **[duplication aria-describedby & labelledby](https://github.com/GouvernementFR/dsfr/pull/976)**  
  #976  
  - Permet la duplication des attributs aria dans le menu mobile des accès rapides  
  🐛 fix  
  header

- **[correction focus croppé](https://github.com/GouvernementFR/dsfr/pull/1008)**  
  #1008  
  - Correction du focus croppé sur la navigation latérale
- Correction du focus croppé sur le header en mobile  
  🐛 feat  
  header sidemenu

#### [v1.12.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.12.0) - 19 juin 2024

- **[réduction de la zone de clic retour à l'accueil](https://github.com/GouvernementFR/dsfr/pull/944)**  
  #944  
  - sur le header mobile la partie à droite du brand n'est plus cliquable pour éviter les clics manqués sur le burger ou la recherche, et le lien du nom de service n'est plus étendu sur toute la largeur
- sur le footer mobile la zone de clic n'est plus étendu sur toute la largeur  
  🐛 fix  
  footer header

#### [v1.11.2](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.2) - 4 mars 2024

- **[correctif erreur itérable null](https://github.com/GouvernementFR/dsfr/pull/893)**  
  #893  
  - corrige l'issue #890, la valeur null renvoyée par la fonction match est remplacée par un array vide pour permettre son itération  
  🐛 fix  
  header

- **[correction overflow hidden cache le focus](https://github.com/GouvernementFR/dsfr/pull/881)**  
  #881  
  - correction du focus caché par un overflow hidden, sur le lien du logo du header  
  🐛 fix  
  header

#### [v1.11.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.1) - 31 janvier 2024

- **[corrige les alignements des liens outils](https://github.com/GouvernementFR/dsfr/pull/876)**  
  #876  
  🐛 fix  
  header

- **[espacement des liens d'accès rapide en mobile](https://github.com/GouvernementFR/dsfr/pull/859)**  
  #859  
  - corrige la taille des boutons d'accès rapide dans le menu mobile  
  🐛 fix  
  header

- **[corrige le focus sur le champ de recherche](https://github.com/GouvernementFR/dsfr/pull/864)**  
  #864  
  🐛 fix  
  header

- **[retire l'attribut aria-haspopup du bouton burger](https://github.com/GouvernementFR/dsfr/pull/856)**  
  #856  
  ✨ feat  
  header

- **[retrait de l'icone target blank](https://github.com/GouvernementFR/dsfr/pull/872)**  
  #872  
  🐛 fix  
  footer header connect

- **[corrige la duplication des collapses dans le menu mobile](https://github.com/GouvernementFR/dsfr/pull/873)**  
  #873  
  🐛 fix  
  header

#### [v1.11.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.0) - 11 décembre 2023

- **[augmente le z-index du header](https://github.com/GouvernementFR/dsfr/pull/830)**  
  #830  
  - ajout d'un niveau d'élévation `raised-over`
- le header passe en z-index `raised-over` pour passer par dessus les cartes avec ombre  
  🐛 fix  
  header

- **[ajustements header](https://github.com/GouvernementFR/dsfr/pull/791)**  
  #791  
  - change la couleur du menu burger en $action-high-bleu-france en mobile
- passe l'écart entre bloc marque et logo opérateur à 32px et l'écart entre logo opérateur et nom du site à 32px
- réduit la taille de la barre de recherche à 96v (24rem) au lieu de 25rem
- bloque la taille du logo opérateur à 8rem max (144px)
- passe la taille du texte de la tagline en sm (14px) au lieu de md
- passe le bouton burger en tertiaire avec border  
  🐛 fix  
  header

- **[token titre service](https://github.com/GouvernementFR/dsfr/pull/745)**  
  #745  
  - le token de couleur du texte de service passe en text-title-grey à la place de text-default-grey  
  🐛 fix  
  header

- **[mise à jour des exemples](https://github.com/GouvernementFR/dsfr/pull/727)**  
  #727  
  - ajout exemple utilisateur connecté
- ajoute des exemples avec un seul raccourcis (sans liste)
- ajoute les modifier de bouton account briefcase et team  
  🐛 fix  
  header

#### [v1.10.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.10.0) - 19 juillet 2023

- **[correctif régression scroll horizontal](https://github.com/GouvernementFR/dsfr/pull/697)**  
  #697  
  - La navigation du header créée un scroll horizontal dans la page
- l'ajout d'un max-width prévient le problème  
  🐛 fix  
  header

- **[homogénéisation des espacements et indentation](https://github.com/GouvernementFR/dsfr/pull/678)**  
  #678  
  - Uniformisation du menu latéral, navigation, et accordéon
  - ajout d'un fond open-blue-france et du texte en blue-france sur les boutons d'ouverture en état ouvert
  - ajout de marge pour indenter les sous menus
  - ajustement des espacements
- Ajustement de la navigation du header en mobile
- Ajustement de la taille max de la navigation dans le header en desktop  
  ✨ feat  
  navigation header sidemenu

- **[duplication des id généralisée pour les quick access](https://github.com/GouvernementFR/dsfr/pull/637)**  
  #637  
  - L'ensemble des id présents dans les accès rapides du header doivent être suffixés par -mobile à la duplication  
  🐛 fix  
  header

- **[focus des nav-items mobile & ajustements](https://github.com/GouvernementFR/dsfr/pull/609)**  
  #609  
  - L'outline de focus est maintenant entièrement visible sur les liens des sous menu en mobile
- Ajustement de l'alignement du bouton fermé en desktop
- Retrait du mega-menu__leader vide dans les examples  
  🐛 fix  
  header navigation

#### [v1.9.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.9.1) - 11 avril 2023

- **[fermeture de la navigation au clic sur lien ou bouton](https://github.com/GouvernementFR/dsfr/pull/583)**  
  #583  
  Actuellement, la navigation reste présente en mobile et en desktop lorsque l'on clique sur un lien ou un bouton qu'elle contient, ce qui pose problème dans le cas des Single-page application. La fonctionnalité est maintenant modifiée pour que tout clic sur un élément `<button>` ou `<a>` entraîne la fermeture de la navigation (modale et/ou menu). L'ajout de l'attribut `data-fr-prevent-conceal` permet de préserver un lien ou un bouton particulier de ce nouveau comportement.  
  ✨ feat  
  header navigation

#### [v1.9.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.9.0) - 1 mars 2023

- **[copie du sélecteur de langue sans accès rapide](https://github.com/GouvernementFR/dsfr/pull/547)**  
  #547  
  Les accès rapides sont dupliqués dans le menu mobile par le JS (sauf dans les modes SPA) En l'absence d'accès rapide, le sélecteur de langue n'était pas dupliqué comme attendu  
  fix  
  header

- **[alignement à gauche des raccourcis sans icônes](https://github.com/GouvernementFR/dsfr/pull/542)**  
  #542  
  L'absence d'icône sur les accès rapides de l'En-tête provoque un alignement centré au lieu d'un alignement gauche attendu.  
  fix  
  header

#### [v1.7.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.7.0) - 21 juillet 2022

- **[généralisation de l'attribut 'title' du lien retour/accueil du logo](https://github.com/GouvernementFR/dsfr/pull/353)**  
  #353  
  fix  
  footer header

#### [v1.6.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.6.0) - 14 juin 2022

- **[correctif espacement liens rapides](https://github.com/GouvernementFR/dsfr/pull/335)**  
  #335  
  fix  
  header

- **[correction espacements des groupes](https://github.com/GouvernementFR/dsfr/pull/311)**  
  #311  
  refactor  
  header link button follow share tag badge

#### [v1.5.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.5.0) - 21 avril 2022

- **[bandeau de site en beta](https://github.com/GouvernementFR/dsfr/pull/269)**  
  #269  
  feat  
  header

#### [v1.4.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.4.0) - 16 mars 2022

- **[retours dépréciation](https://github.com/GouvernementFR/dsfr/pull/241)**  
  #241  
  fix  
  header follow content

#### [v1.2.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.2.1) - 29 novembre 2021

- **[allègement hover bloc marque](https://github.com/GouvernementFR/dsfr/pull/155)**  
  #155  
  fix  
  header

- **[corrections css pour IE, valeur initial](https://github.com/GouvernementFR/dsfr/pull/144)**  
  #144  
  fix  
  header

#### [v1.2.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.2.0) - 17 novembre 2021

- **[correction semicolon manquant devant last-child](https://github.com/GouvernementFR/dsfr/pull/50)**  
  #50  
  fix  
  header

##### Contenu associé

- **[Navigation principale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale)**  
  Présentation du composant Navigation principale organisant les grandes rubriques d’un site et permettant à l’usager de s’orienter dans son arborescence.

- **[Pied de page](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page)**  
  Présentation du composant Pied de page destiné à structurer les informations complémentaires et les liens secondaires en bas de page.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete/accessibilite-de-l-en-tete

Le composant **En-tête** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Il n'y a aucune interaction spécifique au composant **En-tête** .

Les interactions clavier sont celles des composants qui la compose :

- voir [Bloc marque](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bloc-marque/accessibilite-du-bloc-marque) .
- voir [Lien](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lien/accessibilite-du-lien) .
- voir [Bouton](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton/accessibilite-du-bouton) .
- voir [Barre de recherche](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/barre-de-recherche/accessibilite-de-la-barre-de-recherche) .
- voir [Navigation principale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale/accessibilite-de-la-navigation-principale) .
- voir [Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale/accessibilite-de-la-modale) .
- voir [Sélecteur de langue](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/selecteur-de-langues/accessibilite-du-selecteur-de-langues) .
- voir [Paramètres d’affichage](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/parametres-d-affichage/accessibilite-des-parametres-d-affichage) .

### Règles d’accessibilité

Les règles d’accessibilité du composant d'en-tête découlent de celles des composants qui la compose (cf liste ci-dessus).

- L'élément `<header>` doit posséder le `role=banner`.
- Le lien vers l’accueil du site est placé sur le nom du site (qu’il soit dans le bloc-marque, le nom du site et sa baseline ou le logo).
- Le title du lien doit contenir le terme Accueil, suivi du nom du site (ex: `title="Accueil - [À MODIFIER | Nom du site /
   service]”`).
- Si l'en-tête est complexe et que le bloc marque n’est pas "République Française", mais une autre entité, cette dernière doit également être ajoutée (voir les exemples du [Bloc marque](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bloc-marque/code-du-bloc-marque) ).

### Contrastes de couleurs

L’entête est suffisamment contrasté en thème clair et en thème sombre.

---

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant En-tête.

---

### Critères RGAA applicables

- **Images :** 1.1, 1.2, 1.3
- **Couleurs :** 3.2, 3.3
- **Liens :** 6.1, 6.2
- **Scripts :** 7.1, 7.3
- **Éléments obligatoires :** 8.9
- **Structuration :** 9.1, 9.2, 9.3
- **Présentation de l’information :** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.8, 10.11, 10.12
- **Formulaires :** 11.1, 11.2, 11.9
- **Navigation :** 12.1, 12.2, 12.5, 12.6, 12.8, 12.9
- **Consultation :** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Élément header](https://html.spec.whatwg.org/#the-header-element)

#### Contenu associé

- **[Navigation principale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale)**  
  Présentation du composant Navigation principale organisant les grandes rubriques d’un site et permettant à l’usager de s’orienter dans son arborescence.

- **[Pied de page](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page)**  
  Présentation du composant Pied de page destiné à structurer les informations complémentaires et les liens secondaires en bas de page.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete/demonstration-de-l-en-tete

#### Contenu associé

- **[Navigation principale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale)**  
  Présentation du composant Navigation principale organisant les grandes rubriques d’un site et permettant à l’usager de s’orienter dans son arborescence.

- **[Pied de page](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page)**  
  Présentation du composant Pied de page destiné à structurer les informations complémentaires et les liens secondaires en bas de page.
