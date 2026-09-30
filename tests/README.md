# tests/

Contrôles automatiques vérifiant que les écrans respectent le DSFR (classes, structure, accessibilité).

Commande : `npm run check -- <nom-d-ecran>` contrôle `screens/<nom>/` (index.html et etat-*.html) et écrit `screens/<nom>/rapport-tests.md` plus des captures dans `screens/<nom>/captures/`. Un chemin de dossier est aussi accepté (ex. `tests/fixtures/ecran-test`). Quatre contrôles : fidélité aux snippets officiels, classes inconnues et styles en ligne, contenus (faux-texte, libellés génériques), accessibilité axe et captures aux largeurs 320 à 1248 px. La commande échoue (code 1) dès qu'il y a un écart aux deux premiers contrôles.
