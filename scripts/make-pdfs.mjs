import fs from 'node:fs/promises';
import path from 'node:path';

const papers = [
  'hybrid-transformers.pdf',
  'rl-supply-chain.pdf',
  'llm-risk-assessment.pdf',
];

const header = '%PDF-1.4\n';
const body = '1 0 obj<<>>endobj\ntrailer<<>>\n%%EOF\n';

const outDir = path.resolve('public/papers');
await fs.mkdir(outDir, { recursive: true });

for (const f of papers) {
  const p = path.join(outDir, f);
  try {
    await fs.access(p);
  } catch {
    await fs.writeFile(p, header + body);
    console.log('Created placeholder', p);
  }
}
