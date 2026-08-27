# The Coffeekillers — STATO (leggimi per primo)

> Handoff per riprendere il lavoro in una nuova chat / per un collega.
> **Ultimo aggiornamento:** 2026-08-20
> **Stato in una riga:** sito **ONLINE** (invariato); **in locale c'è la maquette del sito nuovo**
> e, dal **20/08**, la **cartella cliente definitiva con il logo nuovo** (caricata, non ancora montata)
> — vedi la sezione qui sotto. Il 12/08 era entrato il **brand rev.2** (palette, font, icone —
> **non** il logo, vedi sotto), il **video della prima canzone intera** in home, la sezione
> **"Il palco"** col video del drone, i **link ai siti ufficiali** degli artisti citati e il fix
> dell'**overflow su mobile**. Data Beach Fly spostata al **10 ottobre**.
> Compilato il 2026-06-25 da `README.md` + memoria + stato git reale.

---

# ⚠️ DA FARE — il sito ONLINE raccoglie dati senza informativa privacy

Scoperto il 2026-08-16 controllando il form: `preventivo.html` + `components.jsx` mandano
**nome, email, telefono e note a Formspree** (`formspree.io/f/xdabrrrr`) e **non c'è né una
casella di consenso né una pagina di informativa** — cercando "privacy" nel codice del sito
pubblicato non esce nulla. Riguarda il sito **vivo**, non solo la maquette.

Cosa serve per sistemarlo:
1. una pagina di informativa (bozza gia' pronta nella maquette: `proposta-informativa-privacy.html`,
   da far validare — mancano forma giuridica, sede legale e la verifica sui server di Formspree);
2. nel form, una spunta obbligatoria di consenso col link all'informativa (nella maquette c'e' gia':
   il bottone di invio resta disattivato finche' non e' spuntata);
3. il consenso incluso nei dati inviati.

Michele deve dare l'ok prima di toccare il sito pubblicato.

---

# 🚧 IN CORSO — maquette del sito nuovo, solo in locale (2026-08-16)

Il redesign si sta progettando **in locale**, come pagine `proposta-*.html` servite da
`python3 -m http.server 8910` nella radice. **Git le esclude tutte** (`/proposta-*.html` in
`.git/info/exclude`), quindi non possono finire online per sbaglio: il sito pubblicato è ancora
quello React di sempre, intatto.

