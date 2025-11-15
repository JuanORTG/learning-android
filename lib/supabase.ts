import 'react-native-url-polyfill/auto';


import { createClient } from '@supabase/supabase-js';

// Reemplaza con tu URL y tu clave pública (anon)
const SUPABASE_URL = 'https://topyayutdzndpcodqlft.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvcHlheXV0ZHpuZHBjb2RxbGZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4MTE1OTMsImV4cCI6MjA3ODM4NzU5M30.i3o4fdktVlXJWcKmzsdjVklR4tiaTH71H-apza-nnSM';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
