import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sournova — La vida sabe mejor ácida",
  description:
    "Sournova es la marca de refrescos ácidos, gomitas explosivas y merch sin filtro nacida en México. Para los que siempre le entran.",
  keywords: ["sournova", "refrescos ácidos", "gomitas", "merch", "sour soda", "México"],
  openGraph: {
    title: "Sournova — La vida sabe mejor ácida",
    description: "Refrescos, gomitas y merch sin filtro. Hecha en México.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full scroll-smooth">
      <body
        className="min-h-full flex flex-col antialiased"
        style={{ backgroundColor: "#0a0a0a", color: "#f5f0e8" }}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
