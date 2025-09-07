import FormView from '@/views/html/formView.vue'
import LayoutView from '@/views/LayoutView.vue'
import MapView from '@/views//valorant/mapView.vue'
import LineupView from '@/views/valorant/lineupView.vue'
import type { RouteRecordRaw } from 'vue-router'
import TestView from '@/views/TestView.vue'
import TestEm from '@/components/test/TestEm.vue'

export const routes: RouteRecordRaw[] = [
  {
    name: 'lineup',
    path: '/lineup',
    component: LineupView,
    meta: {
      name: '道具点位',
    },
  },
  {
    name: 'lineupMap',
    path: '/lineupMap',
    component: MapView,
    meta: {
      name: '地图阵容',
    },
  },
  {
    name: 'shot',
    path: '/shot',
    component: MapView,
    meta: {
      name: '枪法训练',
    },
  },
  {
    name: 'register',
    path: '/register',
    component: FormView,
    meta: {
      name: '注册',
    },
  },
  {
    name: 'login',
    path: '/login',
    component: FormView,
    meta: {
      name: '登录',
    },
  },
  {
    name: 'layout',
    path: '/layout',
    component: LayoutView,
    meta: {
      name: '路由',
    },
  },
  {
    name: 'test',
    path: '/test',
    component: TestView,
    meta: {
      name: '测试',
    },
    children: [
      {
        name: 'testEm',
        path: '/testem',
        component: TestEm,
        meta: {
          name: '测试1',
        },
      },
    ],
  },
]
