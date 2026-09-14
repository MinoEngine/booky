import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock3, Sparkles } from 'lucide-react';
import { MOCK_SERVICES } from '@/data/mockData';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function FeaturedServices() {
  const featured = MOCK_SERVICES.filter((s) => s.featured).slice(0, 3);

  return (
    <section className="relative overflow-hidden border-b-2 border-espresso bg-pinkLight px-4 py-20 md:py-24">
      <span className="pointer-events-none absolute bottom-12 left-[5%] text-5xl text-mostaza/70" aria-hidden="true">✦</span>
      <div className="mx-auto max-w-6xl space-y-10">
      <div className="grid gap-6 md:grid-cols-[1fr_0.8fr] md:items-end">
        <div className="space-y-3">
        <span className="inline-block rounded-full border-2 border-espresso bg-bgMain px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-espresso">Elige tu ritual</span>
        <h2 className="font-serif text-3xl font-bold text-espresso md:text-5xl">Servicios destacados</h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-espresso/65 md:justify-self-end">Un menú pensado para distintos estilos, tiempos y niveles de detalle. Todas las citas incluyen orientación personalizada.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {featured.map((service) => (
          <article key={service.id} className="group flex flex-col overflow-hidden rounded-[1.5rem] border-2 border-espresso bg-surface shadow-bento transition-transform hover:-translate-y-1">
            <div className="relative h-48 w-full border-b-2 border-espresso md:h-56">
              <Image 
                src={`${basePath}${service.image}`} 
                alt={service.name} 
                fill 
                className="object-cover" 
              />
              <span className="absolute left-4 top-4 rounded-full border-2 border-espresso bg-mostaza px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-espresso">Recomendado</span>
            </div>
            <div className="flex flex-grow flex-col justify-between space-y-5 p-6">
              <div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-xl font-bold text-espresso">{service.name}</h3>
                  <span className="shrink-0 text-xs font-bold text-pink">Desde ${service.price}</span>
                </div>
                <p className="mt-3 text-xs leading-5 text-espresso/60">{service.description}</p>
              </div>
              <div className="flex items-center justify-between border-t border-espresso/15 pt-4 text-[10px] font-bold uppercase tracking-wider text-espresso/45">
                <span className="flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5" />{service.duration}</span>
                <span className="flex items-center gap-1.5 text-pink"><Sparkles className="h-3.5 w-3.5" />Asesoría incluida</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="flex flex-col items-center justify-between gap-4 border-t border-espresso/15 pt-6 sm:flex-row">
        <p className="text-xs text-espresso/60">¿Tienes una idea específica? Podemos crear una propuesta personalizada.</p>
        <Link
          href="/servicios"
          className="inline-flex items-center gap-2 rounded-full border-2 border-espresso bg-pink px-6 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-bento transition-all hover:-translate-y-0.5 hover:bg-pinkDark"
        >
          Ver todos <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      </div>
    </section>
  );
}