# Sommaire

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/sommaire · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/sommaire/design-du-sommaire · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/sommaire/code-du-sommaire · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/sommaire/accessibilite-du-sommaire · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/sommaire/demonstration-du-sommaire
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

Le sommaire est un système de navigation secondaire présentant une liste d’ancres placée au-dessus du contenu correspondant.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/sommaire

*(Démonstration interactive « summary--summary » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=summary--summary&nav=0&globals=theme%3Alight)*

### Quand utiliser ce composant ?

Proposer le sommaire pour permettre à l’usager d’avoir un aperçu du contenu consulté et de naviguer entre les différentes sections d’une page.

Il est recommandé d’utiliser le sommaire dans une page de contenu longue ou à forte densité.

> **Attention**
> Bien différencier le sommaire du menu latéral. Le [menu latéral](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/menu-lateral) est utilisé pour naviguer entre différentes pages d’une rubrique ou d’un même thème. Il ne présente pas des ancres mais des liens.

### Comment utiliser ce composant ?

- **Placer le sommaire en haut de page** , juste avant le corps de texte. Si un chapô est présent en début de page, le sommaire s’affiche entre le chapô et le contenu éditorial.

> **À faire :** Placer le sommaire en haut de page, avant le corps de texte.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/summary/use/do-1.png)

> **À ne pas faire :** Ne pas intégrer le sommaire au sein du contenu éditorial lui-même.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/summary/use/dont-1.png)

- **Positionner le titre du sommaire au-dessus de la liste d’ancres** .
- **Reprendre les titres de section de la page (H1 et H2) sous forme d’ancre** vers le contenu correspondant. Au clic sur un lien, l’utilisateur est redirigé dans la page, au niveau de la section cherchée.
- **Conserver le fond de couleur du sommaire,** destiné à le séparer visuellement du contenu.

> **À faire :** Garantir une distinction visuelle entre sommaire et le contenu éditorial.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/summary/use/do-2.png)

> **À ne pas faire :** Ne pas supprimer le fond de couleur, au risque d’altérer la bonne compréhension de l’usager.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/summary/use/dont-2.png)

- **Garantir le positionnement du sommaire en haut de page** . Il ne s’agit pas d’un élément fixé qui reste visible au défilement de la page.

> **À faire :** Conserver le sommaire en haut de page.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/summary/use/do-3.png)

> **À ne pas faire :** Ne pas rendre le sommaire sticky.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/summary/use/dont-3.png)

### Règles éditoriales

- **Reprendre le texte exact de chaque titre de section** comme libellé des ancres du sommaire.

> **À faire :** Nommer les ancres du sommaire comme les titres des sections de la page vers lesquelles elles renvoient.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/summary/edit/do-1.png)

> **À ne pas faire :** Ne pas proposer des titres différents entre les ancres du sommaire et les sections de la page.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/summary/edit/dont-1.png)

#### Contenu associé

- **[Fil d'Ariane](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/fil-d-ariane)**  
  Présentation du composant fil d’Ariane, navigation secondaire permettant à l’usager de se repérer dans l’arborescence d’un site et de revenir à un niveau supérieur.

- **[Menu latéral](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/menu-lateral)**  
  Présentation du composant Menu latéral, élément de navigation secondaire qui organise des liens verticaux pour guider l’usager entre différentes pages d’une même rubrique.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/sommaire/design-du-sommaire

![Anatomie du bouton](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/summary/design/anatomy/anatomy-1.png)

1. Un titre “Sommaire” — Obligatoire
2. Un numéro d’ancre — Obligatoire
3. Des libellés d’ancres — Obligatoire
4. Un fond gris — Obligatoire

### Variations

Le sommaire ne propose aucune variation.

### Tailles

La largeur du sommaire s’adapte à la taille de son conteneur.

Toutefois, il est recommandé de ne pas excéder une largeur de 8 colonnes, s’agissant d’un composant à intégrer au sein de pages de contenu riche.

### États

**État au survol**

L’état au survol correspond au comportement constaté par l’usager lorsqu’il survole une ancre du sommaire avec sa souris.

### Personnalisation

Le sommaire n’est pas personnalisable.

> **À faire :** Utiliser uniquement le fond de couleur grise.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/summary/design/custom/do-1.png)

> **À ne pas faire :** Ne pas personnaliser la couleur de fond du sommaire.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/summary/design/custom/dont-1.png)

> **À faire :** Conserver l’apparence des ancres en l’état.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/summary/design/custom/do-2.png)

> **À ne pas faire :** Ne pas personnaliser la couleur ou la typographie des ancres.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/summary/design/custom/dont-2.png)

#### Contenu associé

