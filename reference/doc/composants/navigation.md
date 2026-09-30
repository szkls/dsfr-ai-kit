# Navigation principale

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale/design-de-la-navigation-principale · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale/code-de-la-navigation-principale · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale/accessibilite-de-la-navigation-principale · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale/demonstration-de-la-navigation-principale
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

La navigation principale est le système central de navigation au sein d’un site. Elle permet d’orienter l’usager à travers les rubriques principales et secondaires du site.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale

*(Démonstration interactive « navigation--navigation » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=navigation--navigation&nav=0&globals=theme%3Alight)*

### Quand utiliser ce composant ?

**Utiliser la navigation principale pour orienter l’usager à travers les grandes sections du site** , éventuellement sur plusieurs niveaux de profondeur.

> **Information**
> La navigation principale est liée à [l’en-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete) et, lorsqu'elle est utilisée, doit donc se placer juste en-dessous. Néanmoins, contrairement à l’en-tête, elle n’est pas obligatoire.

### Comment utiliser ce composant ?

- **Moduler la navigation principale** selon vos besoins et l’arborescence de votre site. Elle permet d'afficher jusqu'à 8 entrées principales.
- **Opter pour la variation de la navigation principale qui convient le mieux à l’architecture de l’information de votre site** .
- **Considérer que la navigation principale est contrainte en hauteur** , même dans sa version la plus grande avec mega menu. Il faut donc l’anticiper lors de la conception de l’architecture de l’information afin d'éviter un nombre trop important de liens et de niveaux (et donc réfléchir la densité de l’information en conséquence).
- **Accompagner la navigation principale d’autres composants** permettant de guider encore davantage l’usager dans sa navigation, tels que la barre de recherche, le menu latéral, ou le pied de page par exemple.
- **Associer liens directs et menus déroulants ou mega menu** dans une même navigation. En revanche, il n’est pas recommandé de mélanger l’usage de menus déroulants et de mega menus.

> **À faire :** Proposer des liens directs et des menus déroulants au sein d’une même navigation selon le besoin identifié.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/navigation/use/do-1.png)

> **À ne pas faire :** Ne pas mélanger menus déroulants et mega menus pour ne pas apporter de la confusion à la navigation.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/navigation/use/dont-1.png)

### Règles éditoriales

- **Proposer des libellés d’entrées de menu et de liens clairs et concis** pour permettre à l’usager de facilement comprendre où il se rend.
- **Profiter de la variation mega menu pour éditorialiser vos rubriques** et ainsi apporter un complément de contexte à l’usager.

#### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.

- **[Pied de page](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page)**  
  Présentation du composant Pied de page destiné à structurer les informations complémentaires et les liens secondaires en bas de page.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale/design-de-la-navigation-principale

![Anatomie de la navigation principale](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/navigation/design/anatomy/anatomy-1.png)

1. Un libellé, de lien direct, de menu déroulant ou d’un méga-menu — Obligatoire
2. Un chevron, dans le cas du menu déroulant et du mega menu — Obligatoire
3. Un fond blanc — Obligatoire
4. Un bouton “Fermer”, dans le cas du mega menu uniquement — Obligatoire
5. Un titre de rubrique du méga menu — En option
6. Un texte de description du méga menu — En option
7. Un lien vers la rubrique du méga menu — En option
8. Un titre de catégorie dans le méga menu, pouvant être cliquable — En option
9. Des liens direct vers les pages du site — Obligatoire
10. Un séparateur en-dessous du titre de la catégorie — Obligatoire

### Variations

**Liens directs**

*(Démonstration interactive « navigation--link » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=navigation--link&nav=0&globals=theme%3Alight)*

- Utiliser les liens directs vers des pages destination pour les sites ou les rubriques qui n’ont pas ou peu de second niveau d’arborescence, en les combinant par exemple avec un [menu latéral](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/menu-lateral) .

**Menu déroulant**

*(Démonstration interactive « navigation--menu » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=navigation--menu&nav=0&globals=theme%3Alight)*

