# The Coffeekillers — STATO (leggimi per primo)

> Handoff per riprendere il lavoro in una nuova chat / per un collega.
> **Ultimo aggiornamento:** 2026-08-12
> **Stato in una riga:** sito **ONLINE**. Il 12/08 è entrato il **brand rev.2** (palette, font, icone —
> **non** il logo, vedi sotto), il **video della prima canzone intera** in home, la sezione
> **"Il palco"** col video del drone, i **link ai siti ufficiali** degli artisti citati e il fix
> dell'**overflow su mobile**. Data Beach Fly spostata al **10 ottobre**.
> Compilato il 2026-06-25 da `README.md` + memoria + stato git reale.

---

# 🔬 PROVA IN CORSO — Bronco Valley + il colore (branch `prova-bronco-e-colore`)

> ⚠️ **Questo lavoro NON è su `main` e NON è online.** Vive sul branch
> `prova-bronco-e-colore`. Su `main` non è cambiato niente: il sito pubblicato è sempre
> quello di prima, con **Rye**. Serve una decisione della band prima di portarlo avanti.

Il 12/08/2026 Michele ha scaricato la **versione personal use** di Bronco Valley
(`bronco-personal-use.zip` nei Download) e l'abbiamo montata sul sito **in locale** per
guardarla. Poi Paola ha sollevato il problema del colore: *"non mi piace che nel sito è tutto
troppo monotono, tutto su marrone, beige, arancio, non c'è contrasto"*.

**📄 Il PDF per decidere con la band**: `Desktop/Coffeekillers - carattere e colore del sito.pdf`
— 13 pagine A4, generato da `_font-scelta-titoli.html`. ⚠️ **Non è nel repo**: incorpora il font
personal use, quindi è in `.gitignore` (regola `_font*`). Se serve rigenerarlo:
`python -m http.server 8910` nella cartella, poi Chrome `--headless --print-to-pdf`.

### ⚠️ Due scoperte che cambiano la decisione

**1. Bronco Valley non ha le minuscole.** La tabella dei caratteri dice "26/26 minuscole", ma è
fuorviante: nelle caselle delle minuscole c'è **un secondo alfabeto di maiuscole** — 11 lettere
su 26 hanno il disegno *byte-identico* alla maiuscola, le altre 15 sono ridisegnate appena, e
**tutte sono alte quanto le maiuscole** (672 unità). Verificato confrontando i glifi nel file,
non a occhio.
👉 **Se si sceglie Bronco, i titoli sono tutti maiuscoli per sempre** — la "proposta mista"
qui sotto non è realizzabile. Con Rye la scelta resta aperta.

**2. Al font personal use mancano gli accenti.** Ha **89 caratteri** in tutto: niente
`à è é ì ò ù`, niente **`&`** (che è nel nome della band), niente trattino lungo. Sul sito
quelle lettere ripiegano su Rye → **due caratteri dentro la stessa parola** ("autenticit**à**",
"dove c'**è** birra"). Su 7 titoli veri della home, **3** hanno il problema.
👉 **Prima di comprare la Webfont da $31, scrivere a Variatype e chiedere se la versione
completa ha gli accenti.** Se non li ha nemmeno quella, per un sito in italiano non è usabile.

### 🎨 Perché il sito sembra piatto — misurato, non a impressione

Rapporti di contrasto WCAG dei colori del brand (sotto 3 non stacca, da 4,5 si legge bene):

| Cosa, su cosa | Stacca | Nota |
|---|---|---|
| testo caffè su beige | **10,1** | ok |
| beige su fondo notte | **12,9** | ok |
| ruggine su beige — gli **occhielli** | **3,1** | debole |
| **ocra su beige** — le parole "evidenziate" nei titoli | **1,8** | ⚠️ quasi invisibili |
| azzurro su beige | **1,8** | ⚠️ mai usare l'azzurro come testo sul beige |
| testo caffè **sopra** l'azzurro | **5,7** | ✅ così funziona |
| azzurro **sopra** un fondo scuro | **7,3** | ✅ il massimo che la palette permette |
| ocra **sopra** un fondo scuro | **7,1** | ✅ gli accenti caldi vanno sullo scuro |

👉 **Il problema non è che manca colore: è che gli accenti non accentuano.** Le parole in
corsivo ocra dentro i titoli — il punto in cui l'occhio dovrebbe fermarsi — su fondo beige
staccano 1,8. E **quattro dei sei colori del brand sono caldi**: l'azzurro vintage `#8CAFA5`
è l'unico freddo, ed è quello che non stiamo usando.

