import './globals.css';
import Link from 'next/link';
import { Cormorant_Garamond } from 'next/font/google';
import CartProvider from '@/components/CartProvider';
import CartBadge from '@/components/CartBadge';

const display = Cormorant_Garamond({ subsets: ['latin'], weight: ['500', '600'], variable: '--font-display' });

export const metadata = {
  title: 'Santino · cerámica gres',
  description: 'Cerámica gres hecha a mano en Chile. Ángeles, Vírgenes, recuerdos, tazas y más.',
  icons: { icon: '/favicon.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-CL" className={display.variable}>
      <body>
        <CartProvider>
          <header className="sticky top-0 z-20 bg-cream/85 backdrop-blur border-b border-santino/10">
            <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
              <Link href="/" aria-label="Santino inicio">
                <img src="/santino-logo.png" alt="Santino" className="h-9 md:h-11 w-auto" />
              </Link>
              <nav className="flex items-center gap-6 text-sm text-santino">
                <Link href="/" className="hover:text-santino-accent transition-colors">Tienda</Link>
                <Link href="/cart" className="hover:text-santino-accent transition-colors">Carro <CartBadge /></Link>
              </nav>
            </div>
          </header>
          <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
          <footer className="border-t border-santino/10 mt-10">
            <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col items-center gap-2 text-center">
              <img src="/santino-logo.png" alt="Santino" className="h-7 w-auto opacity-70" />
              <p className="text-xs text-gray-400">Cerámica gres hecha a mano · Envíos a todo Chile · santino.my</p>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
