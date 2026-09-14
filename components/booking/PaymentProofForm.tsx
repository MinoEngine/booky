'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, FileUp, ShieldCheck } from 'lucide-react';

export default function PaymentProofForm() {
  const [fileName, setFileName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFileName(event.target.files?.[0]?.name ?? '');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-[2rem] border-2 border-espresso bg-surface p-8 text-center shadow-bento md:p-12">
        <CheckCircle2 className="mx-auto h-14 w-14 text-pink" aria-hidden="true" />
        <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.25em] text-pink">Comprobante enviado</p>
        <h2 className="mt-3 font-serif text-3xl font-bold text-espresso">Lo revisaremos pronto</h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-muted">Esta pantalla confirma el flujo de la V1. En la siguiente etapa el equipo podrá aprobar o rechazar el comprobante desde el backoffice.</p>
        <Link href="/" className="mt-8 inline-flex items-center justify-center rounded-full border-2 border-espresso bg-pink px-6 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-bento transition-transform hover:-translate-y-0.5">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7 rounded-[2rem] border-2 border-espresso bg-surface p-6 shadow-bento md:p-10">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink">Paso 2 de 2</p>
        <h2 className="mt-2 font-serif text-3xl font-bold text-espresso">Sube tu comprobante</h2>
        <p className="mt-2 text-sm leading-6 text-muted">Después de realizar el pago móvil, envíanos los datos para validar tu solicitud de cita.</p>
      </div>

      <div className="grid gap-4 rounded-2xl border-2 border-espresso bg-mostaza p-5 sm:grid-cols-2">
        <div><p className="text-[10px] font-bold uppercase tracking-[0.15em] text-espresso/60">Banco receptor</p><p className="mt-1 font-bold text-espresso">Banco de Venezuela</p></div>
        <div><p className="text-[10px] font-bold uppercase tracking-[0.15em] text-espresso/60">Teléfono pago móvil</p><p className="mt-1 font-bold text-espresso">0412-000-0000</p></div>
        <div><p className="text-[10px] font-bold uppercase tracking-[0.15em] text-espresso/60">Cédula / RIF</p><p className="mt-1 font-bold text-espresso">V-00.000.000</p></div>
        <div><p className="text-[10px] font-bold uppercase tracking-[0.15em] text-espresso/60">Concepto</p><p className="mt-1 font-bold text-espresso">Tu nombre + servicio</p></div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-xs font-bold uppercase tracking-[0.15em] text-espresso">Nombre de la reserva<input required name="name" placeholder="Ej. María González" className="block w-full rounded-xl border-2 border-espresso/20 bg-bgMain px-4 py-3 text-sm font-normal normal-case tracking-normal text-espresso outline-none placeholder:text-muted/60 focus:border-pink" /></label>
        <label className="space-y-2 text-xs font-bold uppercase tracking-[0.15em] text-espresso">Monto pagado<input required name="amount" inputMode="decimal" placeholder="Ej. 35,00" className="block w-full rounded-xl border-2 border-espresso/20 bg-bgMain px-4 py-3 text-sm font-normal normal-case tracking-normal text-espresso outline-none placeholder:text-muted/60 focus:border-pink" /></label>
      </div>

      <label className="space-y-2 text-xs font-bold uppercase tracking-[0.15em] text-espresso">Referencia bancaria<input required name="reference" placeholder="Últimos 6 dígitos de la referencia" className="block w-full rounded-xl border-2 border-espresso/20 bg-bgMain px-4 py-3 text-sm font-normal normal-case tracking-normal text-espresso outline-none placeholder:text-muted/60 focus:border-pink" /></label>

      <label className="mt-4 flex flex-col items-center cursor-pointer rounded-2xl border-2 border-dashed border-espresso/30 bg-bgMain p-6 text-center transition-colors hover:border-pink">
        <FileUp className="mb-3 h-8 w-8 text-pink" aria-hidden="true" />
        <span className="mt-3 text-sm font-bold text-espresso">{fileName || 'Selecciona una imagen o PDF'}</span>
        <span className="mt-1 text-xs text-muted">Máximo recomendado: 5 MB</span>
        <input required type="file" name="proof" accept="image/*,.pdf" onChange={handleFileChange} className="sr-only" />
      </label>

      <div className="flex flex-col gap-4 border-t border-espresso/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex max-w-xs items-start gap-2 text-[11px] leading-4 text-muted"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-pink" />Tu comprobante será revisado manualmente.</p>
        <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-espresso bg-pink px-7 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-bento transition-transform hover:-translate-y-0.5">Enviar comprobante <ArrowRight className="h-4 w-4" /></button>
      </div>
    </form>
  );
}
