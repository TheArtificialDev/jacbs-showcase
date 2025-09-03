"use client";
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function AnimatedSection({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      className="container mx-auto px-4"
    >
      {children}
    </motion.section>
  );
}
