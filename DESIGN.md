---
name: Sournova
description: "La vida sabe mejor ácida — brand system for Mexico's most irreverent sour lifestyle brand"
colors:
  limon-electrico: "#FFE500"
  verde-toxico: "#AAFF00"
  rosa-bala: "#FF2D78"
  noche-profunda: "#0a0a0a"
  superficie-oscura: "#111111"
  asfalto: "#1a1a1a"
  papel-mantequilla: "#f5f0e8"
typography:
  display:
    fontFamily: "\"Bebas Neue\", sans-serif"
    fontSize: "clamp(4rem, 13vw, 10rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "\"Bebas Neue\", sans-serif"
    fontSize: "clamp(3rem, 8vw, 6rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.02em"
  title:
    fontFamily: "\"Bebas Neue\", sans-serif"
    fontSize: "1.875rem"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "0.03em"
  body:
    fontFamily: "\"Plus Jakarta Sans\", sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "\"Plus Jakarta Sans\", sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.2em"
rounded:
  pill: "999px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "56px"
components:
  button-primary:
    backgroundColor: "{colors.limon-electrico}"
    textColor: "{colors.noche-profunda}"
    rounded: "{rounded.lg}"
    padding: "14px 32px"
  button-primary-hover:
    backgroundColor: "{colors.verde-toxico}"
    textColor: "{colors.noche-profunda}"
    rounded: "{rounded.lg}"
    padding: "14px 32px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.papel-mantequilla}"
    rounded: "{rounded.lg}"
    padding: "14px 32px"
  button-outline-accent:
    backgroundColor: "transparent"
    textColor: "{colors.limon-electrico}"
    rounded: "{rounded.lg}"
    padding: "14px 32px"
  filter-chip-active:
    backgroundColor: "{colors.limon-electrico}"
    textColor: "{colors.noche-profunda}"
    rounded: "{rounded.lg}"
    padding: "10px 20px"
  filter-chip-inactive:
    backgroundColor: "transparent"
    textColor: "{colors.papel-mantequilla}"
    rounded: "{rounded.lg}"
    padding: "10px 20px"
  badge-pill:
    backgroundColor: "{colors.limon-electrico}"
    textColor: "{colors.noche-profunda}"
    rounded: "{rounded.pill}"
    padding: "2px 10px"
---

# Design System: Sournova

## 1. Overview

**Creative North Star: "La Era Sticker Bomb"**

Sournova's visual system is a controlled explosion. Every surface is treated like a wall in Tepito after a concert — saturated, layered, unapologetically loud. But unlike actual chaos, the sticker bomb is intentional: each element knows exactly where it belongs and why. The darkness is always the foundation; the color is always the event.

The system runs dark. Not because tools look cool dark, but because this is the México del OXXO a las 2am — neon on asfalto, someone blasting something from their phone, the smell of tamarindo in the air. Every screen is that moment. The background is deep and absolute; the accents arrive like photon blasts.

Typography is unapologetically large and condensed (Bebas Neue) or confident and direct (Plus Jakarta Sans). There are exactly two font families and zero exceptions. Scale does the heavy lifting: the contrast between a 10rem headline and a 14px label IS the hierarchy.

This system explicitly rejects: Jarritos nostalgia (retro-folk, naïf illustration, paleta tierra), DTC cream-and-sans American minimalism (Olipop, Liquid I.V., AG1 energy), infantile candy palettes (pastel, rounded-cute, illustrated), and cold European fashion reserve (Zara, COS).

**Key Characteristics:**
- Dark base, neon signal — the surface is always night; the color is always electricity
- Maximum typographic contrast — Bebas Neue at maximum scale, Plus Jakarta Sans at confident minimum
- Flat depth — layers differentiated by surface darkness, never by shadow
- Sticker-bomb density — every section carries maximum intent, no neutral breathing rooms
- Three-color battery — Limón Eléctrico leads; Verde Tóxico and Rosa Bala support and rotate by context

