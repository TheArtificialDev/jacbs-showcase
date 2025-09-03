import { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
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
      <AnimatedSection>
        <div className="py-12">
          <h1 className="text-2xl font-semibold tracking-tight">Browse Papers</h1>
          <p className="mt-2 text-neutral-700">Direct PDF downloads are available for each paper.</p>

          <ul className="mt-8 grid gap-6">
            {papers.map((p) => (
              <li key={p.slug} id={p.slug} className="rounded-lg border p-4">
                <h2 className="text-lg font-medium">{p.title}</h2>
                <p className="text-sm text-neutral-600 mt-1">{p.authors.join(', ')} · {p.publishedAt}</p>
                <p className="text-sm mt-2">{p.abstract}</p>
                <div className="mt-3">
                  <a className="text-sm underline" href={p.pdfUrl} download>
                    Download PDF
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
