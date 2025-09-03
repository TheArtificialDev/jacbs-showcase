import { createPolicyMetadata, PolicyPage } from '@/components/PolicyPage';

export const metadata = createPolicyMetadata(
  'Contact & Support',
  'JACBS Contact & Support - Contact information, support channels, and response time commitments'
);

export default function ContactSupportPage() {
  return (
    <PolicyPage 
      title="Contact & Support"
      effectiveDate="September 3, 2025"
      lastUpdated="September 3, 2025"
    >
      <section>
        <h2>Editorial Office</h2>
        
        <h3>Primary Contact</h3>
        <div className="bg-neutral-50 p-6 rounded-lg">
          <p>
            <strong>Journal for Advanced Computational and Business Studies (JACBS)</strong><br/>
            Editorial Department<br/>
            International Research Center<br/>
            Global Academic Publishers
          </p>
          <p className="mt-4">
            <strong>Mailing Address:</strong><br/>
            JACBS Editorial Office<br/>
            1000 Academic Boulevard, Suite 500<br/>
            Research City, RC 12345<br/>
            United States
          </p>
          <p className="mt-4">
            <strong>Email:</strong> <a href="mailto:editorial@jacbs.org">editorial@jacbs.org</a><br/>
            <strong>Phone:</strong> +1 (555) 123-4567<br/>
            <strong>Fax:</strong> +1 (555) 123-4568<br/>
            <strong>Website:</strong> <a href="https://jacbs.org">https://jacbs.org</a>
          </p>
        </div>

        <h3>Office Hours</h3>
        <ul>
          <li><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM (EST)</li>
          <li><strong>Saturday:</strong> 10:00 AM - 2:00 PM (EST)</li>
          <li><strong>Sunday:</strong> Closed (Emergency inquiries only)</li>
        </ul>

        <h3>Editor-in-Chief Office</h3>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:editor.chief@jacbs.org">editor.chief@jacbs.org</a></li>
          <li><strong>Administrative Assistant:</strong> <a href="mailto:admin.editor@jacbs.org">admin.editor@jacbs.org</a></li>
          <li><strong>Scheduling:</strong> <a href="mailto:calendar@jacbs.org">calendar@jacbs.org</a></li>
        </ul>
      </section>

      <section>
        <h2>Submission Support</h2>

        <h3>Manuscript Submission Assistance</h3>
        <div className="bg-blue-50 p-6 rounded-lg">
          <p>
            <strong>Dedicated Submission Support Team</strong><br/>
            <strong>Email:</strong> <a href="mailto:submissions@jacbs.org">submissions@jacbs.org</a><br/>
            <strong>Phone:</strong> +1 (555) 123-4570<br/>
            <strong>Live Chat:</strong> Available on journal website
          </p>
        </div>

        <h3>Pre-Submission Inquiries</h3>
        <ul>
          <li><strong>General Inquiries:</strong> <a href="mailto:presubmission@jacbs.org">presubmission@jacbs.org</a></li>
          <li><strong>Scope Verification:</strong> <a href="mailto:scope@jacbs.org">scope@jacbs.org</a></li>
          <li><strong>Format Assistance:</strong> <a href="mailto:formatting@jacbs.org">formatting@jacbs.org</a></li>
        </ul>

        <h3>Author Services</h3>
        <ul>
          <li><strong>General Support:</strong> <a href="mailto:author.services@jacbs.org">author.services@jacbs.org</a></li>
          <li><strong>Phone:</strong> +1 (555) 123-4571</li>
          <li><strong>WhatsApp:</strong> +1 (555) 123-4572</li>
        </ul>

        <h4>Services Provided:</h4>
        <ul>
          <li>Manuscript preparation assistance</li>
          <li>Format compliance verification</li>
          <li>Reference formatting support</li>
          <li>Figure and table optimization</li>
          <li>Supplementary material guidance</li>
        </ul>

        <h3>Language Support Services</h3>
        <ul>
          <li><strong>English Language Editing:</strong> <a href="mailto:language.support@jacbs.org">language.support@jacbs.org</a></li>
          <li><strong>Partner Services:</strong> <a href="mailto:editing.partners@jacbs.org">editing.partners@jacbs.org</a></li>
          <li><strong>Quality Assurance:</strong> <a href="mailto:qa.language@jacbs.org">qa.language@jacbs.org</a></li>
        </ul>
      </section>

      <section>
        <h2>Peer Review Support</h2>

        <h3>Review Process Inquiries</h3>
        <ul>
          <li><strong>Reviewer Coordination:</strong> <a href="mailto:reviewers@jacbs.org">reviewers@jacbs.org</a></li>
          <li><strong>Phone:</strong> +1 (555) 123-4573</li>
          <li><strong>Reviewer Portal:</strong> <a href="mailto:reviewer.portal@jacbs.org">reviewer.portal@jacbs.org</a></li>
        </ul>

        <h3>Review Status Updates</h3>
        <ul>
          <li><strong>Status Inquiries:</strong> <a href="mailto:review.status@jacbs.org">review.status@jacbs.org</a></li>
          <li><strong>Automated System:</strong> <a href="mailto:status@jacbs.org">status@jacbs.org</a></li>
          <li><strong>Emergency Escalation:</strong> <a href="mailto:urgent.review@jacbs.org">urgent.review@jacbs.org</a></li>
        </ul>

        <h3>Editorial Board Communications</h3>
        <ul>
          <li><strong>Associate Editors:</strong> <a href="mailto:associate.editors@jacbs.org">associate.editors@jacbs.org</a></li>
          <li><strong>Computational Sciences:</strong> <a href="mailto:ae.computational@jacbs.org">ae.computational@jacbs.org</a></li>
          <li><strong>Business Applications:</strong> <a href="mailto:ae.business@jacbs.org">ae.business@jacbs.org</a></li>
          <li><strong>Special Issues:</strong> <a href="mailto:special.issues@jacbs.org">special.issues@jacbs.org</a></li>
        </ul>
      </section>

      <section>
        <h2>Technical Support</h2>

        <h3>Platform & Website Support</h3>
        <div className="bg-green-50 p-6 rounded-lg">
          <p>
            <strong>Technical Help Desk</strong><br/>
            <strong>Email:</strong> <a href="mailto:tech.support@jacbs.org">tech.support@jacbs.org</a><br/>
            <strong>Phone:</strong> +1 (555) 123-4574<br/>
            <strong>24/7 Emergency:</strong> <a href="mailto:emergency.tech@jacbs.org">emergency.tech@jacbs.org</a>
          </p>
        </div>

        <h3>Common Issues Supported</h3>
        <ul>
          <li>Account access problems</li>
          <li>Submission system difficulties</li>
          <li>Download and access issues</li>
          <li>Mobile platform support</li>
          <li>Browser compatibility</li>
        </ul>

        <h3>Digital Infrastructure</h3>
        <ul>
          <li><strong>System Administration:</strong> <a href="mailto:sysadmin@jacbs.org">sysadmin@jacbs.org</a></li>
          <li><strong>Security Issues:</strong> <a href="mailto:security@jacbs.org">security@jacbs.org</a></li>
          <li><strong>Data Protection:</strong> <a href="mailto:privacy.tech@jacbs.org">privacy.tech@jacbs.org</a></li>
        </ul>
      </section>

      <section>
        <h2>Business & Partnership Inquiries</h2>

        <h3>Institutional Partnerships</h3>
        <ul>
          <li><strong>Partnership Development:</strong> <a href="mailto:partnerships@jacbs.org">partnerships@jacbs.org</a></li>
          <li><strong>Phone:</strong> +1 (555) 123-4575</li>
          <li><strong>Director:</strong> <a href="mailto:director.partnerships@jacbs.org">director.partnerships@jacbs.org</a></li>
        </ul>

        <h4>Types of Partnerships:</h4>
        <ul>
          <li>University collaborations</li>
          <li>Research institution agreements</li>
          <li>Corporate research partnerships</li>
          <li>International academic alliances</li>
          <li>Conference and event partnerships</li>
        </ul>

        <h3>Commercial Services</h3>
        <ul>
          <li><strong>Business Development:</strong> <a href="mailto:business@jacbs.org">business@jacbs.org</a></li>
          <li><strong>Sales Inquiries:</strong> <a href="mailto:sales@jacbs.org">sales@jacbs.org</a></li>
          <li><strong>Enterprise Solutions:</strong> <a href="mailto:enterprise@jacbs.org">enterprise@jacbs.org</a></li>
        </ul>
      </section>

      <section>
        <h2>Regional Offices</h2>

        <h3>European Office</h3>
        <div className="bg-neutral-50 p-4 rounded-lg mb-4">
          <p>
            <strong>Location:</strong> London, United Kingdom<br/>
            <strong>Email:</strong> <a href="mailto:europe@jacbs.org">europe@jacbs.org</a><br/>
            <strong>Phone:</strong> +44 20 7123 4567<br/>
            <strong>Regional Director:</strong> <a href="mailto:director.europe@jacbs.org">director.europe@jacbs.org</a>
          </p>
        </div>

        <h3>Asia-Pacific Office</h3>
        <div className="bg-neutral-50 p-4 rounded-lg mb-4">
          <p>
            <strong>Location:</strong> Singapore<br/>
            <strong>Email:</strong> <a href="mailto:asiapacific@jacbs.org">asiapacific@jacbs.org</a><br/>
            <strong>Phone:</strong> +65 6123 4567<br/>
            <strong>Regional Director:</strong> <a href="mailto:director.apac@jacbs.org">director.apac@jacbs.org</a>
          </p>
        </div>

        <h3>Middle East & Africa Office</h3>
        <div className="bg-neutral-50 p-4 rounded-lg mb-4">
          <p>
            <strong>Location:</strong> Dubai, UAE<br/>
            <strong>Email:</strong> <a href="mailto:mea@jacbs.org">mea@jacbs.org</a><br/>
            <strong>Phone:</strong> +971 4 123 4567<br/>
            <strong>Regional Director:</strong> <a href="mailto:director.mea@jacbs.org">director.mea@jacbs.org</a>
          </p>
        </div>
      </section>

      <section>
        <h2>Emergency Contacts</h2>

        <h3>Critical Issues</h3>
        <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
          <p>
            <strong>24/7 Emergency Line</strong><br/>
            <strong>Phone:</strong> +1 (555) 123-4580<br/>
            <strong>Email:</strong> <a href="mailto:emergency@jacbs.org">emergency@jacbs.org</a><br/>
            <strong>Text/SMS:</strong> +1 (555) 123-4581
          </p>
        </div>

        <h3>Emergency Situations Include:</h3>
        <ul>
          <li>Server outages</li>
          <li>Security breaches</li>
          <li>Ethical misconduct reports</li>
          <li>Legal issues</li>
          <li>Natural disaster impacts</li>
        </ul>

        <h3>Crisis Management</h3>
        <ul>
          <li><strong>Crisis Response Team:</strong> <a href="mailto:crisis@jacbs.org">crisis@jacbs.org</a></li>
          <li><strong>Legal Emergency:</strong> <a href="mailto:legal.emergency@jacbs.org">legal.emergency@jacbs.org</a></li>
          <li><strong>Security Emergency:</strong> <a href="mailto:security.emergency@jacbs.org">security.emergency@jacbs.org</a></li>
        </ul>
      </section>

      <section>
        <h2>Response Time Commitments</h2>

        <h3>Standard Response Times</h3>
        
        <h4>Email Communications</h4>
        <ul>
          <li><strong>General Inquiries:</strong> 24-48 hours</li>
          <li><strong>Submission Support:</strong> 24 hours</li>
          <li><strong>Technical Issues:</strong> 12-24 hours</li>
          <li><strong>Editorial Decisions:</strong> As per review timeline</li>
          <li><strong>Emergency Issues:</strong> 2-4 hours</li>
        </ul>

        <h4>Phone Support</h4>
        <ul>
          <li><strong>Business Hours:</strong> Immediate to 15 minutes</li>
          <li><strong>After Hours:</strong> Emergency line only</li>
          <li><strong>International:</strong> Callback within 4 hours</li>
        </ul>

        <h3>Priority Levels</h3>
        
        <h4>High Priority (4-hour response)</h4>
        <ul>
          <li>System outages</li>
          <li>Security issues</li>
          <li>Ethical concerns</li>
          <li>Legal matters</li>
          <li>Emergency submissions</li>
        </ul>

        <h4>Medium Priority (24-hour response)</h4>
        <ul>
          <li>General editorial inquiries</li>
          <li>Technical support</li>
          <li>Author services</li>
          <li>Review process questions</li>
        </ul>

        <h4>Standard Priority (48-hour response)</h4>
        <ul>
          <li>Information requests</li>
          <li>Partnership inquiries</li>
          <li>General correspondence</li>
          <li>Non-urgent matters</li>
        </ul>
      </section>

      <section>
        <h2>Special Support Services</h2>

        <h3>Accessibility Support</h3>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:accessibility@jacbs.org">accessibility@jacbs.org</a></li>
          <li><strong>Phone:</strong> +1 (555) 123-4582</li>
          <li><strong>TTY:</strong> +1 (555) 123-4583</li>
        </ul>

        <h4>Services Provided:</h4>
        <ul>
          <li>Screen reader compatibility</li>
          <li>Large print materials</li>
          <li>Audio descriptions</li>
          <li>Sign language interpretation</li>
          <li>Alternative format conversions</li>
        </ul>

        <h3>Multi-language Support</h3>
        <p>Available in the following languages:</p>
        <ul>
          <li>English (primary)</li>
          <li>Spanish, French, German</li>
          <li>Mandarin, Japanese, Korean</li>
          <li>Arabic, Portuguese, Russian</li>
        </ul>

        <h3>Time Zone Considerations</h3>
        <ul>
          <li>Global coverage through regional offices</li>
          <li>24/7 emergency support</li>
          <li>Scheduled international calls</li>
          <li>Regional business hours respected</li>
        </ul>
      </section>

      <section>
        <h2>Feedback and Quality Assurance</h2>

        <h3>Customer Feedback</h3>
        <ul>
          <li><strong>Feedback Email:</strong> <a href="mailto:feedback@jacbs.org">feedback@jacbs.org</a></li>
          <li><strong>Suggestions:</strong> <a href="mailto:suggestions@jacbs.org">suggestions@jacbs.org</a></li>
          <li><strong>Survey Link:</strong> Available after each interaction</li>
        </ul>

        <h3>Complaint Resolution</h3>
        <ul>
          <li><strong>Complaints:</strong> <a href="mailto:complaints@jacbs.org">complaints@jacbs.org</a></li>
          <li><strong>Formal Process:</strong> <a href="mailto:complaints.formal@jacbs.org">complaints.formal@jacbs.org</a></li>
          <li><strong>Ombudsman:</strong> <a href="mailto:ombudsman@jacbs.org">ombudsman@jacbs.org</a></li>
        </ul>

        <h3>Service Standards</h3>
        <p>Our quality metrics:</p>
        <ul>
          <li><strong>Response time compliance:</strong> &gt;95%</li>
          <li><strong>Resolution rate:</strong> &gt;90%</li>
          <li><strong>Customer satisfaction:</strong> &gt;4.5/5.0</li>
          <li><strong>First-contact resolution:</strong> &gt;75%</li>
        </ul>
      </section>

      <section>
        <h2>Quick Contact Reference</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-neutral-300">
            <thead>
              <tr className="bg-neutral-100">
                <th className="border border-neutral-300 px-4 py-2 text-left">Department</th>
                <th className="border border-neutral-300 px-4 py-2 text-left">Email</th>
                <th className="border border-neutral-300 px-4 py-2 text-left">Phone</th>
                <th className="border border-neutral-300 px-4 py-2 text-left">Priority</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-neutral-300 px-4 py-2">Editorial Office</td>
                <td className="border border-neutral-300 px-4 py-2">
                  <a href="mailto:editorial@jacbs.org">editorial@jacbs.org</a>
                </td>
                <td className="border border-neutral-300 px-4 py-2">+1 (555) 123-4567</td>
                <td className="border border-neutral-300 px-4 py-2">High</td>
              </tr>
              <tr>
                <td className="border border-neutral-300 px-4 py-2">Submissions</td>
                <td className="border border-neutral-300 px-4 py-2">
                  <a href="mailto:submissions@jacbs.org">submissions@jacbs.org</a>
                </td>
                <td className="border border-neutral-300 px-4 py-2">+1 (555) 123-4570</td>
                <td className="border border-neutral-300 px-4 py-2">High</td>
              </tr>
              <tr>
                <td className="border border-neutral-300 px-4 py-2">Technical Support</td>
                <td className="border border-neutral-300 px-4 py-2">
                  <a href="mailto:tech.support@jacbs.org">tech.support@jacbs.org</a>
                </td>
                <td className="border border-neutral-300 px-4 py-2">+1 (555) 123-4574</td>
                <td className="border border-neutral-300 px-4 py-2">High</td>
              </tr>
              <tr>
                <td className="border border-neutral-300 px-4 py-2">Author Services</td>
                <td className="border border-neutral-300 px-4 py-2">
                  <a href="mailto:author.services@jacbs.org">author.services@jacbs.org</a>
                </td>
                <td className="border border-neutral-300 px-4 py-2">+1 (555) 123-4571</td>
                <td className="border border-neutral-300 px-4 py-2">Medium</td>
              </tr>
              <tr>
                <td className="border border-neutral-300 px-4 py-2">Emergency</td>
                <td className="border border-neutral-300 px-4 py-2">
                  <a href="mailto:emergency@jacbs.org">emergency@jacbs.org</a>
                </td>
                <td className="border border-neutral-300 px-4 py-2">+1 (555) 123-4580</td>
                <td className="border border-neutral-300 px-4 py-2">Critical</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </PolicyPage>
  );
}
