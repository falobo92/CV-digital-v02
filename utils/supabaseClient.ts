// utils/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

// Obtener las variables de entorno
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validar que las variables estén definidas
if (!supabaseUrl) {
  throw new Error(
    '❌ VITE_SUPABASE_URL no está definida. Por favor, agrega esta variable en tu archivo .env.local'
  );
}

if (!supabaseAnonKey) {
  throw new Error(
    '❌ VITE_SUPABASE_ANON_KEY no está definida. Por favor, agrega esta variable en tu archivo .env.local'
  );
}

// Validar formato de URL
if (!supabaseUrl.startsWith('http://') && !supabaseUrl.startsWith('https://')) {
  throw new Error(
    `❌ VITE_SUPABASE_URL tiene un formato inválido: "${supabaseUrl}". Debe ser una URL válida (ej: https://tu-proyecto.supabase.co)`
  );
}

// Crear y exportar el cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Log de confirmación en desarrollo
if (import.meta.env.DEV) {
  console.log('✅ Cliente de Supabase inicializado correctamente');
  console.log(`📍 URL: ${supabaseUrl}`);
}
