import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import FeaturedServices from '@/components/home/FeaturedServices';
import FeaturedGallery from '@/components/home/FeaturedGallery';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaSection from '@/components/home/CtaSection';

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AboutSection />
      <FeaturedServices />
      <FeaturedGallery />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}