import Link from 'next/link';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t-2 border-espresso bg-espresso px-6 py-14 text-bgMain">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.5fr_1fr_1fr] md:gap-16">
        <div className="max-w-sm">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-pinkLight">SALÓN DE BELLEZA</p>
          <h2 className="font-serif text-4xl font-bold tracking-widest text-bgMain">YES BEAUTY<span className="text-pink">.</span></h2>
          <p className="mt-4 text-sm leading-7 text-bgMain/65">Diseños delicados, detalles que duran y un espacio para volver a ti.</p>
        </div>

        <div>
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-mostaza">Explora</p>
          <nav className="flex flex-col items-start gap-3 text-sm text-bgMain/75">
            <Link href="/" className="transition-colors hover:text-pinkLight">Inicio</Link>
            <Link href="/servicios" className="transition-colors hover:text-pinkLight">Servicios</Link>
            <Link href="/disenos" className="transition-colors hover:text-pinkLight">Diseños</Link>
            <Link href="/sobre-mi" className="transition-colors hover:text-pinkLight">Sobre mí</Link>
            <Link href="/comprobar-pago" className="transition-colors hover:text-pinkLight">Comprobar pago</Link>
          </nav>
        </div>

        <div>
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-mostaza">Hablemos</p>
          <div className="space-y-3 text-sm text-bgMain/75">
            <a href="mailto:yesbeauty@gmail.com" className="block transition-colors hover:text-pinkLight">jessy@gmail.com</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-colors hover:text-pinkLight">Instagram <ArrowUpRight className="h-3 w-3" /></a>
            <a href="https://wa.me/" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-colors hover:text-pinkLight"><MessageCircle className="h-4 w-4" /> WhatsApp <ArrowUpRight className="h-3 w-3" /></a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-3 border-t border-bgMain/15 pt-6 text-[10px] uppercase tracking-[0.15em] text-bgMain/45 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 MHenriquez C.A. Todos los derechos reservados.</span>
        <Link href="/reservar" className="flex items-center gap-1 text-pinkLight transition-colors hover:text-white">Reserva tu cita <ArrowUpRight className="h-3 w-3" /></Link>
      </div>
    </footer>
  );
}