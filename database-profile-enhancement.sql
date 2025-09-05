-- Enhance existing profiles table with additional fields
-- Run this AFTER your existing database scripts

-- Add missing fields to profiles table
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS phone TEXT,
ADD COLUMN IF NOT EXISTS country TEXT,
ADD COLUMN IF NOT EXISTS postal_code TEXT,
ADD COLUMN IF NOT EXISTS website TEXT,
ADD COLUMN IF NOT EXISTS linkedin TEXT,
ADD COLUMN IF NOT EXISTS twitter TEXT,
ADD COLUMN IF NOT EXISTS google_scholar TEXT,
ADD COLUMN IF NOT EXISTS researchgate TEXT,
ADD COLUMN IF NOT EXISTS scopus_id TEXT,
ADD COLUMN IF NOT EXISTS publons_id TEXT,
ADD COLUMN IF NOT EXISTS academic_title TEXT,
ADD COLUMN IF NOT EXISTS years_experience INTEGER,
ADD COLUMN IF NOT EXISTS preferred_topics TEXT[],
ADD COLUMN IF NOT EXISTS cv_url TEXT,
ADD COLUMN IF NOT EXISTS is_public BOOLEAN DEFAULT true,
ADD COLUMN IF NOT EXISTS notification_preferences JSONB DEFAULT '{"email_notifications": true, "review_reminders": true, "submission_updates": true}'::jsonb;

-- Update the existing trigger to handle updated_at for profiles
CREATE OR REPLACE TRIGGER handle_updated_at_profiles
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

DO $$
BEGIN
  RAISE NOTICE 'Profiles table enhanced successfully! ✨';
  RAISE NOTICE 'Added additional fields for comprehensive user profiles';
END $$;
