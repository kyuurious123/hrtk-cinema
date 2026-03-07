// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'

export default defineConfig({
  plugins: [
    // MDX는 react보다 먼저 위치해야 함
    mdx({
      providerImportSource: '@mdx-js/react', 
      remarkPlugins: [remarkGfm], // 표, 취소선 등 GFM 문법 지원
    }),
    react(),
  ],
})