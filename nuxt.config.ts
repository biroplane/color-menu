import tailwindcss from '@tailwindcss/vite'
import { repositoryName } from './slicemachine.config.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~~/assets/css/main.css', '~~/assets/css/view-transition.css'],
  modules: ['@nuxt/fonts', '@nuxt/icon', '@vueuse/nuxt', '@nuxtjs/prismic'],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      ],
    },
  },
  fonts: {
    provider: 'google',
    families: [
      { name: 'Bebas Neue', provider: 'google' },
      { name: 'Inter', provider: 'google' },
      { name: 'Six Cap', provider: 'google' },
    ],

  },

  experimental: {
    viewTransition: true,
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  prismic: {
    endpoint: repositoryName,
  },
})
