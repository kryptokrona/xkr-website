import { createClient } from '@supabase/supabase-js'

let supabase
const supabaseUrl = import.meta.env.VITE_SVELTE_APP_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SVELTE_APP_SUPABASE_ANON_KEY;

if (process.env.NODE_ENV !== 'development') {
    supabase = createClient(supabaseUrl, supabaseAnonKey)
} else {
    console.log('Supabase disabled in development')
}

export default supabase