import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: '',
  server: {
    // this ensures that the browser opens upon server start
    open: true,
    // this sets a default port to 3000 
    host: 'localhost',
    port: 3000
  },
  test: {
    environment: 'jsdom',
    globals: true,
  }
})
