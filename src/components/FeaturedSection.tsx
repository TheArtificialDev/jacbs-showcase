"use client";
import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { motion } from "framer-motion";

const featuredArticles = [
  {
    id: 1,
    title: "AI-Driven Supply Chain Optimization",
    subtitle: "Revolutionary machine learning approaches for logistics",
    description: "Explore cutting-edge algorithms that transform traditional supply chain management through predictive analytics and real-time optimization.",
    cardText: "AI",
    link: "/papers/ai-supply-chain"
  },
  {
    id: 2,
    title: "Quantum Computing in Financial Markets",
    subtitle: "Next-generation computational finance models",
    description: "Discover how quantum algorithms are reshaping portfolio optimization, risk assessment, and high-frequency trading strategies.",
    cardText: "QC",
    link: "/papers/quantum-finance"
  },
  {
    id: 3,
    title: "Blockchain Business Models",
    subtitle: "Decentralized frameworks for enterprise adoption",
    description: "Comprehensive analysis of blockchain integration strategies that drive sustainable business transformation and operational efficiency.",
    cardText: "BC",
    link: "/papers/blockchain-business"
  }
];

export function FeaturedSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-teal-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Research
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover groundbreaking studies at the intersection of technology and business
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {featuredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              {/* Card Container */}
              <div className="border border-white/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem] bg-black/[0.3] backdrop-blur-sm rounded-lg hover:bg-black/[0.5] transition-all duration-300">
                {/* Corner Icons */}
                <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
                <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
                <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
                <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

                {/* Evervault Card */}
                <div className="h-48 w-full mb-4">
                  <EvervaultCard text={article.cardText} />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-teal-300 transition-colors">
                      {article.title}
                    </h3>
                    <h4 className="text-teal-400 text-sm font-medium mb-3">
                      {article.subtitle}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {article.description}
                    </p>
                  </div>
                  
                  {/* Read More Button */}
                  <div className="mt-6">
                    <InteractiveHoverButton 
                      text="Read Research"
                      variant="teal"
                      className="w-40 h-10 text-xs text-white"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <InteractiveHoverButton 
            text="Explore All Research"
            variant="teal"
            className="w-52 h-12 text-sm text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          />
        </motion.div>
      </div>
    </section>
  );
}
