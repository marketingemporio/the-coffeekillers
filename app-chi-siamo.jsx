// === Coffeekillers — pagina "Chi siamo" ======

const CS_MEMBERS = [
  {
    name: "Michele Frosio",
    role: "Guitars & Lead Voice",
    img: "images/Michi 1.jpeg",
    imgAlt: "images/Michi 4.jpeg",
    bio: "La voce e la chitarra principale della band. Porta sul palco l'anima del country americano con un fraseggio vocale che richiama i grandi cantautori di Nashville, senza mai dimenticare le radici bresciane.",
    quote: "Cos'ho dimenticato oggi?",
  },
  {
    name: "Davide Miglietti",
    role: "Drums & Vocals",
    img: "images/Miglio 1.jpeg",
    imgAlt: "images/Miglio 2.jpeg",
    bio: "Il cuore ritmico dei Coffeekillers. Le sue bacchette tengono unito tutto lo show, con groove solidi che sanno essere tanto delicati nelle ballads quanto esplosivi nelle party songs.",
    quote: "Potevamo fare di meglio.",
  },
  {
    name: "Lorenzo Marini",
    role: "Keys & Harmonica",
    img: "images/Larry 1.jpeg",
    imgAlt: "images/Larry 2.jpeg",
    bio: "Tastiere e armonica: il tocco che allarga il suono della band verso le grandi produzioni di Nashville. La sua armonica è il dettaglio che trasforma una serata in un'esperienza country autentica.",
    quote: "Raga questo è troppo country!",
  },
  {
    name: "Stefano Martinelli",
    role: "Guitars & Lap Steel",
    img: "images/Ste 1.jpeg",
    imgAlt: "images/Ste 2.jpeg",
    bio: "La chitarra solista e la lap steel che firmano il sound distintivo dei Coffeekillers. Il suo stile spazia dal picking country al twang elettrico, con influenze che vanno da Brad Paisley a Chris Stapleton.",
    quote: "Lo facciamo ancora una volta?",
  },
  {
    name: "Riccardo Loda",
    role: "Bass & DoubleBass",
    img: "images/Richi 1.jpeg",
    imgAlt: "images/Richi 3.jpeg",
    bio: "Il basso e il contrabbasso che danno profondità e calore a ogni serata. Riccardo porta la tradizione del country acustico e del rockabilly direttamente sul palco, con un groove che muove i piedi.",
    quote: "Birretta?",
  },
];

const INSPIRATIONS = [
  {
    name: "Zach Top",
    tag: "Neo-tradizionale",
    img: "images/zach-top.png",
    desc: "Il country neo-tradizionale più autentico degli ultimi anni. Twang, steel guitar, canzoni vere: esattamente l'estetica che i Coffeekillers portano dal vivo.",
  },
  {
    name: "Zac Brown Band",
    tag: "Band da show",
    img: "images/zac-brown-band.jpg",
    desc: "Il riferimento per eccellenza di una band country da show: strumentisti straordinari, arrangiamenti ricchi, la capacità di suonare tanto in un piccolo locale quanto in un festival da 50.000 persone.",
  },
  {
    name: "Luke Combs",
    tag: "Country moderno",
    img: "images/luke-combs.jpg",
    desc: "Melodie immediate, testi che parlano di vita vera, un'energia live che trasforma qualsiasi platea in un'unica grande famiglia. Il modello per costruire un rapporto autentico con il pubblico.",
  },
  {
    name: "Kruse Brothers",
    tag: "Honky-tonk a due voci",
    img: "images/kruse-brothers.jpg",
    desc: "Il duo dei fratelli Kruse dall'Arizona: due voci, armonie strette e un country che tiene insieme honky-tonk classico e suono moderno. La prova che bastano poche cose fatte bene per riempire un palco.",
  },
  {
    name: "Chris Stapleton",
    tag: "Country soul",
    img: "images/chris-stapleton.jpg",
    desc: "La voce più potente del country moderno. Il suo approccio — soul, blues, country fusi insieme — è il punto di riferimento per chi vuole andare oltre la superficie del genere.",
  },
  {
    name: "Brad Paisley",
    tag: "Telecaster country",
    img: "images/brad-paisley.jpg",
    desc: "Il chitarrista country per eccellenza: virtuosismo che non toglie mai nulla alla canzone. Il suo stile di picking è nel DNA delle chitarre dei Coffeekillers.",
  },
];

function BandRow({ m, i }) {
  return (
    <article className={"bandrow rv" + (i % 2 === 1 ? " flip" : "")}>
      <div className="b-photo-wrap">
        <div className="b-photo">
          <img src={m.img} alt={m.name + " — " + m.role} loading="lazy" />
          <img className="ph-b" src={m.imgAlt} alt="" aria-hidden="true" loading="lazy" />
        </div>
      </div>
      <div>
        <div className="b-idx">N° 0{i + 1} — Lineup</div>
        <h3 className="b-name">{m.name}</h3>
        <div className="b-role">{m.role}</div>
        <p className="b-bio">{m.bio}</p>
        <p className="b-quote">“{m.quote}”</p>
      </div>
    </article>
  );
}

function InspirationCard({ ins }) {
  return (
    <div className="inspiration-card">
      <div className="inspiration-photo">
        <img src={ins.img} alt={ins.name} loading="lazy" />
      </div>
      <div className="inspiration-body">
        <span className="inspiration-tag">{ins.tag}</span>
        <div className="inspiration-name">{ins.name}</div>
        <p className="inspiration-desc">{ins.desc}</p>
      </div>
    </div>
  );
}

