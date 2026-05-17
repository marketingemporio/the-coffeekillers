// === Coffeekillers — content, palettes, type sets, sections ===

const CK_IMG = "https://thecoffeekillers.com/images/";

// ---- palettes ------------------------------------------------
const PALETTES = {
  saloon: {
    label: "Saloon",
    "--ck-ink": "#15100b",
    "--ck-paper": "#f1e6cf",
    "--ck-paper-2": "#e8d9bb",
    "--ck-rust": "#b94a1c",
    "--ck-gold": "#c8973b",
    "--ck-sage": "#5a6b4f",
    "--ck-mute": "rgba(21,16,11,0.62)",
    "--ck-line": "rgba(21,16,11,0.18)",
    "--ck-on-dark": "#f3e8d2"
  },
  midnight: {
    label: "Midnight",
    "--ck-ink": "#f3e8d2",
    "--ck-paper": "#0c0907",
    "--ck-paper-2": "#15100b",
    "--ck-rust": "#e08145",
    "--ck-gold": "#e6b766",
    "--ck-sage": "#7d8c69",
    "--ck-mute": "rgba(243,232,210,0.55)",
    "--ck-line": "rgba(243,232,210,0.18)",
    "--ck-on-dark": "#0c0907"
  },
  wildflower: {
    label: "Wildflower",
    "--ck-ink": "#1a201a",
    "--ck-paper": "#f4eee2",
    "--ck-paper-2": "#e6dcc6",
    "--ck-rust": "#a93a26",
    "--ck-gold": "#c98a2e",
    "--ck-sage": "#5d7150",
    "--ck-mute": "rgba(26,32,26,0.62)",
    "--ck-line": "rgba(26,32,26,0.18)",
    "--ck-on-dark": "#f4eee2"
  }
};

// ---- type sets -----------------------------------------------
const TYPESETS = {
  editorial: {
    label: "Editorial",
    "--ck-display": '"DM Serif Display", "Times New Roman", serif',
    "--ck-body": '"DM Sans", ui-sans-serif, system-ui, sans-serif',
    "--ck-mono": '"JetBrains Mono", ui-monospace, monospace',
    "--ck-poster": '"Rye", "DM Serif Display", serif'
  },
  poster: {
    label: "Wanted Poster",
    "--ck-display": '"Alfa Slab One", "Rye", serif',
    "--ck-body": '"Libre Caslon Text", Georgia, serif',
    "--ck-mono": '"JetBrains Mono", ui-monospace, monospace',
    "--ck-poster": '"Rye", "Alfa Slab One", serif'
  },
  modern: {
    label: "Modern",
    "--ck-display": '"Bricolage Grotesque", "DM Sans", sans-serif',
    "--ck-body": '"DM Sans", ui-sans-serif, system-ui, sans-serif',
    "--ck-mono": '"JetBrains Mono", ui-monospace, monospace',
    "--ck-poster": '"Big Shoulders Display", "Bricolage Grotesque", sans-serif'
  }
};

// ---- content -------------------------------------------------
const MEMBERS = [
{
  name: "Michele Frosio",
  role: "Guitars & Lead Voice",
  img: "images/Michi 1.jpeg",
  bio: "Carisma ed energia. Frontman spiccato, il country è per lui il palcoscenico ideale per unire tecnica e grande passione. Esuberante, esagerato, e mai abbastanza.",
  quote: "“Cos'ho dimenticato oggi?”"
},
{
  name: "Davide Miglietti",
  role: "Drums & Vocals",
  img: "images/Miglio 1.jpeg",
  bio: "Precisione, creatività ed equilibrio. Gigante buono, ma testardo come un mulo. Aggiusta persone di professione, rompe le scatole per hobby.",
  quote: "“Potevamo fare di meglio.”"
},
{
  name: "Lorenzo Marini",
  role: "Key & Harmonica",
  img: "images/Larry 1.jpeg",
  bio: "Precisione e positività. Silenzioso, ma non servono parole quando le sue mani creano melodie che sembrano venire dal cuore del Tennessee.",
  quote: "“Raga questo è troppo country!”"
},
{
  name: "Stefano Martinelli",
  role: "Guitars & Lap Steel",
  img: "images/Ste 1.jpeg",
  bio: "Il chitarrista di cui ogni country band ha bisogno: speedy mani, lap steel e una salopette, finalmente il color country è nella nostra palette.",
  quote: "“Lo facciamo ancora una volta?”"
},
{
  name: "Riccardo Loda",
  role: "Bass & DoubleBass",
  img: "images/Richi 1.jpeg",
  bio: "Tecnica, talento e groove. Timing svizzero, orologio un po' meno: arriverà sempre in ritardo, ma mai senza una birra in mano e il basso pronto a incantare.",
  quote: "“Birretta?”"
}];


