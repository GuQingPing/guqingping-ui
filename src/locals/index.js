// index.js
import { createI18n } from 'vue-i18n/dist/vue-i18n.cjs.js'
import zh from './zh'
import en from './en'

const messages = {
  en,
  zh,
}
const default_lang = "zh"
const i18n = createI18n({
  locale: default_lang,
  fallbackLocale: default_lang,
  messages,
  legacy: false,// vite不支持传统模式
})

export default i18n