"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export interface CartProduct {
  id:       string;
  nombre:   string;
  precio:   number;
  categoria:string;
  gradient: string;
  emoji?:   string;
}

export interface CartItem extends CartProduct {
  qty: number;
}

interface CartContextValue {
  items:      CartItem[];
  cartCount:  number;
  cartTotal:  number;
  cartOpen:   boolean;
  toast:      string | null;
  addToCart:  (product: CartProduct) => void;
  updateQty:  (id: string, delta: number) => void;
  removeItem: (id: string) => void;
  openCart:   () => void;
  closeCart:  () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items,    setItems]    = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast,    setToast]    = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 1800);
  }, []);

  const addToCart = useCallback((product: CartProduct) => {
    setItems(prev => {
      const existing = prev.find(it => it.id === product.id);
      if (existing) return prev.map(it => it.id === product.id ? { ...it, qty: it.qty + 1 } : it);
      return [...prev, { ...product, qty: 1 }];
    });
    showToast(`✦ ${product.nombre} agregado`);
  }, [showToast]);

  const updateQty = useCallback((id: string, delta: number) => {
    setItems(prev =>
      prev.map(it => it.id === id ? { ...it, qty: Math.max(0, it.qty + delta) } : it)
          .filter(it => it.qty > 0)
    );
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems(prev => prev.filter(it => it.id !== id));
  }, []);

  const cartCount = items.reduce((s, it) => s + it.qty, 0);
  const cartTotal = items.reduce((s, it) => s + it.qty * it.precio, 0);

  return (
    <CartContext.Provider value={{
      items, cartCount, cartTotal, cartOpen, toast,
      addToCart, updateQty, removeItem,
      openCart:  () => setCartOpen(true),
      closeCart: () => setCartOpen(false),
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
