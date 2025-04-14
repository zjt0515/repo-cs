import type { App } from 'vue';
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login/login.vue'),
  },
  {
    path: '/reg',
    component: () => import('@/views/login/reg.vue'),
  },
  // 主页
  {
    path: '/home',
    component: () => import('@/layouts/default.vue'),
    redirect: '/home/dashboard',
    children: [
      {
        name: 'dashboard',
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
      },
      {
        name: 'users',
        path: 'users',
        component: () => import('@/views/users/index.vue'),
      },
      {
        name: 'roles',
        path: 'roles',
        component: () => import('@/views/roles/index.vue'),
      },
    ],
  },
] as RouteRecordRaw[];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}
