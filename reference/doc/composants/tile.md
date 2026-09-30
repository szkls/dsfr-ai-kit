# Tuile

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tuile · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tuile/design-de-la-tuile · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tuile/code-de-la-tuile · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tuile/accessibilite-de-la-tuile · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tuile/demonstration-de-la-tuile
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

La tuile est un élément d’interaction avec l’interface permettant de rediriger l’usager vers des pages de contenu.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tuile

*(Démonstration interactive « tile--tile » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=tile--tile&nav=0&globals=theme%3Alight)*

### Quand utiliser ce composant ?

Utiliser la tuile pour créer un raccourci ou un point d’entrée vers des pages de contenu.

La tuile n’a pas vocation à être utilisée pour mettre en avant l’action principale d’une page.

> **Information**
> Bien différencier la tuile de la [carte](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/carte) . La carte permet d’avoir un aperçu du contenu des pages vers lesquelles elle renvoie.

### Comment utiliser ce composant ?

- **Utiliser les tuiles pour créer des collections ou listes d’éléments similaires** . La tuile n’est jamais présentée de manière isolée.
- **Harmoniser la hauteur des tuiles par ligne** , en prenant la plus importante comme référence, lorsque celles-ci sont disposées au sein d’une liste ou d’une collection.

> **À faire :** Contraindre toutes les tuiles d’une même ligne à la même hauteur.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tile/use/do-1.png)

> **À ne pas faire :** Ne pas créer de disparité dans la hauteur des tuiles d’une même ligne.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tile/use/dont-1.png)

- **Proposer des tuiles de même structure** lorsque celles-ci composent une liste ou une collection.

> **À faire :** Conserver un contenu commun au sein des tuiles qui forment un même ensemble.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tile/use/do-2.png)

> **À ne pas faire :** Ne pas proposer des contenus différents entre chacune des tuiles d’un même ensemble.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tile/use/dont-2.png)

- **Préférer les tuiles horizontales** lorsque les titres sont longs.
- **Conserver l’intégralité de la tuile cliquable** lorsque vous proposez cette variation.

### Règles éditoriales

- **Rédiger des titres et descriptions synthétiques** .
- **Proposer des contenus distincts pour chaque tuile** , en évitant de réutiliser plusieurs fois le même pictogramme.
- **Être vigilant sur les dimensions des illustrations utilisées** afin de garantir leur adaptation aux différents types d’affichages responsive.

#### Contenu associé

- **[Badge](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge)**  
  Présentation du composant Badge utilisé pour afficher une information de type statut ou état liée à un élément de l’interface.

- **[Carte](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/carte)**  
  Présentation du composant Carte permettant de rediriger l’usager vers une page éditoriale, en lui donnant un aperçu. Elle peut intégrer des médias, actions, tags ou boutons et se décline en différents formats.

- **[Tag](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tag)**  
  Présentation du composant Tag destiné à la catégorisation ou au filtrage de contenus dans une interface.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tuile/design-de-la-tuile

![Anatomie de la tuile](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tile/design/anatomy/anatomy-1.png)

