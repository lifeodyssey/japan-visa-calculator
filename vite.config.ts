import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  // Ensure base path is correctly set for GitHub Pages
  base: '/japan-visa-calculator/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Ensure proper MIME type handling
    rollupOptions: {
      output: {
        format: 'es',
      },
    },
  },
  preview: {
    // Configure preview server
    port: 4173,
    strictPort: true,
    host: true,
  },
}));
