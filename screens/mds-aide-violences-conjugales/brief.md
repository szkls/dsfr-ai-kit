# Brief : Aide d'urgence aux victimes de violences conjugales, traduite en DSFR

## 1. Le service et son public
mesdroitssociaux.gouv.fr, page /avvc, avant connexion, ancien design. Public : victimes de violences conjugales, dans une situation de danger et d'urgence ; la page doit rester sobre, rassurante et discrète. Contenus relevés sur https://www.mesdroitssociaux.gouv.fr/avvc/ le 01/10/2026 : questions dépliées, calculateur essayé sur ses 35 combinaisons, test d'éligibilité parcouru sur toutes ses branches, destination de chaque lien relevée. Aucune demande n'a été envoyée.

## 2. La user story
En tant que victime de violences conjugales, je veux savoir en quelques questions si j'ai droit à l'aide d'urgence, combien je peux toucher et où faire la demande, afin de me mettre à l'abri rapidement et sans laisser de traces.

## 3. Le point de départ
Même squelette que mds-accueil (en-tête, navigation sans rubrique courante, pied de page), corps sur 8 colonnes. La demande elle-même se fait sur le site de la MSA ou de la CAF : la page n'a pas de formulaire de demande.

## 4. Les contenus réels
Fil d'Ariane : Accueil > Aide d'urgence aux victimes de violences conjugales.
- Titre (h1) : Aide d'urgence aux victimes de violences conjugales. Chapô : Cette aide d'urgence a pour but de vous garantir les conditions financières nécessaires pour vous mettre à l'abri. Deux points : Dans les plus brefs délais ; Des critères d'éligibilité simplifiés. Bouton : Accéder à la demande d'aide (mène au test d'éligibilité).
- Encadré « Une procédure discrète » : La demande d'aide a été adaptée pour limiter vos risques : vous choisirez sur quelles coordonnées vous serez recontacté. Si l'auteur des violences peut accéder à votre courrier, vos mails ou votre téléphone, nous vous recommandons d'indiquer, dans votre demande d'aide, des coordonnées de contact différentes et sécurisées. Lien : Apprenez à effacer vos traces sur internet (arretonslesviolences.gouv.fr) → https://arretonslesviolences.gouv.fr/comment-effacer-mes-traces.
- Huit questions dépliables, réponses mot pour mot : Qu'appelle-t-on des “violences conjugales” ? ; En quoi consiste cette aide ? ; Dans le cas d'un prêt, quelles sont les modalités de remboursement ? ; Qui peut bénéficier de cette aide ? ; Quel justificatif est nécessaire ? (lien En savoir plus sur l'obtention de ce justificatif (service-public.fr) → service-public.gouv.fr F12544) ; Quel est le montant de l'aide financière ? (calculateur) ; Est-ce que cette aide est imposable ? ; Comment se déroule la demande ?
- Calculateur : 1/2 - Combien d'enfants à charge avez-vous ? (aide : Enfants âgés de moins de 21 ans…; Aucun enfant, 1 enfant, 2 enfants, 3 enfants, 4 enfants ou plus) ; 2/2 - Quelles sont vos dernières ressources connues (mois dernier ou mois précédent), en montant net social ? (liste des ressources prises en compte, aide « Si vous ne connaissez pas le montant net social de vos ressources, utilisez le montant net à payer. », sept tranches de Moins de 722 € à Plus de 4762 €) ; bouton Calculer le montant ; résultat « D'après ces informations, si vous êtes éligible, votre aide financière sera de N € » et « Il s’agira d'une aide non remboursable. » ou « Il s’agira d'un prêt sans intérêt. », selon le barème relevé (35 combinaisons).
- Test d'éligibilité « Accéder à la demande d'aide » : texte d'introduction, « Toutes les questions sont obligatoires. », quatre questions affichées l'une après l'autre : 1/4 résidence (Oui/Non), 2/4 nationalité ou titre de séjour (Oui/Non), 3/4 justificatif de moins de 12 mois (Oui/Non), 4/4 organisme social (MSA, CAF, Autre / Je ne sais pas).
- Issues : trois refus (résidence, statut, justificatif) avec leur message et leurs liens (vers la question « Qui peut bénéficier de cette aide ? », vers le justificatif sur service-public.fr, vers les associations sur arretonslesviolences.gouv.fr) ; deux orientations : « Vous remplissez les conditions pour demander l'Aide aux Victimes de Violences Conjugales. » puis « Votre dossier sera traité par la MSA. » avec Faire la demande sur le site de la MSA, ou « …par la CAF (créez un compte si besoin). » avec Faire la demande sur le site de la CAF (aussi pour « Autre / Je ne sais pas »).
- Voir aussi : trois liens externes avec titre, description et site : Besoin d'aide : à qui vous adresser ? (arretonslesviolences.gouv.fr) ; Violence conjugale - Service Public (service-public.fr) ; Signaler une violence conjugale (service-public.fr, plateforme de signalement).

## 5. Les états et le parcours
index.html : état initial, interactif (questions qui s'affichent au fil des réponses, calculateur). Un fichier par état remarquable : etat-residence-non, etat-statut-non, etat-justificatif-non, etat-eligible-msa, etat-eligible-caf, etat-montant. Les liens vers MSA, CAF et sites d'aide s'ouvrent dans une nouvelle fenêtre. Accès dans le prototype depuis le plan du site.

## 6. Les contraintes
Niveau RGAA AA, mobile d'abord, aucune image (illustrations et icônes du site retirées), aucun style hors DSFR, un seul h1, messages dynamiques annoncés aux lecteurs d'écran. Rien ne doit inciter à rester connecté ou à laisser des traces.

## 7. Les critères d'acceptation
- Les réponses du test et du calculateur produisent exactement les messages et montants relevés sur le site.
- Chaque question est un groupe de boutons radio officiel, sauf la question à sept tranches qui devient une liste déroulante, comme l'exige la doc du bouton radio au-delà de cinq choix.
- Textes mot pour mot ; aucune classe hors DSFR, aucun style en ligne, aucun faux-texte.
