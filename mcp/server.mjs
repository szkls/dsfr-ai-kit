#!/usr/bin/env node
// Serveur MCP local « dsfr-kit » : met le kit DSFR du dépôt directement dans l'IA (transport stdio).
// Il lit reference/, fiches/, templates/, screens/ et skills/ ; il n'a aucune donnée propre hormis
// mcp/data/*.json (données réalistes de service public). Lancer : npm run mcp
// Journal sur stderr uniquement : stdout est réservé au protocole MCP.

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import * as kit from './lib/kit.mjs';

const server = new McpServer(
  { name: 'dsfr-kit', version: '1.0.0' },
  {
    instructions: [
      'Kit de génération d\'écrans DSFR. Règles absolues (AGENTS.md) : aucun markup DSFR écrit de mémoire, aucune classe hors fr-, aucun contenu inventé,',
      'un dossier screens/<nom>/ par écran, et lecture intégrale de la doc de chaque composant employé, notée « Doc lue : reference/doc/composants/<nom>.md » dans conception.md.',
      'Pour un composant : get_component (doc complète + fiche + snippets exacts). Pour un fondamental : get_fundamental. Pour un modèle de page : get_page_model.',
      'Pour un écran : prompts build_screen, review_screen, generate_state, suggest_next_steps ; outil check_screen pour lancer les tests.'
    ].join(' ')
  }
);

const text = (t) => ({ content: [{ type: 'text', text: t }] });
const error = (t) => ({ content: [{ type: 'text', text: `Erreur : ${t}` }], isError: true });
const fence = (code, lang = 'html') => '```' + lang + '\n' + code + '\n```';

// ------------------------------------------------------------------ composants
server.registerTool('list_components', {
  title: 'Lister les composants DSFR',
  description: 'À utiliser au début de la conception d\'un écran, pour choisir les composants : liste des composants du paquet DSFR installé avec nom français, nom technique, résumé d\'usage en une ligne tiré de la doc officielle, et présence d\'une fiche d\'équipe. Ensuite, appeler get_component pour chaque composant retenu.',
  inputSchema: {}
}, async () => {
  const list = kit.components();
  if (!list.length) return error('reference/composants.md introuvable : lancer npm run index.');
  const lines = [`# Composants DSFR ${kit.version()} (${list.length})`, '', '| Nom français | Nom technique | Usage (doc officielle) | Fiche d\'équipe |', '|---|---|---|---|'];
  for (const c of list) lines.push(`| ${c.title} | ${c.id} | ${kit.docSummary(c.docFile) || '—'} | ${kit.fiche(c.id) ? `fiches/${c.id}.md` : '—'} |`);
  const idx = kit.docIndex();
  const extra = (idx?.subjects || []).filter((s) => s.section === 'composants' && !list.some((c) => c.id === s.technical));
  if (extra.length) lines.push('', `Documentés sur le site mais absents du paquet installé (ne pas utiliser) : ${extra.map((s) => `${s.title} (${s.technical})`).join(', ')}.`);
  lines.push('', 'Appeler get_component(nom) avant d\'écrire le HTML d\'un composant.');
  return text(lines.join('\n'));
});

