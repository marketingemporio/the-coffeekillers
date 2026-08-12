// === Coffeekillers — pagina "Gallery" ======
// Masonry di foto reali + lightbox. Per aggiungere foto: nuova riga in PHOTOS
// { src: "images/nome-descrittivo.webp", alt: "descrizione per Google e screen reader", cap: "didascalia breve" }
// Nomi file: minuscoli, con i trattini, descrittivi (contano per la SEO immagini). Sempre .webp.

const PHOTOS = [
  // — Scatti nuovi 2026 (formazione attuale: Mike, Miglio, Larry, Richi, Ste) —
  { src: "images/band-fiume-o3.webp", alt: "Hot Joe & The Coffeekillers, band country di Brescia, tutti e cinque in riva al fiume al tramonto", cap: "Al tramonto, in riva al fiume · 2026" },
  { src: "images/live-voce.webp", alt: "Mike canta con la chitarra acustica, cappello country e camicia a fiori, durante un live", cap: "Mike · voce e acustica" },
  { src: "images/band-muro-a.webp", alt: "Ritratto della band country Hot Joe & The Coffeekillers al completo con gli strumenti, davanti a un muro color terracotta", cap: "La band al completo · 2026" },
  { src: "images/band-fiume-v2.webp", alt: "I cinque musicisti dei Coffeekillers in riva al fiume prima di un concerto", cap: "Prima del concerto, sul fiume" },
  { src: "images/live-tastiere.webp", alt: "Larry alla tastiera Nord rossa durante un concerto country al tramonto", cap: "Larry · tastiere al tramonto" },
  { src: "images/band-giardino-a.webp", alt: "La band country al completo in giardino, tra sole e alberi", cap: "Tra un live e l'altro" },
  { src: "images/band-fiume-o1.webp", alt: "La band country al completo in riva al fiume col tramonto alle spalle", cap: "Cinque amici, un fiume, un tramonto" },
  { src: "images/live-basso.webp", alt: "Richi al basso con il cappello, sul palco di una sagra di paese", cap: "Richi · basso, sul palco" },
  { src: "images/band-muro-b.webp", alt: "La band Hot Joe & The Coffeekillers sorridente con gli strumenti davanti al muro color terracotta", cap: "Sorrisi tra amici" },
  { src: "images/band-fiume-v3.webp", alt: "I musicisti dei Coffeekillers in riva al fiume durante una serata d'estate", cap: "Serata sul fiume" },
  { src: "images/live-batteria.webp", alt: "Miglio dietro la batteria Gretsch durante un live country all'aperto", cap: "Miglio · dietro i tamburi" },
  { src: "images/band-giardino-b.webp", alt: "La band country al completo in giardino, prima di partire per il live", cap: "In giardino, prima di partire" },
  { src: "images/band-fiume-o2.webp", alt: "Risate tra i cinque musicisti della band country in riva al fiume", cap: "Country e risate in riva al fiume" },
  { src: "images/live-notte.webp", alt: "The Coffeekillers dal vivo di sera in piazza, luci viola da concerto", cap: "Serata live in piazza" },

  // — Storia Coffeekillers: servizi 2022–2023 —
  // In questi scatti ci sono anche Eli (Elisa Turra, voce e acustica, 2017→set 2025)
  // e Matteo (Matteo Maghini, banjo ed elettrica, 2022→set 2025): sono ex membri.
  // ⚠️ Le foto "lap steel" sono d'epoca: la lap era di Larry fino a gennaio 2026, ora la suona Ste.
  { src: "images/targa-band.webp", alt: "L'insegna in legno dipinta a mano Hot Joe & The Coffeekillers davanti al palco allestito su un prato", cap: "L'insegna, prima di partire" },
  { src: "images/vigna-chitarra.webp", alt: "Mike con cappello country e Telecaster tra le vigne al tramonto", cap: "Mike · Telecaster tra le vigne · 2022" },
  { src: "images/prato-palco-pubblico.webp", alt: "La band country vista da dietro il palco mentre suona davanti al pubblico, cielo blu della sera", cap: "Dal palco, verso il pubblico · 2023" },
  { src: "images/studio-contrabbasso.webp", alt: "Ritratto in studio di Richi con cappello country che abbraccia il contrabbasso", cap: "Richi · contrabbasso in studio · 2023" },
  { src: "images/vigna-live-panoramica.webp", alt: "Concerto country serale in mezzo alle vigne, la band al completo sotto una fila di lucine", cap: "Concerto in vigna, sotto le lucine · 2022" },
  { src: "images/live-blu-batteria.webp", alt: "Miglio di profilo dietro i piatti della batteria, luci blu e viola da concerto", cap: "Miglio · luci blu dietro i tamburi" },
  { src: "images/vigna-contrabbasso.webp", alt: "Richi sorridente con occhiali da sole e contrabbasso tra le vigne al tramonto", cap: "Richi · contrabbasso e vigneto · 2022" },
  { src: "images/telecaster-dettaglio.webp", alt: "Dettaglio ravvicinato di una Telecaster bianca vissuta con cinghia decorata", cap: "La Telecaster, da vicino" },
  { src: "images/vigna-live-voce.webp", alt: "Eli canta con la chitarra acustica durante un concerto serale in vigna, luce rossa di scena", cap: "Eli alla voce · 2022" },
  { src: "images/studio-bacchette.webp", alt: "Ritratto in studio di Miglio con camicia a righe e una bacchetta della batteria tra i denti", cap: "Miglio · bacchette e sorrisi · 2023" },
  { src: "images/prato-tastiere.webp", alt: "Le mani di Larry sulle tastiere durante un live, luci verdi e viola sullo sfondo", cap: "Larry · mani sulle tastiere · 2023" },
  { src: "images/vigna-lapsteel.webp", alt: "Larry porta in spalla la lap steel tra le vigne al tramonto, cappellino e camicia a quadri", cap: "Larry · la lap steel in spalla · 2022" },
  { src: "images/live-controluce-voce.webp", alt: "Mike canta in controluce durante un concerto serale, Eli alla chitarra sulla destra", cap: "Mike ed Eli, in controluce" },
  { src: "images/vigna-live-palco.webp", alt: "Il palco allestito sull'erba di sera con tappeto, pedaliera e lucine accese, Mike ed Eli davanti ai microfoni", cap: "Il palco, a luci accese · 2022" },
  { src: "images/studio-chitarra.webp", alt: "Ritratto in studio di Mike sorridente con la Telecaster e la cinghia decorata", cap: "Mike · chitarra in studio · 2023" },
  { src: "images/prato-voce.webp", alt: "Mike canta al microfono con giacca beige durante un concerto serale", cap: "Mike · al microfono · 2023" },
  { src: "images/vigna-live-tastiere.webp", alt: "Larry alla tastiera Nord rossa durante un live serale in vigna, lucine sopra il palco", cap: "Larry · tastiere sotto le lucine · 2022" },
  { src: "images/strumenti-prato.webp", alt: "Chitarra acustica, tastiera e batteria Gretsch pronte sull'erba prima di un concerto country", cap: "Gli strumenti sull'erba" },
  { src: "images/vigna-ritratto.webp", alt: "Ritratto di Miglio tra le vigne, cappellino e camicia a righe, braccia incrociate", cap: "Miglio · ritratto in vigna · 2022" },
  { src: "images/prato-batteria.webp", alt: "Miglio in luce viola dietro la batteria, il contrabbasso sfocato in primo piano", cap: "Miglio · ritmo in viola · 2023" },
  { src: "images/studio-tastiere.webp", alt: "Ritratto in studio di Larry appoggiato alla sua tastiera Nord rossa", cap: "Larry · tastiere in studio · 2023" },
  { src: "images/vigna-live-chitarra.webp", alt: "Matteo alla chitarra elettrica durante un concerto serale in vigna, luce blu della sera", cap: "Matteo alla chitarra · 2022" },
  { src: "images/live-sera-tastiere.webp", alt: "Larry alla tastiera Nord rossa con la band alle spalle durante un live all'imbrunire", cap: "Larry · all'imbrunire, sul palco" },
  { src: "images/acustico-cortile.webp", alt: "Set acustico country in cortile per un evento aziendale: chitarra dreadnought, cappello country e contrabbasso", cap: "Acustico per un evento aziendale · 2023" },
  { src: "images/prato-batteria-blu.webp", alt: "Miglio dietro i piatti in luce blu, cappello country sfocato in primo piano", cap: "Miglio · piatti e luce blu · 2023" },
  { src: "images/vigna-contrabbasso-live.webp", alt: "Richi suona il contrabbasso nella vigna al tramonto, il pubblico seduto sull'erba", cap: "Richi · contrabbasso al tramonto · 2022" },
  { src: "images/studio-rullante.webp", alt: "Ritratto in studio di Miglio seduto con rullante e bacchette", cap: "Miglio · rullante in studio · 2023" },
  { src: "images/live-blu-tastiere.webp", alt: "Dettaglio delle mani di Larry sulla tastiera durante un live, luci rosse e viola", cap: "Larry · tasti e luci rosse" },
  { src: "images/vigna-live-batteria.webp", alt: "Miglio alla batteria durante un concerto serale in vigna, luce rosa di scena", cap: "Miglio · batteria, di sera · 2022" },
  { src: "images/studio-lapsteel.webp", alt: "Ritratto in studio di Larry con camicia di jeans e la lap steel in spalla", cap: "Larry · lap steel in studio · 2023" },
  { src: "images/prato-batteria-contrabbasso.webp", alt: "Miglio alla batteria in luce colorata con il contrabbasso di Richi in primo piano", cap: "Batteria e contrabbasso · 2023" },
  { src: "images/live-telecaster-notte.webp", alt: "Mike canta con la Telecaster di notte, Eli e Matteo alle sue spalle", cap: "Mike, Eli e Matteo · di notte" },
  { src: "images/live-blu-contrabbasso.webp", alt: "Richi suona il contrabbasso nel buio, illuminato da un faretto e da luci verdi", cap: "Richi · contrabbasso nel buio" },

  // — Scatti precedenti —
  { src: "images/live-palco-luci-calde.webp", alt: "The Coffeekillers dal vivo con luci calde, Eli e Mike ai microfoni e il pubblico sotto il palco", cap: "Eli e Mike ai microfoni · serata live" },
  { src: "images/band-completo-strumenti.webp", alt: "La band country Hot Joe & The Coffeekillers al completo con gli strumenti", cap: "La band al completo" },
  { src: "images/mike-telecaster-live.webp", alt: "Mike, frontman dei Coffeekillers, con cappello country e Telecaster durante un live", cap: "Mike · voce e Telecaster" },
  { src: "images/strumenti-fila-alberi.webp", alt: "Chitarre acustiche e mandolino in fila sotto gli alberi, prima di un concerto country", cap: "Gli strumenti, prima del live" },
  { src: "images/band-giardino-salopette.webp", alt: "La band in piedi in giardino, tra salopette e sorrisi", cap: "Fuori dal palco" },
  { src: "images/live-sera-pubblico.webp", alt: "The Coffeekillers dal vivo di sera su un palco illuminato, Eli alla chitarra acustica al centro", cap: "Eli alla chitarra · live di sera" },
  { src: "images/mike-miglio-banjo.webp", alt: "Mike e Miglio col banjo all'aperto, nella formazione in duo", cap: "Mike & Miglio · col banjo" },
  { src: "images/live-allaperto-pomeriggio.webp", alt: "Live country pomeridiano all'aperto, con tastiere e batteria", cap: "Live all'aperto" },
  { src: "images/mike-acustica-live.webp", alt: "Mike con la chitarra acustica", cap: "Mike · guitars & lead voice" },
  { src: "images/miglio-batteria.webp", alt: "Miglio con le bacchette della batteria", cap: "Miglio · drums & vocals" },
  { src: "images/larry-tastiera-rossa.webp", alt: "Larry con la sua tastiera rossa", cap: "Larry · keys & harmonica" },
  { src: "images/ste-chitarra.webp", alt: "Ste con la Telecaster", cap: "Ste · guitars & lap steel" },
  { src: "images/richi-basso-live.webp", alt: "Richi con il basso", cap: "Richi · bass & doublebass" },
  { src: "images/strumenti-palco-verde.webp", alt: "Palco allestito immerso nel verde con batteria e chitarre, pronto per il concerto", cap: "Il palco, immerso nel verde" },
];