const SHOWS = [
{ day: "06", month: "Set", year: "2024", time: "20:00", venue: "L'Ortica", place: "Borghetto sul Mincio (MN)", desc: "Ristorante tipico — set acustico" },
{ day: "13", month: "Set", year: "2024", time: "21:00", venue: "Festa Pubblica", place: "Via S. Giovanni Bosco — Gardone V.T.", desc: "Open air, full-band — ingresso libero" },
{ day: "21", month: "Set", year: "2024", time: "20:00", venue: "Cascinetto", place: "Via Ca' del Facco — Salvirola", desc: "Ristorante in frutteto — atmosfera intima" }];


const BRANDS = [
{ name: "Coca-Cola", img: CK_IMG + "Coca-Cola.avif" },
{ name: "Ca' del Bosco", img: CK_IMG + "Ca-del-Bosco.avif" },
{ name: "Porsche", img: CK_IMG + "Porsche.avif" },
{ name: "Thun", img: CK_IMG + "Logo-Thun.avif" },
{ name: "Lombarda Cer.", img: CK_IMG + "Lombarda-Ceramiche.avif" }];


const FAQS = [
{ q: "Qual è il vostro cachet?", a: "Dipende dalla dimensione dell'evento, dalla trasferta e dal service audio/luci richiesto. Nella maggior parte dei casi rientriamo nella fascia 1.000 €–2.500 €. Eccezioni? Solo per eccesso 😬" },
{ q: "Quanto dura una vostra performance?", a: "Tendenzialmente da 1h e 30 a 2h e 30. Vuoi che suoniamo di più? Vedi sopra alle 'eccezioni' 🤓" },
{ q: "Avete un service a seguito?", a: "Sì, siamo noi! 😉 A protezione delle tue tasche, fino a un'audience di 250 persone siamo autonomi; sopra le 250 persone abbiamo il nostro service di fiducia." },
{ q: "Di dove siete? Fino a dove vi spostate?", a: "Siamo di Brescia, ma anche se sei di Canicattì veniamo a farti ballare. Disponibili per spostamenti nazionali e internazionali. 🕺🏻" },
{ q: "Cosa significa il vostro nome?", a: "La nostra routine nei giorni delle prove è sempre stata: una bella moka di caffè bollente e un bicchierino di amaro, poi tutti a suonare. Letteralmente 'Caffè bollente' (Joe in slang americano) & gli ammazzacaffè (the Coffeekillers). ☕️🥃" },
{ q: "Uscite anche in altre formazioni?", a: "Prediligiamo uscire in 6, la nostra unica vera formazione da show. In casi eccezionali usciamo anche con formazioni ridotte." },
{ q: "Di quanto spazio avete bisogno?", a: "5 metri per 3 è il nostro spazio minimo." },
{ q: "Quante persone sono troppe per uno show dei Coffeekillers?", a: "Finché ce n'è, viva il re." },
{ q: "Avete una scaletta fissa?", a: "Lo show è composto da circa 20 brani. Abbiamo un repertorio di circa 50 canzoni che costruiamo sull'esigenza della serata." },
{ q: "Avete bisogno di cibo o bevande?", a: "Ci piace suonare a stomaco pieno e gomito alzato, if you know what we mean." },
{ q: "C'è qualcos'altro che dobbiamo sapere prima di ingaggiarvi?", a: "Siate pronti a entrare nel mondo del Country americano." }];


// ---- small helpers -------------------------------------------
function Star({ size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.39 6.96H22l-6.18 4.49L18.18 20 12 15.51 5.82 20l2.36-6.55L2 8.96h7.61z" />
    </svg>);

}
function Arrow({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>);

}
function ArrowUR({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>);

}
function IGIcon() {return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>);
}
function FBIcon() {return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.6V4.2C16.4 4.1 15.4 4 14.3 4c-2.3 0-3.8 1.4-3.8 3.9v2.9H8v3.2h2.5V22h3z" /></svg>);
}

// fade-in on scroll observer ----------------------------------
function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll(".fade-in");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {if (e.isIntersecting) {e.target.classList.add("in");io.unobserve(e.target);}});
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// === Sections ================================================

function Nav({ onTweaks }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <nav className="nav">
      <a className="brand" href="index.html" aria-label="Hot Joe & The Coffeekillers — home">
        <img className="logo logo-dark" src="images/HJCK_Logo2.svg" alt="Hot Joe & The Coffeekillers" style={{ width: "200px", height: "auto", objectFit: "contain" }} />
        <img className="logo logo-light" src="images/HJCK_Logo2.svg" alt="Hot Joe & The Coffeekillers" style={{ width: "200px", height: "auto", objectFit: "contain", filter: "invert(1)" }} />
      </a>
      
      <button className={"mobile-menu-btn" + (menuOpen ? " open" : "")} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <ul className={"nav-links" + (menuOpen ? " open" : "")} style={{ fontSize: "18px", fontWeight: "500" }}>
        <li><a className="nav-link" href="index.html#stile" onClick={() => setMenuOpen(false)}>Stile</a></li>
        <li><a className="nav-link" href="index.html#socials" onClick={() => setMenuOpen(false)}>Social</a></li>
        <li><a className="nav-link" href="index.html#lineup" onClick={() => setMenuOpen(false)}>Lineup</a></li>
        <li><a className="nav-link" href="index.html#faq" onClick={() => setMenuOpen(false)}>FAQ</a></li>
        <li><a className="cta" href="preventivo.html" onClick={() => setMenuOpen(false)}>Una serata con noi?</a></li>
      </ul>
    </nav>);

}

