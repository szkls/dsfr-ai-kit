# Contenu médias

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/contenu-medias · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/contenu-medias/design-du-contenu-medias · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/contenu-medias/code-du-contenu-medias · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/contenu-medias/accessibilite-du-contenu-medias · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/contenu-medias/demonstration-du-contenu-medias
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

Le composant **Contenu médias** permet d'intégrer des contenus multimédias tels que des vidéos, des images de manière accessible et responsive.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/contenu-medias

### Quand utiliser ce composant ?

Utiliser le contenu média pour intégrer des images, vidéos ou fichiers audio aux pages de contenu d’un site.

### Comment utiliser ce composant ?

- **Utiliser exclusivement des contenus média libres de droit** ou veiller à vous acquitter des droits.

### Règles éditoriales

- **Utiliser des contenus média qui véhiculent un message clair** .
- **Homogénéiser le style graphique de vos contenus média** afin de créer une unité au sein du site.
- **Eviter d’intégrer du texte directement dans les contenus média** (hors sous-titrage), notamment sur des visuels statiques.

#### Contenu associé

- **[Transcription](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/transcription)**  
  Présentation du composant Transcription destiné à afficher un texte associé à un contenu média dans une interface.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/contenu-medias/design-du-contenu-medias

![Anatomie du Contenu médias](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/content/design/anatomy/anatomy-1.png)

1. Un média, image, vidéo ou audio — Obligatoire
2. Une légende — En option
3. Une transcription — En option

### Variations

**Ratio 16:9**

Il s’agit du format conseillé par défaut pour les images et vidéos lorsqu’elles sont intégrées dans un contenu éditorial.

> **Information**
> L’iFrame générée par l’hébergeur de la vidéo peut être différent du ratio par défaut de 16:9.

**Autres ratios**

D’autres ratios sont toutefois disponibles : voir [la section ratios dans les fondamentaux](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/medias) .

Il est notamment possible d’opter pour un format de vidéo en 4:3.

### Tailles

Utiliser les différentes tailles à votre disposition pour accentuer la visibilité d'un contenu média.

Le contenu média est disponible en trois tailles :

- SM pour small (75%)

La largeur du contenu média est inférieure à celle de la zone de texte.

- MD pour medium (100%)

La largeur du contenu média correspond à celle de la zone de texte.

- LG pour large (125%)

La largeur du contenu média est supérieure à celle de la zone de texte.

### États

Le contenu média n’est sujet à aucun changement d’état.

### Personnalisation

Le contenu média n’est pas personnalisable.

