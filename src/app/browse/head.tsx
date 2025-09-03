import { papers } from '@/data/papers';

export default function Head() {
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  return (
    <>
      {papers.map((p) => (
        <>
          <meta key={`title-${p.slug}`} name="citation_title" content={p.title} />
          {p.authors.map((a, i) => (
            <meta key={`author-${p.slug}-${i}`} name="citation_author" content={a} />
          ))}
          <meta key={`date-${p.slug}`} name="citation_publication_date" content={p.publishedAt} />
          <meta key={`pdf-${p.slug}`} name="citation_pdf_url" content={new URL(p.pdfUrl, site).toString()} />
          {p.keywords?.length ? (
            <meta key={`kw-${p.slug}`} name="citation_keywords" content={p.keywords.join(', ')} />
          ) : null}
        </>
      ))}
    </>
  );
}
