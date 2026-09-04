import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // The 3D scene (Three.js) is intentionally code-split into its own
    // async chunk — it never blocks first paint, so a larger size is fine.
    chunkSizeWarningLimit: 900,
  },
})
