# Modale

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale/design-de-la-modale · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale/code-de-la-modale · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale/accessibilite-de-la-modale · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale/demonstration-de-la-modale
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

La modale est un élément de mise en forme de contenu permettant de concentrer l’attention de l’usager exclusivement sur une tâche ou un élément d’information, sans perdre le contexte de la page en cours.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale

*(Démonstration interactive « modal--modal » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=modal--modal&nav=0&globals=theme%3Alight)*

### Quand utiliser ce composant ?

Utiliser la modale pour hiérarchiser l’information au sein d’une page ou afficher un contenu à part. Elle permet de mettre en évidence une information importante, à la suite du clic sur un bouton.

**Exemples de cas d’usage fréquents :** gestionnaire de consentement, paramètres d’affichage, formulaire simple, demande d’un choix à l’utilisateur, affichage d’un média etc.

### Comment utiliser ce composant ?

- **Utiliser les modales pour afficher des informations importantes** . Il est toutefois recommandé de les utiliser avec parcimonie car elles sont invasives dans l’expérience de l’usager.
- **Permettre à l’usager de reprendre sa navigation** à l’endroit où il se trouvait auparavant dans la page simplement en fermant la modale.
- **Figer la page en arrière plan** lorsqu’une modale est ouverte. L’usager ne peut pas scroller le contenu d’arrière plan avant d’avoir clôturé la modale.
- **Limiter le nombre d'interactions** dans une modale, et si celle-ci en propose, rester sur des interactions simples (exemples : bouton, bouton radio, lien etc.).

> **À faire :** Proposer uniquement des interactions simples et limités au sein de la modale.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/modal/use/do-1.png)

> **À ne pas faire :** Ne pas insérer de composants complexes, inadaptés à l’usage de la modale.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/modal/use/dont-1.png)

- **Éviter de présenter des décisions complexes** dans une modale, notamment lorsque celles-ci nécessitent la consultation de sources d’informations supplémentaires.
- **Privilégier l’usage de l’accordéon** si l’objectif est de proposer un complément de contenu (exemple : “En savoir plus”).

### Règles éditoriales

- **Ajouter tout type de contenu** à votre modale, dans le respect des règles d’utilisation précédemment mentionnées.

#### Contenu associé

- **[Bouton](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton)**  
  Présentation du composant Bouton permettant à l’usager d’exécuter une action dans une interface numérique.

