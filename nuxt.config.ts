// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/tailwind.css'],

  modules: [
    'shadcn-nuxt',
    '@nuxtjs/tailwindcss'
  ],

  // Vite/PostCSS config removed. Use postcss.config.js instead.

  shadcn: {
    prefix: '',
    componentDir: './app/components/ui'
  },

  app: {
    head: {
      htmlAttrs: {
        dir: 'rtl',
        lang: 'ar'
      }
    }
  }
})
