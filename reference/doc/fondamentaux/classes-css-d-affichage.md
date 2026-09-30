# Classes CSS d'affichage

> Source : https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/classes-css-d-affichage
> Section : fondamentaux · Récupéré le : 2026-09-30 · DSFR 1.15.3 (package.json) · copié par script, ne pas modifier

Le Design Système de l’État (DSFR) propose des classes utilitaires CSS pour contrôler l'affichage des éléments dans vos pages web. Ces classes permettent de masquer ou d'afficher des éléments en fonction des besoins, que ce soit pour les utilisateurs finaux ou pour les technologies d'assistance comme les lecteurs d'écran.

## Présentation

> Page : https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/classes-css-d-affichage

### fr-sr-only

Cette classe cache visuellement l'élément mais il reste présent pour les lecteurs d'écran.

```html
<div class="fr-sr-only">
    <p>Lorem [...] elit ut.</p>
</div>
```

### fr-sr-only-[breakpoint]

Cette classe cache visuellement l'élément, uniquement à partir du breakpoint souhaité (sm, md, lg, xl), mais il reste présent pour les lecteurs d'écran. Exemple en LG :

```html
<div class="fr-sr-only-lg">
    <p>Lorem [...] elit ut.</p>
</div>
```

### fr-hidden

Cette classe cache complètement l'élément, à la fois visuellement et aussi pour les lecteurs d'écran (équivalent au `display: none`).

```html
<div class="fr-hidden">
    <p>Lorem [...] elit ut.</p>
</div>
```

### fr-hidden-[breakpoint]

Cette classe cache complètement l'élément, à la fois visuellement et aussi pour les lecteurs d'écran (équivalent au `display: none`) à partir du breakpoint souhaité (sm, md, lg, xl). Exemple en LG :

```html
<div class="fr-hidden-lg">
    <p>Lorem [...] elit ut.</p>
</div>
```

### fr-unhidden-[breakpoint]

Cette classe, associée à la classe `fr-hidden` permet de ré-afficher l'élément caché à partir du breakpoint souhaité (sm, md, lg, xl). Exemple en LG :

```html
<div class="fr-hidden fr-unhidden-lg">
    <p>Lorem [...] elit ut.</p>
</div>
```
