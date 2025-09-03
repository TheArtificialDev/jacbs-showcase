import { createPolicyMetadata, PolicyPage } from '@/components/PolicyPage';

export const metadata = createPolicyMetadata(
  'Privacy Policy',
  'JACBS Privacy Policy - How we collect, use, and protect your personal information'
);

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage 
      title="Privacy Policy"
      effectiveDate="September 3, 2025"
      lastUpdated="September 3, 2025"
    >
      <section>
        <h2>Introduction and Overview</h2>
        
        <h3>Our Commitment to Privacy</h3>
        <p>
          The Journal for Advanced Computational and Business Studies (JACBS) is committed to protecting 
          the privacy and security of personal information provided by our users. This Privacy Policy 
          explains how we collect, use, disclose, and protect personal information when you use our 
          platform, services, and websites.
        </p>

        <h3>Scope of This Policy</h3>
        <p>This Privacy Policy applies to:</p>
        <ul>
          <li><strong>JACBS Websites</strong>: All websites operated by JACBS</li>
          <li><strong>Platform Services</strong>: Manuscript submission, peer review, and publication services</li>
          <li><strong>Mobile Applications</strong>: Any mobile applications provided by JACBS</li>
          <li><strong>Email Communications</strong>: All email communications from JACBS</li>
          <li><strong>Related Services</strong>: Any other services provided directly by JACBS</li>
        </ul>

        <h3>Legal Basis for Processing</h3>
        <p>We process personal information based on:</p>
        <ul>
          <li><strong>Consent</strong>: When you provide explicit consent for specific processing activities</li>
          <li><strong>Contract</strong>: When processing is necessary to provide services you have requested</li>
          <li><strong>Legitimate Interests</strong>: When we have legitimate business interests that do not override your privacy rights</li>
          <li><strong>Legal Obligations</strong>: When processing is required to comply with legal requirements</li>
          <li><strong>Vital Interests</strong>: When processing is necessary to protect vital interests</li>
        </ul>
      </section>

      <section>
        <h2>Information We Collect</h2>

        <h3>Personal Information</h3>
        
        <h4>Account and Profile Information</h4>
        <p>We collect information when you create an account or profile:</p>
        <ul>
          <li><strong>Identity Information</strong>: Full name, academic title, professional designation</li>
          <li><strong>Contact Information</strong>: Email address, postal address, phone number</li>
          <li><strong>Professional Information</strong>: Institutional affiliation, department, position</li>
          <li><strong>Academic Credentials</strong>: Degrees, certifications, professional qualifications</li>
          <li><strong>Research Information</strong>: Research interests, expertise areas, publication history</li>
          <li><strong>ORCID Integration</strong>: ORCID identifier and associated information</li>
        </ul>

        <h4>Submission and Publication Data</h4>
        <p>When you submit content or participate in our platform:</p>
        <ul>
          <li><strong>Manuscript Information</strong>: Title, abstract, content, keywords, citations</li>
          <li><strong>Author Information</strong>: Author details, contributions, affiliations</li>
          <li><strong>Review Information</strong>: Peer review content, recommendations, comments</li>
          <li><strong>Editorial Data</strong>: Editorial decisions, correspondence, version history</li>
          <li><strong>Supplementary Materials</strong>: Data files, code, additional supporting materials</li>
        </ul>
      </section>

      <section>
        <h2>How We Use Information</h2>

        <h3>Primary Uses</h3>
        <ul>
          <li><strong>Platform Services</strong>: Providing manuscript submission, review, and publication services</li>
          <li><strong>Account Management</strong>: Creating and managing user accounts and profiles</li>
          <li><strong>Communication</strong>: Sending notifications, updates, and correspondence</li>
          <li><strong>Quality Assurance</strong>: Ensuring the quality and integrity of our platform</li>
          <li><strong>Customer Support</strong>: Providing assistance and responding to inquiries</li>
        </ul>

        <h3>Secondary Uses</h3>
        <ul>
          <li><strong>Research and Analytics</strong>: Analyzing usage patterns to improve our services</li>
          <li><strong>Marketing</strong>: Sending relevant information about our services (with consent)</li>
          <li><strong>Legal Compliance</strong>: Meeting legal and regulatory requirements</li>
          <li><strong>Security</strong>: Protecting against fraud, abuse, and security threats</li>
        </ul>
      </section>

      <section>
        <h2>Information Sharing and Disclosure</h2>

        <h3>When We Share Information</h3>
        <p>We may share your information in the following circumstances:</p>
        <ul>
          <li><strong>Publication Process</strong>: Sharing author and manuscript information as part of peer review and publication</li>
          <li><strong>Service Providers</strong>: Sharing with trusted third-party service providers who assist in platform operations</li>
          <li><strong>Legal Requirements</strong>: When required by law, regulation, or legal process</li>
          <li><strong>Business Transfers</strong>: In connection with mergers, acquisitions, or asset transfers</li>
          <li><strong>Consent</strong>: When you have provided explicit consent for sharing</li>
        </ul>

        <h3>Who We Share With</h3>
        <ul>
          <li><strong>Editorial Board</strong>: Editors and editorial board members for manuscript handling</li>
          <li><strong>Peer Reviewers</strong>: Qualified reviewers for manuscript evaluation</li>
          <li><strong>Technology Partners</strong>: Platform hosting, security, and analytics providers</li>
          <li><strong>Payment Processors</strong>: For processing publication fees and subscription payments</li>
          <li><strong>Academic Partners</strong>: Institutions and organizations for research collaboration</li>
        </ul>
      </section>

      <section>
        <h2>Data Security and Protection</h2>

        <h3>Security Measures</h3>
        <p>We implement comprehensive security measures including:</p>
        <ul>
          <li><strong>Encryption</strong>: Data encryption in transit and at rest</li>
          <li><strong>Access Controls</strong>: Strict access controls and authentication requirements</li>
          <li><strong>Regular Audits</strong>: Regular security audits and vulnerability assessments</li>
          <li><strong>Staff Training</strong>: Regular security training for all staff members</li>
          <li><strong>Incident Response</strong>: Comprehensive incident response and breach notification procedures</li>
        </ul>

        <h3>Data Backup and Recovery</h3>
        <p>We maintain secure backup systems to ensure data availability and recovery in case of technical failures.</p>
      </section>

      <section>
        <h2>Your Rights and Choices</h2>

        <h3>Your Privacy Rights</h3>
        <p>Depending on your location, you may have the following rights:</p>
        <ul>
          <li><strong>Access</strong>: Right to access your personal information</li>
          <li><strong>Correction</strong>: Right to correct inaccurate or incomplete information</li>
          <li><strong>Deletion</strong>: Right to request deletion of your personal information</li>
          <li><strong>Portability</strong>: Right to receive your data in a portable format</li>
          <li><strong>Restriction</strong>: Right to restrict certain processing activities</li>
          <li><strong>Objection</strong>: Right to object to certain uses of your information</li>
        </ul>

        <h3>How to Exercise Your Rights</h3>
        <p>
          To exercise your privacy rights, contact us at <a href="mailto:privacy@jacbs.org">privacy@jacbs.org</a> 
          or use our privacy request form. We will respond to valid requests within the timeframes required by applicable law.
        </p>
      </section>

      <section>
        <h2>Cookies and Tracking Technologies</h2>

        <h3>Types of Cookies We Use</h3>
        <ul>
          <li><strong>Essential Cookies</strong>: Required for platform functionality</li>
          <li><strong>Performance Cookies</strong>: Help us understand how users interact with our platform</li>
          <li><strong>Functional Cookies</strong>: Remember your preferences and settings</li>
          <li><strong>Analytics Cookies</strong>: Help us improve our services through usage analysis</li>
        </ul>

        <h3>Managing Cookies</h3>
        <p>
          You can control cookies through your browser settings. However, disabling certain cookies 
          may limit your ability to use some platform features.
        </p>
      </section>

      <section>
        <h2>International Data Transfers</h2>
        <p>
          We may transfer your personal information to countries outside your jurisdiction. When we do so, 
          we ensure appropriate safeguards are in place to protect your information, including:
        </p>
        <ul>
          <li>Standard Contractual Clauses approved by relevant authorities</li>
          <li>Adequacy decisions by relevant data protection authorities</li>
          <li>Other legally recognized transfer mechanisms</li>
        </ul>
      </section>

      <section>
        <h2>Data Retention</h2>
        <p>
          We retain personal information for as long as necessary to fulfill the purposes outlined in this 
          policy, comply with legal obligations, resolve disputes, and enforce agreements. Retention periods 
          vary based on the type of information and applicable legal requirements.
        </p>

        <h3>Retention Guidelines</h3>
        <ul>
          <li><strong>Account Information</strong>: Retained for the duration of your account plus 7 years</li>
          <li><strong>Publication Data</strong>: Retained permanently for archival and research purposes</li>
          <li><strong>Review Information</strong>: Retained for 10 years after publication decision</li>
          <li><strong>Communication Records</strong>: Retained for 7 years for audit and compliance purposes</li>
        </ul>
      </section>

      <section>
        <h2>Children's Privacy</h2>
        <p>
          Our services are not directed to children under 16 years of age, and we do not knowingly collect 
          personal information from children under 16. If we learn that we have collected information from 
          a child under 16, we will delete such information promptly.
        </p>
      </section>

      <section>
        <h2>Third-Party Services</h2>
        <p>
          Our platform may contain links to third-party websites or integrate with third-party services. 
          This privacy policy does not apply to such third-party services. We encourage you to review the 
          privacy policies of any third-party services you use.
        </p>
      </section>

      <section>
        <h2>Policy Updates</h2>
        <p>
          We may update this Privacy Policy from time to time. When we make changes, we will notify you 
          by posting the updated policy on our website and updating the "Last Updated" date. For material 
          changes, we may provide additional notice such as email notification.
        </p>
      </section>

      <section>
        <h2>Contact Information</h2>
        
        <h3>Privacy Officer</h3>
        <p>
          <strong>Email:</strong> <a href="mailto:privacy@jacbs.org">privacy@jacbs.org</a><br/>
          <strong>Address:</strong> JACBS Privacy Office, 1000 Academic Boulevard, Suite 500, Research City, RC 12345, United States
        </p>

        <h3>Data Protection Representative (EU)</h3>
        <p>
          For EU residents, our Data Protection Representative can be contacted at <a href="mailto:dpo.eu@jacbs.org">dpo.eu@jacbs.org</a>.
        </p>

        <h3>Questions and Complaints</h3>
        <p>
          If you have questions about this Privacy Policy or wish to file a complaint about our privacy 
          practices, please contact us using the information above. You also have the right to lodge a 
          complaint with your local data protection authority.
        </p>
      </section>
    </PolicyPage>
  );
}
