# Paramètres d'affichage

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/parametres-d-affichage · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/parametres-d-affichage/design-des-parametres-d-affichage · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/parametres-d-affichage/code-des-parametres-d-affichage · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/parametres-d-affichage/accessibilite-des-parametres-d-affichage · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/parametres-d-affichage/demonstration-des-parametres-d-affichage
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

Les paramètres d’affichage représentent un parcours simple permettant à l’usager d’interagir avec l’interface afin de modifier le thème d’un site.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/parametres-d-affichage

*(Démonstration interactive « display--display » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=display--display&nav=0&globals=theme%3Alight)*

### Quand utiliser ce composant ?

Utiliser les paramètres d’affichage pour donner la possibilité à l’usager de choisir d’afficher le site en thème clair ou en thème sombre (pour en savoir plus sur ces deux thèmes, consultez [la page relative aux couleurs](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/couleurs) ).

### Comment utiliser ce composant ?

- **Intégrer les paramètres d’affichage dans l’en-tête ou le pied de page** de votre site, selon vos préférences.

> **À faire :** Intégrer les paramètres d’affichage au sein de l’en-tête, à l’emplacement de l’un des accès rapides.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/display/use/do-1.png)

> **À ne pas faire :** Ne pas proposer les paramètres d’affichage en dehors des accès rapides.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/display/use/dont-1.png)

> **À faire :** Intégrer les paramètres d’affichage au sein du pied de page.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/display/use/do-2.png)

- **Figer la page en arrière plan** lorsque la modale de paramètres est ouverte. L’usager ne peut pas scroller le contenu d’arrière plan avant d’avoir clôturé la modale.
- **Opérer la modification du thème dès lors que l’usager a effectué son choix au sein de la modale** . Le changement est immédiat et ne nécessite aucune action complémentaire.
- **Permettre à l’usager de reprendre sa navigation** à l’endroit où il se trouvait auparavant dans la page simplement en fermant la modale de paramètres.

### Règles éditoriales

Les paramètres d’affichage ne sont régis par aucune règle éditoriale spécifique.

#### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.

- **[Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale)**  
  Présentation du composant Modale permettant de focaliser l’attention de l’usager sur une tâche ou une information sans quitter la page.

- **[Pied de page](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page)**  
  Présentation du composant Pied de page destiné à structurer les informations complémentaires et les liens secondaires en bas de page.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/parametres-d-affichage/design-des-parametres-d-affichage

![Anatomie des paramètres d'affichage](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/display/design/anatomy/anatomy-1.png)

1. Un bouton, à intégrer à l’en-tête ou au pied de page de votre site — Obligatoire
2. Un titre — Obligatoire
3. Un bouton “Fermer” — Obligatoire
4. Une description — Obligatoire
5. Des boutons radio riches, au moins deux — Obligatoire
6. Une modale, s’ouvrant au clic sur le lien — Obligatoire

### Variations

**Paramètres d’affichage intégrés dans l’en-tête du site**

*(Démonstration interactive « display--header-display » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=display--header-display&nav=0&globals=theme%3Alight)*

Lorsque le bouton “paramètres d’affichage” est mis en avant dans l’en-tête de la page, il prend la forme d’un lien d’accès rapide.

En version mobile, l’accès rapide au bouton “paramètres d’affichage” se trouve dans le menu.

**Paramètres d’affichage intégrés dans le pied de page**

*(Démonstration interactive « display--footer-display » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=display--footer-display&nav=0&globals=theme%3Alight)*

Lorsque le bouton “paramètres d’affichage” est mis en avant dans le pied de page, il est intégré au niveau des mentions légales.

Quelque soit la variation choisie, en responsive, les éléments du parcours paramètres d’affichage affichent automatiquement les versions mobiles des composants en-tête avec accès rapide et [modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale) .

### Tailles

La taille des paramètres d’affichage reprend les options disponibles au sein de la [modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale) .

### États

Les paramètres d’affichage ne sont sujets à aucun changement d’état.

### Personnalisation

Les paramètres d’affichage ne sont pas personnalisables, à l’exception du texte de description.

> **À faire :** Personnaliser le texte de description des paramètres d’affichage.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/display/design/custom/do-1.png)

