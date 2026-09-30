# Bandeau d'information importante

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bandeau-d-information-importante · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bandeau-d-information-importante/design-du-bandeau-d-information-importante · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bandeau-d-information-importante/code-du-bandeau-d-information-importante · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bandeau-d-information-importante/accessibilite-du-bandeau-d-information-importante · https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bandeau-d-information-importante/demonstration-du-bandeau-d-information-importante
> Section : composants · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

Le bandeau d’information importante est un élément éditorial permettant d’attirer l’attention des usagers sur une information importante et temporaire.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bandeau-d-information-importante

*(Démonstration interactive « notice--notice » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=notice--notice&nav=0&globals=theme%3Alight)*

### Quand utiliser ce composant ?

Utiliser le bandeau d’information importante pour permettre aux usagers d’être informés ou d’accéder à une information primordiale ou urgente, de façon temporaire.

> **Information**
> Le bandeau d’information importante n’est pas conçu pour relayer une actualité, une information secondaire ou tout autre contenu informatif d’un site qui ne concernerait pas directement l’usager. Une utilisation excessive ou continue de ce type de bandeaux risquerait de rendre le composant invisible aux yeux des usagers, en les habituant à sa présence.

### Comment utiliser ce composant ?

- **Placer le bandeau d’information importante directement sous la navigation principale** , et visible sur toutes les pages du site, quel que soit l’appareil utilisé.
- **Transmettre l’essentiel de l’information dans le contenu du bandeau** . Il est toutefois possible d’ajouter un lien permettant de renvoyer l’usager vers une source d’information complète.

> **À faire :** Permettre à l’usager d’obtenir l’information principale à la seule lecture du bandeau d’information importante.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/notice/use/do-1.png)

> **À ne pas faire :** Ne pas forcer l’usager à devoir consulter une source complémentaire pour comprendre l’information relayée.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/notice/use/dont-1.png)

- **Utiliser de façon prioritaire l’état par défaut du bandeau** (voir ci-dessous), qui répond à la plupart des cas d’usages. Toutes les autres variations sont à utiliser dans un cadre strictement exceptionnel.

> **À faire :** Utiliser les bandeaux d’information importante selon les cas d’usage définis.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/notice/use/do-2.png)

> **À ne pas faire :** Ne pas utiliser un bandeau d’information importante dans un autre contexte que celui qui lui est strictement réservé.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/notice/use/dont-2.png)

- **Afficher les bandeaux de manière pertinente** , notamment ceux de vigilance météo. Les niveaux de vigilance étant fixés à l’échelle départementale (sauf pour les phénomènes d’avalanches et vagues-submersion, localisés plus précisément), les bandeaux doivent être affichés en fonction de la localisation de l’usager.

> **À faire :** Afficher un bandeau de vigilance météo sur un site ciblant un département ou une région particulière concerné par l’alerte.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/notice/use/do-3.png)

> **À ne pas faire :** Ne pas généraliser un bandeau de vigilance météo à des sites en dehors de la zone géographique concernée par l’alerte.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/notice/use/dont-3.png)

### Règles éditoriales

**Bandeaux de vigilance météo**

- **Inclure le nom du phénomène météorologique** en plus du niveau de vigilance au titre du bandeau d’information importante (ou le plus prégnant s’il s’agit d’une combinaison de plusieurs phénomènes) et ce, peu importe le niveau de vigilance relayé.

> **À faire :** Préciser le phénomène météorologique en plus du niveau de vigilance dans le titre du bandeau.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/notice/edit/do-1.png)

> **À ne pas faire :** Ne pas indiquer uniquement le niveau de vigilance au sein du bandeau d’information importante. Il ne se suffit pas à lui-même.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/notice/edit/dont-1.png)

- **Préciser une zone géographique et une temporalité** au sein du texte d’accompagnement du bandeau d’information. Celui-ci doit comporter une notion du département concerné ou du nombre de départements concernés, pour les sites à portée nationale, ainsi que le moment de la journée auquel l’alerte s’applique (sans nécessairement détailler les heures, mais pour donner une idée de la temporalité).

> **À faire :** Utiliser le texte d’accompagnement pour donner des précisions géographiques et temporelles liées au phénomène météorologique.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/notice/edit/do-2.png)

> **À ne pas faire :** Ne pas se contenter de simplement alerter sur le phénomène météorologique attendu.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/notice/edit/dont-2.png)

