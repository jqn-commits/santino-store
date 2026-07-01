'use client';
import { useCart } from './CartProvider';
export default function CartBadge() {
  const { count } = useCart();
  if (!count) return null;
  return <span className="ml-1 inline-flex items-center justify-center bg-santino-accent text-white text-xs rounded-full px-2 py-0.5">{count}</span>;
}
