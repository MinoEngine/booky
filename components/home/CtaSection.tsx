import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden border-b-2 border-espresso bg-bgMain px-4 py-28 md:py-40">
      <span className="pointer-events-none absolute left-[12%] top-16 text-5xl text-mostaza" aria-hidden="true">✦</span>
      <span className="pointer-events-none absolute bottom-16 right-[12%] font-serif text-6xl text-pink/15" aria-hidden="true">+</span>
      <div className="mx-auto max-w-5xl">
      <div className="space-y-8 rounded-[2rem] border-2 border-espresso bg-pink p-10 text-center text-white shadow-bento md:p-20">
        <h2 className="font-serif text-3xl md:text-5xl font-bold">¿Lista para tu próximo look?</h2>
        <p className="text-xs md:text-sm text-white/80 max-w-md mx-auto">
          Reserva tu cita en pocos segundos y asegura tu espacio en la agenda.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <Link
            href="/reservar"
            className="rounded-full border-2 border-espresso bg-surface px-8 py-4 text-xs font-bold uppercase tracking-widest text-espresso shadow-bento transition-all hover:-translate-y-0.5 hover:bg-bgMain"
          >
            Reservar Cita
          </Link>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border-2 border-espresso bg-mostaza px-8 py-4 text-xs font-bold uppercase tracking-widest text-espresso shadow-bento transition-all hover:-translate-y-0.5 hover:bg-bgMain"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}