# Conception : Page d'accueil de mesdroitssociaux.gouv.fr, traduite en DSFR

Écran produit avec la skill dsfr-designer, par le prompt `build_screen` et les outils du serveur dsfr-kit (appelés par `npm run mcp:call`, le serveur n'étant pas encore branché dans la session Claude Code). La page d'origine n'est pas en DSFR : elle est traduite en composants officiels, sans reprendre son style ni ses illustrations.

## Fondamentaux
- Doc lue : reference/doc/fondamentaux/couleurs.md — règles appliquées : aucune couleur en dur ; le bandeau d'introduction utilise le token de fond « aux couleurs de l'État » (`fr-background-alt--blue-france`) et la section partenaires le fond de section gris (`fr-background-alt--grey`) ; aucune accentuation de composant ; les pictogrammes gardent leurs trois couleurs par défaut (la couleur majeure n'est pas personnalisable).
- Doc lue : reference/doc/fondamentaux/typographie.md — règles appliquées : un seul h1 (titre de page), un h2 par section, h3 pour les tuiles et les tutoriels ; chapô en `fr-text--lead` ; surtitres en `fr-text--sm` avec le token de mention ; pas plus de 4 niveaux de titres ; texte courant limité à 8 colonnes (bandeau, mise en avant). Les titres en capitales (« MES DROITS SOCIAUX », « ACTUALITÉS ») reprennent le brief mot pour mot, voir questions ouvertes.
- Doc lue : reference/doc/fondamentaux/grille-et-points-de-rupture.md — règles appliquées : structure `fr-container` › `fr-grid-row fr-grid-row--gutters` › `fr-col-*` ; mobile d'abord (`fr-col-12`), puis 2 colonnes à partir de MD (768 px) et 4 colonnes à partir de LG (992 px) pour les services et les événements de vie ; 3 colonnes MD pour les actualités secondaires et les tutoriels ; 8 colonnes maximum pour les blocs de texte.
- Doc lue : reference/doc/fondamentaux/espacement.md — règles appliquées : uniquement les classes d'espacement du DSFR, en nomenclature « v » (la nomenclature « w » est dépréciée) : `fr-py-8v` / `fr-py-md-12v` pour les bandeaux, `fr-mt-8v` entre les sections, `fr-mt-4v` avant les boutons et liens de section, `fr-mt-2v` entre une tuile et son lien d'action, `fr-mb-1v` sous les surtitres.
- Doc lue : reference/doc/fondamentaux/icone.md — règles appliquées : icônes fonctionnelles du DSFR uniquement, toujours accompagnées d'un libellé ; `fr-icon-arrow-right-line` sur les liens d'action (variante « icône à droite » du lien) ; aucune icône seule.
- Doc lue : reference/doc/fondamentaux/pictogramme.md — règles appliquées : pictogrammes de `dist/artwork/pictograms` intégrés par `<svg class="fr-artwork" aria-hidden="true">` avec les trois calques `<use>` (decorative, minor, major), taille 80 × 80, dans le composant Tuile (usage défini par la doc) ; un pictogramme distinct par tuile sur toute la page : document-add, doctor, calendar, house (actualités), health, document, human-cooperation, accessibility (événements de vie).

## Point de départ
Aucun écran dans `templates/`. Le brief demande le « modèle de page d'accueil du DSFR » : ni le paquet 1.15.3 (`reference/modeles.md` : pages de connexion, de création de compte, pages d'erreur, blocs fonctionnels de formulaire) ni le site officiel (`reference/doc/modeles/` : mêmes pages types) ne proposent de modèle de page d'accueil. L'écran part donc du squelette `screens/_gabarit.html` (en-tête de document, feuilles de style et scripts du DSFR) et se compose section par section avec les composants officiels, dans la grille du DSFR. C'est un écart assumé par rapport au brief, signalé à Louis.

## Composants

### Liens d'évitement (skiplink)
- Doc lue : reference/doc/composants/skiplink.md
- Variante choisie et pourquoi : la seule variante, placée avant l'en-tête ; obligation d'accessibilité (RGAA 12.7) rappelée par la doc ; trois liens simples : Contenu, Menu, Pied de page (la recherche n'existe pas sur cette page).
- Règles de contenu suivies : liens courts, sans icône, pointant vers des ancres présentes dans la page (`#content`, `#header-navigation`, `#footer`).
- Points d'accessibilité : `nav role="navigation" aria-label="Accès rapide"`, liste `ul li`, lien « Contenu » en premier.

### En-tête (header)
- Doc lue : reference/doc/composants/header.md
- Variante choisie et pourquoi : « Header avec nom de service, lien d'accès » (variante 9 de la page d'exemple) : bloc-marque, nom du service, baseline, bloc d'outils, bouton Menu et modale de navigation pour le mobile. Le brief impose un bouton FranceConnect dans les outils d'en-tête : le bloc `fr-header__tools-links` reçoit le composant officiel `fr-connect-group` à la place de la liste de raccourcis de l'exemple (écart assumé, voir plus bas).
- Règles de contenu suivies : nom du service et baseline mot pour mot ; bloc-marque « République Française » ; typographie et positionnement des éléments inchangés.
- Points d'accessibilité : `role="banner"` ; lien d'accueil sur le nom du service avec `title="Accueil - Mes droits sociaux - République Française"` ; bouton Menu lié à la modale (`aria-controls`, `data-fr-opened`) ; les raccourcis sont recopiés en mobile par le JS du DSFR.

### Bloc marque (logo)
- Doc lue : reference/doc/composants/logo.md
- Variante choisie et pourquoi : taille par défaut, dans l'en-tête et le pied de page ; seul l'intitulé officiel « République Française » est écrit, la Marianne et la devise sont ajoutées par le composant.
- Règles de contenu suivies : intitulé sur deux lignes avec `<br>`, comme l'exemple.
- Points d'accessibilité : élément `<p class="fr-logo">` ; dans le pied de page, le lien qui l'entoure porte un `title` décrivant la destination.

### Navigation principale (navigation)
- Doc lue : reference/doc/composants/navigation.md
- Variante choisie et pourquoi : « Liens directs » (trois entrées, pas de second niveau) ; placée dans la modale de l'en-tête comme le prévoit la structure de l'en-tête.
- Règles de contenu suivies : libellés du brief, courts et explicites : Accueil, Vos services, Vos événements de vie.
- Points d'accessibilité : `nav class="fr-nav" role="navigation" aria-label="Menu principal"`, liste `ul li`, page courante signalée par `aria-current="page"` sur Accueil ; en mobile, la navigation s'ouvre depuis le bouton « Menu ».

### Boutons FranceConnect et ProConnect (connect)
- Doc lue : reference/doc/composants/connect.md
- Variante choisie et pourquoi : « Bouton FranceConnect » (pas FranceConnect+ ni ProConnect : le brief demande FranceConnect).
- Règles de contenu suivies : libellé « S’identifier avec FranceConnect » et lien « Qu’est-ce que FranceConnect ? » repris tels quels du composant (la doc interdit de modifier ces intitulés, y compris l'apostrophe typographique) ; lien vers https://franceconnect.gouv.fr/ en nouvelle fenêtre.
- Points d'accessibilité : bouton `<button>` ; lien avec `target="_blank"`, `rel="noopener"` et `title` « … - nouvelle fenêtre ».

### Bouton (button)
- Doc lue : reference/doc/composants/button.md
- Variante choisie et pourquoi : un seul bouton primaire par page, « Voir les simulateurs » (bandeau d'introduction), en variante « Bouton markup a href » puisqu'il mène à une page ; les boutons de section (« Voir tous les services », « Voir tous les événements de vie », « Voir les tutos vidéos ») en « Bouton secondaire markup a href » ; « Gérer les cookies » en bouton secondaire `<button>` puisqu'il déclenche une action. Le bouton Menu et le bouton Fermer viennent de l'en-tête.
- Règles de contenu suivies : verbe à l'infinitif en tête, libellés courts, majuscule initiale, jamais en capitales ; taille MD partout ; aucun bouton désactivé.
- Points d'accessibilité : intitulés textuels explicites ; la doc rappelle que le bouton sert à agir et le lien à naviguer : les boutons qui naviguent sont une demande du brief, voir questions ouvertes.

### Lien (link)
- Doc lue : reference/doc/composants/link.md
- Variante choisie et pourquoi : « Lien icon à droite » (`fr-icon-arrow-right-line fr-link--icon-right`) pour les liens d'action (Qui sommes-nous ?, Tout savoir sur le Montant Net Social, Voir toutes les actualités, les quatre liens de service) ; « Lien seul » pour les transcriptions ; les liens du pied de page et de la navigation sont ceux de leurs composants.
- Règles de contenu suivies : libellés du brief, courts et explicites ; lien simple hors de tout paragraphe de texte courant ; le lien externe FranceConnect s'ouvre en nouvelle fenêtre avec sa mention.
- Points d'accessibilité : chaque lien a un `href` (adresses provisoires `#`) et un intitulé explicite ; pas de style bouton sur un lien hors des variantes prévues.

### Mise en avant (callout)
- Doc lue : reference/doc/composants/callout.md
- Variante choisie et pourquoi : mise en avant avec titre, texte et lien (la doc autorise « un bouton pour inciter à l'action ou un lien pour naviguer ») ; une seule sur la page ; largeur limitée à 8 colonnes.
- Règles de contenu suivies : information synthétique, titre « Le Montant Net Social », texte et lien mot pour mot ; pas d'accentuation de couleur, pas d'icône.
- Points d'accessibilité : titre présent pour être repéré par les lecteurs d'écran, en h2 (niveau adapté à la page, la doc précise qu'il n'est pas toujours un h3).

### Tuile (tile)
- Doc lue : reference/doc/composants/tile.md
- Variante choisie et pourquoi : la carte et la tuile ont le même usage depuis la 1.5, le choix est visuel. Trois emplois : actualités en tuile verticale avec pictogramme, titre et détail (la date) ; services en tuile avec titre et description ; événements de vie en tuile avec pictogramme et titre. La tuile est retenue plutôt que la carte parce que le brief interdit toute image : les variantes de carte du paquet sont toutes illustrées, sauf « Carte sans image » qui ne porte qu'un titre. Toutes les tuiles sont entièrement cliquables (`fr-enlarge-link`), taille MD, 3 à 6 colonnes sur bureau comme le demande la doc, pleine largeur sur mobile.
- Règles de contenu suivies : titres du brief mot pour mot ; même structure pour toutes les tuiles d'un même ensemble ; un pictogramme distinct par tuile ; la première actualité est mise en avant par une colonne plus large, seule sur sa ligne ; pas de personnalisation du fond ni de la bordure.
- Points d'accessibilité : lien porté uniquement par le titre (h3), explicite ; description et détail après le titre dans le code ; pictogramme décoratif (`aria-hidden="true"`) ; focus autour de la tuile entière.

### Gestionnaire de consentement (consent)
- Doc lue : reference/doc/composants/consent.md
- Variante choisie et pourquoi : le « placeholder de contenu masqué » (`fr-consent-placeholder`), prévu par la doc pour un service tiers désactivé faute de cookies, ce qui est exactement le cas des tutos vidéos Dailymotion. Le bandeau et la modale de gestion des cookies ne sont pas dans le brief et ne sont pas produits.
- Règles de contenu suivies : titre du placeholder = nom du tutoriel, texte du brief mot pour mot, bouton « Gérer les cookies » en secondaire comme le demande le brief (la doc propose un bouton primaire « Autoriser » : le brief prime, un seul primaire par page).
- Points d'accessibilité : titre en h3 avec la classe `fr-h6` de l'exemple ; bouton `<button>` avec intitulé explicite ; lien de transcription placé sous le placeholder, dans la même colonne.

### Pied de page (footer)
- Doc lue : reference/doc/composants/footer.md
- Variante choisie et pourquoi : « Pied de page minimal » : bloc-marque, texte de présentation, quatre liens institutionnels obligatoires, liens du bas, mention de licence.
- Règles de contenu suivies : texte de présentation du brief (concis, moins de 3 lignes) ; liens institutionnels dans l'ordre imposé (info.gouv.fr, service-public.gouv.fr, legifrance.gouv.fr, data.gouv.fr), non modifiés ; liens du bas dans l'ordre du brief ; mention de licence etalab-2.0.
- Points d'accessibilité : `role="contentinfo"`, `id="footer"` pour le lien d'évitement ; mention « Accessibilité : partiellement conforme » présente ; lien du bloc-marque avec `title` « Retour à l’accueil du site - Mes droits sociaux - République Française ».

### Composants lus et écartés
- Carte (card) — Doc lue : reference/doc/composants/card.md — écartée : le brief interdit les images et les variantes de carte du paquet sont toutes illustrées, hormis « Carte sans image » qui ne porte qu'un titre ; la doc autorise une carte sans image avec zone d'action, mais aucune variante d'exemple du paquet ne combine sans image, description et zone d'action, et le contrôle de fidélité des tests s'appuie sur ces variantes.
- Modale (modal) : interdite par le brief (la modale de navigation mobile fait partie de l'en-tête officiel).
- Badge, tag, contenu médias, transcription : non demandés par le brief.

## Note de conception

**Composants retenus.** Liens d'évitement, en-tête avec nom de service et FranceConnect dans les outils, navigation principale à trois liens directs, bandeau d'introduction sur fond bleu France (h1, chapô, bouton primaire, lien), mise en avant Montant Net Social, quatre tuiles d'actualités avec pictogramme et date, quatre tuiles de services avec description suivies de leur lien d'action, quatre tuiles d'événements de vie avec pictogramme, trois placeholders de consentement pour les tutos vidéos avec lien de transcription, liste des partenaires en texte sur fond gris, pied de page minimal.

**Composants écartés.** Carte (voir ci-dessus), modale, badge, tag, contenu médias, transcription.

**Écarts assumés.**
- Pas de modèle de page d'accueil dans le DSFR : composition section par section à partir du squelette.
- Bouton FranceConnect dans `fr-header__tools-links` : les exemples d'en-tête n'y placent que des raccourcis en boutons ; la doc de FranceConnect demande de le proposer en premier mode d'authentification et de l'accompagner de son lien, ce qui est respecté. À vérifier en recette sur mobile (recopie des outils dans le menu par le JS du DSFR).
- Services : le lien d'action est placé sous la tuile plutôt que dans une zone d'action de carte, la tuile étant elle-même cliquable vers la même page. Les deux liens ont la même destination.
- Boutons qui naviguent (« Voir les simulateurs », « Voir tous les services », « Voir tous les événements de vie », « Voir les tutos vidéos ») : demandés comme boutons par le brief, réalisés avec la variante officielle « markup a href » ; un seul primaire.
- Le bouton « Voir tous les événements de vie » est placé sous les quatre tuiles, comme les autres boutons de section, alors que le brief le cite avant elles.
- Les attributs `title` de l'en-tête et du pied de page (« Accueil - Mes droits sociaux - République Française », « Retour à l’accueil du site - … ») suivent le format imposé par la doc ; ils ne sont pas dans le brief.

**Questions ouvertes.**
- Le pied de page doit obligatoirement contenir un lien « Données personnelles » (doc du pied de page) : le brief ne le liste pas, il n'a pas été ajouté. À trancher.
- Les titres en capitales du brief (« MES DROITS SOCIAUX », « ACTUALITÉS », « ÉVÉNEMENTS DE VIE », « NOS PARTENAIRES ») sont repris tels quels ; la typographie du DSFR privilégie la casse de phrase et les lecteurs d'écran peuvent épeler les capitales. Faut-il les passer en casse de phrase ?
- « Etudiants : pensez aux aides au logement ! » est repris tel quel (sans accent sur le E), comme au brief.
- Les pictogrammes choisis pour les actualités et les événements de vie sont une proposition à valider (naissance : santé ; décès : document ; autonomie : coopération humaine ; handicap : accessibilité).
- Adresses provisoires `#` sur tous les liens et boutons, à remplacer par les adresses du portail ; le lien FranceConnect ouvre le site officiel en attendant le parcours de connexion.
