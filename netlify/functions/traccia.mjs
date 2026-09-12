/* ============================================================================
   L'IMBUTO DEL MODULO — il ponte fra il sito e n8n
   ----------------------------------------------------------------------------
   Il browser parla SOLO con thecoffeekillers.com: e' questa funzione a girare il
   segnale a n8n, dal server. E' la differenza che conta: nessuna connessione a un
   terzo servizio dalla pagina, nessun cookie, nessun identificatore. Per questo il
   sito puo' continuare a non avere il banner, che e' una scelta presa (vedi
   CLAUDE.md: Google Fonts tolto per non mandare gli IP a Google).

   ⚠️ Netlify pubblica la radice del repo, quindi QUESTO FILE e' scaricabile dal
   dominio: l'indirizzo di n8n sta in una variabile d'ambiente, non qui dentro.

   Non arriva niente di personale: nessun valore digitato, solo il NOME dell'ultimo
   campo toccato e fin dove si e' arrivati.
   ============================================================================ */

// ATTENZIONE: NON restituire 204 con corpo vuoto. Il wrapper lambda di Netlify non
// riesce a decodificarlo e risponde 502 "error decoding lambda response: unexpected
// end of JSON input" - che sembra un errore del nostro codice, e non lo e&#39;.
// Si risponde 200 con un corpo minimo: a sendBeacon la risposta non interessa.
export default async (req) => {
  try {
    return await gestisci(req);
  } catch {
    // Una statistica non deve MAI restituire un errore al visitatore: qualunque cosa
    // succeda qui dentro, la pagina non se ne accorge.
    return new Response('ok', { status: 200 });
  }
};

async function gestisci(req) {
  if (req.method !== 'POST') {
    return new Response('solo POST', { status: 405 });
  }

  // ⚠️ process.env, NON Netlify.env.get(): quello e' l'oggetto delle EDGE function.
  // In una funzione normale non esiste, e il riferimento fa fallire la chiamata con
  // un 502 PRIMA di qualunque try/catch messo piu' sotto.
  const destinazione = process.env.N8N_TRACCIA_URL;
  // Senza destinazione non si fa rumore: il sito non deve rompersi per una statistica.
  if (!destinazione) return new Response('ok', { status: 200 });

  let dati;
  try {
    dati = await req.json();
  } catch {
    return new Response('ok', { status: 200 });
  }

  // Si accetta solo quello che si riconosce, e si tronca: quello che arriva da un
  // browser non e' fidato. La validazione vera la rifa' n8n, questa e' la prima rete.
  const ESITI = ['visto', 'iniziato', 'passo2', 'inviato'];
  if (!ESITI.includes(String(dati && dati.esito))) {
    return new Response('ok', { status: 200 });
  }
  const testo = (x, max) => String(x == null ? '' : x).slice(0, max);
  const numero = (x, max) => {
    const n = parseInt(x, 10);
    return !Number.isFinite(n) || n < 0 ? 0 : Math.min(n, max);
  };
  const pulito = {
    esito: testo(dati.esito, 20),
    modulo: testo(dati.modulo, 40),
    pagina: testo(dati.pagina, 120),
    passo: numero(dati.passo, 9),
    ultimoCampo: testo(dati.ultimoCampo, 40),
    campiCompilati: numero(dati.campiCompilati, 99),
    variante: testo(dati.variante, 40),
    inserzione: testo(dati.inserzione, 40),
    campagna: testo(dati.campagna, 60),
    schermo: testo(dati.schermo, 12),
    secondi: numero(dati.secondi, 7200),
  };

  // tempo limite corto: se n8n e' lento la statistica si perde, la pagina no.
  // AbortController a mano invece di AbortSignal.timeout: quest'ultimo non c'e' su
  // tutte le versioni di Node, e qui un metodo mancante costa un 502.
  const ctrl = new AbortController();
  const orologio = setTimeout(() => ctrl.abort(), 3000);
  try {
    await fetch(destinazione, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pulito),
      signal: ctrl.signal,
    });
  } catch {
    /* una misura persa non e' un problema del visitatore: si tace */
  } finally {
    clearTimeout(orologio);
  }

  return new Response('ok', { status: 200 });
}

export const config = { path: '/traccia' };
