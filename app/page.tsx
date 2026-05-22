"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import MarqueeTicker from "@/components/MarqueeTicker";
import ProductCard from "@/components/ProductCard";
import SectionReveal from "@/components/SectionReveal";
import { productos } from "@/data/productos";

const featured = [
  productos.find((p) => p.id === "punch-citrico")!,
  productos.find((p) => p.id === "gusanos-acidos")!,
  productos.find((p) => p.id === "playera-sournova")!,
];

const pillars = [
  {
    color: "#BF44FF",
    titulo: "Sabor sin disculpas",
    descripcion:
      "Cada producto está hecho para que tu boca no lo olvide. Ácido real, sabor intenso, cero relleno.",
  },
  {
    color: "#E8196E",
    titulo: "Cultura primero",
    descripcion:
      "No somos una marca de refrescos. Somos un estilo de vida. Nació en las calles de México y no nos vamos a disculpar.",
  },
  {
    color: "#BF44FF",
    titulo: "Calidad obsesiva",
    descripcion:
      "Ingredientes reales, recetas probadas y presentaciones que se ven tan buenas como saben.",
  },
];

const heroWords = ["LA", "VIDA", "SABE", "MEJOR", "ÁCIDA"];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0A0A12] px-4">
        {/* Film grain */}
        <div className="grain absolute inset-0 z-0" />

        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ backgroundColor: "#7B1DB8" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ backgroundColor: "#E8196E" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ backgroundColor: "#7B1DB8" }}
        />

        {/* Sticker badges */}
        <motion.div
          initial={{ opacity: 0, rotate: -8, scale: 0.7 }}
          animate={{ opacity: 1, rotate: -6, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "backOut" }}
          className="absolute top-28 right-8 md:right-24 md:top-32 z-10"
        >
          <div className="px-4 py-2 border-2 border-[#E8196E] rounded-xl rotate-[-6deg] text-center bg-[#E8196E]">
            <span
              className="text-white text-lg block"
              style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.1em" }}
            >
              100% ÁCIDO
            </span>
            <span className="text-white/80 text-xs block" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
              sin disculpas
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, rotate: 5, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 8, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5, ease: "backOut" }}
          className="absolute bottom-32 left-8 md:left-24 z-10 hidden md:block"
        >
          <div className="px-4 py-2 border-2 border-[#BF44FF] rounded-xl">
            <span
              className="text-[#BF44FF] text-lg block"
              style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.1em" }}
            >
              HECHA EN 🇲🇽
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, rotate: 3, scale: 0.7 }}
          animate={{ opacity: 1, rotate: -4, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5, ease: "backOut" }}
          className="absolute bottom-48 right-8 md:right-36 z-10"
        >
          <div className="px-4 py-2 border-2 border-[#E8196E] rounded-xl rotate-[-4deg] text-center">
            <span
              className="text-[#E8196E] text-lg block"
              style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.1em" }}
            >
              HECHA POR
            </span>
            <span
              className="text-[#E8196E] text-2xl block leading-none"
              style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.05em" }}
            >
              7 NIÑOS
            </span>
          </div>
        </motion.div>

        {/* Main content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center mb-6"
          >
            <Image
              src="/logo.png"
              alt="Sournova"
              width={260}
              height={104}
              className="w-48 md:w-64 h-auto object-contain drop-shadow-[0_0_32px_rgba(191,68,255,0.5)]"
              priority
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#BF44FF]/80 text-sm font-bold tracking-[0.3em] uppercase mb-6"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            Refrescos · Gomitas · Merch
          </motion.p>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mb-4">
            {heroWords.map((word, i) => {
              const strokeStyle: React.CSSProperties =
                word === "VIDA"
                  ? { WebkitTextStroke: "2px #BF44FF", color: "transparent" }
                  : word === "MEJOR"
                  ? { WebkitTextStroke: "2px #E8196E", color: "transparent" }
                  : word === "ÁCIDA"
                  ? { color: "#BF44FF" }
                  : { color: "#ffffff" };
              return (
                <motion.span
                  key={word + i}
                  initial={{ opacity: 0, y: 60, skewY: 4 }}
                  animate={{ opacity: 1, y: 0, skewY: 0 }}
                  transition={{ delay: 0.1 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="block leading-none"
                  style={{
                    fontFamily: '"Bebas Neue", sans-serif',
                    fontSize: "clamp(4rem, 13vw, 10rem)",
                    letterSpacing: "-0.01em",
                    ...strokeStyle,
                  }}
                >
                  {word}
                </motion.span>
              );
            })}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="text-white/60 text-base md:text-lg max-w-lg mx-auto leading-relaxed mt-4 mb-10"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            Sabores que te queman la lengua y te dejan pidiendo más. Porque la vida plana no tiene chiste.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/productos"
              className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-lg font-bold text-[#0A0A12] hover:opacity-90 transition-opacity"
              style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                background: "linear-gradient(135deg,#BF44FF,#E8196E)",
              }}
            >
              Comprar Ahora
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/productos"
              className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 text-white rounded-xl text-lg font-medium hover:border-[#BF44FF]/50 hover:bg-[#BF44FF]/5 transition-all"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              Ver Sabores
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-xs tracking-[0.2em]" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
            SCROLL
          </span>
          <div className="w-0.5 h-8 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="w-full rounded-full"
              style={{ height: "50%", background: "linear-gradient(180deg,#BF44FF,#E8196E)" }}
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* ── MARQUEE ── */}
      <MarqueeTicker />
      <MarqueeTicker
        reverse
        bg="#130F1E"
        textColor="#E8196E"
        separator="·"
        items={[
          "SOURNOVA",
          "REFRESCOS ÁCIDOS",
          "GOMITAS EXPLOSIVAS",
          "MERCH SIN FILTRO",
          "HECHA EN MÉXICO",
          "SABOR SIN DISCULPAS",
          "VAS A QUERER MÁS",
        ]}
      />

      {/* ── FEATURED PRODUCTS ── */}
      <section className="bg-[#0A0A12] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center mb-14">
            <span
              className="text-[#BF44FF]/70 text-sm font-bold tracking-[0.3em] uppercase"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              Lo más pedido
            </span>
            <h2
              className="text-6xl md:text-8xl text-white mt-2"
              style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.02em" }}
            >
              Productos <span className="text-[#E8196E]">Estrella</span>
            </h2>
            <p className="text-white/50 text-base mt-3 max-w-md mx-auto" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
              Lo que ya todo México está pidiendo. O más bien: exigiendo.
            </p>
          </SectionReveal>

          {/* Bento grid: hero card + two supporting */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <SectionReveal className="md:col-span-2">
              <ProductCard producto={featured[0]} />
            </SectionReveal>
            <div className="flex flex-col gap-5">
              {featured.slice(1).map((p, i) => (
                <SectionReveal key={p.id} delay={(i + 1) * 0.12}>
                  <ProductCard producto={p} />
                </SectionReveal>
              ))}
            </div>
          </div>

          <SectionReveal className="text-center mt-12" delay={0.3}>
            <Link
              href="/productos"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#BF44FF] text-[#BF44FF] rounded-xl text-lg font-bold hover:bg-[#BF44FF] hover:text-[#0A0A12] transition-all"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              Ver todos los productos
              <ArrowRight size={18} />
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* ── WHY SOURNOVA ── */}
      <section className="bg-[#130F1E] py-24 px-4 relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ backgroundColor: "#7B1DB8" }}
        />

        <div className="max-w-5xl mx-auto">
          <SectionReveal className="mb-16">
            <span
              className="text-[#BF44FF]/70 text-sm font-bold tracking-[0.3em] uppercase"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              Por qué existimos
            </span>
            <h2
              className="text-6xl md:text-8xl text-white mt-2"
              style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.02em" }}
            >
              ¿Por qué{" "}
              <span className="text-[#BF44FF]">Sournova?</span>
            </h2>
          </SectionReveal>

          <div className="divide-y divide-white/10">
            {pillars.map((p, i) => (
              <SectionReveal key={p.titulo} delay={i * 0.1}>
                <div className="grid items-start py-10 gap-6" style={{ gridTemplateColumns: "7rem 1fr" }}>
                  <span
                    className="text-[7rem] leading-none select-none -mt-2 opacity-[0.12]"
                    style={{ fontFamily: '"Bebas Neue", sans-serif', color: p.color }}
                  >
                    0{i + 1}
                  </span>
                  <div>
                    <h3
                      className="text-4xl md:text-5xl text-white mb-3"
                      style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.02em" }}
                    >
                      {p.titulo}
                    </h3>
                    <p
                      className="text-white/55 leading-relaxed text-base max-w-lg"
                      style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                    >
                      {p.descripcion}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FACTS TICKER ── */}
      <MarqueeTicker
        bg="#E8196E"
        textColor="#0A0A12"
        separator="→"
        items={[
          "12 SABORES",
          "MONTERREY MX",
          "EST. JULIO 2026",
          "100% ÁCIDO",
          "SIN DISCULPAS",
          "HECHA POR 7 NIÑOS",
        ]}
      />

      {/* ── EMAIL SIGNUP ── */}
      <section className="bg-[#0A0A12] py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <SectionReveal>
            <div
              className="p-px rounded-3xl"
              style={{ background: "linear-gradient(135deg, #7B1DB8, #BF44FF, #E8196E)" }}
            >
              <div className="bg-[#0A0A12] rounded-[22px] py-14 px-8">
                <span className="text-5xl mb-4 block">⚡</span>
                <h2
                  className="text-5xl md:text-7xl text-white mb-3"
                  style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.02em" }}
                >
                  Únete al lado{" "}
                  <span className="text-[#BF44FF]">ácido</span>
                </h2>
                <p
                  className="text-white/55 text-base mb-8 max-w-sm mx-auto"
                  style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                >
                  Drops exclusivos, sabores antes que nadie, y caos directo a tu correo.
                </p>
                <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="tucorreo@mail.com"
                    className="flex-1 px-5 py-3.5 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/30 text-sm outline-none focus:border-[#BF44FF] transition-colors"
                    style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                  />
                  <button
                    type="submit"
                    className="px-6 py-3.5 rounded-xl font-bold text-sm text-[#0A0A12] hover:opacity-90 transition-opacity whitespace-nowrap"
                    style={{
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      background: "linear-gradient(135deg,#BF44FF,#E8196E)",
                    }}
                  >
                    Entrar al caos
                  </button>
                </form>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
