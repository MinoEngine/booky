'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-espresso/15 bg-bgMain/90 backdrop-blur-md transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Editorial */}
          <Link href="/" className="group flex flex-col">
            <span className="font-serif text-2xl md:text-3xl font-bold tracking-widest text-espresso group-hover:text-pink transition-colors">
              YES BEAUTY
            </span>
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-xs uppercase tracking-widest text-espresso/80 hover:text-pink font-semibold transition-colors"
            >
              Inicio
            </Link>
            <Link 
              href="/#sobre-mi" 
              className="text-xs uppercase tracking-widest text-espresso/80 hover:text-pink font-semibold transition-colors"
            >
              Sobre mí
            </Link>
            <Link 
              href="/servicios" 
              className="text-xs uppercase tracking-widest text-espresso/80 hover:text-pink font-semibold transition-colors"
            >
              Servicios
            </Link>
            <Link 
              href="/disenos" 
              className="text-xs uppercase tracking-widest text-espresso/80 hover:text-pink font-semibold transition-colors"
            >
              Diseños
            </Link>
          </nav>

          {/* Botón CTA Destacado (Desktop) */}
          <div className="hidden md:flex items-center">
            <Link
              href="/reservar"
              className="rounded-full border-2 border-espresso bg-pink px-6 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-bento transition-all hover:-translate-y-0.5 hover:bg-pinkDark active:translate-y-0"
            >
              Reservar Cita
            </Link>
          </div>

          {/* Botón Menú Mobile */}
          <div className="md:hidden flex items-center gap-3">
            <Link
              href="/reservar"
              className="rounded-full border-2 border-espresso bg-pink px-3.5 py-2 text-[10px] font-bold uppercase tracking-wider text-white shadow-bento"
            >
              Reservar
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-espresso p-1 focus:outline-none"
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Menú Desplegable Mobile */}
      {isOpen && (
        <div className="space-y-4 border-b border-espresso/20 bg-rose px-6 pb-6 pt-4 shadow-lg animate-in slide-in-from-top duration-200 md:hidden">
          <nav className="flex flex-col space-y-3">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className="border-b border-espresso/20 py-1 text-sm font-semibold uppercase tracking-widest text-espresso"
            >
              Inicio
            </Link>
            <Link 
              href="/servicios" 
              onClick={() => setIsOpen(false)}
              className="border-b border-espresso/20 py-1 text-sm font-semibold uppercase tracking-widest text-espresso"
            >
              Servicios
            </Link>
            <Link 
              href="/disenos" 
              onClick={() => setIsOpen(false)}
              className="border-b border-espresso/20 py-1 text-sm font-semibold uppercase tracking-widest text-espresso"
            >
              Diseños
            </Link>
            <Link 
              href="/sobre-mi" 
              onClick={() => setIsOpen(false)}
              className="py-1 text-sm font-semibold uppercase tracking-widest text-espresso"
            >
              Sobre mí
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}