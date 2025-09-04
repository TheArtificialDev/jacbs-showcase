import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { baseMetadata } from '@/lib/seo';

interface PolicyPageProps {
  title: string;
  children: React.ReactNode;
  lastUpdated?: string;
  effectiveDate?: string;
}

export function PolicyPage({ title, children, lastUpdated, effectiveDate }: PolicyPageProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
      <AnimatedSection>
        <div className="py-12">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-neutral-600">
              <li><Link href="/" className="hover:text-neutral-900">Home</Link></li>
              <li>•</li>
              <li><Link href="/policies" className="hover:text-neutral-900">Policies</Link></li>
              <li>•</li>
              <li className="text-neutral-900">{title}</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12 border-b border-neutral-200 pb-8">
            <h1 className="text-4xl font-bold tracking-tight mb-4 font-mono text-white">{title}</h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-neutral-600">
              {effectiveDate && (
                <div>
                  <span className="font-medium">Effective Date:</span> {effectiveDate}
                </div>
              )}
              {lastUpdated && (
                <div>
                  <span className="font-medium">Last Updated:</span> {lastUpdated}
                </div>
              )}
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-neutral max-w-none policy-content">
            {children}
          </div>

          {/* Footer Actions */}
          <footer className="mt-16 pt-8 border-t border-neutral-200">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/policies"
                className="inline-block border border-neutral-300 text-neutral-700 px-6 py-3 rounded-lg hover:bg-neutral-50 transition-colors text-center"
              >
                ← Back to All Policies
              </Link>
              <Link 
                href="/policies/contact-support"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                Contact Us About This Policy
              </Link>
            </div>
          </footer>
        </div>
      </AnimatedSection>
    </div>
  );
}

export function createPolicyMetadata(title: string, description?: string): Metadata {
  return baseMetadata(title, description || `${title} - JACBS Policies and Guidelines`);
}
