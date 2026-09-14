'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import type { Service } from '@/data/mockData';

interface BookingFormProps {
  services: Service[];
}

export default function BookingForm({ services }: BookingFormProps) {
  const [selectedService, setSelectedService] = useState(services[0]?.id ?? '');
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-[2rem] border-2 border-espresso bg-surface p-8 text-center shadow-bento md:p-12">
        <CheckCircle2 className="mx-auto h-14 w-14 text-pink" aria-hidden="true" />
        <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.25em] text-pink">Solicitud recibida</p>
        <h2 className="mt-3 font-serif text-3xl font-bold text-espresso">Vamos a revisar tu cita</h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-muted">Tu solicitud quedó registrada en esta demostración. El siguiente paso es enviar el comprobante de pago para apartar el espacio.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/comprobar-pago" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-espresso bg-pink px-6 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-bento transition-transform hover:-translate-y-0.5">Enviar comprobante <ArrowRight className="h-4 w-4" /></Link>
          <Link href="/" className="inline-flex items-center justify-center rounded-full border-2 border-espresso bg-bgMain px-6 py-3 text-xs font-bold uppercase tracking-widest text-espresso shadow-bento transition-transform hover:-translate-y-0.5">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="space-y-8 rounded-[2rem] border-2 border-espresso bg-surface p-6 shadow-bento md:p-10">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink">Paso 1 de 2</p>
        <h2 className="mt-2 font-serif text-3xl font-bold text-espresso">Cuéntanos qué quieres</h2>
        <p className="mt-2 text-sm leading-6 text-muted">Elige un servicio y dinos cuándo te gustaría venir. Te contactaremos para confirmar disponibilidad.</p>
      </div>

      <fieldset className="space-y-3">
        <legend className="text-xs font-bold uppercase tracking-[0.15em] text-espresso">Servicio</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {services.map((service) => (
            <label key={service.id} className={`cursor-pointer rounded-2xl border-2 p-4 transition-colors ${selectedService === service.id ? 'border-espresso bg-pinkLight' : 'border-espresso/20 bg-bgMain hover:border-espresso/50'}`}>
              <input type="radio" name="service" value={service.id} checked={selectedService === service.id} onChange={() => setSelectedService(service.id)} className="sr-only" />
              <span className="flex items-start justify-between gap-3">
                <span>
                  <span className="block text-sm font-bold text-espresso">{service.name}</span>
                  <span className="mt-1 block text-[11px] leading-4 text-muted">{service.duration} · Desde ${service.price}</span>
                </span>
                <span className={`mt-1 h-3 w-3 rounded-full border-2 ${selectedService === service.id ? 'border-pink bg-pink' : 'border-espresso/30'}`} />
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-xs font-bold uppercase tracking-[0.15em] text-espresso">Fecha preferida<input required type="date" name="date" className="block w-full rounded-xl border-2 border-espresso/20 bg-bgMain px-4 py-3 text-sm font-normal normal-case tracking-normal text-espresso outline-none transition-colors focus:border-pink" /></label>
        <label className="space-y-2 text-xs font-bold uppercase tracking-[0.15em] text-espresso">Hora aproximada<select required name="time" defaultValue="" className="block w-full rounded-xl border-2 border-espresso/20 bg-bgMain px-4 py-3 text-sm font-normal normal-case tracking-normal text-espresso outline-none transition-colors focus:border-pink"><option value="" disabled>Selecciona un horario</option><option>09:00 am</option><option>11:00 am</option><option>01:00 pm</option><option>03:00 pm</option><option>05:00 pm</option></select></label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-xs font-bold uppercase tracking-[0.15em] text-espresso">Tu nombre<input required name="name" placeholder="Ej. María González" className="block w-full rounded-xl border-2 border-espresso/20 bg-bgMain px-4 py-3 text-sm font-normal normal-case tracking-normal text-espresso outline-none placeholder:text-muted/60 focus:border-pink" /></label>
        <label className="space-y-2 text-xs font-bold uppercase tracking-[0.15em] text-espresso">WhatsApp<input required name="phone" type="tel" placeholder="+58 412 000 0000" className="block w-full rounded-xl border-2 border-espresso/20 bg-bgMain px-4 py-3 text-sm font-normal normal-case tracking-normal text-espresso outline-none placeholder:text-muted/60 focus:border-pink" /></label>
      </div>

      <label className="space-y-2 text-xs font-bold uppercase tracking-[0.15em] text-espresso">Nota opcional<textarea name="note" rows={3} placeholder="Cuéntanos si tienes una referencia o alguna preferencia..." className="block w-full resize-none rounded-xl border-2 border-espresso/20 bg-bgMain px-4 py-3 text-sm font-normal normal-case tracking-normal text-espresso outline-none placeholder:text-muted/60 focus:border-pink" /></label>

      <div className="flex flex-col gap-4 border-t border-espresso/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex max-w-xs items-start gap-2 text-[11px] leading-4 text-muted"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-pink" />Tus datos solo se usarán para coordinar esta solicitud.</p>
        <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-espresso bg-pink px-7 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-bento transition-transform hover:-translate-y-0.5">Solicitar cita <ArrowRight className="h-4 w-4" /></button>
      </div>
    </form>
  );
}
