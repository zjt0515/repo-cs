import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

function pathResolve(dir: string){
  return resolve(process.cwd(), '.', dir)
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': pathResolve('src'),
      '~bootstrap': 'bootstrap',
    }
  },
  server: {
    port: 4000,
    // 处理跨域问题
    proxy: {
      '/api': {
        target: "http://127.0.0.1:3000",
      }
    }
  },
  // css处理器
  css: {
    preprocessorOptions:{
      scss:{
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  }
})
