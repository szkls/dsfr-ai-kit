# Pied de page

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page/design-du-pied-de-page · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page/code-du-pied-de-page · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page/accessibilite-du-pied-de-page · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page/demonstration-du-pied-de-page
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

Le pied de page est un élément de navigation secondaire mis à disposition de l’usager pour qu’il poursuive son parcours. Il propose également des éléments d’information complémentaires.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page

*(Démonstration interactive « footer--footer » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=footer--footer&nav=0&globals=theme%3Alight)*

### Quand utiliser ce composant ?

**Intégrer le pied de page sur l’ensemble des sites de la sphère gouvernementale** . Au sein d’un site, le pied de page doit être affiché en bas de chacune des pages.

### Comment utiliser ce composant ?

- **Proposer a minima le pied de page simple** (bloc Marque, liens obligatoires et mention de la licence).
- **Utiliser le pied de page complet** (avec listes de liens) pour les sites profonds nécessitant de réintégrer des liens en rebond de la navigation.
- **Classer les listes de liens** lorsque vous le pouvez, pour faciliter la lecture par l’usager. Il est possible d’inclure jusqu'à 6 colonnes de liens et nous recommandons de ne pas dépasser des listes de 8 liens.
- **Penser le pied de page comme un élément complémentaire à la navigation principale** . Il ne doit pas être le miroir de cette dernière. Un travail de conception particulier est de fait nécessaire pour proposer des contenus adaptés, qui répondent par exemple aux questions restantes de l’usager.

### Règles éditoriales

- **Utiliser le texte de présentation pour donner des informations complémentaires** sur le service (description) ou l’organisation (contact, adresse etc.).
- **Proposer des libellés de liens clairs et concis** afin que l’usager comprenne facilement les pages auxquelles il peut accéder.

#### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.

- **[Lettre d'information et réseaux sociaux](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lettre-d-information-et-reseaux-sociaux)**  
  Présentation du composant Lettre d'information et réseaux sociaux permettant de proposer l’inscription à une lettre d’information et de diriger vers les réseaux sociaux de l’entité.

- **[Navigation principale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale)**  
  Présentation du composant Navigation principale organisant les grandes rubriques d’un site et permettant à l’usager de s’orienter dans son arborescence.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page/design-du-pied-de-page

![Anatomie du pied de page](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/footer/design/anatomy/anatomy-1.png)

1. Une bordure supérieure, marquant la séparation entre le corps de la page et le pied de page — Obligatoire
2. Un titre de catégorie — En option
3. Un fond gris, dédié au bloc de liens de navigation — Obligatoire
4. Un logo opérateur, au format vertical ou horizontal — En option
5. Le bloc marque — Obligatoire
6. Un libellé “Nos partenaires” — En option
7. Un séparateur entre les blocs — Obligatoire
8. Une liste de liens liés aux obligations légales, [object Object] — Obligatoire
9. Une mention de la licence, “Sauf mention contraire, tous les contenus de ce site sont sous licence etalab-2.0” — Obligatoire
10. Un texte de présentation — En option
11. Les quatre liens de références de l'écosystème institutionnel — Obligatoire
12. Les logos des partenaires additionnels, ferrés à droite — En option
13. Des séparateurs verticaux, entre les liens d’obligations légales — Obligatoire
14. Un bouton d’accès aux paramètres d’affichage — En option

### Variations

**Pied de page en berne**

*(Démonstration interactive « footer--footer » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=footer--footer&nav=0&args=isMourning%3Atrue&globals=theme%3Alight)*

Lors des périodes de deuil national, il est possible d’utiliser la version en berne du footer. La Marianne s’affichera alors dans sa version en berne.

### Tailles

La largeur du pied de page est de taille fixe et prend les 12 colonnes disponibles de la grille.

### États

Le pied de page n’est sujet à aucun changement d’état.

### Personnalisation

Le pied de page n’est pas personnalisable.

Toutefois, certains éléments sont optionnels - voir [la structure du composant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page/design-du-pied-de-page#pied-de-page) .

> **À faire :** Considérer que chaque élément du pied de page a une place définie.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/footer/design/custom/do-1.png)

> **À ne pas faire :** Ne pas modifier le positionnement des éléments du pied de page.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/footer/design/custom/dont-1.png)

