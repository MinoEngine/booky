import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Clock3, Sparkles } from 'lucide-react';
import { MOCK_SERVICES } from '@/data/mockData';

export const metadata = {
  title: 'Servicios | YES BEAUTY',
  description: 'Conoce los servicios de manicure y nail art de YES BEAUTY.',
};

export default function ServicesPage() {
  return (
    <div className="overflow-hidden bg-bgMain">
      <section className="border-b-2 border-espresso bg-pinkLight px-4 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-espresso/65 transition-colors hover:text-pink"><ArrowLeft className="h-4 w-4" /> Volver al inicio</Link>
          <div className="mt-10 grid gap-8 md:grid-cols-[1fr_0.75fr] md:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink">Elige tu ritual</p>
              <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-espresso md:text-6xl">Servicios para tus manos</h1>
            </div>
            <p className="max-w-md text-sm leading-7 text-espresso/70 md:justify-self-end">Cada servicio combina técnica, cuidado y una conversación para crear un resultado que se sienta tuyo.</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col justify-between gap-3 border-b border-espresso/15 pb-5 sm:flex-row sm:items-end">
            <div><p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink">Carta de servicios</p><h2 className="mt-2 font-serif text-3xl font-bold text-espresso">Encuentra tu punto de partida</h2></div>
            <p className="text-xs text-muted">{MOCK_SERVICES.length} opciones disponibles</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {MOCK_SERVICES.map((service) => (
              <article key={service.id} className="grid overflow-hidden rounded-[1.5rem] border-2 border-espresso bg-surface shadow-bento transition-transform hover:-translate-y-1 sm:grid-cols-[0.85fr_1.15fr]">
                <div className="relative min-h-56 border-b-2 border-espresso sm:min-h-full sm:border-b-0 sm:border-r-2">
                  <Image src={service.image} alt={service.name} fill sizes="(max-width: 640px) 100vw, 35vw" className="object-cover" />
                  {service.featured && <span className="absolute left-4 top-4 rounded-full border-2 border-espresso bg-mostaza px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-espresso">Destacado</span>}
                </div>
                <div className="flex flex-col justify-between gap-7 p-6">
                  <div>
                    <div className="flex items-start justify-between gap-3"><h3 className="font-serif text-2xl font-bold text-espresso">{service.name}</h3><span className="text-sm font-bold text-pink">${service.price}</span></div>
                    <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
                  </div>
                  <div className="flex items-center justify-between border-t border-espresso/15 pt-4 text-[10px] font-bold uppercase tracking-wider text-muted"><span className="flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5 text-pink" />{service.duration}</span><span className="flex items-center gap-1.5 text-pink"><Sparkles className="h-3.5 w-3.5" />Asesoría</span></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-2 border-espresso bg-mostaza px-4 py-12 md:py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center"><div><p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink">¿Ya sabes cuál quieres?</p><h2 className="mt-2 font-serif text-3xl font-bold text-espresso">Hagamos espacio para tu próximo look.</h2></div><Link href="/reservar" className="inline-flex items-center gap-2 rounded-full border-2 border-espresso bg-pink px-6 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-bento transition-transform hover:-translate-y-0.5">Reservar cita <ArrowRight className="h-4 w-4" /></Link></div>
      </section>
    </div>
  );
}
