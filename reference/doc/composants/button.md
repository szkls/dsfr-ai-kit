# Bouton

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton/design-du-bouton · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton/code-du-bouton · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton/accessibilite-du-bouton · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton/demonstration-du-bouton
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

Le bouton est un élément d’interaction avec l’interface permettant à l’usager d’effectuer une action.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton

*(Démonstration interactive « button--button » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=button--button&nav=0&globals=theme%3Alight)*

### Quand utiliser ce composant ?

**Utiliser le bouton pour déclencher une action dans la page.**

> **Information**
> Bien différencier les boutons des liens.

Le [lien](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lien) est utilisé pour naviguer à l’intérieur (ou à l’extérieur) de votre site.

### Comment utiliser ce composant ?

- **Utiliser le bouton primaire pour les actions principales** (soumettre un formulaire, rediriger vers un contenu priorisé, etc.). Il est recommandé de limiter son usage à un bouton primaire par page.

> **À faire :** Aligner un bouton primaire avec un bouton secondaire ou un lien.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/button/use/do-1.png)

> **À ne pas faire :** Ne pas utiliser deux boutons primaires côte à côte.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/button/use/dont-1.png)

- **Choisir le bouton secondaire pour des actions moins importantes** (réinitialiser les valeurs d’un formulaire, par exemple)
- **Réserver le bouton tertiaire pour des actions contextuelles ou alternatives** (fermeture de modale, annuler, partager, suivre sur un réseau social, copier un lien, etc.)

> **À ne pas faire :** Ne pas indiquer une hiérarchie entre 2 boutons tertiaires via la présence ou non de contour.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/button/use/dont-2.png)

- **Attention à hiérarchiser les actions proposées à l’usager** . Utiliser une combinaison de bouton de styles différents pour maintenir l’attention sur l’action principale (cf. composant “Groupe de boutons”).
- **Utiliser uniquement la couleur bleue** . Cette couleur est utilisée pour signaler une interaction sur les éléments principaux (cf. couleurs).

### Règles éditoriales

- **Rédiger un texte concis et explicite sur l’action** que le bouton va initier.

> **À faire :** Rédiger un texte clair, explicite et prévisible. L’usager doit savoir ce qui va se passer.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/button/edit/do-1.png)

> **À ne pas faire :** Ne pas tromper l’usager. Fournir le contexte que l’usager sache quelle action va être réalisée.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/button/edit/dont-1.png)

> **À ne pas faire :** Ne pas rédiger des libellés trop longs pour éviter le passage du bouton sur 2 lignes.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/button/edit/dont-2.png)

- **Indiquer ce que l’usager va faire** , sans nommer le bouton ou sa localisation.

> **À faire :** Se concentrer sur l’action principale, en restant concis et clair.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/button/edit/do-2.png)

> **À ne pas faire :** Ne pas mentionner le composant bouton, ni sa localisation.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/button/edit/dont-3.png)

- **Commencer les textes des boutons avec un verbe d’action.**

> **À faire :** Commencer les textes des boutons avec un verbe d’action à l’infinitif.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/button/edit/do-3.png)

> **À ne pas faire :** Ne pas utiliser “Je” ou ne pas conjuguer le verbe.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/button/edit/dont-4.png)

- **Conserver une unité** dans le format d’écriture de tous vos libellés de boutons.

> **À faire :** Mettre des majuscules en début de phrase.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/button/edit/do-4.png)

> **À ne pas faire :** Ne pas rédiger les libellés de vos boutons en lettres capitales.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/button/edit/dont-5.png)

- **Éviter les redondances** entre instructions et boutons. Ces éléments sont complémentaires.

> **À faire :** Accompagner vos boutons d’instructions pour garantir la bonne compréhension de l’usager, lorsque nécessaire.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/button/edit/do-5.png)

> **À ne pas faire :** Ne pas créer de redondances entre instructions et boutons. Ces éléments sont complémentaires.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/button/edit/dont-6.png)

#### Contenu associé

- **[Boutons FranceConnect et ProConnect](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/boutons-franceconnect-et-proconnect)**  
  Présentation des Boutons FranceConnect et ProConnect permettant à l’usager de s’authentifier via un fournisseur d’identité officiel reconnu par l’État.

