import { createAdminClient } from '@/lib/supabase/admin';
import type { Database } from '@/types/database';

async function main() {
  const supabase = createAdminClient();
  const { data, error } = await supabase.from('projects').select('count', { count: 'exact', head: true });
  if (error) {
    console.error('Database health check failed:', error);
    process.exit(1);
  }
  console.log('Hi! Database is healthy and connected. Project count:', data?.length ?? 0);
}

main().catch((err) => {
  console.error('Unexpected error:', err);
  process.exit(1);
});