# Partage

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/partage · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/partage/design-du-partage · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/partage/code-du-partage · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/partage/accessibilite-du-partage · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/partage/demonstration-du-partage
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

Le partage est un groupe d’éléments d’interaction avec l’interface permettant à l’usager de partager le contenu consulté via différents canaux.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/partage

*(Démonstration interactive « share--share » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=share--share&nav=0&globals=theme%3Alight)*

### Quand utiliser ce composant ?

**Utiliser le partage pour permettre à l’usager de partager facilement le contenu qu’il consulte** à d’autres usagers, via les réseaux sociaux, par le biais d’un envoi par mail ou en copiant simplement le lien de la page.

### Comment utiliser ce composant ?

- **Conserver des boutons et liens d’icônes seules** . Ces derniers sont assez explicites pour ne pas avoir a être accompagnés de libellés visible.

> **À ne pas faire :** Ne pas ajouter le nom du réseau en libellé du bouton, en plus de l’icône.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/share/use/dont-1.png)

- **Positionner le partage en haut ou en bas** de vos pages de contenu riches.

> **À faire :** Positionner le partage en haut de page.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/share/use/do-2.png)

> **À faire :** Positionner le partage en bas de page.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/share/use/do-3.png)

- **Rationaliser le nombre d’éléments proposés** afin que le partage reste sur une même ligne et ne prenne pas trop de place. Il est recommandé de ne pas excéder 5 boutons (3 liens pour les réseaux sociaux et les deux boutons de partage, par exemple).

### Règles éditoriales

Le partage n’est régit par aucune règle éditoriale spécifique.

#### Contenu associé

- **[Bouton](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton)**  
  Présentation du composant Bouton permettant à l’usager d’exécuter une action dans une interface numérique.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/partage/design-du-partage

![Anatomie du partage](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/share/design/anatomy/anatomy-1.png)

1. Un libellé « Partager la page » — Obligatoire
2. Un ou plusieurs bouton(s) de partage sur les réseaux sociaux, Facebook et/ou X et/ou LinkedIn et/ou Instagram et/ou autre — Obligatoire
3. Un bouton d’envoi par mail — En option
4. Un bouton pour copier le lien de la page — Obligatoire

### Variations

Le partage ne propose aucune variation.

### Tailles

La largeur du partage s’adapte à son contenu.

### États

**État désactivé**

L’état désactivé indique que l'usager ne peut pas interagir avec les boutons.

*(Démonstration interactive « share--disabled » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=share--disabled&nav=0&globals=theme%3Alight)*

> **Information**
> Le code d’intégration des boutons et liens de partage proposé ici correspond à de simples liens externes vers les services de partage.
> 
> Si vous souhaitez utiliser les différentes intégrations (javascript) proposées par les différents réseaux sociaux, vous devrez très probablement les intégrer à votre gestionnaire de consentement afin que l’usager puisse accepter ou non les cookies déposés.
> 
> Par défaut, les services devant être désactivés, les boutons sont donc passés en inactif et une mention d’information s’affiche pour rediriger l’usager vers la modale de consentement.

### Personnalisation

Le partage n’est pas personnalisable, à l’exception du choix des réseaux sociaux proposés.

N’hésitez pas à [contacter l’équipe DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/aide) si vous avez besoin d’ajouter d’autres boutons de réseaux sociaux.

> **À ne pas faire :** Ne pas personnaliser les icônes des réseaux sociaux.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/share/design/custom/dont-1.png)

#### Contenu associé

- **[Bouton](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton)**  
  Présentation du composant Bouton permettant à l’usager d’exécuter une action dans une interface numérique.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/partage/code-du-partage

### HTML

#### Structure du composant

Les **boutons de partage** permettent aux utilisateurs de partager facilement un contenu qu’il consulte à d’autres utilisateur. Sa structure est la suivante :

- Le conteneur principal, obligatoire, du menu latéral est un élément HTML `<div>` défini par la classe `fr-share` et contenant :
  - Le titre, obligatoire, des boutons de partage est un élément HTML `<p>` défini par la classe `fr-share__title` dont le libellé est "Partager la page".
  - La liste de liens ou boutons de partage, obligatoire, est un élément HTML `<ul>` placé après le titre et défini par la classe `fr-btns-group`.
    - Chaque élément `<li>` de la liste contient :
      - Un lien ou bouton de partage, un élément HTML `<a>` ou `<button>` défini par la classe `fr-btn` associée à la classe utilitaire du reseau social ou de l'action de partage correspondante (ex: `fr-btn--facebook`).

