
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // cssInjectedByJsPlugin(),
  ],
  build: {
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        },
      }
    },
    lib: {
      entry: "./packages/index.js",
      name: "guqingping-ui",
    },
  },
})
