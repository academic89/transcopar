export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Transcopar',
    'Timing-Allow-Origin': '*',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      {
        'http-equiv': 'Content-Security-Policy',
        content:
          "default-src *; script-src 'self' 'unsafe-inline' 'unsafe-eval' *; style-src  'self' 'unsafe-inline' *; img-src 'self' data: *",
      },
      {
        name: 'description',
        content:
          'Diseñemos juntos la estrategia de innovación que realmente necesitas',
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'apple-mobile-web-app-title', content: 'Pixel dynamic' },
      { name: 'theme-color', content: '#4DBA87' },
      { name: 'msapplication-TileImage', content: '/icons/152.png' },
      { name: 'msapplication-TileColor', content: '#000000' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', href: '/icons/32.png' },
      { rel: 'icon', type: 'image/png', href: '/icons/32.png' },
      { rel: 'apple-touch-icon', href: '/icons/152.png' },
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#4DBA87',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/app.css',
    'vue-slick-carousel/dist/vue-slick-carousel.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: './plugins/vue-slick-carousel.js' }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/fontawesome',
      {
        component: 'fa',
        suffix: true,
        icons: {
          solid: [
            'faDolly',
            'faShippingFast',
            'faTruckMoving',
            'faMapMarkedAlt',
            'faMedal',
            'faEnvelopeOpenText',
          ],
        },
      },
    ],
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],
  pwa: {
    icon: {
      source: '/favicon.ico',
      purpose: 'maskable',
      fileName: 'favicon.ico',
    },
    manifest: {
      name: 'Transcopar',
      lang: 'es',
      useWebmanifestExtension: false,
      start_url: '/?standalone=true',
      theme_color: '#4DBA87',
    },
    workbox: {
      enabled: false,
    },
  },
  bootstrapVue: {
    components: [],
    componentPlugins: [
      'LayoutPlugin',
      'ButtonPlugin',
      'NavbarPlugin',
      'OverlayPlugin',
      'NavPlugin',
      'CarouselPlugin',
      'CollapsePlugin',
    ],
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    babel: {
      compact: true,
    },
  },
}
