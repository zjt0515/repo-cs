<template>
  <div>
    <ul class="nav flex-column">
  <!-- <li class="nav-item">
    <router-link to="/home/dashboard" class="nav-link active" aria-current="page">Active</router-link>
  </li> -->
  <li v-for="item in menusStore" class="nav-item">
    <router-link to=""" class="nav-link" >{{ item. }}</router-link>
  </li>

</ul>
  </div>
</template>

<script setup lang="ts">
import { useMenusStore } from '@/store/menus';
import type { MenuItem } from './types/SiderbarNav';
const props = defineProps<Array<MenuItem>>()
</script>

<style scoped>

</style>