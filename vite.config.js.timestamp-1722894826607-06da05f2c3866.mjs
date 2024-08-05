// vite.config.js
import { resolve } from "path";
import { defineConfig } from "file:///Z:/Dropbox/00-WF-C/3-WORK/A37/node_modules/vite/dist/node/index.js";
var vite_config_default = defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve("A37", "./index.html"),
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJaOlxcXFxEcm9wYm94XFxcXDAwLVdGLUNcXFxcMy1XT1JLXFxcXEEzN1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiWjpcXFxcRHJvcGJveFxcXFwwMC1XRi1DXFxcXDMtV09SS1xcXFxBMzdcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1o6L0Ryb3Bib3gvMDAtV0YtQy8zLVdPUksvQTM3L3ZpdGUuY29uZmlnLmpzXCI7Ly8gdml0ZS5jb25maWcuanNcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIGJ1aWxkOiB7XHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgaW5kZXg6IHJlc29sdmUoJ0EzNycsICcuL2luZGV4Lmh0bWwnKSxcclxuICAgICAgICBhYm91dDogcmVzb2x2ZSgnQTM3JywgJy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvYWJvdXQvYWJvdXQuaHRtbCcpLFxyXG4gICAgICAgIGNvbnRhY3Q6IHJlc29sdmUoJ0EzNycsICcuL3NyYy9jb21wb25lbnRzL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5odG1sJyksXHJcbiAgICAgICAgd29yazogcmVzb2x2ZSgnQTM3JywgJy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvd29yay93b3JrLmh0bWwnKSxcclxuICAgICAgICBwcm9qZWN0T25lOiByZXNvbHZlKCdBMzcnLCAnLi9zcmMvY29tcG9uZW50cy9wYWdlcy9wcm9qZWN0cy9wcm9qZWN0LTAxL3Byb2plY3QwMS5odG1sJyksXHJcbiAgICAgICAgcHJvamVjdFR3bzogcmVzb2x2ZSgnQTM3JywgJy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvcHJvamVjdHMvcHJvamVjdC0wMi9wcm9qZWN0MDIuaHRtbCcpLFxyXG4gICAgICAgIHByb2plY3RUaHJlZTogcmVzb2x2ZSgnQTM3JywgJy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvcHJvamVjdHMvcHJvamVjdC0wMy9wcm9qZWN0MDMuaHRtbCcpLFxyXG4gICAgICAgIHByb2plY3RGb3VyOiByZXNvbHZlKCdBMzcnLCAnLi9zcmMvY29tcG9uZW50cy9wYWdlcy9wcm9qZWN0cy9wcm9qZWN0LTA0L3Byb2plY3QwNC5odG1sJyksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsZUFBZTtBQUN4QixTQUFTLG9CQUFvQjtBQUU3QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsTUFDYixPQUFPO0FBQUEsUUFDTCxPQUFPLFFBQVEsT0FBTyxjQUFjO0FBQUEsUUFDcEMsT0FBTyxRQUFRLE9BQU8seUNBQXlDO0FBQUEsUUFDL0QsU0FBUyxRQUFRLE9BQU8sNkNBQTZDO0FBQUEsUUFDckUsTUFBTSxRQUFRLE9BQU8sdUNBQXVDO0FBQUEsUUFDNUQsWUFBWSxRQUFRLE9BQU8sMkRBQTJEO0FBQUEsUUFDdEYsWUFBWSxRQUFRLE9BQU8sMkRBQTJEO0FBQUEsUUFDdEYsY0FBYyxRQUFRLE9BQU8sMkRBQTJEO0FBQUEsUUFDeEYsYUFBYSxRQUFRLE9BQU8sMkRBQTJEO0FBQUEsTUFDekY7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
