// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'src/components/pages/about/about.html'),
        contact: resolve(__dirname, 'src/components/pages/contact/contact.html'),
        work: resolve(__dirname, 'src/components/pages/work/work.html'),
        projectOne: resolve(__dirname, 'src/components/pages/projects/project-01/project01.html'),
        projectTwo: resolve(__dirname, 'src/components/pages/projects/project-02/project02.html'),
        projectThree: resolve(__dirname, 'src/components/pages/projects/project-03/project03.html'),
        projectFour: resolve(__dirname, 'src/components/pages/projects/project-04/project-04.html'),
      },
    },
  },
})