function Marquee() {
  const items = ["Country Live Band", "Brescia → Nashville", "Eventi · Matrimoni · Festival", "Country Live Band", "Brescia → Nashville", "Eventi · Matrimoni · Festival", "Country Live Band", "Brescia → Nashville"];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track" style={{ gap: "100px", padding: "14px 0px" }}>
        {items.concat(items).map((t, i) =>
        <React.Fragment key={i}>
            <span className="marquee-item it">{t}</span>
            <span className="marquee-dot"></span>
          </React.Fragment>
        )}
      </div>
    </div>);

}

function HeroEditorial() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="meta-row">
          <span className="eyebrow">Country Live Band — Nord Italia</span>
        </div>

        <h1 className="hero-title">
          Vivi l'energia <span className="it">travolgente</span><br />
          del Country <span className="amp">&amp;</span> un tocco <span className="it">europeo.</span>
        </h1>

        <div className="hero-foot">
          <p>Un viaggio musicale nel cuore dell'America. Una <b>band bresciana</b> dall'anima <b>internazionale</b>, pronta a regalarti eventi country indimenticabili.</p>
          <div>
            <a className="btn" href="#contact">Sentiamoci! <span className="arrow"><Arrow /></span></a>
          </div>
          <div className="tag-strip" style={{ marginTop: 0 }}>
            <span>Matrimoni</span><span>Festival</span><span>Corporate</span><span>Locali</span>
          </div>
        </div>

        <div className="hero-grid" style={{ marginTop: "clamp(48px, 7vw, 96px)" }}>
          <div className="media tall hero-photo">
            <span className="badge">★ Live in Nashville mood</span>
            <img src="images/Michi sul palco.JPG" alt="The Coffeekillers — live" />
          </div>
          <div>
            <div className="media wide hero-photo" style={{ aspectRatio: "5/4" }}>
              <span className="badge">Backstage · 2025</span>
              <img src="images/Palco 2.jpeg" alt="The Coffeekillers — backstage" />
            </div>
            <div className="stat-row" style={{ marginTop: 24, paddingTop: 18 }}>
              <div className="stat"><div className="num">07</div><div className="lbl">Anni di palco</div></div>
              <div className="stat"><div className="num">+50</div><div className="lbl">Brani in repertorio</div></div>
              <div className="stat"><div className="num">+200</div><div className="lbl">Live in tasca</div></div>
              <div className="stat"><div className="num">04+2</div><div className="lbl">Formazione show</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function HeroPoster() {
  return (
    <section className="hero hero--poster" id="top">
      <div className="wrap">
        <div className="hero-poster fade-in">
          <div className="hero-mini">★ Tonight only ★</div>
          <div className="ornaments">
            <Star /> <span>Brescia · Italia</span> <Star className="star" /> <span>Nashville Soul</span> <Star />
          </div>
          <h1 className="hero-title">
            HOT JOE<br />
            <span style={{ fontSize: ".55em", fontStyle: "italic", fontFamily: "var(--ck-display)" }}>&amp; the</span><br />
            COFFEEKILLERS
          </h1>
          <div className="ornaments">
            <Star /> <span>Country Live · Nashville Mood · Italian Heart</span> <Star />
          </div>
          <p style={{ maxWidth: "56ch", margin: "18px auto 28px", fontSize: 18 }}>
            Una band bresciana dall'anima internazionale, pronta a regalarti eventi country indimenticabili.
          </p>
          <a className="btn" href="#contact">Sentiamoci! <span className="arrow"><Arrow /></span></a>
        </div>
        <div className="hero-grid" style={{ marginTop: 48 }}>
          <div className="media tall hero-photo">
            <img src="images/Michi sul palco.JPG" alt="" />
          </div>
          <div className="media wide hero-photo">
            <img src="images/Palco 2.jpeg" alt="" />
          </div>
        </div>
      </div>
    </section>);

}

