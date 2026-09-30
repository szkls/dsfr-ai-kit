# Brief : Actualités (liste), traduite en DSFR

## 1. Le service et son public
mesdroitssociaux.gouv.fr, portail de l'État pour consulter ses droits sociaux, simuler ses prestations et effectuer ses démarches. Public : tout public adulte, souvent sur mobile. Cette page liste les actualités publiées sur le portail, avant connexion. Contenus relevés sur la page https://www.mesdroitssociaux.gouv.fr/accueil/actualites le 30/09/2026.

## 2. La user story
En tant qu'usager, je veux parcourir les actualités du portail par date, afin de repérer un changement qui me concerne et lire l'article.

## 3. Le point de départ
Même squelette que l'écran mds-accueil (pas de modèle de page de liste dans le DSFR). Pas de template maison.

## 4. Les contenus réels
En-tête, navigation et pied de page : identiques à l'écran mds-accueil (Accueil n'est plus la page courante). Fil d'Ariane : Accueil > Actualités.
Titre de page (h1) : ACTUALITÉS. Chapô : En ce moment sur mesdroitssociaux.gouv.fr.
Liste de 32 actualités, chacune avec titre et date (la page d'origine affiche aussi une image de presse et un chapô, non repris) :
- Deux nouveaux documents pour faciliter vos démarches, 11/09/2026 (mène à l'article type)
- La durée des arrêts de travail est désormais plafonnée, 11/09/2026
- Congé supplémentaire de naissance : un nouveau droit depuis le 1er juillet, 11/09/2026
- Etudiants : pensez aux aides au logement !, 11/09/2026
- Augmentation du SMIC au 1er juin 2026, 17/06/2026
- Allocation de rentrée scolaire, 17/06/2026
- Pensez à votre carte européenne d’assurance maladie, 17/06/2026
- La prime d’activité revalorisée, 21/05/2026
- Aidants : prenez soin de vous, 21/05/2026
- Covid-19 : rappel vaccinal pour les personnes fragiles, 21/05/2026
- Simulation de votre retraite, 21/05/2026
- Vos aides augmentent au 1er avril, 17/04/2026
- Facilitez vos connexions avec FranceConnect, 17/04/2026
- Allocations familiales : L’âge de la majoration évolue au 1er mars 2026, 15/03/2026
- Mon soutien psy : un accompagnement psychologique accessible à tous, 15/03/2026
- Faire ses démarches en ligne : sur le site demarche.numerique.gouv.fr, 15/03/2026
- Indemnités journalières maladie : nouveaux montants en 2026, 16/02/2026
- Solidarités : ce qui change en 2026, 16/02/2026
- Estimez vos aides à l’arrivée d’un enfant, 23/01/2026
- La carte Vitale sur votre téléphone, 16/02/2026
- Aide au logement pour les jeunes en alternance, 21/01/2026
- Résidence alternée : aide à la garde pour chaque parent, 23/01/2026
- Retraite des agriculteurs : nouveau calcul dès 2026, 17/12/2025
- Estimer l’aide financière à la garde d’enfant, 21/11/2025
- Assurés MGEN : changement vers ameli, 20/11/2025
- Violences conjugales : demander une aide financière, 21/11/2025
- Attention courriel, appel ou SMS frauduleux, 15/01/2025
- Vos droits lors du décès d'un proche, 16/01/2024
- Le montant net social, 02/04/2025
- Une erreur sur vos revenus de remplacement (indemnités journalières, chômage...) ?, 30/03/2021
- Une erreur dans vos revenus d'activités ?, 02/04/2025
- Contacter nos services, 28/01/2026
Pagination : 12 actualités par page, 3 pages, page 1 affichée. Lien de retour : Revenir à l'accueil.

## 5. Les états et le parcours
Un seul état : page 1 de la liste. Parcours : le fil d'Ariane et le lien de retour mènent à l'accueil ; la première actualité mène à l'article type (mds-actualite-article) ; les autres actualités et les autres pages de la pagination sont provisoires (#).

## 6. Les contraintes
Niveau RGAA AA, mobile d'abord (une colonne sur mobile, trois sur bureau). Aucune image de presse : composant sans image. Aucun style hors DSFR. Un seul h1, un h3 par actualité.

## 7. Les critères d'acceptation
- En-tête, navigation, pied de page et fil d'Ariane sont les composants officiels.
- Les 12 premières actualités sont des tuiles ou cartes du DSFR avec titre cliquable et date, dans l'ordre du site.
- La pagination est le composant officiel, avec la page courante signalée et « Précédent » désactivé en page 1.
- Aucune classe hors DSFR, aucun style en ligne, aucun faux-texte, aucune image absente.
