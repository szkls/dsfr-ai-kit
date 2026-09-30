# Alerte

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/alerte · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/alerte/design-de-l-alerte · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/alerte/code-de-l-alerte · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/alerte/accessibilite-de-l-alerte · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/alerte/demonstration-de-l-alerte
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

L’alerte est un élément d’indication poussé par l’interface pour relayer une information à l’usager.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/alerte

*(Démonstration interactive « alert--alert » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=alert--alert&nav=0&globals=theme%3Alight)*

### Quand utiliser ce composant ?

**Intégrer des alertes pour attirer l’attention de l’usager** sur une information sans interrompre sa tâche en cours.

Les alertes s’affichent de manière contextuelle dans une page ou un formulaire, suite à une interaction de l’usager (exemple : à la soumission d’un formulaire) ou lors d’événements côté application/système (exemple : au rechargement d’une page).

### Comment utiliser ce composant ?

- **Choisir la variation de l’alerte adéquate** , correspondant à la nature de l’information qu’elle relaie (erreur, succès, information etc.)

> **À faire :** Adapter l’alerte à la nature de l’information relayée.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/alert/use/do-1.png)

> **À ne pas faire :** Ne pas proposer une variation de l’alerte ne correspondant pas à la nature de l’information relayée.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/alert/use/dont-1.png)

- **Placer l’alerte en première place du contenu auquel elle est associée** (exemple : en haut d’une page, d’un formulaire, d’un container etc.)

> **À faire :** Placer l’alerte de succès en haut de page suite à la soumission d’un formulaire, par exemple.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/alert/use/do-2.png)

> **À ne pas faire :** Ne pas placer l’alerte de succès en bas de page suite à la soumission d’un formulaire.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/alert/use/dont-2.png)

- **Rendre toute action induite suite à l’affichage d’une alerte aussi simple que possible** , notamment en détaillant ce qui est attendu de l’usager dans la description.

> **À faire :** Préciser à l’usager l’action attendue suite à l’apparition de l’alerte.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/alert/use/do-3.png)

> **À ne pas faire :** Ne pas laisser l’usager supposer du problème rencontré. La marche à suivre doit être claire.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/alert/use/dont-3.png)

### Règles éditoriales

- **Choisir un titre d'alerte clair et concis** permettant à l’usager de comprendre facilement la situation.
- **Détailler clairement l’information ou le problème ainsi que l’action attendue** (si elle existe) à l’usager à l’aide de la description.
- **Arborer un ton courtois** , l’objectif étant d’accompagner l’usager et non de le blâmer.

> **À faire :** Employer un ton courtois, l’objectif étant d’accompagner l’usager au sein de son parcours.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/alert/edit/do-1.png)

> **À ne pas faire :** Ne pas employer un ton laissant suggérer que l’on blâme l’usager pour son erreur.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/alert/edit/dont-1.png)

- **Employer un langage compréhensible facilement** en évitant tout jargon technique.

> **À faire :** S’affranchir de tout terme technique pour permettre la compréhension par un plus grand nombre.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/alert/edit/do-2.png)

> **À ne pas faire :** Ne pas inclure de termes techniques à une alerte, au risque d’altérer la bonne compréhension des usagers.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/alert/edit/dont-2.png)

- **Expliciter la nature du message** porté par le composant (succès, erreur, information etc.) dans le titre de l’alerte. L’icône et la couleur ne garantissent pas à elles seules la bonne compréhension du message pour la totalité des usagers.

> **À faire :** Préciser la nature du message porté par l’alerte dans son titre.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/alert/edit/do-3.png)

> **À ne pas faire :** Ne pas s’appuyer uniquement sur l’icône et la couleur de l’alerte pour restituer la nature du message.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/alert/edit/dont-2.png)

#### Contenu associé

- **[Formulaire](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/formulaire)**  
  Présentation du composant Formulaire permettant l'agencement des éléments de saisie de données et des messages d'état.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/alerte/design-de-l-alerte

