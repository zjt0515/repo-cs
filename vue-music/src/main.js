import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import loadingDirective from '@/components/base/loading/directive'
import lazyPlugin from 'vue3-lazy'
// 引入全局样式文件
import '@/assets/scss/index.scss'

const app = createApp(App)

app.directive('loading', loadingDirective)
app.use(lazyPlugin, {
  loading: require('@/assets/images/default.png')
})

app.use(store).use(router).mount('#app')
