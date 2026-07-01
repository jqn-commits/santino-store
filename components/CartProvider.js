'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const CartCtx = createContext(null);
export const useCart = () => useContext(CartCtx);

export default function CartProvider({ children }) {
  const [items, setItems] = useState([]); // [{slug, nombre, precio, qty}]

  useEffect(() => {
    try { const s = localStorage.getItem('cart'); if (s) setItems(JSON.parse(s)); } catch {}
  }, []);
  useEffect(() => {
    try { localStorage.setItem('cart', JSON.stringify(items)); } catch {}
  }, [items]);

  const add = (p, qty = 1) => setItems((prev) => {
    const f = prev.find((x) => x.slug === p.slug);
    if (f) return prev.map((x) => x.slug === p.slug ? { ...x, qty: x.qty + qty } : x);
    return [...prev, { slug: p.slug, nombre: p.nombre, precio: p.precio, qty }];
  });
  const remove = (slug) => setItems((prev) => prev.filter((x) => x.slug !== slug));
  const setQty = (slug, qty) => setItems((prev) => prev.map((x) => x.slug === slug ? { ...x, qty: Math.max(1, qty) } : x));
  const clear = () => setItems([]);
  const total = items.reduce((s, x) => s + x.precio * x.qty, 0);
  const count = items.reduce((s, x) => s + x.qty, 0);

  return <CartCtx.Provider value={{ items, add, remove, setQty, clear, total, count }}>{children}</CartCtx.Provider>;
}