> **À ne pas faire :** Ne pas modifier les liens obligatoires de l’écosystème de l’Etat.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/footer/design/custom/dont-2.png)

#### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.

- **[Lettre d'information et réseaux sociaux](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lettre-d-information-et-reseaux-sociaux)**  
  Présentation du composant Lettre d'information et réseaux sociaux permettant de proposer l’inscription à une lettre d’information et de diriger vers les réseaux sociaux de l’entité.

- **[Navigation principale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale)**  
  Présentation du composant Navigation principale organisant les grandes rubriques d’un site et permettant à l’usager de s’orienter dans son arborescence.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page/code-du-pied-de-page

### HTML

Le composant **Pied de page** est constitué d'un élément `<footer>` de classe `fr-footer`, avec l'attribut `role="contentinfo"`, et un attribut `id` pour le lier au lien d'évitement "pied de page" via une ancre.

- Un premier bloc, optionnel, de navigation permet d'ajouter des liens de navigations. Il s'agit d'un élément `<div>` de classe `fr-footer__top`.
  - Ce bloc doit contenir un élément `<div>` de classe `fr-container` qui permet de centrer le contenu ainsi qu'une [grille](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux) pour structurer les liens en colonnes.
  - Utiliser la grille avec espacement entre les colonnes `fr-grid-row--gutters`. Ajouter autant de colonnes que nécessaire pour structurer les liens.
  - Dans chaque colonne ajouter :
    - Une catégorie de liens, optionnelle, avec un titre `<h2>`, ou autre niveau d'entête, de classe `fr-footer__top-cat`. Le libellé de la catégorie peut être un lien `<a>`.
    - Une liste de liens, `<ul>` de classe `fr-footer__top-list`, avec des liens `<a>` de classe `fr-footer__top-link`.
- Puis les blocs suivant, contenu dans un élément `<div>` de classe `fr-container` pour centrer le contenu.
  - Le corps du pied de page, un élément `<div>` de classe `fr-footer__body` contenant :
    - Un bloc marque (voir [Marque de l'état](https://www.info.gouv.fr/marque-de-letat) ), un élément `<div>` de classes `fr-footer__brand` et `fr-enlarge-link`.
      - Il contient à minima le bloc-marque, il s'agit du composant [bloc-marque de l'état](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bloc-marque/code-du-bloc-marque) de classe `fr-logo`. Celui-ci doit être inséré dans un lien `<a>` pointant vers la page d'accueil et avec un attribut `title="Retour à l’accueil du site - Nom de
         l’entité (ministère, secrétariat d‘état,
         gouvernement)"`.
      - Il peut aussi contenir un logo opérateur de l'État, une image (ou SVG) de classe `fr-footer__logo`.
        - Utiliser un attribut `style="width:10rem;"`, avec comme valeur la largeur du logo en fonction de son format (10rem pour du 16:9). Ne pas dépasser 10rem (160px) de largeur et 5.625rem (90px) de hauteur.
        - L'attribut `alt` doit être renseigné avec le nom de l'opérateur.
        - Le lien pointant vers l'accueil est alors positionné au niveau du logo de l'opérateur, il est automatiquement étendu à toute la zone du bloc marque.
        - L'attribut `title` du lien doit être renseigné sous la forme "Retour à l’accueil du site - [texte alternatif de l’image (nom de l'opérateur ou du site serviciel)] - République Française".
    - Un bloc de contenu, un élément `<div>` de classe `fr-footer__content` contenant :
      - Une description du site, optionnelle, un élément `<p>` de classe `fr-footer__content-desc`. La description doit être concise et informative, ne pas dépasser 3 lignes.
      - Une liste de liens, **obligatoire et non modifiable** , `<ul>` de classe `fr-footer__content-list`, avec des `<li>` de classe `fr-footer__content-item`, et des liens `<a>` de classe `fr-footer__content-link`.
        - Les liens doivent être ordonnés dans cet ordre : info.gouv.fr, service-public.gouv.fr, legifrance.gouv.fr, data.gouv.fr
        - Les liens doivent pointer vers les sites respectifs en s'ouvrant dans une nouvelle fenêtre.
  - Le bloc logos partenaires, optionnel, une `<div>`de classe `fr-footer__partners`. Ce bloc contient :
    - Un titre `<h2>`, ou autre niveau d'entête, de classe `fr-footer__partners-title`.
    - Un conteneur `fr-footer__partners-logos` permettant de positionner un bloc de logo principal `<div>` de classe `fr-footer__partners-main` et/ou un bloc de logos secondaires `<div>` de classe `fr-footer__partners-sub` (utiliser une liste `<ul><li>` s'il y en a plusieurs).
      - Chaque logo est formé d'une image (ou SVG) de classe `fr-footer__logo`.
        - Utiliser un attribut `style="height: 5.625rem"`, avec comme valeur la hauteur max désirée. Uniformiser la hauteur des logos pour une meilleure lisibilité.
        - L'attribut `alt` doit être renseigné avec le nom du partenaire.
        - Un lien pointant vers le site du partenaire peut englober l'image du logo partenaire.
  - Le bas du pied de page, obligatoire, un élément `<div>` de classe `fr-footer__bottom` contenant :
    - Une liste de liens liés aux obligations légales, `<ul>` de classe `fr-footer__bottom-list`, `<li>` de classe `fr-footer__bottom-item`, et des liens `<a>` de classe `fr-footer__bottom-link`. Cette liste doit être définie en fonction du site, toutefois les liens & contenus suivants sont obligatoires : “accessibilité : non/partiellement/totalement conforme”, mentions légales, données personnelles et gestion des cookies.
    - Une mention de la licence, contenu dans une `<div>` de classe `fr-footer__bottom-copy`, sous forme d'un paragraphe avec l'intitulé : “Sauf mention explicite de propriété intellectuelle détenue par des tiers, les contenus de ce site sont proposés sous licence etalab-2.0” (ajouter un lien vers la licence)

**Exemple de structure minimale**

#### Déplier pour voir le code

```html
<footer class="fr-footer" role="contentinfo">
    <div class="fr-container">
        <div class="fr-footer__body">
            <div class="fr-footer__brand fr-enlarge-link">
                <a id="footer-brand-link-6954" title="Retour à l’accueil du site - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)" href="/">
                    <p class="fr-logo">
                        Intitulé
                        <br>officiel
                    </p>
                </a>
            </div>
            <div class="fr-footer__content">
                <p class="fr-footer__content-desc">Lorem [...] elit ut.</p>
                <ul class="fr-footer__content-list">
                    <li class="fr-footer__content-item">
                        <a title="info.gouv.fr - nouvelle fenêtre" href="https://info.gouv.fr" target="_blank" rel="noopener external" class="fr-footer__content-link">info.gouv.fr</a>
                    </li>
                    <li class="fr-footer__content-item">
                        <a title="service-public.gouv.fr - nouvelle fenêtre" href="https://service-public.gouv.fr" target="_blank" rel="noopener external" class="fr-footer__content-link">service-public.gouv.fr</a>
                    </li>
                    <li class="fr-footer__content-item">
                        <a title="legifrance.gouv.fr - nouvelle fenêtre" href="https://legifrance.gouv.fr" target="_blank" rel="noopener external" class="fr-footer__content-link">legifrance.gouv.fr</a>
                    </li>
                    <li class="fr-footer__content-item">
                        <a title="data.gouv.fr - nouvelle fenêtre" href="https://data.gouv.fr" target="_blank" rel="noopener external" class="fr-footer__content-link">data.gouv.fr</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="fr-footer__bottom">
            <ul class="fr-footer__bottom-list">
                <li class="fr-footer__bottom-item">
                    <a href="[url - à modifier]" class="fr-footer__bottom-link">Plan du site</a>
                </li>
                <li class="fr-footer__bottom-item">
                    <a href="[url - à modifier]" class="fr-footer__bottom-link">Accessibilité : non/partiellement/totalement conforme</a>
                </li>
                <li class="fr-footer__bottom-item">
                    <a href="[url - à modifier]" class="fr-footer__bottom-link">Mentions légales</a>
                </li>
                <li class="fr-footer__bottom-item">
                    <a href="[url - à modifier]" class="fr-footer__bottom-link">Données personnelles</a>
                </li>
                <li class="fr-footer__bottom-item">
                    <a href="[url - à modifier]" class="fr-footer__bottom-link">Gestion des cookies</a>
                </li>
            </ul>
            <div class="fr-footer__bottom-copy">
                <p>Sauf mention explicite de propriété intellectuelle détenue par des tiers, les contenus de ce site sont proposés sous <a href="https://github.com/etalab/licence-ouverte/blob/master/LO.md" target="_blank" rel="noopener external" title="Licence etalab - nouvelle fenêtre">licence etalab-2.0</a>
                </p>
            </div>
        </div>
    </div>
</footer>
```

**Exemple de structure complète** Cet exemple inclut un bloc de navigation, un bloc-marque avec logo opérateur, et un bloc de logos partenaires, en plus du contenu minimal.

#### Déplier pour voir le code

```html
<footer class="fr-footer" role="contentinfo">
    <div class="fr-footer__top">
        <div class="fr-container">
            <div class="fr-grid-row fr-grid-row--start fr-grid-row--gutters">
                <div class="fr-col-12 fr-col-sm-3 fr-col-md-2">
                    <h2 class="fr-footer__top-cat">
                        Nom de la catégorie
                    </h2>
                    <ul class="fr-footer__top-list">
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                    </ul>
                </div>
                <div class="fr-col-12 fr-col-sm-3 fr-col-md-2">
                    <h2 class="fr-footer__top-cat">
                        Nom de la catégorie
                    </h2>
                    <ul class="fr-footer__top-list">
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                    </ul>
                </div>
                <div class="fr-col-12 fr-col-sm-3 fr-col-md-2">
                    <h2 class="fr-footer__top-cat">
                        Nom de la catégorie
                    </h2>
                    <ul class="fr-footer__top-list">
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                    </ul>
                </div>
                <div class="fr-col-12 fr-col-sm-3 fr-col-md-2">
                    <h2 class="fr-footer__top-cat">
                        Nom de la catégorie
                    </h2>
                    <ul class="fr-footer__top-list">
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                    </ul>
                </div>
                <div class="fr-col-12 fr-col-sm-3 fr-col-md-2">
                    <h2 class="fr-footer__top-cat">
                        Nom de la catégorie
                    </h2>
                    <ul class="fr-footer__top-list">
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                    </ul>
                </div>
                <div class="fr-col-12 fr-col-sm-3 fr-col-md-2">
                    <h2 class="fr-footer__top-cat">
                        Nom de la catégorie
                    </h2>
                    <ul class="fr-footer__top-list">
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="fr-container">
        <div class="fr-footer__body">
            <div class="fr-footer__brand fr-enlarge-link">
                <p class="fr-logo">
                    République
                    <br>Française
                </p>
                <a title="Retour à l’accueil du site - [À MODIFIER - texte alternatif de l’image : nom de l'opérateur ou du site serviciel] - République Française" href="/" class="fr-footer__brand-link">
                    <img class="fr-footer__logo" style="width:10rem;" src="../../../example/img/placeholder.16x9.png" alt="[À MODIFIER - texte alternatif de l’image]" />
                </a>
            </div>
            <div class="fr-footer__content">
                <p class="fr-footer__content-desc">Lorem [...] elit ut.</p>
                <ul class="fr-footer__content-list">
                    <li class="fr-footer__content-item">
                        <a title="info.gouv.fr - nouvelle fenêtre" href="https://info.gouv.fr" target="_blank" rel="noopener external" class="fr-footer__content-link">info.gouv.fr</a>
                    </li>
                    <li class="fr-footer__content-item">
                        <a title="service-public.gouv.fr - nouvelle fenêtre" href="https://service-public.gouv.fr" target="_blank" rel="noopener external" class="fr-footer__content-link">service-public.gouv.fr</a>
                    </li>
                    <li class="fr-footer__content-item">
                        <a title="legifrance.gouv.fr - nouvelle fenêtre" href="https://legifrance.gouv.fr" target="_blank" rel="noopener external" class="fr-footer__content-link">legifrance.gouv.fr</a>
                    </li>
                    <li class="fr-footer__content-item">
                        <a title="data.gouv.fr - nouvelle fenêtre" href="https://data.gouv.fr" target="_blank" rel="noopener external" class="fr-footer__content-link">data.gouv.fr</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="fr-footer__partners">
            <h2 class="fr-footer__partners-title">Nos partenaires</h2>
            <div class="fr-footer__partners-logos">
                <div class="fr-footer__partners-main">
                    <a class="fr-footer__partners-link" href="">
                        <img class="fr-footer__logo" style="height: 5.625rem" src="../../../example/img/placeholder.16x9.png" alt="[À MODIFIER - texte alternatif de l’image]" />
                    </a>
                </div>
                <div class="fr-footer__partners-sub">
                    <ul>
                        <li>
                            <a class="fr-footer__partners-link" href="">
                                <img class="fr-footer__logo" style="height: 5.625rem" src="../../../example/img/placeholder.16x9.png" alt="[À MODIFIER - texte alternatif de l’image]" />
                            </a>
                        </li>
                        <li>
                            <a class="fr-footer__partners-link" href="">
                                <img class="fr-footer__logo" style="height: 5.625rem" src="../../../example/img/placeholder.1x1.png" alt="[À MODIFIER - texte alternatif de l’image]" />
                            </a>
                        </li>
                        <li>
                            <a class="fr-footer__partners-link" href="">
                                <img class="fr-footer__logo" style="height: 5.625rem" src="../../../example/img/placeholder.9x16.png" alt="[À MODIFIER - texte alternatif de l’image]" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="fr-footer__bottom">
            <ul class="fr-footer__bottom-list">
                <li class="fr-footer__bottom-item">
                    <a href="[url - à modifier]" class="fr-footer__bottom-link">Plan du site</a>
                </li>
                <li class="fr-footer__bottom-item">
                    <a href="[url - à modifier]" class="fr-footer__bottom-link">Accessibilité : non/partiellement/totalement conforme</a>
                </li>
                <li class="fr-footer__bottom-item">
                    <a href="[url - à modifier]" class="fr-footer__bottom-link">Mentions légales</a>
                </li>
                <li class="fr-footer__bottom-item">
                    <a href="[url - à modifier]" class="fr-footer__bottom-link">Données personnelles</a>
                </li>
                <li class="fr-footer__bottom-item">
                    <a href="[url - à modifier]" class="fr-footer__bottom-link">Gestion des cookies</a>
                </li>
            </ul>
            <div class="fr-footer__bottom-copy">
                <p>Sauf mention explicite de propriété intellectuelle détenue par des tiers, les contenus de ce site sont proposés sous <a href="https://github.com/etalab/licence-ouverte/blob/master/LO.md" target="_blank" rel="noopener external" title="Licence etalab - nouvelle fenêtre">licence etalab-2.0</a>
                </p>
            </div>
        </div>
    </div>
</footer>
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
| Logo | Oui |
| Footer | Oui |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/logo/logo.min.css" rel="stylesheet">
<link href="dist/component/footer/footer.min.css" rel="stylesheet">
```

---

### JavaScript

Le composant Pied de page **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+footer+)

