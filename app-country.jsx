// === Coffeekillers — pagina "Il country" ======

const { useEffect: useEffect_co } = React;

const SECTIONS = [
  {
    eyebrow: "Le origini",
    title: "Dove nasce il country.",
    body: [
      "Il country nasce nel Sud degli Stati Uniti nei primi decenni del Novecento, dall'incontro di tradizioni musicali diverse: il folk degli immigrati europei (soprattutto irlandesi e scozzesi), il blues afroamericano, il gospel e la musica da ballo degli Appalachi. Una musica povera, nata in casa, nelle chiese e sulle verande, che parlava di vita quotidiana — amore, lavoro, dolore, terra.",
      "Nashville, Tennessee, diventa la capitale mondiale del country negli anni '40 con la nascita del Grand Ole Opry, il programma radiofonico che porta la musica country nelle case di tutta l'America. Da lì in poi, Nashville diventa sinonimo di country: le sue sale di registrazione, i suoi produttori e la sua scena live costruiranno il genere così come lo conosciamo oggi.",
    ],
  },
  {
    eyebrow: "Il suono",
    title: "Cosa rende il country unico.",
    body: [
      "Il country ha un suono riconoscibile che viene da una combinazione di strumenti precisa: la chitarra acustica come base armonica, la lap steel guitar (o pedal steel) come voce melodica caratteristica, il violino (fiddle) per i momenti più danzanti, il basso e la batteria per il groove, e la voce — sempre al centro, sempre narrativa.",
      "La lap steel è forse lo strumento più iconico del country: quel suono 'piangente', quasi vocale, che glissa tra le note è immediatamente riconoscibile. I Coffeekillers la portano sul palco in ogni show, insieme all'armonica, per dare al suono quella profondità autentica che separa il country dal pop.",
      "Ma al di là degli strumenti, ciò che distingue il country è l'attitudine: testi che raccontano storie vere, melodie dirette, un rapporto onesto con il pubblico. Non ci sono virtuosismi fini a se stessi — ogni nota serve la canzone.",
    ],
  },
  {
    eyebrow: "L'evoluzione",
    title: "Dal country classico al country moderno.",
    body: [
      "Negli anni '50 e '60 il country si divide in correnti: c'è il honky-tonk di Hank Williams, il suono levigato del 'Nashville Sound' di Patsy Cline, il country-rock dei Flying Burrito Brothers. Negli anni '80 arriva il country pop con artisti come Kenny Rogers e Dolly Parton — più accessibile, ma spesso accusato di aver perso le radici.",
      "La risposta arriva negli anni '90 con il 'neo-tradizionalismo': Garth Brooks, Alan Jackson, George Strait riportano il country alle sue radici senza rinunciare alla produzione moderna. È un periodo d'oro per il genere.",
      "Oggi il country vive una nuova stagione: da una parte il mainstream di Nashville (Taylor Swift, Blake Shelton, Carrie Underwood), dall'altra un movimento neo-tradizionalista con artisti come Zach Top, Zac Brown Band, Chris Stapleton e Luke Combs che riportano il suono autentico al centro. È qui che vivono i Coffeekillers.",
    ],
  },
  {
    eyebrow: "Il country in Italia",
    title: "Un genere che attecchisce.",
    body: [
      "Il country ha una storia in Italia più lunga di quanto si pensi. Già negli anni '70 e '80 esistevano fan club e associazioni di appassionati — soprattutto in Lombardia, Piemonte e Veneto, dove la cultura americana ha sempre avuto un'influenza forte. Oggi c'è una scena vivace: festival, locali dedicati, line dancing, e soprattutto band live che portano il genere sul territorio.",
      "Il pubblico italiano del country è fedele e appassionato. Chi ama il country lo ama davvero — conosce i testi, distingue gli stili, apprezza l'autenticità. È un pubblico che si aspetta band che suonino 'vero', non imitazioni superficiali.",
      "I Coffeekillers sono nati in questo contesto: una band lombarda che suona country americano autentico, con la consapevolezza che il genere funziona anche qui — nelle feste di paese così come nei locali da concerto, nei festival così come negli eventi privati.",
    ],
  },
  {
    eyebrow: "Perché il country funziona agli eventi",
    title: "La musica che muove tutti.",
    body: [
      "Il country ha una caratteristica rara: funziona per tutti. Non ha le barriere di età o di gusto che hanno altri generi. Melodie immediate, testi comprensibili, un ritmo che invita a muoversi — che si tratti di una ballad o di una party song. Non a caso il country è il genere più ascoltato negli Stati Uniti da anni.",
      "Per un evento — una sagra, una festa di paese, un locale, un matrimonio — il country offre qualcosa di prezioso: un'atmosfera. Non è musica di sottofondo: è musica da vivere. Il pubblico canta, balla, interagisce con la band. Il country crea comunità attorno al palco.",
      "I Coffeekillers hanno costruito il loro show attorno a questa consapevolezza: ogni serata è pensata per muovere le persone, non per impressionarle. Il risultato è un'energia dal vivo che raramente si trova con altri generi.",
    ],
  },
];

function CountrySection({ sec, dark }) {
  return (
    <section
      className="section fade-in"
      style={{
        padding: "80px 0",
        background: dark ? "var(--ck-ink)" : undefined,
        color: dark ? "var(--ck-on-dark)" : undefined,
      }}
    >
      <div className="wrap" style={{ maxWidth: 800 }}>
        <span className="eyebrow" style={{ fontSize: "15px", color: dark ? "var(--ck-rust)" : undefined }}>
          {sec.eyebrow}
        </span>
        <h2 style={{ marginTop: 14, marginBottom: 32, fontSize: "clamp(26px,3.5vw,42px)", lineHeight: 1.15 }}>
          {sec.title}
        </h2>
        {sec.body.map((p, i) => (
          <p
            key={i}
            style={{
              fontSize: "clamp(16px,1.8vw,19px)",
              lineHeight: 1.75,
              marginBottom: 20,
              opacity: dark ? 0.9 : undefined,
              color: dark ? undefined : "var(--ck-mute)",
            }}
          >
            {p}
          </p>
        ))}
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
            Dalle verande degli Appalachi ai grandi festival internazionali: cos'è il country, da dove viene, e perché — cento anni dopo — riesce ancora a riempire i palchi di tutto il mondo.
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
