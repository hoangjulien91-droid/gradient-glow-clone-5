import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://wpgtsqjcdosuegpophvv.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwZ3RzcWpjZG9zdWVncG9waHZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgwMTQ4MTIsImV4cCI6MjA3MzU5MDgxMn0.NDVPPOABuSsBUMTzCvbsrcTE7Kf2DuJYBR_JVPk3b0M';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwZ3RzcWpjZG9zdWVncG9waHZ2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1ODAxNDgxMiwiZXhwIjoyMDczNTkwODEyfQ.wUEG-t35GSsJ_KEJb83j_ylH7lw0HZdqOsjSHvX1Q6s';

// Client-side Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Server-side Supabase client with service role (for API routes)
export const supabaseAdmin = createClient(
  supabaseUrl,
  supabaseServiceKey,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);

// Types for database tables
export interface ContactSubmission {
  id?: number;
  name: string;
  email: string;
  phone?: string;
  message: string;
  created_at?: string;
}