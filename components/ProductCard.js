'use client';
import { useCart } from './CartProvider';
import { clp } from '@/lib/products';

export default function ProductCard({ p }) {
  const { add } = useCart();
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col">
      <img src={p.img} alt={p.nombre} className="w-full aspect-square object-cover" />
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-display text-xl leading-tight text-santino">{p.nombre}</h3>
        <p className="text-sm text-gray-500 flex-1">{p.desc}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-lg font-bold">{clp(p.precio)}</span>
          <button onClick={() => add(p)} className="bg-santino-accent text-white text-sm rounded px-3 py-1.5 hover:opacity-90">
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
