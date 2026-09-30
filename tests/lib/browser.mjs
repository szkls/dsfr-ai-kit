// Fonctions exécutées DANS le navigateur (via page.evaluate). Elles doivent être autonomes :
// aucune référence à des variables du module, tout est passé en argument.

// Classes fr-* qui ne caractérisent pas un composant (mise en page, espacements, affichage).
export const UTILITY_CLASS_RE = String.raw`^fr-(m[trblxy]?|p[trblxy]?)-|^fr-(col|grid-row|container|grid)(-|$)|^fr-(hidden|unhidden|displayed)|^fr-sr-only`;

// Extrait, depuis une page d'exemple du paquet, les blocs « Extrait de code » et le titre de variante qui les précède.
export function extractSnippets() {
  const out = [];
  let heading = '';
  for (const el of document.querySelectorAll('h2, h3, h4, pre > code')) {
    if (el.tagName !== 'CODE') {
      const t = el.textContent.replace(/\s+/g, ' ').trim();
      if (t && t !== 'Extrait de code') heading = t;
      continue;
    }
    const html = el.textContent;
    if (!/<[a-z]/i.test(html)) continue;
    out.push({ variant: heading || '(sans titre)', html });
  }
  return out;
}

// Normalise des fragments HTML (extraits) en arbres comparables. Retourne, par fragment, ses racines
// et tous ses éléments imbriqués qui sont eux-mêmes des racines de composant.
export function normalizeFragments({ fragments, roots, utilityRe, ignoreAttrs = [] }) {
  const util = new RegExp(utilityRe);
  const primaryOf = (el) => {
    for (const c of el.classList) if (c.startsWith('fr-') && !c.includes('--') && !c.includes('__') && !util.test(c)) return c;
    return null;
  };
  // attributs qui dépendent de la page ou du JS du DSFR (identifiants, états ARIA, data-fr-js-*) : hors comparaison
  const keepAttr = (n) => n !== 'class' && !ignoreAttrs.includes(n) && !n.startsWith('data-fr-js-');
  const norm = (el) => {
    const c = [...el.classList].filter((x) => x.startsWith('fr-') && !util.test(x)).sort();
    const a = [...el.attributes].map((x) => x.name).filter(keepAttr).sort();
    const kids = [];
    const freeZone = el.classList.contains('fr-header__menu-links') || (el.classList.contains('fr-collapse') && el.parentElement && el.parentElement.classList.contains('fr-accordion'));
    for (const ch of freeZone ? [] : el.children) {
      const p = primaryOf(ch);
      kids.push(p && roots.includes(p) ? { t: ch.tagName.toLowerCase(), p, b: true } : norm(ch));
    }
    const k = [];
    for (const kid of kids) { const j = JSON.stringify(kid); if (!k.length || JSON.stringify(k[k.length - 1]) !== j) k.push(kid); }
    // les titres h1 à h6 sont interchangeables : la doc DSFR précise que le niveau dépend de la page
    return { t: el.tagName.toLowerCase().replace(/^h[1-6]$/, 'h1-h6'), p: primaryOf(el), c, a, k };
  };
  const result = [];
  for (const f of fragments) {
    const doc = new DOMParser().parseFromString(f.html, 'text/html');
    const items = [];
    const rootEls = [...doc.body.children];
    for (const r of rootEls) {
      const p = primaryOf(r);
      if (p && roots.includes(p)) items.push({ primary: p, nested: false, norm: norm(r) });
      for (const n of r.querySelectorAll('*')) {
        const pn = primaryOf(n);
        if (pn && roots.includes(pn)) items.push({ primary: pn, nested: true, norm: norm(n) });
      }
    }
    result.push({ id: f.id, items });
  }
  return result;
}

// Première passe sur les extraits : classes principales des éléments racines (pour définir les racines de composant).
export function snippetRootPrimaries({ fragments, utilityRe }) {
  const util = new RegExp(utilityRe);
  const out = new Set();
  for (const f of fragments) {
    const doc = new DOMParser().parseFromString(f.html, 'text/html');
    for (const r of doc.body.children) {
      for (const c of r.classList) {
        if (c.startsWith('fr-') && !c.includes('--') && !c.includes('__') && !util.test(c)) { out.add(c); break; }
      }
    }
  }
  return [...out];
}

