import { createPolicyMetadata, PolicyPage } from '@/components/PolicyPage';

export const metadata = createPolicyMetadata(
  'Terms of Service',
  'JACBS Terms of Service - Terms and conditions for using the JACBS platform and services'
);

export default function TermsOfServicePage() {
  return (
    <PolicyPage 
      title="Terms of Service"
      effectiveDate="September 3, 2025"
      lastUpdated="September 3, 2025"
    >
      <section>
        <h2>Agreement and Acceptance</h2>
        
        <h3>Terms Acceptance</h3>
        <p>
          By accessing, browsing, or using the JACBS platform and services (including websites, applications, 
          and related services), you acknowledge that you have read, understood, and agree to be bound by 
          these Terms of Service and all applicable laws and regulations.
        </p>

        <h3>Binding Agreement</h3>
        <p>
          These Terms constitute a legally binding agreement between you ("User," "Author," "Reviewer," 
          "Reader," or "you") and the Journal for Advanced Computational and Business Studies 
          ("JACBS," "we," "us," or "our").
        </p>

        <h3>Modifications</h3>
        <ul>
          <li><strong>Right to Modify</strong>: We reserve the right to modify these Terms at any time</li>
          <li><strong>Notice of Changes</strong>: Users will be notified of material changes via email and platform notices</li>
          <li><strong>Effective Date</strong>: Changes become effective 30 days after notification</li>
          <li><strong>Continued Use</strong>: Continued use after changes constitutes acceptance of new Terms</li>
          <li><strong>Version Control</strong>: Previous versions available upon request</li>
        </ul>

        <h3>Capacity and Authority</h3>
        <p>By using our services, you represent and warrant that:</p>
        <ul>
          <li>You are at least 18 years of age or have reached the age of majority in your jurisdiction</li>
          <li>You have the legal capacity to enter into binding agreements</li>
          <li>You have the authority to bind your institution (if applicable)</li>
          <li>Your use complies with all applicable laws and regulations</li>
          <li>All information provided is accurate and complete</li>
        </ul>
      </section>

      <section>
        <h2>Platform Description</h2>
        
        <h3>JACBS Services</h3>
        <p>JACBS provides a comprehensive academic publishing platform offering:</p>
        <ul>
          <li><strong>Manuscript Submission System</strong>: Online submission and tracking of research manuscripts</li>
          <li><strong>Peer Review Platform</strong>: Facilitation of peer review processes</li>
          <li><strong>Publication Services</strong>: Digital publication and distribution of research</li>
          <li><strong>Author Tools</strong>: Resources and tools for researchers and authors</li>
          <li><strong>Reader Access</strong>: Access to published research and scholarly content</li>
          <li><strong>Editorial Management</strong>: Tools for editors and editorial board members</li>
        </ul>

        <h3>Service Availability</h3>
        <p>
          While we strive to maintain continuous service availability, we do not guarantee uninterrupted 
          access. We may temporarily suspend services for maintenance, updates, or emergency repairs.
        </p>
      </section>

      <section>
        <h2>User Accounts and Registration</h2>

        <h3>Account Creation</h3>
        <p>To use certain features of our platform, you must create an account by providing:</p>
        <ul>
          <li>Accurate and complete personal information</li>
          <li>Valid email address for verification and communication</li>
          <li>Professional affiliation and credentials (where applicable)</li>
          <li>ORCID identifier (recommended)</li>
        </ul>

        <h3>Account Security</h3>
        <p>You are responsible for:</p>
        <ul>
          <li>Maintaining the confidentiality of your account credentials</li>
          <li>All activities that occur under your account</li>
          <li>Notifying us immediately of any unauthorized access</li>
          <li>Using strong passwords and enabling two-factor authentication when available</li>
        </ul>

        <h3>Account Information</h3>
        <p>You agree to:</p>
        <ul>
          <li>Provide accurate, current, and complete information</li>
          <li>Update information promptly when it changes</li>
          <li>Not create multiple accounts for the same individual</li>
          <li>Not share account credentials with others</li>
        </ul>
      </section>

      <section>
        <h2>Acceptable Use Policy</h2>

        <h3>Permitted Uses</h3>
        <p>You may use our platform to:</p>
        <ul>
          <li>Submit original research manuscripts for publication consideration</li>
          <li>Participate in peer review processes as invited</li>
          <li>Access and read published content</li>
          <li>Download materials for personal academic use</li>
          <li>Cite and reference published works appropriately</li>
          <li>Engage in scholarly discourse and collaboration</li>
        </ul>

        <h3>Prohibited Activities</h3>
        <p>You agree not to:</p>
        <ul>
          <li><strong>Submit plagiarized or infringing content</strong></li>
          <li><strong>Upload malicious software or harmful code</strong></li>
          <li><strong>Attempt to gain unauthorized access to systems or accounts</strong></li>
          <li><strong>Interfere with platform functionality or security</strong></li>
          <li><strong>Engage in harassment, intimidation, or abusive behavior</strong></li>
          <li><strong>Violate intellectual property rights</strong></li>
          <li><strong>Submit false or misleading information</strong></li>
          <li><strong>Use automated systems to scrape or harvest data</strong></li>
        </ul>

        <h3>Research Ethics Compliance</h3>
        <p>All submitted research must comply with:</p>
        <ul>
          <li>Institutional review board (IRB) requirements</li>
          <li>Ethics committee approvals</li>
          <li>Informed consent protocols</li>
          <li>Data protection regulations</li>
          <li>Animal welfare standards (where applicable)</li>
        </ul>
      </section>

      <section>
        <h2>Intellectual Property Rights</h2>

        <h3>Your Content</h3>
        <p>You retain ownership of intellectual property rights in content you submit, subject to:</p>
        <ul>
          <li>License grants provided to JACBS for publication purposes</li>
          <li>Third-party rights in incorporated materials</li>
          <li>Open access licensing requirements (where applicable)</li>
          <li>Institutional or funder policies</li>
        </ul>

        <h3>Platform Content</h3>
        <p>JACBS owns or licenses:</p>
        <ul>
          <li>Platform software, design, and functionality</li>
          <li>JACBS trademarks, logos, and branding</li>
          <li>Platform-generated content and metadata</li>
          <li>Editorial and review management tools</li>
        </ul>

        <h3>License Grants</h3>
        <p>By submitting content, you grant JACBS:</p>
        <ul>
          <li>Right to process, review, and publish your submission</li>
          <li>Right to distribute published content globally</li>
          <li>Right to create derivative works for platform functionality</li>
          <li>Right to preserve content in digital archives</li>
        </ul>
      </section>

      <section>
        <h2>Publication Services</h2>

        <h3>Submission Process</h3>
        <p>The manuscript submission process includes:</p>
        <ul>
          <li>Initial submission and technical review</li>
          <li>Editorial assessment and decision</li>
          <li>Peer review coordination (for accepted submissions)</li>
          <li>Revision and resubmission processes</li>
          <li>Final publication and distribution</li>
        </ul>

        <h3>Editorial Independence</h3>
        <p>
          JACBS maintains complete editorial independence in publication decisions. We reserve the right to:
        </p>
        <ul>
          <li>Accept or reject submissions based on quality and scope</li>
          <li>Request revisions or additional information</li>
          <li>Set publication timelines and priorities</li>
          <li>Maintain editorial standards and policies</li>
        </ul>

        <h3>Publication Fees</h3>
        <p>
          Publication fees (where applicable) are clearly disclosed and must be paid before publication. 
          Fee waivers may be available based on financial need or institutional agreements.
        </p>
      </section>

      <section>
        <h2>User Content and Submissions</h2>

        <h3>Content Standards</h3>
        <p>All submitted content must:</p>
        <ul>
          <li>Represent original research or scholarship</li>
          <li>Meet academic and ethical standards</li>
          <li>Comply with formatting and submission guidelines</li>
          <li>Include proper attributions and citations</li>
          <li>Avoid conflicts of interest or bias</li>
        </ul>

        <h3>Content Responsibility</h3>
        <p>You are solely responsible for:</p>
        <ul>
          <li>Accuracy and validity of submitted content</li>
          <li>Obtaining necessary permissions for third-party materials</li>
          <li>Compliance with applicable laws and regulations</li>
          <li>Ensuring co-author consent and approval</li>
          <li>Meeting institutional and funder requirements</li>
        </ul>

        <h3>Content Removal</h3>
        <p>We may remove content that:</p>
        <ul>
          <li>Violates these Terms or our policies</li>
          <li>Infringes intellectual property rights</li>
          <li>Contains harmful or malicious elements</li>
          <li>Fails to meet academic standards</li>
          <li>Is subject to legal or ethical concerns</li>
        </ul>
      </section>

      <section>
        <h2>Privacy and Data Protection</h2>
        <p>
          Your privacy is important to us. Our collection, use, and protection of personal information 
          is governed by our <a href="/policies/privacy-policy">Privacy Policy</a>, which is incorporated 
          into these Terms by reference.
        </p>

        <h3>Data Processing</h3>
        <p>By using our services, you consent to:</p>
        <ul>
          <li>Collection and processing of personal information as described in our Privacy Policy</li>
          <li>International transfer of data for platform operations</li>
          <li>Sharing of information as necessary for publication processes</li>
          <li>Retention of data according to our retention policies</li>
        </ul>
      </section>

      <section>
        <h2>Disclaimers and Limitations</h2>

        <h3>Service Disclaimers</h3>
        <p>
          JACBS services are provided "as is" and "as available" without warranties of any kind, 
          either express or implied. We disclaim all warranties, including:
        </p>
        <ul>
          <li>Merchantability and fitness for a particular purpose</li>
          <li>Accuracy, completeness, or reliability of content</li>
          <li>Uninterrupted or error-free service</li>
          <li>Security or freedom from viruses or harmful components</li>
        </ul>

        <h3>Limitation of Liability</h3>
        <p>
          To the maximum extent permitted by law, JACBS shall not be liable for any indirect, 
          incidental, special, consequential, or punitive damages, including lost profits, 
          data loss, or business interruption.
        </p>

        <h3>Maximum Liability</h3>
        <p>
          In no event shall JACBS's total liability exceed the amount paid by you for the 
          specific service giving rise to the claim during the twelve months preceding the claim.
        </p>
      </section>

      <section>
        <h2>Termination and Suspension</h2>

        <h3>Account Termination</h3>
        <p>You may terminate your account at any time by:</p>
        <ul>
          <li>Contacting our support team</li>
          <li>Following account closure procedures in your profile settings</li>
          <li>Providing required notice for active submissions</li>
        </ul>

        <h3>Suspension or Termination by JACBS</h3>
        <p>We may suspend or terminate accounts for:</p>
        <ul>
          <li>Violation of these Terms or our policies</li>
          <li>Fraudulent or abusive behavior</li>
          <li>Failure to pay required fees</li>
          <li>Violation of academic integrity standards</li>
          <li>Legal or regulatory requirements</li>
        </ul>

        <h3>Effect of Termination</h3>
        <p>Upon termination:</p>
        <ul>
          <li>Your access to platform services will cease</li>
          <li>Published content will remain available unless retracted</li>
          <li>Outstanding obligations and liabilities will survive</li>
          <li>Backup copies may be retained according to our retention policies</li>
        </ul>
      </section>

      <section>
        <h2>Legal and Dispute Resolution</h2>

        <h3>Governing Law</h3>
        <p>
          These Terms are governed by the laws of [Jurisdiction], without regard to conflict of law principles.
        </p>

        <h3>Dispute Resolution</h3>
        <p>
          Disputes will be resolved through binding arbitration in accordance with the rules of 
          [Arbitration Association], except for claims involving intellectual property rights 
          or injunctive relief.
        </p>

        <h3>Class Action Waiver</h3>
        <p>
          You agree to resolve disputes individually and waive any right to participate in 
          class actions or collective proceedings.
        </p>

        <h3>Indemnification</h3>
        <p>
          You agree to indemnify and hold harmless JACBS from claims arising from your use of 
          the platform, violation of these Terms, or infringement of third-party rights.
        </p>
      </section>

      <section>
        <h2>Contact Information</h2>
        
        <h3>Legal Department</h3>
        <p>
          For legal matters related to these Terms:<br/>
          <strong>Email:</strong> <a href="mailto:legal@jacbs.org">legal@jacbs.org</a><br/>
          <strong>Address:</strong> JACBS Legal Department, 1000 Academic Boulevard, Suite 500, Research City, RC 12345, United States
        </p>

        <h3>General Support</h3>
        <p>
          For general questions about our services:<br/>
          <strong>Email:</strong> <a href="mailto:support@jacbs.org">support@jacbs.org</a><br/>
          <strong>Phone:</strong> +1 (555) 123-4567
        </p>

        <h3>Editorial Office</h3>
        <p>
          For editorial and publication matters:<br/>
          <strong>Email:</strong> <a href="mailto:editorial@jacbs.org">editorial@jacbs.org</a>
        </p>
      </section>
    </PolicyPage>
  );
}
