# Lien

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lien · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lien/design-du-du-lien · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lien/code-du-lien · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lien/accessibilite-du-lien · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lien/demonstration-du-lien
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

Le lien est un système de navigation secondaire qui permet à l’usager de se déplacer au sein d’une même page, entre deux pages d’un même site ou vers un site externe.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lien

*(Démonstration interactive « link--link » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=link--link&nav=0&globals=theme%3Alight)*

### Quand utiliser ce composant ?

Proposer le lien pour permettre à l’usager de naviguer au sein d’un site, en complément de la [navigation principale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale) .

> **Information**
> Bien différencier le lien des autres composant permettant une interaction avec l’interface.

Le lien a vocation à faciliter la navigation vers d’autres contenus. Pour les actions d’un autre type, comme la soumission d’un formulaire par exemple, il faut utiliser [le bouton](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton) .

### Comment utiliser ce composant ?

- **Utiliser le lien pour renvoyer l’usager vers davantage de contenus** .

> **À faire :** Proposer un lien pour consulter plus d’actualités.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/link/use/do-1.png)

> **À ne pas faire :** Ne pas utiliser un bouton pour renvoyer vers davantage de contenus.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/link/use/dont-1.png)

- **Adapter le type de lien choisi au besoin rencontré** . Par exemple, le lien simple ne doit pas être utilisé au sein d’un paragraphe mais bien en dehors de tout contenu. Pour insérer un lien dans un paragraphe, utiliser les liens contextuels au fil du texte.
- **Eviter de démultiplier les liens** au sein d’une même page afin de préserver une navigation simple et claire par l’usager.

### Règles éditoriales

- **Privilégier des liens courts et explicites** garantissant la compréhension de l’usager.

#### Contenu associé

- **[Fil d'Ariane](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/fil-d-ariane)**  
  Présentation du composant fil d’Ariane, navigation secondaire permettant à l’usager de se repérer dans l’arborescence d’un site et de revenir à un niveau supérieur.

- **[Menu latéral](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/menu-lateral)**  
  Présentation du composant Menu latéral, élément de navigation secondaire qui organise des liens verticaux pour guider l’usager entre différentes pages d’une même rubrique.

- **[Sommaire](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/sommaire)**  
  Présentation du composant Sommaire permettant à l’usager de naviguer facilement entre les sections d’une page longue à l’aide de liens ancrés.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lien/design-du-du-lien

![Anatomie du lien](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/link/design/anatomy/anatomy-1.png)

1. Une icône, placée à droite ou à gauche du texte visible ou seule — En option
2. Un libellé — Obligatoire

### Variations

**Lien au fil du texte**

*(Démonstration interactive « link--text-link » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=link--text-link&nav=0&globals=theme%3Alight)*

- **Utiliser ce lien au sein d’un texte** . Il reprend les caractéristiques typographiques de celui-ci (font, couleur, taille) tout en étant souligné. Il peut également être suivi d’une icône (par exemple : lien externe).

**Lien simple**

Le lien simple se décline en différentes variations :

- Texte seul

*(Démonstration interactive « link--link » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=link--link&nav=0&globals=theme%3Alight)*

- Avec une icône à droite
- Avec une icône à gauche

*(Démonstration interactive « link--icon » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=link--icon&nav=0&globals=theme%3Alight)*

- Icône seule
- **Utiliser le lien simple en dehors de tout contenu** .
- **Ajouter une icône pour rendre l’action à venir ou la destination plus explicite** pour l’usager. L’icône n’est pas à vocation décorative.
- **Préférer les liens avec libellé.** L’icône seule n’est à utiliser que très rarement, pour des actions facilement identifiables par l’usager.

**Lien interne**

*(Démonstration interactive « link--link » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=link--link&nav=0&globals=theme%3Alight)*

- **Utiliser le lien interne pour pointer vers d’autres pages d’un même site** .

**Lien externe**

*(Démonstration interactive « link--external » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=link--external&nav=0&globals=theme%3Alight)*

- **Utiliser le lien externe pour pointer vers un autre site** , en ouvrant un nouvel onglet ou une nouvelle page dans le navigateur. Le lien externe est matérialisé par une icône obligatoire placée à droite du lien.

**Lien de téléchargement**

*(Démonstration interactive « link--download » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=link--download&nav=0&globals=theme%3Alight)*

- **Utiliser le lien de téléchargement pour permettre à l’usager de télécharger un fichier** depuis votre site.
- **Précéder le nom du document de la mention “Télécharger”.** L’usager doit comprendre l’action qu’il réalise.

> **À faire :** Précéder le nom du document de la mention “Télécharger”.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/link/design/variation/do-1.png)