- Utiliser les menus déroulant dans le cadre d’une architecture de l’information peu profonde, pour afficher les niveaux secondaires d’une rubrique.
- Proposer un maximum de 8 liens au sein d’un menu déroulant.

**Mega menu**

*(Démonstration interactive « navigation--mega-menu » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=navigation--mega-menu&nav=0&globals=theme%3Alight)*

- Utiliser le mega menu lorsqu’une arborescence est profonde. Il s’agit d’un menu de navigation plus complexe qui donne accès à plusieurs niveaux de profondeur.
- Proposer un maximum de 8 liens au sein de chaque sous catégorie.

**Responsive**

En version mobile, la navigation principale est accessible depuis le pictogramme “burger”. Le clic sur le pictogramme déclenche l’affichage d’un overlay présentant les éléments de la navigation et les liens directs de l’en-tête, si présents.

Le système d’overlay permet l’affichage du contenu des différentes variations de menu, précédemment décrites.

### Tailles

La largeur de la navigation principale est de taille fixe et prend les 12 colonnes disponibles de la grille.

### États

**État au survol**

L’état au survol correspond au comportement constaté par l’usager lorsqu’il survole une entrée de la navigation principale.

**État au clic**

L’état au clic correspond au comportement constaté par l’usager après avoir cliqué sur une entrée de la navigation principale. Il existe 2 états au clic, selon la variation choisie :

- Lien direct
- Menu déroulant ou mega menu

### Personnalisation

La navigation principale n’est pas personnalisable.

Toutefois, certains éléments sont optionnels - voir [la structure du composant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale/design-de-la-navigation-principale#navigation-principale) .

> **À faire :** Conserver un fond de couleur blanc derrière les entrées de la navigation principale.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/navigation/design/custom/do-1.png)

> **À ne pas faire :** Ne pas personnaliser la couleur des entrées de la navigation principale
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/navigation/design/custom/dont-1.png)

> **À faire :** Utiliser uniquement la couleur bleu pour les entrées de menu déroulant ou mega menu dans leur état cliqué.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/navigation/design/custom/do-2.png)

> **À ne pas faire :** Ne pas personnaliser la couleur des entrées menu déroulant ou mega menu lorsqu’elles sont cliquées.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/navigation/design/custom/dont-2.png)

> **À faire :** Conserver le fond de couleur blanc du mega menu.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/navigation/design/custom/do-3.png)

> **À ne pas faire :** Ne pas personnaliser ou retirer la couleur de fond du mega menu.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/navigation/design/custom/dont-3.png)

> **À faire :** Conserver les tailles, types et couleurs de typographie des différents libellés en l’état.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/navigation/design/custom/do-4.png)

> **À ne pas faire :** Ne pas modifier les tailles, types et couleurs de typographie des différents libellés.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/navigation/design/custom/dont-4.png)

#### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.

- **[Pied de page](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page)**  
  Présentation du composant Pied de page destiné à structurer les informations complémentaires et les liens secondaires en bas de page.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale/code-de-la-navigation-principale

### HTML

#### Structure du composant

Le composant **Navigation principale** est l'élément central de la navigation au sein du site, il oriente l’utilisateur à travers les grandes sections du site et sur éventuellement plusieurs niveaux de profondeur.

Sa structure est conçue pour s’adapter aux écrans mobiles et comprend les éléments suivants :

- Le conteneur principal, obligatoire, de la navigation est un élément HTML `<nav>` avec le rôle `navigation` défini par la classe `fr-nav`.
  - Il dispose d'attribut `aria-label`, dont la valeur doit décrit la fonction de la navigation (ex: "Menu principal").
- La liste de liens ou de sous-sections, obligatoire, de la navigation est un élément HTML `<ul>` défini par la classe `fr-nav__list`.
  - Chaque élément `<li>` défini par la classe `fr-nav__item` de la liste peut contenir un lien direct, un menu déroulant ou un mega-menu.
- Un Lien direct est un élément HTML `<a>` de type `link` défini par la classe `fr-nav__link`.
  - Le lien actif dispose d'un attribut `aria-current="page"`.
