export interface Service {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
  image: string;
  featured?: boolean;
}

export interface Design {
  id: string;
  title: string;
  category: string;
  image: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  comment: string;
  rating: number;
  serviceUsed: string;
}

// 1. Servicios Destacados y Generales
export const MOCK_SERVICES: Service[] = [
  {
    id: '1',
    name: 'Extensión Gel',
    price: 25,
    duration: '90 min',
    description: '...',
    image: '/booky/gel-1.png', // Agregado /booky
    featured: true,
  },
  {
    id: '2',
    name: 'Revestimiento en Gel',
    price: 20,
    duration: '90 min',
    description: '...',
    image: '/booky/gel-2.png', // Agregado /booky
    featured: true,
  },
  {
    id: '3',
    name: 'Nivelación y Brillo',
    price: 18,
    duration: '90 min',
    description: '...',
    image: '/booky/gel-3.png', // Agregado /booky
    featured: true,
  },
  {
    id: '4',
    name: 'Revestimiento en POLYGEL',
    price: 22,
    duration: '90 min',
    description: '...',
    image: '/booky/gel-4.png', // Agregado /booky
    featured: false,
  },
  {
    id: '5',
    name: 'Pedicura estética SPA',
    price: 13,
    duration: '90 min',
    description: '...',
    image: '/booky/pedicure.png', // Agregado /booky
    featured: false,
  },
];

export const MOCK_DESIGNS: Design[] = [
  {
    id: 'd1',
    title: 'Minimalist Gold Accents',
    category: 'Nail Art',
    image: '/booky/tinte.png', // Agregado /booky
    featured: true,
  },
  {
    id: 'd2',
    title: 'French Ombré Velvet',
    category: 'Soft Gel',
    image: '/booky/tinte2.png', // Agregado /booky
    featured: true,
  },
  {
    id: 'd3',
    title: 'Ethereal Pearl Finish',
    category: 'Editorial',
    image: '/booky/tinte3.png', // Agregado /booky
    featured: true,
  },
  {
    id: 'd4',
    title: 'pink Flow Line',
    category: 'Nail Art',
    image: '/booky/tinte4.png', // Agregado /booky
    featured: true,
  },
];

// 3. Testimonios
export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Valeria Gómez',
    comment: 'El acabado de la manicure es imponente. No solo se ve hermoso, la durabilidad es impecable.',
    rating: 5,
    serviceUsed: 'Extensión Gel',
  },
  {
    id: 't2',
    name: 'Camila Silva',
    comment: 'La atención al detalle en Yes Beauty superó mis expectativas. Booky hizo que reservar fuera facilísimo.',
    rating: 5,
    serviceUsed: 'Pedicura estética SPA',
  },
];