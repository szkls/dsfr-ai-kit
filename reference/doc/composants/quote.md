# Citation

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/citation · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/citation/design-de-la-citation · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/citation/code-de-la-citation · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/citation/accessibilite-de-la-citation · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/citation/demonstration-de-la-citation
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

La citation est un élément éditorial permettant de mettre en forme du contenu dans une page.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/citation

*(Démonstration interactive « quote--quote » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=quote--quote&nav=0&globals=theme%3Alight)*

### Quand utiliser ce composant ?

Insérer la citation dans une page éditoriale pour citer un texte. La citation peut provenir d'un extrait d’un discours oral ou d’un texte écrit.

> **Attention**
> Bien différencier la citation de la mise en avant ou mise en exergue.

[La mise en avant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-avant) est utilisée pour mettre l’accent sur une information importante, venant compléter le contenu principal.

La [mise en exergue](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-exergue) quant à elle permet d’identifier plus facilement une information au sein d’un contenu existant.

### Comment utiliser ce composant ?

- **Utiliser les champs de détails pour préciser des informations complémentaires** , telles que l’édition, la collection, la fonction ou le titre de l’auteur par exemple. Il est également possible d’indiquer une URL au sein de ces champs en ajoutant un soulignement pour en faire un lien.

> **À faire :** Préciser les informations complémentaires à la citation au sein des champs de détails.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/quote/use/do-1.png)

- **Veiller à ce que deux citations ne se suivent pas directement** au sein d’un contenu éditorial.

> **À faire :** Veiller à ce que deux citations ne se suivent pas directement au sein d’un contenu éditorial.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/quote/use/do-2.png)

> **À ne pas faire :** Ne pas positionner deux citations à la suite au sein d’un même contenu éditorial.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/quote/use/dont-1.png)

### Règles éditoriales

- **Intégrer des guillemets avec espaces insécables** au début et à la fin du texte de la citation.
- **Appliquer systématiquement de l’italique** au nom d’un ouvrage lorsqu’il est mentionné dans la source.

> **À faire :** Indiquer le nom d’un ouvrage en italique lorsqu’il est mentionné dans la source.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/quote/edit/do-1.png)

> **À ne pas faire :** Ne pas indiquer un nom d’un ouvrage sans italique lorsqu’il est mentionné dans la source.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/quote/edit/dont-1.png)

- **Eviter les citations trop longues** pour qu’elles ne prennent pas trop de place, notamment en mobile. La citation n’est pas nativement limité en nombre de caractères mais il convient de ne pas excéder une taille trop importante.

> **À faire :** Limiter les citations à une longueur raisonnable.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/quote/edit/do-2.png)

> **À ne pas faire :** Ne pas proposer des citations trop longues, pour qu’elles ne prennent pas trop de place, notamment en mobile.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/quote/edit/dont-2.png)

> **Important**
> Les citations courtes d’une oeuvre publiée sont autorisées et encadrées en France par le Code de la Propriété Intellectuelle et plus précisément l' [article L122-5](https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000006069414&idArticle=LEGIARTI000037388886&dateTexte=20191211) .

#### Contenu associé

- **[Mise en avant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-avant)**  
  Présentation du composant Mise en avant, élément éditorial servant à valoriser une information complémentaire dans une page de contenu.

- **[Mise en exergue](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-exergue)**  
  Présentation du composant éditorial Mise en exergue destiné à distinguer une information importante au sein du contenu principal d’une page.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/citation/design-de-la-citation

![Anatomie de la citation](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/quote/design/anatomy/anatomy-1.png)

1. Une icône, permettant d’informer l’usager qu’il s’agit de la mise en avant d’une citation — Obligatoire
2. Le texte de la citation — Obligatoire
3. Une image d’illustration, pour incarner la citation — En option
4. Un séparateur — Obligatoire
5. Une signature, pour préciser l’auteur de la citation — En option
6. Une zone de détails, pour préciser l’origine du texte cité — En option

### Variations

**Citation sans illustration**

*(Démonstration interactive « quote--imageless » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=quote--imageless&nav=0&globals=theme%3Alight)*

- Utiliser la citation sans illustration lorsqu’il n’est pas nécessaire ou possible d’incarner l’auteur de la citation.

En version mobile, le séparateur passe en dessous de la zone de détails.

**Citation avec illustration**

*(Démonstration interactive « quote--default » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=quote--default&nav=0&globals=theme%3Alight)*

- Utiliser la citation avec illustration pour incarner l’auteur.

En version mobile, le comportement du séparateur est le même que pour la variation sans illustration. En complément, l’illustration est affichée en dessous du texte de la citation.

### Tailles

La largeur de la citation s’adapte à la taille de son conteneur.