## 2. Colors: La Paleta de Impacto

Three neons on darkness. The palette is maximum commitment or nothing — no tertiary softening, no restrained mode, no cream accents.

### Primary
- **Limón Eléctrico** (`#FFE500`): The dominant signal. Primary CTAs, active states, price typography, hover transitions, and decorative glow blobs. When uncertain, Limón Eléctrico is the answer. Occupies 15–25% of any given screen.
- **Verde Tóxico** (`#AAFF00`): The hover state of Limón Eléctrico; the secondary ticker color; the Gomitas category accent. Acidic, slightly unsettling. Never used for body text — eye strain is not the goal.

### Secondary
- **Rosa Bala** (`#FF2D78`): Maximum urgency signal. Promo badges, sticker accents, Refrescos category. The most aggressive color in the battery. Use for moments that need to feel like a drop announcement.

### Neutral
- **Noche Profunda** (`#0a0a0a`): The absolute base. Background of every primary section. Text color on Limón Eléctrico / Verde Tóxico surfaces. Never replaced with pure `#000000`.
- **Superficie Oscura** (`#111111`): One step above Noche Profunda. Alternating sections, card backgrounds, secondary ticker. Creates depth through tonal layering.
- **Asfalto** (`#1a1a1a`): Tertiary dark surface. Muted borders, form field backgrounds.
- **Papel Mantequilla** (`#f5f0e8`): Primary text on dark backgrounds. Warm white — never pure `#ffffff`.

### Named Rules

**La Regla de la Batería.** Limón Eléctrico always leads. Verde Tóxico and Rosa Bala can swap position but never both dominate the same viewport simultaneously. One signal at a time.

**La Regla del Fondo.** The base is always Noche Profunda or Superficie Oscura. There are no light-mode pages. The only light surface allowed is the newsletter promo strip (Limón Eléctrico background), and even then the text is Noche Profunda.

## 3. Typography: Bebas + Jakarta

**Display Font:** Bebas Neue (condensed display sans, Google Fonts)
**Body Font:** Plus Jakarta Sans (geometric humanist sans, Google Fonts)
**Label Font:** Plus Jakarta Sans Bold (same family, uppercase, wide tracking)

**Character:** Bebas Neue is a shout in a room full of noise — tall, condensed, impossible to miss. Plus Jakarta Sans is the brand's calm, direct voice underneath: confident without performing. Together they create maximum contrast at every level of the hierarchy. There are no exceptions to this pairing.

### Hierarchy
- **Display** (400, `clamp(4rem, 13vw, 10rem)`, line-height 1): Hero headlines only. Letter-spacing −0.01em. Solid white, text-stroke outlined, or Limón Eléctrico — one color per word maximum. Can mix outlined and solid within the same phrase for sticker-bomb typographic effect.
- **Headline** (400, `clamp(3rem, 8vw, 6rem)`, line-height 1): Section titles. Letter-spacing 0.02em. Always Bebas Neue.
- **Title** (400, `1.875rem–2.5rem`, line-height 1.1): Card headings, timeline entries, sub-section labels. Letter-spacing 0.03em.
- **Body** (400, `0.875rem`, line-height 1.65): All descriptive text, product descriptions, paragraphs. Plus Jakarta Sans only. Maximum line length 65ch.
- **Label** (700, `0.75rem–0.85rem`, letter-spacing 0.2–0.3em, uppercase): Category tags, eyebrow labels, nav links, ticker items. Plus Jakarta Sans Bold.

### Named Rules

**La Regla de Las Dos Fuentes.** Exactly two font families. Bebas Neue and Plus Jakarta Sans. No third family, no system fonts in visible UI, no Inter.

**La Regla del Tamaño.** If a Bebas Neue heading isn't making someone slightly uncomfortable with how large it is, make it bigger. The display scale is `clamp(4rem, 13vw, 10rem)` and it does not apologize.

## 4. Elevation

