"use client";

import { useCart } from "./CartContext";

export default function CartDrawer() {
  const { items, cartCount, cartTotal, cartOpen, toast, updateQty, removeItem, closeCart } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-overlay ${cartOpen ? "open" : ""}`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside className={`cart-drawer ${cartOpen ? "open" : ""}`} aria-label="Carrito de compras">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "24px", borderBottom: "1px solid var(--border)" }}>
          <h3 style={{ fontFamily: '"Bagel Fat One", sans-serif', fontSize: 26, margin: 0 }}>
            Tu cohete{" "}
            <span style={{ opacity: 0.4, fontSize: 16, fontFamily: '"Space Grotesk", sans-serif' }}>
              · {cartCount}
            </span>
          </h3>
          <button
            onClick={closeCart}
            aria-label="Cerrar carrito"
            style={{
              width: 36, height: 36, borderRadius: 999,
              background: "rgba(255,255,255,0.08)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 18, cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "14px 24px", display: "grid", gap: 12, alignContent: "start" }}>
          {items.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 20px", color: "var(--ink-mute)" }}>
              <div style={{ fontFamily: '"Bagel Fat One", sans-serif', fontSize: 40, color: "white", marginBottom: 8 }}>
                Vacío total ⌛
              </div>
              <p>Agrega refrescos, gomitas y merch — el cosmos espera.</p>
            </div>
          ) : items.map(item => (
            <div
              key={item.id}
              style={{
                display: "grid", gridTemplateColumns: "64px 1fr auto", gap: 14,
                alignItems: "center", padding: 12, borderRadius: 18,
                background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)",
              }}
            >
              <div style={{
                width: 64, height: 64, borderRadius: 12,
                background: item.gradient, display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: 28,
              }}>
                {item.emoji ?? "✦"}
              </div>

              <div>
                <h4 style={{ fontFamily: '"Bagel Fat One", sans-serif', fontSize: 16, margin: 0 }}>{item.nombre}</h4>
                <div style={{ fontSize: 12, color: "var(--ink-mute)" }}>{item.categoria}</div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.06)", borderRadius: 999, padding: "2px 4px", marginTop: 6 }}>
                  <button
                    onClick={() => updateQty(item.id, -1)}
                    style={{ width: 24, height: 24, borderRadius: 999, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, cursor: "pointer" }}
                  >
                    −
                  </button>
                  <span style={{ fontSize: 13, minWidth: 18, textAlign: "center" }}>{item.qty}</span>
                  <button
                    onClick={() => updateQty(item.id, +1)}
                    style={{ width: 24, height: 24, borderRadius: 999, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, cursor: "pointer" }}
                  >
                    +
                  </button>
                </div>
              </div>

              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: '"Bagel Fat One", sans-serif', fontSize: 16 }}>
                  ${item.precio * item.qty}
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 6, cursor: "pointer" }}
                >
                  Quitar
                </button>
              </div>
            </div>
          ))}
        </div>

        {items.length > 0 && (
          <div style={{ padding: 24, borderTop: "1px solid var(--border)", background: "rgba(255,255,255,0.03)" }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 16 }}>
              <span style={{ fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--ink-mute)" }}>Total</span>
              <span style={{ fontFamily: '"Bagel Fat One", sans-serif', fontSize: 30 }}>
                ${cartTotal}{" "}
                <span style={{ fontSize: 14, opacity: 0.6, fontFamily: '"Space Grotesk", sans-serif' }}>MXN</span>
              </span>
            </div>
            <button
              className="btn btn-primary btn-lg"
              style={{ width: "100%", justifyContent: "center" }}
            >
              Pagar ahora →
            </button>
            <p style={{ textAlign: "center", fontSize: 12, color: "var(--ink-mute)", marginTop: 12 }}>
              Pago seguro · Envío en 2-3 días
            </p>
          </div>
        )}
      </aside>

      {/* Toast */}
      <div className={`toast-nova ${toast ? "show" : ""}`}>{toast}</div>
    </>
  );
}
