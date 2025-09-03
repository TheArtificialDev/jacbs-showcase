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
  {
    slug: 'hybrid-transformers-in-business-forecasting',
    title: 'Hybrid Transformers for Business Time-Series Forecasting',
    authors: ['A. Sharma', 'L. Chen'],
    abstract:
      'We propose a hybrid transformer architecture that combines temporal convolution modules with self-attention to improve business time-series forecasting accuracy across multiple domains.',
    publishedAt: '2024-11-12',
    pdfUrl: '/papers/hybrid-transformers.pdf',
    keywords: ['transformers', 'time-series', 'forecasting', 'business analytics'],
  },
  {
    slug: 'rl-for-supply-chain-optimization',
    title: 'Reinforcement Learning for Supply Chain Optimization',
    authors: ['M. Gomez', 'R. Patel', 'S. Ito'],
    abstract:
      'This study presents an RL framework for multi-echelon supply chain optimization, demonstrating significant reductions in stockouts and logistics costs under uncertainty.',
    publishedAt: '2025-05-03',
    pdfUrl: '/papers/rl-supply-chain.pdf',
    keywords: ['reinforcement learning', 'supply chain', 'optimization'],
  },
  {
    slug: 'llm-risk-assessment-in-finance',
    title: 'Large Language Models for Risk Assessment in Finance',
    authors: ['E. Novak'],
    abstract:
      'We evaluate LLM-based pipelines for risk assessment, highlighting strengths in narrative analysis and limitations in quantitative calibration, with recommendations for hybrid systems.',
    publishedAt: '2025-01-27',
    pdfUrl: '/papers/llm-risk-assessment.pdf',
    keywords: ['LLM', 'finance', 'risk', 'hybrid systems'],
  },
];
