import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Set up an alias for "@" to src directory
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
