<template>
  <div>
    <!-- <router-view></router-view> -->
    <!-- <RouterView/> -->
    <div class="row">
      <div class="col-3">
        <!-- 侧边导航栏 -->
        <SiderbarNav :menus="menusStore.menus" />
      </div>
      <div class="col-9">
        <!-- 顶部导航栏 -->
        <HeaderbarNav />
        <!-- 面包蟹 -->
        <Bread />
        <!-- 内容 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderbarNav from '@/components/HeaderbarNav.vue';
import SiderbarNav from '@/components/SiderbarNav.vue';
import Bread from '@/components/Bread.vue';
import { useMenusStore } from '@/store/menus';

const menusStore = useMenusStore()


</script>

<style scoped></style>