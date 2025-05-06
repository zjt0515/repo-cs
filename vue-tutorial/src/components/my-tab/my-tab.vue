<template>
  <div class="tab">
    <router-link class="tab-item" v-for="tab in tabs" :to="tab.path" :key="tab.path">
      <span class="tab-text">
        {{ tab.name }}
      </span>
    </router-link>
  </div>
</template>

<!-- <script setup lang="ts">
import { ref } from 'vue'
const tabs = ref([
  {
    name: '推荐',
    path: '/recommand'
  }
])
</script> -->
<script setup lang="ts">
const tabs = [
  {
    name: 'item',
    path: '/item',
  },
  {
    name: '歌手',
    path: '/singer',
  },
  {
    name: '排行',
    path: '/top-list',
  },
  {
    name: '搜索',
    path: '/search',
  },
]
</script>
<style scoped></style>
