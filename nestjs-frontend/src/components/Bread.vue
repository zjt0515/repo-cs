<template>
  <div>
    <!-- 面包蟹 -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" aria-current="page">
          <RouterLink to="/home/dashboard">首页</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">{{ currentMenu }}</li>
      </ol>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useMenusStore } from '@/store/menus';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const menusStore = useMenusStore()
console.log(route.name)
const currentMenu = computed(() =>
  menusStore.menus.find((item) => item.routeName === route.name)?.name
)
console.log(currentMenu.value)
console.log(menusStore.menus)
</script>

<style scoped></style>