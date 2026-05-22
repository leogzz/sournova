"use client";

import { motion } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";

const valores = [
  {
    icon: "⚡",
    color: "#7B2CFF",
    nombre: "Intensidad",
    descripcion:
      "No hacemos nada a medias. Desde la primera gota hasta el último sticker, todo Sournova está diseñado para que se sienta. Ácido. Real. Sin filtro.",
  },
  {
    icon: "♡",
    color: "#FF2EA8",
    nombre: "Comunidad",
    descripcion:
      "No somos nosotros la marca. Son ustedes. Los que comparten, los que piden, los que nos dicen 'necesito más Quemón de Sandía en mi vida'. Eso somos.",
  },
  {
    icon: "★",
    color: "#38E1FF",
    nombre: "Identidad",
    descripcion:
      "Hecho en México. Con orgullo. Con caos. Con el sabor que te recuerda que ser de aquí es lo más cool que puedes ser.",
  },
];

const stats = [
  { num: "12",       lab: "Sabores"        },
  { num: "MX",       lab: "País"           },
  { num: "50K+",     lab: "Clientes"       },
  { num: "Jul '26",  lab: "Primer venta"  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: "100px 28px 60px" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 50% at 50% 60%, rgba(123,44,255,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* EST. 2026 sticker */}
        <motion.div
          initial={{ rotate: -12, scale: 0, opacity: 0 }}
          animate={{ rotate: -10, scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "backOut" }}
          style={{ position: "absolute", top: 112, right: 28, zIndex: 10 }}
          className="sticker-responsive"
        >
          <div style={{
            width: 96, height: 96, borderRadius: "50%", display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", textAlign: "center",
            background: "var(--grad-nova)", border: "4px solid rgba(255,255,255,0.3)",
            boxShadow: "0 0 40px rgba(255,46,168,0.4)",
          }}>
            <span style={{ color: "#050010", fontSize: 10, fontWeight: 900, lineHeight: 1.2 }}>EST.</span>
            <span style={{ color: "#050010", fontFamily: '"Bagel Fat One", sans-serif', fontSize: 24, lineHeight: 1 }}>2026</span>
            <span style={{ color: "#050010", fontSize: 10, fontWeight: 900 }}>MTY 🇲🇽</span>
          </div>
        </motion.div>

        <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: 900, margin: "0 auto" }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ color: "var(--violet)", fontSize: 12, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 24 }}
          >
            Quiénes somos
          </motion.p>

          {["Le hicimos", "el ácido,", "cool."].map((line, i) => (
            <motion.div
              key={line}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: [0.22,1,0.36,1] }}
            >
              <span
                style={{
                  display: "block",
                  fontFamily: '"Bagel Fat One", sans-serif',
                  fontSize: "clamp(3.5rem, 12vw, 9rem)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.01em",
                  ...(line === "cool."   ? { color: "var(--magenta)" } :
                      line === "el ácido," ? { WebkitTextStroke: "2px var(--violet)", color: "transparent" } :
                      { color: "white" }),
                }}
              >
                {line}
              </span>
            </motion.div>
          ))}

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            style={{ color: "var(--ink-dim)", fontSize: 18, maxWidth: 500, margin: "32px auto 0", lineHeight: 1.6 }}
          >
            Nacimos en México con una idea simple: los refrescos y los dulces pueden ser más salvajes, más honestos, y más nosotros.
          </motion.p>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="ticker-grad">
        <div className="ticker-grad-track">
          {[0,1].map(i => (
            <span key={i}>
              NUESTRA HISTORIA <span style={{ color: "white" }}>✦</span>{" "}
              HECHA EN MONTERREY <span style={{ color: "white" }}>✦</span>{" "}
              ÁCIDOS DESDE 2026 <span style={{ color: "white" }}>✦</span>{" "}
              SIN FILTRO <span style={{ color: "white" }}>✦</span>{" "}
              CON ORGULLO MEXICANO <span style={{ color: "white" }}>✦</span>{" "}
            </span>
          ))}
        </div>
      </div>

      {/* ── ORIGIN STORY ── */}
      <section style={{ padding: "120px 28px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <SectionReveal>
            <span style={{ color: "var(--violet)", fontSize: 12, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase" }}>La historia</span>
            <h2 style={{ fontFamily: '"Bagel Fat One", sans-serif', fontSize: "clamp(3rem, 8vw, 5rem)", color: "white", margin: "16px 0 32px", lineHeight: 0.95, letterSpacing: "-0.01em" }}>
              De un puesto en{" "}
              <span style={{ color: "var(--magenta)" }}>Monterrey</span>{" "}
              al mundo
            </h2>
            <div style={{ display: "grid", gap: 20, color: "var(--ink-dim)", lineHeight: 1.8, fontSize: 17 }}>
              <p>
                Sournova nació en 2026 cuando siete amigos en Monterrey decidieron que estaban hartos de los refrescos aburridos. Pusieron un puesto en el parque, en la calle del barranco, Cumbres 5to Sector — y lo demás es historia.
              </p>
              <p>
                La primera prueba fue un desastre. La décima fue magia. Punch Cítrico llegó al mundo en julio de 2026. En 48 horas, se agotó. Empezaron a llegar mensajes de desconocidos preguntando dónde conseguirlo.
              </p>
              <p>
                No había plan. No había inversión. Solo había sabor y actitud. Hoy Sournova tiene 12 sabores activos, una línea de gomitas que tumba webs, y merch que la gente usa con orgullo. Seguimos siendo los mismos de siempre: raros, ácidos, mexicanos, y sin disculpas.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── VALORES ── */}
      <section style={{ padding: "120px 28px", background: "rgba(255,255,255,0.02)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <SectionReveal style={{ textAlign: "center", marginBottom: 80 } as React.CSSProperties}>
            <span style={{ color: "var(--magenta)", fontSize: 12, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase" }}>En lo que creemos</span>
            <h2 style={{ fontFamily: '"Bagel Fat One", sans-serif', fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 0.95, margin: "16px 0 0", letterSpacing: "-0.01em" }}>
              Nuestros{" "}
              <span style={{ color: "var(--magenta)" }}>Valores</span>
            </h2>
          </SectionReveal>

          <div>
            {valores.map((v, i) => (
              <SectionReveal key={v.nombre} delay={i * 0.12}>
                <div style={{
                  display: "grid", gridTemplateColumns: "1fr 2fr", gap: 40,
                  padding: "48px 0",
                  borderTop: i === 0 ? "1px solid var(--border)" : undefined,
                  borderBottom: "1px solid var(--border)",
                  alignItems: "start",
                }} className="valor-row-responsive">
                  <div>
                    <div style={{
                      width: 56, height: 56, borderRadius: 16, marginBottom: 20,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: `${v.color}20`, border: `1.5px solid ${v.color}40`, fontSize: 24,
                    }}>
                      {v.icon}
                    </div>
                    <h3 style={{ fontFamily: '"Bagel Fat One", sans-serif', fontSize: "clamp(3rem, 6vw, 4.5rem)", lineHeight: 0.95, color: v.color, letterSpacing: "-0.01em" }}>
                      {v.nombre}
                    </h3>
                  </div>
                  <p style={{ color: "var(--ink-dim)", fontSize: 18, lineHeight: 1.7, paddingTop: 8 }}>
                    {v.descripcion}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{
        padding: "80px 28px",
        background: "var(--grad-nova)",
        borderTop: "1px solid rgba(255,255,255,0.2)",
      }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, textAlign: "center" }} className="stats-grid-responsive">
            {stats.map(({ num, lab }, i) => (
              <SectionReveal key={lab} delay={i * 0.1}>
                <div style={{ fontFamily: '"Bagel Fat One", sans-serif', fontSize: "clamp(3rem, 8vw, 5rem)", color: "#050010", lineHeight: 1 }}>
                  {num}
                </div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(5,0,16,0.65)", marginTop: 8 }}>
                  {lab}
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .valor-row-responsive  { grid-template-columns: 1fr !important; gap: 20px !important; }
          .stats-grid-responsive { grid-template-columns: repeat(2, 1fr) !important; }
          .sticker-responsive    { display: none; }
        }
      `}</style>
    </>
  );
}