- **[Fil d'Ariane](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/fil-d-ariane)**  
  Présentation du composant fil d’Ariane, navigation secondaire permettant à l’usager de se repérer dans l’arborescence d’un site et de revenir à un niveau supérieur.

- **[Menu latéral](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/menu-lateral)**  
  Présentation du composant Menu latéral, élément de navigation secondaire qui organise des liens verticaux pour guider l’usager entre différentes pages d’une même rubrique.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/sommaire/code-du-sommaire

### HTML

#### Structure du composant

Le composant **Sommaire** est un élément interactif permettant de naviguer entre différentes sections de contenu.

Sa structure est la suivante :

- Le conteneur du sommaire est une balise `<div>` avec la classe `fr-summary` et le rôle `navigation`.
  - Le sommaire dispose d'un attribut `aria-labelledby` défini sur l'ID du titre du sommaire.
- Le titre du sommaire, obligatoire, est défini par la classe `fr-summary__title`. Son niveau de titre est personnalisable ou peut être un `<p>`.
- Les éléments de la liste d'ancre, obligatoire, sont contenus dans une balise `<ol>`.
  - Chaque élément de la liste `<li>` contient un lien `<a>` défini par la classe `fr-summary__link`.

**Exemple de structure HTML**

```html
<nav class="fr-summary" role="navigation" aria-labelledby="fr-summary-title">
    <h2 class="fr-summary__title" id="fr-summary-title">Sommaire</h2>
    <ol>
        <li>
            <a class="fr-summary__link" id="summary-link-1" href="#anchor-1">Libellé du lien 1</a>
            <ol>
                <li>
                    <a class="fr-summary__link" id="summary-link-1-1" href="#anchor-1.1">Libellé du lien 1.1</a>
                </li>
                <li>
                    <a class="fr-summary__link" id="summary-link-1-2" href="#anchor-1.2">Libellé du lien 1.2</a>
                </li>
                <li>
                    <a class="fr-summary__link" id="summary-link-1-3" href="#anchor-1.3">Libellé du lien 1.3</a>
                </li>
            </ol>
        </li>
        <li>
            <a class="fr-summary__link" id="summary-link-2" href="#anchor-2">Libellé du lien 2</a>
        </li>
    </ol>
</nav>
```

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](https://www.systeme-de-design.gouv.fr/version-courante/fr/premiers-pas/vous-etes-developpeur/prise-en-main#les-css) .

**Dépendances CSS**

| Dépendance | Obligatoire |
|---|---|
| Core | Oui |
| Summary | Oui |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/summary/summary.min.css" rel="stylesheet">
```

---

### JavaScript

Le composant Sommaire **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+summary+)

#### [v1.15.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.15.0) - 17 juillet 2026

- **[niveau de titre du sommaire](https://github.com/GouvernementFR/dsfr/pull/1390)**  
  #1390  
  - Le titre du sommaire peut être une balise `<p>`  
  🐛 fix  
  summary

#### [v1.11.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.0) - 11 décembre 2023

- **[alignement du titre du sommaire](https://github.com/GouvernementFR/dsfr/pull/779)**  
  #779  
  - ajout d'un padding-left de 8px pour aligner le titre avec le premier élément de la liste  
  🐛 fix  
  summary

#### [v1.8.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.8.0) - 27 octobre 2022

- **[niveau de titre des composants](https://github.com/GouvernementFR/dsfr/pull/420)**  
  #420  
  fix  
  tile summary sidemenu

#### [v1.2.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.2.0) - 17 novembre 2021

- **[correction du token](https://github.com/GouvernementFR/dsfr/pull/117)**  
  #117  
  fix  
  summary

#### [v1.0.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.0.0) - 24 juin 2021

- **[Ajustement de summary avec les nouvelles listes](https://github.com/GouvernementFR/dsfr/pull/6)**  
  #6  
  - fix(summary): Ajustement de summary avec les nouvelles listes
- doc(summary): Commentaire d'explication sur les nombres utilisés pour créer le décalage de l'hover
- fix(summary): remplacement du marker par un before sur le lien (support safari + hover)  
  fix  
  summary

##### Contenu associé

- **[Fil d'Ariane](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/fil-d-ariane)**  
  Présentation du composant fil d’Ariane, navigation secondaire permettant à l’usager de se repérer dans l’arborescence d’un site et de revenir à un niveau supérieur.

- **[Menu latéral](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/menu-lateral)**  
  Présentation du composant Menu latéral, élément de navigation secondaire qui organise des liens verticaux pour guider l’usager entre différentes pages d’une même rubrique.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/sommaire/accessibilite-du-sommaire

Le composant **Sommaire** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Lorsque le focus est positionné sur le sommaire :

- `Tab` : place le focus sur le prochain élément focalisable.
- `Maj + Tab` : lace le focus sur l'élément focalisable précédent.

### Règles d’accessibilité

- Le sommaire est un système de navigation secondaire. Il doit être structuré dans un élément `nav role="navigation"`.
- Le conteneur principal du menu latéral possède un attribut `aria-labelledby` défini sur l’ID du titre du sommaire afin de nommer et donner un contexte explicite à la navigation.
- Les éléments du sommaire sont structurés dans une liste avec les éléments `ul` et `li`.

### Contrastes de couleurs

Le composant Sommaire est suffisamment contrasté en thème clair et en thème sombre.

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Menu latéral.

---

### Critères RGAA applicables

- **Couleurs** : 3.2
- **Liens** : 6.1, 6.2
- **Structuration** : 9.3
- **Présentation de l’information** : 10.1, 10.2, 10.3,10.4, 10.5, 10.7, 10.8, 10.11, 10.12
- **Navigation** : 12.8, 12.9
- **Consultation :** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Élément nav](https://html.spec.whatwg.org/#the-nav-element)

#### Contenu associé

- **[Fil d'Ariane](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/fil-d-ariane)**  
  Présentation du composant fil d’Ariane, navigation secondaire permettant à l’usager de se repérer dans l’arborescence d’un site et de revenir à un niveau supérieur.

- **[Menu latéral](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/menu-lateral)**  
  Présentation du composant Menu latéral, élément de navigation secondaire qui organise des liens verticaux pour guider l’usager entre différentes pages d’une même rubrique.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/sommaire/demonstration-du-sommaire

#### Contenu associé

- **[Fil d'Ariane](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/fil-d-ariane)**  
  Présentation du composant fil d’Ariane, navigation secondaire permettant à l’usager de se repérer dans l’arborescence d’un site et de revenir à un niveau supérieur.

- **[Menu latéral](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/menu-lateral)**  
  Présentation du composant Menu latéral, élément de navigation secondaire qui organise des liens verticaux pour guider l’usager entre différentes pages d’une même rubrique.
