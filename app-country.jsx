// === Coffeekillers — pagina "Il country" ======

const { useEffect: useEffect_co } = React;

const SECTIONS = [
  {
    eyebrow: "Le origini",
    title: "Dove nasce il country.",
    img: "images/nashville-skyline.jpg",
    imgAlt: "Nashville, Tennessee — la capitale del country",
    imgSide: "right",
    caption: "Nashville, Tennessee — la capitale mondiale del country.",
    body: [
      "Il country nasce nel Sud degli Stati Uniti nei primi decenni del Novecento, dall'incontro di tradizioni musicali diverse: il folk degli immigrati europei (soprattutto irlandesi e scozzesi), il blues afroamericano, il gospel e la musica da ballo degli Appalachi. Una musica povera, nata in casa, nelle chiese e sulle verande, che parlava di vita quotidiana — amore, lavoro, dolore, terra.",
      "Nashville, Tennessee, diventa la capitale mondiale del country negli anni '40 con la nascita del Grand Ole Opry, il programma radiofonico che porta la musica country nelle case di tutta l'America. Da lì in poi, Nashville diventa sinonimo di country: le sue sale di registrazione, i suoi produttori e la sua scena live costruiranno il genere così come lo conosciamo oggi.",
    ],
  },
  {
    eyebrow: "Il suono",
    title: "Cosa rende il country unico.",
    img: "images/Strumenti palco.jpg",
    imgAlt: "Gli strumenti dei Coffeekillers sul palco",
    imgSide: "left",
    caption: "Chitarre, lap steel, armonica: il nostro palco.",
    body: [
      "Il country ha un suono riconoscibile che viene da una combinazione di strumenti precisa: la chitarra acustica come base armonica, la lap steel guitar (o pedal steel) come voce melodica caratteristica, il violino (fiddle) per i momenti più danzanti, il basso e la batteria per il groove, e la voce — sempre al centro, sempre narrativa.",
      "La lap steel è forse lo strumento più iconico del country: quel suono 'piangente', quasi vocale, che glissa tra le note è immediatamente riconoscibile. Noi la portiamo sul palco in ogni show, insieme all'armonica, per dare al suono quella profondità autentica che separa il country dal pop.",
      "Ma al di là degli strumenti, ciò che distingue il country è l'attitudine: testi che raccontano storie vere, melodie dirette, un rapporto onesto con il pubblico. Non ci sono virtuosismi fini a se stessi — ogni nota serve la canzone.",
    ],
  },
  {
    eyebrow: "L'evoluzione",
    title: "Dal country classico al country moderno.",
    body: [
      "Negli anni '50 e '60 il country si divide in correnti: c'è il honky-tonk di Hank Williams, il suono levigato del 'Nashville Sound' di Patsy Cline, il country-rock dei Flying Burrito Brothers. Negli anni '80 arriva il country pop con artisti come Kenny Rogers e Dolly Parton — più accessibile, ma spesso accusato di aver perso le radici.",
      "La risposta arriva negli anni '90 con il 'neo-tradizionalismo': Garth Brooks, Alan Jackson, George Strait riportano il country alle sue radici senza rinunciare alla produzione moderna. È un periodo d'oro per il genere.",
      "Oggi il country vive una nuova stagione: da una parte il mainstream di Nashville (Taylor Swift, Blake Shelton, Carrie Underwood), dall'altra un movimento neo-tradizionalista con artisti come Zach Top, Zac Brown Band, Chris Stapleton e Luke Combs che riportano il suono autentico al centro. È qui che viviamo noi.",
    ],
  },
  {
    eyebrow: "Il country in Italia",
    title: "In Italia il country sta esplodendo.",
    img: "images/Palco 3.jpeg",
    imgAlt: "Hot Joe & The Coffeekillers dal vivo in Italia",
    imgSide: "right",
    caption: "Una nostra serata: il country funziona anche qui.",
    body: [
      "Negli ultimi anni il country in Italia è passato da nicchia a fenomeno. Line dance nelle palestre, festival che fanno il tutto esaurito, playlist che macinano ascolti, film e serie che riportano il genere in classifica: oggi cercare una band country per una festa è normale come cercare una cover band rock.",
      "La spinta arriva da fuori — la scena di Nashville più forte che mai, popstar che virano al country, hit che sfondano ovunque — ma la richiesta è tutta locale: feste di paese, sagre, matrimoni, inaugurazioni ed eventi aziendali. Chi organizza una serata cerca qualcosa che faccia ballare senza escludere nessuno. Il country fa esattamente questo.",
      "Noi siamo su questa strada da prima che diventasse tendenza: una band country di Brescia che gira tutto il Nord Italia. Conosciamo il repertorio che funziona nelle nostre piazze, sappiamo leggere il pubblico e sappiamo quando alzare i giri. Il country funziona anche in Italia — lo vediamo ogni weekend, palco dopo palco.",
    ],
  },
  {
    eyebrow: "Perché il country funziona agli eventi",
    title: "La musica che muove tutti.",
    img: "images/Palco 2.jpeg",
    imgAlt: "Il pubblico a una serata dei Coffeekillers",
    imgSide: "left",
    caption: "Non musica di sottofondo: musica da vivere.",
    body: [
      "Il country ha una caratteristica rara: funziona per tutti. Non ha le barriere di età o di gusto che hanno altri generi. Melodie immediate, testi comprensibili, un ritmo che invita a muoversi — che si tratti di una ballad o di una party song. Non a caso il country è il genere più ascoltato negli Stati Uniti da anni.",
      "Per un evento — una sagra, una festa di paese, un locale, un matrimonio — il country offre qualcosa di prezioso: un'atmosfera. Non è musica di sottofondo: è musica da vivere. Il pubblico canta, balla, interagisce con la band. Il country crea comunità attorno al palco.",
      "Abbiamo costruito il nostro show attorno a questa idea: ogni serata è pensata per muovere le persone, non per impressionarle. Il risultato è un'energia dal vivo che raramente si trova con altri generi.",
    ],
  },
];

