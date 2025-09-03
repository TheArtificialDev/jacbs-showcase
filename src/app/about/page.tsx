import { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import { baseMetadata } from '@/lib/seo';

export const metadata: Metadata = baseMetadata('About');

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      <AnimatedSection>
        <div className="py-12">
          <h1 className="text-4xl font-bold tracking-tight mb-8">About JACBS</h1>
          
          {/* Mission Statement */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-neutral-700 text-lg leading-relaxed mb-4">
              The Journal for Advanced Computational and Business Studies (JACBS) is a leading international, 
              peer-reviewed academic platform dedicated to advancing the intersection of computational sciences 
              and business applications. We foster groundbreaking research that bridges theoretical innovation 
              with practical business solutions, driving digital transformation across industries.
            </p>
            <p className="text-neutral-700 text-lg leading-relaxed">
              Our mission is to provide researchers, academics, and practitioners with a prestigious venue 
              for publishing high-quality research that demonstrates rigor, reproducibility, and measurable 
              impact on business practices and computational methodologies.
            </p>
          </section>

          {/* Vision */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-neutral-700 text-lg leading-relaxed">
              To be the premier global platform for interdisciplinary research that transforms how businesses 
              leverage computational technologies, fostering innovation that addresses real-world challenges 
              and drives sustainable economic growth.
            </p>
          </section>

          {/* Scope & Focus */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Scope & Research Focus</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Computational Sciences</h3>
                <ul className="text-neutral-700 space-y-2">
                  <li>• Artificial Intelligence & Machine Learning</li>
                  <li>• Data Science & Analytics</li>
                  <li>• Blockchain & Distributed Systems</li>
                  <li>• Quantum Computing Applications</li>
                  <li>• Computational Optimization</li>
                  <li>• High-Performance Computing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Business Applications</h3>
                <ul className="text-neutral-700 space-y-2">
                  <li>• Digital Transformation Strategies</li>
                  <li>• Business Process Innovation</li>
                  <li>• Financial Technology (FinTech)</li>
                  <li>• Supply Chain Optimization</li>
                  <li>• Customer Analytics & CRM</li>
                  <li>• Enterprise Architecture</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Editorial Excellence */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Editorial Excellence</h2>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-medium mb-2">Rigorous Peer Review</h3>
                  <p className="text-neutral-700 text-sm">
                    Double-blind peer review process with international experts ensuring 
                    the highest quality standards.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Fast Publication</h3>
                  <p className="text-neutral-700 text-sm">
                    Streamlined review process with target decision times of 
                    6-8 weeks for initial review.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Open Access Options</h3>
                  <p className="text-neutral-700 text-sm">
                    Flexible publishing models including open access options 
                    to maximize research impact.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Publication Types */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Publication Types</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Research Articles</h3>
                <p className="text-neutral-700 text-sm">
                  Original research contributions with significant theoretical or practical implications.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Review Papers</h3>
                <p className="text-neutral-700 text-sm">
                  Comprehensive surveys of current state-of-the-art in specific research areas.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Case Studies</h3>
                <p className="text-neutral-700 text-sm">
                  Real-world implementation studies demonstrating practical applications.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Short Communications</h3>
                <p className="text-neutral-700 text-sm">
                  Brief reports on preliminary findings or novel methodologies.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Technical Notes</h3>
                <p className="text-neutral-700 text-sm">
                  Detailed descriptions of innovative tools, techniques, or implementations.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Opinion Pieces</h3>
                <p className="text-neutral-700 text-sm">
                  Thought leadership articles on emerging trends and future directions.
                </p>
              </div>
            </div>
          </section>

          {/* Standards & Ethics */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Academic Standards & Ethics</h2>
            <p className="text-neutral-700 mb-4">
              JACBS adheres to the highest international standards for academic publishing:
            </p>
            <ul className="text-neutral-700 space-y-2 ml-6">
              <li>• Committee on Publication Ethics (COPE) guidelines</li>
              <li>• International Committee of Medical Journal Editors (ICMJE) standards</li>
              <li>• Directory of Open Access Journals (DOAJ) principles</li>
              <li>• Creative Commons licensing options</li>
              <li>• ORCID integration for author identification</li>
              <li>• CrossRef DOI assignment for all publications</li>
            </ul>
          </section>

          {/* Technology Platform */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Advanced Publishing Platform</h2>
            <p className="text-neutral-700 mb-4">
              Our state-of-the-art digital platform provides:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="text-neutral-700 space-y-2">
                <li>• Modern, responsive web interface</li>
                <li>• Advanced search and discovery tools</li>
                <li>• Mobile-optimized reading experience</li>
                <li>• SEO-optimized content delivery</li>
              </ul>
              <ul className="text-neutral-700 space-y-2">
                <li>• Interactive data visualization</li>
                <li>• Supplementary material hosting</li>
                <li>• Social media integration</li>
                <li>• Analytics and impact tracking</li>
              </ul>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Contact & Editorial Office</h2>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2">Editorial Office</h3>
                  <p className="text-neutral-700 text-sm mb-2">
                    Journal for Advanced Computational and Business Studies<br/>
                    Editorial Department<br/>
                    International Research Center<br/>
                    Global Academic Publishers
                  </p>
                  <p className="text-neutral-700 text-sm">
                    Email: editorial@jacbs.org<br/>
                    Phone: +1 (555) 123-4567
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Submission Inquiries</h3>
                  <p className="text-neutral-700 text-sm mb-2">
                    For questions about manuscript submission,<br/>
                    review process, or publication guidelines.
                  </p>
                  <p className="text-neutral-700 text-sm">
                    Email: submissions@jacbs.org<br/>
                    Response time: 24-48 hours
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center py-8 border-t border-neutral-200">
            <h2 className="text-2xl font-semibold mb-4">Join Our Research Community</h2>
            <p className="text-neutral-700 mb-6 max-w-2xl mx-auto">
              We invite researchers, academics, and industry practitioners to contribute to our growing 
              body of knowledge at the intersection of computational sciences and business innovation.
            </p>
            <div className="space-x-4">
              <a href="/submit" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Submit Your Research
              </a>
              <a href="/browse" className="inline-block border border-neutral-300 text-neutral-700 px-6 py-3 rounded-lg hover:bg-neutral-50 transition-colors">
                Browse Publications
              </a>
            </div>
          </section>
        </div>
      </AnimatedSection>
    </div>
  );
}
