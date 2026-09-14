import Link from 'next/link';
import Image from 'next/image';
import perfilYes from '@/public/perfil-yes.png';

export default function AboutSection() {
    return (
        <section id="sobre-mi" className="relative overflow-hidden border-b-2 border-espresso bg-mostaza px-4 py-28 md:py-40 scroll-mt-20">
            <span className="pointer-events-none absolute right-[10%] top-16 text-5xl text-pink/25" aria-hidden="true">✦</span>
            <div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] border-2 border-espresso bg-surface p-7 shadow-bento md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:p-14">
                <div className="relative min-h-[280px] overflow-hidden rounded-[1.5rem] border-2 border-espresso md:min-h-[410px]">
                    <Image
                        src={perfilYes}
                        alt="Manicurista"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute bottom-4 left-4 right-4 rounded-xl border-2 border-espresso bg-mostaza p-4 shadow-bento">
                        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-espresso">Detrás de cada diseño</p>
                        <p className="mt-1 font-serif text-lg text-espresso">Detalle, calma y mucha intención.</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center space-y-7 text-center md:text-left">
                    <div>
                        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-pink">Una cita para volver a ti</p>
                        <h2 className="font-serif text-3xl font-bold leading-tight text-espresso md:text-5xl">
                            Más que una manicure. <span className="text-pink" aria-hidden="true">✦</span>
                        </h2>
                    </div>
                    <p className="max-w-xl text-sm leading-7 text-espresso/70 md:text-base">
                        En YES BEAUTY creemos que tus manos también cuentan tu historia. Por eso cada cita comienza escuchando lo que quieres y termina con un diseño pensado para acompañarte, no para disfrazarte.
                    </p>
                    <div className="grid grid-cols-1 gap-4 border-y border-espresso/15 py-5 text-left sm:grid-cols-3">
                        <div><p className="font-serif text-xl text-espresso">01</p><p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-muted">Escuchamos tu idea</p></div>
                        <div><p className="font-serif text-xl text-espresso">02</p><p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-muted">Cuidamos cada detalle</p></div>
                        <div><p className="font-serif text-xl text-espresso">03</p><p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-muted">Te vas sintiéndote tú</p></div>
                    </div>
                    <Link
                        href="/sobre-mi"
                        className="inline-block text-xs font-bold uppercase tracking-widest text-pink transition-colors hover:text-espresso"
                    >
                        Conoce la historia de YES BEAUTY →
                    </Link>
                </div>
            </div>
        </section>
    );
}