"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    heading: "Tienda",
    links: [
      { label: "Refrescos", href: "/productos" },
      { label: "Gomitas",   href: "/productos" },
      { label: "Merch",     href: "/productos" },
      { label: "Drops",     href: "/productos" },
    ],
  },
  {
    heading: "Empresa",
    links: [
      { label: "Historia",    href: "/nosotros" },
      { label: "Nuestro equipo", href: "/nosotros" },
      { label: "Prensa",     href: "#" },
      { label: "Contacto",   href: "mailto:hola@sournova.mx" },
    ],
  },
  {
    heading: "Ayuda",
    links: [
      { label: "Envíos",       href: "#" },
      { label: "Devoluciones", href: "#" },
      { label: "FAQ",          href: "#" },
      { label: "Términos",     href: "#" },
    ],
  },
];

const socials = [
  { label: "IG", href: "#" },
  { label: "TT", href: "#" },
  { label: "YT", href: "#" },
];

export default function Footer() {
  return (
    <footer style={{ padding: "60px 0 40px", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 28px" }}>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 40, marginBottom: 40 }} className="footer-grid-responsive">

          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "inline-block", marginBottom: 16 }}>
              <Image
                src="/logo.png"
                alt="Sournova"
                width={140}
                height={56}
                style={{ height: 48, width: "auto", objectFit: "contain", filter: "drop-shadow(0 0 12px rgba(123,44,255,0.4))" }}
              />
            </Link>
            <p style={{ color: "var(--ink-dim)", maxWidth: 300, fontSize: 14, lineHeight: 1.6 }}>
              Sabor de otra galaxia. Hecha por 7 niños en Monterrey, MX.
            </p>
            <p style={{ color: "var(--ink-mute)", fontSize: 12, marginTop: 8 }}>
              📍 Cumbres 5to Sector — Calle del Barranco, Monterrey NL
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="btn-icon"
                  style={{ width: 40, height: 40, fontSize: 12, fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map(col => (
            <div key={col.heading}>
              <h5 style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--ink-mute)", margin: "0 0 18px", fontWeight: 600 }}>
                {col.heading}
              </h5>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
                {col.links.map(link => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{ color: "var(--ink-dim)", textDecoration: "none", fontSize: 14, transition: "color .2s ease" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "white")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-dim)")}
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
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 28, borderTop: "1px solid var(--border)", fontSize: 13, color: "var(--ink-mute)", flexWrap: "wrap", gap: 12 }}>
          <span>© {new Date().getFullYear()} Sournova · Hecho con ✦ por 7 niños.</span>
          <span style={{ fontFamily: '"Bagel Fat One", sans-serif', letterSpacing: "0.1em", color: "var(--magenta)" }}>
            LA VIDA SABE MEJOR ÁCIDA
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid-responsive { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid-responsive { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