function CountrySection({ sec, dark }) {
  const bg = dark ? "var(--ck-ink)" : undefined;
  const col = dark ? "var(--ck-on-dark)" : undefined;
  const eyebrowCol = dark ? "var(--ck-rust)" : undefined;
  const pStyle = {
    fontSize: "clamp(16px,1.8vw,19px)",
    lineHeight: 1.75,
    marginBottom: 20,
    opacity: dark ? 0.9 : undefined,
    color: dark ? undefined : "var(--ck-mute)",
  };

  // sezione solo testo (centrata)
  if (!sec.img) {
    return (
      <section className="section fade-in" style={{ padding: "80px 0", background: bg, color: col }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <span className="eyebrow" style={{ fontSize: "15px", color: eyebrowCol }}>{sec.eyebrow}</span>
          <h2 style={{ marginTop: 14, marginBottom: 32, fontSize: "clamp(26px,3.5vw,42px)", lineHeight: 1.15 }}>{sec.title}</h2>
          {sec.body.map((p, i) => <p key={i} style={pStyle}>{p}</p>)}
        </div>
      </section>
    );
  }

  // sezione con foto (layout alternato immagine/testo)
  const media = (
    <figure className="co-media" key="m">
      <img src={sec.img} alt={sec.imgAlt} loading="lazy" />
      {sec.caption && <figcaption style={{ color: col }}>{sec.caption}</figcaption>}
    </figure>
  );
  const text = (
    <div className="co-text" key="t">
      <span className="eyebrow" style={{ fontSize: "15px", color: eyebrowCol }}>{sec.eyebrow}</span>
      <h2 style={{ marginTop: 14, marginBottom: 24, fontSize: "clamp(26px,3.5vw,42px)", lineHeight: 1.15 }}>{sec.title}</h2>
      {sec.body.map((p, i) => <p key={i} style={pStyle}>{p}</p>)}
    </div>
  );

  return (
    <section className="section fade-in" style={{ padding: "80px 0", background: bg, color: col }}>
      <div className="wrap">
        <div className="co-split">
          {sec.imgSide === "left" ? [media, text] : [text, media]}
        </div>
      </div>
    </section>
  );
}

function CountryApp() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  useReveal();

  useEffect_co(() => {
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
      <section className="section" style={{ paddingTop: "80px", paddingBottom: "60px" }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <span className="eyebrow" style={{ fontSize: "15px" }}>— Il genere</span>
          <h1 className="section-title-50" style={{ marginTop: 14, maxWidth: "18ch" }}>
            Il country: musica, <span className="it">radici, vita.</span>
          </h1>
          <p style={{ maxWidth: "54ch", fontSize: "clamp(17px,2.2vw,22px)", color: "var(--ck-mute)", marginTop: 24, lineHeight: 1.65 }}>
            Dalle verande degli Appalachi ai grandi festival internazionali: cos'è il country, da dove viene, e perché oggi riempie i palchi anche in Italia — feste, sagre, locali e matrimoni.
          </p>
        </div>
      </section>

      {SECTIONS.map((sec, i) => (
        <CountrySection key={i} sec={sec} dark={i % 2 === 1} />
      ))}

      <ContactCta />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<CountryApp />);
