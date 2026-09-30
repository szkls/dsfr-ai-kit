# Liste déroulante riche

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante-riche · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante-riche/design-de-la-liste-deroulante-riche
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante-riche

- Bêta

> **Information**
> **Ce composant est en version bêta.** Il n'existe pas en code et son design ou ses fonctionnalités peuvent encore être amenés à évoluer. N'hésitez pas à nous partager vos cas d'usage ou retours qui le concerne via notre formulaire de contact ou notre Tchap pour que nous puissions les étudier.

Retrouvez ces composants sur Figma [dans un fichier dédié bêta disponible sur Community](https://www.figma.com/community/file/1096003483468520396) .

La liste déroulante riche est un élément d’interaction avec l’interface permettant à l’usager de choisir une ou plusieurs options dans une liste donnée.

![](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/combobox/presentation/presentation-1.png)

### Quand utiliser ce composant ?

Utiliser la liste déroulante riche pour permettre à l’usager de sélectionner une ou plusieurs options dans une liste ou si vous souhaitez lui permettre de faire une recherche ou d’appliquer un filtrage dans la liste d’options mise à disposition.

> **Information**
> Bien différencier la liste déroulante riche de la [liste déroulante](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante) simple. Opter pour cette dernière si vous souhaitez restreindre l’usager à un choix unique.

Évitez également l’usage de listes déroulantes lorsqu’elles comportent peu de propositions (moins de 3 options). Dans ce cas, préférez des [boutons radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio) , si le choix est unique, ou des [cases à cocher](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher) , si c’est un choix multiple.

Si les options doivent être facilement comparables (exemple : le prix de produits), préférez les [boutons radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio) aux listes déroulantes.

### Comment utiliser ce composant ?

- **Utiliser les listes déroulantes au sein de formulaire** afin de distinguer leur usage de celui des menus déroulants.
- **Effectuer la validation des entrées côté client en temps réel** , si possible, et fournir un retour immédiat à l’usager après la sélection.
- **Fournir une description textuelle de l’erreur** , dans le cas d’une sélection erronée, ainsi que des instructions claires sur la manière de la corriger à l'usager.
- **Définir une option par défaut pour une liste déroulante de sélection unique** est recommandé. Si l'option par défaut est également l'option recommandée, vous pouvez marquer l'option avec le texte « (recommandé) ».

### Règles éditoriales

- **Rédiger des libellés clairs et concis** pour faciliter la compréhension des options et du choix à réaliser.
- **Évitez de proposer des options longues** , qui s'étendraient sur plusieurs lignes.

#### Contenu associé

- **[Bouton radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio)**  
  Présentation du composant Bouton radio permettant à l’usager de sélectionner une option unique parmi un ensemble limité de choix.

- **[Case à cocher](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher)**  
  Présentation du composant Case à cocher permettant à l’usager de sélectionner une ou plusieurs options dans une liste de manière indépendante.

- **[Liste déroulante](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante)**  
  Présentation du composant Liste déroulante permettant à l’usager de sélectionner une option unique parmi un ensemble de choix dans un espace limité.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante-riche/design-de-la-liste-deroulante-riche

- Bêta

> **Information**
> **Ce composant est en version bêta.** Il n'existe pas en code et son design ou ses fonctionnalités peuvent encore être amenés à évoluer. N'hésitez pas à nous partager vos cas d'usage ou retours qui le concerne via notre formulaire de contact ou notre Tchap pour que nous puissions les étudier.

Retrouvez ces composants sur Figma [dans un fichier dédié bêta disponible sur Community](https://www.figma.com/community/file/1096003483468520396) .

La liste déroulante riche est un élément d’interaction avec l’interface permettant à l’usager de choisir une ou plusieurs options dans une liste donnée.

![Anatomie de la liste déroulante riche](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/combobox/design/anatomy/anatomy-1.png)

1. Un libellé — Obligatoire
2. Une description — En option
3. Un chevron, permettant de déplier la liste — Obligatoire
4. Un bouton “Tout sélectionner” ou “Tout désélectionner” — En option
5. Un champ de recherche — En option
6. Une légende, qui peut être masquée à l’écran — En option
7. Une description du groupe, qui peut être masquée à l’écran — En option
8. Une liste, composée d’un ensemble d’options sélectionnables — Obligatoire

### Variations

La liste déroulante riche ne propose aucune variation.

### Tailles

La liste déroulante riche existe en une taille MD unique.

Les composants imbriqués à l’intérieur sont quant à eux en taille SM.

### États

**Etat d’erreur**

L'état d’erreur est signalé par un changement de couleur ainsi que l’affichage d’une ligne rouge (cf. couleurs fonctionnelles : le rouge est la couleur de l’état erreur) et d’un message d’erreur en-dessous du composant.

**Etat de succès**

L'état de succès est signalé par un changement de couleur ainsi que l’affichage d’une ligne verte (cf. couleurs fonctionnelles : le vert est la couleur de l’état succès) et d’un message de succès en-dessous du composant.

**Etat désactivé**

L'état désactivé indique que l’usager ne peux pas interagir avec la liste déroulante riche.

Cet état peut être utilisé pour empêcher l'usager d'interagir avec la liste jusqu'à ce qu'une autre action soit terminée.

### Personnalisation

La liste déroulante riche n’est pas personnalisable.

Toutefois, certains éléments sont optionnels - voir [la structure du composant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante-riche/design-de-la-liste-deroulante-riche#liste-deroulante-riche) .

#### Contenu associé

- **[Bouton radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio)**  
  Présentation du composant Bouton radio permettant à l’usager de sélectionner une option unique parmi un ensemble limité de choix.

- **[Case à cocher](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher)**  
  Présentation du composant Case à cocher permettant à l’usager de sélectionner une ou plusieurs options dans une liste de manière indépendante.

- **[Liste déroulante](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante)**  
  Présentation du composant Liste déroulante permettant à l’usager de sélectionner une option unique parmi un ensemble de choix dans un espace limité.
