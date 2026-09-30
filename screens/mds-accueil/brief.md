# Brief : Page d'accueil de mesdroitssociaux.gouv.fr, traduite en DSFR

## 1. Le service et son public
mesdroitssociaux.gouv.fr est le portail de l'État qui permet à tout usager de consulter ses droits sociaux, simuler ses prestations et effectuer ses démarches. Public : tout public adulte, souvent sur mobile, avec des usagers éloignés du numérique. Cette page est la page d'accueil, avant connexion.

## 2. La user story
En tant qu'usager, je veux comprendre en un coup d'œil ce que le portail m'offre et accéder aux quatre services principaux, afin de trouver rapidement mes droits ou de lancer une simulation.

## 3. Le point de départ
Modèle de page d'accueil du DSFR. Pas de template maison.

## 4. Les contenus réels
En-tête : bloc-marque « RÉPUBLIQUE FRANÇAISE » ; nom du service : Mes droits sociaux ; baseline : Consultez vos droits, simulez vos prestations, effectuez vos démarches. Navigation principale : Accueil (page courante), Vos services, Vos événements de vie. Outils d'en-tête : bouton FranceConnect « S'identifier avec FranceConnect » (composant officiel), suivi du lien « Qu'est-ce que FranceConnect ? » (lien externe).

Bandeau d'introduction : titre de page (h1) MES DROITS SOCIAUX ; texte : Consultez vos droits, simulez vos prestations, effectuez vos démarches ; bouton principal : Voir les simulateurs ; lien : Qui sommes-nous ?

Mise en avant (composant DSFR adapté) : titre Le Montant Net Social ; texte : Objectifs : simplifier vos démarches et rendre plus claires les ressources prises en compte pour calculer vos aides. ; lien : Tout savoir sur le Montant Net Social.

Section Actualités : titre de section ACTUALITÉS ; lien : Voir toutes les actualités. Quatre actualités présentées en cartes avec titre et date, la première mise en avant : Deux nouveaux documents pour faciliter vos démarches, 11/09/2026 ; La durée des arrêts de travail est désormais plafonnée, 11/09/2026 ; Congé supplémentaire de naissance : un nouveau droit depuis le 1er juillet, 11/09/2026 ; Etudiants : pensez aux aides au logement !, 11/09/2026. Pas d'image de presse : utiliser le composant sans image ou un pictogramme du DSFR.

Section Services : titre de section Santé, Famille, Logement, Retraite, Solidarité, Autour de l'emploi : retrouvez tous vos droits sociaux en un seul endroit. Quatre services, chacun avec titre, description et lien d'action :
- Votre simulateur ; Découvrez en quelques clics les prestations sociales auxquelles vous pourriez prétendre ; lien : Effectuer une simulation.
- Vos droits ; Consultez l'ensemble de vos droits sociaux, retrouvez vos interlocuteurs et vos démarches ; lien : Consultez vos droits.
- Vos ressources ; Consultez l'ensemble de vos ressources personnelles des douze derniers mois ; lien : Accéder à vos ressources.
- Votre activité professionnelle ; Consultez les informations déclarées par vos employeurs, et téléchargez votre attestation. ; lien : Voir votre activité salariée.
Bouton sous la section : Voir tous les services.

Section Événements de vie : surtitre ÉVÉNEMENTS DE VIE ; titre Vous accompagner à chaque étape ; texte : mesdroitssociaux.gouv.fr vous accompagne dans tous les événements de votre vie ; bouton : Voir tous les événements de vie. Quatre entrées avec un pictogramme DSFR chacune : Vous attendez un enfant / naissance ; Vous devez faire face au décès d'un proche ; Autonomie et grand âge ; Vous êtes en situation de handicap.

Section Tutos vidéos : titre Découvrez le site mesdroitssociaux.gouv.fr. Trois tutoriels : La page d'accueil ; La connexion ; Vos droits. Pour chacun, un texte : Pour voir cette vidéo, vous devez autoriser les cookies « Vidéo » Dailymotion. ; un bouton secondaire : Gérer les cookies ; un lien : Voir la transcription textuelle du tuto vidéo « <nom> ». Bouton sous la section : Voir les tutos vidéos.

Section Partenaires : surtitre NOS PARTENAIRES ; titre Un projet porté par ; liste des partenaires en texte (pas de logos disponibles) : France Travail, l'Assurance Maladie, Allocations familiales, MSA, Ministère de la Santé et de la Prévention, la Sécurité sociale, Info Retraite, l'Assurance Retraite, Caisse des Dépôts, Ministère des Solidarités et des Familles, Urssaf, MGEN, Mon Compte Formation, Net-entreprises.fr.

Pied de page : composant officiel, avec le bloc-marque, le texte : Mes droits sociaux est le portail de l'État pour consulter vos droits sociaux, simuler vos prestations et effectuer vos démarches. ; liens du bas : Foire aux questions, Contact, Qui sommes-nous ?, Mentions légales, Gérer les cookies, Accessibilité : partiellement conforme, Plan du site ; plus les liens institutionnels standard du composant.

## 5. Les états et le parcours
Un seul état : la page d'accueil avant connexion. Parcours : chaque bouton et lien mène vers une page du portail (adresses provisoires en #) ; FranceConnect ouvre le parcours de connexion. Navigation principale : Accueil est la page courante.

## 6. Les contraintes
Niveau RGAA AA. Conçu d'abord pour mobile : les sections en cartes ou tuiles passent à une colonne. Aucune illustration ni image de presse : pictogrammes du DSFR uniquement. Aucun style hors DSFR : pas de boutons arrondis ni de couleurs maison. Un seul h1 ; chaque section a un titre h2. Pas de modale, pas de contenu qui bouge seul.

## 7. Les critères d'acceptation
- L'en-tête officiel contient le bloc-marque, le nom du service, la baseline, la navigation à trois entrées avec Accueil marqué comme page courante, et le bouton FranceConnect officiel.
- Chaque section de la rubrique 4 existe, dans cet ordre, avec ses textes mot pour mot.
- Les quatre services et les quatre actualités sont des composants de carte ou de tuile du DSFR, choisis et justifiés dans conception.md.
- Les quatre événements de vie utilisent des pictogrammes du DSFR, pas d'images inventées.
- Tous les boutons sont des boutons DSFR ; les liens d'action sont des liens DSFR avec la variante à icône quand le composant le prévoit.
- Le pied de page est le composant officiel avec les liens de la rubrique 4.
- Aucune classe hors DSFR, aucun style en ligne, aucun faux-texte, aucune image absente.
