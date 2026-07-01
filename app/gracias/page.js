'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/components/CartProvider';

export default function Gracias() {
  const { clear } = useCart();
  useEffect(() => { clear(); }, []); // limpiar carro al volver del pago
  return (
    <div className="text-center py-16">
      <h1 className="text-2xl font-bold">¡Gracias por tu compra! 🎉</h1>
      <p className="text-gray-500 mt-2">Recibirás la confirmación por correo.</p>
      <Link href="/" className="text-santino-accent underline mt-4 inline-block">Volver a la tienda</Link>
    </div>
  );
}