> **À ne pas faire :** Ne pas personnaliser les pictogrammes par défaut des boutons riches.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/display/design/custom/dont-1.png)

#### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.

- **[Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale)**  
  Présentation du composant Modale permettant de focaliser l’attention de l’usager sur une tâche ou une information sans quitter la page.

- **[Pied de page](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page)**  
  Présentation du composant Pied de page destiné à structurer les informations complémentaires et les liens secondaires en bas de page.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/parametres-d-affichage/code-des-parametres-d-affichage

### HTML

Le composant **Paramètre d'affichage** est composé d'un **bouton** qui ouvre une **modale** contenant des boutons radios pour choisir le thème du site.

- Le bouton d'ouverture de la modale doit avoir l'attribut `aria-controls` avec la valeur de l'id de la modale et l'attribut `data-fr-opened="false"`.
- La modale en taille SM doit contenir un bouton de fermeture, un titre "Paramètres d’affichage" lié au `aria-labelledby` de la dialog, et un élément `fr-display` contenant un groupe de boutons radios pour choisir le thème. Chaque bouton radio doit avoir un `id` unique, un attribut `name="fr-radios-theme"`, et un attribut `value` correspondant à la valeur du thème.

Voici un exemple de code pour utiliser le composant **Paramètre d'affichage** :

**Exemple de bouton d'ouverture**

```html
<button aria-controls="fr-theme-modal" data-fr-opened="false" title="Paramètres d'affichage" type="button" class="fr-btn--display fr-btn">
    Paramètres d'affichage
</button>
```

**Exemple de modale de paramètre d'affichage**

#### Déplier pour voir le code

