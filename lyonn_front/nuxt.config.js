
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    // title: 'Lyonn Agency | Publicidad, diseño de logotipos, páginas web' || '',
    titleTemplate: 'Agencia Lyonn | %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: 'Somos una agencia de publicidad en Morelia que ofrece diseño gráfico, páginas web, tiendas en línea, diseño de logotipos y producción audiovisual.'|| '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@assets/styles/main.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/validator.js',
    '~/plugins/lazy_load.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  // Dev
  // server: {
  //   port: 30740,
  //   // host:'192.168.100.4'
  // },

  // PRODUCTION
  server: {
    port: 19124, // hay que cambiarlo
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    // baseURL: ' http://127.0.0.1:8000/',
    baseURL: 'https://api.lyonn.co/',
    // credentials: true,
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // Add exception for vee validate
    transpile: [
      "vee-validate/dist/rules"
    ],
    extend(config, ctx) {
    }
  }
}
