"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import SectionReveal from "@/components/SectionReveal";
import MarqueeTicker from "@/components/MarqueeTicker";
import { productos, Categoria } from "@/data/productos";

type FilterTab = "todos" | Categoria;

const tabs: { id: FilterTab; label: string; color: string }[] = [
  { id: "todos",    label: "Todos",     color: "#BF44FF" },
  { id: "refresco", label: "Refrescos", color: "#6699FF" },
  { id: "gomita",   label: "Gomitas",   color: "#BF44FF" },
  { id: "merch",    label: "Merch",     color: "#E8196E" },
];

export default function ProductosPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>("todos");

  const filtered =
    activeTab === "todos"
      ? productos
      : productos.filter((p) => p.categoria === activeTab);

  const activeColor = tabs.find((t) => t.id === activeTab)?.color ?? "#BF44FF";

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="relative bg-[#0A0A12] pt-32 pb-16 px-4 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ backgroundColor: "#7B1DB8" }}
        />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#BF44FF]/70 text-sm font-bold tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            Catálogo completo
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white"
            style={{
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: "clamp(3.5rem, 10vw, 8rem)",
              letterSpacing: "0.02em",
              lineHeight: 1,
            }}
          >
            Nuestros{" "}
            <span className="text-[#BF44FF]">Productos</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-white/50 text-base mt-4 max-w-md mx-auto"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            Refrescos, gomitas y merch que van a hacer que tu vida tenga más sabor. Literalmente.
          </motion.p>
        </div>
      </section>

      {/* ── FILTER TABS ── */}
      <div className="bg-[#0A0A12] sticky top-16 z-30 border-b border-white/10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative flex-shrink-0 px-5 py-2.5 rounded-xl text-sm font-bold transition-all"
                style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  color: activeTab === tab.id ? "#0A0A12" : "rgba(255,255,255,0.5)",
                  backgroundColor: activeTab === tab.id ? tab.color : "transparent",
                  border: `2px solid ${activeTab === tab.id ? tab.color : "rgba(255,255,255,0.1)"}`,
                }}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="tab-bg"
                    className="absolute inset-0 rounded-xl"
                    style={{ backgroundColor: tab.color }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}

            {/* Item count */}
            <span
              className="ml-auto flex-shrink-0 text-white/30 text-sm"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              {filtered.length}{" "}
              {filtered.length === 1 ? "producto" : "productos"}
            </span>
          </div>
        </div>
      </div>

      {/* ── PRODUCT GRID ── */}
      <section className="bg-[#0A0A12] py-14 px-4 min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {filtered.map((producto, i) => (
                <motion.div
                  key={producto.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <ProductCard producto={producto} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <MarqueeTicker
        bg="#130F1E"
        textColor={activeColor}
        items={[
          "SOURNOVA",
          "100% ÁCIDO",
          "COMPRA MÁS",
          "AGREGA AL CARRITO",
          "TU BOCA TE LO VA A AGRADECER",
          "O NO. ÉSE ES EL PUNTO",
        ]}
      />

      {/* ── MAYOREO CALLOUT ── */}
      <section className="bg-[#130F1E] py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <SectionReveal>
            <div className="p-8 rounded-2xl border-2 border-[#BF44FF]/30 bg-[#BF44FF]/5 flex flex-col md:flex-row items-center gap-6">
              <div className="text-5xl">📦</div>
              <div className="flex-1 text-center md:text-left">
                <h3
                  className="text-3xl text-[#BF44FF] mb-2"
                  style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.05em" }}
                >
                  ¿Pedidos al por mayor?
                </h3>
                <p
                  className="text-white/60 text-sm leading-relaxed"
                  style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                >
                  Tiendas, eventos, festivales — tenemos precios de mayoreo. Escríbenos y armamos un paquete a tu medida.
                </p>
              </div>
              <a
                href="mailto:hola@sournova.mx"
                className="flex-shrink-0 px-6 py-3 rounded-xl font-bold text-sm text-[#0A0A12] hover:opacity-90 transition-opacity"
                style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  background: "linear-gradient(135deg,#BF44FF,#E8196E)",
                }}
              >
                Escribirnos
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