- Un Menu déroulant est composé :
  - D'un Bouton d'ouverture, obligatoire, du menu déroulant, un élément HTML `<button>` de type `button` défini par la classe `fr-nav__btn`.
    - Le bouton dispose d'un attribut `aria-expanded`, sa valeur [true|false] défini si le bloc refermable de la navigation est ouvert ou fermé.
    - Le bouton est lié au bloc refermable via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` du bloc refermable.
    - Le bouton actif dispose d'un attribut `aria-current="true"`.
  - D'un bloc refermable, obligatoire, défini par les classes `fr-collapse` et `fr-menu`, est un élément HTML `<div>` placé après le bouton d'ouverture. Il s'agit d'un élément générique du core utilisé par d'autres composants tels que le menu latéral ou l'accordéon.
    - Le bloc refermable contient une liste de liens directs, un élément HTML `<ul>` défini par la classe `fr-menu__list`.
      - Chaque élément `<li>` de la liste contient un lien direct défini par la classe `fr-nav__link`.
- Un Mega-menu est composé :
  - D'un bouton d'ouverture, obligatoire, est un élément HTML `<button>` de type `button` défini par la classe `fr-nav__btn`.
    - Le bouton dispose d'un attribut `aria-expanded`, sa valeur [true|false] défini si le bloc refermable de la navigation est ouvert ou fermé.
    - Le bouton est lié au bloc refermable via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` du bloc refermable.
    - Le bouton actif dispose d'un attribut `aria-current="true"`.
  - D'un bloc refermable, obligatoire, défini par les classes `fr-collapse` et `fr-mega-menu`, est un élément HTML `<div>` placé après le bouton d'ouverture. Il s'agit d'un élément générique du core utilisé par d'autres composants tels que le menu latéral ou l'accordéon.
    - Le bloc refermable contient le conteneur du mega-menu, un élément HTML `<div>` défini par les classes `fr-container`, `fr-container--fluid` et `fr-container-lg` et contenant :
      - Le bouton de fermeture du mega-menu, obligatoire, est un élément HTML `<button>` de type `button` défini par les classes `fr-btn` et `fr-btn--close`.
        - Le bouton est lié au bloc refermable via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` du bloc refermable.
        - Le bouton dispose d'un attribut `title` et un texte explicite pour indiquer son action.
      - La grille du mega-menu, dont la documentation est disponible dans les fondamentaux (voir [grille](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/grille-et-points-de-rupture) ) composée d'une ou plusieurs colonnes comprenant :
        - Des éléments de contexte (nom de la rubrique, texte de présentation, lien vers la home de rubrique), optionnels, définis par la classe `fr-mega-menu__leader`.
        - Des noms des sous catégories, optionnels, pouvant être cliquables, dans un niveau de titre hx et définis par la classe `fr-mega-menu__category`.
        - Une liste de liens directs, obligatoire, dans un élément HTML `<ul>` défini par la classe `fr-mega-menu__list`.
          - Chaque élément `<li>` de la liste contient un lien direct défini par la classe `fr-nav__link`.
          - Le lien actif dispose d'un attribut `aria-current="page"`.

**Exemple de structure HTML complet**

#### Déplier pour voir le code

```html
<nav class="fr-nav" role="navigation" aria-label="Menu principal">
    <ul class="fr-nav__list">
        <li class="fr-nav__item">
            <button aria-expanded="false" aria-controls="collapse-menu-01" type="menu" class="fr-nav__btn">Entrée menu</button>
            <div class="fr-collapse fr-menu" id="collapse-menu-01">
                <ul class="fr-menu__list">
                    <li>
                        <a href="#" class="fr-nav__link">Lien de navigation</a>
                    </li>
                    <li>
                        <a href="#" class="fr-nav__link">Lien de navigation</a>
                    </li>
                    <li>
                        <a href="#" class="fr-nav__link">Lien de navigation</a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="fr-nav__item">
            <button aria-expanded="false" aria-controls="collapse-mega-menu" type="mega-menu" class="fr-nav__btn">Entrée mega menu</button>
            <div class="fr-collapse fr-mega-menu" id="collapse-mega-menu">
                <div class="fr-container fr-container--fluid fr-container-lg">
                    <div class="fr-grid-row fr-grid-row-lg--gutters">
                        <div class="fr-col-12 fr-mb-n3v">
                            <button aria-controls="collapse-mega-menu" title="Fermer" type="button" class="fr-btn--close fr-btn">Fermer</button>
                        </div>
                        <div class="fr-col-12 fr-col-lg-3">
                            <h5 class="fr-mega-menu__category">
                                <a href="#" class="fr-nav__link">Nom de catégorie</a>
                            </h5>
                            <ul class="fr-mega-menu__list">
                                <li>
                                    <a href="#" class="fr-nav__link">Lien de navigation</a>
                                </li>
                                <li>
                                    <a href="#" class="fr-nav__link">Lien de navigation</a>
                                </li>
                                <li>
                                    <a href="#" class="fr-nav__link">Lien de navigation</a>
                                </li>
                            </ul>
                        </div>
                        <div class="fr-col-12 fr-col-lg-3">
                            <h5 class="fr-mega-menu__category">
                                <a href="#" class="fr-nav__link">Nom de catégorie</a>
                            </h5>
                            <ul class="fr-mega-menu__list">
                                <li>
                                    <a href="#" class="fr-nav__link">Lien de navigation</a>
                                </li>
                                <li>
                                    <a href="#" class="fr-nav__link">Lien de navigation</a>
                                </li>
                                <li>
                                    <a href="#" class="fr-nav__link">Lien de navigation</a>
                                </li>
                            </ul>
                        </div>
                        <div class="fr-col-12 fr-col-lg-3">
                            <h5 class="fr-mega-menu__category">
                                <a href="#" class="fr-nav__link">Nom de catégorie</a>
                            </h5>
                            <ul class="fr-mega-menu__list">
                                <li>
                                    <a href="#" class="fr-nav__link">Lien de navigation</a>
                                </li>
                                <li>
                                    <a href="#" class="fr-nav__link">Lien de navigation</a>
                                </li>
                                <li>
                                    <a href="#" class="fr-nav__link">Lien de navigation</a>
                                </li>
                            </ul>
                        </div>
                        <div class="fr-col-12 fr-col-lg-3">
                            <h5 class="fr-mega-menu__category">
                                <a href="#" class="fr-nav__link">Nom de catégorie</a>
                            </h5>
                            <ul class="fr-mega-menu__list">
                                <li>
                                    <a href="#" class="fr-nav__link">Lien de navigation</a>
                                </li>
                                <li>
                                    <a href="#" class="fr-nav__link">Lien de navigation</a>
                                </li>
                                <li>
                                    <a href="#" class="fr-nav__link">Lien de navigation</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li class="fr-nav__item">
            <a type="link" href="#" class="fr-nav__link">Lien accès direct</a>
        </li>
        <li class="fr-nav__item">
            <button aria-expanded="false" aria-controls="collapse-menu-01-active" aria-current="true" type="menu" class="fr-nav__btn">Entrée menu</button>
            <div class="fr-collapse fr-menu" id="collapse-menu-01-active">
                <ul class="fr-menu__list">
                    <li>
                        <a href="#" class="fr-nav__link">Lien de navigation</a>
                    </li>
                    <li>
                        <a href="#" class="fr-nav__link">Lien de navigation</a>
                    </li>
                    <li>
                        <a aria-current="page" href="#" class="fr-nav__link">Lien de navigation actif</a>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</nav>
