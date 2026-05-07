import { useEffect, useState } from "react";

// Hero section — terminal-editorial hybrid with 3 variants.

const heroStyles = {
  wrap: {
    minHeight: "100vh",
    padding: "clamp(80px, 14vh, 160px) 0 clamp(80px, 12vh, 140px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
  },
  topBar: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 28,
    paddingBottom: 48,
  },
  nav: { display: "flex", gap: 28 },
  navLink: {
    fontFamily: "var(--mono)",
    fontSize: 12,
    color: "var(--fg-dim)",
    letterSpacing: "0.02em",
    cursor: "pointer",
    transition: "color .2s",
  },

  // Terminal variant
  prompt: {
    fontFamily: "var(--mono)",
    fontSize: 13,
    color: "var(--fg-dimmer)",
    marginBottom: 18,
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  promptDot: { color: "var(--accent)" },

  name: {
    fontFamily: "var(--sans)",
    fontWeight: 500,
    fontSize: "clamp(48px, 9vw, 136px)",
    lineHeight: 0.95,
    letterSpacing: "-0.04em",
    margin: 0,
    color: "var(--fg)",
  },
  nameItalic: {
    fontFamily: "var(--serif)",
    fontStyle: "italic",
    fontWeight: 400,
    color: "var(--accent)",
  },
  tagline: {
    marginTop: 32,
    fontSize: "clamp(16px, 1.4vw, 19px)",
    lineHeight: 1.45,
    color: "var(--fg-dim)",
    maxWidth: 620,
  },

  bottomRow: {
    marginTop: 80,
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 48,
    paddingTop: 32,
    borderTop: "1px solid var(--line)",
  },
  meta: {},
  metaLabel: {
    fontFamily: "var(--mono)",
    fontSize: 10,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "var(--fg-dimmer)",
    marginBottom: 8,
    display: "block",
  },
  metaValue: {
    fontSize: 14,
    color: "var(--fg)",
  },
  statusDot: {
    display: "inline-block",
    width: 6, height: 6, borderRadius: "50%",
    background: "var(--accent)",
    marginRight: 8,
    boxShadow: "0 0 8px var(--accent)",
  },

  scrollHint: {
    position: "absolute",
    bottom: 24,
    right: "var(--pad-x)",
    fontFamily: "var(--mono)",
    fontSize: 10,
    color: "var(--fg-dimmer)",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    writingMode: "vertical-rl",
  },

  // Marquee variant
  marqueeTrack: {
    display: "flex",
    gap: 60,
    whiteSpace: "nowrap",
    animation: "marquee 40s linear infinite",
  },
  marqueeItem: {
    fontFamily: "var(--serif)",
    fontStyle: "italic",
    fontSize: "clamp(64px, 12vw, 180px)",
    lineHeight: 1,
    color: "var(--fg)",
  },
  marqueeDot: {
    display: "inline-block",
    width: 10, height: 10, borderRadius: "50%",
    background: "var(--accent)",
    margin: "0 40px 0.3em 40px",
    verticalAlign: "middle",
  },
};

function Nav({ onNav }) {
  const items = ["experience", "contact"];
  return (
    <nav style={heroStyles.nav} data-mobile="top-nav">
      {items.map((it) => (
        <a
          key={it}
          style={heroStyles.navLink}
          onClick={() => onNav?.(it)}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-dim)")}
        >
          {String(items.indexOf(it) + 1).padStart(2, "0")} · {it}
        </a>
      ))}
    </nav>
  );
}

function MobileMenu({ data, onNav, onClose }) {
  const items = ["experience", "contact"];
  return (
    <div className="mobile-menu" onClick={onClose}>
      <button type="button" className="mobile-menu-close" onClick={onClose}>Close</button>
      {items.map((it) => (
        <a
          key={it}
          href={`#${it}`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onNav?.(it);
            onClose();
          }}
        >
          {String(items.indexOf(it) + 1).padStart(2, "0")} · {it}
        </a>
      ))}
      <a href={`mailto:${data.email}`} onClick={(e) => e.stopPropagation()}>{data.email}</a>
    </div>
  );
}

