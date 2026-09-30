# Carte

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/carte · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/carte/design-de-la-carte · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/carte/code-de-la-carte · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/carte/accessibilite-de-la-carte · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/carte/demonstration-de-la-carte
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

La carte est un élément d’interaction avec l’interface permettant de rediriger l’usager vers une page éditoriale donc elle donne un aperçu.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/carte

*(Démonstration interactive « card--card » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=card--card&nav=0&globals=theme%3Alight)*

### Quand utiliser ce composant ?

Proposer la carte pour créer un raccourci ou un point d’entrée vers des pages de contenu, en permettant un aperçu.

La carte n’a pas d’usage imposé mais elle fait généralement partie d'une collection de contenus similaires. Elle peut en effet servir à construire des listes de liens, des grilles de contenus, des blocs de mise en avant ou des boutons d’actions habillés, par exemple.

> **Information**
> Depuis la version 1.5.0, il n’y a plus de différence d’usage entre la carte et la tuile. La différence entre les deux composants est donc uniquement visuelle.

### Comment utiliser ce composant ?

- **Utiliser les cartes pour créer des collections ou listes d’éléments similaires** . La carte est rarement présentée de manière isolée.
- **Harmoniser la hauteur des cartes par ligne** , en prenant la plus importante comme référence, lorsque celles-ci sont disposées au sein d’une liste. Au sein d’une grille (plusieurs lignes), les hauteurs peuvent varier mais l’ensemble doit garder une cohérence visuelle.

> **À faire :** Contraindre toutes les cartes d’une même ligne à la même hauteur.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/card/use/do-1.png)

> **À ne pas faire :** Ne pas créer de disparité dans la hauteur des cartes d’une même ligne.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/card/use/dont-1.png)

- **Proposer des cartes de même structure** lorsque celles-ci composent une liste ou une collection.

> **À faire :** Conserver un contenu commun au sein des cartes qui forment un même ensemble.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/card/use/do-2.png)

> **À ne pas faire :** Ne pas proposer des contenus différents entre chacune des cartes d’un même ensemble.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/card/use/dont-2.png)

- **Conserver l’intégralité de la carte cliquable** lorsque vous proposez cette variation.

> **À faire :** Proposer un titre sans soulignement et une zone d’action pour signifier que le lien est étendu à toute la carte.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/card/use/do-3.png)

> **À ne pas faire :** Ne pas souligner le titre si le lien est étendu à toute la carte. Cela apporte de la confusion pour l’usager.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/card/use/dont-3.png)

- **Respecter la structure de la carte telle qu’existante** , les différentes zones qui la constituent ayant un rôle défini.

> **À faire :** Proposer les liens et actions dans la zone d’action, prévue à cet effet.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/card/use/do-4.png)

> **À ne pas faire :** Ne pas mettre de liens ou actions dans la zone de détail.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/card/use/dont-4.png)

### Règles éditoriales

- **Rédiger des titres et descriptions synthétiques** .
- **Proposer des contenus distincts pour chaque carte** , en évitant de réutiliser plusieurs fois la même image d’illustration.
- **Être vigilant sur les dimensions des images d’illustration utilisées** afin de garantir leur adaptation aux différents types d’affichages responsive.

#### Contenu associé

- **[Badge](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge)**  
  Présentation du composant Badge utilisé pour afficher une information de type statut ou état liée à un élément de l’interface.

- **[Tag](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tag)**  
  Présentation du composant Tag destiné à la catégorisation ou au filtrage de contenus dans une interface.

- **[Tuile](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tuile)**  
  Présentation du composant Tuile permettant de créer des points d’entrée vers des pages de contenu au sein d’interfaces organisées.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/carte/design-de-la-carte

![Anatomie de la carte](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/card/design/anatomy/anatomy-1.png)

