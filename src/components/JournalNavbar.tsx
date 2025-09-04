"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

export function JournalNavbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  
  // Use try-catch to handle the case where AuthProvider might not be available
  let user = null;
  let signOut = null;
  let loading = true;
  
  try {
    const auth = useAuth();
    user = auth.user;
    signOut = auth.signOut;
    loading = auth.loading;
  } catch (error) {
    console.error('AuthProvider not available:', error);
    // AuthProvider not available, use default values
  }
  
  const router = useRouter();

  const handleSignOut = async () => {
    if (signOut) {
      try {
        await signOut();
        router.push('/');
      } catch (error) {
        console.error('Error signing out:', error);
      }
    }
  };

  return (
    <div
      className={cn("fixed top-2 sm:top-4 md:top-6 lg:top-10 inset-x-0 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto z-50 px-2 sm:px-4 md:px-0", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-2 text-sm min-w-[180px] sm:min-w-[220px] md:min-w-[250px] py-2 px-1">
            <HoveredLink href="/">Homepage</HoveredLink>
            <HoveredLink href="/#featured">Featured Research</HoveredLink>
            <HoveredLink href="/#latest">Latest Publications</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Browse">
          <div className="flex flex-col space-y-2 text-sm min-w-[180px] sm:min-w-[220px] md:min-w-[250px] py-2 px-1">
            <HoveredLink href="/browse">All Papers</HoveredLink>
            <HoveredLink href="/browse?category=ai">AI & Machine Learning</HoveredLink>
            <HoveredLink href="/browse?category=business">Business Analytics</HoveredLink>
            <HoveredLink href="/browse?category=computational">Computational Methods</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Journal">
          <div className="flex flex-col space-y-2 text-sm min-w-[180px] sm:min-w-[220px] md:min-w-[250px] py-2 px-1">
            <HoveredLink href="/about">About JACBS</HoveredLink>
            <HoveredLink href="/submit">Submit Paper</HoveredLink>
            <HoveredLink href="/editorial-board">Editorial Board</HoveredLink>
            <HoveredLink href="/guidelines">Submission Guidelines</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Partners">
          <div className="flex flex-col space-y-2 text-sm min-w-[180px] sm:min-w-[220px] md:min-w-[250px] py-2 px-1">
            <HoveredLink href="#">Origin Journal</HoveredLink>
            <HoveredLink href="#">KP Journal</HoveredLink>
            <HoveredLink href="#">Idexia Journal</HoveredLink>
            <HoveredLink href="#">Valentis Journal</HoveredLink>
            <HoveredLink href="#">Strategen Journal</HoveredLink>
          </div>
        </MenuItem>
        {!loading && (
          <>
            {user ? (
              <MenuItem setActive={setActive} active={active} item="Account">
                <div className="flex flex-col space-y-2 text-sm min-w-[180px] sm:min-w-[220px] md:min-w-[250px] py-2 px-1">
                  <HoveredLink href="/dashboard">Dashboard</HoveredLink>
                  <HoveredLink href="/profile">Profile</HoveredLink>
                  <button
                    onClick={handleSignOut}
                    className="text-left px-3 py-2 text-sm text-red-600 hover:text-red-700 transition-colors rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    Sign Out
                  </button>
                </div>
              </MenuItem>
            ) : (
              <MenuItem setActive={setActive} active={active} item="Login">
                <div className="flex flex-col space-y-2 text-sm min-w-[180px] sm:min-w-[220px] md:min-w-[250px] py-2 px-1">
                  <HoveredLink href="/auth/login">Sign In</HoveredLink>
                  <HoveredLink href="/auth/signup">Create Account</HoveredLink>
                </div>
              </MenuItem>
            )}
          </>
        )}
      </Menu>
    </div>
  );
}
