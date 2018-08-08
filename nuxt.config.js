module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'lechoppegastronomique',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/scss/customized-bulma.scss', lang: 'scss' }
  ],
  modules: [
    // 'nuxt-fontawesome',
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/fontawesome-free-brands',
          icons: ['faInstagram', 'faFacebook']
        },
        {
          set: '@fortawesome/fontawesome-free-solid',
          icons: [
            'faHome',
            'faAddressCard',
            'faAngleDown',
            'faCopyright',
            'faFlag',
            'faMapMarkerAlt',
            'faEnvelope',
            'faInfoCircle',
            'faPhone'
          ]
        },
      ]
    }],
    ['nuxt-i18n', {
      locales: [{code: 'en', iso: 'en-US'}, {code: 'fr', iso: 'fr-FR'}],
      defaultLocale: 'fr',
      parsePages: false,   // Disable acorn parsing
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected'
      },
      pages: {
        about: {
          en: '/about-us',
          fr: '/a-propos',
        },
        contact: {
          en: '/contact-us',
          fr: '/contactez-nous',
        }
      },
      vueI18n: {
        fallbackLocale: 'fr',
        messages: {
          en: require('./assets/i18n/en.json'),
          fr: require('./assets/i18n/fr.json')
        }
      }
    }],
    'nuxt-sass-resources-loader'
  ],
  sassResources: [
    '~/assets/scss/variables.scss',
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#020202' },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false
        }
      }
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.resolve.alias['@fortawesome/fontawesome-free-brands$'] = '@fortawesome/fontawesome-free-brands/shakable.es.js';
      config.resolve.alias['@fortawesome/fontawesome-free-solid$'] = '@fortawesome/fontawesome-free-solid/shakable.es.js';
    }
  }
};