**Exemple de structure HTML**

#### Déplier pour voir le code

```html
<div class="fr-share">
    <p class="fr-share__title">Partager la page</p>
    <ul class="fr-btns-group">
        <li>
            <a onclick="window.open(this.href,'Partager sur Facebook','toolbar=no,location=yes,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=450'); event.preventDefault();" href="https://www.facebook.com/sharer.php?u=[À MODIFIER - url de la page]" target="_blank" rel="noopener external" class="fr-btn--facebook fr-btn">Partager sur Facebook</a>
        </li>
        <li>
            <!-- Les paramètres de la reqûete doivent être URI-encodés (ex: encodeURIComponent() en js) -->
            <a onclick="window.open(this.href,'Partager sur X (anciennement Twitter)','toolbar=no,location=yes,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=420'); event.preventDefault();" href="https://twitter.com/intent/tweet?url=[À MODIFIER - url de la page]&text=[À MODIFIER - titre ou texte descriptif de la page]&via=[À MODIFIER - via]&hashtags=[À MODIFIER - hashtags]" target="_blank" rel="noopener external" class="fr-btn--twitter-x fr-btn">Partager sur X (anciennement Twitter)</a>
        </li>
        <li>
            <a onclick="window.open(this.href,'Partager sur LinkedIn','toolbar=no,location=yes,status=no,menubar=no,scrollbars=yes,resizable=yes,width=550,height=550'); event.preventDefault();" href="https://www.linkedin.com/shareArticle?url=[À MODIFIER - url de la page]&title=[À MODIFIER - titre ou texte descriptif de la page]" target="_blank" rel="noopener external" class="fr-btn--linkedin fr-btn">Partager sur LinkedIn</a>
        </li>
        <li>
            <a href="mailto:?subject=[À MODIFIER - objet du mail]&body=[À MODIFIER - titre ou texte descriptif de la page] [À MODIFIER - url de la page]" target="_blank" rel="noopener external" class="fr-btn--mail fr-btn">Partager par email</a>
        </li>
        <li>
            <button onclick="[navigator.clipboard.writeText(window.location).then(function() {alert('Adresse copiée dans le presse papier.')});]" type="button" class="fr-btn--copy fr-btn">Copier dans le presse-papier</button>
        </li>
    </ul>
</div>
```

#### Méta données

Les meta données à placer dans la balise `<head>` de la page, pour gérer les informations de partage sur les réseaux sociaux.

**Exemple de méta données**

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="[À MODIFIER - @usernameTwitter]">
<meta property="og:title" content="[À MODIFIER - Système de Design de l&#39;État]">
<meta property="og:description" content="[À MODIFIER - Développer vos sites et applications en utilisant des composants prêts à l&#39;emploi, accessibles et ergonomiques]">
<meta property="og:image" content="[À MODIFIER - https://systeme-de-design.gouv.fr/src/img/systeme-de-design.gouv.fr.jpg]">
<meta property="og:type" content="website">
<meta property="og:url" content="[À MODIFIER - https://systeme-de-design.gouv.fr/]">
<meta property="og:site_name" content="[À MODIFIER - Site officiel du Système de Design de l&#39;État]">
<meta property="og:image:alt" content="[À MODIFIER - République Française - Système de Design de l&#39;État]">
<meta name="twitter:image:alt" content="[À MODIFIER - République Française - Système de Design de l&#39;État]">
```

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](https://www.systeme-de-design.gouv.fr/version-courante/fr/premiers-pas/vous-etes-developpeur/prise-en-main#les-css) .

**Dépendances CSS**

| Dépendance | Obligatoire | Remarque |
|---|---|---|
| Core | Oui |  |
| Button | Oui |  |
| Share | Oui |  |
| Utility | Non | Uniquement pour l'ajout d'icône custom |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/button/button.min.css" rel="stylesheet">
<link href="dist/component/share/share.min.css" rel="stylesheet">
```

