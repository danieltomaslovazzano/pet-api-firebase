import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 5001,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('⚠️ PROXY ERROR:', err);
          });
          
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            const { method, url, headers } = req;
            console.log(`🚀 OUTGOING REQUEST: ${method} ${url}`);
            console.log('→ Headers:', JSON.stringify(headers, null, 2));
            
            if ((req as any).body) {
              console.log('→ Body:', (req as any).body);
            }
          });
          
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            const { statusCode, statusMessage, headers } = proxyRes;
            console.log(`📥 INCOMING RESPONSE: ${statusCode} ${statusMessage} for ${req.method} ${req.url}`);
            console.log('← Headers:', JSON.stringify(headers, null, 2));
          });
        },
      }
    }
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
