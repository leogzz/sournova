"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import SectionReveal from "@/components/SectionReveal";
import { productos, Categoria } from "@/data/productos";

type FilterTab = "todos" | Categoria;

const tabs: { id: FilterTab; label: string }[] = [
  { id: "todos",    label: "Todo"      },
  { id: "refresco", label: "Refrescos" },
  { id: "gomita",   label: "Gomitas"   },
  { id: "merch",    label: "Merch"     },
];

export default function ProductosPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>("todos");

  const filtered =
    activeTab === "todos"
      ? productos
      : productos.filter(p => p.categoria === activeTab);

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section style={{ position: "relative", paddingTop: 100, paddingBottom: 60, padding: "100px 28px 60px", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 600, height: 300, borderRadius: "50%", background: "rgba(123,44,255,0.3)", filter: "blur(80px)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1320, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
            style={{ margin: "0 auto 18px" }}
          >
            <span className="dot" /> Catálogo completo
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontFamily: '"Bagel Fat One", sans-serif', fontSize: "clamp(3.5rem, 10vw, 8rem)", lineHeight: 0.95, letterSpacing: "-0.02em", margin: "0 0 16px" }}
          >
            Nuestros{" "}
            <span style={{ background: "var(--grad-nova)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Productos
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            style={{ color: "var(--ink-dim)", fontSize: 18, maxWidth: 500, margin: "0 auto" }}
          >
            Refrescos, gomitas y merch que van a hacer que tu vida tenga más sabor. Literalmente.
          </motion.p>
        </div>
      </section>

      {/* ── STICKY FILTER TABS ── */}
      <div style={{
        position: "sticky", top: 72, zIndex: 30,
        backdropFilter: "blur(18px)",
        background: "rgba(5,0,16,0.8)",
        borderBottom: "1px solid var(--border)",
        padding: "0 28px",
      }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", display: "flex", alignItems: "center", gap: 10, padding: "16px 0", overflowX: "auto" }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`cat-pill ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
          <span style={{ marginLeft: "auto", flexShrink: 0, color: "var(--ink-mute)", fontSize: 14 }}>
            {filtered.length} {filtered.length === 1 ? "producto" : "productos"}
          </span>
        </div>
      </div>

      {/* ── PRODUCT GRID ── */}
      <section style={{ padding: "48px 28px 80px", minHeight: "60vh" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 22 }}
              className="products-grid-responsive"
            >
              {filtered.map((producto, i) => (
                <motion.div
                  key={producto.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <ProductCard producto={producto} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── GRADIENT TICKER ── */}
      <div className="ticker-grad">
        <div className="ticker-grad-track">
          {[0, 1].map(i => (
            <span key={i}>
              SOURNOVA <span style={{ color: "white" }}>✦</span>{" "}
              100% ÁCIDO <span style={{ color: "white" }}>✦</span>{" "}
              COMPRA MÁS <span style={{ color: "white" }}>✦</span>{" "}
              TU BOCA TE LO VA A AGRADECER <span style={{ color: "white" }}>✦</span>{" "}
              O NO. ÉSE ES EL PUNTO <span style={{ color: "white" }}>✦</span>{" "}
            </span>
          ))}
        </div>
      </div>

      {/* ── MAYOREO CALLOUT ── */}
      <section style={{ padding: "60px 28px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <SectionReveal>
            <div style={{
              padding: 32, borderRadius: 28,
              border: "1px solid rgba(123,44,255,0.4)",
              background: "rgba(123,44,255,0.06)",
              display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap",
            }}>
              <div style={{ fontSize: 48 }}>📦</div>
              <div style={{ flex: 1, minWidth: 200 }}>
                <h3 style={{ fontFamily: '"Bagel Fat One", sans-serif', fontSize: 28, margin: "0 0 8px", color: "var(--violet)" }}>
                  ¿Pedidos al por mayor?
                </h3>
                <p style={{ color: "var(--ink-dim)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                  Tiendas, eventos, festivales — tenemos precios de mayoreo. Escríbenos y armamos un paquete a tu medida.
                </p>
              </div>
              <a
                href="mailto:hola@sournova.mx"
                className="btn btn-primary"
                style={{ flexShrink: 0, textDecoration: "none" }}
              >
                Escribirnos →
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      <style>{`
        @media (max-width: 1100px) { .products-grid-responsive { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px)  { .products-grid-responsive { grid-template-columns: repeat(2, 1fr) !important; gap: 14px !important; } }
      `}</style>
    </>
  );
}