server.registerTool('get_component', {
  title: 'Tout ce qu\'il faut pour employer un composant',
  description: 'À appeler pour CHAQUE composant avant d\'écrire son HTML, et à relire en revue. Renvoie en une seule réponse : la documentation officielle complète du composant (présentation, design, code, accessibilité, copiée de systeme-de-design.gouv.fr), la fiche d\'usage de l\'équipe si elle existe (une fiche validée prime sur la doc), la liste des variantes avec le snippet HTML exact de chacune (copié de la page d\'exemple du paquet, à adapter uniquement dans ses contenus), et les dépendances CSS. Le snippet n\'est jamais servi sans la doc : lire la doc en entier, puis noter « Doc lue : reference/doc/composants/<nom-technique>.md » dans conception.md. Accepte le nom technique (button), le nom français (bouton) ou le nom du site (fil-d-ariane).',
  inputSchema: { nom: z.string().describe('Nom technique (ex. input), nom français (ex. champ de saisie) ou nom du site (ex. champ-de-saisie)') }
}, async ({ nom }) => {
  const c = kit.findComponent(nom);
  if (!c) return error(`composant « ${nom} » inconnu. Appeler list_components pour la liste.`);
  if (c.siteOnly) return error(`« ${c.siteOnly.title} » est documenté sur le site mais absent du paquet DSFR ${kit.version()} installé : pas de snippet, ne pas l'utiliser. Doc : ${c.siteOnly.file}.`);
  const doc = kit.docText(c.docFile);
  const fiche = kit.fiche(c.id);
  const snippets = kit.snippets(c.example);
  const out = [];
  out.push(`# ${c.title} (${c.id}) — DSFR ${kit.version()}`, '');
  out.push(`- Doc officielle copiée : ${c.docFile || 'absente (lancer npm run doc)'}`, `- Fiche d'équipe : ${fiche ? `fiches/${c.id}.md` : 'aucune'}`, `- Page d'exemple du paquet : ${c.example}`, `- Dépendances CSS : ${c.css}`, `- Doc en ligne : ${c.docUrl}`, '');
  out.push('À noter dans conception.md après lecture : `Doc lue : ' + (c.docFile || `reference/doc/composants/${c.id}.md`) + '`', '');
  out.push('---', '', '# 1. Documentation officielle complète', '', doc || '_Documentation absente : lancer `npm run doc`._', '');
  out.push('---', '', '# 2. Fiche d\'usage de l\'équipe', '', fiche || '_Aucune fiche pour ce composant : la doc officielle fait foi._', '');
  out.push('---', '', `# 3. Variantes et snippets exacts (${snippets.length}, depuis ${c.example})`, '', 'Copier le bloc de la variante retenue tel quel, puis adapter uniquement les textes, liens, identifiants et attributs de comportement du brief. Ne pas ajouter de classe hors fr-, ne pas modifier la structure.', '');
  snippets.forEach((s, i) => out.push(`## ${i + 1}. ${s.variant}`, '', fence(s.html), ''));
  if (!snippets.length) out.push(`_Aucun extrait de code trouvé dans ${c.example}._`, '');
  const subs = kit.subPages(c.example);
  if (subs.length) out.push(`Sous-pages d'exemple (autres mises en situation) : ${subs.join(', ')}`, '');
  return text(out.join('\n'));
});

// ------------------------------------------------------------------ fondamentaux
server.registerTool('get_fundamental', {
  title: 'Doc complète d\'un fondamental',
  description: 'À lire une fois par écran, avant de choisir les composants, pour les cinq fondamentaux : couleurs, typographie, grille (grille-et-points-de-rupture), espacements, icônes (et pictogrammes). Renvoie la documentation officielle complète du fondamental et la fiche d\'équipe si elle existe. Noter « Doc lue : reference/doc/fondamentaux/<nom>.md » dans conception.md. Sans argument valable, renvoie la liste des fondamentaux disponibles.',
  inputSchema: { nom: z.string().describe('couleurs, typographie, grille, espacement, icone, pictogramme, ombres, medias, principes, favicon, classes-css-d-affichage') }
}, async ({ nom }) => {
  const f = kit.findFundamental(nom);
  if (!f) return error(`fondamental « ${nom} » inconnu. Disponibles : ${kit.fundamentals().map((x) => `${x.name} (${x.title})`).join(', ')}.`);
  const fiche = kit.fiche(f.name);
  return text([`# ${f.title} — fondamental`, '', `- Doc officielle copiée : ${f.file}`, `- Fiche d'équipe : ${fiche ? `fiches/${f.name}.md` : 'aucune'}`, '', 'À noter dans conception.md : `Doc lue : ' + f.file + '`', '', '---', '', kit.docText(f.file), '', ...(fiche ? ['---', '', '# Fiche d\'usage de l\'équipe', '', fiche] : [])].join('\n'));
});

// ------------------------------------------------------------------ modèles de pages
server.registerTool('list_page_models', {
  title: 'Lister les modèles de pages et blocs fonctionnels',
  description: 'À utiliser pour choisir le point de départ d\'un écran quand aucun template de l\'équipe ne convient : pages types (connexion, création de compte, pages d\'erreur) et blocs fonctionnels (nom et prénom, email, téléphone, adresse, date…) du paquet DSFR, avec leur doc copiée quand le site la documente. Ensuite, get_page_model(nom).',
  inputSchema: {}
}, async () => {
  const list = kit.models();
  if (!list.length) return error('reference/modeles.md introuvable : lancer npm run index.');
  const lines = ['# Modèles DSFR (pages types et blocs fonctionnels)', '', '| Catégorie | Nom | Nom technique | Page d\'exemple | Doc copiée | Résumé |', '|---|---|---|---|---|---|'];
  for (const m of list) lines.push(`| ${m.category} | ${m.title} | ${m.id} | ${m.example} | ${m.docFile || '—'} | ${kit.docSummary(m.docFile) || '—'} |`);
  const idx = kit.docIndex();
  const extra = (idx?.subjects || []).filter((s) => s.section === 'modeles' && !list.some((m) => m.docFile === s.file));
  if (extra.length) lines.push('', `Pages de doc « modèles » du site sans équivalent direct dans le paquet : ${extra.map((s) => `${s.title} (${s.file})`).join(', ')}.`);
  return text(lines.join('\n'));
});