1. Un pictogramme — En option
2. Une première zone de détail, composée d’une précision sous forme de tags (cliquables ou non) ou de badges (jusqu'à 4 éléments) — En option
3. Un titre reprenant celui de l’objet visé, (page de destination, action réalisée, site etc.) — Obligatoire
4. Une description — En option
5. Une deuxième zone de détail, composée d’un texte — En option
6. Une icône illustrative, (par défaut, une flèche) — En option
7. Une bordure, bleue lorsque la tuile est cliquable et noire lorsqu’elle est non cliquable — Obligatoire

### Variations

**Tuile horizontale**

- Cliquable

*(Démonstration interactive « tile--horizontal » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=tile--horizontal&nav=0&globals=theme%3Alight)*

- Non cliquable

*(Démonstration interactive « tile--no-link » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=tile--no-link&nav=0&globals=theme%3Alight)*

**Tuile verticale**

- Cliquable

*(Démonstration interactive « tile--default » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=tile--default&nav=0&globals=theme%3Alight)*

- Non cliquable

*(Démonstration interactive « tile--horizontal-no-link » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=tile--horizontal-no-link&nav=0&globals=theme%3Alight)*

**Tuile de téléchargement**

*(Démonstration interactive « tile--download » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=tile--download&nav=0&globals=theme%3Alight)*

- Utiliser la tuile de téléchargement pour mettre à disposition de l’usager un fichier en téléchargement.
- Le titre de la tuile de téléchargement reprend le nom du fichier et doit systématiquement être précédé de la mention “Télécharger”.
- La seconde zone de détail affiche obligatoirement le format et le poids du fichier.
- L’icône de téléchargement est ici obligatoire.

**Variantes esthétiques**

- Tuile avec fond gris
- Tuile avec ombre portée
- Tuile sans bordure
- Tuile sans fond

### Tailles

La tuile est disponible en 2 tailles :

- SM pour small

*(Démonstration interactive « tile--size-sm » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=tile--size-sm&nav=0&globals=theme%3Alight)*

En desktop, elle occupe un maximum de 3 à 4 colonnes de large.

- MD pour medium

*(Démonstration interactive « tile--default » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=tile--default&nav=0&globals=theme%3Alight)*

En desktop, elle occupe entre 4 et 6 colonnes de large.

En version mobile, les deux tailles SM et MD occupent l’intégralité de la largeur de la grille.

Par ailleurs, la hauteur de la tuile s’adapte à son contenu.

### États

**État désactivé**

L’état désactivé indique que l'usager ne peut pas interagir avec la tuile.

*(Démonstration interactive « tile--default-story » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=tile--default-story&nav=0&args=disabled%3Atrue&globals=theme%3Alight)*

**État au survol**

L’état au survol correspond au comportement constaté par l’usager lorsqu’il survole la tuile avec sa souris.

### Personnalisation

La tuile comporte des variantes esthétiques (voir section “Variations”).

L’ensemble des composants imbriqués ( [pictogramme](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/pictogramme) et [badge](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge) ) peuvent également être personnalisés selon leurs propres règles de personnalisation.

Par ailleurs, certains éléments sont optionnels - voir [la structure du composant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tuile/design-de-la-tuile#tuile) .

> **À faire :** Proposer une tuile avec un fond par défaut.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tile/design/custom/do-1.png)

> **À ne pas faire :** Ne pas personnaliser le fond de la tuile avec une autre couleur illustrative.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tile/design/custom/dont-1.png)

> **À faire :** Choisir la couleur secondaire du pictogramme parmi celles disponibles dans les couleurs illustratives.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tile/design/custom/do-2.png)

> **À ne pas faire :** Ne pas personnaliser la couleur primaire du pictogramme.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tile/design/custom/dont-2.png)

> **À faire :** S’affranchir du contour de la tuile.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tile/design/custom/do-3.png)

> **À ne pas faire :** Ne pas supprimer ou personnaliser la couleur de la bordure qui traduit le caractère cliquable ou non cliquable de la tuile.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tile/design/custom/dont-3.png)

#### Contenu associé

- **[Badge](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge)**  
  Présentation du composant Badge utilisé pour afficher une information de type statut ou état liée à un élément de l’interface.

- **[Carte](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/carte)**  
  Présentation du composant Carte permettant de rediriger l’usager vers une page éditoriale, en lui donnant un aperçu. Elle peut intégrer des médias, actions, tags ou boutons et se décline en différents formats.

- **[Tag](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tag)**  
  Présentation du composant Tag destiné à la catégorisation ou au filtrage de contenus dans une interface.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tuile/code-de-la-tuile

### HTML

#### Structure du composant

Le composant **Tuile** est un élément interactif permettant de donner des aperçus cliquables d’une page de contenu. Sa structure est la suivante :

