"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Producto } from "@/data/productos";
import { useCart } from "./CartContext";

interface ProductCardProps { producto: Producto; }

// Map category → gradient
function categoryGradient(cat: string, color: string, accent: string): string {
  if (cat === "refresco") return `linear-gradient(155deg, ${color}cc 0%, ${color} 50%, ${accent}99 100%)`;
  if (cat === "gomita")   return `linear-gradient(155deg, ${color}cc 0%, ${color} 60%, ${accent} 100%)`;
  return `linear-gradient(155deg, ${color}99 0%, ${color} 60%, ${accent}66 100%)`;
}

function tagIsHot(tag: string) {
  return ["Más vendido", "Fan fav", "Hot", "Bestseller"].includes(tag);
}

export default function ProductCard({ producto }: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100) + "%");
    e.currentTarget.style.setProperty("--my", ((e.clientY - r.top)  / r.height * 100) + "%");
  }

  const gradient = categoryGradient(producto.categoria, producto.color, producto.accentColor);
  const hot      = producto.badge ? tagIsHot(producto.badge) : false;

  function handleAdd() {
    addToCart({
      id:        producto.id,
      nombre:    producto.nombre,
      precio:    producto.precio,
      categoria: producto.categoria,
      gradient,
      emoji:     producto.emoji,
    });
  }

  return (
    <div className="product-card-nova" ref={cardRef} onMouseMove={onMove}>
      {/* Product image area */}
      <div style={{
        aspectRatio: "1/1", borderRadius: "var(--radius-md)",
        background: gradient,
        marginBottom: 18, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden",
      }}>
        {/* Badge */}
        {producto.badge && (
          <div style={{
            position: "absolute", top: 14, left: 14, zIndex: 2,
            fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700,
            padding: "6px 10px", borderRadius: 999,
            background: hot ? "var(--grad-nova)" : "rgba(0,0,0,0.5)",
            backdropFilter: hot ? undefined : "blur(8px)",
            border: hot ? "none" : "1px solid rgba(255,255,255,0.15)",
            color: hot ? "#050010" : "white",
          }}>
            {producto.badge}
          </div>
        )}

        {/* Glare overlay */}
        <div style={{
          position: "absolute", inset: 0, borderRadius: "var(--radius-md)",
          background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.2) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />

        {/* Emoji */}
        <span style={{ fontSize: "5rem", lineHeight: 1, position: "relative", zIndex: 1, userSelect: "none" }} role="img" aria-label={producto.nombre}>
          {producto.emoji}
        </span>
        <span style={{
          position: "relative", zIndex: 1, marginTop: 8,
          fontFamily: '"Bagel Fat One", sans-serif', fontSize: 12,
          letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.7,
        }}>
          {producto.tag}
        </span>
      </div>

      {/* Card body */}
      <h3 style={{ fontFamily: '"Bagel Fat One", sans-serif', fontSize: 24, lineHeight: 1, margin: "0 0 6px" }}>
        {producto.nombre}
      </h3>
      <p style={{ fontSize: 13, color: "var(--ink-dim)", margin: "0 0 16px", minHeight: 36, flex: 1 }}>
        {producto.descripcion}
      </p>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
        <span style={{ fontFamily: '"Bagel Fat One", sans-serif', fontSize: 22 }}>
          ${producto.precio}
          <small style={{ fontSize: 12, opacity: 0.6, fontFamily: '"Space Grotesk", sans-serif', marginLeft: 4 }}>MXN</small>
        </span>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleAdd}
          aria-label={`Agregar ${producto.nombre}`}
          style={{
            width: 40, height: 40, borderRadius: 999,
            background: "var(--grad-nova)", color: "#050010",
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            fontSize: 22, fontWeight: 700, cursor: "pointer", border: "none",
            boxShadow: "0 8px 20px -4px rgba(255,46,168,0.5)",
            transition: "box-shadow .2s ease",
          }}
        >
          +
        </motion.button>
      </div>
    </div>
  );
}
