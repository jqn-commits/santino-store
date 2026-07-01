import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

export default function Home() {
  return (
    <div>
      <section className="text-center py-8 md:py-12">
        <h1 className="font-display text-4xl md:text-5xl font-medium text-santino">Cerámica gres hecha a mano</h1>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Piezas únicas de gres esmaltado: ángeles, Vírgenes, recuerdos y regalos. Envíos a todo Chile.
        </p>
      </section>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {products.map((p) => <ProductCard key={p.slug} p={p} />)}
      </div>
    </div>
  );
}
