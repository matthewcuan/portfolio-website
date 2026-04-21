
// === src/data.jsx ===
// Portfolio content.

const PORTFOLIO = {
  name: "Matthew Cuan",
  role: "Lead Software Engineer",
  location: "United States",
  status: "OMSCS student • Secret clearance",
  tagline: "Lead software engineer building reliable systems and tools.",
  bio: [
    "I build reliable software across desktop systems, backend services, and internal tooling.",
    "I'm in Georgia Tech's OMSCS program, hold Security+, and work with AI-assisted development tools."
  ],
  email: "matthewcuan@gmail.com",
  links: {
    github: "https://github.com/matthewcuan/",
    linkedin: "https://www.linkedin.com/in/matthew-cuan/",
    resume: "matthew-cuan-resume.pdf"
  },

  experience: [
    {
      company: "90meter Inc",
      role: "Lead Software Engineer",
      period: "2025 — Present",
      summary: "Lead development of Windows middleware and desktop software deployed to 1.5M+ endpoints.",
      bullets: [
        "Led development of a PQC-compliant security applet for forward-compatible authentication.",
        "Lead a team of 3 engineers delivering desktop and security software for clients.",
        "Built a certificate workflow improvement that reduced login friction.",
        "Built a CI/CD pipeline that cut the dev-to-test cycle by about 50%."
      ],
      stack: ["C#", "C++", ".NET Framework 4.8", "WinForms", "Jenkins", "RPC", "Codex", "Claude Code", "GitHub Copilot"]
    },
    {
      company: "90meter Inc",
      role: "Software Engineer",
      period: "2023 — 2025",
      summary: "Built enterprise PKI and authentication software across web, backend, and infrastructure layers.",
      bullets: [
        "Built a secure PKI operations platform spanning 100+ Python API endpoints.",
        "Integrated SQL, LDAP/Active Directory, X.509 parsing, RBAC, and audit logging.",
        "Delivered an operator-facing dashboard with JavaScript and 20+ automated Python tests.",
        "Revamped authentication software for non-domain-connected computers.",
        "Built automatic non-person entity certificate enrollment over EST."
      ],
      stack: ["Python", "JavaScript", "SQL", "LDAP/Active Directory", "nginx", "Linux"]
    }
  ],

  education: [
    {
      school: "Georgia Institute of Technology",
      program: "M.S. Computer Science (OMSCS), AI specialization",
      period: "Expected 2027",
      details: ["Currently enrolled"]
    },
    {
      school: "University of California, Berkeley",
      program: "Coursework in data structures, software engineering, and programming in R",
      period: "Graduated May 2022",
      details: [
        "Computational Structures in Data Science (CS88)",
        "Data Structures and Programming Methodology (CS61BL)",
        "Introduction to Software Engineering (CS169A)",
        "Introduction to Programming in R (STAT33A)"
      ]
    }
  ],

  projects: [
    {
      id: "chess",
      name: "Chess with Friends",
      year: "2023",
      kind: "Side project",
      tag: "Full stack",
      blurb: "Online two-player chess web app built with the MERN stack.",
      detail: "Built an online chess app with account and game storage through a RESTful API, bidirectional sockets for live multiplayer gameplay, and chat functionality for active games.",
      stack: ["JavaScript", "MongoDB", "React", "Node", "WebSocket", "HTML", "CSS"],
      role: "Developer",
      status: "Live",
      link: "https://melodious-speculoos-b36439.netlify.app/"
    },
    {
      id: "web-design",
      name: "Web Design Projects",
      year: "2023",
      kind: "Side project",
      tag: "Responsive design",
      blurb: "Responsive web design projects completed through freeCodeCamp.",
      detail: "A collection of projects created while completing freeCodeCamp's Responsive Web Design Certificate.",
      stack: ["HTML", "CSS"],
      role: "Developer",
      status: "Certificate projects",
      link: "https://www.freecodecamp.org/certification/matthew-cuan/responsive-web-design"
    },
    {
      id: "lunar-pandemic",
      name: "Lunar Pandemic 2061",
      year: "2022",
      kind: "Side project",
      tag: "Game engine",
      blurb: "2D tile-based world exploration engine completed with pair programming.",
      detail: "Implemented path-finding algorithms for zombie bots, procedural generation for world creation, and state persistence for saved games.",
      stack: ["Java"],
      role: "Developer",
      status: "Demo",
      link: "https://www.youtube.com/watch?v=2oU4z1A3X08&ab_channel=MatthewCuan"
    },
    {
      id: "chrome-extension",
      name: "ChatGPT Wiki Extension",
      year: "2023",
      kind: "Side project",
      tag: "Browser extension",
      blurb: "Chrome extension that summarizes Wikipedia article introductions into two short bullet points using ChatGPT.",
      detail: "Built a browser extension that sends Wikipedia article introductions to the OpenAI API and returns concise summaries directly in the page workflow.",
      stack: ["JavaScript", "OpenAI API", "HTML", "CSS"],
      role: "Developer",
      status: "Open source",
      link: "https://github.com/matthewcuan/gpt-wiki-extension"
    }
  ],

  writing: [],

  stack: {
    "Languages": ["C#", "C++", "JavaScript", "Python", "SQL"],
    "Frameworks": [".NET", "WinForms", "React", "nginx"],
    "Tools": ["Jenkins", "AWS", "Codex", "Claude Code", "GitHub Copilot"],
    "Credentials": ["CompTIA Security+", "US Secret Security Clearance"]
  }
};

