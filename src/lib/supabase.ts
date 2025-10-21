import { createClient } from '@supabase/supabase-js';

// ✅ Sécurité: JAMAIS de fallback avec des clés hardcodées
if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL');
}
if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY');
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// ✅ Performance: Client-side Supabase avec cache optimisé
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
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
});

// ✅ Sécurité: Server-side client (API routes uniquement)
export const supabaseAdmin = supabaseServiceKey ? createClient(
  supabaseUrl,
  supabaseServiceKey,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    },
    global: {
      headers: {
        'x-application-name': 'julien-hoang-detective-admin',
      },
    },
  }
) : null;

// Types for database tables
export interface ContactSubmission {
  id?: number;
  name: string;
  email: string;
  phone?: string;
  message: string;
  created_at?: string;
}