import type { App } from "vue";
import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const routes = [  
  {
    path: '/login',
    component: () => import('@/views/login/login.vue'),
  },
  {
    path: '/reg',
    component: () => import('@/views/login/reg.vue'),
  }
] as RouteRecordRaw[];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export function setupRouter(app: App<Element>){
  app.use(router)
}