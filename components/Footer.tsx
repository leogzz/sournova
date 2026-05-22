"use client";

import Link from "next/link";
import Image from "next/image";
import { Camera, AtSign, Play, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const footerLinks = [
  {
    heading: "Navegar",
    links: [
      { label: "Inicio",    href: "/" },
      { label: "Productos", href: "/productos" },
      { label: "Nosotros",  href: "/nosotros" },
    ],
  },
  {
    heading: "Productos",
    links: [
      { label: "Refrescos", href: "/productos" },
      { label: "Gomitas",   href: "/productos" },
      { label: "Merch",     href: "/productos" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacidad", href: "#" },
      { label: "Términos",   href: "#" },
      { label: "Cookies",    href: "#" },
    ],
  },
];

const socials = [
  { icon: Camera, href: "#", label: "Instagram" },
  { icon: AtSign,  href: "#", label: "Twitter / X" },
  { icon: Play,    href: "#", label: "YouTube" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent,  setSent]  = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) { setSent(true); setEmail(""); }
  };

  return (
    <footer className="bg-[#0A0A12] border-t border-white/10">

      {/* Newsletter strip — gradient border card */}
      <div className="p-px" style={{ background: "linear-gradient(135deg,#7B1DB8,#BF44FF,#E8196E)" }}>
        <div className="bg-[#130F1E] py-10 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3
                className="text-3xl md:text-4xl text-[#BF44FF]"
                style={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  letterSpacing: "0.03em",
                }}
              >
                Únete al lado ácido 🔥
              </h3>
              <p className="text-[#EDE8FF]/60 text-sm mt-1 font-medium" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                Drops exclusivos, sabores nuevos y el caos que mereces.
              </p>
            </div>

            {sent ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="px-6 py-3 rounded-xl font-bold text-sm text-[#BF44FF] border border-[#BF44FF]/30"
                style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
              >
                ¡Ya eres parte del caos! ⚡
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex w-full md:w-auto gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tucorreo@mail.com"
                  required
                  className="flex-1 md:w-64 px-4 py-3 rounded-xl bg-white/5 text-[#EDE8FF] placeholder-white/30 text-sm outline-none border border-white/10 focus:border-[#BF44FF] transition-colors"
                  style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                />
                <button
                  type="submit"
                  className="px-4 py-3 rounded-xl font-bold text-sm text-[#0A0A12] flex items-center gap-2 hover:opacity-90 transition-opacity"
                  style={{ background: "linear-gradient(135deg,#BF44FF,#E8196E)", fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                >
                  <Send size={14} />
                  Suscribir
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">

          {/* Brand column */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex mb-4">
              <Image src="/logo.png" alt="Sournova" width={140} height={56} className="h-12 w-auto object-contain" />
            </Link>
            <p className="text-[#EDE8FF]/45 text-sm leading-relaxed max-w-xs" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
              Nacida en Monterrey. Hecha con caos. Diseñada para los que le entran a todo con sabor ácido.
            </p>
            <p className="text-[#BF44FF]/70 text-xs font-semibold tracking-wide mt-3 flex items-center gap-1.5" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
              📍 Cumbres 5to Sector — en el parque, Calle del Barranco, Monterrey NL
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl border border-white/15 flex items-center justify-center text-[#EDE8FF]/50 hover:text-[#BF44FF] hover:border-[#BF44FF]/40 transition-colors"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4
                className="text-lg mb-4"
                style={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  letterSpacing: "0.05em",
                  color: "#BF44FF",
                }}
              >
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#EDE8FF]/45 hover:text-[#EDE8FF] text-sm transition-colors"
                      style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#EDE8FF]/25 text-xs" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
            © {new Date().getFullYear()} Sournova. Todos los derechos reservados. Hecho con ácido en Monterrey, NL 🇲🇽
          </p>
          <p
            className="text-xs text-[#E8196E]"
            style={{
              fontFamily: '"Bebas Neue", sans-serif',
              letterSpacing: "0.1em",
            }}
          >
            LA VIDA SABE MEJOR ÁCIDA
          </p>
        </div>
      </div>
    </footer>
  );
}