**Quattro proposte** (tutte nel PDF, con blocchi veri del sito):
| | Proposta | Lavoro |
|---|---|---|
| **A** | sezioni a **fondo azzurro pieno**, alternate al beige → ritmo a bande | 1 giorno |
| **B** | azzurro come **accento** al posto del ruggine (occhielli, bordi biglietti, pulsanti) | ½ giornata |
| **C** | **fondo notte blu-verde + azzurro luminoso** → contrasto massimo | 1 giorno |
| **D** | **staccare** le sezioni: occhielli in etichetta piena, righe di stacco, più aria | ½ giornata |

💡 **Consiglio: B + D.** Mezza giornata a testa, nessun layout da rifare, e risolvono proprio
il problema degli accenti che non staccano. La **A** è quella che si vede di più.

### 🔧 Cosa c'è nel branch, in concreto
- `styles.css` + `components.jsx`: **Bronco Valley messo davanti a Rye** in `--ck-display`
  (nel `:root` **e** in `TYPESETS.brand`), con `@font-face` in cima a `styles.css`.
  Ogni punto ha il commento con la riga originale da rimettere.
- `.gitignore`: aggiunte le regole **`fonts/`** e **`_font*`**.
  ⚠️ **`fonts/` è ignorato per una questione di licenza, non di peso**: contiene il font
  personal use, e Netlify pubblica la radice del repo. Committarlo = distribuire online un font
  senza licenza, dal dominio della band. Quando si compra la Webfont, quella regola va tolta
  **di proposito**.
- **Non nel repo** (in `.gitignore`, restano solo sul PC): `fonts/` (Bronco + i font Google
  scaricati per la stampa), `_font.html` (confronto rapido), `_font-scelta-titoli.html` e il PDF.

### ▶️ Come si va avanti
- **Se la band sceglie Rye** (opzione più sensata oggi: gratis, accentate complete, piace a
  Michele): il branch si può **buttare**, basta ripristinare le due righe `--ck-display`.
- **Se sceglie Bronco**: prima la mail a Variatype sugli accenti, poi la licenza **Webfont
  $31** (⚠️ **non** la Desktop da $21, non copre i siti), poi si rifà il controllo sulle
  larghezze dei titoli — Bronco è più stretto e alto di Rye, le righe si spezzano altrove.
- **Il colore si decide a parte dal carattere**: B e D si possono fare comunque, anche
  restando su Rye.

---

# ⏳ DA DECIDERE — titoli maiuscoli o minuscoli (con la band)

⚠️ **Aggiornamento 12/08/2026: questa decisione si può prendere solo se si resta su Rye.**
Bronco Valley non ha le minuscole (vedi la sezione qui sopra) — con Bronco i titoli sono
per forza tutti maiuscoli.

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

⚠️ **Fatto il 12/08 sul branch `prova-bronco-e-colore`, con la versione personal use.** Il
risultato è nel PDF sul Desktop, e ha fatto emergere due problemi seri (accenti e minuscole
mancanti): **leggere la sezione "PROVA IN CORSO" in cima a questo file prima di comprare
qualsiasi cosa.** Su `main` non è cambiato niente.

⚠️ **Rye ha un solo peso**: niente grassetto sui titoli. Vedi la regola su `h1`–`h6` in
`styles.css` — c'è scritto lì perché.

Il brand book rev.2 usa **quattro** font. Due sono gratis e sono già sul sito. **Due mancano**:

| Font | A cosa serve | Stato | Come si prende |
|---|---|---|---|
| **Manrope** | tutti i testi | ✅ **attivo** | Google Fonts, gratis |
| **Smokum** | date, pulsanti, dettagli | ✅ **attivo** | Google Fonts, gratis |
| **Bronco Valley** | i titoli, secondo il brand book | ⚠️ **provato il 12/08 e ci sono due problemi** (accenti mancanti + niente minuscole): vedi la sezione "PROVA IN CORSO" in cima. Per ora i titoli restano in **Rye** | [variatype.com/bronco-valley-vintage-serif](https://variatype.com/bronco-valley-vintage-serif/) — servirebbe la **"Webfont License 100K Views", $31** (verificato il 12/08/2026). ⚠️ **Prima chiedere se la versione completa ha le lettere accentate** |
| **LT Cushion** | sottotitoli | ❌ **manca** → al suo posto c'è DM Serif Display | [dafont.com/lt-cushion.font](https://www.dafont.com/lt-cushion.font) — gratis (nel brand book: "100% free") |

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
Campionati direttamente dal PDF `HJCK brand rev.2.pdf` (in radice, non committato):

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
