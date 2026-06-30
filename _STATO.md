# The Coffeekillers — STATO (leggimi per primo)

> Handoff per riprendere il lavoro in una nuova chat / per un collega.
> **Ultimo aggiornamento:** 2026-06-30
> **Stato in una riga:** sito **ONLINE** su `main` (https://thecoffeekillers.com). Branch **`nuove-pagine-seo`** in attesa di merge: 3 nuove pagine (gallery, chi siamo, country) + fix flash + fix date.html scura + date passate/future separate. Non ancora in produzione.
> Compilato il 2026-06-25 da `README.md` + memoria + stato git reale.

## 🔀 Branch in corso — `nuove-pagine-seo` (NON ancora su main/produzione)

Commit: `e1d401d` — pushato su GitHub il 2026-06-30.

### Fix su pagine esistenti
- **Flash blocco statico** (`index.html` + `date.html`): il blocco HTML per i crawler è ora avvolto in `<div style="display:none">` → gli utenti non vedono più il testo grezzo per un microsecondo prima che React parta. I crawler senza JS lo leggono comunque (ignorano il CSS).
- **`date.html` non più beige**: palette cambiata da `saloon` a `midnight` → sfondo scuro, testo leggibile.
- **Date passate/future separate** (`UpcomingShows` in `components.jsx`): in `date.html` le date future compaiono in cima normali; le passate compaiono sotto in una sezione "Date passate" a 45% opacity, con divisore. **Automatico**: ogni giorno che passa le date scadute si spostano sotto da sole.

### Nuove pagine create
| File | Contenuto |
|---|---|
| `gallery.html` + `app-gallery.jsx` | Griglia foto (4 reali + 8 placeholder pronti) + sezione video YouTube |
| `chi-siamo.html` + `app-chi-siamo.jsx` | Storia band, ispirazioni artistiche (Zach Top, ZBB, Luke Combs, Kruise Brothers, Stapleton, Paisley), schede 5 membri |
| `country.html` + `app-country.jsx` | Guida al country: origini, suono, evoluzione, Italia, perché funziona agli eventi |

### Da fare prima del merge su main
- [ ] **Aggiungere le foto** nella gallery: aprire `app-gallery.jsx`, aggiungere i file nell'array `PHOTOS` in testa (es. `{ src: "images/NOME.jpg", alt: "descrizione" }`)
- [ ] **Eventuali video YouTube aggiuntivi**: stesso file, array `VIDEOS`, aggiungere `{ id: "ID_YT", title: "Titolo" }`
- [ ] **Rivedere i testi** di chi-siamo e country se vuoi toccare qualcosa
- [ ] **Merge su main** → va live su Netlify

### Nota tecnica
- Nav e footer aggiornati con i link alle nuove pagine
- Sitemap aggiornata (6 pagine indicizzate)
- CSS nuovi in fondo a `styles.css`: `.gallery-grid`, `.member-card`, `.inspiration-card`, `.video-grid`
- Server locale: `python3 -m http.server 8910` dalla cartella del progetto

## ⚠️ Deploy automatico = produzione immediata
- Branch **`main`** → **Netlify** (publish `.`, nessun build): **ogni `git push` su `main` pubblica online.**

## ✅ PUBBLICATO il 2026-06-26 (online)
Pushato su `main` → online su https://thecoffeekillers.com. È andato live tutto:
- **Footer**: nota credito "Sviluppato con **Emporio nel Bosco**" (link **dofollow** a
  `emporionelbosco.it`, nuova scheda) inline sulla riga del copyright in `components.jsx`.
- **Footer accorciato**: padding `100px 0 140px` → `56px 0 64px` (~120px in meno di altezza).
- Blocco home **"Live 2026"** (`id="live"`, componente `UpcomingShows`, array `SHOWS`): finestra scrollabile con **data · nome serata · provincia**.
- **`_redirects`**: `/_STATO.md` e `/README.md` reindirizzati alla home → i doc interni **non** sono pubblici.

**Rifiniture possibili a sito già online (le vecchie "4 decisioni", pubblicate così come sono):**
1. **Matrimonio 05/09 (Siena)** — online come `Matrimonio` / `Siena (SI)` (neutro, **nessun nome cliente**). Eventualmente rinominare "Evento privato".
2. **Province "da confermare"** — 11/07 "Festa Country Village" e 19/07 "Serata Country" mostrano `da confermare`: sostituire quando confermate.
3. **Date già passate** (23/05, 30/05, 06/06) — ora visibili; valutare un filtro automatico "solo prossime".
4. **Nomi serate** — già ripuliti dai nomi interni; eventuali ritocchi.
- ✅ Voce **"Date"** nel menu nav: ora **implementata** (punta a `date.html`).
- ⚠️ **Mai pubblicare cachet/acconti/note interne**: restano solo nel PDF privato nel Brain (vedi sotto).

## 🔎 SEO

### 🎯 Posizionamento target (deciso con Michele il 2026-06-30) — IMPORTANTE
Ordine di priorità con cui la band si presenta (usato OVUNQUE: title, meta, copy, form):
1. **Locali** (serate nei locali) — il core attuale
2. **Feste & Sagre di paese** — categoria forte
3. **Festival** — secondario *per ora*: i festival chiedono **brani originali** che la band
   ancora **non ha** (in arrivo). Tenuto basso per non creare aspettative sbagliate.
4. **Corporate / Eventi privati**
5. **Matrimoni** — **sempre ultimo**: si fanno ("marchette") ma **non sono il core**.
   Presenti nei meta per intercettare chi cerca, mai come messaggio principale.
- ⚠️ **"Nord Italia" è solo posizionamento strategico, NON una keyword**: nessuno cerca
  "band country nord italia". Le query reali sono tipo "band country brescia",
  "band country matrimonio", "gruppo country [città]". "Nord Italia" si usa solo come
  prova di copertura geografica (Brescia + città dove hanno suonato davvero).
- 👉 **Quando arrivano i brani originali**: rialzare "Festival" nella gerarchia.

### Fase 1 (2026-06-28) — on-page base
- Aggiunti **`robots.txt`** e **`sitemap.xml`**. Quando si aggiungono/rimuovono pagine, aggiornare la sitemap.
- `index.html` aveva già on-page SEO completo (title, description, keywords, OG, Twitter, canonical, JSON-LD `MusicGroup`).
- `preventivo.html` integrato con meta description, favicon, canonical, OG e Twitter Card.

### Fase 2 (2026-06-30) — PUBBLICATA, online ✅
- **Contenuto statico per i crawler**: dentro `<div id="root">` di `index.html` (e `date.html`)
  c'è ora un blocco HTML "vero" (band, stile, lineup, prossime date, FAQ) leggibile da Google
  **e dalle AI** anche senza eseguire JavaScript. React lo sostituisce all'avvio: per l'utente
  non cambia nulla. **Motivo**: il sito monta tutto via React/Babel nel browser, quindi prima
  era quasi invisibile a chi non esegue JS (es. ChatGPT/Perplexity).
- **Riordino target** applicato ovunque (vedi gerarchia sopra): title, meta description, OG,
  Twitter, JSON-LD, marquee, tag-strip, eyebrow, copy, e **form preventivo** (default ora
  "Locale"; tendina `eventTypes` riordinata con "Feste & Sagre" e "Matrimonio" in fondo).
- **Nuova pagina `date.html`** (calendario completo) + **`app-date.jsx`** (monta `UpcomingShows`
  in modalità `full`). JSON-LD `MusicEvent` per le date con luogo confermato.
  - Home **accorciata**: la sezione "Dove ci trovi nel 2026" mostra solo le **4 date più vicine**
    + bottone "Vedi tutte le date" → `date.html` (così niente **contenuto duplicato** tra le due URL).
  - `UpcomingShows` ora ha prop `full`: in home filtra le prossime e taglia a 4; in `date.html`
    le mostra tutte e usa un `<h1>` (non `<h2>`).
  - **Se cambi le date** (`SHOWS` in `components.jsx`): aggiorna anche il blocco statico in
    `index.html` (4 prossime) e in `date.html` (tutte) + il JSON-LD `MusicEvent` in `date.html`.
- **Verificato in browser** (Playwright/Chrome) prima del push: rendering ok, nessun errore JS
  reale (solo beacon Cloudflare bloccato da CORS su localhost, sparisce in produzione).

### 📋 Prossimi passi SEO (da fare, in ordine di impatto) — RIPARTI DA QUI
1. **Backlink** (il più importante per query ampie): presenza su portali eventi/matrimoni
   (matrimonio.com, directory musicisti per eventi), scambi link con locali/sagre dove suonano.
2. **Google Business Profile**: verificare se esiste già una scheda Google per la band, crearla/sistemarla.
3. **Pagine/contenuti per zona**: testi che parlano delle singole città/province dove suonano
   (è così che la gente cerca), con eventi e luoghi reali — non genericamente.
4. **Contenuti tipo blog**: "quanto costa una band country", "canzoni country per una festa", ecc.
   (intercettano chi cerca informazioni, non solo chi cerca già la band).
- 💡 Idee scartate/rinviate: pannello mappa locale (serve per ricerche "vicino a me", non per
  query ampie); filtro automatico "solo date future" nel blocco statico (ora aggiornato a mano).

## 🎯 Cos'è
Sito vetrina della band **Hot Joe & The Coffeekillers** (country live, Brescia).

## 🗂️ Pagine & stack
- `index.html` (home) · `date.html` (calendario completo) · `preventivo.html` (richiesta preventivo).
- **Statico senza build**: HTML + React via CDN (unpkg) + Babel standalone nel browser. Componenti in `app.jsx`, `app-date.jsx`, `app-preventivo.jsx`, `components.jsx`, `tweaks-panel.jsx`; stili `styles.css`; foto in `images/`.
- ⚠️ Ogni pagina HTML ha un **blocco statico dentro `<div id="root">`** (per i crawler): se modifichi i contenuti React, ricordati di allineare anche il blocco statico corrispondente.
- Nota storica: provato prima su Cloudflare Workers, poi spostato su Netlify (config Workers rimossa; resta il branch remoto `cloudflare/workers-autoconfig`).

## 📈 Analytics
- **Cloudflare Web Analytics** attivo (beacon in `index.html` e `preventivo.html`).

## 🔧 Come riprendere / git
- Anteprima locale: apri `index.html` o `python3 -m http.server 8000`.
- Repo GitHub: `marketingemporio/the-coffeekillers`, branch **`main`** (= produzione, vedi avviso).

## 📎 Documenti collegati
- Nel Brain: `emporio-brain/The CoffeeKillers/Sito - Workflow di lavoro.md`, `Date Live 2026.md`, e `Testi di Riferimento/` (libreria testi country).
- ⚠️ **`Leads Coffee Killers - Date.pdf`** (nel Brain) è **PRIVATO** (cachet/acconti): non pubblicarne i dati sul sito.
