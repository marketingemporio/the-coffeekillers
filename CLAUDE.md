# Sito The CoffeeKillers — istruzioni per chi ci lavora

Sito statico (HTML+CSS a mano, nessuna build) della band modern-country bresciana
**Hot Joe & The CoffeeKillers**. Online su `thecoffeekillers.com` via Netlify: `git push`
su `main` pubblica in un minuto. ⚠️ **Netlify pubblica la radice del repo**: qualunque file
committato è scaricabile dal dominio.

## Leggi prima questi

1. **[_STATO.md](_STATO.md)** — a che punto è, cosa è stato deciso e perché. È la **fonte di
   verità** dello stato del sito. È lungo: cerca la sezione che ti serve, non leggerlo tutto.
2. **Questo file**, per sapere cosa NON sta qui e dove andare a prenderlo.

## 🚨 Cosa possiede questo repo, e cosa no

Questa è la regola che il progetto ha già pagato più volte: gli errori più costosi sul sito
**non erano errori di codice, erano informazioni che stavano in un altro repo**.

| dove | cosa ci va |
|---|---|
| **qui** | il **sito**: pagine, stile, immagini web, testi pubblici, SEO, i moduli, lo stato del sito |
| **`/Users/michelefrosio/World/brains/the-coffeekillers-brain/`** (vault Obsidian) | **com'è andata la band**: storia, formazione, chi è chi, ex membri, strumentazione, condizioni commerciali, lezioni |
| **`/Users/michelefrosio/World/app/cruscotto-coffeekillers/`** (app in rete) | **i numeri**: cachet, acconti, cassa, preventivi, contatti, trasferte, statistiche del sito |

⚠️ **Sul sito non va MAI un numero economico della band** — cachet, acconti, quanto è
rimasto in cassa, compensi. Stanno nel cruscotto, e sono riservati.
⚠️ **E non fidarti di un claim solo perché è già scritto in una pagina**: sei affermazioni
pubblicate erano false (vedi sotto). Se una cifra riguarda la band, **verificala nel brain**.

### Le note del brain da aprire, per argomento
- **Chi è nelle foto, chi è entrato quando, chi è uscito** → `Identità e Formazione.md`
- **Font, palette, loghi, icone** → `Brand Book rev.2 — Palette, Font e Icone.md`
- **Come si lavora sul sito, le decisioni già prese** (foto, due lingue, pubblicazione) → `Sito - Workflow di lavoro.md`
- **Date, luoghi, com'è andata una serata** → `Date Live 2026.md` (🗄️ è una fotografia datata: i numeri veri sono nel cruscotto)
- **Condizioni commerciali, requisiti al cliente** → `Preventivi — Modello e Condizioni Commerciali.md`
- **Storico serate e clienti** → `Storico Live e Cachet 2021-2025.md`
- **Repertorio** → `Repertorio e Scalette 2026.md`
- **Indice di tutto** → `The CoffeeKillers (MOC).md`

Il **metodo di composizione delle pagine** (il "metodo di casa") non è in questo repo:
`/Users/michelefrosio/World/brains/beamlight-brain-vault/clienti/beamlight/Design system Beamliight con prompt/`
— `08-comporre-una-pagina.md` (le sette regole), `09-voce-e-copy.md` (**la blacklist del
copy**), `02-colore-di-pagina.md` (la tecnica `@property --page-bg`). Michele è socio di
Beamlight. Il 06/09 una landing è stata rifatta tre volte perché questo metodo, già scritto
in casa, non era stato aperto.

## ⚠️ I fatti verificati che hanno già fatto sbagliare

Ognuno di questi è costato un rifacimento. Sono controllati, non opinioni.

**Il brand book: ce ne sono tre e uno solo vale.**
Vale **`_brand-def/BRND DEF_HJCK.pdf`** (8 pagine). ❌ **NON** `HJCK_Brand Identity.pdf`
(27 pagine, più recente e più completo — e sbagliato). Come si riconosce quello giusto in
dieci secondi: **«Hot Joe» è arancio `#FA8600`** e le **icone sono 8** (teschio longhorn,
cappello da cowboy, camaleonte…). Se «Hot Joe» è marrone e le icone sono 7 con chicchi di
caffè e microfono, hai aperto quello sbagliato. I file sorgente di logo e icone **sono già
in `_brand-def/`**: non estrarli a mano da un PDF.

