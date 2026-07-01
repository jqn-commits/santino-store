'use client';
import { useState } from 'react';
import { useCart } from '@/components/CartProvider';
import { clp } from '@/lib/products';

export default function CheckoutPage() {
  const { items, total } = useCart();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const pagar = async () => {
    setError(''); setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items, email, total }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error al iniciar el pago');
      // Flow devuelve una URL a la que hay que redirigir al comprador
      window.location.href = data.redirectUrl;
    } catch (e) { setError(e.message); setLoading(false); }
  };

  if (!items.length) return <p className="text-gray-500">Tu carro está vacío.</p>;
  return (
    <div className="max-w-md">
      <h1 className="text-2xl font-bold mb-6">Pagar</h1>
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        {items.map((x) => (
          <div key={x.slug} className="flex justify-between text-sm py-1">
            <span>{x.qty}× {x.nombre}</span><span>{clp(x.precio * x.qty)}</span>
          </div>
        ))}
        <div className="flex justify-between font-bold border-t mt-2 pt-2">
          <span>Total</span><span>{clp(total)}</span>
        </div>
      </div>
      <input type="email" placeholder="Tu email" value={email} onChange={(e) => setEmail(e.target.value)}
        className="w-full border rounded px-3 py-2 mb-3" />
      {error && <p className="text-santino-accent text-sm mb-2">{error}</p>}
      <button onClick={pagar} disabled={loading || !email}
        className="w-full bg-santino-accent text-white rounded py-3 hover:opacity-90 disabled:opacity-50">
        {loading ? 'Redirigiendo…' : `Pagar ${clp(total)}`}
      </button>
      <p className="text-xs text-gray-400 mt-3">Pago seguro vía Flow (Webpay, tarjetas y más).</p>
    </div>
  );
}
