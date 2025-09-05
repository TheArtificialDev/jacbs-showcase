"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { Eye, EyeOff, Mail, Lock, AlertCircle, CheckCircle, UserPlus } from 'lucide-react';
import { FaGoogle } from 'react-icons/fa';
import { FuturisticHero } from '@/components/ui/hero-futuristic';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    organization: '',
    position: '',
    phoneNumber: '',
    orcid: '',
    researchField: '',
    degree: '',
    bio: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const { signUp, signInWithGoogle } = useAuth();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword || !formData.organization || !formData.position) {
      setError('Please fill in all required fields');
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }

    if (formData.phoneNumber && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phoneNumber.replace(/\s|-/g, ''))) {
      setError('Please enter a valid phone number');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    if (!validateForm()) {
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await signUp(formData.email, formData.password, {
        first_name: formData.firstName,
        last_name: formData.lastName,
        full_name: `${formData.firstName} ${formData.lastName}`,
        organization: formData.organization,
        position: formData.position,
        phone_number: formData.phoneNumber,
        orcid: formData.orcid,
        research_field: formData.researchField,
        degree: formData.degree,
        bio: formData.bio,
      });

      if (error) {
        setError(error.message);
      } else {
        setSuccess('Account created successfully! Please check your email to verify your account.');
        setTimeout(() => {
          router.push('/auth/login');
        }, 3000);
      }
    } catch (error) {
      console.error('Error signing up:', error);
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setError('');
    setSuccess('');
    setIsGoogleLoading(true);

    try {
      const { error } = await signInWithGoogle();
      if (error) {
        setError(error.message);
      }
      // Note: redirect happens automatically via the OAuth flow
    } catch (error) {
      console.error('Error signing up with Google:', error);
      setError('An unexpected error occurred');
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <FuturisticHero>
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-24 min-h-screen">
        <div className="max-w-sm sm:max-w-md w-full space-y-6 sm:space-y-8 auth-form-container">
          <div className="glass-morphism p-4 sm:p-6 md:p-8 shadow-2xl">
            <div className="auth-form-header">
              <div className="mx-auto h-12 w-12 sm:h-16 sm:w-16 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-600 to-teal-700 shadow-lg">
                <UserPlus className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h2 className="mt-4 sm:mt-6 text-center text-2xl sm:text-3xl md:text-4xl font-extrabold gradient-text">
                Join JACBS
              </h2>
              <p className="mt-2 text-center text-xs sm:text-sm text-gray-300">
                Create your academic journal account
              </p>
            </div>
            
            <form className="mt-6 sm:mt-8 space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              {error && (
                <div className="auth-form-field bg-red-500/10 border border-red-500/30 rounded-lg p-3 sm:p-4 flex items-center space-x-2" style={{'--delay': 0} as any}>
                  <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-red-400 flex-shrink-0" />
                  <p className="text-red-300 text-xs sm:text-sm">{error}</p>
                </div>
              )}

              {success && (
                <div className="auth-form-field bg-green-500/10 border border-green-500/30 rounded-lg p-3 sm:p-4 flex items-center space-x-2" style={{'--delay': 0} as any}>
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <p className="text-green-300 text-xs sm:text-sm">{success}</p>
                </div>
              )}
              
              <div className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="auth-form-field" style={{'--delay': 1} as any}>
                    <label htmlFor="firstName" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                      First Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      required
                      className="auth-input appearance-none relative block w-full px-3 py-3 sm:py-4 border border-gray-600 placeholder-gray-400 text-gray-900 text-sm sm:text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white/90 backdrop-blur-sm transition-all duration-200"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="auth-form-field" style={{'--delay': 1.5} as any}>
                    <label htmlFor="lastName" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                      Last Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      required
                      className="auth-input appearance-none relative block w-full px-3 py-3 sm:py-4 border border-gray-600 placeholder-gray-400 text-gray-900 text-sm sm:text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white/90 backdrop-blur-sm transition-all duration-200"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="auth-form-field" style={{'--delay': 2} as any}>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="auth-input appearance-none relative block w-full px-3 py-3 sm:py-4 pl-9 sm:pl-10 border border-gray-600 placeholder-gray-400 text-gray-900 text-sm sm:text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white/90 backdrop-blur-sm transition-all duration-200"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="auth-form-field" style={{'--delay': 2.5} as any}>
                    <label htmlFor="organization" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                      Organization <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      autoComplete="organization"
                      required
                      className="auth-input appearance-none relative block w-full px-3 py-3 sm:py-4 border border-gray-600 placeholder-gray-400 text-gray-900 text-sm sm:text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white/90 backdrop-blur-sm transition-all duration-200"
                      placeholder="University/Institution"
                      value={formData.organization}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="auth-form-field" style={{'--delay': 3} as any}>
                    <label htmlFor="position" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                      Position <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="position"
                      name="position"
                      type="text"
                      autoComplete="organization-title"
                      required
                      className="auth-input appearance-none relative block w-full px-3 py-3 sm:py-4 border border-gray-600 placeholder-gray-400 text-gray-900 text-sm sm:text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white/90 backdrop-blur-sm transition-all duration-200"
                      placeholder="Professor, Researcher, etc."
                      value={formData.position}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="auth-form-field" style={{'--delay': 3.5} as any}>
                    <label htmlFor="phoneNumber" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      autoComplete="tel"
                      className="auth-input appearance-none relative block w-full px-3 py-3 sm:py-4 border border-gray-600 placeholder-gray-400 text-gray-900 text-sm sm:text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white/90 backdrop-blur-sm transition-all duration-200"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="auth-form-field" style={{'--delay': 4} as any}>
                    <label htmlFor="orcid" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                      ORCID iD
                    </label>
                    <input
                      id="orcid"
                      name="orcid"
                      type="text"
                      className="auth-input appearance-none relative block w-full px-3 py-3 sm:py-4 border border-gray-600 placeholder-gray-400 text-gray-900 text-sm sm:text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white/90 backdrop-blur-sm transition-all duration-200"
                      placeholder="0000-0000-0000-0000"
                      value={formData.orcid}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="auth-form-field" style={{'--delay': 4.5} as any}>
                    <label htmlFor="researchField" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                      Research Field
                    </label>
                    <input
                      id="researchField"
                      name="researchField"
                      type="text"
                      className="auth-input appearance-none relative block w-full px-3 py-3 sm:py-4 border border-gray-600 placeholder-gray-400 text-gray-900 text-sm sm:text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white/90 backdrop-blur-sm transition-all duration-200"
                      placeholder="AI, Machine Learning, etc."
                      value={formData.researchField}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="auth-form-field" style={{'--delay': 5} as any}>
                    <label htmlFor="degree" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                      Highest Degree
                    </label>
                    <select
                      id="degree"
                      name="degree"
                      className="auth-input appearance-none relative block w-full px-3 py-3 sm:py-4 border border-gray-600 placeholder-gray-400 text-gray-900 text-sm sm:text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white/90 backdrop-blur-sm transition-all duration-200"
                      value={formData.degree}
                      onChange={handleChange}
                    >
                      <option value="">Select degree</option>
                      <option value="Bachelor's">Bachelor's</option>
                      <option value="Master's">Master's</option>
                      <option value="PhD">PhD</option>
                      <option value="Postdoc">Postdoc</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="auth-form-field" style={{'--delay': 5.5} as any}>
                  <label htmlFor="bio" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                    Bio/Research Interests
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    rows={3}
                    className="auth-input appearance-none relative block w-full px-3 py-3 sm:py-4 border border-gray-600 placeholder-gray-400 text-gray-900 text-sm sm:text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white/90 backdrop-blur-sm transition-all duration-200 resize-none"
                    placeholder="Brief description of your research interests and background..."
                    value={formData.bio}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="auth-form-field" style={{'--delay': 6} as any}>
                  <label htmlFor="password" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                    Password <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="new-password"
                      required
                      className="auth-input appearance-none relative block w-full px-3 py-3 sm:py-4 pl-9 sm:pl-10 pr-10 border border-gray-600 placeholder-gray-400 text-gray-900 text-sm sm:text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white/90 backdrop-blur-sm transition-all duration-200"
                      placeholder="Password (min 8 characters)"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center hover:bg-gray-100/20 rounded-r-lg transition-colors"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-600" />
                      ) : (
                        <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="auth-form-field" style={{'--delay': 6.5} as any}>
                  <label htmlFor="confirmPassword" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                    Confirm Password <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    </div>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      autoComplete="new-password"
                      required
                      className="auth-input appearance-none relative block w-full px-3 py-3 sm:py-4 pl-9 sm:pl-10 pr-10 border border-gray-600 placeholder-gray-400 text-gray-900 text-sm sm:text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white/90 backdrop-blur-sm transition-all duration-200"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center hover:bg-gray-100/20 rounded-r-lg transition-colors"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-600" />
                      ) : (
                        <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="auth-form-button">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative w-full flex justify-center py-3 sm:py-4 px-4 border border-transparent text-sm sm:text-base font-medium rounded-lg text-white bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Creating account...</span>
                    </div>
                  ) : (
                    <span className="flex items-center space-x-2">
                      <UserPlus className="h-4 w-4" />
                      <span>Create Account</span>
                    </span>
                  )}
                </button>
              </div>

              {/* Divider */}
              <div className="relative auth-form-field" style={{'--delay': 7.5} as any}>
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-transparent text-gray-400">Or continue with</span>
                </div>
              </div>

              {/* Google Sign Up */}
              <div className="auth-form-field" style={{'--delay': 8} as any}>
                <button
                  type="button"
                  onClick={handleGoogleSignUp}
                  disabled={isGoogleLoading}
                  className="group relative w-full flex justify-center py-3 sm:py-4 px-4 border border-gray-600 text-sm sm:text-base font-medium rounded-lg text-gray-300 bg-transparent hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transform transition-all duration-200 hover:scale-105"
                >
                  {isGoogleLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Signing up with Google...</span>
                    </div>
                  ) : (
                    <span className="flex items-center space-x-2">
                      <FaGoogle className="h-4 w-4 text-red-500" />
                      <span>Sign Up with Google</span>
                    </span>
                  )}
                </button>
              </div>

              <div className="text-center auth-form-field" style={{'--delay': 8.5} as any}>
                <p className="text-xs sm:text-sm text-gray-300">
                  Already have an account?{' '}
                  <Link
                    href="/auth/login"
                    className="font-medium text-teal-400 hover:text-teal-300 transition-colors duration-200 hover:underline"
                  >
                    Sign in here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </FuturisticHero>
  );
}
