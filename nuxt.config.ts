// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-30',
  devtools: { enabled: true },
  ssr: false, // Try SPA mode for development
  
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],
  
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      htmlAttrs: {
        dir: 'rtl',
        lang: 'ar'
      }
    }
  },

  nitro: {
    prerender: {
      routes: ['/login', '/register', '/about', '/contact', '/courses', '/packages', '/tests', '/library', '/privacy', '/terms']
    }
  },

  router: {
    options: {
      hashMode: false
    }
  }
})