![Anatomie de l'alerte](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/alert/design/anatomy/anatomy-1.png)

1. Une icône — Obligatoire
2. Un titre, en option sur la version SM — Obligatoire
3. Une croix de fermeture — En option
4. Un texte de description, obligatoire sur la version SM — En option

### Variations

**Alerte simple**

*(Démonstration interactive « alert--title » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=alert--title&nav=0&globals=theme%3Alight)*

Utiliser l’alerte simple lorsqu’un titre seul permet de donner l’information à l’usager.

**Alerte avec description**

*(Démonstration interactive « alert--description » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=alert--description&nav=0&globals=theme%3Alight)*

Préférer l’alerte avec description pour donner des informations complémentaires et nécessaire à l’usager, en plus du titre.

**Alerte avec bouton de fermeture**

*(Démonstration interactive « alert--dismissible » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=alert--dismissible&nav=0&globals=theme%3Alight)*

Ajouter un bouton de fermeture à l’alerte pour permettre à l’usager de la masquer une fois consultée.

Les variations suivantes permettent de donner des informations de natures différentes.

**Erreur**

*(Démonstration interactive « alert--error » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=alert--error&nav=0&globals=theme%3Alight)*

Utiliser l'alerte erreur lorsqu’il y a plusieurs erreurs dans un formulaire ou des erreurs bloquantes à remonter à l’usager.

**Succès**

*(Démonstration interactive « alert--success » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=alert--success&nav=0&globals=theme%3Alight)*

Utiliser l'alerte succès pour indiquer à l’usager qu’une action ou une tâche a été terminée avec succès.

**Information**

*(Démonstration interactive « alert--information » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=alert--information&nav=0&globals=theme%3Alight)*

Utiliser l'alerte information pour mettre en exergue des informations importantes.

**Attention**

*(Démonstration interactive « alert--warning » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=alert--warning&nav=0&globals=theme%3Alight)*

Utiliser l'alerte attention (warning) pour mettre en exergue des risques ou points d’attention importants.

### Tailles

L’alerte est disponibles en 2 tailles :

- SM pour small

*(Démonstration interactive « alert--size-sm » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=alert--size-sm&nav=0&globals=theme%3Alight)*

Utiliser l’alerte en small lorsque l’espace d’affichage est réduit.

- MD pour medium - taille par défaut

*(Démonstration interactive « alert--size-md » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=alert--size-md&nav=0&globals=theme%3Alight)*

Utiliser l’alerte en medium lorsque l’espace d’affichage est important.

### États

L’alerte n’est sujette à aucun changement d’état.

### Personnalisation

L’alerte n’est pas personnalisable.

Toutefois, certains éléments sont optionnels - voir [la structure du composant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/alerte/design-de-l-alerte#alerte) .

> **À ne pas faire :** Ne pas changer la couleur d’une alerte car elle est directement liée au message qu’elle porte.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/alert/design/custom/dont-1.png)

> **À ne pas faire :** Ne pas changer le pictogramme d’une alerte car il est directement lié au message qu’elle porte.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/alert/design/custom/dont-2.png)

#### Contenu associé

- **[Formulaire](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/formulaire)**  
  Présentation du composant Formulaire permettant l'agencement des éléments de saisie de données et des messages d'état.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/alerte/code-de-l-alerte

### HTML

#### Structure du composant

Le composant **Alerte** est utilisé pour afficher des messages contextuels comme des informations, avertissements, erreurs ou succès. Il est composé de trois éléments principaux :

- Un conteneur principal de type `<div>` avec la classe `fr-alert`, représentant l'alerte elle-même.
- Un titre facultatif contenu dans un niveau d'entête `<hx>`, variable en fonction de sa hiérarchie dans la page (par défaut h3), avec la classe `fr-alert__title`, qui décrit la nature du message.
- Un paragraphe `<p>` qui contient le texte du message.
- Un bouton de fermeture facultatif `<button>` de type "button" pour permettre à l'utilisateur de fermer l'alerte. Ce bouton doit être lié à une fonction JavaScript pour supprimer l'alerte du DOM lorsqu'il est cliqué.

