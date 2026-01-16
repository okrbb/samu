// ============================================================================
// Supabase Configuration Example
// ============================================================================

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// Replace these with your actual Supabase credentials
const SUPABASE_URL = 'https://your-project.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key-here';

// Initialize Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log('✅ Supabase initialized');

// Helper function to test connection
export async function testConnection() {
    try {
        const { data, error } = await supabase
            .from('municipalities')
            .select('count')
            .limit(1);
        
        if (error) throw error;
        console.log('✅ Supabase connection test passed');
        return true;
    } catch (error) {
        console.error('❌ Supabase connection test failed:', error);
        return false;
    }
}
