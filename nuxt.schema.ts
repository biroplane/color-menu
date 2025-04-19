import { field, group } from '@nuxt/content/preview'

export default defineNuxtSchema({
  appConfig: {
    config: group({
      title: 'Configurazione',
      description: 'Personalizza il tuo sito',
      icon: 'i-mdi-gear',
      fields: {
        title: field({
          type: 'string',
          title: 'Titolo del tuo sito',
          default: 'Super Banana',
        }),
        description: field({
          type: 'string',
          title: 'Pay off',
          default: 'Peel the vibe',
        }),
        logo: field({
          type: 'media',
          title: 'Logo',
          default: '/logo.png',
        }),
        primaryColor: field({
          type: 'string',
          title: 'Colore primario',
          default: '#FFDA34',
        }),
        secondaryColor: field({
          type: 'string',
          title: 'Colore secondario',
          default: '#522F2D',
        }),
        socialLinks: field({
          type: 'object',
          title: 'Link social',

        }),
      },
    }),
  },
})