**La palette ha SEI colori, non cinque.** Il sesto è il **tan `#BD8B65`**, che è un **fondo
pieno**, non un accento: è il colore che evita di fare tutto marrone o bianco. Fonte dei
codici: `_brand-def/Palette colori.pdf` (non il brand book, che ha gli stessi colori sfasati
di un punto per canale per una conversione CMYK diversa).

**Sull'arancio del brand nessun testo piccolo raggiunge 4,5:1.** È una proprietà della
palette, non un gusto: o corpo ≥19px/700, o una **pastiglia marrone piena** sotto. Marrone su
beige fa 10:1; beige su arancio 3.07:1; arancio su velo scuro 2.5:1.

**🚫 Foto che non si pubblicano: ci sono Elisa o Matteo, ex membri** (usciti a set 2025).
`prato-palco-pubblico` · `acustico-cortile` · `live-sera-pubblico` · `vigna-live-panoramica` ·
`live-palco-luci-calde` · `vigna-live-palco` · `live-controluce-voce` · `live-telecaster-notte` ·
`vigna-live-voce` · `vigna-live-chitarra` · `studio-lapsteel` · `vigna-lapsteel`.
Inoltre `live-tastiere` e `live-voce` hanno dietro **un furgone con l'insegna di un'impresa
edile**: evitarle. ⚠️ **Una foto "mai usata" può essere mai usata per un motivo**: queste
erano state tolte dalla gallery il 01/09, e il 06/09 sono state ripescate *proprio perché*
sembravano libere. Apri e guarda ogni immagine, non fidarti di una lista.

**I claim sulla band: sei erano falsi e pubblicati.** Il brain dà **~97 serate documentate**
(non «oltre 200») e la cronologia vera è **2013 Yolomitas → 2017 la svolta country → 2021 la
prima data registrata → 2022 il nome attuale** (quindi «dal 2018» non combacia con niente —
Michele lo conferma comunque: **non correggerlo senza chiederglielo**).

**Il telefono pubblico è 393 701 1409, e ci resta.** Deciso da Michele il 07/09: *«quello che
c'è su tutto il sito»*. Il numero è intestato a **Yolomitas Eventi**, che è un'altra azienda
(repo `yolomitas-brain`) — è un fatto vero, e per un attimo era stato preso per un errore da
correggere. Non lo è: è una **scelta**, perché è il numero su cui la band risponde davvero.
Il 331 870 6356 sta nel brain ma **non va sul sito**, e questo file diceva il contrario fino al
07/09. Email pubblica `music@thecoffeekillers.com`.
**Lecconeria** non è un cliente (solo un preventivo, mai suonato) e **Beach Fly** è una data
futura e gratis. **Coca-Cola, Ca' del Bosco, Porsche, Thun, Lombarda Ceramica** sì, confermati
da Michele — ma anno e occasione non sono ancora nel brain.

**Lo show dura «circa due ore» — un'ora e 45 di musica.** Deciso da Michele il 07/09 e vero:
i set misurati dal mixer fanno **1h53 · 2h03 · 2h15**. Il vecchio *«da 1h e 30 a 2h e 30»* delle
FAQ non aveva riscontro. Set acustico e basi/impianto acceso esistono, ma **solo per chi deve
coprire una giornata intera**, e non si mettono mai sullo stesso piano dello show: *«c'è una
gerarchia, ciò che conta è lo show»*.

**Il repertorio si dice in positivo, e MAI con la parola «non».** Perimetro pubblico: country
americano neotradizionale e contemporaneo, **dagli anni Novanta in poi**, con *Country Roads* di
John Denver e *Jolene* di Dolly Parton come eccezioni dichiarate (sono davvero in scaletta).
Artisti citabili: Zach Top · Chris Stapleton · Brad Paisley · Zac Brown Band · Blake Shelton ·
Darius Rucker · The Kruse Brothers · Keith Whitley. **Luke Combs no** (brano in cassetto dal
06/09). **Nessun numero di brani in pubblico.** Johnny Cash non si nomina nemmeno per escluderlo:
il perimetro lo fa da sé. Dettagli in `Repertorio e Scalette 2026.md`.

**Lo spazio palco è 4×3 metri, e il repertorio non si conta più.** Corretti il 10/09 su
tutto il sito: prima le FAQ dicevano *5 metri per 3* (in tre formulazioni diverse) e
*«repertorio di circa 50 canzoni»*, mentre i contatori di `chi-siamo` dicevano *+50 brani*.
La verità attuale, da Michele: **la scaletta è fissa, un concerto di circa 25 brani**.