- **[Icônes](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/icone)**  
  Cette page présente l’ensemble des icônes fonctionnelles proposées dans le Design Système de l’État ainsi que les modalités d’utilisation pour les designers et les développeurs

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton/design-du-bouton

![Anatomie du bouton](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/button/design/anatomy/anatomy-1.png)

1. Un libellé — Obligatoire
2. Une icône, pouvant être modifiée — En option

### Variations

**Bouton primaire**

*(Démonstration interactive « button--primary » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=button--primary&nav=0&globals=theme%3Alight)*

**Bouton secondaire**

*(Démonstration interactive « button--secondary » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=button--secondary&nav=0&globals=theme%3Alight)*

**Bouton tertiaire**

*(Démonstration interactive « button--tertiary » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=button--tertiary&nav=0&globals=theme%3Alight)*

Le bouton tertiaire est caractérisé par un fond transparent.

**Bouton tertiaire sans contour**

*(Démonstration interactive « button--tertiary » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=button--tertiary&nav=0&args=kind%3A4&globals=theme%3Alight)*

Le bouton tertiaire peut aussi être proposé sans bordure.

**Bouton avec icône**

Pour permettre une meilleure compréhension de l’action engendrée par votre bouton, il est possible d'y ajouter une icône ( [voir la documentation des icônes](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/icone) ).

Trois déclinaisons sont possibles :

- Bouton avec icône à droite du libellé

*(Démonstration interactive « button--icon-right » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=button--icon-right&nav=0&globals=theme%3Alight)*

- Bouton avec icône à gauche du libellé

*(Démonstration interactive « button--icon-left » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=button--icon-left&nav=0&globals=theme%3Alight)*

- Bouton sans libellé avec icône seule

*(Démonstration interactive « button--icon-only » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=button--icon-only&nav=0&globals=theme%3Alight)*

> **Information**
> Limiter l’usage de ces boutons sans libellé. Ils doivent uniquement être utilisés pour les actions récurrentes, facilement identifiables de l’usager (exemple : engrenage pour les paramètres ou loupe pour la recherche).

**Responsive design**

En mobile, le bouton prend automatiquement toute la largeur.

**Groupe de boutons**

Le groupe de boutons permet à l’usager de réaliser plusieurs actions au sein d’un bloc.

Il comporte ses propres règles d’usage :

- **Utiliser un seul bouton primaire** pour l'action principale, les autres boutons doivent être secondaires ou tertiaires.
- **Limiter le nombre de boutons** au sein d’un groupe à 3 maximum.

> **À faire :** Limiter le nombre de boutons utiliser au sein d’un groupe.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/button/design/variation/do-1.png)

> **À ne pas faire :** Ne pas excéder plus de 3 boutons au sein d’un groupe.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/button/design/variation/dont-1.png)

- **Positionner le bouton primaire avant les boutons secondaires** ou tertiaires quand le groupe est ferré à gauche ou centré.
- **Positionner le bouton primaire après les boutons secondaires** ou tertiaires quand le groupe est ferré à droite.

> **À faire :** Positionner le bouton primaire avant les boutons secondaires ou tertiaires quand le groupe est ferré à gauche ou centré.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/button/design/variation/do-2.png)

> **À faire :** Positionner le bouton primaire après les boutons secondaires ou tertiaires quand le groupe est ferré à droite.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/button/design/variation/do-3.png)

> **À ne pas faire :** Ne pas encadrer un bouton primaire d’autres boutons secondaires ou tertiaires.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/button/design/variation/dont-2.png)

- **Conserver une unité** en utilisant la même taille (SM, MD ou LG) pour tous les boutons du groupe.

> **À faire :** Utiliser la même taille pour tous les boutons du groupe.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/button/design/variation/do-4.png)

> **À ne pas faire :** Ne pas mélanger différentes tailles de boutons au sein d’un groupe.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/button/design/variation/dont-3.png)

**Groupe de boutons vertical**

Le groupe de boutons vertical, option par défaut, permet d’associer plusieurs boutons d’action les uns en-dessous des autres.

*(Démonstration interactive « buttons-group--vertical » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=buttons-group--vertical&nav=0&globals=theme%3Alight)*

- Aligner les boutons en colonne avec un espacement de 16px.
- Par défaut, la largeur des boutons prend 100% de la largeur du container (« full width »).

