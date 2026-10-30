import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base './' makes every asset path relative, so the built site works on
// https://<user>.github.io/ AND https://<user>.github.io/<repo>/ without edits.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