- La tuile est un élément HTML `<div>` défini par la classe `fr-tile`.
- Les Tuiles sont généralement utilisées au sein d'une **grille** , disponible dans les fondamentaux (voir [grille](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/grille-et-points-de-rupture) ).
- Son contenu est structuré en plusieurs parties :
  - L'en-tête de la tuile `fr-tile__header`, optionnel, pouvant contenir :
    - Un pictogramme dans un élément `fr-tile__pictogram` (voir [Pictogramme](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/pictogramme) ).
  - Le corps de la tuile `fr-tile__body`, obligatoire, il contient le contenu de la tuile :
    - Un titre, obligatoire, un élément HTML avec un niveau d'entête `<hx>` et la classe `fr-tile__title` pouvant contenir un lien ou un simple texte.
    - Une description, optionnelle, `fr-tile__desc`, un élément HTML de type `<p>`.
    - Un texte de détail, optionnel, `fr-tile__detail`, un élément HTML de type `<p>`.
    - Une zone se plaçant avant le contenu `fr-tile__start` qui peut accueillir :
      - Un badge ou un tag, optionnels, (voir composants [Badge](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge/code-du-badge) et [Tag](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tag/code-du-tag) ).
      - Un texte de détail `fr-tile__detail`, optionnel, auquel on peut associer une icône.

**Exemple de structure HTML simple**

```html
<div class="fr-tile fr-enlarge-link">
    <div class="fr-tile__body">
        <div class="fr-tile__content">
            <h3 class="fr-tile__title">
                <a href="[url - à modifier]">Intitulé de la tuile</a>
            </h3>
            <p class="fr-tile__desc">Description de la tuile</p>
            <p class="fr-tile__detail">Détail</p>
            <div class="fr-tile__start">
                <p class="fr-badge fr-badge--purple-glycine">Libellé badge</p>
            </div>
        </div>
    </div>
    <div class="fr-tile__header">
        <div class="fr-tile__pictogram">
            <svg aria-hidden="true" class="fr-artwork" viewBox="0 0 80 80" width="80px" height="80px">
                <use class="fr-artwork-decorative" href="../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-decorative"></use>
                <use class="fr-artwork-minor" href="../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-minor"></use>
                <use class="fr-artwork-major" href="../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-major"></use>
            </svg>
        </div>
    </div>
</div>
```

#### Tuile de téléchargement

Une variante tuile de téléchargement existe, comme pour les composants Lien et Carte, pour proposer le téléchargement d'un fichier. La tuile de téléchargement est toujours en format horizontale par défaut. Cette variante reprend la même structure que la tuile standard à l'exception de certains éléments :

- La Tuile doit avoir la classe `fr-card--download`.
- L'intitulé du titre doit avoir ce format : **Télécharger le/la [Typologie de document] « [Nom du document] »** .
- Le lien du titre doit avoir :
  - L'attribut `download`. Ajouter une valeur à l'attribut permet de renommer le fichier au moment du téléchargement.
  - L'attribut `hreflang`, si le fichier est dans une autre langue, avec comme valeur le code langue du document à télécharger.
- **Étendre le clic** à toute la tuile est obligatoire.
  - Ajouter la classe : `fr-enlarge-link` sur la tuile pour étendre le lien.
  - Dans le cas d'un téléchargement programmatique, le téléchargement peut venir d'un bouton. Il est possible de remplacer le lien du titre par un `button`. Il faudra alors utiliser la classe `fr-enlarge-button` sur la tuile.
- La **texte de détail est obligatoire** `fr-card__details`.
  - Il doit indiquer le type de fichier (son extension), son poids, et sa langue si différente de la page.
  - Il est possible de remplir automatiquement le détail en JS grâce à l'attribut `data-fr-assess-file` sur le lien (Voir section [Javascript](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tuile/code-de-la-tuile#javascript) ).

**Exemple de tuile de téléchargement**

