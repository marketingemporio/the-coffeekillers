// === Coffeekillers — pagina "FAQ" ======

const { useEffect: useEffect_faq, useState: useState_faq } = React;

function FaqApp() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  const [open, setOpen] = useState_faq(0);
  useReveal();

  useEffect_faq(() => {
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

      <section className="section faq-section" style={{ padding: "clamp(90px,12vw,120px) 0" }}>
        <div className="wrap faq">
          <div>
            <span className="eyebrow" style={{ fontSize: "15px" }}>— Domande frequenti</span>
            <h1 className="section-title-50" style={{ marginTop: 14, color: "var(--ck-on-dark)", lineHeight: 1.02, letterSpacing: "-0.02em" }}>
              Tutto quello che ci <span className="it" style={{ color: "var(--ck-gold)" }}>chiedete.</span>
            </h1>
            <p className="faq-intro" style={{ fontSize: "clamp(16px, 2vw, 20px)" }}>
              Cachet, durata, service, spazio, trasferte: le risposte alle domande che ci fanno più spesso. Se non trovi la tua, scrivici — rispondiamo nel giro di un caffè.
            </p>
            <a className="btn" href="preventivo.html" style={{ marginTop: 28 }}>Richiedi un preventivo <span className="arrow"><Arrow /></span></a>
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
      </section>

      <ContactCta />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<FaqApp />);
