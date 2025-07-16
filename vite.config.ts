import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
      manifest: {
        name: 'Foqus Fitness',
        short_name: 'Foqus',
        description: 'Modern fitness app for Foqus - Entrenamiento semipersonalizado',
        theme_color: '#22c55e',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        orientation: 'portrait',
        categories: ['fitness', 'health', 'lifestyle'],
        lang: 'es',
        prefer_related_applications: false,
        icons: [
          {
            src: '/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          },
        ],
        screenshots: [
          {
            src: '/images/foqusverde.jpg',
            sizes: '1280x720',
            type: 'image/jpeg',
            form_factor: 'wide'
          }
        ]
      },
      devOptions: {
        enabled: true,
        type: 'module'
      }
    }),
  ],
})