- **Respecter les termes définis par la [circulaire interministérielle](https://www.legifrance.gouv.fr/download/pdf/circ?id=45225) et les icônes leur étant associées** en ce qui concerne les 8 phénomènes couverts par les bandeaux de vigilance météo.

Vent -

Orages -

Pluie-Inondation -

Vagues-submersion -

Grand froid -

Canicule -

Avalanches -

Neige-Verglas -

#### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.

- **[Navigation principale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale)**  
  Présentation du composant Navigation principale organisant les grandes rubriques d’un site et permettant à l’usager de s’orienter dans son arborescence.

## Design

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bandeau-d-information-importante/design-du-bandeau-d-information-importante

![Anatomie du bandeau d'information importante](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/notice/design/anatomy/anatomy-1.png)

1. Une icône, obligatoire et normée pour les bandeaux de vigilance météo et les bandeaux d’alertes — En option
2. Un titre en gras, normé pour les bandeaux de vigilance météo et les bandeaux d’alertes — Obligatoire
3. Une description, recommandée pour apporter du contexte — En option
4. Un lien, obligatoire et normé pour les bandeaux de vigilance météo et les bandeaux d’alertes — En option
5. Un fond — Obligatoire
6. Une croix de fermeture — En option

### Variations

**Bandeaux génériques**

- Bandeau d'information importante - par défaut.

*(Démonstration interactive « notice--notice » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=notice--notice&nav=0&globals=theme%3Alight)*

Utiliser le bandeau d’information importante pour afficher une information exceptionnelle, mais non critique pour la santé ou la sécurité de l’utilisateur.

- Bandeau d’avertissement

*(Démonstration interactive « notice--warning » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=notice--warning&nav=0&globals=theme%3Alight)*

Utiliser le bandeau d’avertissement pour afficher une information qui peut affecter l’usager dans son usage du service (indisponibilité majeure du site ou d’une démarche importante par exemple) ou pour avertir d’un risque de sécurité lié au site ou au service (risque de phishing, usurpations etc.)

- Bandeau d’alerte

*(Démonstration interactive « notice--alert » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=notice--alert&nav=0&globals=theme%3Alight)*

Utiliser le bandeau d’alerte pour afficher une information critique pour la santé ou la sécurité de l’utilisateur.

**Bandeaux de vigilance météo**

Ces bandeaux servent à relayer des informations sur les niveaux de vigilance et risques météorologiques communiqués par Météo France.

Une vidéo présentant les niveaux de vigilance est disponible sur la chaîne YouTube du Système de Météo France :

[Voir la vidéo sur YouTube](https://www.youtube.com/watch?v=pT98qCs58h4)

Le Système de Design de l’État prévoit que ces bandeaux soient affichés à partir du niveau de vigilance orange. Les niveaux de vigilance vert et jaune ne justifiant pas d’afficher un bandeau d’information sur les sites de l’État.

Les niveaux de vigilance étant revus quotidiennement par Météo France, il est demandé de ne plus afficher ces bandeaux dès lors que le niveau de vigilance revient à la normale.

- Vigilance orange

*(Démonstration interactive « notice--weather-orange » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=notice--weather-orange&nav=0&globals=theme%3Alight)*

Utiliser ce niveau de vigilance lorsque des phénomènes dangereux sont prévus. Son rôle est d’inciter l’usager à suivre l'évolution de la situation ainsi que les conseils de sécurité émis par les pouvoirs publics.

- Vigilance rouge

*(Démonstration interactive « notice--weather-red » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=notice--weather-red&nav=0&globals=theme%3Alight)*

Utiliser ce niveau de vigilance lorsque des phénomènes dangereux, d'intensité exceptionnelle, sont prévus. Il doit inciter l’usager à suivre la situation et à impérativement respecter les consignes de sécurité émises par les pouvoirs publics.

- Vigilance violette

*(Démonstration interactive « notice--weather-purple » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=notice--weather-purple&nav=0&globals=theme%3Alight)*

Réserver ce niveau de vigilance aux territoires ultra-marins où les phénomènes météorologiques liés aux cyclones y font l’objet de dispositifs d’alertes spécifiques à chaque territoire ou région, donnant lieu à une couleur d’alerte violette figurant le niveau d’alerte maximale.

La vigilance violette ne fait pas partie du référentiel de Météo France, mais à un référentiel différent : celui de l’alerte cyclonique.

**Bandeaux d’alerte**

Les bandeaux d’alerte sont conçus pour relayer des alertes relatifs aux risques majeurs pour la Nation, mettant en danger la sécurité des biens et des personnes. **Ils sont utilisables uniquement dans les cas précis pour lesquels ils sont prévus** .

- Alerte attentat

*(Démonstration interactive « notice--attack » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=notice--attack&nav=0&globals=theme%3Alight)*

Afficher ce bandeau uniquement lorsqu'un attentat est en cours. Cette information étant émise par le Ministère de l’Intérieur, les intitulés officiels doivent être respectés.

> **Attention**
> Ne pas utiliser ce bandeau pour signifier un relèvement, un abaissement ou le niveau en cours du plan Vigipirate : il s’agit d’une information et non d’une alerte.

- Appel à témoins

*(Démonstration interactive « notice--witness » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=notice--witness&nav=0&globals=theme%3Alight)*

Afficher ce bandeau uniquement lorsqu'un appel à témoins est émis par le Ministère de l’Intérieur ou une préfecture. Les intitulés officiels doivent être respectés.

- Alerte technologique

*(Démonstration interactive « notice--cyberattack » : https://www.systeme-de-design.gouv.fr/v1.15/storybook/iframe.html?id=notice--cyberattack&nav=0&globals=theme%3Alight)*

Afficher ce bandeau uniquement en cas de cyber-attaque d’ampleur nationale ou d’alerte technologique émise par le Ministère de l’Intérieur. Les intitulés officiels doivent être respectés.

### Tailles

La largeur du bandeau d’information importante est de taille fixe et prend les 12 colonnes disponibles de la grille, au même titre que [l’en-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete) et la [navigation principale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale) sous lesquelles il se positionne.

### États

Le bandeau d’information importante n’est sujet à aucun changement d’état.

### Personnalisation

Le bandeau d’information importante n’est pas personnalisable.

Toutefois, certains éléments sont optionnels - voir [la structure du composant](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bandeau-d-information-importante/design-du-bandeau-d-information-importante#bandeau-dinformation-importantee) .

> **À faire :** Conserver les icônes et couleurs de fond proposées par défaut, chacune étant liée à un cas d’usage spécifique.
> ![À faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/notice/design/custom/do-1.png)

> **À ne pas faire :** Ne pas personnaliser les icônes et couleurs de fond, au risque de compromettre le message transmis et sa bonne compréhension par l’usager.
> ![À ne pas faire](https://www.systeme-de-design.gouv.fr/v1.15/asset/component/notice/design/custom/dont-1.png)

#### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.

- **[Navigation principale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale)**  
  Présentation du composant Navigation principale organisant les grandes rubriques d’un site et permettant à l’usager de s’orienter dans son arborescence.

## Code

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bandeau-d-information-importante/code-du-bandeau-d-information-importante

### HTML

#### Structure du composant

Le **bandeau d’information importante** permet aux utilisateurs de voir ou d’accéder à une information importante et temporaire.

Sa structure comprend les éléments suivants :

- Un conteneur principal est un élément HTML `<div>` défini par les classe `fr-notice` et `fr-notice--info`, représentant le bandeau lui-même.
- Un conteneur est un élément HTML `<div>` défini par la classe `fr-container`.
- Le corps du bandeau est un élément HTML `<div>` défini par la classe `fr-notice__body`.
- Une balise `<div>` qui contient le texte du message dont :
  - Le titre du bandeau d’information importante, obligatoire, défini par la classe `fr-notice__title` et un niveau de titre ajustable (h2, h3, h4, h5, h6 ou p).
  - Le texte du bandeau, optionnel, dans un élément HTML `<p>` défini par la classe `fr-notice__desc`.
  - Un lien, optionnel, dans un élément HTML `<a>` défini par la classe `fr-notice__link`.
- Un bouton de fermeture, optionnel, dans un élément HTML `<button>` de type `button` et défini par les classes `fr-btn--close` et `fr-btn` pour permettre à l'utilisateur de fermer le bandeau.
  - Il doit être lié à une fonction JavaScript pour supprimer le bandeau du DOM lorsque celui-ci est cliqué.

**Exemple de structure HTML**

```html
<div class="fr-notice fr-notice--info">
    <div class="fr-container">
        <div class="fr-notice__body">
            <div>
                <h2 class="fr-notice__title">Titre du bandeau reprenant le type d'information importante</h2>
                <p class="fr-notice__desc">Texte de description</p>
                <a title="Lien de consultation - nouvelle fenêtre" href="#" target="_blank" rel="noopener external" class="fr-notice__link">Lien de consultation</a>
            </div>
            <button title="Masquer le message" onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
        </div>
    </div>
</div>
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
| notice | Oui |  |
| Button | Non | Uniquement sur la variation refermable |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/notice/notice.min.css" rel="stylesheet">
```

#### Variante avec bouton de fermeture

Le composant Bandeau d'information importante peut comporter un bouton de fermeture pour permettre à l'utilisateur de fermer le bandeau.

**Exemple de variante avec bouton de fermeture**

```html
<div class="fr-notice fr-notice--info">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title">Titre du bandeau</span>
            </p>
            <button title="Masquer le message" onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
        </div>
    </div>
</div>
```

#### Variante avec avec icône personnalisée

Le composant Bandeau d'information importante comporte une icone par defaut qui peut être personnalisée avec l'utilisation d'une classe utilitaire d'icône `fr-icon--NOM-ICONE` (voir [Icônes](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/icone) ) sur le conteneur du titre du bandeau.

**Exemple de variante avec icône personnalisée**

```html
<div class="fr-notice fr-notice--info">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title fr-icon-virus-fill">Titre du bandeau</span>
            </p>
        </div>
    </div>
</div>
```

#### Déclinaisons de bandeaux génériques

Le composant Bandeau d'information importante propose 3 variations de bandeaux génériques utilisables en fonction du niveau de gravité de l'information.

L'icône peut être modifiée et seul le titre est obligatoire :

- **Bandeau d'information importante** (par défaut)
- **Bandeau d'avertissement**
- **Bandeau d'alerte**

Ces variations sont définies par l'ajout de classes correspondantes sur le conteneur principal :

- `fr-notice--info`
- `fr-notice--warning`
- `fr-notice--alert`

**Exemple de structure HTML du bandeau d'information**

```html
<div class="fr-notice fr-notice--info">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title">Titre du bandeau d'information</span>
                <span class="fr-notice__desc">Texte de description lorem ipsum sit consectetur adipiscing.</span>
                <a title="Lien de consultation - nouvelle fenêtre" href="#" target="_blank" rel="noopener external" class="fr-notice__link">Lien de consultation</a>
            </p>
            <button title="Masquer le message" onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
        </div>
    </div>
</div>
```

**Exemple de structure HTML du bandeau d'avertissement**

```html
<div class="fr-notice fr-notice--warning">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title">Titre du bandeau d'avertissement</span>
                <span class="fr-notice__desc">Texte de description lorem ipsum sit consectetur adipiscing.</span>
                <a title="Lien de consultation - nouvelle fenêtre" href="#" target="_blank" rel="noopener external" class="fr-notice__link">Lien de consultation</a>
            </p>
            <button title="Masquer le message" onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
        </div>
    </div>
</div>
```

**Exemple de structure HTML du bandeau d'alerte**

```html
<div class="fr-notice fr-notice--alert">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title">Titre du bandeau d'alerte</span>
                <span class="fr-notice__desc">Texte de description lorem ipsum sit consectetur adipiscing.</span>
                <a title="Lien de consultation - nouvelle fenêtre" href="#" target="_blank" rel="noopener external" class="fr-notice__link">Lien de consultation</a>
            </p>
            <button title="Masquer le message" onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
        </div>
    </div>
</div>
```

#### Déclinaisons de bandeaux vigilance météo

Le composant Bandeau d'information importante propose 3 variations de bandeaux météo utilisables en fonction du niveau d'alerte météo.

L'icône peut être modifiée et seul le titre est obligatoire :

- **Vigilance météo orange**
- **Vigilance météo rouge**
- **Vigilance météo violette**

Ces variations sont définies par l'ajout de classes correspondantes sur le conteneur principal :

- `fr-notice--weather-orange`
- `fr-notice--weather-red`
- `fr-notice--weather-purple`

**Exemple de structure HTML du bandeau Vigilance météo orange**

```html
<div class="fr-notice fr-notice--weather-orange">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title">Vigilance météo orange</span>
                <span class="fr-notice__desc">Texte de description lorem ipsum sit consectetur adipiscing.</span>
                <a title="Lien de consultation - nouvelle fenêtre" href="#" target="_blank" rel="noopener external" class="fr-notice__link">Lien de consultation</a>
            </p>
            <button title="Masquer le message" onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
        </div>
    </div>
</div>
```

**Exemple de structure HTML du bandeau Vigilance météo rouge**

```html
<div class="fr-notice fr-notice--weather-red">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title">Vigilance météo rouge</span>
                <span class="fr-notice__desc">Texte de description lorem ipsum sit consectetur adipiscing.</span>
                <a title="Lien de consultation - nouvelle fenêtre" href="#" target="_blank" rel="noopener external" class="fr-notice__link">Lien de consultation</a>
            </p>
            <button title="Masquer le message" onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
        </div>
    </div>
</div>
```

**Exemple de structure HTML du bandeau Vigilance météo violette**

```html
<div class="fr-notice fr-notice--weather-purple">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title">Vigilance météo violette</span>
                <span class="fr-notice__desc">Texte de description lorem ipsum sit consectetur adipiscing.</span>
                <a title="Lien de consultation - nouvelle fenêtre" href="#" target="_blank" rel="noopener external" class="fr-notice__link">Lien de consultation</a>
            </p>
            <button title="Masquer le message" onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
        </div>
    </div>
</div>
```

#### Déclinaisons de bandeaux d'alertes

Le composant Bandeau d'information importante propose 3 variations de bandeaux d'alertes utilisables en fonction du type d'alerte.

L'icône ne peut pas être modifiée et les intitulés officiels doivent être utilisés :

- **Alerte attentat**
- **Appel à témoins**
- **Alerte technologique**

Ces variations sont définies par l'ajout de classes correspondantes sur le conteneur principal :

- `fr-notice--attack`
- `fr-notice--witness`
- `fr-notice--cyberattack`

**Exemple de structure HTML du bandeau Alerte attentat**

```html
<div class="fr-notice fr-notice--attack">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title">Attentat en cours</span>
                <span class="fr-notice__desc">Texte de description lorem ipsum sit consectetur adipiscing.</span>
                <a title="Lien de consultation - nouvelle fenêtre" href="#" target="_blank" rel="noopener external" class="fr-notice__link">Lien de consultation</a>
            </p>
            <button title="Masquer le message" onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
        </div>
    </div>
</div>
```

**Exemple de structure HTML du bandeau Appel à témoins**

```html
<div class="fr-notice fr-notice--witness">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title">Appel à témoins</span>
                <span class="fr-notice__desc">Texte de description lorem ipsum sit consectetur adipiscing.</span>
                <a title="Lien de consultation - nouvelle fenêtre" href="#" target="_blank" rel="noopener external" class="fr-notice__link">Lien de consultation</a>
            </p>
            <button title="Masquer le message" onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
        </div>
    </div>
</div>
```

**Exemple de structure HTML du bandeau Alerte technologique**

```html
<div class="fr-notice fr-notice--cyberattack">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title">Cyber-attaque</span>
                <span class="fr-notice__desc">Texte de description lorem ipsum sit consectetur adipiscing.</span>
                <a title="Lien de consultation - nouvelle fenêtre" href="#" target="_blank" rel="noopener external" class="fr-notice__link">Lien de consultation</a>
            </p>
            <button title="Masquer le message" onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
        </div>
    </div>
</div>
```

---

### JavaScript

Le composant **Bandeau d'information importante** nécessite un JavaScript minimal pour la gestion de la fermeture du bandeau. En cliquant sur le bouton de fermeture, le bandeau est retiré du DOM grâce à un événement JavaScript. Le DSFR ne gère pas cette fonctionnalité car trop dépendant de la technologie utilisée.

#### Fermeture du bandeau

Le bouton de fermeture doit être lié à une fonction JavaScript pour supprimer le bandeau du DOM. Voici un exemple de code en javascript vanilla pour gérer la suppression du bandeau :

```javascript
document.querySelector('.fr-notice__close').addEventListener('click', function() {
  this.closest('.fr-notice').remove();
});
```

Dans l'exemple HTML fourni, cette fonction est déjà intégrée directement dans l'attribut `onclick` du bouton de fermeture.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+notice+)

#### [v1.15.3](https://github.com/GouvernementFR/dsfr/releases/tag/v1.15.3) - 8 septembre 2026

- **[retire l'utilisation d'un role aria invalide](https://github.com/GouvernementFR/dsfr/pull/1504)**  
  #1504  
  - un attribut role (status, alert) ne doit être ajouté que dans le cas d'un affichage dynamique  
  🐛 fix  
  notice

- **[ajout d'un niveau de titre au bandeau](https://github.com/GouvernementFR/dsfr/pull/1521)**  
  #1521  
  ✨ feat  
  notice

#### [v1.14.3](https://github.com/GouvernementFR/dsfr/releases/tag/v1.14.3) - 15 décembre 2025

- **[supprime un doublon de paragraphe](https://github.com/GouvernementFR/dsfr/pull/1305)**  
  #1305  
  - Retire un texte en double  
  📝 docs  
  notice

#### [v1.13.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.13.0) - 4 décembre 2024

- **[padding notice sans close btn](https://github.com/GouvernementFR/dsfr/pull/1019)**  
  #1019  
  - Retrait du padding à droite du bandeau lorsqu'il n'y a pas de bouton de fermeture  
  🐛 fix  
  notice

- **[icone alerte météo rouge](https://github.com/GouvernementFR/dsfr/pull/1004)**  
  #1004  
  - Changement de l'icône par défaut du bandeau d'alerte météo rouge  
  ✨ feat  
  notice

- **[correction css markup hx sur le titre du bandeau](https://github.com/GouvernementFR/dsfr/pull/1003)**  
  #1003  
  - Correction du style du titre du bandeau lors de l'utilisation d'un niveau d'entête hx à la place de la balise p  
  🐛 fix  
  notice

#### [v1.12.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.12.0) - 19 juin 2024

- **[ajout de bandeaux d'information importante](https://github.com/GouvernementFR/dsfr/pull/917)**  
  #917  
  - ajout des bandeaux d'alertes, des bandeaux vigilance météo, et de 2 niveaux génériques (warning et alert)
- mise en situation dans une page
- BC : changement de la structure html pour accueillir une description et un lien en plus du titre  
  ✨ feat  
  notice

#### [v1.9.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.9.1) - 11 avril 2023

- **[ajoute 'importante' au bandeau d'information importante](https://github.com/GouvernementFR/dsfr/pull/563)**  
  #563  
  Le nom du composant devient "Bandeau information importante"  
  🐛 fix  
  notice

#### [v1.6.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.6.0) - 14 juin 2022

- **[Ajout du composant bandeau d'information](https://github.com/GouvernementFR/dsfr/pull/302)**  
  #302  
  feat  
  notice

##### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.

- **[Navigation principale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale)**  
  Présentation du composant Navigation principale organisant les grandes rubriques d’un site et permettant à l’usager de s’orienter dans son arborescence.

## Accessibilité

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bandeau-d-information-importante/accessibilite-du-bandeau-d-information-importante

Le composant **Bandeau d'information importante** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

- Ne pas sauter ce composant avec les liens d'évitement, le bandeau doit être lu quand l’utilisateur choisit d’aller directement au contenu.
- Les **bandeaux refermables** doivent inclure un bouton clairement identifiable pour fermer le bandeau.
- Le bouton de fermeture doit avoir un label explicite via un texte caché et un attribut `title`.
- À la fermeture, repositionner le focus à un endroit pertinent pour l’utilisateur.
- Si le bandeau d’information importante est ajouté dynamiquement après le chargement de la page, utiliser un attribut role sur le composant en fonction du niveau d'alerte, comme sur le [composant alerte](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/alerte)
- Le niveau de titre dépend du contexte de la page et ne sera pas toujours un `<h2>`.
- **Expliciter la nature du message** porté par le composant (information, avertissement, alerte etc.) dans le titre du bandeau d'information importante. L’icône et la couleur ne garantissent pas à elles seules la bonne compréhension du message pour la totalité des usagers.

### Contrastes de couleurs

Le composant Bandeau d’information importante est suffisamment contrasté en thème clair et en thème sombre dans ses différentes versions.

---

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Bandeau d’information importante.

---

### Critères RGAA applicables

- **Couleurs :** 3.2, 3.3
- **Liens :** 6.1, 6.2
- **Scripts :** 7.1, 7.
- **Éléments obligatoires** 8.9
- **Présentation de l’information :** 10.1, 10.2, 10.3, 10.4, 10.5, 10.11, 10.12
- **Consultation :** 13.9, 13.11

---

#### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)

##### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.

- **[Navigation principale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale)**  
  Présentation du composant Navigation principale organisant les grandes rubriques d’un site et permettant à l’usager de s’orienter dans son arborescence.

## Démo

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bandeau-d-information-importante/demonstration-du-bandeau-d-information-importante

#### Contenu associé

- **[En-tête](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)**  
  Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.

- **[Navigation principale](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale)**  
  Présentation du composant Navigation principale organisant les grandes rubriques d’un site et permettant à l’usager de s’orienter dans son arborescence.
