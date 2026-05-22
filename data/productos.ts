export type Categoria = "refresco" | "gomita" | "merch";

export interface Producto {
  id:          string;
  nombre:      string;
  descripcion: string;
  precio:      number;
  categoria:   Categoria;
  tag:         string;
  color:       string;
  accentColor: string;
  emoji:       string;
  badge?:      string;
}

export const productos: Producto[] = [
  // ── REFRESCOS ──
  {
    id:          "punch-citrico",
    nombre:      "Punch Cítrico",
    descripcion: "Limón, naranja y un patadón ácido que no pediste pero que ya necesitas.",
    precio:      20,
    categoria:   "refresco",
    tag:         "Refresco",
    color:       "#BF44FF",
    accentColor: "#EDE8FF",
    emoji:       "🍋",
    badge:       "Más vendido",
  },
  {
    id:          "shock-azul",
    nombre:      "Shock Azul",
    descripcion: "Sabor misterioso. Azul eléctrico. Tu boca no va a saber qué le pasó.",
    precio:      18,
    categoria:   "refresco",
    tag:         "Refresco",
    color:       "#1A2EAA",
    accentColor: "#6699FF",
    emoji:       "⚡",
  },
  {
    id:          "furia-mango",
    nombre:      "Furia de Mango",
    descripcion: "Mango con chile y ácido cítrico. Dulce, picoso, devastador. Perfecto.",
    precio:      25,
    categoria:   "refresco",
    tag:         "Refresco",
    color:       "#C24A00",
    accentColor: "#FFB347",
    emoji:       "🥭",
    badge:       "Nuevo",
  },
  {
    id:          "quemon-sandia",
    nombre:      "Quemón de Sandía",
    descripcion: "Sandía de verano con un final ácido que te quema la lengua. Bien.",
    precio:      15,
    categoria:   "refresco",
    tag:         "Refresco",
    color:       "#E8196E",
    accentColor: "#EDE8FF",
    emoji:       "🍉",
  },

  // ── GOMITAS ──
  {
    id:          "gusanos-acidos",
    nombre:      "Gusanos Ácidos",
    descripcion: "Gusanitos cubiertos de azúcar ácido. No puedes comer solo uno. Suerte.",
    precio:      55,
    categoria:   "gomita",
    tag:         "Gomita",
    color:       "#7B1DB8",
    accentColor: "#BF44FF",
    emoji:       "🪱",
    badge:       "Fan fav",
  },
  {
    id:          "bolas-fuego",
    nombre:      "Bolas de Fuego",
    descripcion: "Redonditas, explosivas, con corazón de ácido líquido. Ya valió tu lengua.",
    precio:      55,
    categoria:   "gomita",
    tag:         "Gomita",
    color:       "#E8196E",
    accentColor: "#EDE8FF",
    emoji:       "🔥",
  },
  {
    id:          "lenguas-dragon",
    nombre:      "Lenguas de Dragón",
    descripcion: "Planas, largas, cubiertas de polvo ácido. El snack más dramático del mercado.",
    precio:      55,
    categoria:   "gomita",
    tag:         "Gomita",
    color:       "#2D1260",
    accentColor: "#9966FF",
    emoji:       "🐉",
    badge:       "Limitado",
  },
  {
    id:          "corazones-explosivos",
    nombre:      "Corazones Explosivos",
    descripcion: "Amor ácido. Corazones con relleno de gel explosivo. Romántico y devastador.",
    precio:      60,
    categoria:   "gomita",
    tag:         "Gomita",
    color:       "#8B0036",
    accentColor: "#FF6699",
    emoji:       "💥",
  },

  // ── MERCH ──
  {
    id:          "playera-sournova",
    nombre:      "Playera Sournova OG",
    descripcion: "100% algodón. Logo oversized estampado. Para los que saben. Tallas S–XL.",
    precio:      380,
    categoria:   "merch",
    tag:         "Merch",
    color:       "#1C1630",
    accentColor: "#BF44FF",
    emoji:       "👕",
  },
  {
    id:          "gorra-acida",
    nombre:      "Gorra Ácida 6-Panel",
    descripcion: "Cap negro con bordado violeta. Ajustable. El accesorio que le faltaba.",
    precio:      320,
    categoria:   "merch",
    tag:         "Merch",
    color:       "#0A0A12",
    accentColor: "#BF44FF",
    emoji:       "🧢",
    badge:       "Nuevo",
  },
  {
    id:          "botella-termica",
    nombre:      "Botella Térmica 500ml",
    descripcion: "Acero inoxidable. Mantiene fría tu Sournova 12 horas. Edición limitada.",
    precio:      450,
    categoria:   "merch",
    tag:         "Merch",
    color:       "#7B1DB8",
    accentColor: "#EDE8FF",
    emoji:       "🍶",
    badge:       "Édición limitada",
  },
  {
    id:          "sudadera-sournova",
    nombre:      "Sudadera Sournova",
    descripcion: "Hoodie oversized, fleece pesado, bordado en pecho. Para los días fríos con sabor ácido. Tallas S–XL.",
    precio:      650,
    categoria:   "merch",
    tag:         "Merch",
    color:       "#2D1260",
    accentColor: "#BF44FF",
    emoji:       "🧥",
    badge:       "Nuevo",
  },
  {
    id:          "pack-stickers",
    nombre:      "Pack de Stickers Vol.1",
    descripcion: "12 stickers vinil premium resistentes al agua. Pónte sour en todo.",
    precio:      120,
    categoria:   "merch",
    tag:         "Merch",
    color:       "#130F1E",
    accentColor: "#E8196E",
    emoji:       "🎨",
  },
];

export const refrescos = productos.filter((p) => p.categoria === "refresco");
export const gomitas   = productos.filter((p) => p.categoria === "gomita");
export const merch     = productos.filter((p) => p.categoria === "merch");
