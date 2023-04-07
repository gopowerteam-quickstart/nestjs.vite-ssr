import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import ssr from 'vite-ssr/plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ssr(), vue(), jsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  ssr: {
    external: ['reflect-metadata'],
  },
})
