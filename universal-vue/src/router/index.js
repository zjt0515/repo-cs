import { createRouter, createWebHistory } from 'vue-router'
import { isMobileTerminal } from '@/utils/flexible'
import mobileRoutes from '@/router/modules/mobile-routes'
import pcRoutes from '@/router/modules/pc-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: isMobileTerminal.value ? mobileRoutes : pcRoutes
})

export default router
