import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

export default createClient(process.env.SUPABASE_PROJECT_ID, process.env.SUPABASE_API_KEY);
