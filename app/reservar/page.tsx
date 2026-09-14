import Link from 'next/link';
import { ArrowLeft, CalendarDays, Clock3, Sparkles } from 'lucide-react';
import BookingForm from '@/components/booking/BookingForm';
import { MOCK_SERVICES } from '@/data/mockData';

export const metadata = {
  title: 'Reservar cita | YES BEAUTY',
  description: 'Solicita tu cita de manicure y nail art con YES BEAUTY.',
};

export default function BookingPage() {
  return (
    <div className="overflow-hidden bg-bgMain">
      <section className="border-b-2 border-espresso bg-pinkLight px-4 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-espresso/65 transition-colors hover:text-pink"><ArrowLeft className="h-4 w-4" /> Volver al inicio</Link>
          <div className="mt-10 grid gap-8 md:grid-cols-[1fr_0.75fr] md:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink">Tu próximo momento</p>
              <h1 className="mt-3 max-w-xl font-serif text-4xl font-bold leading-tight text-espresso md:text-6xl">Reserva tu cita</h1>
            </div>
            <p className="max-w-md text-sm leading-7 text-espresso/70 md:justify-self-end">Cuéntanos qué tienes en mente y encontraremos el espacio ideal para ti. La confirmación final se realiza por WhatsApp.</p>
          </div>
        </div>
      </section>
      <section className="bg-bgMain px-4 py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <aside className="rounded-[2rem] border-2 border-espresso bg-mostaza p-7 shadow-bento md:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink">Así funciona</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-espresso">Una cita pensada para ti</h2>
            <div className="mt-7 space-y-5">
              <div className="flex gap-3"><span className="font-serif text-2xl text-pink">01</span><p className="text-sm leading-6 text-espresso/70">Escoges el servicio que más se parece a lo que quieres.</p></div>
              <div className="flex gap-3"><span className="font-serif text-2xl text-pink">02</span><p className="text-sm leading-6 text-espresso/70">Nos compartes tus datos y el horario que prefieres.</p></div>
              <div className="flex gap-3"><span className="font-serif text-2xl text-pink">03</span><p className="text-sm leading-6 text-espresso/70">Confirmamos disponibilidad contigo por WhatsApp.</p></div>
            </div>
          </aside>
          <BookingForm services={MOCK_SERVICES.filter((service) => service)} />
          <p className="text-center text-[11px] leading-5 text-muted lg:col-start-2">Esta es la primera versión del flujo público. La disponibilidad y confirmación se conectarán al panel administrativo en la siguiente etapa.</p>
        </div>
      </section>
    </div>
  );
}
