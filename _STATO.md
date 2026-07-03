# The Coffeekillers — STATO (leggimi per primo)

> Handoff per riprendere il lavoro in una nuova chat / per un collega.
> **Ultimo aggiornamento:** 2026-07-03
> **Stato in una riga:** sito **ONLINE** su `main` (https://thecoffeekillers.com) con il **restyling completo pubblicato** — design system esteso, tutte le pagine riprogettate, foto Nashville sostituita, React in produzione. Verificato live con Playwright (chi-siamo, gallery, styles.css, react.production.min.js tutti confermati in produzione).
> Compilato il 2026-06-25 da `README.md` + memoria + stato git reale.

## 🔧 Fix font FAQ + audit SEO/mobile — 2026-07-03 (COMMIT LOCALE, da pubblicare)
- **Bug font**: il titolo grande della **FAQ** (`<h1 class="section-title-50">`) rendeva in
  **DM Sans** invece del serif (DM Serif Display) — sembrava un font di sistema. Causa: non
  esiste una regola generica `h1{font-family}`, il serif arriva solo da selettori-contenitore
  (`.faq h2`, `.ph-title`, `.hero-title`, `.shows-head h1`…). La classe `.section-title-50`
  impostava **solo** la dimensione; sull'unico `<h1>` che la usa (la FAQ) il font cadeva sul body.
  **Fix**: aggiunto `font-family: var(--ck-display)` a `.section-title-50` in `styles.css`
  (ridondante ma innocuo sugli `<h2>`). Verificato in locale con Chrome/CDP.
- **Audit SEO** (tutte le pagine): lang=it, viewport, title/description unici, canonical, OG,
  **1 solo h1 per pagina**, og-image online (HTTP 200), sitemap completa (7 URL), robots ok.
  Lacuna minore: `gallery.html` e `preventivo.html` **non hanno JSON-LD** (opzionale, non un errore).
- **Viewport mobile**: audit CDP con emulazione mobile reale su tutte e 7 le pagine →
  `scrollWidth == innerWidth` (390px), **nessuno scroll orizzontale**, email/testi non tagliati.

## ✅ RESTYLING COMPLETO — PUBBLICATO il 2026-07-03 (online)
Riprogettazione grafica di tutto il sito, fatta in autonomia su richiesta di Michele
("dare una spinta a design, movimenti, colori; pagine nuove povere da rendere fighe").
Identità confermata (palette Saloon + font della home), tutto il resto elevato.
Lavorato su branch `restyling-2026-07` (commit `b61a806`), poi **merge su `main`**
(merge commit `e7008ff`, no-fast-forward) e **push** → pubblicato live su Netlify.
Include anche tutto il lavoro precedente del branch `nuove-pagine-seo` (vedi sotto).

### Cosa c'è di nuovo
- **Design system esteso** (in fondo a `styles.css`, sezione "RESTYLING 2026-07"):
  sistema di reveal direzionali (`.rv`, `.stagger`), Ken Burns sui hero, ornamenti western
  (stelle + righe), hero standard per le pagine interne (`PageHero`), contatori animati
  (`CountUp`), focus ring e `prefers-reduced-motion` per l'accessibilità.
- **Nav**: link attivo evidenziato, ombra allo scroll, menu mobile con voci sfalsate.
- **Footer**: riga CTA "Il country alla tua serata?" + icona YouTube.
- **Chi siamo**: hero con foto di gruppo + statistiche animate; storia a timeline su fondo
  scuro con pull-quote; ispirazioni con tag genere; **schede membri editoriali alternate**
  con **cambio foto al passaggio del mouse** (foto seria → foto scherzosa).
- **Il country**: hero fotografico su Broadway coi neon + indice capitoli; 5 capitoli
  numerati (01–05) alternando chiaro/scuro; griglia dei 6 strumenti del suono country;
  timeline delle ere; barra di lettura in alto. Testi SEO invariati (già approvati).
- **Gallery**: masonry con **14 foto reali** (spariti i placeholder "in arrivo"),
  didascalie al hover, **lightbox** con frecce e tastiera; sezione video su fondo scuro.
- **Date**: hero dedicato, card "**Prossima data**" con conto alla rovescia automatico,
  date raggruppate per mese in stile **biglietto** (fori + strappo), archivio date passate.
- **FAQ**: domande numerate, contatti rapidi (email/WhatsApp) nella colonna sinistra.
- **Preventivo**: hero + percorso "come funziona" in 3 passi + rassicurazioni, poi il form.
- **Home**: hero cinematic con Ken Burns e ingressi sfalsati, scroll cue, reveal
  direzionali su tutte le sezioni, date in stile biglietto.
- **Performance/SEO**: React passato alle **build di produzione** (prima erano quelle di
  sviluppo: più pesanti e lente), preload dell'immagine hero in home, blocco statico SEO
  aggiunto a `preventivo.html` (mancava), nav statiche allineate su tutte le pagine,
  sitemap con lastmod 2026-07-03.

### Immagini
- **`images/nashville-broadway.jpg`** (NUOVA): Lower Broadway di notte coi neon dei
  honky-tonk — sostituisce la vecchia `nashville-skyline.jpg` (grattacieli anonimi,
  richiesta di Michele: "foto che c'entri con la musica"). Fonte: Wikimedia Commons,
  autore **dconvertini**, licenza **CC BY-SA 2.0**
  (https://commons.wikimedia.org/wiki/File:Broadway_(Nashville)_lights.jpg).
  ⚠️ Stessa situazione delle foto artisti: attribuzione da valutare prima del live.
  La vecchia skyline è ancora in `images/` (non usata, non eliminata).
- **`images/strumenti-fila.jpg`** (NUOVA): copia raddrizzata di `Strumenti.jpg`
  (l'originale è salvato ruotato di 90° e nel browser si vedeva storto; non toccato).

### Verifica fatta
- **Prima del merge**: screenshot Playwright di tutte e 7 le pagine, desktop (1440px) e
  mobile (390px): zero errori JS (a parte il beacon Cloudflare bloccato su localhost,
  normale), zero overflow orizzontale, tutti i reveal funzionanti.
- **Dopo il push su main**: verifica diretta su https://thecoffeekillers.com (curl +
  Playwright in produzione) — `chi-siamo.html` monta e mostra le nuove schede membri
  (`.bandrow`), `gallery.html` ha la masonry nuova (`.gal-masonry`), `styles.css` ha il
  design system nuovo, `index.html` carica React in build di produzione, la foto
  `nashville-broadway.jpg` risponde 200. Zero errori JS in un browser reale.

## 🕰️ Cronologia — lavoro pre-restyling (ora tutto live, mantenuto come riferimento)

### Lavoro 2026-07-02 (branch `nuove-pagine-seo`) — ora incluso nel restyling ed è live
Rifiniture su Chi siamo, nuova pagina FAQ e rework Country (revisione visiva fatta con screenshot Playwright, nessun errore JS):
- **Chi siamo**: i 5 membri ora hanno le **foto singole reali** (stesse della home) al posto delle iniziali; le 6 schede **ispirazioni** hanno la foto dell'artista; banner **skyline di Nashville** nella sezione storia. Corretto "Kruise" → **"Kruse Brothers"**.
  - ⚠️ **Kruse Brothers**: la vecchia descrizione ("country europeo") era **sbagliata** — sono un duo di **Phoenix, Arizona**. Riscritta con i fatti giusti.
- **FAQ**: nuova pagina dedicata **`faq.html`** + **`app-faq.jsx`** (accordion, h1, JSON-LD `FAQPage`). Le FAQ sono state **tolte dalla home** (niente contenuto duplicato); la home ora rimanda a `faq.html`. Nav, footer e sitemap aggiornati.
- **Il country**: layout **alternati immagine/testo** (non più muro di testo), foto vostre (`Strumenti palco.jpg`, `Palco 2/3.jpeg`) + Nashville, **voce personale** (prima persona), e sezione SEO potenziata **"In Italia il country sta esplodendo"** (keyword: band country, feste, sagre, matrimoni, eventi aziendali, Nord Italia). Aggiornati title/description/blocco statico.
- **⚠️ COPYRIGHT IMMAGINI (da valutare prima del merge/live)**: le foto artisti + Nashville vengono da **Wikimedia Commons** (licenza libera, ma richiederebbero **attribuzione**); la foto **Kruse Brothers** è presa dal loro store (nessuna licenza). Michele ha scelto consapevolmente di prenderle dal web. Valutare attribuzioni o sostituzioni prima di andare online.
- **File toccati**: `app-chi-siamo.jsx`, `app-country.jsx`, `app-faq.jsx` (nuovo), `faq.html` (nuovo), `chi-siamo.html`, `country.html`, `index.html`, `app.jsx`, `components.jsx`, `styles.css`, `sitemap.xml`, + immagini nuove in `images/` (zach-top.png, zac-brown-band.jpg, luke-combs.jpg, kruse-brothers.jpg, chris-stapleton.jpg, brad-paisley.jpg, nashville-skyline.jpg).

### Branch `nuove-pagine-seo` (merged, ora su main/produzione)

Commit: `e1d401d` — pushato su GitHub il 2026-06-30, poi confluito nel restyling.

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

### Checklist originale (tutta chiusa col restyling del 03/07)
- [x] **Foto nella gallery**: il restyling ha portato `PHOTOS` a 14 foto reali (era 4 + placeholder)
- [ ] **Eventuali video YouTube aggiuntivi**: `app-gallery.jsx`, array `VIDEOS` — ancora aperto, aggiungere `{ id: "ID_YT", title: "Titolo" }` quando ci sono altri video
- [x] **Testi** di chi-siamo e country: rivisti nel restyling (layout nuovo, testi SEO invariati)
- [x] **Merge su main** → live su Netlify dal 2026-07-03

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
