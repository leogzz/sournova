"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "./CartContext";

const navLinks = [
  { href: "/",          label: "Inicio" },
  { href: "/productos", label: "Productos" },
  { href: "/nosotros",  label: "Nosotros" },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <header
        style={{
          position: "sticky", top: 0, zIndex: 50,
          backdropFilter: "blur(18px)",
          background: scrolled ? "rgba(5,0,16,0.8)" : "rgba(5,0,16,0.4)",
          borderBottom: "1px solid var(--border)",
          transition: "background .3s ease",
        }}
      >
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 28px", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/logo.png"
              alt="Sournova"
              width={140}
              height={56}
              className="h-10 w-auto object-contain"
              style={{ filter: "drop-shadow(0 0 12px rgba(123,44,255,0.5))" }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: "flex", gap: 28 }} className="hidden md:flex">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: pathname === link.href ? "white" : "var(--ink-dim)",
                  textDecoration: "none", fontSize: 14, fontWeight: 500,
                  letterSpacing: "0.04em", textTransform: "uppercase",
                  position: "relative", transition: "color .2s ease",
                }}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    style={{
                      position: "absolute", left: 0, right: 0, bottom: -8, height: 2,
                      background: "var(--grad-nova)", borderRadius: 999,
                    }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Link href="/productos" className="btn btn-primary hidden md:inline-flex" style={{ padding: "10px 20px", fontSize: 13 }}>
              Comprar
            </Link>

            <button
              className="btn-icon"
              aria-label="Carrito"
              onClick={openCart}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3h2l2.5 12h11L21 7H6"/>
                <circle cx="9" cy="20" r="1.5"/>
                <circle cx="17" cy="20" r="1.5"/>
              </svg>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>

            {/* Hamburger */}
            <button
              className="md:hidden"
              style={{ color: "white", padding: 8, background: "none", border: "none", cursor: "pointer" }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileOpen
                ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
                : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
              }
            </button>
          </div>
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
            style={{
              position: "fixed", inset: 0, zIndex: 40,
              background: "rgba(5,0,16,0.97)", backdropFilter: "blur(20px)",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 40,
            }}
          >
            {/* Glow blobs */}
            <div style={{ position: "absolute", top: "25%", left: "25%", width: 256, height: 256, borderRadius: "50%", background: "#7B1DB8", filter: "blur(80px)", opacity: 0.2, pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "25%", right: "25%", width: 192, height: 192, borderRadius: "50%", background: "#FF2EA8", filter: "blur(80px)", opacity: 0.15, pointerEvents: "none" }} />

            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4, ease: [0.22,1,0.36,1] }}
              >
                <Link
                  href={link.href}
                  style={{
                    fontFamily: '"Bagel Fat One", sans-serif',
                    fontSize: "clamp(3rem, 12vw, 5rem)",
                    letterSpacing: "0.02em",
                    color: pathname === link.href ? "var(--magenta)" : "white",
                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
              <Link href="/productos" className="btn btn-primary btn-lg">
                Comprar ahora →
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
