# Gestionnaire de consentement

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/gestionnaire-de-consentement · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/gestionnaire-de-consentement/design-du-gestionnaire-de-consentement · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/gestionnaire-de-consentement/code-du-gestionnaire-de-consentement · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/gestionnaire-de-consentement/accessibilite-du-gestionnaire-de-consentement · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/gestionnaire-de-consentement/demonstration-du-gestionnaire-de-consentement
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

Le gestionnaire de consentement permet à l'usager de définir ses préférences sur l'utilisation de ses données personnelles, notamment le dépôt de cookies non fonctionnels dans son navigateur.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/gestionnaire-de-consentement

*(Démonstration interactive « consent--consent-banner » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=consent--consent-banner&nav=0&globals=theme%3Alight)*

### Quand utiliser ce composant ?

**Intégrer un gestionnaire de consentement est une obligation** pour l’ensemble des sites dès lors qu’ils déposent ou lisent des cookies non essentiels.

Toutefois, le DSFR ne contraint pas l’utilisation de son composant natif. Il est par exemple possible d’intégrer l’extension Tarte au Citron, référencée dans [les extensions du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/communaute/extensions-du-dsfr) .

### Comment utiliser ce composant ?

- **Afficher le bandeau à l’arrivée sur le site** pour permettre le recueil du consentement des usagers dès le début de leur navigation.
- **Ferrer le bandeau en bas à gauche de la fenêtre du navigateur, en desktop, et en bas, en mobile.** Lorsque la hauteur maximum du bandeau est atteinte, dans le cas d’un texte explicatif long, un scroll vertical apparait sur l’ensemble du bandeau permettant à l’usager de prendre connaissance de la totalité du message avant de faire son choix.
- **Permettre l’obtention du consentement de manière globale (tout accepter ou tout refuser) ou par finalité et sous-finalité (accepter ou refuser)** .
- **Utiliser la modale de gestion du consentement pour lister les cookies par finalité** et ainsi permettre à l’usager de gérer son consentement de façon granulaire (au clic sur le bouton “Personnaliser”).
- **Proposer des sous-finalités pour présenter le détail des partenaires associés à chaque finalité.**
- **Rendre la modale de gestion du consentement accessible à n’importe quel moment de la navigation de l’usager** . Pour ce faire, un lien permettant d’y accéder doit toujours être présent dans le pied de page.

### Règles éditoriales

