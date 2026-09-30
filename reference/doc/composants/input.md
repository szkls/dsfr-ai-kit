# Champ de saisie

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie/design-du-champ-de-saisie · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie/code-du-champ-de-saisie · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie/accessibilite-du-champ-de-saisie · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie/demonstration-du-champ-de-saisie
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

Le champ de saisie est un élément d’interaction avec l’interface permettant à l’usager d’entrer du contenu et/ou des données.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie

*(Démonstration interactive « input--input » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=input--input&nav=0&globals=theme%3Alight)*

### Quand utiliser ce composant ?

Utiliser le champ de saisie pour permettre à un usager de saisir du contenu et/ou des données.

> **Information**
> N’utiliser pas un champ de saisie pour des **choix fermés** . Préférer plutôt une [liste déroulante](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante) , des [boutons radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio) ou des [cases à cocher](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher) .
> 
> Pour les champs de recherche spécifiquement, utiliser la [barre de recherche](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/barre-de-recherche) .

### Comment utiliser ce composant ?

- **Placer le libellé au-dessus du champ de saisie** , pour faciliter la lecture.
- **Ajouter un texte d’aide sous le libellé** afin de faciliter la saisie par l’usager, notamment pour clarifier la nature du contenu attendu. Si un format précis est requis, il faut l’indiquer de la manière la plus claire possible (et y inclure des exemples lorsque c’est possible).
- **Rendre visible toute information essentielle à la saisie** . Ne pas cacher du contenu dans un tooltip ou une infobulle.
- **Limiter l’utilisation de placeholder** car il peut créer de la confusion chez l’usager. Si toutefois vous souhaitez l’utiliser, il est nécessaire de respecter la couleur proposée afin de rester accessible, et son contenu doit présenter des informations non indispensables à la compréhension du champ. En aucun cas il ne peut remplacer un libellé et il est uniquement à réserver pour des aides à la saisie secondaires.
- **Afficher les champs en liste verticale** pour faciliter la lecture et optimiser l’ergonomie. L’oeil lit spontanément de bas en haut.
- **Utiliser un bouton primaire** pour valider un champ de saisie ou un formulaire. Le bouton secondaire sera quant à lui utilisé pour réinitialiser le formulaire ou abandonner la saisie.
- **Indiquer systématiquement la réussite ou non de la soumission d’un champ** à l’aide d’un message de succès ou d’erreur.

### Règles éditoriales

- **Conserver le même libellé pour les champs demandant la même information** .

#### Contenu associé

- **[Bouton radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio)**  
  Présentation du composant Bouton radio permettant à l’usager de sélectionner une option unique parmi un ensemble limité de choix.

- **[Case à cocher](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher)**  
  Présentation du composant Case à cocher permettant à l’usager de sélectionner une ou plusieurs options dans une liste de manière indépendante.

- **[Interrupteur](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/interrupteur)**  
  Présentation du composant Interrupteur permettant de basculer entre deux états opposés sans validation supplémentaire.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie/design-du-champ-de-saisie

### Design

![Anatomie du champ de saisie](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/input/design/anatomy/anatomy-1.png)

1. Une légende, décrivant le contexte du groupe de champ — Obligatoire
2. Une description additionnelle pour la légende — En option
3. Un libellé, associé au champ — Obligatoire
4. Un texte de description additionnelle — En option
5. Un champ — Obligatoire
6. Un placeholder — En option
7. Une icône, pouvant être modifiée — En option

### Variations

**Champ simple**

*(Démonstration interactive « input--default » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=input--default&nav=0&globals=theme%3Alight)*

Le champ simple est un champ de saisie libre qui accepte une courte ligne de contenu (texte et/ou nombre).

**Zone de texte**

*(Démonstration interactive « input--textarea » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=input--textarea&nav=0&globals=theme%3Alight)*

La zone de texte est un champ de saisie libre qui accepte plus d’une ligne de contenu (texte ou/et nombre). Il reprend le style du champ simple, seule sa hauteur augmente.

**Autres types de champs**

