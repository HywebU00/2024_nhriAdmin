import { fileURLToPath, URL } from "url";

import { defineConfig, PluginOption } from "vite";
//HMR
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

//full reload
import react from '@vitejs/plugin-react'

//full reload,不使用則啟用HMR機制
const fullReloadAlways: PluginOption = {
  name: 'full-reload-always',
  handleHotUpdate({ server }) {
    server.ws.send({ type: "full-reload" })
    return []
  },
} as PluginOption

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [vue(), vueJsx()], //HMR
  plugins: [vue(), vueJsx(), react(), fullReloadAlways], //full reload
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ['vue-demi']
  },
  server: {
    proxy: {

      // '/api': 'https://nhri.hywebcloud20.com/',
      "/devTest": {
        target: "https://nhri.hywebcloud20.com/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/devTest/, ""),
        // },
        // "/api": {
        //   target: "https://nhri.hywebcloud20.com/", // 後端 API 進入點
        //   changeOrigin: true,
        //   // secure: false,
        //   ws: true,
        //   rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 2048,
  },
    // 静态资源基础路径 base: './' || '',
  base: "./",
    // css的處理
  css: {
    devSourcemap: true,
  },
});
