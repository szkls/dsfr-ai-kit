// Convertit un écran relevé d'un simulateur (lignes « [légende …] », « [champ …] », « [libellé …] »…) en formulaire DSFR.
import { esc, ind, etapes, modale, ouvrirModale, radios, dateUnique } from './lib.mjs';
const propre = (l) => l.replace(/ \{fr-[^}]*\}$/, '').trim();
// sépare un libellé et sa précision : « Question ? précision », « Libellé Exemple : 2 », « En coupleMarié, pacsé… »
export const scinder = (t) => {
  t = t.trim();
  let m = t.match(/^(.*?\?)\s*(\S.*)$/); if (m) return [m[1], m[2]];
  m = t.match(/^(.*?)\s*\(?((?:Exemple|exemple|Ex)\s?:.*)$/); if (m && m[1]) return [m[1].replace(/\($/, '').trim(), m[2].replace(/\)$/, '')];
  m = t.match(/^(.{2,}?[a-zéèàù)])([A-ZÉ][a-zé].*)$/); if (m && m[1].length < 60) return [m[1], m[2]];
  m = t.match(/^(.{15,}?[a-zéèàù)]) ([A-ZÉ][a-zéèàù'’]+(?: \S+){3,})$/); if (m) return [m[1], m[2]];
  return [t, null];
};
let compteur = 0;
const champId = (p) => `${p}-${++compteur}`;
const champTexte = (libelle, { nombre = false, requis = true } = {}) => { const id = champId('champ'); const [l, aide] = scinder(libelle); return `<div class="fr-input-group"${requis ? ' data-requis' : ''}>
    <label class="fr-label" for="${id}">
        ${esc(l)}${aide ? `\n        <span class="fr-hint-text">${esc(aide)}</span>` : ''}
    </label>
    <input class="fr-input" aria-describedby="${id}-messages" id="${id}" name="${id}" type="${nombre ? 'number' : 'text'}"${nombre ? ' inputmode="numeric" min="0"' : ''}${requis ? ' required' : ''}>
    <div class="fr-messages-group" id="${id}-messages" aria-live="polite">
    </div>
</div>`; };
const cases = (legende, options) => { const id = champId('cases'); const [l, aide] = scinder(legende); return `<fieldset class="fr-fieldset" id="${id}" aria-labelledby="${id}-legend ${id}-messages">
    <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="${id}-legend">
        ${esc(l)}${aide ? `\n        <span class="fr-hint-text">${esc(aide)}</span>` : ''}
    </legend>
${options.map((o, i) => { const [ol, oa] = scinder(o); return `    <div class="fr-fieldset__element">
        <div class="fr-checkbox-group">
            <input name="${id}" value="${i + 1}" id="${id}-${i + 1}" type="checkbox" aria-describedby="${id}-${i + 1}-messages">
            <label class="fr-label" for="${id}-${i + 1}">
                ${esc(ol)}${oa ? `\n                <span class="fr-hint-text">${esc(oa)}</span>` : ''}
            </label>
            <div class="fr-messages-group" id="${id}-${i + 1}-messages" aria-live="polite">
            </div>
        </div>
    </div>`; }).join('\n')}
    <div class="fr-messages-group" id="${id}-messages" aria-live="polite">
    </div>
</fieldset>`; };
// options : { suivant: fichier, retour: [libellé, fichier], quitter: href, titreEtape, modales (relevées), liens: {libellé: href}, boutonsLiens: {libellé: href} }
export const convertir = (lignes, o) => {
  const out = []; const dialogues = []; const L = lignes.map((l) => l);
  let i = 0; let titre = null; const ouvreurs = new Map((o.modales || []).map((m) => [m.titre, m]));
  const BOUTONS_SUITE = /^(Suivant|Valider|Étape suivante|Voir le résultat|Voir les résultats|Compléter les ressources|Ajouter l'enfant)$/;
  while (i < L.length) {
    const l = L[i];
    if (/^\[lien "Haut de page"/.test(l) || /^étape active$|^Revenir à l'étape :$/.test(l) || o.ignorer?.some((re) => re.test(l))) { i++; continue; }
    if (l === '<fr-stepper>') { const t = propre(L[i + 1]).match(/^(.*) Étape (\d+) sur (\d+)$/); const s = L[i + 2] && L[i + 2].startsWith('Étape suivante') ? propre(L[i + 2]).replace('Étape suivante : ', '') : null; if (t) out.push(etapes(t[1], +t[2], +t[3], s)); i += s ? 3 : 2; continue; }
    let m;
    if ((m = l.match(/^(#+) (.+)$/))) { const niv = m[1].length; const t = propre(m[2]); if (niv === 1) { titre = t; out.push(`<h1 class="fr-mt-6v">${esc(t)}</h1>`); } else out.push(`<h${Math.min(niv, 4)}${niv === 2 ? ' class="fr-mt-6v"' : ''}>${esc(t)}</h${Math.min(niv, 4)}>`); i++; continue; }
    if ((m = l.match(/^\[légende "(.*)"\]/))) {
      const legende = m[1];
      if (L[i + 1] && /^\[libellé "Jour/.test(L[i + 1])) { const id = champId('date'); out.push(dateUnique(id, legende).replace(/<legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="([^"]+)">\n        (.*)\n/, (x, lid) => { const [lg, aide] = scinder(legende); return `<legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="${lid}">\n        ${esc(lg)}${aide ? `\n        <span class="fr-hint-text">${esc(aide)}</span>` : ''}\n`; })); i += 7; continue; }
      const opts = []; let k = i + 1; let type = null;
      while (k < L.length && (m = L[k].match(/^\[champ (radio|checkbox) name=\S* « (.*) »\]/))) { type = m[1]; opts.push(m[2]); k++; }
      if (type === 'radio') { const id = champId('question'); const [lg, aide] = scinder(legende); out.push(radios(id, id, lg, opts.map((x, j) => { const [ol, oa] = scinder(x); return [`${j + 1}`, ol, oa]; }), { aideLegende: aide, enLigne: opts.length === 2 && opts.every((x) => x.length < 12) && !aide })); i = k; continue; }
      if (type === 'checkbox') { out.push(cases(legende, opts)); i = k; continue; }
      out.push(`<p class="fr-text--bold">${esc(legende)}</p>`); i++; continue;
    }
    if ((m = l.match(/^\[libellé "(.*)"\]/))) {
      const lib = m[1]; const n = L[i + 1] || '';
      let c;
      if ((c = n.match(/^\[champ (radio|checkbox) name=\S* « (.*) »\]/))) { const opts = []; let k = i + 1; while (k < L.length && (c = L[k].match(/^\[champ (radio|checkbox) name=\S* « (.*) »\]/))) { opts.push(c[2]); k++; } const t = L[i + 1].match(/^\[champ (radio|checkbox)/)[1]; if (t === 'radio') { const id = champId('question'); const [lg, aide] = scinder(lib); out.push(radios(id, id, lg, opts.map((x, j) => { const [ol, oa] = scinder(x); return [`${j + 1}`, ol, oa]; }), { aideLegende: aide })); } else out.push(cases(lib, opts)); i = k; continue; }
      if (/^\[champ (text|number)/.test(n)) {
        // date sur trois champs (Jour / Mois / Année) précédée d'un libellé général
        if (/date/i.test(lib) && L[i + 3] && /^\[libellé "Jour/.test(L[i + 2]) ) { const id = champId('date'); out.push(dateUnique(id, lib)); i += 1; while (i < L.length && /^\[champ|^\[libellé "(Jour|Mois|Année)|^\/$/.test(L[i])) i++; continue; }
        out.push(champTexte(lib, { nombre: /number|numeric/.test(n) || /montant|loyer|€|nombre/i.test(lib) })); i += 2; continue;
      }
      out.push(`<p>${esc(lib)}</p>`); i++; continue;
    }
    if (/^\[champ text name=jj/.test(l)) { i++; continue; }
    if ((m = l.match(/^<fr-alert\.fr-alert--(\w+)/))) { const t = propre(L[i + 1] || ''); out.push(`<div class="fr-alert fr-alert--${m[1]} fr-alert--sm">\n    <p>${esc(t)}</p>\n</div>`); i += 2; continue; }
    if (l === '<fr-callout>') { const t = (L[i + 1] || '').match(/^#+ (.+?) \{fr-callout__title\}$/); const txt = propre(L[i + (t ? 2 : 1)] || ''); out.push(`<div class="fr-callout">\n${t ? `    <h2 class="fr-callout__title">${esc(t[1])}</h2>\n` : ''}    <p class="fr-callout__text">${esc(txt)}</p>\n</div>`); i += t ? 3 : 2; continue; }
    if (/^<fr-/.test(l)) { i++; continue; }
    if ((m = l.match(/^\[bouton "(.*)"\]/))) {
      const b = m[1].trim();
      if (BOUTONS_SUITE.test(b) && o.suivant) out.push(`<button class="fr-btn" type="submit">${esc(b)}</button>`);
      else if (ouvreurs.has(b) || (o.modales || []).some((x) => x.titre === b)) { const md = ouvreurs.get(b); const id = 'modale-' + champId('aide'); out.push(`<p>\n    ${ouvrirModale(id, b, 'fr-btn fr-btn--tertiary-no-outline')}\n</p>`); const blocs = []; let liste = null; for (const x of md.texte.filter((y) => !y.startsWith('### ') && !y.startsWith('[lien'))) { if (x.startsWith('- ')) { (liste ??= []).push(x.slice(2)); continue; } if (liste) { blocs.push(`<ul>\n${liste.map((y) => `    <li>${esc(y)}</li>`).join('\n')}\n</ul>`); liste = null; } blocs.push(`<p>${esc(x)}</p>`); } if (liste) blocs.push(`<ul>\n${liste.map((y) => `    <li>${esc(y)}</li>`).join('\n')}\n</ul>`); dialogues.push(modale(id, md.titre, blocs.join('\n'))); }
      else if (o.boutonsLiens && o.boutonsLiens[b]) { const v = o.boutonsLiens[b]; const [href, style] = Array.isArray(v[0]) ? (v.length > 1 ? v.shift() : v[0]) : v; out.push(`<p>\n    <a href="${href}" class="${style || 'fr-btn fr-btn--secondary'}">${esc(b)}</a>\n</p>`); }
      else out.push(`<!-- bouton non relié : ${esc(b)} -->`);
      i++; continue;
    }
    if ((m = l.match(/^\[lien "(.*)" -> (.*)\]/))) { const href = (o.liens || {})[m[1]] || m[2]; out.push(`<p>\n    <a href="${esc(href)}" class="fr-link">${esc(m[1])}</a>\n</p>`); i++; continue; }
    if (l.startsWith('- ')) { const items = []; while (i < L.length && L[i].startsWith('- ')) { items.push(propre(L[i].slice(2))); i++; } out.push(`<ul>\n${items.map((x) => `    <li>${esc(x)}</li>`).join('\n')}\n</ul>`); continue; }
    if (/^Toutes les informations demandées sont obligatoires/.test(l)) { out.push(`<p class="fr-text--sm">${esc(propre(l))}</p>`); i++; continue; }
    if (l.trim() && !/^\//.test(l)) out.push(`<p>${esc(propre(l))}</p>`);
    i++;
  }
  // formulaire : tout ce qui suit le titre jusqu'au bouton d'envoi
  let html = out.join('\n');
  if (o.suivant && html.includes('type="submit"')) {
    const debut = html.indexOf('<h1'); const finTitre = html.indexOf('</h1>', debut) + 5;
    html = html.slice(0, finTitre) + `\n<form action="${o.suivant}" data-etape="${o.cle}" novalidate>` + html.slice(finTitre).replace(/(<button class="fr-btn" type="submit">[^<]*<\/button>)/, '$1\n</form>');
  }
  if (o.retour) html = `<a href="${o.retour[1]}" class="fr-btn fr-btn--secondary fr-icon-arrow-left-line fr-btn--icon-left fr-mb-6v">${esc(o.retour[0])}</a>\n` + html;
  return { html, dialogues: dialogues.join('\n    '), titre };
};