#### Variante de boutons et liens de partage en version inactive

Le code d’intégration des boutons et liens de partage proposé ici sont de simples liens externes vers les services de partage.

Si vous souhaitez utiliser les différentes intégrations (javascript) proposées par les différents réseaux sociaux, vous devrez très probablement les intégrer à votre gestionnaire de consentement afin de que l’utilisateur puisse accepter ou non les cookies déposés. Par défaut, les services doivent être désactivés, les boutons sont donc passés en inactifs et une mention d’information s’affiche pour rediriger vers la modale de consentement.

**Exemples de variante de boutons et liens de partage en version inactive**

```html
<div class="fr-share">
    <p class="fr-share__title">Partager la page</p>
    <p class="fr-share__text">Veuillez <a href=[À MODIFIER - url page autorisation cookies]>autoriser le dépôt de cookies</a> pour partager sur Facebook, Twitter et LinkedIn.</p>
    <ul class="fr-btns-group">
        <li>
            <a target="_blank" rel="noopener external" aria-disabled="true" role="link" class="fr-btn--facebook fr-btn">Partager sur Facebook</a>
        </li>
        <li>
            <a target="_blank" rel="noopener external" aria-disabled="true" role="link" class="fr-btn--twitter-x fr-btn">Partager sur X (anciennement Twitter)</a>
        </li>
        <li>
            <a target="_blank" rel="noopener external" aria-disabled="true" role="link" class="fr-btn--linkedin fr-btn">Partager sur LinkedIn</a>
        </li>
        <li>
            <a href="mailto:?subject=[À MODIFIER - objet du mail]&body=[À MODIFIER - titre ou texte descriptif de la page] [À MODIFIER - url de la page]" target="_blank" rel="noopener external" class="fr-btn--mail fr-btn">Partager par email</a>
        </li>
        <li>
            <button onclick="navigator.clipboard.writeText(window.location).then(function() {alert('Adresse copiée dans le presse papier.')});" type="button" class="fr-btn--copy fr-btn">Copier dans le presse-papier</button>
        </li>
    </ul>
</div>
```

---

### JavaScript

Le composant **Partage** ne nécessite pas d'import de JavaScript spécifique pour fonctionner.

Un script d'exemple dans l'attribut `onclick` de chaque élément est proposé pour le partage via l'API des réseau sociaux et la copie de l'URL de la page dans le presse-papier. Il est possible de le personnaliser selon les besoins.

Les liens ci-dessous vous permettent de tester et prévisualiser l’apparence des partages dans différents réseaux sociaux :

