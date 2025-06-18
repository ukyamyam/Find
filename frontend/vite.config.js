import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    root: './src', //  追加する
    plugins: [react()],
    build: {
      outDir: '../dist', // dist は frontend 直下に出す
      emptyOutDir: true
    }
  })
  

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: 'dist'
//   }
// })

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   root: '.', // プロジェクトルートを明示
//   plugins: [react()],
//   build: {
//     outDir: 'dist',
//     rollupOptions: {
//       input: 'public/index.html', // ← ここが重要！！
//     }
//   }
// })
