import { createPolicyMetadata, PolicyPage } from '@/components/PolicyPage';

export const metadata = createPolicyMetadata(
  'Author Guidelines',
  'JACBS Author Guidelines - Detailed instructions for authors including manuscript preparation and submission'
);

export default function AuthorGuidelinesPage() {
  return (
    <PolicyPage 
      title="Author Guidelines"
      effectiveDate="September 3, 2025"
      lastUpdated="September 3, 2025"
    >
      <section>
        <h2>Introduction</h2>
        
        <p>
          Welcome to the Journal for Advanced Computational and Business Studies (JACBS). These comprehensive 
          author guidelines provide detailed instructions for preparing, formatting, and submitting manuscripts 
          to our journal. Following these guidelines will ensure efficient processing of your submission and 
          maintain the high standards of scholarly communication that JACBS represents.
        </p>

        <h3>Quick Reference</h3>
        <ul>
          <li><strong>Submission System</strong>: Online submission through our manuscript portal</li>
          <li><strong>Format</strong>: Microsoft Word (.docx) or LaTeX with PDF</li>
          <li><strong>Length</strong>: 8,000-12,000 words for research articles</li>
          <li><strong>Review Process</strong>: Double-blind peer review</li>
          <li><strong>Timeline</strong>: 6-8 weeks for initial decision</li>
        </ul>
      </section>

      <section>
        <h2>Before You Submit</h2>

        <h3>Manuscript Readiness Checklist</h3>
        <ul>
          <li>✓ Original research not published or under review elsewhere</li>
          <li>✓ All co-authors have approved the submission</li>
          <li>✓ Ethical approvals obtained (if applicable)</li>
          <li>✓ Conflicts of interest declared</li>
          <li>✓ Data and code availability statements included</li>
          <li>✓ Manuscript follows JACBS formatting guidelines</li>
          <li>✓ All figures and tables are properly formatted</li>
          <li>✓ References are complete and properly formatted</li>
        </ul>

        <h3>Authorship Criteria</h3>
        <p>All authors must meet the following criteria (based on ICMJE guidelines):</p>
        <ul>
          <li>Substantial contributions to conception or design, or acquisition, analysis, or interpretation of data</li>
          <li>Drafting the article or revising it critically for important intellectual content</li>
          <li>Final approval of the version to be published</li>
          <li>Agreement to be accountable for all aspects of the work</li>
        </ul>

        <h3>Ethical Considerations</h3>
        <ul>
          <li><strong>Research Ethics</strong>: IRB/Ethics committee approval required for human subjects</li>
          <li><strong>Animal Research</strong>: IACUC approval and welfare standards compliance</li>
          <li><strong>Data Privacy</strong>: Compliance with GDPR, HIPAA, and other relevant regulations</li>
          <li><strong>Informed Consent</strong>: Documentation required for participant involvement</li>
        </ul>
      </section>

      <section>
        <h2>Manuscript Structure</h2>

        <h3>Title Page</h3>
        <h4>Required Elements:</h4>
        <ul>
          <li><strong>Article Title</strong>: Clear, concise, and descriptive (max 150 characters)</li>
          <li><strong>Running Title</strong>: Abbreviated version for headers (max 50 characters)</li>
          <li><strong>Author Names</strong>: Full names in order of contribution</li>
          <li><strong>Affiliations</strong>: Complete institutional affiliations for each author</li>
          <li><strong>ORCID IDs</strong>: Required for all authors</li>
          <li><strong>Corresponding Author</strong>: Email, phone, and postal address</li>
          <li><strong>Word Count</strong>: Excluding abstract, references, and appendices</li>
          <li><strong>Keywords</strong>: 4-6 terms for indexing and searchability</li>
        </ul>

        <h3>Abstract</h3>
        <h4>Structure (200-300 words):</h4>
        <ul>
          <li><strong>Background</strong>: Context and research problem (50-75 words)</li>
          <li><strong>Methods</strong>: Brief description of approach (50-75 words)</li>
          <li><strong>Results</strong>: Key findings and outcomes (75-100 words)</li>
          <li><strong>Conclusions</strong>: Implications and significance (50-75 words)</li>
        </ul>

        <h4>Abstract Guidelines:</h4>
        <ul>
          <li>Self-contained and understandable without reading the full paper</li>
          <li>No citations, abbreviations, or undefined acronyms</li>
          <li>Quantitative results where possible</li>
          <li>Clear statement of practical or theoretical contributions</li>
        </ul>

        <h3>Main Text Structure</h3>
        
        <h4>1. Introduction</h4>
        <ul>
          <li>Clear problem statement and research objectives</li>
          <li>Comprehensive literature review and gap analysis</li>
          <li>Theoretical framework or conceptual model</li>
          <li>Research questions or hypotheses</li>
          <li>Overview of methodology and contributions</li>
        </ul>

        <h4>2. Literature Review (if separate section)</h4>
        <ul>
          <li>Systematic review of relevant literature</li>
          <li>Critical analysis of existing approaches</li>
          <li>Identification of research gaps</li>
          <li>Theoretical foundation for the study</li>
        </ul>

        <h4>3. Methods/Methodology</h4>
        <ul>
          <li>Detailed description of research design</li>
          <li>Data collection procedures and instruments</li>
          <li>Sample size justification and participant selection</li>
          <li>Analytical methods and statistical approaches</li>
          <li>Software tools and version information</li>
          <li>Validity and reliability measures</li>
        </ul>

        <h4>4. Results</h4>
        <ul>
          <li>Logical presentation of findings</li>
          <li>Use of tables and figures to support text</li>
          <li>Statistical significance and effect sizes</li>
          <li>Objective reporting without interpretation</li>
          <li>Clear labeling of all data presentations</li>
        </ul>

        <h4>5. Discussion</h4>
        <ul>
          <li>Interpretation of results in context of literature</li>
          <li>Theoretical and practical implications</li>
          <li>Limitations and potential biases</li>
          <li>Future research directions</li>
          <li>Recommendations for practice or policy</li>
        </ul>

        <h4>6. Conclusion</h4>
        <ul>
          <li>Summary of key findings and contributions</li>
          <li>Answers to research questions</li>
          <li>Broader implications for field</li>
          <li>Final recommendations or call to action</li>
        </ul>
      </section>

      <section>
        <h2>Formatting Requirements</h2>

        <h3>Document Format</h3>
        <ul>
          <li><strong>File Type</strong>: Microsoft Word (.docx) preferred, LaTeX (.tex + PDF) accepted</li>
          <li><strong>Font</strong>: Times New Roman, 12-point</li>
          <li><strong>Spacing</strong>: Double-spaced throughout including references</li>
          <li><strong>Margins</strong>: 1-inch (2.54 cm) on all sides</li>
          <li><strong>Page Numbers</strong>: Bottom center, continuous numbering</li>
          <li><strong>Line Numbers</strong>: Required for review process</li>
        </ul>

        <h3>Headings and Subheadings</h3>
        <ul>
          <li><strong>Level 1</strong>: Bold, sentence case (e.g., "Results")</li>
          <li><strong>Level 2</strong>: Bold italic, sentence case (e.g., "Data collection")</li>
          <li><strong>Level 3</strong>: Italic, sentence case (e.g., "Survey instruments")</li>
          <li><strong>Level 4</strong>: Italic, sentence case, indented (e.g., "Questionnaire design")</li>
        </ul>

        <h3>Text Formatting</h3>
        <ul>
          <li><strong>Emphasis</strong>: Use italics, not bold or underlining</li>
          <li><strong>Quotations</strong>: Use quotation marks for short quotes, block format for >40 words</li>
          <li><strong>Numbers</strong>: Spell out numbers below 10, use numerals for 10 and above</li>
          <li><strong>Abbreviations</strong>: Define on first use, then use consistently</li>
          <li><strong>Greek Letters</strong>: Use Symbol font or proper Unicode characters</li>
        </ul>
      </section>

      <section>
        <h2>Tables and Figures</h2>

        <h3>Table Guidelines</h3>
        <h4>Format Requirements:</h4>
        <ul>
          <li>Editable format (Word table or Excel)</li>
          <li>Simple horizontal lines only (no vertical lines or shading)</li>
          <li>Clear, descriptive column headers</li>
          <li>Consistent decimal places for numerical data</li>
          <li>Statistical significance indicators (*p < 0.05, **p < 0.01)</li>
        </ul>

        <h4>Table Numbering and Titles:</h4>
        <ul>
          <li>Sequential numbering (Table 1, Table 2, etc.)</li>
          <li>Descriptive title above the table</li>
          <li>Title should be self-explanatory</li>
          <li>Abbreviations defined in table notes</li>
        </ul>

        <h3>Figure Guidelines</h3>
        <h4>Technical Requirements:</h4>
        <ul>
          <li><strong>Resolution</strong>: Minimum 300 DPI for bitmap images</li>
          <li><strong>Format</strong>: TIFF, PNG, or high-quality JPEG</li>
          <li><strong>Size</strong>: Maximum 8.5 x 11 inches</li>
          <li><strong>Vector Graphics</strong>: EPS or PDF for line drawings</li>
          <li><strong>Color</strong>: Color figures welcome (additional fees may apply for print)</li>
        </ul>

        <h4>Figure Design:</h4>
        <ul>
          <li>Clear, legible fonts (minimum 10-point size)</li>
          <li>High contrast between elements</li>
          <li>Consistent style across all figures</li>
          <li>Color-blind friendly palettes when possible</li>
          <li>Professional appearance suitable for publication</li>
        </ul>

        <h4>Figure Captions:</h4>
        <ul>
          <li>Placed below the figure</li>
          <li>Begin with "Figure X:" where X is the number</li>
          <li>Complete description enabling understanding without main text</li>
          <li>Definition of symbols, abbreviations, and statistical significance</li>
        </ul>

        <h3>Supplementary Materials</h3>
        <ul>
          <li><strong>Raw Data</strong>: CSV, Excel, or other standard formats</li>
          <li><strong>Source Code</strong>: Well-documented code with README files</li>
          <li><strong>Additional Figures</strong>: Supporting visualizations not in main text</li>
          <li><strong>Video Files</strong>: MP4 format, maximum 100MB per file</li>
          <li><strong>Audio Files</strong>: MP3 or WAV format for presentations</li>
        </ul>
      </section>

      <section>
        <h2>Citations and References</h2>

        <h3>Citation Style</h3>
        <p>JACBS uses a modified APA citation style:</p>

        <h4>In-Text Citations:</h4>
        <ul>
          <li><strong>Single Author</strong>: (Smith, 2023) or Smith (2023)</li>
          <li><strong>Two Authors</strong>: (Smith & Jones, 2023) or Smith and Jones (2023)</li>
          <li><strong>Three or More</strong>: (Smith et al., 2023) or Smith et al. (2023)</li>
          <li><strong>Multiple Citations</strong>: (Jones, 2022; Smith, 2023) in chronological order</li>
          <li><strong>Direct Quotes</strong>: (Smith, 2023, p. 15) with page number</li>
        </ul>

        <h4>Special Cases:</h4>
        <ul>
          <li><strong>Corporate Authors</strong>: (International Business Machines [IBM], 2023)</li>
          <li><strong>No Author</strong>: ("Title of Work," 2023)</li>
          <li><strong>Same Author, Same Year</strong>: (Smith, 2023a, 2023b)</li>
          <li><strong>Secondary Sources</strong>: (Jones, 2020, as cited in Smith, 2023)</li>
        </ul>

        <h3>Reference List Format</h3>
        
        <h4>Journal Articles:</h4>
        <p>Author, A. A., Author, B. B., & Author, C. C. (Year). Title of article. <em>Journal Name</em>, <em>Volume</em>(Issue), pages. https://doi.org/xx.xxxx/xxxxxx</p>

        <h4>Books:</h4>
        <p>Author, A. A. (Year). <em>Title of book: Subtitle if any</em> (Edition if not first). Publisher Name.</p>

        <h4>Book Chapters:</h4>
        <p>Author, A. A. (Year). Title of chapter. In B. B. Editor & C. C. Editor (Eds.), <em>Title of book</em> (pp. pages). Publisher Name.</p>

        <h4>Conference Proceedings:</h4>
        <p>Author, A. A. (Year). Title of paper. In <em>Proceedings of Conference Name</em> (pp. pages). Publisher Name. https://doi.org/xx.xxxx/xxxxxx</p>

        <h4>Websites and Online Resources:</h4>
        <p>Author, A. A. (Year, Month Day). Title of webpage. <em>Website Name</em>. Retrieved Month Day, Year, from URL</p>

        <h4>Software and Datasets:</h4>
        <p>Developer, A. A. (Year). <em>Software name</em> (Version X.X) [Computer software]. Publisher Name. URL</p>

        <h3>Reference Management</h3>
        <ul>
          <li><strong>Minimum Count</strong>: 30 references for research articles, 50+ for reviews</li>
          <li><strong>Currency</strong>: At least 50% from the last 5 years</li>
          <li><strong>Quality</strong>: Prioritize peer-reviewed sources</li>
          <li><strong>DOI Inclusion</strong>: Always include DOIs when available</li>
          <li><strong>Verification</strong>: Verify all citations are accurate and accessible</li>
        </ul>
      </section>

      <section>
        <h2>Submission Process</h2>

        <h3>Account Setup</h3>
        <ul>
          <li>Create account at [submission portal URL]</li>
          <li>Complete profile with ORCID integration</li>
          <li>Add institutional affiliation</li>
          <li>Set notification preferences</li>
        </ul>

        <h3>Required Documents</h3>
        <ul>
          <li><strong>Main Manuscript</strong>: Complete manuscript without author information</li>
          <li><strong>Title Page</strong>: Separate file with all author details</li>
          <li><strong>Cover Letter</strong>: Letter to the editor explaining significance</li>
          <li><strong>Ethics Documentation</strong>: IRB approval, consent forms, etc.</li>
          <li><strong>COI Statement</strong>: Conflict of interest disclosure</li>
          <li><strong>Data Availability Statement</strong>: Information about data access</li>
          <li><strong>Supplementary Files</strong>: Additional materials as needed</li>
        </ul>

        <h3>Cover Letter Content</h3>
        <ul>
          <li>Brief summary of research significance and contribution</li>
          <li>Statement confirming originality and no prior publication</li>
          <li>Explanation of how work fits journal scope</li>
          <li>Suggested reviewers (optional, 3-5 names with contact info)</li>
          <li>Any special considerations or requests</li>
        </ul>

        <h3>Submission Checklist</h3>
        <ul>
          <li>□ Manuscript follows formatting guidelines</li>
          <li>□ All required files uploaded</li>
          <li>□ Author information completed</li>
          <li>□ Keywords and abstract provided</li>
          <li>□ Ethics and COI statements submitted</li>
          <li>□ Cover letter included</li>
          <li>□ Figures and tables properly formatted</li>
          <li>□ References complete and accurate</li>
          <li>□ Supplementary materials uploaded</li>
          <li>□ Final submission review completed</li>
        </ul>
      </section>

      <section>
        <h2>After Submission</h2>

        <h3>Initial Processing</h3>
        <ul>
          <li><strong>Acknowledgment</strong>: Automatic confirmation within 24 hours</li>
          <li><strong>Technical Check</strong>: Format and completeness review (2-3 days)</li>
          <li><strong>Editorial Screening</strong>: Scope and quality assessment (1-2 weeks)</li>
          <li><strong>Reviewer Assignment</strong>: Expert reviewer identification (1 week)</li>
        </ul>

        <h3>Peer Review Process</h3>
        <ul>
          <li><strong>Double-Blind Review</strong>: Anonymous to both authors and reviewers</li>
          <li><strong>Multiple Reviewers</strong>: Typically 2-3 expert reviewers</li>
          <li><strong>Review Timeline</strong>: 4-6 weeks for reviewer reports</li>
          <li><strong>Editorial Decision</strong>: Based on reviewer recommendations</li>
        </ul>

        <h3>Possible Outcomes</h3>
        <ul>
          <li><strong>Accept</strong>: Minor revisions or publication ready</li>
          <li><strong>Minor Revisions</strong>: Small changes requested (2-4 week deadline)</li>
          <li><strong>Major Revisions</strong>: Substantial changes needed (6-8 week deadline)</li>
          <li><strong>Reject and Resubmit</strong>: Fundamental issues requiring major work</li>
          <li><strong>Reject</strong>: Not suitable for publication in current form</li>
        </ul>

        <h3>Revision Process</h3>
        <ul>
          <li><strong>Detailed Response</strong>: Point-by-point response to reviewer comments</li>
          <li><strong>Track Changes</strong>: Highlight all modifications in manuscript</li>
          <li><strong>Response Letter</strong>: Explain how each comment was addressed</li>
          <li><strong>Additional Analyses</strong>: Include new data or analyses if requested</li>
          <li><strong>Timely Submission</strong>: Meet revision deadlines to maintain priority</li>
        </ul>
      </section>

      <section>
        <h2>Publication and Post-Publication</h2>

        <h3>Acceptance and Production</h3>
        <ul>
          <li><strong>Copyright Agreement</strong>: Sign copyright transfer or licensing agreement</li>
          <li><strong>Open Access Decision</strong>: Choose publication model and pay fees if applicable</li>
          <li><strong>Copyediting</strong>: Professional editing for clarity and consistency</li>
          <li><strong>Proof Review</strong>: Author review of formatted proofs</li>
          <li><strong>Final Publication</strong>: Online publication with DOI assignment</li>
        </ul>

        <h3>Post-Publication Services</h3>
        <ul>
          <li><strong>Citation Tracking</strong>: Monitor citations and impact metrics</li>
          <li><strong>Social Media Promotion</strong>: Share through journal social channels</li>
          <li><strong>Repository Deposits</strong>: Deposit in institutional and subject repositories</li>
          <li><strong>Press Release Support</strong>: Assistance with media coverage</li>
          <li><strong>Conference Presentations</strong>: Support for presenting published work</li>
        </ul>

        <h3>Corrections and Updates</h3>
        <ul>
          <li><strong>Minor Corrections</strong>: Typographical or formatting errors</li>
          <li><strong>Erratum</strong>: Author-initiated corrections to content</li>
          <li><strong>Corrigendum</strong>: Publisher-initiated corrections</li>
          <li><strong>Retraction</strong>: Withdrawal for serious errors or misconduct</li>
        </ul>
      </section>

      <section>
        <h2>Support and Resources</h2>

        <h3>Author Support Services</h3>
        <ul>
          <li><strong>Pre-submission Consultation</strong>: Scope and readiness assessment</li>
          <li><strong>Language Editing</strong>: Professional editing services for non-native speakers</li>
          <li><strong>Statistical Review</strong>: Statistical methodology consultation</li>
          <li><strong>Figure Preparation</strong>: Professional figure creation and formatting</li>
          <li><strong>Grant Writing Support</strong>: Assistance with publication-related grant applications</li>
        </ul>

        <h3>Training and Development</h3>
        <ul>
          <li><strong>Author Workshops</strong>: Regular workshops on publishing best practices</li>
          <li><strong>Webinar Series</strong>: Online sessions on specific topics</li>
          <li><strong>Mentorship Program</strong>: Pairing new authors with experienced researchers</li>
          <li><strong>Early Career Support</strong>: Special programs for graduate students and postdocs</li>
        </ul>

        <h3>Technical Resources</h3>
        <ul>
          <li><strong>Templates</strong>: Word and LaTeX templates for manuscript preparation</li>
          <li><strong>Style Guides</strong>: Detailed formatting and citation guides</li>
          <li><strong>Video Tutorials</strong>: Step-by-step submission process guides</li>
          <li><strong>FAQ Database</strong>: Answers to common author questions</li>
          <li><strong>Help Desk</strong>: Technical support for submission system</li>
        </ul>
      </section>

      <section>
        <h2>Contact Information</h2>
        
        <h3>Editorial Office</h3>
        <p>
          <strong>Email:</strong> <a href="mailto:editorial@jacbs.org">editorial@jacbs.org</a><br/>
          <strong>Phone:</strong> +1 (555) 123-4567<br/>
          <strong>Address:</strong> JACBS Editorial Office, 1000 Academic Boulevard, Suite 500, Research City, RC 12345, United States
        </p>

        <h3>Author Services</h3>
        <p>
          <strong>Email:</strong> <a href="mailto:author.services@jacbs.org">author.services@jacbs.org</a><br/>
          <strong>Phone:</strong> +1 (555) 123-4571
        </p>

        <h3>Technical Support</h3>
        <p>
          <strong>Email:</strong> <a href="mailto:tech.support@jacbs.org">tech.support@jacbs.org</a><br/>
          <strong>Phone:</strong> +1 (555) 123-4574<br/>
          <strong>Hours:</strong> Monday-Friday, 9:00 AM - 6:00 PM EST
        </p>

        <h3>Language Support</h3>
        <p>
          <strong>Email:</strong> <a href="mailto:language.support@jacbs.org">language.support@jacbs.org</a>
        </p>
      </section>
    </PolicyPage>
  );
}
