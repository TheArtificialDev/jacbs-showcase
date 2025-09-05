"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { Eye, EyeOff, Mail, Lock, AlertCircle } from 'lucide-react';
import { FaGoogle } from 'react-icons/fa';
import { FuturisticHero } from '@/components/ui/hero-futuristic';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const { signIn, signInWithGoogle } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!email || !password) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await signIn(email, password);
      if (error) {
        setError(error.message);
      } else {
        router.push('/dashboard');
      }
    } catch (error) {
      console.error('Error signing in:', error);
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setIsGoogleLoading(true);

    try {
      const { error } = await signInWithGoogle();
      if (error) {
        setError(error.message);
      }
      // Note: redirect happens automatically via the OAuth flow
    } catch (error) {
      console.error('Error signing in with Google:', error);
      setError('An unexpected error occurred');
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <FuturisticHero>
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-sm sm:max-w-md w-full space-y-6 sm:space-y-8 auth-form-container">
          <div className="glass-morphism p-4 sm:p-6 md:p-8 shadow-2xl">
            <div className="auth-form-header">
              <div className="mx-auto h-12 w-12 sm:h-16 sm:w-16 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-600 to-teal-700 shadow-lg">
                <Lock className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h2 className="mt-4 sm:mt-6 text-center text-2xl sm:text-3xl md:text-4xl font-extrabold gradient-text">
                Welcome Back
              </h2>
              <p className="mt-2 text-center text-xs sm:text-sm text-gray-300">
                Sign in to your JACBS account
              </p>
            </div>
            
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              {error && (
                <div className="auth-form-field bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-center space-x-2" style={{'--delay': 0} as any}>
                  <AlertCircle className="h-5 w-5 text-red-400" />
                  <p className="text-red-300 text-sm">{error}</p>
                </div>
              )}
              
              <div className="space-y-4">
                <div className="auth-form-field" style={{'--delay': 1} as any}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="auth-input appearance-none relative block w-full px-3 py-4 pl-10 border border-gray-600 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white/90 backdrop-blur-sm transition-all duration-200"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="auth-form-field" style={{'--delay': 2} as any}>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="current-password"
                      required
                      className="auth-input appearance-none relative block w-full px-3 py-4 pl-10 pr-10 border border-gray-600 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white/90 backdrop-blur-sm transition-all duration-200"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center hover:bg-gray-100/20 rounded-r-lg transition-colors"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between auth-form-field" style={{'--delay': 3} as any}>
                <div className="text-sm">
                  <Link
                    href="/auth/reset-password"
                    className="font-medium text-teal-400 hover:text-teal-300 transition-colors duration-200 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div className="auth-form-button">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transform transition-all duration-200 hover:scale-105"
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Signing in...</span>
                    </div>
                  ) : (
                    <span className="flex items-center space-x-2">
                      <Lock className="h-4 w-4" />
                      <span>Sign In</span>
                    </span>
                  )}
                </button>
              </div>

              {/* Divider */}
              <div className="relative auth-form-field" style={{'--delay': 4.5} as any}>
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-transparent text-gray-400">Or continue with</span>
                </div>
              </div>

              {/* Google Sign In */}
              <div className="auth-form-field" style={{'--delay': 5} as any}>
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  disabled={isGoogleLoading}
                  className="group relative w-full flex justify-center py-4 px-4 border border-gray-600 text-sm font-medium rounded-lg text-gray-300 bg-transparent hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transform transition-all duration-200 hover:scale-105"
                >
                  {isGoogleLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Signing in with Google...</span>
                    </div>
                  ) : (
                    <span className="flex items-center space-x-2">
                      <FaGoogle className="h-4 w-4 text-red-500" />
                      <span>Sign In with Google</span>
                    </span>
                  )}
                </button>
              </div>

              <div className="text-center auth-form-field" style={{'--delay': 6} as any}>
                <p className="text-sm text-gray-300">
                  Don't have an account?{' '}
                  <Link
                    href="/auth/signup"
                    className="font-medium text-teal-400 hover:text-teal-300 transition-colors duration-200 hover:underline"
                  >
                    Create one here
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
