import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useREM } from './utils/flexible'

import App from './App.vue'
import router from './router'
import mlibs from '@/libs'

useREM()
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(mlibs)
app.mount('#app')
