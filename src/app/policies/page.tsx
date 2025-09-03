import { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { baseMetadata } from '@/lib/seo';

export const metadata: Metadata = baseMetadata('Policies & Guidelines');

const policies = [
  {
    title: 'Submission Guidelines',
    description: 'Comprehensive guidelines for manuscript preparation, formatting, and submission process.',
    href: '/policies/submission-guidelines',
    category: 'Author Resources'
  },
  {
    title: 'Author Guidelines',
    description: 'Detailed instructions for authors including manuscript preparation, citations, and figures.',
    href: '/policies/author-guidelines',
    category: 'Author Resources'
  },
  {
    title: 'Peer Review Guidelines',
    description: 'Information about our peer review process, reviewer selection, and review criteria.',
    href: '/policies/peer-review-guidelines',
    category: 'Editorial Process'
  },
  {
    title: 'Editorial Policies',
    description: 'Editorial decision-making policies, governance, and conflict resolution procedures.',
    href: '/policies/editorial-policies',
    category: 'Editorial Process'
  },
  {
    title: 'Publication Ethics',
    description: 'Ethical guidelines covering authorship, conflicts of interest, and research integrity.',
    href: '/policies/publication-ethics',
    category: 'Ethics & Standards'
  },
  {
    title: 'Open Access Policy',
    description: 'Our commitment to open access publishing and licensing options.',
    href: '/policies/open-access-policy',
    category: 'Publishing'
  },
  {
    title: 'Copyright & Licensing',
    description: 'Copyright policies, author rights, and licensing information.',
    href: '/policies/copyright-licensing',
    category: 'Legal'
  },
  {
    title: 'Terms of Service',
    description: 'Terms and conditions for using the JACBS platform and services.',
    href: '/policies/terms-of-service',
    category: 'Legal'
  },
  {
    title: 'Privacy Policy',
    description: 'How we collect, use, and protect your personal information.',
    href: '/policies/privacy-policy',
    category: 'Legal'
  },
  {
    title: 'Retraction Policy',
    description: 'Procedures for article retractions and corrections.',
    href: '/policies/retraction-policy',
    category: 'Ethics & Standards'
  },
  {
    title: 'Contact & Support',
    description: 'Contact information, support channels, and response time commitments.',
    href: '/policies/contact-support',
    category: 'Support'
  }
];

const categories = [
  'Author Resources',
  'Editorial Process', 
  'Ethics & Standards',
  'Publishing',
  'Legal',
  'Support'
];

export default function PoliciesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      <AnimatedSection>
        <div className="py-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Policies & Guidelines</h1>
          <p className="text-neutral-700 text-lg mb-12 max-w-3xl">
            Comprehensive policies and guidelines governing the Journal for Advanced Computational 
            and Business Studies. These documents ensure transparency, ethical standards, and 
            consistent quality in our publishing process.
          </p>

          {categories.map(category => {
            const categoryPolicies = policies.filter(policy => policy.category === category);
            
            return (
              <section key={category} className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 border-b border-neutral-200 pb-2">
                  {category}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {categoryPolicies.map((policy, index) => (
                    <Link 
                      key={index}
                      href={policy.href}
                      className="block p-6 border border-neutral-200 rounded-lg hover:border-neutral-300 hover:shadow-md transition-all duration-200"
                    >
                      <h3 className="text-lg font-medium mb-2 text-neutral-900">
                        {policy.title}
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {policy.description}
                      </p>
                      <div className="mt-3 text-blue-600 text-sm font-medium">
                        Read Policy →
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}

          <section className="mt-16 bg-neutral-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Questions About Our Policies?</h2>
            <p className="text-neutral-700 mb-6">
              If you have questions about any of our policies or need clarification on specific 
              requirements, our editorial team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/policies/contact-support"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                Contact Editorial Office
              </Link>
              <Link 
                href="/submit"
                className="inline-block border border-neutral-300 text-neutral-700 px-6 py-3 rounded-lg hover:bg-neutral-100 transition-colors text-center"
              >
                Submit Your Research
              </Link>
            </div>
          </section>
        </div>
      </AnimatedSection>
    </div>
  );
}
