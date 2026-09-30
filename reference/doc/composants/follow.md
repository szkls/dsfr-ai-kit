# Lettre d'information et Réseaux Sociaux

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lettre-d-information-et-reseaux-sociaux · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lettre-d-information-et-reseaux-sociaux/design-de-la-lettre-d-information-et-des-reseaux-sociaux · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lettre-d-information-et-reseaux-sociaux/code-de-la-lettre-d-information-et-des-reseaux-sociaux · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lettre-d-information-et-reseaux-sociaux/accessibilite-de-la-lettre-d-information-et-des-reseaux-sociaux · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lettre-d-information-et-reseaux-sociaux/demonstration-de-la-lettre-d-information-et-des-reseaux-sociaux
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

La lettre d’information et réseaux sociaux est un ensemble d’éléments d’interaction avec l’interface permettant à l’usager de s’inscrire à (aux) lettre(s) d’information proposée(s), ainsi que des liens vers les réseaux sociaux de l’entité.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lettre-d-information-et-reseaux-sociaux

### Quand utiliser ce composant ?

Proposer la lettre d’information et réseaux sociaux pour permettre à l’usager de s’inscrire à la (aux) lettre(s) d’information proposée(s) et/ou de consulter les comptes de vos réseaux sociaux.

### Comment utiliser ce composant ?

- **Intégrer le composant à l’ensemble des pages du site** , juste au-dessus du footer.

> **À faire :** Mise en situation juste au dessus du pied de page.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/follow/use/do-1.png)

### Règles éditoriales

- **Adapter le titre et la description en fonction du contexte** . Il s’agit ici de présenter la lettre d’information et la nature des contenus qu’elle traite.
- **Ajuster le texte explicatif “RGPD” sur l’utilisation des données personnelles** selon la politique de votre organisation.

#### Contenu associé

- **[Bouton](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton)**  
  Présentation du composant Bouton permettant à l’usager d’exécuter une action dans une interface numérique.

- **[Champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)**  
  Présentation du composant Champ de saisie permettant à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lettre-d-information-et-reseaux-sociaux/design-de-la-lettre-d-information-et-des-reseaux-sociaux

