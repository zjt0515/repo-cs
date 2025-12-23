import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/edit',
    },
    {
      path: '/edit',
      component: () => import('@/pages/edit.vue'),
    },
  ],
})

export default router
