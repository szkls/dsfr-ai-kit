# tests/

Contrôles automatiques vérifiant que les écrans respectent le DSFR (classes, structure, accessibilité).

Commande : `npm run check -- <nom-d-ecran>` contrôle `screens/<nom>/` (index.html et etat-*.html) et écrit `screens/<nom>/rapport-tests.md` plus des captures dans `screens/<nom>/captures/`. Un chemin de dossier est aussi accepté (ex. `tests/fixtures/ecran-test`). Cinq contrôles : fidélité aux snippets officiels, classes inconnues et styles en ligne, contenus (faux-texte, libellés génériques), accessibilité axe et captures aux largeurs 320 à 1248 px, documentation lue (chaque composant présent dans l'écran doit avoir dans `conception.md` une ligne « Doc lue : reference/doc/composants/<nom-technique>.md », la copie de la doc officielle produite par `npm run doc`). La commande échoue (code 1) dès qu'il y a un écart au premier, au deuxième ou au cinquième contrôle.