server.registerTool('get_page_model', {
  title: 'Doc et HTML d\'un modèle de page',
  description: 'À appeler après avoir choisi un modèle (page type ou bloc fonctionnel) : renvoie sa documentation officielle complète copiée du site, puis son HTML d\'exemple exact du paquet (le corps <main> d\'une page type, ou les variantes avec leur snippet pour un bloc fonctionnel), et la liste de ses sous-pages. Noter « Doc lue : reference/doc/modeles/<nom>.md » dans conception.md. Accepte le nom technique (login, register, name, email…), le nom français ou le nom du site (page-de-connexion).',
  inputSchema: { nom: z.string().describe('Ex. login, register, response/not-found, name, email, tel, date, address, civility, company, nationality, ou page-de-connexion'), sous_page: z.string().optional().describe('Chemin d\'une sous-page d\'exemple à renvoyer en entier (tel que listé dans la réponse), ex. 1-single') }
}, async ({ nom, sous_page }) => {
  const m = kit.findModel(nom);
  if (!m) return error(`modèle « ${nom} » inconnu. Appeler list_page_models.`);
  const subs = kit.subPages(m.example);
  const out = [`# ${m.title} (${m.id}) — ${m.category}`, '', `- Doc officielle copiée : ${m.docFile || 'aucune page dédiée sur le site pour ce modèle'}`, `- Page d'exemple du paquet : ${m.example}`, `- Dépendances CSS : ${m.css}`, `- Doc en ligne : ${m.docUrl}`, '', 'À noter dans conception.md : `Doc lue : ' + (m.docFile || m.example) + '`', '', '---', '', '# 1. Documentation officielle', '', kit.docText(m.docFile) || '_Le site ne documente pas ce modèle séparément : la page d\'exemple du paquet fait foi._', '', '---', ''];
  if (sous_page) {
    const target = subs.find((s) => s.includes(`/${sous_page.replace(/^\/|\/$/g, '')}/`));
    if (!target) return error(`sous-page « ${sous_page} » inconnue. Sous-pages : ${subs.join(', ') || 'aucune'}.`);
    out.push(`# 2. HTML exact de la sous-page ${target}`, '', fence(kit.pageBody(target)), '');
  } else if (m.category === 'bloc fonctionnel') {
    const snippets = kit.snippets(m.example);
    out.push(`# 2. Variantes et snippets exacts (${snippets.length}, depuis ${m.example})`, '');
    snippets.forEach((s, i) => out.push(`## ${i + 1}. ${s.variant}`, '', fence(s.html), ''));
  } else {
    out.push(`# 2. HTML exact de la page type (${m.example}, corps <main>)`, '', fence(kit.pageBody(m.example)), '');
  }
  out.push(subs.length ? `Sous-pages d'exemple : ${subs.join(', ')} (passer sous_page pour en obtenir une en entier).` : 'Aucune sous-page d\'exemple.');
  return text(out.join('\n'));
});

// ------------------------------------------------------------------ templates de l'équipe
server.registerTool('list_templates', {
  title: 'Lister nos écrans de référence',
  description: 'À consulter en premier pour choisir le point de départ d\'un écran : les écrans de référence de l\'équipe dans templates/ (un dossier par écran avec index.html, ses états etat-*.html et sa fiche). Un template qui correspond au besoin prime sur un modèle de page du DSFR.',
  inputSchema: {}
}, async () => {
  const list = kit.templates();
  if (!list.length) return text(`Aucun écran de référence dans templates/ pour l'instant (convention : templates/<nom>/index.html, etat-*.html, fiche.md). ${kit.exists('templates/README.md') ? '\n\n' + kit.read('templates/README.md') : ''}\nUtiliser list_page_models pour partir d'un modèle du DSFR.`);
  return text(['# Écrans de référence (templates/)', '', '| Nom | Fiche | États | Résumé |', '|---|---|---|---|', ...list.map((t) => `| ${t.name} | ${t.ficheFile || '—'} | ${t.states.join(', ') || '—'} | ${t.summary || '—'} |`)].join('\n'));
});

