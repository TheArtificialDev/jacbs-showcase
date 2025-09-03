"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function JournalNavbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-4 sm:top-10 inset-x-0 max-w-xs sm:max-w-2xl mx-auto z-50 px-4 sm:px-0", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Browse">
          <div className="flex flex-col space-y-2 text-sm min-w-[150px] sm:min-w-[200px] py-1">
            <HoveredLink href="/browse">All Papers</HoveredLink>
            <HoveredLink href="/browse?category=ai">AI & Machine Learning</HoveredLink>
            <HoveredLink href="/browse?category=business">Business Analytics</HoveredLink>
            <HoveredLink href="/browse?category=computational">Computational Methods</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Featured">
          <div className="text-sm grid grid-cols-1 gap-3 min-w-[280px] max-w-[320px] sm:min-w-[400px] sm:max-w-[500px]">
            <ProductItem
              title="Hybrid Transformers for Business Time-Series Forecasting"
              href="/papers/hybrid-transformers"
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=140&h=70&fit=crop&crop=center"
              description="Advanced temporal convolution modules with self-attention for improved forecasting accuracy."
            />
            <ProductItem
              title="Reinforcement Learning for Supply Chain Optimization"
              href="/papers/rl-supply-chain"
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=140&h=70&fit=crop&crop=center"
              description="RL framework for multi-echelon supply chain optimization under uncertainty."
            />
            <ProductItem
              title="Large Language Models for Risk Assessment in Finance"
              href="/papers/llm-risk-assessment"
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=140&h=70&fit=crop&crop=center"
              description="LLM-based pipelines for financial risk assessment and narrative analysis."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Journal">
          <div className="flex flex-col space-y-2 text-sm min-w-[150px] sm:min-w-[200px] py-1">
            <HoveredLink href="/about">About JACBS</HoveredLink>
            <HoveredLink href="/submit">Submit Paper</HoveredLink>
            <HoveredLink href="/editorial-board">Editorial Board</HoveredLink>
            <HoveredLink href="/guidelines">Submission Guidelines</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
