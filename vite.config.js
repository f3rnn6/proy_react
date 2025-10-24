import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.js",
    include: ["tests/**/*.spec.jsx"], // <--- agrega esto
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
    },
  },
});
