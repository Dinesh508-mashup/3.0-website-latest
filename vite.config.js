import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Dev-only middleware that mounts api/contact.js at POST /api/contact.
 * Provides the Vercel-style res.status()/res.json() shims our handler expects.
 * Production: not used — your AWS server is responsible for routing /api/*.
 */
function devApiPlugin() {
  return {
    name: 'dev-api',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res) => {
        res.status = (code) => {
          res.statusCode = code;
          return res;
        };
        res.json = (obj) => {
          if (!res.getHeader('Content-Type')) {
            res.setHeader('Content-Type', 'application/json');
          }
          res.end(JSON.stringify(obj));
          return res;
        };

        try {
          const mod = await server.ssrLoadModule(path.resolve(__dirname, 'api/contact.js'));
          await mod.default(req, res);
        } catch (err) {
          console.error('[dev-api] /api/contact error', err);
          if (!res.writableEnded) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ ok: false, error: 'Internal server error (dev)' }));
          }
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  // Surface ALL .env values (not just VITE_*) on process.env so the dev API
  // middleware can read DATABASE_URL, SES_*, etc.
  const env = loadEnv(mode, process.cwd(), '');
  for (const [k, v] of Object.entries(env)) {
    if (!(k in process.env)) process.env[k] = v;
  }

  return {
    plugins: [react(), devApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    build: {
      target: 'es2020',
      cssCodeSplit: true,
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes('node_modules')) return undefined;
            if (id.includes('react-router') || id.includes('@remix-run')) return 'router';
            if (id.includes('react-dom') || id.includes('/react/') || id.includes('scheduler'))
              return 'react-vendor';
            return undefined;
          },
        },
      },
    },
    server: {
      port: 5173,
      open: true,
    },
    preview: {
      port: 4173,
    },
  };
});
