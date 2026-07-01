// Catálogo de Santino — cerámica gres artesanal (línea religiosa / de regalo).
// PRECIOS DE REFERENCIA: ajústalos a los tuyos. Las fotos están en /public/productos/.
export const products = [
  { slug: 'angel-bandeja', nombre: 'Bandeja Ángel de gres', precio: 18990, stock: 6,
    img: '/productos/angel-bandeja.jpg', desc: 'Bandeja/portavela con forma de ángel, gres esmaltado a mano. Pieza única.' },
  { slug: 'virgen-nino', nombre: 'Virgen con Niño', precio: 16990, stock: 5,
    img: '/productos/virgen-nino.jpg', desc: 'Figura de Virgen con Niño en gres artesanal. Ideal regalo religioso.' },
  { slug: 'taza-flor', nombre: 'Taza de gres con flor', precio: 12990, stock: 10,
    img: '/productos/taza-flor.jpg', desc: 'Taza de gres con flor modelada en el asa. Esmalte reactivo tono tierra.' },
  { slug: 'placa-personalizada', nombre: 'Placa conmemorativa personalizada', precio: 14990, stock: 20,
    img: '/productos/placa-personalizada.jpg', desc: 'Placa de gres con ángel y texto a pedido (familia, nombre, fecha). Personalizable.' },
  { slug: 'cruz-corazon', nombre: 'Cruz con corazón (recuerdo)', precio: 11990, stock: 15,
    img: '/productos/cruz-corazon.jpg', desc: 'Cruz de gres con corazón, recuerdo de bautizo/primera comunión. Enmarcable.' },
  { slug: 'medallon-santino', nombre: 'Medallón Ángel Santino', precio: 9990, stock: 25,
    img: '/productos/medallon-santino.jpg', desc: 'Medallón de gres con ángel y sello Santino. Para colgar.' },
];

export const getProduct = (slug) => products.find((p) => p.slug === slug);
export const clp = (n) => '$' + Number(n).toLocaleString('es-CL');
