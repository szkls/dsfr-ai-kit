# Brief : Parcours « Vous faites face au décès d’un proche », traduit en DSFR

## 1. Le service et son public
mesdroitssociaux.gouv.fr. Parcours évènement de vie « décès », avant connexion, encore en ancien design sur le site. Contenus relevés sur https://www.mesdroitssociaux.gouv.fr/vos-evenements-de-vie/parcours-deces le 30/09/2026, chaque pavé déplié, chaque lien suivi pour relever sa destination.

## 2. La user story
En tant que proche d'une personne décédée, je veux savoir quelles démarches faire, dans quel délai et auprès de qui, afin de ne rien oublier dans un moment difficile.

## 3. Le point de départ
Même squelette que mds-accueil. Alignement sur le modèle des six parcours déjà en DSFR sur le site : lien de retour « Revenir aux évènements de vie », titre repris de la tuile du hub, tag de thème « Famille », chapô, puis contenu ; lien « Haut de page » en fin de page.

## 4. Les contenus réels
En-tête, navigation (rubrique « Vos événements de vie » active), pied de page : identiques à mds-accueil. Fil d'Ariane : Accueil > Vos évènements de vie > Vous faites face au décès d’un proche.
Titre (h1) : Vous faites face au décès d’un proche. Tag : Famille. Chapô : Lors du décès d'un proche, certaines démarches doivent être faites rapidement.
Deux encadrés du site : « Découvrir les aides que vous pouvez demander » avec le lien « S’informer sur vos droits » (outil de recherche d'aides du site, provisoire dans le prototype) ; « Vous venez de perdre un enfant ? » avec « S’informer sur l'accompagnement », qui ouvre une fenêtre : titre VOUS VENEZ DE PERDRE UN ENFANT ?, deux paragraphes, « Votre enfant est décédé : » et cinq livrets PDF (Avant sa naissance, A domicile, En établissement de santé (hôpital, clinique...), Sur la voie publique, dans un établissement scolaire, de loisirs, de vacances, A l’étranger ; 2,78 Mo chacun).
Sommaire : Juste après le décès (dans les 24 heures, dans les 8 jours) ; Plus tard après le décès (dans le mois).
Frise : pour chaque délai, groupes « Que faire ? » et « Qui contacter ? Et pourquoi ? », puis les dix-neuf démarches du site (faire constater le décès, déclarer le décès, préparer les obsèques, l'employeur, France Travail, les banques, les caisses de retraite, la caisse d’assurance maladie, la caisse d’allocations familiales, les mutuelles et organismes de prévoyance, les établissements scolaires, le notaire, l'organisme d’assurance-vie, le juge des tutelles, le centre des impôts, les assurances et les organismes de crédit, le propriétaire du logement, les fournisseurs d’eau, d’électricité, de téléphone, la préfecture), textes, listes et liens mot pour mot.

## 5. Les états et le parcours
Un seul état, démarches repliées à l'arrivée. Le sommaire renvoie aux périodes et délais. Les liens externes s'ouvrent dans une nouvelle fenêtre ; « Découvrir les aides que vous pouvez demander » est provisoire (#).

## 6. Les contraintes
Niveau RGAA AA, mobile d'abord, aucune image (l'illustration du site est retirée), aucun style hors DSFR, un seul h1, hiérarchie h2 période, h3 délai, h4 groupe, h5 démarche.

## 7. Les critères d'acceptation
- Chaque démarche du site est présente, dans son délai et son groupe, avec son texte et ses liens.
- La fenêtre « Vous venez de perdre un enfant ? » est une modale officielle ouverte par un bouton, et les livrets sont des liens de téléchargement avec format et poids.
- Textes mot pour mot ; aucune classe hors DSFR, aucun style en ligne, aucun faux-texte.