server.registerTool('get_template', {
  title: 'HTML et fiche d\'un écran de référence',
  description: 'Renvoie l\'écran de référence templates/<nom>/ : sa fiche puis son HTML complet (index.html et, sur demande, un état). À copier comme point de départ, puis adapter uniquement les contenus du brief.',
  inputSchema: { nom: z.string().describe('Nom du dossier dans templates/'), etat: z.string().optional().describe('Nom d\'un fichier d\'état à renvoyer à la place de index.html, ex. etat-erreur.html') }
}, async ({ nom, etat }) => {
  const t = kit.templates().find((x) => x.name === nom || kit.norm(x.name) === kit.norm(nom));
  if (!t) return error(`template « ${nom} » introuvable. Appeler list_templates.`);
  const file = etat ? `${t.dir}/${etat}` : `${t.dir}/index.html`;
  if (!kit.exists(file)) return error(`fichier ${file} introuvable. États disponibles : ${t.states.join(', ') || 'aucun'}.`);
  return text([`# Template ${t.name}`, '', `- Dossier : ${t.dir}`, `- États : ${t.states.join(', ') || 'aucun'}`, '', '# Fiche', '', t.ficheFile ? kit.read(t.ficheFile) : '_Aucune fiche._', '', `# HTML (${file})`, '', fence(kit.read(file))].join('\n'));
});

// ------------------------------------------------------------------ recherche
server.registerTool('search_doc', {
  title: 'Rechercher dans la doc copiée',
  description: 'Recherche plein texte (sans tenir compte des accents ni de la casse) dans toute la documentation officielle copiée (composants, fondamentaux, modèles) et dans les fiches d\'équipe. Renvoie les passages trouvés avec leur fichier et leur section. Utile pour une question transverse (« champ obligatoire », « role alert », « contraste ») ; pour un composant précis, préférer get_component.',
  inputSchema: { texte: z.string().describe('Mots à chercher, tous doivent apparaître dans le passage'), max: z.number().int().min(1).max(100).optional().describe('Nombre maximal de passages (défaut 20)'), fiches: z.boolean().optional().describe('Inclure les fiches d\'équipe (défaut oui)') }
}, async ({ texte, max, fiches }) => {
  const hits = kit.searchDoc(texte, { max: max ?? 20, fiches: fiches ?? true });
  if (!hits.length) return text(`Aucun passage ne contient « ${texte} ».`);
  return text([`# ${hits.length} passage(s) pour « ${texte} »`, '', ...hits.flatMap((h, i) => [`## ${i + 1}. ${h.file}${h.heading ? ` — ${h.heading}` : ''}`, '', h.excerpt, ''])].join('\n'));
});

// ------------------------------------------------------------------ gabarits et écrans
server.registerTool('get_brief_template', {
  title: 'Gabarit de brief',
  description: 'Renvoie le gabarit de brief d\'un écran (les sept rubriques obligatoires). À donner à l\'utilisateur pour rédiger screens/<nom>/brief.md, ou pour vérifier qu\'un brief est complet avant de concevoir.',
  inputSchema: {}
}, async () => {
  const b = kit.briefTemplate();
  return b ? text(`# Gabarit de brief (${b.file})\n\n${b.text}`) : error('gabarit de brief introuvable.');
});

server.registerTool('get_page_skeleton', {
  title: 'Squelette de page HTML',
  description: 'Renvoie screens/_gabarit.html, le squelette HTML de départ de tout écran (en-tête de document, feuilles de style et scripts du DSFR avec les bons chemins relatifs depuis screens/<nom>/). Copier tel quel avant d\'y placer les composants.',
  inputSchema: {}
}, async () => (kit.exists('screens/_gabarit.html') ? text(`# screens/_gabarit.html\n\n${fence(kit.read('screens/_gabarit.html'))}`) : error('screens/_gabarit.html introuvable.')));