```html
<dialog id="fr-theme-modal" class="fr-modal" aria-labelledby="fr-theme-modal-title">
    <div class="fr-container fr-container--fluid fr-container-md">
        <div class="fr-grid-row fr-grid-row--center">
            <div class="fr-col-12 fr-col-md-6 fr-col-lg-4">
                <div class="fr-modal__body">
                    <div class="fr-modal__header">
                        <button aria-controls="fr-theme-modal" title="Fermer" type="button" class="fr-btn--close fr-btn">Fermer</button>
                    </div>
                    <div class="fr-modal__content">
                        <h1 id="fr-theme-modal-title" class="fr-modal__title">
                            Paramètres d’affichage
                        </h1>
                        <div id="fr-display" class="fr-display">
                            <fieldset class="fr-fieldset" id="display-fieldset">
                                <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="display-fieldset-legend">
                                    Choisissez un thème pour personnaliser l’apparence du site.
                                </legend>
                                <div class="fr-fieldset__element">
                                    <div class="fr-radio-group fr-radio-rich">
                                        <input value="light" type="radio" id="fr-radios-theme-light" name="fr-radios-theme">
                                        <label class="fr-label" for="fr-radios-theme-light">
                                            Thème clair
                                        </label>
                                        <div class="fr-radio-rich__pictogram">
                                            <svg aria-hidden="true" class="fr-artwork" viewBox="0 0 80 80" width="80px" height="80px">
                                                <use class="fr-artwork-decorative" href="../../../dist/artwork/pictograms/environment/sun.svg#artwork-decorative"></use>
                                                <use class="fr-artwork-minor" href="../../../dist/artwork/pictograms/environment/sun.svg#artwork-minor"></use>
                                                <use class="fr-artwork-major" href="../../../dist/artwork/pictograms/environment/sun.svg#artwork-major"></use>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="fr-fieldset__element">
                                    <div class="fr-radio-group fr-radio-rich">
                                        <input value="dark" type="radio" id="fr-radios-theme-dark" name="fr-radios-theme">
                                        <label class="fr-label" for="fr-radios-theme-dark">
                                            Thème sombre
                                        </label>
                                        <div class="fr-radio-rich__pictogram">
                                            <svg aria-hidden="true" class="fr-artwork" viewBox="0 0 80 80" width="80px" height="80px">
                                                <use class="fr-artwork-decorative" href="../../../dist/artwork/pictograms/environment/moon.svg#artwork-decorative"></use>
                                                <use class="fr-artwork-minor" href="../../../dist/artwork/pictograms/environment/moon.svg#artwork-minor"></use>
                                                <use class="fr-artwork-major" href="../../../dist/artwork/pictograms/environment/moon.svg#artwork-major"></use>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="fr-fieldset__element">
                                    <div class="fr-radio-group fr-radio-rich">
                                        <input value="system" type="radio" id="fr-radios-theme-system" name="fr-radios-theme">
                                        <label class="fr-label" for="fr-radios-theme-system">
                                            Système
                                            <span class="fr-hint-text">Utilise les paramètres système</span>
                                        </label>
                                        <div class="fr-radio-rich__pictogram">
                                            <svg aria-hidden="true" class="fr-artwork" viewBox="0 0 80 80" width="80px" height="80px">
                                                <use class="fr-artwork-decorative" href="../../../dist/artwork/pictograms/system/system.svg#artwork-decorative"></use>
                                                <use class="fr-artwork-minor" href="../../../dist/artwork/pictograms/system/system.svg#artwork-minor"></use>
                                                <use class="fr-artwork-major" href="../../../dist/artwork/pictograms/system/system.svg#artwork-major"></use>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</dialog>
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
| Form | Oui |
| Modal | Oui |
| Radio | Oui |
| Scheme | Oui |
| Display | Oui |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/form/form.min.css" rel="stylesheet">
<link href="dist/component/modal/modal.min.css" rel="stylesheet">
<link href="dist/component/radio/radio.min.css" rel="stylesheet">
<link href="dist/scheme/scheme.min.css" rel="stylesheet">
<link href="dist/component/display/display.min.css" rel="stylesheet">
```

#### Variantes de bouton d'ouverture

- Lorsque le lien paramètres d’affichage est mis en avant dans l’en-tête de la page, il prend la forme d’un lien accès rapide, dans le bloc `fr-header__tools-links`.
- Lorsque le lien paramètres d’affichage est mis en avant dans le pied de page, il est intégré au niveau des mentions légales, il prend la forme d'un lien du pied de page, dans un `<li>` de classe `fr-footer__bottom-item`.

---

### JavaScript

Pour fonctionner le composant paramètre d'affichage nécessite l'utilisation de JavaScript. Ce composant est aussi dépendant du **core** et de la **modale** .

#### Installation du JavaScript

Pour fonctionner correctement, les scripts JavaScript du paramètre d'affichage, du core, de scheme, et de la modale doivent être importés. L'import doit se faire avant la fermeture du body, et de préférence avec le fichier minifié, car plus léger.

```html
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/scheme/scheme.module.min.js"></script>
<script type="module" src="dist/component/modal/modal.module.min.js"></script>
<script type="module" src="dist/component/display/display.module.min.js"></script>
```

NB : Il est aussi possible d'importer le JavaScript global du DSFR `dsfr.module.min.js`.

La gestion du thème ne fonctionne pas sur Internet Explorer 11 qui ne supporte pas les variables CSS.

#### Instances

Sur le paramètre d'affichage, les éléments suivants sont instanciés :

- Le bloc de paramètres, via la classe : `fr-display`.
- La modale, via la classe : `fr-modal`.
- Les boutons d'ouvertures et de fermeture de la modale, via l'attribut : `aria-controls` lié à l'id de la modale.

Une fois chargé, le Js ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés

#### API

