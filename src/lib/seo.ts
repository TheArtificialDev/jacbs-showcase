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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const authors = p.authors || [];
  const other: Record<string, string | string[]> = {
    // Google Scholar specific meta tags
    'citation_title': p.title,
    'citation_publication_date': p.publishedAt,
    'citation_pdf_url': new URL(p.pdfUrl, siteUrl).toString(),
    'citation_abstract_html_url': `${siteUrl}/browse/${p.slug}`,
    'citation_journal_title': siteName,
    'citation_publisher': siteName,
    'citation_language': 'en',
    'citation_issn': '2755-0001', // Example ISSN
    
    // Dublin Core Metadata
    'DC.title': p.title,
    'DC.creator': authors.join('; '),
    'DC.date': p.publishedAt,
    'DC.type': 'Text',
    'DC.format': 'application/pdf',
    'DC.identifier': `${siteUrl}/browse/${p.slug}`,
    'DC.description': p.abstract,
    'DC.publisher': siteName,
    'DC.language': 'en',
    'DC.rights': 'Creative Commons Attribution 4.0 International License',
    
    // Additional academic meta tags
    'scholar_title': p.title,
    'scholar_publication_date': p.publishedAt,
    'scholar_pdf_url': new URL(p.pdfUrl, siteUrl).toString(),
  };
  
  if (authors.length) {
    other['citation_author'] = authors;
    other['citation_authors'] = authors.join('; ');
  }
  
  if (p.keywords?.length) {
    other['citation_keywords'] = p.keywords.join(', ');
    other['DC.subject'] = p.keywords.join('; ');
  }
  
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
    dateCreated: p.publishedAt,
    publisher: {
      '@type': 'Organization',
      name: siteName,
      url: urlBase,
    },
    description: p.abstract,
    abstract: p.abstract,
    url: `${urlBase}/browse/${p.slug}`,
    sameAs: [`${urlBase}${p.pdfUrl}`],
    identifier: `${urlBase}/browse/${p.slug}`,
    inLanguage: 'en',
    isAccessibleForFree: true,
    license: 'https://creativecommons.org/licenses/by/4.0/',
    keywords: p.keywords?.join(', '),
    genre: 'research article',
    isPartOf: {
      '@type': 'Periodical',
      name: siteName,
      issn: '2755-0001',
      publisher: {
        '@type': 'Organization',
        name: siteName,
      }
    }
  };
}