function HeroCinematic() {
  return (
    <section className="hero" id="top" style={{ padding: 0 }}>
      <div style={{ position: "relative", minHeight: "min(820px, 92vh)", overflow: "hidden", background: "#000" }}>
        <img src="images/Palco.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 42%", opacity: 1, filter: "contrast(1.05) saturate(1.05)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,.25), rgba(0,0,0,.6))" }}></div>
        
        <div style={{ position: "absolute", top: "15%", right: "3%", zIndex: 10 }}>
          <img src="images/HJCK_Logo2.svg" alt="Logo The Coffeekillers" style={{ width: "min(65vw, 750px)", opacity: 0.9, objectFit: "contain", filter: "invert(1)" }} />
        </div>

        <div className="wrap" style={{ position: "relative", minHeight: "min(820px, 92vh)", display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingTop: "clamp(60px, 9vw, 120px)", paddingBottom: "clamp(56px, 7vw, 96px)", color: "var(--ck-on-dark)", padding: "100px 49.48px 86.59px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
            <span className="eyebrow" style={{ color: "rgba(243,232,210,0.7)", fontSize: "15px" }}>Country Live Band — Nord Italia</span>
          </div>
          <h1 className="hero-title" style={{ maxWidth: "15ch", fontSize: "70px" }}>
            Vivi l'energia <span className="it" style={{ color: "var(--ck-gold)" }}>travolgente</span> del Country.
          </h1>
          <p style={{ maxWidth: "50ch", marginTop: 24, opacity: .92, fontSize: "20px" }}>
            Una band bresciana dall'anima internazionale, pronta a regalarti eventi country indimenticabili.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 28, flexWrap: "wrap" }}>
            <a className="btn" href="#contact" style={{ background: "var(--ck-paper)", color: "var(--ck-ink)", borderColor: "var(--ck-paper)" }}>Sentiamoci! <span className="arrow"><Arrow /></span></a>
            <a className="btn btn-ghost" href="#lineup" style={{ borderColor: "rgba(243,232,210,0.4)", color: "var(--ck-on-dark)" }}>Scopri la band</a>
          </div>
        </div>
      </div>
    </section>);

}

function StyleSection() {
  return (
    <section className="section" id="stile" style={{ padding: "100px 0px 111.33px" }}>
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 36, flexWrap: "wrap", gap: 12 }}>
          <span className="eyebrow" style={{ fontSize: "15px" }}>— Live shows</span>
          <span className="eyebrow">STILE · REPERTORIO · AMBIENTE</span>
        </div>

        <div className="split fade-in">
          <div>
            <h2 className="lead" style={{ fontSize: "50px" }}>
              Cocktail e <span className="it">ballads</span>, oppure ballare sui tavoli con le <i style={{ color: "var(--ck-rust)" }}>party songs</i> più ritmate.
            </h2>
            <p className="body" style={{ fontSize: "20px" }}>
              Desideri ascoltare qualche <b>classico intramontabile</b> o alcune ballads romantiche country chic per accompagnare i tuoi cocktail e rilassarti? Preferisci ballare sui tavoli con le party songs più ritmate? Sei nel posto giusto. Creiamo l'<b>atmosfera perfetta</b> per il tuo evento con un repertorio di inediti e cover di icone come Blake Shelton, Chris Stapleton, Brad Paisley, Carrie Underwood, The Chicks e molti altri. Ogni nota, un pezzo di autentica atmosfera americana!
            </p>
            <div className="tag-strip">
              <span>Blake Shelton</span><span>Chris Stapleton</span><span>Brad Paisley</span><span>Carrie Underwood</span><span>The Chicks</span><span>+ inediti</span>
            </div>
          </div>
          <div>
            <div className="media wide">
              <img src="images/Palco 3.jpeg" alt="Live show" />
            </div>
          </div>
        </div>

        <hr className="rule" style={{ margin: "clamp(56px,7vw,100px) 0" }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 36, flexWrap: "wrap", gap: 12 }}>
          <span className="eyebrow" style={{ fontSize: "15px" }}>— Il nostro stile</span>
          <span className="eyebrow">Sound · Ritmo · Armonie</span>
        </div>

        <div className="split fade-in" style={{ gridTemplateColumns: "1fr 1.3fr", alignItems: "center" }}>
          <div className="media tall" style={{ aspectRatio: "3/4", maxWidth: "340px", margin: "0 auto" }}>
            <img src="images/Michi e Miglio.jpeg" alt="Stile country" />
          </div>
          <div>
            <h2 className="lead" style={{ fontSize: "50px" }}>
              Un mix irresistibile di <span className="it" style={{ color: "rgb(200, 151, 59)" }}>energia</span> e autenticità.
            </h2>
            <p className="body" style={{ fontSize: "20px" }}>
              <b>Sound deciso</b>, solide basi ritmiche, intrecci di strumenti a corda e tante armonie vocali che evocano l'atmosfera magica dei live show di Nashville — con il nostro carattere coffee-killer. Sonorità rustiche ma raffinate, capaci di trasformare ogni performance in un viaggio nel cuore del country moderno.
            </p>
            <div className="tag-strip">
              <span>Lap steel</span><span>Doublebass</span><span>Harmony vocals</span><span>Acoustic + electric</span>
            </div>
          </div>
        </div>

        <hr className="rule" style={{ margin: "clamp(56px,7vw,100px) 0" }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 36, flexWrap: "wrap", gap: 12 }}>
          <span className="eyebrow" style={{ fontSize: "15px" }}>— DOVE DIAMO IL MEGLIO</span>
          <span className="eyebrow">Locali · Festival · Eventi privati · Matrimoni</span>
        </div>

        <div className="split fade-in">
          <div>
            <h2 className="lead" style={{ fontSize: "50px" }}>
              Dove c'è <span className="it">birra</span>, lì c'è anche il country.
            </h2>
            <p className="body" style={{ fontSize: "20px" }}>
              Siamo adatti a diverse situazioni: <b>locali, festival, party ed eventi privati, matrimoni</b> e qualunque altra occasione dove lo spirito del country (e la birra) non manchino. Per rendere la serata indimenticabile.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
              <a className="btn" href="#faq">Mi date altre info? <span className="arrow"><Arrow /></span></a>
              <a className="btn btn-ghost" href="preventivo.html">Richiedi un preventivo</a>
            </div>
          </div>
          <div className="media wide">
            <img src="images/Tutti in piedi.jpeg" alt="Pubblico e live" />
          </div>
        </div>
      </div>
    </section>);

}

