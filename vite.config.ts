import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    // Cargamos solo envs públicas (VITE_) para la config
    const env = loadEnv(mode, process.cwd(), 'VITE_');
    
    // Base path para GitHub Pages
    // En GitHub Actions, usar el nombre del repositorio
    // En desarrollo local, usar "/"
    const getBasePath = () => {
        // Si está en GitHub Actions
        if (process.env.GITHUB_REPOSITORY) {
            const repoName = process.env.GITHUB_REPOSITORY.split('/')[1];
            return `/${repoName}/`;
        }
        // Si hay una variable de entorno personalizada
        if (env.VITE_BASE_PATH) {
            const base = env.VITE_BASE_PATH.trim();
            if (!base) return '/';
            return base.endsWith('/') ? base : `${base}/`;
        }
        // Por defecto, raíz (para desarrollo local)
        return '/';
    };
    
    return {
      base: getBasePath(),
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
        }
      },
      build: {
        outDir: 'dist',
        assetsDir: 'assets',
        rollupOptions: {
          output: {
            manualChunks: {
              react: ['react', 'react-dom'],
              supabase: ['@supabase/supabase-js'],
              emailjs: ['@emailjs/browser'],
            },
          },
        },
      }
    };
});