Pour les éléments de contenus obligatoires à afficher au sein du gestionnaire de consentement, et la présentation des finalités, [consultez les directives CNIL](https://www.cnil.fr/fr/questions-reponses-lignes-directrices-modificatives-et-recommandation-cookies-traceurs) .

#### Contenu associé

- **[Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale)**  
  Présentation du composant Modale permettant de focaliser l’attention de l’usager sur une tâche ou une information sans quitter la page.

- **[Paramètres d'affichage](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/parametres-d-affichage)**  
  Présentation du composant Paramètres d’affichage permettant à l’usager de modifier le thème visuel d’un site entre mode clair et mode sombre.

- **[Pied de page](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page)**  
  Présentation du composant Pied de page destiné à structurer les informations complémentaires et les liens secondaires en bas de page.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/gestionnaire-de-consentement/design-du-gestionnaire-de-consentement

![Anatomie du gestionnaire de consentement](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/consent/design/anatomy/anatomy-1.png)

1. Un titre — Obligatoire
2. Une description, contenant un texte explicatif — Obligatoire
3. Un bouton “Personnaliser”, qui ouvre la modale de gestion du consentement — Obligatoire
4. Des bouton “Tout refuser” et “Tout accepter”, qui ferment le bandeau et enregistrent le choix de l’usager — Obligatoire
5. Un bouton “Fermer”, permettant de fermer la modale — Obligatoire
6. Un titre de modale — Obligatoire
7. Des boutons radio “Tout accepter” et “Tout refuser” — Obligatoire
8. Un libellé, pour chacune des finalités listée — Obligatoire
9. Une description, recommandée pour apporter des précisions sur la finalité — En option
10. Des boutons radio “Accepter” et “Refuser” — Obligatoire
11. Un séparateur — Obligatoire
12. Un dépliant “Voir plus de détails”, permettant d’afficher les sous-finalités associées — Obligatoire
13. Un libellé, pour chacune des sous-finalités listée — Obligatoire
14. Une description, recommandée pour apporter des précisions sur la sous-finalité — En option
15. Un bouton de confirmation — Obligatoire

### Variations

Le gestionnaire de consentement ne propose aucune variation.

### Tailles

Le gestionnaire de consentement propose une taille fixe.

### États

**Services désactivés**

Le refus sur certains cookies peut amener le blocage de certaines fonctionnalités, notamment les services tiers affichés dans les pages du site via une iFrame, comme les lecteurs vidéo, par exemple.

Dans ce cas, il faut désactiver le service et afficher un texte d’information accompagné d'un lien permettant de consentir au service.

### Personnalisation

Le gestionnaire de consentement n’est pas personnalisable.

La place du bandeau, les styles et l’ordre des boutons ne peuvent pas être modifiés. Seul le texte est à adapté en fonction du contexte.

Par ailleurs, certains éléments sont optionnels - voir [la structure du composant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/gestionnaire-de-consentement/design-du-gestionnaire-de-consentement#gestionnaire-de-consentement) .

#### Contenu associé

- **[Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale)**  
  Présentation du composant Modale permettant de focaliser l’attention de l’usager sur une tâche ou une information sans quitter la page.

- **[Paramètres d'affichage](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/parametres-d-affichage)**  
  Présentation du composant Paramètres d’affichage permettant à l’usager de modifier le thème visuel d’un site entre mode clair et mode sombre.

- **[Pied de page](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page)**  
  Présentation du composant Pied de page destiné à structurer les informations complémentaires et les liens secondaires en bas de page.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/gestionnaire-de-consentement/code-du-gestionnaire-de-consentement

### HTML

Le composant **Gestionnaire de consentement** est composé de trois éléments principaux :

- Un bandeau de cookies.
- Une modale de gestion des cookies.
- Un placeholder pour les contenus masqués.

#### Structure du bandeau de cookies

Le bandeau de cookies est composé des éléments suivants :

- Un élément `<div>` avec la classe `fr-consent-banner` pour le conteneur du bandeau.
- Un titre contenu dans un élément `<h2>`, ou autre en fonction du contexte, avec la classe `.fr-h6`.
- Un bloc de contenu `fr-consent-banner__content`. Le texte doit être contenu dans un élément `<p>`. L'utilisation de la classe utilitaire `.fr-text--sm` permet de réduire la taille du texte.
- Un groupe de boutons `fr-consent-banner__buttons`.
  - Nous préconisons l'utilisation d'un groupe de bouton "inline" à partir du breakpoint SM, aligné à droite, et inversé à partir du breakpoint SM. Voir la documentation sur les [boutons](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton/code-du-bouton) pour plus d'informations.
  - Utilisez des boutons primaires pour accepter et refuser les cookies, et un bouton secondaire pour personnaliser les cookies.
  - Le bouton de personnalisation doit être associé à une modale de gestion des cookies.

**Exemple de structure de bandeau**

```html
<div class="fr-consent-banner">
    <h2 class="fr-h6">À propos des cookies sur nomdusite.gouv.fr</h2>
    <div class="fr-consent-banner__content">
        <p class="fr-text--sm">Bienvenue ! Nous utilisons des cookies pour améliorer votre expérience et les services disponibles sur ce site. Pour en savoir plus, visitez la page <a href="">Données personnelles et cookies</a>. Vous pouvez, à tout moment, avoir le contrôle sur les cookies que vous souhaitez activer.</p>
    </div>
    <ul class="fr-consent-banner__buttons fr-btns-group fr-btns-group--right fr-btns-group--inline-reverse fr-btns-group--inline-sm">
        <li>
            <button class="fr-btn" title="Autoriser tous les cookies">
                Tout accepter
            </button>
        </li>
        <li>
            <button class="fr-btn" title="Refuser tous les cookies">
                Tout refuser
            </button>
        </li>
        <li>
            <button class="fr-btn fr-btn--secondary" data-fr-opened="false" aria-controls="consent-modal" title="Personnaliser les cookies">
                Personnaliser
            </button>
        </li>
    </ul>
</div>
```

#### Structure de la modale de gestion des cookies

La modale de gestion des cookies est composée des éléments suivants :

- Une modale de taille LG (voir la documentation sur les [modales](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale/code-de-la-modale) ) contenant un bouton de fermeture, un titre et un bloc de contenu `fr-consent-manager`. Ce bloc contient :
  - Une liste de services de cookies, chaque service étant représenté par un élément `<div>` avec la classe `fr-consent-service`.
    - Le premier bloc service permet d'activer ou désactiver tous les services. Nous ajouterons ici une classe `fr-consent-manager__header` pour le style de la légende. Les libellés des boutons radios seront "Tout accepter" et "Tout refuser".
    - Le second élément correspond aux services essentiels, qui ne peuvent pas être désactivés. Le bloc contient fieldset avec une légende, une description et deux boutons radio. Le bouton radio "Accepter" est coché par défaut, et le bouton "Refuser" est désactivé.
    - Pour chaque services non essentiels, un fieldset `fr-fieldset` avec une légende `fr-consent-service__title`, deux boutons radio dans un conteneur `fr-consent-service__radios`, une description `fr-consent-service__desc` et un dépliant "Voir plus de détails" permettant d'ouvrir un collapse.
      - A l'intérieur de ce collapse, on retrouve une liste de sous finalités du service, avec pour chacune un bouton "Accepter" et un bouton "Refuser", et optionnellement une description.
  - Un groupe de boutons `fr-consent-manager__buttons` alignés à droite et en ligne à partir du breakpoint SM :
    - Ce groupe ne contient qu'un seul bouton, primaire, pour enregistrer les préférences. On utilise le groupe pour ces fonctionnalités de positionnement.

**Exemple de structure de modale de gestion des cookies**

#### Déplier pour voir le code

```html
<dialog id="consent-modal" class="fr-modal" aria-labelledby="fr-consent-modal-title">
    <div class="fr-container fr-container--fluid fr-container-md">
        <div class="fr-grid-row fr-grid-row--center">
            <div class="fr-col-12 fr-col-md-10 fr-col-lg-8">
                <div class="fr-modal__body">
                    <div class="fr-modal__header">
                        <button aria-controls="fr-consent-modal" title="Fermer" type="button" id="button-4103" class="fr-btn--close fr-btn">Fermer</button>
                    </div>
                    <div class="fr-modal__content">
                        <h1 id="fr-consent-modal-title" class="fr-modal__title">
                            Panneau de gestion des cookies
                        </h1>
                        <div class="fr-consent-manager">
                            <!-- Finalités -->
                            <div class="fr-consent-service fr-consent-manager__header">
                                <fieldset class="fr-fieldset">
                                    <legend id="finality-legend" class="fr-consent-service__title">Préférences pour tous les services. <a href="">Données personnelles et cookies</a>
                                    </legend>
                                    <div class="fr-consent-service__radios">
                                        <div class="fr-radio-group">
                                            <input type="radio" id="consent-all-accept" name="consent-all">
                                            <label class="fr-label" for="consent-all-accept">
                                                Tout accepter
                                            </label>
                                        </div>
                                        <div class="fr-radio-group">
                                            <input type="radio" id="consent-all-refuse" name="consent-all">
                                            <label class="fr-label" for="consent-all-refuse">
                                                Tout refuser
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <div class="fr-consent-service">
                                <fieldset aria-labelledby="finality-0-legend finality-0-desc" role="group" class="fr-fieldset">
                                    <legend id="finality-0-legend" class="fr-consent-service__title">Cookies obligatoires</legend>
                                    <div class="fr-consent-service__radios">
                                        <div class="fr-radio-group">
                                            <input checked type="radio" id="consent-finality-0-accept" name="consent-finality-0">
                                            <label class="fr-label" for="consent-finality-0-accept">
                                                Accepter
                                            </label>
                                        </div>
                                        <div class="fr-radio-group">
                                            <input disabled type="radio" id="consent-finality-0-refuse" name="consent-finality-0">
                                            <label class="fr-label" for="consent-finality-0-refuse">
                                                Refuser
                                            </label>
                                        </div>
                                    </div>
                                    <p id="finality-0-desc" class="fr-consent-service__desc">Ce site utilise des cookies nécessaires à son bon fonctionnement qui ne peuvent pas être désactivés.</p>
                                </fieldset>
                            </div>
                            <div class="fr-consent-service">
                                <fieldset aria-labelledby="finality-1-legend finality-1-desc" role="group" class="fr-fieldset">
                                    <legend id="finality-1-legend" class="fr-consent-service__title">Nom de la finalité</legend>
                                    <div class="fr-consent-service__radios">
                                        <div class="fr-radio-group">
                                            <input type="radio" id="consent-finality-1-accept" name="consent-finality-1">
                                            <label class="fr-label" for="consent-finality-1-accept">
                                                Accepter
                                            </label>
                                        </div>
                                        <div class="fr-radio-group">
                                            <input type="radio" id="consent-finality-1-refuse" name="consent-finality-1">
                                            <label class="fr-label" for="consent-finality-1-refuse">
                                                Refuser
                                            </label>
                                        </div>
                                    </div>
                                    <p id="finality-1-desc" class="fr-consent-service__desc">Description optionnelle de la finalité, lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in suscipit nulla, et pulvinar velit.</p>
                                    <div class="fr-consent-service__collapse">
                                        <button type="button" class="fr-consent-service__collapse-btn" aria-expanded="false" aria-describedby="finality-1-legend" aria-controls="finality-1-collapse"> Voir plus de détails</button>
                                    </div>
                                    <div class="fr-consent-services fr-collapse" id="finality-1-collapse">
                                        <!-- Sous finalités -->
                                        <div class="fr-consent-service">
                                            <fieldset class="fr-fieldset fr-fieldset--inline">
                                                <legend id="finality-1-service-1-legend" class="fr-consent-service__title">Sous finalité 1</legend>
                                                <div class="fr-consent-service__radios fr-fieldset--inline">
                                                    <div class="fr-radio-group">
                                                        <input type="radio" id="consent-finality-1-service-1-accept" name="consent-finality-1-service-1">
                                                        <label class="fr-label" for="consent-finality-1-service-1-accept">
                                                            Accepter
                                                        </label>
                                                    </div>
                                                    <div class="fr-radio-group">
                                                        <input type="radio" id="consent-finality-1-service-1-refuse" name="consent-finality-1-service-1">
                                                        <label class="fr-label" for="consent-finality-1-service-1-refuse">
                                                            Refuser
                                                        </label>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div class="fr-consent-service">
                                            <fieldset aria-labelledby="finality-1-service-2-legend finality-1-service-2-desc" role="group" class="fr-fieldset fr-fieldset--inline">
                                                <legend id="finality-1-service-2-legend" class="fr-consent-service__title" aria-describedby="finality-1-service-2-desc">Sous finalité 2</legend>
                                                <div class="fr-consent-service__radios fr-fieldset--inline">
                                                    <div class="fr-radio-group">
                                                        <input type="radio" id="consent-finality-1-service-2-accept" name="consent-finality-1-service-2">
                                                        <label class="fr-label" for="consent-finality-1-service-2-accept">
                                                            Accepter
                                                        </label>
                                                    </div>
                                                    <div class="fr-radio-group">
                                                        <input type="radio" id="consent-finality-1-service-2-refuse" name="consent-finality-1-service-2">
                                                        <label class="fr-label" for="consent-finality-1-service-2-refuse">
                                                            Refuser
                                                        </label>
                                                    </div>
                                                </div>
                                                <p id="finality-1-service-2-desc" class="fr-consent-service__desc">Ce service utilise 3 cookies.</p>
                                            </fieldset>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <div class="fr-consent-service">
                                <fieldset aria-labelledby="finality-2-legend finality-2-desc" role="group" class="fr-fieldset">
                                    <legend id="finality-2-legend" class="fr-consent-service__title">Nom de la finalité</legend>
                                    <div class="fr-consent-service__radios">
                                        <div class="fr-radio-group">
                                            <input type="radio" id="consent-finality-2-accept" name="consent-finality-2">
                                            <label class="fr-label" for="consent-finality-2-accept">
                                                Accepter
                                            </label>
                                        </div>
                                        <div class="fr-radio-group">
                                            <input type="radio" id="consent-finality-2-refuse" name="consent-finality-2">
                                            <label class="fr-label" for="consent-finality-2-refuse">
                                                Refuser
                                            </label>
                                        </div>
                                    </div>
                                    <p id="finality-2-desc" class="fr-consent-service__desc">Description optionnelle de la finalité, lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in suscipit nulla, et pulvinar velit.</p>
                                    <div class="fr-consent-service__collapse">
                                        <button type="button" class="fr-consent-service__collapse-btn" aria-expanded="false" aria-describedby="finality-2-legend" aria-controls="finality-2-collapse"> Voir plus de détails</button>
                                    </div>
                                    <div class="fr-consent-services fr-collapse" id="finality-2-collapse">
                                        <!-- Sous finalités -->
                                        <div class="fr-consent-service">
                                            <fieldset class="fr-fieldset fr-fieldset--inline">
                                                <legend id="finality-2-service-1-legend" class="fr-consent-service__title">Sous finalité 1</legend>
                                                <div class="fr-consent-service__radios fr-fieldset--inline">
                                                    <div class="fr-radio-group">
                                                        <input type="radio" id="consent-finality-2-service-1-accept" name="consent-finality-2-service-1">
                                                        <label class="fr-label" for="consent-finality-2-service-1-accept">
                                                            Accepter
                                                        </label>
                                                    </div>
                                                    <div class="fr-radio-group">
                                                        <input type="radio" id="consent-finality-2-service-1-refuse" name="consent-finality-2-service-1">
                                                        <label class="fr-label" for="consent-finality-2-service-1-refuse">
                                                            Refuser
                                                        </label>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div class="fr-consent-service">
                                            <fieldset aria-labelledby="finality-2-service-2-legend finality-2-service-2-desc" role="group" class="fr-fieldset fr-fieldset--inline">
                                                <legend id="finality-2-service-2-legend" class="fr-consent-service__title" aria-describedby="finality-2-service-2-desc">Sous finalité 2</legend>
                                                <div class="fr-consent-service__radios fr-fieldset--inline">
                                                    <div class="fr-radio-group">
                                                        <input type="radio" id="consent-finality-2-service-2-accept" name="consent-finality-2-service-2">
                                                        <label class="fr-label" for="consent-finality-2-service-2-accept">
                                                            Accepter
                                                        </label>
                                                    </div>
                                                    <div class="fr-radio-group">
                                                        <input type="radio" id="consent-finality-2-service-2-refuse" name="consent-finality-2-service-2">
                                                        <label class="fr-label" for="consent-finality-2-service-2-refuse">
                                                            Refuser
                                                        </label>
                                                    </div>
                                                </div>
                                                <p id="finality-2-service-2-desc" class="fr-consent-service__desc">Ce service utilise 3 cookies.</p>
                                            </fieldset>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <!-- Bouton de confirmation/fermeture -->
                            <div class="fr-consent-manager__buttons fr-btns-group fr-btns-group--right fr-btns-group--inline-sm">
                                <button type="button" class="fr-btn">Confirmer mes choix</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</dialog>
```

#### Structure du placeholder de contenu masqué

Lorsqu'un contenu est masqué, un placeholder doit être affiché pour informer l'utilisateur de la nécessité d'accepter les cookies pour accéder à ce contenu.

Le placeholder est composé des éléments suivants :

- Un élément `<div>` avec la classe `fr-consent-placeholder` pour le conteneur du placeholder.
- Un titre "[Nom du service] est désactivé" contenu dans un élément `<hx>`, en fonction du contexte, avec la classe `.fr-h6`. Vous pouvez utiliser une classe utilitaire pour ajouter une marge en bas en fonction du besoin, ex : `.fr-mb-2v`.
- Un bloc de texte `<p>` décrivant pourquoi le contenu est masqué. Vous pouvez utiliser une classe utilitaire pour ajouter une marge en bas en fonction du besoin, ex : `.fr-mb-6v`.
- Un bouton primaire pour autoriser le dépôt de cookies et accéder au contenu.

**Exemple de structure HTML de placeholder**

```html
<div class="fr-consent-placeholder">
    <h4 class="fr-h6 fr-mb-2v">**Nom du service** est désactivé</h4>
    <p class="fr-mb-6v">Autorisez le dépôt de cookies pour accéder à cette fonctionnalité.</p>
    <button class="fr-btn" title="Autorisez le dépôt de cookies pour accéder au service **Nom du service**">
        Autoriser
    </button>
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
| Link | Oui |
| Button | Oui |
| Form | Oui |
| Radio | Oui |
| Modal | Oui |
| Consent | Oui |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/link/link.min.css" rel="stylesheet">
<link href="dist/component/button/button.min.css" rel="stylesheet">
<link href="dist/component/form/form.min.css" rel="stylesheet">
<link href="dist/component/radio/radio.min.css" rel="stylesheet">
<link href="dist/component/modal/modal.min.css" rel="stylesheet">
<link href="dist/component/consent/consent.min.css" rel="stylesheet">
```

#### Style du composant

Aucune variation de style n'est possible pour le composant Gestionnaire de consentement.

---

### JavaScript

Le composant Gestionnaire de consentement utilise le JavaScript du composant [Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale/code-de-la-modale) , et du core pour le collapse des sous finalités dans la modale de gestion des cookies.

#### Installation du JavaScript

Pour fonctionner, la modale de gestion des cookies nécessite l'utilisation de JavaScript. Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```html
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/modal/modal.module.min.js"></script>
```

NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```html
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/modal/modal.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### API

Le composant Gestionnaire de consentement est proposé de manière **statique** . Il convient d'utiliser l'API de la plateforme de gestion du consentement (CMP) de votre choix pour l'intégrer au sein de la structure du composant DSFR.

#### Événements

Le Système de Design fournit des événements personnalisés pour les actions uniques de la part de certains composants réactifs listés sur la page de l' [API Javascript](https://www.systeme-de-design.gouv.fr/version-courante/fr/premiers-pas/vous-etes-developpeur/api-javascript) .

Sur la modale de gestion des cookies, les événements suivants sont disponibles :

**événements**

| Événement | Action | Élément | Attribut |
|---|---|---|---|
| `dsfr.conceal` | Fermeture de la modale | Modal | `data-fr-js-modal` |
| `dsfr.disclose` | Ouverture de la modale | Modal | `data-fr-js-modal` |
| `dsfr.click` | Click sur le bouton d'ouverture | ModalButton | `data-fr-js-modal-button` |

---

### Thème DSFR pour Tarteaucitron

Il existe un thème DSFR pour le gestionnaire de consentement Tarteaucitron. Il s'agit d'une surcouche CSS pour adapter le gestionnaire de consentement de Tarteaucitron au design du DSFR. Vous pouvez trouvez ce projet sur le dépôt GIT [GouvernementFR/dsfr-theme-tarteaucitron](https://github.com/GouvernementFR/dsfr-theme-tarteaucitron)

> **Information**
> Il n’y a aucune dépendance au DSFR - le thème propose sa propre CSS pour simuler le design du composant DSFR. Le code HTML et JS sont ceux de tarteaucitron. Le thème a été testé sur les versions 1.9.1, 1.8.4 et 1.8.3 de tarteaucitron, avec les libellés de boutons présent dans le bandeaux de consentement ci-dessus ('Personnaliser', ‘Tout refuser’, ‘Tout accepter’).

Il est toutefois recommandé, dans la mesure du possible, d' **utiliser la structure HTML du composant DSFR** telle quelle, plutôt que thématiser une CMP, un pour garantir une meilleure intégration et une bonne maintenabilité.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+consent+)

#### [v1.14.3](https://github.com/GouvernementFR/dsfr/releases/tag/v1.14.3) - 15 décembre 2025

- **[corrige label nomdusite.fr](https://github.com/GouvernementFR/dsfr/pull/1323)**  
  #1323  
  - Remplace le label nomdusite.fr par nomdusite.gouv.fr dans le gestion de consentement  
  🐛 fix  
  consent

#### [v1.14.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.14.1) - 29 août 2025

- **[corrige alignement radio boutons dans modale gestionnaire de consentement](https://github.com/GouvernementFR/dsfr/pull/1238)**  
  #1238  
  - Corrige les radio boutons "tout accepter / tout refuser" qui passent à la ligne sur le formulaire de consentement dans certaines résolutions.  
  🐛 fix  
  consent

#### [v1.11.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.0) - 11 décembre 2023

- **[correction espacement des radios accepter](https://github.com/GouvernementFR/dsfr/pull/768)**  
  #768  
  - ajustement de la marge droite des radios "accepter"  
  🐛 fix  
  consent

- **[token de couleur des titres de finalité](https://github.com/GouvernementFR/dsfr/pull/767)**  
  #767  
  - passe la couleur des titres de finalité en $text-title-grey  
  🐛 fix  
  consent

- **[correction lien & cookies obligatoires](https://github.com/GouvernementFR/dsfr/pull/754)**  
  #754  
  - coche les cookies obligatoires par defaut
- étend le lien voir plus de detail  
  🐛 fix  
  consent

- **[ajoute un niveau de titre sur la banniere de consentement](https://github.com/GouvernementFR/dsfr/pull/719)**  
  #719  
  - le titre de la baniière devient un `<h4>` à la place d'un `<p>` dans la structure HTML du composant  
  fix  
  consent

- **[coche les cookies obligatoires par defaut](https://github.com/GouvernementFR/dsfr/pull/735)**  
  #735  
  - Les cookies obligatoires doivent être systématiquement cochés  
  🐛 fix  
  consent

#### [v1.10.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.10.0) - 19 juillet 2023

- **[correctif espacement et couleur](https://github.com/GouvernementFR/dsfr/pull/662)**  
  #662  
  - Corrige description d'une finalité de 3v à 2v en margin-bottom
- Homogénéité avec accordion, nav et sidemenu sur le bouton de la modale de consentement “voir plus de détails” :
  - enlever le soulignement
  - mettre en bleu le lien “voir plus de détail”  
  🐛 fix  
  consent

#### [v1.9.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.9.1) - 11 avril 2023

- **[consent placeholder video mal centré](https://github.com/GouvernementFR/dsfr/pull/573)**  
  #573  
  Dans le cas d'une vidéo le placeholder est en display block Retrait de la propriété non désirée  
  🐛 fix  
  consent

#### [v1.3.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.3.0) - 18 janvier 2022

- **[titre bandeau en h2](https://github.com/GouvernementFR/dsfr/pull/187)**  
  #187  
  fix  
  consent

#### [v1.2.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.2.0) - 17 novembre 2021

- **[fonctions pour générer l'objet consent](https://github.com/GouvernementFR/dsfr/pull/103)**  
  #103  
  refactor  
  consent

- **[ajout d'id aux services](https://github.com/GouvernementFR/dsfr/pull/101)**  
  #101  
  fix  
  consent

#### [v1.0.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.0.0) - 24 juin 2021

- **[Ajout du composant gestionnaire de consentement](https://github.com/GouvernementFR/dsfr/pull/12)**  
  #12  
  feat  
  consent

##### Contenu associé

- **[Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale)**  
  Présentation du composant Modale permettant de focaliser l’attention de l’usager sur une tâche ou une information sans quitter la page.

- **[Paramètres d'affichage](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/parametres-d-affichage)**  
  Présentation du composant Paramètres d’affichage permettant à l’usager de modifier le thème visuel d’un site entre mode clair et mode sombre.

- **[Pied de page](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page)**  
  Présentation du composant Pied de page destiné à structurer les informations complémentaires et les liens secondaires en bas de page.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/gestionnaire-de-consentement/accessibilite-du-gestionnaire-de-consentement

Le composant **Gestionnaire de consentement** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Il n'y a aucune interaction spécifique au composant.

### Règles d’accessibilité

- Le bandeau de consentement doit être le premier élément du DOM.

Voir les règles d’accessibilité pour :

- les [boutons](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton/accessibilite-du-bouton) ,
- la [modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale/accessibilite-de-la-modale) ,
- les [boutons radio](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-radio/accessibilite-du-bouton-radio) .

### Restitution par les lecteurs d’écran

Aucun test de restitution supplémentaire n’est nécessaire pour le composant Gestionnaire de consentement.

### Critères RGAA applicables

- **Couleurs :** 3.2
- **Liens :** 6.1, 6.2
- **Scripts :** 7.1, 7.3
- **Éléments obligatoires :** 8.9
- **Structuration :** 9.1, 9.3
- **Présentation de l’information :** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.8, 10.11, 10.12
- **Formulaires :** 11.1, 11.2, 11.4, 11.5, 11.6, 11.7, 11.9, 11.10, 11.11
- **Navigation :** 12.8, 12.9
- **Consultation :** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)

#### Contenu associé

- **[Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale)**  
  Présentation du composant Modale permettant de focaliser l’attention de l’usager sur une tâche ou une information sans quitter la page.

- **[Paramètres d'affichage](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/parametres-d-affichage)**  
  Présentation du composant Paramètres d’affichage permettant à l’usager de modifier le thème visuel d’un site entre mode clair et mode sombre.

- **[Pied de page](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page)**  
  Présentation du composant Pied de page destiné à structurer les informations complémentaires et les liens secondaires en bas de page.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/gestionnaire-de-consentement/demonstration-du-gestionnaire-de-consentement

#### Contenu associé

- **[Modale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale)**  
  Présentation du composant Modale permettant de focaliser l’attention de l’usager sur une tâche ou une information sans quitter la page.

- **[Paramètres d'affichage](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/parametres-d-affichage)**  
  Présentation du composant Paramètres d’affichage permettant à l’usager de modifier le thème visuel d’un site entre mode clair et mode sombre.

- **[Pied de page](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page)**  
  Présentation du composant Pied de page destiné à structurer les informations complémentaires et les liens secondaires en bas de page.
