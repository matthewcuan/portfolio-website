import { useEffect, useState } from "react";

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
  const [hover, setHover] = useState(false);
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
  useEffect(() => {
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

export default function Projects({ data }) {
  const [open, setOpen] = useState(null);
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
