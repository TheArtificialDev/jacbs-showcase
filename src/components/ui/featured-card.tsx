"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { motion } from "framer-motion";

interface FeaturedArticle {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  cardText: string;
  link: string;
}

interface FeaturedCardProps {
  article: FeaturedArticle;
  index: number;
}

export function FeaturedCard({ article, index }: FeaturedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group cursor-pointer h-full"
    >
      <BackgroundGradient 
        className="rounded-[22px] p-6 bg-black/[0.9] h-full"
        containerClassName="h-full"
      >
        <div className="flex flex-col h-full">
          {/* Large Text Badge */}
          <div className="mb-6 flex items-center justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <span className="text-2xl font-bold text-white">
                {article.cardText}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col">
            <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-teal-300 transition-colors leading-tight">
              {article.title}
            </h3>
            <h4 className="text-teal-400 text-sm font-medium mb-4">
              {article.subtitle}
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
              {article.description}
            </p>
            
            {/* Button */}
            <div className="mt-auto">
              <InteractiveHoverButton 
                text="Read Research"
                variant="teal"
                className="w-full h-12 text-sm text-white"
              />
            </div>
          </div>
        </div>
      </BackgroundGradient>
    </motion.div>
  );
}