Toutefois, il est recommandé de ne pas excéder une largeur de 8 colonnes, s’agissant d’un composant de mise en forme de contenu.

Le texte de la citation est quant à lui disponible en 3 tailles :

- MD pour medium - taille par défaut.

*(Démonstration interactive « quote--default » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=quote--default&nav=0&globals=theme%3Alight)*

- LG pour large.

*(Démonstration interactive « quote--default » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=quote--default&nav=0&args=size%3Alg&globals=theme%3Alight)*

- XL pour extra large.

*(Démonstration interactive « quote--default » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=quote--default&nav=0&args=size%3Axl&globals=theme%3Alight)*

### États

La citation n’est sujette à aucun changement d’état.

### Personnalisation

Seule la couleur de l’icône de la citation est personnalisable. Elle peut utiliser l’ensemble des couleurs illustratives en indice $main uniquement.

> **À faire :** Personnaliser la couleur de l’icône de la citation parmi les couleurs illustratives, en indice $main.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/quote/design/custom/do-1.png)

> **À ne pas faire :** Ne pas utiliser une couleur illustrative d’un indice autre que $main.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/quote/design/custom/dont-1.png)

**Titre du tableau**

| Éléments | Indice thème clair | Indice thème sombre |
|---|---|---|
| **Icône `$artwork-minor-blue-france`** | Indice **main** <br> exemple : `$pink-tuile-main-556` | Indice **main** <br> exemple : `$pink-tuile-main-556` |

Par ailleurs, certains éléments sont optionnels - voir [la structure du composant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/citation/design-de-la-citation#citation) .

#### Contenu associé

- **[Mise en avant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-avant)**  
  Présentation du composant Mise en avant, élément éditorial servant à valoriser une information complémentaire dans une page de contenu.

- **[Mise en exergue](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-exergue)**  
  Présentation du composant éditorial Mise en exergue destiné à distinguer une information importante au sein du contenu principal d’une page.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/citation/code-de-la-citation

### HTML

#### Structure du composant

La **citation** permet de citer un texte dans une page éditoriale. La citation peut provenir d'un extrait d’un discours oral formulé par une tierce personne ou d’un texte écrit.

Sa structure est la suivante :

- Le conteneur principal, obligatoire, est un élément HTML `<figure>` défini par la classe `fr-quote` et contenant :
  - Le texte de la citation, obligatoire, est un élément HTML `<blockquote>` disposant d'un attribut `cite` doit la valeur est la source de la citation.
  - Les informations complémentaires de la citation, sont dans un élément HTML `<figcaption>` contenant :
    - Un premier paragraphe `<p>`, optionnel, afin de préciser quand nécessaire l’Auteur de la citation, défini par la classe `fr-quote__author`.
    - Une liste `<ul>`, optionnelle, afin de préciser l’origine du texte cité, définie par la classe `fr-quote__source`.
      - Les éléments `<li>` de la liste des informations complémentaires peuvent contenir un élément `<cite>` ou un lien `<a>` afin de préciser l'ouvrage cité ou la source de la citation.
    - Une image illustrative de la citation, optionnelle, dans un élément HTML `<div>` défini par la classe `fr-quote__image` et contenant un élément HTML `<img>` défini par la classe `fr-responsive-img`.

**Exemple de structure HTML**

```html
<figure class="fr-quote fr-quote--column">
    <blockquote cite="[À MODIFIER - https://lien-vers-la-source.fr]">
        <p>« Lorem [...] elit ut. »</p>
    </blockquote>
    <figcaption>
        <p class="fr-quote__author">Auteur</p>
        <ul class="fr-quote__source">
            <li>
                <cite>Ouvrage</cite>
            </li>
            <li>Détail 1</li>
            <li>Détail 2</li>
            <li>Détail 3</li>
            <li>
                <a href="">Détail 4</a>
            </li>
        </ul>
        <div class="fr-quote__image">
            <img class="fr-responsive-img" src="../../../example/img/placeholder.1x1.png" alt="" />
            <!-- L’alternative de l’image (attribut alt) doit rester vide car l’image est illustrative et ne doit pas être restituée aux technologies d’assistance -->
        </div>
    </figcaption>
</figure>
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
| Quote | Oui |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/quote/quote.min.css" rel="stylesheet">
```

#### Variante de taille

La citation est disponible en deux variantes de tailles pour s'adapter à différents contextes d'utilisation. Pour appliquer une variante de taille, ajoutez une des classes suivantes à l'élément paragraphe `<p>` contenant la citation :

- En taille XL : par défaut.
- En taille LG : définie par la classe `fr-text--lg`.

**Exemple de variante de taille**

```html
<figure class="fr-quote">
    <blockquote cite="[À MODIFIER - https://lien-vers-la-source.fr]">
        <p class="fr-text--lg">« Lorem [...] elit ut. »</p>
    </blockquote>
    <figcaption>
        <!-- Contenu des détails de la citation -->
    </figcaption>
</figure>
```

#### Accentuation

La citation est accentuable, permettant le changement de la couleur de l'icône illustrative. Pour cela, ajouter la classe `fr-quote--NOM-COULEUR` au même niveau que la classe `fr-quote`.

**Exemple de variante accentuée**

```html
<figure class="fr-quote fr-quote--green-emeraude">
    <!-- Contenu de la citation -->
</figure>
```

### JavaScript

Le composant Citation **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+quote+)

