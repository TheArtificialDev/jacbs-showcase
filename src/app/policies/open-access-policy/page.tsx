import { createPolicyMetadata, PolicyPage } from '@/components/PolicyPage';

export const metadata = createPolicyMetadata(
  'Open Access Policy',
  'JACBS Open Access Policy - Our commitment to open access publishing and licensing options'
);

export default function OpenAccessPolicyPage() {
  return (
    <PolicyPage 
      title="Open Access Policy"
      effectiveDate="September 3, 2025"
      lastUpdated="September 3, 2025"
    >
      <section>
        <h2>Our Commitment to Open Access</h2>
        
        <p>
          The Journal for Advanced Computational and Business Studies (JACBS) is committed to advancing 
          open access to scholarly research. We believe that unrestricted access to research accelerates 
          scientific discovery, promotes innovation, and maximizes the societal impact of scholarly work.
        </p>

        <h3>Open Access Vision</h3>
        <p>Our open access initiative aims to:</p>
        <ul>
          <li>Remove barriers to accessing high-quality research</li>
          <li>Accelerate scientific discovery and collaboration</li>
          <li>Increase global research visibility and impact</li>
          <li>Support researchers in meeting funder mandates</li>
          <li>Promote equity in access to scholarly information</li>
        </ul>
      </section>

      <section>
        <h2>Open Access Publishing Models</h2>

        <h3>Gold Open Access</h3>
        <p>
          Articles published under our Gold Open Access model are immediately and permanently free 
          to read, download, and share. Key features include:
        </p>
        <ul>
          <li><strong>Immediate Access</strong>: Articles available immediately upon publication</li>
          <li><strong>Perpetual Availability</strong>: Content remains freely accessible indefinitely</li>
          <li><strong>Liberal Licensing</strong>: Published under Creative Commons licenses</li>
          <li><strong>Global Accessibility</strong>: No geographic or institutional restrictions</li>
          <li><strong>Enhanced Discoverability</strong>: Optimized for search engines and repositories</li>
        </ul>

        <h3>Hybrid Open Access</h3>
        <p>
          Authors publishing in our subscription-based issues can choose to make their individual 
          articles open access through our hybrid model:
        </p>
        <ul>
          <li><strong>Article-Level Choice</strong>: Select open access for individual articles</li>
          <li><strong>Flexible Payment</strong>: Pay Article Processing Charges (APCs) as needed</li>
          <li><strong>Immediate Release</strong>: Open access upon publication</li>
          <li><strong>Same Quality Standards</strong>: Identical peer review and editorial processes</li>
        </ul>

        <h3>Green Open Access (Self-Archiving)</h3>
        <p>
          We support author self-archiving rights to promote broader access to research:
        </p>
        <ul>
          <li><strong>Preprint Deposits</strong>: Authors may deposit preprints in repositories</li>
          <li><strong>Postprint Archiving</strong>: Accepted manuscripts may be archived after embargo periods</li>
          <li><strong>Institutional Repositories</strong>: Support for institutional repository deposits</li>
          <li><strong>Funder Compliance</strong>: Assistance with funder mandate compliance</li>
        </ul>
      </section>

      <section>
        <h2>Creative Commons Licensing</h2>

        <h3>Available Licenses</h3>
        <p>JACBS supports the following Creative Commons licenses for open access content:</p>

        <h4>CC BY (Attribution)</h4>
        <ul>
          <li><strong>Maximum Freedom</strong>: Users can distribute, remix, adapt, and build upon content</li>
          <li><strong>Commercial Use</strong>: Commercial use permitted</li>
          <li><strong>Attribution Required</strong>: Must credit original authors and source</li>
          <li><strong>Recommended License</strong>: Our preferred license for maximum impact</li>
        </ul>

        <h4>CC BY-SA (Attribution-ShareAlike)</h4>
        <ul>
          <li><strong>Copyleft Licensing</strong>: Derivative works must use same license</li>
          <li><strong>Commercial Use</strong>: Commercial use permitted</li>
          <li><strong>Share Alike</strong>: Adaptations must be shared under identical terms</li>
        </ul>

        <h4>CC BY-NC (Attribution-NonCommercial)</h4>
        <ul>
          <li><strong>Non-Commercial Use</strong>: Commercial use prohibited</li>
          <li><strong>Academic Freedom</strong>: Full rights for educational and research use</li>
          <li><strong>Attribution Required</strong>: Must credit original authors and source</li>
        </ul>

        <h4>CC BY-NC-SA (Attribution-NonCommercial-ShareAlike)</h4>
        <ul>
          <li><strong>Non-Commercial Copyleft</strong>: Combines non-commercial with share-alike terms</li>
          <li><strong>Educational Use</strong>: Ideal for educational materials and resources</li>
          <li><strong>Derivative Restrictions</strong>: Adaptations must use same license</li>
        </ul>
      </section>

      <section>
        <h2>Article Processing Charges (APCs)</h2>

        <h3>Fee Structure</h3>
        <p>Our transparent APC structure supports sustainable open access publishing:</p>
        <ul>
          <li><strong>Research Articles</strong>: $2,500 USD per article</li>
          <li><strong>Review Articles</strong>: $3,000 USD per article</li>
          <li><strong>Short Communications</strong>: $1,500 USD per article</li>
          <li><strong>Case Studies</strong>: $2,000 USD per article</li>
        </ul>

        <h3>Fee Waivers and Discounts</h3>
        <p>We offer fee assistance to ensure access is not limited by financial constraints:</p>
        <ul>
          <li><strong>Developing Country Waivers</strong>: Full waivers for authors from least developed countries</li>
          <li><strong>Institutional Agreements</strong>: Discounted rates through institutional memberships</li>
          <li><strong>Financial Hardship</strong>: Case-by-case consideration for demonstrated need</li>
          <li><strong>Student Discounts</strong>: Reduced rates for student first authors</li>
          <li><strong>Early Career Researcher Support</strong>: Special rates for early career researchers</li>
        </ul>

        <h3>Payment and Invoicing</h3>
        <p>APC payment process:</p>
        <ul>
          <li><strong>Payment Upon Acceptance</strong>: APCs due after editorial acceptance</li>
          <li><strong>Multiple Payment Methods</strong>: Credit card, bank transfer, institutional billing</li>
          <li><strong>Transparent Invoicing</strong>: Clear invoices with detailed breakdowns</li>
          <li><strong>Funder Support</strong>: Assistance with funder payment processes</li>
        </ul>
      </section>

      <section>
        <h2>Author Rights and Retention</h2>

        <h3>Copyright Retention</h3>
        <p>Authors publishing open access retain significant rights:</p>
        <ul>
          <li><strong>Copyright Ownership</strong>: Authors retain copyright to their work</li>
          <li><strong>Attribution Rights</strong>: Right to be identified as the author</li>
          <li><strong>Integrity Rights</strong>: Right to object to derogatory treatment</li>
          <li><strong>Reuse Rights</strong>: Broad rights to reuse their own work</li>
        </ul>

        <h3>Distribution Rights</h3>
        <p>Open access authors may:</p>
        <ul>
          <li>Share their work through any medium or format</li>
          <li>Adapt, remix, transform, and build upon the material</li>
          <li>Use their work for commercial purposes (under appropriate licenses)</li>
          <li>Include their work in future publications and presentations</li>
          <li>Deposit in institutional and subject repositories</li>
        </ul>

        <h3>Attribution Requirements</h3>
        <p>When others use open access content, they must:</p>
        <ul>
          <li>Provide appropriate credit to original authors</li>
          <li>Include a link to the original source</li>
          <li>Indicate if changes were made to the original</li>
          <li>Include the Creative Commons license information</li>
        </ul>
      </section>

      <section>
        <h2>Repository and Archiving Policies</h2>

        <h3>Institutional Repositories</h3>
        <p>JACBS supports deposit in institutional repositories:</p>
        <ul>
          <li><strong>Preprint Deposits</strong>: Encouraged before and during peer review</li>
          <li><strong>Accepted Manuscript Deposits</strong>: Permitted immediately upon acceptance</li>
          <li><strong>Version of Record</strong>: Open access articles may be deposited immediately</li>
          <li><strong>Embargo Periods</strong>: No embargo for open access articles</li>
        </ul>

        <h3>Subject Repositories</h3>
        <p>We encourage deposit in discipline-specific repositories:</p>
        <ul>
          <li><strong>ArXiv</strong>: For computational and mathematical sciences</li>
          <li><strong>bioRxiv</strong>: For biological and biomedical research</li>
          <li><strong>SSRN</strong>: For business and social sciences research</li>
          <li><strong>ResearchGate</strong>: For academic networking and sharing</li>
        </ul>

        <h3>Long-term Preservation</h3>
        <p>JACBS ensures long-term preservation through:</p>
        <ul>
          <li><strong>CLOCKSS</strong>: Distributed digital preservation network</li>
          <li><strong>Portico</strong>: Digital preservation service</li>
          <li><strong>PKP PN</strong>: Public Knowledge Project Preservation Network</li>
          <li><strong>National Libraries</strong>: Partnerships with national library systems</li>
        </ul>
      </section>

      <section>
        <h2>Funder Mandate Compliance</h2>

        <h3>Major Funder Policies</h3>
        <p>JACBS open access options support compliance with major funder mandates:</p>
        <ul>
          <li><strong>NIH Public Access Policy</strong>: Immediate compliance through open access</li>
          <li><strong>NSF Public Access Requirements</strong>: Full compliance for NSF-funded research</li>
          <li><strong>European Research Council</strong>: Supports Plan S requirements</li>
          <li><strong>Wellcome Trust</strong>: Meets all Wellcome open access requirements</li>
          <li><strong>Gates Foundation</strong>: Compliant with Gates Foundation policy</li>
        </ul>

        <h3>Compliance Support</h3>
        <p>We provide assistance with funder compliance:</p>
        <ul>
          <li><strong>Compliance Verification</strong>: Verification that articles meet funder requirements</li>
          <li><strong>Repository Deposits</strong>: Automated deposits to funder-specified repositories</li>
          <li><strong>License Selection</strong>: Guidance on appropriate Creative Commons licenses</li>
          <li><strong>Documentation</strong>: Compliance documentation for grant reporting</li>
        </ul>
      </section>

      <section>
        <h2>Global Access Initiatives</h2>

        <h3>Research4Life</h3>
        <p>
          JACBS participates in Research4Life programs to provide free or low-cost access to 
          researchers in developing countries:
        </p>
        <ul>
          <li><strong>HINARI</strong>: Health research access</li>
          <li><strong>AGORA</strong>: Agricultural research access</li>
          <li><strong>OARE</strong>: Environmental research access</li>
          <li><strong>ARDI</strong>: Innovation and development research access</li>
        </ul>

        <h3>Developing Country Support</h3>
        <p>Special provisions for researchers in developing countries:</p>
        <ul>
          <li><strong>Free Access</strong>: Free access to all subscription content</li>
          <li><strong>APC Waivers</strong>: Automatic waivers for least developed countries</li>
          <li><strong>Reduced Rates</strong>: Significantly reduced APCs for middle-income countries</li>
          <li><strong>Technical Support</strong>: Additional technical assistance and training</li>
        </ul>
      </section>

      <section>
        <h2>Quality Assurance and Standards</h2>

        <h3>Editorial Standards</h3>
        <p>Open access publications maintain the same rigorous standards:</p>
        <ul>
          <li><strong>Peer Review</strong>: Identical peer review process regardless of access model</li>
          <li><strong>Editorial Oversight</strong>: Same editorial board and decision-making process</li>
          <li><strong>Quality Control</strong>: Consistent quality control and copyediting</li>
          <li><strong>Ethical Standards</strong>: Same ethical guidelines and publication ethics</li>
        </ul>

        <h3>Technical Standards</h3>
        <p>Open access content meets international technical standards:</p>
        <ul>
          <li><strong>Metadata Standards</strong>: Dublin Core and DataCite metadata</li>
          <li><strong>Persistent Identifiers</strong>: DOI assignment for all open access articles</li>
          <li><strong>ORCID Integration</strong>: Author identification through ORCID</li>
          <li><strong>Accessibility</strong>: WCAG 2.1 AA accessibility standards</li>
        </ul>
      </section>

      <section>
        <h2>Monitoring and Evaluation</h2>

        <h3>Usage Metrics</h3>
        <p>We provide comprehensive usage statistics for open access content:</p>
        <ul>
          <li><strong>Download Statistics</strong>: Article-level download counts</li>
          <li><strong>Citation Metrics</strong>: Citation tracking and analysis</li>
          <li><strong>Social Media Metrics</strong>: Social media engagement tracking</li>
          <li><strong>Geographic Analysis</strong>: Global usage pattern analysis</li>
        </ul>

        <h3>Impact Assessment</h3>
        <p>Regular assessment of open access impact:</p>
        <ul>
          <li><strong>Annual Reports</strong>: Detailed annual open access reports</li>
          <li><strong>Cost Transparency</strong>: Clear reporting of publishing costs and revenues</li>
          <li><strong>Community Feedback</strong>: Regular surveys of authors and readers</li>
          <li><strong>Policy Evolution</strong>: Continuous improvement of open access policies</li>
        </ul>
      </section>

      <section>
        <h2>Contact Information</h2>
        
        <h3>Open Access Team</h3>
        <p>
          <strong>Email:</strong> <a href="mailto:openaccess@jacbs.org">openaccess@jacbs.org</a><br/>
          <strong>Phone:</strong> +1 (555) 123-4577
        </p>

        <h3>Author Support</h3>
        <p>
          For questions about open access options and requirements:<br/>
          <strong>Email:</strong> <a href="mailto:author.support@jacbs.org">author.support@jacbs.org</a>
        </p>

        <h3>Institutional Partnerships</h3>
        <p>
          For institutional open access agreements:<br/>
          <strong>Email:</strong> <a href="mailto:institutional@jacbs.org">institutional@jacbs.org</a>
        </p>
      </section>
    </PolicyPage>
  );
}
