# mcp/ : serveur MCP local du kit DSFR

1. **Ce que c'est** : un serveur MCP (Model Context Protocol) local qui met le kit directement dans l'IA : doc officielle complète, fiches d'équipe, snippets exacts du paquet, modèles, templates, tests. Plus de doc à ouvrir à côté, plus de snippet écrit de mémoire.
2. **Aucune donnée propre** : il relit à chaque appel `reference/` (index et copie de la doc), `fiches/`, `templates/`, `screens/`, `skills/` et `node_modules/@gouvfr/dsfr/example`. Une montée de version du DSFR (`npm run index`) le met à jour sans rien changer. Seule exception : `mcp/data/*.json`, les données réalistes, à enrichir librement.
3. **Lancer à la main** : `npm run mcp` (transport stdio, il attend un client). Tester : `npm run mcp:call` liste outils et prompts ; `npm run mcp:call -- get_component '{"nom":"input"}'` appelle un outil ; `npm run mcp:call -- prompt:build_screen '{"nom":"rdv-prefecture"}'` affiche un prompt.
4. **Claude Code** : le serveur « dsfr-kit » est déclaré dans `.mcp.json` à la racine ; ouvrir le dépôt, accepter le serveur de projet quand Claude Code le propose (ou `/mcp` pour vérifier), puis les outils apparaissent sous `mcp__dsfr-kit__…`.
5. **VS Code (Copilot)** : déclaré dans `.vscode/mcp.json` ; ouvrir la palette de commandes, « MCP : List Servers », démarrer « dsfr-kit », puis activer ses outils dans le mode agent.
6. **Outils composants et fondamentaux** : `list_components`, `get_component(nom)` (doc complète + fiche + snippets de chaque variante + dépendances CSS, en une réponse), `get_fundamental(nom)`, `search_doc(texte)`.
7. **Outils modèles et templates** : `list_page_models`, `get_page_model(nom, sous_page?)`, `list_templates`, `get_template(nom, etat?)`.
8. **Outils écran** : `get_brief_template`, `get_page_skeleton`, `check_screen(nom)` (lance `npm run check`), `get_realistic_data(type, nombre?, graine?)` avec les types identites, adresses, communes, dossiers, dates, montants, statuts.
9. **Prompts** (ils lisent les SKILL.md, rien n'est dupliqué) : `build_screen(nom)`, `review_screen(nom)`, `generate_state(nom, etat)`, `suggest_next_steps(nom)`.
10. **Règles** : celles d'AGENTS.md, inchangées ; chaque réponse rappelle la ligne « Doc lue : … » à noter dans `conception.md`. Le serveur « dsfr » (SocialGouv) reste branché pour la veille sur les nouveautés.
