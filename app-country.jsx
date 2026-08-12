// === Coffeekillers — pagina "Il country" ======
// Pillar page SEO: i testi restano quelli approvati, il layout li mette in scena
// a capitoli (numeri, timeline delle ere, griglia strumenti, barra di lettura).

const CO_CHAPTERS = [
  { id: "origini", n: "01", label: "Le origini" },
  { id: "suono", n: "02", label: "Il suono" },
  { id: "evoluzione", n: "03", label: "L'evoluzione" },
  { id: "italia", n: "04", label: "In Italia" },
  { id: "eventi", n: "05", label: "Agli eventi" },
];

const CO_INSTRUMENTS = [
  { n: "I", name: "Chitarra acustica", desc: "La base armonica di tutto: è da lì che parte ogni canzone country." },
  { n: "II", name: "Lap steel", desc: "Il suono “piangente”, quasi vocale, che glissa tra le note: l'elemento più iconico del genere." },
  { n: "III", name: "Fiddle", desc: "Il violino country: entra nei momenti più danzanti e accende la pista." },
  { n: "IV", name: "Armonica", desc: "Il colore blues del country: poche note, tanta strada." },
  { n: "V", name: "Contrabbasso", desc: "Il battito del honky-tonk: groove asciutto che fa muovere i piedi." },
  { n: "VI", name: "La voce", desc: "Sempre al centro, sempre narrativa: nel country ogni canzone racconta una storia." },
];

const CO_ERAS = [
  { years: "'20–'40", name: "Le origini", desc: "Folk degli immigrati europei, blues, gospel e musica degli Appalachi. Con il Grand Ole Opry il country entra nelle case di tutta l'America." },
  { years: "'50–'60", name: "Honky-tonk & Nashville Sound", desc: "Il honky-tonk di Hank Williams, il suono levigato di Patsy Cline, il country-rock dei Flying Burrito Brothers." },
  { years: "Anni '90", name: "Neo-tradizionalismo", desc: "Garth Brooks, Alan Jackson e George Strait riportano il country alle radici senza rinunciare alla produzione moderna. Un periodo d'oro." },
  { years: "Oggi", name: "La nuova stagione", desc: "Da una parte il mainstream di Nashville, dall'altra Zach Top, Zac Brown Band, Chris Stapleton e Luke Combs. È qui che viviamo noi." },
];

function ChapterHead({ n, eyebrow, title, dark }) {
  return (
    <div className="rv" style={{ display: "flex", alignItems: "flex-start", gap: "clamp(18px,3vw,36px)", marginBottom: 28 }}>
      <span className={"ch-num" + (dark ? " ch-num--dark" : "")} aria-hidden="true">{n}</span>
      <div style={{ paddingTop: "clamp(4px,1vw,14px)" }}>
        <span className="eyebrow" style={{ fontSize: "14px", color: dark ? "var(--ck-gold)" : "var(--ck-rust)" }}>— {eyebrow}</span>
        <h2 style={{ margin: "10px 0 0", fontSize: "clamp(28px,4vw,48px)", lineHeight: 1.06, fontFamily: "var(--ck-display)", letterSpacing: "-0.02em" }}>{title}</h2>
      </div>
    </div>
  );
}