1. Un badge, placé dans la zone de média — En option
2. Un média (image ou vidéo), issu ou en lien avec la page de destination — En option
3. Une précision, sous forme de tag (cliquable ou non) ou de badge (jusqu'à 4 éléments maximum) — En option
4. Une première zone de détail, comprenant un texte accompagné d’une icône (si souhaité) — En option
5. Un titre, reprenant celui de l’objet visé (page de destination, action, site etc.) et comprenant un lien dont la zone de clic peut s’étendre à toute la carte (mais incompatible avec une zone d’action ou des tags cliquables) — Obligatoire
6. Une description, de 5 lignes maximum (tronquée au-delà) — En option
7. Une seconde zone de détail, identique à la première — En option
8. Une zone d’action, composée de bouton ou de liens (jusqu'à 4 éléments maximum) mais incompatible avec la deuxième zone de détail — En option

### Variations

La carte existe en deux formats (horizontal et vertical) déclinés sur deux supports (desktop et mobile). Les cartes horizontales sont réservées au desktop et à la carte de téléchargement en format mobile. A cette exception près, une carte horizontale devient systématiquement verticale sur mobile.

**Carte verticale**

*(Démonstration interactive « card--vertical » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=card--vertical&nav=0&globals=theme%3Alight)*

**Carte horizontale**

*(Démonstration interactive « card--horizontal » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=card--horizontal&nav=0&globals=theme%3Alight)*

Aucun ratio n’est imposé dans une carte horizontale.

La taille de l’image est déduite :

- En hauteur, par la hauteur du contenu.
- En largeur, par les proportions choisies de la carte parmi celles proposées : 33%, 40% et 50%.

Le ratio par défaut est de 40% pour l’image et 60% pour le contenu.

**Carte de téléchargement**

*(Démonstration interactive « card--download » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=card--download&nav=0&globals=theme%3Alight)*

- Utiliser la carte de téléchargement pour mettre à disposition de l’usager un fichier en téléchargement.
- Le titre de la carte de téléchargement reprend le nom du fichier et doit systématiquement être précédé de la mention “Télécharger”. Préciser la langue du document dans le libellé si elle est différente de celle de la page courante.
- La seconde zone de détail affiche obligatoirement le format et le poids du fichier.
- L’icône de téléchargement est ici obligatoire.
- En mobile, la carte de téléchargement est toujours en format horizontal.

> **À ne pas faire :** Ne pas cumuler plus de 4 cartes de téléchargement.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/card/design/variation/dont-1.png)

**Variantes esthétiques**

- Carte avec fond gris
- Carte avec ombre portée
- Carte sans bordure
- Carte sans fond

### Tailles

La carte est disponible en trois tailles :

- SM pour small
- MD pour medium
- LG pour large

La hauteur de la carte s’adapte à son contenu. La largeur, elle, est définie selon [la grille](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/grille-et-points-de-rupture) et les recommandations suivantes.

Pour une carte verticale, en desktop :

- SM : 3 à 4 colonnes

*(Démonstration interactive « card--size-sm » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=card--size-sm&nav=0&globals=theme%3Alight)*

- MD : 4 à 6 colonnes

*(Démonstration interactive « card--size-md » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=card--size-md&nav=0&globals=theme%3Alight)*

- LG : 6 à 8 colonnes

*(Démonstration interactive « card--size-lg » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=card--size-lg&nav=0&globals=theme%3Alight)*

En mobile, peu importe la taille d’origine, la carte verticale prend systématiquement 12 colonnes de large.

Pour une carte horizontale, en desktop uniquement :

- SM : 4 à 6 colonnes

*(Démonstration interactive « card--horizontal-sm » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=card--horizontal-sm&nav=0&globals=theme%3Alight)*

- MD : 6 à 8 colonnes

*(Démonstration interactive « card--horizontal-md » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=card--horizontal-md&nav=0&globals=theme%3Alight)*

- LG : 8 à 12 colonnes

*(Démonstration interactive « card--horizontal-lg » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=card--horizontal-lg&nav=0&globals=theme%3Alight)*

En mobile, seule la carte de téléchargement conserve un format horizontal. Dans ce cas, elle prend systématiquement 12 colonnes de large.

> **Information**
> La taille choisie a une influence sur les espacements, la taille du titre, de l’icône et des tags ou badges au sein de la carte.

### États

**État désactivé**

L’état désactivé indique que l'usager ne peut pas interagir avec la carte.

*(Démonstration interactive « card--disabled » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=card--disabled&nav=0&globals=theme%3Alight)*

**État au survol**

L’état au survol correspond au comportement constaté par l’usager lorsqu’il survole la carte avec sa souris.

### Personnalisation

La carte comporte des variantes esthétiques (voir section “Variations”).

L’ensemble des composants imbriqués ( [média](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/medias) , [icône](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/icone) , [tag](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tag) , [badge](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge) et [bouton](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton) ) peuvent également être personnalisés selon leurs propres règles de personnalisation.

Par ailleurs, certains éléments sont optionnels - voir [la structure du composant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/carte/design-de-la-carte#carte) .

#### Contenu associé

- **[Badge](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge)**  
  Présentation du composant Badge utilisé pour afficher une information de type statut ou état liée à un élément de l’interface.

- **[Tag](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tag)**  
  Présentation du composant Tag destiné à la catégorisation ou au filtrage de contenus dans une interface.

- **[Tuile](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tuile)**  
  Présentation du composant Tuile permettant de créer des points d’entrée vers des pages de contenu au sein d’interfaces organisées.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/carte/code-de-la-carte

### HTML

#### Structure du composant

Le composant **Carte** est un élément interactif permettant de donner des aperçus cliquables d’une page de contenu. Elle fait généralement partie d'une collection ou liste d’aperçus de contenus similaires. Sa structure est la suivante :

- La **Carte** est un élément HTML `<div>` défini par la classe `fr-card`.
- Les cartes sont généralement utilisées au sein d'une **grille** , disponible dans les fondamentaux (voir [grille](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/grille-et-points-de-rupture) ).
- Son contenu est structuré en deux parties :
  - Le **corps de la carte** `fr-card__body` est obligatoire, il contient le contenu de la carte :
    - Un **bloc de contenu** `fr-card__content`, obligatoire, qui contient les informations propres à la carte :
      - Le **titre** de la carte, obligatoire, un élément HTML avec un niveau d'entête `<hx>` et la classe `fr-card__title` pouvant contenir un lien ou un simple texte. Le zone de clic du lien peut être **étendu** à toute la carte en ajoutant la classe `fr-enlarge-link` sur la carte.
      - Une **description** , optionnelle, `fr-card__desc`, un élément HTML de type `<p>`.
      - Une zone se plaçant **avant** le contenu `fr-card__start` et une zone se plaçant **après** le contenu `fr-card__end` qui peuvent toutes deux accueillir :
        - Un groupe de badge ou un groupe de tag, optionnels, (voir composants [badge](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge/code-du-badge) et [tag](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tag/code-du-tag) ).
        - Un texte de détail `fr-card__detail`, optionnel, auquel on peut associer une icône.
    - Un bloc de **zone d'action** `fr-card__footer`, optionnel, qui permet l'ajout de boutons ou de liens supplémentaires.
  - **L'entête de la carte** `fr-card__header`, optionnel, pouvant contenir :
    - Une **image** dans un élément `fr-card__img`. L'image doit posséder la classe `fr-responsive-img` pour s'adapter au conteneur.
    - Un groupe de **badges** ou un groupe de **tags** , optionnels, placé par dessus l'image (voir composants [badge](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge/code-du-badge) et [tag](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tag/code-du-tag) ).

**Exemple de structure HTML simple**

```html
<div class="fr-grid-row">
    <div class="fr-col fr-col-md-6">
        <div class="fr-card fr-enlarge-link">
            <div class="fr-card__body">
                <div class="fr-card__content">
                    <h3 class="fr-card__title">
                        <a href="#">Titre de la carte</a>
                    </h3>
                    <p class="fr-card__desc">Description de la carte</p>
                </div>
            </div>
            <div class="fr-card__header">
                <div class="fr-card__img">
                    <img class="fr-responsive-img" src="/img/placeholder.16x9.png" alt="[À MODIFIER - vide ou texte alternatif de l’image]">
                </div>
            </div>
        </div>
    </div>
</div>
```

#### Carte de téléchargement

Une variante carte de téléchargement existe, comme pour les composants [Lien](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lien/code-du-lien) et [Tuile](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tuile/code-de-la-tuile) , pour proposer le téléchargement d'un fichier. La carte de téléchargement est toujours en format horizontale en desktop. Cette variante reprend la même structure que la carte standard à l'exception de certains éléments :

- La Carte doit avoir la classe `fr-card--download`.
- L'intitulé du titre doit avoir ce format : **Télécharger le/la [Typologie de document] « [Nom du document] »** .
- Le **lien** du titre doit avoir :
  - l'attribut `download`, y ajouter une valeur permet de renommer le fichier au moment du téléchargement.
  - l'attribut `hreflang` avec comme valeur le code langue du document à télécharger s'il est dans une autre langue.
- **Étendre le clic** à toute la carte est obligatoire.
  - Ajouter la classe : `fr-enlarge-link` sur la carte pour étendre le lien.
  - Dans le cas d'un téléchargement programmatique, le téléchargement peut venir d'un bouton. Il est possible de remplacer le lien du titre par un `button`. Il faudra alors utiliser la classe `fr-enlarge-button` sur la carte.
- La zone `fr-card__end` placée après le contenu est obligatoire et doit contenir impérativement et uniquement un **texte de détail** `fr-card__details`.
  - Il doit indiquer le type de fichier (son extension), son poids, et sa langue si différente de la page.
  - Il est possible de remplir automatiquement le détail en JS grâce à l'attribut `data-fr-assess-file` sur le lien (Voir section [Javascript](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/carte/code-de-la-carte#javascript) ).

**Exemple de carte de téléchargement**

```html
<div class="fr-card fr-enlarge-link fr-card--download">
    <div class="fr-card__body">
        <div class="fr-card__content">
            <h3 class="fr-card__title">
                <a download href="/example/img/placeholder.3x4.pdf">Télécharger le/la [Typologie de document] « [Nom du document] »</a>
            </h3>
            <p class="fr-card__desc">Lorem [...] elit ut.</p>
            <div class="fr-card__start">
                <ul class="fr-badges-group">
                    <li>
                        <p class="fr-badge fr-badge--purple-glycine">Libellé badge</p>
                    </li>
                    <li>
                        <p class="fr-badge fr-badge--green-menthe">Libellé badge</p>
                    </li>
                </ul>
                <p class="fr-card__detail fr-icon-info-line">détail (optionnel)</p>
            </div>
            <div class="fr-card__end">
                <p class="fr-card__detail">PDF - 48 ko</p>
            </div>
        </div>
    </div>
    <div class="fr-card__header">
        <div class="fr-card__img">
            <img class="fr-responsive-img" src="../../../../example/img/placeholder.3x4.png" alt="[À MODIFIER - vide ou texte alternatif de l’image]" />
        </div>
    </div>
</div>
```

#### Groupe de cartes

Il n'existe pas à proprement parlé de groupe de carte. Néanmoins, les cartes sont généralement utilisées sous forme d'un ensemble d'élément. Elles peuvent être disposées côte à côte grâce à la **grille** disponible dans les fondamentaux. La grille permet de définir un nombre de colonne pour chaque carte, sur une base de 12 colonnes, et peut varier en fonction de la taille de l'écran (breakpoint) (Voir [grille](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/grille-et-points-de-rupture) ).

**Exemple de grille de carte**

```html
<div class="fr-grid-row fr-grid-row--gutters">
    <div class="fr-col-12 fr-col-md-6 fr-col-lg-4">
        <div class="fr-card fr-enlarge-link">(...)</div>
    </div>
    <div class="fr-col-12 fr-col-md-6 fr-col-lg-4">
        <div class="fr-card fr-enlarge-link">(...)</div>
    </div>
    <div class="fr-col-12 fr-col-md-6 fr-col-lg-4">
        <div class="fr-card fr-enlarge-link">(...)</div>
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
| Card | Oui |  |
| Link | Oui |  |
| Button | Non | Uniquement si zone d'action avec boutons |
| Badge | Non | Uniquement si ajout de badge dans la carte |
| Tag | Non | Uniquement si ajout de tag dans la carte |

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/link/link.min.css" rel="stylesheet">
<link href="dist/component/card/card.min.css" rel="stylesheet">
```

#### Variantes de taille

La carte peut avoir différentes tailles qui auront un impact sur la taille du texte, des espacements, et de l'icône :

- `fr-card--sm` : Petite carte.
- Par défaut : Carte moyenne.
- `fr-card--lg` : Grande carte.

Par défaut, la carte prend 100% de la largeur de son conteneur et sa hauteur varie en fonction de son contenu. La largeur des cartes peut être ajustée via le nombre de colonnes de la grille (Voir [grille](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/grille-et-points-de-rupture) ).

Utiliser une taille de carte adaptée à la largeur de son conteneur :

- 3 à 4 colonne pour une carte SM.
- 4 à 6 colonne pour une carte MD.
- 6 à 12 colonnes pour une carte LG.

**Exemples de variantes de taille**

```html
<div class="fr-card fr-card--sm">
    <!-- Contenu de la carte SM -->
</div>
<div class="fr-card">
    <!-- Contenu de la carte MD -->
</div>
<div class="fr-card fr-card--lg">
    <!-- Contenu de la carte LG -->
</div>
```

#### Variantes de style

La carte est disponible en plusieurs autres variantes :

- La Carte avec **fond gris** : définie par la classe `fr-card--grey`.
- La Carte sur **fond transparent** : définie par la classe `fr-card--no-background`.
- La Carte **sans bordure** : définie par la classe `fr-card--no-border`.
- La Carte **avec ombre portée** : définie par la classe `fr-card--shadow`.

**Exemples de variantes de style**

```html
<div class="fr-card fr-card--grey">
    <!-- Contenu de la carte sur fond gris -->
</div>
<div class="fr-card fr-card--no-background">
    <!-- Contenu de la carte sur fond transparent -->
</div>
<div class="fr-card fr-card--no-border">
    <!-- Contenu de la carte sans bordure -->
</div>
<div class="fr-card fr-card--shadow">
    <!-- Contenu de la carte avec ombre -->
</div>
```

#### Variantes d'orientation

Les carte sont disponibles, par défaut, en format vertical (image en haut et contenu en bas). Il existe aussi des variantes permettant de passer la carte en format **horizontal** en desktop (image à gauche et contenu à droite). La classe `fr-card--horizontal` passe la carte en format horizontal à partir du breakpoint MD (768px).

Le **ratio image/contenu** de la carte horizontale est par défaut de 40% de la largeur pour l'image, et 60% de la largeur pour le contenu. Il existe des variantes permettant de modifier ce ratio :

- `fr-card--horizontal-half` : passe le ratio image/contenu à 50%/50%.
- `fr-card--horizontal-tier` : passe le ratio image/contenu à 1 tier / 2 tiers.

**Exemples de carte horizontale**

```html
<div class="fr-card fr-card--horizontal">
    <!-- Contenu de la carte horizontale -->
</div>
<div class="fr-card fr-card--horizontal fr-card--horizontal-half">
    <!-- Contenu de la carte horizontale 50/50 -->
</div>
<div class="fr-card fr-card--horizontal fr-card--horizontal-tier">
    <!-- Contenu de la carte horizontale 33/66 -->
</div>
```

#### Ratio d'images

L'image placée dans la partie "header" de la carte doit avoir la classe `fr-responsive-img` pour s'adapter à la largeur de la carte. Sa hauteur dépend de son ratio largeur/hauteur. Le ratio de l'image est par défaut en 16/9ème. Celui-ci peut être modifié en fonction du besoin grâce aux [classes utilitaires de ratio](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/medias) disponibles dans le core :

- `fr-ratio-32x9` : pour un ratio largeur/hauteur de 32/9.
- `fr-ratio-3x2` : pour un ratio largeur/hauteur de 3/2.
- `fr-ratio-4x3` : pour un ratio largeur/hauteur de 4/3.
- `fr-ratio-1x1` : pour un ratio largeur/hauteur de 1/1, soit carré.
- `fr-ratio-3x4` : pour un ratio largeur/hauteur de 3/4. (non recommandé)
- `fr-ratio-3x4` : pour un ratio largeur/hauteur de 2/3. (non recommandé)
- `fr-ratio-32x9` : pour un ratio largeur/hauteur de 32/9. (non recommandé)

Les ratios avec une hauteur plus grande que la largeur ne sont pas conseillés, car le rendu mobile n'est pas approprié.

Sur les cartes horizontales, la hauteur de l'image de la carte est fixée par celle du contenu. L'image est donc croppée pour conserver 100% de la hauteur de la carte. L'utilisation de classes de ratio n'est ici pas possible.

#### Variantes d'icônes

Par défaut, sur les **cartes avec lien étendu et non externe** , une icône "arrow-right" apparaît en bas à droite. Dans certains cas, comme pour réduire la taille de la carte, il peut être utile de **retirer cette icône** . Il suffit pour cela d'ajouter la classe `fr-card--no-icon` sur la carte. Si le lien est un **lien externe** , l'icône "external-link" reste obligatoire.

**Exemple de retrait d'icône**

```html
<div class="fr-card fr-enlarge-link fr-card--no-icon">
    <!-- Contenu de la carte -->
</div>
```

---

### JavaScript

Le composant Carte **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

Une fonctionnalité disponible dans le core, permet de remplir automatiquement le détail des **cartes de téléchargement** . Pour instancier le javascript de remplissage automatique du détail sur la carte de téléchargement, ajouter l'attribut `data-fr-assess-file` sur le lien du titre. Les propriétés de type, poids, et langue sont récupérées depuis le fichier. Le texte de détail est automatiquement remplacé au chargement du JS. Il est conseillé de tout de même remplir les infos connues dans le détail en solution de repli. Si la page est en Anglais, l'attribut `data-fr-assess-file` doit prendre la valeur "bytes", pour afficher le poids en Bytes plutôt qu'en Octet.

Pour fonctionner le fichier à télécharger doit être sur le même cross-domain que le site.

#### Installation du JavaScript

Pour fonctionner, le **remplissage automatique du détail des cartes de téléchargement** nécessite l'utilisation de JavaScript. Cette fonctionnalité est disponible dans le core.

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
> L'activation ou la désactivation de la fonction de remplissage automatique du détail des cartes de téléchargement (assess-file) n'est pas disponible via l'API JS, elle se fait via l'ajout ou le retrait de l'attribut `data-fr-assess-file` sur le lien.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+card+)

#### [v1.12.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.12.0) - 19 juin 2024

- **[enlarge button](https://github.com/GouvernementFR/dsfr/pull/943)**  
  #943  
  - ajout d'une classe utilitaire enlarge-button utilisée sur les cartes et les tuiles de téléchargement pour élargir la zone de clique à tout le composant quand l'element cliquable est un bouton  
  🐛 fix  
  link card tile

- **[fichier télécharger et ratio carte de téléchargement](https://github.com/GouvernementFR/dsfr/pull/938)**  
  #938  
  - met à jour les images des exemples de carte "Image et ratio"
- ajoute un fichier pdf placeholder pour les cartes de téléchargement  
  🐛 fix  
  card

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

- **[alignement du détail carte & erreur js sur safari <14](https://github.com/GouvernementFR/dsfr/pull/796)**  
  #796  
  - Sur les anciennes version de safari macOS (inférieure à 14.0)
  - corrige l'alignement du détail de la carte dans une grille de carte
  - corrige une erreur de javascript liée au dark mode sur scheme.js  
  🐛 fix  
  card scheme

#### [v1.10.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.10.0) - 19 juillet 2023

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

- **[image des cartes de téléchargement format a4](https://github.com/GouvernementFR/dsfr/pull/620)**  
  #620  
  - Ajout d'une image de placeholder au format a4 (21x29.7)  
  ✨ feat  
  card

#### [v1.7.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.7.0) - 21 juillet 2022

- **[correction de l'aspect ratio par défaut des vidéos](https://github.com/GouvernementFR/dsfr/pull/378)**  
  #378  
  fix  
  card

- **[correction aspect ratio par défaut](https://github.com/GouvernementFR/dsfr/pull/374)**  
  #374  
  fix  
  card

#### [v1.6.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.6.0) - 14 juin 2022

- **[correctif des tailles fixes des cartes horizontales](https://github.com/GouvernementFR/dsfr/pull/338)**  
  #338  
  fix  
  card

- **[correctif icône lien extérieur](https://github.com/GouvernementFR/dsfr/pull/333)**  
  #333  
  fix  
  core link button tag card

- **[ajout utilitaire fr-ratio et aspect-ratio des content img & vid](https://github.com/GouvernementFR/dsfr/pull/316)**  
  #316  
  refactor  
  core card content

#### [v1.5.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.5.0) - 21 avril 2022

- **[transpilation async et commentaire](https://github.com/GouvernementFR/dsfr/pull/283)**  
  #283  
  fix  
  download card

- **[typo dans l'exemple grille](https://github.com/GouvernementFR/dsfr/pull/282)**  
  #282  
  fix  
  card

- **[ajout de la fonctionnalité card v2](https://github.com/GouvernementFR/dsfr/pull/270)**  
  #270  
  feat  
  card

#### [v1.3.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.3.0) - 18 janvier 2022

- **[corrige erreur à la compilation](https://github.com/GouvernementFR/dsfr/pull/164)**  
  #164  
  fix  
  card

- **[bordure extérieure sur les cartes](https://github.com/GouvernementFR/dsfr/pull/162)**  
  #162  
  fix  
  card

#### [v1.2.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.2.0) - 17 novembre 2021

- **[met a jour le modifier d'accent](https://github.com/GouvernementFR/dsfr/pull/123)**  
  #123  
  fix  
  card

- **[ajoute un modifier d'accentuation](https://github.com/GouvernementFR/dsfr/pull/121)**  
  #121  
  fix  
  card

##### Contenu associé

- **[Badge](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge)**  
  Présentation du composant Badge utilisé pour afficher une information de type statut ou état liée à un élément de l’interface.

- **[Tag](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tag)**  
  Présentation du composant Tag destiné à la catégorisation ou au filtrage de contenus dans une interface.

- **[Tuile](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tuile)**  
  Présentation du composant Tuile permettant de créer des points d’entrée vers des pages de contenu au sein d’interfaces organisées.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/carte/accessibilite-de-la-carte

Le composant **Carte** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

#### Structuration

- Le niveau de titre dépend du contexte de la page et ne sera pas toujours un `<h3>`.
- Les éléments média, description, badges, tags, détails, boutons sont situés après le titre dans le code HTML.
- L’image de la carte peut être décorative ou porteuse d’information selon le contexte.

#### Zone cliquable étendue

- Le lien est placé uniquement sur le titre de la carte qui doit être explicite.
- Si aucun autre élément cliquable n’est présent dans la carte, il est possible d’étendre la zone cliquable du lien à toute la carte pour améliorer l’expérience utilisateur.
- L’indication de prise de focus se positionne alors autour de la carte plutôt qu’autour du lien.

Voir les [règles d’accessibilité du composant Lien](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lien/accessibilite-du-lien#regles-d-accessibilite) .

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Carte.

### Critères RGAA applicables

- **Images :** 1.1, 1.2, 1.3
- **Couleurs :** 3.2
- **Liens :** 6.1, 6.2
- **Scripts :** 7.1, 7.3
- **Éléments obligatoires :** 8.9
- **Structuration :** 9.1, 9.3
- **Présentation de l’information :** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Consultation :** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)

##### Contenu associé

- **[Badge](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge)**  
  Présentation du composant Badge utilisé pour afficher une information de type statut ou état liée à un élément de l’interface.

- **[Tag](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tag)**  
  Présentation du composant Tag destiné à la catégorisation ou au filtrage de contenus dans une interface.

- **[Tuile](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tuile)**  
  Présentation du composant Tuile permettant de créer des points d’entrée vers des pages de contenu au sein d’interfaces organisées.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/carte/demonstration-de-la-carte

*(Démonstration interactive « card--docs » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=card--docs&nav=0&globals=theme%3Alight)*

#### Contenu associé

- **[Badge](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge)**  
  Présentation du composant Badge utilisé pour afficher une information de type statut ou état liée à un élément de l’interface.

- **[Tag](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tag)**  
  Présentation du composant Tag destiné à la catégorisation ou au filtrage de contenus dans une interface.

- **[Tuile](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tuile)**  
  Présentation du composant Tuile permettant de créer des points d’entrée vers des pages de contenu au sein d’interfaces organisées.