- **[Paramètres d'affichage](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/parametres-d-affichage)**  
  Présentation du composant Paramètres d’affichage permettant à l’usager de modifier le thème visuel d’un site entre mode clair et mode sombre.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale/design-de-la-modale

![Anatomie du bouton](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/modal/design/anatomy/anatomy-1.png)

1. Une icône — En option
2. Un titre — Obligatoire
3. Un bouton “Fermer” — Obligatoire
4. Une zone de contenu — Obligatoire
5. Un overlay, disposé à l’arrière du composant — Obligatoire
6. Une zone d’action fixe — En option

### Variations

**Modale avec zone d’action**

*(Démonstration interactive « modal--footer » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=modal--footer&nav=0&globals=theme%3Alight)*

La modale avec une zone d’action permet de guider l’utilisateur vers des actions attendues. Elle reprend les éléments de la modale simple, auxquels s’ajoute une zone d’action composée soit d’un bouton primaire, soit d’un [groupe de boutons hiérarchisé](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton/design-du-bouton#variations) .

**Modale alignée en haut en mobile**

*(Démonstration interactive « modal--modal » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=modal--modal&nav=0&args=top%3Atrue&globals=theme%3Alight)*

Une variation permet à la modale d’être alignée en haut de l’écran en mobile plutôt qu’en bas.

### Tailles

La modale est disponible en trois tailles :

- SM pour small

*(Démonstration interactive « modal--size-sm » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=modal--size-sm&nav=0&globals=theme%3Alight)*

- MD pour medium - taille par défaut

*(Démonstration interactive « modal--size-md » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=modal--size-md&nav=0&globals=theme%3Alight)*

- LG pour large

*(Démonstration interactive « modal--size-lg » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=modal--size-lg&nav=0&globals=theme%3Alight)*

- **Adapter la taille de la modale au volume de votre contenu.**

En desktop, la hauteur maximum des modales est fixée à 80% de la hauteur de l'écran, seule la largeur varie selon la taille choisie. Si le contenu est trop long pour s’afficher dans la surface prévue par la modale, la barre de scroll du navigateur s’affiche et permet de faire défiler le contenu.

En version mobile, la modale s’affiche sur la quasi totalité de l'écran :

- 100% de largeur.
- La hauteur minimale dépend du contenu. 32px de marge laissée en haut de l'écran (ou en bas pour la variante avec modale alignée en haut).

*(Démonstration interactive « modal--modal » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=modal--modal&nav=0&globals=theme%3Alight)*

### États

La modale n’est sujette à aucun changement d’état.

### Personnalisation

La modale n’est pas personnalisable.

Toutefois, certains éléments sont optionnels et les icônes peuvent être changées - voir [la structure du composant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale/design-de-la-modale#modale) .

#### Contenu associé

- **[Bouton](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton)**  
  Présentation du composant Bouton permettant à l’usager d’exécuter une action dans une interface numérique.

- **[Paramètres d'affichage](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/parametres-d-affichage)**  
  Présentation du composant Paramètres d’affichage permettant à l’usager de modifier le thème visuel d’un site entre mode clair et mode sombre.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale/code-de-la-modale

### HTML

#### Structure du composant

Le composant **Modale** permet d'afficher du contenu en plein écran.

Sa structure est la suivante :

- Le bouton d'ouverture de la modale est défini par la classe `fr-btn` et l'attribut `aria-controls` lié à l'ID de la modale.
  - Le bouton doit être de type "button".
  - Le bouton dispose d'un attribut `data-fr-opened`, sa valeur [true|false] défini si la modale est ouverte ou fermée.
- La modale, définie par la classe `fr-modal`, est un élément HTML `<dialog>`.
  - Elle dispose d'un attribut `id` obligatoire, pour être lié au bouton d'ouverture.
  - La modale est liée à son titre via l'attribut `aria-labelledby`, dont la valeur doit correspondre à l'attribut `id` du titre.
- Son contenu est structuré :
  - D'un premier conteneur défini par la classe `fr-container`.
  - D'une grille définie par les classes `fr-grid-row` et `fr-grid-row--center`.
  - D'un bloc de colonne définie par les classes `fr-col-12 fr-col-md-8 fr-col-lg-6` pouvant varier en fonction de la taille de la modale désirée.
  - Le corps de la modale défini par la classe `fr-modal__body`, contenant :
    - L'entête de la modale, obligatoire, défini par la classe `fr-modal__header`, contenant :
      - Le bouton de fermeture de la modale, obligatoire, est un élément HTML `<button>`, défini par les classes `fr-btn` et `fr-btn--close`, dont le titre est "Fermer".
      - Le bouton doit être de type "button".
      - Le bouton est lié à la modale via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` de la modale.
    - D'un bloc de contenu, obligatoire, défini par la classe `fr-modal__content`, contenant :
      - Le titre de la modale, obligatoire, dans un niveau d'entête `<hx>` ou un paragraphe `<p>` et défini par la classe `fr-modal__title`.
      - Le contenu de la modale, obligatoire et libre, mais nécessitant l'utilisation de balises adéquates, il n'est pas correcte par exemple de placer du texte directement dans une `<div>`.
    - Le pied de page de la modale, optionnel défini par la classe `fr-modal__footer`, contenant :
      - Un groupe de boutons d'action défini par les classes `fr-btns-group fr-btns-group--right
         fr-btns-group--inline-reverse
         fr-btns-group--inline-lg
         fr-btns-group--icon-left` pouvant varier en fonction de l'affichage désiré des boutons, contenant :
        - Soit un bouton primaire ( [Bouton](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton/code-du-bouton) ).
        - Soit un groupe de boutons hiérarchisé.

> **Information**
> La balise `<dialog>` peut être placée n'importe où sur la page, toutefois nous vous conseillons, si vous en avez la possibilité, d'en faire un enfant direct de la balise `<body>`.

**Exemple de structure HTML**

```html
<button data-fr-opened="false" aria-controls="modal" type="button" class="fr-btn">Modale simple</button>
<dialog id="modal" class="fr-modal" aria-labelledby="modal-title">
    <div class="fr-container fr-container--fluid fr-container-md">
        <div class="fr-grid-row fr-grid-row--center">
            <div class="fr-col-12 fr-col-md-8 fr-col-lg-6">
                <div class="fr-modal__body">
                    <div class="fr-modal__header">
                        <button aria-controls="modal" title="Fermer" type="button" class="fr-btn--close fr-btn">Fermer</button>
                    </div>
                    <div class="fr-modal__content">
                        <h2 id="modal-title" class="fr-modal__title">
                            <span class="fr-icon-arrow-right-line fr-icon--lg" aria-hidden="true"></span>
                            Titre de la modale
                        </h2>
                        <p>
                          <!-- contenu de la modale -->
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</dialog>
```

---

#### CSS

##### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](https://www.systeme-de-design.gouv.fr/version-courante/fr/premiers-pas/vous-etes-developpeur/prise-en-main#les-css) .

**Dépendances CSS**

| Dépendance | Obligatoire |
|---|---|
| Core | Oui |
| Button | Oui |
| Modal | Oui |

**Exemple d'imports CSS**

```html
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/button/button.module.min.js"></script>
<script type="module" src="dist/component/modal/modal.module.min.js"></script>
```

##### Variantes de taille

La modale peut avoir différentes tailles en fonction du nombre de colonnes de la grille qui la compose (Voir [grille](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/grille-et-points-de-rupture) ), sur mobile la modale sera toujours sur 12 colonnes :

- 4 colonnes en LG et 6 colonnes en MD pour une modale SM.
- Par défaut : 6 colonnes en LG et 8 colonnes en MD pour une modale MD.
- 8 colonnes en LG et 10 colonnes en MD pour une modale LG.

**Exemples de variantes de taille**

```html
<div class="fr-col-12 fr-col-md-6 fr-col-lg-4">
    <!-- Contenu de la grille de la modale SM -->
</div>
<div class="fr-col-12 fr-col-md-8 fr-col-lg-6">
    <!-- Contenu de la grille de la modale MD -->
</div>
<div class="fr-col-12 fr-col-md-10 fr-col-lg-8">
    <!-- Contenu de la grille de la modale LG -->
</div>
```

##### Variantes avec zone d'action et boutons

La modale avec une **zone d’action** permet de guider l’utilisateur vers des actions attendues. Par défaut elle reprend les éléments de la modale simple auxquels s’ajoute une zone d’action obligatoire, composée soit d’ **un bouton primaire** , soit d’ **un groupe de boutons hiérarchisé** .

> **Information**
> Pour les contenus trop longs pour s’afficher dans la surface prévue par la modale, un scroll permet de faire défiler l’intégralité de l'information.

**Exemple de modale avec zone d'action et boutons**

```html
<button data-fr-opened="false" aria-controls="modal-action" type="button" class="fr-btn">Modale avec zone d'action</button>
<dialog id="modal-action" class="fr-modal" aria-labelledby="modal-action-title">
    <div class="fr-container fr-container--fluid fr-container-md">
        <div class="fr-grid-row fr-grid-row--center">
            <div class="fr-col-12 fr-col-md-8 fr-col-lg-6">
                <div class="fr-modal__body">
                    <div class="fr-modal__header">
                        <button aria-controls="modal-action" title="Fermer" type="button" class="fr-btn--close fr-btn">Fermer</button>
                    </div>
                    <div class="fr-modal__content">
                        <h2 id="modal-action-title" class="fr-modal__title">
                            <span class="fr-icon-arrow-right-line fr-icon--lg" aria-hidden="true"></span>
                            Titre de la modale
                        </h2>
                        <p><!-- contenu de la modale --></p>
                    </div>
                    <!-- Zone d'action de la modale -->
                    <div class="fr-modal__footer">
                        <ul class="fr-btns-group fr-btns-group--right fr-btns-group--inline-reverse fr-btns-group--inline-lg fr-btns-group--icon-left">
                            <li>
                                <button type="button" class="fr-btn fr-icon-checkbox-circle-line fr-btn--icon-left">Libellé bouton</button>
                            </li>
                            <li>
                                <button type="button" class="fr-btn fr-icon-checkbox-circle-line fr-btn--icon-left fr-btn--secondary">Libellé bouton</button>
                            <li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</dialog>
```

##### Variantes avec zone d'action ancré en haut en mobile

La **zone d’action** de la modale peut être placée en haut de la modale sur mobile avec l'utilisation de la classe `fr-modal--top`.

**Exemple de modale avec zone d'action ancré en haut en mobile**

```html
<dialog id="modal-action-top" class="fr-modal fr-modal--top" aria-labelledby="modal-action-top-title">
    <!-- Contenu de la modale -->
</dialog>
```

##### Variantes modale simple non refermable au clic sur le fond

Par défaut la modale se referme au clic sur le fond de la page, il est possible de contourner ce comportement avec l'utilisation de l'attribut `data-fr-concealing-backdrop="false"`.

**Exemple de modale simple non refermable au clic sur le fond**

```html
<dialog id="modal-backdrop" class="fr-modal" aria-labelledby="modal-backdrop-title" data-fr-concealing-backdrop="false">
    <!-- Contenu de la modale -->
</dialog>
```

---

#### JavaScript

##### Installation du JavaScript

Pour fonctionner le composant modale nécessite l'utilisation de JavaScript. Chaque composant utilisant javascript possède un fichier Js spécifique et requiert le fichier Js du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```html
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/modal/modal.module.min.js"></script>
```

NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```html
<script type="text/javascript" nomodule href="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/modal/modal.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

##### Instances

Sur la modale, les éléments suivants sont instanciés :

- La modale, via la classe : `fr-modal`
- Le bouton d'ouverture de la modale, via l'attribut `aria-controls`

Une fois chargé, le Js ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés

##### Variante de modale sans bouton d'ouverture

**Exemple de modale sans bouton d'ouverture lié**

```html
<dialog id="modal-without-button" class="fr-modal" aria-labelledby="modal-without-button-title">
    <!-- Contenu de la modale -->
</dialog>

<script>
    // Exemple d'ouverture programmatique sans bouton via l'API du DSFR
    const modal = document.querySelector('#modal-without-button');
    window.dsfr(modal).modal.disclose();
</script>
```

L'API du DSFR mémorise l'élément qui avait le focus au moment de l'ouverture de la modale. À la fermeture, elle restaure le focus sur cet élément. Si aucun élément ne possédait le focus c'est le lien autour du logo dans l'en-tête qui prend le focus (premier élément de la page après les liens d'évitements).

Vous pouvez modifier ce comportement pour choisir la destination du focus via l'événement dsfr.conceal de la modale :

```js
modal.addEventListener('dsfr.conceal', (e) => {
    monElement.focus();
});
```

##### Variante de modale avec plusieurs boutons d'ouverture liés

**Exemple de modale avec plusieurs boutons d'ouverture liés**

```html
<button aria-controls="modal-multi-button" data-fr-opened="false" type="button" class="fr-btn">Ouvrir la modale (bouton 1)</button>
<button aria-controls="modal-multi-button" data-fr-opened="false" type="button" class="fr-btn">Ouvrir la modale (bouton 2)</button>
<dialog id="modal-multi-button" class="fr-modal" aria-labelledby="modal-multi-button-title">
    <!-- Contenu de la modale -->
</dialog>
```

Quand plusieurs boutons peuvent ouvrir la même modale, l'API du DSFR détecte quel bouton a déclenché l'ouverture. À la fermeture, elle restaure le focus sur cet élément. Si aucun élément ne possédait le focus c'est le lien autour du logo dans l'en-tête qui prend le focus (premier élément de la page après les liens d'évitements).

##### API

Il est possible d'interagir avec les instances du composants en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :

```js
const elem = document.getElementById('modal');
dsfr(elem).modal.disclose();
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

###### modal

**isEnabled**

| **Description** | Défini si le fonctionnement de la modale est activé ou non |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).modal.isEnabled = false` |

**conceal**

| **Description** | Ferme la modale |
|---|---|
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).modal.conceal()` |

**disclose**

| **Description** | Ouvre la modale |
|---|---|
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).modal.disclose()` |

**isDisclosed**

| **Description** | Retourne vrai si la modale est ouverte |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).modal.isDisclosed` |

**node**

| **Description** | Renvoie le noeud HTML de l'élément. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).modal.node` |

###### modalButton

**focus**

| **Description** | Replace le focus sur le bouton |
|---|---|
| **Type** | function |
| **Arguments** | none |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).modalButton.focus()` |

**parent**

| **Description** | Retourne l'instance du dsfr parente, ici la modale |
|---|---|
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).parent` |

**node**

| **Description** | Renvoie le noeud HTML de l'élément. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).modalButton.node` |

##### Événements

Le Système de Design fournit des événements personnalisés pour les actions uniques de la part de certains composants réactifs listés sur la page de l' [API Javascript](https://www.systeme-de-design.gouv.fr/version-courante/fr/premiers-pas/vous-etes-developpeur/api-javascript) .

Sur la modale, les événements suivants sont disponibles :

**événements**

| Événement | Action | Élément | Attribut |
|---|---|---|---|
| `dsfr.conceal` | Fermeture de la modale | Modal | `data-fr-js-modal` |
| `dsfr.disclose` | Ouverture de la modale | Modal | `data-fr-js-modal` |
| `dsfr.click` | Click sur le bouton d'ouverture | ModalButton | `data-fr-js-modal-button` |

---

#### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+modal)

##### [v1.15.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.15.0) - 17 juillet 2026

- **[correction des extraits de code](https://github.com/GouvernementFR/dsfr/pull/1480)**  
  #1480  
  📝 docs  
  modal

- **[correction doc accessibilité de la modale](https://github.com/GouvernementFR/dsfr/pull/1479)**  
  #1479  
  📝 docs  
  modal

- **[décale d'une scrollbar uniquement la modale ouverte](https://github.com/GouvernementFR/dsfr/pull/1429)**  
  #1429  
  - Toutes les modales étaient impactées par le décalage créé pour pallier l'agrandissement de la fenêtre lié au retrait de la scrollbar lors de l'ouverture d'une modal. Cela créait, entre autres, un décalage de la navigation principale à l'ouverture d'une modale  
  🐛 fix  
  modal

- **[scroll au focus d'un élément caché sous le footer](https://github.com/GouvernementFR/dsfr/pull/1387)**  
  #1387  
  - Lorsque le focus est placé sur un élément caché sous le footer sticky de la modal, on scroll pour qu'il soit visible
- Ajout de la propriété scroll-padding-bottom  
  🐛 fix  
  modal

##### [v1.14.3](https://github.com/GouvernementFR/dsfr/releases/tag/v1.14.3) - 15 décembre 2025

- **[documentation bouton non lié](https://github.com/GouvernementFR/dsfr/pull/1348)**  
  #1348  
  - Ajout de documentation sur la gestion des modales sans bouton associé et avec plusieurs boutons associés
- Ajout d'un exemple de modale avec plusieurs boutons d'ouverture  
  ✨ feat  
  modal

##### [v1.14.2](https://github.com/GouvernementFR/dsfr/releases/tag/v1.14.2) - 17 septembre 2025

- **[uniformisation du formatage des groupes de boutons](https://github.com/GouvernementFR/dsfr/pull/1292)**  
  #1292  
  - Les groupes de boutons sont maintenant présentés dans les exemples de code avec des ul/li plutôt que des div  
  📝 docs  
  button modal

##### [v1.14.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.14.1) - 29 août 2025

- **[marges de la modale en pourcentage](https://github.com/GouvernementFR/dsfr/pull/1221)**  
  #1221  
  - Lorsque la page est insérée dans une iframe plus petite que le viewport les marges en haut et en bas de la modale prennent 10% de la page et non 10% de l'iframe  
  🐛 fix  
  modal

##### [v1.14.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.14.0) - 25 juin 2025

- **[fermeture du tooltip avant la fermeture de la modale](https://github.com/GouvernementFR/dsfr/pull/1174)**  
  #1174  
  ✨ feat  
  modal tooltip

##### [v1.13.2](https://github.com/GouvernementFR/dsfr/releases/tag/v1.13.2) - 15 mai 2025

- **[correction warning console header](https://github.com/GouvernementFR/dsfr/pull/1154)**  
  #1154  
  Lorsque le header est désactivé en desktop, le js de header retire l'aria-label de la modal car inutile. Le message d'avertissement dans la console indique alors que la modal ne contient pas d'attribut aria. Cette vérification ne doit être faite que si la modale est active. #1120  
  🐛 fix  
  modal

##### [v1.13.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.13.1) - 26 mars 2025

- **[bouton non requis + correctif](https://github.com/GouvernementFR/dsfr/pull/1103)**  
  #1103  
  - focusManager gère le retour du focus en cas d'absence d'un bouton primaire.
- correction du bug focus bloqué sur les menu du header  
  🐛 fix  
  modal

##### [v1.13.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.13.0) - 4 décembre 2024

- **[correction modal footer z-index](https://github.com/GouvernementFR/dsfr/pull/1000)**  
  #1000  
  - Passage du footer de la modale au niveau de z-index "overlap-above", permettant d'être au dessus du tooltip  
  🐛 fix  
  modal

- **[input sans type bug dans le focus trap de la modale](https://github.com/GouvernementFR/dsfr/pull/992)**  
  #992  
  - Correction d'une erreur js liée au focus trap lorsqu'un champ de saisie n'a pas d'attribut "type" dans une modale  
  🐛 fix  
  modal

##### [v1.11.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.0) - 11 décembre 2023

- **[a11y retire la liste dans la zone d'actions](https://github.com/GouvernementFR/dsfr/pull/720)**  
  #720  
  - le groupe de bouton peut désormais être une `div` à la place d'un `ul\`\`li`
- retrait de la liste non ordonnée dans le footer de la modale  
  🐛 fix  
  modal

##### [v1.10.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.10.0) - 19 juillet 2023

- **[retour de focus fermeture clavier](https://github.com/GouvernementFR/dsfr/pull/716)**  
  #716  
  - Mise en place du retour du focus à la fermeture en pressant la touche ESC  
  🐛 fix  
  modal

- **[préviens décalage mobile](https://github.com/GouvernementFR/dsfr/pull/699)**  
  #699  
  - l'ajout d'un padding à l'ouverture permet de se substituer au décalage créé potentiellement par la disparition de la scrollbar en desktop
- En mobile, la modale occupe 100% de la largeur, ce padding créé un espacement incorrect
- ajout d'une media query sur le breakpoint MD pour corriger le problème  
  🐛 fix  
  modal

- **[interaction globale et focus iOS](https://github.com/GouvernementFR/dsfr/pull/691)**  
  #691  
  - Correctif à la pression de la touche Escape sur la modale : si l'élément actif (focus) est un élément de formulaire ou un média, la modale n'est pas refermée pas pour permettre l'interaction native de l'élément actif
- Correctif iOS de la prise de focus au clic
- Fermeture des tooltips dés au clic sur n'importe quel endroit
- Fermeture des tooltip à la pression sur la touche escape, où que soit le focus  
  🐛 fix  
  tooltip modal

- **[suppression exemple des liens dans la zone d'action](https://github.com/GouvernementFR/dsfr/pull/663)**  
  #663  
  - Ce cas n'est pas recommandé, la zone d'action étant plutôt prévue pour des boutons  
  🐛 fix  
  modal

- **[décalage scrollbar à l'ouverture/fermeture modale & fix scroll behavior](https://github.com/GouvernementFR/dsfr/pull/519)**  
  #519  
  Lorsque la page est scrollable, un décalage se produit à l'ouverture d'une modal (la page étant figé elle n'est plus scrollable).  
  Une marge est donc appliquée à l'ouverture de la modale pour simuler la barre de scroll et ainsi éviter le mouvement du contenu en arrière plan.  
  🐛 fix  
  core modal

##### [v1.9.3](https://github.com/GouvernementFR/dsfr/releases/tag/v1.9.3) - 17 mai 2023

- **[correction ombre modal footer](https://github.com/GouvernementFR/dsfr/pull/572)**  
  #572  
  L'ombre du footer de la modal scrollable est mal placée et trop forte.  
  - Remplacement de l'ombre par une bordure d'1px en defaut-grey en haut du footer
- remplacement du token de background-color du footer par background-lifted-grey
- ajout d'un texte plus long dans l'exemple modal + footer pour faire apparaître le scroll  
  🐛 fix  
  modal

##### [v1.9.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.9.1) - 11 avril 2023

- **[correctif prise de focus au focus-trap](https://github.com/GouvernementFR/dsfr/pull/566)**  
  #566  
  à l'ouverture de la modale, le focus est automatiquement déplacé sur le premier des éléments interactifs de la modale. Ce comportement pose problème lorsque le focus est déjà sur un des éléments contenus dans la modale.  
  Ajout d'une condition qui vérifie que le focus n'est pas déjà sur un des éléments interactifs de la modale avant de déplacer le focus.  
  🐛 fix  
  modal

##### [v1.4.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.4.0) - 16 mars 2022

- **[<dialog> masqué en no-css](https://github.com/GouvernementFR/dsfr/pull/230)**  
  #230  
  fix  
  modal

- **[injection js de styles en variables css](https://github.com/GouvernementFR/dsfr/pull/225)**  
  #225  
  fix  
  core tab modal button

- **[correction z-index de toggle](https://github.com/GouvernementFR/dsfr/pull/213)**  
  #213  
  fix  
  toggle modal

##### [v1.3.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.3.1) - 7 février 2022

- **[patch 1.3.1 - status width & modal icon aria-hidden](https://github.com/GouvernementFR/dsfr/pull/192)**  
  #192  
  fix  
  toggle modal

##### [v1.2.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.2.1) - 29 novembre 2021

- **[ajout d'un attribut pour la fermeture au click](https://github.com/GouvernementFR/dsfr/pull/158)**  
  #158  
  feat  
  modal

- **[ajout de l'attribut aria-modal](https://github.com/GouvernementFR/dsfr/pull/157)**  
  #157  
  fix  
  modal

- **[accessibilité du focus](https://github.com/GouvernementFR/dsfr/pull/145)**  
  #145  
  fix  
  modal

##### [v1.2.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.2.0) - 17 novembre 2021

- **[mise en place de l'overlay](https://github.com/GouvernementFR/dsfr/pull/116)**  
  #116  
  feat  
  modal

- **[focus trap avec iframe](https://github.com/GouvernementFR/dsfr/pull/92)**  
  #92  
  fix  
  modal

##### [v1.0.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.0.0) - 24 juin 2021

- **[correction nouveau nom d'icône](https://github.com/GouvernementFR/dsfr/pull/19)**  
  #19  
  fix  
  buttons modal tabs

- **[ajustements et correctifs](https://github.com/GouvernementFR/dsfr/pull/11)**  
  #11  
  fix  
  modal

###### Contenu associé

- **[Bouton](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton)**  
  Présentation du composant Bouton permettant à l’usager d’exécuter une action dans une interface numérique.

- **[Paramètres d'affichage](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/parametres-d-affichage)**  
  Présentation du composant Paramètres d’affichage permettant à l’usager de modifier le thème visuel d’un site entre mode clair et mode sombre.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale/accessibilite-de-la-modale

Le composant **Modale** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

À l’intérieur de la fenêtre modale :

- `Échap` : referme la modale et place le focus sur le bouton d’ouverture de la modale ou à un endroit approprié si le bouton disparaît.
- `Tab` : place le focus sur le prochain élément focalisable de la modale.
- `Maj` + `Tab` : place le focus sur l'élément focalisable précédent.

**Le focus doit rester dans la fenêtre modale tant qu’elle n’est pas fermée.**

### Règles d’accessibilité

Le composant **Modale** s’appuie sur le motif de conception ARIA Dialog de l’[Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/about/introduction/) (APG).

- L’élément qui déclenche l’ouverture de la fenêtre modale doit être un `button`. Il est possible d'ouvrir la modale programmatiquement au moyen d'un script, mais il faudra s'assurer que le focus est replacé sur un endroit approprié après la fermeture de la modale.
- La modale utilise l’élément HTML `<dialog>` ou l’attribut `role="dialog"`. Si aucun de ces deux éléments n’est utilisé, le JavaScript du DSFR ajoute automatiquement l’attribut `role="dialog"` à l’ouverture de la modale et le retire à la fermeture.
- Elle dispose d’un attribut `aria-modal="true"` uniquement lorsqu’elle est affichée (le JavaScript du DSFR l’ajoute à l’ouverture et le retire à la fermeture).
- La modale doit avoir un **nom accessible** . Elle est nommée avec un attribut `aria-labelledby` défini sur l’ID du titre de la fenêtre modale.
- La modale a un titre de niveau `h2` à `h6`, en fonction de son positionnement dans le DOM, ou sous forme de balise `<p>`.
- Le focus est placé sur le premier élément focalisable de la modale lors de son ouverture. Et replacé sur le bouton d’ouverture de la modale ou à un endroit approprié si le bouton disparaît lors de sa fermeture.
- Le focus est capturé à l’intérieur de la modale tant qu’elle n’est pas fermée.
- Lorsque la modale est ouverte, le défilement de la page est bloqué. L’attribut `data-fr-scrolling="false"` est appliqué sur l’élément `<html>`.

> **Astuce**
> Le role="dialog" n’est plus nécessaire sur l’élément HTML `<dialog>`.

### Restitution par les lecteurs d’écran

L’élément `<dialog>` est restitué différemment selon les lecteurs d’écran.

Tous les lecteurs d’écran restituent le nom accessible et le rôle de la modale.

- Talkback, Narrateur et Jaws : nom, boîte de dialogue
- NVDA : nom, dialogue
- VO iOS / VO macOS : nom, boîte de dialogue web

Note : VoiceOver macOS ne restitue pas le nom de la modale avec Firefox et Chrome.

#### Capture du focus

Note : le focus n’est pas capturé avec les lecteurs d’écran mobiles sur la version actuelle du composant Modale.

#### Versions navigateurs et lecteurs d’écran

Les tests de restitution ont été effectués en ajoutant le lecteur d’écran intégré à Windows 11 (Narrateur) et le navigateur web Chrome à l’environnement de tests du RGAA.

Versions des navigateurs web :

- Firefox 138
- Chrome 135
- Safari 18.4 (sur macOS uniquement)
- Microsoft Edge 135 (sur Windows 11 uniquement)

Version des lecteurs d’écran :

- NVDA 2024.4.2
- JAWS 2024
- VoiceOver macOS 15.4
- Narrateur (Windows 11)
- VoiceOver iOS

---

### Critères RGAA applicables

- **Couleurs :** 3.2
- **Scripts :** 7.1, 7.3
- **Éléments obligatoires :** 8.9
- **Structuration :** 9.1
- **Présentation de l’information :** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.8, 10.11, 10.12
- **Navigation :** 12.8, 12.9
- **Consultation :** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Motif de conception WAI-ARIA Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- [L’élément HTML dialog](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-dialog-element)
- [Attribut aria-modal](https://www.w3.org/TR/wai-aria/#aria-modal)

##### Contenu associé

- **[Bouton](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton)**  
  Présentation du composant Bouton permettant à l’usager d’exécuter une action dans une interface numérique.

- **[Paramètres d'affichage](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/parametres-d-affichage)**  
  Présentation du composant Paramètres d’affichage permettant à l’usager de modifier le thème visuel d’un site entre mode clair et mode sombre.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale/demonstration-de-la-modale

*(Démonstration interactive « modal--docs » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=modal--docs&nav=0&globals=theme%3Alight)*

#### Contenu associé

- **[Bouton](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton)**  
  Présentation du composant Bouton permettant à l’usager d’exécuter une action dans une interface numérique.

- **[Paramètres d'affichage](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/parametres-d-affichage)**  
  Présentation du composant Paramètres d’affichage permettant à l’usager de modifier le thème visuel d’un site entre mode clair et mode sombre.
