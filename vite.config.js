// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve('A37', 'index.html'),
        about: resolve('A37', './src/components/pages/about/about.html'),
        contact: resolve('A37', './src/components/pages/contact/contact.html'),
        work: resolve('A37', './src/components/pages/work/work.html'),
        projectOne: resolve('A37', './src/components/pages/projects/project-01/project01.html'),
        projectTwo: resolve('A37', './src/components/pages/projects/project-02/project02.html'),
        projectThree: resolve('A37', './src/components/pages/projects/project-03/project03.html'),
        projectFour: resolve('A37', './src/components/pages/projects/project-04/project04.html'),
      },
    },
  },
})