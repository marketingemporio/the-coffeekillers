// === Coffeekillers — pagina "FAQ" ======

function FaqApp() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  const [open, setOpen] = React.useState(0);
  useReveal();
  usePageTheme(t);

  return (
    <>
      <Nav />

      <section className="section faq-section" style={{ padding: "clamp(80px,10vw,120px) 0 clamp(72px,9vw,110px)" }}>
        <div className="wrap faq">
          <div>
            <div className="orna-row rise" style={{ color: "rgba(238,219,190,.6)" }}>
              <span className="star" style={{ color: "var(--ck-gold)" }}><Star size={11} /></span>
              <span>Domande frequenti</span>
              <span className="line" style={{ background: "rgba(238,219,190,.22)" }}></span>
            </div>
            <h1 className="section-title-50 rise" style={{ marginTop: 18, color: "var(--ck-on-dark)", lineHeight: 1.02, letterSpacing: "-0.02em", animationDelay: ".12s" }}>
              Tutto quello che ci <span className="it" style={{ color: "var(--ck-gold)" }}>chiedete.</span>
            </h1>
            <p className="faq-intro rise" style={{ fontSize: "clamp(16px, 2vw, 20px)", animationDelay: ".24s" }}>
              Cachet, durata, service, spazio, trasferte: le risposte alle domande che ci fanno più spesso. Se non trovi la tua, scrivici — rispondiamo nel giro di un caffè.
            </p>
            <a className="btn rise" href="preventivo.html" style={{ marginTop: 28, animationDelay: ".34s" }}>Richiedi un preventivo <span className="arrow"><Arrow /></span></a>

            <ul className="cta-meta rise" style={{ marginTop: 40, borderColor: "rgba(238,219,190,.18)", animationDelay: ".42s" }}>
              <li style={{ borderColor: "rgba(238,219,190,.18)" }}>
                <span className="ck" style={{ color: "rgba(238,219,190,.55)" }}>Email</span>
                <b style={{ color: "var(--ck-on-dark)" }}><a href="mailto:music@thecoffeekillers.com" style={{ borderColor: "rgba(238,219,190,.3)" }}>music@thecoffeekillers.com</a></b>
              </li>
              <li style={{ borderColor: "rgba(238,219,190,.18)" }}>
                <span className="ck" style={{ color: "rgba(238,219,190,.55)" }}>WhatsApp</span>
                <b style={{ color: "var(--ck-on-dark)" }}><a href="tel:+393937011409" style={{ borderColor: "rgba(238,219,190,.3)" }}>+39 393 7011409</a></b>
              </li>
            </ul>
          </div>

          <div className="faq-list rv">
            {FAQS.map((f, i) =>
            <div className={"faq-item" + (open === i ? " open" : "")} key={i}>
                <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                  <span className="qnum">{String(i + 1).padStart(2, "0")}</span>
                  <span>{f.q}</span><span className="plus">+</span>
                </button>
                <div className="faq-a"><div style={{ paddingRight: 40, paddingLeft: 44 }}>{f.a}</div></div>
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
