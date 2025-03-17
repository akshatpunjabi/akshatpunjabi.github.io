import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/akshatpunjabi.github.io/", // Set this to your repository name
});