```html
<div class="fr-tile fr-tile--download fr-enlarge-link">
    <div class="fr-tile__body">
        <div class="fr-tile__content">
            <h3 class="fr-tile__title">
                <a download href="[url - à modifier]">Télécharger le document XX</a>
            </h3>
            <p class="fr-tile__desc">Description (optionnelle)</p>
            <p class="fr-tile__detail">Détail obligatoire (Extension - Poids - Langue)</p>
        </div>
    </div>
    <div class="fr-tile__header">
        <div class="fr-tile__pictogram">
            <svg aria-hidden="true" class="fr-artwork" viewBox="0 0 80 80" width="80px" height="80px">
                <use class="fr-artwork-decorative" href="../../../../dist/artwork/pictograms/document/document-download.svg#artwork-decorative"></use>
                <use class="fr-artwork-minor" href="../../../../dist/artwork/pictograms/document/document-download.svg#artwork-minor"></use>
                <use class="fr-artwork-major" href="../../../../dist/artwork/pictograms/document/document-download.svg#artwork-major"></use>
            </svg>
        </div>
    </div>
</div>
```

#### Groupe de Tuiles

Il n'existe pas à proprement parlé de groupe de Tuiles. Néanmoins, les Tuiles sont généralement utilisées sous forme d'un ensemble d'élément. Elles peuvent être disposées côte à côte grâce à la **grille** disponible dans les fondamentaux. La grille permet de définir un nombre de colonne pour chaque Tuile, sur une base de 12 colonnes, et peut varier en fonction de la taille de l'écran (breakpoint). Voir page [grille](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux) pour plus d'information.

**Exemple de grille de Tuile**

```html
<div class="fr-grid-row fr-grid-row--gutters">
    <div class="fr-col-12 fr-col-md-4 fr-col-lg-3">
        <div class="fr-tile fr-enlarge-link">(...)</div>
    </div>
    <div class="fr-col-12 fr-col-md-6 fr-col-lg-4">
        <div class="fr-tile fr-enlarge-link">(...)</div>
    </div>
    <div class="fr-col-12 fr-col-md-6 fr-col-lg-4">
        <div class="fr-tile fr-enlarge-link">(...)</div>
    </div>
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
| Tile | Oui |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/tile/tile.min.css" rel="stylesheet">
```

#### Variantes de taille

La tuile peut avoir différentes tailles qui auront un impact sur la taille du texte, des espacements, du pictogramme, et de l'icône :

- `fr-tile--sm` : Petite tuile.
- Par défaut : Tuile moyenne.

Par défaut, la tuile prend 100% de la largeur de son conteneur et sa hauteur varie en fonction de son contenu. La largeur des Tuiles peut être ajustée via le nombre de colonnes de la grille (Voir [grille](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/grille-et-points-de-rupture) ).

Utiliser une taille de Tuile adaptée à la largeur de son conteneur :

- 2 à 4 colonne pour une Tuile SM.
- 3 à 6 colonne pour une Tuile MD.

**Exemples de variantes de taille**

```html
<div class="fr-tile fr-tile--sm fr-enlarge-link">
    <!-- Contenu de la tuile SM -->
</div>
<div class="fr-tile fr-enlarge-link">
    <!-- Contenu de la tuile MD -->
</div>
```

#### Variantes de style

La tuile est disponible en plusieurs autres variantes :

- La Tuile avec **fond gris** : définie par la classe `fr-tile--grey`.
- La Tuile sur **fond transparent** : définie par la classe `fr-tile--no-background`.
- La Tuile **sans bordure** : définie par la classe `fr-tile--no-border`.
- La Tuile **avec ombre portée** : définie par la classe `fr-tile--shadow`.

**Exemples de variantes de style**

