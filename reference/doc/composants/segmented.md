# Contrôle segmenté

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/controle-segmente · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/controle-segmente/design-du-controle-segmente · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/controle-segmente/code-du-controle-segmente · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/controle-segmente/accessibilite-du-controle-segmente · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/controle-segmente/demonstration-du-controle-segmente
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

Le contrôle segmenté est un élément d’interaction avec l’interface permettant à l'usager de choisir un type de vue parmi plusieurs options d'affichage disponibles.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/controle-segmente

*(Démonstration interactive « segmented--segmented » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=segmented--segmented&nav=0&globals=theme%3Alight)*

### Quand utiliser ce composant ?

Utiliser le contrôle segmenté pour proposer différents types d’affichage d’une même vue (exemple : liste versus carte).

> **Information**
> Le contrôle segmenté n’est pas un système de filtre et ne doit donc pas être utilisé comme tel. Préférer des tags sélectionnables ou listes déroulantes, selon les cas d’usage.

### Comment utiliser ce composant ?

- **Minimiser le nombre de segments proposés.** Il est recommandé de se limiter à 2 ou 3 bien que le maximum possible soit de 5.
- **Définir une valeur par défaut** qui sera la vue présentée à l’usager lors de son arrivée sur la page.

> **À faire :** Sélectionner une valeur par défaut lorsque vous proposez le contrôle segmenté.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/segmented/use/do-1.png)

> **À ne pas faire :** Ne pas proposer le contrôle segmenté sans valeur par défaut. Il faut obligatoirement une vue pré-sélectionnée pour l’usager.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/segmented/use/dont-1.png)

- **Conserver un libellé pour chaque segment** afin de rendre l’action réalisée par l’usager explicite. L’utilisation d’un segment avec une icône seule n’est pas autorisée.

> **À faire :** Conserver le libellé pour chaque segment. L’action réalisée par l’usager doit être explicite.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/segmented/use/do-2.png)

> **À ne pas faire :** Ne pas proposer de segments sans libellé, avec icône seule.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/segmented/use/dont-2.png)

- **Harmoniser les segments** en utilisant le même format pour tous (avec ou sans icône). Il n'est pas autorisé de mélanger des segments de formats différents dans le même composant.

> **À faire :** Harmoniser les segments en utilisant le même format pour tous.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/segmented/use/do-3.png)

> **À ne pas faire :** Ne pas mélanger des segments de formats différents.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/segmented/use/dont-3.png)

- **Le changement de vue a une conséquence directe sur la page consultée** , un seul segment peut être sélectionné à la fois.

### Règles éditoriales

- **Rédiger des libellés de segment clairs et concis** . L’usager doit comprendre facilement ses options.
- Des libellés courts permettent également d’éviter que les éléments ne passent en vertical.

#### Contenu associé

- **[Formulaire](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/formulaire)**  
  Présentation du composant Formulaire permettant l'agencement des éléments de saisie de données et des messages d'état.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/controle-segmente/design-du-controle-segmente

![Anatomie du contrôle segmenté](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/segmented/design/anatomy/anatomy-1.png)

1. Une légende, placé au-dessus ou à coté du composant — En option
2. Un texte de description, accompagnant la légende — En option
3. Une icône, placée à gauche du libellé uniquement — En option
4. Un libellé explicite et court, pour chaque segment — Obligatoire

### Variations

Par défaut, le contrôle segmenté s’affiche horizontalement, en desktop comme en mobile. Toutefois, lorsque le contenu des segments est trop long, il bascule en affichage vertical. C’est pourquoi il est conseillé d’utiliser des libellés courts.

**Contrôle segmenté avec icônes**

*(Démonstration interactive « segmented--with-icon » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=segmented--with-icon&nav=0&globals=theme%3Alight)*

**Contrôlé segmenté avec légende**

- Placée au-dessus du composant (par défaut)

*(Démonstration interactive « segmented--default » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=segmented--default&nav=0&globals=theme%3Alight)*

- Placée sur la même ligne que le composant

*(Démonstration interactive « segmented--legend-inline » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=segmented--legend-inline&nav=0&globals=theme%3Alight)*

**Contrôlé segmenté avec légende et texte de description**

*(Démonstration interactive « segmented--hint » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=segmented--hint&nav=0&globals=theme%3Alight)*

### Tailles

Le contrôle segmenté est disponible en 2 tailles :

- SM pour small

*(Démonstration interactive « segmented--default » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=segmented--default&nav=0&args=size%3Asm&globals=theme%3Alight)*

- MD pour medium

*(Démonstration interactive « segmented--default » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=segmented--default&nav=0&globals=theme%3Alight)*

