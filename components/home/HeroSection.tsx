import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b-2 border-espresso bg-pinkLight px-4 pb-28 pt-20 md:pb-40 md:pt-28">
      <span className="pointer-events-none absolute right-[12%] top-10 text-2xl text-mostaza md:text-4xl" aria-hidden="true">✦</span>
      <span className="pointer-events-none absolute bottom-16 left-[8%] font-serif text-5xl text-pink/20 md:text-7xl" aria-hidden="true">+</span>
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <div className="space-y-8 text-center md:text-left">
          <span className="inline-block rounded-full bg-pink/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-pink">
            Salón de Belleza
          </span>
          <h1 className="font-serif text-5xl font-bold leading-[1.05] text-espresso md:text-7xl">
            Manos que hablan
            <span className="block text-espresso">de ti.</span>
          </h1>
          <p className="mx-auto max-w-md text-sm leading-7 text-espresso/70 md:mx-0 md:text-base md:leading-8">
            Diseños cuidados, color con intención y un momento solo para ti. Creamos uñas que se sienten tan especiales como se ven.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
            <Link
              href="/reservar"
              className="rounded-full border-2 border-espresso bg-pink px-8 py-4 text-center text-xs font-bold uppercase tracking-widest text-white shadow-bento transition-all hover:-translate-y-0.5 hover:bg-pinkDark"
            >
              Reservar Cita
            </Link>
            <Link
              href="/disenos"
              className="rounded-full border-2 border-espresso bg-bgMain px-8 py-4 text-center text-xs font-bold uppercase tracking-widest text-espresso shadow-bento transition-all hover:-translate-y-0.5 hover:bg-mostaza"
            >
              Contáctame
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3 border-t border-espresso/20 pt-6 text-left">
            <div>
              <p className="font-serif text-2xl text-espresso md:text-3xl">+120</p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-muted">Diseños creados</p>
            </div>
            <div className="border-l border-espresso/20 pl-3">
              <p className="font-serif text-2xl text-espresso md:text-3xl">4.9/5</p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-muted">Experiencia</p>
            </div>
            <div className="border-l border-espresso/20 pl-3">
              <p className="font-serif text-2xl text-espresso md:text-3xl">1:1</p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-muted">Atención</p>
            </div>
          </div>
        </div>
        <div className="relative h-[420px] overflow-hidden rounded-[2rem] border-2 border-espresso bg-rose shadow-bento md:h-[560px]">
            <Image
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800"
                alt="Nail Art Editorial"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 md:inset-x-7 md:bottom-7">
              <div className="max-w-[220px] rounded-2xl border-2 border-espresso bg-surface/95 p-4 shadow-bento md:p-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-pink">Look de la semana</p>
                <p className="mt-2 font-serif text-lg leading-tight text-espresso">Cherry glass & detalles dorados</p>
                <p className="mt-2 text-[10px] leading-4 text-muted">Un diseño delicado para llamar la atención sin pedir permiso.</p>
              </div>
              <span className="hidden rounded-full border-2 border-espresso bg-mostaza px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-espresso shadow-bento sm:inline-block">Nuevo</span>
            </div>
        </div>
      </div>
    </section>
  );
}