```html
<div class="fr-tile fr-tile--grey fr-enlarge-link">
    <!-- Contenu de la tuile sur fond gris -->
</div>
<div class="fr-tile fr-tile--no-background fr-enlarge-link">
    <!-- Contenu de la tuile sur fond transparent -->
</div>
<div class="fr-tile fr-tile--no-border fr-enlarge-link">
    <!-- Contenu de la tuile sans bordure -->
</div>
<div class="fr-tile fr-tile--shadow fr-enlarge-link">
    <!-- Contenu de la tuile avec ombre -->
</div>
```

#### Variantes d'orientation

Les tuiles sont disponibles, par défaut, en format vertical (pictogramme en haut et contenu en bas). Il existe aussi des variantes permettant de passer la tuile en format **horizontal** (pictogramme à gauche et contenu à droite).

- La classe `fr-tile--horizontal` : passe la tuile en format horizontal en mobile et desktop.
- Les classes `fr-tile--horizontal` et `fr-tile--vertical@md` : passe la tuile en format horizontal puis en vertical à partir du breakpoint MD (768px).
- Les classes `fr-tile--horizontal` et `fr-tile--vertical@lg` : passe la tuile en format horizontal puis en vertical à partir du breakpoint LG (992px).

**Exemples de tuiles horizontales**

```html
<div class="fr-tile fr-tile--horizontal fr-enlarge-link">
    <!-- Contenu de la tuile horizontale -->
</div>
<div class="fr-tile fr-tile--horizontal fr-tile--vertical@md fr-enlarge-link">
    <!-- Contenu de la tuile horizontale puis verticale à partir du breakpoint MD -->
</div>
<div class="fr-tile fr-tile--horizontal fr-tile--vertical@lg fr-enlarge-link">
    <!-- Contenu de la tuile horizontale puis verticale à partir du breakpoint LG -->
</div>
```

#### Variantes d'icônes

Par défaut, sur les **tuiles avec lien étendu et non externe** , une icône "arrow-right" apparaît en bas à droite. Dans certains cas, comme pour réduire la taille de la tuile, il peut être utile de **retirer cette icône** . Il suffit pour cela d'ajouter la classe `fr-tile--no-icon` sur la tuile. Si le lien est un **lien externe** , l'icône "external-link" reste obligatoire.

**Exemple de retrait d'icône**

```html
<div class="fr-tile fr-enlarge-link fr-tile--no-icon">
    <!-- Contenu de la tuile -->
</div>
```

---

### JavaScript

Le composant Tuile **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

Une fonctionnalité disponible dans le core, permet de remplir automatiquement le détail des **Tuiles de téléchargement** . Pour instancier le javascript de remplissage automatique du détail sur la Tuile de téléchargement, ajouter l'attribut `data-fr-assess-file` sur le lien du titre. Les propriétés de type, poids, et langue sont récupérées depuis le fichier. Le texte de détail est automatiquement remplacé au chargement du JS. Il est conseillé de tout de même remplir les infos connues dans le détail en solution de repli. Si la page est en Anglais, l'attribut `data-fr-assess-file` doit prendre la valeur "bytes", pour afficher le poids en Bytes plutôt qu'en Octet.

Pour fonctionner le fichier à télécharger doit être sur le même cross-domain que le site.

#### Installation du JavaScript

Pour fonctionner, le **remplissage automatique du détail des Tuiles de téléchargement** nécessite l'utilisation de JavaScript. Cette fonctionnalité est disponible dans le core.

Il est donc nécessaire d'importer les fichiers js du core à la fin de la page (avant `</body>`) :

```html
<script type="module" src="dist/core/core.module.min.js"></script>
```

NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```html
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
```

#### API

> **Information**
> L'activation ou la désactivation de la fonction de remplissage automatique du détail des Tuiles de téléchargement (assess-file) n'est pas disponible via l'API JS, elle se fait via l'ajout ou le retrait de l'attribut `data-fr-assess-file` sur le lien.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+tile+)

#### [v1.15.3](https://github.com/GouvernementFR/dsfr/releases/tag/v1.15.3) - 8 septembre 2026

