import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Heart } from 'lucide-react';
import { MOCK_DESIGNS } from '@/data/mockData';

export default function FeaturedGallery() {
  const designs = MOCK_DESIGNS.slice(0, 4);

  return (
    <section className="relative overflow-hidden border-b-2 border-espresso bg-mostaza px-4 py-20 md:py-24">
      <span className="pointer-events-none absolute right-[8%] top-16 font-serif text-6xl text-pink/25" aria-hidden="true">+</span>
      <div className="mx-auto max-w-6xl space-y-10">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div className="space-y-3">
        <span className="inline-block rounded-full border-2 border-espresso bg-bgMain px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-espresso">Inspírate</span>
        <h2 className="font-serif text-3xl font-bold text-espresso md:text-5xl">Encuentra tu próximo look</h2>
        </div>
        <div className="max-w-sm md:text-right">
          <p className="text-sm leading-6 text-espresso/65">Una pequeña muestra de formas, texturas y colores para guardar como referencia antes de tu cita.</p>
          <p className="mt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-pink md:justify-end"><Heart className="h-3.5 w-3.5 fill-current" />Inspiración real</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
        {designs.map((d, index) => (
          <Link key={d.id} href={`/disenos/${d.id}`} className={`group relative ${index % 2 === 0 ? 'h-64 md:h-80' : 'h-56 md:mt-10 md:h-72'} overflow-hidden rounded-[1.25rem] border-2 border-espresso shadow-bento`}>
            <Image src={d.image} alt={d.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-espresso/85 via-espresso/10 to-transparent p-4">
              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-mostaza">{d.category}</span>
              <span className="mt-1 text-sm font-bold text-white">{d.title}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex flex-col items-center justify-between gap-4 border-t border-espresso/15 pt-6 sm:flex-row">
        <p className="text-xs text-espresso/60">Guarda tu favorito y tráelo como referencia a tu próxima cita.</p>
        <Link
          href="/disenos"
          className="inline-flex items-center gap-2 rounded-full border-2 border-espresso bg-bgMain px-6 py-3 text-xs font-bold uppercase tracking-widest text-espresso shadow-bento transition-all hover:-translate-y-0.5 hover:bg-rose"
        >
          Ver galería <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      </div>
    </section>
  );
}