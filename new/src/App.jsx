import { useEffect, useState } from "react";
import About from "./About";
import { Contact, Footer, Writing } from "./Contact";
import data from "./data";
import Experience from "./Experience";
import Hero from "./Hero";
import Tweaks from "./Tweaks";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const defaults = {
  accent: "green",
  density: "compact",
  heroVariant: "terminal",
};

export default function App() {
  const [tweakState, setTweakState] = useState(defaults);

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
      <Hero data={data} variant={tweakState.heroVariant} onNav={onNav} />
      <div className="reveal"><About data={data} /></div>
      <div className="reveal"><Experience data={data} /></div>
      {data.writing.length > 0 && <div className="reveal"><Writing data={data} /></div>}
      <div className="reveal"><Contact data={data} /></div>
      <Footer data={data} />
      <Tweaks state={tweakState} setState={setTweakState} />
    </>
  );
}