function CountryApp() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  useReveal();
  useReadbar();
  usePageTheme(t);

  const pStyle = (dark) => ({
    fontSize: "clamp(16px,1.8vw,19px)",
    lineHeight: 1.75,
    marginBottom: 20,
    color: dark ? undefined : "var(--ck-mute)",
    opacity: dark ? 0.9 : undefined,
  });

  return (
    <>
      <Nav />

      <PageHero
        eyebrow="Il genere"
        ornaments="Guida al country"
        title={<>Il country: musica, <span className="it">radici, vita.</span></>}
        lead="Dalle verande degli Appalachi ai grandi festival internazionali: cos'è il country, da dove viene, e perché oggi riempie i palchi anche in Italia — feste, sagre, locali e matrimoni."
        bg={{ src: "images/nashville-broadway.webp", alt: "Lower Broadway a Nashville di notte, i neon dei locali di musica country" }}
      >
        <nav className="toc-chips rise" style={{ animationDelay: ".36s" }} aria-label="Capitoli della pagina">
          {CO_CHAPTERS.map((c) => <a key={c.id} href={"#" + c.id}><span className="n">{c.n}</span>{c.label}</a>)}
        </nav>
      </PageHero>

      {/* 01 — Le origini */}
      <section className="section" id="origini">
        <div className="wrap">
          <ChapterHead n="01" eyebrow="Le origini" title="Dove nasce il country." />
          <div className="co-split">
            <div className="co-text rv">
              <p style={pStyle(false)}>Il country nasce nel Sud degli Stati Uniti nei primi decenni del Novecento, dall'incontro di tradizioni musicali diverse: il folk degli immigrati europei (soprattutto irlandesi e scozzesi), il blues afroamericano, il gospel e la musica da ballo degli Appalachi. Una musica povera, nata in casa, nelle chiese e sulle verande, che parlava di vita quotidiana — amore, lavoro, dolore, terra.</p>
              <p style={pStyle(false)}>Nashville, Tennessee, diventa la capitale mondiale del country negli anni '40 con la nascita del Grand Ole Opry, il programma radiofonico che porta la musica country nelle case di tutta l'America. Da lì in poi, Nashville diventa sinonimo di country: le sue sale di registrazione, i suoi produttori e la sua scena live costruiranno il genere così come lo conosciamo oggi.</p>
            </div>
            <figure className="co-media rv rv--right">
              <img src="images/strumenti-fila-alberi.webp" alt="Chitarre acustiche e mandolino su un prato, sotto gli alberi" loading="lazy" />
              <figcaption>Musica nata all'aperto, con poco: lo spirito è ancora quello.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 02 — Il suono */}
      <section className="section on-dark" id="suono" style={{ background: "var(--ck-ink)", color: "var(--ck-on-dark)" }}>
        <div className="wrap">
          <ChapterHead n="02" eyebrow="Il suono" title="Cosa rende il country unico." dark />
          <div className="co-split">
            <figure className="co-media rv rv--left">
              <img src="images/strumenti-palco-verde.webp" alt="Gli strumenti dei Coffeekillers pronti sul palco, immersi nel verde" loading="lazy" />
              <figcaption style={{ color: "var(--ck-on-dark)" }}>Chitarre, lap steel, armonica: il nostro palco.</figcaption>
            </figure>
            <div className="co-text rv">
              <p style={pStyle(true)}>Il country ha un suono riconoscibile che viene da una combinazione di strumenti precisa: la chitarra acustica come base armonica, la lap steel guitar (o pedal steel) come voce melodica caratteristica, il violino (fiddle) per i momenti più danzanti, il basso e la batteria per il groove, e la voce — sempre al centro, sempre narrativa.</p>
              <p style={pStyle(true)}>Ma al di là degli strumenti, ciò che distingue il country è l'attitudine: testi che raccontano storie vere, melodie dirette, un rapporto onesto con il pubblico. Non ci sono virtuosismi fini a se stessi — ogni nota serve la canzone.</p>
            </div>
          </div>
          <div className="snd-grid stagger">
            {CO_INSTRUMENTS.map((s) => (
              <div className="snd-card" key={s.name}>
                <span className="s-num">{s.n}</span>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — L'evoluzione */}
      <section className="section" id="evoluzione">
        <div className="wrap">
          <ChapterHead n="03" eyebrow="L'evoluzione" title="Dal country classico al country moderno." />
          <div className="rv" style={{ maxWidth: 820 }}>
            <p style={pStyle(false)}>Negli anni '50 e '60 il country si divide in correnti, negli anni '80 arriva il country pop di Kenny Rogers e Dolly Parton — più accessibile, ma spesso accusato di aver perso le radici. La risposta arriva negli anni '90 con il neo-tradizionalismo, e oggi il country vive una nuova stagione con un movimento che riporta il suono autentico al centro.</p>
          </div>
          <div className="era-grid stagger">
            {CO_ERAS.map((e) => (
              <div className="era" key={e.years}>
                <div className="e-years">{e.years}</div>
                <div className="e-name">{e.name}</div>
                <p>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — In Italia */}
      <section className="section on-dark" id="italia" style={{ background: "var(--ck-ink)", color: "var(--ck-on-dark)" }}>
        <div className="wrap">
          <ChapterHead n="04" eyebrow="Il country in Italia" title="In Italia il country sta esplodendo." dark />
          <div className="co-split">
            <div className="co-text rv">
              <p style={pStyle(true)}>Negli ultimi anni il country in Italia è passato da nicchia a fenomeno. Line dance nelle palestre, festival che fanno il tutto esaurito, playlist che macinano ascolti, film e serie che riportano il genere in classifica: oggi cercare una band country per una festa è normale come cercare una cover band rock.</p>
              <p style={pStyle(true)}>La spinta arriva da fuori — la scena di Nashville più forte che mai, popstar che virano al country, hit che sfondano ovunque — ma la richiesta è tutta locale: feste di paese, sagre, matrimoni, inaugurazioni ed eventi aziendali. Chi organizza una serata cerca qualcosa che faccia ballare senza escludere nessuno. Il country fa esattamente questo.</p>
              <p style={pStyle(true)}>Noi siamo su questa strada da prima che diventasse tendenza: una band country di Brescia che gira tutto il Nord Italia. Conosciamo il repertorio che funziona nelle nostre piazze, sappiamo leggere il pubblico e sappiamo quando alzare i giri. Il country funziona anche in Italia — lo vediamo ogni weekend, palco dopo palco.</p>
              <div className="tag-strip" style={{ marginTop: 20 }}>
                <span style={{ color: "rgba(238,219,190,.75)", borderColor: "rgba(238,219,190,.3)" }}>Line dance</span>
                <span style={{ color: "rgba(238,219,190,.75)", borderColor: "rgba(238,219,190,.3)" }}>Festival</span>
                <span style={{ color: "rgba(238,219,190,.75)", borderColor: "rgba(238,219,190,.3)" }}>Feste &amp; sagre</span>
                <span style={{ color: "rgba(238,219,190,.75)", borderColor: "rgba(238,219,190,.3)" }}>Locali</span>
                <span style={{ color: "rgba(238,219,190,.75)", borderColor: "rgba(238,219,190,.3)" }}>Eventi aziendali</span>
              </div>
            </div>
            <figure className="co-media rv rv--right">
              <img src="images/live-sera-pubblico.webp" alt="Hot Joe & The Coffeekillers dal vivo in Italia, palco illuminato e pubblico" loading="lazy" />
              <figcaption style={{ color: "var(--ck-on-dark)" }}>Una nostra serata: il country funziona anche qui.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 05 — Agli eventi */}
      <section className="section" id="eventi">
        <div className="wrap">
          <ChapterHead n="05" eyebrow="Perché funziona agli eventi" title="La musica che muove tutti." />
          <div className="co-split">
            <figure className="co-media rv rv--left">
              <img src="images/live-allaperto-pomeriggio.webp" alt="Il pubblico a una serata country dei Coffeekillers, all'aperto" loading="lazy" />
              <figcaption>Non musica di sottofondo: musica da vivere.</figcaption>
            </figure>
            <div className="co-text rv">
              <p style={pStyle(false)}>Il country ha una caratteristica rara: funziona per tutti. Non ha le barriere di età o di gusto che hanno altri generi. Melodie immediate, testi comprensibili, un ritmo che invita a muoversi — che si tratti di una ballad o di una party song. Non a caso il country è il genere più ascoltato negli Stati Uniti da anni.</p>
              <p style={pStyle(false)}>Per un evento — una sagra, una festa di paese, un locale, un matrimonio — il country offre qualcosa di prezioso: un'atmosfera. Non è musica di sottofondo: è musica da vivere. Il pubblico canta, balla, interagisce con la band. Il country crea comunità attorno al palco.</p>
              <p style={pStyle(false)}>Abbiamo costruito il nostro show attorno a questa idea: ogni serata è pensata per muovere le persone, non per impressionarle. Il risultato è un'energia dal vivo che raramente si trova con altri generi.</p>
              <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
                <a className="btn" href="date.html">Le nostre date 2026 <span className="arrow"><Arrow /></span></a>
                <a className="btn btn-ghost" href="faq.html">Domande frequenti</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCta />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<CountryApp />);
