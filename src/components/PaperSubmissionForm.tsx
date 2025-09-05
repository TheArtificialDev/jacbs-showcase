'use client';

import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { createPaperSubmission, uploadManuscript, PaperAuthor } from '@/lib/database';
import { Upload, FileText, Users, BookOpen, Tag, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';

interface SubmissionFormData {
  title: string;
  abstract: string;
  keywords: string;
  authors: Author[];
  category: string;
  paperType: string;
  manuscriptFile: File | null;
  conflicts: string;
  ethicsStatement: string;
  fundingInfo: string;
  acknowledgments: string;
  suggestedReviewers: string;
  coverLetter: string;
}

interface Author {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  affiliation: string;
  orcid: string;
  isCorresponding: boolean;
}

const initialAuthor: Author = {
  id: '1',
  firstName: '',
  lastName: '',
  email: '',
  affiliation: '',
  orcid: '',
  isCorresponding: true,
};

export default function PaperSubmissionForm() {
  const { user } = useAuth();
  const [formData, setFormData] = useState<SubmissionFormData>({
    title: '',
    abstract: '',
    keywords: '',
    authors: [initialAuthor],
    category: '',
    paperType: '',
    manuscriptFile: null,
    conflicts: '',
    ethicsStatement: '',
    fundingInfo: '',
    acknowledgments: '',
    suggestedReviewers: '',
    coverLetter: '',
  });
  
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const categories = [
    'Artificial Intelligence',
    'Machine Learning',
    'Data Science',
    'Computer Vision',
    'Natural Language Processing',
    'Robotics',
    'Human-Computer Interaction',
    'Software Engineering',
    'Cybersecurity',
    'Distributed Systems',
    'Business Analytics',
    'Digital Transformation',
    'E-commerce',
    'Finance Technology',
    'Operations Research',
    'Supply Chain Management',
    'Other'
  ];

  const paperTypes = [
    'Research Article',
    'Review Article',
    'Short Communication',
    'Case Study',
    'Technical Note',
    'Survey Paper',
    'Position Paper'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    setFormData(prev => ({
      ...prev,
      manuscriptFile: files[0]
    }));
  };

  const addAuthor = () => {
    const newAuthor: Author = {
      id: Date.now().toString(),
      firstName: '',
      lastName: '',
      email: '',
      affiliation: '',
      orcid: '',
      isCorresponding: false,
    };
    setFormData(prev => ({
      ...prev,
      authors: [...prev.authors, newAuthor]
    }));
  };

  const removeAuthor = (id: string) => {
    if (formData.authors.length === 1) return;
    setFormData(prev => ({
      ...prev,
      authors: prev.authors.filter(author => author.id !== id)
    }));
  };

  const updateAuthor = (id: string, field: keyof Author, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      authors: prev.authors.map(author =>
        author.id === id ? { ...author, [field]: value } : author
      )
    }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        if (!formData.title.trim() || !formData.abstract.trim() || !formData.keywords.trim()) {
          setError('Please fill in all required fields in Step 1');
          return false;
        }
        break;
      case 2:
        const hasValidAuthor = formData.authors.some(author => 
          author.firstName.trim() && author.lastName.trim() && author.email.trim() && author.affiliation.trim()
        );
        if (!hasValidAuthor) {
          setError('Please add at least one complete author');
          return false;
        }
        break;
      case 3:
        if (!formData.category || !formData.paperType) {
          setError('Please select category and paper type');
          return false;
        }
        break;
      case 4:
        if (!formData.manuscriptFile) {
          setError('Please upload your manuscript file');
          return false;
        }
        break;
    }
    setError('');
    return true;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 5));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;
    if (!user) return;

    setIsSubmitting(true);
    setError('');

    try {
      let manuscriptFileUrl = '';

      // Upload manuscript file if present
      if (formData.manuscriptFile) {
        const { fileName, publicUrl, error: uploadError } = await uploadManuscript(user.id, formData.manuscriptFile);
        
        if (uploadError) {
          setError('Failed to upload manuscript file. Please try again.');
          setIsSubmitting(false);
          return;
        }
        
        if (fileName && publicUrl) {
          manuscriptFileUrl = publicUrl;
        }
      }

      // Prepare authors data
      const authorsData: Omit<PaperAuthor, 'id' | 'paper_id'>[] = formData.authors.map((author, index) => ({
        first_name: author.firstName,
        last_name: author.lastName,
        email: author.email,
        affiliation: author.affiliation,
        orcid: author.orcid,
        is_corresponding: author.isCorresponding,
        author_order: index + 1,
      }));

      // Create paper submission
      const { submission, submissionId, error: submissionError } = await createPaperSubmission(
        {
          title: formData.title,
          abstract: formData.abstract,
          keywords: formData.keywords.split(',').map(k => k.trim()).filter(k => k.length > 0),
          authors: formData.authors.map(author => ({
            first_name: author.firstName,
            last_name: author.lastName,
            email: author.email,
            institution: author.affiliation,
            is_corresponding: author.isCorresponding,
          })),
          corresponding_author: user.id,
          paper_type: formData.paperType as 'research' | 'review' | 'case_study' | 'technical_note' | 'editorial',
          journal_section: formData.category,
          file_url: manuscriptFileUrl,
        },
        authorsData
      );

      if (submissionError) {
        setError('Failed to submit paper. Please try again.');
        console.error('Submission error:', submissionError);
      } else if (submission && submissionId) {
        setCurrentStep(6); // Success step
        // Success message with submission ID is displayed in step 6
      }
    } catch (err) {
      setError('Failed to submit paper. Please try again.');
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <BookOpen className="h-12 w-12 text-teal-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">Manuscript Details</h2>
              <p className="text-gray-300">Enter the basic information about your paper</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Title <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your paper title"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Abstract <span className="text-red-400">*</span>
              </label>
              <textarea
                name="abstract"
                value={formData.abstract}
                onChange={handleInputChange}
                rows={8}
                className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Enter your abstract (max 300 words)"
                required
              />
              <p className="text-sm text-gray-400 mt-1">
                {formData.abstract.split(' ').filter(word => word.trim()).length}/300 words
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Keywords <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="keywords"
                value={formData.keywords}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter keywords separated by commas"
                required
              />
              <p className="text-sm text-gray-400 mt-1">
                Separate multiple keywords with commas (e.g., machine learning, artificial intelligence, deep learning)
              </p>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Users className="h-12 w-12 text-teal-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">Authors Information</h2>
              <p className="text-gray-300">Add all authors who contributed to this work</p>
            </div>

            {formData.authors.map((author, index) => (
              <div key={author.id} className="bg-gray-800/30 p-6 rounded-lg border border-gray-600">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-white">Author {index + 1}</h3>
                  {formData.authors.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeAuthor(author.id)}
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      Remove
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={author.firstName}
                      onChange={(e) => updateAuthor(author.id, 'firstName', e.target.value)}
                      className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={author.lastName}
                      onChange={(e) => updateAuthor(author.id, 'lastName', e.target.value)}
                      className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={author.email}
                      onChange={(e) => updateAuthor(author.id, 'email', e.target.value)}
                      className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      ORCID iD
                    </label>
                    <input
                      type="text"
                      value={author.orcid}
                      onChange={(e) => updateAuthor(author.id, 'orcid', e.target.value)}
                      className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="0000-0000-0000-0000"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Affiliation <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={author.affiliation}
                    onChange={(e) => updateAuthor(author.id, 'affiliation', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="University/Institution name"
                    required
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={`corresponding-${author.id}`}
                    checked={author.isCorresponding}
                    onChange={(e) => updateAuthor(author.id, 'isCorresponding', e.target.checked)}
                    className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500"
                  />
                  <label htmlFor={`corresponding-${author.id}`} className="ml-2 text-sm text-gray-300">
                    Corresponding author
                  </label>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={addAuthor}
              className="w-full py-3 px-4 bg-teal-600/20 text-teal-400 border border-teal-600/30 rounded-lg hover:bg-teal-600/30 transition-colors"
            >
              + Add Another Author
            </button>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Tag className="h-12 w-12 text-teal-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">Classification</h2>
              <p className="text-gray-300">Categorize your research</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Research Category <span className="text-red-400">*</span>
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                required
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Paper Type <span className="text-red-400">*</span>
              </label>
              <select
                name="paperType"
                value={formData.paperType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                required
              >
                <option value="">Select paper type</option>
                {paperTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Upload className="h-12 w-12 text-teal-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">File Upload</h2>
              <p className="text-gray-300">Upload your manuscript and supplementary materials</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Manuscript File <span className="text-red-400">*</span>
              </label>
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-teal-500 transition-colors">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  id="manuscript-upload"
                  required
                />
                <label htmlFor="manuscript-upload" className="cursor-pointer">
                  <FileText className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-300 mb-1">
                    {formData.manuscriptFile ? formData.manuscriptFile.name : 'Click to upload manuscript'}
                  </p>
                  <p className="text-sm text-gray-400">PDF, DOC, or DOCX (max 25MB)</p>
                </label>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <FileText className="h-12 w-12 text-teal-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">Additional Information</h2>
              <p className="text-gray-300">Provide additional details for your submission</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Cover Letter
              </label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                placeholder="Brief cover letter explaining the significance of your work..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Conflicts of Interest
              </label>
              <textarea
                name="conflicts"
                value={formData.conflicts}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                placeholder="List any potential conflicts of interest or state 'None'"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Funding Information
              </label>
              <textarea
                name="fundingInfo"
                value={formData.fundingInfo}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                placeholder="List funding sources, grant numbers, etc."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Suggested Reviewers
              </label>
              <textarea
                name="suggestedReviewers"
                value={formData.suggestedReviewers}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                placeholder="Suggest 3-5 potential reviewers with their email addresses"
              />
            </div>
          </div>
        );

      case 6:
        return (
          <div className="text-center space-y-6">
            <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto" />
            <h2 className="text-2xl font-bold text-white">Submission Successful!</h2>
            <p className="text-gray-300 max-w-md mx-auto">
              Thank you for submitting your paper to JACBS. You will receive a confirmation email shortly with your submission details and next steps.
            </p>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <p className="text-green-400 text-sm">
                <strong>Submission Title:</strong> {formData.title}
              </p>
              <p className="text-green-400 text-sm mt-1">
                <strong>Status:</strong> Under Initial Review
              </p>
              <p className="text-green-400 text-sm mt-1">
                <strong>Submitted:</strong> {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Progress Bar */}
      {currentStep < 6 && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3, 4, 5].map((step) => (
              <div
                key={step}
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  step <= currentStep
                    ? 'bg-teal-600 border-teal-600 text-white'
                    : 'border-gray-600 text-gray-400'
                }`}
              >
                {step}
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-teal-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 5) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center space-x-2">
          <AlertCircle className="h-5 w-5 text-red-400" />
          <p className="text-red-400">{error}</p>
        </div>
      )}

      {/* Form Content */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-600">
        {renderStep()}

        {/* Navigation Buttons */}
        {currentStep < 6 && (
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-600">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                currentStep === 1
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              Previous
            </button>

            {currentStep < 5 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-200"
              >
                Next Step
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <span>Submit Paper</span>
                )}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
