import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import { JournalNavbar } from '@/components/JournalNavbar';
import { baseMetadata, siteName } from '@/lib/seo';
import ClientProviders from '@/components/ClientProviders';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = baseMetadata(siteName);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} antialiased text-white bg-black`}> 
        <ClientProviders>
          <JournalNavbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