**Groupe de boutons horizontal**

Le groupe de boutons horizontal permet d’associer plusieurs boutons d’action les uns à côté des autres.

*(Démonstration interactive « buttons-group--horizontal » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=buttons-group--horizontal&nav=0&globals=theme%3Alight)*

- Appliquer un espacement de 16px à droite de chaque bouton excepté le dernier (en savoir plus sur les [espacements du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/espacement) ).
- Appliquer un espacement de 16px en dessous de chaque bouton.
- Forcer un retour à la ligne dès lors que la juxtaposition des boutons dépasse la taille du conteneur.

### Tailles

Les boutons sont disponibles en 3 tailles :

- SM pour small
- MD pour medium - taille par défaut
- LG pour large

*(Démonstration interactive « button--sizes » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=button--sizes&nav=0&globals=theme%3Alight)*

- **Utiliser en priorité les formats MD et LG** . Le format SM pourra quant à lui être utilisé à l’intérieur d'autres composants.
- **Conserver une unité** dans la taille des boutons au sein d’une même page.

**A noter :** Dans un groupe de boutons, la taille se définit au niveau du groupe.

### États

**État désactivé**

L’état désactivé indique que l'usager ne peut pas interagir avec le bouton.

*(Démonstration interactive « button--disabled » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=button--disabled&nav=0&globals=theme%3Alight)*

> **Information**
> L’état désactivé est **fortement déconseillé** car il n’est pas accessible au clavier et il est source d’erreur pour les utilisateurs.

**État au survol**

L’état au survol correspond au comportement constaté par l’usager lorsqu’il survole le bouton avec sa souris.

**État au clic**

L’état au clic correspond au comportement constaté par l’usager lorsqu’il clique sur le bouton.

### Personnalisation

Les boutons ne sont pas personnalisables.

Toutefois, certains éléments sont optionnels et les icônes peuvent être changées - voir [la structure du composant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton/design-du-bouton#bouton) .

> **À faire :** Utiliser uniquement la couleur bleu pour les boutons primaires.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/button/design/custom/do-1.png)

> **À ne pas faire :** Ne pas personnaliser la couleur des boutons primaires.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/button/design/custom/dont-1.png)

> **À faire :** Utiliser uniquement une typographie bleue pour les boutons secondaires.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/button/design/custom/do-2.png)

> **À ne pas faire :** Ne pas personnaliser la couleur du libellé des boutons secondaires.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/button/design/custom/dont-2.png)

> **À faire :** Conserver un fond transparent pour les boutons tertiaires.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/button/design/custom/do-3.png)

> **À ne pas faire :** Ne pas appliquer un fond aux boutons tertiaires.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/button/design/custom/dont-3.png)

#### Contenu associé

- **[Boutons FranceConnect et ProConnect](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/boutons-franceconnect-et-proconnect)**  
  Présentation des Boutons FranceConnect et ProConnect permettant à l’usager de s’authentifier via un fournisseur d’identité officiel reconnu par l’État.

- **[Icônes](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/icone)**  
  Cette page présente l’ensemble des icônes fonctionnelles proposées dans le Design Système de l’État ainsi que les modalités d’utilisation pour les designers et les développeurs

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton/code-du-bouton

### HTML

#### Structure du composant

Le composant **Bouton** est un élément interactif permettant de déclencher des actions. Sa structure est la suivante :

- Le Bouton est un élément HTML `<button>` de type "button" défini par la classe `fr-btn`.
- Son contenu est textuel, il doit être succinct et indiquer clairement son action.

**Exemple de structure HTML**

```html
<button class="fr-btn" type="button">
    Libellé bouton
</button>
```

#### Groupes de boutons

Les boutons peuvent être regroupés pour former des ensembles d'actions. Le groupe est formé par la succession de boutons structurés sous forme de liste par l'élément HTML `<ul>` et la classe `fr-btns-group`. Un groupe est dit **hiérarchisé** s'il dispose d'un bouton primaire et de boutons secondaires. Sauf cas exceptionnel, n'utiliser qu'un seul bouton primaire dans un groupe. Un groupe **non hiérarchisé** est lui constitué uniquement de boutons secondaires, tertiaires, et/ou tertiaires sans contours.

**Exemple de groupe de boutons**

