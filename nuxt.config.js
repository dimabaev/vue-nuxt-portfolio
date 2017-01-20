module.exports = {
  build: {
    vendor: [
      // 'vue-material'
    ],
    postcss: [
      require('postcss-nested')(),
      require('autoprefixer')(),
      require('postcss-cssnext')(),
      require('postcss-import')
    ]
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Баев Дмитрий',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: "Портфолио" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'normalize.css',
    { src: '~assets/css/main.css', lang: 'css' }
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#caa463' }
}
