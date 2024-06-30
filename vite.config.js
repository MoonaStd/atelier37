// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve('A37', 'index.html'),
        about: resolve('A37', './src/components/pages/about/about.html'),
        contact: resolve('A37', './src/components/pages/contact/contact.html')
      },
    },
  },
})