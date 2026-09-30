# Brief : Vos évènements de vie, traduit en DSFR

## 1. Le service et son public
mesdroitssociaux.gouv.fr. Page d'entrée des évènements de vie, avant connexion. Contenus relevés sur https://www.mesdroitssociaux.gouv.fr/evenements-de-vie le 30/09/2026 (page déjà en DSFR sur le site, reprise pour que le prototype mène aux deux parcours refaits).

## 2. La user story
En tant qu'usager qui vit un évènement (naissance, décès, perte d'emploi…), je veux trouver la page qui correspond à ma situation, en filtrant par thème, afin de connaître mes démarches.

## 3. Le point de départ
Même squelette que mds-accueil. Pas de template maison.

## 4. Les contenus réels
En-tête, navigation (entrée « Vos événements de vie » courante), pied de page : identiques à mds-accueil. Fil d'Ariane : Accueil > Vos évènements de vie.
Titre (h1) : Vos évènements de vie. Chapô : Mes droits sociaux vous accompagne dans tous les évènements de votre vie.
Filtres : libellé « Filtrer par thèmes : », six tags sélectionnables Emploi, Famille, Grand âge, Handicap, International, Logement. Compteur : « 15 évènements de vie affichés ».
Quinze tuiles, chacune avec son thème en tag, dans l'ordre du site :
- Emploi : Vous cherchez un emploi (page du site).
- Famille : Vous adoptez un enfant (page du site) ; Vous attendez ou venez d’avoir un enfant (mds-parcours-naissance) ; Vous avez besoin de faire garder vos enfants (page du site) ; Vous faites face au décès d’un proche (mds-parcours-deces) ; Vous vous séparez de votre conjoint (service-public.gouv.fr, fiche F33362).
- Grand âge : Autonomie et grand âge (page du site) ; Vous préparez votre retraite (info-retraite.fr).
- Handicap : Votre enfant est en situation de handicap (page du site) ; Vous êtes en situation de handicap (page du site).
- International : Vous êtes étranger et vous vivez en France (service-public.gouv.fr, N19804) ; Vous partez à l’étranger (diplomatie.gouv.fr) ; Vous revenez vivre en France (diplomatie.gouv.fr).
- Logement : Vous partez du domicile de vos parents (1jeune1solution.gouv.fr) ; Vous quittez votre logement (service-public.gouv.fr, F14128).
Lien de fin : Haut de page.

## 5. Les états et le parcours
Un seul état au chargement, tous filtres désactivés. Activer un ou plusieurs tags n'affiche que les tuiles des thèmes choisis et met à jour le compteur ; tout désactiver réaffiche les quinze tuiles. Les parcours déjà en DSFR sur le site sont provisoires (#) dans le prototype ; les sites externes s'ouvrent dans une nouvelle fenêtre.

## 6. Les contraintes
Niveau RGAA AA, mobile d'abord, aucune image, aucun style hors DSFR, un seul h1, compteur annoncé aux lecteurs d'écran.

## 7. Les critères d'acceptation
- Les filtres sont des tags sélectionnables officiels (six au plus, conforme à la doc) et le compteur suit le filtrage.
- Textes mot pour mot ; aucune classe hors DSFR, aucun style en ligne, aucun faux-texte.