Sournova is flat by default. There are no `box-shadow` declarations anywhere in the system. Depth is conveyed through three mechanisms: (1) surface darkness stacking — Noche Profunda beneath Superficie Oscura beneath Asfalto; (2) border opacity — `border: 1px solid rgba(255,255,255,0.10)` for subtle delineation on cards; (3) decorative glow blobs — large `blur-3xl` radial color splashes used as atmospheric background ornament, never as structural depth cues.

### Shadow Vocabulary

None. The shadow vocabulary is the absence of shadow.

### Named Rules

**La Regla del Asfalto.** Elevation is expressed in surface darkness. Deeper surfaces are darker. A raised card uses `#111111` over a `#0a0a0a` page — not a white card, not a light gray card. If you reach for a `box-shadow`, stop and reach for a darker background instead.

**La Regla del Blob.** Decorative glow blobs (large `blur-3xl` radial gradient divs) are atmospheric, not structural. They never carry semantic meaning. They sit below content at pointer-events: none, 10–20% opacity, and always match a palette color.

## 5. Components

Rudo pero preciso: visually aggressive in aesthetic, internally consistent in behavior. Every component is built to withstand heavy scroll traffic and mobile tap interactions.

### Buttons

High-contrast, immediate, zero shadow. State is communicated by color shift and micro-scale, not by elevation.

- **Shape:** 12px radius (`rounded-xl`). Confident intermediary between pill and sharp.
- **Primary:** Limón Eléctrico background, Noche Profunda text. Padding `14px 32px`. Plus Jakarta Sans Bold. Hover: transitions to Verde Tóxico in 200ms ease-out. Tap: `scale(0.97)` Framer Motion `whileTap`.
- **Ghost:** Transparent background, Papel Mantequilla text at 70% opacity, `border: 2px solid rgba(255,255,255,0.20)`. Hover: border opacity increases to 50%, `bg-white/5`. Secondary CTA alongside Primary.
- **Outline Accent:** Transparent background, Limón Eléctrico text and border. Hover: fills with Limón Eléctrico, text becomes Noche Profunda. Used for "Ver todos" style navigation CTAs.

### Chips / Filter Tabs

Productos page filter bar. Sticky below the navbar.

- **Active:** Category-color fill (Limón Eléctrico for "Todos", `#4488FF` Azul for Refrescos, Verde Tóxico for Gomitas, Rosa Bala for Merch). Noche Profunda text. Plus Jakarta Sans Bold.
- **Inactive:** Transparent, `rgba(255,255,255,0.5)` text, `border: 2px solid rgba(255,255,255,0.10)`.
- **Transition:** Framer Motion `layoutId="tab-bg"` shared layout animation on the active indicator.

### Cards / Product Cards

- **Corner Style:** 16px (`rounded-2xl`).
- **Background:** Superficie Oscura (`#111111`), `border: 1px solid rgba(255,255,255,0.10)`.
- **Shadow Strategy:** None. Elevation over the page is a surface color contrast, not a shadow.
- **Image Area:** Full-width, `aspect-square`. Background = product's brand color. Contains large emoji (7rem) centered over a 30%-opacity decorative circle. Name overlaid at bottom in Bebas Neue.
- **Hover:** Framer Motion `scale(1.03) translateY(-4px)`, 250ms ease-out. Faint `bg-gradient-to-tr from-white/0 to-white/10` shimmer overlay fades in.
- **Content Area:** `p-4` (16px) padding. Category pill badge, Bebas Neue title, body description, price (Bebas Neue 2xl Limón Eléctrico), "Agregar" primary button (compact variant).
- **Promo Badge:** Absolute top-right. Limón Eléctrico background, Noche Profunda text, `rounded-full`, 11px Plus Jakarta Sans Bold. One badge maximum per card.

### Inputs / Fields

