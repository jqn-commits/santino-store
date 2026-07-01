// Catálogo de Santino. Edita/añade tus productos acá (o luego lo movemos a base de datos + panel admin).
// precio en CLP (entero, sin decimales).
export const products = [
  { slug: 'producto-1', nombre: 'Producto 1', precio: 19990, stock: 12,
    img: 'https://placehold.co/600x600?text=Santino+1', desc: 'Descripción del producto 1.' },
  { slug: 'producto-2', nombre: 'Producto 2', precio: 29990, stock: 8,
    img: 'https://placehold.co/600x600?text=Santino+2', desc: 'Descripción del producto 2.' },
  { slug: 'producto-3', nombre: 'Producto 3', precio: 12990, stock: 20,
    img: 'https://placehold.co/600x600?text=Santino+3', desc: 'Descripción del producto 3.' },
];

export const getProduct = (slug) => products.find((p) => p.slug === slug);
export const clp = (n) => '$' + Number(n).toLocaleString('es-CL');