- **Accompagner le lien d’une icône** qui explicite l’action.
- **Préciser le format et le poids du fichier** de façon systématique.
- **Indiquer la langue du document** si elle est différente de la langue de la page courante.

> **À faire :** Préciser la langue du document si elle est différente de la langue de la page courante.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/link/design/variation/do-2.png)

**Lien de retour en haut de page**

*(Démonstration interactive « link--back-to-top » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=link--back-to-top&nav=0&globals=theme%3Alight)*

- **Utiliser le retour en haut de page dans les pages de contenu longues** pour éviter à l’usager de trop scroller.
- **Placer le retour en haut de page à la fin du contenu de la page** , avant le pied de page. Si il y a des blocs de poursuite de lecture (exemple : liens vers d’autres articles), il est conseillé de placer le retour en haut de page avant ces blocs.

> **À faire :** Positionner le retour en haut de page avant le maillage.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/link/design/variation/do-3.png)

> **À ne pas faire :** Ne pas positionner le retour en haut de page après le maillage.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/link/design/variation/dont-1.png)

- **Conserver le même emplacement** pour le retour en haut de page sur toutes les pages où vous le proposez. Aligné à gauche avec le contenu par défaut, il peut aussi être centré ou aligné à droite.

> **À faire :** Choisir l’un des trois emplacements ci-dessus pour le retour en haut de page. Il doit être harmoniser à travers l’ensemble des pages du site.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/link/design/variation/do-4.png)

**Groupe de liens**

- Liste de liens

*(Démonstration interactive « links-group--size-md » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=links-group--size-md&nav=0&globals=theme%3Alight)*

- Liste de liens de téléchargement

*(Démonstration interactive « links-group--download » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=links-group--download&nav=0&globals=theme%3Alight)*

- Groupe de liens en ligne

*(Démonstration interactive « links-group--horizontal » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=links-group--horizontal&nav=0&globals=theme%3Alight)*

- **Utiliser un groupe de liens afin de mettre à disposition plusieurs liens consécutivement** , qu’ils soient complémentaires ou substituables.

### Tailles

Le lien est disponible en trois tailles :

- SM pour small

*(Démonstration interactive « links-group--size-sm » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=links-group--size-sm&nav=0&globals=theme%3Alight)*

- MD pour medium - taille par défaut

*(Démonstration interactive « links-group--size-md » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=links-group--size-md&nav=0&globals=theme%3Alight)*

- LG pour large

*(Démonstration interactive « links-group--size-lg » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=links-group--size-lg&nav=0&globals=theme%3Alight)*

- **Adapter la taille de votre lien à votre besoin** .

### États

**État désactivé**

L’état désactivé indique que l'usager ne peut pas interagir avec le lien.

*(Démonstration interactive « link--disabled » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=link--disabled&nav=0&globals=theme%3Alight)*

> **Attention**
> N’utiliser cet état que très ponctuellement, pour indiquer à l’usager qu’il doit procéder à une action en amont par exemple.

**État au survol**

L’état au survol correspond au comportement constaté par l’usager lorsqu’il survole le lien avec sa souris.

