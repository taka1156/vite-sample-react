import path from 'path';
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/vite-sample-react/' : './',
  resolve: {
    // @/ によるimportをできるようにすåる。
    alias: {
      '@': path.resolve('__dirname', '/src')
    }
  },
  build: {
    outDir: 'docs'
  },
  plugins: [reactRefresh()]
})