- [Open Graph Check](https://www.opengraph.xyz/)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Sharing debugger](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+share+)

#### [v1.13.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.13.1) - 26 mars 2025

- **[ajout icone bluesky](https://github.com/GouvernementFR/dsfr/pull/1096)**  
  #1096  
  ✨ feat  
  icon share follow

#### [v1.11.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.0) - 11 décembre 2023

- **[icône twitter-x par défaut](https://github.com/GouvernementFR/dsfr/pull/824)**  
  #824  
  - mise en place de l'icône X pour Twitter, avec changement du title pour "X (anciennement Twitter)" sur les composants follow et share  
  ✨ feat  
  follow share

- **[token couleur texte cookies désactivés](https://github.com/GouvernementFR/dsfr/pull/778)**  
  #778  
  - Le token de couleur du texte lorsque les cookies sont désactivés passe en $text-mention-grey  
  🐛 fix  
  share

#### [v1.10.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.10.1) - 4 septembre 2023

- **[icone personalisée, et ajout twitter-x et threads](https://github.com/GouvernementFR/dsfr/pull/752)**  
  #752  
  - ajoute la possibilité de mettre une icone de réseau social personalisée dans "follow"
- ajouts d'exemples d'icone personalisée dans "share" et "follow"
- ajouts des icones dans utility :
  - twitter-x-fill
  - twitter-x-line
  - threads-fill
  - threads-line  
  ✨ feat  
  share follow utility

#### [v1.10.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.10.0) - 19 juillet 2023

- **[correction copie url dans presse papier](https://github.com/GouvernementFR/dsfr/pull/629)**  
  #629  
  - Gestion de la Promise retournée par `navigator.clipboard.writeText()`  
  🐛 fix  
  share

#### [v1.6.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.6.0) - 14 juin 2022

- **[ajout texte explicatif icones RS disponibles](https://github.com/GouvernementFR/dsfr/pull/331)**  
  #331  
  fix  
  follow share

- **[ajout icones réseau sociaux](https://github.com/GouvernementFR/dsfr/pull/324)**  
  #324  
  fix  
  share follow

- **[correction espacements des groupes](https://github.com/GouvernementFR/dsfr/pull/311)**  
  #311  
  refactor  
  header link button follow share tag badge

#### [v1.3.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.3.0) - 18 janvier 2022

- **[role & aria link disabled](https://github.com/GouvernementFR/dsfr/pull/181)**  
  #181  
  fix  
  link tag pagination share

#### [v1.2.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.2.0) - 17 novembre 2021

- **[correction espacements des boutons de partage](https://github.com/GouvernementFR/dsfr/pull/49)**  
  #49  
  fix  
  share

#### [v1.1.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.1.0) - 27 juillet 2021

- **[correction title désactivé](https://github.com/GouvernementFR/dsfr/pull/34)**  
  #34  
  fix  
  share

- **[tailles des popup de partage](https://github.com/GouvernementFR/dsfr/pull/32)**  
  #32  
  fix  
  share

- **[correction template ejs et nom du composant](https://github.com/GouvernementFR/dsfr/pull/30)**  
  #30  
  fix  
  share

##### Contenu associé

- **[Bouton](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton)**  
  Présentation du composant Bouton permettant à l’usager d’exécuter une action dans une interface numérique.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/partage/accessibilite-du-partage

Le composant **Partage** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

- Les boutons ou liens de partage sont structurés dans une liste.
- Le bouton pour copier le lien de la page doit être un élément `button`.

Voir les [règles d'accessibilité du composant Lien](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lien/accessibilite-du-lien#regles-d-accessibilite) et les [règles d’accessibilité du composant Bouton](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton/accessibilite-du-bouton#regles-d-accessibilite) .

#### Version inactive

- La mention d’information est située avant la liste de liens et de boutons de partage dans le code HTML.
- Les liens-icônes ou boutons-icônes désactivés conservent un ratio de contraste minimum de 3.
- Les liens désactivés n’ont pas d’attribut href et possèdent les attributs `aria-disabled="true"` et `role="link"`.

#### Bouton ou lien ?

> **Information**
> Un bouton permet de **déclencher une action ou un événement** :
> 
> - **nativement** en fonction du type du bouton : envoi d’un formulaire (`submit`), suppression de contenu de champs de formulaire (`reset`) ;
> - **en JavaScript** : ouverture d’une fenêtre modale, fermeture d’un contenu, modification de la page…
> 
> Un lien `<a href>` permet de rediriger vers une autre page ou à un autre endroit dans la page (ancre).

#### Contrastes de couleurs

Le composant Partage est suffisamment contrasté en thème clair et en thème sombre.

**Contraste des textes et des icônes**

| Élément | Thème clair | Thème sombre |
|---|---|---|
| **Texte Partager** | 11,4:1 | 5,7:1 |
| **Lien-icône inactif** | 3:1 | 3,2:1 |
| **Lien-icône actif** | 14,9:1 | 5,7:1 |
| **Mention d’information** | 5,7:1 | 5,8:1 |

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
- **Liens** : 6.1, 6.2
- **Scripts** : 7.1, 7.3
- **Éléments obligatoires** : 8.9
- **Structuration** : 9.3
- **Présentation de l’information** : 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Navigation** : 12.9
- **Consultation** : 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)

#### Ressources

- [Disabling a link](https://www.scottohara.me/blog/2021/05/28/disabled-links.html)

##### Contenu associé

- **[Bouton](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton)**  
  Présentation du composant Bouton permettant à l’usager d’exécuter une action dans une interface numérique.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/partage/demonstration-du-partage

*(Démonstration interactive « share--docs » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=share--docs&nav=0&globals=theme%3Alight)*

#### Contenu associé

- **[Bouton](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton)**  
  Présentation du composant Bouton permettant à l’usager d’exécuter une action dans une interface numérique.
