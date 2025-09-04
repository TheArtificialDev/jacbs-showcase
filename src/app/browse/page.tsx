import { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import { WaveHeroBackground } from '@/components/ui/wave-hero-background';
import { ResearchGrid } from '@/components/ui/research-grid';
import { papers } from '@/data/papers';
import { baseMetadata, paperJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  ...baseMetadata('Browse'),
  robots: { index: true, follow: true },
};

export default function BrowsePage() {
  const jsonLd = papers.map(paperJsonLd);
  return (
    <div>
      {/* Hero Section with Wave Background */}
      <section className="relative">
        <div className="h-[60vh] relative overflow-hidden">
          <WaveHeroBackground />
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
                Browse Papers
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
                Explore cutting-edge research in computational sciences and business applications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Papers List */}
      <AnimatedSection>
        <ResearchGrid 
          papers={papers}
          title="Published Research"
          description="Explore our latest research papers with enhanced interactive cards featuring gradient backgrounds. Direct PDF downloads are available for each paper."
          columns={3}
        />
      </AnimatedSection>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