> **Information**
> Afin de garder une harmonie visuelle, en présence d’autres composants (type bouton, champs de saisie etc.), il est important de choisir la même taille que ces derniers (exemple : un bouton SM et un contrôle segmenté SM, côte à côte).

### États

**État actif**

L'état actif est signalé par un contour bleu.

**État désactivé**

L'état désactivé est signalé par le disabled-grey.

### Personnalisation

Le contrôle segmenté n’est pas personnalisable.

Toutefois, certains éléments sont optionnels - voir [la structure du composant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/controle-segmente) .

> **À faire :** Ne pas changer la couleur de bordure et/ou de fond du contrôle segmenté.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/segmented/design/custom/dont-1.png)

> **À ne pas faire :** Ne pas changer la couleur du contour lorsque le segment est sélectionné.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/segmented/design/custom/dont-2.png)

#### Contenu associé

- **[Formulaire](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/formulaire)**  
  Présentation du composant Formulaire permettant l'agencement des éléments de saisie de données et des messages d'état.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/controle-segmente/code-du-controle-segmente

### HTML

#### Structure du composant

Le composant **Contrôle segmenté** permet à l'utilisateur de choisir une option parmi plusieurs segments. Sa structure est la suivante :

- Le conteneur du contrôle segmenté doit être un élément HTML `<fieldset>` défini par la classe `fr-segmented`.
- La légende du contrôle segmenté est un élément HTML `<legend>` défini par la classe `fr-segmented__legend`.
- La liste des segments est un élément HTML `<div>` défini par la classe `fr-segmented__elements`.
- Chaque segment est contenu dans un élément HTML `<div>` défini par la classe `fr-segmented__element`.
- Chaque segment est un élément `<input>` de type `radio` associé à un `<label>` avec la classe `fr-label`.
- Une description additionnelle, optionnelle, peut être ajoutée dans la légende, elle est définie par un élément `<span>` et la classe utilitaire `fr-hint-text`.

**Exemple de structure HTML simple**

