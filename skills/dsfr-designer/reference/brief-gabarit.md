# Gabarit de brief pour un écran DSFR

À copier dans `screens/<nom>/brief.md` et à remplir intégralement. Les sept rubriques sont obligatoires : la skill dsfr-designer s'arrête si l'une manque.

## 1. Le service et son public
Décrire en deux phrases le service public concerné et qui l'utilise (usager, agent, entreprise), avec leur contexte d'usage (mobile, guichet, bureau).

## 2. La user story
Une seule, sous la forme : « En tant que …, je veux …, afin de … ». Si plusieurs stories sont nécessaires, faire un écran par story.

## 3. Le point de départ
Indiquer le modèle de page DSFR à utiliser (voir reference/modeles.md) ou le template maison de templates/ qui sert de base, ou « à déterminer » si l'on souhaite une proposition.

## 4. Les contenus réels
Donner tous les textes définitifs : titres, libellés de champs et de boutons, textes d'aide, messages d'erreur et de succès. Jamais de faux-texte ni de « à compléter » : ce qui n'est pas écrit ici ne sera pas inventé.

## 5. Les états et le parcours
Lister chaque état de l'écran (initial, erreur, chargement, succès, vide…), d'où l'utilisateur arrive, et où mène chaque action (bouton, lien).

## 6. Les contraintes
Préciser les composants interdits ou imposés, les données sensibles à traiter avec précaution, le niveau RGAA visé, et les points de rupture (mobile, tablette, bureau) à couvrir.

## 7. Les critères d'acceptation
Une phrase vérifiable par ligne, du type « Le bouton “Valider” est désactivé tant que le champ email est vide ». Ils serviront de grille à la relecture.
