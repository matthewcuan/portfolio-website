// App entry — composes everything, handles reveal-on-scroll, tweak state.

function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function App() {
  const data = window.PORTFOLIO;
  const defaults = (() => {
    try {
      const raw = document.getElementById("tweak-defaults").textContent;
      const m = raw.match(/\{[\s\S]*\}/);
      return JSON.parse(m[0]);
    } catch { return { accent: "green", density: "default", heroVariant: "terminal" }; }
  })();
  const [tweakState, setTweakState] = React.useState(defaults);

  useReveal();

  const onNav = (key) => {
    const map = {
      experience: "experience",
      writing: "writing",
      contact: "contact",
    };
    const el = document.getElementById(map[key] || key);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 20;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <window.Hero data={data} variant={tweakState.heroVariant} onNav={onNav} />
      <div className="reveal"><window.About data={data} /></div>
      <div className="reveal"><window.Experience data={data} /></div>
      {/* <div className="reveal"><window.Projects data={data} /></div> */}
      {data.writing.length > 0 && <div className="reveal"><window.Writing data={data} /></div>}
      <div className="reveal"><window.Contact data={data} /></div>
      <window.Footer data={data} />
      <window.Tweaks state={tweakState} setState={setTweakState} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