Le composant Alerte utilise des classes spécifiques pour définir son type (info, warning, error, success) et sa taille (sm, md).

**Exemple de structure HTML**

```html
<div class="fr-alert">
  <h3 class="fr-alert__title">Titre de l'alerte</h3>
  <p>Description de l'alerte</p>
  <button title="Masquer le message" onclick="const alert = this.parentNode; alert.parentNode.removeChild(alert)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
</div>
```

#### Déclinaisons d'alertes

Le composant Alerte propose plusieurs variations en fonction du type de message :

- **info** : pour les messages d'information
- **warning** : pour les messages d'avertissement
- **error** : pour les messages d'erreur
- **success** : pour les messages de succès

Ces variations sont définies par l'ajout de classes correspondantes sur le conteneur principal :

- `fr-alert--info`
- `fr-alert--warning`
- `fr-alert--error`
- `fr-alert--success`

**Exemple de structure HTML avec des déclinaisons**

```html
<div class="fr-alert fr-alert--error">
  <h3 class="fr-alert__title">Erreur critique</h3>
  <p>Une erreur est survenue, veuillez réessayer plus tard.</p>
  <button title="Masquer le message" onclick="const alert = this.parentNode; alert.parentNode.removeChild(alert)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
</div>
```

#### Taille des alertes

Le composant Alerte peut être utilisé avec différentes tailles :

- **SM** (small) : pour les alertes petites
- **MD** (medium) : pour les alertes de taille normale (par défaut)

Les tailles sont définies par l'ajout des classes :

- Par défaut, les alertes sont de taille moyenne
- `fr-alert--sm` pour les alertes petites

**Exemple de structure HTML avec taille SM**

```html
<div class="fr-alert fr-alert--success fr-alert--sm">
  <h3 class="fr-alert__title">Succès</h3>
  <p>Votre demande a été traitée avec succès.</p>
  <button title="Masquer le message" onclick="const alert = this.parentNode; alert.parentNode.removeChild(alert)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
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
| Alert | Oui |  |
| Button | Non | Uniquement pour la version refermable |
| Utility | Non | Uniquement pour l'ajout d'icône custom |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/alert/alert.min.css" rel="stylesheet">
```

#### Variantes de style

L'alerte dispose des variations visuelles suivantes en fonction du type de message :

- `fr-alert--info` : pour un message informatif (bleu)
- `fr-alert--warning` : pour un message d'avertissement (jaune)
- `fr-alert--error` : pour un message d'erreur (rouge)
- `fr-alert--success` : pour un message de succès (vert)

Chaque type d'alerte se distingue par une couleur de fond et une icône spécifique.

Les tailles d'alerte sont définies par :

- `fr-alert--sm` pour les petites alertes, qui ont une hauteur réduite et un espacement intérieur plus petit.
- La taille est médium par défaut.

---

### JavaScript

Le composant Alerte nécessite un JavaScript minimal pour la gestion de la fermeture de l'alerte. En cliquant sur le bouton de fermeture, l'alerte est retirée du DOM grâce à un événement JavaScript. Le DSFR ne gère pas cette fonctionnalité car trop dépendante de la technologie utilisée.

#### Fermeture de l'alerte

Le bouton de fermeture doit être lié à une fonction JavaScript pour supprimer l'alerte du DOM. Voici un exemple de code en javascript vanilla pour gérer la suppression de l'alerte :

```javascript
document.querySelector('.fr-alert__close').addEventListener('click', function() {
  this.closest('.fr-alert').remove();
});
```

Dans l'exemple HTML fourni, cette fonction est déjà intégrée directement dans l'attribut `onclick` du bouton de fermeture.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+alert+)

#### [v1.11.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.1) - 31 janvier 2024

