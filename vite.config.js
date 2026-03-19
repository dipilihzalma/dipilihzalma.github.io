import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    // Use the root path for GitHub Pages as we're deploying to the domain root (dipilihzalma.github.io)
    base: '/',
  }
})
