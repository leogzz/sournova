"use client";

interface MarqueeTickerProps {
  items?:     string[];
  bg?:        string;
  textColor?: string;
  separator?: string;
  className?: string;
  reverse?:   boolean;
}

const defaultItems = [
  "PUNCH CÍTRICO", "SHOCK AZUL", "FURIA DE MANGO", "QUEMÓN DE SANDÍA",
  "TU BOCA LO VA A ODIAR", "Y LO VA A PEDIR DE NUEVO",
  "100% ÁCIDO", "GOMITAS ASESINAS", "SOURNOVA", "LA VIDA SABE MEJOR ÁCIDA",
];

export default function MarqueeTicker({
  items     = defaultItems,
  bg        = "#130F1E",
  textColor = "#BF44FF",
  separator = "★",
  className = "",
  reverse   = false,
}: MarqueeTickerProps) {
  const all = [...items, ...items];

  return (
    <div
      className={`overflow-hidden w-full py-3 ${className}`}
      style={{ backgroundColor: bg, borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} 30s linear infinite`,
          width: "max-content",
        }}
      >
        {all.map((item, i) => (
          <span
            key={i}
            className="text-lg tracking-widest px-4 flex items-center gap-4"
            style={{ color: textColor, fontFamily: '"Bebas Neue", sans-serif' }}
          >
            {item}
            <span style={{ opacity: 0.4 }}>{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
