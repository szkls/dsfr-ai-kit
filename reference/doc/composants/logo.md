# Bloc marque

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bloc-marque · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bloc-marque/design-du-bloc-marque · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bloc-marque/code-du-bloc-marque · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bloc-marque/accessibilite-du-bloc-marque · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bloc-marque/demonstration-du-bloc-marque
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bloc-marque

Page en cours de création...

#### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.

- **[Pied de page](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page)**  
  Présentation du composant Pied de page destiné à structurer les informations complémentaires et les liens secondaires en bas de page.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bloc-marque/design-du-bloc-marque

Page en cours de création...

#### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.

- **[Pied de page](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page)**  
  Présentation du composant Pied de page destiné à structurer les informations complémentaires et les liens secondaires en bas de page.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bloc-marque/code-du-bloc-marque

### HTML

Le **Bloc marque** de l'état est constitué d'un bloc Marianne, d'un intitulé officiel, et de la devise républicaine. Le bloc Marianne et la devise républicaine sont ajouté automatiquement par le composant. Le composant est composé d'un élément `<p>` avec la classe `.fr-logo`. Seul l'intitulé officiel doit être ajouté dans cet élément.

**Exemple de structure HTML**

```html
<p class="fr-logo">
    Intitulé
    <br>officiel
</p>
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
| Logo | Oui |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/logo/logo.min.css" rel="stylesheet">
```

#### Variantes de taille

Le composant Bloc marque (logo) est disponible en 3 tailles différentes via les classes suivantes :

- Par défaut : Taille `medium`
- `fr-logo--sm` : Taille `small`
- `fr-logo--lg` : Taille `large`

```html
<p class="fr-logo fr-logo--sm">
    Intitulé
    <br>officiel
</p>

<p class="fr-logo fr-logo--lg">
    Intitulé
    <br>officiel
</p>
```

---

### JavaScript

Le composant Bloc marque **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

Un Javascript disponible dans le **core** permet de gérer le passage **en berne** des blocs marque lors des périodes de deuil national. Le fond bleu et rouge du bloc Marianne est alors remplacé par un fond noir.

#### Installation du JavaScript

Pour faire fonctionner la fonction de passage des blocs marque en berne, le script JavaScript du core doit être importé. L'import doit se faire en fin de page, avant la fermeture du body, et de préférence avec le fichier minifié, car plus léger.

```html
<script type="module" src="dist/core/core.module.min.js"></script>
```

NB : Il est aussi possible d'importer le JavaScript global du DSFR `dsfr.module.min.js`.

Pour fonctionner sur Internet Explorer 11, un fichier legacy peut aussi être importé :

```html
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
```

#### Utilisation du JavaScript

Le script permet de passer les blocs marque en berne lors des deuils nationaux. Pour cela, il suffit d'ajouter l'attribut `data-fr-mourning` sur l'élément `<html>`.

```html
<html lang="fr" data-fr-mourning>
```

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+logo+)

#### [v1.11.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.0) - 11 décembre 2023

- **[intitulé et motto en noir absolu](https://github.com/GouvernementFR/dsfr/pull/738)**  
  #738  
  - intitulé et moto en noir absolu
- ajout token absolute black  
  🐛 fix  
  logo

#### [v1.3.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.3.0) - 18 janvier 2022

- **[modifie l'intitulé par défaut](https://github.com/GouvernementFR/dsfr/pull/165)**  
  #165  
  feat  
  logo

#### [v1.2.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.2.0) - 17 novembre 2021

- **[correction blue-france & mourning](https://github.com/GouvernementFR/dsfr/pull/99)**  
  #99  
  fix  
  logo

##### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.

- **[Pied de page](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page)**  
  Présentation du composant Pied de page destiné à structurer les informations complémentaires et les liens secondaires en bas de page.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bloc-marque/accessibilite-du-bloc-marque

Le bloc marque est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction spécifique n’est associée au bloc marque.

### Règles d’accessibilité

Les logos doivent être accessibles pour tous les utilisateurs, y compris ceux utilisant des technologies d'assistance. Voici quelques recommandations :

- Utiliser l’élément HTML `<p>` ou un niveau de titre `<h1>` à `<h6>` pour décrire l’intitulé officiel.
- Un lien est généralement ajouté autour du bloc marque pour permettre à l'utilisateur de naviguer vers la page d'accueil du site.
  - Dans ce cas, l’attribut `title` doit être utilisé pour décrire la destination du lien.
  - Lorsqu’un logo opérateur est présent à côté du bloc marque, le lien doit être placé autour du logo opérateur et étendu, avec la classe `fr-enlarge-link`, à toute la zone contenant le logo opérateur et le bloc marque.

---

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Bloc marque.

---

### Critères RGAA applicables

- **Couleurs :** 3.2
- **Liens :** 6.1, 6.2
- **Éléments obligatoires :** 8.9
- **Structuration :** 9.1
- **Présentation de l’information :** 10.1, 10.2, 10.4, 10.5, 10.11, 10.12
- **Navigation :** 12.8, 12.9
- **Consultation :** 13.9

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Le bloc-marque](https://www.info.gouv.fr/marque-de-letat/le-bloc-marque)

#### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.

- **[Pied de page](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page)**  
  Présentation du composant Pied de page destiné à structurer les informations complémentaires et les liens secondaires en bas de page.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bloc-marque/demonstration-du-bloc-marque

*(Démonstration interactive « logo--docs » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=logo--docs&nav=0&globals=theme%3Alight)*

#### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.

- **[Pied de page](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page)**  
  Présentation du composant Pied de page destiné à structurer les informations complémentaires et les liens secondaires en bas de page.
