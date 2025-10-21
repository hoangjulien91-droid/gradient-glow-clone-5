import { createClient } from '@supabase/supabase-js';

// Read env vars (may be undefined during a Vercel build if not set)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || null;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || null;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || null;

// Create client only when variables are present. Export null otherwise so
// server-side code can handle missing config during build-time without
// throwing and causing the whole build to fail. API routes should check
// for `supabaseAdmin` and return a 500 with a helpful message if absent.
export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
      global: {
        headers: {
          'x-application-name': 'julien-hoang-detective',
        },
      },
    })
  : null;

export const supabaseAdmin = (supabaseUrl && supabaseServiceKey)
  ? createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
      global: {
        headers: {
          'x-application-name': 'julien-hoang-detective-admin',
        },
      },
    })
  : null;

// Types for database tables
export interface ContactSubmission {
  id?: number;
  name: string;
  email: string;
  phone?: string;
  message: string;
  created_at?: string;
}