// Video YouTube — aggiungi gli ID dei prossimi video qui
const VIDEOS = [
  { id: "yKFP1AAzxFM", title: "The Coffeekillers — Live" },
];

function Lightbox({ index, onClose, onMove }) {
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onMove(1);
      if (e.key === "ArrowLeft") onMove(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose, onMove]);

  const p = PHOTOS[index];
  return (
    <div className="lb" onClick={onClose} role="dialog" aria-modal="true" aria-label={p.alt}>
      <img src={p.src} alt={p.alt} onClick={(e) => e.stopPropagation()} />
      <div className="lb-cap">{p.cap} — {index + 1} / {PHOTOS.length}</div>
      <button className="lb-btn lb-close" onClick={onClose} aria-label="Chiudi">✕</button>
      <button className="lb-btn lb-prev" onClick={(e) => { e.stopPropagation(); onMove(-1); }} aria-label="Foto precedente">←</button>
      <button className="lb-btn lb-next" onClick={(e) => { e.stopPropagation(); onMove(1); }} aria-label="Foto successiva">→</button>
    </div>
  );
}

function GalleryApp() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  const [lb, setLb] = React.useState(-1);
  useReveal();
  usePageTheme(t);

  const move = (d) => setLb((i) => (i + d + PHOTOS.length) % PHOTOS.length);

  return (
    <>
      <Nav />

      <PageHero
        eyebrow="Foto & video"
        ornaments={PHOTOS.length + " scatti"}
        title={<>Sul palco e <span className="it">dietro le quinte.</span></>}
        lead="Scatti dai nostri live, dalle prove, dai backstage. Un album che cresce a ogni serata: clicca una foto per vederla grande."
      />

      <section className="section" style={{ paddingTop: "clamp(28px,4vw,44px)", paddingBottom: 0 }}>
        <div className="wrap">
          <p className="body rv" style={{ maxWidth: "62ch", fontSize: "clamp(15px, 1.7vw, 18px)", opacity: 0.85 }}>
            Insieme agli scatti di oggi ne trovate diversi del <strong>2022 e 2023</strong>: c'è ancora
            <strong> Eli</strong> alla voce e <strong>Matteo</strong> alla chitarra e al banjo, che hanno
            fatto un bel pezzo di strada con noi fino al 2025. Fa parte della storia dei Coffeekillers,
            e ci teniamo a tenerla qui.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="gal-masonry">
            {PHOTOS.map((p, i) => (
              <button className="gal-item rv" key={p.src} onClick={() => setLb(i)} aria-label={"Apri la foto: " + p.cap}>
                <img src={p.src} alt={p.alt} loading={i < 3 ? "eager" : "lazy"} decoding="async" />
                <span className="gal-cap">{p.cap}</span>
              </button>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 36 }}>
            <a className="btn" href="https://www.instagram.com/thecoffeekillers/" target="_blank" rel="noopener">
              Altri scatti su Instagram <span className="arrow"><Arrow /></span>
            </a>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="section" style={{ background: "var(--ck-ink)", color: "var(--ck-on-dark)" }}>
        <div className="wrap">
          <SectionHead left="YouTube" right="Il live, in video" dark />
          <div className="split">
            <div className="rv">
              <h2 className="section-title-50" style={{ marginTop: 0 }}>
                Ascoltaci <span className="it" style={{ color: "var(--ck-gold)" }}>dal vivo.</span>
              </h2>
              <p style={{ maxWidth: "44ch", color: "rgba(238,219,190,.75)", fontSize: "clamp(16px,2vw,20px)", marginTop: 16, lineHeight: 1.65 }}>
                Estratti dei nostri show. Per capire davvero come suoniamo, niente è meglio di vederci in azione.
              </p>
              <a className="btn" href="https://www.youtube.com/@thecoffeekillers" target="_blank" rel="noopener" style={{ marginTop: 24, background: "var(--ck-paper)", color: "#49240a", borderColor: "var(--ck-paper)" }}>
                Vai al canale <span className="arrow"><Arrow /></span>
              </a>
            </div>
            <div className="rv rv--right" style={{ display: "flex", justifyContent: "center" }}>
              {VIDEOS.map((v) => (
                <div className="yt-wrapper" key={v.id}>
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1`}
                    title={v.title}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                  <a className="yt-fallback" href="https://www.youtube.com/@thecoffeekillers" target="_blank" rel="noopener" aria-label="Apri il canale YouTube">
                    <span className="yt-play">▶</span>
                    <span className="yt-label">Guarda su YouTube</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCta />
      <Footer />

      {lb >= 0 && <Lightbox index={lb} onClose={() => setLb(-1)} onMove={move} />}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<GalleryApp />);
