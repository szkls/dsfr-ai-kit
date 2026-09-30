# Tableau

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tableau · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tableau/design-du-tableau · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tableau/code-du-tableau · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tableau/accessibilite-du-tableau · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tableau/demonstration-du-tableau
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

Le tableau permet de présenter une liste structurée de données textuelles et/ou numériques dans le but de simplifier l’analyse et la comparaison d’informations pour l’usager.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tableau

*(Démonstration interactive « table--table » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=table--table&nav=0&globals=theme%3Alight)*

### Quand utiliser ce composant ?

Utiliser le tableau pour présenter des données. À titre d’exemple, il peut :

- Permettre une visualisation de données organisées en lignes et en colonnes.
- Permettre l’analyse et la comparaison d’informations.
- Servir d’alternative textuelle à un graphique, si vous souhaitez que l'usager puisse lire les valeurs exactes des données plutôt que de les estimer visuellement, par exemple.

Toutefois, si les tableaux sont très pratiques, ils peuvent très vite devenir complexes et générer des difficultés de compréhension. Soyez donc créatifs pour que votre interface soit synthétique, intuitive et agréable à utiliser en proposant, si c’est nécessaire, plusieurs modes de présentation des données.

Pour consulter des exemples de vues alternatives aux tableaux, se référer à [la planche Figma](https://www.figma.com/design/uVVICt7kJ1n4dzJ6t8x1uL/DSFR---Composants---v1.12.0?node-id=29382-10540&t=cJHK2fZAoZxn4ck2-1) .

> **Information**
> Ce composant tableau n’est pas un tableur, il ne permet pas (sauf développement ad hoc) de réaliser d'opérations avec les données.

### Comment utiliser ce composant ?

- **Adapter l’usage du tableau à la complexité et/ou au volume de données à présenter** . Lorsque les données sont très simples ou si votre tableau possède moins de 4 lignes ou 3 colonnes, envisagez d’autres formats de présentation.
- **Insérer des composants au sein de vos tableaux** , selon vos besoin, et parmi ceux autorisés : texte, chiffres, icône, pictogramme, tag, badge, bouton, lien, champ de saisie, infobulle, interrupteur et liste déroulante.
- **Permettre le tri du contenu de chaque colonne** par ordre croissant ou décroissant, lorsque nécessaire.
- **Rendre la première colonne flottante** afin de permettre le défilement du reste du tableau, notamment s’il est plus large que la fenêtre.
- **Ajouter une pagination dans la barre d’outils** si le tableau contient beaucoup de lignes afin de faciliter la navigation de l’usager.
- **Ajouter des cases à cocher** , placée tout à gauche de la ligne, si vous souhaitez permettre la sélection de lignes.
- **Intégrer un ou plusieurs boutons d’actions** spécifiques à une ligne dans une cellule, au besoin. Dans ce cas, pensez à utiliser les boutons secondaires et tertiaires pour apporter la bonne hiérarchie entre les différents niveaux d’actions possibles.
- **Permettre la sélection du nombre de lignes affichées par page du tableau** via une liste déroulante lorsque cela est pertinent.
- **Utiliser des bordures verticales** pour améliorer la lisibilité du tableau si ce dernier est complexe.
- **Améliorer la lisibilité du tableau en version mobile** en utilisant une vue plus adaptée comme la liste.
- **Placer systématiquement les actions de colonnes à droite** au sein de la cellule d’en-tête.
- **Placer systématiquement la colonne de case à cocher à gauche** .
- **Placer systématiquement la cellule d’action par ligne à droite** .
- **Permettre la fusion de cellules d’en-tête et de contenu** , de façon verticale et/ou horizontale.
- **Éviter de détourner l’usage des tableaux** . Ils sont destinés à présenter des données et non à faire de la mise en page.

### Règles éditoriales

- **Utiliser des titres de colonnes et, le cas échéant, de lignes, clairs et concis.**
- **Mettre une majuscule au début des titres de colonnes** et ne pas terminer par un élément de ponctuation (virgule, point ou point-virgule).
- **Synthétiser les contenus** à l’intérieur de chaque cellule.
- **Indiquer “N/A” dans toute cellule vide** .
- **Préciser l’unité de mesure d’une donnée dans le titre de la colonne correspondante** , afin d'éviter les répétitions dans les cellules de contenu.
- **Aligner les chiffres à droite** au sein de la cellule. Par défaut, le reste du contenu des cellules est aligné à gauche et centré verticalement.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tableau/design-du-tableau

![Anatomie du tableau](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/table/design/anatomy/anatomy-1.png)

1. Un titre, qui peut être positionné en haut (par défaut), en bas ou hors écran (balise caption) — Obligatoire
2. Un bouton de tri par colonne — En option
3. Une case à cocher de sélection de colonne — En option
4. Une ou plusieurs données, par cellule — En option
5. Une barre d’actions haute, pouvant contenir (uniquement et dans cet ordre) - le nombre de lignes sélectionnées, une barre de recherche, des boutons d’actions liés à la sélection de lignes et un contrôle segmenté — En option
6. Une ligne d’en-tête de colonne — Obligatoire
7. Plusieurs lignes de corps — Obligatoire
8. Des bordures horizontales entre les lignes — Obligatoire
9. Une barre d’actions basse, pouvant contenir (uniquement et dans cet ordre) - le nombre total de lignes du tableau, une liste déroulante, une pagination et des boutons d’actions agissants sur tout le tableau — En option
10. Une colonne de sélection de ligne, toujours ferrée à gauche — En option
11. Des bordure verticales entre les colonnes, uniquement obligatoire dans le cas d’un tableau complexe — En option

### Variations

**Tableau non scrollable**

*(Démonstration interactive « table--no-scroll » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=table--no-scroll&nav=0&globals=theme%3Alight)*

**Tableau avec retour à la ligne automatique dans les cellules**

*(Démonstration interactive « table--multiline » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=table--multiline&nav=0&globals=theme%3Alight)*

**Tableau avec largeur de colonnes minimales**

*(Démonstration interactive « table--multiline-col-min-size » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=table--multiline-col-min-size&nav=0&globals=theme%3Alight)*

**Tableau avec première colonne fixée**

*(Démonstration interactive « table--fixed-column » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=table--fixed-column&nav=0&globals=theme%3Alight)*

**Tableau complexe avec cellules fusionnées**

*(Démonstration interactive « table--complex-table » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=table--complex-table&nav=0&globals=theme%3Alight)*

**Tableau avec filtre et différents types de données**

*(Démonstration interactive « table--miscellaneous-table » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=table--miscellaneous-table&nav=0&globals=theme%3Alight)*

### Variantes esthétiques

**Bordures horizontales (par défaut)**

*(Démonstration interactive « table--default » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=table--default&nav=0&globals=theme%3Alight)*

**Bordures horizontales et verticales**

*(Démonstration interactive « table--vertical-borders » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=table--vertical-borders&nav=0&globals=theme%3Alight)*

### Densité

Le tableau prend automatiquement la taille de son conteneur.

Ce conteneur peut être scrollable horizontalement. Ceci est courant sur les écrans plus petits où il peut être impossible d'afficher le tableau complet sur l'écran de l'appareil. Le conteneur est donc responsive par défaut.

Toutefois, prenez garde à ce que les informations clés soient visibles au premier coup d’œil même sur un écran de petite taille.

Par défaut, la largeur des cellules s’adapte automatiquement à leur contenu. En revanche, il existe 3 niveaux de densité :

**SM pour small**

*(Démonstration interactive « table--size-sm » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=table--size-sm&nav=0&globals=theme%3Alight)*

**MD pour medium**

*(Démonstration interactive « table--size-sm » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=table--size-sm&nav=0&globals=theme%3Alight)*

**LG pour large**

*(Démonstration interactive « table--size-lg » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=table--size-lg&nav=0&globals=theme%3Alight)*

Ainsi si la taille des composants intégrés dans les cellules ne change pas, cela vous permet toutefois de varier la densité d’affichage de votre tableau en fonction de son contenu.

### Ligne sélectionnable

*(Démonstration interactive « table--selectable-table-selected-line » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=table--selectable-table-selected-line&nav=0&globals=theme%3Alight)*

> **Information**
> Les états désactivé, focus et cliqué sont propres aux composants intégrés au sein des cellules.

### Personnalisation

Le tableau n’est pas personnalisable.

Toutefois, l’ensemble des composants imbriqués (icône, pictogramme, tag, badge, bouton, lien, champ de saisie, infobulle, interrupteur et liste déroulante) peuvent être personnalisés selon leurs propres règles de personnalisation.

Par ailleurs, certains éléments sont optionnels - voir [la structure du composant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tableau/design-du-tableau#tableau) .

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tableau/code-du-tableau

### HTML

#### Structure du composant

Le composant **Tableau** permet de présenter des données tabulaires. Sa structure est conçue pour s’adapter aux écrans mobiles et comprend les éléments suivants :

- Un conteneur principal sous la balise `<div>` :
  - Doit avoir la classe `fr-table`.
- Un premier sous-conteneur sous la balise `<div>` :
  - Doit avoir la classe `fr-table__wrapper`.
- Un deuxième sous-conteneur sous la balise `<div>` :
  - Doit avoir la classe `fr-table__container`.
- Un troisième sous-conteneur sous la balise `<div>` :
  - Doit avoir la classe `fr-table__content`.
- Une zone de contenu pour le tableau :
  - Représentée par un élément `<table>`.
- Un titre, obligatoire, qui peut être positionné en haut (par défaut), en bas ou hors écran :
  - Représenté par un élément `<caption>`.
- Une ligne d’en-tête de colonne, obligatoire :
  - Représentée par un élément `<thead>`.
- Plusieurs ligne de corps, obligatoires :
  - Regroupées dans un ou plusieurs éléments `<tbody>`.
  - Représentées par un élément `<tr>`.
- Plusieurs cellules de contenu, obligatoires :
  - Représentées par un élément `<th>` ou `<td>`.

**Exemple de structure HTML**

#### Déplier pour voir le code

```html
<div class="fr-table">
    <div class="fr-table__wrapper">
        <div class="fr-table__container">
            <div class="fr-table__content">
                <table>
                    <caption>
                        Titre du tableau (caption)
                    </caption>
                    <thead>
                        <tr>
                            <th scope="col">
                                th0
                            </th>
                            <th scope="col">
                                th1
                            </th>
                            <th scope="col">
                                th2
                            </th>
                            <th scope="col">
                                th3
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
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
| Table | Oui |  |
| Checkbox | Non | Uniquement pour la version avec sélection de lignes |
| Button | Non | Uniquement pour les boutons de trie ou l'ajout d'actions dans le header ou footer du tableau |
| Select | Non | Uniquement pour la selection du nombre de ligne par page dans footer du tableau |
| Pagination | Non | Uniquement pour ajouter une pagination dans le footer du tableau |
| Segmented | Non | Uniquement pour ajouter un contrôle segmenté dans le header du tableau |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/table/table.min.css" rel="stylesheet">
```

NB: Il est aussi possible d'importer le CSS global du DSFR `dsfr.min.css`.

Pour une compatibilité avec Internet Explorer 11, les fichiers legacy peuvent également être ajoutés :

```html
<link href="dist/core/core.legacy.min.css" rel="stylesheet">
<link href="dist/component/table/table.legacy.min.css" rel="stylesheet">
```

#### Comportement du tableau

Le tableau par défaut scrollable prend toujours 100% de la largeur de son conteneur et le contenu des cellules est affiché sur une seule ligne.

La largeur d’une colonne s’adapte à la largeur de la cellule dont le contenu est le plus long.

Nous mettons à disposition les variations multiline à travers l’utilisation des classes `fr-table--multiline` sur le composant ou `fr-cell--multiline` au niveau des cellules (`<th>` ou `<td>`) pour permettre le retour à la ligne à l’intérieur des cellules. C'est alors le navigateur qui décidera de faire des passages à la ligne pour éviter au maximum le scroll.

Nous mettons aussi à disposition des classes `fr-col--xs` (et sm, md, lg) pour fixer la largeur minimale d'une colonne. Associées à la classe `fr-table--multiline` elles permettent de fixer la largeur des colonnes du tableau (hors césure de mots).

#### Variantes de tableau avec retour à la ligne automatique dans les cellules

Le tableau met à disposition des classes CSS pour permettre le retour à la ligne à l’intérieur des cellules :

- `fr-table--multiline` sur le composant `fr-table` applique le retour à la ligne sur toutes les cellules du tableau
- `fr-cell--multiline` au niveau des cellules (`<th>` ou `<td>`) applique le retour à la ligne sur la cellule

**Exemple de tableau avec retour à la ligne automatique dans les cellules**

```html
<div class="fr-table fr-table--multiline">
    <!-- Contenu de tableau avec retour à la ligne automatique dans les cellules -->
</div>
```

#### Variantes de tableau avec largeur de colonnes minimales

Vous avez à votre disposition des classes CSS pour permettre de fixer la largeur minimale des colonnes :

- `fr-col--xs` pour fixer une colonne minimale à 4rem (64px),
- `fr-col--sm` pour fixer une colonne minimale à 5rem (80px),
- `fr-col--md` pour fixer une colonne minimale à 12.5rem (200px),
- `fr-col--lg` pour fixer une colonne minimale à 25 rem (400px).

Ces classes doivent être utilisées au niveau des en-têtes de colonne `<th>`.

Combinées avec la classe `fr-table--multiline` au niveau du composant elles permettent de fixer la largeur des colonnes du tableau (hors césure de mots).

**Exemple de tableau avec retour à la ligne automatique dans les cellules et largeur de colonnes minimales**

#### Déplier pour voir le code

```html
<div class="fr-table fr-table--multiline">
    <div class="fr-table__wrapper">
        <div class="fr-table__container">
            <div class="fr-table__content">
                <table>
                    <caption>
                        Titre du tableau (caption)
                    </caption>
                    <thead>
                        <tr>
                            <th class="fr-col--xs">
                                xs
                            </th>
                            <th class="fr-col--sm">
                                sm
                            </th>
                            <th class="fr-col--md">
                                md
                            </th>
                            <th class="fr-col--lg">
                                lg
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Lorem
                            </td>
                            <td>
                                Lorem [...
                            </td>
                            <td>
                                Lorem [...] eli
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Lorem
                            </td>
                            <td>
                                Lorem [...
                            </td>
                            <td>
                                Lorem [...] eli
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
```

#### Variantes de densité

Le tableau peut être de différentes densités. Si la taille des composants intégrés dans les cellules ne change pas, cela vous permet de varier la densité d’affichage de votre tableau en fonction de son contenu. Il existe 3 niveaux de densité pour les cellules du tableau :

- `fr-table--sm` : densité SM,
- Par défaut en densité MD,
- `fr-table--lg` : densité LG.

**Exemple de tableau de différentes densité**

```html
<div class="fr-table fr-table--sm">
    <!-- Contenu de tableau SM -->
</div>
<div class="fr-table">
    <!-- Contenu de tableau MD -->
</div>
<div class="fr-table fr-table--lg">
    <!-- Contenu de tableau LG -->
</div>
```

#### Variante de tableau avec séparateurs verticaux

Vous avez la possibilité d'afficher des séparateurs de colonnes verticaux (obligatoires en cas de tableaux complexes) grâce à l'ajout de la classe `fr-table--bordered`.

**Exemple de tableau avec séparateurs verticaux**

```html
<div class="fr-table fr-table--bordered">
    <!-- Contenu de tableau -->
</div>
```

#### Variante de tableau non scrollable

Le conteneur est responsive par défaut mais vous avez la possibilité de rendre le tableau non scrollable grâce à la classe `fr-table--no-scroll`.

**Exemple de tableau non scrollable**

```html
<div class="fr-table fr-table--no-scroll">
    <!-- Contenu de tableau -->
</div>
```

#### Variantes de placement du titre

Le titre (`<caption>`) du tableau est obligatoire mais peut être positionné à différents emplacements :

- Par défaut en haut.
- `fr-table--caption-bottom` : en bas.
- `fr-table--no-caption` : hors écran.

**Exemple de tableau avec titre en bas**

```html
<div class="fr-table">
    <!-- Contenu de tableau avec titre en haut -->
</div>
<div class="fr-table fr-table--caption-bottom">
    <!-- Contenu de tableau avec titre en bas -->
</div>
<div class="fr-table fr-table--no-caption">
    <!-- Contenu de tableau avec titre hors écran -->
</div>
```

#### Variantes de tableau avec lignes sélectionnables

Le tableau peut contenir des en-têtes de ligne contenant des cases à cocher permettant de selectionner la ligne entière :

- L'en-tête du tableau `<thead>` doit contenir :
  - dans sa première colonne une en-tête de ligne `<th>` avec la classe `fr-cell--fixed` contenant :
    - un texte hors écran avec la classe `fr-sr-only` annonçant l'action de "Sélectionner".
- Chaque ligne du corps du tableau `<tr>` doit avoir un attribut `aria-selected` et contenir :
  - dans sa première colonne une en-tête de ligne `<th>` avec la classe `fr-cell--fixed` contenant :
    - une case à cocher `<input type="checkbox">` avec les attributs `data-fr-row-select="true"` et `id` obligatoires, pour être liée au libellé.
    - un libellé `<label>`, avec la classe `fr-label`, lié à la case à cocher via l'attribut `for`, sa valeur doit correspondre à l'attribut `id` de la case à cocher et son texte doit annonçer l'action de selection par exemple "Sélectionner la ligne 1".

**Exemple de tableau avec lignes sélectionnables**

#### Déplier pour voir le code

```html
<div class="fr-table">
    <div class="fr-table__wrapper">
        <div class="fr-table__container">
            <div class="fr-table__content">
                <table>
                    <caption>
                        Titre du tableau (caption)
                    </caption>
                    <thead>
                        <tr>
                            <th class="fr-cell--fixed" role="columnheader">
                                <span class="fr-sr-only">Sélectionner</span>
                            </th>
                            <th scope="col">
                                th0
                            </th>
                            <th scope="col">
                                th1
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th class="fr-cell--fixed" scope="row">
                                <div class="fr-checkbox-group fr-checkbox-group--sm">
                                    <input data-fr-row-select="true" id="table-select-checkbox-1" type="checkbox">
                                    <label class="fr-label" for="table-select-checkbox-1">
                                        Sélectionner la ligne 1
                                    </label>
                                </div>
                            </th>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                        </tr>
                        <!-- Lignes de corps supplémentaires -->
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
```

#### Variantes de tableau à double entrée avec colonne d'en-tête fixe

Le tableau peut présenter des en-têtes de ligne `<th>` fixes au scroll horizontal avec la classe `fr-cell--fixed`.

**Exemple de tableau à double entrée avec colonne d'en-tête fixe**

#### Déplier pour voir le code

```html
<div class="fr-table">
    <div class="fr-table__wrapper">
        <div class="fr-table__container">
            <div class="fr-table__content">
                <table>
                    <caption>
                        Titre du tableau (caption)
                    </caption>
                    <thead>
                        <tr>
                            <th class="fr-cell--fixed" role="columnheader">
                                <span class="fr-sr-only">En tête de colonne [À MODIFIER]</span>
                            </th>
                            <th scope="col">
                                th0
                            </th>
                            <th scope="col">
                                th1
                            </th>
                            <th scope="col">
                                th2
                            </th>
                            <th scope="col">
                                th3
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th class="fr-cell--fixed" scope="row">
                                th0
                            </th>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
```

##### Alignement

Par défaut, le contenu des cellules est aligné à gauche et centré verticalement.

Vous avez à votre disposition des classes CSS pour modifier l’ **alignement vertical** des cellules de contenu :

- `fr-cell--top` : Alignement vertical en haut.
- Alignement vertical au centre par défaut.
- `fr-cell--bottom` : Alignement vertical en bas.

Vous avez à votre disposition des classes CSS pour modifier l’ **alignement horizontal** des cellules de contenu :

- Alignement horizontal à gauche par défaut.
- `fr-cell--center` : Alignement horizontal au centre.
- `fr-cell--right` : Alignement horizontal à droite.

**Exemple de tableau avec des alignements de cellules différents**

#### Déplier pour voir le code

#### Déplier pour voir le code

```html
<div class="fr-table fr-table--bordered">
    <div class="fr-table__wrapper">
        <div class="fr-table__container">
            <div class="fr-table__content">
                <table>
                    <caption>
                        Titre du tableau (caption)
                    </caption>
                    <thead>
                        <tr>
                            <th scope="col">
                                th0
                            </th>
                            <th scope="col">
                                th1
                            </th>
                            <th scope="col">
                                th2
                            </th>
                            <th scope="col">
                                th3
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="fr-cell--top">
                                Lorem [...] elit ut.
                            </td>
                            <td class="fr-cell--bottom">
                                Lorem [...] elit ut.
                            </td>
                            <td class="fr-cell--center">
                                Lorem [...] elit ut.
                            </td>
                            <td class="fr-cell--right">
                                Lorem
                                <br>Lorem [...
                                <br>Lorem [...] elit ut.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
```

#### Déplier pour voir le code

##### Retour à la ligne automatique

Le contenu en ligne des cellules est par défaut affiché sur une seule ligne grâce à la propriété CSS `white-space: nowrap;` qui empêche les retours à la ligne. Ce comportement peut être désactivé en ajoutant la classe `fr-cell--multiline` sur l'element `<table>`, une ligne `<tr>`, une en-tête de ligne `<th>` ou une cellule `<td>` du tableau.

**Exemple de tableau avec retour à la ligne automatique**

```html
<div class="fr-table">
    <div class="fr-table__wrapper">
        <div class="fr-table__container">
            <div class="fr-table__content">
                <table class="fr-cell--multiline">
                    <!-- Contenu de tableau avec retour à la ligne automatique -->
                </table>
            </div>
        </div>
    </div>
</div>
```

---

### JavaScript

Un script est disponible pour ajouter des fonctionnalités interactives au tableau, comme le placement du caption, la gestion des ombres sur la version dépréciée, et la sélection de lignes via les checkbox.

#### Installation du JavaScript

Pour fonctionner le composant tableau nécessite l'utilisation de JavaScript.

Le JavaScript du composant et de ses dépendances doivent être importés. L'import doit se faire à la fin de la page, avant la balise `</body>`, et de préférence avec les fichiers minifiés, car plus légers.

**Dépendances JS**

| Dépendance | Obligatoire | Remarque |
|---|---|---|
| Core | Oui |  |
| checkbox | Non | Uniquement pour la version avec lignes sélectionnables |
| Table | Oui |  |

##### Retour à la ligne automatique

Le contenu en ligne des cellules est par défaut affiché sur une seule ligne grâce à la propriété CSS `white-space: nowrap;` qui empêche les retours à la ligne. Ce comportement peut être désactivé en ajoutant la classe `fr-cell--multiline` sur l'element `<table>`, une ligne `<tr>`, une en-tête de ligne `<th>` ou une cellule `<td>` du tableau.

**Exemple de tableau avec retour à la ligne automatique**

```html
<div class="fr-table">
    <div class="fr-table__wrapper">
        <div class="fr-table__container">
            <div class="fr-table__content">
                <table class="fr-cell--multiline">
                    <!-- Contenu de tableau avec retour à la ligne automatique -->
                </table>
            </div>
        </div>
    </div>
</div>
```

---

### JavaScript

Un script est disponible pour ajouter des fonctionnalités interactives au tableau, comme le placement du caption, la gestion des ombres sur la version dépréciée, et la sélection de lignes via les checkbox.

#### Installation du JavaScript

Pour fonctionner le composant tableau nécessite l'utilisation de JavaScript.

Le JavaScript du composant et de ses dépendances doivent être importés. L'import doit se faire à la fin de la page, avant la balise `</body>`, et de préférence avec les fichiers minifiés, car plus légers.

**Dépendances JS**

| Dépendance | Obligatoire | Remarque |
|---|---|---|
| Core | Oui |  |
| checkbox | Non | Uniquement pour la version avec lignes sélectionnables |
| Table | Oui |  |

**Exemple d'imports JS**

```html
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/checkbox/checkbox.module.min.js"></script>
<script type="module" src="dist/component/table/table.module.min.js"></script>
```

NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```html
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/checkbox/checkbox.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/table/table.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur le tableau, les éléments suivants sont instanciés :

- Le composant "table", via la classe : `fr-table`
- L'élément `<table` du composant, via le sélecteur : `fr-table table` (pour la version dépréciée)
- Les lignes du tableau, via le sélecteur : `fr-table tr` (pour la version avec lignes sélectionnables)
- Les checkboxes du tableau, via le sélecteur : `fr-table td` (pour la version avec lignes sélectionnables)

Une fois chargé, le Js ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés

#### API

Il est possible d'interagir avec les instances du composants en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :

```javascript
const elem = document.getElementById('ID_TABLE');
dsfr(elem).table.isEnabled;
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

##### table

**isEnabled**

| **Description** | Défini si le fonctionnement du tableau est activé ou non |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).table.isEnabled = false` |

**parent**

| **Description** | Retourne l'instance du dsfr parent |
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
| **Exemple** | `dsfr(elem).table.node` |

##### tableCaption

**resize**

| **Description** | Permet de mettre à jour la taille du caption après un changement de libellé. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(tableCaption).tableCaption.resize()` |

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+table)