```html
<ul class="fr-btns-group">
  <li>
    <button class="fr-btn" type="button">
        Bouton 1
    </button>
  </li>
  <li>
    <button class="fr-btn fr-btn--secondary" type="button">
        Bouton 2
    </button>
  </li>
</ul>
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
| Button | Oui |  |
| Utility | Non | Uniquement pour l'ajout d'icône |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/button/button.min.css" rel="stylesheet">
```

#### Variantes de style

Le bouton peut avoir différents styles définis par les classes :

- Par défaut : Bouton primaire.
- `fr-btn--secondary` : Bouton secondaire.
- `fr-btn--tertiary` : Bouton tertiaire.
- `fr-btn--tertiary-no-outline` : Bouton tertiaire sans contour.

**Exemples de variantes de style**

```html
<button class="fr-btn" type="button">
    Bouton primaire
</button>
<button class="fr-btn fr-btn--secondary" type="button">
    Bouton secondaire
</button>
<button class="fr-btn fr-btn--tertiary" type="button">
    Bouton tertiaire
</button>
<button class="fr-btn fr-btn--tertiary-no-outline" type="button">
    Bouton tertiaire sans contour
</button>
```

#### Variantes de taille

Le Bouton peut avoir différentes tailles qui auront un impacte sur la taille du texte, de l'icône, et des espacements :

- `fr-btn--sm` : Petit bouton.
- Par défaut : Bouton moyen.
- `fr-btn--lg` : Grand bouton.

Dans le cas d'un groupe de boutons, la taille des boutons peut être généralisé au niveau du groupe avec les classes `fr-btns-group--sm` ou `fr-btns-group--lg`.

**Exemples de variantes de taille**

```html
<button class="fr-btn fr-btn--sm" type="button">
    Petit bouton
</button>
<button class="fr-btn" type="button">
    Bouton moyen
</button>
<button class="fr-btn fr-btn--lg" type="button">
    Grand bouton
</button>
```

#### Variantes d'icônes

Le Bouton peut avoir une icône à l'intérieur, elle est ajoutée via la classe utilitaire d'icône `fr-icon--NOM-ICONE` (voir [Icônes](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/icone) ).

Cette classe peut être associée à une classe de positionnement de l'icône :

- Par défaut : Icône seule, le libellé est caché.
- `fr-btn--icon-left`: L'icône apparaît à gauche du libellé.
- `fr-btn--icon-right`: L'icône apparaît à droite du libellé.

Dans le cas d'un groupe de boutons, le positionnement de l'icône des boutons peut être généralisé au niveau du groupe avec les classes `fr-btns-group--icon-left` ou `fr-btns-group--icon-right`.

**Exemples de variantes d'icônes**

```html
<button type="button" class="fr-btn fr-icon-checkbox-circle-line fr-btn--icon-left">Bouton avec icône</button>
```

#### Variante désactivé

Le style désactivé du bouton est appliqué par l'ajout de l'attribut `disabled` sur l'élément `<button>`. Le bouton est alors grisé et les effets au survol et au clic sont retirés. Le pointeur de la souris prend la valeur "not-allowed" au survol du bouton ce qui change sont style.

#### Variantes du groupe de bouton

Le groupe de bouton vient avec de nombreuses variations, telles que :

- **Taille des boutons** : Les variations de taille sont accessibles au niveau du groupe avec les classes :
  - `fr-btns-group--sm`: Groupe de boutons SM
  - `fr-btns-group--lg`: Groupe de boutons LG
- **Positionnement des icônes des boutons** : Les variations de position de l'icône des boutons sont accessibles au niveau du groupe avec les classes :
  - `fr-btns-group--icon-left` : Icône des boutons à gauche
  - `fr-btns-group--icon-right` : Icône des boutons à droite
- **Alignement des boutons** : Les boutons d'un groupe sont, par défaut, alignés à gauche. Cet alignement peut être modifié par les classes suivantes :
  - `fr-btns-group--right`: Aligne les boutons à droite
  - `fr-btns-group--center` : Aligne les boutons au centre