*(Démonstration interactive « input--icon » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=input--icon&nav=0&globals=theme%3Alight)*

*(Démonstration interactive « input--date » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=input--date&nav=0&globals=theme%3Alight)*

*(Démonstration interactive « input--number » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=input--number&nav=0&globals=theme%3Alight)*

*(Démonstration interactive « input--button » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=input--button&nav=0&globals=theme%3Alight)*

*(Démonstration interactive « input--action » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=input--action&nav=0&globals=theme%3Alight)*

L'ajout d'icône n'a qu'un but illustratif (voir [les icônes disponibles](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/icone) ).

### Tailles

La largeur du champ ne peut pas excéder la taille de son conteneur.

Toutefois, il est important de l’ajuster en fonction de la quantité de contenu attendu, afin d’accompagner l’usager dans sa saisie. Par exemple, les champs de saisie de codes postaux doivent avoir une largeur inférieure à celle des champs d’e-mails.

### États

**État d’erreur**

L'état d’erreur est signalé par un changement de couleur ainsi que l’affichage d’une ligne rouge (cf. couleurs système : le rouge est la couleur de l’état erreur) et d’un message d’erreur en-dessous du composant.

*(Démonstration interactive « input--error » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=input--error&nav=0&globals=theme%3Alight)*

**État de succès**

L'état de succès est signalé par un changement de couleur ainsi que l’affichage d’une ligne verte (cf. couleurs système : le vert est la couleur de l’état succès) et d’un message de succès en-dessous du composant.

*(Démonstration interactive « input--success » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=input--success&nav=0&globals=theme%3Alight)*

**État désactivé**

L'état désactivé indique que l’usager ne peut pas interagir avec le champ.

*(Démonstration interactive « input--disabled » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=input--disabled&nav=0&globals=theme%3Alight)*

Dans le cas d’un champ de saisie, il indique à l’usager qu’il ne peut pas saisir de contenu jusqu'à ce qu'une autre action soit terminée, par exemple.

> **Information**
> Utiliser l’état désactivé que très ponctuellement. Il est notamment recommandé de masquer le champ si sa complétion n’est pas requise.

### Personnalisation

Le champ de saisie n’est pas personnalisable.

Toutefois, certains éléments sont optionnels et les icônes peuvent être changées - voir [la structure du composant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie/design-du-champ-de-saisie#champ-de-saisie) .

#### Contenu associé

- **[Bouton radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio)**  
  Présentation du composant Bouton radio permettant à l’usager de sélectionner une option unique parmi un ensemble limité de choix.

- **[Case à cocher](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher)**  
  Présentation du composant Case à cocher permettant à l’usager de sélectionner une ou plusieurs options dans une liste de manière indépendante.

- **[Interrupteur](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/interrupteur)**  
  Présentation du composant Interrupteur permettant de basculer entre deux états opposés sans validation supplémentaire.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie/code-du-champ-de-saisie

### HTML

Un **champ de saisie** permet à l'utilisateur de saisir des données. Il existe plusieurs types de champs de saisie en fonction du type de données à saisir.

#### Champ de saisie simple

La structure HTML d'un champ de saisie de base est la suivante :

- Un conteneur `<div>` de classe `fr-input-group`, contenant :
  - Un intitulé, obligatoire, dans un élément `<label>` de classe `fr-label` et lié au champ via un attribut `for` pour décrire le champ de saisie
  - Une description additionnelle, optionnelle, dans un élément `<span>` de classe `fr-hint-text` à placer dans le `<label>`. Cette description peut être utilisée pour donner des indications sur le format attendu.
  - Un champ `<input>` de classe `fr-input` pour saisir les données. Pour une plus grande zone de saisie, il est possible d'utiliser un élément `<textarea>`.
  - Un message d'erreur/information/avertissement/succès, optionnel, dans un bloc `fr-messages-group`, lié au `aria-describedby` du champ de saisie. Ce message doit être un élément `<p>` avec la classe `fr-message`, et un modifier `fr-message--error`, `fr-message--info`, `fr-message--warning` ou `fr-message--valid` selon le type de message.

**Exemple de structure simple**

```html
<div class="fr-input-group">
    <label class="fr-label" for="text-input">
        Libellé champ de saisie
        <span class="fr-hint-text">Texte de description additionnel</span>
    </label>
    <input class="fr-input" aria-describedby="input-messages" id="text-input" type="text">
    <div class="fr-messages-group" id="input-messages" aria-live="polite">
    </div>
</div>
```

#### Champ de saisie avec bouton

Un champ de saisie peut être associé à un bouton pour déclencher une action. La structure HTML est la suivante :

- La structure du champ de saisie avec bouton est identique à celle du champ de saisie simple.
- La différence réside dans l'ajout d'un bouton `<button>` de classe `fr-btn` à la suite du champ de saisie `<input>`. Le champ de saisie et le bouton doivent être enveloppé dans un élément `<div>` de classe `fr-input-wrap` et une des classes suivantes :
  - `fr-input-wrap--addon` : Pour accoler un bouton d'envoi et ajouter une bordure bleue sous le champ de saisie (s'utilise avec un bouton primaire).
  - `fr-input-wrap--action` : Pour placer un bouton d'action à coté (s'utilise avec un bouton secondaire).

