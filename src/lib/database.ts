import { createSupabaseBrowserClient } from './supabase-browser';

const supabase = createSupabaseBrowserClient();

// TypeScript interfaces for database tables
export interface UserProfile {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  institution?: string;
  department?: string;
  phone?: string;
  country?: string;
  postal_code?: string;
  website?: string;
  research_interests?: string;
  orcid_id?: string;
  linkedin?: string;
  twitter?: string;
  google_scholar?: string;
  researchgate?: string;
  scopus_id?: string;
  publons_id?: string;
  bio?: string;
  academic_title?: string;
  years_experience?: number;
  preferred_topics?: string[];
  avatar_url?: string;
  cv_url?: string;
  is_public?: boolean;
  notification_preferences?: {
    email_notifications: boolean;
    review_reminders: boolean;
    submission_updates: boolean;
  };
  role?: string;
  created_at: string;
  updated_at: string;
}

export interface PaperSubmission {
  id?: string;
  title: string;
  abstract: string;
  keywords: string[];
  authors: Array<{
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
    institution: string;
    is_corresponding: boolean;
  }>;
  corresponding_author: string;
  paper_type: 'research' | 'review' | 'case_study' | 'technical_note' | 'editorial';
  journal_section?: string;
  file_url?: string;
  status?: 'draft' | 'submitted' | 'under_review' | 'revision_required' | 'accepted' | 'published' | 'rejected';
  submission_date?: string;
  created_at?: string;
  updated_at?: string;
}

export interface PaperAuthor {
  id: string;
  paper_id: string;
  first_name: string;
  last_name: string;
  email: string;
  affiliation: string;
  orcid?: string;
  is_corresponding: boolean;
  author_order: number;
}

// User Profile functions
export async function getUserProfile(userId: string) {
  const { data, error } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) {
    console.error('Error fetching user profile:', error);
    return { profile: null, error };
  }

  return { profile: data, error: null };
}

export async function updateUserProfile(userId: string, updates: Partial<UserProfile>) {
  const { data, error } = await supabase
    .from('user_profiles')
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq('id', userId)
    .select()
    .single();

  if (error) {
    console.error('Error updating user profile:', error);
    return { profile: null, error };
  }

  return { profile: data, error: null };
}

export async function createUserProfile(profile: Omit<UserProfile, 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase
    .from('user_profiles')
    .insert([profile])
    .select()
    .single();

  if (error) {
    console.error('Error creating user profile:', error);
    return { profile: null, error };
  }

  return { profile: data, error: null };
}

// File storage functions
export async function uploadManuscript(userId: string, file: File) {
  const timestamp = Date.now();
  const fileName = `${userId}/${timestamp}-${file.name}`;

  const { data, error } = await supabase.storage
    .from('manuscripts')
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: false
    });

  if (error) {
    console.error('Error uploading file:', error);
    return { fileName: null, filePath: null, error };
  }

  // Get the public URL
  const { data: urlData } = supabase.storage
    .from('manuscripts')
    .getPublicUrl(fileName);

  return { 
    fileName: file.name, 
    filePath: data.path, 
    publicUrl: urlData.publicUrl,
    error: null 
  };
}

export async function deleteManuscript(filePath: string) {
  const { error } = await supabase.storage
    .from('manuscripts')
    .remove([filePath]);

  if (error) {
    console.error('Error deleting file:', error);
    return { error };
  }

  return { error: null };
}

// Paper submission functions
export async function createPaperSubmission(
  submission: Omit<PaperSubmission, 'id' | 'submission_id' | 'created_at' | 'updated_at'>,
  authors: Omit<PaperAuthor, 'id' | 'paper_id'>[]
) {
  // Generate submission ID
  const submissionId = `JACBS-${Date.now()}`;

  // Create the paper submission
  const { data: paperData, error: paperError } = await supabase
    .from('paper_submissions')
    .insert([{
      ...submission,
      submission_id: submissionId,
      status: 'submitted'
    }])
    .select()
    .single();

  if (paperError) {
    console.error('Error creating paper submission:', paperError);
    return { submission: null, submissionId: null, error: paperError };
  }

  // Create the authors
  const authorsWithPaperId = authors.map((author, index) => ({
    ...author,
    paper_id: paperData.id,
    author_order: index + 1
  }));

  const { error: authorsError } = await supabase
    .from('paper_authors')
    .insert(authorsWithPaperId);

  if (authorsError) {
    console.error('Error creating paper authors:', authorsError);
    // Rollback the paper submission if authors creation fails
    await supabase
      .from('paper_submissions')
      .delete()
      .eq('id', paperData.id);
    
    return { submission: null, submissionId: null, error: authorsError };
  }

  return { submission: paperData, submissionId, error: null };
}

export async function getUserSubmissions(userId: string) {
  const { data, error } = await supabase
    .from('paper_submissions')
    .select(`
      *,
      paper_authors (*)
    `)
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching user submissions:', error);
    return { submissions: null, error };
  }

  return { submissions: data, error: null };
}

export async function getSubmission(submissionId: string, userId: string) {
  const { data, error } = await supabase
    .from('paper_submissions')
    .select(`
      *,
      paper_authors (*)
    `)
    .eq('submission_id', submissionId)
    .eq('user_id', userId)
    .single();

  if (error) {
    console.error('Error fetching submission:', error);
    return { submission: null, error };
  }

  return { submission: data, error: null };
}

export async function updateSubmissionStatus(submissionId: string, status: string) {
  const { data, error } = await supabase
    .from('paper_submissions')
    .update({ status })
    .eq('submission_id', submissionId)
    .select()
    .single();

  if (error) {
    console.error('Error updating submission status:', error);
    return { submission: null, error };
  }

  return { submission: data, error: null };
}
