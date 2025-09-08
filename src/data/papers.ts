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
    slug: "comparative-analysis-large-language-models-gpt-claude-gemini",
    title: "Comparative Analysis of Large Language Models: GPT vs Claude vs Gemini Performance Metrics",
    authors: ["Abhishek Kumar, Lead Researcher, Valentis"],
    abstract: "This comprehensive study presents a detailed comparative analysis of three leading large language models: GPT, Claude, and Gemini. We evaluate their performance across multiple dimensions including accuracy, speed, cost-effectiveness, and specialized task performance. Our research methodology includes benchmark testing across 15 different categories of computational tasks, from natural language processing to code generation and mathematical reasoning. The findings reveal significant variations in model performance depending on task complexity and domain specificity, providing crucial insights for enterprise adoption and academic research applications.",
    publishedAt: "2025-08-15",
    pdfUrl: "/papers/Comparative Analysis of Large Language Models_ GPT vs Claude vs Gemini Performance Metrics.pdf",
    keywords: ["Large Language Models", "GPT", "Claude", "Gemini", "Performance Analysis", "AI Benchmarking", "Natural Language Processing"]
  },
  {
    slug: "cross-lingual-nlp-model-comparison",
    title: "Cross-Lingual NLP Model Comparison",
    authors: ["Abhishek Kumar, Lead Researcher, Valentis"],
    abstract: "As natural language processing applications expand globally, the need for robust cross-lingual capabilities becomes paramount. This research provides an extensive comparative study of state-of-the-art NLP models across 12 diverse languages, including both high-resource and low-resource languages. We examine translation accuracy, sentiment analysis performance, named entity recognition, and semantic understanding across different linguistic families. Our methodology incorporates both automated metrics and human evaluation, revealing critical insights about model bias, cultural sensitivity, and the challenges of maintaining performance consistency across diverse linguistic contexts.",
    publishedAt: "2025-07-20",
    pdfUrl: "/papers/Cross-Lingual NLP Model Comparison.pdf",
    keywords: ["Cross-Lingual NLP", "Multilingual Models", "Translation", "Sentiment Analysis", "Named Entity Recognition", "Low-Resource Languages"]
  },
  {
    slug: "machine-learning-paradigms-evolution",
    title: "Machine Learning Paradigms Evolution Paper",
    authors: ["Abhishek Kumar, Lead Researcher, Valentis"],
    abstract: "The evolution of machine learning paradigms has accelerated dramatically in recent years, driven by advances in computational power, data availability, and algorithmic innovation. This paper traces the historical development of machine learning from traditional statistical methods to modern deep learning architectures, with particular focus on the emergence of transformer models, federated learning, and quantum machine learning. We analyze the theoretical foundations, practical applications, and future implications of each paradigm shift, providing a comprehensive framework for understanding the trajectory of machine learning research and its impact on various industries and scientific disciplines.",
    publishedAt: "2025-06-10",
    pdfUrl: "/papers/Machine Learning Paradigms Evolution Paper.pdf",
    keywords: ["Machine Learning Evolution", "Deep Learning", "Transformer Models", "Federated Learning", "Quantum Machine Learning", "AI History"]
  },
  {
    slug: "transformer-efficiency-whitepaper-analysis",
    title: "Transformer Efficiency Whitepaper Analysis",
    authors: ["Abhishek Kumar, Lead Researcher, Valentis"],
    abstract: "Transformer architectures have revolutionized the field of artificial intelligence, but their computational efficiency remains a critical bottleneck for widespread deployment. This whitepaper presents a comprehensive analysis of transformer efficiency optimization techniques, including attention mechanism improvements, model compression strategies, and hardware-specific optimizations. We examine various approaches such as sparse attention patterns, knowledge distillation, pruning techniques, and quantization methods. Our experimental results demonstrate that strategic optimization can reduce computational requirements by up to 80% while maintaining performance within 5% of baseline models, making transformer deployment feasible for resource-constrained environments.",
    publishedAt: "2025-05-25",
    pdfUrl: "/papers/Transformer Efficiency Whitepaper Analysis.pdf",
    keywords: ["Transformer Efficiency", "Model Optimization", "Attention Mechanisms", "Model Compression", "Knowledge Distillation", "Quantization"]
  }
];
