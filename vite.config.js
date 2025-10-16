import { defineConfig } from 'vite'
import tailwind from '@tailwindcss/vite'   // ✅ import name matches

export default defineConfig({
  plugins: [
    tailwind(),
  ],
})
