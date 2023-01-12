const nav = [
  { text: '指南', link: '/guide/quickstart' },
  { text: '组件', link: '/components/gqp_notification/index' },
  { text: 'GitHub', link: 'https://github.com/GuQingPing/guqingping-ui', },
]
const sidebar = {
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
    {
      text: '待定',
      items: []
    },
    {
      text: '待定',
      items: []
    },
    {
      text: '待定',
      items: []
    },
    {
      text: '待定',
      items: []
    },
    {
      text: '待定',
      items: []
    },
  ]
}

module.exports = {
  base: "/guqingping-ui",
  title: 'GuQingPing UI',
  description: 'Just playing around.',
  lang: 'en-US',
  themeConfig: {
    // 展示搜索框
    algolia: {
      appKey: '',
      indexName: '',
      searchParameters: {
        faeFilters: ['tags: guide, api']
      }
    },
    nav,
    sidebar,
    lastUpdated: true
  }
}