### Personnalisation

Le lien n’est pas personnalisable.

Toutefois, certains éléments sont optionnels et les icônes peuvent être changées (à l’exception des icônes lien externe et lien de téléchargement) - [voir la structure du composant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lien/design-du-du-lien#lien) .

> **À ne pas faire :** Ne pas changer la couleur du lien.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/link/design/custom/dont-1.png)

> **À ne pas faire :** Ne pas supprimer le soulignement du lien.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/link/design/custom/dont-2.png)

#### Contenu associé

- **[Fil d'Ariane](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/fil-d-ariane)**  
  Présentation du composant fil d’Ariane, navigation secondaire permettant à l’usager de se repérer dans l’arborescence d’un site et de revenir à un niveau supérieur.

- **[Menu latéral](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/menu-lateral)**  
  Présentation du composant Menu latéral, élément de navigation secondaire qui organise des liens verticaux pour guider l’usager entre différentes pages d’une même rubrique.

- **[Sommaire](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/sommaire)**  
  Présentation du composant Sommaire permettant à l’usager de naviguer facilement entre les sections d’une page longue à l’aide de liens ancrés.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lien/code-du-lien

### HTML

#### Structure du composant

Le composant **Lien** est un élément interactif permettant de naviguer vers une autre page ou section. Sa structure est la suivante :

- Le Lien est un élément HTML `<a>` défini par la classe `fr-link`.
- Son contenu est textuel, il doit indiquer clairement sa destination.

**Exemple de structure HTML**

```html
<a href="#" class="fr-link">
  Libellé lien
</a>
```

#### Lien externe

Lorsque le lien redirige vers un site externe, celui-ci doit s'ouvrir dans un nouvelle fenêtre. Pour cela, il convient d'ajouter l'attribut `target="blank"` ainsi qu'un attribut `title="[intitulé du lien à modifier] - nouvelle
 fenêtre"` pour indiquer au survol que la page s'ouvrira dans un nouvelle fenêtre. L'ajout d'un attribut `rel="noopener external"` sera aussi recommandé pour des raisons de sécurité.

**Exemple de lien externe**

```html
<a href="#" target="_blank" rel="noopener external" title="Libellé lien - nouvelle fenêtre" class="fr-link">
  Libellé lien
</a>
```

#### Lien de téléchargement

La variante lien de téléchargement permet de télécharger un fichier.

- Il est formé par un élément HTML `<a>` défini par la classe `fr-link` et la classe `fr-link--download`.
- Son contenu est constitué de :
  - un texte commençant par "Télécharger ..."
  - les détails du fichier : un élément HTML `<span>` avec la classe `fr-link__detail` et décrivant le type, le poids, et la langue du fichier (si différente).

**Exemples de lien de téléchargement**

```html
<a download="true" href="image.jpg" class="fr-link fr-link--download">
  Télécharger le document lorem ipsum
  <span class="fr-link__detail">JPG – 61,88 ko</span>
</a>
```

Dans le cas d'un fichier en langue étrangère, l'attribut `hreflang` avec le code langue doit être ajouté, et la langue doit être indiquée dans le détail.

```html
<a hreflang="en" download="true" href="exemple.pdf" class="fr-link fr-link--download">
  Télécharger le document lorem ipsum
  <span class="fr-link__detail">PDF – 1,81 Mo - Anglais</span>
</a>
```

Il est possible de remplir automatiquement le détail en JS grâce à l'attribut `data-fr-assess-file` (Voir section [Javascript](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lien/code-du-lien#javascript) ).

#### Lien au fil du texte

Au sein d'un texte, ne pas utiliser le composant Lien. Préférer l'ajout d'un lien standard sans la classe `fr-link`, celui-ci reprend les caractéristiques typographiques du texte (font, couleur, taille) tout en étant souligné.

**Exemples de liens au fil du texte**

```html
<p>Lorem ipsum <a href="#">lien dans le texte</a> dolor sit amet</p>
```

#### Groupes de liens

Les liens peuvent être regroupés pour former des ensembles de navigation. Le groupe est formé par la succession de liens enveloppés par un conteneur de classe `fr-links-group`. Utiliser une liste de `<ul>` `<li>` dans le cas d'une liste de liens. Insérer les liens directement dans un conteneur `<div>` lorsque qu'une liste n'est pas nécessaire, par exemple : deux liens indépendants qui ne forment pas un ensemble logique.

**Exemple de groupe de liens**

```html
<ul class="fr-links-group">
  <li>
    <a href="#" class="fr-link">Lien 1</a>
  </li>
  <li>
    <a href="#" class="fr-link">Lien 2</a>
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
| Link | Oui |  |
| Utility | Non | Uniquement pour l'ajout d'icône |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/link/link.min.css" rel="stylesheet">
```

#### Variantes de taille

Le lien peut avoir différentes tailles qui auront un impact sur la taille du texte et des icônes :

- `fr-link--xs` : Très petit lien.
- `fr-link--sm` : Petit lien.
- Par défaut : Lien moyen.
- `fr-link--lg` : Grand lien.

**Exemples de variantes de taille**

```html
<a href="#" class="fr-link fr-link--xs">
    Très petit lien
</a>
<a href="#" class="fr-link fr-link--sm">
    Petit lien
</a>
<a href="#" class="fr-link">
    Lien moyen
</a>
<a href="#" class="fr-link fr-link--lg">
    Grand lien
</a>
```

#### Variantes d'icônes

Le Lien peut avoir une icône juxtaposé, elle est ajoutée via la **classe utilitaire d'icône** `fr-icon--NOM-ICONE` (voir [Icônes](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/icone) ).

Cette classe peut être associée à une **classe de positionnement** de l'icône :

- Par défaut : Icône seule, le libellé est caché.
- `fr-link--icon-left` : L'icône apparaît à gauche du libellé.
- `fr-link--icon-right` : L'icône apparaît à droite du libellé.

Dans le cas d'un groupe de boutons, le positionnement de l'icône des boutons peut être généralisé au niveau du groupe avec les classes `fr-links-group--icon-left` ou `fr-links-group--icon-right`.

**Exemples de variantes d'icônes**

```html
<a href="#" class="fr-link fr-icon-info-line fr-link--icon-left">
    Lien avec icône à gauche
</a>
<a href="#" class="fr-link fr-icon-info-line fr-link--icon-right">
    Lien avec icône à droite
</a>
<a href="#" class="fr-link fr-icon-info-line">
    Lien icône seule (non recommandé)
</a>
```

#### Variante Lien externe

L'attribut `target="blank"` amène l'ajout d'une icône "lien externe" à droite du lien. Si une icône à droite était ajoutée, l'icône "lien externe" prend le dessus.

#### Variante désactivé

Le style désactivé du Lien est appliqué par le retrait de l'attribut `href` sur l'élément `<a>`. Le Lien est alors grisé et les effets au survol et au clic sont retirés. Le pointeur de la souris prend la valeur "not-allowed" au survol du bouton ce qui change sont style. Sur le Lien désactivé, l'attribut `role="link"` et `aria-disabled` seront nécessaires pour les technologies d'assistance.

#### Variantes du groupe de lien

Le groupe de bouton vient avec de nombreuses variations, telles que :

- **Taille des liens** : Des variations de taille sont accessibles au niveau du groupe avec les classes :
  - `fr-links-group--sm` : Groupe de liens SM
  - `fr-links-group--lg` : Groupe de liens LG
- **Positionnement des icônes des liens** : Les variations de position de l'icône des liens sont accessibles au niveau du groupe avec les classes :
  - `fr-links-group--icon-left` : Icône des liens à gauche
  - `fr-links-group--icon-right` : Icône des liens à droite
- **Groupe de liens horizontal** : Par défaut, le groupe de bouton positionne les liens les uns en dessous des autres sous forme de liste à puce. Les liens peuvent être placés en ligne par la classe `fr-links-group--inline` (avec passage à la ligne en cas de dépassement du conteneur)

**Exemple de groupe de lien**

```html
<ul class="fr-links-group fr-links-group--icon-left">
  <li>
    <a id="link-4612" href="#" class="fr-link fr-icon-info-line">Libellé lien 1</a>
  </li>
  <li>
    <a id="link-4613" href="#" class="fr-link fr-icon-success-line">Libellé lien 2</a>
  </li>
  <li>
    <a id="link-4614" href="#" class="fr-link fr-icon-warning-line">Libellé lien 3</a>
  </li>
</ul>
```

---

### JavaScript

Le composant Lien **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

Une fonctionnalité disponible dans le core, permet de remplir automatiquement le détail des **liens de téléchargement** . Pour instancier le javascript de remplissage automatique du détail sur le lien de téléchargement, ajouter l'attribut `data-fr-assess-file` sur le lien. Les propriétés de type, poids, et langue sont récupérées depuis le fichier. Le texte de détail est automatiquement remplacé au chargement du JS. Il est conseillé de tout de même remplir les infos connues dans le détail en solution de repli. Si la page est en Anglais, l'attribut `data-fr-assess-file` doit prendre la valeur "bytes", pour afficher le poids en Bytes plutôt qu'en Octet.

Pour fonctionner le fichier à télécharger doit être sur le même cross-domain que le site.

**Exemple des details du lien de téléchargement automatiques**

```html
<a data-fr-assess-file download="true" href="image.jpg" class="fr-link fr-link--download">
  Télécharger le document lorem ipsum
  <span class="fr-link__detail">CE TEXTE EST REMPlACÉ</span>
</a>
```

#### Installation du Javascript

Pour fonctionner, le **remplissage automatique du détail des liens de téléchargement** nécessite l'utilisation de JavaScript. Cette fonctionnalité est disponible dans le core.

Il est donc nécessaire d'importer les fichiers js du core à la fin de la page (avant `</body>`) :

```html
<script type="module" src="dist/core/core.module.min.js"></script>
```

NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```html
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
```

#### API

> **Information**
> L'activation ou la désactivation de la fonction de remplissage automatique du détail des liens de téléchargement (assess-file) n'est pas disponible via l'API JS, elle se fait via l'ajout ou le retrait de l'attribut `data-fr-assess-file` sur le lien.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+link+)

#### [v1.15.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.15.0) - 17 juillet 2026

- **[ajoute la variation lien au fil du texte](https://github.com/GouvernementFR/dsfr/pull/1455)**  
  #1455  
  - Ajoute un paramètre inText permettant de retirer le style du lien  
  ✨ feat  
  link

#### [v1.14.3](https://github.com/GouvernementFR/dsfr/releases/tag/v1.14.3) - 15 décembre 2025

- **[ajout du mot clé haut de page](https://github.com/GouvernementFR/dsfr/pull/1332)**  
  #1332  
  - Ajout du mot clé "haut de page" sur les pages de documentation du lien pour améliorer la recherche de ce terme  
  📝 docs  
  link

#### [v1.13.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.13.0) - 4 décembre 2024

- **[alignement icône link close déprécié](https://github.com/GouvernementFR/dsfr/pull/1007)**  
  #1007  
  - Correction de l'alignement vertical de l'icône du lien de fermeture déprécié (maintenant btn-close)  
  🐛 fix  
  link

#### [v1.12.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.12.0) - 19 juin 2024

- **[met a jour la variante avec markup bouton](https://github.com/GouvernementFR/dsfr/pull/951)**  
  #951  
  - correction de l'alignement du texte des fr-lien en button  
  🐛 fix  
  link

- **[enlarge button](https://github.com/GouvernementFR/dsfr/pull/943)**  
  #943  
  - ajout d'une classe utilitaire enlarge-button utilisée sur les cartes et les tuiles de téléchargement pour élargir la zone de clique à tout le composant quand l'element cliquable est un bouton  
  🐛 fix  
  link card tile

#### [v1.11.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.0) - 11 décembre 2023

- **[espacement entre libellé et icone](https://github.com/GouvernementFR/dsfr/pull/818)**  
  #818  
  - retrait du saut de ligne entre la balise `a` et son libellé pour corriger l'écart entre le libellé du lien et l'icone
- ajout d'un exemple "lien externe" dans les exemples de lien
- correction de la taille de l'icone sur les tuiles sans lien étendu
- retrait de l'icone `arrow-right` sur les tuiles sans lien étendu, pour être iso avec les cartes  
  🐛 fix  
  link card tile

- **[rel noopener external & title target blank](https://github.com/GouvernementFR/dsfr/pull/737)**  
  #737  
  - ajout d'attribut title et rel noopener external sur les liens en target blank
- modification des exemple de card, tile, link, footer, quote, notice  
  🐛 fix  
  link

#### [v1.10.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.10.1) - 4 septembre 2023

- **[correction des liens de téléchargement sur firefox et des groupes de liens sur safari](https://github.com/GouvernementFR/dsfr/pull/755)**  
  #755  
  🐛 fix  
  link

#### [v1.10.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.10.0) - 19 juillet 2023

- **[correctif téléchargement multiligne](https://github.com/GouvernementFR/dsfr/pull/702)**  
  #702  
  - les liens de téléchargement étaient limités à une seul ligne avec une ellipse sur le text dépassant
- correctif prenant en compte le retour à la ligne  
  🐛 fix  
  link

- **[corrige graisse lien de téléchargement](https://github.com/GouvernementFR/dsfr/pull/658)**  
  #658  
  - retire le font-weight bold sur le lien de téléchargement  
  🐛 fix  
  link

- **[retrait du z-index](https://github.com/GouvernementFR/dsfr/pull/630)**  
  #630  
  - retrait du z-index: 1 qui pose problème dans une modale avec footer.  
  🐛 fix  
  link button tag badge

#### [v1.8.3](https://github.com/GouvernementFR/dsfr/releases/tag/v1.8.3) - 15 novembre 2022

- **[correction régression icône à droite sur les éléments interactifs](https://github.com/GouvernementFR/dsfr/pull/461)**  
  #461  
  fix  
  link

#### [v1.6.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.6.0) - 14 juin 2022

- **[correctif icône lien extérieur](https://github.com/GouvernementFR/dsfr/pull/333)**  
  #333  
  fix  
  core link button tag card

- **[correction espacements des groupes](https://github.com/GouvernementFR/dsfr/pull/311)**  
  #311  
  refactor  
  header link button follow share tag badge

#### [v1.4.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.4.0) - 16 mars 2022

- **[Ajout du lien "back to top"](https://github.com/GouvernementFR/dsfr/pull/233)**  
  #233  
  feat  
  link

#### [v1.3.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.3.0) - 18 janvier 2022

- **[role & aria link disabled](https://github.com/GouvernementFR/dsfr/pull/181)**  
  #181  
  fix  
  link tag pagination share

##### Contenu associé

- **[Fil d'Ariane](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/fil-d-ariane)**  
  Présentation du composant fil d’Ariane, navigation secondaire permettant à l’usager de se repérer dans l’arborescence d’un site et de revenir à un niveau supérieur.

- **[Menu latéral](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/menu-lateral)**  
  Présentation du composant Menu latéral, élément de navigation secondaire qui organise des liens verticaux pour guider l’usager entre différentes pages d’une même rubrique.

- **[Sommaire](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/sommaire)**  
  Présentation du composant Sommaire permettant à l’usager de naviguer facilement entre les sections d’une page longue à l’aide de liens ancrés.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lien/accessibilite-du-lien

Le composant **Lien** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Lorsque le focus est positionné sur le Lien :

- `Entrée` :
  - actionne le lien,
  - redirige vers la destination définie par l’attribut `href`,
  - déplace le focus vers la page de destination,
  - si le lien est en `target="_blank"` ouvre la destination dans un nouvel onglet.
- `Tab` : place le focus sur le prochain élément focalisable.
- `Maj + Tab` : place le focus sur l'élément focalisable précédent.

### Règles d’accessibilité

#### Structuration

- Le lien doit avoir un attribut `href`.
- Le lien doit avoir un **intitulé accessible** .
- Si une information complémentaire au lien est présente, la lier au lien avec un `aria-describedby` défini sur l'ID de l'élément contenant l’information.

#### Intitulé du lien

- L’intitulé doit être explicite, l’utilisateur doit comprendre la destination ou la fonction du lien.
- Un lien peut être rendu explicite grâce à son contexte : [RGAA 4 : contexte du lien](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode/glossaire/#contexte-du-lien) .

##### Lien-icône

- Un lien avec icône seule doivent avoir un nom accessible pertinent.
- Un attribut `title` identique à l’intitulé du lien peut être ajouté pour expliciter l’icône.

##### Lien externe

Les **liens externes** qui s’ouvrent dans un nouvel onglet / fenêtre (attribut `target="_blank"`) et qui sont suivis d’une icône doivent également avoir la mention "nouvelle fenêtre" dans un attribut `title` (ex : `title="intitulé du lien - nouvelle fenêtre"`).

##### Lien de téléchargement

- Le **lien de téléchargement** doit contenir la mention "Télécharger".
- Indiquer des informations sur le fichier dans la partie détail avec notamment le type ou l'extension du fichier, son poids, et sa langue si différente de la page est une bonne pratique et un critère d’accessibilité de niveau AAA.

##### Groupe de liens

Une succession de liens doit être structuré dans une liste `ul` `li`.

##### Lien désactivé

Pour **désactiver** un lien :

- retirer l’attribut `href`,
- ajouter les attributs `role="link"` et `aria-disabled="true"` pour indiquer aux technologies d'assistance qu’il s'agit d'un lien désactivé.

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

#### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [L’élément a](https://html.spec.whatwg.org/#the-a-element)

##### Ressources

- [Disabling a link](https://www.scottohara.me/blog/2021/05/28/disabled-links.html)

##### Contenu associé

- **[Fil d'Ariane](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/fil-d-ariane)**  
  Présentation du composant fil d’Ariane, navigation secondaire permettant à l’usager de se repérer dans l’arborescence d’un site et de revenir à un niveau supérieur.

- **[Menu latéral](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/menu-lateral)**  
  Présentation du composant Menu latéral, élément de navigation secondaire qui organise des liens verticaux pour guider l’usager entre différentes pages d’une même rubrique.

- **[Sommaire](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/sommaire)**  
  Présentation du composant Sommaire permettant à l’usager de naviguer facilement entre les sections d’une page longue à l’aide de liens ancrés.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lien/demonstration-du-lien

#### Contenu associé

- **[Fil d'Ariane](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/fil-d-ariane)**  
  Présentation du composant fil d’Ariane, navigation secondaire permettant à l’usager de se repérer dans l’arborescence d’un site et de revenir à un niveau supérieur.

- **[Menu latéral](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/menu-lateral)**  
  Présentation du composant Menu latéral, élément de navigation secondaire qui organise des liens verticaux pour guider l’usager entre différentes pages d’une même rubrique.

- **[Sommaire](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/sommaire)**  
  Présentation du composant Sommaire permettant à l’usager de naviguer facilement entre les sections d’une page longue à l’aide de liens ancrés.
