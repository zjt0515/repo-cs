import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: () => import('@/views/recommend.vue'),
    children: [
      {
        path: ':id',
        component: () => import('@/views/album.vue')
      }
    ]
  },
  {
    path: '/search',
    component: () => import('@/views/search.vue')
  },
  {
    path: '/singer',
    component: () => import('@/views/singer.vue'),
    children: [
      {
        path: ':id',
        component: () => import('@/views/singer-detail1.vue')
      }
    ]
  },
  {
    path: '/top-list',
    component: () => import('@/views/top-list.vue'),
    children: [
      {
        path: ':id',
        component: () => import('@/views/top-detail.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(), // 路由器工作模式
  routes
})

export default router
