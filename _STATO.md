# The Coffeekillers — STATO (leggimi per primo)

> Handoff per riprendere il lavoro in una nuova chat / per un collega.
> **Ultimo aggiornamento:** 2026-06-26
> **Stato in una riga:** sito **ONLINE** su https://thecoffeekillers.com (statico, nessun build) **+ un WIP non ancora pubblicato** (vedi sotto).
> Compilato il 2026-06-25 da `README.md` + memoria + stato git reale.

## ⚠️ Deploy automatico = produzione immediata
- Branch **`main`** → **Netlify** (publish `.`, nessun build): **ogni `git push` su `main` pubblica online.**

## 🚧 WIP in corso — COMMITTATO in locale, NON ancora pushato
⚠️ **Non fare `git push` finché non sono sciolte le 4 decisioni qui sotto**: il branch
`main` è in deploy automatico Netlify (`publish="."`), quindi un push pubblicherebbe
anche il blocco "Live 2026" non deciso **e** questo `_STATO.md` (note private, es.
matrimonio di Siena) sul sito pubblico.

**Fatto e committato in locale il 2026-06-26 (commit non pushato):**
- Footer: nota credito "Sviluppato con **Emporio nel Bosco**" (link dofollow a
  `emporionelbosco.it`, nuova scheda) inline sulla riga del copyright in `components.jsx`.
- Footer accorciato: padding `100px 0 140px` → `56px 0 64px` (~120px in meno di altezza).

Nel working tree (ora committato) c'è anche il blocco home **"Live 2026"**: una finestra scrollabile (`id="live"`, componente `UpcomingShows`, array `SHOWS`) che mostra **solo data · nome serata · provincia**.
**Prima del push servono 4 decisioni di Michele:**
1. **Matrimonio 05/09 (Siena)** — evento privato di un cliente: lasciare pubblico / rinominare "Evento privato" / togliere?
2. **Province da confermare** — 11/07 "Festa Country Village" (Montebello) e 19/07 "Serata Country" (Ortica).
3. **Date già passate** (23/05, 30/05, 06/06) — tenerle o mostrare solo le prossime (filtro automatico)?
4. **Nomi serate** — ripuliti dai nomi interni, eventuali ritocchi.
- Opzione offerta: voce **"Date"** nel menu nav.
- ⚠️ **Mai pubblicare cachet/acconti/note interne**: restano solo nel PDF privato nel Brain (vedi sotto).
- **Quando si riprende:** applicare le risposte alle 4 decisioni → commit + **push** (a quel punto va online tutto: footer + Live 2026).

## 🎯 Cos'è
Sito vetrina della band **Hot Joe & The Coffeekillers** (country live, Brescia).

## 🗂️ Pagine & stack
- `index.html` (home) · `preventivo.html` (richiesta preventivo).
- **Statico senza build**: HTML + React via CDN (unpkg) + Babel standalone nel browser. Componenti in `app.jsx`, `app-preventivo.jsx`, `components.jsx`, `tweaks-panel.jsx`; stili `styles.css`; foto in `images/`.
- Nota storica: provato prima su Cloudflare Workers, poi spostato su Netlify (config Workers rimossa; resta il branch remoto `cloudflare/workers-autoconfig`).

## 📈 Analytics
- **Cloudflare Web Analytics** attivo (beacon in `index.html` e `preventivo.html`).

## 🔧 Come riprendere / git
- Anteprima locale: apri `index.html` o `python3 -m http.server 8000`.
- Repo GitHub: `marketingemporio/the-coffeekillers`, branch **`main`** (= produzione, vedi avviso).

## 📎 Documenti collegati
- Nel Brain: `emporio-brain/The CoffeeKillers/Sito - Workflow di lavoro.md`, `Date Live 2026.md`, e `Testi di Riferimento/` (libreria testi country).
- ⚠️ **`Leads Coffee Killers - Date.pdf`** (nel Brain) è **PRIVATO** (cachet/acconti): non pubblicarne i dati sul sito.
