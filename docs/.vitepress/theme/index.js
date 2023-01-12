import DefaultTheme from "vitepress/theme"    //不导入此项，白屏 (这是vitepress的默认样式)
import './custom.css'                         //导入自定义样式

import guqingping_ui from '../../../packages' //导入项目当前组件库

// import guqingping_ui from 'guqingping-ui'     //包 导入组件
// import "guqingping-ui/css"                    //包 导入(全部)样式

export default ({
  ...DefaultTheme,                            //必须
  enhanceApp: ({ app }) => {                  //初始化函数
    console.log("enhanceApp()", app)          //日志
    app.use(guqingping_ui)                    //注册UI库
  }
})
