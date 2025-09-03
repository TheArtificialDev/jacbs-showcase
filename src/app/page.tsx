import { Metadata } from "next";
import Image from "next/image";
import { FallingPattern } from "@/components/ui/falling-pattern";
import { FeaturedSection } from "@/components/FeaturedSection";
import { CollaborationsSection } from "@/components/CollaborationsSection";
import { baseMetadata, siteName, siteDescription } from "@/lib/seo";

export const metadata: Metadata = baseMetadata(siteName, siteDescription);

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="w-full relative h-screen min-h-[100dvh] bg-black">
        <FallingPattern className="h-full [mask-image:radial-gradient(ellipse_at_center,transparent,var(--background))]" />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4">
          <div className="mb-8 flex items-center justify-center">
            <Image
              src="/JACBS.png"
              alt="JACBS Logo"
              width={120}
              height={120}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
              priority
            />
          </div>
          <h1 className="font-mono text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white text-center leading-tight max-w-6xl">
            Journals for Advanced Computational and Business Studies
          </h1>
        </div>
      </div>

      {/* Featured Section */}
      <div className="relative z-20">
        <FeaturedSection />
      </div>

      {/* Collaborations Section */}
      <div className="relative z-20">
        <CollaborationsSection />
      </div>
    </div>
  );
}
