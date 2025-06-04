import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/react-food-cart/', // 👈 this is the fix!
  plugins: [react()],
})
