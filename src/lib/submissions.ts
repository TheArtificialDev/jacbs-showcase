'use server';

import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export interface SubmissionData {
  title: string;
  abstract: string;
  keywords: string;
  category: string;
  paperType: string;
  authors: Array<{
    firstName: string;
    lastName: string;
    email: string;
    affiliation: string;
    orcid?: string;
    isCorresponding: boolean;
  }>;
  conflicts?: string;
  ethicsStatement?: string;
  fundingInfo?: string;
  acknowledgments?: string;
  suggestedReviewers?: string;
  coverLetter?: string;
}

export async function submitPaper(data: SubmissionData) {
  const cookieStore = await cookies();
  
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );

  // Get the current user
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  
  if (authError || !user) {
    throw new Error('Authentication required');
  }

  try {
    // Insert the submission
    const { data: submission, error: submissionError } = await supabase
      .from('submissions')
      .insert({
        title: data.title,
        abstract: data.abstract,
        keywords: data.keywords,
        category: data.category,
        paper_type: data.paperType,
        submitted_by: user.id,
        conflicts_of_interest: data.conflicts,
        ethics_statement: data.ethicsStatement,
        funding_info: data.fundingInfo,
        acknowledgments: data.acknowledgments,
        suggested_reviewers: data.suggestedReviewers,
        cover_letter: data.coverLetter,
      })
      .select()
      .single();

    if (submissionError) {
      throw new Error(`Failed to create submission: ${submissionError.message}`);
    }

    // Insert authors
    const authorsToInsert = data.authors.map((author, index) => ({
      submission_id: submission.id,
      first_name: author.firstName,
      last_name: author.lastName,
      email: author.email,
      affiliation: author.affiliation,
      orcid: author.orcid,
      is_corresponding: author.isCorresponding,
      author_order: index + 1,
    }));

    const { error: authorsError } = await supabase
      .from('submission_authors')
      .insert(authorsToInsert);

    if (authorsError) {
      // Rollback submission if authors insertion fails
      await supabase.from('submissions').delete().eq('id', submission.id);
      throw new Error(`Failed to add authors: ${authorsError.message}`);
    }

    // Create initial history entry
    await supabase
      .from('submission_history')
      .insert({
        submission_id: submission.id,
        status_from: null,
        status_to: 'submitted',
        changed_by: user.id,
        notes: 'Initial submission',
      });

    return {
      success: true,
      submissionId: submission.submission_id,
      id: submission.id,
    };
  } catch (error) {
    console.error('Submission error:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to submit paper');
  }
}

export async function uploadFile(file: File, type: 'manuscript' | 'supplementary'): Promise<string> {
  const cookieStore = await cookies();
  
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );

  // Get the current user
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  
  if (authError || !user) {
    throw new Error('Authentication required');
  }

  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${user.id}/${type}/${Date.now()}.${fileExt}`;
    
    const { data, error } = await supabase.storage
      .from('submissions')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
      throw new Error(`Upload failed: ${error.message}`);
    }

    // Get the public URL
    const { data: urlData } = supabase.storage
      .from('submissions')
      .getPublicUrl(data.path);

    return urlData.publicUrl;
  } catch (error) {
    console.error('Upload error:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to upload file');
  }
}

export async function getUserSubmissions() {
  const cookieStore = await cookies();
  
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );

  const { data: { user }, error: authError } = await supabase.auth.getUser();
  
  if (authError || !user) {
    return { submissions: [], error: 'Authentication required' };
  }

  try {
    const { data: submissions, error } = await supabase
      .from('submissions')
      .select(`
        *,
        submission_authors (*)
      `)
      .eq('submitted_by', user.id)
      .order('created_at', { ascending: false });

    if (error) {
      throw new Error(error.message);
    }

    return { submissions: submissions || [], error: null };
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return { 
      submissions: [], 
      error: error instanceof Error ? error.message : 'Failed to fetch submissions' 
    };
  }
}
