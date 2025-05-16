import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~~/assets/css/main.css', '~~/assets/css/view-transition.css'],
  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@vueuse/nuxt',
  ],
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
  content: {
    preview: {
      dev: true,
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
