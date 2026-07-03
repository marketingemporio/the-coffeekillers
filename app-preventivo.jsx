// === Coffeekillers — pagina "Una serata con noi?" ============

function PreventivoApp() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  useReveal();
  usePageTheme(t);

  return (
    <>
      <Nav />

      <PageHero
        eyebrow="Preventivo"
        ornaments="Risposta rapida"
        title={<>Una serata <span className="it">con noi?</span></>}
        lead="Compila il modulo qui sotto: bastano due minuti. Ti rispondiamo con proposta, scaletta tipo e cachet personalizzato per il tuo evento."
      >
        <div className="ph-foot">
          <div className="steps-grid stagger">
            <div className="step-card">
              <span className="st-num">01</span>
              <h3>Raccontaci l'evento</h3>
              <p>Tipo di serata, data, luogo e dimensione del pubblico: più dettagli ci dai, più preciso sarà il preventivo.</p>
            </div>
            <div className="step-card">
              <span className="st-num">02</span>
              <h3>Ricevi la proposta</h3>
              <p>Ti rispondiamo con cachet, scaletta tipo e i dettagli tecnici (service audio/luci incluso fino a 250 persone).</p>
            </div>
            <div className="step-card">
              <span className="st-num">03</span>
              <h3>Si suona</h3>
              <p>Confermi la data e al resto pensiamo noi: arriviamo, montiamo e facciamo ballare i tuoi ospiti.</p>
            </div>
          </div>
          <div className="assure-row rv">
            <span>Repertorio costruito sulla serata</span>
            <span>Service audio autonomo fino a 250 pax</span>
            <span>Trasferte in tutta Italia</span>
          </div>
        </div>
      </PageHero>

      <Contact />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<PreventivoApp />);