**Exemple de structure avec bouton d'envoi**

```html
<div class="fr-input-group">
    <label class="fr-label" for="text-input-button">
        Libellé champ de saisie
    </label>
    <div class="fr-input-wrap fr-input-wrap--addon">
        <input class="fr-input" aria-describedby="text-input-button-messages" id="text-input-button" type="text">
        <button type="button" class="fr-btn">Envoyer</button>
    </div>
    <div class="fr-messages-group" id="text-input-button-messages" aria-live="polite">
    </div>
</div>
```

**Exemple de structure avec bouton d'action**

```html
<div class="fr-input-group">
    <label class="fr-label" for="text-input-action">
        Libellé champ de saisie
    </label>
    <div class="fr-input-wrap fr-input-wrap--action">
        <input class="fr-input" aria-describedby="text-input-action-messages" id="text-input-action" type="text">
        <button type="button" class="fr-btn fr-icon-delete-line fr-btn--secondary">Supprimer le champ</button>
    </div>
    <div class="fr-messages-group" id="text-input-action-messages" aria-live="polite">
    </div>
</div>
```

#### Statut du champ de saisie

Les champs de saisie peuvent avoir différents états pour indiquer à l'utilisateur la validité de sa saisie ou pour fournir des informations contextuelles. Les principaux états sont :

- **Erreur** : Indique que la saisie est incorrecte. La classe `fr-input-group--error` doit être ajoutée au conteneur du champ de saisie. Le message d'erreur doit être placé dans un élément `<p>` avec la classe `fr-message fr-message--error` à l'intérieur du bloc `fr-messages-group`.
- **Succès** : Indique que la saisie est correcte. La classe `fr-input-group--valid` doit être ajoutée au conteneur du champ de saisie. Le message de succès doit être placé dans un élément `<p>` avec la classe `fr-message fr-message--valid` à l'intérieur du bloc `fr-messages-group`.

Des messages d'information ou d'avertissement peuvent également être utilisés de la même manière, pour fournir des indications supplémentaires à l'utilisateur, via les classes `fr-message--info` ou `fr-message--warning`. Mais ceux-ci n'ont pas d'impact sur le statut du champ et du libellé associé.

#### Groupes de champs de saisie

Voir la documentation sur les [formulaires](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/formulaire/code-du-formulaire) .

#### Attributs du champs de saisie

Les champs de saisie peuvent être enrichis avec des attributs HTML pour améliorer l'accessibilité et l'expérience utilisateur.

- `aria-describedby` : Permet d'associer un message d'erreur/information/avertissement/succès au champ de saisie. Cet attribut doit contenir l'ID du bloc de message associé.
- `spellcheck` : Permet de définir si le navigateur doit vérifier les fautes orthographiques. A désactiver, notamment, sur les champs de connexion et d'inscription. La valeur par défaut dépend du type d'élément et des navigateurs. Les valeurs possibles sont :
  - `true` pour activer la vérification orthographique.
  - `false` pour désactiver la vérification orthographique.
