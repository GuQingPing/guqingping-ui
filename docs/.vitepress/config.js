module.exports = {
  base: "/guqingping-ui",
  locales: {
    '/': {
      lang: "zh-CN",
      title: "GuQingPing UI",
      description: "一个响应式 可定制的Vue3组件库",
    },
    '/en/': {
      lang: "en-US",
      title: "GuQingPing UI",
      description: "A responsive and customizable Vue3 component library",
    },
  },
  themeConfig: {
    // 展示搜索框
    algolia: {
      appKey: '',
      indexName: '',
      searchParameters: {
        faeFilters: ['tags: guide, api']
      }
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/GuQingPing/guqingping-ui" },
    ],
    localeLinks: {
      items: [
        { text: "简体中文", link: "/" },
        { text: "English", link: "/en/" }
      ]
    },
    locales: {
      "/": getChineseThemeConfig(),
      "/en/": getEnglishThemeConfig()
    },
  },
}

function getChineseThemeConfig() {
  return {
    nav: [
      { text: '指南', link: '/guide/quickstart' },
      { text: '组件', link: '/components/gqp_notification/index' },
    ],
    sidebar: {
      '/guide': [
        {
          text: '指南',
          items: [
            { text: '快速开始', link: '/guide/quickstart' },
          ]
        }
      ],
      '/components': [
        {
          text: '组件列表',
          items: [
            { text: 'gqp_nav 导航栏', link: '/components/gqp_nav/index' },
            { text: 'gqp_notification 通知', link: '/components/gqp_notification/index' },
          ]
        },
      ]
    }
  }
}
function getEnglishThemeConfig() {
  return {
    nav: [
      { text: 'Guide', link: '/en/guide/quickstart' },
      { text: 'Components', link: '/en/components/gqp_notification/index' },
    ],
    sidebar: {
      '/en/guide': [
        {
          text: 'Guide',
          items: [
            { text: 'Quickstart', link: '/en/guide/quickstart' },
          ]
        }
      ],
      '/en/components': [
        {
          text: 'Components List',
          items: [
            { text: 'gqp_nav', link: '/en/components/gqp_nav/index' },
            { text: 'gqp_notification', link: '/en/components/gqp_notification/index' },
          ]
        },
      ]
    }
  }
}