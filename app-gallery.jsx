// === Coffeekillers — pagina "Gallery" ======
// Masonry di foto reali + lightbox. Per aggiungere foto: nuova riga in PHOTOS
// { src: "images/NOME.jpg", alt: "descrizione", cap: "didascalia breve" }

const PHOTOS = [
  // — Scatti nuovi 2026 —
  { src: "images/band-fiume-o3.webp", alt: "Hot Joe & The Coffeekillers in riva al fiume al tramonto, tutti e cinque i musicisti", cap: "Al tramonto, in riva al fiume" },
  { src: "images/live-voce.webp", alt: "Il cantante con cappello country e camicia a fiori canta con la chitarra acustica durante un live", cap: "Voce e chitarra, dal vivo" },
  { src: "images/band-muro-a.webp", alt: "Ritratto della band country Hot Joe & The Coffeekillers al completo, con gli strumenti, davanti a un muro color terracotta", cap: "La band al completo · 2026" },
  { src: "images/band-fiume-v2.webp", alt: "I cinque musicisti della band posano in riva al fiume prima del concerto", cap: "Prima del concerto, sul fiume" },
  { src: "images/live-tastiere.webp", alt: "Il tastierista alla sua tastiera Nord rossa durante un concerto al tramonto", cap: "Alle tastiere, al tramonto" },
  { src: "images/band-giardino-a.webp", alt: "La band country al completo in giardino, tra sole e alberi", cap: "Tra un live e l'altro" },
  { src: "images/band-fiume-o1.webp", alt: "La band al completo in riva al fiume con il tramonto alle spalle", cap: "Cinque amici, un fiume, un tramonto" },
  { src: "images/live-basso.webp", alt: "Il bassista con cappello suona il basso sul palco di una sagra", cap: "Il basso, sul palco" },
  { src: "images/band-muro-b.webp", alt: "La band Hot Joe & The Coffeekillers sorridente con gli strumenti davanti al muro color terracotta", cap: "Sorrisi tra amici" },
  { src: "images/band-fiume-v3.webp", alt: "I musicisti della band in riva al fiume durante una serata d'estate", cap: "Serata sul fiume" },
  { src: "images/live-batteria.webp", alt: "Il batterista dietro la batteria Gretsch durante un live all'aperto", cap: "Dietro i tamburi" },
  { src: "images/band-giardino-b.webp", alt: "La band country al completo in giardino, prima di partire per il live", cap: "In giardino, prima di partire" },
  { src: "images/band-fiume-o2.webp", alt: "Risate e country in riva al fiume con la band al completo", cap: "Country e risate in riva al fiume" },
  { src: "images/live-notte.webp", alt: "La band di sera in una piazza, luci viola da concerto", cap: "Serata live" },
  // — Scatti precedenti —
  { src: "images/Palco.jpg", alt: "The Coffeekillers sul palco, luci calde e cappelli country", cap: "Serata live · sul palco" },
  { src: "images/Tutti.jpeg", alt: "La band al completo con gli strumenti", cap: "La band al completo" },
  { src: "images/Michi sul palco.JPG", alt: "Il frontman con cappello country e Telecaster durante un live", cap: "Voce e Telecaster" },
  { src: "images/strumenti-fila.jpg", alt: "Chitarre acustiche e mandolino in fila sotto gli alberi", cap: "Gli strumenti, prima del live" },
  { src: "images/Tutti in piedi.jpeg", alt: "La band in piedi in giardino, salopette e sorrisi", cap: "Fuori dal palco" },
  { src: "images/Palco 3.jpeg", alt: "La band dal vivo di sera, palco illuminato e pubblico", cap: "Live di sera" },
  { src: "images/Michi e Miglio.jpeg", alt: "Due membri della band con il banjo, all'aperto", cap: "Prove col banjo" },
  { src: "images/Palco 2.jpeg", alt: "Live pomeridiano all'aperto con tastiere e batteria", cap: "Live all'aperto" },
  { src: "images/Michi 3.jpeg", alt: "Michele con la chitarra acustica", cap: "Michele · guitars & lead voice" },
  { src: "images/Miglio 2.jpeg", alt: "Davide con le bacchette della batteria", cap: "Davide · drums & vocals" },
  { src: "images/Larry 3.jpeg", alt: "Lorenzo con la sua tastiera rossa", cap: "Lorenzo · keys & harmonica" },
  { src: "images/Ste 3.jpeg", alt: "Stefano con la Telecaster", cap: "Stefano · guitars & lap steel" },
  { src: "images/Richi 4.jpeg", alt: "Riccardo con il basso", cap: "Riccardo · bass & doublebass" },
  { src: "images/Strumenti palco.jpg", alt: "Palco allestito immerso nel verde con batteria e chitarre", cap: "Il palco, immerso nel verde" },
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
              <p style={{ maxWidth: "44ch", color: "rgba(243,232,210,.75)", fontSize: "clamp(16px,2vw,20px)", marginTop: 16, lineHeight: 1.65 }}>
                Estratti dei nostri show. Per capire davvero come suoniamo, niente è meglio di vederci in azione.
              </p>
              <a className="btn" href="https://www.youtube.com/@thecoffeekillers" target="_blank" rel="noopener" style={{ marginTop: 24, background: "var(--ck-paper)", color: "#15100b", borderColor: "var(--ck-paper)" }}>
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