```

**Exemple de structure HTML avec Liens directs**

#### Déplier pour voir le code

```html
<nav class="fr-nav" role="navigation" aria-label="Menu principal">
      <ul class="fr-nav__list">
        <li class="fr-nav__item">
            <a class="fr-nav__link" href="#" target="_self" aria-current="page">accès direct</a>
        </li>
        <li class="fr-nav__item">
            <a class="fr-nav__link" href="#" target="_self">accès direct</a>
        </li>
        <li class="fr-nav__item">
            <a class="fr-nav__link" href="#" target="_self">accès direct</a>
        </li>
        <li class="fr-nav__item">
            <a class="fr-nav__link" href="#" target="_self">accès direct</a>
        </li>
    </ul>
</nav>
```

**Exemple de structure HTML avec Menu déroulant**

#### Déplier pour voir le code

```html
<nav class="fr-nav" role="navigation" aria-label="Menu principal">
    <ul class="fr-nav__list">
        <li class="fr-nav__item">
            <button class="fr-nav__btn" aria-expanded="false" aria-controls="collapse-menu-01" aria-current="true">Entrée menu active</button>
            <div class="fr-collapse fr-menu" id="collapse-menu-01">
                <ul class="fr-menu__list">
                    <li>
                        <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                    </li>
                    <li>
                      <a class="fr-nav__link" href="#" target="_self" aria-current="page">Lien de navigation</a>
                    </li>
                      <li>
                          <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                      </li>
                </ul>
            </div>
        </li>
        <li class="fr-nav__item">
            <button class="fr-nav__btn" aria-expanded="false" aria-controls="collapse-menu-02">Entrée menu</button>
            <div class="fr-collapse fr-menu" id="collapse-menu-02">
                <ul class="fr-menu__list">
                    <li>
                        <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                    </li>
                    <li>
                        <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                    </li>
                    <li>
                        <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="fr-nav__item">
            <a class="fr-nav__link" href="#" target="_self">accès direct</a>
        </li>
        <li class="fr-nav__item">
            <a class="fr-nav__link" href="#" target="_self">accès direct</a>
        </li>
    </ul>
