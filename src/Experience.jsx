import { useState } from "react";

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
  const [hover, setHover] = useState(false);
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

export default function Experience({ data }) {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section id="experience" style={expStyles.section} data-screen-label="03 Experience">
      <div className="shell">
        <div style={expStyles.headerGrid} data-mobile="section-grid">
          <div>
            <div style={expStyles.sectionNum}>§ 02</div>
            <div style={expStyles.sectionTitle}>Experience</div>
          </div>
          <h2 style={expStyles.heading} data-mobile="section-heading">
            Building <span style={expStyles.headingItalic}>desktop</span> software, backend tools, and systems that make complex workflows reliable.
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
