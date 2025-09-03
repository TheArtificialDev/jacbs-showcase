"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconMenu2, IconX } from '@tabler/icons-react';
import Link from 'next/link';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Browse', href: '/browse' },
  { label: 'Submit', href: '/submit' },
  { label: 'About', href: '/about' },
  { label: 'Policies', href: '/policies' },
];

export default function ScrollNavbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      setIsVisible(scrollY > heroHeight * 0.8); // Show navbar when 80% through hero
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg border-b border-neutral-200 dark:border-neutral-800"
        >
          <div className="container mx-auto px-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-between py-4">
              <Link href="/" className="font-semibold tracking-tight text-lg">
                Journal for Advanced Computational and Business Studies
              </Link>
              <div className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center justify-between py-4">
              <Link href="/" className="font-semibold tracking-tight text-sm">
                JACBS
              </Link>
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="p-2 text-neutral-700 dark:text-neutral-200"
              >
                <IconMenu2 size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isMobileOpen && (
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed inset-0 z-[100] bg-white dark:bg-neutral-900 md:hidden"
              >
                <div className="flex justify-between items-center p-4 border-b border-neutral-200 dark:border-neutral-800">
                  <Link href="/" className="font-semibold tracking-tight">
                    Journal for Advanced Computational and Business Studies
                  </Link>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="p-2 text-neutral-700 dark:text-neutral-200"
                  >
                    <IconX size={20} />
                  </button>
                </div>
                <div className="flex flex-col p-6 space-y-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="text-lg font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
