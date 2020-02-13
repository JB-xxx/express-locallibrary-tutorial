const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Home Jan Baars',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    search: true,
    lastUpdated: 'Last Updated',
    nav: [
      {
        text: 'Vuepress',
        link: '/doc-vuepress/',
      },
      {
        text: 'Inhoud',
        link: '/inhoud'
      },
      {
        text: 'Backend',
        link: '/backend/',
      },
      {
        text: 'Frontend',
        link: '/frontend/',
      }
    ],
    sidebar: {
        '/doc-vuepress/': [
          '',     /* /foo/ */
        ],
  
        // fallback
        '/': [
          '',        /* / */
        ]
    },    
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://v1.vuepress.vuejs.org',
        },
        {
          type: 'twitter',
          link: 'https://github.com/vuejs/vuepress',
        },
        {
          type: 'instagram',
          link: 'https://github.com/vuepressjs/awesome-vuepress',
        },        
        {
          type: 'facebook',
          link: 'https://www.facebook.com',
        },
        {
          type: 'web',
          link: 'https://example.vuepress-theme-blog.ulivz.com/2018/11/07/frontmatter-in-vuepress/',
        },       
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © 2018-present Vue.js',
          link: '',
        },
      ],
    },   
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
}
