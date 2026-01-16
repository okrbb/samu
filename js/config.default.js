// ============================================================================
// Supabase Configuration (Default/Public)
// ============================================================================

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// Supabase configuration
// NOTE: These are public credentials - safe to expose in browser
const SUPABASE_URL = 'https://jauatpbswhmdnsxzlard.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_uwcpGOX0iJM1_UojJr3l_A_76o4xUDa';

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