Toutefois, certains éléments sont optionnels - voir [la structure du composant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/contenu-medias/design-du-contenu-medias#contenu-medias) .

#### Contenu associé

- **[Transcription](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/transcription)**  
  Présentation du composant Transcription destiné à afficher un texte associé à un contenu média dans une interface.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/contenu-medias/code-du-contenu-medias

### HTML

#### Structure du composant

Le composant **Contenu médias** permet d'intégrer des images ou des vidéos de manière accessible et responsive. Sa structure est la suivante :

- Un élément `<figure>` de classe `fr-content-media` contient le média et ses informations associées.
  - Dans le cas d'une image :
    - Un élément `<div>` de classe `fr-content-media__img` contient l'image.
    - L'image est un élément `<img>` avec la classe `fr-responsive-img`, ou un `<svg>`.
    - L’alternative de l’image, attribut `alt`, doit toujours être présente, sa valeur peut-être vide (image n’apportant pas de sens supplémentaire au contexte) ou non (porteuse de texte ou apportant du sens) selon votre contexte.
  - Dans le cas d'une vidéo :
    - Un élément `<video>` avec l'attribut `controls`, ou une `<iframe>`, et la classe `fr-responsive-vid`.
    - L'alternative de la vidéo doit être présente dans un paragraphe `<p>` au sein de la balise `<video>` ou au niveau de l'attribut `title` de l'`<iframe>`.
  - Un élément `<figcaption>` de classe `fr-content-media__caption` contenant :
    - La description et/ou la source du média.
    - Un lien `<a class="fr-link">` vers la source du média.

Les informations visuelles ou auditives doivent être accessibles pour les utilisateurs qui ne peuvent pas voir ou entendre le contenu multimédia. Pour cela, il est recommandé d'ajouter une **description** ou une **transcription** du contenu multimédia.

**Structure HTML d'une image**

Image :

```html
<figure role="group" class="fr-content-media" aria-label="Description / Source">
    <div class="fr-content-media__img">
        <img class="fr-responsive-img" src="example/img/placeholder.16x9.png" alt="[À MODIFIER - vide ou texte alternatif de l’image]" />
    </div>
    <figcaption class="fr-content-media__caption">
        Description / Source
        <a href="#" class="fr-link">Libellé lien</a>
    </figcaption>
</figure>
```

SVG :

```html
<figure role="group" class="fr-content-media" aria-label="Description / Source">
    <!-- Les SVG illustratifs (non porteur de sens) doivent avoir l'attribut aria-hidden="true" -->
    <!-- Les SVG porteurs de sens doivent avoir l'attribut role="img" et un attribut aria-label -->
    <svg role="img" aria-label="[A modifier - titre ou texte contenu dans l’image]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 360">(...)</svg>
    <figcaption class="fr-content-media__caption">
        Description / Source
        <a href="#" class="fr-link">Libellé lien</a>
    </figcaption>
</figure>
```

**Structure HTML d'une vidéo**

Iframe :

```html
<figure role="group" class="fr-content-media">
    <iframe title="Vidéo de présentation du Service National Universel - voir transcription ci-dessous" class="fr-responsive-vid" src="https://www.youtube.com/embed/HyirpmPL43I" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <figcaption class="fr-content-media__caption">
        Description / Source
        <a id="link-1983" href="#" class="fr-link">Libellé lien</a>
    </figcaption>
</figure>
```

Vidéo :

```html
<figure role="group" class="fr-content-media">
    <video src="video.mp4" class="fr-responsive-vid" controls>
        <p>Alternative de la vidéo - voir transcription ci-dessous</p>
    </video>
    <figcaption class="fr-content-media__caption">
        Description / Source
        <a id="link-1983" href="#" class="fr-link">Libellé lien</a>
    </figcaption>
</figure>
```

Dans le cas d'un fichier audio, la structure est similaire à celle d'une vidéo, mais avec un élément `<audio>` à la place de la vidéo.

---

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](https://www.systeme-de-design.gouv.fr/version-courante/fr/premiers-pas/vous-etes-developpeur/prise-en-main#les-css) .

**Dépendances CSS**

| Dépendance | Obligatoire | Remarque |
|---|---|---|
| Core | Oui |  |
| Content | Oui |  |
| Link | Non | Si ajout de liens dans la description du média |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/content/content.min.css" rel="stylesheet">
```

#### Variantes de tailles

Le composant Contenu médias est prévu pour être utilisé au sein d'une page de contenu. Les pages de contenus ne doivent pas prendre la totalité de la largeur de la page en desktop, il est conseillé de placer le contenu dans une grille de 6 à 10 colonnes en desktop.

Par défaut, un contenu média prendra la largeur du conteneur. Il existe des variantes de tailles permettant de le render plus large ou moins large que le conteneur :

- Par défaut : 100% de la largeur du conteneur.
- La classe `.fr-content-media--sm` : 75% de la largeur du conteneur (centré).
- La classe `.fr-content-media--lg` : 125% de la largeur du conteneur.

La description et la source du média restent alignés sur la gauche du conteneur.

**Exemples de variantes de tailles**

SM :

```html
<figure role="group" class="fr-content-media fr-content-media--sm">
    (...)
</figure>
```

LG :

```html
<figure role="group" class="fr-content-media fr-content-media--lg">
    (...)
</figure>
```

#### Variantes de ratios

Les [classes utilitaires de ratios](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/medias) , disponibles dans le core, permettent de définir le ratio de l'image ou de la vidéo.

Pour les images, les classes suivantes sont disponibles :

- Le format par défaut et conseillé des images est le 16:9.
- `fr-ratio-32x9` : ratio 16:9/2
- `fr-ratio-16x9` : par défaut, pour forcer le ratio 16:9
- `fr-ratio-3x2` : ratio 3:2
- `fr-ratio-4x3` : ratio 4:3
- `fr-ratio-1x1` : ratio 1:1
- `fr-ratio-3x4` : ratio 3:4
- `fr-ratio-2x3` : ratio 2:3

Pour les vidéos, les classes suivantes sont disponibles :

- `fr-ratio-16x9` : par défaut, pour forcer le ratio 16:9
- `fr-ratio-4x3` : ratio 4:3
- `fr-ratio-1x1` : ratio 1:1

---

### JavaScript

Aucun JavaScript spécifique n'est requis pour le composant Contenu médias.

Un fallback JS est prévu pour la **gestion des ratios** sur les navigateurs ne supportant pas la propriété CSS `aspect-ratio`. Il est inclus dans le fichier JS du core.

#### Installation du JavaScript

Pour fonctionner correctement, le fichier JS du core doit être importé. L'import doit se faire en fin de page, avant la fermeture du body, et de préférence avec le fichier minifié, car plus léger.

```html
<script type="module" src="dist/core/core.min.js"></script>
```

Pour fonctionner sur Internet Explorer 11, un fichier legacy peut aussi être importé :

```html
<script type="text/javascript" nomodule src="dist/core/core.legacy.min.js"></script>
```

Une fois le fichier JS importé, la gestion des ratios est automatiquement prise en charge par le navigateur.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+content+)

#### [v1.12.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.12.0) - 19 juin 2024

- **[modifie la structure HTML du composant comportant une transcription](https://github.com/GouvernementFR/dsfr/pull/932)**  
  #932  
  - passe la transcription apres la figure
- a11y ajoute texte alternatif sur infographie mentionnant transcription en dessous
- ajout un attribut title sur les videos iframe  
  🐛 fix  
  content

#### [v1.11.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.1) - 31 janvier 2024

- **[met a jour les mises en situation](https://github.com/GouvernementFR/dsfr/pull/866)**  
  #866  
  - ajoute une transcription à l'exemple de “Média image en svg, porteur d’information”
- met à jour l'exemple de “Média image avec une transcription” avec une image porteuse de sens et renseigne la transcription correspondante  
  ✨ feat  
  content

#### [v1.10.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.10.0) - 19 juillet 2023

- **[correctif title et label bouton Agrandir](https://github.com/GouvernementFR/dsfr/pull/708)**  
  #708  
  - Retrait du title sur le bouton agrandir
- Ajout label agrandir dans les exemples de content  
  🐛 fix  
  transcription content

#### [v1.7.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.7.0) - 21 juillet 2022

- **[bug ratio vidéos ios](https://github.com/GouvernementFR/dsfr/pull/352)**  
  #352  
  fix  
  content core

#### [v1.6.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.6.0) - 14 juin 2022

- **[ajout utilitaire fr-ratio et aspect-ratio des content img & vid](https://github.com/GouvernementFR/dsfr/pull/316)**  
  #316  
  refactor  
  core card content

#### [v1.4.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.4.0) - 16 mars 2022

- **[retours dépréciation](https://github.com/GouvernementFR/dsfr/pull/241)**  
  #241  
  fix  
  header follow content

#### [v1.2.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.2.0) - 17 novembre 2021

- **[Le composant media ne fonctionne pas avec une image svg](https://github.com/GouvernementFR/dsfr/pull/54)**  
  #54  
  fix  
  content

##### Contenu associé

- **[Transcription](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/transcription)**  
  Présentation du composant Transcription destiné à afficher un texte associé à un contenu média dans une interface.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/contenu-medias/accessibilite-du-contenu-medias

Le composant **Contenu médias** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Il n'y a aucune interaction spécifique au composant **Contenu médias** .

### Règles d’accessibilité

- Utiliser des balises sémantiques pour structurer le contenu multimédia.
  - Utiliser la balise `<figure>` pour encapsuler les contenus multimédias.
  - Indiquer la **description** et/ou la **source** du média dans un élément `<figcaption>`.
- Les contenus multimédias doivent être **accessibles** aux technologies d'assistance.
  - Si la `figure` possède une légende dans une balise `figcaption`, elle doit également avoir un attribut `aria-label` reprenant le texte du figcaption.
  - Utiliser l'attribut `alt` pour les images, laisser vide si l'image n'apporte pas de sens supplémentaire au contexte. Si l'image est porteuse de texte ou apporte du sens, l'attribut `alt` doit renseigner cette information.
  - Si l'image est un SVG, les SVG illustratifs (non porteur de sens) doivent avoir l'attribut `aria-hidden="true"`. Les SVG porteurs de sens doivent avoir l'attribut `role="img"` et un attribut `aria-label`.
  - Pour les `<video>`, l'alternative doit être présente dans un paragraphe `<p>` au sein de la balise `<video>`.
  - Utiliser l'attribut `title` pour les `iframe` pour indiquer le titre de la vidéo.
  - Lorsque le contenu à renseigner dans l'alternative est trop long, utiliser le composant [Transcription](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/transcription/code-de-la-transcription) sous le média pour afficher le contenu complet.
- Les contenus multimédias doivent être **responsive** .
  - Utiliser la classe `fr-responsive-img` pour les images.
  - Utiliser la classe `fr-responsive-vid` pour les vidéos.
- Pour les vidéos :
  - Les contrôles de lecture sont présents. Utiliser l'attribut `controls` pour les balises `<video>`.
  - La lecture ne commence pas sans le contrôle de l’utilisateur.
  - Le lecteur est utilisable au clavier selon un ordre logique.
  - Les vidéos (hors direct) sont sous-titrées.

### Contrastes de couleurs

Le composant Contenu médias est suffisamment contrasté en thème clair.

### Critères RGAA applicables

- **Images :** 1.1, 1.2, 1.3, 1.6, 1.7, 1.8, 1.9
- **Couleurs :** 3.1, 3.2, 3.3
- **Multimédia :** 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 4.10, 4.11, 4.12, 4.13
- **Liens :** 6.1, 6.2
- **Scripts :** 7.1, 7.3
- **Éléments obligatoires :** 8.9
- **Structuration :** 9.1, 9.3
- **Présentation de l’information :** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Consultation :** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Arbre de décision - alternative d’image (WAI)](https://www.w3.org/WAI/tutorials/images/decision-tree/)

#### Contenu associé

- **[Transcription](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/transcription)**  
  Présentation du composant Transcription destiné à afficher un texte associé à un contenu média dans une interface.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/contenu-medias/demonstration-du-contenu-medias

#### Contenu associé

- **[Transcription](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/transcription)**  
  Présentation du composant Transcription destiné à afficher un texte associé à un contenu média dans une interface.
