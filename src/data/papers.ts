export type Paper = {
  slug: string;
  title: string;
  authors: string[];
  abstract: string;
  publishedAt: string; // YYYY-MM-DD
  pdfUrl: string; // /papers/<file>.pdf
  keywords?: string[];
};

export const papers: Paper[] = [
  // Real papers will be populated from the database
];
