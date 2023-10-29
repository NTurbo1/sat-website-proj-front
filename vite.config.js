import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
    base: "/sat-website-proj-front",
    build: {
        outDir: 'dist'
    },
    plugins: [react()] // add mkcert() to enable https://localhost:5173
})
