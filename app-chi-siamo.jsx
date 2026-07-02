// === Coffeekillers — pagina "Chi siamo" ======

const { useEffect: useEffect_cs } = React;

const MEMBERS = [
  {
    name: "Michele Frosio",
    role: "Guitars & Lead Voice",
    img: "images/Michi 1.jpeg",
    bio: "La voce e la chitarra principale della band. Porta sul palco l'anima del country americano con un fraseggio vocale che richiama i grandi cantautori di Nashville, senza mai dimenticare le radici bresciane.",
  },
  {
    name: "Davide Miglietti",
    role: "Drums & Vocals",
    img: "images/Miglio 1.jpeg",
    bio: "Il cuore ritmico dei Coffeekillers. Le sue bacchette tengono unito tutto lo show, con groove solidi che sanno essere tanto delicati nelle ballads quanto esplosivi nelle party songs.",
  },
  {
    name: "Lorenzo Marini",
    role: "Keys & Harmonica",
    img: "images/Larry 1.jpeg",
    bio: "Tastiere e armonica: il tocco che allarga il suono della band verso le grandi produzioni di Nashville. La sua armonica è il dettaglio che trasforma una serata in un'esperienza country autentica.",
  },
  {
    name: "Stefano Martinelli",
    role: "Guitars & Lap Steel",
    img: "images/Ste 1.jpeg",
    bio: "La chitarra solista e la lap steel che firmano il sound distintivo dei Coffeekillers. Il suo stile spazia dal picking country al twang elettrico, con influenze che vanno da Brad Paisley a Chris Stapleton.",
  },
  {
    name: "Riccardo Loda",
    role: "Bass & DoubleBass",
    img: "images/Richi 1.jpeg",
    bio: "Il basso e il contrabbasso che danno profondità e calore a ogni serata. Riccardo porta la tradizione del country acustico e del rockabilly direttamente sul palco, con un groove che muove i piedi.",
  },
];

const INSPIRATIONS = [
  {
    name: "Zach Top",
    img: "images/zach-top.png",
    desc: "Il country neo-tradizionale più autentico degli ultimi anni. Twang, steel guitar, canzoni vere: esattamente l'estetica che i Coffeekillers portano dal vivo.",
  },
  {
    name: "Zac Brown Band",
    img: "images/zac-brown-band.jpg",
    desc: "Il riferimento per eccellenza di una band country da show: strumentisti straordinari, arrangiamenti ricchi, la capacità di suonare tanto in un piccolo locale quanto in un festival da 50.000 persone.",
  },
  {
    name: "Luke Combs",
    img: "images/luke-combs.jpg",
    desc: "Melodie immediate, testi che parlano di vita vera, un'energia live che trasforma qualsiasi platea in un'unica grande famiglia. Il modello per costruire un rapporto autentico con il pubblico.",
  },
  {
    name: "Kruse Brothers",
    img: "images/kruse-brothers.jpg",
    desc: "Il duo dei fratelli Kruse dall'Arizona: due voci, armonie strette e un country che tiene insieme honky-tonk classico e suono moderno. La prova che bastano poche cose fatte bene per riempire un palco.",
  },
  {
    name: "Chris Stapleton",
    img: "images/chris-stapleton.jpg",
    desc: "La voce più potente del country moderno. Il suo approccio — soul, blues, country fusi insieme — è il punto di riferimento per chi vuole andare oltre la superficie del genere.",
  },
  {
    name: "Brad Paisley",
    img: "images/brad-paisley.jpg",
    desc: "Il chitarrista country per eccellenza: virtuosismo che non toglie mai nulla alla canzone. Il suo stile di picking è nel DNA delle chitarre dei Coffeekillers.",
  },
];

function MemberCard({ m }) {
  return (
    <div className="member-card">
      <div className="member-photo">
        <img src={m.img} alt={m.name} loading="lazy" />
      </div>
      <div className="member-info">
        <div className="member-name">{m.name}</div>
        <div className="member-role">{m.role}</div>
        <p className="member-bio">{m.bio}</p>
      </div>
    </div>
  );
}

function InspirationCard({ ins }) {
  return (
    <div className="inspiration-card">
      <div className="inspiration-photo">
        <img src={ins.img} alt={ins.name} loading="lazy" />
      </div>
      <div className="inspiration-body">
        <div className="inspiration-name">{ins.name}</div>
        <p className="inspiration-desc">{ins.desc}</p>
      </div>
    </div>
  );
}