// Analyse d'un fichier d'écran : blocs de composants normalisés, classes, styles en ligne, textes, liens et boutons.
export function analyseDocument({ roots, utilityRe, ignoreAttrs = [] }) {
  const util = new RegExp(utilityRe);
  const primaryOf = (el) => {
    for (const c of el.classList) if (c.startsWith('fr-') && !c.includes('--') && !c.includes('__') && !util.test(c)) return c;
    return null;
  };
  const keepAttr = (n) => n !== 'class' && !ignoreAttrs.includes(n) && !n.startsWith('data-fr-js-');
  const pathOf = (el) => {
    const parts = [];
    for (let e = el; e && e.nodeType === 1 && e.tagName !== 'HTML'; e = e.parentElement) {
      const tag = e.tagName.toLowerCase();
      const p = primaryOf(e);
      let idx = '';
      if (e.parentElement) {
        const same = [...e.parentElement.children].filter((s) => s.tagName === e.tagName);
        if (same.length > 1) idx = `:nth-of-type(${same.indexOf(e) + 1})`;
      }
      parts.unshift(tag + (p ? '.' + p : '') + idx);
    }
    return parts.join(' > ');
  };
  const norm = (el) => {
    const c = [...el.classList].filter((x) => x.startsWith('fr-') && !util.test(x)).sort();
    const a = [...el.attributes].map((x) => x.name).filter(keepAttr).sort();
    const kids = [];
    // zones dont le contenu n'est pas comparé : fr-header__menu-links (vide dans les extraits, le JS du DSFR y recopie
    // les accès rapides pour le mobile) et le bloc refermable d'un accordéon (contenu libre selon la doc)
    const freeZone = el.classList.contains('fr-header__menu-links') || (el.classList.contains('fr-collapse') && el.parentElement && el.parentElement.classList.contains('fr-accordion'));
    const children = freeZone ? [] : [...el.children];
    for (const ch of children) {
      const p = primaryOf(ch);
      kids.push(p && roots.includes(p) ? { t: ch.tagName.toLowerCase(), p, b: true } : norm(ch));
    }
    const k = [];
    for (const kid of kids) { const j = JSON.stringify(kid); if (!k.length || JSON.stringify(k[k.length - 1]) !== j) k.push(kid); }
    return { t: el.tagName.toLowerCase().replace(/^h[1-6]$/, 'h1-h6'), p: primaryOf(el), c, a, k };
  };

  const blocks = [], classes = [], styles = [], texts = [], controls = [], attrTexts = [];
  for (const el of document.body.querySelectorAll('*')) {
    if (['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(el.tagName)) continue;
    const path = pathOf(el);
    const p = primaryOf(el);
    if (p && roots.includes(p)) blocks.push({ path, primary: p, norm: norm(el), excerpt: el.outerHTML.slice(0, 80).replace(/\s+/g, ' ') });
    for (const c of el.classList) classes.push({ path, cls: c });
    if (el.hasAttribute('style')) styles.push({ path, value: el.getAttribute('style') });
    for (const attr of ['href', 'src', 'title', 'aria-label', 'alt', 'placeholder']) {
      if (el.hasAttribute(attr)) attrTexts.push({ path, attr, value: el.getAttribute(attr) });
    }
    if (el.tagName === 'A' || el.tagName === 'BUTTON') {
      const visible = el.textContent.replace(/\s+/g, ' ').trim();
      const label = visible || el.getAttribute('aria-label') || el.getAttribute('title') || [...el.querySelectorAll('img[alt]')].map((i) => i.alt).join(' ').trim() || '';
      controls.push({ path, tag: el.tagName.toLowerCase(), label });
    }
  }
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    const t = n.textContent.replace(/\s+/g, ' ').trim();
    if (!t) continue;
    const parent = n.parentElement;
    if (!parent || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName)) continue;
    texts.push({ path: pathOf(parent), text: t });
  }
  return { title: document.title, blocks, classes, styles, texts, controls, attrTexts };
}