```html
<fieldset class="fr-segmented">
    <legend class="fr-segmented__legend">
        Légende
        <span class="fr-hint-text">Description additionnelle</span>
    </legend>
    <div class="fr-segmented__elements">
        <div class="fr-segmented__element">
            <input value="1" type="radio" id="segmented-1" name="segmented">
            <label class="fr-label" for="segmented-1">
                Libellé
            </label>
        </div>
        <div class="fr-segmented__element">
            <input value="2" checked type="radio" id="segmented-2" name="segmented">
            <label class="fr-label" for="segmented-2">
                Libellé
            </label>
        </div>
        <div class="fr-segmented__element">
            <input value="3" type="radio" id="segmented-3" name="segmented">
            <label class="fr-label" for="segmented-3">
                Libellé
            </label>
        </div>
    </div>
</fieldset>
```

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](https://www.systeme-de-design.gouv.fr/version-courante/fr/premiers-pas/vous-etes-developpeur/prise-en-main#les-css) .

**Dépendances CSS**

| Dépendance | Obligatoire | Remarque |
|---|---|---|
| Core | Oui |  |
| Form | Oui |  |
| Segmented | Oui |  |
| Utility | Non | Uniquement pour l'ajout d'icône |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/form/form.min.css" rel="stylesheet">
<link href="dist/component/segmented/segmented.min.css" rel="stylesheet">
```

#### Variante de taille

Le contrôle segmenté est disponible en deux variantes de tailles pour s'adapter à différents contextes d'utilisation. Pour appliquer une variante de taille, ajoutez une des classes suivantes à l'élément `<fieldset class="fr-segmented">` :

- En taille MD : par défaut.
- En taille SM : définie par la classe `fr-segmented--sm`.

**Exemple de variante de taille**

```html
<fieldset class="fr-segmented fr-segmented--sm">
  <!-- Contenu du contrôle segmenté -->
</fieldset>
```

#### Variante avec légende en ligne

Le contrôle segmenté par défaut est affiché en dessous de sa légende mais il est possible de les afficher sur une même ligne avec l'utilisation de la classe `fr-segmented__legend--inline` sur l'élément `<legend>`.

**Exemple de contrôle segmenté avec légende en ligne**

```html
<fieldset class="fr-segmented">
    <legend class="fr-segmented__legend fr-segmented__legend--inline">
        Légende
    </legend>
    <div class="fr-segmented__elements">
        <!-- Contenu du contrôle segmenté -->
    </div>
</fieldset>
```

#### Variante sans légende visible

La légende `<legend>` du contrôle segmenté est obligatoire mais peut être positionné hors écran avec l'utilisation de la classe `fr-segmented--no-legend` sur l'élément `<fieldset>`.

**Exemple de contrôle segmenté sans légende visible**

```html
<fieldset class="fr-segmented fr-segmented--no-legend">
    <!-- Contenu du contrôle segmenté -->
</fieldset>
```

#### Variante avec icônes

Les libellés des segment du contrôle segmenté peuvent avoir une icône juxtaposée à gauche, elle est ajoutée via la **classe utilitaire d'icône** `fr-icon--NOM-ICONE` (voir [Icônes](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/icone) ).

**Exemple de variante avec icônes**

#### Déplier pour voir le code

```html
<fieldset class="fr-segmented">
    <legend class="fr-segmented__legend">
        Légende
    </legend>
    <div class="fr-segmented__elements">
        <div class="fr-segmented__element">
            <input value="1" type="radio" id="segmented-icon-1" name="segmented-icon">
            <label class="fr-icon-road-map-line fr-label" for="segmented-icon-1">
                Libellé
            </label>
        </div>
        <div class="fr-segmented__element">
            <input value="2" checked type="radio" id="segmented-icon-2" name="segmented-icon">
            <label class="fr-icon-road-map-line fr-label" for="segmented-icon-2">
                Libellé
            </label>
        </div>
        <div class="fr-segmented__element">
            <input value="3" type="radio" id="segmented-icon-3" name="segmented-icon">
            <label class="fr-icon-road-map-line fr-label" for="segmented-icon-3">
                Libellé
            </label>
        </div>
    </div>
</fieldset>
```

---

### JavaScript

Le composant Contrôle segmenté nécessite l'utilisation de JavaScript pour son fonctionnement de base, notamment pour gérer le passage à la ligne des éléments lorsque l'espace disponible est insuffisant. La classe `fr-segmented--vertical` est ainsi ajoutée par le JavaScript lorsqu'il est nécessaire de passer en mode vertical.

#### Installation du JavaScript

Chaque composant utilisant JavaScript possède un fichier JS spécifique et requiert le fichier JS du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```html
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/segmented/segmented.module.min.js"></script>
```

NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```html
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/segmented/segmented.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le comportement fonctionne automatiquement.

#### Instances

Sur le contrôle segmenté, l'élément suivant est instancié :

- Le composant "segmented", via la classe : `fr-segmented`
- Chaque "segmentedElement" du composant, via le sélecteur : `fr-segmented__element input`

Une fois chargé, le JS ajoute l'attribut `data-fr-js-segmented="true"` sur les éléments instanciés.

#### API

Il est possible d'interagir avec les instances du composant en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

##### segmented

**resize**

| **Description** | Permet de mettre à jour le composant après un changement de libellé. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(segmented).segmented.resize()` |

**node**

| **Description** | Renvoie le noeud HTML de l'élément. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(segmented).segmented.node` |

##### segmentedElement

**node**

| **Description** | Renvoie le noeud HTML de l'élément. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(segmentedElement).segmentedElement.node` |

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+segmented+)

##### Contenu associé

- **[Formulaire](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/formulaire)**  
  Présentation du composant Formulaire permettant l'agencement des éléments de saisie de données et des messages d'état.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/controle-segmente/accessibilite-du-controle-segmente

Le composant **Contrôle segmenté** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Lorsque le focus est positionné sur un segment :

- `Flèche droite` ou `Flèche du bas` : sélectionne le segment suivant.
- `Flèche gauche` ou `Flèche du haut` : sélectionne le segment précédent.

### Règles d’accessibilité

L’ensemble des règles d’accessibilité du [champs de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie/accessibilite-du-champ-de-saisie) doivent être respectées.

#### Structuration

- Le contrôle segmenté est contenu dans un élément `<fieldset>` avec élément `<legend>`.
- Chaque segment est un `<input>` de type `radio`.
- Les **segments d’un contrôle segmenté sont liés** par leur attribut `name` qui doit être identique.
- Le **libellé des segments** doit être explicite et décrire clairement l'option que le segment représente.

#### Contrastes de couleurs

Le composant **Contrôle segmenté** est suffisamment contrasté en thème clair et en thème sombre.

---

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Contrôle segmenté.

---

### Critères RGAA applicables

- **Couleurs :** 3.2
- **Présentation de l’information :** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Formulaires :** 11.1, 11.2, 11.4, 11.5, 11.6, 11.7
- **Navigation :** 12.8, 12.9
- **Consultation :** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)

##### Contenu associé

- **[Formulaire](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/formulaire)**  
  Présentation du composant Formulaire permettant l'agencement des éléments de saisie de données et des messages d'état.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/controle-segmente/demonstration-du-controle-segmente

#### Contenu associé

- **[Formulaire](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/formulaire)**  
  Présentation du composant Formulaire permettant l'agencement des éléments de saisie de données et des messages d'état.