**Le FAQ sono OTTO, non undici.** Il 10/09 sono uscite «Cosa significa il vostro nome»,
«Quante persone sono troppe» e «C'è qualcos'altro»: *«la numero otto deve sparire da tutto
il sito, è stupida»*. ⚠️ Ogni FAQ è scritta **due volte** (JSON-LD in cima e markup
visibile): se ne togli una, ricordati la virgola nel JSON — l'ultima cancellata lascia un
JSON non valido, ed e' già successo.

**La band non ha forma giuridica.** Mai scrivere «fatturiamo»: nel 2026 solo 3 date su 17
hanno toccato una fattura. Nell'informativa privacy il titolare è **Michele Frosio persona
fisica** (GDPR art. 4.7).

**Cosa vende questa band: intrattenimento.** Non il ritorno economico del locale, non
l'attrezzatura, non la scheda tecnica — e **mai** i difetti della concorrenza. Michele,
06/09: *«è l'intrattenimento, una serata divertente, qualcosa che fanno per portare uno
spirito di divertimento e leggerezza»*. Vietati: urgenza, timer, bonus, testimonianze finte,
promesse di fatturato. Lo schema B2B (problema → agitazione → ROI) **non si applica** a un
prodotto che è divertimento.

**🚫 Niente micro-scritte e niente occhielli-intestazione di sezione.** È il difetto che
Michele ha contestato **tre volte** in sei giorni. Corpo minimo **13px**, e c'è un controllo
automatico che lo verifica. (L'occhiello-*composizione* — la pastiglia `.vcap` — è un'altra
cosa e va bene.)
E **13px è il minimo, non la misura giusta**: il 07/09 le FAQ della landing sono state
ingrandite perché *«si vedono poco, devono essere più chiare»* — domanda da 17,5 a **21px**,
risposta da 15,5 a **17px**, il «+» dentro una pastiglia arancione tonda e il bordo che
diventa arancione quando la voce è aperta. Le FAQ tolgono i dubbi appena prima del modulo:
se non si vedono, non servono a niente.

## 🎞️ LA REVISIONE DEL 12/09: quello che ribalta una regola scritta qui sopra

**L'etichetta del 2018 è «Inizio progetto», non «Country dal».** Michele l'ha deciso il 12/09
**sapendo** di aver deciso l'opposto il 10/09 (*«non è insieme dal 2018 ma COUNTRY dal 2018»*).
Non è un refuso: se la «correggi», stai disfando una scelta. ⚠️ Il footer della home dice
ancora *«Country live since 2018»*: è scoperto, segnalato, non toccato.

**«Fino a 250/300 persone siamo autonomi».** Michele ha sciolto così il conflitto fra il sito
(250) e il brain (~300). Vale sulla landing e sulla variante `?tipo=sagra`. **`faq.html` dice
ancora 250** e va allineata quando si tocca quella pagina.

**🚫 Le chip del modulo non si rinominano da sole.** Hanno le iniziali maiuscole (`Locali e
Pub`, `Ranch e Maneggi`…) e il JS le confronta **per stringa esatta** con i valori `chip:`
dentro `VARIANTI`: `c.classList.toggle("on", c.textContent.trim() === v.chip)` gira su tutte,
quindi se nessuna combacia **spegne anche quella accesa di partenza** e a Netlify Forms arriva
un preventivo **senza tipo di evento**. Si cambiano HTML e JS nello stesso commit, e si
verifica con tutti e sei i `?tipo=` che resti **1** chip accesa.

