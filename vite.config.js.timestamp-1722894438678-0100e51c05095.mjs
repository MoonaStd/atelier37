// vite.config.js
import { resolve } from "path";
import { defineConfig } from "file:///Z:/Dropbox/00-WF-C/3-WORK/A37/node_modules/vite/dist/node/index.js";
var vite_config_default = defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve("A37", "./index.js"),
        about: resolve("A37", "./src/components/pages/about/about.html"),
        contact: resolve("A37", "./src/components/pages/contact/contact.html"),
        work: resolve("A37", "./src/components/pages/work/work.html"),
        projectOne: resolve("A37", "./src/components/pages/projects/project-01/project01.html"),
        projectTwo: resolve("A37", "./src/components/pages/projects/project-02/project02.html"),
        projectThree: resolve("A37", "./src/components/pages/projects/project-03/project03.html"),
        projectFour: resolve("A37", "./src/components/pages/projects/project-04/project04.html")
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJaOlxcXFxEcm9wYm94XFxcXDAwLVdGLUNcXFxcMy1XT1JLXFxcXEEzN1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiWjpcXFxcRHJvcGJveFxcXFwwMC1XRi1DXFxcXDMtV09SS1xcXFxBMzdcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1o6L0Ryb3Bib3gvMDAtV0YtQy8zLVdPUksvQTM3L3ZpdGUuY29uZmlnLmpzXCI7Ly8gdml0ZS5jb25maWcuanNcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIGJ1aWxkOiB7XHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgaW5kZXg6IHJlc29sdmUoJ0EzNycsICcuL2luZGV4LmpzJyksXHJcbiAgICAgICAgYWJvdXQ6IHJlc29sdmUoJ0EzNycsICcuL3NyYy9jb21wb25lbnRzL3BhZ2VzL2Fib3V0L2Fib3V0Lmh0bWwnKSxcclxuICAgICAgICBjb250YWN0OiByZXNvbHZlKCdBMzcnLCAnLi9zcmMvY29tcG9uZW50cy9wYWdlcy9jb250YWN0L2NvbnRhY3QuaHRtbCcpLFxyXG4gICAgICAgIHdvcms6IHJlc29sdmUoJ0EzNycsICcuL3NyYy9jb21wb25lbnRzL3BhZ2VzL3dvcmsvd29yay5odG1sJyksXHJcbiAgICAgICAgcHJvamVjdE9uZTogcmVzb2x2ZSgnQTM3JywgJy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvcHJvamVjdHMvcHJvamVjdC0wMS9wcm9qZWN0MDEuaHRtbCcpLFxyXG4gICAgICAgIHByb2plY3RUd286IHJlc29sdmUoJ0EzNycsICcuL3NyYy9jb21wb25lbnRzL3BhZ2VzL3Byb2plY3RzL3Byb2plY3QtMDIvcHJvamVjdDAyLmh0bWwnKSxcclxuICAgICAgICBwcm9qZWN0VGhyZWU6IHJlc29sdmUoJ0EzNycsICcuL3NyYy9jb21wb25lbnRzL3BhZ2VzL3Byb2plY3RzL3Byb2plY3QtMDMvcHJvamVjdDAzLmh0bWwnKSxcclxuICAgICAgICBwcm9qZWN0Rm91cjogcmVzb2x2ZSgnQTM3JywgJy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvcHJvamVjdHMvcHJvamVjdC0wNC9wcm9qZWN0MDQuaHRtbCcpLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KSJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLGVBQWU7QUFDeEIsU0FBUyxvQkFBb0I7QUFFN0IsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsT0FBTztBQUFBLFFBQ0wsT0FBTyxRQUFRLE9BQU8sWUFBWTtBQUFBLFFBQ2xDLE9BQU8sUUFBUSxPQUFPLHlDQUF5QztBQUFBLFFBQy9ELFNBQVMsUUFBUSxPQUFPLDZDQUE2QztBQUFBLFFBQ3JFLE1BQU0sUUFBUSxPQUFPLHVDQUF1QztBQUFBLFFBQzVELFlBQVksUUFBUSxPQUFPLDJEQUEyRDtBQUFBLFFBQ3RGLFlBQVksUUFBUSxPQUFPLDJEQUEyRDtBQUFBLFFBQ3RGLGNBQWMsUUFBUSxPQUFPLDJEQUEyRDtBQUFBLFFBQ3hGLGFBQWEsUUFBUSxPQUFPLDJEQUEyRDtBQUFBLE1BQ3pGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
