"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import AnimatedSection from '@/components/AnimatedSection';
import PaperSubmissionForm from '@/components/PaperSubmissionForm';
import { FuturisticHero } from '@/components/ui/hero-futuristic';
import { GradientDots } from '@/components/ui/gradient-dots';
import { Lock, UserPlus, ArrowRight, FileText } from 'lucide-react';

export default function SubmitClient() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [showAuthPrompt, setShowAuthPrompt] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      setShowAuthPrompt(true);
    }
  }, [user, loading]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user && showAuthPrompt) {
    return (
      <FuturisticHero className="min-h-screen">
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div className="glass-morphism p-8 shadow-2xl text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg mb-6">
                <FileText className="h-8 w-8 text-white" />
              </div>
              
              <h2 className="text-3xl font-extrabold gradient-text mb-4">
                Submit Your Research
              </h2>
              
              <p className="text-gray-300 mb-8">
                To submit your paper to JACBS, you need to have an account. Please sign in or create a new account to continue.
              </p>

              <div className="space-y-4">
                <button
                  onClick={() => router.push('/auth/login')}
                  className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  <Lock className="h-4 w-4 mr-2" />
                  Sign In
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>

                <button
                  onClick={() => router.push('/auth/signup')}
                  className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  <UserPlus className="h-4 w-4 mr-2" />
                  Create Account
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-600">
                <p className="text-sm text-gray-400">
                  Need help? Contact us at{' '}
                  <a href="mailto:submit@jacbs.org" className="text-blue-400 hover:text-blue-300 transition-colors">
                    submit@jacbs.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </FuturisticHero>
    );
  }

  // User is authenticated, show the submission form
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Gradient Dots Background */}
      <GradientDots 
        duration={20} 
        backgroundColor="rgb(0, 0, 0)" 
        className="opacity-80"
      />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto px-4 pt-24 pb-12">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white mb-4">Submit Your Paper</h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Welcome, {user?.user_metadata?.full_name || user?.email}. 
                Submit your research to the Journal for Advanced Computational and Business Studies.
              </p>
            </div>

            <PaperSubmissionForm />
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