function Socials() {
  return (
    <section className="section" id="socials" style={{ padding: "100px 0px", backgroundColor: "var(--ck-paper-2)" }}>
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 36, flexWrap: "wrap", gap: 12 }}>
          <span className="eyebrow" style={{ fontSize: "15px" }}>— Seguiteci online</span>
          <span className="eyebrow">YOUTUBE · INSTAGRAM</span>
        </div>

        <div className="split fade-in">
          <div>
            <h2 className="lead" style={{ fontSize: "50px" }}>
              Un assaggio del nostro <span className="it" style={{ color: "var(--ck-rust)" }}>live.</span>
            </h2>
            <p className="body" style={{ fontSize: "20px", marginBottom: "32px" }}>
              Guarda un estratto dei nostri spettacoli sul nostro canale YouTube. E per restare sempre aggiornati su tutte le nostre date, le novità e le follie del backstage, non c'è posto migliore di Instagram!
            </p>
            
            <div style={{ padding: "32px", background: "var(--ck-paper)", borderRadius: "16px", border: "1px solid rgba(21,16,11,0.1)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", color: "var(--ck-rust)" }}>
                <IGIcon />
                <h3 style={{ margin: 0, fontSize: "24px", color: "var(--ck-ink)" }}>@thecoffeekillers</h3>
              </div>
              <p style={{ fontSize: "16px", marginBottom: "20px", opacity: 0.85 }}>I nostri ultimi scatti e aggiornamenti live:</p>
              
              <div style={{ display: "flex", gap: "12px", overflowX: "auto", paddingBottom: "16px", marginBottom: "16px", scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}>
                {["images/Michi sul palco.JPG", "images/Tutti in piedi.jpeg", "images/Palco 2.jpeg", "images/Strumenti palco.jpg"].map((src, i) => (
                  <a href="https://www.instagram.com/thecoffeekillers/" target="_blank" rel="noreferrer" key={i} style={{ flex: "0 0 140px", height: "140px", scrollSnapAlign: "start", borderRadius: "8px", overflow: "hidden", display: "block", position: "relative" }}>
                    <img src={src} alt="IG Post" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                  </a>
                ))}
              </div>

              <a className="btn" href="https://www.instagram.com/thecoffeekillers/" target="_blank" rel="noreferrer">Vai al profilo <span className="arrow"><Arrow/></span></a>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ borderRadius: "24px", overflow: "hidden", width: "315px", height: "560px", background: "#000", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)" }}>
              <iframe 
                width="315" 
                height="560" 
                src="https://www.youtube.com/embed/yKFP1AAzxFM" 
                title="YouTube Shorts player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>);
}

function Brands() {
  return (
    <section className="brands" id="brands" style={{ backgroundColor: "rgb(21, 16, 11)", padding: "100px 0px" }}>
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 12, marginBottom: 24 }}>
          <span className="eyebrow" style={{ color: "rgb(243, 232, 210)", fontSize: "15px" }}>— Hanno ballato con noi</span>
          <span className="eyebrow" style={{ color: "rgb(243, 232, 210)" }}>Selected clients</span>
        </div>
        <h3 style={{ color: "rgb(243, 232, 210)", fontSize: "50px" }}>Abbiamo fatto <span className="it" style={{ color: "rgb(200, 151, 59)" }}>ballare</span>.</h3>
        <div className="brand-grid">
          {BRANDS.map((b, i) =>
          <div className="brand-cell" key={b.name} style={{ backgroundColor: "rgb(21, 16, 11)", padding: "0px", borderWidth: "0px" }}>
              <img src={b.img} alt={b.name} style={{ width: "10001px", height: "130px" }} />
            </div>
          )}
        </div>
      </div>
    </section>);

}

function Lineup() {
  return (
    <section className="section" id="lineup" style={{ padding: "100px 0px" }}>
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 12, marginBottom: 24 }}>
          <span className="eyebrow" style={{ fontSize: "15px" }}>— Lineup</span>
          <span className="eyebrow">CINQUE FACCE, UNA BAND</span>
        </div>
        <div className="lineup-head fade-in">
          <h2 style={{ fontSize: "50px" }}>The <span className="it">faces</span> behind<br />the show.</h2>
          <p style={{ maxWidth: "36ch", margin: 0, color: "var(--ck-mute)" }}>
            Ci conosci già, ma ti ricordiamo che faccia abbiamo. Tecnica, ironia e troppa caffeina.
          </p>
        </div>
        <div className="lineup-grid">
          {MEMBERS.map((m, i) =>
          <article className="member fade-in" key={m.name}>
              <div className="photo">
                <img src={m.img} alt={m.name} loading="lazy" />
              </div>
              <h4 style={{ fontSize: "30px" }}>{m.name}</h4>
              <div className="role" style={{ fontSize: "15px" }}>{m.role}</div>
              <p className="bio" style={{ fontSize: "18px" }}>{m.bio}</p>
              <p className="quote">{m.quote}</p>
            </article>
          )}
        </div>
      </div>
    </section>);

}

