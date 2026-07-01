// Catálogo de Santino — cerámica gres artesanal. Reemplaza por tus productos reales (nombre, precio CLP, foto).
// precio en CLP (entero, sin decimales). img: pon la URL de tu foto (o súbelas a /public y usa /nombre.jpg).
export const products = [
  { slug: 'tazon-gres', nombre: 'Tazón de gres', precio: 12990, stock: 10,
    img: 'https://placehold.co/600x600/b45309/fff?text=Taz%C3%B3n+gres', desc: 'Tazón hecho a mano en gres, esmalte artesanal. ~350 ml.' },
  { slug: 'set-2-tazas', nombre: 'Set 2 tazas de gres', precio: 18990, stock: 8,
    img: 'https://placehold.co/600x600/92400e/fff?text=Set+2+tazas', desc: 'Par de tazas de gres con asa, tono tierra. Ideal para regalo.' },
  { slug: 'plato-hondo', nombre: 'Plato hondo de gres', precio: 9990, stock: 15,
    img: 'https://placehold.co/600x600/a16207/fff?text=Plato+hondo', desc: 'Plato hondo de gres, apto horno y lavavajilla. 20 cm.' },
  { slug: 'macetero-gres', nombre: 'Macetero de gres', precio: 15990, stock: 12,
    img: 'https://placehold.co/600x600/78350f/fff?text=Macetero', desc: 'Macetero de gres con plato, para plantas de interior.' },
  { slug: 'jarron-gres', nombre: 'Jarrón de gres', precio: 24990, stock: 5,
    img: 'https://placehold.co/600x600/9a3412/fff?text=Jarr%C3%B3n', desc: 'Jarrón decorativo de gres, pieza única hecha a mano.' },
  { slug: 'mug-asa', nombre: 'Mug de gres con asa', precio: 8990, stock: 20,
    img: 'https://placehold.co/600x600/b45309/fff?text=Mug', desc: 'Mug de gres con asa, esmalte reactivo. ~300 ml.' },
];

export const getProduct = (slug) => products.find((p) => p.slug === slug);
export const clp = (n) => '$' + Number(n).toLocaleString('es-CL');
