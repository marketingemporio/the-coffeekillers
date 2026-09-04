# The Coffeekillers — sito

Sito vetrina della band **Hot Joe & The Coffeekillers** (country live, Brescia).
Online su **https://thecoffeekillers.com**.

> 📖 **Prima di lavorarci, apri [`_STATO.md`](_STATO.md)**: è la fonte di verità
> unica su a che punto siamo, cosa manca e come riprendere.

## Come è fatto

**HTML statico scritto a mano. Nessuna build, nessun framework, nessun `npm install`.**
Si apre un file, si modifica, si salva. Ogni pagina è autonoma e porta il proprio
CSS in linea; l'unico file condiviso è `stile-hjck.css`.

| File | Cos'è |
|---|---|
| `index.html` | home |
| `chi-siamo.html` · `country.html` · `date.html` · `gallery.html` · `faq.html` | pagine interne |
| `preventivo.html` | il modulo di richiesta preventivo |
| `privacy.html` | informativa privacy |
| `musica-country-dal-vivo.html` | **landing delle inserzioni** — `noindex`, ci si arriva solo dagli annunci |
| `en/` | **il sito in inglese**: le stesse 8 pagine tradotte (vedi sotto) |
| `stile-hjck.css` | lo strato di stile condiviso dalle pagine interne |
| `fonts/` · `images/` | caratteri e fotografie |

⚠️ **La sorgente di verità dello stile è `index.html`**, che ha tutto in linea.
`stile-hjck.css` ne è una fotografia per le pagine interne: se cambia la home,
va riallineato a mano.

### I caratteri
**Bonzana** (titoli) e **LT Cushion** (bottoni e testi di supporto) stanno in
`fonts/`. **Manrope** e **Rye** arrivano da Google Fonts.
⚠️ Di **Bonzana resta da confermare la licenza commerciale**: lo zip viene da un
sito di font gratuiti e non contiene un file di licenza.
Bronco Valley **non si usa più**, e il taglio "Valley" è stato tolto perché era
Personal Use — su un sito non si può usare.

## Le due lingue (dal 03/09/2026)

Il sito esiste in **italiano** (radice) e in **inglese** (cartella `en/`), per chi
arriva dall'estero. Non c'e' nessun reindirizzamento automatico: **l'indirizzo
resta lo stesso per tutti** e la lingua la sceglie chi legge.

| Italiano | Inglese |
|---|---|
| `index.html` | `en/index.html` |
| `chi-siamo.html` | `en/about.html` |
| `country.html` | `en/country-music.html` |
| `date.html` | `en/dates.html` |
| `gallery.html` | `en/gallery.html` |
| `faq.html` | `en/faq.html` |
| `preventivo.html` | `en/quote.html` |
| `privacy.html` | `en/privacy.html` |

**Come ci si arriva.** Ogni pagina ha in testata un bottoncino **`EN`** (nelle
pagine inglesi **`IT`**), e nel menu del telefono la voce **English** / **Italiano**.
In piu', a chi ha il **browser impostato su un'altra lingua** compare in basso una
strisciolina — *«This site is also available in English»* sulle pagine italiane,
*«Questo sito e' disponibile anche in italiano»* su quelle inglesi. Si chiude con la
&times; e non ricompare per il resto della visita (se lo ricorda con `sessionStorage`,
che **non e' un cookie**: nessun banner da aggiungere).

**Come lo capisce Google.** Ogni pagina dichiara la sua gemella con `hreflang`
(`it`, `en`, `x-default` = l'italiano), e `sitemap.xml` contiene entrambe le versioni
con gli stessi rimandi: le due lingue non vengono lette come contenuto duplicato.

**⚠️ Da sapere quando si lavora.** Le pagine inglesi sono **copie tradotte**, non
generate da un motore: se cambi un testo in italiano **va cambiato anche in `en/`**.
Vale soprattutto per le **date dei concerti**, che sono scritte a mano in due posti
(`date.html` **e** `en/dates.html`, piu' il calendario in home su `index.html` **e**
`en/index.html`).
- I percorsi in `en/` salgono di un livello: `../images/`, `../fonts/`, `../stile-hjck.css`.
  Lo stile e i font sono gli stessi, non ci sono file duplicati.
- I **commenti nel codice restano in italiano** anche nelle pagine inglesi: servono a
  chi le mantiene, non a chi le legge.
- La **landing delle inserzioni** (`musica-country-dal-vivo.html`) **non e' tradotta**:
  gli annunci sono in italiano e puntati su Brescia. Il giorno che servira' si fa.

## Il modulo
`preventivo.html` e la landing mandano a **Formspree** (`formspree.io/f/xdabrrrr`),
lo stesso destinatario per entrambi. La landing marca le richieste con
`Origine: Landing inserzioni`, così si distinguono. Il modulo inglese
(`en/quote.html`) marca `Origine: Preventivo — modulo del sito INGLESE (/en/)`:
in casella si vede subito che va risposto in inglese. **Le mail di notifica
restano in italiano** — le legge la band, non il cliente.
Il consenso privacy è **obbligatorio**: finché non è spuntato il bottone resta spento,
e il consenso viene incluso nei dati inviati.

## Hosting e pubblicazione
- **Netlify**, collegato a questo repo GitHub (`marketingemporio/the-coffeekillers`, branch `main`).
  - Publish directory: `.` (la radice) · Build command: nessuno.
  - **Deploy automatico**: ogni `push` su `main` pubblica.
- ⚠️ Netlify pubblica **la radice**: tutto quello che è tracciato da git finisce online.
  Per questo `_parcheggio/`, `_font-prova/`, `_brand-def/`, i PDF del brand e le foto
  originali sono esclusi in `.gitignore`, e `_redirects` blocca `_STATO.md` e `README.md`.
- Nota storica: prima su **Cloudflare Workers** (`wrangler`), poi spostato su Netlify.

## Analytics
**Cloudflare Web Analytics** su tutte le pagine, subito prima di `</body>`.
Privacy-friendly, senza cookie e senza banner.

## Cosa c'è in `_parcheggio/` (solo in locale, fuori dal repo)
- `sito-react-precedente/` — il sito React che c'era fino al 01/09/2026
  (recuperabile anche dalla cronologia git)
- `maquette-di-lavoro/` — le varianti di redesign scartate (A, A2…A7, B, C, D),
  la barra per saltare fra loro e le pagine di controllo `_diag-*`
- `proposte-prima-del-2026-09-01/` — le pagine com'erano prima dell'ultimo giro
- `font-bronco-non-piu-usato/`, `icone-estratte-dal-pdf/`, `proposte-prima-del-brand-def/`
