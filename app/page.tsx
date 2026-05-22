"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import HeroVisual from "@/components/HeroVisual";
import SodaCan from "@/components/SodaCan";
import SectionReveal from "@/components/SectionReveal";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/components/CartContext";
import { productos } from "@/data/productos";
import type { CartProduct } from "@/components/CartContext";

/* ── Data ─────────────────────────────────────── */
const allFeatured = [
  productos.find(p => p.id === "punch-citrico")!,
  productos.find(p => p.id === "gusanos-acidos")!,
  productos.find(p => p.id === "playera-sournova")!,
  productos.find(p => p.id === "shock-azul")!,
  productos.find(p => p.id === "bolas-fuego")!,
  productos.find(p => p.id === "gorra-acida")!,
  productos.find(p => p.id === "furia-mango")!,
  productos.find(p => p.id === "pack-stickers")!,
];

const sodas = [
  { id: "punch-citrico", name: "Punch Cítrico",    tag: "Más vendido",  flavor: "PUNCH CITRICO",   planetColor: "#FF6BD0", gradient: "linear-gradient(155deg, #2A0560 0%, #7B2CFF 60%, #BF44FF 100%)", desc: "Limón, naranja y un patadón ácido." },
  { id: "shock-azul",    name: "Shock Azul",        tag: "Misterioso",   flavor: "SHOCK AZUL",      planetColor: "#38E1FF", gradient: "linear-gradient(155deg, #0B2E58 0%, #1A2EAA 60%, #38E1FF 100%)", desc: "Sabor eléctrico. Tu boca no sabrá qué pasó." },
  { id: "furia-mango",   name: "Furia de Mango",    tag: "Nuevo",        flavor: "FURIA MANGO",     planetColor: "#FFB347", gradient: "linear-gradient(155deg, #7B1D00 0%, #C24A00 55%, #FFB347 100%)",  desc: "Mango, chile y ácido. Devastador." },
];

const gomitas = [
  { nombre: "Gusanos Ácidos",       color: "#BF44FF", nivel: "Súper ácida" },
  { nombre: "Bolas de Fuego",       color: "#FF2EA8", nivel: "Explosiva"   },
  { nombre: "Lenguas de Dragón",    color: "#9966FF", nivel: "Mega ácida"  },
  { nombre: "Corazones Explosivos", color: "#FF6699", nivel: "Devastadora" },
];

const gummyDefs = [
  { top: "10%",  left: "8%",   w: "22%", bg: "radial-gradient(circle at 35% 30%, #FFD93D, #FF8C00)", rot: -15 },
  { top: "0%",   left: "38%",  w: "28%", bg: "radial-gradient(circle at 35% 30%, #FF6BD0, #FF2EA8)", rot:   8 },
  { top: "20%",  right: "5%",  w: "26%", bg: "radial-gradient(circle at 35% 30%, #C6FF3D, #6FE000)", rot:  20 },
  { top: "48%",  left: "0%",   w: "24%", bg: "radial-gradient(circle at 35% 30%, #B47BFF, #7B2CFF)", rot:  35 },
  { top: "60%",  left: "32%",  w: "30%", bg: "radial-gradient(circle at 35% 30%, #38E1FF, #0094D5)", rot: -20 },
  { top: "50%",  right: "20%", w: "22%", bg: "radial-gradient(circle at 35% 30%, #FF8AB1, #E5005B)", rot:  45 },
  { bottom:"5%", left: "18%",  w: "20%", bg: "radial-gradient(circle at 35% 30%, #FFE76A, #FFB000)", rot: -30 },
  { bottom:"8%", right: "0%",  w: "26%", bg: "radial-gradient(circle at 35% 30%, #D4AAFF, #8E55E8)", rot:  15 },
];

const founders = [
  { tile: "a", role: "Fundador + Jefe de Sabor" },
  { tile: "b", role: "Fundador + Mister Números" },
  { tile: "c", role: "Fundador + Dirección Creativa" },
  { tile: "d", role: "Fundador + Head of Hype" },
];