- **Groupe de boutons horizontal** : Par défaut, le groupe de bouton positionne les boutons les uns en dessous des autres. Les boutons peuvent être placés en ligne par les classes suivantes :
  - `fr-btns-group--inline` : Aligne toujours les boutons horizontalement (avec passage à la ligne en cas de dépassement du conteneur)
  - `fr-btns-group--inline-sm` : Aligne les boutons horizontalement uniquement à partir du breakpoint SM (576px)
  - `fr-btns-group--inline-md` : Aligne les boutons horizontalement uniquement à partir du breakpoint MD (768px)
  - `fr-btns-group--inline-lg` : Aligne les boutons horizontalement uniquement à partir du breakpoint LG (992px)
- **Inversion du positionnement** : L'ordre des boutons peut être inversé lorsqu'ils sont positionnés horizontalement et alignés à droite. La classe `fr-btns-group--inline-reverse` permet d'inverser cet ordre, uniquement en combinaison avec les classes d'alignement "inline" et "right". L'ordre par défaut, et en alignement vertical, correspond à l'ordre des boutons dans le DOM.
- **Taille des boutons équivalente** : La classe `fr-btns-group--equisized`, grâce au javascript du bouton, ajuste la largeur des boutons du groupe à celle du bouton le plus large. Cela permet d'égaliser la taille des boutons.

Toutes ces classes peuvent être combinées entre elles.

---

### JavaScript

Le composant Bouton nécessite l'utilisation de JavaScript uniquement dans le cas de l'utilisation d'une fonctionnalité avancée : **les groupes de boutons "equisized"** . 
 Cette fonctionnalité permet de d'adapter automatiquement la taille des boutons d'un groupe à celle du bouton le plus large. 
 **En dehors de cette fonctionnalité l'inclusion du JS du bouton n'est pas utile.**

#### Installation du JavaScript

Chaque composant utilisant JavaScript possède un fichier JS spécifique et requiert le fichier JS du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```html
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/button/button.module.min.js"></script>
```

NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```html
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/button/button.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, la classe `fr-btn--equisized` fonctionne automatiquement.

#### Instances

Sur le bouton, les éléments suivants sont instanciés :

- Le groupe de boutons, via la classe : `fr-btns-group--equisized`
- Les boutons, dans un groupe "equisized", via la classe : `fr-btn`

Une fois chargé, le JS ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés.

#### API

Il est possible d'interagir avec les instances du composant en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

##### equisizedsGroup

> **Information**
> L'activation ou la désactivation de la fonction equisize n'est pas disponible en JS, elle se fait via l'ajout ou le retrait de la classe `fr-btns-group--equisized` sur le groupe.

**node**

| **Description** | Renvoie le noeud HTML de l'élément. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(btnGroup).equisizedsGroup.node` |

##### equisized

**node**

| **Description** | Renvoie le noeud HTML de l'élément. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(btn).equisized.node` |

### Note de version

- [Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+button+)

#### [v1.14.2](https://github.com/GouvernementFR/dsfr/releases/tag/v1.14.2) - 17 septembre 2025