**La foto dell'hero è verticale, e il muro è #D98533.** Due conseguenze che non si indovinano:
il **taglio laterale dipende solo dal rapporto del contenitore** (per questo da telefono l'hero
è 72svh: a 88svh si perdeva il 30% della foto), e sul muro chiaro il **logo `negativo` sparisce**
— la scritta «Hot Joe» #FA8600 ci fa **1,15:1**. Sopra le foto chiare va
`hjck-logo-negativo-contorno.svg`, che ha il **viewBox più grande** (le lettere rimpiccioliscono
dell'8% a parità di altezza CSS). Il tasto «Vai al sito» è una **pastiglia marrone piena**:
sul muro il marrone è l'unico colore del brand che regge (4,77:1).

**La line-up è su TAN, a scorrimento, con `aspect-ratio:3/4`.** I ritratti sono 520×693 = 3:4
esatto: con quel rapporto non si taglia niente e si vedono persona **e** strumento — che è
quello che Michele chiede. ⚠️ Il `.ruolo` **non ha più `opacity`**: rendeva 2,77:1 sul tan, e
faceva già 4,30:1 sul panna, cioè era sotto soglia da prima e nessuno l'aveva misurato.

**Le card hanno un'emoji in fondo al testo** (una per card), e le **icone del brand restano**
accanto al titolo: sono due cose diverse, non si sostituiscono.

**🐞 `height:auto` serve davvero.** L'anteprima del video era stirata del 23% perché la regola
globale `img,video` non ce l'aveva: con `width` e `height` entrambi risolti, `aspect-ratio`
viene **ignorato del tutto**. Era già scritto qui che «gli attributi battono aspect-ratio»,
ma nessuno l'aveva applicato a quell'immagine.

**🐞 E un controllo automatico ha mentito di nuovo.** Il calcolo del contrasto sul titolo
dell'hero prendeva il percentile alto della luminanza e pescava i **pixel del testo panna**
invece del fondo: dava 1,02:1 su una zona sana, e restava fermo a 3,42:1 mentre il velo
aumentava. Il fondo va isolato **escludendo i pixel vicini a #EDDABD**.

## 🧾 I MODULI: cosa si chiede al cliente, e cosa non si chiede più

Deciso da Michele il **07/09/2026**, e vale su **tutti e tre i moduli** del sito:
`musica-country-dal-vivo.html` · `preventivo.html` · `en/quote.html`. Se ne tocchi uno,
tocchi anche gli altri due (le pagine `en/` sono copie tradotte a mano).

**Quante persone → una scala fissa, non una somma.**
`50 · 100 · 150 · 200 · 250 · oltre 300`, default **150**. Sull'ultimo gradino la scritta
«pax» sparisce (*«oltre 300 pax»* non si dice). Prima saliva di 20 in 20 fino a 600: chiedeva
al cliente una precisione che **non ha**, e gli faceva fare dodici clic.

**Quanto suoniamo → 🚫 non si chiedono le ore.**
*«Per il tempo di suonare metti più che altro tipo solo concerto o tutto il giorno, quindi
non le ore.»* Il cursore da 1h a 4h chiedeva al cliente di decidere una durata che **è nostra**
(lo show dura circa due ore). Al suo posto tre voci, nell'ordine della gerarchia:
**Solo il concerto** (predefinita) · **Concerto e set acustico** · **Tutto il giorno**.
La chiave verso Formspree si chiama ora `Formato`, non più `Durata`.

**Ordine di spesa → tre voci, e la prima parte da mille.**
**Intorno ai 1.000 €** (predefinita) · **Arrivo a 2.000 €** · **Oltre 2.000 €**.
La prima voce esiste *per far capire che sotto non si va*: la vecchia scaletta apriva con
«Fino a 1.000» e lasciava credere il contrario. ⚠️ **Il «Non lo so ancora» non si rimette**:
chi lo spuntava non dava nessuna informazione, ed era la scelta comoda. Coerente con la
fascia già pubblicata nelle FAQ (1.000 € — 2.500 €).

## 📣 UN SOLO BOTTONE PIENO PER PAGINA, E PORTA AL MODULO

*«Non promuovere così tanto il messaggio WhatsApp, vogliamo che compilino il preventivo»*
(Michele, 07/09). WhatsApp **resta** — è il canale su cui la band risponde davvero — ma:

- 🚫 **niente verde pieno accanto alla CTA.** `.v-wa` è un **contorno**: fondo trasparente,
  nessuna ombra colorata, corpo più piccolo dell'invito principale.
- **Nell'hero WhatsApp non c'è.** Lì l'invito è uno solo, e porta al modulo.
- Nella barra appiccicata il **preventivo viene prima**, WhatsApp dopo e in secondo piano.
- Dove WhatsApp ci sta bene: **dopo l'invio** (il riquadro «Ricevuto») e nel footer.

Il motivo, che non è estetico: due bottoni pieni affiancati sono **due inviti alla pari**, e
uno dei due porta fuori dalla pagina senza lasciare una richiesta scritta.

**E la fascia arancione dei numeri (2018 / +200 / 7) non sta sotto l'hero.**
*«Non è una vera garanzia di successo, mettila un po' dopo.»* Sta all'inizio del blocco delle
**prove** — subito prima di «Aziende, locali, rifugi». Un numero vale se sta in mezzo alle
cose che lo reggono; subito sotto il titolo era una promessa in cerca di credito.

## 🎨 LE REGOLE DI STILE FISSATE IL 10/09 (valgono su tutto il sito)

**🚫 Il colore non cambia mentre si scorre.** *«Fai in modo che non cambi il colore durante
lo scorrimento, che e' terribile.»* Il meccanismo `@property --pg-*` + handler di scroll e'
stato smontato. I **nomi** delle variabili restano (erano usate in 37 punti): quello che
cambia è chi le assegna — prima il JavaScript su `:root`, adesso la classe **`.t-panna`**
sulla singola sezione. Senza classe, una sezione è scura.

**🚫 Niente card storte.** Zero `transform:rotate()`. Nella home non ce n'erano mai state.
I raggi di casa: **12px** le card e i bottoni, **16px** i riquadri di foto e video, **50%**
i ritratti.

**🚫 Bottoni senza ombra e senza stelle**, raggio 12px. *«Non mi piace come i tasti, anche
quelli del sito.»* Prima: raggio 6px, doppio filetto `inset`, una stellina `★` prima e una
dopo, e sulla `.nav-cta` un'ombra arancio piena spostata di 3px.

**🖼 I LOGHI DEI CLIENTI VANNO A COLORI, SU FONDO CHIARO.** Sono sette, in `images/loghi/`,
e sono i file ufficiali arrivati da Michele il 10/09. ⚠️ **Non rimetterli in monocromia**
(maschera CSS o `brightness(0) invert(1)`): il girasole del Cascinetto e l'oro del Conti
Thun in silhouette diventano macchie illeggibili. I nomi giusti sono **«Conti Thun»**,
**«Centro Porsche Brescia»**, **«Pietra Cavalla»** (staccato), **«Il Cascinetto»**.
🚫 I vecchi `Porsche.svg` e `Lombarda-Ceramica-v2.svg` erano **segnaposto scritti in Arial**:
non riusarli.
⚠️ Un `<img>` di un SVG **senza attributi `width`/`height`** dentro un contenitore flex si
renderizza a **larghezza zero**: mettili sempre.

**📱 Si guarda da telefono.** *«Le ads sono su Instagram, Instagram ci guarda da mobile.»*
390×844 è la vista di riferimento, non il controllo finale.

## 🧾 IL VINCOLO SERVIZIO → BUDGET (nei tre moduli)

Non è un vezzo, è voluto: *«se mi dici tutto il giorno non puoi selezionare 1.000 euro…
voglio stanarti: dimmi tutto il giorno, e poi io ti dico che ti costa tre-k»*.

| servizio scelto | budget selezionabili |
|---|---|
| Solo live show | tutti e tre |
| Live show e set acustico | da 1.500 in su |
| Copertura intera giornata | solo oltre 2.000 |

Le voci escluse si **spengono ma restano in pagina**: se sparissero, sparirebbe il messaggio.
Se la scelta di prima diventa illegale, si sposta da sola sulla piu' bassa ammessa.
⚠️ Le chip del servizio hanno la durata dentro un `<em>`: per Formspree si legge
`childNodes[0]`, non `textContent`, se no arriva *«Solo live showcirca due ore»*.

## 🔧 Come si verifica il lavoro

- **Playwright non è installato**: si usa **Chrome headless + CDP**, a **1440×900** e **390×844**.
- 🚨 **Sulle cose visive si crede allo screenshot, non al DOM.** Tutti i difetti veri di
  queste pagine sono usciti guardando le schermate (sette in una sola sessione), nessuno dal
  DOM. `hidden` perde contro `.ticket{display:grid}`; `offsetParent` è `null` sui `position:fixed`
  e non dice niente sulla visibilità; e **gli screenshot a pagina intera mentono** (a scala 3
  con `captureBeyondViewport` la pagina viene dipinta col colore che ha in cima).
- **Anche un controllo automatico può mentire**: il test dei contrasti cercava
  `rgb(205,88,12)` invece di `rgb(205,88,18)` e dava verde su una pastiglia rotta.
- **Netlify riscrive l'HTML in pubblicazione** (toglie il `.html` dagli indirizzi, cambia gli
  apici): i byte online non coincidono col commit, i link si riverificano sul pubblicato.
