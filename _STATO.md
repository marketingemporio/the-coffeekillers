# The Coffeekillers — STATO (leggimi per primo)

> Handoff per riprendere il lavoro in una nuova chat / per un collega.
> **Ultimo aggiornamento:** 2026-09-02
> **Stato in una riga:** il **sito nuovo è ONLINE** dal 02/09/2026 — la maquette è diventata
> il sito, il React di prima è in `_parcheggio/`. Vedi **«IL SITO NUOVO È ONLINE»** qui sotto.
> **Tutto in regola sui font**: il 02/09 Michele ha comprato anche la licenza **Webfont** di
> Bonzana. L'**informativa privacy** è scritta. Le **date in calendario sono ancora quelle di
> prova**, per scelta: non ne abbiamo altre.
> (Cronologia: 20/08 cartella cliente col logo definitivo · 12/08 brand rev.2, video della prima
> canzone intera, sezione «Il palco», link agli artisti, fix overflow mobile.)
> Compilato il 2026-06-25 da `README.md` + memoria + stato git reale.

---

# ✅ RISOLTO — la privacy (02/09/2026)

Era il primo punto aperto di questo documento dal 16/08: il sito raccoglieva nome, e-mail e
telefono e li mandava a Formspree **senza informativa e senza consenso**. Adesso:
- `privacy.html` è un'**informativa vera**, scritta sul funzionamento reale del sito;
- il **consenso è obbligatorio** su tutti e tre i moduli (preventivo, landing, newsletter) e
  viene **incluso nei dati inviati**, con data e ora;
- il link all'informativa è nel piede di **tutte** le pagine.

⚠️ **Non è stata scritta da un avvocato.** È tecnicamente completa e rispecchia quello che il sito
fa davvero, ma una lettura da parte di chi segue gli adempimenti resta la cosa giusta da fare.

## 🧑 Il titolare del trattamento, senza forma giuridica
Michele: *"non abbiamo una forma giuridica, siamo 4 amici che suonano, come facciamo?"*

**Non serve una forma giuridica.** L'art. 4.7 del GDPR dice «la persona fisica **o** giuridica» che
decide finalità e mezzi: una **persona in carne e ossa** può essere titolare. Nell'informativa è
indicato **Michele Frosio, referente del gruppo**, con l'e-mail e il telefono già pubblici.

Le alternative, se un giorno cambia l'assetto:
| Strada | Quando ha senso |
|---|---|
| **Una persona fisica** (adesso) | il caso attuale: semplice, valido, nessun adempimento in più |
| **Contitolarità** (art. 26) | se le decisioni sono davvero collegiali; serve un accordo interno che dica chi fa cosa |
| **Associazione culturale / APS** | se un giorno nascerà: un'associazione, **anche non riconosciuta**, è già un soggetto valido e subentra come titolare |

📌 **Regola pratica**: il titolare naturale è **chi emette le ricevute per i cachet**. Se non è
Michele, si cambia il nome in un punto solo — il blocco «Chi tratta i tuoi dati» in `privacy.html`,
dove c'è un commento nel codice che lo spiega.

## 🔒 Cosa è cambiato nel sito per la privacy
- **Via Google Fonts.** Manrope arrivava da `fonts.googleapis.com`: ogni visita mandava l'IP del
  visitatore a Google, che è esattamente il punto su cui i garanti europei hanno già dato torto a
  dei siti. Ora è ospitato in `fonts/` (file variabile, un file per tutti i pesi). **Rye è uscito**:
  era solo il fallback dopo Bonzana e veniva anch'esso da Google.
  → Aprendo una pagina il browser **non contatta più nessun terzo** tranne Cloudflare Analytics.
- **Niente cookie.** Il sito non ne installa nessuno → **nessun banner da accettare**.
- **YouTube** parte solo al clic (era già così): finché non premi play, Google non sa che sei lì.
- ⚠️ **La newsletter prometteva e non manteneva.** Il modulo raccoglieva l'indirizzo e scriveva
  «Iscritto», ma **non mandava niente a nessuno**: un dato chiesto senza uno scopo, cioè la cosa
  che un'informativa non può coprire. Ora l'iscrizione arriva davvero (Formspree, marcata
  `Origine: Newsletter`) e sotto il campo c'è la riga di consenso col link all'informativa.
  Quando ci sarà un servizio vero (Brevo, Mailchimp) si cambia solo l'indirizzo nello script.

---

# 🚧 IN CORSO — maquette del sito nuovo, solo in locale (2026-08-16)

Il redesign si sta progettando **in locale**, come pagine `proposta-*.html` servite da
`python3 -m http.server 8910` nella radice. **Git le esclude tutte** (`/proposta-*.html` in
`.git/info/exclude`), quindi non possono finire online per sbaglio: il sito pubblicato è ancora
quello React di sempre, intatto.

**`proposta-a2.html` è la versione di riferimento** (home). Le altre pagine della maquette:
`proposta-chi-siamo` · `proposta-country` · `proposta-date` · `proposta-gallery` · `proposta-faq` ·
`proposta-preventivo` · `proposta-informativa-privacy` (bozza, vedi sopra).
Varianti: **A** (prima versione), **A3** (uguale ad A2 ma con font Champ), **A4**/**A5**
(font Mount West; **A5** ha anche una palette vintage tutta sua), **B**/**C** (prove vecchie),
**D** (variante "cartellone" ispirata al poster Kruse Brothers).

### 🔀 Come si salta da una proposta all'altra (rifatto il 20/08)

In basso a sinistra c'è una **barra** che porta a **tutte** le pagine: le 8 home, le 7 pagine
interne, la pagina di controllo del brand e il sito pubblicato. Si apre col bottone `▾`, e
**resta aperta anche cambiando pagina** (se lo ricorda nel browser). Le frecce `‹ ›` scorrono le
home in ordine; da tastiera funzionano **←** e **→**, e **P** apre e chiude il pannello.

Il codice sta tutto in **`_switch-proposte.js`** (radice, esclusa da git): l'elenco delle pagine è
in cima al file, se se ne aggiunge una si aggiorna **solo lì** e compare ovunque. Ogni pagina ha una
riga sola, `<script src="_switch-proposte.js" defer></script>`, prima di `</body>`.

⚠️ **Perché era da rifare**: prima ogni pagina aveva la *sua* pillola scritta a mano, e nessuna era
aggiornata — `proposta-a`, `-b`, `-c` conoscevano solo A/B/C, `-d` non sapeva di A3/A4/A5, e le 7
pagine interne non avevano proprio niente: ci si entrava e non si tornava più indietro. Le vecchie
pillole (`nav.pill`, `nav.switcher`, `nav.pill-nav`) e il loro CSS sono stati tolti.

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

✅ **`proposta-a5.html` è stata rifatta il 20/08** — vedi la sezione qui sotto.
✅ **`proposta-a6.html` è nuova**: identica alla A5, cambia solo il carattere (Bonzana).

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


# 🎨 A5 e A6 — tutta la pagina dentro i colori del brand (20/08)