function ChiSiamoApp() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  useReveal();
  usePageTheme(t);

  return (
    <>
      <Nav />

      <PageHero
        eyebrow="La band · Brescia"
        ornaments="Since 2018"
        title={<>Hot Joe &amp; The <span className="it">Coffeekillers.</span></>}
        lead="Una band country live nata a Brescia, cresciuta sul palco. Più di 200 live all'attivo, musicisti con storie diverse, un unico filo rosso: il country americano suonato con la testa e con il cuore."
        photo={{ src: "images/band-fiume-v1.webp", alt: "Hot Joe & The Coffeekillers al completo in riva al fiume, al tramonto", badge: "★ La band al completo", ratio: "4/4.6" }}
      >
        <div className="ph-foot">
          <div className="stat-row stagger" style={{ borderTop: 0, paddingTop: 0, marginTop: 0 }}>
            <div className="stat"><div className="num"><CountUp to={7} suffix="" /></div><div className="lbl">Anni di palco</div></div>
            <div className="stat"><div className="num"><CountUp to={200} prefix="+" /></div><div className="lbl">Live all'attivo</div></div>
            <div className="stat"><div className="num"><CountUp to={50} prefix="+" /></div><div className="lbl">Brani in repertorio</div></div>
            <div className="stat"><div className="num"><CountUp to={8} suffix="" /></div><div className="lbl">Province nel 2026</div></div>
          </div>
        </div>
      </PageHero>

      {/* Storia */}
      <section className="section" style={{ background: "var(--ck-ink)", color: "var(--ck-on-dark)" }}>
        <div className="wrap">
          <SectionHead left="La storia" right="Brescia → Nashville" dark />
          <div className="split">
            <div className="rv">
              <h2 style={{ marginTop: 0, fontSize: "clamp(30px,4.5vw,54px)", lineHeight: 1.02, fontFamily: "var(--ck-display)", letterSpacing: "-0.02em" }}>
                Da Brescia a <span className="it" style={{ color: "var(--ck-gold)" }}>Nashville</span> (di spirito).
              </h2>
              <p className="pullquote" style={{ marginTop: 32 }}>
                “Serietà musicale, ma mai prendersi <span className="accent">troppo sul serio</span>.”
              </p>
            </div>
            <div className="story-steps rv" style={{ animationDelay: ".1s" }}>
              <div className="story-step">
                <span className="ss-key">Le radici</span>
                <div>
                  <h3 className="ss-title">Background diversi, una passione sola</h3>
                  <p>I Coffeekillers nascono dall'incontro di musicisti con background diversi — rock, jazz, folk, classica — accomunati dalla passione per il country americano autentico. Non la versione pop da classifica, ma il country con le radici a vista: twang di chitarra, contrabbasso, armonica e voci che si intrecciano.</p>
                </div>
              </div>
              <div className="story-step">
                <span className="ss-key">Il nome</span>
                <div>
                  <h3 className="ss-title">Una moka e un amaro</h3>
                  <p>La routine delle prove è sempre stata la stessa: una moka di caffè bollente (“Hot Joe” in slang americano) e un bicchierino di amaro a fine serata (gli ammazzacaffè, “the Coffeekillers”). Un rituale che dice tutto sul carattere della band.</p>
                </div>
              </div>
              <div className="story-step">
                <span className="ss-key">Oggi</span>
                <div>
                  <h3 className="ss-title">Una band da show vera</h3>
                  <p>In pochi anni la band ha costruito un repertorio di oltre 50 canzoni — tra cover dei grandi nomi e arrangiamenti originali — e una reputazione da band da show: capace di muovere il pubblico in un locale da 80 persone così come su un palco da festival.</p>
                </div>
              </div>
            </div>
          </div>
          <figure className="story-photo rv">
            <img src="images/nashville-broadway.jpg" alt="Lower Broadway a Nashville di notte, con le insegne al neon dei locali di musica country" loading="lazy" style={{ objectPosition: "center 55%" }} />
            <figcaption>Lower Broadway, Nashville — la strada dove il country suona dal vivo ogni sera. Il nostro punto di riferimento, a 8.000 km da Brescia.</figcaption>
          </figure>
        </div>
      </section>

      {/* Ispirazioni */}
      <section className="section">
        <div className="wrap">
          <SectionHead left="Le radici" right="Sei maestri" />
          <div className="lineup-head rv">
            <h2 className="section-title-50">Da chi <span className="it">impariamo.</span></h2>
            <p style={{ maxWidth: "42ch", margin: 0, color: "var(--ck-mute)" }}>
              Il suono dei Coffeekillers non viene dal nulla. Questi sono gli artisti che hanno costruito il nostro gusto e il nostro modo di stare sul palco.
            </p>
          </div>
          <div className="inspirations-grid stagger">
            {INSPIRATIONS.map((ins, i) => <InspirationCard key={i} ins={ins} />)}
          </div>
        </div>
      </section>

      {/* Formazione */}
      <section className="section" style={{ background: "var(--ck-paper-2)" }}>
        <div className="wrap">
          <SectionHead left="La formazione" right="Cinque facce, una band" />
          <div className="lineup-head rv">
            <h2 className="section-title-50">Chi c'è <span className="it">sul palco.</span></h2>
            <p style={{ maxWidth: "38ch", margin: 0, color: "var(--ck-mute)" }}>
              Tecnica, ironia e troppa caffeina. Passa il mouse sulle foto per conoscerci meglio.
            </p>
          </div>
          <div className="band-list">
            {CS_MEMBERS.map((m, i) => <BandRow key={m.name} m={m} i={i} />)}
          </div>
        </div>
      </section>

      <ContactCta />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ChiSiamoApp />);
