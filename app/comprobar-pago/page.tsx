import Link from 'next/link';
import { ArrowLeft, CheckCircle2, CreditCard, FileCheck2 } from 'lucide-react';
import PaymentProofForm from '@/components/booking/PaymentProofForm';

export const metadata = {
  title: 'Comprobar pago | YES BEAUTY',
  description: 'Envía tu comprobante de pago móvil para confirmar tu cita.',
};

export default function PaymentPage() {
  return (
    <div className="overflow-hidden bg-bgMain">
      <section className="border-b-2 border-espresso bg-mostaza px-4 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <Link href="/reservar" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-espresso/65 transition-colors hover:text-pink"><ArrowLeft className="h-4 w-4" /> Volver a reservar</Link>
          <div className="mt-10 grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink">Pago móvil</p>
              <h1 className="mt-3 max-w-xl font-serif text-4xl font-bold leading-tight text-espresso md:text-6xl">Comprobar pago</h1>
            </div>
            <p className="max-w-md text-sm leading-7 text-espresso/70 md:justify-self-end">Realiza tu pago móvil y adjunta el comprobante. Revisaremos la información para confirmar tu espacio.</p>
          </div>
          
        </div>
      </section>
      <section className="bg-bgMain px-4 py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <aside className="rounded-[2rem] border-2 border-espresso bg-pinkLight p-7 shadow-bento md:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink">Tu reserva continúa</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-espresso">Un último paso</h2>
            <p className="mt-4 text-sm leading-6 text-espresso/70">El pago móvil nos permite mantener el proceso simple y directo. Guarda tu referencia para que podamos ubicarla rápidamente.</p>
            <div className="mt-7 border-t border-espresso/15 pt-5 text-sm leading-6 text-espresso/70">Después de revisar tu comprobante, te escribiremos para confirmar la cita.</div>
          </aside>
          <PaymentProofForm />
          <p className="text-center text-[11px] leading-5 text-muted lg:col-start-2">Usa datos de prueba mientras conectamos esta pantalla con el backend y el almacenamiento seguro de comprobantes.</p>
        </div>
      </section>
    </div>
  );
}
