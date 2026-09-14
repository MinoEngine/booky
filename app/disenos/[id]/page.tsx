import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Heart } from 'lucide-react';
import { MOCK_DESIGNS } from '@/data/mockData';

export function generateStaticParams() {
  return MOCK_DESIGNS.map((design) => ({ id: design.id }));
}

export default async function DesignDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const design = MOCK_DESIGNS.find((item) => item.id === id);

  if (!design) {
    return <div className="px-4 py-24 text-center"><h1 className="font-serif text-4xl font-bold text-espresso">Diseño no encontrado</h1><Link href="/disenos" className="mt-6 inline-flex rounded-full border-2 border-espresso bg-pink px-6 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-bento">Volver a diseños</Link></div>;
  }

  return (
    <div className="overflow-hidden bg-bgMain">
      <section className="border-b-2 border-espresso bg-pinkLight px-4 py-10 md:py-14"><div className="mx-auto max-w-6xl"><Link href="/disenos" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-espresso/65 transition-colors hover:text-pink"><ArrowLeft className="h-4 w-4" /> Volver a diseños</Link></div></section>
      <section className="px-4 py-12 md:py-20"><div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-16"><div className="relative h-[28rem] overflow-hidden rounded-[2rem] border-2 border-espresso shadow-bento md:h-[38rem]"><Image src={design.image} alt={design.title} fill sizes="(max-width: 768px) 100vw, 55vw" className="object-cover" priority /></div><div><span className="inline-flex items-center gap-2 rounded-full border-2 border-espresso bg-mostaza px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-espresso"><Heart className="h-3.5 w-3.5 text-pink" />{design.category}</span><h1 className="mt-6 font-serif text-4xl font-bold leading-tight text-espresso md:text-6xl">{design.title}</h1><p className="mt-6 text-sm leading-7 text-muted">Una referencia para conversar, adaptar y hacerla tuya. Podemos ajustar colores, forma y detalles según tu estilo y la ocasión.</p><div className="mt-8 border-y border-espresso/15 py-5 text-sm leading-6 text-espresso/70">Todos los diseños se conversan antes de comenzar para asegurar que el resultado encaje contigo.</div><Link href="/reservar" className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-espresso bg-pink px-7 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-bento transition-transform hover:-translate-y-0.5">Quiero este look <ArrowRight className="h-4 w-4" /></Link></div></div></section>
    </div>
  );
}
