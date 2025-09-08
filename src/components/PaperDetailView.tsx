"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Paper } from "@/data/papers";
import { IconDownload, IconCalendar, IconUser, IconArrowLeft, IconExternalLink } from "@tabler/icons-react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import AnimatedSection from "@/components/AnimatedSection";

interface PaperDetailViewProps {
  paper: Paper;
}

export function PaperDetailView({ paper }: PaperDetailViewProps) {
  const formattedDate = new Date(paper.publishedAt).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
      {/* Header with navigation */}
      <div className="container mx-auto px-4 pt-8 pb-4">
        <Link 
          href="/browse"
          className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 transition-colors mb-6"
        >
          <IconArrowLeft size={20} />
          Back to Browse
        </Link>
      </div>

      <AnimatedSection>
        <div className="container mx-auto px-4 pb-16">
          <BackgroundGradient className="rounded-[22px] p-8 md:p-12 bg-white dark:bg-zinc-900">
            <div className="max-w-4xl mx-auto">
              {/* Title */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6 leading-tight"
              >
                {paper.title}
              </motion.h1>

              {/* Author and Date Info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-wrap items-center gap-6 mb-8 text-neutral-600 dark:text-neutral-400"
              >
                <div className="flex items-center gap-2">
                  <IconUser size={20} />
                  <span className="text-lg">{paper.authors.join(", ")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconCalendar size={20} />
                  <span className="text-lg">{formattedDate}</span>
                </div>
              </motion.div>

              {/* Keywords */}
              {paper.keywords && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-8"
                >
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-3">Keywords</h3>
                  <div className="flex flex-wrap gap-3">
                    {paper.keywords.map((keyword, index) => (
                      <span 
                        key={index}
                        className="px-3 py-2 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-sm font-medium"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Abstract */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-8"
              >
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">Abstract</h3>
                <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {paper.abstract}
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a 
                  href={paper.pdfUrl} 
                  download
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-full text-lg font-medium transition-colors"
                >
                  <IconDownload size={24} />
                  Download PDF
                </a>
                <a 
                  href={paper.pdfUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-black dark:text-white rounded-full text-lg font-medium transition-colors"
                >
                  <IconExternalLink size={24} />
                  View PDF
                </a>
              </motion.div>

              {/* Citation Information */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
              >
                <h3 className="text-xl font-semibold text-black dark:text-white mb-4">How to Cite</h3>
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border">
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 font-mono leading-relaxed">
                    {paper.authors.join(", ")} ({new Date(paper.publishedAt).getFullYear()}). 
                    <em> {paper.title}</em>. 
                    <em> Journals for Advanced Computational and Business Studies</em>. 
                    Retrieved from https://jacbs.in/browse/{paper.slug}
                  </p>
                </div>
              </motion.div>

              {/* Publisher Information */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 text-center text-neutral-600 dark:text-neutral-400"
              >
                <p className="text-sm">
                  Published by <span className="font-semibold">Journals for Advanced Computational and Business Studies</span>
                </p>
                <p className="text-sm mt-1">
                  © {new Date(paper.publishedAt).getFullYear()} JACBS. Licensed under Creative Commons BY 4.0
                </p>
              </motion.div>
            </div>
          </BackgroundGradient>
        </div>
      </AnimatedSection>
    </div>
  );
}