const features = [
  { ico: "✦", title: "Sabor real",          desc: "Ingredientes reales, sin nombres raros que no puedas pronunciar." },
  { ico: "★", title: "Diseñado por niños",  desc: "Nosotros elegimos los sabores, los colores y hasta los nombres." },
  { ico: "⚡", title: "Envío rápido",        desc: "Llega en 2-3 días a toda la república. Gratis +$500 MXN." },
  { ico: "♡", title: "Hecho en MX",         desc: "Producido con amor desde Monterrey al cosmos." },
];

const CATS = ["Todo", "Refresco", "Gomita", "Merch"];

/* ─────────────────────────────────────────────── */

export default function HomePage() {
  const [activeCat, setActiveCat] = useState("Todo");
  const { addToCart } = useCart();

  const filtered = useMemo(() =>
    activeCat === "Todo"
      ? allFeatured
      : allFeatured.filter(p => p.categoria === activeCat.toLowerCase()),
    [activeCat]
  );

  function buyGomita(name: string, price: number, id: string) {
    addToCart({ id, nombre: name, precio: price, categoria: "Gomita", gradient: "linear-gradient(155deg, #7B2CFF, #FF2EA8, #38E1FF)", emoji: "🍬" } as CartProduct);
  }

  return (
    <>
      {/* ══ HERO ══════════════════════════════════════ */}
      <section style={{ padding: "80px 0 140px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 28px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 40, alignItems: "center" }} className="hero-grid-responsive">

            {/* Left copy */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="eyebrow"
                style={{ marginBottom: 24 }}
              >
                <span className="dot" /> Drop 01 · Recién lanzado
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22,1,0.36,1] }}
                style={{
                  fontFamily: '"Bagel Fat One", sans-serif', fontWeight: 400,
                  fontSize: "clamp(56px, 9vw, 120px)", lineHeight: 0.88,
                  letterSpacing: "-0.02em", margin: "0 0 24px",
                }}
              >
                Sabor de <br />
                <span style={{
                  background: "var(--grad-nova)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 8px 30px rgba(255,46,168,0.4))",
                }}>
                  otra galaxia.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ fontSize: 19, lineHeight: 1.55, color: "var(--ink-dim)", maxWidth: 540, margin: "0 0 36px" }}
              >
                Refrescos burbujeantes y gomitas súper ácidas hechas para volar mentes. Recién aterrizado desde Monterrey — listo para tu boca.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                style={{ display: "flex", gap: 14, flexWrap: "wrap" }}
              >
                <Link href="/productos" className="btn btn-primary btn-lg">Compra ahora →</Link>
                <Link href="/nosotros"  className="btn btn-ghost btn-lg">Nuestra historia</Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                style={{ display: "flex", gap: 36, marginTop: 56 }}
              >
                {[
                  { num: "12",   lab: "Sabores"          },
                  { num: "100%", lab: "Hecho por niños"  },
                  { num: "0",    lab: "Aburrido"         },
                ].map(({ num, lab }) => (
                  <div key={lab}>
                    <div style={{
                      fontFamily: '"Bagel Fat One", sans-serif', fontSize: 40,
                      background: "var(--grad-nova)",
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                    }}>{num}</div>
                    <div style={{ fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--ink-mute)" }}>{lab}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22,1,0.36,1] }}
            >
              <HeroVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ GRADIENT TICKER ════════════════════════════ */}
      <div className="ticker-grad">
        <div className="ticker-grad-track">
          {[0,1].map(i => (
            <span key={i}>
              SÚPER ÁCIDO <span style={{ color: "white" }}>✦</span>{" "}
              SABOR ESTELAR <span style={{ color: "white" }}>✦</span>{" "}
              DROP 01 <span style={{ color: "white" }}>✦</span>{" "}
              HECHO EN MONTERREY <span style={{ color: "white" }}>✦</span>{" "}
              SOURNOVA <span style={{ color: "white" }}>✦</span>{" "}
            </span>
          ))}
        </div>
      </div>

      {/* ══ FEATURED GRID ══════════════════════════════ */}
      <section style={{ padding: "120px 0" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 28px" }}>
          <SectionReveal>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40, marginBottom: 60, flexWrap: "wrap" }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: 18 }}><span className="dot" />Catálogo</div>
                <h2 style={{ fontFamily: '"Bagel Fat One", sans-serif', fontSize: "clamp(48px, 7vw, 88px)", lineHeight: 0.95, letterSpacing: "-0.02em", margin: 0 }}>
                  Lo más{" "}
                  <span style={{ background: "var(--grad-nova)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    cósmico
                  </span>
                </h2>
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {CATS.map(c => (
                  <button key={c} className={`cat-pill ${activeCat === c ? "active" : ""}`} onClick={() => setActiveCat(c)}>{c}</button>
                ))}
              </div>
            </div>
          </SectionReveal>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCat}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 22 }}
              className="products-grid-responsive"
            >
              {filtered.map((p, i) => (
                <motion.div key={p.id} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
                  <ProductCard producto={p} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <SectionReveal className="text-center" style={{ marginTop: 48 } as React.CSSProperties}>
            <Link href="/productos" className="btn btn-ghost btn-lg">
              Ver todos los productos →
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* ══ REFRESCOS SHOWCASE ═════════════════════════ */}
      <section id="refrescos" style={{ padding: "60px 0 120px" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 28px" }}>
          <SectionReveal>
            <div className="eyebrow" style={{ marginBottom: 18 }}><span className="dot" />Refrescos</div>
            <h2 style={{ fontFamily: '"Bagel Fat One", sans-serif', fontSize: "clamp(48px, 7vw, 88px)", lineHeight: 0.95, letterSpacing: "-0.02em", margin: "0 0 12px" }}>
              Burbujas{" "}
              <span style={{ background: "var(--grad-nova)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                interestelares.
              </span>
            </h2>
            <p style={{ fontSize: 18, color: "var(--ink-dim)", marginBottom: 48, maxWidth: 560 }}>
              3 sabores, 0 aburrimiento. Hechos con ingredientes reales y la justa medida de magia.
            </p>
          </SectionReveal>

          <div className="soda-grid">
            {sodas.map((soda, i) => (
              <SectionReveal key={soda.id} delay={i * 0.12}>
                <SodaCard soda={soda} onAdd={addToCart} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GOMITAS ════════════════════════════════════ */}
      <section id="gomitas" style={{
        padding: "100px 0", position: "relative",
        background: "linear-gradient(180deg, rgba(123,44,255,0.08), rgba(255,46,168,0.05))",
        borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)",
      }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 28px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 60, alignItems: "center" }} className="gummies-row-responsive">

            {/* Gummy cluster */}
            <SectionReveal>
              <div className="gummy-cluster">
                {gummyDefs.map((g, i) => (
                  <div
                    key={i}
                    className="gummy"
                    style={{
                      background: g.bg,
                      width: g.w,
                      top: g.top, left: "left" in g ? g.left : undefined,
                      right: "right" in g ? g.right : undefined,
                      bottom: "bottom" in g ? g.bottom : undefined,
                      transform: `rotate(${g.rot}deg)`,
                      animationDelay: `${-i * 1.2}s`,
                      animation: `gummy-float 6s ease-in-out ${-i * 1.2}s infinite`,
                    } as React.CSSProperties}
                  />
                ))}
              </div>
            </SectionReveal>

            {/* Copy */}
            <SectionReveal delay={0.15}>
              <div className="eyebrow" style={{ marginBottom: 16 }}><span className="dot" />Gomitas Sour</div>
              <h2 style={{ fontFamily: '"Bagel Fat One", sans-serif', fontSize: "clamp(48px, 6vw, 80px)", lineHeight: 0.95, letterSpacing: "-0.02em", margin: "0 0 16px" }}>
                Tan ácidas que{" "}
                <span style={{ background: "var(--grad-nova)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  te despiertan.
                </span>
              </h2>
              <p style={{ fontSize: 17, color: "var(--ink-dim)", maxWidth: 480, marginBottom: 28 }}>
                Niveles de acidez del 1 al 5. Mezcla sabores. Hechas con colorantes naturales y mucho cariño cósmico.
              </p>

              <div style={{ display: "grid", gap: 10, marginBottom: 28 }}>
                {gomitas.map((g, i) => (
                  <div key={i} className="flavor-item">
                    <div style={{
                      width: 32, height: 32, borderRadius: "50%", flexShrink: 0,
                      background: g.color,
                      boxShadow: "inset -4px -4px 8px rgba(0,0,0,0.25), inset 4px 4px 8px rgba(255,255,255,0.25)",
                    }} />
                    <span style={{ fontFamily: '"Bagel Fat One", sans-serif', fontSize: 18 }}>{g.nombre}</span>
                    <span style={{ fontSize: 12, color: "var(--ink-mute)", marginLeft: "auto", letterSpacing: "0.08em" }}>{g.nivel}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button className="btn btn-primary btn-lg" onClick={() => buyGomita("Mix Galaxy Gomitas", 48, "gummy-mix")}>
                  Bolsa Mix · $48
                </button>
                <button className="btn btn-ghost btn-lg" onClick={() => buyGomita("Bolsón Cósmico XL", 89, "gummy-mega")}>
                  Bolsón XL · $89
                </button>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ══ MERCH ══════════════════════════════════════ */}
      <section id="merch" style={{ padding: "120px 0" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 28px" }}>
          <SectionReveal>
            <div className="eyebrow" style={{ marginBottom: 18 }}><span className="dot" />Merch · Drop 01</div>
            <h2 style={{ fontFamily: '"Bagel Fat One", sans-serif', fontSize: "clamp(48px, 7vw, 88px)", lineHeight: 0.95, letterSpacing: "-0.02em", margin: "0 0 12px" }}>
              Vístete de{" "}
              <span style={{ background: "var(--grad-nova)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                nova.
              </span>
            </h2>
            <p style={{ fontSize: 18, color: "var(--ink-dim)", marginBottom: 48, maxWidth: 560 }}>
              Hoodies, tees y accesorios diseñados con la misma energía cósmica que nuestros sabores.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="merch-grid-nova">
              {/* Large hoodie card */}
              <MerchCard
                large
                bg="linear-gradient(155deg, #2A0560 0%, #7B2CFF 60%, #FF2EA8 100%)"
                tag="Drop 01"
                name="Sudadera Sournova"
                desc="Hoodie oversized · fleece pesado · bordado en pecho"
                price={650}
                emoji="🧥"
                id="sudadera-sournova"
                onAdd={addToCart}
              />
              <MerchCard bg="linear-gradient(155deg, #FF2EA8, #FF6BD0)" tag="Esencial" name="Playera OG" desc="100% algodón · logo oversized" price={380} emoji="👕" id="playera-sournova" onAdd={addToCart} />
              <MerchCard bg="linear-gradient(155deg, #0c0220, #2A0560)" tag="Nuevo" name="Gorra Ácida" desc="Snapback bordado · violeta" price={320} emoji="🧢" id="gorra-acida" onAdd={addToCart} />
              <MerchCard bg="linear-gradient(155deg, #7B1DB8, #EDE8FF)" tag="Ltd." name="Botella Térmica" desc="Acero inox · 500ml · 12h frío" price={450} emoji="🍶" id="botella-termica" onAdd={addToCart} />
              <MerchCard bg="linear-gradient(155deg, #FFB000, #FF2EA8)" tag="Hot" name="Sticker Pack" desc="12 stickers vinil premium" price={120} emoji="🎨" id="pack-stickers" onAdd={addToCart} />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ══ HISTORIA ═══════════════════════════════════ */}
      <section id="historia" style={{ padding: "120px 0", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 28px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="story-grid-responsive">

            <SectionReveal>
              <div className="eyebrow" style={{ marginBottom: 18 }}><span className="dot" />Nuestra historia</div>
              <h2 style={{ fontFamily: '"Bagel Fat One", sans-serif', fontSize: "clamp(48px, 6vw, 80px)", lineHeight: 0.95, letterSpacing: "-0.02em", margin: "18px 0 24px" }}>
                7 niños.{" "}
                <br />
                <span style={{ background: "var(--grad-nova)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  1 puesto.
                </span>
                {" "}
                <br />
                Infinito sabor.
              </h2>
              <p style={{ fontSize: 17, color: "var(--ink-dim)", lineHeight: 1.7, marginBottom: 16 }}>
                Empezamos en el recreo cambiando gomitas por canicas. Hoy, Sournova es nuestra primera empresa real — hecha con la misma energía que ponemos cuando jugamos, dibujamos e inventamos historias.
              </p>
              <p style={{ fontSize: 17, color: "var(--ink-dim)", lineHeight: 1.7 }}>
                En julio de 2026 vendimos por primera vez desde nuestro puesto en Cumbres 5to Sector, Monterrey. Desde ese día no hemos parado.
              </p>
              <div style={{ display: "flex", gap: 32, marginTop: 36, paddingTop: 36, borderTop: "1px solid var(--border)" }}>
                {[
                  { num: "2026", lab: "Fundada"    },
                  { num: "7",    lab: "Fundadores" },
                  { num: "∞",    lab: "Sueños"     },
                ].map(({ num, lab }) => (
                  <div key={lab}>
                    <div style={{ fontFamily: '"Bagel Fat One", sans-serif', fontSize: 40, background: "var(--grad-nova)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{num}</div>
                    <div style={{ fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--ink-mute)" }}>{lab}</div>
                  </div>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <div className="crew-grid">
                {founders.map((f, i) => (
                  <div key={i} className={`crew-tile ${f.tile}`}>
                    <div style={{ position: "relative", zIndex: 1, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(5,0,16,0.7)", fontWeight: 600 }}>{f.role}</div>
                    <div style={{ position: "relative", zIndex: 1, fontFamily: '"Bagel Fat One", sans-serif', fontSize: 20, color: "#050010" }}>Sournova</div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>

          {/* Features band */}
          <SectionReveal delay={0.1}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginTop: 100, paddingTop: 0 }} className="features-grid-responsive">
              {features.map(f => (
                <div key={f.title} style={{ padding: 28, borderRadius: 28, border: "1px solid var(--border)", background: "rgba(255,255,255,0.03)" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: "var(--grad-nova)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, fontSize: 22 }}>
                    {f.ico}
                  </div>
                  <h4 style={{ fontFamily: '"Bagel Fat One", sans-serif', fontSize: 22, margin: "0 0 6px" }}>{f.title}</h4>
                  <p style={{ color: "var(--ink-dim)", fontSize: 14, margin: 0 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ══ NEWSLETTER CTA ═════════════════════════════ */}
      <section style={{ padding: "100px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(255,46,168,0.18), transparent 60%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 28px", position: "relative" }}>
          <SectionReveal>
            <div style={{ textAlign: "center" }}>
              <div className="eyebrow" style={{ margin: "0 auto 18px" }}><span className="dot" />Únete al universo</div>
              <h2 style={{ fontFamily: '"Bagel Fat One", sans-serif', fontSize: "clamp(48px, 8vw, 100px)", lineHeight: 0.9, margin: "0 0 20px" }}>
                ¿Listo para{" "}
                <span style={{ background: "var(--grad-nova)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  despegar
                </span>
                ?
              </h2>
              <p style={{ fontSize: 18, color: "var(--ink-dim)", margin: "0 0 36px" }}>
                Recibe acceso anticipado a drops, descuentos cósmicos y sabores secretos antes que nadie.
              </p>
              <NewsletterForm />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Responsive helpers */}
      <style>{`
        @media (max-width: 1100px) {
          .hero-grid-responsive    { grid-template-columns: 1fr !important; }
          .products-grid-responsive { grid-template-columns: repeat(2, 1fr) !important; }
          .gummies-row-responsive  { grid-template-columns: 1fr !important; }
          .story-grid-responsive   { grid-template-columns: 1fr !important; gap: 40px !important; }
          .features-grid-responsive { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .products-grid-responsive { grid-template-columns: repeat(2, 1fr) !important; gap: 14px !important; }
          .features-grid-responsive { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

/* ── Sub-components ─────────────────────────────── */

function SodaCard({ soda, onAdd }: {
  soda: typeof sodas[0];
  onAdd: (p: CartProduct) => void;
}) {
  return (
    <div className="soda-card-nova" style={{ background: soda.gradient }}>
      <div>
        <div style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.8, fontWeight: 600 }}>
          {soda.tag} · 355 ml
        </div>
        <h3 style={{ fontFamily: '"Bagel Fat One", sans-serif', fontSize: 52, lineHeight: 0.9, margin: "8px 0 0" }}>
          {soda.name}
        </h3>
      </div>
      <div style={{ display: "flex", justifyContent: "center", flex: 1, padding: "24px 0" }}>
        <SodaCan flavor={soda.flavor} planetColor={soda.planetColor} />
      </div>
      <div>
        <p style={{ margin: "0 0 14px", fontSize: 14, opacity: 0.9 }}>{soda.desc}</p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: '"Bagel Fat One", sans-serif', fontSize: 28 }}>
            ${productos.find(p => p.id === soda.id)?.precio ?? 25}{" "}
            <small style={{ fontSize: 12, opacity: 0.7, fontFamily: '"Space Grotesk", sans-serif' }}>MXN</small>
          </span>
          <button
            className="btn btn-ghost"
            style={{ borderColor: "rgba(255,255,255,0.5)" }}
            onClick={() => onAdd({
              id: soda.id,
              nombre: soda.name,
              precio: productos.find(p => p.id === soda.id)?.precio ?? 25,
              categoria: "Refresco",
              gradient: soda.gradient,
              emoji: "🥤",
            })}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}

function MerchCard({ large, bg, tag, name, desc, price, emoji, id, onAdd }: {
  large?:  boolean;
  bg:      string;
  tag:     string;
  name:    string;
  desc:    string;
  price:   number;
  emoji:   string;
  id:      string;
  onAdd:   (p: CartProduct) => void;
}) {
  return (
    <div className={`merch-card-nova ${large ? "large" : ""}`} style={{ background: bg }}>
      <div>
        <div style={{
          display: "inline-block", fontSize: 10, letterSpacing: "0.15em",
          textTransform: "uppercase", fontWeight: 700, padding: "6px 10px",
          borderRadius: 999, background: "var(--grad-nova)", color: "#050010", marginBottom: 8,
        }}>{tag}</div>
        <h3 style={{ fontFamily: '"Bagel Fat One", sans-serif', fontSize: large ? 56 : 32, lineHeight: 0.95, margin: "0 0 6px" }}>{name}</h3>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 14, margin: 0 }}>{desc}</p>
      </div>

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px 0" }}>
        <span style={{ fontSize: large ? "8rem" : "5rem", lineHeight: 1, filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.4))" }}>
          {emoji}
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: '"Bagel Fat One", sans-serif', fontSize: 26 }}>${price} <small style={{ fontSize: 12, opacity: 0.7, fontFamily: '"Space Grotesk", sans-serif' }}>MXN</small></span>
        <button
          className="btn btn-ghost"
          style={{ borderColor: "rgba(255,255,255,0.5)", background: "rgba(0,0,0,0.2)" }}
          onClick={() => onAdd({ id, nombre: name, precio: price, categoria: "Merch", gradient: bg, emoji })}
        >
          Agregar
        </button>
      </div>
    </div>
  );
}

function NewsletterForm() {
  const { toast: _toast, addToCart: _ } = useCart();
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) { setSent(true); setEmail(""); }
  }

  if (sent) {
    return (
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        style={{ fontFamily: '"Bagel Fat One", sans-serif', fontSize: 28, color: "var(--magenta)" }}>
        ✦ ¡Bienvenid@ al cosmos!
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8, maxWidth: 520, margin: "0 auto", padding: 8, borderRadius: 999, border: "1px solid var(--border-strong)", background: "rgba(255,255,255,0.04)", backdropFilter: "blur(10px)" }}>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="tu@correo.com"
        required
        style={{ flex: 1, background: "transparent", border: 0, outline: "none", padding: "12px 20px", color: "white", fontSize: 15, fontFamily: "inherit" }}
      />
      <button type="submit" className="btn btn-primary">Suscribirme →</button>
    </form>
  );
}
