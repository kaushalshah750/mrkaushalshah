import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://otiybtgavdvgrjhajnba.supabase.co/";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90aXlidGdhdmR2Z3JqaGFqbmJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2NzE1NjcsImV4cCI6MjA2MTI0NzU2N30.1w3GG1vBVLEvjJir-KYPXVV-WsWDs1VNMfCrbQz03C0";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: {
        autoRefreshToken: false,
        persistSession: false,
        detectSessionInUrl: false,
    }
});