# En-tête connectée

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete-connectee · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete-connectee/design-de-l-en-tete-connectee
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete-connectee

- Bêta

> **Information**
> **Ce composant est en version bêta.** Il n'existe pas en code et son design ou ses fonctionnalités peuvent encore être amenés à évoluer. N'hésitez pas à nous partager vos cas d'usage ou retours qui le concerne via notre formulaire de contact ou notre Tchap pour que nous puissions les étudier.

Retrouvez ces composants sur Figma [dans un fichier dédié bêta disponible sur Community](https://www.figma.com/community/file/1096003483468520396) .

L’en-tête connectée est une déclinaison de l’en-tête et propose un menu déroulant contenant des options parmi lesquelles un usager peut naviguer vers les pages liées à son compte.

Un texte de description est présent dans le conteneur, indiquant les nom, prénom et adresse email de l’usager et est accompagné d’un bouton de déconnexion.

![](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/user/presentation/presentation-1.png)

### Quand utiliser ce composant ?

Utiliser l’en-tête connectée pour permettre à l’usager d’avoir des informations sur son compte, pour grouper des actions ou des liens de navigation.

Le menu déroulant dans l’en-tête est présent lorsque l’usager s’est connecté sur une page dédiée.

### Comment utiliser ce composant ?

- **Utiliser l’en-tête connectée pour grouper des liens de navigation** vers des pages internes de l’usager.
- **Utiliser l’en-tête connectée uniquement si la place disponible permet d’accueillir le bouton du menu déroulant** . Il est recommandé de ne pas la cumuler avec un grand nombre de liens d’accès rapide ou en présence du bouton des paramètres d’affichage.

> **À faire :** Positionner l’en-tête connectée à l’emplacement d’un des accès rapide.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/user/use/do-1.png)

> **À ne pas faire :** Ne pas proposer l’en-tête connectée en dehors des accès rapides
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/user/use/dont-1.png)

- **Conserver un fonctionnement simple** . N'imbriquer pas de menus déroulants, par exemple.

### Règles éditoriales

- **Utiliser des libellés courts, concis et faciles à comprendre** .
- **Eviter de proposer des options qui s’étendent sur plusieurs lignes** .

#### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete-connectee/design-de-l-en-tete-connectee

- Bêta

> **Information**
> **Ce composant est en version bêta.** Il n'existe pas en code et son design ou ses fonctionnalités peuvent encore être amenés à évoluer. N'hésitez pas à nous partager vos cas d'usage ou retours qui le concerne via notre formulaire de contact ou notre Tchap pour que nous puissions les étudier.

Retrouvez ces composants sur Figma [dans un fichier dédié bêta disponible sur Community](https://www.figma.com/community/file/1096003483468520396) .

L’en-tête connectée est une déclinaison de l’en-tête et propose un menu déroulant contenant des options parmi lesquelles un usager peut naviguer vers les pages liées à son compte.

Un texte de description est présent dans le conteneur, indiquant les nom, prénom et adresse email de l’usager et est accompagné d’un bouton de déconnexion.

![Anatomie de l'entête connectée](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/user/design/anatomy/anatomy-1.png)

1. Un bouton tertiaire, en taille SM uniquement, avec ou sans contour — Obligatoire
2. Une icône, placée à gauche du libellé — En option
3. Un libellé de bouton orienté utilisateur — Obligatoire
4. Un chevron, placé à droite du libellé — Obligatoire
5. Un libellé et un texte de description de l’utilisateur — En option
6. Une liste de liens de navigation — Obligatoire
7. Un bouton de déconnexion — En option

Le menu déroulant n’a pas vocation à remplacer ou refléter l’intégralité du contenu lié au compte ou aux informations personnelles. Veillez à respecter les catégories déjà présentes et ne pas dépasser 6 entrées.

### Variations

L’en-tête connectée ne propose aucune variation.

### Tailles

L’en-tête connectée propose une taille SM uniquement.

### États

**État au survol**

L’état au survol correspond au comportement constaté par l’usager lorsqu’il survole l’en-tête connecté avec sa souris.

**État au clic**

L’état au clic correspond au comportement constaté par l’usager lorsqu’il clique sur l’en-tête connectée.

### Personnalisation

L’en-tête connectée n’est pas personnalisable.

- Ne pas personnaliser l’icône.
- Ne pas personnaliser le libellé et le texte de description relatif à l’utilisateur.
- Ne pas personnaliser le bouton de déconnexion.

#### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.
