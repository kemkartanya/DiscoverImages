import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(
    'https://atiwoiidtykzbvrxslwj.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0aXdvaWlkdHlremJ2cnhzbHdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU3MDE4MTgsImV4cCI6MjAyMTI3NzgxOH0.xmqI3qITWMajpUZ3uLFgdx852eY5WKEXJVk2Myafcmw');

export default supabase;