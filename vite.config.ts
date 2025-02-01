import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig(({ mode }) => {
  // <-- Access mode here
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
    server: {
      host: true,
      allowedHosts: mode === "development" ? [".ngrok-free.app"] : [],
      // OR for Vite v4 and up:
      // allowedHosts: mode === 'development' ? true : [],
    },
  };
});
