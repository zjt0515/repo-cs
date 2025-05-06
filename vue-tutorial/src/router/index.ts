import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/item',
      component: () => import('@/views/item.vue'),
      children: [
        {
          path: ':id',
          component: () => import('@/views/item-detail.vue'),
        },
      ],
    },
  ],
})

export default router
