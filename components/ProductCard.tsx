"use client";

import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Producto } from "@/data/productos";

interface ProductCardProps { producto: Producto; }

const categoryColors: Record<string, string> = {
  refresco: "#6699FF",
  gomita:   "#BF44FF",
  merch:    "#E8196E",
};

export default function ProductCard({ producto }: ProductCardProps) {
  const badgeColor = categoryColors[producto.categoria] ?? "#BF44FF";

  return (
    <motion.div
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
      style={{ backgroundColor: "#130F1E" }}
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {/* Promo badge */}
      {producto.badge && (
        <div
          className="absolute top-3 right-3 z-10 px-2.5 py-0.5 rounded-full text-[11px] font-bold"
          style={{
            background: "linear-gradient(135deg,#BF44FF,#E8196E)",
            color: "#EDE8FF",
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          {producto.badge}
        </div>
      )}

      {/* Image placeholder */}
      <div
        className="relative w-full aspect-square flex flex-col items-center justify-center overflow-hidden"
        style={{ backgroundColor: producto.color }}
      >
        {/* Decorative circle */}
        <div
          className="absolute w-36 h-36 rounded-full opacity-25"
          style={{ backgroundColor: producto.accentColor }}
        />
        {/* Emoji */}
        <span className="relative z-10 text-7xl select-none" role="img" aria-label={producto.nombre}>
          {producto.emoji}
        </span>
        {/* Label */}
        <span
          className="relative z-10 mt-2 text-xs uppercase tracking-widest opacity-60 px-4 text-center"
          style={{ color: producto.accentColor, fontFamily: '"Bebas Neue", sans-serif' }}
        >
          {producto.nombre}
        </span>
        {/* Hover shimmer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        {/* Category pill */}
        <span className="badge-sticker self-start text-xs" style={{ color: badgeColor, borderColor: badgeColor }}>
          {producto.tag}
        </span>

        {/* Name */}
        <h3
          className="text-xl leading-tight text-[#EDE8FF]"
          style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.03em" }}
        >
          {producto.nombre}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#EDE8FF]/55 leading-relaxed flex-1" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
          {producto.descripcion}
        </p>

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10">
          <span style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
            <span className="text-2xl text-[#BF44FF]">${producto.precio}</span>
            <span className="text-xs text-[#EDE8FF]/35 ml-1">MXN</span>
          </span>
          <motion.button
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-bold text-[#0A0A12] hover:opacity-90 transition-opacity"
            style={{
              background: "linear-gradient(135deg,#BF44FF,#E8196E)",
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingCart size={13} />
            Agregar
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
