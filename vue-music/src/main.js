import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import loadingDirective from '@/components/base/loading/directive'
import noResultDirective from '@/components/base/no-result/directive'
import lazyPlugin from 'vue3-lazy'
// 引入全局样式文件
import '@/assets/scss/index.scss'

const app = createApp(App)
// 自定义指令注册
app.directive('loading', loadingDirective)
app.directive('no-result', noResultDirective)

app.use(lazyPlugin, {
  loading: require('@/assets/images/default.png')
})

app.use(store).use(router).mount('#app')
