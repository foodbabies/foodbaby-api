import { createClient } from '@supabase/supabase-js'
require('dotenv').config();

export const supabase = createClient(process.env.SUPABASE_PROJECT_ID, process.env.SUPABASE_API_KEY);
