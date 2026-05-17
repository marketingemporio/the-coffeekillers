// === Coffeekillers — pagina "Una serata con noi?" ============

const { useEffect: useEffect_p } = React;

function PreventivoApp() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  useReveal();

  useEffect_p(() => {
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
      <Nav/>
      <Contact/>
      <Footer/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<PreventivoApp/>);