// Comportements communs du prototype mesdroitssociaux (pas de logique métier) :
// - le bouton FranceConnect mène à la page qui marque la limite du prototype (écrans connectés non maquettés) ;
// - le panneau de gestion des cookies se ferme à l'enregistrement des préférences.
(function () {
  var base = document.currentScript ? document.currentScript.src.replace(/_mds\/prototype\.js.*$/, '') : '../';
  document.querySelectorAll('.fr-connect').forEach(function (b) {
    b.addEventListener('click', function () { window.location.href = base + 'mds-connexion-franceconnect/index.html'; });
  });
  // lien « Gérer les cookies » du pied de page (un lien, comme dans l'extrait officiel) : ouvre le panneau par l'API de la modale
  document.querySelectorAll('a[href="#fr-consent-modal"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var modale = document.getElementById('fr-consent-modal');
      if (modale && window.dsfr) { e.preventDefault(); window.dsfr(modale).modal.disclose(); }
    });
  });
  var enregistrer = document.getElementById('consent-enregistrer');
  if (enregistrer) {
    enregistrer.addEventListener('click', function () {
      var modale = document.getElementById('fr-consent-modal');
      if (modale && window.dsfr) window.dsfr(modale).modal.conceal();
    });
  }
})();
