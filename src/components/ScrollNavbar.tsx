"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconMenu2, IconX } from '@tabler/icons-react';
import Link from 'next/link';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Browse', href: '/browse' },
  { label: 'Submit', href: '/submit' },
  { label: 'About', href: '/about' },
  { label: 'Policies', href: '/policies' },
];

const partnerJournals = [
  { name: 'Origin Journal', href: '#' },
  { name: 'KP Journal', href: '#' },
  { name: 'Idexia Journal', href: '#' },
  { name: 'Valentis Journal', href: '#' },
  { name: 'Strategen Journal', href: '#' }
];

export default function ScrollNavbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isPartnersOpen, setIsPartnersOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      setIsVisible(scrollY > heroHeight * 0.8); // Show navbar when 80% through hero
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsPartnersOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
          <div className="container mx-auto px-2">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-between py-4">
              <Link href="/" className="font-semibold tracking-tight text-lg">
                Journal for Advanced Computational and Business Studies
              </Link>
              <div className="flex items-center gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                
                {/* Partner Journals Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsPartnersOpen(!isPartnersOpen)}
                    className="text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-1"
                  >
                    Partners
                    <svg 
                      className={`w-3 h-3 transition-transform ${isPartnersOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isPartnersOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-lg py-2 z-50">
                      <div className="px-3 py-1 text-xs font-medium text-neutral-500 dark:text-neutral-400 border-b border-neutral-100 dark:border-neutral-700 mb-1">
                        Partner Journals
                      </div>
                      {partnerJournals.map((journal, index) => (
                        <Link
                          key={index}
                          href={journal.href}
                          className="block px-3 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
                          onClick={() => setIsPartnersOpen(false)}
                        >
                          {journal.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
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
                <div className="flex justify-between items-center p-2 border-b border-neutral-200 dark:border-neutral-800">
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
                <div className="flex flex-col p-4 space-y-4">
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
                  
                  {/* Mobile Partner Journals Section */}
                  <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
                    <div className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-3">
                      Partner Journals
                    </div>
                    {partnerJournals.map((journal, index) => (
                      <Link
                        key={index}
                        href={journal.href}
                        onClick={() => setIsMobileOpen(false)}
                        className="block py-2 text-base text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                      >
                        {journal.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
