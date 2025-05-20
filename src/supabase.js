import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vmzobkzlbwvqktrpcefq.supabase.co';
const supabaseKey = 'your-supabase-anon-key'; // Replace with your real key
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;