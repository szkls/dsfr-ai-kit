// Simulations du prototype (primes à la naissance et à l'adoption) : contrôle des champs obligatoires avec l'état
// d'erreur du DSFR, mémorisation des réponses d'un écran à l'autre (sessionStorage), récapitulatif et résultat.
// Le montant unitaire et la règle de versement sont ceux affichés par le site ; l'éligibilité n'est pas recalculée.
(function () {
  var racine = document.querySelector('[data-simulation]');
  if (!racine) return;
  var cle = 'mds-' + racine.getAttribute('data-simulation');
  var lire = function () { try { return JSON.parse(sessionStorage.getItem(cle)) || {}; } catch (e) { return {}; } };
  var ecrire = function (v) { try { sessionStorage.setItem(cle, JSON.stringify(v)); } catch (e) {} };
  var donnees = lire();
  var MESSAGE = 'Veuillez renseigner cette information';

  // sections conditionnelles (ex. questions sur le conjoint)
  function conditions() {
    document.querySelectorAll('[data-si]').forEach(function (bloc) {
      var p = bloc.getAttribute('data-si').split('='); var visible = (donnees[p[0]] || '') === p[1];
      bloc.hidden = !visible;
      bloc.querySelectorAll('input').forEach(function (i) { i.disabled = !visible; });
    });
  }
  conditions();

  // formulaire d'étape : restaurer, contrôler, mémoriser
  var form = document.querySelector('form[data-etape]');
  if (form) {
    Object.keys(donnees).forEach(function (n) {
      form.querySelectorAll('[name="' + n + '"]').forEach(function (c) { if (c.type === 'radio') c.checked = c.value === donnees[n]; else c.value = donnees[n]; });
    });
    var marquer = function (groupe, enErreur) {
      var fieldset = groupe.tagName === 'FIELDSET';
      groupe.classList.toggle(fieldset ? 'fr-fieldset--error' : 'fr-input-group--error', enErreur);
      var msgs = groupe.querySelector('.fr-messages-group');
      if (msgs) msgs.innerHTML = enErreur ? '<p class="fr-message fr-message--error">' + MESSAGE + '</p>' : '';
    };
    form.addEventListener('submit', function (e) {
      e.preventDefault(); var premier = null;
      form.querySelectorAll('fieldset[data-requis], .fr-input-group[data-requis]').forEach(function (g) {
        if (g.closest('[hidden]')) { marquer(g, false); return; }
        var champs = g.querySelectorAll('input'); var vide = false;
        if (champs.length && champs[0].type === 'radio') vide = !g.querySelector('input:checked');
        else champs.forEach(function (c) { if (!c.value.trim()) vide = true; });
        marquer(g, vide); if (vide && !premier) premier = champs[0];
      });
      if (premier) { premier.focus(); return; }
      form.querySelectorAll('input[type=checkbox]').forEach(function (c) { if (!c.checked) delete donnees[c.name]; });
      new FormData(form).forEach(function (v, n) { donnees[n] = v; });
      ecrire(donnees); window.location.href = form.getAttribute('action');
    });
    form.addEventListener('change', function (e) { if (!e.target.name) return; if (e.target.type === 'checkbox' && !e.target.checked) delete donnees[e.target.name]; else donnees[e.target.name] = e.target.value; conditions(); });
    form.addEventListener('reset', function () { setTimeout(function () { form.querySelectorAll('[name]').forEach(function (c) { delete donnees[c.name]; }); conditions(); }, 0); });
    document.querySelectorAll('[data-afficher]').forEach(function (b) { b.addEventListener('click', function () { var cible = document.getElementById(b.getAttribute('data-afficher')); if (cible) { cible.hidden = false; b.setAttribute('aria-expanded', 'true'); var c = cible.querySelector('input'); if (c) c.focus(); } }); });
  }

  // récapitulatif et résultat
  var nombre = function (v) { return Number(String(v).replace(/\s/g, '')) || 0; };
  var euros = function (v) { return new Intl.NumberFormat('fr-FR', { minimumFractionDigits: v % 1 ? 2 : 0, maximumFractionDigits: 2 }).format(v).replace(/ /g, ' ') + ' €'; };
  var mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  var date = function (decalage) { var m = nombre(donnees.mois) - 1 + decalage, a = nombre(donnees.annee); while (m < 0) { m += 12; a--; } while (m > 11) { m -= 12; a++; } return mois[m] + ' ' + a; };
  var libelles = { celibataire: 'Célibataire', couple: 'En couple', oui: 'Oui', non: 'Non' };
  if (donnees.situation) {
    document.querySelectorAll('[data-valeur]').forEach(function (el) {
      var n = el.getAttribute('data-valeur'), v = donnees[n];
      if (n === 'date') v = [donnees.jour, donnees.mois, donnees.annee].map(function (x, i) { return i < 2 ? String(x).padStart(2, '0') : x; }).join('/');
      else if (n === 'revenu') v = euros(nombre(v));
      else if (libelles[v]) v = libelles[v];
      if (v) el.textContent = v;
    });
    var unitaire = nombre(racine.getAttribute('data-montant')), enfants = nombre(donnees.enfants_arrivee) || 1;
    document.querySelectorAll('[data-montant-total]').forEach(function (el) { el.textContent = euros(Math.round(unitaire * enfants * 100) / 100); });
    document.querySelectorAll('[data-nombre-enfants]').forEach(function (el) { el.textContent = enfants; });
    if (enfants > 1) document.querySelectorAll('[data-unite]').forEach(function (el) { el.textContent = el.getAttribute('data-unite'); });
    document.querySelectorAll('[data-versement]').forEach(function (el) { var r = el.getAttribute('data-versement').split(','); el.textContent = r.length > 1 ? 'entre ' + date(+r[0]) + ' et ' + date(+r[1]) : date(+r[0]); });
  }
  var recommencer = document.querySelector('[data-recommencer]');
  if (recommencer) recommencer.addEventListener('click', function () { try { sessionStorage.removeItem(cle); } catch (e) {} });
})();
