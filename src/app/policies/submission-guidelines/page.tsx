import { createPolicyMetadata, PolicyPage } from '@/components/PolicyPage';

export const metadata = createPolicyMetadata(
  'Submission Guidelines',
  'JACBS Submission Guidelines - Comprehensive guidelines for manuscript preparation and submission'
);

export default function SubmissionGuidelinesPage() {
  return (
    <PolicyPage 
      title="Submission Guidelines"
      effectiveDate="September 3, 2025"
      lastUpdated="September 3, 2025"
    >
      <section>
        <h2>Overview</h2>
        
        <p>
          The Journal for Advanced Computational and Business Studies (JACBS) welcomes submissions 
          of high-quality research that advances the intersection of computational sciences and 
          business applications. These guidelines provide comprehensive instructions for preparing 
          and submitting manuscripts to JACBS.
        </p>

        <h3>Scope and Focus</h3>
        <p>JACBS publishes research in the following areas:</p>
        <ul>
          <li><strong>Computational Sciences</strong>: AI/ML, data science, blockchain, quantum computing</li>
          <li><strong>Business Applications</strong>: Digital transformation, FinTech, supply chain optimization</li>
          <li><strong>Interdisciplinary Research</strong>: Studies bridging computational methods and business practices</li>
          <li><strong>Industry Applications</strong>: Real-world implementations and case studies</li>
          <li><strong>Emerging Technologies</strong>: Novel computational approaches to business challenges</li>
        </ul>
      </section>

      <section>
        <h2>Types of Submissions</h2>

        <h3>Research Articles</h3>
        <ul>
          <li><strong>Length</strong>: 8,000-12,000 words</li>
          <li><strong>Structure</strong>: Abstract, Introduction, Methods, Results, Discussion, Conclusion</li>
          <li><strong>Focus</strong>: Original research with significant theoretical or practical contributions</li>
          <li><strong>Review Time</strong>: 6-8 weeks for initial decision</li>
        </ul>

        <h3>Review Articles</h3>
        <ul>
          <li><strong>Length</strong>: 10,000-15,000 words</li>
          <li><strong>Structure</strong>: Abstract, Introduction, systematic review, synthesis, future directions</li>
          <li><strong>Focus</strong>: Comprehensive surveys of current state-of-the-art</li>
          <li><strong>Requirements</strong>: Systematic methodology, comprehensive coverage</li>
        </ul>

        <h3>Short Communications</h3>
        <ul>
          <li><strong>Length</strong>: 2,000-4,000 words</li>
          <li><strong>Structure</strong>: Abstract, brief introduction, methods, results, discussion</li>
          <li><strong>Focus</strong>: Preliminary findings, novel methods, timely results</li>
          <li><strong>Review Time</strong>: 4-6 weeks for initial decision</li>
        </ul>

        <h3>Case Studies</h3>
        <ul>
          <li><strong>Length</strong>: 6,000-10,000 words</li>
          <li><strong>Structure</strong>: Background, implementation, results, lessons learned</li>
          <li><strong>Focus</strong>: Real-world applications with detailed analysis</li>
          <li><strong>Requirements</strong>: Detailed methodology, quantifiable outcomes</li>
        </ul>

        <h3>Technical Notes</h3>
        <ul>
          <li><strong>Length</strong>: 3,000-6,000 words</li>
          <li><strong>Structure</strong>: Introduction, technical description, validation, conclusion</li>
          <li><strong>Focus</strong>: Tools, techniques, implementations</li>
          <li><strong>Requirements</strong>: Open source code or detailed specifications</li>
        </ul>
      </section>

      <section>
        <h2>Manuscript Preparation</h2>

        <h3>General Format Requirements</h3>
        <ul>
          <li><strong>File Format</strong>: Microsoft Word (.docx) or LaTeX (.tex with PDF)</li>
          <li><strong>Font</strong>: Times New Roman, 12-point</li>
          <li><strong>Spacing</strong>: Double-spaced throughout</li>
          <li><strong>Margins</strong>: 1-inch (2.54 cm) on all sides</li>
          <li><strong>Page Numbers</strong>: Continuous, bottom center</li>
          <li><strong>Line Numbers</strong>: Continuous line numbering required for review</li>
        </ul>

        <h3>Title Page</h3>
        <p>The title page must include:</p>
        <ul>
          <li><strong>Article Title</strong>: Concise and descriptive (maximum 150 characters)</li>
          <li><strong>Running Head</strong>: Abbreviated title (maximum 50 characters)</li>
          <li><strong>Author Information</strong>: Full names, affiliations, ORCID IDs</li>
          <li><strong>Corresponding Author</strong>: Complete contact information</li>
          <li><strong>Word Count</strong>: Excluding references and appendices</li>
          <li><strong>Keywords</strong>: 4-6 keywords for indexing</li>
        </ul>

        <h3>Abstract Requirements</h3>
        <ul>
          <li><strong>Length</strong>: 200-300 words</li>
          <li><strong>Structure</strong>: Background, Methods, Results, Conclusions</li>
          <li><strong>Self-contained</strong>: No citations or abbreviations</li>
          <li><strong>Keywords</strong>: Include 4-6 relevant keywords</li>
        </ul>
      </section>

      <section>
        <h2>Content Guidelines</h2>

        <h3>Introduction</h3>
        <ul>
          <li>Clear statement of research problem and objectives</li>
          <li>Comprehensive literature review</li>
          <li>Research gaps and contributions</li>
          <li>Theoretical framework or conceptual model</li>
        </ul>

        <h3>Methods</h3>
        <ul>
          <li>Detailed methodology description</li>
          <li>Data collection and analysis procedures</li>
          <li>Software tools and versions</li>
          <li>Statistical methods and significance levels</li>
          <li>Ethical approvals and compliance</li>
        </ul>

        <h3>Results</h3>
        <ul>
          <li>Clear presentation of findings</li>
          <li>Appropriate use of tables and figures</li>
          <li>Statistical analysis results</li>
          <li>Objective reporting without interpretation</li>
        </ul>

        <h3>Discussion</h3>
        <ul>
          <li>Interpretation of results</li>
          <li>Comparison with existing literature</li>
          <li>Practical and theoretical implications</li>
          <li>Limitations and future research directions</li>
        </ul>
      </section>

      <section>
        <h2>References and Citations</h2>

        <h3>Citation Style</h3>
        <p>JACBS uses a modified APA style for citations and references:</p>
        <ul>
          <li><strong>In-text Citations</strong>: Author-date format (Smith, 2023)</li>
          <li><strong>Multiple Authors</strong>: (Smith & Jones, 2023) or (Smith et al., 2023)</li>
          <li><strong>Direct Quotes</strong>: Include page numbers (Smith, 2023, p. 15)</li>
          <li><strong>Reference List</strong>: Alphabetical order by first author's surname</li>
        </ul>

        <h3>Reference Formatting</h3>
        
        <h4>Journal Articles</h4>
        <p>Author, A. A. (Year). Title of article. <em>Journal Name</em>, <em>Volume</em>(Issue), pages. DOI</p>

        <h4>Books</h4>
        <p>Author, A. A. (Year). <em>Title of book</em>. Publisher.</p>

        <h4>Conference Papers</h4>
        <p>Author, A. A. (Year). Title of paper. In <em>Proceedings of Conference Name</em> (pp. pages). Publisher.</p>

        <h4>Web Resources</h4>
        <p>Author, A. A. (Year). Title of webpage. <em>Website Name</em>. URL</p>

        <h3>Reference Management</h3>
        <ul>
          <li><strong>Minimum References</strong>: 30 for research articles, 50 for reviews</li>
          <li><strong>Currency</strong>: At least 50% of references from last 5 years</li>
          <li><strong>Quality</strong>: Peer-reviewed sources preferred</li>
          <li><strong>DOI Requirements</strong>: Include DOIs when available</li>
        </ul>
      </section>

      <section>
        <h2>Figures and Tables</h2>

        <h3>Figure Requirements</h3>
        <ul>
          <li><strong>Resolution</strong>: Minimum 300 DPI for print quality</li>
          <li><strong>Format</strong>: TIFF, PNG, or high-quality JPEG</li>
          <li><strong>Size</strong>: Maximum 8.5 x 11 inches</li>
          <li><strong>Color</strong>: Color figures accepted (additional charges may apply)</li>
          <li><strong>Captions</strong>: Descriptive captions below each figure</li>
        </ul>

        <h3>Table Guidelines</h3>
        <ul>
          <li><strong>Format</strong>: Editable format (Word table or Excel)</li>
          <li><strong>Style</strong>: Simple horizontal lines only</li>
          <li><strong>Headers</strong>: Clear column and row headers</li>
          <li><strong>Numbering</strong>: Sequential numbering (Table 1, Table 2, etc.)</li>
          <li><strong>Titles</strong>: Descriptive titles above each table</li>
        </ul>

        <h3>Supplementary Materials</h3>
        <ul>
          <li><strong>Data Files</strong>: Raw data in standard formats (CSV, Excel)</li>
          <li><strong>Code</strong>: Source code with documentation</li>
          <li><strong>Additional Figures</strong>: Supporting visualizations</li>
          <li><strong>Video Files</strong>: Demonstrations or presentations (MP4 format)</li>
        </ul>
      </section>

      <section>
        <h2>Ethical Requirements</h2>

        <h3>Research Ethics</h3>
        <ul>
          <li><strong>IRB Approval</strong>: Required for human subjects research</li>
          <li><strong>Informed Consent</strong>: Documentation of participant consent</li>
          <li><strong>Animal Welfare</strong>: IACUC approval for animal research</li>
          <li><strong>Data Protection</strong>: Compliance with privacy regulations</li>
        </ul>

        <h3>Publication Ethics</h3>
        <ul>
          <li><strong>Originality</strong>: Submit only original, unpublished work</li>
          <li><strong>Authorship</strong>: All authors must meet authorship criteria</li>
          <li><strong>Conflicts of Interest</strong>: Declare all relevant conflicts</li>
          <li><strong>Data Sharing</strong>: Commit to sharing data when appropriate</li>
        </ul>

        <h3>Integrity Standards</h3>
        <ul>
          <li><strong>Plagiarism</strong>: All submissions screened for plagiarism</li>
          <li><strong>Data Fabrication</strong>: Strictly prohibited</li>
          <li><strong>Image Manipulation</strong>: Inappropriate alterations not permitted</li>
          <li><strong>Duplicate Publication</strong>: Prior publication must be disclosed</li>
        </ul>
      </section>

      <section>
        <h2>Submission Process</h2>

        <h3>Online Submission</h3>
        <p>All submissions must be made through our online submission system:</p>
        <ul>
          <li><strong>Account Creation</strong>: Create account with ORCID integration</li>
          <li><strong>Manuscript Upload</strong>: Upload main document and supplementary files</li>
          <li><strong>Metadata Entry</strong>: Complete all required fields</li>
          <li><strong>Author Information</strong>: Add all co-authors with affiliations</li>
          <li><strong>Final Review</strong>: Review all information before submission</li>
        </ul>

        <h3>Required Documents</h3>
        <ul>
          <li><strong>Main Manuscript</strong>: Complete manuscript file</li>
          <li><strong>Title Page</strong>: Separate title page with author information</li>
          <li><strong>Cover Letter</strong>: Letter to the editor</li>
          <li><strong>Ethics Statement</strong>: Research ethics documentation</li>
          <li><strong>Conflict of Interest Statement</strong>: COI disclosure form</li>
          <li><strong>Supplementary Materials</strong>: Additional files as needed</li>
        </ul>

        <h3>Cover Letter Requirements</h3>
        <p>The cover letter should include:</p>
        <ul>
          <li>Brief summary of the research and its significance</li>
          <li>Statement of originality and prior publication status</li>
          <li>Suggested reviewers (optional)</li>
          <li>Explanation of any potential conflicts of interest</li>
          <li>Request for specific editor if applicable</li>
        </ul>
      </section>

      <section>
        <h2>Review Process</h2>

        <h3>Editorial Assessment</h3>
        <ul>
          <li><strong>Initial Screening</strong>: Technical and scope review (1-2 weeks)</li>
          <li><strong>Editorial Decision</strong>: Accept for review, revise, or reject</li>
          <li><strong>Reviewer Assignment</strong>: 2-3 expert reviewers assigned</li>
          <li><strong>Review Timeline</strong>: 4-6 weeks for reviewer reports</li>
        </ul>

        <h3>Peer Review</h3>
        <ul>
          <li><strong>Double-Blind Review</strong>: Authors and reviewers mutually anonymous</li>
          <li><strong>Expert Reviewers</strong>: Subject matter experts from our reviewer database</li>
          <li><strong>Comprehensive Evaluation</strong>: Technical quality, novelty, significance</li>
          <li><strong>Constructive Feedback</strong>: Detailed comments for improvement</li>
        </ul>

        <h3>Editorial Decision</h3>
        <ul>
          <li><strong>Accept</strong>: Minor revisions only</li>
          <li><strong>Minor Revisions</strong>: Address specific reviewer comments</li>
          <li><strong>Major Revisions</strong>: Substantial changes required</li>
          <li><strong>Reject and Resubmit</strong>: Fundamental issues requiring major work</li>
          <li><strong>Reject</strong>: Not suitable for publication</li>
        </ul>
      </section>

      <section>
        <h2>Revision and Resubmission</h2>

        <h3>Revision Guidelines</h3>
        <ul>
          <li><strong>Response Letter</strong>: Point-by-point response to reviewer comments</li>
          <li><strong>Track Changes</strong>: Use track changes to highlight modifications</li>
          <li><strong>Timeline</strong>: Submit revisions within specified timeframe</li>
          <li><strong>Major Changes</strong>: Highlight significant changes in cover letter</li>
        </ul>

        <h3>Resubmission Process</h3>
        <ul>
          <li><strong>Same Manuscript ID</strong>: Use original submission system entry</li>
          <li><strong>Updated Files</strong>: Upload revised manuscript and response letter</li>
          <li><strong>Version Control</strong>: Clear version numbering and dating</li>
          <li><strong>Additional Data</strong>: Include any new data or analyses</li>
        </ul>
      </section>

      <section>
        <h2>Publication Process</h2>

        <h3>Acceptance and Production</h3>
        <ul>
          <li><strong>Acceptance Notification</strong>: Formal acceptance letter</li>
          <li><strong>Copyright Transfer</strong>: Complete copyright and licensing forms</li>
          <li><strong>Copyediting</strong>: Professional copyediting and formatting</li>
          <li><strong>Proof Review</strong>: Author review of page proofs</li>
          <li><strong>Publication</strong>: Online publication and DOI assignment</li>
        </ul>

        <h3>Post-Publication</h3>
        <ul>
          <li><strong>Citation Tracking</strong>: Monitor citations and impact</li>
          <li><strong>Social Media</strong>: Promote through journal social media</li>
          <li><strong>Repository Deposits</strong>: Deposit in relevant repositories</li>
          <li><strong>Corrections</strong>: Process for post-publication corrections</li>
        </ul>
      </section>

      <section>
        <h2>Contact Information</h2>
        
        <h3>Editorial Office</h3>
        <p>
          <strong>Email:</strong> <a href="mailto:submissions@jacbs.org">submissions@jacbs.org</a><br/>
          <strong>Phone:</strong> +1 (555) 123-4570
        </p>

        <h3>Technical Support</h3>
        <p>
          For submission system support:<br/>
          <strong>Email:</strong> <a href="mailto:tech.support@jacbs.org">tech.support@jacbs.org</a>
        </p>

        <h3>Author Services</h3>
        <p>
          For manuscript preparation assistance:<br/>
          <strong>Email:</strong> <a href="mailto:author.services@jacbs.org">author.services@jacbs.org</a>
        </p>
      </section>
    </PolicyPage>
  );
}
