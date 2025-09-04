"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [isPartnersOpen, setIsPartnersOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const partnerJournals = [
    { name: 'Origin Journal', href: '#' },
    { name: 'KP Journal', href: '#' },
    { name: 'Idexia Journal', href: '#' },
    { name: 'Valentis Journal', href: '#' },
    { name: 'Strategen Journal', href: '#' }
  ];

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
    <header className="sticky top-0 z-40 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="container mx-auto flex items-center justify-between px-2 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <Image
            src="/JACBS.png"
            alt="JACBS Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="hidden sm:inline">Journal for Advanced Computational and Business Studies</span>
          <span className="sm:hidden">JACBS</span>
        </Link>
        <div className="flex items-center gap-3 text-sm">
          <Link href="/" className="hover:text-neutral-600 transition-colors">Home</Link>
          <Link href="/browse" className="hover:text-neutral-600 transition-colors">Browse</Link>
          <Link href="/submit" className="hover:text-neutral-600 transition-colors">Submit</Link>
          <Link href="/about" className="hover:text-neutral-600 transition-colors">About</Link>
          
          {/* Partner Journals Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsPartnersOpen(!isPartnersOpen)}
              className="hover:text-neutral-600 transition-colors flex items-center gap-1"
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
              <div className="absolute right-0 mt-2 w-48 bg-white border border-neutral-200 rounded-lg shadow-lg py-2 z-50">
                <div className="px-3 py-1 text-xs font-medium text-neutral-500 border-b border-neutral-100 mb-1">
                  Partner Journals
                </div>
                {partnerJournals.map((journal, index) => (
                  <Link
                    key={index}
                    href={journal.href}
                    className="block px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
                    onClick={() => setIsPartnersOpen(false)}
                  >
                    {journal.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
