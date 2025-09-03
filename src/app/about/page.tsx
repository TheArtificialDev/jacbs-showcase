import { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import { baseMetadata } from '@/lib/seo';

export const metadata: Metadata = baseMetadata('About');

export default function AboutPage() {
  return (
    <div>
      <AnimatedSection>
        <div className="py-12">
          <h1 className="text-2xl font-semibold tracking-tight">About the Journal</h1>
          <p className="mt-4 text-neutral-700 max-w-3xl">
            The Journal for Advanced Computational and Business Studies (JACBS) is a modern venue for
            research that bridges computational methods and business applications. We celebrate rigor,
            reproducibility, and practical impact.
          </p>
          <p className="mt-4 text-neutral-700 max-w-3xl">
            Our mission is to provide a delightful reading and publishing experience with stunning UI,
            smooth interactions, and strong SEO so that your work reaches scholars and practitioners alike.
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
}
