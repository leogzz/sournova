"use client";

import { motion } from "framer-motion";
import { Heart, Zap, Globe } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import MarqueeTicker from "@/components/MarqueeTicker";

const valores = [
  {
    icon: Zap,
    color: "#BF44FF",
    nombre: "Intensidad",
    descripcion:
      "No hacemos nada a medias. Desde la primera gota hasta el último sticker, todo Sournova está diseñado para que se sienta. Ácido. Real. Sin filtro.",
  },
  {
    icon: Heart,
    color: "#E8196E",
    nombre: "Comunidad",
    descripcion:
      "No somos nosotros la marca. Son ustedes. Los que comparten, los que piden, los que nos dicen 'necesito más Quemón de Sandía en mi vida'. Eso somos.",
  },
  {
    icon: Globe,
    color: "#BF44FF",
    nombre: "Identidad",
    descripcion:
      "Hecho en México. Con orgullo. Con caos. Con el sabor que te recuerda que ser de aquí es lo más cool que puedes ser.",
  },
];


export default function NosotrosPage() {
  return (
    <>
      {/* ── TYPOGRAPHIC HERO ── */}
      <section className="relative bg-[#0A0A12] min-h-[80vh] flex flex-col items-center justify-center overflow-hidden px-4 pt-24">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 60%, rgba(191,68,255,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Big sticker decoration */}
        <motion.div
          initial={{ rotate: -12, scale: 0, opacity: 0 }}
          animate={{ rotate: -10, scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "backOut" }}
          className="absolute top-28 right-4 md:right-16 z-10"
        >
          <div
            className="w-24 h-24 rounded-full flex flex-col items-center justify-center text-center border-4 border-[#BF44FF]"
            style={{ backgroundColor: "#BF44FF" }}
          >
            <span className="text-[#0A0A12] text-xs font-black leading-tight" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
              EST.
            </span>
            <span className="text-[#0A0A12] text-2xl leading-none" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              2026
            </span>
            <span className="text-[#0A0A12] text-xs font-black" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
              MTY 26 🇲🇽
            </span>
          </div>
        </motion.div>

        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#BF44FF]/70 text-sm font-bold tracking-[0.3em] uppercase mb-6"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            Quiénes somos
          </motion.p>

          {/* Main headline */}
          {["Le hicimos", "el ácido,", "cool."].map((line, i) => (
            <motion.div
              key={line}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span
                className={`block leading-none ${
                  line === "cool."
                    ? "text-[#BF44FF]"
                    : i === 1
                    ? "text-stroke text-transparent"
                    : "text-white"
                }`}
                style={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  fontSize: "clamp(3.5rem, 12vw, 9rem)",
                  letterSpacing: "-0.01em",
                  ...(i === 1 && { WebkitTextStrokeColor: "#BF44FF" }),
                }}
              >
                {line}
              </span>
            </motion.div>
          ))}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="text-white/55 text-base md:text-lg max-w-xl mx-auto mt-8"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            Nacimos en México con una idea simple: los refrescos y los dulces pueden ser más salvajes, más honestos, y más nosotros.
          </motion.p>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <MarqueeTicker
        bg="#1C1630"
        textColor="#BF44FF"
        items={[
          "NUESTRA HISTORIA",
          "HECHA EN MONTERREY",
          "ÁCIDOS DESDE 2026",
          "SIN FILTRO",
          "CON ORGULLO MEXICANO",
        ]}
      />

      {/* ── ORIGIN STORY ── */}
      <section className="bg-[#0A0A12] py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <SectionReveal>
            <span
              className="text-[#BF44FF]/70 text-sm font-bold tracking-[0.3em] uppercase"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              La historia
            </span>
            <h2
              className="text-5xl md:text-6xl text-white mt-3 mb-8"
              style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.02em" }}
            >
              De un puesto en{" "}
              <span className="text-[#E8196E]">Monterrey</span>{" "}
              al mercado
            </h2>
            <div
              className="space-y-5 text-white/60 leading-relaxed text-base"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              <p>
                Sournova nació en 2026 cuando dos amigos en Monterrey decidieron que estaban hartos de los refrescos aburridos. Pusieron un puesto, y lo demás es historia. En julio de 2026 vendimos por primera vez — y desde ese día no hemos parado. Los sabores eran siempre los mismos en todos lados, los colores siempre los mismos, la actitud siempre la misma: genérica.
              </p>
              <p>
                Así que agarraron lo que tenían — una licuadora industrial de segunda mano, una obsesión con el ácido cítrico y demasiado tiempo libre — y empezaron a experimentar. La primera prueba fue un desastre. La décima fue magia. Punch Cítrico llegó al mundo.
              </p>
              <p>
                En 48 horas, las 10 tiendas donde lo dejaron consignado lo agotaron. Empezaron a llegar mensajes de desconocidos preguntando dónde conseguirlo. No había plan. No había inversión. Solo había sabor y actitud.
              </p>
              <p>
                Hoy Sournova tiene 12 sabores activos, una línea de gomitas que tumba webs, y merch que la gente usa con orgullo. Seguimos siendo los mismos de siempre: raros, ácidos, mexicanos, y sin disculpas.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── VALORES ── */}
      <section className="bg-[#130F1E] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center mb-16">
            <span
              className="text-[#E8196E]/70 text-sm font-bold tracking-[0.3em] uppercase"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              En lo que creemos
            </span>
            <h2
              className="text-6xl md:text-8xl text-white mt-2"
              style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.02em" }}
            >
              Nuestros{" "}
              <span className="text-[#E8196E]">Valores</span>
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valores.map((v, i) => (
              <SectionReveal key={v.nombre} delay={i * 0.15}>
                <div className="p-8 rounded-2xl border border-white/10 bg-[#0A0A12] h-full flex flex-col">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${v.color}15`, border: `2px solid ${v.color}30` }}
                  >
                    <v.icon size={30} style={{ color: v.color }} />
                  </div>
                  <h3
                    className="text-4xl text-white mb-4"
                    style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.03em" }}
                  >
                    {v.nombre}
                  </h3>
                  <p
                    className="text-white/55 leading-relaxed text-sm flex-1"
                    style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                  >
                    {v.descripcion}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-px" style={{ background: "linear-gradient(135deg,#7B1DB8,#BF44FF,#E8196E)" }}>
        <div className="bg-[#1C1630] py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <SectionReveal>
              <h2
                className="text-5xl md:text-7xl mb-12"
                style={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  letterSpacing: "0.02em",
                  background: "linear-gradient(90deg,#BF44FF,#E8196E)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                12 sabores · México · 1 obsesión
              </h2>
            </SectionReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { num: "12",   label: "Sabores" },
                { num: "MX",   label: "País" },
                { num: "50K+", label: "Clientes" },
                { num: "Jul '26", label: "Primer venta" },
              ].map(({ num, label }, i) => (
                <SectionReveal key={label} delay={i * 0.1}>
                  <p
                    className="text-6xl md:text-8xl leading-none"
                    style={{
                      fontFamily: '"Bebas Neue", sans-serif',
                      background: "linear-gradient(135deg,#BF44FF,#E8196E)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {num}
                  </p>
                  <p
                    className="text-[#EDE8FF]/50 text-sm font-bold tracking-widest uppercase mt-2"
                    style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                  >
                    {label}
                  </p>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