function ChiSiamoApp() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  useReveal();

  useEffect_cs(() => {
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

      {/* Hero */}
      <section className="section" style={{ paddingTop: "80px" }}>
        <div className="wrap">
          <span className="eyebrow" style={{ fontSize: "15px" }}>— La band</span>
          <h1 className="section-title-50" style={{ marginTop: 14, maxWidth: "16ch" }}>
            Hot Joe &amp; The <span className="it">Coffeekillers.</span>
          </h1>
          <p style={{ maxWidth: "52ch", fontSize: "clamp(17px,2.2vw,22px)", color: "var(--ck-mute)", marginTop: 24, lineHeight: 1.65 }}>
            Una band country live nata a Brescia, cresciuta sul palco. Più di 200 live all'attivo, 6 musicisti con storie diverse, un unico filo rosso: il country americano suonato con la testa e con il cuore.
          </p>
        </div>
      </section>

      {/* Storia */}
      <section className="section" style={{ background: "var(--ck-ink)", color: "var(--ck-on-dark)", padding: "80px 0" }}>
        <div className="wrap">
          <div className="split fade-in">
            <div>
              <span className="eyebrow" style={{ fontSize: "15px", color: "var(--ck-rust)" }}>— La storia</span>
              <h2 style={{ marginTop: 14, fontSize: "clamp(28px,4vw,48px)", lineHeight: 1.1 }}>
                Da Brescia a <span className="it">Nashville (di spirito).</span>
              </h2>
            </div>
            <div>
              <p style={{ fontSize: "clamp(16px,1.8vw,19px)", lineHeight: 1.7, marginBottom: 20, opacity: 0.9 }}>
                I Coffeekillers nascono dall'incontro di sei musicisti con background diversi — rock, jazz, folk, classica — accomunati dalla passione per il country americano autentico. Non la versione pop da classifica, ma il country con le radici a vista: twang di chitarra, doppio basso, armonica e voci che si intrecciano.
              </p>
              <p style={{ fontSize: "clamp(16px,1.8vw,19px)", lineHeight: 1.7, marginBottom: 20, opacity: 0.9 }}>
                Il nome nasce dalla routine delle prove: una moka di caffè bollente ("<em>Hot Joe</em>" in slang americano) e un bicchierino di amaro a fine serata ("<em>the Coffeekillers</em>"). Un rituale che dice tutto sul carattere della band: serietà musicale, ma mai prendersi troppo sul serio.
              </p>
              <p style={{ fontSize: "clamp(16px,1.8vw,19px)", lineHeight: 1.7, opacity: 0.9 }}>
                In pochi anni la band ha costruito un repertorio di oltre 50 canzoni — tra cover di grandi nomi e arrangiamenti originali — e una reputazione come band da show vera: capace di muovere il pubblico in un locale da 80 persone così come su un palco da festival.
              </p>
            </div>
          </div>
          <figure className="story-photo fade-in">
            <img src="images/nashville-skyline.jpg" alt="Nashville, Tennessee — la capitale del country" loading="lazy" />
            <figcaption>Nashville, Tennessee — la capitale mondiale del country. Il nostro punto di riferimento, a 8.000 km da Brescia.</figcaption>
          </figure>
        </div>
      </section>

      {/* Ispirazioni */}
      <section className="section" style={{ padding: "80px 0" }}>
        <div className="wrap">
          <span className="eyebrow" style={{ fontSize: "15px" }}>— Le radici</span>
          <h2 className="section-title-50" style={{ marginTop: 14, marginBottom: 8 }}>
            Da chi <span className="it">impariamo.</span>
          </h2>
          <p style={{ maxWidth: "46ch", color: "var(--ck-mute)", fontSize: "clamp(16px,1.8vw,19px)", marginBottom: 48 }}>
            Il suono dei Coffeekillers non viene dal nulla. Questi sono gli artisti che hanno costruito il nostro gusto e il nostro modo di stare sul palco.
          </p>
          <div className="inspirations-grid fade-in">
            {INSPIRATIONS.map((ins, i) => <InspirationCard key={i} ins={ins} />)}
          </div>
        </div>
      </section>

      {/* Formazione */}
      <section className="section" style={{ background: "var(--ck-paper-2)", padding: "80px 0" }}>
        <div className="wrap">
          <span className="eyebrow" style={{ fontSize: "15px" }}>— La formazione</span>
          <h2 className="section-title-50" style={{ marginTop: 14, marginBottom: 48 }}>
            Sei persone, <span className="it">un suono.</span>
          </h2>
          <div className="members-list fade-in">
            {MEMBERS.map((m, i) => <MemberCard key={i} m={m} />)}
          </div>
        </div>
      </section>

      <ContactCta />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ChiSiamoApp />);