Afin d’ **activer la gestion du thème** , il est nécessaire d’ajouter l’attribut `data-fr-scheme` sur la balise `<html>`. Si l’attribut n’est pas présent, le site s’affichera en mode clair (thème par défaut) et le composant paramètre d'affichage ne fonctionnera pas.

Si l’attribut est présent, la valeur par défaut est `system` : les préférences par défaut du navigateur/OS sont prises en compte (en se basant sur la média query `prefers-color-scheme`). Les valeurs possibles sont `light`, `dark` et `system`.

Le **changement de thème** au clic sur les boutons radios du composant paramètre d'affichage n'est pas disponible via l'API JS, il se fait automatiquement via l'ajout de l'attribut `name="fr-radios-theme"` sur l'élément `<input>` du radio et de la valeur `light`, `dark` ou `system` au niveau de l'attribut `value`.

Il est possible de **changer la valeur du thème dynamiquement** , sans passer par le composant paramètre d'affichage, via l'API `dsfr(document.documentElement).scheme.scheme` :

- `dsfr(document.documentElement).scheme.scheme =
   'light'` : pour le thème clair.
- `dsfr(document.documentElement).scheme.scheme =
   'dark'` : pour le thème sombre.
- `dsfr(document.documentElement).scheme.scheme =
   'system'` : pour le thème système.

> **Attention**
> La propriété `data-fr-theme` est injectée sur l'élément `<html>` à partir de la valeur du scheme, elle ne doit pas être modifiée directement. Elle prendra automatiquement la valeur `light` ou `dark` en fonction de la valeur du scheme, ou des préférences système de l'utilisateur.

#### Script de chargement du thème

Pour éviter un effet de flash lors du chargement de la page, il est possible d'ajouter un script qui va détecter le thème préféré de l'utilisateur et appliquer le thème correspondant.

Ce script doit **s'exécuter le plus tôt possible dans le `<head>` de la page** , avant le chargement du reste de la page.

```html
<script type="module">
    const e="system",t="dark",c="dark",o="data-fr-theme",a="data-fr-scheme",r=`:root[${o}], :root[${a}]`,m=()=>{document.documentElement.setAttribute(o,c),document.documentElement.style.colorScheme="dark"},n=()=>{window.matchMedia("(prefers-color-scheme: dark)").matches&&m()};(()=>{if(document.documentElement.matches(r)){const c=(()=>{try{return"localStorage"in window&&null!==window.localStorage}catch(e){return!1}})()?localStorage.getItem("scheme"):"",o=document.documentElement.getAttribute(a);switch(!0){case c===t:m();break;case c===e:n();break;case o===t:m();break;case o===e:n()}}})();
</script>
```

#### Événements

Le Système de Design fournit des événements personnalisés pour les actions uniques de la part de certains composants réactifs listés sur la page de l' [API Javascript](https://www.systeme-de-design.gouv.fr/version-courante/fr/premiers-pas/vous-etes-developpeur/api-javascript) .

Sur la modale du paramètre d'affichage, les événements suivants sont disponibles :

**événements**

| Événement | Action | Élément | Attribut |
|---|---|---|---|
| `dsfr.conceal` | Fermeture de la modale | Modal | `data-fr-js-modal` |
| `dsfr.disclose` | Ouverture de la modale | Modal | `data-fr-js-modal` |
| `dsfr.click` | Click sur le bouton d'ouverture | ModalButton | `data-fr-js-modal-button` |

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+display+)

#### [v1.15.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.15.0) - 17 juillet 2026