- **Style:** `bg-white/5` (5% white), `border: 1px solid rgba(255,255,255,0.15)`, `rounded-xl` (12px).
- **Focus:** Border shifts to Limón Eléctrico, 200ms ease. No glow or shadow.
- **Placeholder:** `rgba(255,255,255,0.30)`.
- **Select:** Same border treatment. Native option backgrounds set to `#111111` for dark rendering.

### Navigation

- **Desktop:** Sticky, `h-16`. Starts transparent; at 30px scroll → `bg-[#0a0a0a]/95 backdrop-blur-md`, `border-b border-white/10`. Logo image left, nav links center, "Comprar" primary button right.
- **Active link:** Limón Eléctrico text + `layoutId="nav-indicator"` Framer Motion underline (2px, rounded-full).
- **Inactive links:** `rgba(255,255,255,0.70)`, hover to white.
- **Mobile:** Full-screen overlay, Noche Profunda background. Nav links in 5xl Bebas Neue, staggered 0.07s delay per link. "Comprar Ahora" at the bottom.

### Marquee Ticker (Signature Component)

An infinitely scrolling horizontal band. Sournova's signature divider and brand-volume control.

- **Layout:** Full-width `overflow-hidden`. Inner track: CSS `animation: marquee 30s linear infinite`, `width: max-content`. Items duplicated for seamless loop.
- **Content:** Bebas Neue, tracking-widest, separated by `★` or `·`. All-caps Spanish slogans and flavor names.
- **Color variants:** (1) Limón Eléctrico bg, Noche Profunda text — primary; (2) Superficie Oscura bg, Limón Eléctrico text — inverted; (3) Rosa Bala bg, white text — high-urgency sections.
- **Hover:** `animation-play-state: paused`.

## 6. Do's and Don'ts

### Do:
- **Do** use Noche Profunda (`#0a0a0a`) as the base for every primary page section. The darkness is non-negotiable.
- **Do** size Bebas Neue display text at `clamp(4rem, 13vw, 10rem)` or larger for hero headlines. The discomfort is the point.
- **Do** use Limón Eléctrico as the CTA color on every screen. It is always the right answer for primary actions.
- **Do** express depth through surface darkening — `#111111` for raised surfaces, `#0a0a0a` for the base. Never add shadows.
- **Do** mix text-stroke (outlined) and solid fill within the same Bebas Neue headline for typographic sticker-bomb energy.
- **Do** keep body copy at or below 65ch. The drama lives in the display type; the text is for clarity.
- **Do** use Framer Motion `whileInView` for section reveals and `whileTap: { scale: 0.97 }` for all button interactions.
- **Do** treat every badge and category tag as a sticker: pill-shaped, high contrast, Plus Jakarta Sans Bold.
- **Do** use glow blobs (large `blur-3xl` divs, 10–20% opacity) as atmospheric background decoration on hero sections.

### Don't:
- **Don't** use Jarritos or refresco clásico aesthetics: naïf illustration, retro-folk palettes, hand-drawn type, tierra tones. Sournova is not the México de la abuela.
- **Don't** use DTC American minimalism: cream backgrounds, single geometric sans, oversized whitespace, "healthy startup" energy. Not Olipop. Not Liquid I.V. Not AG1.
- **Don't** use pastel colors or cute rounded illustration. The product is sweet. The brand is not.
- **Don't** add cold European fashion reserve — extreme whitespace, micro-type, grey-on-white. Not Zara. Not COS.
- **Don't** write a `box-shadow`. Depth is darker surfaces.
- **Don't** use gradient text (`background-clip: text` + gradient). Prohibited. Solid color fills only.
- **Don't** add a third typeface. Bebas Neue + Plus Jakarta Sans is the complete type system.
- **Don't** create neutral breathing-room sections with light backgrounds. Every section needs a deliberate color decision. No beige retreats.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe. Never. Rewrite with full borders or background tints.
- **Don't** use Bebas Neue below 1.5rem — it loses all character. Use Plus Jakarta Sans Bold instead.
- **Don't** animate layout properties (width, height, top, left). Animate transform and opacity only.
