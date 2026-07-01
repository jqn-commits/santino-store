import './globals.css';
import Link from 'next/link';
import CartProvider from '@/components/CartProvider';
import CartBadge from '@/components/CartBadge';

export const metadata = {
  title: 'Santino · cerámica gres',
  description: 'Cerámica gres hecha a mano en Chile. Tazones, tazas, platos, maceteros y más.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-CL">
      <body>
        <CartProvider>
          <header className="bg-santino text-white">
            <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-4">
              <Link href="/" className="text-xl font-bold tracking-tight">Santino</Link>
              <nav className="flex items-center gap-6 text-sm">
                <Link href="/" className="hover:text-santino-accent">Tienda</Link>
                <Link href="/cart" className="hover:text-santino-accent">Carro <CartBadge /></Link>
              </nav>
            </div>
          </header>
          <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
          <footer className="max-w-5xl mx-auto px-4 py-10 text-center text-xs text-gray-400">
            Santino.my · Hecho en Chile
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
