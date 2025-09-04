"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Paper } from "@/data/papers";
import { IconDownload, IconCalendar, IconUser } from "@tabler/icons-react";

interface PaperCardProps {
  paper: Paper;
  className?: string;
}

export function PaperCard({ paper, className }: PaperCardProps) {
  return (
    <BackgroundGradient 
      className={`rounded-[22px] p-6 bg-white dark:bg-zinc-900 ${className || ""}`}
      containerClassName="h-full"
    >
      <div className="flex flex-col h-full">
        {/* Title */}
        <h3 className="text-xl font-semibold text-black dark:text-white mb-3 leading-tight">
          {paper.title}
        </h3>

        {/* Authors and Date */}
        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-neutral-600 dark:text-neutral-400">
          <div className="flex items-center gap-1">
            <IconUser size={16} />
            <span>{paper.authors.join(", ")}</span>
          </div>
          <div className="flex items-center gap-1">
            <IconCalendar size={16} />
            <span>{new Date(paper.publishedAt).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
        </div>

        {/* Abstract */}
        <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed flex-grow">
          {paper.abstract}
        </p>

        {/* Keywords */}
        {paper.keywords && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {paper.keywords.map((keyword, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-neutral-100 dark:bg-zinc-800 text-xs text-neutral-600 dark:text-neutral-300 rounded-full"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Download Button */}
        <div className="mt-auto">
          <a 
            href={paper.pdfUrl} 
            download
            className="inline-flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors w-fit"
          >
            <IconDownload size={16} />
            Download PDF
          </a>
        </div>
      </div>
    </BackgroundGradient>
  );
}