**`proposta-a2.html` è la versione di riferimento** (home). Le altre pagine della maquette:
`proposta-chi-siamo` · `proposta-country` · `proposta-date` · `proposta-gallery` · `proposta-faq` ·
`proposta-preventivo` · `proposta-informativa-privacy` (bozza, vedi sopra). La pillola in basso a sinistra salta tra le home (A · A2 · A3 · B · C · D ·
sito attuale). Varianti: **A** (prima versione), **A3** (uguale ad A2 ma con font Champ),
**B**/**C** (prove vecchie), **D** (variante "cartellone" ispirata al poster Kruse Brothers).

**Com'è fatta la A2**: sezioni scelte con la band pescando il meglio da sito online + proposta B +
proposta A (hero con la foto della band senza logo gigante, video Guitar layout B, "dove diamo il
meglio" layout B, il palco da A, calendario layout B, poi le sezioni recuperate dal sito online —
Chi trovi sul palco, Abbiamo fatto ballare, Un assaggio del live, Ti aggiorniamo sulle date — CTA
e footer ridotto). Colori della proposta A ovunque (azzurro **solo** come accento, mai sfondo),
effetto apparizione allo scroll con fallback senza JS. Testata replicata dal sito **Kruse
Brothers**: striscia annuncio, menu a sinistra, logo grande centrato, social + Preventivo a destra;
in home trasparente sulla foto e sticky marrone scendendo, nelle pagine interne marrone piena.

**Font della maquette** (tutti di prova in `_font-prova/`, gitignorata): titoli **Bronco**, bottoni
**Valley** (taglio pulito della stessa famiglia), supporto **LT Cushion**, testi **Manrope**.
⚠️ Il Bronco demo **non ha le lettere accentate**: i titoli sono scritti senza accenti. Comprando
Bronco Valley (~$21) arrivano entrambi i tagli con gli accenti. In `proposta-a3.html` c'è la prova
con **Champ Ultra** (che gli accenti li ha) + **Rio Grande NF** sui bottoni.

⚠️ **Prima di pubblicare qualunque cosa**: comprare le licenze dei font usati. Tutti i file in
`_font-prova/` sono demo/trial per uso interno.

---

# ✅ ARRIVATO — la cartella cliente definitiva (logo compreso) — 2026-08-20

Lo studio ha consegnato **`HJCK_Cartella cliente.zip`**: dentro c'è finalmente il **logo
definitivo** — quello che al 12/08 era stato messo in pausa ("c'è un coloring che non va bene,
lascia quello vecchio per ora"). Insieme al logo sono arrivati icone ufficiali, i file dei font
e il PDF della palette con i valori esatti.

**Dove sono i file adesso:**
- **`_brand-def/`** (radice, **esclusa da git**) — la cartella cliente intera, come consegnata:
  logo in SVG/PNG/PDF, icone, font, `BRND DEF_HJCK.pdf` (8 pagine), `Palette colori.pdf`.
  ⚠️ Esclusa apposta: sono master da migliaia di pixel e font, e Netlify pubblica la radice.
- **`images/logo/`** (nel sito) — le **4 versioni web** del logo, SVG ottimizzati con svgo
  (‑22/26% di peso, resa identica: verificata a schermo) + un PNG a 1200px di ciascuna:
  | File | Com'è fatto | Quando si usa |
  |---|---|---|
  | `hjck-logo-positivo.svg` | scritta marrone + "Hot Joe" arancio | fondi **chiari** (beige, bianco) |
  | `hjck-logo-negativo.svg` | scritta beige + "Hot Joe" arancio | fondi **scuri** (marrone, arancio) |
  | `hjck-logo-positivo-contorno.svg` | scritta beige bordata di marrone | **sopra le foto** e i fondi mossi |
  | `hjck-logo-negativo-contorno.svg` | scritta marrone bordata di beige | **sopra le foto** chiare |
- **`_font-prova/brand-def/`** (esclusa da git) — i tre font consegnati:
  `Smokum-Regular.ttf`, `LTCushion-VF.ttf`, `Manrope-VariableFont_wght.ttf`.
- **`images/icone/`** — le **8 icone ufficiali** (arancio), più le stesse in **beige** in
  `images/icone/beige/` per i fondi scuri. Le vecchie sono in `_parcheggio/`.
- **`_diag-loghi.html`** (esclusa da git) — pagina di controllo: le 4 versioni sui 6 colori e sopra
  una foto, il logo alle misure vere della testata (74px e 52px), la tabella dei colori e il
  confronto dei font con gli accenti, le 8 icone nei sei colori e le due ipotesi di favicon.
  Si apre con `python3 -m http.server 8910` in radice.

## ✅ Le proposte sono già passate al brand nuovo (20/08)

**Tutte e 15 le pagine `proposta-*.html`** montano ora logo, colori e icone definitivi.
Riepilogo di cosa è cambiato dentro i file:

- **Logo** — via `images/HJCK_Logo2.svg`, dentro la versione giusta per il fondo di ogni testata:
  **negativo** dove la nav è scura (quasi tutte), **positivo** in `proposta-c` (nav chiara) con il
  **negativo nel footer**. In `proposta-b` il logo è usato come **maschera**: prima c'era un
  ritaglio a mano (`59.4% 47.5%/176%`) che serviva a togliere il margine vuoto del file vecchio —
  il file nuovo è già tagliato stretto, quindi ora è un normale `center/contain`.
- **Tolti i filtri CSS sul logo.** Il file vecchio era nero e veniva schiarito a forza
  (`brightness(0) invert(1) sepia(…)`, e in `proposta-d` un `invert(92%) sepia(…)`).
  Il logo nuovo i colori ce li ha dentro: i filtri sono spariti e ora **"Hot Joe" resta arancio**
  anche in testata, cosa che prima non succedeva.
- **Colori** — sostituiti i 5 hex sbagliati **e** le stesse tinte scritte come numeri dentro
  `rgba()` (erano 213 in tutto: la tabella qui sopra vale anche per quelle).
- **Icone** — i file ufficiali al posto di quelli estratti dal PDF. Le pagine le usano come
  **maschera CSS**, quindi il colore lo mette il CSS e funzionano in tutti e sei i colori.
  ⚠️ Sono cambiate le proporzioni dei disegni: aggiornati gli `aspect-ratio` in tutte le pagine
  (se si salta questo passo le icone si schiacciano).
- **Favicon** — nuova, generata dal logo su quadrato beige: `images/logo/favicon.svg`
  (+ PNG 512/180/32). Quella di prima era la scritta in nero persa in un quadrato bianco.

⚠️ **Eccezione voluta: `proposta-a5.html`** ("Mount West vintage") ha una **palette sua**,
sbiadita apposta (`#8E3A22`, `#E3A155`, `#B8C4AB`…). Non è il brand sbagliato, è un esperimento:
**l'ho lasciata com'era**. Se va allineata anche quella, va rifatta la scelta cromatica a mano.

⚠️ **Il sito ONLINE non è stato toccato**: `components.jsx`, `styles.css`, `index.html` e le altre
pagine pubblicate hanno ancora il logo vecchio e i 5 colori sfasati. È un passo a parte, da fare
quando Michele dà l'ok. Il vecchio `images/HJCK_Logo2.svg` **resta dov'è**: non l'ha toccato nessuno.

### Dove sono finiti i file vecchi
In **`_parcheggio/`** (esclusa da git, solo in locale): le 8 icone estratte dal PDF in
`icone-estratte-dal-pdf/` e una copia di tutte le proposte com'erano prima, in
`proposte-prima-del-brand-def/`. Nessun file cancellato: se qualcosa non convince, si torna indietro.

### Un rumore che c'era già
`proposta-a`, `-b`, `-c`, `-d` chiedono al server `fonts/bronco-valley.woff2`/`.woff`/`.otf` che
**non esistono** → 4 richieste fallite a pagina nella console. Non è un guasto: è la lista dei
formati messa lì apposta per il giorno in cui si compra Bronco Valley. Il `.ttf` in fondo alla
lista c'è e viene caricato. Era così anche prima del 20/08.

## 🎨 I colori ufficiali: cinque su sei erano sbagliati di pochissimo

Il PDF `Palette colori.pdf` dà i valori esatti. Quelli sul sito erano stati **campionati a schermo**
dal brand book e sono sfasati di **un punto per canale** — invisibile a occhio, ma è il tipo di
scarto che poi non torna quando lo studio fa una locandina.

| Nome (dal brand) | Ufficiale | Oggi sul sito |
|---|---|---|
| Beige | `#EDDABD` | `#EEDBBE` |
| Giallo | `#FA8600` | `#FB8700` |
| Marrone chiaro | `#BD8B65` | `#BE8C65` |
| Turchese | `#8BAEA4` | `#8CAFA5` |
| Arancio | `#CD5812` | `#CE5812` |
| Marrone | `#49240A` | `#49240A` ✅ |

✅ **Nelle proposte è già fatto.** ⏳ **Sul sito online no**: quando si farà, va corretto in
**due punti** (come sempre) — le palette `brand`/`brandnight` in `components.jsx` **e** il
`:root` di `styles.css`. Se se ne cambia una sola, in cima alla pagina si vede il lampeggio.

## 🔤 I font: cosa cambia con la consegna

Pagina 6 del brand book conferma i quattro font: **LT Cushion** (DaFont), **Bronco Valley**
(variatype, $20/$40 desktop), **Manrope** (Google) e **Smokum** (Google).

- **LT Cushion** non è più un buco: il file è arrivato (`LTCushion-VF.ttf`, variabile 300‑900).
  Sul sito online al suo posto c'è ancora DM Serif Display.
- **Bronco Valley** resta l'unico **a pagamento** e l'unico che manca davvero. Nella consegna
  **non c'è** — giustamente, è a licenza.
- **Verificato sui file** (lettura della tabella dei caratteri): Smokum, LT Cushion e Manrope
  hanno **tutti gli accenti italiani**; il **Bronco demo** ha 89 glifi in croce e gli mancano
  à è é ì ò ù, le maiuscole accentate, la `&` e l'apostrofo curvo. Ecco perché nella maquette
  i titoli sono scritti senza accenti: non è una scelta di stile, è il font demo che non li ha.
  → Comprando la Webfont di Bronco Valley il problema sparisce; **oppure** si valuta **Smokum**
  per i titoli, che è gratis e gli accenti ce li ha (in `_diag-loghi.html` c'è la prova diretta).

## 🤠 Le icone ufficiali — sostituite (20/08)

Sono le **stesse 8**, ma ora i file **ufficiali** dello studio invece di quelli estratti a mano dal
PDF. In `images/icone/` la versione **arancio**, in `images/icone/beige/` la versione **beige**
(che prima non esisteva e serve sui fondi scuri). I nomi dei file sono rimasti quelli di prima
(`teschio-longhorn`, `ferri-di-cavallo`, `stella-sceriffo`, `cappello-cowboy`…) apposta, per non
dover toccare le ~230 righe che li richiamano.

⚠️ **Il sito pubblicato le usa con `<img>`**, non come maschera: lì il colore è dentro al file, e
per i fondi scuri va puntata la cartella `beige/`. Nelle proposte invece sono maschere e il
problema non si pone.

---

# ⏳ DA DECIDERE — titoli maiuscoli o minuscoli (con la band)

Al momento è attiva una **proposta mista**, decisa il 12/08/2026:
- **MAIUSCOLO** → titoli brevi e dichiarativi, "da manifesto"
  ("ABBIAMO FATTO BALLARE", "DOVE CI TROVI NEL 2026", il claim dell'hero)
- **minuscolo** → frasi lunghe, discorsive o ironiche, dove il maiuscolo urla e si legge peggio
  ("Dove c'è birra, lì c'è anche il country", "Non arriviamo con due casse e un cavo")

Si sceglie **titolo per titolo** con la classe `t-caps` nel JSX: è una scelta di tono, non una
regola automatica.

**Per decidere con la band**: apri il sito **in locale** e usa l'interruttore in basso a destra
(*Proposta (misto) · TUTTO MAIUSCOLO · tutto minuscolo*). Compare **solo** in locale e sulle
anteprime Netlify, online non esiste. Il codice è in fondo a `components.jsx`.
👉 Quando la scelta è definitiva: sistema le classi `t-caps` e **cancella** sia quel blocco in
`components.jsx` sia le regole `html[data-titoli=...]` in `styles.css`.

---

# ⏳ DA FARE — comprare i font del brand

⚠️ **Stato al 12/08/2026**: i titoli sono in **Rye**, e questa versione va online così.
Michele: *"per ora usa comunque Rye, che come resa mi piace di più"*. Poco dopo però ha aggiunto:
*"intanto compro Bronco originale, è diverso da tutti quelli che mi hai messo comunque"* — quindi
**Bronco Valley è in acquisto** e andrà provato sul serio appena arrivano i file.

Bronco Valley è **volutamente fuori** dalla lista dei font dei titoli (`--ck-display`): mettere la
`@font-face` non deve bastare a cambiare l'aspetto del sito da solo. L'attivazione è un passo
esplicito (istruzioni sotto), così si può caricare il font, guardarlo e decidere con calma.

⚠️ **Rye ha un solo peso**: niente grassetto sui titoli. Vedi la regola su `h1`–`h6` in
`styles.css` — c'è scritto lì perché.

Il brand book rev.2 usa **quattro** font (confermati a pagina 6 del `BRND DEF_HJCK.pdf` consegnato
il 20/08). Due sono gratis e già sul sito; **LT Cushion** ora ce l'abbiamo come file; l'unico
davvero da prendere è **Bronco Valley**:

| Font | A cosa serve | Stato | Come si prende |
|---|---|---|---|
| **Manrope** | tutti i testi | ✅ **attivo** | Google Fonts, gratis |
| **Smokum** | date, pulsanti, dettagli | ✅ **attivo** | Google Fonts, gratis |
| **Bronco Valley** | i titoli, secondo il brand book | ⏸️ **in sospeso** — per ora i titoli sono in **Rye**, per scelta | [variatype.com/bronco-valley-vintage-serif](https://variatype.com/bronco-valley-vintage-serif/) — servirebbe la **"Webfont License 100K Views", $31** (verificato il 12/08/2026) |
| **LT Cushion** | sottotitoli | 📦 **file in mano** (`_font-prova/brand-def/LTCushion-VF.ttf`, consegna 20/08) — sul sito online c'è ancora DM Serif Display | [dafont.com/lt-cushion.font](https://www.dafont.com/lt-cushion.font) — gratis (nel brand book: "100% free") |

⚠️ **Attenzione a quale licenza compri**: la **Desktop ($21)** serve per Illustrator/Canva, **non**
copre l'uso su un sito. Per il sito ci vuole la **Webfont** ($31 fino a 100.000 visualizzazioni;
$225 fino a 1M). Con i numeri attuali del sito, quella da $31 è abbondante.

**Michele (12/08/2026): "vai online e poi comprerò quelli buoni, tienimelo scritto che devo farlo".**

### Se un giorno si decide di usare Bronco Valley
1. Compra la licenza **Webfont** e metti i `.woff2` in una cartella `fonts/` in radice.
2. In `styles.css`, in cima:
   ```css
   @font-face{ font-family:"Bronco Valley"; src:url("fonts/bronco-valley.woff2") format("woff2");
               font-weight:400; font-display:swap; }
   ```
3. **Poi, di proposito**, mettilo davanti a Rye in `--ck-display` — in **due** punti:
   `:root` in `styles.css` **e** `TYPESETS.brand` in `components.jsx`.
   (Se salti questo passo non succede nulla: Rye resta, ed è voluto.)
4. Ricontrolla i titoli: Bronco Valley è più stretto e alto di Rye, quindi le larghezze massime
   (per esempio `.hero-cinematic-title`) vanno riviste.

---

## ✅ Brand rev.2 + video in home + link artisti — 2026-08-12

Richiesta di Michele: data Beach Fly al 3 ottobre; una **grossa preview** in home del primo
video di una canzone intera; **link ai siti ufficiali** degli artisti citati ("così facciamo un
po' di link building"); e dal brand book rev.2 prendere **solo palette, icone, font e colori** —
⚠️ **NON il logo** ("c'è un coloring che non va bene, lascia quello vecchio per ora").

### 🎨 Palette — i sei colori ufficiali
⚠️ **Superata**: questi hex erano **campionati a schermo** dal PDF e sono sfasati di un punto per
canale. I valori buoni sono nella sezione del **20/08** qui sopra. Lasciata per capire da dove
vengono i colori che sono ancora nel sito pubblicato.

| Colore | Hex | Nome nel brand book |
|---|---|---|
| beige chiaro | `#EEDBBE` | carta consumata, superfici vintage |
| giallo/arancio ocra | `#FB8700` | luce calda, insegne retrò |
| tan | `#BE8C65` | — |
| azzurro vintage | `#8CAFA5` | cieli aperti, cromie sbiadite |
| ruggine | `#CE5812` | — |
| caffè tostato | `#49240A` | profondità, carattere |

- Sono in **due palette nuove**: `brand` (chiara) e `brandnight` (scura), in `components.jsx`
  e ricopiate nel `:root` di `styles.css` (il CSS deve avere i colori giusti **prima** che React
  parta, altrimenti la pagina lampeggia). **Se ne cambi una, cambia anche l'altra.**
- Tutte le pagine usano `brand`, **tranne `date.html`** che usa `brandnight` (era già scura).
- Le vecchie palette (Saloon/Midnight/Wildflower) sono ancora selezionabili dal pannello tweaks.
- Sostituiti anche i **~70 colori scritti a mano** in CSS e JSX con gli equivalenti rev.2.

### 🤠 Icone — le 8 del "sistema visivo"
Estratte **in vettoriale** dal PDF (erano vere curve, non foto) → `images/icone/`:
`teschio-longhorn` · `cactus` · `cappello-cowboy` · `ferri-di-cavallo` · `stivale` ·
`camaleonte` · `stella-sceriffo` · `chitarra`.
- Il colore ruggine è **dentro** il file: servono caricate con `<img>`, e un `<img>` non eredita
  il colore del testo della pagina.
- Usate: negli **occhielli** delle sezioni (una fissa per sezione) e nella **striscia scorrevole**
  al posto dei vecchi pallini.
- ⚠️ Stanno in un **quadrato** con `object-fit: contain` (classe `.ck-ico`): hanno proporzioni
  molto diverse fra loro e dandogli solo l'altezza la chitarra diventava un trattino illeggibile.

### 🎬 Video in home — "Guitar" (Zach Top)
- Video: `https://www.youtube.com/watch?v=mwindsVYrmo` — sezione `FeaturedVideo` in
  `components.jsx`, messa **subito sotto l'hero**.
- È una **facade**: si vede una copertina locale (`images/video-guitar-cover.webp`) e l'iframe di
  YouTube nasce **solo al click**. Un embed YouTube pesa quasi 1 MB di script di terze parti:
  a freddo in cima alla home lo pagherebbero tutti, anche chi il video non lo guarda.
- Aggiunto anche il **JSON-LD `VideoObject`** in `index.html`. ⚠️ Se cambi video, aggiorna lì
  anche `uploadDate` e `duration`: sono i dati che Google usa per l'anteprima nei risultati.

### 🔗 Link ai siti ufficiali degli artisti
Indirizzi tutti in un posto solo: **`ARTIST_SITES`** in `components.jsx` (+ il componente
`ArtistLink`, che se un artista non ha un sito stampa solo il nome). Aperti e verificati uno a uno.
- Dove compaiono: schede **"ispirazioni"** di *Chi siamo* (6 artisti), **pillole** del repertorio
  in home (5), testo di **Zach Top** nella sezione video, e nel blocco statico per i crawler.
- ⚠️ Kruse Brothers → **krusebrothersmusic.com**. Il dominio `krusebrothers.com` ha il
  **certificato HTTPS rotto**: non linkarlo.
- 📌 **Nota SEO, da dire a Michele**: questi sono link **in uscita** — non portano autorità
  *verso* di noi, la "link building" funziona al contrario (sono gli altri che devono linkare noi).
  È del tutto lecito e fa bene a lettori e rilevanza tematica, ma non aspettarsi un effetto SEO diretto.

### 📅 Beach Fly
`12 set 2026` → **`10 ott 2026`**. Cambiata in `components.jsx` (`SHOWS`) **e** in `date.html`
(sia il JSON-LD sia l'elenco statico per i crawler): sono **tre** punti, vanno tenuti allineati.
Aggiornata anche la tabella in [[Date Live 2026]] nel Brain.

### 🎥 Il palco (video col drone) — sezione nuova in home
Sezione `StageShowcase` in `components.jsx`, subito **dopo** il blocco "Dove c'è birra":
il testo promette un allestimento serio, il video lo dimostra.
- Sorgente: video del drone girato a **Gussago (BS)** (il palco allestito, poi il drone si
  allontana e scopre villa, sedie e vigneti). Originale **72 MB**, muto, 1920×1080.
- Pubblicato: `images/palco-villa-gussago.mp4` — **2,1 MB**, 1280×720, 25 fps.
  Ricetta ffmpeg (il fogliame dei vigneti è la cosa che fa esplodere il peso, il denoise è
  quello che fa la differenza):
  ```
  ffmpeg -i ORIGINALE.mp4 -an -vf "scale=1280:-2,hqdn3d=2:1.5:4:4,fps=25" \
         -c:v libx264 -profile:v high -crf 29 -preset slower \
         -pix_fmt yuv420p -movflags +faststart -y images/palco-villa-gussago.mp4
  ```
- Copertina `images/palco-villa-gussago.webp` = **primo fotogramma** del video, così quando
  parte non si vede lo stacco.
- Parte da solo, muto, in loop. ⚠️ Tre cose messe apposta, non toglierle:
  `muted` (senza, il browser non lo fa partire), `playsinline` (senza, iPhone lo apre a
  tutto schermo), `preload="none"` (senza, i 2 MB li scarica anche chi non arriva fin qui).
- C'è un **pulsante play di riserva** che compare solo se il browser blocca l'avvio
  automatico (capita sugli iPhone in risparmio energetico).
- Con "riduci animazioni" attivo nel sistema operativo resta la sola copertina, ferma.
- ⚠️ **Verifica sempre col browser vero**: Chrome headless carica e decodifica il video ma
  **non lo fa scorrere**, quindi da riga di comando non si può confermare che parta.
- 📌 Il luogo scritto in `place` ("Villa a Gussago (BS)") viene dal nome del file originale.
  Se cambi video, cambia anche quello.

### 🔤 Titoli impastati — RISOLTO (12/08, seconda passata)
Michele: *"Bronco Valley lo vedo in due modi diversi"*. Non erano due font: era **lo stesso Rye**,
di cui però una parte era **finta**.
**Causa**: `<h1>`–`<h6>` il browser li scrive in grassetto per impostazione predefinita. Rye
esiste in **un peso solo**: non trovando un grassetto vero, il browser **se lo inventa**
ingrassando i contorni. Su un carattere western pieno di dettagli il risultato è impastato — e
stonava con i punti dove il grassetto non c'era (nomi delle serate, "since 2018", la striscia
scorrevole), che mostravano Rye autentico: quelli che a Michele piacevano.
**Fix**: `h1..h6 { font-weight: 400 }` + `font-synthesis-weight: none` come sicurezza, con due
eccezioni (`footer h5`, `.ig-handle`) dove il carattere è Manrope, che il grassetto ce l'ha davvero.
⚠️ **Non rimettere il grassetto sui titoli**: finché il carattere ha un peso solo, "bold" non li
rende più marcati, li rende solo più sporchi.

### 📱 Overflow orizzontale su mobile — RISOLTO
Sui telefoni la pagina si poteva trascinare di lato di ~10px (`body.scrollWidth` 400 invece
di 390). **Causa**: `.rv--right`, l'animazione "entra da destra", tiene l'elemento spostato di
30px finché non compare; su schermo stretto il blocco è già largo quanto lo schermo e sporge.
**Fix**: sotto i 700px le entrate laterali diventano verticali (non si nota nulla), più
`overflow-x: clip` sul body come cintura di sicurezza — `clip` e non `hidden`, che romperebbe
gli elementi "sticky".
⚠️ **Attenzione a come si misura**: gli screenshot da riga di comando con `--window-size=390`
mostrano il testo tagliato anche quando il sito è a posto (Chrome headless non scende sotto
una certa larghezza di finestra). Per misurare davvero, carica la pagina in un **iframe da
390px** e leggi `body.scrollWidth`.

## ✅ Servizi 2022–2023 + sito tutto in webp + SEO foto — PUBBLICATO il 2026-07-28
Richiesta di Michele: "ho caricato una cartella con nuove foto, comprimile in webp e aggiungile",
poi: mettere **Eli** in gallery (non in home), **eliminare le foto in vecchio formato**,
**alt text e SEO sulle foto**, e usare i **soprannomi** della band.
La cartella nuova era **`Foto Nuovo sito/`** (38 file, 153 MB) — da non confondere con
`Foto x sito nuovo/`, che era **già lavorata** il 23/07.

### 🎸 Chi c'è nelle foto (chiarito da Michele + [[Identità e Formazione]] nel Brain)
I cinque si chiamano tra loro **Mike, Miglio, Larry, Richi, Ste** (usati nelle didascalie;
le schede membri mostrano nome completo + soprannome, es. Michele "Mike" Frosio).
Negli scatti **2022–2023** ci sono **due ex membri**:
- **Eli** (Elisa Turra) — voce e chitarra acustica, **2017 → set 2025**
- **Matteo** (Matteo Maghini) — banjo e chitarra elettrica, **2022 → set 2025**

**Decisione di Michele**: restano **nella gallery** con nome e anno ("è comunque storia
Coffeekillers"), **mai nella home**. La gallery ha un cappello introduttivo che spiega chi sono.

### 🧹 Eli togliata dalla home (2026-07-28, seconda passata)
Michele ha notato Eli nella foto del blocco **"Cocktail e ballads"** e ha chiesto di cambiarla.
Cercando, le foto con Eli nella home erano **due**, in **quattro punti**:
| Foto | Dove | Fatto |
|---|---|---|
| `live-sera-pubblico` (Eli in primo piano al centro) | blocco "Cocktail e ballads" | → **`prato-palco-pubblico`** (band di spalle, nessun volto: scelta suggerita da Michele) |
| `live-sera-pubblico` | striscia **Instagram** in fondo alla home | → **`band-fiume-o2`** (2026) |
| `live-palco-luci-calde` (Eli al microfono) | striscia **Instagram** | → **`live-notte`** (2026) |
| `live-palco-luci-calde` | hero **`editorial`** e **`poster`** | → **`live-voce`** (Mike, 2026) |
- Gli hero `editorial`/`poster` **non sono attivi** (la home usa `cinematic`, vedi
  `TWEAK_DEFAULTS` in `index.html`) ma sono selezionabili dal pannello tweaks: sistemati
  comunque, così Eli non ricompare se un giorno si cambia hero.
- Entrambe le foto **restano in gallery**, dove c'erano già: aggiornate le didascalie per
  citare Eli come le altre d'epoca ("Eli alla chitarra · live di sera").
- **Verificato**: nel DOM della home renderizzata **0 occorrenze** delle due foto.
- ⚠️ **Resta un punto da decidere**: `live-sera-pubblico` (con Eli) è ancora usata in
  **`app-country.jsx`** (pagina "Il country", sezione sul country in Italia). Non è la home,
  quindi rientra nella regola — ma se Michele la vuole cambiare, un sostituto pronto è
  `vigna-live-panoramica` o `prato-palco-pubblico`.

⚠️ **Lap steel — non è un errore di didascalia**: fino a **gennaio 2026** la lap era di **Larry**
(piano + lap). Con l'arrivo di **Ste** (chitarre + lap steel) **Larry è tornato al solo piano**.
Quindi in `vigna-lapsteel.webp` / `studio-lapsteel.webp` (2022–23) la lap è **giustamente**
in mano a Larry. → Corretto anche il Brain, che riportava per Ste "ott 2026" (sbagliato) e
"strumento da precisare".

### 🖼️ Tutto il sito è passato a webp
Convertite anche le **30 foto rimaste in vecchio formato** e **rinominate** con nomi
descrittivi minuscoli-con-trattini (contano per la SEO immagini; i vecchi avevano gli **spazi**:
`Michi 1.jpeg`, `Palco 2.jpeg`…). Tutti i riferimenti nel codice aggiornati (**53 sostituzioni**
in `components.jsx`, `index.html`, `app-chi-siamo.jsx`, `app-country.jsx`, `app-gallery.jsx`).
- Esempi: `Michi 1.jpeg` → `mike-chitarra-acustica.webp` · `Palco.jpg` → `live-palco-luci-calde.webp`
  · `Tutti.jpeg` → `band-completo-strumenti.webp` · `Michi sul palco.JPG` → `mike-telecaster-live.webp`
- **Eliminati** (con `git rm`, quindi recuperabili dalla cronologia): **37 file** in `images/`,
  compresi 7 mai usati da nessuna pagina (`Michi 5`, `Miglio 3/4`, `Richi 2/5`, `Strumenti.jpg`,
  `nashville-skyline.jpg`). Più i **4 file sparsi in radice** (`IMG_1545/1553/1600.jpg`,
  `IMG_1963.png`): prima verificato che avessero **copie byte-identiche** in `Foto x sito nuovo/`.
- **Restano non-webp solo**: loghi `.svg`, favicon `.png` e **`og-image.jpg`** — quest'ultima
  **deve** restare jpg (Facebook/WhatsApp gestiscono male il webp nelle anteprime social).
- `images/` da ~40 MB a **29 MB** con 61 foto in gallery (prima erano 28).

### 🔎 SEO sulle foto
- **Alt text riscritti**: ora descrivono la **scena**, non solo il nome. Erano generici in home
  ("The Coffeekillers — live", "Live show", "Stile country", "Pubblico e live") e nella
  mini-galleria Instagram **4 foto diverse avevano lo stesso alt "IG Post"** (ora uno per foto).
  Le schede membri hanno un `imgAltText` dedicato; le 6 ispirazioni avevano come alt il solo
  nome dell'artista.
- **Hero home**: aveva `alt=""` → ora ha un alt descrittivo (è la foto principale della band).
- 🐛 **Bug trovato e risolto**: il `<link rel="preload">` in `index.html` precaricava
  **`Palco.jpg`**, che dal 23/07 **non è più l'hero** (ora è `band-fiume-o4.webp`) → ogni
  visita scaricava in alta priorità un'immagine mai mostrata. Ora punta all'hero vero, con
  un commento che ricorda di tenerlo allineato a `HeroCinematic` in `components.jsx`.
- Le foto puramente decorative (la seconda foto delle schede membri, quella del hover) tengono
  `alt=""` + `aria-hidden="true"`: **è corretto**, non va "riempito".
- **Conversione**: tutte e **38 → `images/*.webp`**, max lato lungo **2000px, q87** (`sips -Z 2000
  -s format png` → `cwebp`). Da 153 MB a **8,4 MB** totali (media ~220 KB per foto).
  Orientamenti verificati: erano `.jpg`/`.JPG` da reflex, `sips` li gestisce bene (il problema
  `irot` del 23/07 riguardava solo le HEIC da iPhone).
- **Nomi per gruppo/scena**: `vigna-*` (ritratti e live in vigna al tramonto, 2022) ·
  `vigna-live-*` (concerto serale sotto le lucine) · `live-blu-*` / `live-sera-*` /
  `live-controluce-*` / `live-telecaster-*` (live notturni) · `prato-*` + `targa-band`,
  `strumenti-prato`, `telecaster-dettaglio` (servizio 2023 sul prato) · `studio-*` (ritratti in
  studio su fondo chiaro, feb 2023) · `acustico-cortile`.
- **Gallery** (`app-gallery.jsx`): aggiunti **33 scatti** in un blocco nuovo in mezzo
  ("Servizi fotografici 2022–2023"), da 28 a **61**. Il contatore "scatti" è automatico.
  **5 tenute da parte** perché quasi identiche ad altre già inserite (pronte all'uso se servono):
  `live-blu-contrabbasso-b`, `vigna-contrabbasso-b`, `vigna-contrabbasso-live-b`,
  `studio-contrabbasso-b`, `studio-contrabbasso-c`.
- ✅ **Formazione risolta**: chi è chi è stato chiarito da Michele (vedi la sezione "Chi c'è nelle
  foto" qui sopra) → le didascalie ora usano i **soprannomi**, e **Eli** e **Matteo** sono
  nominati negli scatti in cui compaiono. Le schede membri di Chi siamo mostrano la **formazione
  attuale** e non sono state mescolate con le foto d'epoca.
- ⚠️ **Nota per chi rinomina le foto**: `studio-basso` / `vigna-basso` (nomi della prima passata)
  erano **sbagliati** — lo strumento portato in spalla è una **lap steel**, non un basso.
  Rinominati in `studio-lapsteel` / `vigna-lapsteel`. Se serve verificare uno strumento in una
  foto, conviene ritagliare e ingrandire (`dwebp` + `sips -c`) prima di dare un nome.
- **`.gitignore`**: aggiunte `Foto Nuovo sito/` e `Foto x sito nuovo/`. ⚠️ Netlify pubblica la
  **radice** del repo: senza questa protezione un `git add .` distratto pubblicherebbe online
  211 MB di originali.
- **Verificato** (Chrome headless + CDP, reduce-motion, `python3 -m http.server 8911`):
  gallery **61 foto, 0 rotte, 0 non caricate**, **0 errori JS**; nessuno scroll orizzontale
  (`scrollWidth == innerWidth`) né a **1440px** né a **390px** con emulazione mobile vera;
  contatore = "61 scatti". Le sole 2 richieste fallite sono beacon/font esterni bloccati su
  localhost (normale, come da nota storica).
  - 📝 Nota di metodo: Playwright **non è installato** su questo Mac. Chrome headless con
    `--window-size=390` **senza** emulazione mobile mostra la pagina tagliata a destra: è un
    **artefatto**, non overflow (verificato: identico sul sito online, e CDP con
    `Emulation.setDeviceMetricsOverride` conferma `scrollWidth == innerWidth`).
- ✅ **Pubblicato** (commit `fe6ba01`, pushato il 28/07 su ok esplicito di Michele). Verificato in
  produzione: le webp nuove rispondono **200 `image/webp`**, i vecchi file danno **404** (nessun
  riferimento rimasto), `og-image.jpg` è ancora **jpeg** come deve, il preload della home punta
  a `band-fiume-o4.webp`.
- 🔜 **Restano da sfruttare** (facoltativo): le **5 webp di riserva** (`*-b`, `*-c`: quasi
  identiche ad altre già in gallery) e `band-logo-promo.webp`.
- ❌ **Ritratti studio per le schede membri — RINVIATO** (deciso da Michele il 28/07): i
  `studio-*` coprono solo Mike, Miglio, Larry e Richi (**Ste non c'era** nel 2023). Michele:
  "per le epoche sono d'accordo, aspettiamo un prossimo shooting per uniformare i ritratti in
  studio". → **Non mischiare le epoche**: si rifà tutto insieme al prossimo servizio fotografico.

## ✅ Foto fresche 2026 — PUBBLICATO (commit `d4645a0`, pushato; era in attesa il 23/07)
Richiesta di Michele: prendere le foto in `Foto x sito nuovo/` (rinnovate quest'anno),
convertirle in **webp** e usarle per "rimpolpare e dare varietà". Sono **foto della band
(di proprietà)** → nessun problema di copyright (diverso dalle foto artisti Wikimedia).
- **Conversione** (17 foto uniche; erano 20 file ma 3 coppie erano doppioni byte-identici):
  → tutte in `images/*.webp`. Gallery/Chi siamo max **2000px** q86–88; **hero a 2560px** q84
  (⚠️ prima era a 1600px e Michele l'ha vista **sgranata** a tutto schermo: rifatta più grande).
  - ⚠️ **Lezione tecnica**: le HEIC `IMG_2374`–`2380` avevano una **rotazione interna (irot)**
    che **`sips` IGNORA** (le esportava coricate; il tag EXIF veniva perso da `cwebp -metadata none`).
    Risolto convertendole con **`qlmanage -t -s 1600`** (stesso motore del Finder, rispetta la
    rotazione) → PNG dritto → `cwebp`. Le `.jpg/.JPG/.png` invece andavano bene con `sips`.
  - Nomi: `band-muro-a/b` (promo muro terracotta), `band-giardino-a/b`, `band-fiume-v1/v2/v3`
    (verticali) + `band-fiume-o1/o2/o3/o4` (orizzontali), `band-logo-promo`, e i live
    `live-voce / live-basso / live-batteria / live-tastiere / live-notte`. Committati tutti e 17.
- **Gallery** (`app-gallery.jsx`): aggiunti **14 scatti** in cima (da 14 a **28**), alternati per
  varietà (gruppo fiume ×5, muro terracotta ×2, giardino ×2, + i 5 live). Il conteggio "scatti" è
  automatico. Fuori dalla griglia solo `band-logo-promo` (ha il logo sovrimpresso → sembra locandina).
- **Foto chiave rinfrescate** (scelte da Michele: "scena al fiume"):
  - **Hero Home** (`components.jsx`, `HeroCinematic`): `Palco.jpg` → **`band-fiume-o4.webp`**.
    Scrim rinforzato (gradiente .48→.28→.8) + **`textShadow`** sul contenuto per tenere testo
    bianco e logo leggibili sulla foto luminosa. `Palco.jpg` resta comunque nella gallery.
  - **Foto gruppo Chi siamo** (`app-chi-siamo.jsx`, PageHero `photo`): `Tutti.jpeg` →
    **`band-fiume-v1.webp`** (verticale). Nota: `Tutti.jpeg` era **lo stesso scatto** del muro
    terracotta `band-muro-a`, solo dell'anno scorso.
- **Verificato** (Playwright, reduce-motion): gallery 22 foto **0 rotte 0 errori JS reali**;
  hero Home desktop+mobile e Chi siamo → testo/logo leggibili, orientamenti corretti.
- **NON toccato** il branch B (`fusione-webflow-2026-07`): non ha queste foto. Se un giorno si
  sceglie la B, le stesse modifiche andranno riportate lì.
- ✅ **Pubblicato**: il push è stato fatto, queste 17 foto sono **online**. In uso 16 delle 17 webp;
  resta libera solo `band-logo-promo` (asset promo con logo), pronta all'uso.

## ✅ Fix font FAQ + audit SEO/mobile — PUBBLICATO il 2026-07-03 (online)
Pushato su `main` (commit `43d9822` fix font, `43f6648` JSON-LD) → deploy Netlify verificato
live (`styles.css` aggiornato online, JSON-LD presenti, screenshot FAQ live = titolo in serif).
- **Bug font**: il titolo grande della **FAQ** (`<h1 class="section-title-50">`) rendeva in
  **DM Sans** invece del serif (DM Serif Display) — sembrava un font di sistema. Causa: non
  esiste una regola generica `h1{font-family}`, il serif arriva solo da selettori-contenitore
  (`.faq h2`, `.ph-title`, `.hero-title`, `.shows-head h1`…). La classe `.section-title-50`
  impostava **solo** la dimensione; sull'unico `<h1>` che la usa (la FAQ) il font cadeva sul body.
  **Fix**: aggiunto `font-family: var(--ck-display)` a `.section-title-50` in `styles.css`
  (ridondante ma innocuo sugli `<h2>`). Verificato in locale con Chrome/CDP.
- **Audit SEO** (tutte le pagine): lang=it, viewport, title/description unici, canonical, OG,
  **1 solo h1 per pagina**, og-image online (HTTP 200), sitemap completa (7 URL), robots ok.
  Aggiunto JSON-LD dove mancava: `gallery.html` (`ImageGallery`) e `preventivo.html` (`ContactPage`),
  entrambi con `about` → MusicGroup. Ora tutte le 7 pagine hanno dati strutturati.
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
