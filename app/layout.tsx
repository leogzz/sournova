import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/components/CartContext";

export const metadata: Metadata = {
  title: "Sournova — Sabor de otra galaxia",
  description:
    "Sournova: refrescos ácidos, gomitas explosivas y merch sin filtro. Hecha en Monterrey, MX. Sabor de otra galaxia.",
  keywords: ["sournova", "refrescos ácidos", "gomitas", "merch", "sour soda", "México", "Monterrey"],
  openGraph: {
    title: "Sournova — Sabor de otra galaxia",
    description: "Refrescos, gomitas y merch sin filtro. Hecha en México.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col antialiased" style={{ background: "#050010", color: "#ffffff" }}>
        <CartProvider>
          {/* Cosmic layers — fixed behind everything */}
          <div className="cosmos" aria-hidden="true" />
          <div className="grain"  aria-hidden="true" />

          {/* Shipping banner */}
          <div style={{
            background: "#050010", padding: "10px 0",
            borderBottom: "1px solid var(--border)",
            position: "relative", zIndex: 3,
            fontSize: 12, textAlign: "center",
            letterSpacing: "0.15em", textTransform: "uppercase",
            color: "var(--ink-dim)",
          }}>
            <span style={{ color: "var(--pink)" }}>✦</span>
            {" "}Envío gratis en pedidos +$500 MXN · Drop 01 disponible ahora{" "}
            <span style={{ color: "var(--pink)" }}>✦</span>
          </div>

          <div className="wrap" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Navbar />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
          </div>

          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