- 🐞 **La cache del browser mente.** Il 10/09 una correzione al CSS risultava «non
  applicata» per tre giri di verifica: Chrome serviva il foglio vecchio. Aggiungi sempre un
  `?c=<numero a caso>` all'indirizzo quando verifichi.
- 🔍 **Se non puoi guardare le schermate, misura.** Tre difetti veri del 10/09 sono usciti da
  controlli automatici, non dall'occhio: il contrasto reale calcolato sul fondo effettivo
  (ha trovato i ruoli arancio su panna a 3,07:1 e il WhatsApp panna su panna a 1:1), la
  larghezza renderizzata delle immagini (due SVG a zero) e `documentElement.scrollWidth`
  (**tutte e 17 le pagine** scorrevano di lato di 33px da telefono, per una colonna del
  footer senza `min-width:0`).
- **La landing è a pagamento**: ogni KB si paga a ogni clic. È passata da 5,46 a 3,40 MB.

## 📐 Com'è fatto, in due righe

`index.html` ha **tutto lo stile inline** ed è la fonte di verità visiva; `_stile-hjck.css`
serve alle pagine interne — se cambia la home, il foglio condiviso va riallineato a mano.
Le pagine in **`en/` sono copie tradotte a mano**: ogni testo cambiato in italiano va
cambiato anche là, e **le date stanno in quattro punti** (`date.html`, `en/dates.html` e i
calendari in home di entrambe le lingue).
⚠️ Il **JSON-LD di `date.html` non si aggiorna da solo**: lo script in fondo alla pagina
nasconde le date passate a chi guarda, ma i dati strutturati per Google restano scritti a
mano. Vanno ripuliti quando le date cambiano — il 07/09 dichiaravano ancora *in programma*
una serata che il brain dà come **saltata**.

