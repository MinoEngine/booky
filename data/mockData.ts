// data/mockData.ts

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
    description: 'Si tienes uñas cortas y deseas un alargamiento inmediato ocuparemos el producto que tu uña requiera, este puede ser gel de construcción o polygel sobre tip.',
    image: '/gel-1.png',
    featured: true,
  },
  {
    id: '2',
    name: 'Revestimiento en Gel',
    price: 20,
    duration: '90 min',
    description: 'Uñas naturales medianas-largas. Un recubrimiento más rígido, ideal si quieres mantener el largo actual sin que se rompan, con una durabilidad de 3 semanas a mas.',
    image: '/gel-2.png',
    featured: true,
  },
  {
    id: '3',
    name: 'Nivelación y Brillo',
    price: 18,
    duration: '90 min',
    description: 'Uñas naturales cortas a medianas (Base Rubber). Corrige imperfecciones y fortalece tu uña natural con una estructura flexible y una duración de 21 días a más.',
    image: '/gel-3.png',
    featured: true,
  },
  {
    id: '4',
    name: 'Revestimiento en POLYGEL',
    price: 22,
    duration: '90 min',
    description: 'Uñas naturales medianas-largas. Refuerzo de alta resistencia para máxima protección contra golpes y una durabilidad de 3 a 4 semanas.',
    image: '/gel-4.png',
    featured: false,
  },
  {
    id: '5',
    name: 'Pedicura estética SPA',
    price: 13,
    duration: '90 min',
    description: 'Incluye limpieza profesional, exfoliación. Esmaltado en gel e hidratación.',
    image: '/pedicure.png',
    featured: false,
  },
];

// 2. Galería de Diseños
export const MOCK_DESIGNS: Design[] = [
  {
    id: 'd1',
    title: 'Minimalist Gold Accents',
    category: 'Nail Art',
    image: '/tinte.png',
    featured: true,
  },
  {
    id: 'd2',
    title: 'French Ombré Velvet',
    category: 'Soft Gel',
    image: '/tinte2.png',
    featured: true,
  },
  {
    id: 'd3',
    title: 'Ethereal Pearl Finish',
    category: 'Editorial',
    image: '/tinte3.png',
    featured: true,
  },
  {
    id: 'd4',
    title: 'pink Flow Line',
    category: 'Nail Art',
    image: '/tinte4.png',
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