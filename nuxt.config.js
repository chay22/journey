let routerBase = {}
let publicRoot = '/'
let siteDomain = ''
let mode = 'spa'

if (process.env.DEPLOY_ENV === 'NETLIFY') {
  siteDomain = 'https://chay-timeline.netlify.com'
  mode = 'universal'
} else if (process.DEPLOY_ENV === 'GH_PAGES') {
  siteDomain = 'https://chay22.github.io'
  publicRoot = '/journey/'
  routerBase = {
    router: {
      base: '/journey/'
    }
  }
}

if (process.env.NODE_ENV === 'production') {
  mode = 'universal'
}

module.exports = {
  mode,
  ...routerBase,
  env: {
    baseRootUrl: publicRoot,
    siteDomain
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'Chay',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '#ffffff' },
      {
        hid: 'description',
        name: 'description',
        content: 'A little journey of Chay'
      },
      //
      { itemprop: 'name', content: 'Chay', hid: 'itemprop:name' },
      {
        itemprop: 'description',
        content: 'A little journey of Chay',
        hid: 'itemprop:description'
      },
      {
        itemprop: 'image',
        content: `${siteDomain + publicRoot}logo2.png`,
        hid: 'itemprop:image'
      },
      //
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Chay - A little journey of mine'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'A little journey of Chay'
      },
      { name: 'twitter:site', content: '@chyir' },
      { name: 'twitter:creator', content: '@chyir' },
      {
        hid: 'twitter:image:src',
        name: 'twitter:image:src',
        content: `${siteDomain + publicRoot}logo2.png`
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Chay - A little journey of mine'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'A little journey of Chay'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: `${siteDomain + publicRoot}logo2.png`
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: '/'
      },
      { name: 'og:site_name', content: 'Chay - A little journey of mine' },
      { name: 'og:type', content: 'Article' },
      {
        hid: 'article:section',
        name: 'article:section',
        content: 'Technology'
      },
      {
        hid: 'article:published_time',
        name: 'article:published_time',
        content: '2019-08-08T16:00:57.185Z'
      },
      {
        hid: 'article:modified_time',
        name: 'article:modified_time',
        content: new Date().toISOString()
      },
      { name: 'article:author', content: 'Cahyadi Nugraha' },
      {
        hid: 'article:tag',
        name: 'article:tag',
        content: 'web development, journey, laravel, programming, javascript'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: `${siteDomain + publicRoot}favicon.ico`
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: `${siteDomain + publicRoot}favicon-32x32.png`
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: `${siteDomain + publicRoot}favicon-16x16.png`
      },
      { rel: 'manifest', href: `${siteDomain + publicRoot}site.webmanifest` },
      {
        rel: 'mask-icon',
        color: '#3759e2',
        href: `${siteDomain + publicRoot}safari-pinned-tab.svg`
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/feature-detect', mode: 'client' },
    { src: '~/plugins/velocity', mode: 'client' },
    { src: '~/plugins/cta-states', mode: 'client' },
    { src: '~/plugins/seo' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@bazzite/nuxt-netlify'],
  /*
   ** Build configuration
   */
  build: {
    publicPath: '/public/',
    extractCSS: true,
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  netlify: {
    //
  }
}
