
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'//gzip


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteCompression(),
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
    terserOptions: {
      compress: {
        drop_console: true,//清除控制台输出
        drop_debugger: true//清除debugger
      }
    }
  },
})