## Regole d'igiene
- Repo **fuori** da iCloud/Drive. Pull prima di iniziare, push appena finito.
- **Non pubblicare** cachet, acconti, note interne, dati di clienti privati.
- Font: **Bonzana** (display, licenza **Web** comprata il 02/09/2026), **LT Cushion** (gratis),
  **Manrope** (OFL). Auto-ospitati in `fonts/`: **Google Fonts è stato eliminato** per non
  mandare gli IP dei visitatori a Google. Questo vale ancora e non si tocca.

## 🍪 DAL 12/09/2026 IL SITO HA IL BANNER COOKIE (e prima non ce l'aveva)

Fino all'11/09 questo file diceva che il sito **non ha il banner** perché non c'erano terze
parti. **Non è più vero**: sono stati installati **Google Tag Manager `GTM-N6HMSTFK`** e
**Google Analytics `G-BHKGF45S73`**, quindi Google riceve gli IP e scrive cookie, e il
consenso è diventato obbligatorio.

**L'ORDINE NELL'`<head>` NON È UN DETTAGLIO:** `consenso.js` va **PRIMA** dello snippet GTM e
**senza `defer`**. Imposta il *consent mode* a **negato** come stato di partenza, così i tag
dentro GTM non scrivono niente finché qualcuno non accetta. Se girasse dopo, i tag partirebbero
prima della domanda e **il banner sarebbe una finzione** — cioè peggio che non averlo.
Su tutte e 17 le pagine, IT ed EN. Riaprire la scelta: `window.ckConsenso.riapri()`.

⚠️ **Chi cambia l'informativa la cambia in DUE lingue.** `privacy.html` ed `en/privacy.html`
dicevano entrambe *«non installiamo nessun cookie»* e *«non contatti Google»*: due affermazioni
diventate false nello stesso minuto. Aggiornate insieme il 12/09, con la sezione «Cookie e
scelte» / «Cookies and choices».

⚠️ **L'imbuto del modulo (`traccia-modulo.js` + `netlify/functions/traccia.mjs`) è un'altra
cosa e NON passa dal banner**: nessun cookie, nessun identificatore, non legge mai il contenuto
dei campi e la pagina parla solo con questo dominio. Non metterlo dentro il consenso per
simmetria: non ne ha bisogno, e chiedere un consenso che non serve fa solo perdere dati.
- `_font-prova/`, `_brand-def/`, `_parcheggio/`, `_bozzetti/`, `_bk` e le cartelle delle foto
  originali sono in `.gitignore` **per una ragione**: se finiscono in un commit vanno online.
