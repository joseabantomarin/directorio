// Datos de ejemplo para OpenLinks.
// Reemplazar por la respuesta del API una vez conectado a PostgreSQL.

export const categories = [
  'Salud',
  'Educación',
  'Gastronomía',
  'Belleza',
  'Tecnología',
  'Hogar',
  'Automotriz',
  'Legal',
  'Fitness',
  'Mascotas',
];

export const districts = [
  'Miraflores',
  'San Isidro',
  'Surco',
  'La Molina',
  'San Borja',
  'Barranco',
  'Chorrillos',
  'Lince',
  'Jesús María',
  'Magdalena',
];

export const businesses = [
  {
    id: 1,
    name: 'Clínica Dental SonrieMás',
    category: 'Salud',
    rating: 4.8,
    reviews: 214,
    district: 'Miraflores',
    address: 'Av. Larco 345',
    whatsapp: '+51 999 111 222',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=60',
    description:
      'Odontología integral, ortodoncia invisible y blanqueamiento con tecnología láser.',
    verified: true,
  },
  {
    id: 2,
    name: 'Academia Preuniversitaria Aristos',
    category: 'Educación',
    rating: 4.6,
    reviews: 120,
    district: 'San Isidro',
    address: 'Av. Javier Prado Este 1234',
    whatsapp: '+51 987 654 321',
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=60',
    description:
      'Preparación intensiva para ingreso directo a universidades top del país.',
    verified: true,
  },
  {
    id: 3,
    name: 'Sazón Criolla Doña Rosa',
    category: 'Gastronomía',
    rating: 4.9,
    reviews: 532,
    district: 'Barranco',
    address: 'Jr. Unión 210',
    whatsapp: '+51 955 223 144',
    image:
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=60',
    description:
      'Auténtica cocina peruana con más de 30 años deleitando paladares.',
    verified: true,
  },
  {
    id: 4,
    name: 'Studio Belleza Pura',
    category: 'Belleza',
    rating: 4.7,
    reviews: 198,
    district: 'Surco',
    address: 'Av. Primavera 1200',
    whatsapp: '+51 922 811 300',
    image:
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=60',
    description:
      'Cortes, coloración avanzada y tratamientos capilares profesionales.',
    verified: false,
  },
  {
    id: 5,
    name: 'TechFix Perú',
    category: 'Tecnología',
    rating: 4.5,
    reviews: 87,
    district: 'Lince',
    address: 'Av. Arequipa 2340',
    whatsapp: '+51 913 500 812',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=60',
    description:
      'Servicio técnico especializado en laptops, celulares y equipos de oficina.',
    verified: true,
  },
  {
    id: 6,
    name: 'Muebles HogarPlus',
    category: 'Hogar',
    rating: 4.4,
    reviews: 65,
    district: 'La Molina',
    address: 'Av. La Fontana 890',
    whatsapp: '+51 901 442 778',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=60',
    description:
      'Muebles a medida, diseño de interiores y decoración para tu hogar.',
    verified: false,
  },
  {
    id: 7,
    name: 'AutoService Premium',
    category: 'Automotriz',
    rating: 4.6,
    reviews: 142,
    district: 'San Borja',
    address: 'Av. Aviación 2456',
    whatsapp: '+51 977 338 221',
    image:
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=60',
    description:
      'Mantenimiento preventivo, planchado, pintura y detallado automotriz.',
    verified: true,
  },
  {
    id: 8,
    name: 'Estudio Legal Vargas & Asoc.',
    category: 'Legal',
    rating: 4.8,
    reviews: 94,
    district: 'San Isidro',
    address: 'Calle Las Begonias 415',
    whatsapp: '+51 966 124 900',
    image:
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=60',
    description:
      'Asesoría jurídica en derecho civil, laboral y corporativo.',
    verified: true,
  },
  {
    id: 9,
    name: 'CrossFit Box Titan',
    category: 'Fitness',
    rating: 4.9,
    reviews: 276,
    district: 'Miraflores',
    address: 'Av. Benavides 1890',
    whatsapp: '+51 933 776 155',
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=60',
    description:
      'Entrenamiento funcional, CrossFit y clases grupales con coaches certificados.',
    verified: true,
  },
  {
    id: 10,
    name: 'Veterinaria PatitasFelices',
    category: 'Mascotas',
    rating: 4.7,
    reviews: 311,
    district: 'Jesús María',
    address: 'Av. Brasil 2455',
    whatsapp: '+51 988 621 503',
    image:
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=60',
    description:
      'Atención veterinaria 24/7, peluquería canina y tienda de accesorios.',
    verified: true,
  },
  {
    id: 11,
    name: 'Centro Médico VidaSana',
    category: 'Salud',
    rating: 4.5,
    reviews: 158,
    district: 'Magdalena',
    address: 'Av. Javier Prado Oeste 210',
    whatsapp: '+51 912 554 700',
    image:
      'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=60',
    description:
      'Consultas médicas, laboratorio clínico y ecografías al instante.',
    verified: false,
  },
  {
    id: 12,
    name: 'Kinder Arco Iris',
    category: 'Educación',
    rating: 4.8,
    reviews: 74,
    district: 'La Molina',
    address: 'Av. Raúl Ferrero 410',
    whatsapp: '+51 901 223 444',
    image:
      'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1200&q=60',
    description:
      'Estimulación temprana y preescolar con metodología lúdica bilingüe.',
    verified: true,
  },
  {
    id: 13,
    name: 'Café de Barrio',
    category: 'Gastronomía',
    rating: 4.7,
    reviews: 410,
    district: 'Barranco',
    address: 'Jr. Colón 150',
    whatsapp: '+51 998 001 553',
    image:
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=60',
    description:
      'Café de especialidad, postres artesanales y wifi rápido para trabajar.',
    verified: false,
  },
  {
    id: 14,
    name: 'Barbería El Caballero',
    category: 'Belleza',
    rating: 4.6,
    reviews: 189,
    district: 'Chorrillos',
    address: 'Av. Matellini 870',
    whatsapp: '+51 955 802 109',
    image:
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=60',
    description:
      'Cortes clásicos, afeitado clásico con toalla caliente y arreglo de barba.',
    verified: true,
  },
  {
    id: 15,
    name: 'CodeHub Desarrollo',
    category: 'Tecnología',
    rating: 4.9,
    reviews: 52,
    district: 'San Isidro',
    address: 'Av. República de Panamá 3030',
    whatsapp: '+51 987 112 009',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=60',
    description:
      'Desarrollo web, apps móviles y automatizaciones con IA para PYMES.',
    verified: true,
  },
  {
    id: 16,
    name: 'Limpieza Brilla+',
    category: 'Hogar',
    rating: 4.3,
    reviews: 39,
    district: 'Surco',
    address: 'Av. El Polo 702',
    whatsapp: '+51 912 334 210',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=60',
    description:
      'Servicio de limpieza profunda para hogares, oficinas y post-obra.',
    verified: false,
  },
  {
    id: 17,
    name: 'Llantas Perú',
    category: 'Automotriz',
    rating: 4.5,
    reviews: 211,
    district: 'Chorrillos',
    address: 'Panamericana Sur km 19',
    whatsapp: '+51 933 908 117',
    image:
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=60',
    description:
      'Venta e instalación de llantas de todas las marcas. Alineamiento y balanceo.',
    verified: true,
  },
  {
    id: 18,
    name: 'Notaría Ríos',
    category: 'Legal',
    rating: 4.7,
    reviews: 68,
    district: 'Lince',
    address: 'Av. Arenales 1500',
    whatsapp: '+51 966 554 001',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=60',
    description:
      'Trámites notariales ágiles: poderes, escrituras, legalizaciones.',
    verified: true,
  },
  {
    id: 19,
    name: 'Yoga Studio Namasté',
    category: 'Fitness',
    rating: 4.9,
    reviews: 148,
    district: 'Miraflores',
    address: 'Calle Schell 310',
    whatsapp: '+51 998 445 210',
    image:
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=60',
    description:
      'Clases de yoga, meditación y bienestar integral en grupos reducidos.',
    verified: true,
  },
  {
    id: 20,
    name: 'PetShop Huellitas',
    category: 'Mascotas',
    rating: 4.4,
    reviews: 95,
    district: 'San Borja',
    address: 'Av. Angamos Este 2104',
    whatsapp: '+51 913 221 887',
    image:
      'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1200&q=60',
    description:
      'Alimentos premium, accesorios y servicio de grooming para tu mascota.',
    verified: false,
  },
];
