import type { Metadata } from 'next';
import { Paper } from '@/data/papers';

export const siteName = 'Journal for Advanced Computational and Business Studies';
export const siteDescription = 'A modern venue for showcasing and publishing cutting-edge research in computation and business.';

export function baseMetadata(title?: string, description?: string): Metadata {
  const t = title ? `${title} | ${siteName}` : siteName;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  return {
    metadataBase: new URL(siteUrl),
    title: t,
    description: description || siteDescription,
    icons: {
      icon: '/JACBS.png',
      shortcut: '/JACBS.png',
      apple: '/JACBS.png',
    },
    alternates: {
      canonical: siteUrl,
    },
    openGraph: {
      title: t,
      description: description || siteDescription,
      siteName,
      url: siteUrl,
      type: 'website',
      images: [
        {
          url: '/JACBS.png',
          width: 1200,
          height: 630,
          alt: siteName,
        }
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function paperCitationMeta(p: Paper): Metadata['other'] {
  // Highwire Press tags that Google Scholar understands
  const authors = p.authors || [];
  const other: Record<string, string | string[]> = {
    'citation_title': p.title,
    'citation_publication_date': p.publishedAt,
    'citation_pdf_url': new URL(p.pdfUrl, process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').toString(),
  };
  if (authors.length) other['citation_author'] = authors;
  if (p.keywords?.length) other['citation_keywords'] = p.keywords.join(', ');
  return other;
}

export function paperJsonLd(p: Paper) {
  const urlBase = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  return {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline: p.title,
    name: p.title,
    author: p.authors.map((a) => ({ '@type': 'Person', name: a })),
    datePublished: p.publishedAt,
    publisher: {
      '@type': 'Organization',
      name: siteName,
    },
    description: p.abstract,
    url: `${urlBase}/browse#${p.slug}`,
    sameAs: [`${urlBase}${p.pdfUrl}`],
  };
}
