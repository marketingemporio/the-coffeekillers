# Coffeekillers — confronto Versione A / Versione B

Questa pagina serve solo a te, Michele: spiega come guardare le due versioni del sito
una accanto all'altra, senza rischiare di rompere niente. Nessuna delle due azioni
qui sotto tocca il sito online: puoi provare quanto vuoi.

## Versione A — quella online oggi
La vedi semplicemente aprendo https://thecoffeekillers.com nel browser. È il sito
"beige/carta" col restyling di luglio.

## Versione B — l'esperimento (Silverstone + nero/oro/arancio)
Per vederla devi aprirla **in locale sul tuo Mac** (non è online). Passi:

1. Apri il **Terminale** (cerca "Terminale" con Spotlight, la lente in alto a destra).
2. Incolla questo comando e premi Invio — ti porta nella cartella giusta:
   ```
   cd ~/World/Siti/the-coffeekillers
   ```
3. Incolla questo comando e premi Invio — ti mette sulla Versione B:
   ```
   git checkout fusione-webflow-2026-07
   ```
4. Incolla questo comando e premi Invio — accende un piccolo server sul tuo computer:
   ```
   python3 -m http.server 8910
   ```
5. Apri il browser e vai su **http://localhost:8910** — questa è la Versione B.
6. Quando hai finito di guardare: torna al Terminale, premi **Ctrl+C** per spegnere
   il server, poi incolla e invia:
   ```
   git checkout main
   ```
   Questo riporta la cartella sul tuo Mac allo stato della Versione A (quella online).
   **Non cambia nulla sul sito vero** — è solo la copia sul tuo computer che torna a posto.

## Quando hai deciso
Fammi sapere una di queste tre cose e me ne occupo io:
- **"Tieni la A"** → non si tocca nulla, il branch B resta salvato per il futuro.
- **"Metti online la B"** → sostituisco la Versione A con la B (pubblico su Netlify).
- **"Mi piace solo [una cosa specifica della B]"** → es. solo il font, solo i colori,
  solo i bottoni: lo porto sulla Versione A senza cambiare il resto.

Nessuna scadenza: la Versione B resta salvata su GitHub finché non decidi.