Richiesta di Michele: **solo i colori del brand**, **senza il giallo `#FA8600`**, **niente marroni
inventati** (l'unico ammesso è `#49240A`) e **l'arancio `#CD5812` come colore che comanda**.

## Cos'era e cos'è
A5 aveva **13 colori suoi**, una lettura "sbiadita" del brand (`#8E3A22`, `#E3A155`, `#B8C4AB`…):
nessuno dei sei ufficiali. Ora la pagina usa **cinque** colori e basta —
`#CD5812` · `#49240A` · `#EDDABD` · `#BD8B65` · `#8BAEA4` — con il giallo escluso per scelta.
Convertiti anche **43 colori scritti a mano dentro le trasparenze** (`rgba(…)`), comprese le ombre,
che erano in nero puro e ora sono marrone: le ombre sono calde, non grigie.

## L'arancio comanda, ma non può stare sotto il testo piccolo
Misurato: **beige su arancio dà 3.07:1** e **marrone su arancio 3.25:1**. Per il testo normale
serve **4.5**. Quindi con questi cinque colori **nessuna scritta piccola è leggibile sull'arancio**:
non è una scelta di gusto, è una proprietà della palette.

La soluzione: l'arancio prende **le grandi superfici**, il marrone resta dove ci sono le scritte
piccole. Le fasce arancio sono `.video-b`, `.palco`, `.brands-sec` e la `.cta`, più il velo sulle
foto; restano marroni la testata, il calendario, la newsletter e il footer — tutte zone fitte di
testo piccolo. Conto reale delle altezze: **3.801px di arancio contro 2.261px di marrone**.

Dove l'arancio e il testo piccolo si incontravano per forza, tre trucchi:
- le **etichettine** (occhielli) stanno in una **pastiglia marrone** — beige su marrone fa 10:1;
- il **paragrafo d'apertura** delle fasce arancio va **in grande e in neretto** (≥19px/700), che è
  la soglia oltre la quale bastano 3:1;
- il **riquadro della CTA** (email, telefono, cachet) ha **fondo beige**, e la fascia arancio gli
  resta attorno.

## Guasti trovati per strada (c'erano già, ma non si vedevano)
- **`.cal-sec` porta la classe `on-light` ma ha il fondo scuro**: titolo e occhiello erano marroni
  su marrone. Prima non si notava solo perché i due marroni erano tinte diverse; con la palette
  vera diventavano invisibili. Ora il testo di quella sezione è beige.
- Il bottone **"Dettagli"** dentro la scheda "La prossima" era trasparente con il testo beige,
  su una scheda beige: spariva. Ora è pieno.

## Come è stato verificato
Uno script apre la pagina in un browser vero, per **ogni testo** calcola il colore effettivo dello
sfondo (risalendo i livelli e componendo le trasparenze) e confronta il rapporto con la soglia
giusta per quel corpo. Si è partiti da **20 testi sotto soglia**, si è arrivati a **0**.
L'unica segnalazione che resta è un falso positivo: la parola "travolgente" dell'hero sta **sopra
la foto**, non sul fondo della sezione, ed è leggibile (guardata a schermo).

---

# 🔤 A6 — la stessa pagina con Bonzana (20/08)

`proposta-a6.html` è una **copia esatta della A5**: stessa struttura, stessa palette, stesse
correzioni. **Cambia solo il carattere**: al posto di **Mount West** c'è **BONZANA**
(`_font-prova/bonzana/bonzana.otf`, gitignorata). Serve a confrontare i due font a parità di tutto.

- ✅ **Accenti**: controllati sul file — **206 glifi, non manca né un accento né la `&`**.
- ⚠️ **Bonzana ha un taglio solo.** A5 alternava Mount West largo sui titoli e Mount West **Narrow**,
  stretto, sui bottoni: in A6 è lo stesso carattere in entrambi i ruoli, e la gerarchia la fanno
  solo corpo e spaziatura.
- ⚠️ **È molto più largo.** Nell'hero "Vivi l'energia travolgente del country live." passa da 4 a 5
  righe e arriva a toccare il fondo. **Non ho toccato le misure** (era una prova a parità di tutto):
  se vuoi un confronto pulito basta abbassare il corpo del titolo dell'hero, è una riga sola.
- ⚠️ **Licenza da verificare** prima di pubblicare: lo zip arriva da un sito di font gratuiti, ma
  l'uso commerciale va confermato. Lo zip originale e la cartella `Font Bonzana/` in radice sono
  **esclusi da git** (la radice del repo finisce online).

---


# 🪵 A7 — gli sfondi del brand + Bonzana (20/08)

`proposta-a7.html`: **parte dalla A4**, le mette gli **sfondi sporcati del brand** e il font
**Bonzana**. A4 resta com'era.

## Da dove arrivano gli sfondi
Dalla pagina **SFONDI** del brand book rev.2 (04. Sistema visivo, pagina 15): tre fondi —
marrone, tan, arancio — con una **sporcatura** sopra e un **bordo mangiato** in fondo alla striscia.
Sono immagini vere dentro il PDF (1631×856 con maschera di trasparenza), estratte con `pdfimages`.

Verificato che il colore pulito sotto la sporcatura è **`#4A240B`**: cioè il marrone del brand.
Confermato che quei fondi **sono** i colori ufficiali, non tinte a parte.

## Come sono stati messi nella pagina (e perché così)
Non come tre immagini a colori, ma **separando la sporcatura dal colore**:
- **`images/sfondi/sporco.webp`** (93 KB) — solo il velo di sporco, senza colore, ricavato
  calcolando quanto ogni pixel è più scuro del fondo pulito.
- **`images/sfondi/bordo-strappato.webp`** (8 KB) — il bordo mangiato, usato come maschera:
  il colore di una sezione **sborda in modo irregolare** su quella dopo, come nel brand book.

Il vantaggio: il colore sotto resta **esattamente** quello ufficiale (è un colore CSS, non un
pixel di JPEG), **un file solo** serve tutti e tre i fondi e anche i colori futuri, e la quantità
di sporco si dosa sezione per sezione con l'opacità (`.poco` sui fondi chiari, `.molto` sulle
fasce forti). Un confronto fianco a fianco fra gli originali dello studio e la ricostruzione sta
in **`_diag-sfondi.html`** (locale, esclusa da git).

## Tre cose sistemate mentre le montavo
- **Il bordo strappato non si vedeva**: la sezione seguente ci passava sopra. Serviva lo `z-index`
  sulla sezione che sborda.
- **Sul chiaro lo sporco sembrava muffa**: il velo nero al 30% su un fondo quasi bianco leggeva
  come sporcizia, non come carta. Sceso al 12%.
- **La macchia cadeva sempre a sinistra** (nel file originale sta lì): a sezioni alterne il velo
  si ribalta.

## Leggibilità
Cambiare il fondo di una sezione cambia cosa ci si legge sopra: il controllo automatico ha trovato
**13 testi sotto soglia**, ora **0**. Erano gli stessi punti deboli della A5 — la sezione `.cal-sec`
che ha la classe `on-light` ma il fondo scuro, il bottone "Dettagli" beige su scheda beige, e le
etichettine finite sull'arancio (dove nessun testo piccolo arriva a 4.5:1, quindi vanno in
pastiglia marrone).

⚠️ **A7 eredita la palette della A4**, che **non** è quella del brand: c'è ancora il giallo
`#FA8600` e tre marroni inventati (`#241005`, `#2E1509`, `#180A02`) più un bianco sporco `#FBF5EA`
e tre verdi-azzurri fuori tabella. Gli **sfondi** invece sono i colori ufficiali. Se vuoi la A7
tutta dentro il brand come la A5, è un passaggio a parte — la ricetta è già scritta e collaudata.

