import { createBrowserClient } from '@supabase/ssr';

export const getSupabaseBrowserClient = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    // Avoid crashing during dev if env is missing; auth UI will show a warning
    console.warn('Supabase env vars are not set. Auth will be disabled.');
  }
  return createBrowserClient(url || '', key || '');
};
