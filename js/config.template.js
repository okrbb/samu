// ============================================================================
// Supabase Configuration Template
// ============================================================================

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// These values will be replaced by GitHub Actions during deployment
const SUPABASE_URL = 'SUPABASE_URL_PLACEHOLDER';
const SUPABASE_ANON_KEY = 'SUPABASE_ANON_KEY_PLACEHOLDER';

// Initialize Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log('✅ Supabase initialized successfully');

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
