export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'WJ',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/index.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    {
      path: '~/components', // will get any components nested in let's say /components/test too
      pathPrefix: false,
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://auth.nuxtjs.org/
    '@nuxtjs/auth-next'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  /////////////////// customizing (New Configs) ////////////////////
  // customize styleResource module
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token.accessToken',
          // global: true,
          // required: true,
          // type: 'Bearer'
        },
        user: {}, // information of user after loged in
        endpoints: {
          login: { url: 'https://challenge.webjar.ir/auth/login', method: 'post' },
          user: false
        }
      }
    },
    // https://auth.nuxtjs.org/api/options/
    redirect:{
      login: '/auth/login',
      logout: '/',
      home: '/'
    },
  },

  styleResources: {
    scss: '~/assets/styles/_global_variables.scss',
  },

  // customize bootstrapVue module
  bootstrapVue: {
    icons: true,
  },
};