- `autocapitalize` : Permet de définir si le navigateur doit automatiquement capitaliser les mots saisis dans le champ. A désactivé, notamment, sur les champs d'identifiant et mot de passe. La valeur par défaut dépend de d'élément et des navigateurs. Seuls les navigateurs mobiles, et les données vocales, sont impactés. Les valeurs possibles sont :
  - `off` pour désactiver la capitalisation automatique.
  - `on` pour activer la capitalisation automatique de chaque phrase.
  - `words` pour activer la capitalisation automatique de chaque mot.
  - `characters` pour activer la capitalisation automatique de chaque caractère.
- `autocomplete` : Permet de définir si le navigateur doit proposer des suggestions de saisie pour le champ. Les valeurs possibles sont :
  - `on` (par défaut)
  - `off` pour désactiver l'autocompletion qui pourrait être ajouté automatiquement par le navigateur.
  - Des valeurs en fonction du type de données. [Voir l'ensemble des valeurs disponibles](https://developer.mozilla.org/fr/docs/Web/HTML/Attributes/autocomplete) .

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
| Button | Non | Uniquement pour les variations avec bouton associé au champ |
| Utility | Non | Uniquement pour l'ajout d'icône dans le champ de saisie |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/form/form.min.css" rel="stylesheet">
<link href="dist/component/input/input.min.css" rel="stylesheet">
```

#### Variantes de types

Le type de champ de saisie est défini par l'attribut `type` de l'élément `<input>`. Les types de champs de saisie disponibles sont les suivants :

- `text` : Champ de saisie de texte simple
- `email` : Champ de saisie d'adresse email
- `password` : Champ de saisie de mot de passe (privilégier l'utilisation du composant [mot de passe](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mot-de-passe) )
- `tel` : Champ de saisie de numéro de téléphone
- `number` : Champ de saisie de nombre
- `date` : Champ de saisie de date
- `time` : Champ de saisie d'heure
- `url` : Champ de saisie d'URL
- `search` : Champ de saisie de recherche

Suivant le type de champ de saisie, des styles spécifiques peuvent être appliqués par le navigateur.

- Le type `date` ajoute un bouton de sélection de date à droite dans champ de saisie. Cette icône est redéfinie par le DSFR pour utiliser les icônes du DSFR.
- Le type `search` ajoute un bouton de réinitialisation à droite dans champ de saisie lorsque du texte a été renseigné.

#### Variante de champ avec icône

Une icône peut être ajoutée dans le champ de saisie pour apporter une information visuelle supplémentaire. La structure HTML est la suivante :

- La structure du champ de saisie avec icône est similaire à celle du champ de saisie avec bouton, avec un le champ `<input>` dans un conteneur `fr-input-wrap`.
- L'icône est ajoutée sur ce conteneur avec la classe utilitaire de l'icône souhaitée `fr-icon-NOM-ICON`.

**Exemple de structure avec icône**

```html
<div class="fr-input-group">
    <label class="fr-label" for="text-input-icon">
        Libellé champ de saisie
        <span class="fr-hint-text">Texte de description additionnel</span>
    </label>
    <div class="fr-input-wrap fr-icon-alert-line">
        <input class="fr-input" aria-describedby="text-input-icon-messages" id="text-input-icon" type="text">
    </div>
    <div class="fr-messages-group" id="text-input-icon-messages" aria-live="polite">
    </div>
</div>
```

#### Variantes d'états

Le champ de saisie est disponible en plusieurs variantes d'états :

- Le champ en **erreur** : définie par la classe `fr-input-group--error`.
- Le champ avec **succès** : définie par la classe `fr-input-group--valid`.
- Le champ **désactivée** : définie par la classe `fr-input-group--disabled` **et** l'attribut `disabled` sur l'élément `<input>`.

**Exemple de champ de saisie en erreur**

```html
<div class="fr-input-group fr-input-group--error">
    <label class="fr-label" for="text-input-error">
        Libellé champ de saisie
    </label>
    <input class="fr-input" aria-describedby="text-input-error-messages" id="text-input-error" type="text">
    <div class="fr-messages-group" id="text-input-error-messages" aria-live="polite">
        <p class="fr-message fr-message--error" id="text-input-error-message-error">Texte d’erreur</p>
    </div>
</div>
```

**Exemple de champ de saisie avec succès**

```html
<div class="fr-input-group fr-input-group--valid">
    <label class="fr-label" for="text-input-valid">
        Libellé champ de saisie
    </label>
    <input class="fr-input" aria-describedby="text-input-valid-messages" id="text-input-valid" type="text">
    <div class="fr-messages-group" id="text-input-valid-messages" aria-live="polite">
        <p class="fr-message fr-message--valid" id="text-input-valid-message-valid">Texte de validation</p>
    </div>
</div>
```

**Exemple de champ de saisie désactivé**

```html
<div class="fr-input-group fr-input-group--disabled">
    <label class="fr-label" for="text-input-disabled">
        Libellé champ de saisie
    </label>
    <input class="fr-input" aria-describedby="text-input-disabled-messages" disabled id="text-input-disabled" type="text">
    <div class="fr-messages-group" id="text-input-disabled-messages" aria-live="polite">
    </div>
</div>
```

---

### JavaScript

Le composant Champ de saisie **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+input+)

#### [v1.15.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.15.0) - 17 juillet 2026

- **[améliore l'aide à la saisie des champs email et tél](https://github.com/GouvernementFR/dsfr/pull/1364)**  
  #1364  
  - Utilisation du texte d'aide " [email@example.com](mailto:email@example.com) " au lieu de " [email@domain.com](mailto:email@domain.com) "
- Utilisation de l'exemple de téléphone "(+33) 5 36 49 68 27" au lieu de "(+33) 1 22 33 44 55"  
  ✨ feat  
  input

#### [v1.13.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.13.1) - 26 mars 2025

- **[focus date-picker](https://github.com/GouvernementFR/dsfr/pull/1076)**  
  #1076  
  - corrige le placement du focus du date-picker sur les champs type date  
  🐛 fix  
  input

#### [v1.11.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.0) - 11 décembre 2023

- **[fieldset error/valid](https://github.com/GouvernementFR/dsfr/pull/827)**  
  #827  
  - correction de la couleur de la bordure des champs en fieldset-error/valid  
  🐛 fix  
  input

- **[combo champ + button en erreur](https://github.com/GouvernementFR/dsfr/pull/772)**  
  #772  
  - lorsque le champ newsletter de la lettre d'information est en erreur le champs doit être souligné en rouge et non en bleu  
  🐛 fix  
  input

- **[met a jour les espacements des icônes](https://github.com/GouvernementFR/dsfr/pull/766)**  
  #766  
  - place l’icône à 16px du bord droit des champs de saisie
- ajuste le padding-right à 44px sur les champs de saisie avec icône
- corrige la largeur des class fr-fieldset__content pour la version dépréciée  
  🐛 fix  
  form input

- **[color token & cancel button](https://github.com/GouvernementFR/dsfr/pull/740)**  
  #740  
  - corrige le token de couleur de l'intitulé et des icones dans les champs de saisie et du select.
- customisation de l'icone de suppression du champs de recherche : close-circle-fill  
  🐛 fix  
  search input select

#### [v1.10.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.10.0) - 19 juillet 2023

- **[ajustement champs particuliers](https://github.com/GouvernementFR/dsfr/pull/679)**  
  #679  
  - Ajuste la largeur des champs de code postal, année et nombre à des multiples de 8v  
  🐛 fix  
  input

- **[fix groupe attributes & multiple hint text](https://github.com/GouvernementFR/dsfr/pull/665)**  
  #665  
  - Correction attribut en trop sur les input-group
- multiple texte additionnel sur le modèle de champs d'adresse électronique
- Correction des textes additionnels  
  🐛 fix  
  input

- **[ajout de la bordure en état erreur / succés / info](https://github.com/GouvernementFR/dsfr/pull/635)**  
  #635  
  Actuellement la bordure gauche montrant l'état d'erreur/succès/info n'est appliqué que dans le cas d'un groupe de champ en erreur via les modificateur .fr-fieldset--error, .fr-fieldset--valid, .fr-fieldset--info  
  Afin d'être ISO avec l'UI nous rajoutons cet élément visuel sur :  
  - les champs seuls (.fr-input-group) :
  - `.fr-input-group--error`
  - `.fr-input-group--valid`
  - `.fr-input-group--info`
- les selects (.fr-select-group)
  - `.fr-select-group--error`
  - `.fr-select-group--valid`
  - `.fr-select-group--info`  
  ✨ feat  
  select input

#### [v1.9.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.9.1) - 11 avril 2023

- **[correction bug icone date-picker firefox version 109+](https://github.com/GouvernementFR/dsfr/pull/585)**  
  #585  
  Depuis la version 109 de Firefox, l'icone date-picker est en double sur les champs type date  
  - Ajout de l'icone date-picker si le navigateur le supporte uniquement  
  fix  
  input

#### [v1.9.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.9.0) - 1 mars 2023

- **[correction placement icone calendrier sur input type="date"](https://github.com/GouvernementFR/dsfr/pull/536)**  
  #536  
  corrige le problème de double icône remonté dans #530  
  fix  
  input

#### [v1.8.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.8.0) - 27 octobre 2022

- **[Séparation en sous composant d'input, ajout de input-email et input-tel](https://github.com/GouvernementFR/dsfr/pull/363)**  
  #363  
  refactor  
  input

#### [v1.5.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.5.0) - 21 avril 2022

- **[correction icone date](https://github.com/GouvernementFR/dsfr/pull/276)**  
  #276  
  fix  
  input

#### [v1.2.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.2.0) - 17 novembre 2021

- **[fr-input--error sur un textarea le passe en rouge](https://github.com/GouvernementFR/dsfr/pull/47)**  
  #47  
  fix  
  input

##### Contenu associé

- **[Bouton radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio)**  
  Présentation du composant Bouton radio permettant à l’usager de sélectionner une option unique parmi un ensemble limité de choix.

- **[Case à cocher](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher)**  
  Présentation du composant Case à cocher permettant à l’usager de sélectionner une ou plusieurs options dans une liste de manière indépendante.

- **[Interrupteur](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/interrupteur)**  
  Présentation du composant Interrupteur permettant de basculer entre deux états opposés sans validation supplémentaire.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie/accessibilite-du-champ-de-saisie

Les champs de saisie sont conçus pour être accessibles et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Il n’y a aucune interaction spécifique au composant **Champ de saisie** .

### Règles d’accessibilité

#### Intitulé pertinent : nom accessible

Un champ de saisie doit avoir une **étiquette pertinente** . On doit en comprendre la fonction sans ambiguïté.

Son nom accessible est calculé par ordre de priorité à partir de :

- l’attribut `aria-labelledby`,
- l’attribut `aria-label`,
- l’élément `<label>`,
- l’attribut `title` en l’absence d’une autre méthode de nommage.

**Privilégier l’élément `<label>`** pour nommer le composant.

> **Avertissement**
> Le RGAA exige une **liaison explicite** entre l’attribut `for` de l’élément `<label>` et l'attribut `id` du champ de saisie.
> 
> L’attribut `for` du label doit correspondre à l'attribut `id` du champ de saisie. La valeur de l’attribut `id` doit être unique dans la page.

La liaison explicite `for`/`id` permet :

- d’assurer une compatibilité avec l’ensemble des technologies d’assistance (ex. le contrôle vocal),
- de mettre le focus dans le champ en cliquant sur l’étiquette et ainsi d’étendre la zone de clic.

#### Étiquette visible et accolée

L’étiquette est visible et accolée au champ de saisie.

#### État désactivé

> **Attention**
> **L’état désactivé d’un champ de saisie peut poser des problèmes d’utilisabilité et d’accessibilité pour les personnes handicapées** (personnes déficientes visuelles ainsi que les personnes qui ont un handicap cognitif ou mental).

La bordure et l’étiquette du champ de saisie désactivé sont insuffisamment contrastées. Il ne s’agit néanmoins pas d’une non-conformité au RGAA (cas particulier).

#### Message d’information, d’avertissement ou d’erreur

Il existe différentes méthodes pour gérer les messages d’information, d’avertissement ou d’erreur d’un formulaire de manière accessible selon le contexte.

Il est possible d’indiquer l’information, l’avertissement ou l’erreur :

- dans l’étiquette du champ,
- dans un passage de texte avant le formulaire,
- dans un passage de texte relié au champ de saisie avec l’attribut `aria-describedby`,
- avec une live region : `role="alert"`, `role="status"`, `aria-live="assertive",
   aria-live="polite"` (dans certains contextes uniquement).

#### Champs obligatoires, format attendu et contrôle de saisie

- Ajouter une mention visible pour tout le monde au début du formulaire et utiliser l’attribut `required` pour indiquer que le champ est obligatoire.
- Le format de saisie attendu doit être indiqué et correctement relié au champ préalablement à la validation du formulaire.
- En cas d’erreur, le message d’erreur doit proposer un exemple de valeur attendue.

#### Informations personnelles et attribut `autocomplete`

Pour les champs de saisie se rapportant à une information concernant l’utilisateur, il est nécessaire d’ajouter un attribut `autocomplete` sur le champ.

Voir la [liste des valeurs disponibles](https://www.w3.org/Translations/WCAG21-fr/#input-purposes) .

#### Contrastes de couleurs

Par défaut, le composant Champ de saisie est suffisamment contrasté en thème clair et en thème sombre.

---

### Restitution par les lecteurs d’écran

Par défaut, les lecteurs d’écran restituent le **nom, la description, l’état et le type** . L’ordre peut varier en fonction des lecteurs d’écran et de leur configuration.

L’attribut `disabled` est restitué différemment selon les lecteurs d’écran :

- VoiceOver macOS et iOS : « estompé »
- NVDA et JAWS : « bouton non disponible »
- Narrateur et Talkback : « bouton désactivé »

---

### Critères RGAA applicables

- **Couleurs :** 3.1, 3.2, 3.3
- **Présentation de l’information :** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Formulaires :** 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7, 11.8, 11.9, 11.10, 11.11, 11.12, 11.13,
- **Navigation :** 12.8, 12.9
- **Consultation :** 13.9, 13.11

#### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Spécification HTML – élément input](https://html.spec.whatwg.org/#the-input-element)
- [Live regions ARIA et mauvaises pratiques](https://access42.net/quand-utiliser-live-regions-aria/)

##### Contenu associé

- **[Bouton radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio)**  
  Présentation du composant Bouton radio permettant à l’usager de sélectionner une option unique parmi un ensemble limité de choix.

- **[Case à cocher](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher)**  
  Présentation du composant Case à cocher permettant à l’usager de sélectionner une ou plusieurs options dans une liste de manière indépendante.

- **[Interrupteur](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/interrupteur)**  
  Présentation du composant Interrupteur permettant de basculer entre deux états opposés sans validation supplémentaire.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie/demonstration-du-champ-de-saisie

*(Démonstration interactive « input--docs » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=input--docs&nav=0&globals=theme%3Alight)*

*(Démonstration interactive « inputs-group--docs » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=inputs-group--docs&nav=0&globals=theme%3Alight)*

#### Contenu associé

- **[Bouton radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio)**  
  Présentation du composant Bouton radio permettant à l’usager de sélectionner une option unique parmi un ensemble limité de choix.

- **[Case à cocher](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher)**  
  Présentation du composant Case à cocher permettant à l’usager de sélectionner une ou plusieurs options dans une liste de manière indépendante.

- **[Interrupteur](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/interrupteur)**  
  Présentation du composant Interrupteur permettant de basculer entre deux états opposés sans validation supplémentaire.