function UpcomingShows() {
  return (
    <section className="section" id="live" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 12, marginBottom: 24 }}>
          <span className="eyebrow" style={{ fontSize: "15px" }}>— Calendario</span>
          <span className="eyebrow">Tre date, tre atmosfere</span>
        </div>
        <div className="shows-head fade-in">
          <h2>Prossimi <span className="it">live.</span></h2>
          <p style={{ maxWidth: "34ch", margin: 0, color: "var(--ck-mute)" }}>
            Vieni a cantare e a ballare con noi. Posti gratuiti, birra calda assicurata.
          </p>
        </div>
        <div className="shows-list">
          {SHOWS.map((s, i) =>
          <a className="show-row fade-in" key={i} href="#contact">
              <div>
                <div className="date">{s.day}</div>
                <span className="month">{s.month} {s.year}</span>
              </div>
              <div>
                <div className="venue">{s.venue}</div>
                <div className="place">{s.place}</div>
              </div>
              <div className="desc">{s.desc}</div>
              <div className="time">↳ {s.time}</div>
              <div className="arr"><Arrow size={14} /></div>
            </a>
          )}
        </div>
      </div>
    </section>);

}

function FAQ() {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="section faq-section" id="faq" style={{ padding: "100px 0px" }}>
      <div className="wrap faq">
        <div>
          <span className="eyebrow" style={{ fontSize: "15px" }}>— Domande frequenti</span>
          <h2 style={{ marginTop: 14, fontSize: "50px" }}>Di solito volete<br />sapere <span className="it">questo.</span></h2>
          <p className="faq-intro" style={{ fontSize: "20px" }}>
            Risposte alle classiche domande. Se non trovi la tua, scrivici e ti rispondiamo nel giro di un caffè.
          </p>
          <a className="btn" href="#contact" style={{ marginTop: 28 }}>Scrivici <span className="arrow"><Arrow /></span></a>
        </div>
        <div className="faq-list">
          {FAQS.map((f, i) =>
          <div className={"faq-item" + (open === i ? " open" : "")} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{f.q}</span><span className="plus">+</span>
              </button>
              <div className="faq-a"><div style={{ paddingRight: 40 }}>{f.a}</div></div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function Contact() {
  const [sent, setSent] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [evt, setEvt] = React.useState("Matrimonio");
  const [setting, setSetting] = React.useState("Outdoor");
  const [headcount, setHeadcount] = React.useState(120);
  const [duration, setDuration] = React.useState(2);
  const [services, setServices] = React.useState({ audio: true, lights: false, mc: false });
  const [budget, setBudget] = React.useState("1k–1.5k");
  
  const [date, setDate] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [notes, setNotes] = React.useState("");

  const eventTypes = ["Matrimonio", "Festival", "Locale", "Privato", "Corporate", "Altro"];
  const settings = ["Indoor", "Outdoor", "Sala", "Cascina", "Da definire"];
  const budgets = ["< 1.000 €", "1k–1.5k", "1.5k–2k", "2k–2.5k", "> 2.500 €"];

  function toggleService(k) {setServices((s) => ({ ...s, [k]: !s[k] }));}
  
  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const data = {
        Nome: name,
        email: email, // Chiave standard per gli autoresponder di Formspree
        _replyto: email, // Chiave esplicita di fallback
        Telefono: phone,
        Note: notes,
        Data: date,
        Location: location,
        TipoEvento: evt,
        Ambiente: setting,
        Ospiti: headcount,
        Durata: duration + "h",
        Budget: budget,
        ServiziAudio: services.audio ? "Sì" : "No",
        ServiziLuci: services.lights ? "Sì" : "No"
      };
      
      const res = await fetch("https://formspree.io/f/xdabrrrr", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      
      if (res.ok) {
        setSent(true);
        window.scrollTo({ top: document.getElementById("contact").offsetTop - 40, behavior: "smooth" });
      } else {
        alert("Ops, si è verificato un errore nell'invio. Riprova più tardi o inviaci un'email!");
      }
    } catch (err) {
      alert("Errore di connessione. Verifica la tua rete e riprova.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="contact section" id="contact" style={{ padding: "100px 0px" }}>
      <div className="wrap">
        <div className="contact-head">
          <div>
            <span className="eyebrow" style={{ fontSize: "15px" }}>— Richiedi un preventivo</span>
            <h2 style={{ fontSize: "50px" }}>Una serata con <span className="it" style={{ fontSize: "50px" }}>noi?</span></h2>
            <p className="contact-lead">
              Raccontaci il tuo evento. Ti rispondiamo con proposta, scaletta tipo e cachet personalizzato.
            </p>
          </div>
          <ul className="contact-meta">
            <li><span className="ck">Cachet</span><b>1.000 € — 2.500€ circa</b></li>
            <li><span className="ck">Email</span><b><a href="mailto:music@thecoffeekillers.com">music@thecoffeekillers.com</a></b></li>
            <li><span className="ck">WhatsApp</span><b><a href="tel:+393937011409">+39 393 7011409</a></b></li>
          </ul>
        </div>

        {sent ?
        <div className="qf-success">
            <h3>Richiesta <span className="it">ricevuta.</span> ☕️</h3>
            <p>Grazie — ti ricontattiamo con proposta dettagliata, scaletta tipo e cachet personalizzato per la data {evt.toLowerCase()} che ci hai indicato.</p>
            <button className="btn btn-ghost" onClick={() => setSent(false)}>↺ Nuova richiesta</button>
          </div> :

        <form className="quote-form" onSubmit={submit}>

            <div className="qf-grid">

              <div className="qf-field qf-field--full">
                <div className="qf-label">Tipo di evento</div>
                <div className="qf-chips">
                  {eventTypes.map((t) =>
                <button type="button" key={t}
                className={"qf-chip" + (evt === t ? " on" : "")}
                onClick={() => setEvt(t)}>{t}</button>
                )}
                </div>
              </div>

              <div className="qf-field">
                <div className="qf-label">Data presunta</div>
                <input className="qf-input" type="text" placeholder="es. 21 giugno 2026" required value={date} onChange={e => setDate(e.target.value)} />
              </div>
              <div className="qf-field">
                <div className="qf-label">Location</div>
                <input className="qf-input" type="text" placeholder="Città / provincia" required value={location} onChange={e => setLocation(e.target.value)} />
              </div>

              <div className="qf-field">
                <div className="qf-label">Ambiente</div>
                <div className="qf-chips">
                  {settings.map((s) =>
                <button type="button" key={s}
                className={"qf-chip qf-chip--sm" + (setting === s ? " on" : "")}
                onClick={() => setSetting(s)}>{s}</button>
                )}
                </div>
              </div>
              <div className="qf-field">
                <div className="qf-label">Ospiti <span className="opt">stima </span></div>
                <div className="qf-stepper" role="group" aria-label="Numero ospiti">
                  <button type="button" onClick={() => setHeadcount(Math.max(20, headcount - 20))} aria-label="Diminuisci">−</button>
                  <span className="val">{headcount}<small>pax</small></span>
                  <button type="button" onClick={() => setHeadcount(Math.min(600, headcount + 20))} aria-label="Aumenta">+</button>
                </div>
              </div>

              <div className="qf-field qf-field--full">
                <div className="qf-range-row">
                  <div className="qf-label" style={{ margin: 0 }}>Durata del live</div>
                  <div className="qf-range-val"><span className="it">{duration}h</span></div>
                </div>
                <input className="qf-range" type="range" min="1" max="3" step="0.5" value={duration} onChange={(e) => setDuration(parseFloat(e.target.value))} />
              </div>

              <div className="qf-field qf-field--full">
                <div className="qf-label">Servizi <span className="opt">selezione multipla</span></div>
                <div className="qf-tiles">
                  <label className={"qf-tile" + (services.audio ? " on" : "")}>
                    <input type="checkbox" checked={services.audio} onChange={() => toggleService("audio")} />
                    <span className="tlbl">Service audio</span>
                    <span className="tsub">Suggerito</span>
                  </label>
                  <label className={"qf-tile" + (services.lights ? " on" : "")}>
                    <input type="checkbox" checked={services.lights} onChange={() => toggleService("lights")} />
                    <span className="tlbl">Luci sceniche</span>
                    <span className="tsub">Opzionale</span>
                  </label>
                </div>
              </div>

              <div className="qf-field qf-field--full">
                <div className="qf-label">Budget orientativo <span className="opt">non vincolante</span></div>
                <div className="qf-chips">
                  {budgets.map((b) =>
                <button type="button" key={b}
                className={"qf-chip qf-chip--sm" + (budget === b ? " on" : "")}
                onClick={() => setBudget(b)}>{b}</button>
                )}
                </div>
              </div>

              <div className="qf-divider"></div>

              <div className="qf-field">
                <div className="qf-label">Nome e cognome</div>
                <input className="qf-input" type="text" placeholder="Mario Rossi" required value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div className="qf-field">
                <div className="qf-label">Email</div>
                <input className="qf-input" type="email" placeholder="mario@example.com" required value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="qf-field">
                <div className="qf-label">Telefono <span className="opt">opzionale</span></div>
                <input className="qf-input" type="tel" placeholder="+39 333 1234567" value={phone} onChange={e => setPhone(e.target.value)} />
              </div>
              <div className="qf-field">
                <div className="qf-label">Note <span className="opt">opzionale</span></div>
                <input className="qf-input" type="text" placeholder="Spazio, orari, mood…" value={notes} onChange={e => setNotes(e.target.value)} />
              </div>

            </div>

            <div className="qf-submit-row">
              <div className="qf-pricetag"></div>
              <button type="submit" className="btn" disabled={loading}>
                {loading ? "Invio in corso..." : "Invia richiesta"} <span className="arrow"><Arrow /></span>
              </button>
            </div>
          </form>
        }
      </div>
    </section>);

}

function Newsletter() {
  const [submitted, setSubmitted] = React.useState(false);
  return (
    <section className="section" style={{ paddingTop: 0, paddingBottom: "clamp(48px,6vw,80px)", opacity: "1", padding: "100px 0px" }}>
      <div className="wrap newsletter-grid">
        <div>
          <span className="eyebrow" style={{ fontSize: "15px" }}>— Newsletter</span>
          <h3 style={{ fontFamily: "var(--ck-display)", lineHeight: ".95", letterSpacing: "-0.02em", margin: "12px 0 8px", fontSize: "50px" }}>
            Ti aggiorniamo sulle <span className="it" style={{ color: "var(--ck-rust)" }}>date.</span>
          </h3>
          <p style={{ margin: 0, color: "var(--ck-mute)", maxWidth: "42ch" }}>
            Una mail al mese, mai di più. Niente spam, solo aggiornamenti e qualche dietro-le-quinte.
          </p>
        </div>
        <form className="newsletter" onSubmit={(e) => {e.preventDefault();setSubmitted(true);}}>
          {submitted ?
          <span style={{ fontFamily: "var(--ck-mono)", fontSize: 12, letterSpacing: ".15em", padding: "12px 0" }}>★ Iscritto. Ci sentiamo presto.</span> :

          <>
              <input required type="email" placeholder="la-tua-mail@example.com" />
              <button type="submit">Iscriviti</button>
            </>
          }
        </form>
      </div>
    </section>);

}

// Compact CTA block — replaces inline Contact form on homepage.
function ContactCta() {
  return (
    <section className="contact-cta section" id="contact">
      <div className="wrap">
        <div className="cta-grid">
          <div>
            <span className="eyebrow" style={{ fontSize: "15px" }}>— Richiedi un preventivo</span>
            <h2 style={{ fontSize: "50px" }}>Una serata<br/>con <span className="it">noi?</span></h2>
            <p className="cta-lead">
              Raccontaci il tuo evento. Ti rispondiamo con proposta, scaletta tipo e cachet personalizzato.
            </p>
            <div className="cta-actions">
              <a className="btn" href="preventivo.html">Richiedi un preventivo <span className="arrow"><Arrow/></span></a>
            </div>
          </div>
          <ul className="cta-meta">
            <li><span className="ck">Cachet</span><b>1.000 € — 2.500 € circa</b></li>
            <li><span className="ck">Email</span><b><a href="mailto:music@thecoffeekillers.com">music@thecoffeekillers.com</a></b></li>
            <li><span className="ck">WhatsApp</span><b><a href="tel:+393937011409">+39 393 7011409</a></b></li>
          </ul>
        </div>
      </div>
    </section>);
}

function Footer() {
  return (
    <footer style={{ padding: "100px 0px 140px" }}>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <h5>Hot Joe & The CoffeeKillers</h5>
            <div className="big" style={{ fontSize: "60px" }}>Country live<br /><span className="it" style={{ color: "var(--ck-gold)", fontSize: "60px" }}>since 2018.</span></div>
            <div className="sm-row">
              <a className="ico" href="https://www.instagram.com/thecoffeekillers/" aria-label="Instagram"><IGIcon /></a>
              <a className="ico" href="https://m.facebook.com/hotjoeandthecoffeekillers" aria-label="Facebook"><FBIcon /></a>
            </div>
          </div>
          <div>
            <h5>Contatti</h5>
            <ul>
              <li><a href="mailto:music@thecoffeekillers.com">music@thecoffeekillers.com</a></li>
              <li><a href="tel:+393937011409">+39 393 7011409</a></li>
              <li>Brescia — Italia</li>
            </ul>
          </div>
          <div>
            <h5>Naviga</h5>
            <ul>
              <li><a href="#stile">Stile</a></li>
              <li><a href="#lineup">Lineup</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="preventivo.html">Richiedi preventivo</a></li>
            </ul>
          </div>
        </div>
        <div className="copy">
          <span>© 2025 Hot Joe & The CoffeeKillers — All rights reserved.</span>
        </div>
      </div>
    </footer>);

}

// === expose to window =========================================
Object.assign(window, {
  PALETTES, TYPESETS,
  Nav, Marquee, HeroEditorial, HeroPoster, HeroCinematic,
  StyleSection, Socials, Brands, Lineup, UpcomingShows, FAQ, Contact, ContactCta, Newsletter, Footer,
  useReveal, Star, Arrow, ArrowUR, IGIcon, FBIcon
});