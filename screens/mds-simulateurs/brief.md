# Brief : Simuler vos aides (hub des simulateurs), traduit en DSFR

## 1. Le service et son public
mesdroitssociaux.gouv.fr. Usagers de mesdroitssociaux.gouv.fr, avant connexion. Contenus relevés sur https://www.mesdroitssociaux.gouv.fr/simulateurs le 01/10/2026 (outillage : scripts/mds/, relevés bruts dans scripts/mds/releves/).

## 2. La user story
En tant qu'usager, je veux voir tous les simulateurs, filtrer par thème et lancer celui qui me concerne, afin d'estimer mes aides.

## 3. Le point de départ
Gabarit commun du prototype (en-tête, navigation, pied de page et panneau cookies de mds-accueil), corps sur 8 colonnes.

## 4. Les contenus réels
Titre (h1) : Simuler vos aides. Chapô : Découvrez en quelques clics les prestations sociales que vous pouvez demander. « Simuler 58 aides en une seule fois » et sa tuile (Simuler en une seule fois 58 aides sociales nationales et locales., 20 - 25 min). Filtres par thèmes : Famille, Handicap, Logement, Santé, Solidarité, Urgence. 8 tuiles : Aide à la garde d'enfant en structure d'accueil (CMG et PSU) [Famille] 5 min ; Aide au logement (AL) [Logement, Connecté] 10 - 15 min ; Allocation aux Adultes Handicapés (AAH) [Handicap, Connecté] 5 - 10 min ; Complémentaire Santé Solidaire (CSS) [Santé, Connecté] 5 - 10 min ; Prime à l'adoption [Famille] 5 min ; Prime à la naissance [Famille] 5 min ; Revenu de Solidarité Active (RSA) et Prime d'Activité (PA) [Solidarité] 5 - 10 min ; Victime de violence conjugale [Urgence] 5 min.

## 5. Les états et le parcours
Un seul état ; filtrage par tags sélectionnables (script de la page). Chaque tuile mène à l'écran du simulateur dans le prototype.

## 6. Les contraintes
Niveau RGAA AA, mobile d'abord, aucune image (illustrations du site retirées), aucun style hors DSFR, un seul h1.

## 7. Les critères d'acceptation
- Textes mot pour mot ; aucune classe hors DSFR, aucun style en ligne, aucun faux-texte.
- Aucun lien sans destination : chaque lien mène à un écran du prototype, à un site externe ou à la page de limite du prototype pour les écrans connectés.
