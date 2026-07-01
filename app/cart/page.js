'use client';
import Link from 'next/link';
import { useCart } from '@/components/CartProvider';
import { clp } from '@/lib/products';

export default function CartPage() {
  const { items, remove, setQty, total } = useCart();
  if (!items.length) return (
    <div className="text-center py-16">
      <p className="text-gray-500">Tu carro está vacío.</p>
      <Link href="/" className="text-santino-accent underline">Ir a la tienda</Link>
    </div>
  );
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Tu carro</h1>
      <div className="bg-white rounded-lg shadow-sm divide-y">
        {items.map((x) => (
          <div key={x.slug} className="flex items-center gap-4 p-4">
            <div className="flex-1">
              <div className="font-medium">{x.nombre}</div>
              <div className="text-sm text-gray-500">{clp(x.precio)} c/u</div>
            </div>
            <input type="number" min="1" value={x.qty}
              onChange={(e) => setQty(x.slug, parseInt(e.target.value) || 1)}
              className="w-16 border rounded px-2 py-1" />
            <div className="w-24 text-right font-semibold">{clp(x.precio * x.qty)}</div>
            <button onClick={() => remove(x.slug)} className="text-gray-400 hover:text-santino-accent">✕</button>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between mt-6">
        <span className="text-lg">Total</span>
        <span className="text-2xl font-bold">{clp(total)}</span>
      </div>
      <Link href="/checkout" className="mt-4 block text-center bg-santino text-white rounded py-3 hover:opacity-90">
        Ir a pagar
      </Link>
    </div>
  );
}