- **[uniformisation du formatage des groupes de boutons](https://github.com/GouvernementFR/dsfr/pull/1292)**  
  #1292  
  - Les groupes de boutons sont maintenant présentés dans les exemples de code avec des ul/li plutôt que des div  
  📝 docs  
  button modal

#### [v1.13.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.13.0) - 4 décembre 2024

- **[ajoute le type button par défaut](https://github.com/GouvernementFR/dsfr/pull/1005)**  
  #1005  
  - ajoute le type `button` aux boutons par défaut
- met à jour les exemples des modèles de pages analytics et page de connexion
- met à jour les snippets d'exemple des composants : accordéon, alerte, fil d'ariane, bouton, bouton France Connect, carte, gestionnaire de consentement, paramètres d'affichage, champ de saisie, lettre d'information, navigation principale, menu latéral, onglets, tag, tuile et transcription
- remplace l'attribut `type` par `variant` dans le template du Bouton France Connect et ajoute le type `button` par défaut  
  🐛 fix  
  button

#### [v1.10.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.10.0) - 19 juillet 2023

- **[retrait du z-index](https://github.com/GouvernementFR/dsfr/pull/630)**  
  #630  
  - retrait du z-index: 1 qui pose problème dans une modale avec footer.  
  🐛 fix  
  link button tag badge

#### [v1.9.3](https://github.com/GouvernementFR/dsfr/releases/tag/v1.9.3) - 17 mai 2023

- **[retrait propriété css :where](https://github.com/GouvernementFR/dsfr/pull/597)**  
  #597  
  La propriété CSS est encore trop récente (chrome 88).  
  -> retrait de cette propriété  
  🐛 fix  
  button theme

#### [v1.6.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.6.0) - 14 juin 2022

- **[correctif icône lien extérieur](https://github.com/GouvernementFR/dsfr/pull/333)**  
  #333  
  fix  
  core link button tag card

- **[correction espacements des groupes](https://github.com/GouvernementFR/dsfr/pull/311)**  
  #311  
  refactor  
  header link button follow share tag badge

#### [v1.5.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.5.0) - 21 avril 2022

- **[changement de la taille des boutons (padding)](https://github.com/GouvernementFR/dsfr/pull/266)**  
  #266  
  feat  
  button

#### [v1.4.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.4.0) - 16 mars 2022

- **[injection js de styles en variables css](https://github.com/GouvernementFR/dsfr/pull/225)**  
  #225  
  fix  
  core tab modal button

##### Contenu associé

- **[Boutons FranceConnect et ProConnect](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/boutons-franceconnect-et-proconnect)**  
  Présentation des Boutons FranceConnect et ProConnect permettant à l’usager de s’authentifier via un fournisseur d’identité officiel reconnu par l’État.

- **[Icônes](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/icone)**  
  Cette page présente l’ensemble des icônes fonctionnelles proposées dans le Design Système de l’État ainsi que les modalités d’utilisation pour les designers et les développeurs

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton/accessibilite-du-bouton

Le composant **Bouton** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Lorsque le focus est positionné sur le composant :

- `Entrée` : actionne le bouton.
- `Espace` : actionne le bouton.

### Règles d’accessibilité

#### Intitulé pertinent : nom accessible

Un bouton doit avoir un **intitulé pertinent** . On doit en comprendre la fonction sans ambiguïté.

Son nom accessible est calculé par ordre de priorité à partir de :

- l’attribut `aria-labelledby`,
- l’attribut `aria-label`,
- le contenu textuel à l’intérieur du bouton,
- l’attribut `title` en l’absence d’une autre méthode de nommage.

**Privilégier le contenu textuel** pour nommer le composant Bouton.

> **À faire :** Utiliser un intitulé textuel précis.
> ![Bouton avec intitulé textuel « Afficher les informations »](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/button/accessibility/accessibility/do-1.png)

> **À ne pas faire :** Utiliser un intitulé générique et ambigu.
> ![Bouton avec intitulé textuel « OK »](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/button/accessibility/accessibility/dont-1.png)

##### Nom visible et nom accessible

En cas d’utilisation des attributs `aria-labelledby` ou `aria-label` sur des boutons textuels, le **nom visible doit être repris dans le nom accessible** afin de répondre aux besoins des personnes qui utilisent la commande vocale.

##### Information complémentaire : description

Il est possible de compléter et d’expliciter l’intitulé d’un bouton avec une description en utilisant :

- l’attribut `aria-describedby` avec une valeur d’id qui référence un passage de texte ;
- l’attribut `title`.

#### Bouton avec icône seule

Dans le cas des **boutons avec icône seule** , un attribut `title`, qui reprend l’intitulé du bouton, peut être ajouté afin d’expliciter le sens de l’icône pour les personnes qui en ont besoin.

> **Attention**
> L’attribut title n’apparaît pas à la navigation au clavier et le contenu de l’infobulle ne s’agrandit pas lorsque la page est zoomée.
> 
> **Limiter l’usage des boutons avec icône seule** et les utiliser uniquement pour les actions récurrentes et facilement identifiables (ex. engrenage pour les paramètres ou loupe pour la recherche).

#### État désactivé

> **Avertissement**
> **L’état désactivé d’un bouton peut poser des problèmes d’utilisabilité et d’accessibilité pour les personnes handicapées** (personnes aveugles, déficientes visuelles, handicapées motrices qui naviguent au clavier ainsi que les personnes qui ont un handicap cognitif ou mental).

- Le texte des boutons désactivés est insuffisamment contrasté. Il ne s’agit néanmoins pas d’une non-conformité au RGAA (cas particulier).
- Lorsqu’un bouton est désactivé avec l’attribut disabled, il ne prend pas le focus au clavier.

> **À ne pas faire :** Ne pas désactiver un bouton avec une infobulle (tooltip).
> ![Bouton désactivé avec une infobulle qui affiche un message d’erreur](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/button/accessibility/accessibility/dont-2.png)

> **À ne pas faire :** Ne pas désactiver un bouton de soumission d’un formulaire.
> ![Formulaire avec un bouton désactivé](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/button/accessibility/accessibility/dont-3.png)

#### Contrastes de couleurs

Le composant Bouton est suffisamment contrasté en thème clair. Au survol, le texte des boutons secondaires et tertiaires est insuffisamment contrasté.

##### Bouton primaire

**Contrastes du bouton primaire en thème clair et sombre**

| État | Thème clair | Thème sombre |
|---|---|---|
| **par défaut** | 14,9:1 | 4,7:1 |
| **au survol** | 8,2:1 | 7,5:1 |
| **désactivé** | 2,47:1 | 2,5:1 |

##### Bouton secondaire et tertiaire

**Contrastes du bouton secondaire et tertiaire en thème clair et sombre**

| État | Thème clair | Thème sombre |
|---|---|---|
| **par défaut** | 14,9:1 | 5,8:1 |
| **au survol** | 13,8:1 | 4,1:1 |
| **désactivé** | 3,1:1 | 3,2:1 |

#### Bouton ou lien ?

> **Information**
> Il est nécessaire de distinguer un bouton d’un lien.
> 
> Un bouton permet de **déclencher une action ou un événement** :
> 
> - **nativement** en fonction du type du bouton : envoi d’un formulaire (`submit`), suppression de contenu de champs de formulaire (`reset`) ;
> - **en JavaScript** : ouverture d’une fenêtre modale, fermeture d’un contenu, modification de la page…
> 
> Un lien `<a href>` permet de rediriger vers une autre page ou à un autre endroit dans la page (ancre).

**Éviter d’utiliser le style du composant Bouton sur les liens et inversement** .

---

### Restitution par les lecteurs d’écran

Par défaut, les lecteurs d’écran restituent le **nom, la description, l’état et le type** . L’ordre peut varier en fonction des lecteurs d’écran et de leur configuration.

L’attribut `disabled` est restitué différemment selon les lecteurs d’écran :

- VoiceOver macOS et iOS : « estompé »
- NVDA et JAWS : « non disponible »
- Narrateur et Talkback : « désactivé »

#### Versions navigateurs et lecteurs d’écran

Les tests de restitution ont été effectués en ajoutant le lecteur d’écran intégré à Windows 11 (Narrateur) et le navigateur web Chrome à l’environnement de tests du RGAA.

Versions des navigateurs web :

- Firefox 137
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

- **Couleurs** : 3.2, 3.3
- **Scripts** : 7.1, 7.3
- **Présentation de l’information** : 10.1, 10.2, 10.4, 10.5, 10.7, 10.11, 10.12
- **Formulaires** : 11.9
- **Navigation** : 12.8, 12.9
- **Consultation :** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Spécification HTML – élément button](https://html.spec.whatwg.org/#the-button-element)

##### Contenu associé

- **[Boutons FranceConnect et ProConnect](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/boutons-franceconnect-et-proconnect)**  
  Présentation des Boutons FranceConnect et ProConnect permettant à l’usager de s’authentifier via un fournisseur d’identité officiel reconnu par l’État.

- **[Icônes](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/icone)**  
  Cette page présente l’ensemble des icônes fonctionnelles proposées dans le Design Système de l’État ainsi que les modalités d’utilisation pour les designers et les développeurs

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton/demonstration-du-bouton

*(Démonstration interactive « button--docs » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=button--docs&nav=0&globals=theme%3Alight)*

*(Démonstration interactive « buttons-group--docs » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=buttons-group--docs&nav=0&globals=theme%3Alight)*

#### Contenu associé

- **[Boutons FranceConnect et ProConnect](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/boutons-franceconnect-et-proconnect)**  
  Présentation des Boutons FranceConnect et ProConnect permettant à l’usager de s’authentifier via un fournisseur d’identité officiel reconnu par l’État.

- **[Icônes](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/icone)**  
  Cette page présente l’ensemble des icônes fonctionnelles proposées dans le Design Système de l’État ainsi que les modalités d’utilisation pour les designers et les développeurs