- **[désactive le composant quand l'attribut HTML `data-fr-scheme` est absent](https://github.com/GouvernementFR/dsfr/pull/1434)**  
  #1434  
  - Corrige la marge basse dans la modale
- Désactive le composant quand l'attribut data-fr-scheme est absent  
  🐛 fix  
  display

#### [v1.14.2](https://github.com/GouvernementFR/dsfr/releases/tag/v1.14.2) - 17 septembre 2025

- **[corrige affichage dans storybook](https://github.com/GouvernementFR/dsfr/pull/1290)**  
  #1290  
  - corrige l'affichage des modales ouvertes dans storybook  
  🐛 fix  
  display transcription

#### [v1.8.2](https://github.com/GouvernementFR/dsfr/releases/tag/v1.8.2) - 9 novembre 2022

- **[correctif duplication du sélecteur de langue](https://github.com/GouvernementFR/dsfr/pull/454)**  
  #454  
  fix  
  display

#### [v1.4.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.4.0) - 16 mars 2022

- **[correction et support des versions dépréciées](https://github.com/GouvernementFR/dsfr/pull/247)**  
  #247  
  fix  
  display

#### [v1.2.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.2.0) - 17 novembre 2021

- **[corrige bouton d'affichage et bug a la selection du mode](https://github.com/GouvernementFR/dsfr/pull/119)**  
  #119  
  fix  
  display

- **[ajoute des attributs d'accessibilité sur les svg](https://github.com/GouvernementFR/dsfr/pull/118)**  
  #118  
  fix  
  display

- **[Ajout icones illustratives & thème systeme](https://github.com/GouvernementFR/dsfr/pull/109)**  
  #109  
  feat  
  display

##### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.

- **[Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale)**  
  Présentation du composant Modale permettant de focaliser l’attention de l’usager sur une tâche ou une information sans quitter la page.

- **[Pied de page](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page)**  
  Présentation du composant Pied de page destiné à structurer les informations complémentaires et les liens secondaires en bas de page.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/parametres-d-affichage/accessibilite-des-parametres-d-affichage

Le composant **Paramètres d’affichage** est conçu pour être accessible et respecter les critères du RGAA.

Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Il n'y a aucune interaction spécifique au composant **Paramètre d'affichage** .

Les interactions clavier sont celles liées à la [modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale/accessibilite-de-la-modale) , aux [boutons](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton/accessibilite-du-bouton) , et aux [boutons radios](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio/accessibilite-du-bouton-radio) .

### Règles d’accessibilité

- Si la gestion du thème est activée, toujours intégrer le composant Paramètre d'affichage pour laisser la possibilité à l’utilisateur de choisir l’affichage qui lui convient le mieux.
- Privilégier le thème système par défaut pour garantir une expérience utilisateur optimale.
- Si l’utilisateur effectue un changement de thème, son choix est conservé (dans le local storage) pour les visites ultérieures.

Respecter les règles d’accessibilité pour :

- les [boutons](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton/accessibilite-du-bouton) ,
- la [modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale/accessibilite-de-la-modale) ,
- les [boutons radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio/accessibilite-du-bouton-radio) .

### Critères RGAA applicables

- **Couleurs :** 3.2, 3.3
- **Scripts :** 7.1, 7.3
- **Structuration :** 9.1
- **Présentation de l’information :** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Formulaires :** 11.1, 11.2, 11.4, 11.5, 11.6, 11.7
- **Navigation :** 12.8, 12.9
- **Consultation :** 13.9, 13.10, 13.11, 13.12

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)

#### Ressources

- [Thème sombre et accessibilité](https://stephaniewalter.design/fr/blog/theme-sombre-dark-mode-et-mythe-daccessibilite/)

##### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.

- **[Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale)**  
  Présentation du composant Modale permettant de focaliser l’attention de l’usager sur une tâche ou une information sans quitter la page.

- **[Pied de page](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page)**  
  Présentation du composant Pied de page destiné à structurer les informations complémentaires et les liens secondaires en bas de page.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/parametres-d-affichage/demonstration-des-parametres-d-affichage

#### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.

- **[Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale)**  
  Présentation du composant Modale permettant de focaliser l’attention de l’usager sur une tâche ou une information sans quitter la page.

- **[Pied de page](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page)**  
  Présentation du composant Pied de page destiné à structurer les informations complémentaires et les liens secondaires en bas de page.
