<template>
  <div>
    <!-- <router-view></router-view> -->
    <!-- <RouterView/> -->
    <div class="row">
      <div class="col-3">
        <!-- 侧边导航栏 -->
        <SiderbarNav />
      </div>
      <div class="col-9">
        <!-- 顶部导航栏 -->
        <HeaderbarNav />
        <!-- 内容 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderbarNav from '@/components/HeaderbarNav.vue';
import SiderbarNav from '@/components/SiderbarNav.vue';


</script>

<style scoped></style>