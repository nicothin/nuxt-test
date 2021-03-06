const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? '/nuxt-test/' : '/';

module.exports = {
  css: [
    'assets/main.css'
  ],
  router: {
    base: routerBase,
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
  },
  head: {
    title: 'nuxt-test',
    titleTemplate: '%s - Название проекта',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Потестирую ка я NUXT' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },
  modules: [
    '@nuxtjs/markdownit'
  ],
  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  // markdownit: {
  //   preset: 'default',
  //   linkify: true,
  //   breaks: true,
  //   use: [
  //     ['markdown-it-container', containerName],
  //     'markdown-it-attrs'
  //   ]
  // },
  loading: { color: '#3B8070' },
  build: {
    extend (config, { isDev, isClient }) {
      // Запуск ESLint по сохранению
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
}