</nav>
```

**Exemple de structure HTML avec Mega menu**

#### Déplier pour voir le code

```html
<nav class="fr-nav" role="navigation" aria-label="Menu principal">
    <ul class="fr-nav__list">
        <li class="fr-nav__item">
            <button class="fr-nav__btn" aria-expanded="false" aria-controls="mega-menu-01" aria-current="true">Entrée mega menu</button>
            <div class="fr-collapse fr-mega-menu" id="mega-menu-01" tabindex="-1">
                <div class="fr-container fr-container--fluid fr-container-lg">
                    <button class="fr-btn--close fr-btn" aria-controls="mega-menu-01">Fermer</button>
                    <div class="fr-grid-row fr-grid-row-lg--gutters">
                        <div class="fr-col-12 fr-col-lg-8 fr-col-offset-lg-4--right">
                            <div class="fr-mega-menu__leader">
                                <h4 class="fr-h4 fr-mb-2v">Titre éditorialisé</h4>
                                <p>Lorem [...] elit ut.</p>
                                <a class="fr-link fr-fi-arrow-right-line fr-link--icon-right fr-link--align-on-content" href="#">Voir toute la rubrique</a>
                            </div>
                        </div>
                        <div class="fr-col-12 fr-col-lg-3">
                            <h5 class="fr-mega-menu__category">
                                <a class="fr-nav__link" href="#" target="_self">Nom de catégorie</a>
                            </h5>
                            <ul class="fr-mega-menu__list">
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self" aria-current="page">Page active</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                            </ul>
                        </div>
                        <div class="fr-col-12 fr-col-lg-3">
                            <h5 class="fr-mega-menu__category">
                                <a class="fr-nav__link" href="#" target="_self">Nom de catégorie</a>
                            </h5>
                            <ul class="fr-mega-menu__list">
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                            </ul>
                        </div>
                        <div class="fr-col-12 fr-col-lg-3">
                            <h5 class="fr-mega-menu__category">
                                <a class="fr-nav__link" href="#" target="_self">Nom de catégorie</a>
                            </h5>
                            <ul class="fr-mega-menu__list">
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self" aria-current="page">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                            </ul>
                        </div>
                        <div class="fr-col-12 fr-col-lg-3">
                            <h5 class="fr-mega-menu__category">
                                <a class="fr-nav__link" href="#" target="_self">Nom de catégorie</a>
                            </h5>
                            <ul class="fr-mega-menu__list">
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li class="fr-nav__item">
            <a class="fr-nav__link" href="#" target="_self">accès direct</a>
        </li>
        <li class="fr-nav__item">
            <a class="fr-nav__link" href="#" target="_self">accès direct</a>
        </li>
    </ul>
