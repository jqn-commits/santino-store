// Catálogo de Santino — cerámica gres artesanal (línea religiosa / de regalo).
// Precios confirmados por Daniela donde se indica; el resto es REFERENCIA (ajústalos).
export const products = [
  { slug: 'sagrada-familia', nombre: 'La Sagrada Familia', precio: 40000, stock: 5,
    img: '/productos/angel-bandeja.jpg', desc: 'Pieza de gres con las tres figuras de la Sagrada Familia, esmaltada a mano. Pieza única.' },
  { slug: 'detente-familia', nombre: 'Detente de familia con trípode', precio: 35000, stock: 10,
    img: '/productos/placa-personalizada.jpg', desc: 'Placa "detente" de gres con ángel y apellido personalizado, incluye trípode de exhibición.' },
  { slug: 'cunero', nombre: 'Cunero', precio: 20000, stock: 15,
    img: '/productos/cruz-corazon.jpg', desc: 'Cunero de gres (recuerdo de cuna) con cruz y corazón. Personalizable.' },
  { slug: 'virgen-nino', nombre: 'Virgen con Niño', precio: 16990, stock: 5,
    img: '/productos/virgen-nino.jpg', desc: 'Figura de Virgen con Niño en gres artesanal. (precio referencial)' },
  { slug: 'taza-flor', nombre: 'Taza de gres con flor', precio: 12990, stock: 10,
    img: '/productos/taza-flor.jpg', desc: 'Taza de gres con flor modelada en el asa. (precio referencial)' },
  { slug: 'medallon-santino', nombre: 'Medallón Ángel Santino', precio: 9990, stock: 25,
    img: '/productos/medallon-santino.jpg', desc: 'Medallón de gres con ángel y sello Santino, para colgar. (precio referencial)' },
];

export const getProduct = (slug) => products.find((p) => p.slug === slug);
export const clp = (n) => '$' + Number(n).toLocaleString('es-CL');
