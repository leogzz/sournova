"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, AtSign, Play, Mail, MessageSquare, CheckCircle } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import MarqueeTicker from "@/components/MarqueeTicker";

const asuntos = [
  { value: "general",        label: "General" },
  { value: "mayoreo",        label: "Mayoreo" },
  { value: "prensa",         label: "Prensa" },
  { value: "colaboraciones", label: "Colaboraciones" },
];

const socials = [
  { icon: Camera, href: "#", label: "Instagram", handle: "@sournovaoficial" },
  { icon: AtSign, href: "#", label: "Twitter / X", handle: "@sournova" },
  { icon: Play,   href: "#", label: "YouTube",    handle: "Sournova" },
  { icon: Mail,   href: "mailto:hola@sournova.mx", label: "Email", handle: "hola@sournova.mx" },
];

interface FormState {
  nombre: string;
  correo: string;
  asunto: string;
  mensaje: string;
}

export default function ContactoPage() {
  const [form, setForm] = useState<FormState>({
    nombre: "",
    correo: "",
    asunto: "general",
    mensaje: "",
  });
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setEnviado(true);
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm outline-none focus:border-[#BF44FF] transition-colors resize-none";
  const labelClass =
    "block text-sm font-semibold text-white/70 mb-2";

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="relative bg-[#0A0A12] pt-32 pb-16 px-4 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
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
            Háblanos
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
            Contacto
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-white/50 text-base mt-4 max-w-md mx-auto"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            ¿Tienes preguntas, quieres colaborar o simplemente quieres pedirle más sabores al universo? Aquí estamos.
          </motion.p>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <MarqueeTicker
        bg="#E8196E"
        textColor="#fff"
        separator="✦"
        items={[
          "ESCRÍBENOS",
          "NO MORDEMOS",
          "SOLO QUEMAMOS UN POCO",
          "PRENSA",
          "MAYOREO",
          "COLABORACIONES",
          "SOMOS BUENA ONDA",
        ]}
      />

      {/* ── MAIN CONTENT ── */}
      <section className="bg-[#0A0A12] py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* FORM */}
          <div className="lg:col-span-3">
            <SectionReveal>
              <AnimatePresence mode="wait">
                {!enviado ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-5"
                  >
                    <h2
                      className="text-4xl md:text-5xl text-white mb-8"
                      style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.02em" }}
                    >
                      Envíanos un <span className="text-[#BF44FF]">mensaje</span>
                    </h2>

                    {/* Nombre */}
                    <div>
                      <label
                        htmlFor="nombre"
                        className={labelClass}
                        style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                      >
                        Nombre
                      </label>
                      <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        required
                        placeholder="Tu nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        className={inputClass}
                        style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                      />
                    </div>

                    {/* Correo */}
                    <div>
                      <label
                        htmlFor="correo"
                        className={labelClass}
                        style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                      >
                        Correo electrónico
                      </label>
                      <input
                        id="correo"
                        name="correo"
                        type="email"
                        required
                        placeholder="tucorreo@mail.com"
                        value={form.correo}
                        onChange={handleChange}
                        className={inputClass}
                        style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                      />
                    </div>

                    {/* Asunto */}
                    <div>
                      <label
                        htmlFor="asunto"
                        className={labelClass}
                        style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                      >
                        Asunto
                      </label>
                      <select
                        id="asunto"
                        name="asunto"
                        value={form.asunto}
                        onChange={handleChange}
                        className={inputClass}
                        style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                      >
                        {asuntos.map((a) => (
                          <option
                            key={a.value}
                            value={a.value}
                            style={{ backgroundColor: "#130F1E", color: "#EDE8FF" }}
                          >
                            {a.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Mensaje */}
                    <div>
                      <label
                        htmlFor="mensaje"
                        className={labelClass}
                        style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                      >
                        Mensaje
                      </label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        required
                        rows={5}
                        placeholder="Cuéntanos qué necesitas..."
                        value={form.mensaje}
                        onChange={handleChange}
                        className={inputClass}
                        style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                      />
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileTap={{ scale: 0.97 }}
                      className="w-full py-4 rounded-xl font-bold text-base text-[#0A0A12] hover:opacity-90 transition-opacity disabled:opacity-60 flex items-center justify-center gap-2"
                      style={{
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        background: "linear-gradient(135deg,#BF44FF,#E8196E)",
                      }}
                    >
                      {loading ? (
                        <>
                          <motion.div
                            className="w-4 h-4 border-2 border-[#0A0A12]/40 border-t-[#0A0A12] rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                          />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <MessageSquare size={16} />
                          Enviar mensaje
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "backOut" }}
                    className="flex flex-col items-center justify-center text-center py-24 px-8 rounded-2xl border border-[#BF44FF]/30 bg-[#BF44FF]/5"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.5, ease: "backOut" }}
                    >
                      <CheckCircle size={64} style={{ color: "#BF44FF" }} />
                    </motion.div>
                    <h3
                      className="text-5xl text-white mt-6 mb-3"
                      style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.03em" }}
                    >
                      ¡Mensaje enviado!
                    </h3>
                    <p
                      className="text-white/55 text-base max-w-sm leading-relaxed"
                      style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                    >
                      Ya lo tenemos. Te respondemos en máximo 48 horas. Mientras tanto, prueba un Punch Cítrico.
                    </p>
                    <button
                      onClick={() => {
                        setEnviado(false);
                        setForm({ nombre: "", correo: "", asunto: "general", mensaje: "" });
                      }}
                      className="mt-8 px-6 py-3 border-2 border-white/20 text-white/70 rounded-xl text-sm hover:border-white/40 transition-colors"
                      style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                    >
                      Enviar otro mensaje
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </SectionReveal>
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-2 space-y-8">
            {/* Socials */}
            <SectionReveal delay={0.1}>
              <h3
                className="text-3xl text-white mb-5"
                style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.03em" }}
              >
                Redes sociales
              </h3>
              <div className="space-y-3">
                {socials.map(({ icon: Icon, href, label, handle }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 p-4 rounded-xl border border-white/10 hover:border-[#BF44FF]/40 hover:bg-[#BF44FF]/5 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#BF44FF]/10 transition-colors">
                      <Icon size={18} className="text-white/60 group-hover:text-[#BF44FF] transition-colors" />
                    </div>
                    <div>
                      <p
                        className="text-white/40 text-xs mb-0.5"
                        style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                      >
                        {label}
                      </p>
                      <p
                        className="text-white text-sm font-semibold group-hover:text-[#BF44FF] transition-colors"
                        style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                      >
                        {handle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </SectionReveal>

            {/* Mayoreo callout */}
            <SectionReveal delay={0.2}>
              <div className="p-6 rounded-2xl border-2 border-[#BF44FF]/30 bg-[#BF44FF]/5">
                <div className="text-3xl mb-3">📦</div>
                <h4
                  className="text-2xl text-[#BF44FF] mb-2"
                  style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.05em" }}
                >
                  Para pedidos mayoreo
                </h4>
                <p
                  className="text-white/55 text-sm leading-relaxed mb-4"
                  style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                >
                  ¿Tienes una tienda, evento o restaurante? Escríbenos seleccionando <strong className="text-white">Mayoreo</strong> en el asunto. Tenemos paquetes desde 50 unidades con precios especiales.
                </p>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-[#BF44FF]" />
                  <span
                    className="text-[#BF44FF] text-sm font-semibold"
                    style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                  >
                    mayoreo@sournova.mx
                  </span>
                </div>
              </div>
            </SectionReveal>

            {/* Response time */}
            <SectionReveal delay={0.3}>
              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <p
                  className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-1"
                  style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                >
                  Tiempo de respuesta
                </p>
                <p
                  className="text-white text-xl font-bold"
                  style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                >
                  Menos de 48 hrs ⚡
                </p>
                <p
                  className="text-white/40 text-xs mt-1"
                  style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                >
                  De lunes a viernes, 9am – 6pm CST
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </>
  );
}