server.registerTool('check_screen', {
  title: 'Lancer les tests d\'un écran',
  description: 'Lance npm run check -- <nom> sur screens/<nom>/ (fidélité aux snippets officiels, classes inconnues et styles en ligne, contenus, accessibilité axe et captures, documentation lue par composant) et renvoie le verdict et le rapport screens/<nom>/rapport-tests.md. Compter une à deux minutes. À lancer avant de livrer et après chaque correction.',
  inputSchema: { nom: z.string().describe('Nom du dossier dans screens/') }
}, async ({ nom }) => {
  if (!kit.screen(nom)) return error(`écran « ${nom} » introuvable dans screens/. Écrans : ${kit.screens().join(', ') || 'aucun'}.`);
  const r = await kit.checkScreen(nom);
  const s = kit.screen(nom);
  const verdict = (r.stdout.match(/^Verdict : .*$/m) || [])[0] || (r.error ? `Les tests n'ont pas pu s'exécuter : ${r.error}` : 'verdict introuvable dans la sortie');
  return text([`# Tests de screens/${nom}/`, '', `**${verdict}** (code de sortie ${r.code})`, '', '## Sortie de la commande', '', fence(r.stdout.trim() + (r.stderr.trim() ? '\n--- stderr ---\n' + r.stderr.trim() : ''), 'text'), '', '## Rapport', '', s.report || '_rapport-tests.md absent._'].join('\n'));
});

// ------------------------------------------------------------------ données réalistes
server.registerTool('get_realistic_data', {
  title: 'Données réalistes de service public',
  description: 'Fournit des données d\'exemple plausibles et fictives pour remplacer les faux noms et « lorem ipsum » dans un écran : identites (civilité, nom, prénom, naissance, courriel, téléphone), adresses (voies, codes postaux et communes françaises réelles), communes, dossiers (numéros de dossier et références), dates (relatives à aujourd\'hui, aux formats JJ/MM/AAAA et long), montants, statuts (statuts de démarche avec le badge DSFR associé). Lues dans mcp/data/<type>.json, enrichissables par l\'équipe. Ne remplace pas les contenus du brief : sert uniquement aux valeurs d\'exemple (saisies conservées, listes, tableaux). Sans type valable, renvoie la liste des types.',
  inputSchema: { type: z.string().describe('identites, adresses, communes, dossiers, dates, montants, statuts'), nombre: z.number().int().min(1).max(100).optional().describe('Nombre d\'éléments (défaut 5)'), graine: z.string().optional().describe('Graine pour obtenir toujours le même tirage (ex. le nom de l\'écran)') }
}, async ({ type, nombre, graine }) => {
  const d = kit.realisticData(type, nombre ?? 5, graine);
  if (!d) return error(`type « ${type} » inconnu. Types disponibles : ${kit.dataTypes().join(', ')}.`);
  return text([`# Données réalistes : ${d.type} (${d.items.length} sur ${d.total}, fichier ${d.file})`, '', d.description, d.note ? `\n_${d.note}_` : '', '', fence(JSON.stringify(d.items, null, 2), 'json')].join('\n'));
});

// ------------------------------------------------------------------ prompts (le contenu vient des SKILL.md, relus à chaque appel)
function screenContext(nom) {
  const s = kit.screen(nom);
  if (!s) return `_L'écran screens/${nom}/ n'existe pas encore._ Écrans existants : ${kit.screens().join(', ') || 'aucun'}.`;
  return [`## Écran screens/${nom}/`, `Fichiers : ${s.files.join(', ')}`, '', '### brief.md', s.brief || '_absent_', '', '### conception.md', s.conception || '_absent_'].join('\n');
}
const agents = () => kit.exists('AGENTS.md') ? kit.read('AGENTS.md') : '';
const toolsNote = 'Le serveur MCP dsfr-kit est disponible : lire les composants avec get_component, les fondamentaux avec get_fundamental, les modèles avec get_page_model et list_templates / get_template, les données d\'exemple avec get_realistic_data, et lancer les tests avec check_screen. Les fichiers de reference/ restent la même source : les outils ne font que les lire.';
const msg = (t) => ({ messages: [{ role: 'user', content: { type: 'text', text: t } }] });

server.registerPrompt('build_screen', {
  title: 'Concevoir un écran DSFR',
  description: 'Applique la skill dsfr-designer à screens/<nom>/ : lecture du brief, fondamentaux, point de départ, composants (doc lue en entier), assemblage, états, autocontrôle, livraison.',
  argsSchema: { nom: z.string().describe('Nom du dossier de l\'écran dans screens/') }
}, ({ nom }) => msg([`# Concevoir l'écran « ${nom} »`, '', toolsNote, '', '## AGENTS.md', agents(), '', '## Skill dsfr-designer (à suivre étape par étape)', kit.skill('dsfr-designer') || '_skills/dsfr-designer/SKILL.md introuvable_', '', screenContext(nom)].join('\n')));

