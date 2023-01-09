const nav = [
  { text: '指南', link: '/guide/' },
  { text: '组件', link: '/components/notification/index' },
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
      text: '通知与提示',
      items: [
        { text: '通知', link: '/components/notification/index' }
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

const markdown = {
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
    markdown,
    lastUpdated: true
  }
}