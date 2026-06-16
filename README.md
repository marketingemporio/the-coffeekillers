# The Coffeekillers — sito

Sito vetrina della band **Hot Joe & The Coffeekillers** (country live, Brescia).
Online su **https://thecoffeekillers.com**.

## Come è fatto
- **Statico, senza build**: HTML + React caricato via CDN (unpkg) e Babel "standalone" direttamente nel browser.
- Pagine: `index.html` (home) e `preventivo.html` (richiesta preventivo).
- Componenti in `app.jsx`, `app-preventivo.jsx`, `components.jsx`, `tweaks-panel.jsx`; stili in `styles.css`; immagini in `images/`.

## Hosting e pubblicazione
- **Netlify**, collegato a questo repo GitHub (`marketingemporio/the-coffeekillers`, branch `main`).
  - Publish directory: `.` (la root) · Build command: nessuno.
  - **Deploy automatico**: ogni `push` su `main` pubblica il sito online.
- Nota storica: inizialmente provato su **Cloudflare Workers** (`wrangler`), poi spostato su **Netlify**. La configurazione Workers (`wrangler.jsonc`) è stata **rimossa** perché non più usata.

## Analytics
- **Cloudflare Web Analytics** attivo: snippet (beacon) in `index.html` e `preventivo.html`, subito prima di `</body>`. Privacy-friendly, senza banner cookie.