⚠️ I due file in `images/sfondi/` **sono tracciati da git**: finiranno online al primo deploy anche
se per ora li usa solo una pagina locale. Sono 101 KB in tutto e servono comunque quando la
maquette andrà in produzione.

---


# ✨ A6 — rilavorata a fondo (29/08/2026)

Richiesta di Michele: lavorarla **piu' a fondo**, con **blocchi piu' creativi**, partendo
dall'hero — *"quel gradiente che seppia tutto rovina e non porta lontano"* e *"alcuni contrasti
non rendono leggibile il testo"*.

## 1 · L'hero: la foto a tutto campo, ma con un velo che ragiona

Prima versione (poi scartata da Michele): una locandina beige di fianco alla foto. Leggibile, ma
*"così non mi piace"* — voleva la **fotografia di sfondo**, con il contenuto organizzato meglio sopra.

**Il punto non era il gradiente in sé, era che copriva tutto.** Il seppia veniva steso sull'intera
immagine per far reggere il testo, e finiva per spegnere anche la parte che nessuno stava leggendo.

Adesso il velo è **direzionale**: scende da **sinistra e dal basso**, cioè solo dove appoggia il
testo, e lascia libero l'angolo in alto a destra. La fotografia resta viva dove si guarda e
diventa fondo dove si legge.

**Le misure non sono a occhio.** Col marrone all'80% sopra un cielo bianco — il punto peggiore
della foto — il beige sta a **5.4:1**, sopra la soglia del testo piccolo. Nella zona del testo i
due gradienti sommati arrivano al **93%**. Sotto i 1000px il velo laterale sparisce (il testo
occupa tutta la larghezza) e resta solo quello verticale, più alto.

**Il contenuto è su due piani:**
1. In basso a sinistra: occhiello su pastiglia bordata d'arancio → titolo → sottotitolo → i due
   inviti all'azione. Il blocco è agganciato in basso, così la metà alta della foto resta libera —
   che è poi il motivo per cui una fotografia si mette lì.
2. In fondo, una **fascia marrone piena** con filetto arancio: i tre dati (dal 2018 · 5 sul palco ·
   base Brescia) e **la prossima data** come collegamento. Essendo marrone pieno, ogni scritta
   piccola lì dentro sta a 10:1 senza dipendere dai pixel della foto.

⚠️ **La parola in evidenza** non poteva restare arancio: sul velo scuro sarebbe stata a 2.5:1,
troppo poco anche per un titolone. È diventata un **blocco arancio con la scritta beige**, come una
timbratura — 3.07:1, sopra la soglia dei corpi grandi.

Tre aggiustamenti fatti guardando il risultato a schermo: il titolo a corpo pieno arrivava
all'altezza delle facce e ne copriva due; spingendo il blocco in basso col padding l'hero si
allungava e la fascia finiva sotto lo schermo; allargando la misura del titolo da 17 a 21 caratteri
scende a tre righe e si sistema da solo.

## 2 · Le fotografie tornano a colori

C'era `sepia(.52) saturate(.58)` su **tutte** le immagini, piu' due veli arancio in *multiply*.
Insieme appiattivano la pagina su un tono solo. Ora resta un ritocco leggero
(`saturate(1.05) contrast(1.03)`) e il velo scuro sopravvive **solo in fondo alle immagini
grandi**, dove ci sono didascalie appoggiate sopra. Il video del palco, per dire, e' tornato verde.

## 3 · Due blocchi ridisegnati

- **Il calendario e' diventato biglietti.** La prossima data e' un biglietto vero: tallone arancio
  con la data, perforazione tratteggiata, e **due tacche tonde** del colore della sezione — sono
  loro a far leggere il buco come un buco. Le altre date sono biglietti piccoli in griglia, col
  tallone in marrone chiaro. ⚠️ Le tacche sono agganciate al **tallone**, non messe a una distanza
  fissa: se no basta cambiare una misura e vanno fuori asse.
- **La formazione e' diventata manifesti.** Foglio beige, doppio filetto, **foto ad arco**, nome
  in Bonzana, ruolo su pastiglia marrone, citazione sotto un tratteggio. Sono su fondo dello stesso
  beige, quindi hanno un'**ombra piena arancio spostata** — lo stesso gesto del bottone dell'hero,
  cosi' la pagina parla una lingua sola.

## 4 · Leggibilita' verificata

Controllo a schermo su ogni testo della pagina: **da 11 sotto soglia a 0**. Erano tutti lo stesso
caso — arancio e beige uno sull'altro fanno **3.07:1**, abbastanza per un titolo grande, non per una
scritta piccola. Sistemati: le etichette dei dati nell'hero, le pastiglie del palco (ora piene di
marrone, 10:1) e le localita' sui biglietti.

⚠️ Promemoria che vale per tutta la A5/A6/A7: **sull'arancio nessun testo piccolo arriva a 4.5:1**
(beige 3.07, marrone 3.25). O si sale di corpo, o ci va sotto una pastiglia marrone.

---


# 🧱 A6 — sfondi rovinati e font dei bottoni (29/08, seconda tornata)

## Gli sfondi del brand, anche qui
A6 ha ora la stessa sporcatura della A7 (dalla pagina SFONDI del brand book): fasce arancio e
marrone sporcate, sezioni chiare con un velo appena accennato, e il **bordo mangiato** che fa
sbordare il colore di una sezione su quella dopo.

## ⚠️ Perché l'arancio sembrava "pixelato" — e come è stato risolto
Michele: *"attenzione all'arancio, è molto pixelato, come se tu avessi zoommato troppo."*
Aveva ragione, ed era proprio uno zoom: la texture era **un file solo** (1000×525) allargato a
coprire sezioni alte più del doppio. Ingrandita 2,3 volte, una sporcatura fatta di **puntini
fitti** si vede tutta a quadretti — e sull'arancio, che è il colore principale, saltava all'occhio.

La texture ora è **divisa in due strati**, perché le due frequenze vanno trattate in modo opposto:

| File | Cos'è | Come si comporta |
|---|---|---|
| `images/sfondi/grana.webp` (384px, 7 KB) | i puntini fitti | **si ripete a misura naturale**, non viene mai ingrandita → non sgrana. Il tassello è specchiato sui due assi, così le giunzioni non si vedono |
| `images/sfondi/macchie.webp` (760px, 84 KB) | gli aloni larghi | **sfocati**, quindi allargarli non si nota |

Due tentativi sbagliati prima di arrivarci, vale la pena saperlo:
1. ho **amplificato** la grana (×1,5) e alzato l'opacità: il risultato sembrava **statica della
   televisione**, non sporcatura;
2. ho preso il tassello di grana da una **zona macchiata** dell'originale: ripetuto ovunque
   rendeva tutta la pagina uniformemente sporca, e la simmetria del tassello si vedeva.
La versione buona non amplifica niente e prende la grana da una **zona pulita**, con il picco a
26/255 — appena percettibile. Confronto fianco a fianco con gli originali dello studio in
`_diag-sfondi.html`.

✅ **La correzione vale anche per la A7**, che aveva lo stesso file e lo stesso difetto.
Il vecchio `sporco.webp` è stato tolto. In tutto il velo pesa **91 KB**, meno di prima.

