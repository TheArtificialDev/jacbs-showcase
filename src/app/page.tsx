import { Metadata } from "next";
import { FallingPattern } from "@/components/ui/falling-pattern";
import { baseMetadata, siteName, siteDescription } from "@/lib/seo";

export const metadata: Metadata = baseMetadata(siteName, siteDescription);

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="w-full relative h-screen min-h-[100dvh]">
        <FallingPattern className="h-full [mask-image:radial-gradient(ellipse_at_center,transparent,var(--background))]" />
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
          <h1 className="font-mono text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white text-center leading-tight max-w-6xl">
            Journals for Advanced Computational and Business Studies
          </h1>
        </div>
      </div>

      {/* Featured Section - To be redesigned */}
      <div className="relative z-20">
        {/* Placeholder for new featured section */}
        <div className="min-h-[50vh] flex items-center justify-center">
          <p className="text-neutral-600 dark:text-neutral-400">Featured section will be redesigned here</p>
        </div>
      </div>
    </div>
  );
}