- **[correction de la propriété storybook pictogramName](https://github.com/GouvernementFR/dsfr/pull/1520)**  
  #1520  
  - Passage de la propriété pictogramName d'une string à un select listant tous les pictogrammes  
  🐛 fix  
  tile radio

#### [v1.13.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.13.0) - 4 décembre 2024

- **[retrait des sélecteur css ">"](https://github.com/GouvernementFR/dsfr/pull/1049)**  
  #1049  
  - Retrait des selecteurs d'enfants directs pour éviter les problèmes lors de l'ajout de balises intermediaires (cas de création de sous composants)  
  🐛 fix  
  tile navigation

#### [v1.12.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.12.0) - 19 juin 2024

- **[enlarge button](https://github.com/GouvernementFR/dsfr/pull/943)**  
  #943  
  - ajout d'une classe utilitaire enlarge-button utilisée sur les cartes et les tuiles de téléchargement pour élargir la zone de clique à tout le composant quand l'element cliquable est un bouton  
  🐛 fix  
  link card tile

- **[ajoute version avec button](https://github.com/GouvernementFR/dsfr/pull/842)**  
  #842  
  - ajout de la possibilité d'utiliser un "button" plutôt qu'un "a" sur la carte et la tuile  
  ✨ feat  
  card tile enlarge-link

#### [v1.11.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.0) - 11 décembre 2023

- **[espacement entre libellé et icone](https://github.com/GouvernementFR/dsfr/pull/818)**  
  #818  
  - retrait du saut de ligne entre la balise `a` et son libellé pour corriger l'écart entre le libellé du lien et l'icone
- ajout d'un exemple "lien externe" dans les exemples de lien
- correction de la taille de l'icone sur les tuiles sans lien étendu
- retrait de l'icone `arrow-right` sur les tuiles sans lien étendu, pour être iso avec les cartes  
  🐛 fix  
  link card tile

#### [v1.10.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.10.1) - 4 septembre 2023

- **[correction de l'icone des tuiles avec lien externe](https://github.com/GouvernementFR/dsfr/pull/753)**  
  #753  
  🐛 fix  
  tile

#### [v1.10.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.10.0) - 19 juillet 2023

- **[correctif espacements version dépreciée](https://github.com/GouvernementFR/dsfr/pull/704)**  
  #704  
  - L'icône et le contenu se retrouvent superposés dans la version dépréciée, ce correctif rétablit l'espacement nécessaire  
  🐛 fix  
  tile

- **[A11Y liens désactivés](https://github.com/GouvernementFR/dsfr/pull/709)**  
  #709  
  - Ajout des attributs `role="link"` et `aria-disabled=true` sur les version désactivées  
  🐛 fix  
  tile card

- **[correctif IE 11](https://github.com/GouvernementFR/dsfr/pull/705)**  
  #705  
  - correctif sur les tuiles et card sur la version legacy pour éviter les bugs de dépassement de texte et placement des icônes  
  🐛 fix  
  card tile

- **[ajouts de variations de tuiles](https://github.com/GouvernementFR/dsfr/pull/685)**  
  #685  
  Ajouts des mêmes variations que la carte :  
  - `.fr-tile--no-border` sans le bordure encadrant la tuile (mais la barre épaisse basse reste)
- `.fr-tile--shadow` avec élévation
- `.fr-tile--grey` en gris contrast
- `.fr-tile--no-background` couleur de fond transparente  
  ✨ feat  
  tile

- **[corrige erreur de syntaxe ejs + lint](https://github.com/GouvernementFR/dsfr/pull/687)**  
  #687  
  🐛 fix  
  card tile

- **[correctif lien externe et désactivé](https://github.com/GouvernementFR/dsfr/pull/683)**  
  #683  
  - sur les exemples avec lien externe, ajout de title="[Intitulé] - nouvelle fenêtre"
- sur les exemples avec liens désactivés, ajout de role="link" et aria-disabled="true"  
  🐛 fix  
  card tile

- **[correctif token title](https://github.com/GouvernementFR/dsfr/pull/682)**  
  #682  
  - le titre des cartes et tuiles doivent utiliser le token de couleur text-title-grey  
  🐛 fix  
  card tile

- **[ajout version sans liens, target blank, et mise à jour des exemples](https://github.com/GouvernementFR/dsfr/pull/657)**  
  #657  
  - Ajout de version carte et tuile sans lien (en noir)
- Ajout de l'icone target blank sur les cartes avec lien non élargi en target="_blank"
- Ajout d'exemples de carte et tuile de téléchargement avec remplissage automatique des détails (en Octet ou en Bytes)
- Ajout d'exemple de carte et tuile de téléchargement avec fichier en langue étrangère
- Séparation des exemples de tuile de téléchargement
- Changement des pictogrammes des tuiles de téléchargement
- Ajustement de la grille dans les exemples de tuiles  
  🐛 fix  
  card tile

- **[Ajout icône flèche, état désactivé, icone lien externe, tuile de téléchargement](https://github.com/GouvernementFR/dsfr/pull/602)**  
  #602  
  Les tuiles peuvent maintenant être de type téléchargement (comme les cartes)  
  - Les tuiles de téléchargement sont par défaut horizontales
- Le détail de la tuile de téléchargement est obligatoire et il peut être rempli automatiquement en fonction du fichier à télécharger en plaçant à l'attribut "data-fr-assess-file" sur le lien (comme pour carte)  
  Les tuiles ont maintenant par défaut une icone.  
  - arrow-right (par défaut)
- external-link (en target="_blank")
- download (avec la classe fr-tile--download)  
  Les tuiles désactivées (a sans href) ont à présent:  
  - la bordure bottom en grise
- l'icone et le titre en gris  
  Ajout des classes "fr-tile--vertical@md" et "fr-tile--vertical@lg" pour passer une tuile horizontale, ou download, en vertical à partir des breakpoints md et lg  
  ✨ feat  
  tile

- **[évolution des tuiles](https://github.com/GouvernementFR/dsfr/pull/534)**  
  #534  
  **Evolution majeur du composant Tuile :** Nous souhaitons revoir la structure html de la tuile pour étendre les variations de contenu (avec détails, badge, etc), et uniformiser avec les comportements de la Carte (card).  
  Changements apportés :  
  - Ajout d'un niveau d'encapsulation dans la structure html
  - Ajout d'un wrapper "fr-tile__content" pour englober le contenu
  - Ajout d'un wrapper "fr-tile__header" pour englober l'image
- L'image des tuiles est remplacée par un pictogramme
  - La classe "fr-tile__img" devient "fr-tile__pictogram"
  - Son contenu est maintenant un svg "fr-artwork"
- Ajout de la possibilité de placer un badge, un tag, un texte de détail, dans le contenu de la tuile
- Ajout d'une taille de tuile SM : "fr-tile--sm"  
  **⚠️ Breaking Change** Le snippet de code d'une tuile :  
  <div class="fr-tile fr-enlarge-link"> <div class="fr-tile__body"> <h4 class="fr-tile__title"> <a class="fr-tile__link" href>Titre M bold</a> </h4> <p class="fr-tile__desc">Texte M regular 2 lignes max</p> </div> <div class="fr-tile__img"> <img class="fr-responsive-img" src="../../../example/img/placeholder.1x1.png" alt="" /> <!-- L’alternative de l’image (attribut alt) doit rester vide car l’image est illustrative et ne doit pas être restituée aux technologies d’assistance --> </div> </div>  
  Devient :  
  <div class="fr-tile fr-enlarge-link" id="tile-6584"> <div class="fr-tile__body"> <div class="fr-tile__content"> <h3 class="fr-tile__title"> <a href="#">Intitulé de la tuile</a> </h3> <p class="fr-tile__desc">Lorem [...] elit ut.</p> </div> </div> <div class="fr-tile__header"> <div class="fr-tile__pictogram"> <svg aria-hidden="true" class="fr-artwork" viewBox="0 0 80 80" width="80px" height="80px"> <use class="fr-artwork-decorative" href="../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-decorative"></use> <use class="fr-artwork-minor" href="../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-minor"></use> <use class="fr-artwork-major" href="../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-major"></use> </svg> </div> </div> </div>  
  🎉 feat  
  tile

#### [v1.8.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.8.0) - 27 octobre 2022

- **[niveau de titre des composants](https://github.com/GouvernementFR/dsfr/pull/420)**  
  #420  
  fix  
  tile summary sidemenu

#### [v1.3.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.3.0) - 18 janvier 2022

- **[background tile](https://github.com/GouvernementFR/dsfr/pull/167)**  
  #167  
  fix  
  tile

#### [v1.2.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.2.0) - 17 novembre 2021

- **[ajout de l'accentuation en usage contrast](https://github.com/GouvernementFR/dsfr/pull/134)**  
  #134  
  feat  
  tile

##### Contenu associé

- **[Badge](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge)**  
  Présentation du composant Badge utilisé pour afficher une information de type statut ou état liée à un élément de l’interface.

- **[Carte](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/carte)**  
  Présentation du composant Carte permettant de rediriger l’usager vers une page éditoriale, en lui donnant un aperçu. Elle peut intégrer des médias, actions, tags ou boutons et se décline en différents formats.

- **[Tag](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tag)**  
  Présentation du composant Tag destiné à la catégorisation ou au filtrage de contenus dans une interface.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tuile/accessibilite-de-la-tuile

Le composant **Tuile** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

#### Structuration

- Le niveau de titre dépend du contexte de la page et ne sera pas toujours un `<h3>`.
- Les éléments description, badges, tags, détails sont situés après le titre dans le code HTML.
- L’image de la tuile est décorative.

#### Zone cliquable étendue

- Le lien est placé uniquement sur le titre de la tuile qui doit être explicite.
- Si aucun autre élément cliquable n’est présent dans la tuile, il est possible d’étendre la zone cliquable du lien à toute la tuile pour améliorer l’expérience utilisateur.
- L’indication de prise de focus se positionne alors autour de la tuile plutôt qu’autour du lien.

Voir les [règles d’accessibilité du composant Lien](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lien/accessibilite-du-lien#regles-d-accessibilite) .

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Tuile.

### Critères RGAA applicables

- **Images :** 1.2
- **Couleurs :** 3.2
- **Liens :** 6.1, 6.2
- **Scripts :** 7.1, 7.3
- **Éléments obligatoires :** 8.9
- **Structuration :** 9.1, 9.3
- **Présentation de l’information :** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Navigation :** 12.8, 12.9
- **Consultation :** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)

##### Contenu associé

- **[Badge](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge)**  
  Présentation du composant Badge utilisé pour afficher une information de type statut ou état liée à un élément de l’interface.

- **[Carte](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/carte)**  
  Présentation du composant Carte permettant de rediriger l’usager vers une page éditoriale, en lui donnant un aperçu. Elle peut intégrer des médias, actions, tags ou boutons et se décline en différents formats.

- **[Tag](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tag)**  
  Présentation du composant Tag destiné à la catégorisation ou au filtrage de contenus dans une interface.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tuile/demonstration-de-la-tuile

### Démonstration

*(Démonstration interactive « tile--docs » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=tile--docs&nav=0&globals=theme%3Alight)*

#### Contenu associé

- **[Badge](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge)**  
  Présentation du composant Badge utilisé pour afficher une information de type statut ou état liée à un élément de l’interface.

- **[Carte](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/carte)**  
  Présentation du composant Carte permettant de rediriger l’usager vers une page éditoriale, en lui donnant un aperçu. Elle peut intégrer des médias, actions, tags ou boutons et se décline en différents formats.

- **[Tag](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tag)**  
  Présentation du composant Tag destiné à la catégorisation ou au filtrage de contenus dans une interface.