## Il font dei bottoni
Michele: *"i bottoni in bonzana non sono leggibili."* Vero: Bonzana è un carattere da manifesto,
sui titoli grandi funziona, ma su un'etichetta di quindici o venti pixel le grazie squadrate si
chiudono e la parola non si legge più.

Al suo posto **LT Cushion**, che è uno degli altri tre font del brand (Bronco Valley è fuori,
sostituito da Bonzana), nel taglio **900** con le lettere staccate. Variabile `--btn`, applicata a
`.btn-poster` · `.btn-dark` · `.cta-btn` · `.nav-cta` · `.hero6-btn` · `.cal-badge`.
Ha l'occhio più piccolo di Bonzana, quindi i corpi sono stati alzati di un paio di punti.

⚠️ **I numeroni delle date restano in Bonzana**: lì il corpo è grande e il carattere fa il suo
mestiere. Il cambio riguarda solo le etichette piccole.

Contrasti ricontrollati dopo tutto questo: **0 testi sotto soglia**.

---

---


# 🧭 A6 — il giro di grafica del 01/09/2026

Michele ha dato una lista di richieste puntuali partendo dalla A6, poi un secondo giro dopo aver
guardato il risultato. Copia della versione precedente in
**`_parcheggio/proposte-prima-del-2026-09-01/proposta-a6.html`** (niente e' andato perso).
Il sito **online non e' stato toccato**: si lavora solo sulla maquette locale.

## 🩹 Il guasto piu' grosso: gli sfondi "sporcati" sgranavano — RIFATTI DA ZERO

Michele: *"Gli sfondi sono venuti ancora tutti sgranati, hai preso i contenuti del brand come
sfondi ma li hai zoomati."* Aveva ragione, e la causa era strutturale.

**Cos'era**: due immagini ritagliate dalla pagina SFONDI del brand book —
`images/sfondi/grana.webp` (512px) e soprattutto `macchie.webp` (760px) — la seconda stesa a
`cover` su fasce larghe 1440px e piu'. Ingrandita due-tre volte si vedeva tutto: i puntini a
quadretti e, dentro le "macchie", **le lettere sfocate della pagina di PDF** da cui erano state
ritagliate. Il tentativo del 29/08 (dividere in due strati) aveva ridotto il problema, non
tolto la causa: **un'immagine, per quanto grande, prima o poi la ingrandisci.**

**Cos'e' adesso**: la sporcatura non e' piu' un'immagine, e' **disegnata dal browser**
(`feTurbulence` dentro un SVG in `data:`), su **tre strati** in `:root`:

| Variabile | Tassello | Cosa fa |
|---|---|---|
| `--sporco-grana` | 190px, `baseFrequency 0.92` | i puntini fittissimi: il rumore della carta |
| `--sporco-fibra` | 340px, `baseFrequency 0.14` | una trama media, rompe la regolarita' della grana |
| `--sporco-nuvole` | 620px, `baseFrequency 0.013` | gli aloni larghi: la disomogeneita' del foglio |

Tutti e tre con **`stitchTiles='stitch'`**: i bordi del tassello combaciano, le giunzioni non si
vedono. Si ripetono **a misura fissa** e **non vengono mai scalati**, quindi non possono sgranare
a nessuna larghezza di schermo. Pesano **zero byte di rete** e servono tutti i colori.

⚠️ **Le dosi stanno dentro i tasselli** (`feFuncA tableValues`), non nell'`opacity` della regola:
cosi' i tre strati si bilanciano uno per uno. Valori scelti provandoli fianco a fianco su arancio,
marrone e beige — la pagina di confronto e' **`_diag-grana.html`** (in radice, esclusa da git).
Primo tentativo a `opacity:.5` complessiva: la sporcatura spariva del tutto e la pagina sembrava
piatta. Buono: grana `0.85`, fibra `0.18`, nuvole `0.22`, `opacity:1`, `.poco` a `.4` sui beige.

📌 **I tre `.webp` in `images/sfondi/` non li usa piu' nessuno tranne `bordo-strappato.webp`**,
che pero' e' una **maschera di forma** (il bordo mangiato fra una sezione e l'altra), non una
texture: quello puo' restare un file. `grana.webp` e `macchie.webp` si possono cancellare quando
anche la A7 sara' passata al sistema nuovo — **la A7 ha ancora il difetto vecchio**.

## Testata
- **Via la striscia annuncio** in cima (la nav parte da `top:0`).
- **Via le icone social**: stanno **solo nel footer**, dove ora hanno l'icona accanto alla parola.
- **Ordine nuovo**: a sinistra *Chi siamo · Gallery · Il country*, a destra *Date · FAQ · Preventivo*.
  Le voci sono **addosso al logo centrale**, non ai bordi (`justify-content` invertito sulle due liste).
- **Le voci non si leggevano sul trasparente**: il velo era `.72/.28` proprio all'altezza del menu,
  e sopra un cielo chiaro spariva. Ora il gradiente e' piu' fitto e piu' lungo e le voci hanno un
  alone scuro, che sparisce quando la barra diventa piena.
- **Il bottone "Preventivo" non si leggeva**: era turchese contornato. Ora e' **pieno di beige con
  la scritta marrone** (10:1 sempre) e ha l'ombra piena arancio del bottone dell'hero.

## Hero
Via **"— Nord Italia"**, poi via **tutto l'occhiello "Country Live Band"**, via **i due bottoni**,
via **tutta la fascia in fondo** (i tre dati e "La prossima 23 ago"). Il titolo era **schiacciato**:
interlinea da `.98` a **`1.16`**.

## Sezioni: cos'e' cambiato
| Prima | Adesso |
|---|---|
| striscia scorrevole *Long Live Country Music* | **eliminata** (restano `.payoff-edge`/`.tartan`, li usa il footer) |
| video: due occhielli, titolo "Adesso puoi sentirci per intero", due bottoni sotto | titolo **"Ascoltaci dal vivo!"**, sottotitolo nuovo, **niente bottoni**, e il video **si apre dentro la pagina** |
| *La birra chiama, il country risponde* + intestazione + zigzag | **"Cosa facciamo?"** col testo nuovo. Colonna del testo allargata (1.35fr) perche' il paragrafo e' lungo |
| le 5 card dentro il blocco birra | **sezione sua "Dove diamo il meglio?"**, fascia arancio, **sei** card (aggiunte *Locali & Pub* e *Ranch & Maneggi*) con descrizioni piu' concrete |
| palco: occhielli, titolo, paragrafo, 4 pastiglie, fascia arancio | **solo il video** che parte scorrendo, a tutto campo |
| calendario a "biglietti staccabili" | **impianto della A7**: scheda beige + elenco di righe. Via il tag *La prossima*, via *Vedi tutte le date*, via *Negli ultimi mesi anche a Cremona…* |
| lineup: occhielli, titolo lungo, intro "Ci conosci gia'…", **schede a manifesto** (foglio beige, doppio filetto, foto ad arco, ombra arancio) | titolo **"La nostra LineUp"**, intro eliminata, **niente card**: solo i ritratti **tondi** su fondo pulito |
| brands: *— Hanno ballato con noi* / *Selected clients* | occhielli eliminati |
| social: occhielli, *Un assaggio del nostro live*, paragrafo | titolo **"Seguici sui social"**, restano i due agganci (Instagram + YouTube) |
| newsletter come **fascia a se'** prima della CTA | **dentro il footer**, prima riga, nella stessa gabbia delle colonne e chiusa da un filetto: non "galleggia" piu' |
| CTA: cachet / email / WhatsApp | contatti eliminati, frase nuova: *"Raccontaci il tuo evento, compila i dettagli e ti facciamo la nostra proposta!"* |
| footer: *Hot Joe & The CoffeeKillers — country live since 2018* | riga eliminata |
| **camaleonti** sparsi (video, birra, calendario, occhiello social) | **tutti tolti**: resta **solo quello grande** sopra "Long Live Country Music" |
| **occhielli** sopra ogni blocco (*Il calendario* con i ferri di cavallo, ecc.) | **tolti da tutte le sezioni** |
| **zigzag** negli angoli | **tolti da tutta la pagina** |

⚠️ Un blocco **"Non ci trovi vicino a casa?"** (rimando al preventivo sotto le date) era stato
aggiunto nel primo giro e **poi tolto** su richiesta di Michele. L'invito al preventivo resta uno
solo: la CTA grande in fondo.

## Testi della formazione
- Nomi con il **soprannome**: Michele "Mike" Frosio · Davide "Miglio" Miglietti ·
  Lorenzo "Larry" Marini · Stefano "Ste" Martinelli · Riccardo "Richi" Loda.
- **Mike**: bio rifatta (*"…ha trovato nel country il palcoscenico ideale… Commerciale, esuberante,
  **spirito libero**, fatto di conoscenza musicale e autenticita'"*) — "anima jazz" era da togliere.
  Battuta: *"Ma l'hamburger c'e' anche vegetale?"*
- **Larry**: ruolo da *Key & Harmonica* a **Keys**; *"Precisione e positivita'"* → **"Colore e positivita'"**.
- **Ste**: bio nuova (*"Le mani piu' veloci del west… tecnica, salopette e ricambi di ogni genere…"*),
  battuta *"Ti serve «qualunque cosa»? Ce l'ho."*

## 🔔 "Ricordamela": come funziona il promemoria 3 giorni prima
Il bottone **Dettagli** (sulla prossima data **e su ogni riga** dell'elenco) apre un **popup**, non
porta piu' alla pagina Date. Dentro: quando, dove, una nota, **Indicazioni su Google Maps** e
**Ricordamela**.

**La soluzione scelta e' il file `.ics`**, generato al volo dal browser:
- e' lo standard dei calendari; dentro c'e' un allarme `VALARM` con `TRIGGER:-P3D`, cioe'
  **tre giorni prima**;
- lo apre il calendario del telefono (iPhone e Android) ed **e' lui a suonare**: la notifica non
  passa da noi;
- **zero backend, zero dati raccolti, zero privacy da gestire** — non c'e' nessun indirizzo da
  chiedere, quindi nessun consenso, nessun archivio, niente che si possa perdere;
- accanto c'e' anche **"Apri in Google Calendar"**: comodo da desktop, ma li' il promemoria a
  3 giorni **va confermato a mano** (il link `TEMPLATE` di Google non permette di imporlo).
  Nel popup c'e' scritto.

Verificato in un browser vero: il file generato e' valido, con le righe **piegate a 75 ottetti**
come vuole la RFC 5545 (i trattini lunghi contano piu' di un byte, per questo si conta in byte,
non in caratteri).

**Se un giorno si vuole la notifica via e-mail** (spinta da noi, non dal calendario del cliente)
serve un pezzo in piu': raccogliere l'indirizzo → **informativa privacy + consenso** → un servizio
che il giorno X-3 manda la mail (Brevo/Mailchimp con automazione sulla data, o la newsletter gia'
prevista). E' l'unica strada che raggiunge anche chi non usa il calendario, ma apre il capitolo
dati personali. **L'`.ics` no.**

⚠️ **Le date sono ancora quelle di prova** (23/28/29 ago, 5 set, 10 ott — ormai passate) e i
**dettagli sono vuoti**: quando `data-dettagli` e' vuoto il popup scrive *"I dettagli di questa
serata arrivano a breve."* Per riempirli si tocca **solo l'HTML** della sezione `#date`: ogni data
porta i suoi `data-titolo`, `data-quando`, `data-dove`, `data-maps`, `data-dettagli`,
`data-ics-inizio`, `data-ics-fine`. **Il JavaScript non va aperto.**

## 🎬 Il video "Ascoltaci dal vivo" ora sta dentro la pagina
Prima il play portava **su YouTube**. Adesso e' una **facciata**: si vede la copertina locale e
l'iframe di YouTube nasce **al primo clic, dentro la pagina**. Un embed a freddo pesa quasi 1 MB
di script di terze parti: cosi' lo paga solo chi il video lo guarda.

## Come e' stato verificato (Chrome vero, non a occhio)
- **0 testi sotto soglia di contrasto** su desktop **e** su mobile (per ogni testo si ricompone il
  fondo effettivo e si confronta col rapporto giusto per quel corpo).
- **0 errori JavaScript**, **0 immagini rotte**, **0 richieste fallite**.
- **Nessun trabocco orizzontale**. Un guasto trovato e corretto: la riga *"Inaugurazione Beach Fly"*
  del calendario sporgeva di **11px** su mobile — mancava `minmax(0,1fr)` sulla colonna del nome.
- Popup provato davvero: si apre, si riempie coi dati giusti, si chiude con **Esc** e con la **×**,
  il link Maps e il file `.ics` sono corretti.
- Texture confrontate fianco a fianco in `_diag-grana.html` sui tre fondi del brand.

⚠️ **Restano in piedi, da decidere con Michele:**
- le descrizioni delle sei card dicono cose concrete (*5 × 3 m*, *stage plan e input list*,
  *il brano dell'ingresso su richiesta*): sono coerenti con quello che il sito gia' dichiara, ma
  **vanno confermate** prima di andare online;
- dentro l'insegna della CTA e' rimasto l'occhiello in corsivo *"— Richiedi un preventivo —"*:
  non ha icona e fa parte del disegno della cornice, non e' un'intestazione di sezione. Se lo vuole
  via e' una riga;
- la **A7 ha ancora gli sfondi vecchi** (quelli che sgranano): la ricetta nuova e' pronta e si
  copia in cinque minuti.


## 📸 Foto nuove e ultime regolazioni (01/09, tarda serata)

**Hero — foto nuova.** `~/Downloads/Hero.jpg` (1536×2048, i cinque in giardino) →
`images/band-giardino-hero.webp`. ⚠️ Primo tentativo sbagliato: `cwebp -resize 0 1600` imposta
l'**altezza**, non la larghezza, e la foto era scesa a 1200px di larghezza — i volti venivano
sgranati. Rifatta con **ritaglio orizzontale** (`-crop 0 400 1536 1100`) e **q90**: si buttano i
pixel di cielo e prato che l'hero taglierebbe comunque, e quel che resta e' alla risoluzione
piena della sorgente. 616 KB (l'hero di prima ne pesava 1276).

**"Cosa facciamo" — foto della terrazza.** `~/Downloads/foto terrazza.JPG` (6000×4000) →
`images/terrazza-live.webp` (1600px, q86, 257 KB): la band dal vivo al tramonto con la collina
sullo sfondo. La colonna della foto e' passata a `1fr 1.2fr` e il ritaglio da 4:3 a **3:2**
(quello vecchio mangiava cielo e collina, che sono meta' della fotografia).

**Formazione — i cinque ritratti nuovi.** Da `~/Downloads/Foto {Mike,Miglio,Larry,Ste,Richi}.jpg`
→ `images/{mike,miglio,larry,ste,richi}-ritratto-muro.webp` (760px, q84, ~180 KB l'una).
Le vecchie **non sono state toccate**.
⚠️ Dentro un cerchio `object-fit:cover` ritaglia un quadrato, e in una foto 3:4 quel quadrato
parte al 12,5% dell'altezza — ma i volti stanno fra il 26% e il 40%, **e non nello stesso punto
in tutte e cinque**. Percio' ognuna ha la sua `object-position`, calcolata perche' il viso cada
sempre a circa **un terzo dall'alto del cerchio**: e' l'inquadratura da ritratto, ed e' quello
che allinea i cinque fra loro. Larry e Richi erano **lontani** nella foto: le loro sorgenti sono
state ritagliate piu' strette in fase di conversione (`-crop`), non ingrandite via CSS.

**I loghi dei clienti, rimessi in scala.** Michele: *"Lombarda ceramiche e' piccolissimo."*
Misurato col `getBBox` del browser: con la regola unica `max-width:80%; max-height:80px` il
**disegno vero** risultava alto Ca' del Bosco 80px · Coca-Cola 56 · Thun 50 · Porsche 28 ·
**Lombarda 25**. Il motivo e' che dentro il file il disegno non riempie il riquadro, e ognuno lo
riempie in modo diverso. Ora ogni marchio ha la sua misura, calibrata sulla **larghezza del
disegno** (~150px, che in una fila di marchi a scritta e' quello che si percepisce) e agganciata
al **nome del file**, non alla posizione. Ridotto anche il padding della cella da 24 a 14px: i due
marchi larghi sbattevano contro il `max-width` prima di arrivare alla loro altezza.

⚠️ **`Porsche.svg` e `Lombarda-Ceramiche.svg` non sono i loghi veri**: sono segnaposto scritti a
mano, e Lombarda ha il testo a `font-size 13` dentro un riquadro alto 80 — cioe' le **lettere**
restano minuscole per quanto si ingrandisca il blocco. Non si risolve dal CSS. Ho creato
**`images/Lombarda-Ceramica-v2.svg`**, stesso stile ma disegnato in scala, e la A6 usa quello.
**Il file vecchio non e' stato toccato**: lo usano il sito pubblicato (`components.jsx`) e tutte
le altre proposte. Vanno comunque sostituiti coi loghi veri dei clienti.

**Footer piu' basso.** Era **932px su una finestra da 900**, cioe' piu' di uno schermo pieno.
Il grosso lo faceva il camaleonte (235px da solo) piu' il payoff a corpo 64. Stretto tutto in
proporzione senza togliere niente — il camaleonte grande resta, a 230px invece di 400 — e ora e'
**722px**. Ultimo contrasto chiuso: su telefono il titolo del footer scendeva a 22px e la parola
in arancio ("date.") sotto i 24px non conta piu' come "testo grande": portato a 25px.


## 🗂️ Tutte le pagine allineate allo stile della home + landing per le ads (01/09, sera)

Michele ha **confermato lo stile della home**, quindi si e' portato su tutto il resto del sito.

### Un solo posto per lo stile: `_stile-hjck.css`
Invece di ricopiare duecento righe in sette pagine, lo strato "stile home" sta in **un file
condiviso** (radice, **escluso da git**: la radice finisce online). Ogni pagina lo aggancia con
una riga sola, dopo il proprio `<style>`, cosi' vince sulle regole vecchie.
Porta: la sporcatura procedurale, la testata senza striscia annuncio e senza social con le voci
addosso al logo, il bottone Preventivo leggibile, il footer basso con la newsletter dentro e i
social con l'icona, la formazione senza card coi ritratti tondi, i loghi clienti in scala.
⚠️ **La sorgente di verita' resta `proposta-a6.html`**, che ha tutto in linea: se cambia la home,
questo file va riallineato a mano.

Nell'HTML di tutte e sette le pagine interne sono stati tolti in blocco: striscia annuncio,
icone social in testata, **occhielli** sopra i blocchi, **zigzag**, **camaleonti** sparsi (resta
solo quello grande del footer), la riga *"country live since 2018"*. Aggiunta la newsletter nel
footer con lo stesso comportamento della home.

### Gallery — da 61 a 34 scatti
Tolte **27 foto**, con questo criterio (e il criterio e' stato verificato foto per foto, non a
occhio: provini a contatto in `_diag-provino*.html` e confronto percettivo di tutte le 61 fra loro):
| Perche' | Quante | Quali |
|---|---|---|
| gia' usate in altre pagine | 9 | band-fiume-o2, live-notte, live-palco-luci-calde, strumenti-fila-alberi, band-giardino-salopette, live-sera-pubblico, live-allaperto-pomeriggio, miglio-batteria, strumenti-palco-verde |
| ritratti sul muro arancio, ora sono la **formazione in home** | 4 | mike-acustica-live, larry-tastiera-rossa, ste-chitarra, richi-basso-live |
| **con Eli** | 6 | vigna-live-voce, live-controluce-voce, vigna-live-palco, live-telecaster-notte, vigna-live-panoramica, prato-palco-pubblico |
| **con Matteo** | 1 | acustico-cortile |
| **Larry alla lap steel** | 2 | vigna-lapsteel, studio-lapsteel |
| quasi identiche a una gia' presente | 5 | band-fiume-o1, band-fiume-v3, band-muro-b, band-completo-strumenti, band-giardino-b |

**Come sono stati trovati i quasi-duplicati**: ogni foto ridotta a 12×12 blocchi di luminosita' e
confrontata con tutte le altre. Le coppie sotto 11 (su una scala dove 0 = identiche) erano
`band-fiume-o1/o2/o3` (3,3 e 3,8!), `band-fiume-v2/v3` (5,1), `band-muro-a/b` (9,3),
`band-giardino-a/salopette` (11,0). Fra le 34 rimaste la coppia piu' simile sta a 16,7.

⚠️ **Come si riconosce Eli nelle foto d'epoca**: in alcune e' scritto nella didascalia, in altre no.
Nelle **panoramiche dei live 2022–2023** la band era al completo, quindi Eli **c'e' anche quando
non si distingue** — sono state tolte tutte. Matteo (banjo, 2022→2025) e' l'uomo riccio con la
barba dietro a Mike in `acustico-cortile`: non puo' essere Ste, che e' arrivato a gennaio 2026.

Tolti anche **i titoli delle foto** (le `gal-cap`, che portavano dentro le date "· 2022"), la nota
storica su Eli e Matteo e l'intestazione *"L'album / Dal 2022 a oggi"*. Restano **3 foto di soli
strumenti** (telecaster-dettaglio, strumenti-prato, targa-band). Contatore aggiornato a 34.

### FAQ — al centro, con risalto
Via l'intestazione *"Domande frequenti / Cachet · Durata · Service · Spazio · Trasferte"*, via
e-mail e telefono, via il bottone preventivo, via il camaleonte, **via anche la CTA in fondo**:
la pagina adesso e' solo le FAQ. Erano due colonne con l'introduzione appiccicata a sinistra; ora
sono **una colonna sola larga 900px al centro**, titolo a corpo 68 e domande a 22px.
🙂 **Le emoji sono tornate**: 😬 🤓 😉 🕺🏻 ☕️🥃 🤠 — sono quelle vere del sito online, riprese da
`FAQS` in `components.jsx` (nella maquette erano state sostituite con le icone western).

### Il country — contenuto SEO sull'Italia
Riscritta la sezione 04, che ora si chiama **"Il country in Italia: non e' piu' roba d'oltreoceano"**
e va per gradi con tre sottotitoli (`<h3>`, buoni sia per chi scorre sia per Google):
*cos'e' successo negli ultimi anni* → *perche' funziona alle feste italiane* → *e dove lo si trova,
in Italia?*. Parte dal cos'e' il country, passa per line dance, festival e artisti, e arriva alla
curiosita' concreta: non serve andare a Nashville, la scena italiana c'e' — e ci siamo anche noi.
Tolta la **CTA preventivo in fondo** come chiesto.
⚠️ Cambiata anche la foto: c'era `live-sera-pubblico` (**con Eli**), sostituita con `live-notte`.
Era un punto rimasto aperto dal 28/07.

### Chi siamo — minimale
Su richiesta di Michele ("*sii minimale come contenuto per il momento poi la arricchiamo noi*")
restano **solo l'apertura e la formazione**. Storia, ispirazioni (i sei artisti coi link),
repertorio e CTA sono usciti — **sono tutti nel backup** in
`_parcheggio/proposte-prima-del-2026-09-01/`, si rimettono quando serve.
Montati i ritratti nuovi sul muro arancio, senza le schede a manifesto.

---

## 🎯 `proposta-landing-ads.html` — la pagina di atterraggio delle inserzioni

Pagina **a parte**, che non esiste per Google: `<meta name="robots" content="noindex,nofollow">`.
Non e' un vezzo — se finisse in indice farebbe concorrenza alla home sulle stesse parole (il
contenuto e' quasi lo stesso) e sporcherebbe i numeri della campagna.

**Da dove arriva chi la apre**: da un video con un aggancio del tipo *"hai un locale e vorresti
musica country?"*. Ha tre secondi di attenzione e una domanda sola: «questi fanno al caso mio, e
quanto costano?» La pagina e' costruita su quello:

1. **Niente menu.** Le vie di fuga in una landing costano conversioni: l'unica strada e' il modulo.
   In alto c'e' il solo logo, e **non e' un link**.
2. **Il titolo ripete la promessa dell'inserzione parola per parola.** Se la pagina dicesse
   un'altra cosa rispetto al video, la persona se ne andrebbe.
3. **Il video intero subito**, perche' la prova sta li' (facciata: l'iframe nasce al clic).
4. **Cosa ti trovi in casa** — quattro fatti concreti, non aggettivi.
5. **I loghi dei clienti** come prova sociale.
6. **Le quattro domande che bloccano** (costo, durata, service, trasferta) sciolte **prima** del
   modulo: se restano in testa, il modulo non si compila. Il cachet e' scritto: 1.000–2.500 €.
7. **Il modulo: sei campi.** Ogni campo in piu' e' gente che se ne va. Con **consenso privacy
   obbligatorio** (il bottone resta spento finche' non e' spuntato) e link all'informativa.

⚠️ **PRIMA di mandarci traffico a pagamento** servono due cose:
- **agganciare il modulo a un destinatario** (Formspree o altro): oggi mostra il ringraziamento
  ma **non manda niente a nessuno**;
- far **validare l'informativa privacy**, che e' ancora una bozza (vedi la sezione in cima).

Aggiunta alla barra delle proposte in basso a sinistra, insieme alle altre.

### Come e' stato verificato tutto
Ogni pagina caricata in Chrome vero, desktop **e** telefono: **0 testi sotto soglia di contrasto**,
**0 errori JavaScript**, **0 immagini rotte**, **0 richieste fallite**, nessun trabocco orizzontale.
Tre contrasti trovati e corretti per strada, tutti lo stesso caso (arancio o beige su fondo
sbagliato): i ruoli dei musicisti, il tondo play sulla fascia arancio, e — solo su telefono — gli
anni della linea del tempo del country, che scendendo a 22px smettono di contare come "testo
grande" e non arrivano piu' a 4,5:1.

---


# 🚀 IL SITO NUOVO È ONLINE — 02/09/2026

La maquette **è diventata il sito**. Il React di prima non c'è più.

## Cosa è successo ai file
| Prima | Adesso |
|---|---|
| `proposta-a6.html` | **`index.html`** — la home |
| `proposta-chi-siamo/country/date/gallery/faq/preventivo.html` | stessi nomi, senza `proposta-` |
| `proposta-informativa-privacy.html` | **`privacy.html`** |
| `proposta-landing-ads.html` | **`musica-country-dal-vivo.html`** (landing inserzioni, `noindex`) |
| `_stile-hjck.css` | **`stile-hjck.css`** (l'underscore era la convenzione dei file esclusi) |
| il sito React (`index.html`, `components.jsx`, `styles.css`, gli `app-*.jsx`) | in `_parcheggio/sito-react-precedente/`, **fuori dal repo** — recuperabile anche dalla cronologia git |
| le maquette scartate (A, A2…A7, B, C, D), `_switch-proposte.js`, le pagine `_diag-*` | in `_parcheggio/maquette-di-lavoro/` |

Le URL pubbliche **non cambiano** (`/chi-siamo.html`, `/date.html`…): nessun redirect da fare.

## 🔤 I caratteri — un guasto trovato in extremis
Michele: *"bronco non esiste più, se ce l'hai ancora in giro è un errore tuo."* Vero, e in due punti:
1. in `fonts/` c'erano ancora `bronco-valley.ttf`, `BroncoPersonalUse.ttf` e lo zip → in
   `_parcheggio/font-bronco-non-piu-usato/`;
2. ⚠️ **le pagine interne non montavano Bonzana.** Nascono dalle proposte A2/A4, dove
   `--bronco` e `--valley` puntavano a *"Bronco Valley"* e *"Valley"*. Tolte quelle due
   `@font-face`, i titoli **cadevano su Rye** — cioè **sette pagine su nove avevano un
   carattere diverso dalla home**, e a occhio non si notava perché anche Rye è un western.
   Trovato solo interrogando il `font-family` calcolato in un browser vero, non guardando
   gli screenshot. Adesso `stile-hjck.css` dichiara Bonzana e rimappa i due token.

**Font online**, tutti ospitati in `fonts/` e nessuno preso da terzi: `bonzana.otf`, i quattro
tagli di `LTCushion-*.ttf` e `Manrope-Variable.ttf`. Tolto **Valley** (`ValleyPersonalUse.ttf`):
era Personal Use, su un sito non si usa — e non lo richiamava nessuna regola. Tolto anche **Rye**.

## ✅ BONZANA: risolto, comprata anche la Webfont (02/09)
Il primo acquisto (Creative Market, ordine 148202709 del 28/08, $17) era **`LICENSE: Desktop`**,
che copre Illustrator e Canva ma **non** una `@font-face` su un sito — la stessa trappola già
annotata per Bronco Valley. Michele ha comprato la **Webfont** lo stesso giorno in cui gliel'ho
segnalato, e nello zip nuovo c'è la cartella **`Web Fonts/`** con `.woff2` e `.woff`.

Online ora c'è **`fonts/bonzana.woff2`** (con `.woff` di riserva per i browser vecchi):
**25 KB invece di 136**, un quinto del peso dell'OTF. L'`.otf` è uscito da `fonts/` ed è in
`_brand-def/font-bonzana-licenza-web/` insieme allo zip originale — serve ancora, ma per Canva
e le locandine, non per il sito.

⚠️ **Regola da ricordare**: quando si compra un font per il sito, controllare sulla **fattura**
che la licenza sia **Webfont**. Gli zip dei font non contengono quasi mai il file di licenza:
l'unico documento è la ricevuta.

## 📨 Tutti i moduli in una casella sola
Le tre cose che il sito può mandare finiscono **tutte allo stesso Formspree**
(`formspree.io/f/xdabrrrr`, quello del preventivo già attivo da prima). Verificato che risponde.
Si distinguono dal campo **`Origine`**, che è la prima riga di ogni messaggio:

| Da dove arriva | `Origine` |
|---|---|
| il modulo di `preventivo.html` | `Preventivo — modulo del sito` |
| il modulo della landing inserzioni | `Landing inserzioni — musica-country-dal-vivo` |
| l'iscrizione agli aggiornamenti (piede di ogni pagina) | `Newsletter — aggiornamenti sulle date` |

Tutti e tre mandano anche il **consenso privacy con data e ora**.

📌 **Tutti e tre impostano `email` e `_replyto`**: sono le chiavi che fanno funzionare il tasto
**«Rispondi»** nella casella. Ce l'aveva solo il preventivo; senza, si finisce a copiare
l'indirizzo a mano da dentro il messaggio. Nella landing il campo contatto accetta e-mail **o**
telefono, quindi il reply-to viene impostato solo se il testo contiene una chiocciola.

## 🎨 Il brand kit per Canva
`~/Desktop/HJCK-Brand-Kit-Canva.zip` — i font del brand pronti da caricare in
Canva → Brand → Brand Kit → Caratteri (uno alla volta): Bonzana (l'`.otf`, licenza Desktop, che è
quella giusta per Canva), i quattro tagli di LT Cushion, Manrope variabile e Smokum.
Dentro c'è un `LEGGIMI.txt` con a cosa serve ognuno, la licenza di ciascuno, i sei colori del
brand con gli hex e l'avvertenza sul contrasto dell'arancio.
⚠️ Manrope è il file **variabile**: se Canva non lo digerisce, i tagli singoli stanno su
Google Fonts.

## 📅 Le date passate spariscono da sole
Il problema che si sarebbe visto online il primo giorno: la home e la pagina Date mostravano
*"★ Prossima data — 23 Ago"* con il **conto alla rovescia fermo a zero**. Un calendario scritto a
mano invecchia in silenzio, e se ne accorge il cliente prima di te.

Adesso il browser confronta ogni data con oggi: le passate escono dall'elenco, un mese rimasto
vuoto sparisce con la sua intestazione, e la scheda in cima prende **sempre la prima data futura
vera** col countdown giusto. Se non ci fosse più nessuna data, al posto della scheda scaduta
compare un invito a scrivere.
📌 **Le date restano scritte nell'HTML**: per aggiungerne una si copia un blocco `.ticket`
(pagina Date) o `.cal-row` (home) e si mette la sua data. **Il JavaScript non va aperto.**

⚠️ **Trappola costata un giro**: l'attributo `hidden` **da solo non nasconde niente** se il CSS
imposta un display (`.ticket{display:grid}`) — il `display:none` di `hidden` ha la specificità
più bassa e perde. Il test diceva "nascosto" (l'attributo c'era) ma lo **screenshot** mostrava
tutte le date. Serve `[hidden]{display:none !important}`, che ora c'è.
👉 Morale: sulle cose visive, credere allo screenshot, non al DOM.

⚠️ **Le date sono ancora quelle di prova** (28/29 ago, 5 set, 10 ott) e i dettagli del popup sono
vuoti. Online oggi si vedono solo *Matrimonio, Siena — 5 settembre* e *Beach Fly, Brescia —
10 ottobre*, perché le altre sono già passate. **Da caricare le vere.**

## 🔎 SEO — cosa c'era e cosa mancava
- **`<title>` e description**: la home era rimasta *"Proposta A6 — Bonzana"*. Riscritti.
- **canonical, Open Graph e Twitter card**: **non c'erano su nessuna pagina**. Aggiunti tutti,
  con `images/og-image.jpg` (jpg e non webp: Facebook e WhatsApp gestiscono male il webp nelle
  anteprime).
- **Dati strutturati**: le maquette ne avevano solo due, il sito vecchio sette. Recuperati tutti
  e aggiornato il logo a quello definitivo. Due **rigenerati dal contenuto vero**, perché
  mentivano: il `FAQPage` aveva 9 domande e la pagina ne ha **11**; l'`ItemList` elencava **12
  date già passate** del vecchio sito, ora sono le 4 in calendario.
- **`robots.txt`**: la landing **non** è bloccata, di proposito. Aveva un `Disallow` che ho tolto:
  messo insieme al `noindex` sarebbe stato controproducente — se il crawler non può aprire la
  pagina non legge il `noindex`, e l'URL può finire in indice lo stesso. Il `noindex` da solo è il
  segnale più forte, purché la pagina resti leggibile. **`sitemap.xml`**: aggiunta `privacy.html`,
  date aggiornate, la landing esclusa.
- 📌 **Netlify riscrive gli URL**: online gli href diventano `/chi-siamo` invece di
  `chi-siamo.html` (funzionano entrambi, 200). I `canonical` puntano alla forma con `.html`, che
  consolida le due varianti su una sola. Da sapere quando si cerca un link nell'HTML pubblicato:
  la forma online **non** è quella scritta nel file.
- **Analytics**: lo snippet Cloudflare era solo su home e preventivo → ora su **tutte** le pagine
  (serve anche per capire se la campagna converte).
  📌 In locale il beacon dà `net::ERR_FAILED`: normale, `localhost` non è un dominio registrato.

## 📨 Il modulo
`preventivo.html` e la landing mandano allo **stesso** Formspree (`formspree.io/f/xdabrrrr`).
La landing marca le richieste con `Origine: Landing inserzioni`, così si distinguono nella casella.
Su entrambi il consenso privacy è obbligatorio (bottone spento finché non è spuntato) e viene
incluso nei dati inviati.
⚠️ **L'informativa privacy è ancora una bozza da far validare** — mancano forma giuridica, sede
legale e la verifica sui server di Formspree. Era il primo punto aperto di questo documento ed è
ancora aperto, ma almeno adesso il consenso c'è.

## ✅ Come è stato verificato prima di pubblicare
Tutte e nove le pagine in Chrome vero, desktop e telefono:
**0 testi sotto soglia di contrasto · 0 errori JavaScript · 0 immagini rotte · 0 link interni
rotti · nessun trabocco orizzontale · font caricati e verificati sul `font-family` calcolato.**

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