- **[ajoute un example de taille md avec description seule](https://github.com/GouvernementFR/dsfr/pull/853)**  
  #853  
  ✨ feat  
  alert

#### [v1.11.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.0) - 11 décembre 2023

- **[remplacement des box-shadow en background-image](https://github.com/GouvernementFR/dsfr/pull/742)**  
  #742  
  - les bordures sont dessinées en background image à la place de box shadow  
  🐛 fix  
  alert

#### [v1.3.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.3.1) - 7 février 2022

- **[alerte dynamique refermable](https://github.com/GouvernementFR/dsfr/pull/199)**  
  #199  
  refactor  
  alert

- **[ajout exemple dynamique](https://github.com/GouvernementFR/dsfr/pull/194)**  
  #194  
  feat  
  alert

#### [v1.3.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.3.0) - 18 janvier 2022

- **[retrait attribut role='alert' et collapse](https://github.com/GouvernementFR/dsfr/pull/182)**  
  #182  
  fix  
  alert

##### Contenu associé

- **[Formulaire](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/formulaire)**  
  Présentation du composant Formulaire permettant l'agencement des éléments de saisie de données et des messages d'état.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/alerte/accessibilite-de-l-alerte

Le composant **Alerte** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

#### Contenu de l’alerte

- Le niveau de titre dépend du contexte de la page et ne sera pas toujours un `<h3>`.
- Le type d’alerte (info, error, success, warning) doit être indiqué textuellement dans le contenu de l'alerte par les termes : « information », « erreur », « succès », ou « attention ».

#### Alertes avec bouton de fermeture

- Les alertes refermables ont un bouton de fermeture avec un intitulé explicite (« Masquer le message »).
- À la fermeture de l’alerte, le focus doit être repositionné à un endroit pertinent pour l’utilisateur

#### Alertes ajoutées dynamiquement

Une alerte ajoutée après le chargement de la page doit être perçue par tous les utilisateurs.

Pour les alertes simples, ajouter sur le conteneur de l’alerte :

- un `role="alert"` pour les messages d’erreur ou les avertissements
- un `role="status"` pour les messages de succès ou d’information.

> **Attention**
> Ne pas faire disparaître l’alerte sans action de l’utilisateur. Les alertes temporaires (toast) posent d’importants problèmes d’accessibilité et d’utilisabilité.

### Restitution par les lecteurs d’écran

La restitution des rôles `alert` et `status` par les lecteurs d’écran varie selon les implémentations.

Le `role="alert"` est toujours correctement restitué par tous les lecteurs d’écran, peu importe la méthode d’implémentation, contrairement au `role="status"`.

En cas de problème de restitution avec le `role="status"`, il peut également être utilisé sur les messages d’information ou de succès.

### Critères RGAA applicables

- **Couleurs** : 3.2, 3.3
- **Scripts :** 7.1, 7.3, 7.5
- **Éléments obligatoires :** 8.9
- **Structuration :** 9,1
- **Présentation de l’information :** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Navigation :** 12.8, 12.9
- **Consultation :** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Spécification ARIA - Live regions](https://www.w3.org/TR/wai-aria-1.1/#live_region_roles)
- [Rôle alert](https://www.w3.org/TR/wai-aria-1.1/#alert)
- [Rôle status](https://www.w3.org/TR/wai-aria-1.1/#status)

#### Ressources

- [Live regions ARIA : aria-live et ses analogues alert, log, status](https://access42.net/live-regions-aria-live-analogues-alert-log-status/)
- [Live regions ARIA : comment garantir leur restitution par les lecteurs d’écran](https://access42.net/live-regions-aria-restitution-lecteurs-ecran/)
- [Accessible notifications with ARIA Live Regions (Part 1)](https://www.sarasoueidan.com/blog/accessible-notifications-with-aria-live-regions-part-1/)
- [Accessible notifications with ARIA Live Regions (Part 2)](https://www.sarasoueidan.com/blog/accessible-notifications-with-aria-live-regions-part-2/)

##### Contenu associé

- **[Formulaire](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/formulaire)**  
  Présentation du composant Formulaire permettant l'agencement des éléments de saisie de données et des messages d'état.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/alerte/demonstration-de-l-alerte

#### Contenu associé

- **[Formulaire](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/formulaire)**  
  Présentation du composant Formulaire permettant l'agencement des éléments de saisie de données et des messages d'état.
