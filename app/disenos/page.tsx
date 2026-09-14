import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Heart } from 'lucide-react';
import { MOCK_DESIGNS } from '@/data/mockData';

export const metadata = {
  title: 'Diseños | YES BEAUTY',
  description: 'Explora la galería de diseños de manicure y nail art de YES BEAUTY.',
};

export default function DesignsPage() {
  return (
    <div className="overflow-hidden bg-bgMain">
      <section className="border-b-2 border-espresso bg-mostaza px-4 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-espresso/65 transition-colors hover:text-pink"><ArrowLeft className="h-4 w-4" /> Volver al inicio</Link>
          <div className="mt-10 grid gap-8 md:grid-cols-[1fr_0.75fr] md:items-end">
            <div><p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink">Portafolio editorial</p><h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-espresso md:text-6xl">Diseños para guardar</h1></div>
            <p className="max-w-md text-sm leading-7 text-espresso/70 md:justify-self-end">Busca una idea, mezcla referencias y llega a tu cita con algo que te emocione llevar.</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2"><span className="rounded-full border-2 border-espresso bg-surface px-4 py-2 text-[10px] font-bold uppercase tracking-wider">Todos</span><span className="rounded-full border-2 border-espresso/20 bg-bgMain px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-muted">Nail Art</span><span className="rounded-full border-2 border-espresso/20 bg-bgMain px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-muted">Soft Gel</span><span className="rounded-full border-2 border-espresso/20 bg-bgMain px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-muted">Editorial</span></div>
        </div>
      </section>

      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center justify-between border-b border-espresso/15 pb-5"><div><p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink">Selección YES BEAUTY</p><h2 className="mt-2 font-serif text-3xl font-bold text-espresso">Ideas para tu próxima cita</h2></div><p className="hidden items-center gap-2 text-xs text-muted sm:flex"><Heart className="h-4 w-4 text-pink" /> Guarda tus favoritos</p></div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {MOCK_DESIGNS.map((design, index) => (
              <Link key={design.id} href={`/disenos/${design.id}`} className={`group relative ${index % 2 === 0 ? 'h-72 md:h-[28rem]' : 'h-64 md:mt-12 md:h-96'} overflow-hidden rounded-[1.5rem] border-2 border-espresso shadow-bento`}>
                <Image src={design.image} alt={design.title} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-espresso/90 via-espresso/10 to-transparent p-4 md:p-5"><span className="text-[9px] font-bold uppercase tracking-[0.18em] text-mostaza">{design.category}</span><span className="mt-1 text-sm font-bold text-white md:text-base">{design.title}</span><span className="mt-3 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-pinkLight opacity-0 transition-opacity group-hover:opacity-100">Ver diseño <ArrowRight className="h-3 w-3" /></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-2 border-espresso bg-pinkLight px-4 py-12 md:py-16"><div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center"><div><p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink">¿Viste algo que te gusta?</p><h2 className="mt-2 font-serif text-3xl font-bold text-espresso">Tráelo como referencia.</h2></div><Link href="/reservar" className="inline-flex items-center gap-2 rounded-full border-2 border-espresso bg-pink px-6 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-bento transition-transform hover:-translate-y-0.5">Reservar cita <ArrowRight className="h-4 w-4" /></Link></div></section>
    </div>
  );
}
