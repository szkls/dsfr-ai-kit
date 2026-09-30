# Boutons FranceConnect et ProConnect

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/boutons-franceconnect-et-proconnect · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/boutons-franceconnect-et-proconnect/design-des-boutons-franceconnect-et-proconnect · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/boutons-franceconnect-et-proconnect/code-des-boutons-franceconnect-et-proconnect · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/boutons-franceconnect-et-proconnect/accessibilite-des-boutons-franceconnect-et-proconnect · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/boutons-franceconnect-et-proconnect/demonstration-des-boutons-franceconnect-et-proconnect
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

Les boutons FranceConnect et ProConnect sont des éléments d’interaction avec l’interface proposant à l’usager de se connecter à un service via un compte appelé fournisseur d’identité (type [impots.gouv.fr](http://impots.gouv.fr/) , [ameli.fr](http://ameli.fr/) , [l’Identité Numérique La Poste](https://lidentitenumerique.laposte.fr/) , [France Identité](https://france-identite.gouv.fr/) , etc.).

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/boutons-franceconnect-et-proconnect

Le service sur lequel l’usager se connecte récupère auprès de FranceConnect et/ou ProConnect un identifiant technique unique ainsi que des données d’identité vérifiées par l’INSEE qui permettent de garantir l’authentification de l’usager.

Retrouver le détail de leurs fonctionnements et conditions d’éligibilité ici : [https://franceconnect.gouv.fr](https://franceconnect.gouv.fr/partenaires) et [https://www.proconnect.gouv.fr/](https://www.proconnect.gouv.fr/)

*(Démonstration interactive « connect--connect » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=connect--connect&nav=0&globals=theme%3Alight)*

*(Démonstration interactive « connect--pro-connect » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=connect--pro-connect&nav=0&globals=theme%3Alight)*

### Quand utiliser ce composant ?

Utiliser le bouton FranceConnect ou ProConnect pour proposer une connexion ou une création de compte simplifiée à l’usager.

> **Attention**
> Le service FranceConnect est uniquement utilisable par des administrations et des fournisseurs de logiciels agissant pour le compte d’une administration ou d’un organisme privé, qui justifient d’une obligation légale de vérifier l’identité des utilisateurs de leurs propres services en ligne. (voir plus de détails sur les [conditions d’éligibilité de FranceConnect](https://franceconnect.gouv.fr/partenaires) ) ProConnect s’adresse également aux professionnels du secteur privé. (voir plus de détails sur les [conditions d’éligibilité de ProConnect](https://partenaires.proconnect.gouv.fr/docs/fournisseur-service/eligibilite_installation) )

### Comment utiliser ce composant ?

- **Proposer l’un des boutons de connexion en premier mode d’authentification.** Il est positionné au-dessus des autres moyens de connexion proposés.
- **Accompagner le bouton du lien « Qu’est-ce que [nom du service] ? »** , positionné en-dessous, redirigeant vers l’URL [www.franceconnect.gouv.fr](http://www.franceconnect.gouv.fr/) ou [www.proconnect.gouv.fr](https://www.proconnect.gouv.fr/) (cf. rubrique “Design”).
- **Dissocier visuellement vos moyens de connexion natifs** du bouton de connexion. Une séparation visible doit être mise en place.
- **Présenter les boutons de connexion comme une alternative** à un autre mode d’identification. La notion de "ou" doit figurer clairement (FranceConnect/ProConnect ou un autre mode d’identification).
- **Éviter toute confusion sur la nature du service proposé** en évitant de le positionner près de liens, d’icônes ou de services d'identification liés à des réseaux sociaux ou autres services similaires. FranceConnect et ProConnect ne sont pas des réseaux sociaux et ne doivent pas être présentés ou susceptibles d’être perçus comme tels par l’usager.
- **Ouvrir la page de choix du fournisseur d’identité dans l’onglet actif de l’usager** . Elle ne doit pas être proposée dans une modale ou une pop-up au-dessus du site.

### Règles éditoriales

- **Garantir la compréhension de l’utilisateur** en accompagnant le bouton FranceConnect de la phrase : « FranceConnect est la solution proposée par l’État pour sécuriser et simplifier la connexion à vos services en ligne ».
- **Faire attention à l’écriture des termes « FranceConnect » et « ProConnect »** en accolant les deux mots partout où les services sont mentionnés.

#### Contenu associé

- **[Bouton](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton)**  
  Présentation du composant Bouton permettant à l’usager d’exécuter une action dans une interface numérique.

- **[Page de connexion](https://www.systeme-de-design.gouv.fr/version-courante/fr/modeles/pages-types/page-de-connexion)**  
  Cette page présente le modèle standardisé de page de connexion à utiliser pour l’accès à un espace personnel d’un service public, incluant FranceConnect, identifiants et recommandations d’accessibilité.

- **[Page de création de compte](https://www.systeme-de-design.gouv.fr/version-courante/fr/modeles/pages-types/page-de-creation-de-compte)**  
  Cette page décrit le modèle de création de compte à utiliser dans les services numériques de l’État en précisant les composants obligatoires, les règles d’intégration, les bonnes pratiques d’accessibilité et les étapes recommandées.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/boutons-franceconnect-et-proconnect/design-des-boutons-franceconnect-et-proconnect

Le service sur lequel l’usager se connecte récupère auprès de FranceConnect et/ou ProConnect un identifiant technique unique ainsi que des données d’identité vérifiées par l’INSEE qui permettent de garantir l’authentification de l’usager.

Retrouver le détail de leurs fonctionnements et conditions d’éligibilité ici : [https://franceconnect.gouv.fr](https://franceconnect.gouv.fr/partenaires) et [https://www.proconnect.gouv.fr/](https://www.proconnect.gouv.fr/)

![Anatomie du bouton FranceConnect](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/connect/design/anatomy/anatomy-1.png)

1. Le logo — Obligatoire
2. Un libellé “S’identifier avec [nom du service]” — Obligatoire
3. Une icône plus - En option, uniquement pour le variant FranceConnect. — En option
4. Un lien “Qu’est-ce que [nom du service] ?”, qui redirige vers l’URL dédiée — Obligatoire

### Variations

**FranceConnect+**

Si le service utilise FranceConnect+ (pour les démarches nécessitant une sécurité renforcée), il faut utiliser la variante du bouton FranceConnect+.

La structure est sensiblement la même que celle du bouton FranceConnect, à l’exception du lien “Qu’est-ce que FranceConnect+ ?” qui pointe vers l’URL [https://franceconnect.gouv.fr/france-connect-plus](https://franceconnect.gouv.fr/france-connect-plus) .

**ProConnect**

Si le service utilise ProConnect (pour en faciliter l’accès aux agents publics), il faut utiliser la variante du bouton ProConnect.

La structure est sensiblement la même que celle du bouton FranceConnect, à l’exception du logo et du lien “Qu’est-ce que ProConnect ?” qui pointe vers l’URL [https://proconnect.gouv.fr](https://proconnect.gouv.fr/) .

### Tailles

La taille des boutons de connexion n’est pas personnalisable. Elle s’ajuste à son contenu.

### États

**Etat désactivé**

L’état désactivé indique que l'usager ne peut pas interagir avec le bouton de connexion.

*(Démonstration interactive « connect--default » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=connect--default&nav=0&args=disabled%3Atrue&globals=theme%3Alight)*

> **Information**
> Utiliser cet état que très ponctuellement, pour indiquer à l’usager qu’il doit procéder à une action en amont par exemple.

**État au survol**

L’état au survol correspond au comportement constaté par l’usager lorsqu’il survole le bouton de connexion avec sa souris.

### Personnalisation

Les boutons de connexion ne sont pas personnalisables.

> **À faire :** Utiliser le bouton en l’état.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/connect/design/custom/do-1.png)

> **À ne pas faire :** Ne pas personnaliser la couleur du bouton.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/connect/design/custom/dont-1.png)

> **À ne pas faire :** Ne pas personnaliser la typographie du bouton.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/connect/design/custom/dont-2.png)

> **À ne pas faire :** Ne pas modifier le libellé du bouton.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/connect/design/custom/dont-3.png)

#### Contenu associé

- **[Bouton](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton)**  
  Présentation du composant Bouton permettant à l’usager d’exécuter une action dans une interface numérique.

- **[Page de connexion](https://www.systeme-de-design.gouv.fr/version-courante/fr/modeles/pages-types/page-de-connexion)**  
  Cette page présente le modèle standardisé de page de connexion à utiliser pour l’accès à un espace personnel d’un service public, incluant FranceConnect, identifiants et recommandations d’accessibilité.

- **[Page de création de compte](https://www.systeme-de-design.gouv.fr/version-courante/fr/modeles/pages-types/page-de-creation-de-compte)**  
  Cette page décrit le modèle de création de compte à utiliser dans les services numériques de l’État en précisant les composants obligatoires, les règles d’intégration, les bonnes pratiques d’accessibilité et les étapes recommandées.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/boutons-franceconnect-et-proconnect/code-des-boutons-franceconnect-et-proconnect

Le service sur lequel l’usager se connecte récupère auprès de FranceConnect et/ou ProConnect un identifiant technique unique ainsi que des données d’identité vérifiées par l’INSEE qui permettent de garantir l’authentification de l’usager.

Retrouver le détail de leurs fonctionnements et conditions d’éligibilité ici : [https://franceconnect.gouv.fr](https://franceconnect.gouv.fr/partenaires) et [https://www.proconnect.gouv.fr/](https://www.proconnect.gouv.fr/)

### HTML

#### Structure du composant

Les composants **Bouton FranceConnect et ProConnect** permettent de proposer une connexion en utilisant l’identité numérique d’un fournisseur agréé. Leur structure est la suivante :

- Un élément `<div>` de classe `fr-connect-group` contient le bouton FranceConnect ou ProConnect et un lien d'information.
  - Le bouton FranceConnect ou ProConnect est un élément HTML `<button>` défini par la classe `fr-connect`. Il doit contenir deux éléments `<span>` :
    - Un texte de connexion "S'identifier avec", un `<span>` avec la classe `fr-connect__login`. Ce texte peut être traduit mais ne doit pas être modifié.
    - L'intitulé du service "FranceConnect" ou "ProConnect", un `<span>` avec la classe `fr-connect__brand`.
  - Le bouton doit être accompagné d'un lien d'information. Il s'agit d'un élément `<p>` contenant un lien `<a>` vers le service dédié.
    - Le lien doit être ouvert dans une nouvelle fenêtre.
    - L'intitulé du lien peut être traduit mais ne doit pas être modifié.

Pour plus de clarté, le bouton FranceConnect peut être accompagné de la phrase : « FranceConnect est la solution proposée par l’État pour sécuriser et simplifier la connexion à vos services en ligne ».

**Structure HTML du bouton FranceConnect**

```html
<div class="fr-connect-group">
    <button class="fr-connect" type="button">
        <span class="fr-connect__login">S’identifier avec</span>
        <span class="fr-connect__brand">FranceConnect</span>
    </button>
    <p>
        <a href="https://franceconnect.gouv.fr/" target="_blank" rel="noopener" title="Qu’est-ce que FranceConnect ? - nouvelle fenêtre">Qu’est-ce que FranceConnect ?</a>
    </p>
</div>
```

**Structure HTML du bouton FranceConnect+**

```html
<div class="fr-connect-group">
    <button class="fr-connect fr-connect--plus" type="button">
        <span class="fr-connect__login">S’identifier avec</span>
        <span class="fr-connect__brand">FranceConnect</span>
    </button>
    <p>
        <a href="https://franceconnect.gouv.fr/france-connect-plus" target="_blank" rel="noopener" title="Qu’est-ce que FranceConnect+ ? - nouvelle fenêtre">Qu’est-ce que FranceConnect+ ?</a>
    </p>
</div>
```

**Structure HTML du bouton ProConnect**

```html
<div class="fr-connect-group">
    <button class="fr-connect fr-connect--pro" type="button">
        <span class="fr-connect__login">S’identifier avec</span>
        <span class="fr-connect__brand">ProConnect</span>
    </button>
    <p>
        <a href="https://proconnect.gouv.fr/" target="_blank" rel="noopener" title="Qu’est-ce que ProConnect ? - nouvelle fenêtre">Qu’est-ce que ProConnect ?</a>
    </p>
</div>
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
| Connect | Oui |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/connect/connect.min.css" rel="stylesheet">
```

Une version **standalone** du bouton FranceConnect est également disponible, permettant de l'utiliser **en dehors du DSFR** . Ce fichier CSS comprend le minimum requis du core du DSFR et le style du bouton FranceConnect.

```html
<link href="standalone/component/connect/connect.standalone.min.css" rel="stylesheet">
```

#### Variantes de style

Le composant Bouton FranceConnect ou ProConnect est stylisé par les classes CSS suivantes :

- `.fr-connect-group` : Conteneur du bouton et du lien d'information.
- `.fr-connect` : Bouton FranceConnect ou ProConnect.
- `.fr-connect__login` : Texte "S'identifier avec".
- `.fr-connect__brand` : Intitulé du service
- `.fr-connect-group p` : Conteneur du lien d'information.
- `.fr-connect-group a` : Lien d'information.

Une classe supplémentaire peut être ajoutée au bouton pour proposer une connexion via un autre service :

- `.fr-connect--plus` : FranceConnect+.
- `.fr-connect--pro` : ProConnect.

---

### JavaScript

La documentation technique pour la mise en place du service souhaité peut être consultée sur leur site dédié :

- [FranceConnect](https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service)
- [ProConnect](https://partenaires.proconnect.gouv.fr/)

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+connect+)

#### [v1.15.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.15.0) - 17 juillet 2026

- **[ajout du bouton proConnect](https://github.com/GouvernementFR/dsfr/pull/1388)**  
  #1388  
  - Ajout de la variante `fr-connect--pro` et mise à jour de la documentation  
  ✨ feat  
  connect

#### [v1.11.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.1) - 31 janvier 2024

- **[retrait de l'icone target blank](https://github.com/GouvernementFR/dsfr/pull/872)**  
  #872  
  🐛 fix  
  footer header connect

#### [v1.11.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.0) - 11 décembre 2023

- **[taille de la fonte adapatable](https://github.com/GouvernementFR/dsfr/pull/813)**  
  #813  
  - Le bouton FranceConnect doit répondre aux critères d’accessibilité qui redéfinissent le letter-spacing et la taille de fonte.
  - Passage des valeurs de tailles et d'espacements en 'em' pour les rendre relatives à la taille de fonte du bouton
  - Retrait du '+' de 'FranceConnect+' dans l'intitulé de `fr-connect__brand`. Celui-ci est désormais placé en contenu du pseudo-élément after du bouton  
  🐛 fix  
  connect

#### [v1.8.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.8.0) - 27 octobre 2022

- **[correction wording "qu'est-ce que france connect"](https://github.com/GouvernementFR/dsfr/pull/431)**  
  #431  
  fix  
  connect

#### [v1.5.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.5.0) - 21 avril 2022

- **[correction de la variable de build isStandalone](https://github.com/GouvernementFR/dsfr/pull/281)**  
  #281  
  fix  
  connect

- **[retrait import json & ajout rel noopener](https://github.com/GouvernementFR/dsfr/pull/273)**  
  #273  
  fix  
  connect

- **[généralisation du build du standalone](https://github.com/GouvernementFR/dsfr/pull/255)**  
  #255  
  refactor  
  connect

#### [v1.4.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.4.1) - 29 mars 2022

- **[retrait description & ajout target blank](https://github.com/GouvernementFR/dsfr/pull/261)**  
  #261  
  fix  
  connect

- **[libelle FranceConnect attaché](https://github.com/GouvernementFR/dsfr/pull/260)**  
  #260  
  fix  
  connect

#### [v1.4.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.4.0) - 16 mars 2022

- **[correction taille du lien en sm](https://github.com/GouvernementFR/dsfr/pull/239)**  
  #239  
  fix  
  connect

- **[retrait du hint text](https://github.com/GouvernementFR/dsfr/pull/238)**  
  #238  
  fix  
  connect

- **[ajout description et lien france connect](https://github.com/GouvernementFR/dsfr/pull/224)**  
  #224  
  feat  
  connect

- **[Ajout de la fonctionnalité FranceConnect](https://github.com/GouvernementFR/dsfr/pull/211)**  
  #211  
  feat  
  connect

##### Contenu associé

- **[Bouton](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton)**  
  Présentation du composant Bouton permettant à l’usager d’exécuter une action dans une interface numérique.

- **[Page de connexion](https://www.systeme-de-design.gouv.fr/version-courante/fr/modeles/pages-types/page-de-connexion)**  
  Cette page présente le modèle standardisé de page de connexion à utiliser pour l’accès à un espace personnel d’un service public, incluant FranceConnect, identifiants et recommandations d’accessibilité.

- **[Page de création de compte](https://www.systeme-de-design.gouv.fr/version-courante/fr/modeles/pages-types/page-de-creation-de-compte)**  
  Cette page décrit le modèle de création de compte à utiliser dans les services numériques de l’État en précisant les composants obligatoires, les règles d’intégration, les bonnes pratiques d’accessibilité et les étapes recommandées.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/boutons-franceconnect-et-proconnect/accessibilite-des-boutons-franceconnect-et-proconnect

Le service sur lequel l’usager se connecte récupère auprès de FranceConnect et/ou ProConnect un identifiant technique unique ainsi que des données d’identité vérifiées par l’INSEE qui permettent de garantir l’authentification de l’usager.

Retrouver le détail de leurs fonctionnements et conditions d’éligibilité ici : [https://franceconnect.gouv.fr](https://franceconnect.gouv.fr/partenaires) et [https://www.proconnect.gouv.fr/](https://www.proconnect.gouv.fr/)

Les composants **Bouton FranceConnect et ProConnect** sont conçus pour être accessibles et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

#### Structure

Le **bouton de connexion** est structuré dans un élément `button`. Il est possible de le structurer dans un élément `a href` également si besoin.

Le **lien « Qu’est-ce que [nom du service] ? »** s’ouvre dans un nouvel onglet ou une nouvelle fenêtre.

Il est nécessaire d’ajouter un attribut `title` qui reprend l’intitulé du lien pour l’indiquer. Ex. `title="Qu’est-ce que [nom du service] ? - nouvelle
 fenêtre"`

#### Contenu inséré en CSS

Sur la variante FranceConnect+, le + est inséré en CSS avec la propriété `content` et le pseudo-élément `::after` sur le bouton de connexion.

> **Information**
> **La [technique F87](https://www.w3.org/WAI/WCAG21/Techniques/failures/F87) de WCAG, encore référencée sur le critère 10.2 du RGAA, est désormais obsolète** . En effet, les contenus porteurs d’information insérés avec la propriété CSS `content` sont désormais bien restitués par les technologies d’assistance.

**Il est néanmoins plus robuste d’utiliser le HTML pour les contenus porteurs d’information** .

À noter que les contenus porteurs d’information insérés avec CSS peuvent poser des problèmes d’utilisabilité. Selon les navigateurs, le contenu ne peut pas être recherché, sélectionné, copié, collé. Il n’apparaît pas non plus dans certains modes de lecture des navigateurs.

#### Contrastes de couleurs

Le composant est suffisamment contrasté en thème clair et en thème sombre.

**Contrastes des textes**

| Texte | Thème clair | Thème sombre |
|---|---|---|
| Bouton | 14,9:1 | 4,7:1 |
| Lien | 14,9:1 | 5,8:1 |

---

#### Restitution par les lecteurs d’écran

Des tests de restitution ont été effectués avec les différents lecteurs d’écran ainsi qu’avec d’autres technologies d’assistance (contrôle vocal, loupe d’écran vocalisée) sur le contenu inséré en CSS.

**L’implémentation est bien supportée et restituée partout.**

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

#### Critères RGAA applicables

- **Couleurs :** 3.2, 3.3
- **Liens :** 6.1, 6.2
- **Présentation de l’information :** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Navigation :** 12.8, 12.9
- **Consultation :** 13.9, 13.11

---

#### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Technique F87 - WCAG](https://www.w3.org/WAI/WCAG21/Techniques/failures/F87)

###### Contenu associé

- **[Bouton](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton)**  
  Présentation du composant Bouton permettant à l’usager d’exécuter une action dans une interface numérique.

- **[Page de connexion](https://www.systeme-de-design.gouv.fr/version-courante/fr/modeles/pages-types/page-de-connexion)**  
  Cette page présente le modèle standardisé de page de connexion à utiliser pour l’accès à un espace personnel d’un service public, incluant FranceConnect, identifiants et recommandations d’accessibilité.

- **[Page de création de compte](https://www.systeme-de-design.gouv.fr/version-courante/fr/modeles/pages-types/page-de-creation-de-compte)**  
  Cette page décrit le modèle de création de compte à utiliser dans les services numériques de l’État en précisant les composants obligatoires, les règles d’intégration, les bonnes pratiques d’accessibilité et les étapes recommandées.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/boutons-franceconnect-et-proconnect/demonstration-des-boutons-franceconnect-et-proconnect

Le service sur lequel l’usager se connecte récupère auprès de FranceConnect et/ou ProConnect un identifiant technique unique ainsi que des données d’identité vérifiées par l’INSEE qui permettent de garantir l’authentification de l’usager.

Retrouver le détail de leurs fonctionnements et conditions d’éligibilité ici : [https://franceconnect.gouv.fr](https://franceconnect.gouv.fr/partenaires) et [https://www.proconnect.gouv.fr/](https://www.proconnect.gouv.fr/)

*(Démonstration interactive « connect--docs » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=connect--docs&nav=0&globals=theme%3Alight)*

#### Contenu associé

- **[Bouton](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton)**  
  Présentation du composant Bouton permettant à l’usager d’exécuter une action dans une interface numérique.

- **[Page de connexion](https://www.systeme-de-design.gouv.fr/version-courante/fr/modeles/pages-types/page-de-connexion)**  
  Cette page présente le modèle standardisé de page de connexion à utiliser pour l’accès à un espace personnel d’un service public, incluant FranceConnect, identifiants et recommandations d’accessibilité.

- **[Page de création de compte](https://www.systeme-de-design.gouv.fr/version-courante/fr/modeles/pages-types/page-de-creation-de-compte)**  
  Cette page décrit le modèle de création de compte à utiliser dans les services numériques de l’État en précisant les composants obligatoires, les règles d’intégration, les bonnes pratiques d’accessibilité et les étapes recommandées.
