import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, // Increase the limit to 1000 KiB
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor dependencies into separate chunks
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          ui: [
            "@radix-ui/react-dialog",
            "@radix-ui/react-select",
            "@radix-ui/react-popover",
          ],
          redux: ["@reduxjs/toolkit", "react-redux"],
          utils: ["clsx", "tailwind-merge", "date-fns"],
        },
      },
    },
  },
});
