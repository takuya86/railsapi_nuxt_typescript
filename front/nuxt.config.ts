export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  ssr: false,

  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
  ],
  plugins: [
  ],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
    '@nuxtjs/axios',
  ],
  axios: {
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        colors: {
          primary: "#1976D2",
          secondary: "#424242",
          accent: "#82B1FF",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107",
          danger: "#B71C1C",
          gold: "#C9B037",
          silver: "#D7D7D7",
          bronze: "#6A3805",
          tag: "#455A64",
          thumup: "#BF360C",
          chat: "#0091EA",
          notebook: "#263238",
          favorite: "#1B5E20",
          medal: "#C9B037",
        }
      }
    }
  },
  build: {
    extend (config, ctx) {
    }
  }
}