</nav>
```

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](https://www.systeme-de-design.gouv.fr/version-courante/fr/premiers-pas/vous-etes-developpeur/prise-en-main#les-css) .

**Dépendances CSS**

| Dépendance | Obligatoire | Remarque |
|---|---|---|
| Core | Oui |  |
| Navigation | Oui |  |
| Button | Non | Uniquement sur le mega-menu (bouton de fermeture) |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/navigation/navigation.min.css" rel="stylesheet">
```

### JavaScript

#### Installation du JavaScript

Pour fonctionner le composant navigation nécessite l'utilisation de JavaScript. Chaque composant utilisant javascript possède un fichier Js spécifique et requiert le fichier Js du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```html
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/navigation/navigation.module.min.js"></script>
```

NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```html
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/navigation/navigation.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur la navigation, les éléments suivants sont instanciés :

- Le conteneur principal, via la classe : `fr-nav`.
- Les éléments de la liste, via la classe : `fr-nav__item`.
- Le bouton d'ouverture, via la classe `fr-nav__btn`.
- La sous-section, via la classe `fr-collapse`.

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

###### navigation

**current**

| **Description** | Retourne l'API de la sous-section ouverte. <br> *Si aucune sous-section n'est ouverte, ou si plusieurs sous-sections sont ouvertes, renvoie `null`.* |
|---|---|
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).navigation.current` |

**hasFocus**

| **Description** | Renvoie vrai si le focus est sur un des éléments du groupe. |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).navigation.hasFocus` |

**index**

| **Description** | Retourne ou modifie l'index de la sous-section courante. <br> *Si aucune sous-section n'est ouverte, l'index vaut 0.* |
|---|---|
| **Type** | property |
| **Retour** | Number |
| **Exemple** | `dsfr(elem).navigation.index` <br> `dsfr(elem).navigation.index = 2` |

**isGrouped**

| **Description** | Défini si les sous-sections du groupe sont liées en eux ou non. <br> *Si `true`, lorsqu'une sous-section est ouverte les autres se referment. Si `false`, il est possible d'en ouvrir plusieurs. Si l'attribut n'est pas défini les sous-sections sont groupées par défaut.* |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).navigation.isGrouped` <br> `dsfr(elem).navigation.isGrouped = true` |

**length**

| **Description** | Retourne le nombre de sous-sections dans le groupe. |
|---|---|
| **Type** | property |
| **Retour** | Number |
| **Exemple** | `dsfr(elem).navigation.length` |

**members**

| **Description** | Renvoie un tableau d'objets correspondant aux sous-sections du groupe. |
|---|---|
| **Type** | property |
| **Retour** | Array |
| **Exemple** | `dsfr(elem).navigation.members` |

**node**

| **Description** | Renvoie le noeud HTML de l'élément. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).navigation.node` |

###### navigationItem

**isEnabled**

| **Description** | Défini si le fonctionnement de la navigation est activé ou non |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).navigationItem.isEnabled = false` |

**node**

| **Description** | Renvoie le noeud HTML de l'élément. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).navigationItem.node` |

###### collapseButton

**focus**

| **Description** | Replace le focus sur le bouton |
|---|---|
| **Type** | function |
| **Arguments** | none |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).collapseButton.focus()` |

**isEnabled**

| **Description** | Défini si le fonctionnement du bouton de la navigation est activé ou non |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).collapseButton.isEnabled = false` |

**node**

| **Description** | Renvoie le noeud HTML de l'élément. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).collapseButton.node` |

###### collapse

**conceal**

| **Description** | Ferme la sous-section |
|---|---|
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).collapse.conceal()` |

**disclose**

| **Description** | Ouvre la sous-section |
|---|---|
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).collapse.disclose()` |

**isDisclosed**

| **Description** | Retourne vrai si la sous-section est ouverte |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).collapse.isDisclosed` |

**isEnabled**

| **Description** | Défini si le fonctionnement de la navigation est activé ou non |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).collapse.isEnabled = false` |

**group**

