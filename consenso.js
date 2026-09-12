/* ============================================================================
   IL CONSENSO — e perche' questo file va PRIMA di Tag Manager
   ----------------------------------------------------------------------------
   Fino al 12/09/2026 questo sito non aveva banner, e non era una dimenticanza:
   i caratteri erano stati auto-ospitati apposta per non mandare gli IP a Google,
   e senza terze parti non c'era niente da chiedere. Con Tag Manager e Analytics
   quella condizione e' finita, quindi serve il consenso.

   ⚠️ QUESTO SCRIPT VA CARICATO PRIMA DELLO SNIPPET DI TAG MANAGER, e SENZA defer.
   Imposta il "consent mode" a NEGATO come stato di partenza: cosi' Tag Manager
   puo' anche caricarsi, ma i tag dentro non scrivono cookie e non mandano dati
   finche' qualcuno non accetta. Se questo file girasse dopo, i tag partirebbero
   prima della domanda e il banner sarebbe finto.

   Chi rifiuta non viene piu' disturbato: la scelta resta in localStorage (che e'
   tecnico e necessario a ricordare un rifiuto, non serve consenso per quello).
   Si puo' cambiare idea: window.ckConsenso.riapri()
   ============================================================================ */
(function () {
  var CHIAVE = 'ck-consenso-v1';
  var ESPRESSO = '#49240A', PANNA = '#EDDABD', TAN = '#BD8B65';

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  /* Stato di partenza: tutto NEGATO tranne la sicurezza, che serve a far
     funzionare il sito e non profila nessuno. wait_for_update da' 500 ms ai tag
     per aspettare la risposta invece di partire con il "no" e ripartire dopo. */
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'denied',
    personalization_storage: 'denied',
    security_storage: 'granted',
    wait_for_update: 500
  });

  function leggi() { try { return localStorage.getItem(CHIAVE); } catch (e) { return null; } }
  function scrivi(v) { try { localStorage.setItem(CHIAVE, v); } catch (e) {} }

  function concedi() {
    gtag('consent', 'update', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted',
      functionality_storage: 'granted',
      personalization_storage: 'granted'
    });
    window.dataLayer.push({ event: 'consenso_accettato' });
  }

  function via() {
    var b = document.getElementById('ck-consenso');
    if (b && b.parentNode) b.parentNode.removeChild(b);
  }

  function mostra() {
    if (document.getElementById('ck-consenso')) return;
    var d = document.createElement('div');
    d.id = 'ck-consenso';
    d.setAttribute('role', 'dialog');
    d.setAttribute('aria-label', 'Consenso ai cookie');
    d.setAttribute('style',
      'position:fixed;left:12px;right:12px;bottom:12px;z-index:2147483000;' +
      'max-width:660px;margin:0 auto;background:' + ESPRESSO + ';color:' + PANNA + ';' +
      'border:1px solid #6B4426;border-radius:12px;padding:18px 20px;' +
      "font:400 14px/1.55 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;" +
      'box-shadow:0 16px 48px rgba(0,0,0,.45);');
    d.innerHTML =
      '<p style="margin:0 0 14px;color:' + PANNA + ';font-size:14px;line-height:1.55;">' +
      'Usiamo cookie di statistica per capire come viene usato il sito e quali inserzioni ' +
      'portano richieste. Senza il tuo consenso non ne viene scritto nessuno. ' +
      '<a href="' + (location.pathname.indexOf('/en/') === 0 ? '/en/privacy' : '/privacy') + '" ' +
      'style="color:' + TAN + ';text-decoration:underline;">Informativa privacy</a>.</p>' +
      '<div style="display:flex;gap:10px;flex-wrap:wrap;">' +
      '<button type="button" id="ck-si" style="flex:1 1 auto;min-width:150px;cursor:pointer;' +
      'background:' + PANNA + ';color:' + ESPRESSO + ';border:1px solid ' + PANNA + ';border-radius:9px;' +
      "padding:11px 18px;font:700 14px/1 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;\">Accetto</button>" +
      '<button type="button" id="ck-no" style="flex:1 1 auto;min-width:150px;cursor:pointer;' +
      'background:transparent;color:' + PANNA + ';border:1px solid #8A6A4A;border-radius:9px;' +
      "padding:11px 18px;font:600 14px/1 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;\">Solo i necessari</button>" +
      '</div>';
    document.body.appendChild(d);
    document.getElementById('ck-si').onclick = function () { scrivi('si'); via(); concedi(); };
    document.getElementById('ck-no').onclick = function () { scrivi('no'); via(); };
  }

  function parti() {
    var c = leggi();
    if (c === 'si') { concedi(); return; }
    if (c === 'no') return;
    mostra();
  }

  window.ckConsenso = {
    riapri: function () { try { localStorage.removeItem(CHIAVE); } catch (e) {} mostra(); },
    stato: function () { return leggi() || 'non deciso'; }
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', parti);
  else parti();
})();