#### [v1.14.3](https://github.com/GouvernementFR/dsfr/releases/tag/v1.14.3) - 15 décembre 2025

- **[espaces insécables avant et après les guillemets](https://github.com/GouvernementFR/dsfr/pull/1345)**  
  #1345  
  - Utilisation de l'espace insécable avant et après les guillemets pour éviter le retour à la ligne d'un guillemet seul  
  🐛 fix  
  quote

#### [v1.12.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.12.0) - 19 juin 2024

- **[ratio de l'image de citation](https://github.com/GouvernementFR/dsfr/pull/912)**  
  #912  
  - ajout de la propriété object-fit: cover sur l'image de citation pour conserver le ratio de l'image lorsqu'elle n'est pas carrée.
- dans la mesure du possible, privilégiez un ratio d'image carré pour un meilleur support navigateur  
  🐛 fix  
  quote

#### [v1.11.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.0) - 11 décembre 2023

- **[ajoute un exemple avec un seul detail](https://github.com/GouvernementFR/dsfr/pull/721)**  
  #721  
  - il n'est plus obligatoire d'avoir une liste dans le figcaption de la citation  
  🐛 fix  
  quote

#### [v1.8.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.8.0) - 27 octobre 2022

- **[couleur du texte quote__sources](https://github.com/GouvernementFR/dsfr/pull/437)**  
  #437  
  fix  
  quote

##### Contenu associé

- **[Mise en avant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-avant)**  
  Présentation du composant Mise en avant, élément éditorial servant à valoriser une information complémentaire dans une page de contenu.

- **[Mise en exergue](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-exergue)**  
  Présentation du composant éditorial Mise en exergue destiné à distinguer une information importante au sein du contenu principal d’une page.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/citation/accessibilite-de-la-citation

Le composant **Citation** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

- Le texte cité est contenu dans un élément `<blockquote>` inséré dans un bloc `<figure>` et les informations complémentaires (image, auteur, ouvrage… ) dans l'élément `<figcaption>`.
- L’ouvrage cité doit être placé dans une balise `<cite>` et ainsi apparaitre en italique.
- L’icône et l’image sont décoratives et ne doivent pas être restituées aux technologies d’assistance.

> **Information**
> Ne pas confondre l’attribut `cite` qui permet d’ajouter l’URL de la source de la citation si celle-ci provient d’un autre site et l’élément `<cite>` à utiliser pour le titre de l’œuvre citée. L’attribut et l’élément n’ont pas d’importance pour l’accessibilité.

### Contrastes de couleurs

Le composant Citation est suffisamment contrasté en thème clair et en thème sombre.

### Restitution par les lecteurs d’écran

NVDA et JAWS sont les seuls lecteurs d’écran à restituer correctement la sémantique de l’élément blockquote.

---

### Critères RGAA applicables

- **Couleurs :** 3.2
- **Liens :** 6.1, 6.2
- **Éléments obligatoires :** 8.9
- **Structuration :** 9.3, 9.4
- **Présentation de l’information :** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.8, 10.11, 10.12
- **Navigation :** 12.8, 12.9
- **Consultation :** : 13.9, 13.11

---

### Références

- [Élément blockquote](https://html.spec.whatwg.org/#the-blockquote-element)
- [Élément cite](https://html.spec.whatwg.org/#the-cite-element)
- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)

#### Contenu associé

- **[Mise en avant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-avant)**  
  Présentation du composant Mise en avant, élément éditorial servant à valoriser une information complémentaire dans une page de contenu.

- **[Mise en exergue](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-exergue)**  
  Présentation du composant éditorial Mise en exergue destiné à distinguer une information importante au sein du contenu principal d’une page.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/citation/demonstration-de-la-citation

*(Démonstration interactive « quote--docs » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=quote--docs&nav=0&globals=theme%3Alight)*

#### Contenu associé

- **[Mise en avant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-avant)**  
  Présentation du composant Mise en avant, élément éditorial servant à valoriser une information complémentaire dans une page de contenu.

- **[Mise en exergue](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-exergue)**  
  Présentation du composant éditorial Mise en exergue destiné à distinguer une information importante au sein du contenu principal d’une page.