| **Description** | Retourne l'API du groupe, ou null s'il n'y a pas de groupe |
|---|---|
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).collapse.group` |

**buttons**

| **Description** | Retourne un tableau de boutons d'ouverture de la sous-section |
|---|---|
| **Type** | property |
| **Retour** | Array |
| **Exemple** | `dsfr(elem).collapse.buttons` |

**focus**

| **Description** | Replace le focus sur le bouton de la sous-section |
|---|---|
| **Type** | function |
| **Arguments** | none |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).collapse.focus()` |

**parent**

| **Description** | Retourne l'instance du dsfr parent, ici la navigation |
|---|---|
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).parent` |

**children**

| **Description** | Renvoie un tableau d'instances enfants |
|---|---|
| **Type** | property |
| **Retour** | Array |
| **Exemple** | `dsfr(elem).children` |

**node**

| **Description** | Renvoie le noeud HTML de l'élément. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).collapse.node` |

#### Événements

Le Système de Design fournit des événements personnalisés pour les actions uniques de la part de certains composants réactifs listés sur la page de l' [API Javascript](https://www.systeme-de-design.gouv.fr/version-courante/fr/premiers-pas/vous-etes-developpeur/api-javascript) .

Sur chaque menu déroulant de la navigation principale, les événements suivants sont disponibles :

**événements**

| Événement | Action | Élément | Attribut |
|---|---|---|---|
| `dsfr.conceal` | Fermeture de l'élément | Collapse | `data-fr-js-collapse` |
| `dsfr.disclose` | Ouverture de l'élément | Collapse | `data-fr-js-collapse` |
| `dsfr.click` | Click sur le bouton d'ouverture | CollapseButton | `data-fr-js-collapse-button` |

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+navigation+)

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

#### [v1.14.3](https://github.com/GouvernementFR/dsfr/releases/tag/v1.14.3) - 15 décembre 2025

