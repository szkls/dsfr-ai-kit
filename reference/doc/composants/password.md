# Mot de passe

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mot-de-passe · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mot-de-passe/design-du-mot-de-passe · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mot-de-passe/code-du-mot-de-passe · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mot-de-passe/accessibilite-du-mot-de-passe · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mot-de-passe/demonstration-du-mot-de-passe
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

Le mot de passe est un élément d’interaction avec l’interface permettant d’aider l’usager à créer ou saisir un mot de passe.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mot-de-passe

### Quand utiliser ce composant ?

Utiliser le mot de passe lorsque votre service nécessite de demander à l’usager de créer ou saisir un mot de passe, notamment dans les cas de création de compte ou de connexion.

Pour ces deux usages, des modèles de pages sont à disposition : [page de création de compte](https://www.systeme-de-design.gouv.fr/version-courante/fr/modeles/pages-types/page-de-creation-de-compte) et [page de connexion](https://www.systeme-de-design.gouv.fr/version-courante/fr/modeles/pages-types/page-de-connexion) .

### Comment utiliser ce composant ?

- **Permettre à l’usager de saisir le mot de passe par copier/coller** dans le champ de saisie afin de simplifier son expérience.
- **Masquer le mot de passe par défaut** mais donner la possibilité à l’usager de l'afficher au besoin. Sur certains navigateurs, le dernier caractère saisi reste visible.
- **Appliquer une contrainte sur le nombre de caractères maximum uniquement si vous le souhaitez** . Le composant ne l’impose pas par défaut et autorise la saisie de long mot de passe.
- **Adapter le niveau de contrainte du mot de passe demandé à l’usager au besoin de sécurité de votre service** afin de ne pas rendre la saisie difficile si cela ne le nécessite pas (cf. [Recommandations relatives à l'authentification multifacteur et aux mots de passe de l'ANSSI](https://messervices.cyber.gouv.fr/guides/recommandations-relatives-lauthentification-multifacteur-et-aux-mots-de-passe) )
- **Éviter tant que possible de forcer le changement de mot de passe par l’usager** (tous les mois ou trimestres, par exemple). Cette pratique complexifie la mémorisation pour l’usager et donc l’accès à votre service. Cette recommandation est évidemment à adapter selon les contraintes de sécurité auxquelles votre service est soumis.
- **Veiller à ne jamais envoyer de mot de passe en clair par mail ou autre** si vous proposez un système de récupération de mot de place. Redirigez plutôt l’usager vers un formulaire temporaire lui permettant de mettre à jour son mot de passe.

### Règles éditoriales

Le mot de passe n’est régi par aucune règle éditoriale spécifique.

#### Contenu associé

- **[Alerte](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/alerte)**  
  Présentation du composant Alerte utilisé pour relayer une information importante à l’usager de façon contextuelle sans interrompre sa navigation.

- **[Champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)**  
  Présentation du composant Champ de saisie permettant à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mot-de-passe/design-du-mot-de-passe

![Anatomie du mot de passe](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/password/design/anatomy/anatomy-1.png)

1. Un libellé “Mot de passe” — Obligatoire
2. Un texte de description, recommandé pour préciser les règles de sécurisation notamment dans les cas de création de compte — En option
3. Une fonctionnalité d’affichage du mot de passe — Obligatoire
4. Un champ de saisie “mot de passe” — Obligatoire
5. Un message d’accompagnement, pour aider au remplissage — Obligatoire

### Variations

Le mot de passe se base sur le champ de saisie de type “mot de passe” et se décline en deux variations, couvrant les deux cas d’usages de référence.

**Demande de mot de passe pour la création d’un compte ou modification de mot de passe associé à un compte existant**

*(Démonstration interactive « password--login » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=password--login&nav=0&globals=theme%3Alight)*

- Utiliser cette variation pour permettre à l’usager de créer ou modifier un mot de passe, soumis à des contraintes de règles de sécurisation.
- Préciser les règles à respecter et les éventuels formats attendus (longueurs, utilisation de caractères et de casse spécifiques, etc.) au sein du texte de description, prévu à cet effet.
- Rendre la description du champ dédié au mot de passe dynamique en fonction du contenu saisi.

**Demande de mot de passe pour la connexion**

*(Démonstration interactive « password--register » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=password--register&nav=0&globals=theme%3Alight)*

- Utiliser cette variation pour permettre à l’usager de rentrer son mot de passe afin de se connecter à son compte.
- Proposer un lien vers la page de récupération de mot de passe en-dessous du champ de saisie.

### Tailles

La largeur du mot de passe s’adapte à la taille de son conteneur.

### États

**État d’erreur**

- Demande de mot de passe pour la création d’un compte ou modification de mot de passe associé à un compte existant

*(Démonstration interactive « password--register-validate » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=password--register-validate&nav=0&globals=theme%3Alight)*

Dans le cas d’une erreur de saisie, reprendre l’affichage d’erreur du champ de saisie et préciser dans le texte le type d’erreur rencontré en fonction des règles de sécurisation (exemple : “Le mot de passe doit comporter au moins un chiffre”).

- Demande de mot de passe pour la connexion

Dans le cas d’erreur de saisie, préférer l’usage d’une alerte proposant un message d’erreur global à l’identification (exemple : “Le couple mot de passe/identifiant saisi n’est pas correct” ou “Erreur d'identification : merci de vérifier votre email et votre mot de passe”).

Reprendre l’affichage d’erreur du champ de saisie inviduel risquerait en effet de donner des indications sur l’origine de l’erreur (entre l’identifiant ou le mot de passe).

### Personnalisation

Le mot de passe n’est pas personnalisable.

Toutefois, certains éléments sont optionnels - voir [la structure du composant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mot-de-passe/design-du-mot-de-passe#mot-de-passe) .

#### Contenu associé

- **[Alerte](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/alerte)**  
  Présentation du composant Alerte utilisé pour relayer une information importante à l’usager de façon contextuelle sans interrompre sa navigation.

- **[Champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)**  
  Présentation du composant Champ de saisie permettant à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mot-de-passe/code-du-mot-de-passe

### HTML

#### Structure du composant

Le composant **Mot de passe** permet à l'utilisateur de masquer ou révéler le texte du mot de passe. Sa structure est la suivante :

- Le Conteneur du mot de passe, obligatoire, est un élément HTML `<div>` défini par la classe `fr-password`.
- Le libellé du mot de passe, obligatoire, doit être un élément HTML `<label>` avec les classe `fr-label` et `fr-password__label`, associé au mot de passe par son attribut `for` dont la valeur est égale à l'attribut `id` du mot de passe.
- Une description additionnelle du mot de passe, optionnelle, peut être ajoutée dans le libellé, elle est définie par un élément `<span>` et la classe utilitaire `fr-hint-text`.
- Le champ de mot de passe est contenu dans un élément HTML `<div>` défini par la classe `fr-input-wrap`.
- Le mot de passe est un élément HTML `<input>` de type `password`, obligatoire, défini par la classe `fr-password__input`.
  - Il dispose d'un attribut `autocomplete` dont la valeur varie selon l'usage du mot de passe entre `new-password` pour la création et `current-password` pour la connexion.
  - Les attributs `autocapitalize` et `autocorrect` ont pour valeur `false` par défaut.
- Un message d'information, d'erreur ou de succès peut être associé au mot de passe en utilisant un élément HTML `<div>` avec la classe `fr-messages-group` dans lequel on peut ajouter un message `fr-message`.
  - Son attribut `id` doit être associé à l'attribut `aria-describedby` du mot de passe.
  - Ce bloc peut être placé vide et être rempli dynamiquement, auquel cas il doit être annoncé à l'utilisateur en utilisant l'attribut `aria-live="polite"`.
- Une Fonctionnalité d’affichage du mot de passe, obligatoire, est contenue dans un élément `<div>` défini par les classes `fr-password__checkbox`, `fr-checkbox-group`, et `fr-checkbox-group--sm`, contenant :
  - La case à cocher pour révéler ou masquer le mot de passe est un élément `<input>` de type `checkbox`.
  - Le libellé de la case à cocher, obligatoire, doit être un élément HTML `<label>` avec la classe `fr-label` associé à la case à cocher par son attribut `for` dont la valeur est égale à l'attribut `id` de la case à cocher.

**Exemple de structure HTML**

```html
<div class="fr-password">
    <label class="fr-password__label fr-label" for="password-input">
        Mot de passe
        <span class="fr-hint-text">Texte de description additionnel</span>
    </label>
    <div class="fr-input-wrap">
        <input id="password-input" class="fr-password__input fr-input" autocapitalize="off" autocorrect="off" aria-describedby="password-input-messages" aria-required="true" name="password" autocomplete="new-password" type="password">
    </div>
    <div class="fr-messages-group" id="password-input-messages" aria-live="polite">
        <p class="fr-message">Votre mot de passe doit contenir :</p>
        <p class="fr-message fr-message--info" data-fr-valid="validé" data-fr-error="en erreur">12 caractères minimum</p>
        <p class="fr-message fr-message--info" data-fr-valid="validé" data-fr-error="en erreur">1 caractère spécial minimum</p>
        <p class="fr-message fr-message--info" data-fr-valid="validé" data-fr-error="en erreur">1 chiffre minimum</p>
    </div>
    <div class="fr-password__checkbox fr-checkbox-group fr-checkbox-group--sm">
        <input aria-label="Afficher le mot de passe" id="password-show" type="checkbox">
        <label class="fr-label" for="password-show">
            Afficher
        </label>
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
| Form | Oui |  |
| Input | Oui |  |
| checkbox | Oui |  |
| Password | Oui |  |
| Link | Non | Uniquement pour le lien de récupération du mot de passe |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/form/form.min.css" rel="stylesheet">
<link href="dist/component/input/input.min.css" rel="stylesheet">
<link href="dist/component/checkbox/checkbox.min.css" rel="stylesheet">
<link href="dist/component/password/password.min.css" rel="stylesheet">
```

#### Variantes de validation

Un message d'information complémentaire, d'erreur ou de succès doit être ajouté dans un bloc `fr-messages-group` à la fin du groupe du mot de passe et doit être lié à la liste déroulante via un attribut `aria-describedby`.

Pour ajouter un état de validation à un message, ajoutez une des classes suivantes sur le paragraphe comportant le message `<p class="fr-message">` :

- Par défaut le message indique une information.
- La classe `fr-message--error` : Indique une erreur.
- La classe `fr-message--valid` : Indique un succès.

**Exemple de mot de passe après validation**

#### Déplier pour voir le code

```html
<div class="fr-password">
    <label class="fr-password__label fr-label" for="password-validation-input">
        Mot de passe
    </label>
    <div class="fr-input-wrap">
        <input class="fr-password__input fr-input" autocapitalize="off" autocorrect="off" aria-describedby="password-validation-input-messages" aria-required="true" name="password" value="x8A@" autocomplete="new-password" id="password-validation-input" type="password">
    </div>
    <div class="fr-messages-group" id="password-validation-input-messages" aria-live="polite">
        <p class="fr-message">Votre mot de passe doit contenir :</p>
        <p class="fr-message fr-message--error" data-fr-valid="validé" data-fr-error="en erreur">12 caractères minimum</p>
        <p class="fr-message fr-message--valid" data-fr-valid="validé" data-fr-error="en erreur">1 caractère spécial minimum</p>
        <p class="fr-message fr-message--valid" data-fr-valid="validé" data-fr-error="en erreur">1 chiffre minimum</p>
    </div>
    <div class="fr-password__checkbox fr-checkbox-group fr-checkbox-group--sm">
        <input aria-label="Afficher le mot de passe" id="password-validation-show" type="checkbox">
        <label class="fr--password__checkbox fr-label" for="password-validation-show">
            Afficher
        </label>
    </div>
</div>
```

#### Variante de mot de passe de connexion

Le composant mot de passe peut être utilisé dans un contexte de connexion et proposer un lien vers une page de récupération du mot de passe.

**Exemple de mot de passe de connexion**

#### Déplier pour voir le code

```html
<div class="fr-password">
    <label class="fr-password__label fr-label" for="password-connexion-input">
        Mot de passe
    </label>
    <div class="fr-input-wrap">
        <input class="fr-password__input fr-input" autocapitalize="off" autocorrect="off" aria-describedby="password-connexion-input-messages" aria-required="true" name="password" autocomplete="current-password" id="password-connexion-input" type="password">
    </div>
    <div class="fr-messages-group" id="password-connexion-input-messages" aria-live="polite">
    </div>
    <div class="fr-password__checkbox fr-checkbox-group fr-checkbox-group--sm">
        <input aria-label="Afficher le mot de passe" id="password-connexion-show" type="checkbox">
        <label class="fr--password__checkbox fr-label" for="password-connexion-show">
            Afficher
        </label>
    </div>
    <p>
        <a href="[À MODIFIER - url de la page de récupération]" class="fr-link">Mot de passe oublié ?</a>
    </p>
</div>
```

---

### JavaScript

#### Installation du JavaScript

Pour fonctionner, le composant mot de passe nécessite l'utilisation de JavaScript. Chaque composant utilisant JavaScript possède un fichier JS spécifique et requiert le fichier JS du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```html
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/password/password.module.min.js"></script>
```

NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```html
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/password/password.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur le mot de passe, les éléments suivants sont instanciés :

- Le conteneur, via la classe : `fr-password`
- Le champs de mot de passe, via la classe : `password__input`
- Le libellé, via la classe : `fr-password__label`
- La case à cocher pour révéler ou masquer le mot de passe, via la classe : `fr-password__checkbox` et l'élément `<input>` de type `checkbox`

Une fois chargé, le JS ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés.

#### API

Il est possible d'interagir avec les instances du composant en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :

```js
const elem = document.getElementById('ID_TAB');
dsfr(elem).passwordInput.isEnabled;
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

##### password

**isEnabled**

| **Description** | Défini si le fonctionnement du mot de passe est activé ou non |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).password.isEnabled = false` |

**node**

| **Description** | Renvoie le noeud HTML de l'élément. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).password.node` |

##### passwordInput

**isEnabled**

| **Description** | Défini si le fonctionnement du mot de passe est activé ou non |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).passwordInput.isEnabled = false` |

**node**

| **Description** | Renvoie le noeud HTML de l'élément. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).passwordInput.node` |

##### passwordLabel

**isEnabled**

| **Description** | Défini si le fonctionnement du libellé du mot de passe est activé ou non |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).passwordLabel.isEnabled = false` |

**node**

| **Description** | Renvoie le noeud HTML de l'élément. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).passwordLabel.node` |

##### passwordToggle

**isEnabled**

| **Description** | Défini si le fonctionnement d'affichage du mot de passe est activé ou non |
|---|---|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).passwordToggle.isEnabled = false` |

**node**

| **Description** | Renvoie le noeud HTML de l'élément. |
|---|---|
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).passwordToggle.node` |

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+password+)

#### [v1.15.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.15.0) - 17 juillet 2026

- **[lien vers les recommandation sur les mots de passe de l'ANSSI](https://github.com/GouvernementFR/dsfr/pull/1366)**  
  #1366  
  - L'ancien document n'est plus disponible.  
  📝 docs  
  password

#### [v1.11.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.0) - 11 décembre 2023

- **[placement checkbox & icon info](https://github.com/GouvernementFR/dsfr/pull/832)**  
  #832  
  - met a jour l'icône de message d'information
- met a jour le placement de la checkbox  
  🐛 fix  
  password

- **[couleur du texte de la checkbox "afficher"](https://github.com/GouvernementFR/dsfr/pull/750)**  
  #750  
  - utilisation du token de couleur : text-label-grey  
  🐛 fix  
  password

#### [v1.10.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.10.0) - 19 juillet 2023

- **[boutons spéciaux input Safari](https://github.com/GouvernementFR/dsfr/pull/711)**  
  #711  
  - Dans les champs de type password, sur safari Mac, il y a une icône apportant des outils supplémentaire qui se superpose à l’icône des signalant la hauteur de casse
- Déplacement des icônes natives pour qu'elles ne se superposent pas
- Retrait de l'icône capslock native, privilégiant la nôtre  
  ✨ feat  
  core password

- **[correctif accessibilité des messages](https://github.com/GouvernementFR/dsfr/pull/694)**  
  #694  
  - ajout sur les messages de validation et d'erreur de la composition du mot de passe d'un statut en after uniquement pour les lecteurs d'écrans  
  Breaking change:  
  il est nécessaire d'ajouter les attributs `data-fr-valid`et `data-fr-error` avec les textes correspondants à l'état (respectivement, en français, "validé" et "en erreur"  
  🐛 fix 💥 Breaking change  
  password

- **[retrait du bouton natif sur edge](https://github.com/GouvernementFR/dsfr/pull/669)**  
  #669  
  - Sur edge une icône oeil apparaît au focus d'un champ de type "password"
- Retrait de l'icone native  
  🐛 fix  
  password

- **[correctif états de la case à cocher](https://github.com/GouvernementFR/dsfr/pull/667)**  
  #667  
  - force l'état de la checkbox à l'état par défaut, pour éviter qu'elle ne passe en erreur/succès si elle hérite de cet état sur le composant.  
  🐛 fix  
  password

- **[bug icône](https://github.com/GouvernementFR/dsfr/pull/648)**  
  #648  
  - conditionne l'ajout de la classe utile `fr-icon` à l'utilisation d'une string en paramètre `icon`  
  🐛 fix  
  password

#### [v1.9.3](https://github.com/GouvernementFR/dsfr/releases/tag/v1.9.3) - 17 mai 2023

- **[correction capslock safari](https://github.com/GouvernementFR/dsfr/pull/503)**  
  #503  
  - Correction erreur js sur le champ password au clic sur le trousseau (safari)
- Retrait icone native capslock safari
- Ajout attribut `autocapitalize='off'` sur les champs password et email pour désactiver la majuscule au début (mobile)
- Ajout attribut `autocorrect` sur les champs password et email pour désactiver la correction orthographique  
  🐛 fix  
  password account

#### [v1.9.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.9.1) - 11 avril 2023

- **[correctif erreur getModifierState](https://github.com/GouvernementFR/dsfr/pull/574)**  
  #574  
  Lorsque le navigateur fait l'autocompletion du champ password, il lance un événement qui n'est pas forcément un évènement de clavier et provoque une erreur indiquant que la fonction getModifierState n'existe pas.  
  🐛 fix  
  password

#### [v1.8.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.8.0) - 27 octobre 2022

- **[correction template password](https://github.com/GouvernementFR/dsfr/pull/399)**  
  #399  
  fix  
  password

- **[ajout du composant mot de passe](https://github.com/GouvernementFR/dsfr/pull/391)**  
  #391  
  feat  
  password

##### Contenu associé

- **[Alerte](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/alerte)**  
  Présentation du composant Alerte utilisé pour relayer une information importante à l’usager de façon contextuelle sans interrompre sa navigation.

- **[Champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)**  
  Présentation du composant Champ de saisie permettant à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mot-de-passe/accessibilite-du-mot-de-passe

Le composant **Mot de passe** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

Reprendre les éléments d'accessibilité liés au composant [champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie/accessibilite-du-champ-de-saisie)

#### Structuration

- Le champ de mot de passe doit avoir :
  - un type `password`.
  - un attribut `autocomplete="new-password"` pour la création ou `autocomplete="current-password"` pour la connexion.
- La **case à cocher** pour révéler ou masquer le mot de passe a un intitulé explicite donné par l’attribut `aria-label` qui reprend l'intitulé visible.

#### Contrastes de couleurs

La navigation principale est suffisamment contrastée en thème clair et en thème sombre.

---

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Mot de passe.

---

### Critères RGAA applicables

- **Couleurs :** 3.2, 3.3
- **Liens :** 6.1, 6.2
- **Présentation de l’information :** 10.1, 10.2, 10.3,10.4, 10.5, 10.7, 10.8, 10.11, 10.12
- **Formulaires :** 11.1, 11.2, 11.9, 11.10, 11.11, 11.13
- **Navigation :** 12.8, 12.9
- **Consultation :** 13.9, 13.11

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)

##### Contenu associé

- **[Alerte](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/alerte)**  
  Présentation du composant Alerte utilisé pour relayer une information importante à l’usager de façon contextuelle sans interrompre sa navigation.

- **[Champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)**  
  Présentation du composant Champ de saisie permettant à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mot-de-passe/demonstration-du-mot-de-passe

*(Démonstration interactive « password--docs » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=password--docs&nav=0&globals=theme%3Alight)*

#### Contenu associé

- **[Alerte](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/alerte)**  
  Présentation du composant Alerte utilisé pour relayer une information importante à l’usager de façon contextuelle sans interrompre sa navigation.

- **[Champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)**  
  Présentation du composant Champ de saisie permettant à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.
