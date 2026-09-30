# Navigation tertiaire

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-tertiaire · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-tertiaire/design-de-la-navigation-tertiaire
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-tertiaire

- Bêta

> **Information**
> **Ce composant est en version bêta.** Il n'existe pas en code et son design ou ses fonctionnalités peuvent encore être amenés à évoluer. N'hésitez pas à nous partager vos cas d'usage ou retours qui le concerne via notre formulaire de contact ou notre Tchap pour que nous puissions les étudier.

Retrouvez ces composants sur Figma [dans un fichier dédié bêta disponible sur Community](https://www.figma.com/community/file/1096003483468520396) .

La navigation tertiaire est un système de navigation permettant un troisième niveau de navigation au sein d’une section de contenu.

![](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tabnav/presentation/presentation-1.png)

### Quand utiliser ce composant ?

Proposer une navigation tertiaire pour permettre à l’usager de naviguer entre les différentes pages d’une rubrique ou d’un même thème.

Il est recommandé d’utiliser une navigation tertiaire sur des sites ayant un niveau de profondeur assez important (3 niveaux de navigation ou plus) car elle vient compléter la navigation secondaire.

**A noter :** Bien différencier la navigation tertiaire des onglets.

Le [système d’onglets](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/onglet) n’est pas une navigation mais permet de mettre en forme du contenu. De ce fait, il peut être utiliser sans la contrainte du menu latéral.

### Comment utiliser ce composant ?

- **Utiliser exclusivement la navigation tertiaire en complément d’une navigation secondaire (menu latéral)** .

> **À faire :** Proposer la navigation tertiaire en complément d’une navigation secondaire telle que le menu latéral.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tabnav/use/do-1.png)

> **À ne pas faire :** Ne pas utiliser la navigation tertiaire en l’absence d’une navigation secondaire.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tabnav/use/dont-1.png)

- **Proposer des pages n’étant pas déjà rattachées aux navigations principale ou secondaire (menu latéral)** au sein de la navigation tertiaire. Il ne s’agit pas d’une redite mais bien d’une navigation complémentaire aux navigations préexistantes.
- **Indiquer à l’usager** la page active au sein de la navigation tertiaire. Pour cela, l’élément correspondant à la page courante doit être en état “actif”.
- **Placer systématiquement la navigation tertiaire sous le titre de la rubrique.** Elle s’étend sur une largeur fixe de 8 colonnes, quelque soit le nombre de liens.

### Règles éditoriales

- **Intégrer le titre de la rubrique par défaut** , pour donner un repère à l’usager.
- **Raccourcir les libellés au sein de la navigation tertiaire,** par rapport aux titres véritables des pages, si ces derniers apparaissent trop longs.

#### Contenu associé

- **[Menu latéral](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/menu-lateral)**  
  Présentation du composant Menu latéral, élément de navigation secondaire qui organise des liens verticaux pour guider l’usager entre différentes pages d’une même rubrique.

- **[Navigation principale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale)**  
  Présentation du composant Navigation principale organisant les grandes rubriques d’un site et permettant à l’usager de s’orienter dans son arborescence.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-tertiaire/design-de-la-navigation-tertiaire

- Bêta

> **Information**
> **Ce composant est en version bêta.** Il n'existe pas en code et son design ou ses fonctionnalités peuvent encore être amenés à évoluer. N'hésitez pas à nous partager vos cas d'usage ou retours qui le concerne via notre formulaire de contact ou notre Tchap pour que nous puissions les étudier.

Retrouvez ces composants sur Figma [dans un fichier dédié bêta disponible sur Community](https://www.figma.com/community/file/1096003483468520396) .

La navigation tertiaire est un système de navigation permettant un troisième niveau de navigation au sein d’une section de contenu.

![Anatomie de la navigation tertiaire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/tabnav/design/anatomy/anatomy-1.png)

1. Un libellé du lien direct — Obligatoire
2. Un soulignement, pour indiquer la page active — Obligatoire
3. Un séparateur — Obligatoire

### Variations

La navigation tertiaire ne propose aucune variation.

### Tailles

La navigation tertiaire prend une largeur fixe de 8 colonnes.

### États

**État au survol**

L’état au survol correspond au comportement constaté par l’usager lorsqu’il survole une entrée de la navigation tertiaire.

**État au clic**

L’état au clic correspond au comportement constaté par l’usager après avoir cliqué sur une entrée de la navigation tertiaire.

**État actif**

L’état actif correspond au comportement constaté par l’usager après avoir cliqué sur un des liens de la navigation tertiaire. Il renseigne sur la page courante en cours de consultation.

### Personnalisation

La navigation tertiaire n’est pas personnalisable.

- Utiliser uniquement la couleur bleu pour les sections de la navigation tertiaire.
- Ne pas personnaliser la couleur des sections de la navigation tertiaire.
- Utiliser le soulignement prévu à cet effet pour indiquer la page active au sein de la navigation tertiaire.
- Ne pas personnaliser l’état actif de la page courante.

#### Contenu associé

- **[Menu latéral](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/menu-lateral)**  
  Présentation du composant Menu latéral, élément de navigation secondaire qui organise des liens verticaux pour guider l’usager entre différentes pages d’une même rubrique.

- **[Navigation principale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale)**  
  Présentation du composant Navigation principale organisant les grandes rubriques d’un site et permettant à l’usager de s’orienter dans son arborescence.
