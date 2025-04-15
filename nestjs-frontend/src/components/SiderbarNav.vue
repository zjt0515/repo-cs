<template>
  <div>
    <ul class="nav flex-column">
      <!-- <li class="nav-item">
    <router-link to="/home/dashboard" class="nav-link active" aria-current="page">Active</router-link>
  </li> -->
      <li v-for="item in props.menus" class="nav-item" :key="item.id">
        <router-link :to="{ name: item.routeName }" class=" nav-link">{{ item.name }}</router-link>
      </li>


    </ul>
  </div>
</template>

<script setup lang="ts">
import type { MenuItem } from './types/SiderbarNav';
const props = defineProps<{
  menus: MenuItem[];
}>()
</script>

<style scoped></style>