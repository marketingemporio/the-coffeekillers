/* ============================================================================
   L'IMBUTO DEL MODULO — dove si fermano le persone
   ----------------------------------------------------------------------------
   Serve a rispondere a una domanda sola: di quelli che arrivano al modulo, quanti
   lo iniziano, quanti arrivano in fondo, e su QUALE campo si fermano gli altri.
   Su una campagna a pagamento e' la differenza fra sapere quante visite arrivano e
   sapere perche' non diventano richieste.

   ⚠️ COSA NON FA, ed e' il motivo per cui il sito puo' restare senza banner:
   - nessun cookie, nessun localStorage, nessun sessionStorage: tutto vive in memoria
     e muore chiudendo la scheda;
   - nessun identificatore, quindi nessuna persona da riconoscere;
   - non legge MAI il contenuto dei campi, solo il loro NOME;
   - parla solo con thecoffeekillers.com (/traccia): la pagina non apre nessuna
     connessione verso un terzo servizio.

   ⚠️ Manda UN SOLO segnale per visita, quando la pagina si chiude, e dice fin dove
   si e' arrivati. Mandarne uno per passo significherebbe centinaia di chiamate al
   giorno per la stessa informazione.

   Questo script OSSERVA il modulo, non lo modifica: guarda comparire il passo 2 e il
   pannello "Ricevuto". Cosi' non puo' rompere l'invio, che e' la cosa che conta.
   ============================================================================ */
(function () {
  var form = document.getElementById('quote-form');
  if (!form || !('fetch' in window)) return;

  var LIVELLI = { visto: 0, iniziato: 1, passo2: 2, inviato: 3 };
  var esito = 'visto';
  var ultimoCampo = '';
  var partito = 0;          // quando il modulo e' comparso sullo schermo
  var mandato = false;

  function sali(nuovo) {
    if (LIVELLI[nuovo] > LIVELLI[esito]) esito = nuovo;
  }

  function query(chiave) {
    var out = '';
    location.search.replace(/^\?/, '').split('&').forEach(function (p) {
      if (!p) return;
      var i = p.indexOf('=');
      var k = decodeURIComponent((i < 0 ? p : p.slice(0, i)).replace(/\+/g, ' '));
      if (k === chiave) out = i < 0 ? '' : decodeURIComponent(p.slice(i + 1).replace(/\+/g, ' '));
    });
    return out;
  }

  function quantiCompilati() {
    var n = 0;
    var campi = form.querySelectorAll('input, textarea, select');
    for (var i = 0; i < campi.length; i++) {
      var c = campi[i];
      if (c.type === 'hidden' || c.name === 'bot-field') continue;
      if (c.type === 'checkbox' || c.type === 'radio') { if (c.checked) n++; }
      else if (String(c.value || '').trim() !== '') n++;
    }
    return n;
  }

  function manda() {
    if (mandato) return;
    mandato = true;
    var corpo = JSON.stringify({
      esito: esito,
      modulo: form.getAttribute('name') || '',
      pagina: location.pathname,
      passo: (document.getElementById('v-fase-2') && !document.getElementById('v-fase-2').hidden) ? 2 : 1,
      ultimoCampo: ultimoCampo,
      campiCompilati: quantiCompilati(),
      variante: query('tipo'),
      inserzione: query('utm_content'),
      campagna: query('utm_campaign'),
      schermo: innerWidth < 700 ? 'telefono' : 'grande',
      secondi: partito ? Math.round((Date.now() - partito) / 1000) : 0
    });
    // sendBeacon e' l'unico modo affidabile di mandare qualcosa mentre la pagina se ne
    // va: un fetch normale viene annullato. Se non c'e', si ripiega su fetch keepalive.
    try {
      if (navigator.sendBeacon) {
        navigator.sendBeacon('/traccia', new Blob([corpo], { type: 'application/json' }));
        return;
      }
    } catch (e) { /* si ripiega sotto */ }
    try {
      fetch('/traccia', { method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: corpo, keepalive: true });
    } catch (e) { /* una misura persa non e' un problema del visitatore */ }
  }

  /* --- il modulo e' comparso sullo schermo --- */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (voci) {
      for (var i = 0; i < voci.length; i++) {
        if (voci[i].isIntersecting) { partito = partito || Date.now(); io.disconnect(); }
      }
    }, { threshold: 0.2 });
    io.observe(form);
  } else {
    partito = Date.now();
  }

  /* --- la prima volta che qualcuno tocca qualcosa --- */
  function tocca(e) {
    var t = e.target;
    if (!t) return;
    partito = partito || Date.now();
    sali('iniziato');
    var nome = t.getAttribute('name') || t.id || '';
    if (!nome && t.classList && t.classList.contains('qf-chip')) {
      var gruppo = t.closest('.qf-chips');
      nome = gruppo ? (gruppo.id || 'chip') : 'chip';
    }
    if (nome && nome !== 'bot-field') ultimoCampo = nome;
  }
  form.addEventListener('input', tocca, true);
  form.addEventListener('change', tocca, true);
  form.addEventListener('click', function (e) {
    if (e.target && e.target.classList && e.target.classList.contains('qf-chip')) tocca(e);
  }, true);

  /* --- il passo 2 e il pannello "Ricevuto": si GUARDANO comparire --- */
  function osserva(el, quando) {
    if (!el || !('MutationObserver' in window)) return;
    var mo = new MutationObserver(function () {
      if (!el.hidden) { quando(); mo.disconnect(); }
    });
    mo.observe(el, { attributes: true, attributeFilter: ['hidden'] });
  }
  osserva(document.getElementById('v-fase-2'), function () { sali('passo2'); });
  osserva(document.getElementById('qf-success'), function () {
    sali('inviato');
    manda();   // l'invio riuscito si comunica subito: e' il dato che conta di piu'
  });

  /* --- l'uscita dalla pagina --- */
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden' && partito) manda();
  });
  window.addEventListener('pagehide', function () { if (partito) manda(); });
})();