function TopBar({ data, onNav, mobileOpen, setMobileOpen }) {
  return (
    <div className="shell" style={heroStyles.topBar} data-mobile="top-bar">
      <Nav onNav={onNav} />
      <div className="mono" style={{ fontSize: 12, color: "var(--fg-dimmer)" }} data-mobile="top-meta">
        {new Date().getFullYear()} — index.01
      </div>
      <button
        type="button"
        className="mono"
        data-mobile="mobile-menu-btn"
        style={{
          display: "none",
          alignItems: "center",
          gap: 8,
          padding: "8px 14px",
          borderRadius: 100,
          border: "1px solid var(--line-2)",
          background: "transparent",
          color: "var(--fg)",
          cursor: "pointer",
          fontSize: 11,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
        aria-expanded={mobileOpen}
        aria-label="Open menu"
        onClick={() => setMobileOpen(true)}
      >
        Menu
      </button>
    </div>
  );
}

function TerminalHero({ data }) {
  const [typed, setTyped] = useState("");
  const full = "whoami";
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i++;
      setTyped(full.slice(0, i));
      if (i >= full.length) clearInterval(t);
    }, 55);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <div className="shell" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={heroStyles.prompt}>
          <span style={heroStyles.promptDot}>●</span>
          <span style={{ color: "var(--accent)" }}>~/cuan</span>
          <span>$</span>
          <span style={{ color: "var(--fg)" }}>{typed}</span>
          {typed.length < full.length && <span className="caret" />}
        </div>
        <h1 style={heroStyles.name} data-mobile="hero-name">
          {data.name.split(" ")[0]} <span style={heroStyles.nameItalic}>{data.name.split(" ").slice(1).join(" ")}</span>
        </h1>
        <p style={heroStyles.tagline} data-mobile="hero-tagline">
          {data.tagline}
        </p>
      </div>

      <div className="shell" style={heroStyles.bottomRow} data-mobile="hero-bottom">
        <div style={heroStyles.meta}>
          <span style={heroStyles.metaLabel}>Role</span>
          <span style={heroStyles.metaValue}>{data.role}</span>
        </div>
        <div style={heroStyles.meta}>
          <span style={heroStyles.metaLabel}>Based</span>
          <span style={heroStyles.metaValue}>{data.location}</span>
        </div>
        <div style={heroStyles.meta}>
          <span style={heroStyles.metaLabel}>Status</span>
          <span style={heroStyles.metaValue}>
            <span style={heroStyles.statusDot} />
            {data.status}
          </span>
        </div>
        <div style={heroStyles.meta}>
          <span style={heroStyles.metaLabel}>Mail</span>
          <span className="mono" style={{ ...heroStyles.metaValue, fontSize: 13 }}>
            {data.email}
          </span>
        </div>
      </div>
    </>
  );
}

function EditorialHero({ data }) {
  return (
    <>
      <div className="shell" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div className="label" style={{ marginBottom: 24 }}>
          Portfolio · Vol. 07 · Spring 2026
        </div>
        <h1 style={{ ...heroStyles.name, fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 400, letterSpacing: "-0.02em" }}>
          {data.name},<br/>
          <span style={{ color: "var(--accent)" }}>software</span> engineer.
        </h1>
        <p style={heroStyles.tagline} data-mobile="hero-tagline">{data.tagline}</p>
      </div>
      <div className="shell" style={heroStyles.bottomRow} data-mobile="hero-bottom">
        <div><span style={heroStyles.metaLabel}>Role</span><span style={heroStyles.metaValue}>{data.role}</span></div>
        <div><span style={heroStyles.metaLabel}>Based</span><span style={heroStyles.metaValue}>{data.location}</span></div>
        <div><span style={heroStyles.metaLabel}>Status</span><span style={heroStyles.metaValue}><span style={heroStyles.statusDot} />{data.status}</span></div>
        <div><span style={heroStyles.metaLabel}>Mail</span><span className="mono" style={{ ...heroStyles.metaValue, fontSize: 13 }}>{data.email}</span></div>
      </div>
    </>
  );
}

function MarqueeHero({ data }) {
  const phrase = (
    <>
      {data.name}
      <span style={heroStyles.marqueeDot} />
    </>
  );
  return (
    <>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden" }}>
        <div style={heroStyles.marqueeTrack}>
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} style={heroStyles.marqueeItem} data-mobile="marquee-item">
              {phrase}
            </span>
          ))}
        </div>
        <div className="shell" style={{ marginTop: 40 }}>
          <p style={{ ...heroStyles.tagline, marginTop: 0 }} data-mobile="hero-tagline">{data.tagline}</p>
        </div>
      </div>
      <div className="shell" style={heroStyles.bottomRow} data-mobile="hero-bottom">
        <div><span style={heroStyles.metaLabel}>Role</span><span style={heroStyles.metaValue}>{data.role}</span></div>
        <div><span style={heroStyles.metaLabel}>Based</span><span style={heroStyles.metaValue}>{data.location}</span></div>
        <div><span style={heroStyles.metaLabel}>Status</span><span style={heroStyles.metaValue}><span style={heroStyles.statusDot} />{data.status}</span></div>
        <div><span style={heroStyles.metaLabel}>Mail</span><span className="mono" style={{ ...heroStyles.metaValue, fontSize: 13 }}>{data.email}</span></div>
      </div>
    </>
  );
}

export default function Hero({ data, variant, onNav }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <section style={heroStyles.wrap} data-screen-label="01 Hero" data-mobile="hero-wrap">
      <TopBar data={data} onNav={onNav} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      {variant === "editorial" && <EditorialHero data={data} />}
      {variant === "marquee" && <MarqueeHero data={data} />}
      {(!variant || variant === "terminal") && <TerminalHero data={data} />}
      {mobileOpen && <MobileMenu data={data} onNav={onNav} onClose={() => setMobileOpen(false)} />}
      <div style={heroStyles.scrollHint} data-mobile="scroll-hint">scroll ↓</div>
    </section>
  );
}
