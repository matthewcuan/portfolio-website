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
