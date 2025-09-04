"use client";
import { Toaster } from 'sonner';
import { AuthProvider } from '@/contexts/AuthContext';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <Toaster richColors closeButton />
      {children}
    </AuthProvider>
  );
}