#### [v1.14.3](https://github.com/GouvernementFR/dsfr/releases/tag/v1.14.3) - 15 décembre 2025

- **[header du tableau et bouton aria-sort](https://github.com/GouvernementFR/dsfr/pull/1347)**  
  #1347  
  - Alignement du contrôle segmenté à droite dans le header
- Permet une utilisation correcte de aria-sort, ajouts des classe fr-btn--sort-asc et fr-btn--sort-desc
- Ajout d'un exemple avec barre de recherche dans le header du tableau  
  ✨ feat  
  table

#### [v1.13.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.13.1) - 26 mars 2025

- **[ajout de breakpoints pour les cellules fixées](https://github.com/GouvernementFR/dsfr/pull/1097)**  
  #1097  
  les colonnes fixées peuvent maintenant être fixées à partir d'un breakpoint (sm, md, lg)  
  ✨ feat  
  table

#### [v1.13.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.13.0) - 4 décembre 2024

- **[supporte le comportement `row-select` via data attribute](https://github.com/GouvernementFR/dsfr/pull/1053)**  
  #1053  
  - la sélection de ligne du tableau est implémentée via l'attribut data-fr-row-select="true" sur la case à cocher, le fonctionnement via l'attribut name="row-select" est déprécié.  
  ✨ feat  
  table

- **[bordure disparait lors d'un rowspan en dernière position](https://github.com/GouvernementFR/dsfr/pull/1041)**  
  #1041  
  - Correction de la bordure lorsqu'un rowspan est en dernière position  
  🐛 fix  
  table

- **[correction de l'attribut aria-sort](https://github.com/GouvernementFR/dsfr/pull/1030)**  
  #1030  
  - remplace l'attribut aria-sorting par aria-sort sur les bouton de tri avec comme valeurs descending et ascending
- met à jour la page d'exemple des tableaux  
  🐛💥 fix 💥 Breaking change  
  table

#### [v1.12.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.12.1) - 25 juin 2024

- **[corrige regressions sur les tableaux déprécies](https://github.com/GouvernementFR/dsfr/pull/969)**  
  #969  
  - déplace bordures des tableaux déprécies sur les thead et tbody
- retire les selecteurs css  
  🐛 fix  
  table

#### [v1.12.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.12.0) - 19 juin 2024

- **[Mise à jour des exemples](https://github.com/GouvernementFR/dsfr/pull/949)**  
  #949  
  - correction legacy
- mise à jour de l'icone twitter  
  ✨ feat  
  table

- **[ajout du tableau non scrollable](https://github.com/GouvernementFR/dsfr/pull/947)**  
  #947  
  - ajout d'une version de tableau sans scroll, avec réduction automatique des cellules  
  ✨ feat  
  table

- **[tableau v2](https://github.com/GouvernementFR/dsfr/pull/911)**  
  #911  
  - evolution majeure du tableau  
  ✨ feat  
  table

#### [v1.6.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.6.0) - 14 juin 2022

- **[bug ios bordures qui n'apparaissent pas](https://github.com/GouvernementFR/dsfr/pull/332)**  
  #332  
  fix  
  table

#### [v1.2.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.2.0) - 17 novembre 2021

- **[correction tableau avec bordure gris](https://github.com/GouvernementFR/dsfr/pull/136)**  
  #136  
  fix  
  table

- **[couleur lignes odd des tableaux](https://github.com/GouvernementFR/dsfr/pull/48)**  
  #48  
  fix  
  table

#### [v1.1.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.1.0) - 27 juillet 2021

- **[fonctionnement sans js](https://github.com/GouvernementFR/dsfr/pull/16)**  
  #16  
  refactor  
  table

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tableau/accessibilite-du-tableau

Le composant **Tableau** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction clavier n'est liée au composant.

### Règles d’accessibilité

#### Structuration

- Le tableau propose une balise caption contenant un titre pertinent.
- Les en-têtes de lignes et de colonnes doivent être des `<th>`.
- Associer les en-têtes de lignes et de colonnes avec :
  - un attribut `scope="row"` pour les en-têtes de lignes,
  - un attribut `scope="col"` pour les en-têtes de colonnes.

> **Information**
> L’attribut `scope` n’est pas nécessaire sur les tableaux de données avec une seule ligne ou une seule colonne d’en-têtes.

#### Tableau complexe

Un tableau est dit complexe lorsqu’il y a des cellules fusionnées.

- Le tableau doit avoir un résumé pour aider les personnes qui en ont besoin d’appréhender le contenu présenté.
- Lier les cellules de contenu aux cellules d’en-tête avec l’attribut `headers` et les `id` des cellules d’en-tête séparés par un espace. L’attribut `scope` n’est alors pas nécessaire.

#### Contrastes de couleurs

Le composant Tableau est suffisamment contrasté en thème clair et en thème sombre.

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Tableau.

---

### Critères RGAA applicables

- **Couleurs** : 3.2
- **Tableaux :** 5.1, 5.2, 5.4, 5.5, 5.6, 5.7
- **Présentation de l’information** : 10.1, 10.2, 10.3,10.4, 10.5, 10.7, 10.11, 10.12
- **Consultation :** 13.9

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)

#### Ressources

[Tableaux de données complexes : comment les intégrer de manière accessible en HTML ?](https://access42.net/tableaux-donnees-complexes-integration-html-accessible-rgaa/) .

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tableau/demonstration-du-tableau

*(Démonstration interactive « table--docs » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=table--docs&nav=0&globals=theme%3Alight)*