- **[fermeture au click sur un sous-élement html d'un nav_link](https://github.com/GouvernementFR/dsfr/pull/1344)**  
  #1344  
  - Corrige le clic sur un élément à l'intérieur d'un nav__link  
  🐛 fix  
  navigation

#### [v1.14.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.14.1) - 29 août 2025

- **[correction bordure navigation mobile avec 1 seul item](https://github.com/GouvernementFR/dsfr/pull/1214)**  
  #1214  
  - Correction de la bordure de la navigation mobile lorsqu'elle ne contient qu'un seul élément  
  🐛 fix  
  navigation

#### [v1.13.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.13.1) - 26 mars 2025

- **[ajout de la fermeture des menus au clavier](https://github.com/GouvernementFR/dsfr/pull/1091)**  
  #1091  
  - La touche échap ferme le menu ouvert
- Lorsque le focus sort du menu au TAB, ferme le menu ouvert  
  ✨ feat  
  navigation

- **[correctif template ejs](https://github.com/GouvernementFR/dsfr/pull/1073)**  
  #1073  
  - Correctif des variables des templates sidemenu, navigation, header  
  🐛 fix  
  sidemenu navigation header

#### [v1.13.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.13.0) - 4 décembre 2024

- **[retrait des sélecteur css ">"](https://github.com/GouvernementFR/dsfr/pull/1049)**  
  #1049  
  - Retrait des selecteurs d'enfants directs pour éviter les problèmes lors de l'ajout de balises intermediaires (cas de création de sous composants)  
  🐛 fix  
  tile navigation

#### [v1.11.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.1) - 31 janvier 2024

- **[corrige bugs de fermeture du composant](https://github.com/GouvernementFR/dsfr/pull/840)**  
  #840  
  🐛 fix  
  navigation

#### [v1.11.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.0) - 11 décembre 2023

- **[correctifs de style mega-menu](https://github.com/GouvernementFR/dsfr/pull/785)**  
  #785  
  - ajoute un margin-top: -1.25rem (-20px) sur le fr-mega-menu__leader
- passe le texte de description et le lien du fr-mega-menu__leader en taille sm
- supprime la classe fr-mb-4v de la colonne entourant le fr-mega-menu__leader
- le texte du bouton de navigation passe en $text-action-high-blue-france à l'ouverture  
  🐛 fix  
  navigation

#### [v1.10.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.10.0) - 19 juillet 2023

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

#### [v1.6.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.6.0) - 14 juin 2022

- **[correctif focus au clic sur les liens](https://github.com/GouvernementFR/dsfr/pull/336)**  
  #336  
  fix  
  navigation

#### [v1.4.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.4.0) - 16 mars 2022

- **[correction affichage mega-menu](https://github.com/GouvernementFR/dsfr/pull/242)**  
  #242  
  fix  
  navigation

#### [v1.3.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.3.1) - 7 février 2022

- **[correction focus coupés](https://github.com/GouvernementFR/dsfr/pull/204)**  
  #204  
  fix  
  navigation sidemenu

#### [v1.2.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.2.0) - 17 novembre 2021

- **[espacement catégories mobile](https://github.com/GouvernementFR/dsfr/pull/105)**  
  #105  
  fix  
  navigation

- **[nav-link hover sur a et button uniquement](https://github.com/GouvernementFR/dsfr/pull/68)**  
  #68  
  fix  
  navigation

- **[mega menu category bold](https://github.com/GouvernementFR/dsfr/pull/61)**  
  #61  
  fix  
  navigation

##### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.

- **[Pied de page](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page)**  
  Présentation du composant Pied de page destiné à structurer les informations complémentaires et les liens secondaires en bas de page.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale/accessibilite-de-la-navigation-principale

Le composant **Navigation principale** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

- `Entrée` ou `Espace` :
  - Lorsque le focus est placé sur un bouton d'ouverture de sous-section de la navigation principale, et que sa sous-section associée est fermée, ouvre la sous-section.
  - Lorsque le focus est placé sur un bouton d'ouverture de sous-section la navigation principale, et que sa sous-section associée est déjà ouverte, referme la sous-section.
  - Lorsque le focus est placé sur un lien direct active l’élément focalisé.
- `Tab` : place le focus sur le prochain élément focalisable.
- `Maj` + `Tab` : place le focus sur l'élément focalisable précédent.

### Règles d’accessibilité

#### Structuration

- La navigation principale est structurée dans un élément `nav role="navigation"`.
- L’attribut `aria-label="Menu principal"` est utilisé pour nommer et donner un contexte explicite à la navigation.
- Les éléments de la navigation principale sont structurés dans une liste avec les éléments `ul` et `li`.

##### Éléments actifs

- Le lien actif dispose d’un attribut `aria-current="page"`.
- Si une sous-section associée à un bouton d'ouverture de la navigation est active, le bouton a un attribut `aria-current` défini sur "true".

##### Entrée de menu

- Les boutons d’ouverture et de fermeture des menus déroulants et mega-menus possèdent :
  - un attribut `aria-expanded` défini à `true`lorsque le sous-menu est affiché, à `false`lorsque la sous-section est fermée.
  - un attribut `aria-controls` défini sur l'ID du bloc refermable associé.

##### Responsive

En version mobile, la navigation principale est disponible dans une fenêtre modale à partir du bouton burger « Menu ».

#### Contrastes de couleurs

La navigation principale est suffisamment contrastée en thème clair.

---

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Navigation principale.

---

### Critères RGAA applicables

- **Couleurs** : 3.1, 3.2, 3.3
- **Liens** : 6.1, 6.2
- **Scripts** : 7.1, 7.3
- **Structuration** : 9.1, 9.2, 9.3
- **Présentation de l’information** : 10.1, 10.2, 10.3,10.4, 10.5, 10.7, 10.8, 10.11, 10.12
- **Navigation** : 12.2, 12.6, 12.8, 12.9
- **Consultation :** 13.9, 13.11

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Élément nav](https://html.spec.whatwg.org/#the-nav-element)

##### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.

- **[Pied de page](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page)**  
  Présentation du composant Pied de page destiné à structurer les informations complémentaires et les liens secondaires en bas de page.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale/demonstration-de-la-navigation-principale

*(Démonstration interactive « navigation--docs » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=navigation--docs&nav=0&globals=theme%3Alight)*

#### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.

- **[Pied de page](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page)**  
  Présentation du composant Pied de page destiné à structurer les informations complémentaires et les liens secondaires en bas de page.
