# Icône

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/icone · https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/icone/rechercher-une-icone
> Section : fondamentaux · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

Les icônes fonctionnelles sont des symboles visuels qui accompagnent l’utilisateur dans ses actions et qui aident à sa compréhension de l’interface.

## Documentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/icone

Nous mettons à votre disposition une sélection d’icônes, en grande partie issues de la librairie [Remix Icons](https://remixicon.com/) (libre de droits). Il s’agit, pour l’essentiel, des icônes utilisées par les composants du DSFR. Si l’icône recherchée est absente de notre sélection, vous pouvez compléter en recherchant d’abord dans [Remix Icons](https://remixicon.com/) .

### Pour les designers

Les icônes sont disponibles dans les Fondamentaux des librairies Sketch et Figma (section icônes fonctionnelles).

### Pour les développeurs

Les icônes, placées dans **dist/icons** , sont utilisées via des classes CSS disponibles dans `utility/icons/icons.min.css`. Il est de ce fait possible d’utiliser des icônes en utilisant directement la classe CSS associée, reprenant le nom de l’icône SVG, précédée du préfixe `fr-icon`. Exemple : `.fr-icon-error-fill`.

Les icônes sont rangées en catégories (system, business, map…), avec un fichier css pour chacune. Il est donc possible d’importer uniquement les catégories d’icônes désirées pour alléger la CSS.

Le chargement des icônes se fait directement via l’ajout du fichier CSS. Ce fichier contient un chemin relatif vers les icônes SVG, qui sont placées dans le dossier `dist/icons`. Il conviendra de respecter cette structure de dossier pour que les icônes soient correctement chargées.

Il est ensuite possible d’utiliser les classes d’icônes correspondantes, **directement sur un composant** qui permet d’ajouter une icône, par exemple un bouton :

```html
<button class="fr-btn fr-icon-checkbox-circle-line fr-btn--icon-left">
  Label bouton MD
</button>
```

Il est aussi possible de les utiliser de manière autonome, au sein d'un texte, en utilisant de préférence une balise `<span>`. Exemple :

```html
<span class="fr-icon-error-fill" aria-hidden="true"></span>
```

L’ancienne nomenclature des classes en `fr-fi` (remplacée par `fr-icon`) est dépréciée mais toujours fonctionnelle.

**Ajout d'icônes personnalisées**

Pour ajouter une icône qui ne serait pas présente dans le DSFR, il est possible de créer un fichier SVG ou de le télécharger depuis la librairie Remixicon. Il faudra ensuite créer un fichier CSS pour associer une classe à cette icône, en suivant la nomenclature `fr-icon-[nom-de-l'icône]`. Par exemple, pour une icône nommée `custom-icon`, le fichier CSS contiendra :

```css
.fr-icon-custom-icon::before,
.fr-icon-custom-icon::after {
  -webkit-mask-image: url("../icons/custom-icon.svg");
  mask-image: url("../icons/custom-icon.svg");
}
```

[Facultatif] Pour fonctionner sur Internet Explorer 11, il faudra également ajouter, de préférence dans un autre fichier CSS, la règle suivante :

```css
@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
  .fr-icon-custom-icon::before,
  .fr-icon-custom-icon::after {
    background-image: url("../icons/custom-icon.svg");
  }
}
```

> **Information**
> Ne pas modifier directement les fichiers CSS du DSFR, mais plutôt créer un fichier CSS personnalisé pour vos icônes. De cette manière, vous pourrez monter de version du DSFR sans perdre vos modifications.

### Tailles

Les icônes sont disponibles en quatre tailles. Il est possible de modifier la taille des icônes à l'aide de modificateurs spécifiques

**Tailles**

| **Taille** | **Token** | **Classe** | **Dimension** | **Contexte d’utilisation** |
|---|---|---|---|---|
| XS | `$xs` | `.fr-icon--xs` | 12x12px - 0.75rem | À utiliser avec la typographie Extra Small (XS) |
| SM | `$sm` | `.fr-icon--sm` | 16x16px - 1rem | À utiliser avec la typographie Small (SM) |
| MD | `$md` | `.fr-icon` | 24x24px - 1.5rem | À utiliser avec la typographie Medium (MD). <br>Taille par défaut, aucun modifiers |
| LG | `$lg` | `.fr-icon--lg` | 32x32px - 2rem | À utiliser avec la typographie Large (LG) |

### Règles d’utilisation

Les icônes fonctionnelles sont des symboles visuels utilisés pour représenter des idées, des objets ou des actions.

Les icônes doivent être utilisées pour attirer l'attention sur les actions, les ensembles de contenus importants ou les zones clés, il faut éviter d’en utiliser trop sur une même page pour ne pas créer de confusion. Un concept doit être représenté par la même icône sur l'ensemble du site et de l'écosystème numérique de l'État.

#### Couleur

La couleur choisie pour vos icônes doit être issue [des couleurs du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/couleurs) . Lorsqu’une icône est rattachée à un libellé, elle prend automatiquement la couleur de ce libellé.

![](https://www.systeme-de-design.gouv.fr/v1.15/asset/core/icon/icon/icon-color-example.png)

#### Alignement et marge

L’icône doit être alignée en hauteur par rapport au libellé qui l’accompagne. Pour les marges externes, vous pouvez consulter la documentation [espacements](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/espacement) .

#### Accessibilité

Les icônes sont uniquement illustratives et ne doivent pas être utilisées seules, mais accompagnées d’un libellé explicite.

Exemples d’implémentations :

[Information](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/icone#)

Label bouton MD

```html
<a href="#">
  <span aria-hidden="true" class="fr-icon-info-line"></span> Plus Information
</a>

<button class="fr-btn fr-icon-checkbox-circle-line fr-btn--icon-left" title="Label bouton MD">
    Label bouton MD
</button>
```

Lorsqu'il est impossible d'avoir un libellé visible, il faut à minima proposer un libellé aux technologies d’assistance via un attribut `title` et un texte caché (par exemple avec la classe `fr-sr-only`).

Imprimer

```html
<a href="#" title="Imprimer">
  <span aria-hidden="true" class="fr-icon-printer-line"></span>
  <span class="fr-sr-only">Imprimer</span>
</a>
```

## Recherche

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/icone/rechercher-une-icone

Rechercher une icône

#### Arrows

- **arrow-down-circle-fill**  
  fr-icon-arrow-down-circle-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-down-circle-fill

- **arrow-down-circle-line**  
  fr-icon-arrow-down-circle-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-down-circle-line

- **arrow-down-fill**  
  fr-icon-arrow-down-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-down-fill

- **arrow-down-line**  
  fr-icon-arrow-down-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-down-line

- **arrow-down-s-fill**  
  fr-icon-arrow-down-s-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-down-s-fill

- **arrow-down-s-line**  
  fr-icon-arrow-down-s-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-down-s-line

- **arrow-go-back-fill**  
  fr-icon-arrow-go-back-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-go-back-fill

- **arrow-go-back-line**  
  fr-icon-arrow-go-back-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-go-back-line

- **arrow-go-forward-fill**  
  fr-icon-arrow-go-forward-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-go-forward-fill

- **arrow-go-forward-line**  
  fr-icon-arrow-go-forward-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-go-forward-line

- **arrow-left-circle-fill**  
  fr-icon-arrow-left-circle-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-left-circle-fill

- **arrow-left-circle-line**  
  fr-icon-arrow-left-circle-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-left-circle-line

- **arrow-left-down-fill**  
  fr-icon-arrow-left-down-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-left-down-fill

- **arrow-left-down-line**  
  fr-icon-arrow-left-down-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-left-down-line

- **arrow-left-fill**  
  fr-icon-arrow-left-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-left-fill

- **arrow-left-line**  
  fr-icon-arrow-left-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-left-line

- **arrow-left-right-fill**  
  fr-icon-arrow-left-right-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-left-right-fill

- **arrow-left-right-line**  
  fr-icon-arrow-left-right-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-left-right-line

- **arrow-left-s-fill**  
  fr-icon-arrow-left-s-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-left-s-fill

- **arrow-left-s-line**  
  fr-icon-arrow-left-s-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-left-s-line

- **arrow-left-up-fill**  
  fr-icon-arrow-left-up-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-left-up-fill

- **arrow-left-up-line**  
  fr-icon-arrow-left-up-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-left-up-line

- **arrow-right-circle-fill**  
  fr-icon-arrow-right-circle-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-right-circle-fill

- **arrow-right-circle-line**  
  fr-icon-arrow-right-circle-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-right-circle-line

- **arrow-right-down-fill**  
  fr-icon-arrow-right-down-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-right-down-fill

- **arrow-right-down-line**  
  fr-icon-arrow-right-down-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-right-down-line

- **arrow-right-fill**  
  fr-icon-arrow-right-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-right-fill

- **arrow-right-line**  
  fr-icon-arrow-right-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-right-line

- **arrow-right-s-fill**  
  fr-icon-arrow-right-s-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-right-s-fill

- **arrow-right-s-line**  
  fr-icon-arrow-right-s-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-right-s-line

- **arrow-right-up-fill**  
  fr-icon-arrow-right-up-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-right-up-fill

- **arrow-right-up-line**  
  fr-icon-arrow-right-up-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-right-up-line

- **arrow-turn-back-fill**  
  fr-icon-arrow-turn-back-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-turn-back-fill

- **arrow-turn-back-line**  
  fr-icon-arrow-turn-back-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-turn-back-line

- **arrow-turn-forward-fill**  
  fr-icon-arrow-turn-forward-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-turn-forward-fill

- **arrow-turn-forward-line**  
  fr-icon-arrow-turn-forward-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-turn-forward-line

- **arrow-up-circle-fill**  
  fr-icon-arrow-up-circle-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-up-circle-fill

- **arrow-up-circle-line**  
  fr-icon-arrow-up-circle-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-up-circle-line

- **arrow-up-down-fill**  
  fr-icon-arrow-up-down-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-up-down-fill

- **arrow-up-down-line**  
  fr-icon-arrow-up-down-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-up-down-line

- **arrow-up-fill**  
  fr-icon-arrow-up-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-up-fill

- **arrow-up-line**  
  fr-icon-arrow-up-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-up-line

- **arrow-up-s-fill**  
  fr-icon-arrow-up-s-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-up-s-fill

- **arrow-up-s-line**  
  fr-icon-arrow-up-s-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-arrow-up-s-line

- **contract-left-fill**  
  fr-icon-contract-left-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-contract-left-fill

- **contract-left-line**  
  fr-icon-contract-left-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-contract-left-line

- **contract-left-right-fill**  
  fr-icon-contract-left-right-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-contract-left-right-fill

- **contract-left-right-line**  
  fr-icon-contract-left-right-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-contract-left-right-line

- **contract-right-fill**  
  fr-icon-contract-right-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-contract-right-fill

- **contract-right-line**  
  fr-icon-contract-right-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-contract-right-line

- **contract-up-down-fill**  
  fr-icon-contract-up-down-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-contract-up-down-fill

- **contract-up-down-line**  
  fr-icon-contract-up-down-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-contract-up-down-line

- **corner-down-left-fill**  
  fr-icon-corner-down-left-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-corner-down-left-fill

- **corner-down-left-line**  
  fr-icon-corner-down-left-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-corner-down-left-line

- **corner-down-right-fill**  
  fr-icon-corner-down-right-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-corner-down-right-fill

- **corner-down-right-line**  
  fr-icon-corner-down-right-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-corner-down-right-line

- **corner-left-down-fill**  
  fr-icon-corner-left-down-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-corner-left-down-fill

- **corner-left-down-line**  
  fr-icon-corner-left-down-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-corner-left-down-line

- **corner-left-up-fill**  
  fr-icon-corner-left-up-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-corner-left-up-fill

- **corner-left-up-line**  
  fr-icon-corner-left-up-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-corner-left-up-line

- **corner-right-down-fill**  
  fr-icon-corner-right-down-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-corner-right-down-fill

- **corner-right-down-line**  
  fr-icon-corner-right-down-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-corner-right-down-line

- **corner-right-up-fill**  
  fr-icon-corner-right-up-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-corner-right-up-fill

- **corner-right-up-line**  
  fr-icon-corner-right-up-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-corner-right-up-line

- **corner-up-left-fill**  
  fr-icon-corner-up-left-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-corner-up-left-fill

- **corner-up-left-line**  
  fr-icon-corner-up-left-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-corner-up-left-line

- **corner-up-right-fill**  
  fr-icon-corner-up-right-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-corner-up-right-fill

- **corner-up-right-line**  
  fr-icon-corner-up-right-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-corner-up-right-line

- **expand-left-fill**  
  fr-icon-expand-left-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-expand-left-fill

- **expand-left-line**  
  fr-icon-expand-left-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-expand-left-line

- **expand-left-right-fill**  
  fr-icon-expand-left-right-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-expand-left-right-fill

- **expand-left-right-line**  
  fr-icon-expand-left-right-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-expand-left-right-line

- **expand-right-fill**  
  fr-icon-expand-right-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-expand-right-fill

- **expand-right-line**  
  fr-icon-expand-right-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-expand-right-line

- **expand-up-down-fill**  
  fr-icon-expand-up-down-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-expand-up-down-fill

- **expand-up-down-line**  
  fr-icon-expand-up-down-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-expand-up-down-line

- **arrow-left-s-first-line**  
  fr-icon-arrow-left-s-first-line  
  - arrows
- dsfr  
  - arrows
- dsfr  
  fr-icon-arrow-left-s-first-line

- **arrow-left-s-line-double**  
  fr-icon-arrow-left-s-line-double  
  - arrows
- dsfr  
  - arrows
- dsfr  
  fr-icon-arrow-left-s-line-double

- **arrow-right-down-circle-fill**  
  fr-icon-arrow-right-down-circle-fill  
  - arrows
- dsfr  
  - arrows
- dsfr  
  fr-icon-arrow-right-down-circle-fill

- **arrow-right-s-last-line**  
  fr-icon-arrow-right-s-last-line  
  - arrows
- dsfr  
  - arrows
- dsfr  
  fr-icon-arrow-right-s-last-line

- **arrow-right-s-line-double**  
  fr-icon-arrow-right-s-line-double  
  - arrows
- dsfr  
  - arrows
- dsfr  
  fr-icon-arrow-right-s-line-double

- **arrow-right-up-circle-fill**  
  fr-icon-arrow-right-up-circle-fill  
  - arrows
- dsfr  
  - arrows
- dsfr  
  fr-icon-arrow-right-up-circle-fill

- **skip-down-fill**  
  fr-icon-skip-down-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-skip-down-fill

- **skip-down-line**  
  fr-icon-skip-down-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-skip-down-line

- **skip-up-fill**  
  fr-icon-skip-up-fill  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-skip-up-fill

- **skip-up-line**  
  fr-icon-skip-up-line  
  - arrows
- remix  
  - arrows
- remix  
  fr-icon-skip-up-line

#### Buildings

- **ancient-gate-fill**  
  fr-icon-ancient-gate-fill  
  - buildings
- remix  
  - buildings
- remix  
  fr-icon-ancient-gate-fill

- **ancient-gate-line**  
  fr-icon-ancient-gate-line  
  - buildings
- remix  
  - buildings
- remix  
  fr-icon-ancient-gate-line

- **ancient-pavilion-fill**  
  fr-icon-ancient-pavilion-fill  
  - buildings
- remix  
  - buildings
- remix  
  fr-icon-ancient-pavilion-fill

- **ancient-pavilion-line**  
  fr-icon-ancient-pavilion-line  
  - buildings
- remix  
  - buildings
- remix  
  fr-icon-ancient-pavilion-line

- **bank-fill**  
  fr-icon-bank-fill  
  - buildings
- remix  
  - buildings
- remix  
  fr-icon-bank-fill

- **bank-line**  
  fr-icon-bank-line  
  - buildings
- remix  
  - buildings
- remix  
  fr-icon-bank-line

- **building-4-fill**  
  fr-icon-building-4-fill  
  - buildings
- remix  
  - buildings
- remix  
  fr-icon-building-4-fill

- **building-4-line**  
  fr-icon-building-4-line  
  - buildings
- remix  
  - buildings
- remix  
  fr-icon-building-4-line

- **building-fill**  
  fr-icon-building-fill  
  - buildings
- remix  
  - buildings
- remix  
  fr-icon-building-fill

- **building-line**  
  fr-icon-building-line  
  - buildings
- remix  
  - buildings
- remix  
  fr-icon-building-line

- **community-fill**  
  fr-icon-community-fill  
  - buildings
- remix  
  - buildings
- remix  
  fr-icon-community-fill

- **community-line**  
  fr-icon-community-line  
  - buildings
- remix  
  - buildings
- remix  
  fr-icon-community-line

- **government-fill**  
  fr-icon-government-fill  
  - buildings
- remix  
  - buildings
- remix  
  fr-icon-government-fill

- **government-line**  
  fr-icon-government-line  
  - buildings
- remix  
  - buildings
- remix  
  fr-icon-government-line

- **home-4-fill**  
  fr-icon-home-4-fill  
  - buildings
- remix  
  - buildings
- remix  
  fr-icon-home-4-fill

- **home-4-line**  
  fr-icon-home-4-line  
  - buildings
- remix  
  - buildings
- remix  
  fr-icon-home-4-line

- **home-office-fill**  
  fr-icon-home-office-fill  
  - buildings
- remix  
  - buildings
- remix  
  fr-icon-home-office-fill

- **home-office-line**  
  fr-icon-home-office-line  
  - buildings
- remix  
  - buildings
- remix  
  fr-icon-home-office-line

- **hospital-fill**  
  fr-icon-hospital-fill  
  - buildings
- remix  
  - buildings
- remix  
  fr-icon-hospital-fill

- **hospital-line**  
  fr-icon-hospital-line  
  - buildings
- remix  
  - buildings
- remix  
  fr-icon-hospital-line

- **hotel-fill**  
  fr-icon-hotel-fill  
  - buildings
- remix  
  - buildings
- remix  
  fr-icon-hotel-fill

- **hotel-line**  
  fr-icon-hotel-line  
  - buildings
- remix  
  - buildings
- remix  
  fr-icon-hotel-line

- **school-fill**  
  fr-icon-school-fill  
  - buildings
- remix  
  - buildings
- remix  
  fr-icon-school-fill

- **school-line**  
  fr-icon-school-line  
  - buildings
- remix  
  - buildings
- remix  
  fr-icon-school-line

- **store-fill**  
  fr-icon-store-fill  
  - buildings
- remix  
  - buildings
- remix  
  fr-icon-store-fill

- **store-line**  
  fr-icon-store-line  
  - buildings
- remix  
  - buildings
- remix  
  fr-icon-store-line

- **tent-fill**  
  fr-icon-tent-fill  
  - buildings
- remix  
  - buildings
- remix  
  fr-icon-tent-fill

- **tent-line**  
  fr-icon-tent-line  
  - buildings
- remix  
  - buildings
- remix  
  fr-icon-tent-line

#### Business

- **archive-drawer-fill**  
  fr-icon-archive-drawer-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-archive-drawer-fill

- **archive-drawer-line**  
  fr-icon-archive-drawer-line  
  - business
- remix  
  - business
- remix  
  fr-icon-archive-drawer-line

- **archive-fill**  
  fr-icon-archive-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-archive-fill

- **archive-line**  
  fr-icon-archive-line  
  - business
- remix  
  - business
- remix  
  fr-icon-archive-line

- **at-fill**  
  fr-icon-at-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-at-fill

- **at-line**  
  fr-icon-at-line  
  - business
- remix  
  - business
- remix  
  fr-icon-at-line

- **attachment-fill**  
  fr-icon-attachment-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-attachment-fill

- **attachment-line**  
  fr-icon-attachment-line  
  - business
- remix  
  - business
- remix  
  fr-icon-attachment-line

- **award-fill**  
  fr-icon-award-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-award-fill

- **award-line**  
  fr-icon-award-line  
  - business
- remix  
  - business
- remix  
  fr-icon-award-line

- **bar-chart-2-fill**  
  fr-icon-bar-chart-2-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-bar-chart-2-fill

- **bar-chart-2-line**  
  fr-icon-bar-chart-2-line  
  - business
- remix  
  - business
- remix  
  fr-icon-bar-chart-2-line

- **bar-chart-box-fill**  
  fr-icon-bar-chart-box-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-bar-chart-box-fill

- **bar-chart-box-line**  
  fr-icon-bar-chart-box-line  
  - business
- remix  
  - business
- remix  
  fr-icon-bar-chart-box-line

- **bar-chart-fill**  
  fr-icon-bar-chart-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-bar-chart-fill

- **bar-chart-horizontal-fill**  
  fr-icon-bar-chart-horizontal-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-bar-chart-horizontal-fill

- **bar-chart-horizontal-line**  
  fr-icon-bar-chart-horizontal-line  
  - business
- remix  
  - business
- remix  
  fr-icon-bar-chart-horizontal-line

- **bar-chart-line**  
  fr-icon-bar-chart-line  
  - business
- remix  
  - business
- remix  
  fr-icon-bar-chart-line

- **bookmark-fill**  
  fr-icon-bookmark-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-bookmark-fill

- **bookmark-line**  
  fr-icon-bookmark-line  
  - business
- remix  
  - business
- remix  
  fr-icon-bookmark-line

- **briefcase-fill**  
  fr-icon-briefcase-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-briefcase-fill

- **briefcase-line**  
  fr-icon-briefcase-line  
  - business
- remix  
  - business
- remix  
  fr-icon-briefcase-line

- **bubble-chart-fill**  
  fr-icon-bubble-chart-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-bubble-chart-fill

- **bubble-chart-line**  
  fr-icon-bubble-chart-line  
  - business
- remix  
  - business
- remix  
  fr-icon-bubble-chart-line

- **calculator-fill**  
  fr-icon-calculator-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-calculator-fill

- **calculator-line**  
  fr-icon-calculator-line  
  - business
- remix  
  - business
- remix  
  fr-icon-calculator-line

- **calendar-2-fill**  
  fr-icon-calendar-2-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-calendar-2-fill

- **calendar-2-line**  
  fr-icon-calendar-2-line  
  - business
- remix  
  - business
- remix  
  fr-icon-calendar-2-line

- **calendar-check-fill**  
  fr-icon-calendar-check-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-calendar-check-fill

- **calendar-check-line**  
  fr-icon-calendar-check-line  
  - business
- remix  
  - business
- remix  
  fr-icon-calendar-check-line

- **calendar-close-fill**  
  fr-icon-calendar-close-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-calendar-close-fill

- **calendar-close-line**  
  fr-icon-calendar-close-line  
  - business
- remix  
  - business
- remix  
  fr-icon-calendar-close-line

- **calendar-event-fill**  
  fr-icon-calendar-event-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-calendar-event-fill

- **calendar-event-line**  
  fr-icon-calendar-event-line  
  - business
- remix  
  - business
- remix  
  fr-icon-calendar-event-line

- **calendar-fill**  
  fr-icon-calendar-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-calendar-fill

- **calendar-line**  
  fr-icon-calendar-line  
  - business
- remix  
  - business
- remix  
  fr-icon-calendar-line

- **calendar-todo-fill**  
  fr-icon-calendar-todo-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-calendar-todo-fill

- **calendar-todo-line**  
  fr-icon-calendar-todo-line  
  - business
- remix  
  - business
- remix  
  fr-icon-calendar-todo-line

- **cloud-fill**  
  fr-icon-cloud-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-cloud-fill

- **cloud-line**  
  fr-icon-cloud-line  
  - business
- remix  
  - business
- remix  
  fr-icon-cloud-line

- **cloud-off-fill**  
  fr-icon-cloud-off-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-cloud-off-fill

- **cloud-off-line**  
  fr-icon-cloud-off-line  
  - business
- remix  
  - business
- remix  
  fr-icon-cloud-off-line

- **copyright-fill**  
  fr-icon-copyright-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-copyright-fill

- **copyright-line**  
  fr-icon-copyright-line  
  - business
- remix  
  - business
- remix  
  fr-icon-copyright-line

- **customer-service-fill**  
  fr-icon-customer-service-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-customer-service-fill

- **customer-service-line**  
  fr-icon-customer-service-line  
  - business
- remix  
  - business
- remix  
  fr-icon-customer-service-line

- **donut-chart-fill**  
  fr-icon-donut-chart-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-donut-chart-fill

- **donut-chart-line**  
  fr-icon-donut-chart-line  
  - business
- remix  
  - business
- remix  
  fr-icon-donut-chart-line

- **flag-fill**  
  fr-icon-flag-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-flag-fill

- **flag-line**  
  fr-icon-flag-line  
  - business
- remix  
  - business
- remix  
  fr-icon-flag-line

- **global-fill**  
  fr-icon-global-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-global-fill

- **global-line**  
  fr-icon-global-line  
  - business
- remix  
  - business
- remix  
  fr-icon-global-line

- **honour-fill**  
  fr-icon-honour-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-honour-fill

- **honour-line**  
  fr-icon-honour-line  
  - business
- remix  
  - business
- remix  
  fr-icon-honour-line

- **inbox-2-fill**  
  fr-icon-inbox-2-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-inbox-2-fill

- **inbox-2-line**  
  fr-icon-inbox-2-line  
  - business
- remix  
  - business
- remix  
  fr-icon-inbox-2-line

- **inbox-archive-fill**  
  fr-icon-inbox-archive-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-inbox-archive-fill

- **inbox-archive-line**  
  fr-icon-inbox-archive-line  
  - business
- remix  
  - business
- remix  
  fr-icon-inbox-archive-line

- **inbox-fill**  
  fr-icon-inbox-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-inbox-fill

- **inbox-line**  
  fr-icon-inbox-line  
  - business
- remix  
  - business
- remix  
  fr-icon-inbox-line

- **inbox-unarchive-fill**  
  fr-icon-inbox-unarchive-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-inbox-unarchive-fill

- **inbox-unarchive-line**  
  fr-icon-inbox-unarchive-line  
  - business
- remix  
  - business
- remix  
  fr-icon-inbox-unarchive-line

- **line-chart-fill**  
  fr-icon-line-chart-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-line-chart-fill

- **line-chart-line**  
  fr-icon-line-chart-line  
  - business
- remix  
  - business
- remix  
  fr-icon-line-chart-line

- **links-fill**  
  fr-icon-links-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-links-fill

- **links-line**  
  fr-icon-links-line  
  - business
- remix  
  - business
- remix  
  fr-icon-links-line

- **mail-add-fill**  
  fr-icon-mail-add-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-mail-add-fill

- **mail-add-line**  
  fr-icon-mail-add-line  
  - business
- remix  
  - business
- remix  
  fr-icon-mail-add-line

- **mail-check-fill**  
  fr-icon-mail-check-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-mail-check-fill

- **mail-check-line**  
  fr-icon-mail-check-line  
  - business
- remix  
  - business
- remix  
  fr-icon-mail-check-line

- **mail-close-fill**  
  fr-icon-mail-close-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-mail-close-fill

- **mail-close-line**  
  fr-icon-mail-close-line  
  - business
- remix  
  - business
- remix  
  fr-icon-mail-close-line

- **mail-download-fill**  
  fr-icon-mail-download-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-mail-download-fill

- **mail-download-line**  
  fr-icon-mail-download-line  
  - business
- remix  
  - business
- remix  
  fr-icon-mail-download-line

- **mail-fill**  
  fr-icon-mail-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-mail-fill

- **mail-forbid-fill**  
  fr-icon-mail-forbid-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-mail-forbid-fill

- **mail-forbid-line**  
  fr-icon-mail-forbid-line  
  - business
- remix  
  - business
- remix  
  fr-icon-mail-forbid-line

- **mail-line**  
  fr-icon-mail-line  
  - business
- remix  
  - business
- remix  
  fr-icon-mail-line

- **mail-lock-fill**  
  fr-icon-mail-lock-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-mail-lock-fill

- **mail-lock-line**  
  fr-icon-mail-lock-line  
  - business
- remix  
  - business
- remix  
  fr-icon-mail-lock-line

- **mail-open-fill**  
  fr-icon-mail-open-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-mail-open-fill

- **mail-open-line**  
  fr-icon-mail-open-line  
  - business
- remix  
  - business
- remix  
  fr-icon-mail-open-line

- **mail-send-fill**  
  fr-icon-mail-send-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-mail-send-fill

- **mail-send-line**  
  fr-icon-mail-send-line  
  - business
- remix  
  - business
- remix  
  fr-icon-mail-send-line

- **mail-settings-fill**  
  fr-icon-mail-settings-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-mail-settings-fill

- **mail-settings-line**  
  fr-icon-mail-settings-line  
  - business
- remix  
  - business
- remix  
  fr-icon-mail-settings-line

- **mail-star-fill**  
  fr-icon-mail-star-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-mail-star-fill

- **mail-star-line**  
  fr-icon-mail-star-line  
  - business
- remix  
  - business
- remix  
  fr-icon-mail-star-line

- **mail-unread-fill**  
  fr-icon-mail-unread-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-mail-unread-fill

- **mail-unread-line**  
  fr-icon-mail-unread-line  
  - business
- remix  
  - business
- remix  
  fr-icon-mail-unread-line

- **mail-volume-fill**  
  fr-icon-mail-volume-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-mail-volume-fill

- **mail-volume-line**  
  fr-icon-mail-volume-line  
  - business
- remix  
  - business
- remix  
  fr-icon-mail-volume-line

- **medal-fill**  
  fr-icon-medal-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-medal-fill

- **medal-line**  
  fr-icon-medal-line  
  - business
- remix  
  - business
- remix  
  fr-icon-medal-line

- **megaphone-fill**  
  fr-icon-megaphone-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-megaphone-fill

- **megaphone-line**  
  fr-icon-megaphone-line  
  - business
- remix  
  - business
- remix  
  fr-icon-megaphone-line

- **pass-expired-fill**  
  fr-icon-pass-expired-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-pass-expired-fill

- **pass-expired-line**  
  fr-icon-pass-expired-line  
  - business
- remix  
  - business
- remix  
  fr-icon-pass-expired-line

- **pass-pending-fill**  
  fr-icon-pass-pending-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-pass-pending-fill

- **pass-pending-line**  
  fr-icon-pass-pending-line  
  - business
- remix  
  - business
- remix  
  fr-icon-pass-pending-line

- **pass-valid-fill**  
  fr-icon-pass-valid-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-pass-valid-fill

- **pass-valid-line**  
  fr-icon-pass-valid-line  
  - business
- remix  
  - business
- remix  
  fr-icon-pass-valid-line

- **pie-chart-2-fill**  
  fr-icon-pie-chart-2-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-pie-chart-2-fill

- **pie-chart-2-line**  
  fr-icon-pie-chart-2-line  
  - business
- remix  
  - business
- remix  
  fr-icon-pie-chart-2-line

- **pie-chart-box-fill**  
  fr-icon-pie-chart-box-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-pie-chart-box-fill

- **pie-chart-box-line**  
  fr-icon-pie-chart-box-line  
  - business
- remix  
  - business
- remix  
  fr-icon-pie-chart-box-line

- **pie-chart-fill**  
  fr-icon-pie-chart-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-pie-chart-fill

- **pie-chart-line**  
  fr-icon-pie-chart-line  
  - business
- remix  
  - business
- remix  
  fr-icon-pie-chart-line

- **presentation-fill**  
  fr-icon-presentation-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-presentation-fill

- **presentation-line**  
  fr-icon-presentation-line  
  - business
- remix  
  - business
- remix  
  fr-icon-presentation-line

- **printer-cloud-fill**  
  fr-icon-printer-cloud-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-printer-cloud-fill

- **printer-cloud-line**  
  fr-icon-printer-cloud-line  
  - business
- remix  
  - business
- remix  
  fr-icon-printer-cloud-line

- **printer-fill**  
  fr-icon-printer-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-printer-fill

- **printer-line**  
  fr-icon-printer-line  
  - business
- remix  
  - business
- remix  
  fr-icon-printer-line

- **profil-fill**  
  fr-icon-profil-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-profil-fill

- **profil-line**  
  fr-icon-profil-line  
  - business
- remix  
  - business
- remix  
  fr-icon-profil-line

- **projector-2-fill**  
  fr-icon-projector-2-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-projector-2-fill

- **projector-2-line**  
  fr-icon-projector-2-line  
  - business
- remix  
  - business
- remix  
  fr-icon-projector-2-line

- **record-mail-fill**  
  fr-icon-record-mail-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-record-mail-fill

- **record-mail-line**  
  fr-icon-record-mail-line  
  - business
- remix  
  - business
- remix  
  fr-icon-record-mail-line

- **reply-all-fill**  
  fr-icon-reply-all-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-reply-all-fill

- **reply-all-line**  
  fr-icon-reply-all-line  
  - business
- remix  
  - business
- remix  
  fr-icon-reply-all-line

- **reply-fill**  
  fr-icon-reply-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-reply-fill

- **reply-line**  
  fr-icon-reply-line  
  - business
- remix  
  - business
- remix  
  fr-icon-reply-line

- **send-plane-fill**  
  fr-icon-send-plane-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-send-plane-fill

- **send-plane-line**  
  fr-icon-send-plane-line  
  - business
- remix  
  - business
- remix  
  fr-icon-send-plane-line

- **seo-fill**  
  fr-icon-seo-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-seo-fill

- **seo-line**  
  fr-icon-seo-line  
  - business
- remix  
  - business
- remix  
  fr-icon-seo-line

- **service-fill**  
  fr-icon-service-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-service-fill

- **service-line**  
  fr-icon-service-line  
  - business
- remix  
  - business
- remix  
  fr-icon-service-line

- **shake-hands-fill**  
  fr-icon-shake-hands-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-shake-hands-fill

- **shake-hands-line**  
  fr-icon-shake-hands-line  
  - business
- remix  
  - business
- remix  
  fr-icon-shake-hands-line

- **slideshow-fill**  
  fr-icon-slideshow-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-slideshow-fill

- **slideshow-line**  
  fr-icon-slideshow-line  
  - business
- remix  
  - business
- remix  
  fr-icon-slideshow-line

- **stack-fill**  
  fr-icon-stack-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-stack-fill

- **stack-line**  
  fr-icon-stack-line  
  - business
- remix  
  - business
- remix  
  fr-icon-stack-line

- **window-2-fill**  
  fr-icon-window-2-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-window-2-fill

- **window-2-line**  
  fr-icon-window-2-line  
  - business
- remix  
  - business
- remix  
  fr-icon-window-2-line

- **window-fill**  
  fr-icon-window-fill  
  - business
- remix  
  - business
- remix  
  fr-icon-window-fill

- **window-line**  
  fr-icon-window-line  
  - business
- remix  
  - business
- remix  
  fr-icon-window-line

#### Communication

- **chat-2-fill**  
  fr-icon-chat-2-fill  
  - communication
- remix  
  - communication
- remix  
  fr-icon-chat-2-fill

- **chat-2-line**  
  fr-icon-chat-2-line  
  - communication
- remix  
  - communication
- remix  
  fr-icon-chat-2-line

- **chat-3-fill**  
  fr-icon-chat-3-fill  
  - communication
- remix  
  - communication
- remix  
  fr-icon-chat-3-fill

- **chat-3-line**  
  fr-icon-chat-3-line  
  - communication
- remix  
  - communication
- remix  
  fr-icon-chat-3-line

- **chat-check-fill**  
  fr-icon-chat-check-fill  
  - communication
- remix  
  - communication
- remix  
  fr-icon-chat-check-fill

- **chat-check-line**  
  fr-icon-chat-check-line  
  - communication
- remix  
  - communication
- remix  
  fr-icon-chat-check-line

- **chat-delete-fill**  
  fr-icon-chat-delete-fill  
  - communication
- remix  
  - communication
- remix  
  fr-icon-chat-delete-fill

- **chat-delete-line**  
  fr-icon-chat-delete-line  
  - communication
- remix  
  - communication
- remix  
  fr-icon-chat-delete-line

- **chat-download-fill**  
  fr-icon-chat-download-fill  
  - communication
- remix  
  - communication
- remix  
  fr-icon-chat-download-fill

- **chat-download-line**  
  fr-icon-chat-download-line  
  - communication
- remix  
  - communication
- remix  
  fr-icon-chat-download-line

- **chat-follow-up-fill**  
  fr-icon-chat-follow-up-fill  
  - communication
- remix  
  - communication
- remix  
  fr-icon-chat-follow-up-fill

- **chat-follow-up-line**  
  fr-icon-chat-follow-up-line  
  - communication
- remix  
  - communication
- remix  
  fr-icon-chat-follow-up-line

- **chat-forward-fill**  
  fr-icon-chat-forward-fill  
  - communication
- remix  
  - communication
- remix  
  fr-icon-chat-forward-fill

- **chat-forward-line**  
  fr-icon-chat-forward-line  
  - communication
- remix  
  - communication
- remix  
  fr-icon-chat-forward-line

- **chat-history-fill**  
  fr-icon-chat-history-fill  
  - communication
- remix  
  - communication
- remix  
  fr-icon-chat-history-fill

- **chat-history-line**  
  fr-icon-chat-history-line  
  - communication
- remix  
  - communication
- remix  
  fr-icon-chat-history-line

- **chat-new-fill**  
  fr-icon-chat-new-fill  
  - communication
- remix  
  - communication
- remix  
  fr-icon-chat-new-fill

- **chat-new-line**  
  fr-icon-chat-new-line  
  - communication
- remix  
  - communication
- remix  
  fr-icon-chat-new-line

- **chat-off-fill**  
  fr-icon-chat-off-fill  
  - communication
- remix  
  - communication
- remix  
  fr-icon-chat-off-fill

- **chat-off-line**  
  fr-icon-chat-off-line  
  - communication
- remix  
  - communication
- remix  
  fr-icon-chat-off-line

- **chat-poll-fill**  
  fr-icon-chat-poll-fill  
  - communication
- remix  
  - communication
- remix  
  fr-icon-chat-poll-fill

- **chat-poll-line**  
  fr-icon-chat-poll-line  
  - communication
- remix  
  - communication
- remix  
  fr-icon-chat-poll-line

- **chat-private-fill**  
  fr-icon-chat-private-fill  
  - communication
- remix  
  - communication
- remix  
  fr-icon-chat-private-fill

- **chat-private-line**  
  fr-icon-chat-private-line  
  - communication
- remix  
  - communication
- remix  
  fr-icon-chat-private-line

- **chat-quote-fill**  
  fr-icon-chat-quote-fill  
  - communication
- remix  
  - communication
- remix  
  fr-icon-chat-quote-fill

- **chat-quote-line**  
  fr-icon-chat-quote-line  
  - communication
- remix  
  - communication
- remix  
  fr-icon-chat-quote-line

- **chat-settings-fill**  
  fr-icon-chat-settings-fill  
  - communication
- remix  
  - communication
- remix  
  fr-icon-chat-settings-fill

- **chat-settings-line**  
  fr-icon-chat-settings-line  
  - communication
- remix  
  - communication
- remix  
  fr-icon-chat-settings-line

- **chat-upload-fill**  
  fr-icon-chat-upload-fill  
  - communication
- remix  
  - communication
- remix  
  fr-icon-chat-upload-fill

- **chat-upload-line**  
  fr-icon-chat-upload-line  
  - communication
- remix  
  - communication
- remix  
  fr-icon-chat-upload-line

- **chat-voice-fill**  
  fr-icon-chat-voice-fill  
  - communication
- remix  
  - communication
- remix  
  fr-icon-chat-voice-fill

- **chat-voice-line**  
  fr-icon-chat-voice-line  
  - communication
- remix  
  - communication
- remix  
  fr-icon-chat-voice-line

- **discuss-fill**  
  fr-icon-discuss-fill  
  - communication
- remix  
  - communication
- remix  
  fr-icon-discuss-fill

- **discuss-line**  
  fr-icon-discuss-line  
  - communication
- remix  
  - communication
- remix  
  fr-icon-discuss-line

- **emoji-sticker-fill**  
  fr-icon-emoji-sticker-fill  
  - communication
- remix  
  - communication
- remix  
  fr-icon-emoji-sticker-fill

- **emoji-sticker-line**  
  fr-icon-emoji-sticker-line  
  - communication
- remix  
  - communication
- remix  
  fr-icon-emoji-sticker-line

- **feedback-fill**  
  fr-icon-feedback-fill  
  - communication
- remix  
  - communication
- remix  
  fr-icon-feedback-fill

- **feedback-line**  
  fr-icon-feedback-line  
  - communication
- remix  
  - communication
- remix  
  fr-icon-feedback-line

- **message-2-fill**  
  fr-icon-message-2-fill  
  - communication
- remix  
  - communication
- remix  
  fr-icon-message-2-fill

- **message-2-line**  
  fr-icon-message-2-line  
  - communication
- remix  
  - communication
- remix  
  fr-icon-message-2-line

- **message-3-fill**  
  fr-icon-message-3-fill  
  - communication
- remix  
  - communication
- remix  
  fr-icon-message-3-fill

- **message-3-line**  
  fr-icon-message-3-line  
  - communication
- remix  
  - communication
- remix  
  fr-icon-message-3-line

- **question-answer-fill**  
  fr-icon-question-answer-fill  
  - communication
- remix  
  - communication
- remix  
  fr-icon-question-answer-fill

- **question-answer-line**  
  fr-icon-question-answer-line  
  - communication
- remix  
  - communication
- remix  
  fr-icon-question-answer-line

- **questionnaire-fill**  
  fr-icon-questionnaire-fill  
  - communication
- remix  
  - communication
- remix  
  fr-icon-questionnaire-fill

- **questionnaire-line**  
  fr-icon-questionnaire-line  
  - communication
- remix  
  - communication
- remix  
  fr-icon-questionnaire-line

- **speak-fill**  
  fr-icon-speak-fill  
  - communication
- remix  
  - communication
- remix  
  fr-icon-speak-fill

- **speak-line**  
  fr-icon-speak-line  
  - communication
- remix  
  - communication
- remix  
  fr-icon-speak-line

- **video-chat-fill**  
  fr-icon-video-chat-fill  
  - communication
- remix  
  - communication
- remix  
  fr-icon-video-chat-fill

- **video-chat-line**  
  fr-icon-video-chat-line  
  - communication
- remix  
  - communication
- remix  
  fr-icon-video-chat-line

#### Design

- **anticlockwise-fill**  
  fr-icon-anticlockwise-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-anticlockwise-fill

- **anticlockwise-line**  
  fr-icon-anticlockwise-line  
  - design
- remix  
  - design
- remix  
  fr-icon-anticlockwise-line

- **artboard-fill**  
  fr-icon-artboard-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-artboard-fill

- **artboard-line**  
  fr-icon-artboard-line  
  - design
- remix  
  - design
- remix  
  fr-icon-artboard-line

- **ball-pen-fill**  
  fr-icon-ball-pen-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-ball-pen-fill

- **ball-pen-line**  
  fr-icon-ball-pen-line  
  - design
- remix  
  - design
- remix  
  fr-icon-ball-pen-line

- **blur-off-fill**  
  fr-icon-blur-off-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-blur-off-fill

- **blur-off-line**  
  fr-icon-blur-off-line  
  - design
- remix  
  - design
- remix  
  fr-icon-blur-off-line

- **brush-3-fill**  
  fr-icon-brush-3-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-brush-3-fill

- **brush-3-line**  
  fr-icon-brush-3-line  
  - design
- remix  
  - design
- remix  
  fr-icon-brush-3-line

- **brush-fill**  
  fr-icon-brush-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-brush-fill

- **brush-line**  
  fr-icon-brush-line  
  - design
- remix  
  - design
- remix  
  fr-icon-brush-line

- **circle-fill**  
  fr-icon-circle-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-circle-fill

- **circle-line**  
  fr-icon-circle-line  
  - design
- remix  
  - design
- remix  
  fr-icon-circle-line

- **clockwise-fill**  
  fr-icon-clockwise-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-clockwise-fill

- **clockwise-line**  
  fr-icon-clockwise-line  
  - design
- remix  
  - design
- remix  
  fr-icon-clockwise-line

- **collage-fill**  
  fr-icon-collage-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-collage-fill

- **collage-line**  
  fr-icon-collage-line  
  - design
- remix  
  - design
- remix  
  fr-icon-collage-line

- **compasses-2-fill**  
  fr-icon-compasses-2-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-compasses-2-fill

- **compasses-2-line**  
  fr-icon-compasses-2-line  
  - design
- remix  
  - design
- remix  
  fr-icon-compasses-2-line

- **contrast-drop-2-fill**  
  fr-icon-contrast-drop-2-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-contrast-drop-2-fill

- **contrast-drop-2-line**  
  fr-icon-contrast-drop-2-line  
  - design
- remix  
  - design
- remix  
  fr-icon-contrast-drop-2-line

- **contrast-fill**  
  fr-icon-contrast-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-contrast-fill

- **contrast-line**  
  fr-icon-contrast-line  
  - design
- remix  
  - design
- remix  
  fr-icon-contrast-line

- **crop-fill**  
  fr-icon-crop-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-crop-fill

- **crop-line**  
  fr-icon-crop-line  
  - design
- remix  
  - design
- remix  
  fr-icon-crop-line

- **crosshair-2-fill**  
  fr-icon-crosshair-2-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-crosshair-2-fill

- **crosshair-2-line**  
  fr-icon-crosshair-2-line  
  - design
- remix  
  - design
- remix  
  fr-icon-crosshair-2-line

- **drag-drop-fill**  
  fr-icon-drag-drop-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-drag-drop-fill

- **drag-drop-line**  
  fr-icon-drag-drop-line  
  - design
- remix  
  - design
- remix  
  fr-icon-drag-drop-line

- **drag-move-2-fill**  
  fr-icon-drag-move-2-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-drag-move-2-fill

- **drag-move-2-line**  
  fr-icon-drag-move-2-line  
  - design
- remix  
  - design
- remix  
  fr-icon-drag-move-2-line

- **drop-fill**  
  fr-icon-drop-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-drop-fill

- **drop-line**  
  fr-icon-drop-line  
  - design
- remix  
  - design
- remix  
  fr-icon-drop-line

- **edit-box-fill**  
  fr-icon-edit-box-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-edit-box-fill

- **edit-box-line**  
  fr-icon-edit-box-line  
  - design
- remix  
  - design
- remix  
  fr-icon-edit-box-line

- **edit-circle-fill**  
  fr-icon-edit-circle-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-edit-circle-fill

- **edit-circle-line**  
  fr-icon-edit-circle-line  
  - design
- remix  
  - design
- remix  
  fr-icon-edit-circle-line

- **edit-fill**  
  fr-icon-edit-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-edit-fill

- **edit-line**  
  fr-icon-edit-line  
  - design
- remix  
  - design
- remix  
  fr-icon-edit-line

- **eraser-fill-1**  
  fr-icon-eraser-fill-1  
  - design
- remix  
  - design
- remix  
  fr-icon-eraser-fill-1

- **eraser-fill**  
  fr-icon-eraser-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-eraser-fill

- **eraser-line-1**  
  fr-icon-eraser-line-1  
  - design
- remix  
  - design
- remix  
  fr-icon-eraser-line-1

- **eraser-line**  
  fr-icon-eraser-line  
  - design
- remix  
  - design
- remix  
  fr-icon-eraser-line

- **focus-3-fill**  
  fr-icon-focus-3-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-focus-3-fill

- **focus-3-line**  
  fr-icon-focus-3-line  
  - design
- remix  
  - design
- remix  
  fr-icon-focus-3-line

- **grid-fill**  
  fr-icon-grid-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-grid-fill

- **grid-line**  
  fr-icon-grid-line  
  - design
- remix  
  - design
- remix  
  fr-icon-grid-line

- **hammer-fill**  
  fr-icon-hammer-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-hammer-fill

- **hammer-line**  
  fr-icon-hammer-line  
  - design
- remix  
  - design
- remix  
  fr-icon-hammer-line

- **hexagon-fill**  
  fr-icon-hexagon-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-hexagon-fill

- **hexagon-line**  
  fr-icon-hexagon-line  
  - design
- remix  
  - design
- remix  
  fr-icon-hexagon-line

- **ink-bottle-fill**  
  fr-icon-ink-bottle-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-ink-bottle-fill

- **ink-bottle-line**  
  fr-icon-ink-bottle-line  
  - design
- remix  
  - design
- remix  
  fr-icon-ink-bottle-line

- **layout-bottom-fill**  
  fr-icon-layout-bottom-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-layout-bottom-fill

- **layout-bottom-line**  
  fr-icon-layout-bottom-line  
  - design
- remix  
  - design
- remix  
  fr-icon-layout-bottom-line

- **layout-column-fill**  
  fr-icon-layout-column-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-layout-column-fill

- **layout-column-line**  
  fr-icon-layout-column-line  
  - design
- remix  
  - design
- remix  
  fr-icon-layout-column-line

- **layout-fill**  
  fr-icon-layout-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-layout-fill

- **layout-grid-fill**  
  fr-icon-layout-grid-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-layout-grid-fill

- **layout-grid-line**  
  fr-icon-layout-grid-line  
  - design
- remix  
  - design
- remix  
  fr-icon-layout-grid-line

- **layout-left-fill**  
  fr-icon-layout-left-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-layout-left-fill

- **layout-left-line**  
  fr-icon-layout-left-line  
  - design
- remix  
  - design
- remix  
  fr-icon-layout-left-line

- **layout-line**  
  fr-icon-layout-line  
  - design
- remix  
  - design
- remix  
  fr-icon-layout-line

- **layout-masonry-fill**  
  fr-icon-layout-masonry-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-layout-masonry-fill

- **layout-masonry-line**  
  fr-icon-layout-masonry-line  
  - design
- remix  
  - design
- remix  
  fr-icon-layout-masonry-line

- **layout-right-fill**  
  fr-icon-layout-right-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-layout-right-fill

- **layout-right-line**  
  fr-icon-layout-right-line  
  - design
- remix  
  - design
- remix  
  fr-icon-layout-right-line

- **layout-row-fill**  
  fr-icon-layout-row-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-layout-row-fill

- **layout-row-line**  
  fr-icon-layout-row-line  
  - design
- remix  
  - design
- remix  
  fr-icon-layout-row-line

- **layout-top-fill**  
  fr-icon-layout-top-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-layout-top-fill

- **layout-top-line**  
  fr-icon-layout-top-line  
  - design
- remix  
  - design
- remix  
  fr-icon-layout-top-line

- **magic-fill**  
  fr-icon-magic-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-magic-fill

- **magic-line**  
  fr-icon-magic-line  
  - design
- remix  
  - design
- remix  
  fr-icon-magic-line

- **mark-pen-fill**  
  fr-icon-mark-pen-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-mark-pen-fill

- **mark-pen-line**  
  fr-icon-mark-pen-line  
  - design
- remix  
  - design
- remix  
  fr-icon-mark-pen-line

- **markup-fill**  
  fr-icon-markup-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-markup-fill

- **markup-line**  
  fr-icon-markup-line  
  - design
- remix  
  - design
- remix  
  fr-icon-markup-line

- **octagon-fill**  
  fr-icon-octagon-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-octagon-fill

- **octagon-line**  
  fr-icon-octagon-line  
  - design
- remix  
  - design
- remix  
  fr-icon-octagon-line

- **paint-brush-fill**  
  fr-icon-paint-brush-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-paint-brush-fill

- **paint-brush-line**  
  fr-icon-paint-brush-line  
  - design
- remix  
  - design
- remix  
  fr-icon-paint-brush-line

- **paint-fill**  
  fr-icon-paint-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-paint-fill

- **paint-line**  
  fr-icon-paint-line  
  - design
- remix  
  - design
- remix  
  fr-icon-paint-line

- **palette-fill**  
  fr-icon-palette-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-palette-fill

- **palette-line**  
  fr-icon-palette-line  
  - design
- remix  
  - design
- remix  
  fr-icon-palette-line

- **pantone-fill**  
  fr-icon-pantone-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-pantone-fill

- **pantone-line**  
  fr-icon-pantone-line  
  - design
- remix  
  - design
- remix  
  fr-icon-pantone-line

- **pen-nib-fill**  
  fr-icon-pen-nib-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-pen-nib-fill

- **pen-nib-line**  
  fr-icon-pen-nib-line  
  - design
- remix  
  - design
- remix  
  fr-icon-pen-nib-line

- **pencil-fill**  
  fr-icon-pencil-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-pencil-fill

- **pencil-line**  
  fr-icon-pencil-line  
  - design
- remix  
  - design
- remix  
  fr-icon-pencil-line

- **pencil-ruler-fill**  
  fr-icon-pencil-ruler-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-pencil-ruler-fill

- **pencil-ruler-line**  
  fr-icon-pencil-ruler-line  
  - design
- remix  
  - design
- remix  
  fr-icon-pencil-ruler-line

- **pentagon-fill**  
  fr-icon-pentagon-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-pentagon-fill

- **pentagon-line**  
  fr-icon-pentagon-line  
  - design
- remix  
  - design
- remix  
  fr-icon-pentagon-line

- **quill-pen-fill**  
  fr-icon-quill-pen-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-quill-pen-fill

- **quill-pen-line**  
  fr-icon-quill-pen-line  
  - design
- remix  
  - design
- remix  
  fr-icon-quill-pen-line

- **rectangle-fill**  
  fr-icon-rectangle-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-rectangle-fill

- **rectangle-line**  
  fr-icon-rectangle-line  
  - design
- remix  
  - design
- remix  
  fr-icon-rectangle-line

- **ruler-fill**  
  fr-icon-ruler-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-ruler-fill

- **ruler-line**  
  fr-icon-ruler-line  
  - design
- remix  
  - design
- remix  
  fr-icon-ruler-line

- **scissors-cut-fill**  
  fr-icon-scissors-cut-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-scissors-cut-fill

- **scissors-cut-line**  
  fr-icon-scissors-cut-line  
  - design
- remix  
  - design
- remix  
  fr-icon-scissors-cut-line

- **scissors-fill**  
  fr-icon-scissors-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-scissors-fill

- **scissors-line**  
  fr-icon-scissors-line  
  - design
- remix  
  - design
- remix  
  fr-icon-scissors-line

- **screenshot-2-fill**  
  fr-icon-screenshot-2-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-screenshot-2-fill

- **screenshot-2-line**  
  fr-icon-screenshot-2-line  
  - design
- remix  
  - design
- remix  
  fr-icon-screenshot-2-line

- **shape-fill**  
  fr-icon-shape-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-shape-fill

- **shape-line**  
  fr-icon-shape-line  
  - design
- remix  
  - design
- remix  
  fr-icon-shape-line

- **shapes-fill**  
  fr-icon-shapes-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-shapes-fill

- **shapes-line**  
  fr-icon-shapes-line  
  - design
- remix  
  - design
- remix  
  fr-icon-shapes-line

- **sip-fill**  
  fr-icon-sip-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-sip-fill

- **sip-line**  
  fr-icon-sip-line  
  - design
- remix  
  - design
- remix  
  fr-icon-sip-line

- **slice-fill**  
  fr-icon-slice-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-slice-fill

- **slice-line**  
  fr-icon-slice-line  
  - design
- remix  
  - design
- remix  
  fr-icon-slice-line

- **square-fill**  
  fr-icon-square-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-square-fill

- **square-line**  
  fr-icon-square-line  
  - design
- remix  
  - design
- remix  
  fr-icon-square-line

- **table-alt-fill**  
  fr-icon-table-alt-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-table-alt-fill

- **table-alt-line**  
  fr-icon-table-alt-line  
  - design
- remix  
  - design
- remix  
  fr-icon-table-alt-line

- **table-fill**  
  fr-icon-table-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-table-fill

- **table-line**  
  fr-icon-table-line  
  - design
- remix  
  - design
- remix  
  fr-icon-table-line

- **tools-fill**  
  fr-icon-tools-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-tools-fill

- **tools-line**  
  fr-icon-tools-line  
  - design
- remix  
  - design
- remix  
  fr-icon-tools-line

- **triangle-fill**  
  fr-icon-triangle-fill  
  - design
- remix  
  - design
- remix  
  fr-icon-triangle-fill

- **triangle-line**  
  fr-icon-triangle-line  
  - design
- remix  
  - design
- remix  
  fr-icon-triangle-line

#### Development

- **braces-fill**  
  fr-icon-braces-fill  
  - development
- remix  
  - development
- remix  
  fr-icon-braces-fill

- **braces-line**  
  fr-icon-braces-line  
  - development
- remix  
  - development
- remix  
  fr-icon-braces-line

- **brackets-fill**  
  fr-icon-brackets-fill  
  - development
- remix  
  - development
- remix  
  fr-icon-brackets-fill

- **brackets-line**  
  fr-icon-brackets-line  
  - development
- remix  
  - development
- remix  
  fr-icon-brackets-line

- **bug-fill**  
  fr-icon-bug-fill  
  - development
- remix  
  - development
- remix  
  fr-icon-bug-fill

- **bug-line**  
  fr-icon-bug-line  
  - development
- remix  
  - development
- remix  
  fr-icon-bug-line

- **code-box-fill**  
  fr-icon-code-box-fill  
  - development
- remix  
  - development
- remix  
  fr-icon-code-box-fill

- **code-box-line**  
  fr-icon-code-box-line  
  - development
- remix  
  - development
- remix  
  fr-icon-code-box-line

- **code-fill**  
  fr-icon-code-fill  
  - development
- remix  
  - development
- remix  
  fr-icon-code-fill

- **code-line**  
  fr-icon-code-line  
  - development
- remix  
  - development
- remix  
  fr-icon-code-line

- **code-s-slash-fill**  
  fr-icon-code-s-slash-fill  
  - development
- remix  
  - development
- remix  
  fr-icon-code-s-slash-fill

- **code-s-slash-line**  
  fr-icon-code-s-slash-line  
  - development
- remix  
  - development
- remix  
  fr-icon-code-s-slash-line

- **command-fill**  
  fr-icon-command-fill  
  - development
- remix  
  - development
- remix  
  fr-icon-command-fill

- **command-line**  
  fr-icon-command-line  
  - development
- remix  
  - development
- remix  
  fr-icon-command-line

- **css3-fill**  
  fr-icon-css3-fill  
  - development
- remix  
  - development
- remix  
  fr-icon-css3-fill

- **css3-line**  
  fr-icon-css3-line  
  - development
- remix  
  - development
- remix  
  fr-icon-css3-line

- **cursor-fill**  
  fr-icon-cursor-fill  
  - development
- remix  
  - development
- remix  
  fr-icon-cursor-fill

- **cursor-line**  
  fr-icon-cursor-line  
  - development
- remix  
  - development
- remix  
  fr-icon-cursor-line

- **git-branch-fill**  
  fr-icon-git-branch-fill  
  - development
- remix  
  - development
- remix  
  fr-icon-git-branch-fill

- **git-branch-line**  
  fr-icon-git-branch-line  
  - development
- remix  
  - development
- remix  
  fr-icon-git-branch-line

- **git-close-pull-request-fill**  
  fr-icon-git-close-pull-request-fill  
  - development
- remix  
  - development
- remix  
  fr-icon-git-close-pull-request-fill

- **git-close-pull-request-line**  
  fr-icon-git-close-pull-request-line  
  - development
- remix  
  - development
- remix  
  fr-icon-git-close-pull-request-line

- **git-commit-fill**  
  fr-icon-git-commit-fill  
  - development
- remix  
  - development
- remix  
  fr-icon-git-commit-fill

- **git-commit-line**  
  fr-icon-git-commit-line  
  - development
- remix  
  - development
- remix  
  fr-icon-git-commit-line

- **git-merge-fill**  
  fr-icon-git-merge-fill  
  - development
- remix  
  - development
- remix  
  fr-icon-git-merge-fill

- **git-merge-line**  
  fr-icon-git-merge-line  
  - development
- remix  
  - development
- remix  
  fr-icon-git-merge-line

- **git-pull-request-fill**  
  fr-icon-git-pull-request-fill  
  - development
- remix  
  - development
- remix  
  fr-icon-git-pull-request-fill

- **git-pull-request-line**  
  fr-icon-git-pull-request-line  
  - development
- remix  
  - development
- remix  
  fr-icon-git-pull-request-line

- **git-repository-commits-fill**  
  fr-icon-git-repository-commits-fill  
  - development
- remix  
  - development
- remix  
  fr-icon-git-repository-commits-fill

- **git-repository-commits-line**  
  fr-icon-git-repository-commits-line  
  - development
- remix  
  - development
- remix  
  fr-icon-git-repository-commits-line

- **git-repository-fill**  
  fr-icon-git-repository-fill  
  - development
- remix  
  - development
- remix  
  fr-icon-git-repository-fill

- **git-repository-line**  
  fr-icon-git-repository-line  
  - development
- remix  
  - development
- remix  
  fr-icon-git-repository-line

- **git-repository-private-fill**  
  fr-icon-git-repository-private-fill  
  - development
- remix  
  - development
- remix  
  fr-icon-git-repository-private-fill

- **git-repository-private-line**  
  fr-icon-git-repository-private-line  
  - development
- remix  
  - development
- remix  
  fr-icon-git-repository-private-line

- **html5-fill**  
  fr-icon-html5-fill  
  - development
- remix  
  - development
- remix  
  fr-icon-html5-fill

- **html5-line**  
  fr-icon-html5-line  
  - development
- remix  
  - development
- remix  
  fr-icon-html5-line

- **javascript-fill**  
  fr-icon-javascript-fill  
  - development
- remix  
  - development
- remix  
  fr-icon-javascript-fill

- **javascript-line**  
  fr-icon-javascript-line  
  - development
- remix  
  - development
- remix  
  fr-icon-javascript-line

- **parentheses-fill**  
  fr-icon-parentheses-fill  
  - development
- remix  
  - development
- remix  
  fr-icon-parentheses-fill

- **parentheses-line**  
  fr-icon-parentheses-line  
  - development
- remix  
  - development
- remix  
  fr-icon-parentheses-line

- **terminal-box-fill**  
  fr-icon-terminal-box-fill  
  - development
- remix  
  - development
- remix  
  fr-icon-terminal-box-fill

- **terminal-box-line**  
  fr-icon-terminal-box-line  
  - development
- remix  
  - development
- remix  
  fr-icon-terminal-box-line

- **terminal-fill**  
  fr-icon-terminal-fill  
  - development
- remix  
  - development
- remix  
  fr-icon-terminal-fill

- **terminal-line**  
  fr-icon-terminal-line  
  - development
- remix  
  - development
- remix  
  fr-icon-terminal-line

- **terminal-window-fill**  
  fr-icon-terminal-window-fill  
  - development
- remix  
  - development
- remix  
  fr-icon-terminal-window-fill

- **terminal-window-line**  
  fr-icon-terminal-window-line  
  - development
- remix  
  - development
- remix  
  fr-icon-terminal-window-line

#### Device

- **airplay-fill**  
  fr-icon-airplay-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-airplay-fill

- **airplay-line**  
  fr-icon-airplay-line  
  - device
- remix  
  - device
- remix  
  fr-icon-airplay-line

- **barcode-box-fill**  
  fr-icon-barcode-box-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-barcode-box-fill

- **barcode-box-line**  
  fr-icon-barcode-box-line  
  - device
- remix  
  - device
- remix  
  fr-icon-barcode-box-line

- **barcode-fill**  
  fr-icon-barcode-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-barcode-fill

- **barcode-line**  
  fr-icon-barcode-line  
  - device
- remix  
  - device
- remix  
  fr-icon-barcode-line

- **base-station-fill**  
  fr-icon-base-station-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-base-station-fill

- **base-station-line**  
  fr-icon-base-station-line  
  - device
- remix  
  - device
- remix  
  fr-icon-base-station-line

- **battery-charge-fill**  
  fr-icon-battery-charge-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-battery-charge-fill

- **battery-charge-line**  
  fr-icon-battery-charge-line  
  - device
- remix  
  - device
- remix  
  fr-icon-battery-charge-line

- **battery-fill**  
  fr-icon-battery-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-battery-fill

- **battery-line**  
  fr-icon-battery-line  
  - device
- remix  
  - device
- remix  
  fr-icon-battery-line

- **battery-low-fill**  
  fr-icon-battery-low-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-battery-low-fill

- **battery-low-line**  
  fr-icon-battery-low-line  
  - device
- remix  
  - device
- remix  
  fr-icon-battery-low-line

- **bluetooth-connect-fill**  
  fr-icon-bluetooth-connect-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-bluetooth-connect-fill

- **bluetooth-connect-line**  
  fr-icon-bluetooth-connect-line  
  - device
- remix  
  - device
- remix  
  fr-icon-bluetooth-connect-line

- **bluetooth-fill**  
  fr-icon-bluetooth-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-bluetooth-fill

- **bluetooth-line**  
  fr-icon-bluetooth-line  
  - device
- remix  
  - device
- remix  
  fr-icon-bluetooth-line

- **cast-fill**  
  fr-icon-cast-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-cast-fill

- **cast-line**  
  fr-icon-cast-line  
  - device
- remix  
  - device
- remix  
  fr-icon-cast-line

- **cellphone-fill**  
  fr-icon-cellphone-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-cellphone-fill

- **cellphone-line**  
  fr-icon-cellphone-line  
  - device
- remix  
  - device
- remix  
  fr-icon-cellphone-line

- **computer-fill**  
  fr-icon-computer-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-computer-fill

- **computer-line**  
  fr-icon-computer-line  
  - device
- remix  
  - device
- remix  
  fr-icon-computer-line

- **cpu-fill**  
  fr-icon-cpu-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-cpu-fill

- **cpu-line**  
  fr-icon-cpu-line  
  - device
- remix  
  - device
- remix  
  fr-icon-cpu-line

- **dashboard-3-fill**  
  fr-icon-dashboard-3-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-dashboard-3-fill

- **dashboard-3-line**  
  fr-icon-dashboard-3-line  
  - device
- remix  
  - device
- remix  
  fr-icon-dashboard-3-line

- **database-fill**  
  fr-icon-database-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-database-fill

- **database-line**  
  fr-icon-database-line  
  - device
- remix  
  - device
- remix  
  fr-icon-database-line

- **device-fill**  
  fr-icon-device-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-device-fill

- **device-line**  
  fr-icon-device-line  
  - device
- remix  
  - device
- remix  
  fr-icon-device-line

- **device-recover-fill**  
  fr-icon-device-recover-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-device-recover-fill

- **device-recover-line**  
  fr-icon-device-recover-line  
  - device
- remix  
  - device
- remix  
  fr-icon-device-recover-line

- **fingerprint-fill**  
  fr-icon-fingerprint-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-fingerprint-fill

- **fingerprint-line**  
  fr-icon-fingerprint-line  
  - device
- remix  
  - device
- remix  
  fr-icon-fingerprint-line

- **gamepad-fill**  
  fr-icon-gamepad-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-gamepad-fill

- **gamepad-line**  
  fr-icon-gamepad-line  
  - device
- remix  
  - device
- remix  
  fr-icon-gamepad-line

- **gps-fill**  
  fr-icon-gps-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-gps-fill

- **gps-line**  
  fr-icon-gps-line  
  - device
- remix  
  - device
- remix  
  fr-icon-gps-line

- **gradienter-fill**  
  fr-icon-gradienter-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-gradienter-fill

- **gradienter-line**  
  fr-icon-gradienter-line  
  - device
- remix  
  - device
- remix  
  fr-icon-gradienter-line

- **hard-drive-2-fill**  
  fr-icon-hard-drive-2-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-hard-drive-2-fill

- **hard-drive-2-line**  
  fr-icon-hard-drive-2-line  
  - device
- remix  
  - device
- remix  
  fr-icon-hard-drive-2-line

- **hotspot-fill**  
  fr-icon-hotspot-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-hotspot-fill

- **hotspot-line**  
  fr-icon-hotspot-line  
  - device
- remix  
  - device
- remix  
  fr-icon-hotspot-line

- **install-fill**  
  fr-icon-install-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-install-fill

- **install-line**  
  fr-icon-install-line  
  - device
- remix  
  - device
- remix  
  fr-icon-install-line

- **instance-fill**  
  fr-icon-instance-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-instance-fill

- **instance-line**  
  fr-icon-instance-line  
  - device
- remix  
  - device
- remix  
  fr-icon-instance-line

- **keyboard-fill**  
  fr-icon-keyboard-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-keyboard-fill

- **keyboard-line**  
  fr-icon-keyboard-line  
  - device
- remix  
  - device
- remix  
  fr-icon-keyboard-line

- **mac-fill**  
  fr-icon-mac-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-mac-fill

- **mac-line**  
  fr-icon-mac-line  
  - device
- remix  
  - device
- remix  
  fr-icon-mac-line

- **macbook-fill**  
  fr-icon-macbook-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-macbook-fill

- **macbook-line**  
  fr-icon-macbook-line  
  - device
- remix  
  - device
- remix  
  fr-icon-macbook-line

- **mouse-fill**  
  fr-icon-mouse-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-mouse-fill

- **mouse-line**  
  fr-icon-mouse-line  
  - device
- remix  
  - device
- remix  
  fr-icon-mouse-line

- **phone-fill**  
  fr-icon-phone-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-phone-fill

- **phone-find-fill**  
  fr-icon-phone-find-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-phone-find-fill

- **phone-find-line**  
  fr-icon-phone-find-line  
  - device
- remix  
  - device
- remix  
  fr-icon-phone-find-line

- **phone-line**  
  fr-icon-phone-line  
  - device
- remix  
  - device
- remix  
  fr-icon-phone-line

- **phone-lock-fill**  
  fr-icon-phone-lock-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-phone-lock-fill

- **phone-lock-line**  
  fr-icon-phone-lock-line  
  - device
- remix  
  - device
- remix  
  fr-icon-phone-lock-line

- **qr-code-fill**  
  fr-icon-qr-code-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-qr-code-fill

- **qr-code-line**  
  fr-icon-qr-code-line  
  - device
- remix  
  - device
- remix  
  fr-icon-qr-code-line

- **qr-scan-fill**  
  fr-icon-qr-scan-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-qr-scan-fill

- **qr-scan-line**  
  fr-icon-qr-scan-line  
  - device
- remix  
  - device
- remix  
  fr-icon-qr-scan-line

- **radar-fill**  
  fr-icon-radar-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-radar-fill

- **radar-line**  
  fr-icon-radar-line  
  - device
- remix  
  - device
- remix  
  fr-icon-radar-line

- **remote-control-2-fill**  
  fr-icon-remote-control-2-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-remote-control-2-fill

- **remote-control-2-line**  
  fr-icon-remote-control-2-line  
  - device
- remix  
  - device
- remix  
  fr-icon-remote-control-2-line

- **remote-control-fill**  
  fr-icon-remote-control-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-remote-control-fill

- **remote-control-line**  
  fr-icon-remote-control-line  
  - device
- remix  
  - device
- remix  
  fr-icon-remote-control-line

- **restart-fill**  
  fr-icon-restart-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-restart-fill

- **restart-line**  
  fr-icon-restart-line  
  - device
- remix  
  - device
- remix  
  fr-icon-restart-line

- **rfid-fill**  
  fr-icon-rfid-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-rfid-fill

- **rfid-line**  
  fr-icon-rfid-line  
  - device
- remix  
  - device
- remix  
  fr-icon-rfid-line

- **rotate-lock-fill**  
  fr-icon-rotate-lock-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-rotate-lock-fill

- **rotate-lock-line**  
  fr-icon-rotate-lock-line  
  - device
- remix  
  - device
- remix  
  fr-icon-rotate-lock-line

- **router-fill**  
  fr-icon-router-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-router-fill

- **router-line**  
  fr-icon-router-line  
  - device
- remix  
  - device
- remix  
  fr-icon-router-line

- **rss-fill**  
  fr-icon-rss-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-rss-fill

- **rss-line**  
  fr-icon-rss-line  
  - device
- remix  
  - device
- remix  
  fr-icon-rss-line

- **save-3-fill**  
  fr-icon-save-3-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-save-3-fill

- **save-3-line**  
  fr-icon-save-3-line  
  - device
- remix  
  - device
- remix  
  fr-icon-save-3-line

- **save-fill**  
  fr-icon-save-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-save-fill

- **save-line**  
  fr-icon-save-line  
  - device
- remix  
  - device
- remix  
  fr-icon-save-line

- **scan-fill**  
  fr-icon-scan-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-scan-fill

- **scan-line**  
  fr-icon-scan-line  
  - device
- remix  
  - device
- remix  
  fr-icon-scan-line

- **sd-card-fill**  
  fr-icon-sd-card-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-sd-card-fill

- **sd-card-line**  
  fr-icon-sd-card-line  
  - device
- remix  
  - device
- remix  
  fr-icon-sd-card-line

- **sd-card-mini-fill**  
  fr-icon-sd-card-mini-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-sd-card-mini-fill

- **sd-card-mini-line**  
  fr-icon-sd-card-mini-line  
  - device
- remix  
  - device
- remix  
  fr-icon-sd-card-mini-line

- **sensor-fill**  
  fr-icon-sensor-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-sensor-fill

- **sensor-line**  
  fr-icon-sensor-line  
  - device
- remix  
  - device
- remix  
  fr-icon-sensor-line

- **server-fill**  
  fr-icon-server-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-server-fill

- **server-line**  
  fr-icon-server-line  
  - device
- remix  
  - device
- remix  
  fr-icon-server-line

- **shut-down-fill**  
  fr-icon-shut-down-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-shut-down-fill

- **shut-down-line**  
  fr-icon-shut-down-line  
  - device
- remix  
  - device
- remix  
  fr-icon-shut-down-line

- **signal-wifi-error-fill**  
  fr-icon-signal-wifi-error-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-signal-wifi-error-fill

- **signal-wifi-error-line**  
  fr-icon-signal-wifi-error-line  
  - device
- remix  
  - device
- remix  
  fr-icon-signal-wifi-error-line

- **signal-wifi-fill**  
  fr-icon-signal-wifi-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-signal-wifi-fill

- **signal-wifi-line**  
  fr-icon-signal-wifi-line  
  - device
- remix  
  - device
- remix  
  fr-icon-signal-wifi-line

- **signal-wifi-off-fill**  
  fr-icon-signal-wifi-off-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-signal-wifi-off-fill

- **signal-wifi-off-line**  
  fr-icon-signal-wifi-off-line  
  - device
- remix  
  - device
- remix  
  fr-icon-signal-wifi-off-line

- **sim-card-2-fill**  
  fr-icon-sim-card-2-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-sim-card-2-fill

- **sim-card-2-line**  
  fr-icon-sim-card-2-line  
  - device
- remix  
  - device
- remix  
  fr-icon-sim-card-2-line

- **smartphone-fill**  
  fr-icon-smartphone-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-smartphone-fill

- **smartphone-line**  
  fr-icon-smartphone-line  
  - device
- remix  
  - device
- remix  
  fr-icon-smartphone-line

- **tablet-fill**  
  fr-icon-tablet-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-tablet-fill

- **tablet-line**  
  fr-icon-tablet-line  
  - device
- remix  
  - device
- remix  
  fr-icon-tablet-line

- **tv-fill**  
  fr-icon-tv-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-tv-fill

- **tv-line**  
  fr-icon-tv-line  
  - device
- remix  
  - device
- remix  
  fr-icon-tv-line

- **u-disk-fill**  
  fr-icon-u-disk-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-u-disk-fill

- **u-disk-line**  
  fr-icon-u-disk-line  
  - device
- remix  
  - device
- remix  
  fr-icon-u-disk-line

- **uninstall-fill**  
  fr-icon-uninstall-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-uninstall-fill

- **uninstall-line**  
  fr-icon-uninstall-line  
  - device
- remix  
  - device
- remix  
  fr-icon-uninstall-line

- **usb-fill**  
  fr-icon-usb-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-usb-fill

- **usb-line**  
  fr-icon-usb-line  
  - device
- remix  
  - device
- remix  
  fr-icon-usb-line

- **wifi-fill**  
  fr-icon-wifi-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-wifi-fill

- **wifi-line**  
  fr-icon-wifi-line  
  - device
- remix  
  - device
- remix  
  fr-icon-wifi-line

- **wifi-off-fill**  
  fr-icon-wifi-off-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-wifi-off-fill

- **wifi-off-line**  
  fr-icon-wifi-off-line  
  - device
- remix  
  - device
- remix  
  fr-icon-wifi-off-line

- **wireless-charging-fill**  
  fr-icon-wireless-charging-fill  
  - device
- remix  
  - device
- remix  
  fr-icon-wireless-charging-fill

- **wireless-charging-line**  
  fr-icon-wireless-charging-line  
  - device
- remix  
  - device
- remix  
  fr-icon-wireless-charging-line

#### Document

- **article-fill**  
  fr-icon-article-fill  
  - document
- remix  
  - document
- remix  
  fr-icon-article-fill

- **article-line**  
  fr-icon-article-line  
  - document
- remix  
  - document
- remix  
  fr-icon-article-line

- **book-2-fill**  
  fr-icon-book-2-fill  
  - document
- remix  
  - document
- remix  
  fr-icon-book-2-fill

- **book-2-line**  
  fr-icon-book-2-line  
  - document
- remix  
  - document
- remix  
  fr-icon-book-2-line

- **booklet-fill**  
  fr-icon-booklet-fill  
  - document
- remix  
  - document
- remix  
  fr-icon-booklet-fill

- **booklet-line**  
  fr-icon-booklet-line  
  - document
- remix  
  - document
- remix  
  fr-icon-booklet-line

- **clipboard-fill**  
  fr-icon-clipboard-fill  
  - document
- remix  
  - document
- remix  
  fr-icon-clipboard-fill

- **clipboard-line**  
  fr-icon-clipboard-line  
  - document
- remix  
  - document
- remix  
  fr-icon-clipboard-line

- **draft-fill**  
  fr-icon-draft-fill  
  - document
- remix  
  - document
- remix  
  fr-icon-draft-fill

- **draft-line**  
  fr-icon-draft-line  
  - document
- remix  
  - document
- remix  
  fr-icon-draft-line

- **file-add-fill**  
  fr-icon-file-add-fill  
  - document
- remix  
  - document
- remix  
  fr-icon-file-add-fill

- **file-add-line**  
  fr-icon-file-add-line  
  - document
- remix  
  - document
- remix  
  fr-icon-file-add-line

- **file-download-fill**  
  fr-icon-file-download-fill  
  - document
- remix  
  - document
- remix  
  fr-icon-file-download-fill

- **file-download-line**  
  fr-icon-file-download-line  
  - document
- remix  
  - document
- remix  
  fr-icon-file-download-line

- **file-fill**  
  fr-icon-file-fill  
  - document
- remix  
  - document
- remix  
  fr-icon-file-fill

- **file-line**  
  fr-icon-file-line  
  - document
- remix  
  - document
- remix  
  fr-icon-file-line

- **file-pdf-fill**  
  fr-icon-file-pdf-fill  
  - document
- remix  
  - document
- remix  
  fr-icon-file-pdf-fill

- **file-pdf-line**  
  fr-icon-file-pdf-line  
  - document
- remix  
  - document
- remix  
  fr-icon-file-pdf-line

- **file-text-fill**  
  fr-icon-file-text-fill  
  - document
- remix  
  - document
- remix  
  fr-icon-file-text-fill

- **file-text-line**  
  fr-icon-file-text-line  
  - document
- remix  
  - document
- remix  
  fr-icon-file-text-line

- **folder-2-fill**  
  fr-icon-folder-2-fill  
  - document
- remix  
  - document
- remix  
  fr-icon-folder-2-fill

- **folder-2-line**  
  fr-icon-folder-2-line  
  - document
- remix  
  - document
- remix  
  fr-icon-folder-2-line

- **newspaper-fill**  
  fr-icon-newspaper-fill  
  - document
- remix  
  - document
- remix  
  fr-icon-newspaper-fill

- **newspaper-line**  
  fr-icon-newspaper-line  
  - document
- remix  
  - document
- remix  
  fr-icon-newspaper-line

- **survey-fill**  
  fr-icon-survey-fill  
  - document
- remix  
  - document
- remix  
  fr-icon-survey-fill

- **survey-line**  
  fr-icon-survey-line  
  - document
- remix  
  - document
- remix  
  fr-icon-survey-line

- **todo-fill**  
  fr-icon-todo-fill  
  - document
- remix  
  - document
- remix  
  fr-icon-todo-fill

- **todo-line**  
  fr-icon-todo-line  
  - document
- remix  
  - document
- remix  
  fr-icon-todo-line

#### Editor

- **align-center**  
  fr-icon-align-center  
  - editor
- remix  
  - editor
- remix  
  fr-icon-align-center

- **align-justify**  
  fr-icon-align-justify  
  - editor
- remix  
  - editor
- remix  
  fr-icon-align-justify

- **align-left**  
  fr-icon-align-left  
  - editor
- remix  
  - editor
- remix  
  fr-icon-align-left

- **align-right**  
  fr-icon-align-right  
  - editor
- remix  
  - editor
- remix  
  fr-icon-align-right

- **code-block**  
  fr-icon-code-block  
  - editor
- remix  
  - editor
- remix  
  fr-icon-code-block

- **code-view**  
  fr-icon-code-view  
  - editor
- remix  
  - editor
- remix  
  fr-icon-code-view

- **font-color**  
  fr-icon-font-color  
  - editor
- remix  
  - editor
- remix  
  fr-icon-font-color

- **font-size**  
  fr-icon-font-size  
  - editor
- remix  
  - editor
- remix  
  fr-icon-font-size

- **format-clear**  
  fr-icon-format-clear  
  - editor
- remix  
  - editor
- remix  
  fr-icon-format-clear

- **bold**  
  fr-icon-bold  
  - editor
- dsfr  
  - editor
- dsfr  
  fr-icon-bold

- **highlight**  
  fr-icon-highlight  
  - editor
- dsfr  
  - editor
- dsfr  
  fr-icon-highlight

- **quote-fill**  
  fr-icon-quote-fill  
  - editor
- dsfr  
  - editor
- dsfr  
  fr-icon-quote-fill

- **quote-line**  
  fr-icon-quote-line  
  - editor
- dsfr  
  - editor
- dsfr  
  fr-icon-quote-line

- **h-1**  
  fr-icon-h-1  
  - editor
- remix  
  - editor
- remix  
  fr-icon-h-1

- **h-2**  
  fr-icon-h-2  
  - editor
- remix  
  - editor
- remix  
  fr-icon-h-2

- **h-3**  
  fr-icon-h-3  
  - editor
- remix  
  - editor
- remix  
  fr-icon-h-3

- **h-4**  
  fr-icon-h-4  
  - editor
- remix  
  - editor
- remix  
  fr-icon-h-4

- **h-5**  
  fr-icon-h-5  
  - editor
- remix  
  - editor
- remix  
  fr-icon-h-5

- **h-6**  
  fr-icon-h-6  
  - editor
- remix  
  - editor
- remix  
  fr-icon-h-6

- **hashtag**  
  fr-icon-hashtag  
  - editor
- remix  
  - editor
- remix  
  fr-icon-hashtag

- **indent-decrease**  
  fr-icon-indent-decrease  
  - editor
- remix  
  - editor
- remix  
  fr-icon-indent-decrease

- **indent-increase**  
  fr-icon-indent-increase  
  - editor
- remix  
  - editor
- remix  
  fr-icon-indent-increase

- **italic**  
  fr-icon-italic  
  - editor
- remix  
  - editor
- remix  
  fr-icon-italic

- **link-unlink**  
  fr-icon-link-unlink  
  - editor
- remix  
  - editor
- remix  
  fr-icon-link-unlink

- **link**  
  fr-icon-link  
  - editor
- remix  
  - editor
- remix  
  fr-icon-link

- **list-check**  
  fr-icon-list-check  
  - editor
- remix  
  - editor
- remix  
  fr-icon-list-check

- **list-ordered**  
  fr-icon-list-ordered  
  - editor
- remix  
  - editor
- remix  
  fr-icon-list-ordered

- **list-unordered**  
  fr-icon-list-unordered  
  - editor
- remix  
  - editor
- remix  
  fr-icon-list-unordered

- **question-mark**  
  fr-icon-question-mark  
  - editor
- remix  
  - editor
- remix  
  fr-icon-question-mark

- **separator**  
  fr-icon-separator  
  - editor
- remix  
  - editor
- remix  
  fr-icon-separator

- **sort-asc**  
  fr-icon-sort-asc  
  - editor
- remix  
  - editor
- remix  
  fr-icon-sort-asc

- **sort-desc**  
  fr-icon-sort-desc  
  - editor
- remix  
  - editor
- remix  
  fr-icon-sort-desc

- **space**  
  fr-icon-space  
  - editor
- remix  
  - editor
- remix  
  fr-icon-space

- **strikethrough**  
  fr-icon-strikethrough  
  - editor
- remix  
  - editor
- remix  
  fr-icon-strikethrough

- **subscript**  
  fr-icon-subscript  
  - editor
- remix  
  - editor
- remix  
  fr-icon-subscript

- **superscript**  
  fr-icon-superscript  
  - editor
- remix  
  - editor
- remix  
  fr-icon-superscript

- **table-2**  
  fr-icon-table-2  
  - editor
- remix  
  - editor
- remix  
  fr-icon-table-2

- **text-direction-r**  
  fr-icon-text-direction-r  
  - editor
- remix  
  - editor
- remix  
  fr-icon-text-direction-r

- **translate-2**  
  fr-icon-translate-2  
  - editor
- remix  
  - editor
- remix  
  fr-icon-translate-2

- **underline**  
  fr-icon-underline  
  - editor
- remix  
  - editor
- remix  
  fr-icon-underline

#### Finance

- **bank-card-fill**  
  fr-icon-bank-card-fill  
  - finance
- remix  
  - finance
- remix  
  fr-icon-bank-card-fill

- **bank-card-line**  
  fr-icon-bank-card-line  
  - finance
- remix  
  - finance
- remix  
  fr-icon-bank-card-line

- **coin-fill**  
  fr-icon-coin-fill  
  - finance
- remix  
  - finance
- remix  
  fr-icon-coin-fill

- **gift-fill**  
  fr-icon-gift-fill  
  - finance
- remix  
  - finance
- remix  
  fr-icon-gift-fill

- **gift-line**  
  fr-icon-gift-line  
  - finance
- remix  
  - finance
- remix  
  fr-icon-gift-line

- **money-euro-box-fill**  
  fr-icon-money-euro-box-fill  
  - finance
- remix  
  - finance
- remix  
  fr-icon-money-euro-box-fill

- **money-euro-box-line**  
  fr-icon-money-euro-box-line  
  - finance
- remix  
  - finance
- remix  
  fr-icon-money-euro-box-line

- **money-euro-circle-fill**  
  fr-icon-money-euro-circle-fill  
  - finance
- remix  
  - finance
- remix  
  fr-icon-money-euro-circle-fill

- **money-euro-circle-line**  
  fr-icon-money-euro-circle-line  
  - finance
- remix  
  - finance
- remix  
  fr-icon-money-euro-circle-line

- **secure-payment-fill**  
  fr-icon-secure-payment-fill  
  - finance
- remix  
  - finance
- remix  
  fr-icon-secure-payment-fill

- **secure-payment-line**  
  fr-icon-secure-payment-line  
  - finance
- remix  
  - finance
- remix  
  fr-icon-secure-payment-line

- **shopping-bag-fill**  
  fr-icon-shopping-bag-fill  
  - finance
- remix  
  - finance
- remix  
  fr-icon-shopping-bag-fill

- **shopping-bag-line**  
  fr-icon-shopping-bag-line  
  - finance
- remix  
  - finance
- remix  
  fr-icon-shopping-bag-line

- **shopping-cart-2-fill**  
  fr-icon-shopping-cart-2-fill  
  - finance
- remix  
  - finance
- remix  
  fr-icon-shopping-cart-2-fill

- **shopping-cart-2-line**  
  fr-icon-shopping-cart-2-line  
  - finance
- remix  
  - finance
- remix  
  fr-icon-shopping-cart-2-line

- **trophy-fill**  
  fr-icon-trophy-fill  
  - finance
- remix  
  - finance
- remix  
  fr-icon-trophy-fill

- **trophy-line**  
  fr-icon-trophy-line  
  - finance
- remix  
  - finance
- remix  
  fr-icon-trophy-line

#### Health

- **capsule-fill**  
  fr-icon-capsule-fill  
  - health
- remix  
  - health
- remix  
  fr-icon-capsule-fill

- **capsule-line**  
  fr-icon-capsule-line  
  - health
- remix  
  - health
- remix  
  fr-icon-capsule-line

- **dislike-fill**  
  fr-icon-dislike-fill  
  - health
- remix  
  - health
- remix  
  fr-icon-dislike-fill

- **dislike-line**  
  fr-icon-dislike-line  
  - health
- remix  
  - health
- remix  
  fr-icon-dislike-line

- **dossier-fill**  
  fr-icon-dossier-fill  
  - health
- remix  
  - health
- remix  
  fr-icon-dossier-fill

- **dossier-line**  
  fr-icon-dossier-line  
  - health
- remix  
  - health
- remix  
  fr-icon-dossier-line

- **first-aid-kit-fill**  
  fr-icon-first-aid-kit-fill  
  - health
- remix  
  - health
- remix  
  fr-icon-first-aid-kit-fill

- **first-aid-kit-line**  
  fr-icon-first-aid-kit-line  
  - health
- remix  
  - health
- remix  
  fr-icon-first-aid-kit-line

- **hand-sanitizer-fill**  
  fr-icon-hand-sanitizer-fill  
  - health
- remix  
  - health
- remix  
  fr-icon-hand-sanitizer-fill

- **hand-sanitizer-line**  
  fr-icon-hand-sanitizer-line  
  - health
- remix  
  - health
- remix  
  fr-icon-hand-sanitizer-line

- **health-book-fill**  
  fr-icon-health-book-fill  
  - health
- remix  
  - health
- remix  
  fr-icon-health-book-fill

- **health-book-line**  
  fr-icon-health-book-line  
  - health
- remix  
  - health
- remix  
  fr-icon-health-book-line

- **heart-fill**  
  fr-icon-heart-fill  
  - health
- remix  
  - health
- remix  
  fr-icon-heart-fill

- **heart-line**  
  fr-icon-heart-line  
  - health
- remix  
  - health
- remix  
  fr-icon-heart-line

- **heart-pulse-fill**  
  fr-icon-heart-pulse-fill  
  - health
- remix  
  - health
- remix  
  fr-icon-heart-pulse-fill

- **heart-pulse-line**  
  fr-icon-heart-pulse-line  
  - health
- remix  
  - health
- remix  
  fr-icon-heart-pulse-line

- **lungs-fill**  
  fr-icon-lungs-fill  
  - health
- remix  
  - health
- remix  
  fr-icon-lungs-fill

- **lungs-line**  
  fr-icon-lungs-line  
  - health
- remix  
  - health
- remix  
  fr-icon-lungs-line

- **medicine-bottle-fill**  
  fr-icon-medicine-bottle-fill  
  - health
- remix  
  - health
- remix  
  fr-icon-medicine-bottle-fill

- **medicine-bottle-line**  
  fr-icon-medicine-bottle-line  
  - health
- remix  
  - health
- remix  
  fr-icon-medicine-bottle-line

- **mental-health-fill**  
  fr-icon-mental-health-fill  
  - health
- remix  
  - health
- remix  
  fr-icon-mental-health-fill

- **mental-health-line**  
  fr-icon-mental-health-line  
  - health
- remix  
  - health
- remix  
  fr-icon-mental-health-line

- **microscope-fill**  
  fr-icon-microscope-fill  
  - health
- remix  
  - health
- remix  
  fr-icon-microscope-fill

- **microscope-line**  
  fr-icon-microscope-line  
  - health
- remix  
  - health
- remix  
  fr-icon-microscope-line

- **psychotherapy-fill**  
  fr-icon-psychotherapy-fill  
  - health
- remix  
  - health
- remix  
  fr-icon-psychotherapy-fill

- **psychotherapy-line**  
  fr-icon-psychotherapy-line  
  - health
- remix  
  - health
- remix  
  fr-icon-psychotherapy-line

- **pulse-line**  
  fr-icon-pulse-line  
  - health
- remix  
  - health
- remix  
  fr-icon-pulse-line

- **stethoscope-fill**  
  fr-icon-stethoscope-fill  
  - health
- remix  
  - health
- remix  
  fr-icon-stethoscope-fill

- **stethoscope-line**  
  fr-icon-stethoscope-line  
  - health
- remix  
  - health
- remix  
  fr-icon-stethoscope-line

- **surgical-mask-fill**  
  fr-icon-surgical-mask-fill  
  - health
- remix  
  - health
- remix  
  fr-icon-surgical-mask-fill

- **surgical-mask-line**  
  fr-icon-surgical-mask-line  
  - health
- remix  
  - health
- remix  
  fr-icon-surgical-mask-line

- **syringe-fill**  
  fr-icon-syringe-fill  
  - health
- remix  
  - health
- remix  
  fr-icon-syringe-fill

- **syringe-line**  
  fr-icon-syringe-line  
  - health
- remix  
  - health
- remix  
  fr-icon-syringe-line

- **test-tube-fill**  
  fr-icon-test-tube-fill  
  - health
- remix  
  - health
- remix  
  fr-icon-test-tube-fill

- **test-tube-line**  
  fr-icon-test-tube-line  
  - health
- remix  
  - health
- remix  
  fr-icon-test-tube-line

- **thermometer-fill**  
  fr-icon-thermometer-fill  
  - health
- remix  
  - health
- remix  
  fr-icon-thermometer-fill

- **thermometer-line**  
  fr-icon-thermometer-line  
  - health
- remix  
  - health
- remix  
  fr-icon-thermometer-line

- **virus-fill**  
  fr-icon-virus-fill  
  - health
- remix  
  - health
- remix  
  fr-icon-virus-fill

- **virus-line**  
  fr-icon-virus-line  
  - health
- remix  
  - health
- remix  
  fr-icon-virus-line

#### Logo

- **bluesky-fill**  
  fr-icon-bluesky-fill  
  - logo
- remix  
  - logo
- remix  
  fr-icon-bluesky-fill

- **bluesky-line**  
  fr-icon-bluesky-line  
  - logo
- remix  
  - logo
- remix  
  fr-icon-bluesky-line

- **chrome-fill**  
  fr-icon-chrome-fill  
  - logo
- remix  
  - logo
- remix  
  fr-icon-chrome-fill

- **chrome-line**  
  fr-icon-chrome-line  
  - logo
- remix  
  - logo
- remix  
  fr-icon-chrome-line

- **edge-fill**  
  fr-icon-edge-fill  
  - logo
- remix  
  - logo
- remix  
  fr-icon-edge-fill

- **edge-line**  
  fr-icon-edge-line  
  - logo
- remix  
  - logo
- remix  
  fr-icon-edge-line

- **facebook-circle-fill**  
  fr-icon-facebook-circle-fill  
  - logo
- remix  
  - logo
- remix  
  fr-icon-facebook-circle-fill

- **facebook-circle-line**  
  fr-icon-facebook-circle-line  
  - logo
- remix  
  - logo
- remix  
  fr-icon-facebook-circle-line

- **firefox-fill**  
  fr-icon-firefox-fill  
  - logo
- remix  
  - logo
- remix  
  fr-icon-firefox-fill

- **firefox-line**  
  fr-icon-firefox-line  
  - logo
- remix  
  - logo
- remix  
  fr-icon-firefox-line

- **dailymotion-fill**  
  fr-icon-dailymotion-fill  
  - logo
- dsfr  
  - logo
- dsfr  
  fr-icon-dailymotion-fill

- **dailymotion-line**  
  fr-icon-dailymotion-line  
  - logo
- dsfr  
  - logo
- dsfr  
  fr-icon-dailymotion-line

- **tiktok-fill**  
  fr-icon-tiktok-fill  
  - logo
- dsfr  
  - logo
- dsfr  
  fr-icon-tiktok-fill

- **tiktok-line**  
  fr-icon-tiktok-line  
  - logo
- dsfr  
  - logo
- dsfr  
  fr-icon-tiktok-line

- **github-fill**  
  fr-icon-github-fill  
  - logo
- remix  
  - logo
- remix  
  fr-icon-github-fill

- **github-line**  
  fr-icon-github-line  
  - logo
- remix  
  - logo
- remix  
  fr-icon-github-line

- **google-fill**  
  fr-icon-google-fill  
  - logo
- remix  
  - logo
- remix  
  fr-icon-google-fill

- **google-line**  
  fr-icon-google-line  
  - logo
- remix  
  - logo
- remix  
  fr-icon-google-line

- **ie-fill**  
  fr-icon-ie-fill  
  - logo
- remix  
  - logo
- remix  
  fr-icon-ie-fill

- **ie-line**  
  fr-icon-ie-line  
  - logo
- remix  
  - logo
- remix  
  fr-icon-ie-line

- **instagram-fill**  
  fr-icon-instagram-fill  
  - logo
- remix  
  - logo
- remix  
  fr-icon-instagram-fill

- **instagram-line**  
  fr-icon-instagram-line  
  - logo
- remix  
  - logo
- remix  
  fr-icon-instagram-line

- **linkedin-box-fill**  
  fr-icon-linkedin-box-fill  
  - logo
- remix  
  - logo
- remix  
  fr-icon-linkedin-box-fill

- **linkedin-box-line**  
  fr-icon-linkedin-box-line  
  - logo
- remix  
  - logo
- remix  
  fr-icon-linkedin-box-line

- **mastodon-fill**  
  fr-icon-mastodon-fill  
  - logo
- remix  
  - logo
- remix  
  fr-icon-mastodon-fill

- **mastodon-line**  
  fr-icon-mastodon-line  
  - logo
- remix  
  - logo
- remix  
  fr-icon-mastodon-line

- **npmjs-fill**  
  fr-icon-npmjs-fill  
  - logo
- remix  
  - logo
- remix  
  fr-icon-npmjs-fill

- **npmjs-line**  
  fr-icon-npmjs-line  
  - logo
- remix  
  - logo
- remix  
  fr-icon-npmjs-line

- **remixicon-fill**  
  fr-icon-remixicon-fill  
  - logo
- remix  
  - logo
- remix  
  fr-icon-remixicon-fill

- **remixicon-line**  
  fr-icon-remixicon-line  
  - logo
- remix  
  - logo
- remix  
  fr-icon-remixicon-line

- **safari-fill**  
  fr-icon-safari-fill  
  - logo
- remix  
  - logo
- remix  
  fr-icon-safari-fill

- **safari-line**  
  fr-icon-safari-line  
  - logo
- remix  
  - logo
- remix  
  fr-icon-safari-line

- **slack-fill**  
  fr-icon-slack-fill  
  - logo
- remix  
  - logo
- remix  
  fr-icon-slack-fill

- **slack-line**  
  fr-icon-slack-line  
  - logo
- remix  
  - logo
- remix  
  fr-icon-slack-line

- **snapchat-fill**  
  fr-icon-snapchat-fill  
  - logo
- remix  
  - logo
- remix  
  fr-icon-snapchat-fill

- **snapchat-line**  
  fr-icon-snapchat-line  
  - logo
- remix  
  - logo
- remix  
  fr-icon-snapchat-line

- **telegram-fill**  
  fr-icon-telegram-fill  
  - logo
- remix  
  - logo
- remix  
  fr-icon-telegram-fill

- **telegram-line**  
  fr-icon-telegram-line  
  - logo
- remix  
  - logo
- remix  
  fr-icon-telegram-line

- **threads-fill**  
  fr-icon-threads-fill  
  - logo
- remix  
  - logo
- remix  
  fr-icon-threads-fill

- **threads-line**  
  fr-icon-threads-line  
  - logo
- remix  
  - logo
- remix  
  fr-icon-threads-line

- **twitch-fill**  
  fr-icon-twitch-fill  
  - logo
- remix  
  - logo
- remix  
  fr-icon-twitch-fill

- **twitch-line**  
  fr-icon-twitch-line  
  - logo
- remix  
  - logo
- remix  
  fr-icon-twitch-line

- **twitter-fill**  
  fr-icon-twitter-fill  
  - logo
- remix  
  - logo
- remix  
  fr-icon-twitter-fill

- **twitter-line**  
  fr-icon-twitter-line  
  - logo
- remix  
  - logo
- remix  
  fr-icon-twitter-line

- **twitter-x-fill**  
  fr-icon-twitter-x-fill  
  - logo
- remix  
  - logo
- remix  
  fr-icon-twitter-x-fill

- **twitter-x-line**  
  fr-icon-twitter-x-line  
  - logo
- remix  
  - logo
- remix  
  fr-icon-twitter-x-line

- **vimeo-fill**  
  fr-icon-vimeo-fill  
  - logo
- remix  
  - logo
- remix  
  fr-icon-vimeo-fill

- **vimeo-line**  
  fr-icon-vimeo-line  
  - logo
- remix  
  - logo
- remix  
  fr-icon-vimeo-line

- **vuejs-fill**  
  fr-icon-vuejs-fill  
  - logo
- remix  
  - logo
- remix  
  fr-icon-vuejs-fill

- **vuejs-line**  
  fr-icon-vuejs-line  
  - logo
- remix  
  - logo
- remix  
  fr-icon-vuejs-line

- **whatsapp-fill**  
  fr-icon-whatsapp-fill  
  - logo
- remix  
  - logo
- remix  
  fr-icon-whatsapp-fill

- **whatsapp-line**  
  fr-icon-whatsapp-line  
  - logo
- remix  
  - logo
- remix  
  fr-icon-whatsapp-line

- **youtube-fill**  
  fr-icon-youtube-fill  
  - logo
- remix  
  - logo
- remix  
  fr-icon-youtube-fill

- **youtube-line**  
  fr-icon-youtube-line  
  - logo
- remix  
  - logo
- remix  
  fr-icon-youtube-line

#### Map

- **anchor-fill**  
  fr-icon-anchor-fill  
  - map
- remix  
  - map
- remix  
  fr-icon-anchor-fill

- **anchor-line**  
  fr-icon-anchor-line  
  - map
- remix  
  - map
- remix  
  fr-icon-anchor-line

- **bike-fill**  
  fr-icon-bike-fill  
  - map
- remix  
  - map
- remix  
  fr-icon-bike-fill

- **bike-line**  
  fr-icon-bike-line  
  - map
- remix  
  - map
- remix  
  fr-icon-bike-line

- **bus-fill**  
  fr-icon-bus-fill  
  - map
- remix  
  - map
- remix  
  fr-icon-bus-fill

- **bus-line**  
  fr-icon-bus-line  
  - map
- remix  
  - map
- remix  
  fr-icon-bus-line

- **car-fill**  
  fr-icon-car-fill  
  - map
- remix  
  - map
- remix  
  fr-icon-car-fill

- **car-line**  
  fr-icon-car-line  
  - map
- remix  
  - map
- remix  
  fr-icon-car-line

- **caravan-fill**  
  fr-icon-caravan-fill  
  - map
- remix  
  - map
- remix  
  fr-icon-caravan-fill

- **caravan-line**  
  fr-icon-caravan-line  
  - map
- remix  
  - map
- remix  
  fr-icon-caravan-line

- **charging-pile-2-fill**  
  fr-icon-charging-pile-2-fill  
  - map
- remix  
  - map
- remix  
  fr-icon-charging-pile-2-fill

- **charging-pile-2-line**  
  fr-icon-charging-pile-2-line  
  - map
- remix  
  - map
- remix  
  fr-icon-charging-pile-2-line

- **compass-3-fill**  
  fr-icon-compass-3-fill  
  - map
- remix  
  - map
- remix  
  fr-icon-compass-3-fill

- **compass-3-line**  
  fr-icon-compass-3-line  
  - map
- remix  
  - map
- remix  
  fr-icon-compass-3-line

- **cup-fill**  
  fr-icon-cup-fill  
  - map
- remix  
  - map
- remix  
  fr-icon-cup-fill

- **cup-line**  
  fr-icon-cup-line  
  - map
- remix  
  - map
- remix  
  fr-icon-cup-line

- **earth-fill**  
  fr-icon-earth-fill  
  - map
- remix  
  - map
- remix  
  fr-icon-earth-fill

- **earth-line**  
  fr-icon-earth-line  
  - map
- remix  
  - map
- remix  
  fr-icon-earth-line

- **france-fill**  
  fr-icon-france-fill  
  - map
- remix  
  - map
- remix  
  fr-icon-france-fill

- **france-line**  
  fr-icon-france-line  
  - map
- remix  
  - map
- remix  
  fr-icon-france-line

- **gas-station-fill**  
  fr-icon-gas-station-fill  
  - map
- remix  
  - map
- remix  
  fr-icon-gas-station-fill

- **gas-station-line**  
  fr-icon-gas-station-line  
  - map
- remix  
  - map
- remix  
  fr-icon-gas-station-line

- **goblet-fill**  
  fr-icon-goblet-fill  
  - map
- remix  
  - map
- remix  
  fr-icon-goblet-fill

- **goblet-line**  
  fr-icon-goblet-line  
  - map
- remix  
  - map
- remix  
  fr-icon-goblet-line

- **map-pin-2-fill**  
  fr-icon-map-pin-2-fill  
  - map
- remix  
  - map
- remix  
  fr-icon-map-pin-2-fill

- **map-pin-2-line**  
  fr-icon-map-pin-2-line  
  - map
- remix  
  - map
- remix  
  fr-icon-map-pin-2-line

- **map-pin-user-fill**  
  fr-icon-map-pin-user-fill  
  - map
- remix  
  - map
- remix  
  fr-icon-map-pin-user-fill

- **map-pin-user-line**  
  fr-icon-map-pin-user-line  
  - map
- remix  
  - map
- remix  
  fr-icon-map-pin-user-line

- **motorbike-fill**  
  fr-icon-motorbike-fill  
  - map
- remix  
  - map
- remix  
  fr-icon-motorbike-fill

- **motorbike-line**  
  fr-icon-motorbike-line  
  - map
- remix  
  - map
- remix  
  fr-icon-motorbike-line

- **passport-fill**  
  fr-icon-passport-fill  
  - map
- remix  
  - map
- remix  
  fr-icon-passport-fill

- **passport-line**  
  fr-icon-passport-line  
  - map
- remix  
  - map
- remix  
  fr-icon-passport-line

- **restaurant-fill**  
  fr-icon-restaurant-fill  
  - map
- remix  
  - map
- remix  
  fr-icon-restaurant-fill

- **restaurant-line**  
  fr-icon-restaurant-line  
  - map
- remix  
  - map
- remix  
  fr-icon-restaurant-line

- **road-map-fill**  
  fr-icon-road-map-fill  
  - map
- remix  
  - map
- remix  
  fr-icon-road-map-fill

- **road-map-line**  
  fr-icon-road-map-line  
  - map
- remix  
  - map
- remix  
  fr-icon-road-map-line

- **sailboat-fill**  
  fr-icon-sailboat-fill  
  - map
- remix  
  - map
- remix  
  fr-icon-sailboat-fill

- **sailboat-line**  
  fr-icon-sailboat-line  
  - map
- remix  
  - map
- remix  
  fr-icon-sailboat-line

- **ship-2-fill**  
  fr-icon-ship-2-fill  
  - map
- remix  
  - map
- remix  
  fr-icon-ship-2-fill

- **ship-2-line**  
  fr-icon-ship-2-line  
  - map
- remix  
  - map
- remix  
  fr-icon-ship-2-line

- **signal-tower-fill**  
  fr-icon-signal-tower-fill  
  - map
- remix  
  - map
- remix  
  fr-icon-signal-tower-fill

- **signal-tower-line**  
  fr-icon-signal-tower-line  
  - map
- remix  
  - map
- remix  
  fr-icon-signal-tower-line

- **suitcase-2-fill**  
  fr-icon-suitcase-2-fill  
  - map
- remix  
  - map
- remix  
  fr-icon-suitcase-2-fill

- **suitcase-2-line**  
  fr-icon-suitcase-2-line  
  - map
- remix  
  - map
- remix  
  fr-icon-suitcase-2-line

- **taxi-fill**  
  fr-icon-taxi-fill  
  - map
- remix  
  - map
- remix  
  fr-icon-taxi-fill

- **taxi-line**  
  fr-icon-taxi-line  
  - map
- remix  
  - map
- remix  
  fr-icon-taxi-line

- **train-fill**  
  fr-icon-train-fill  
  - map
- remix  
  - map
- remix  
  fr-icon-train-fill

- **train-line**  
  fr-icon-train-line  
  - map
- remix  
  - map
- remix  
  fr-icon-train-line

#### Media

- **camera-fill**  
  fr-icon-camera-fill  
  - media
- remix  
  - media
- remix  
  fr-icon-camera-fill

- **camera-line**  
  fr-icon-camera-line  
  - media
- remix  
  - media
- remix  
  fr-icon-camera-line

- **clapperboard-fill**  
  fr-icon-clapperboard-fill  
  - media
- remix  
  - media
- remix  
  fr-icon-clapperboard-fill

- **clapperboard-line**  
  fr-icon-clapperboard-line  
  - media
- remix  
  - media
- remix  
  fr-icon-clapperboard-line

- **equalizer-fill**  
  fr-icon-equalizer-fill  
  - media
- remix  
  - media
- remix  
  fr-icon-equalizer-fill

- **equalizer-line**  
  fr-icon-equalizer-line  
  - media
- remix  
  - media
- remix  
  fr-icon-equalizer-line

- **film-fill**  
  fr-icon-film-fill  
  - media
- remix  
  - media
- remix  
  fr-icon-film-fill

- **film-line**  
  fr-icon-film-line  
  - media
- remix  
  - media
- remix  
  fr-icon-film-line

- **fullscreen-line**  
  fr-icon-fullscreen-line  
  - media
- remix  
  - media
- remix  
  fr-icon-fullscreen-line

- **gallery-fill**  
  fr-icon-gallery-fill  
  - media
- remix  
  - media
- remix  
  fr-icon-gallery-fill

- **gallery-line**  
  fr-icon-gallery-line  
  - media
- remix  
  - media
- remix  
  fr-icon-gallery-line

- **headphone-fill**  
  fr-icon-headphone-fill  
  - media
- remix  
  - media
- remix  
  fr-icon-headphone-fill

- **headphone-line**  
  fr-icon-headphone-line  
  - media
- remix  
  - media
- remix  
  fr-icon-headphone-line

- **image-add-fill**  
  fr-icon-image-add-fill  
  - media
- remix  
  - media
- remix  
  fr-icon-image-add-fill

- **image-add-line**  
  fr-icon-image-add-line  
  - media
- remix  
  - media
- remix  
  fr-icon-image-add-line

- **image-edit-fill**  
  fr-icon-image-edit-fill  
  - media
- remix  
  - media
- remix  
  fr-icon-image-edit-fill

- **image-edit-line**  
  fr-icon-image-edit-line  
  - media
- remix  
  - media
- remix  
  fr-icon-image-edit-line

- **image-fill**  
  fr-icon-image-fill  
  - media
- remix  
  - media
- remix  
  fr-icon-image-fill

- **image-line**  
  fr-icon-image-line  
  - media
- remix  
  - media
- remix  
  fr-icon-image-line

- **live-fill**  
  fr-icon-live-fill  
  - media
- remix  
  - media
- remix  
  fr-icon-live-fill

- **live-line**  
  fr-icon-live-line  
  - media
- remix  
  - media
- remix  
  fr-icon-live-line

- **mic-fill**  
  fr-icon-mic-fill  
  - media
- remix  
  - media
- remix  
  fr-icon-mic-fill

- **mic-line**  
  fr-icon-mic-line  
  - media
- remix  
  - media
- remix  
  fr-icon-mic-line

- **music-2-fill**  
  fr-icon-music-2-fill  
  - media
- remix  
  - media
- remix  
  fr-icon-music-2-fill

- **music-2-line**  
  fr-icon-music-2-line  
  - media
- remix  
  - media
- remix  
  fr-icon-music-2-line

- **notification-3-fill**  
  fr-icon-notification-3-fill  
  - media
- remix  
  - media
- remix  
  fr-icon-notification-3-fill

- **notification-3-line**  
  fr-icon-notification-3-line  
  - media
- remix  
  - media
- remix  
  fr-icon-notification-3-line

- **pause-circle-fill**  
  fr-icon-pause-circle-fill  
  - media
- remix  
  - media
- remix  
  fr-icon-pause-circle-fill

- **pause-circle-line**  
  fr-icon-pause-circle-line  
  - media
- remix  
  - media
- remix  
  fr-icon-pause-circle-line

- **play-circle-fill**  
  fr-icon-play-circle-fill  
  - media
- remix  
  - media
- remix  
  fr-icon-play-circle-fill

- **play-circle-line**  
  fr-icon-play-circle-line  
  - media
- remix  
  - media
- remix  
  fr-icon-play-circle-line

- **stop-circle-fill**  
  fr-icon-stop-circle-fill  
  - media
- remix  
  - media
- remix  
  fr-icon-stop-circle-fill

- **stop-circle-line**  
  fr-icon-stop-circle-line  
  - media
- remix  
  - media
- remix  
  fr-icon-stop-circle-line

- **volume-down-fill**  
  fr-icon-volume-down-fill  
  - media
- remix  
  - media
- remix  
  fr-icon-volume-down-fill

- **volume-down-line**  
  fr-icon-volume-down-line  
  - media
- remix  
  - media
- remix  
  fr-icon-volume-down-line

- **volume-mute-fill**  
  fr-icon-volume-mute-fill  
  - media
- remix  
  - media
- remix  
  fr-icon-volume-mute-fill

- **volume-mute-line**  
  fr-icon-volume-mute-line  
  - media
- remix  
  - media
- remix  
  fr-icon-volume-mute-line

- **volume-up-fill**  
  fr-icon-volume-up-fill  
  - media
- remix  
  - media
- remix  
  fr-icon-volume-up-fill

- **volume-up-line**  
  fr-icon-volume-up-line  
  - media
- remix  
  - media
- remix  
  fr-icon-volume-up-line

#### Others

- **accessibility-fill**  
  fr-icon-accessibility-fill  
  - others
- dsfr  
  - others
- dsfr  
  fr-icon-accessibility-fill

- **accessibility-line**  
  fr-icon-accessibility-line  
  - others
- dsfr  
  - others
- dsfr  
  fr-icon-accessibility-line

- **ear-off-fill**  
  fr-icon-ear-off-fill  
  - others
- dsfr  
  - others
- dsfr  
  fr-icon-ear-off-fill

- **ear-off-line**  
  fr-icon-ear-off-line  
  - others
- dsfr  
  - others
- dsfr  
  fr-icon-ear-off-line

- **mental-disabilities-fill**  
  fr-icon-mental-disabilities-fill  
  - others
- dsfr  
  - others
- dsfr  
  fr-icon-mental-disabilities-fill

- **mental-disabilities-line**  
  fr-icon-mental-disabilities-line  
  - others
- dsfr  
  - others
- dsfr  
  fr-icon-mental-disabilities-line

- **sign-language-fill**  
  fr-icon-sign-language-fill  
  - others
- dsfr  
  - others
- dsfr  
  fr-icon-sign-language-fill

- **sign-language-line**  
  fr-icon-sign-language-line  
  - others
- dsfr  
  - others
- dsfr  
  fr-icon-sign-language-line

- **leaf-fill**  
  fr-icon-leaf-fill  
  - others
- remix  
  - others
- remix  
  fr-icon-leaf-fill

- **leaf-line**  
  fr-icon-leaf-line  
  - others
- remix  
  - others
- remix  
  fr-icon-leaf-line

- **lightbulb-fill**  
  fr-icon-lightbulb-fill  
  - others
- remix  
  - others
- remix  
  fr-icon-lightbulb-fill

- **lightbulb-line**  
  fr-icon-lightbulb-line  
  - others
- remix  
  - others
- remix  
  fr-icon-lightbulb-line

- **plant-fill**  
  fr-icon-plant-fill  
  - others
- remix  
  - others
- remix  
  fr-icon-plant-fill

- **plant-line**  
  fr-icon-plant-line  
  - others
- remix  
  - others
- remix  
  fr-icon-plant-line

- **recycle-fill**  
  fr-icon-recycle-fill  
  - others
- remix  
  - others
- remix  
  fr-icon-recycle-fill

- **recycle-line**  
  fr-icon-recycle-line  
  - others
- remix  
  - others
- remix  
  fr-icon-recycle-line

- **scales-3-fill**  
  fr-icon-scales-3-fill  
  - others
- remix  
  - others
- remix  
  fr-icon-scales-3-fill

- **scales-3-line**  
  fr-icon-scales-3-line  
  - others
- remix  
  - others
- remix  
  fr-icon-scales-3-line

- **seedling-fill**  
  fr-icon-seedling-fill  
  - others
- remix  
  - others
- remix  
  fr-icon-seedling-fill

- **seedling-line**  
  fr-icon-seedling-line  
  - others
- remix  
  - others
- remix  
  fr-icon-seedling-line

- **umbrella-fill**  
  fr-icon-umbrella-fill  
  - others
- remix  
  - others
- remix  
  fr-icon-umbrella-fill

- **umbrella-line**  
  fr-icon-umbrella-line  
  - others
- remix  
  - others
- remix  
  fr-icon-umbrella-line

- **wheelchair-fill**  
  fr-icon-wheelchair-fill  
  - others
- remix  
  - others
- remix  
  fr-icon-wheelchair-fill

- **wheelchair-line**  
  fr-icon-wheelchair-line  
  - others
- remix  
  - others
- remix  
  fr-icon-wheelchair-line

#### System

- **add-circle-fill**  
  fr-icon-add-circle-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-add-circle-fill

- **add-circle-line**  
  fr-icon-add-circle-line  
  - system
- remix  
  - system
- remix  
  fr-icon-add-circle-line

- **add-line**  
  fr-icon-add-line  
  - system
- remix  
  - system
- remix  
  fr-icon-add-line

- **alarm-warning-fill**  
  fr-icon-alarm-warning-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-alarm-warning-fill

- **alarm-warning-line**  
  fr-icon-alarm-warning-line  
  - system
- remix  
  - system
- remix  
  fr-icon-alarm-warning-line

- **alert-fill**  
  fr-icon-alert-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-alert-fill

- **alert-line**  
  fr-icon-alert-line  
  - system
- remix  
  - system
- remix  
  fr-icon-alert-line

- **check-line**  
  fr-icon-check-line  
  - system
- remix  
  - system
- remix  
  fr-icon-check-line

- **checkbox-circle-fill**  
  fr-icon-checkbox-circle-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-checkbox-circle-fill

- **checkbox-circle-line**  
  fr-icon-checkbox-circle-line  
  - system
- remix  
  - system
- remix  
  fr-icon-checkbox-circle-line

- **checkbox-fill**  
  fr-icon-checkbox-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-checkbox-fill

- **checkbox-line**  
  fr-icon-checkbox-line  
  - system
- remix  
  - system
- remix  
  fr-icon-checkbox-line

- **close-circle-fill**  
  fr-icon-close-circle-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-close-circle-fill

- **close-circle-line**  
  fr-icon-close-circle-line  
  - system
- remix  
  - system
- remix  
  fr-icon-close-circle-line

- **close-line**  
  fr-icon-close-line  
  - system
- remix  
  - system
- remix  
  fr-icon-close-line

- **delete-bin-fill**  
  fr-icon-delete-bin-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-delete-bin-fill

- **delete-bin-line**  
  fr-icon-delete-bin-line  
  - system
- remix  
  - system
- remix  
  fr-icon-delete-bin-line

- **download-fill**  
  fr-icon-download-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-download-fill

- **download-line**  
  fr-icon-download-line  
  - system
- remix  
  - system
- remix  
  fr-icon-download-line

- **error-warning-fill**  
  fr-icon-error-warning-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-error-warning-fill

- **error-warning-line**  
  fr-icon-error-warning-line  
  - system
- remix  
  - system
- remix  
  fr-icon-error-warning-line

- **external-link-fill**  
  fr-icon-external-link-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-external-link-fill

- **external-link-line**  
  fr-icon-external-link-line  
  - system
- remix  
  - system
- remix  
  fr-icon-external-link-line

- **eye-fill**  
  fr-icon-eye-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-eye-fill

- **eye-line**  
  fr-icon-eye-line  
  - system
- remix  
  - system
- remix  
  fr-icon-eye-line

- **eye-off-fill**  
  fr-icon-eye-off-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-eye-off-fill

- **eye-off-line**  
  fr-icon-eye-off-line  
  - system
- remix  
  - system
- remix  
  fr-icon-eye-off-line

- **filter-fill**  
  fr-icon-filter-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-filter-fill

- **filter-line**  
  fr-icon-filter-line  
  - system
- remix  
  - system
- remix  
  fr-icon-filter-line

- **alert-warning-2-fill**  
  fr-icon-alert-warning-2-fill  
  - system
- dsfr  
  - system
- dsfr  
  fr-icon-alert-warning-2-fill

- **alert-warning-fill**  
  fr-icon-alert-warning-fill  
  - system
- dsfr  
  - system
- dsfr  
  fr-icon-alert-warning-fill

- **capslock-line**  
  fr-icon-capslock-line  
  - system
- dsfr  
  - system
- dsfr  
  fr-icon-capslock-line

- **equal-circle-fill**  
  fr-icon-equal-circle-fill  
  - system
- dsfr  
  - system
- dsfr  
  fr-icon-equal-circle-fill

- **error-fill**  
  fr-icon-error-fill  
  - system
- dsfr  
  - system
- dsfr  
  fr-icon-error-fill

- **error-line**  
  fr-icon-error-line  
  - system
- dsfr  
  - system
- dsfr  
  fr-icon-error-line

- **info-fill**  
  fr-icon-info-fill  
  - system
- dsfr  
  - system
- dsfr  
  fr-icon-info-fill

- **info-line**  
  fr-icon-info-line  
  - system
- dsfr  
  - system
- dsfr  
  fr-icon-info-line

- **success-fill**  
  fr-icon-success-fill  
  - system
- dsfr  
  - system
- dsfr  
  fr-icon-success-fill

- **success-line**  
  fr-icon-success-line  
  - system
- dsfr  
  - system
- dsfr  
  fr-icon-success-line

- **theme-fill**  
  fr-icon-theme-fill  
  - system
- dsfr  
  - system
- dsfr  
  fr-icon-theme-fill

- **warning-fill**  
  fr-icon-warning-fill  
  - system
- dsfr  
  - system
- dsfr  
  fr-icon-warning-fill

- **warning-line**  
  fr-icon-warning-line  
  - system
- dsfr  
  - system
- dsfr  
  fr-icon-warning-line

- **information-fill**  
  fr-icon-information-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-information-fill

- **information-line**  
  fr-icon-information-line  
  - system
- remix  
  - system
- remix  
  fr-icon-information-line

- **lock-fill**  
  fr-icon-lock-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-lock-fill

- **lock-line**  
  fr-icon-lock-line  
  - system
- remix  
  - system
- remix  
  fr-icon-lock-line

- **lock-unlock-fill**  
  fr-icon-lock-unlock-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-lock-unlock-fill

- **lock-unlock-line**  
  fr-icon-lock-unlock-line  
  - system
- remix  
  - system
- remix  
  fr-icon-lock-unlock-line

- **logout-box-r-fill**  
  fr-icon-logout-box-r-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-logout-box-r-fill

- **logout-box-r-line**  
  fr-icon-logout-box-r-line  
  - system
- remix  
  - system
- remix  
  fr-icon-logout-box-r-line

- **menu-2-fill**  
  fr-icon-menu-2-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-menu-2-fill

- **menu-fill**  
  fr-icon-menu-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-menu-fill

- **more-fill**  
  fr-icon-more-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-more-fill

- **more-line**  
  fr-icon-more-line  
  - system
- remix  
  - system
- remix  
  fr-icon-more-line

- **notification-badge-fill**  
  fr-icon-notification-badge-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-notification-badge-fill

- **notification-badge-line**  
  fr-icon-notification-badge-line  
  - system
- remix  
  - system
- remix  
  fr-icon-notification-badge-line

- **question-fill**  
  fr-icon-question-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-question-fill

- **question-line**  
  fr-icon-question-line  
  - system
- remix  
  - system
- remix  
  fr-icon-question-line

- **refresh-fill**  
  fr-icon-refresh-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-refresh-fill

- **refresh-line**  
  fr-icon-refresh-line  
  - system
- remix  
  - system
- remix  
  fr-icon-refresh-line

- **search-fill**  
  fr-icon-search-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-search-fill

- **search-line**  
  fr-icon-search-line  
  - system
- remix  
  - system
- remix  
  fr-icon-search-line

- **settings-5-fill**  
  fr-icon-settings-5-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-settings-5-fill

- **settings-5-line**  
  fr-icon-settings-5-line  
  - system
- remix  
  - system
- remix  
  fr-icon-settings-5-line

- **share-fill**  
  fr-icon-share-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-share-fill

- **share-forward-fill**  
  fr-icon-share-forward-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-share-forward-fill

- **share-forward-line**  
  fr-icon-share-forward-line  
  - system
- remix  
  - system
- remix  
  fr-icon-share-forward-line

- **share-line**  
  fr-icon-share-line  
  - system
- remix  
  - system
- remix  
  fr-icon-share-line

- **shield-fill**  
  fr-icon-shield-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-shield-fill

- **shield-line**  
  fr-icon-shield-line  
  - system
- remix  
  - system
- remix  
  fr-icon-shield-line

- **star-fill**  
  fr-icon-star-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-star-fill

- **star-line**  
  fr-icon-star-line  
  - system
- remix  
  - system
- remix  
  fr-icon-star-line

- **star-s-fill**  
  fr-icon-star-s-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-star-s-fill

- **star-s-line**  
  fr-icon-star-s-line  
  - system
- remix  
  - system
- remix  
  fr-icon-star-s-line

- **subtract-line**  
  fr-icon-subtract-line  
  - system
- remix  
  - system
- remix  
  fr-icon-subtract-line

- **thumb-down-fill**  
  fr-icon-thumb-down-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-thumb-down-fill

- **thumb-down-line**  
  fr-icon-thumb-down-line  
  - system
- remix  
  - system
- remix  
  fr-icon-thumb-down-line

- **thumb-up-fill**  
  fr-icon-thumb-up-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-thumb-up-fill

- **thumb-up-line**  
  fr-icon-thumb-up-line  
  - system
- remix  
  - system
- remix  
  fr-icon-thumb-up-line

- **time-fill**  
  fr-icon-time-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-time-fill

- **time-line**  
  fr-icon-time-line  
  - system
- remix  
  - system
- remix  
  fr-icon-time-line

- **timer-fill**  
  fr-icon-timer-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-timer-fill

- **timer-line**  
  fr-icon-timer-line  
  - system
- remix  
  - system
- remix  
  fr-icon-timer-line

- **upload-2-fill**  
  fr-icon-upload-2-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-upload-2-fill

- **upload-2-line**  
  fr-icon-upload-2-line  
  - system
- remix  
  - system
- remix  
  fr-icon-upload-2-line

- **upload-fill**  
  fr-icon-upload-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-upload-fill

- **upload-line**  
  fr-icon-upload-line  
  - system
- remix  
  - system
- remix  
  fr-icon-upload-line

- **zoom-in-fill**  
  fr-icon-zoom-in-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-zoom-in-fill

- **zoom-in-line**  
  fr-icon-zoom-in-line  
  - system
- remix  
  - system
- remix  
  fr-icon-zoom-in-line

- **zoom-out-fill**  
  fr-icon-zoom-out-fill  
  - system
- remix  
  - system
- remix  
  fr-icon-zoom-out-fill

- **zoom-out-line**  
  fr-icon-zoom-out-line  
  - system
- remix  
  - system
- remix  
  fr-icon-zoom-out-line

#### User

- **account-circle-fill**  
  fr-icon-account-circle-fill  
  - user
- remix  
  - user
- remix  
  fr-icon-account-circle-fill

- **account-circle-line**  
  fr-icon-account-circle-line  
  - user
- remix  
  - user
- remix  
  fr-icon-account-circle-line

- **account-pin-circle-fill**  
  fr-icon-account-pin-circle-fill  
  - user
- remix  
  - user
- remix  
  fr-icon-account-pin-circle-fill

- **account-pin-circle-line**  
  fr-icon-account-pin-circle-line  
  - user
- remix  
  - user
- remix  
  fr-icon-account-pin-circle-line

- **admin-fill**  
  fr-icon-admin-fill  
  - user
- remix  
  - user
- remix  
  fr-icon-admin-fill

- **admin-line**  
  fr-icon-admin-line  
  - user
- remix  
  - user
- remix  
  fr-icon-admin-line

- **group-fill**  
  fr-icon-group-fill  
  - user
- remix  
  - user
- remix  
  fr-icon-group-fill

- **group-line**  
  fr-icon-group-line  
  - user
- remix  
  - user
- remix  
  fr-icon-group-line

- **parent-fill**  
  fr-icon-parent-fill  
  - user
- remix  
  - user
- remix  
  fr-icon-parent-fill

- **parent-line**  
  fr-icon-parent-line  
  - user
- remix  
  - user
- remix  
  fr-icon-parent-line

- **team-fill**  
  fr-icon-team-fill  
  - user
- remix  
  - user
- remix  
  fr-icon-team-fill

- **team-line**  
  fr-icon-team-line  
  - user
- remix  
  - user
- remix  
  fr-icon-team-line

- **user-add-fill**  
  fr-icon-user-add-fill  
  - user
- remix  
  - user
- remix  
  fr-icon-user-add-fill

- **user-add-line**  
  fr-icon-user-add-line  
  - user
- remix  
  - user
- remix  
  fr-icon-user-add-line

- **user-fill**  
  fr-icon-user-fill  
  - user
- remix  
  - user
- remix  
  fr-icon-user-fill

- **user-heart-fill**  
  fr-icon-user-heart-fill  
  - user
- remix  
  - user
- remix  
  fr-icon-user-heart-fill

- **user-heart-line**  
  fr-icon-user-heart-line  
  - user
- remix  
  - user
- remix  
  fr-icon-user-heart-line

- **user-line**  
  fr-icon-user-line  
  - user
- remix  
  - user
- remix  
  fr-icon-user-line

- **user-search-fill**  
  fr-icon-user-search-fill  
  - user
- remix  
  - user
- remix  
  fr-icon-user-search-fill

- **user-search-line**  
  fr-icon-user-search-line  
  - user
- remix  
  - user
- remix  
  fr-icon-user-search-line

- **user-setting-fill**  
  fr-icon-user-setting-fill  
  - user
- remix  
  - user
- remix  
  fr-icon-user-setting-fill

- **user-setting-line**  
  fr-icon-user-setting-line  
  - user
- remix  
  - user
- remix  
  fr-icon-user-setting-line

- **user-star-fill**  
  fr-icon-user-star-fill  
  - user
- remix  
  - user
- remix  
  fr-icon-user-star-fill

- **user-star-line**  
  fr-icon-user-star-line  
  - user
- remix  
  - user
- remix  
  fr-icon-user-star-line

#### Weather

- **cloudy-2-fill**  
  fr-icon-cloudy-2-fill  
  - weather
- remix  
  - weather
- remix  
  fr-icon-cloudy-2-fill

- **cloudy-2-line**  
  fr-icon-cloudy-2-line  
  - weather
- remix  
  - weather
- remix  
  fr-icon-cloudy-2-line

- **fire-fill**  
  fr-icon-fire-fill  
  - weather
- remix  
  - weather
- remix  
  fr-icon-fire-fill

- **fire-line**  
  fr-icon-fire-line  
  - weather
- remix  
  - weather
- remix  
  fr-icon-fire-line

- **flashlight-fill**  
  fr-icon-flashlight-fill  
  - weather
- remix  
  - weather
- remix  
  fr-icon-flashlight-fill

- **flashlight-line**  
  fr-icon-flashlight-line  
  - weather
- remix  
  - weather
- remix  
  fr-icon-flashlight-line

- **flood-fill**  
  fr-icon-flood-fill  
  - weather
- remix  
  - weather
- remix  
  fr-icon-flood-fill

- **flood-line**  
  fr-icon-flood-line  
  - weather
- remix  
  - weather
- remix  
  fr-icon-flood-line

- **avalanches-fill**  
  fr-icon-avalanches-fill  
  - weather
- dsfr  
  - weather
- dsfr  
  fr-icon-avalanches-fill

- **avalanches-line**  
  fr-icon-avalanches-line  
  - weather
- dsfr  
  - weather
- dsfr  
  fr-icon-avalanches-line

- **submersion-fill**  
  fr-icon-submersion-fill  
  - weather
- dsfr  
  - weather
- dsfr  
  fr-icon-submersion-fill

- **submersion-line**  
  fr-icon-submersion-line  
  - weather
- dsfr  
  - weather
- dsfr  
  fr-icon-submersion-line

- **heavy-showers-fill**  
  fr-icon-heavy-showers-fill  
  - weather
- remix  
  - weather
- remix  
  fr-icon-heavy-showers-fill

- **heavy-showers-line**  
  fr-icon-heavy-showers-line  
  - weather
- remix  
  - weather
- remix  
  fr-icon-heavy-showers-line

- **moon-fill**  
  fr-icon-moon-fill  
  - weather
- remix  
  - weather
- remix  
  fr-icon-moon-fill

- **moon-line**  
  fr-icon-moon-line  
  - weather
- remix  
  - weather
- remix  
  fr-icon-moon-line

- **snowy-fill**  
  fr-icon-snowy-fill  
  - weather
- remix  
  - weather
- remix  
  fr-icon-snowy-fill

- **snowy-line**  
  fr-icon-snowy-line  
  - weather
- remix  
  - weather
- remix  
  fr-icon-snowy-line

- **sparkling-2-fill**  
  fr-icon-sparkling-2-fill  
  - weather
- remix  
  - weather
- remix  
  fr-icon-sparkling-2-fill

- **sparkling-2-line**  
  fr-icon-sparkling-2-line  
  - weather
- remix  
  - weather
- remix  
  fr-icon-sparkling-2-line

- **sun-fill**  
  fr-icon-sun-fill  
  - weather
- remix  
  - weather
- remix  
  fr-icon-sun-fill

- **sun-line**  
  fr-icon-sun-line  
  - weather
- remix  
  - weather
- remix  
  fr-icon-sun-line

- **temp-cold-fill**  
  fr-icon-temp-cold-fill  
  - weather
- remix  
  - weather
- remix  
  fr-icon-temp-cold-fill

- **temp-cold-line**  
  fr-icon-temp-cold-line  
  - weather
- remix  
  - weather
- remix  
  fr-icon-temp-cold-line

- **thunderstorms-fill**  
  fr-icon-thunderstorms-fill  
  - weather
- remix  
  - weather
- remix  
  fr-icon-thunderstorms-fill

- **thunderstorms-line**  
  fr-icon-thunderstorms-line  
  - weather
- remix  
  - weather
- remix  
  fr-icon-thunderstorms-line

- **tornado-fill**  
  fr-icon-tornado-fill  
  - weather
- remix  
  - weather
- remix  
  fr-icon-tornado-fill

- **tornado-line**  
  fr-icon-tornado-line  
  - weather
- remix  
  - weather
- remix  
  fr-icon-tornado-line

- **typhoon-fill**  
  fr-icon-typhoon-fill  
  - weather
- remix  
  - weather
- remix  
  fr-icon-typhoon-fill

- **typhoon-line**  
  fr-icon-typhoon-line  
  - weather
- remix  
  - weather
- remix  
  fr-icon-typhoon-line

- **windy-fill**  
  fr-icon-windy-fill  
  - weather
- remix  
  - weather
- remix  
  fr-icon-windy-fill

- **windy-line**  
  fr-icon-windy-line  
  - weather
- remix  
  - weather
- remix  
  fr-icon-windy-line
