"use client";
import React from "react";
import { PaperCard } from "@/components/ui/paper-card";
import { Paper } from "@/data/papers";
import { motion } from "framer-motion";

interface ResearchGridProps {
  papers: Paper[];
  title?: string;
  description?: string;
  columns?: 2 | 3 | 4;
  className?: string;
}

export function ResearchGrid({ 
  papers, 
  title = "Research Papers",
  description = "Explore our latest research with interactive gradient cards.",
  columns = 3,
  className = ""
}: ResearchGridProps) {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3", 
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  };

  return (
    <div className={`py-12 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          {title}
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
          {description}
        </p>
      </motion.div>

      <div className={`grid gap-8 ${gridCols[columns]}`}>
        {papers.map((paper, index) => (
          <motion.div
            key={paper.slug}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <PaperCard paper={paper} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
