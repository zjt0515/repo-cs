import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import loadingDirective from '@/components/base/loading/loading.vue'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
