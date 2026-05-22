# Sournova — La vida sabe mejor ácida 🍋⚡

Sitio web oficial de **Sournova**, la marca mexicana de refrescos ácidos, gomitas explosivas y merch sin filtro.

---

## Tecnologías

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Estilos:** Tailwind CSS v4
- **Animaciones:** Framer Motion
- **Íconos:** Lucide React
- **Fuentes:** Bebas Neue + Plus Jakarta Sans (Google Fonts)

---

## Instalación y uso

### 1. Clona el repositorio

```bash
git clone https://github.com/sournova/sournova-web.git
cd sournova-web
```

### 2. Instala las dependencias

```bash
npm install
```

### 3. Inicia el servidor de desarrollo

```bash
npm run dev
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000)

---

## Estructura del proyecto

```
sournova/
├── app/
│   ├── layout.tsx          # Layout raíz (Navbar + Footer)
│   ├── page.tsx            # Inicio (/)
│   ├── globals.css         # Variables de diseño, fuentes, animaciones
│   ├── productos/
│   │   └── page.tsx        # Catálogo de productos (/productos)
│   ├── nosotros/
│   │   └── page.tsx        # Nuestra historia (/nosotros)
│   └── contacto/
│       └── page.tsx        # Contacto (/contacto)
├── components/
│   ├── Navbar.tsx          # Navegación sticky + menú móvil
│   ├── Footer.tsx          # Footer con newsletter
│   ├── ProductCard.tsx     # Tarjeta de producto
│   ├── MarqueeTicker.tsx   # Marquee de scroll infinito
│   └── SectionReveal.tsx   # Wrapper de animación por scroll
├── data/
│   └── productos.ts        # Datos mock de todos los productos
└── public/                 # Archivos estáticos
```

---

## Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Inicio — hero animado, marquee, productos destacados, pilares de marca, signup |
| `/productos` | Catálogo con filtros por categoría (Refrescos, Gomitas, Merch) |
| `/nosotros` | Historia de la marca, valores y estadísticas |
| `/contacto` | Formulario de contacto, redes sociales, info de mayoreo |

---

## Paleta de colores

| Color | HEX | Uso |
|-------|-----|-----|
| Base | `#0a0a0a` | Fondo principal |
| Amarillo eléctrico | `#FFE500` | Acento primario, CTAs |
| Verde ácido | `#AAFF00` | Acento secundario |
| Rosa fuerte | `#FF2D78` | Acento terciario |
| Crema | `#f5f0e8` | Texto |

---

## Comandos disponibles

```bash
npm run dev      # Desarrollo local
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Revisión de código
```

---

## Producción

Para hacer build de producción:

```bash
npm run build
npm run start
```

O despliega directamente en **Vercel** — está optimizado para eso.

---

*Sournova — Hecho con caos en México 🇲🇽*
