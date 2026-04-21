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
