"use client";
import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { getSupabaseBrowserClient } from '@/lib/supabase';
import { toast } from 'sonner';

const authSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type AuthInput = z.infer<typeof authSchema>;

export default function SubmitClient() {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AuthInput>({ resolver: zodResolver(authSchema) });

  const onSubmit = async (values: AuthInput) => {
    const supabase = getSupabaseBrowserClient();
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      toast.error('Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.');
      return;
    }
    try {
      if (mode === 'signup') {
        const { error } = await supabase.auth.signUp({ email: values.email, password: values.password });
        if (error) throw error;
        toast.success('Check your email to confirm your account.');
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email: values.email, password: values.password });
        if (error) throw error;
        toast.success('Signed in! (Submission form would appear here.)');
      }
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Authentication failed';
      toast.error(msg);
    }
  };

  return (
    <div>
      <AnimatedSection>
        <div className="py-12">
          <h1 className="text-2xl font-semibold tracking-tight">Submit Your Paper</h1>
          <p className="mt-2 text-neutral-700">Sign in or create an account to submit your manuscript.</p>

          <div className="mt-6 max-w-md">
            <div className="flex gap-2 mb-4">
              <button onClick={() => setMode('signin')} className={`px-3 py-1 border rounded ${mode === 'signin' ? 'bg-black text-white' : ''}`}>
                Sign In
              </button>
              <button onClick={() => setMode('signup')} className={`px-3 py-1 border rounded ${mode === 'signup' ? 'bg-black text-white' : ''}`}>
                Sign Up
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <div>
                <label className="block text-sm">Email</label>
                <input type="email" className="w-full border rounded px-3 py-2" {...register('email')} />
                {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-sm">Password</label>
                <input type="password" className="w-full border rounded px-3 py-2" {...register('password')} />
                {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
              </div>
              <button type="submit" disabled={isSubmitting} className="px-4 py-2 rounded bg-black text-white text-sm disabled:opacity-60">
                {mode === 'signup' ? 'Create account' : 'Sign in'}
              </button>
            </form>

            <p className="text-sm text-neutral-600 mt-6">
              After signing in, you will see a submission form here (title, authors, abstract, PDF upload).
              For now, papers are hardcoded and downloads are direct.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
