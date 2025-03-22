// nuxt.config.js
export default defineNuxtConfig({
  // Enable SSR
  ssr: true,

  // Meta data
  app: {
      head: {
          title: 'Currency Converter',
          meta: [
              { charset: 'utf-8' },
              { name: 'viewport', content: 'width=device-width, initial-scale=1' },
              { hid: 'description', name: 'description', content: 'Simple Currency Converter App' }
          ],
          link: [
              { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
          ]
      }
  },

  // CSS
  css: ['~/assets/css/main.css'],

  // Modules
  modules: [
      '@nuxtjs/tailwindcss',
      '@pinia/nuxt',
  ],

  // Runtime config for environment variables
  runtimeConfig: {
      public: {
          apiBaseUrl: process.env.API_BASE_URL || 'https://api.currencybeacon.com/v1',
          apiKey: process.env.CURRENCY_API_KEY || '',
      }
  },

  // Tailwind CSS module options
  tailwindcss: {
      cssPath: '~/assets/css/main.css',
      configPath: 'tailwind.config.js',
      exposeConfig: false,
      injectPosition: 0,
      viewer: false,
  },

  compatibilityDate: '2025-03-22',
})