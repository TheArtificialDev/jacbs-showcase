import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { papers } from '@/data/papers';
import { PaperDetailView } from '@/components/PaperDetailView';
import { baseMetadata } from '@/lib/seo';

interface PaperPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PaperPageProps): Promise<Metadata> {
  const { slug } = await params;
  const paper = papers.find(p => p.slug === slug);
  
  if (!paper) {
    return baseMetadata('Paper Not Found');
  }

  const authorNames = paper.authors.join(', ');
  const keywords = paper.keywords?.join(', ') || '';
  
  return {
    title: paper.title,
    description: paper.abstract.substring(0, 160) + '...',
    keywords: keywords,
    authors: paper.authors.map(author => ({ name: author })),
    openGraph: {
      title: paper.title,
      description: paper.abstract.substring(0, 160) + '...',
      type: 'article',
      publishedTime: paper.publishedAt,
      authors: paper.authors,
      url: `https://jacbs.in/browse/${paper.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: paper.title,
      description: paper.abstract.substring(0, 160) + '...',
    },
    other: {
      // Dublin Core Metadata for Academic Indexing
      'DC.title': paper.title,
      'DC.creator': authorNames,
      'DC.date': paper.publishedAt,
      'DC.type': 'Text',
      'DC.format': 'application/pdf',
      'DC.identifier': `https://jacbs.in/browse/${paper.slug}`,
      'DC.subject': keywords,
      'DC.description': paper.abstract,
      'DC.publisher': 'Journals for Advanced Computational and Business Studies',
      'DC.language': 'en',
      // Google Scholar specific meta tags
      'citation_title': paper.title,
      'citation_author': authorNames,
      'citation_publication_date': paper.publishedAt,
      'citation_journal_title': 'Journals for Advanced Computational and Business Studies',
      'citation_pdf_url': `https://jacbs.in${paper.pdfUrl}`,
      'citation_abstract_html_url': `https://jacbs.in/browse/${paper.slug}`,
      'citation_language': 'en',
      'citation_keywords': keywords,
      // Additional academic meta tags
      'scholar_title': paper.title,
      'scholar_author': authorNames,
      'scholar_publication_date': paper.publishedAt,
      'scholar_pdf_url': `https://jacbs.in${paper.pdfUrl}`,
    }
  };
}

export async function generateStaticParams() {
  return papers.map((paper) => ({
    slug: paper.slug,
  }));
}

export default async function PaperPage({ params }: PaperPageProps) {
  const { slug } = await params;
  const paper = papers.find(p => p.slug === slug);

  if (!paper) {
    notFound();
  }

  // JSON-LD structured data for Google Scholar and other academic search engines
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "headline": paper.title,
    "author": paper.authors.map(author => ({
      "@type": "Person",
      "name": author
    })),
    "datePublished": paper.publishedAt,
    "description": paper.abstract,
    "keywords": paper.keywords?.join(', '),
    "publisher": {
      "@type": "Organization",
      "name": "Journals for Advanced Computational and Business Studies",
      "url": "https://jacbs.in"
    },
    "url": `https://jacbs.in/browse/${paper.slug}`,
    "sameAs": `https://jacbs.in${paper.pdfUrl}`,
    "inLanguage": "en",
    "isAccessibleForFree": true,
    "license": "https://creativecommons.org/licenses/by/4.0/"
  };

  return (
    <>
      <PaperDetailView paper={paper} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
