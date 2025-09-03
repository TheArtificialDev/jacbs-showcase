import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight">
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
        <div className="flex items-center gap-4 text-sm">
          <Link href="/browse">Browse</Link>
          <Link href="/submit">Submit</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </header>
  );
}
