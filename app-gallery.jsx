// === Coffeekillers — pagina "Gallery" ======

const { useEffect: useEffect_g } = React;

// Foto reali già presenti — Michele aggiungerà le altre in questa lista
const PHOTOS = [
  { src: "images/Palco.jpg",           alt: "The Coffeekillers sul palco" },
  { src: "images/Tutti in piedi.jpeg", alt: "Pubblico in piedi durante il live" },
  { src: "images/Palco 2.jpeg",        alt: "The Coffeekillers — live" },
  { src: "images/Palco 3.jpeg",        alt: "The Coffeekillers — live" },
  // ↓ Michele: aggiungi le nuove foto qui come { src: "images/NOME.jpg", alt: "descrizione" }
];

// Video YouTube — aggiungi gli ID dei prossimi video qui
const VIDEOS = [
  { id: "yKFP1AAzxFM", title: "The Coffeekillers — Live" },
  // { id: "ALTRO_ID", title: "Titolo video" },
];

const PLACEHOLDER_COUNT = 8; // blocchi grigi da riempire con le prossime foto

function PhotoGrid() {
  const placeholders = Array.from({ length: PLACEHOLDER_COUNT });
  return (
    <div className="gallery-grid">
      {PHOTOS.map((p, i) => (
        <div className="gallery-item" key={"p" + i}>
          <img src={p.src} alt={p.alt} loading="lazy" />
        </div>
      ))}
      {placeholders.map((_, i) => (
        <div className="gallery-item gallery-placeholder" key={"ph" + i}>
          <div className="gallery-placeholder-inner">
            <span className="gallery-ph-icon">📷</span>
            <span className="gallery-ph-label">In arrivo</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function VideoGrid() {
  return (
    <div className="video-grid">
      {VIDEOS.map((v, i) => (
        <div className="video-item" key={i}>
          <div className="yt-wrapper">
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
        </div>
      ))}
      <div className="video-item video-placeholder">
        <div className="gallery-placeholder-inner">
          <span className="gallery-ph-icon">▶</span>
          <span className="gallery-ph-label">Prossimi video in arrivo</span>
          <a className="btn" href="https://www.youtube.com/@thecoffeekillers" target="_blank" rel="noopener" style={{ marginTop: 16 }}>
            Vai al canale <span className="arrow"><Arrow /></span>
          </a>
        </div>
      </div>
    </div>
  );
}

function GalleryApp() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  useReveal();

  useEffect_g(() => {
    const pal = PALETTES[t.palette] || PALETTES.saloon;
    const typ = TYPESETS[t.type] || TYPESETS.editorial;
    const root = document.documentElement;
    Object.entries({ ...pal, ...typ }).forEach(([k, v]) => {
      if (k.startsWith("--")) root.style.setProperty(k, v);
    });
    root.setAttribute("data-palette", t.palette);
  }, [t.palette, t.type]);

  return (
    <>
      <Nav />

      <section className="section" style={{ paddingTop: "80px" }}>
        <div className="wrap">
          <div style={{ marginBottom: 48 }}>
            <span className="eyebrow" style={{ fontSize: "15px" }}>— Foto &amp; Video</span>
            <h1 className="section-title-50" style={{ marginTop: 14 }}>
              Sul palco e <span className="it">dietro le quinte.</span>
            </h1>
            <p style={{ maxWidth: "48ch", color: "var(--ck-mute)", fontSize: "clamp(16px,2vw,20px)", marginTop: 16 }}>
              Scatti dai nostri live, dalle prove, dai backstage. Un album che cresce a ogni serata.
            </p>
          </div>

          <PhotoGrid />

          <div style={{ textAlign: "center", marginTop: 16, marginBottom: 8 }}>
            <a className="btn" href="https://www.instagram.com/thecoffeekillers/" target="_blank" rel="noopener">
              Seguici su Instagram <span className="arrow"><Arrow /></span>
            </a>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--ck-paper-2)" }}>
        <div className="wrap">
          <div style={{ marginBottom: 40 }}>
            <span className="eyebrow" style={{ fontSize: "15px" }}>— YouTube</span>
            <h2 className="section-title-50" style={{ marginTop: 14 }}>
              Ascoltaci dal <span className="it">vivo.</span>
            </h2>
            <p style={{ maxWidth: "44ch", color: "var(--ck-mute)", fontSize: "clamp(16px,2vw,20px)", marginTop: 16 }}>
              Estratti dei nostri show. Per capire davvero come suoniamo, niente è meglio di vederci in azione.
            </p>
          </div>
          <VideoGrid />
        </div>
      </section>

      <ContactCta />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<GalleryApp />);
