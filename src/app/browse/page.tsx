import { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import { WavesDemo } from '@/components/ui/waves-demo';
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
          <WavesDemo />
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
        <div className="py-12">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold tracking-tight mb-2">Published Research</h2>
            <p className="text-neutral-700">Direct PDF downloads are available for each paper.</p>
          </div>

          <ul className="grid gap-6">
            {papers.map((p) => (
              <li key={p.slug} id={p.slug} className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-medium mb-2">{p.title}</h3>
                <p className="text-sm text-neutral-600 mb-3">{p.authors.join(', ')} · {p.publishedAt}</p>
                <p className="text-sm text-neutral-700 mb-4 leading-relaxed">{p.abstract}</p>
                <div>
                  <a 
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 underline transition-colors" 
                    href={p.pdfUrl} 
                    download
                  >
                    Download PDF
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