window.PORTFOLIO = PORTFOLIO;


// === src/Hero.jsx ===
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
  const [typed, setTyped] = React.useState("");
  const full = "whoami";
  React.useEffect(() => {
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

function Hero({ data, variant, onNav }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

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

window.Hero = Hero;


// === src/About.jsx ===
// About section — short bio + tech stack grid

const aboutStyles = {
  section: {
    padding: "var(--row-gap) 0",
    position: "relative",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "minmax(220px, 1fr) 3fr",
    gap: "clamp(32px, 6vw, 96px)",
    alignItems: "start",
  },
  sectionNum: {
    fontFamily: "var(--mono)",
    fontSize: 11,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "var(--fg-dimmer)",
  },
  sectionTitle: {
    marginTop: 8,
    fontSize: 14,
    color: "var(--fg)",
    fontFamily: "var(--mono)",
  },
  bigText: {
    fontFamily: "var(--sans)",
    fontSize: "clamp(24px, 2.6vw, 40px)",
    lineHeight: 1.25,
    letterSpacing: "-0.02em",
    fontWeight: 400,
    color: "var(--fg)",
    margin: 0,
    maxWidth: 900,
  },
  bigTextSecondary: {
    marginTop: 24,
    color: "var(--fg-dim)",
  },

  stackGrid: {
    marginTop: 80,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    borderTop: "1px solid var(--line)",
  },
  stackCol: {
    padding: "32px 24px 32px 0",
    borderRight: "1px solid var(--line)",
  },
  stackColLast: { borderRight: "none" },
  stackLabel: {
    fontFamily: "var(--mono)",
    fontSize: 11,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--fg-dimmer)",
    marginBottom: 16,
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  stackDot: {
    display: "inline-block",
    width: 6, height: 6, borderRadius: "50%",
    background: "var(--accent)",
    opacity: 0.5,
  },
  stackItem: {
    fontSize: 15,
    color: "var(--fg)",
    padding: "4px 0",
  },
};

function About({ data }) {
  const stackEntries = Object.entries(data.stack);
  return (
    <section id="about" style={aboutStyles.section} data-screen-label="02 About">
      <div className="shell">
        <div style={aboutStyles.grid} data-mobile="section-grid">
          <div>
            <div style={aboutStyles.sectionNum}>§ 01</div>
            <div style={aboutStyles.sectionTitle}>About</div>
          </div>
          <div>
            <p style={aboutStyles.bigText} data-mobile="big-text">
              {data.bio[0].split(" ").map((word, i, arr) => {
                const isLead = i < 8;
                return (
                  <span key={i} style={{ color: isLead ? "var(--fg)" : undefined }}>
                    {word}{i < arr.length - 1 ? " " : ""}
                  </span>
                );
              })}
            </p>
            <p style={{ ...aboutStyles.bigText, ...aboutStyles.bigTextSecondary }} data-mobile="big-text">
              {data.bio[1]}
            </p>
          </div>
        </div>

        <div style={aboutStyles.stackGrid} data-mobile="stack-grid">
          {stackEntries.map(([label, items], idx) => (
            <div
              key={label}
              data-mobile="stack-col"
              style={{
                ...aboutStyles.stackCol,
                ...(idx === stackEntries.length - 1 ? aboutStyles.stackColLast : {}),
              }}
            >
              <div style={aboutStyles.stackLabel}>
                <span style={aboutStyles.stackDot} />
                {label}
              </div>
              {items.map((it) => (
                <div key={it} style={aboutStyles.stackItem}>{it}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.About = About;


// === src/Experience.jsx ===
// Experience timeline — editorial table with hover expand.

const expStyles = {
  section: { padding: "var(--row-gap) 0" },
  headerGrid: {
    display: "grid",
    gridTemplateColumns: "minmax(220px, 1fr) 3fr",
    gap: "clamp(32px, 6vw, 96px)",
    alignItems: "end",
    marginBottom: 56,
  },
  sectionNum: {
    fontFamily: "var(--mono)",
    fontSize: 11,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "var(--fg-dimmer)",
  },
  sectionTitle: {
    marginTop: 8,
    fontSize: 14,
    fontFamily: "var(--mono)",
    color: "var(--fg)",
  },
  heading: {
    fontSize: "clamp(32px, 4vw, 56px)",
    fontFamily: "var(--sans)",
    fontWeight: 500,
    letterSpacing: "-0.025em",
    lineHeight: 1.05,
    margin: 0,
    color: "var(--fg)",
    maxWidth: 780,
  },
  headingItalic: {
    fontFamily: "var(--serif)",
    fontStyle: "italic",
    fontWeight: 400,
    color: "var(--accent)",
  },

  table: {
    borderTop: "1px solid var(--line)",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "140px 1fr 1fr 160px",
    gap: 32,
    alignItems: "start",
    padding: "32px 0",
    borderBottom: "1px solid var(--line)",
    cursor: "pointer",
    position: "relative",
    transition: "background .2s",
  },
  rowHover: {
    background: "linear-gradient(to right, transparent, rgba(0,255,156,0.02), transparent)",
  },
  rowPeriod: {
    fontFamily: "var(--mono)",
    fontSize: 12,
    color: "var(--fg-dim)",
    paddingTop: 4,
  },
  rowCompany: {
    fontFamily: "var(--serif)",
    fontSize: 32,
    fontStyle: "italic",
    color: "var(--fg)",
    lineHeight: 1,
  },
  rowRole: {
    fontSize: 15,
    color: "var(--fg-dim)",
    paddingTop: 6,
  },
  rowIndicator: {
    textAlign: "right",
    paddingTop: 8,
    fontFamily: "var(--mono)",
    fontSize: 11,
    color: "var(--fg-dimmer)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
  expanded: {
    gridColumn: "2 / 5",
    paddingTop: 20,
    maxWidth: 760,
  },
  summary: {
    color: "var(--fg-dim)",
    fontSize: 15,
    lineHeight: 1.5,
    margin: "0 0 16px 0",
  },
  bullets: {
    listStyle: "none",
    padding: 0,
    margin: "0 0 20px 0",
  },
  bullet: {
    display: "grid",
    gridTemplateColumns: "16px 1fr",
    gap: 8,
    fontSize: 14,
    color: "var(--fg)",
    padding: "6px 0",
    lineHeight: 1.45,
  },
  bulletMark: {
    color: "var(--accent)",
    fontFamily: "var(--mono)",
    fontSize: 11,
    paddingTop: 4,
  },
  stackRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
  },
  chip: {
    fontFamily: "var(--mono)",
    fontSize: 11,
    color: "var(--fg-dim)",
    padding: "4px 10px",
    border: "1px solid var(--line-2)",
    borderRadius: 100,
  },
  educationTable: {
    borderTop: "1px solid var(--line)",
    marginTop: 72,
  },
  educationRow: {
    display: "grid",
    gridTemplateColumns: "220px 1fr 180px",
    gap: 32,
    padding: "28px 0",
    borderBottom: "1px solid var(--line)",
  },
};

function ExperienceRow({ item, isOpen, onToggle }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      data-mobile="exp-row"
      style={{
        ...expStyles.row,
        ...(hover ? expStyles.rowHover : {}),
        display: "grid",
        gridTemplateColumns: "140px 1fr 1fr 160px",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onToggle}
    >
      <div style={expStyles.rowPeriod} data-mobile="exp-period">{item.period}</div>
      <div>
        <div style={expStyles.rowCompany} data-mobile="exp-company">{item.company}</div>
      </div>
      <div style={expStyles.rowRole} data-mobile="exp-role">{item.role}</div>
      <div style={expStyles.rowIndicator} data-mobile="exp-indicator">
        {isOpen ? "— close" : "+ open"}
      </div>

      {isOpen && (
        <div style={expStyles.expanded} data-mobile="exp-expanded" onClick={(e) => e.stopPropagation()}>
          <p style={expStyles.summary}>{item.summary}</p>
          <ul style={expStyles.bullets}>
            {item.bullets.map((b, i) => (
              <li key={i} style={expStyles.bullet}>
                <span style={expStyles.bulletMark}>→</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div style={expStyles.stackRow}>
            {item.stack.map((s) => (
              <span key={s} style={expStyles.chip}>{s}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Experience({ data }) {
  const [openIdx, setOpenIdx] = React.useState(0);
  return (
    <section id="experience" style={expStyles.section} data-screen-label="03 Experience">
      <div className="shell">
        <div style={expStyles.headerGrid} data-mobile="section-grid">
          <div>
            <div style={expStyles.sectionNum}>§ 02</div>
            <div style={expStyles.sectionTitle}>Experience</div>
          </div>
          <h2 style={expStyles.heading} data-mobile="section-heading">
            Building <span style={expStyles.headingItalic}>smart card</span> software, full-stack tools, and systems that make complex workflows reliable.
          </h2>
        </div>

        <div style={expStyles.table}>
          {data.experience.map((item, i) => (
            <ExperienceRow
              key={i}
              item={item}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </div>

        <div style={expStyles.headerGrid} data-mobile="section-grid">
          <div>
            <div style={expStyles.sectionNum}>§ 03</div>
            <div style={expStyles.sectionTitle}>Education</div>
          </div>
          <h2 style={expStyles.heading} data-mobile="section-heading">
            Computer science coursework from <span style={expStyles.headingItalic}>Georgia Tech</span> and UC Berkeley.
          </h2>
        </div>

        <div style={expStyles.educationTable}>
          {data.education.map((item) => (
            <div key={item.school} style={expStyles.educationRow} data-mobile="edu-row">
              <div style={expStyles.rowCompany} data-mobile="edu-school">{item.school}</div>
              <div>
                <p style={expStyles.summary}>{item.program}</p>
                <ul style={expStyles.bullets}>
                  {item.details.map((detail) => (
                    <li key={detail} style={expStyles.bullet}>
                      <span style={expStyles.bulletMark}>→</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={expStyles.rowPeriod} data-mobile="edu-period">{item.period}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Experience = Experience;


// === src/Projects.jsx ===
// Projects grid with modal deep-dives.

const projStyles = {
  section: { padding: "var(--row-gap) 0" },
  headerGrid: {
    display: "grid",
    gridTemplateColumns: "minmax(220px, 1fr) 3fr",
    gap: "clamp(32px, 6vw, 96px)",
    alignItems: "end",
    marginBottom: 56,
  },
  sectionNum: {
    fontFamily: "var(--mono)",
    fontSize: 11,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "var(--fg-dimmer)",
  },
  sectionTitle: {
    marginTop: 8,
    fontSize: 14,
    fontFamily: "var(--mono)",
    color: "var(--fg)",
  },
  heading: {
    fontSize: "clamp(32px, 4vw, 56px)",
    fontFamily: "var(--sans)",
    fontWeight: 500,
    letterSpacing: "-0.025em",
    lineHeight: 1.05,
    margin: 0,
    color: "var(--fg)",
    maxWidth: 820,
  },
  headingItalic: {
    fontFamily: "var(--serif)",
    fontStyle: "italic",
    fontWeight: 400,
    color: "var(--accent)",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gap: 20,
  },
  card: {
    position: "relative",
    background: "var(--bg-2)",
    border: "1px solid var(--line)",
    borderRadius: 4,
    padding: 28,
    cursor: "pointer",
    transition: "border-color .25s ease, transform .25s ease, background .25s ease",
    minHeight: 280,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  cardLg: { gridColumn: "span 7", minHeight: 360 },
  cardSm: { gridColumn: "span 5", minHeight: 360 },
  cardMd: { gridColumn: "span 4" },
  cardMd2: { gridColumn: "span 4" },
  cardMd3: { gridColumn: "span 4" },
  cardWide: { gridColumn: "span 6" },

  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    fontFamily: "var(--mono)",
    fontSize: 11,
    color: "var(--fg-dimmer)",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
  },
  cardTag: {
    color: "var(--accent)",
  },
  cardName: {
    fontFamily: "var(--serif)",
    fontStyle: "italic",
    fontSize: 44,
    lineHeight: 1,
    color: "var(--fg)",
    marginTop: 40,
    letterSpacing: "-0.01em",
  },
  cardBlurb: {
    marginTop: 16,
    color: "var(--fg-dim)",
    fontSize: 14,
    lineHeight: 1.5,
    maxWidth: 440,
  },
  cardBottom: {
    marginTop: 24,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  cardStack: {
    display: "flex",
    flexWrap: "wrap",
    gap: 6,
    maxWidth: "70%",
  },
  chipSmall: {
    fontFamily: "var(--mono)",
    fontSize: 10,
    color: "var(--fg-dim)",
    padding: "3px 8px",
    border: "1px solid var(--line-2)",
    borderRadius: 100,
  },
  cardArrow: {
    fontFamily: "var(--mono)",
    fontSize: 18,
    color: "var(--fg)",
    border: "1px solid var(--line-2)",
    width: 40, height: 40,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    transition: "transform .25s ease, border-color .25s ease, background .25s ease, color .25s ease",
  },

  // Decorative dot grid on feature card
  dots: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
    backgroundSize: "12px 12px",
    opacity: 0.6,
    maskImage: "radial-gradient(ellipse at top right, rgba(0,0,0,0.8), transparent 70%)",
    WebkitMaskImage: "radial-gradient(ellipse at top right, rgba(0,0,0,0.8), transparent 70%)",
  },

  // Modal
  overlay: {
    position: "fixed", inset: 0,
    background: "rgba(0,0,0,0.82)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    animation: "fadeIn .2s ease",
  },
  modal: {
    background: "var(--bg-2)",
    border: "1px solid var(--line-2)",
    borderRadius: 6,
    maxWidth: 820,
    width: "100%",
    maxHeight: "85vh",
    overflow: "auto",
    padding: 48,
    position: "relative",
  },
  modalClose: {
    position: "absolute",
    top: 16, right: 16,
    fontFamily: "var(--mono)",
    fontSize: 11,
    color: "var(--fg-dim)",
    background: "transparent",
    border: "1px solid var(--line-2)",
    padding: "6px 12px",
    borderRadius: 100,
    cursor: "pointer",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
  modalLabel: {
    fontFamily: "var(--mono)",
    fontSize: 11,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "var(--accent)",
    marginBottom: 16,
  },
  modalTitle: {
    fontFamily: "var(--serif)",
    fontStyle: "italic",
    fontSize: 64,
    lineHeight: 1,
    color: "var(--fg)",
    margin: "0 0 24px 0",
    letterSpacing: "-0.02em",
  },
  modalMeta: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 24,
    padding: "24px 0",
    margin: "24px 0",
    borderTop: "1px solid var(--line)",
    borderBottom: "1px solid var(--line)",
  },
  modalMetaLabel: {
    fontFamily: "var(--mono)",
    fontSize: 10,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "var(--fg-dimmer)",
    marginBottom: 6,
    display: "block",
  },
  modalMetaValue: { fontSize: 14, color: "var(--fg)" },
  modalBody: {
    fontSize: 16,
    lineHeight: 1.65,
    color: "var(--fg-dim)",
  },
};

function ProjectCard({ project, layout, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      data-mobile="proj-card"
      style={{
        ...projStyles.card,
        ...layout,
        borderColor: hover ? "var(--accent-line)" : "var(--line)",
        background: hover ? "var(--bg-3)" : "var(--bg-2)",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      <div style={projStyles.dots} />
      <div style={projStyles.cardTop}>
        <span style={projStyles.cardTag}>● {project.tag}</span>
        <span>{project.year} · {project.kind}</span>
      </div>

      <div style={{ position: "relative" }}>
        <h3 style={projStyles.cardName} data-mobile="proj-name">{project.name}</h3>
        <p style={projStyles.cardBlurb} data-mobile="proj-blurb">{project.blurb}</p>
      </div>

      <div style={projStyles.cardBottom}>
        <div style={projStyles.cardStack}>
          {project.stack.slice(0, 4).map((s) => (
            <span key={s} style={projStyles.chipSmall}>{s}</span>
          ))}
        </div>
        <span
          style={{
            ...projStyles.cardArrow,
            transform: hover ? "rotate(-45deg) translate(2px, -2px)" : "rotate(-45deg)",
            borderColor: hover ? "var(--accent)" : "var(--line-2)",
            color: hover ? "var(--accent)" : "var(--fg)",
          }}
        >
          →
        </span>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  React.useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div style={projStyles.overlay} onClick={onClose}>
      <div style={projStyles.modal} data-mobile="modal" onClick={(e) => e.stopPropagation()}>
        <button style={projStyles.modalClose} onClick={onClose}>Esc · close</button>
        <div style={projStyles.modalLabel}>● {project.tag} · {project.year}</div>
        <h2 style={projStyles.modalTitle} data-mobile="modal-title">{project.name}</h2>
        <p style={{ ...projStyles.modalBody, fontSize: 19, color: "var(--fg)", margin: 0 }}>
          {project.blurb}
        </p>

        <div style={projStyles.modalMeta} data-mobile="modal-meta">
          <div>
            <span style={projStyles.modalMetaLabel}>Role</span>
            <span style={projStyles.modalMetaValue}>{project.role}</span>
          </div>
          <div>
            <span style={projStyles.modalMetaLabel}>Status</span>
            <span style={projStyles.modalMetaValue}>{project.status}</span>
          </div>
          <div>
            <span style={projStyles.modalMetaLabel}>Kind</span>
            <span style={projStyles.modalMetaValue}>{project.kind}</span>
          </div>
          <div>
            <span style={projStyles.modalMetaLabel}>Year</span>
            <span style={projStyles.modalMetaValue}>{project.year}</span>
          </div>
        </div>

        <p style={projStyles.modalBody}>{project.detail}</p>

        <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 8 }}>
          {project.stack.map((s) => (
            <span key={s} style={projStyles.chipSmall}>{s}</span>
          ))}
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            style={{ ...projStyles.modalClose, position: "static", display: "inline-block", marginTop: 32 }}
          >
            Open project
          </a>
        )}
      </div>
    </div>
  );
}

function Projects({ data }) {
  const [open, setOpen] = React.useState(null);
  const layouts = [
    { gridColumn: "span 7", minHeight: 380 },
    { gridColumn: "span 5", minHeight: 380 },
    { gridColumn: "span 4", minHeight: 300 },
    { gridColumn: "span 8", minHeight: 300 },
  ];
  return (
    <section id="projects" style={projStyles.section} data-screen-label="04 Projects">
      <div className="shell">
        <div style={projStyles.headerGrid} data-mobile="section-grid">
          <div>
            <div style={projStyles.sectionNum}>§ 03</div>
            <div style={projStyles.sectionTitle}>Selected work</div>
          </div>
          <h2 style={projStyles.heading} data-mobile="section-heading">
            Selected <span style={projStyles.headingItalic}>projects</span> across full-stack apps, browser tooling, responsive design, and game development.
          </h2>
        </div>

        <div style={projStyles.grid} data-mobile="proj-grid">
          {data.projects.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              layout={layouts[i] || layouts[2]}
              onClick={() => setOpen(p)}
            />
          ))}
        </div>
      </div>

      {open && <ProjectModal project={open} onClose={() => setOpen(null)} />}
    </section>
  );
}

window.Projects = Projects;


// === src/Contact.jsx ===
// Writing + Contact + Footer

const contactStyles = {
  writingSection: { padding: "var(--row-gap) 0" },
  headerGrid: {
    display: "grid",
    gridTemplateColumns: "minmax(220px, 1fr) 3fr",
    gap: "clamp(32px, 6vw, 96px)",
    alignItems: "end",
    marginBottom: 48,
  },
  sectionNum: {
    fontFamily: "var(--mono)",
    fontSize: 11,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "var(--fg-dimmer)",
  },
  sectionTitle: {
    marginTop: 8,
    fontSize: 14,
    fontFamily: "var(--mono)",
    color: "var(--fg)",
  },
  heading: {
    fontSize: "clamp(32px, 4vw, 56px)",
    fontFamily: "var(--sans)",
    fontWeight: 500,
    letterSpacing: "-0.025em",
    lineHeight: 1.05,
    margin: 0,
    color: "var(--fg)",
    maxWidth: 760,
  },
  headingItalic: {
    fontFamily: "var(--serif)",
    fontStyle: "italic",
    fontWeight: 400,
    color: "var(--accent)",
  },

  writingList: {
    borderTop: "1px solid var(--line)",
  },
  writingRow: {
    display: "grid",
    gridTemplateColumns: "120px 1fr auto",
    gap: 32,
    alignItems: "center",
    padding: "24px 0",
    borderBottom: "1px solid var(--line)",
    cursor: "pointer",
    transition: "padding .25s ease",
  },
  writingDate: {
    fontFamily: "var(--mono)",
    fontSize: 12,
    color: "var(--fg-dim)",
  },
  writingTitle: {
    fontSize: 20,
    fontFamily: "var(--serif)",
    fontStyle: "italic",
    color: "var(--fg)",
    lineHeight: 1.3,
  },
  writingArrow: {
    fontFamily: "var(--mono)",
    fontSize: 12,
    color: "var(--fg-dimmer)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },

  contactSection: {
    padding: "var(--row-gap) 0 120px",
    position: "relative",
  },
  contactHuge: {
    fontFamily: "var(--sans)",
    fontSize: "clamp(48px, 10vw, 160px)",
    lineHeight: 0.95,
    letterSpacing: "-0.04em",
    fontWeight: 500,
    color: "var(--fg)",
    margin: "40px 0 0 0",
  },
  contactItalic: {
    fontFamily: "var(--serif)",
    fontStyle: "italic",
    fontWeight: 400,
    color: "var(--accent)",
  },
  contactEmail: {
    display: "inline-block",
    marginTop: 32,
    fontSize: "clamp(24px, 3vw, 44px)",
    fontFamily: "var(--sans)",
    letterSpacing: "-0.02em",
    color: "var(--fg)",
    textDecoration: "underline",
    textDecorationColor: "var(--accent)",
    textUnderlineOffset: "8px",
    textDecorationThickness: "2px",
  },
  linkRow: {
    marginTop: 64,
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
  },
  linkChip: {
    fontFamily: "var(--mono)",
    fontSize: 13,
    color: "var(--fg)",
    padding: "10px 18px",
    border: "1px solid var(--line-2)",
    borderRadius: 100,
    transition: "border-color .2s, color .2s, background .2s",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
  },
  linkDot: {
    display: "inline-block",
    width: 6, height: 6, borderRadius: "50%",
    background: "var(--accent)",
  },

  footer: {
    borderTop: "1px solid var(--line)",
    padding: "32px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "var(--mono)",
    fontSize: 11,
    color: "var(--fg-dimmer)",
    letterSpacing: "0.06em",
  },
};

function Writing({ data }) {
  return (
    <section id="writing" style={contactStyles.writingSection} data-screen-label="05 Writing">
      <div className="shell">
        <div style={contactStyles.headerGrid} data-mobile="section-grid">
          <div>
            <div style={contactStyles.sectionNum}>§ 04</div>
            <div style={contactStyles.sectionTitle}>Writing</div>
          </div>
          <h2 style={contactStyles.heading} data-mobile="section-heading">
            Notes from the <span style={contactStyles.headingItalic}>field</span>.
          </h2>
        </div>

        <div style={contactStyles.writingList}>
          {data.writing.map((w, i) => (
            <WritingRow key={i} item={w} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WritingRow({ item }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      style={{
        ...contactStyles.writingRow,
        paddingLeft: hover ? 16 : 0,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={contactStyles.writingDate}>{item.date}</div>
      <div style={{ ...contactStyles.writingTitle, color: hover ? "var(--accent)" : "var(--fg)" }}>
        {item.title}
      </div>
      <div style={contactStyles.writingArrow}>
        {hover ? "read →" : "→"}
      </div>
    </div>
  );
}

function LinkChip({ children, href }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
      data-mobile="link-chip"
      style={{
        ...contactStyles.linkChip,
        borderColor: hover ? "var(--accent)" : "var(--line-2)",
        color: hover ? "var(--accent)" : "var(--fg)",
        background: hover ? "var(--accent-soft)" : "transparent",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span style={{ ...contactStyles.linkDot, opacity: hover ? 1 : 0.5 }} />
      {children}
    </a>
  );
}

function Contact({ data }) {
  return (
    <section id="contact" style={contactStyles.contactSection} data-screen-label="06 Contact">
      <div className="shell">
        <div style={contactStyles.sectionNum}>§ 05 · Contact</div>
        <h2 style={contactStyles.contactHuge} data-mobile="contact-huge">
          Let's <span style={contactStyles.contactItalic}>build</span><br/>
          something.
        </h2>
        <a href={`mailto:${data.email}`} style={contactStyles.contactEmail} data-mobile="contact-email">
          {data.email}
        </a>

        <div style={contactStyles.linkRow} data-mobile="link-row">
          <LinkChip href={data.links.github}>GitHub</LinkChip>
          <LinkChip href={data.links.linkedin}>LinkedIn</LinkChip>
          <LinkChip href={data.links.resume}>Resume</LinkChip>
        </div>
      </div>
    </section>
  );
}

function Footer({ data }) {
  return (
    <footer style={contactStyles.footer} data-screen-label="07 Footer">
      <div className="shell" data-mobile="footer-inner" style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        fontFamily: "var(--mono)",
        fontSize: 11,
        color: "var(--fg-dimmer)",
        letterSpacing: "0.06em",
      }}>
        <div>© 2026 {data.name}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", display: "inline-block", boxShadow: "0 0 8px var(--accent)" }} />
          build · {new Date().toISOString().slice(0,10)}
        </div>
      </div>
    </footer>
  );
}

window.Writing = Writing;
window.Contact = Contact;
window.Footer = Footer;


// === src/Tweaks.jsx ===
// Tweaks panel — floating bottom-right. Exposes accent, density, hero variant.

const tweakStyles = {
  toggle: {
    position: "fixed",
    bottom: 24, right: 24,
    zIndex: 200,
    background: "var(--bg-2)",
    border: "1px solid var(--line-2)",
    borderRadius: 100,
    padding: "10px 16px",
    fontFamily: "var(--mono)",
    fontSize: 12,
    color: "var(--fg)",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  panel: {
    position: "fixed",
    bottom: 80, right: 24,
    zIndex: 200,
    background: "var(--bg-2)",
    border: "1px solid var(--line-2)",
    borderRadius: 8,
    padding: 20,
    width: 280,
    fontFamily: "var(--sans)",
    boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
  },
  panelHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 16,
    borderBottom: "1px solid var(--line)",
    marginBottom: 16,
  },
  panelTitle: {
    fontFamily: "var(--mono)",
    fontSize: 11,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--fg-dim)",
  },
  group: {
    marginBottom: 16,
  },
  label: {
    fontFamily: "var(--mono)",
    fontSize: 10,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "var(--fg-dimmer)",
    marginBottom: 8,
    display: "block",
  },
  row: { display: "flex", gap: 6, flexWrap: "wrap" },
  pill: {
    fontFamily: "var(--mono)",
    fontSize: 11,
    padding: "6px 10px",
    border: "1px solid var(--line-2)",
    borderRadius: 100,
    background: "transparent",
    color: "var(--fg-dim)",
    cursor: "pointer",
    transition: "all .2s",
  },
  pillActive: {
    background: "var(--accent-soft)",
    borderColor: "var(--accent)",
    color: "var(--accent)",
  },
  swatchRow: { display: "flex", gap: 8 },
  swatch: {
    width: 28, height: 28,
    borderRadius: "50%",
    cursor: "pointer",
    border: "2px solid var(--line-2)",
    transition: "transform .15s, border-color .15s",
  },
  swatchActive: {
    borderColor: "var(--fg)",
    transform: "scale(1.1)",
  },
};

const ACCENTS = {
  green:  { hex: "#00ff9c", soft: "rgba(0,255,156,0.12)",  line: "rgba(0,255,156,0.25)" },
  orange: { hex: "#ff6a3d", soft: "rgba(255,106,61,0.12)", line: "rgba(255,106,61,0.28)" },
  violet: { hex: "#8b6bff", soft: "rgba(139,107,255,0.12)",line: "rgba(139,107,255,0.3)" },
  ice:    { hex: "#66ccff", soft: "rgba(102,204,255,0.12)",line: "rgba(102,204,255,0.28)" },
  mono:   { hex: "#fafafa", soft: "rgba(250,250,250,0.08)",line: "rgba(250,250,250,0.2)" },
};

function applyAccent(key) {
  const a = ACCENTS[key] || ACCENTS.green;
  const root = document.documentElement;
  root.style.setProperty("--accent", a.hex);
  root.style.setProperty("--accent-soft", a.soft);
  root.style.setProperty("--accent-line", a.line);
}

function applyDensity(key) {
  document.documentElement.setAttribute("data-density", key);
}

function Tweaks({ state, setState }) {
  const [open, setOpen] = React.useState(false);
  const [available, setAvailable] = React.useState(false);

  React.useEffect(() => {
    const handler = (e) => {
      if (!e.data) return;
      if (e.data.type === "__activate_edit_mode") setOpen(true);
      if (e.data.type === "__deactivate_edit_mode") setOpen(false);
    };
    window.addEventListener("message", handler);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    setAvailable(true);
    return () => window.removeEventListener("message", handler);
  }, []);

  const update = (patch) => {
    const next = { ...state, ...patch };
    setState(next);
    if (patch.accent) applyAccent(patch.accent);
    if (patch.density) applyDensity(patch.density);
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: patch }, "*");
  };

  React.useEffect(() => {
    applyAccent(state.accent);
    applyDensity(state.density);
  }, []);

  if (!open) return null;

  return (
    <div style={tweakStyles.panel}>
      <div style={tweakStyles.panelHeader}>
        <div style={tweakStyles.panelTitle}>● Tweaks</div>
        <button
          onClick={() => setOpen(false)}
          style={{ background: "none", border: "none", color: "var(--fg-dim)", cursor: "pointer", fontSize: 14 }}
        >×</button>
      </div>

      <div style={tweakStyles.group}>
        <span style={tweakStyles.label}>Accent</span>
        <div style={tweakStyles.swatchRow}>
          {Object.entries(ACCENTS).map(([k, v]) => (
            <div
              key={k}
              title={k}
              style={{
                ...tweakStyles.swatch,
                background: v.hex,
                ...(state.accent === k ? tweakStyles.swatchActive : {}),
              }}
              onClick={() => update({ accent: k })}
            />
          ))}
        </div>
      </div>

      <div style={tweakStyles.group}>
        <span style={tweakStyles.label}>Density</span>
        <div style={tweakStyles.row}>
          {["compact", "default", "spacious"].map((d) => (
            <button
              key={d}
              onClick={() => update({ density: d })}
              style={{
                ...tweakStyles.pill,
                ...(state.density === d ? tweakStyles.pillActive : {}),
              }}
            >{d}</button>
          ))}
        </div>
      </div>

      <div style={tweakStyles.group}>
        <span style={tweakStyles.label}>Hero variant</span>
        <div style={tweakStyles.row}>
          {[
            ["terminal", "terminal"],
            ["editorial", "editorial"],
            ["marquee", "marquee"],
          ].map(([k, label]) => (
            <button
              key={k}
              onClick={() => update({ heroVariant: k })}
              style={{
                ...tweakStyles.pill,
                ...(state.heroVariant === k ? tweakStyles.pillActive : {}),
              }}
            >{label}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

window.Tweaks = Tweaks;
window.applyAccent = applyAccent;
window.applyDensity = applyDensity;


// === src/App.jsx ===
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
