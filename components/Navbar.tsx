"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/",          label: "Inicio" },
  { href: "/productos", label: "Productos" },
  { href: "/nosotros",  label: "Nosotros" },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0A0A12]/95 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="Sournova"
              width={140}
              height={56}
              className="h-10 w-auto object-contain transition-opacity group-hover:opacity-80"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors relative ${
                  pathname === link.href
                    ? "text-[#BF44FF]"
                    : "text-[#EDE8FF]/60 hover:text-[#EDE8FF]"
                }`}
                style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                    style={{ background: "linear-gradient(90deg,#BF44FF,#E8196E)" }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex">
            <Link
              href="/productos"
              className="px-5 py-2 rounded-xl text-sm font-bold text-[#0A0A12] hover:opacity-90 transition-opacity"
              style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                background: "linear-gradient(135deg,#BF44FF,#E8196E)",
              }}
            >
              Comprar
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-[#EDE8FF] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0A0A12] flex flex-col items-center justify-center gap-10"
          >
            {/* Decorative blobs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ background: "#7B1DB8" }} />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full blur-3xl opacity-15 pointer-events-none"
              style={{ background: "#E8196E" }} />

            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4, ease: [0.22,1,0.36,1] }}
              >
                <Link
                  href={link.href}
                  className="text-5xl transition-colors block"
                  style={{
                    fontFamily: '"Bebas Neue", sans-serif',
                    letterSpacing: "0.05em",
                    color: pathname === link.href ? "#BF44FF" : "#EDE8FF",
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              <Link
                href="/productos"
                className="px-8 py-3 rounded-xl text-[#0A0A12] text-xl font-bold"
                style={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  letterSpacing: "0.05em",
                  background: "linear-gradient(135deg,#BF44FF,#E8196E)",
                }}
              >
                Comprar Ahora
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
