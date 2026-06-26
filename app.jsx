// === Coffeekillers — main App ================================

const { useState, useEffect } = React;

function App() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  useReveal();

  // apply palette + typeset CSS variables to :root
  useEffect(() => {
    const pal = PALETTES[t.palette] || PALETTES.saloon;
    const typ = TYPESETS[t.type] || TYPESETS.editorial;
    const root = document.documentElement;
    Object.entries({ ...pal, ...typ }).forEach(([k, v]) => {
      if (k.startsWith("--")) root.style.setProperty(k, v);
    });
    root.setAttribute("data-palette", t.palette);
  }, [t.palette, t.type]);

  const Hero = t.hero === "poster" ? HeroPoster
             : t.hero === "cinematic" ? HeroCinematic
             : HeroEditorial;

  return (
    <>
      <Nav/>
      <Hero/>
      <Marquee/>
      <StyleSection/>
      <Socials/>
      <Brands/>
      <Lineup/>
      <UpcomingShows/>
      <FAQ/>
      <ContactCta/>
      <Newsletter/>
      <Footer/>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Direzione visiva"/>
        <TweakRadio
          label="Hero"
          value={t.hero}
          options={[
            { value: "editorial", label: "Editorial" },
            { value: "poster", label: "Poster" },
            { value: "cinematic", label: "Cinematic" },
          ]}
          onChange={(v) => setTweak("hero", v)}
        />
        <TweakSection label="Palette"/>
        <TweakRadio
          label="Mood"
          value={t.palette}
          options={[
            { value: "saloon", label: "Saloon" },
            { value: "midnight", label: "Midnight" },
            { value: "wildflower", label: "Wildflower" },
          ]}
          onChange={(v) => setTweak("palette", v)}
        />
        <TweakSection label="Tipografia"/>
        <TweakRadio
          label="Set"
          value={t.type}
          options={[
            { value: "editorial", label: "Editorial" },
            { value: "poster", label: "Poster" },
            { value: "modern", label: "Modern" },
          ]}
          onChange={(v) => setTweak("type", v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);