// === Coffeekillers — pagina "Date" (calendario completo) ======

function DateApp() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  useReveal();
  usePageTheme(t);

  return (
    <>
      <Nav />
      <PageHero
        eyebrow="Calendario live"
        ornaments="Aggiornato di continuo"
        title={<>Tutte le date del <span className="it">2026.</span></>}
        lead="Le prossime serate confermate — locali, feste e sagre, festival ed eventi — e l'archivio delle date già suonate. Ti aspettiamo sotto il palco."
      />
      <UpcomingShows full={true} bare={true} />
      <ContactCta />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<DateApp />);
