export default {
  head: {
    title: 'My Project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: [],

  components: true,

  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    lazy: true,
    vueI18nLoader: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
    },
  },

  buildModules: [],

  modules: ['@nuxtjs/svg', 'nuxt-i18n', '@nuxtjs/axios'],

  axios: {
    baseURL: '/',
  },

  serverMiddleware: [{ path: '/api', handler: '~/api' }],

  build: {},
}
