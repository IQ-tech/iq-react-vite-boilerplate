import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['images/*'],
      manifest: {
        'name': 'IQ React + Vite Boilerlate',
        'short_name': 'React + Vite Boilerlate',
        'icons': [
          {
            'src': '/images/android-chrome-192x192.png',
            'sizes': '192x192',
            'type': 'image/png',
            'purpose': 'any maskable',
          },
          {
            'src': '/images/android-chrome-512x512.png',
            'sizes': '512x512',
            'type': 'image/png',
          },
        ],
        'background_color': '#242424',
        'description':
          'Boilerlate utilizando Vite, React, Typescript, Jest e Styled Components!',
        'display': 'fullscreen',
        'start_url': '/',
        'theme_color': '#242424',
      },
    }),
  ],
})
