import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  build: {
    // divide o bundle em chunks menores — carrega só o que precisa
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['framer-motion'],
        },
      },
    },
    // avisa se algum chunk passar de 500kb
    chunkSizeWarningLimit: 500,
  },
})