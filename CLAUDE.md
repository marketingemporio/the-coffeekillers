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
  mandare gli IP dei visitatori a Google — è anche il motivo per cui il sito **non ha il
  banner cookie**. Non reintrodurre un terzo servizio senza riscrivere l'informativa.
- `_font-prova/`, `_brand-def/`, `_parcheggio/`, `_bozzetti/`, `_bk` e le cartelle delle foto
  originali sono in `.gitignore` **per una ragione**: se finiscono in un commit vanno online.