#### [v1.15.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.15.0) - 17 juillet 2026

- **[niveau de titre des catégories du menu](https://github.com/GouvernementFR/dsfr/pull/1454)**  
  #1454  
  📝 docs  
  footer

- **[niveau de titre des catégories du menu en h2](https://github.com/GouvernementFR/dsfr/pull/1393)**  
  #1393  
  - Par défaut, le titre des catégories du menu du footer sont maintenant en h2  
  🐛 fix  
  footer

#### [v1.14.2](https://github.com/GouvernementFR/dsfr/releases/tag/v1.14.2) - 17 septembre 2025

- **[met a jour le lien du footer service-public.gouv.fr](https://github.com/GouvernementFR/dsfr/pull/1295)**  
  #1295  
  - Remplace le lien "service-public.fr" par "service-public.gouv.fr" dans le composant footer et les exemples utilisant le pied de page  
  🐛 fix  
  footer

#### [v1.12.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.12.0) - 19 juin 2024

- **[réduction de la zone de clic retour à l'accueil](https://github.com/GouvernementFR/dsfr/pull/944)**  
  #944  
  - sur le header mobile la partie à droite du brand n'est plus cliquable pour éviter les clics manqués sur le burger ou la recherche, et le lien du nom de service n'est plus étendu sur toute la largeur
- sur le footer mobile la zone de clic n'est plus étendu sur toute la largeur  
  🐛 fix  
  footer header

- **[title des liens obligatoires du footer](https://github.com/GouvernementFR/dsfr/pull/905)**  
  #905  
  - remplace l'intitulé par défaut "[A modifier]" de l'attribut title par l'intitulé officiel sur les liens obligatoires du footer.
- change l'ordre des liens, et gouvernement.fr devient info.gouv.fr  
  🐛 fix  
  footer

#### [v1.11.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.1) - 31 janvier 2024

- **[retrait de l'icone target blank](https://github.com/GouvernementFR/dsfr/pull/872)**  
  #872  
  🐛 fix  
  footer header connect

#### [v1.11.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.0) - 11 décembre 2023

- **[ajustements](https://github.com/GouvernementFR/dsfr/pull/792)**  
  #792  
  - corrige le niveau de titre des partenaires
- le texte filler de footer__content-desc doit faire maximum 3 lignes en desktop
- passe les liens .fr-footer__content-link en $text-default-grey
- passe le padding top de .fr-footer__bottom-list à 4v
- correction des espacements autour de fr-footer-body : en mobile et en desktop (32px en haut et 24px en bas)
- titre “nos partenaire“ → fr-footer__partners-title passe en graisse régular, couleur text-default-grey
- ecart de 12px sous “Nos partenaire” en mobile/desktop
- enleve le padding sur .fr-footer__partners .fr-footer__logo, ajoute une border 1px en $border-default-grey + un background en background-default-grey
- en desktop l’ecart entre logo et bloc mark passe à 32px
- passe le logo opérateur en 16x9
- ajoute un margin bottom négatif de 8px sur le groupe de lien pour garder 24px en dessous
- retire le padding sur les images des logos partenaire
- passe à 16px entre les logos partenaires secondaires
- rend les partenaires secondaires facultatifs
- corrige alignement des liens en bas du footer  
  🐛 fix  
  footer

#### [v1.10.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.10.0) - 19 juillet 2023

- **[retrait de CSS obsolète](https://github.com/GouvernementFR/dsfr/pull/668)**  
  #668  
  - retrait de CSS résiduel de précédentes versions dans le footer-bottom__list  
  🐛 fix  
  footer

#### [v1.9.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.9.1) - 11 avril 2023

- **[évolution des mentions légales](https://github.com/GouvernementFR/dsfr/pull/568)**  
  #568  
  Nouveau texte : ”Sauf mention explicite de propriété intellectuelle détenue par des tiers, les contenus de ce site sont proposés sous”  
  ✨ feat  
  footer

#### [v1.8.4](https://github.com/GouvernementFR/dsfr/releases/tag/v1.8.4) - 15 novembre 2022

- **[correction sur le séparateur bleu du pied de page](https://github.com/GouvernementFR/dsfr/pull/465)**  
  #465  
  fix  
  footer

#### [v1.8.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.8.0) - 27 octobre 2022

- **[bordure bleu inset & logo toujours aligné en haut](https://github.com/GouvernementFR/dsfr/pull/410)**  
  #410  
  fix  
  footer

#### [v1.7.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.7.0) - 21 juillet 2022

- **[généralisation de l'attribut 'title' du lien retour/accueil du logo](https://github.com/GouvernementFR/dsfr/pull/353)**  
  #353  
  fix  
  footer header

#### [v1.5.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.5.0) - 21 avril 2022

- **[alignement des logos partenaires](https://github.com/GouvernementFR/dsfr/pull/277)**  
  #277  
  fix  
  footer

#### [v1.4.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.4.0) - 16 mars 2022

- **[ajout d'un sample de footer paramétrable](https://github.com/GouvernementFR/dsfr/pull/215)**  
  #215  
  feat  
  footer

#### [v1.2.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.2.0) - 17 novembre 2021

- **[couleur catégorie menu](https://github.com/GouvernementFR/dsfr/pull/131)**  
  #131  
  fix  
  footer

- **[correction couleur des liens](https://github.com/GouvernementFR/dsfr/pull/129)**  
  #129  
  fix  
  footer

- **[met a jour le wording du copyright](https://github.com/GouvernementFR/dsfr/pull/87)**  
  #87  
  fix  
  footer

##### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.

- **[Lettre d'information et réseaux sociaux](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lettre-d-information-et-reseaux-sociaux)**  
  Présentation du composant Lettre d'information et réseaux sociaux permettant de proposer l’inscription à une lettre d’information et de diriger vers les réseaux sociaux de l’entité.

- **[Navigation principale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale)**  
  Présentation du composant Navigation principale organisant les grandes rubriques d’un site et permettant à l’usager de s’orienter dans son arborescence.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page/accessibilite-du-pied-de-page

Le composant **Pied de page** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Il n'y a aucune interaction spécifique au composant **Pied de page** .

Les interactions clavier sont celles des [liens](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lien/accessibilite-du-lien) contenus dans le pied de page.

### Règles d’accessibilité

Les règles d’accessibilité du composant "Pied de page" découlent de celles des composants qui la compose.

L'élément `<footer>` doit posséder un `role="contentinfo"`.

#### Mention obligatoire

Une mention obligatoire de conformité au RGAA doit apparaître sur toutes les pages.

Cette mention peut être cliquable et conduire vers la page Accessibilité ou vers la déclaration d’accessibilité.

La mention se décline en :

- « Accessibilité : non conforme » si le taux de conformité est inférieur à 50% (ou qu’aucun audit n’a été effectué)
- « Accessibilité : partiellement conforme » si le taux de conformité est supérieur à 50%.
- « Accessibilité : totalement conforme » si le taux de conformité est égal à 100%.

Voir plus d'information sur les obligations légales sur l’ [accessibilité des sites publics](https://design.numerique.gouv.fr/accessibilite-numerique/cadre-legal/) .

### Contrastes de couleurs

Le pied de page est suffisamment contrasté en thème clair et en thème sombre.

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
- **Navigation :** 12.6, 12.8, 12.9
- **Consultation :** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Élément footer](https://html.spec.whatwg.org/#the-footer-element)

##### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.

- **[Lettre d'information et réseaux sociaux](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lettre-d-information-et-reseaux-sociaux)**  
  Présentation du composant Lettre d'information et réseaux sociaux permettant de proposer l’inscription à une lettre d’information et de diriger vers les réseaux sociaux de l’entité.

- **[Navigation principale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale)**  
  Présentation du composant Navigation principale organisant les grandes rubriques d’un site et permettant à l’usager de s’orienter dans son arborescence.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page/demonstration-du-pied-de-page

*(Démonstration interactive « footer--docs » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=footer--docs&nav=0&globals=theme%3Alight)*

#### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.

- **[Lettre d'information et réseaux sociaux](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lettre-d-information-et-reseaux-sociaux)**  
  Présentation du composant Lettre d'information et réseaux sociaux permettant de proposer l’inscription à une lettre d’information et de diriger vers les réseaux sociaux de l’entité.

- **[Navigation principale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale)**  
  Présentation du composant Navigation principale organisant les grandes rubriques d’un site et permettant à l’usager de s’orienter dans son arborescence.
