import { useEffect, useState } from "react";

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

export { applyAccent, applyDensity };

export default function Tweaks({ state, setState }) {
  const [open, setOpen] = useState(false);
  const [, setAvailable] = useState(false);

  useEffect(() => {
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

  useEffect(() => {
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
