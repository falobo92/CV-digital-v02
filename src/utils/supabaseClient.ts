import { createClient, type SupabaseClient } from '@supabase/supabase-js';

/**
 * Nota importante:
 * - Este módulo NO debe lanzar errores en import-time (evita romper la app si faltan envs).
 * - El cliente se inicializa de forma perezosa al primer uso.
 */

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL as string | undefined)?.trim();
const supabaseAnonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined)?.trim();

let cachedClient: SupabaseClient | null | undefined;

function isSupabaseConfigured(): boolean {
  if (!supabaseUrl || !supabaseAnonKey) return false;
  return supabaseUrl.startsWith('http://') || supabaseUrl.startsWith('https://');
}

export function getSupabaseClient(): SupabaseClient | null {
  if (cachedClient !== undefined) return cachedClient;

  if (!isSupabaseConfigured()) {
    cachedClient = null;
    return cachedClient;
  }

  cachedClient = createClient(supabaseUrl!, supabaseAnonKey!, {
    auth: {
      // Para un sitio estático (portafolio) evitamos persistir sesión por defecto.
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false
    }
  });

  return cachedClient;
}
