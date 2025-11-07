import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: "/",
  server: {
    allowedHosts: ['stocksense.me', 'backend.stocksense.me', 'api.stocksense.me'],
    port: 3000,
  },
});