![Anatomie de la lettre d'information et des réseaux sociaux](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/follow/design/anatomy/anatomy-1.png)

1. Un titre pour la lettre d’information — Obligatoire
2. Une description — En option
3. Un champ d’inscription ou un bouton primaire — Obligatoire
4. Un texte explicatif — En option
5. Un titre pour les réseaux sociaux — En option
6. Un ou plusieurs bouton(s) de lien vers les réseaux sociaux — En option

### Variations

**Lettre d’information seule**

La lettre d’information seule permet uniquement à l’usager de s’inscrire à votre newsletter.

Elle est déclinée selon deux variantes :

- **Une mise en avant** avec un bouton redirigeant vers un formulaire d’inscription riche.

Utiliser la mise en avant pour les lettres d’information plus complexes qui nécessitent de recueillir plusieurs informations.

La description qui accompagne le titre du bloc sert à présenter la newsletter et le bouton redirige vers le formulaire d’inscription.

- **Un formulaire d’inscription** qui intègre directement un champ de saisie d’e-mail pour s’inscrire depuis le pied de page.

Utiliser le formulaire d’inscription pour les lettres d’information simples qui nécessitent de recueillir uniquement l’adresse mail et le consentement de l’usager.

La description qui accompagne le titre du bloc sert à présenter la newsletter.

Les mentions pour obtenir le consentement et les indications pour la désinscription sont à adapter en fonction des cas de figure.

Cette variante peut également servir à pré-saisir l’adresse mail de l’utilisateur pour ensuite renvoyer vers un formulaire plus détaillé, au clic sur le bouton.

**Réseaux sociaux seuls**

Les réseaux sociaux seuls permettent à l’usager d’accéder aux comptes de vos réseaux sociaux.

**Lettre d’information et réseaux sociaux**

Lorsque les deux éléments sont proposés, ils s’affichent l’un à coté de l’autre.

Il est possible d’utiliser les différentes déclinaisons de la lettre d’information (formulaire ou mise en avant).

- Formulaire d’inscription à la lettre d’information et réseaux sociaux

- Mise en avant de la lettre d’information et réseaux sociaux

### Tailles

La lettre d’information et réseaux sociaux a une largeur fixe, non personnalisable, quelle que soit la variation choisie.

### États

La gestion des messages d'erreur lors de la soumission du formulaire d’inscription suit les mêmes états que le composant [champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie) .

Utiliser le composant alerte pour indiquer le succès de l’inscription.

### Personnalisation

La lettre d’information et réseaux sociaux n’est pas personnalisable.

Toutefois, certains éléments sont optionnels - voir [la structure du composant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lettre-d-information-et-reseaux-sociaux/design-de-la-lettre-d-information-et-des-reseaux-sociaux#lettre-d-information-et-reseaux-sociaux) .

#### Contenu associé

- **[Bouton](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton)**  
  Présentation du composant Bouton permettant à l’usager d’exécuter une action dans une interface numérique.

- **[Champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)**  
  Présentation du composant Champ de saisie permettant à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lettre-d-information-et-reseaux-sociaux/code-de-la-lettre-d-information-et-des-reseaux-sociaux

### HTML

Le composant **Lettre d'information et Réseaux Sociaux** est composé de :

- Un conteneur `<div` de classe `fr-follow` pour l'ensemble du composant avec à l'intérieur une grille d'une ou deux colonnes.
  - Un bloc `fr-follow__newsletter` pour la newsletter contenant :
    - Un élément `<div>` avec un titre `<h2>`de classe `fr-h5` et une description `<p class="fr-text--sm">`.
    - Un second élément `<div>` contenant :
      - Soit un formulaire `<form>` avec un champ de saisie de type `email`, un bouton, et un texte de description additionnelle.
      - Soit un bouton "S'abonner" qui ouvre une modale ou execute un script.
      - Une fois la souscription effectuée, une alerte de confirmation `fr-alert fr-alert--success` remplace le formulaire ou le bouton.
  - Et/ou un bloc `fr-follow__social` pour les réseaux sociaux contenant :
    - Un titre `<h2>` de classe `fr-h5`.
    - Un groupe de boutons de réseaux sociaux :
      - Les boutons sont des liens `<a>` avec une classe `fr-btn` et une classe `fr-btn--NOM-RESEAU`.

**Exemple de structure HTML complète**

#### Déplier pour voir le code

```html
<div class="fr-follow">
    <div class="fr-container">
        <div class="fr-grid-row">
            <div class="fr-col-12 fr-col-md-8">
                <div class="fr-follow__newsletter">
                    <div>
                        <h2 class="fr-h5">Abonnez-vous à notre lettre d’information</h2>
                        <p class="fr-text--sm">Lorem ipsum (...) finibus et.</p>
                    </div>
                    <div>
                        <form action="">
                            <div class="fr-input-group">
                                <label class="fr-label" for="newsletter-email">
                                    Votre adresse électronique (ex. : nom@example.com)
                                </label>
                                <div class="fr-input-wrap fr-input-wrap--addon">
                                    <input class="fr-input" title="Votre adresse électronique (ex. : nom@example.com)" autocomplete="email" aria-describedby="newsletter-email-hint-text newsletter-email-messages" placeholder="Votre adresse électronique (ex. : nom@example.com)" id="newsletter-email" type="email">
                                    <button title="S‘abonner à notre lettre d’information" type="button" class="fr-btn">S'abonner</button>
                                </div>
                                <div class="fr-messages-group" id="newsletter-email-messages" aria-live="polite">
                                </div>
                            </div>
                            <p id="newsletter-email-hint-text" class="fr-hint-text">En renseignant votre adresse électronique, vous acceptez de recevoir nos actualités par courriel. Vous pouvez vous désinscrire à tout moment à l’aide des liens de désinscription ou en nous contactant.</p>
                        </form>
                    </div>
                </div>
            </div>
            <div class="fr-col-12 fr-col-md-4">
                <div class="fr-follow__social">
                    <h2 class="fr-h5">Suivez-nous<br> sur les réseaux sociaux</h2>
                    <ul class="fr-btns-group">
                        <li>
                            <a title="[À MODIFIER - Intitulé du lien] - nouvelle fenêtre" href="[À MODIFIER - Lien vers le facebook de l'organisation]" target="_blank" rel="noopener external" class="fr-btn--facebook fr-btn">Facebook</a>
                        </li>
                        <li>
                            <a title="[À MODIFIER - Intitulé du lien] - nouvelle fenêtre" href="[À MODIFIER - Lien vers le twitter de l'organisation]" target="_blank" rel="noopener external" class="fr-btn--twitter-x fr-btn">X (anciennement Twitter)</a>
                        </li>
                        <li>
                            <a title="[À MODIFIER - Intitulé du lien] - nouvelle fenêtre" href="[À MODIFIER - Lien vers le linkedin de l'organisation]" target="_blank" rel="noopener external" class="fr-btn--linkedin fr-btn">Linkedin</a>
                        </li>
                        <li>
                            <a title="[À MODIFIER - Intitulé du lien] - nouvelle fenêtre" href="[À MODIFIER - Lien vers l'instagram de l'organisation]" target="_blank" rel="noopener external" class="fr-btn--instagram fr-btn">Instagram</a>
                        </li>
                        <li>
                            <a title="[À MODIFIER - Intitulé du lien] - nouvelle fenêtre" href="[À MODIFIER - Lien vers le youtube de l'organisation]" target="_blank" rel="noopener external" class="fr-btn--youtube fr-btn">Youtube</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
```

**Exemple de bloc newsletter avec bouton**

#### Déplier pour voir le code

```html
<div class="fr-follow__newsletter">
    <div>
        <h2 class="fr-h5">Abonnez-vous à notre lettre d’information</h2>
        <p class="fr-text--sm">Lorem ipsum (...) finibus et.</p>
    </div>
    <div>
        <div class="fr-btns-group fr-btns-group--inline-md">
            <button title="S‘abonner à notre lettre d’information" type="button" class="fr-btn">S'abonner</button>
        </div>
    </div>
</div>
```

**Exemple de bloc newsletter avec confirmation**

#### Déplier pour voir le code

```html
<div class="fr-follow__newsletter">
    <div>
        <h2 class="fr-h5">Abonnez-vous à notre lettre d’information</h2>
        <p class="fr-text--sm">Lorem ipsum (...) finibus et.</p>
    </div>
    <div>
        <div class="fr-alert fr-alert--success">
            <p>Votre inscription a bien été prise en compte.</p>
        </div>
    </div>
</div>
```

> **Information**
> Si vous souhaitez n'utiliser qu'un seul bloc (newsletter ou réseaux sociaux), vous pouvez retirer le bloc inutilisé en retirant la colone de la grille correspondant. La colone restante doit prendre la classe `fr-col-12`.

---

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](https://www.systeme-de-design.gouv.fr/version-courante/fr/premiers-pas/vous-etes-developpeur/prise-en-main#les-css) .

**Dépendances CSS**

| Dépendance | Obligatoire | Remarque |
|---|---|---|
| Core | Oui |  |
| Button | Oui |  |
| Follow | Oui |  |
| Form | Non | Uniquement pour la variation avec champ de saisie |
| Input | Non | Uniquement pour la variation avec champ de saisie |
| Alert | Non | Uniquement pour ajouter une alerte de confirmation |
| Utility | Non | Uniquement pour l'ajout d'icône custom |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/button/button.min.css" rel="stylesheet">
<link href="dist/component/follow/follow.min.css" rel="stylesheet">
```

#### Icônes des réseaux sociaux

Les variantes de boutons avec icônes de réseaux sociaux sont intégrées dans le composant. Les classes suivantes sont disponibles :

- `fr-btn--bluesky` : Bluesky.
- `fr-btn-dailymotion` : Dailymotion.
- `fr-btn--facebook` : Facebook.
- `fr-btn--github` : GitHub.
- `fr-btn--instagram` : Instagram.
- `fr-btn--linkedin` : Linkedin.
- `fr-btn--mastodon` : Mastodon.
- `fr-btn--snapchat` : Snapchat.
- `fr-btn--telegram` : Telegram.
- `fr-btn--threads` : Threads.
- `fr-btn--tiktok` : TikTok.
- `fr-btn--twitch` : Twitch.
- `fr-btn--twitter` : Twitter (déprécié).
- `fr-btn--twitter-x` : X (anciennement Twitter).
- `fr-btn--vimeo` : Viméo.
- `fr-btn--youtube` : Youtube.

La liste des variantes de boutons réseaux-sociaux est définie dans le fichier : `src/component/share/style/_setting.scss`

> **Information**
> Ces classes sont des raccourcis, il est aussi possible d'utiliser les [classes utilitaires d'icônes](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/icone) . Préférez l'utilisation des formats "fill" dans les boutons. Par exemple : `fr-icon-rss-fill` pour un flux RSS.

---

### JavaScript

Le composant Lettre d'information et Réseaux Sociaux **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

La souscription à la Lettre d'information doit être gérée par le développeur.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+follow+)

#### [v1.13.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.13.1) - 26 mars 2025

- **[ajout icone bluesky](https://github.com/GouvernementFR/dsfr/pull/1096)**  
  #1096  
  ✨ feat  
  icon share follow

#### [v1.11.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.1) - 31 janvier 2024

- **[retrait d'un fichier inutile](https://github.com/GouvernementFR/dsfr/pull/858)**  
  #858  
  🐛 fix  
  follow

#### [v1.11.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.0) - 11 décembre 2023

- **[icône twitter-x par défaut](https://github.com/GouvernementFR/dsfr/pull/824)**  
  #824  
  - mise en place de l'icône X pour Twitter, avec changement du title pour "X (anciennement Twitter)" sur les composants follow et share  
  ✨ feat  
  follow share

- **[corrige affichage](https://github.com/GouvernementFR/dsfr/pull/781)**  
  #781  
  - inverse l'ordre des boutons "Instagram" et "LinkedIn"
- supprime les margin left et right du groupe de boutons
- place le bouton d'action dans un groupe de bouton fr-btns-group--inline-md sur les exemples "Lettre d'info seule" et "Réseaux sociaux et Lettre d'info mise en avant" pour que le bouton prenne l’ensemble de la largeur en vue mobile.  
  🐛 fix  
  follow

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

- **[orthographe message de confirmation](https://github.com/GouvernementFR/dsfr/pull/714)**  
  #714  
  🐛 fix  
  follow

- **[ajoute d'exemple](https://github.com/GouvernementFR/dsfr/pull/675)**  
  #675  
  - Ajout de l'exemple de succès à l'abonnement à la lettre d'information  
  🐛 fix  
  follow

#### [v1.6.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.6.0) - 14 juin 2022

- **[ajout texte explicatif icones RS disponibles](https://github.com/GouvernementFR/dsfr/pull/331)**  
  #331  
  fix  
  follow share

- **[ajout icones réseau sociaux](https://github.com/GouvernementFR/dsfr/pull/324)**  
  #324  
  fix  
  share follow

- **[correctif de la version legacy deprecated](https://github.com/GouvernementFR/dsfr/pull/326)**  
  #326  
  fix  
  follow

- **[correction espacements des groupes](https://github.com/GouvernementFR/dsfr/pull/311)**  
  #311  
  refactor  
  header link button follow share tag badge

- **[correction link icon déprecié](https://github.com/GouvernementFR/dsfr/pull/306)**  
  #306  
  fix  
  follow

#### [v1.4.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.4.1) - 29 mars 2022

- **[correction de la dépréciation pour être plus générique](https://github.com/GouvernementFR/dsfr/pull/257)**  
  #257  
  fix  
  follow

#### [v1.4.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.4.0) - 16 mars 2022

- **[retours dépréciation](https://github.com/GouvernementFR/dsfr/pull/241)**  
  #241  
  fix  
  header follow content

#### [v1.3.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.3.0) - 18 janvier 2022

- **[texte d'erreur email & centrage alignement icône erreur/valid](https://github.com/GouvernementFR/dsfr/pull/186)**  
  #186  
  fix  
  follow

#### [v1.1.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.1.0) - 27 juillet 2021

- **[séparateur en box shadow](https://github.com/GouvernementFR/dsfr/pull/29)**  
  #29  
  fix  
  follow

- **[corrections et nouveau nom composant](https://github.com/GouvernementFR/dsfr/pull/28)**  
  #28  
  fix  
  follow

##### Contenu associé

- **[Bouton](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton)**  
  Présentation du composant Bouton permettant à l’usager d’exécuter une action dans une interface numérique.

- **[Champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)**  
  Présentation du composant Champ de saisie permettant à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lettre-d-information-et-reseaux-sociaux/accessibilite-de-la-lettre-d-information-et-des-reseaux-sociaux

Le composant **Lettre d’information et Réseaux Sociaux** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

L’ensembles des règles d'accessibilité des [liens](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie/accessibilite-du-champ-de-saisie) , des [boutons](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton/accessibilite-du-bouton) et des [champs de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie/accessibilite-du-champ-de-saisie) doivent être respectées.

#### Liens réseaux sociaux

- Les liens des réseaux sociaux doivent être structurés dans une liste.
- Pour expliciter les liens-icônes, ajouter un attribut `title` sur le lien.

#### Lettre d’information

- Le `<label>` du champ de saisie de la newsletter doit être présent, même s'il est masqué visuellement.
- Un attribut `title` sur l'`<input>` explicite la fonction du champ.

### Contrastes de couleurs

Le composant est suffisamment contrasté en thème clair et en thème sombre.

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Lettre d’information et Réseaux Sociaux.

---

### Critères RGAA applicables

- **Couleurs :** 3.2, 3.3
- **Liens :** 6.1, 6.2
- **Scripts :** 7.1, 7.3, 7.5
- **Éléments obligatoires :** 8.9
- **Structuration :** 9.1, 9.3
- **Présentation de l’information :** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Formulaires :** 11.1, 11.2, 11.9, 11.10, 11.11, 11.13
- **Navigation :** 12.8, 12.9
- **Consultation :** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)

##### Contenu associé

- **[Bouton](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton)**  
  Présentation du composant Bouton permettant à l’usager d’exécuter une action dans une interface numérique.

- **[Champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)**  
  Présentation du composant Champ de saisie permettant à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lettre-d-information-et-reseaux-sociaux/demonstration-de-la-lettre-d-information-et-des-reseaux-sociaux

#### Contenu associé

- **[Bouton](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton)**  
  Présentation du composant Bouton permettant à l’usager d’exécuter une action dans une interface numérique.

- **[Champ de saisie](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)**  
  Présentation du composant Champ de saisie permettant à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.
