import { defineStore } from 'pinia';
import type { MenuItem } from '@/components/types/SiderbarNav';

export const useMenusStore = defineStore('menus', {
  state: () => ({
    menus: [
      {
        id: 1,
        name: '首页',
        routeName: 'dashboard',
      },
      {
        id: 2,
        name: '用户管理',
        routeName: 'users',
      },
      {
        id: 3,
        name: '角色管理',
        routeName: 'roles',
      },
    ] as Array<MenuItem>,
  }),
});