server.registerPrompt('review_screen', {
  title: 'Relire un écran DSFR',
  description: 'Applique la skill dsfr-review à screens/<nom>/ : relecture indépendante contre le brief, la doc complète de chaque composant, les fondamentaux et les fiches, sans rien corriger ; produit review.md et un verdict.',
  argsSchema: { nom: z.string().describe('Nom du dossier de l\'écran dans screens/') }
}, ({ nom }) => {
  const s = kit.screen(nom);
  return msg([`# Relire l'écran « ${nom} »`, '', toolsNote, 'Tu n\'as pas participé à la génération et tu ne corriges rien.', '', '## AGENTS.md', agents(), '', '## Skill dsfr-review (à suivre)', kit.skill('dsfr-review') || '_skills/dsfr-review/SKILL.md introuvable_', '', screenContext(nom), '', s?.report ? '### Dernier rapport de tests\n' + s.report : ''].join('\n'));
});

server.registerPrompt('generate_state', {
  title: 'Produire un état manquant d\'un écran',
  description: 'Produit le fichier etat-<etat>.html d\'un écran existant à partir de son index.html, de son brief (rubrique 5) et de la doc des composants concernés, en respectant les règles de la skill dsfr-designer.',
  argsSchema: { nom: z.string().describe('Nom du dossier de l\'écran dans screens/'), etat: z.string().describe('Nom de l\'état à produire, tel qu\'écrit au brief (ex. erreur-serveur, vide, chargement)') }
}, ({ nom, etat }) => {
  const s = kit.screen(nom);
  return msg([`# Produire l'état « ${etat} » de l'écran « ${nom} »`, '', toolsNote, '', 'Consignes : partir de index.html ci-dessous, produire `screens/' + nom + '/etat-' + kit.norm(etat) + '.html` en ne changeant que ce que l\'état impose (rubrique 5 du brief : contenus, messages, composants d\'état). Chaque composant nouveau passe par get_component et reçoit sa ligne « Doc lue » dans conception.md. Aucun texte inventé : si le brief ne donne pas le contenu de cet état, demander. Terminer par check_screen.', '', '## AGENTS.md', agents(), '', '## Règles d\'assemblage (skill dsfr-designer)', kit.skill('dsfr-designer') || '', '', screenContext(nom), '', s?.index ? '### index.html (état initial)\n' + fence(s.index) : '', '', s?.states.length ? `États déjà présents : ${s.states.join(', ')}` : 'Aucun autre état présent.'].join('\n'));
});

server.registerPrompt('suggest_next_steps', {
  title: 'Ce qui manque à un écran',
  description: 'Compare un écran à son brief (états de la rubrique 5, critères de la rubrique 7), aux lignes « Doc lue » attendues, au modèle de page choisi et au dernier rapport de tests, et liste ce qui reste à faire, sans rien modifier.',
  argsSchema: { nom: z.string().describe('Nom du dossier de l\'écran dans screens/') }
}, ({ nom }) => {
  const s = kit.screen(nom);
  const models = kit.models().map((m) => `- ${m.category} : ${m.title} (${m.id})${m.docFile ? ' — doc ' + m.docFile : ''}`).join('\n');
  return msg([`# Que manque-t-il à l'écran « ${nom} » ?`, '', toolsNote, '', 'Consignes : ne rien modifier. Établir la liste, classée par priorité, de ce qui manque ou diverge : états du brief sans fichier, critères d\'acceptation non tenus, composants sans ligne « Doc lue », éléments obligatoires du modèle de page absents (les vérifier avec get_page_model), écarts du dernier rapport de tests et de la dernière revue, questions ouvertes de conception.md restées sans réponse. Pour chaque point : quoi, où, et quel outil ou quelle skill l\'adresse.', '', '## AGENTS.md', agents(), '', screenContext(nom), '', s?.states.length ? `États présents : ${s.states.join(', ')}` : 'Aucun fichier d\'état.', '', s?.report ? '### Dernier rapport de tests\n' + s.report : '_Aucun rapport de tests : lancer check_screen._', '', s?.review ? '### Dernière revue\n' + s.review : '_Aucune revue._', '', '## Modèles de pages disponibles', models].join('\n'));
});

// ------------------------------------------------------------------ démarrage
const transport = new StdioServerTransport();
await server.connect(transport);
console.error(`dsfr-kit : serveur MCP prêt (DSFR ${kit.version() || '?'}, racine ${kit.ROOT})`);
