'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react';
import { MOCK_TESTIMONIALS } from '@/data/mockData';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonial = MOCK_TESTIMONIALS[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + MOCK_TESTIMONIALS.length) % MOCK_TESTIMONIALS.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % MOCK_TESTIMONIALS.length);
  };

  return (
    <section className="relative overflow-hidden border-b-2 border-espresso bg-pinkLight px-4 py-28 md:py-40">
      <span className="pointer-events-none absolute left-[8%] top-20 text-5xl text-mostaza" aria-hidden="true">✦</span>
      <div className="mx-auto max-w-4xl space-y-14">
        <div className="space-y-2 text-center">
          <span className="inline-block rounded-full border-2 border-espresso bg-bgMain px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-espresso">Lo que dicen ellas</span>
          <h2 className="font-serif text-2xl font-bold text-espresso md:text-4xl">Ellas ya vivieron la experiencia</h2>
          <p className="mx-auto max-w-lg text-xs leading-6 text-espresso/65">Historias reales de quienes encontraron un ratito para sentirse increíbles.</p>
        </div>

        <div className="relative mx-auto max-w-2xl">
          <div className="relative min-h-[330px] rounded-[2rem] border-2 border-espresso bg-surface p-8 shadow-bento md:min-h-[360px] md:p-12">
            <Quote className="absolute right-7 top-7 h-12 w-12 -rotate-6 text-pink/25 md:right-10 md:top-9" aria-hidden="true" />
            <div className="relative flex h-full flex-col justify-between gap-8">
              <div>
                <div className="mb-5 flex gap-1 text-mostaza" aria-label={`${testimonial.rating} de 5 estrellas`}>
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="max-w-xl font-serif text-xl leading-relaxed text-espresso md:text-2xl">&ldquo;{testimonial.comment}&rdquo;</p>
              </div>
              <div className="flex flex-col gap-2 border-t border-espresso/15 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-espresso">{testimonial.name}</p>
                  <p className="mt-1 text-[11px] text-muted">{testimonial.serviceUsed}</p>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-pink">Cliente verificada</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <div className="flex gap-2" aria-label="Seleccionar testimonio">
              {MOCK_TESTIMONIALS.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Ver testimonio de ${item.name}`}
                  aria-current={index === activeIndex ? 'true' : undefined}
                  className={`h-2.5 rounded-full border border-espresso transition-all ${index === activeIndex ? 'w-8 bg-pink' : 'w-2.5 bg-surface'}`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={showPrevious} aria-label="Testimonio anterior" className="rounded-full border-2 border-espresso bg-surface p-3 text-espresso shadow-bento transition-transform hover:-translate-y-0.5 active:translate-y-1 active:shadow-none">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button type="button" onClick={showNext} aria-label="Siguiente testimonio" className="rounded-full border-2 border-espresso bg-pink p-3 text-white shadow-bento transition-transform hover:-translate-y-0.5 active:translate-y-1 active:shadow-none">
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}