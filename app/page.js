import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

export default function Home() {
  return (
    <div>
      <section className="mb-8">
        <h1 className="text-3xl font-bold">Santino · cerámica gres hecha a mano</h1>
        <p className="text-gray-500 mt-1">Piezas únicas de gres. Envíos a todo Chile. Paga con Webpay, tarjetas y más.</p>
      </section>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((p) => <ProductCard key={p.slug} p={p} />)}
      </div>
    </div>
  );
}
