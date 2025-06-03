<script setup lang="ts">
import MyTab from '@/components/my-tab/my-tab.vue'
import LineEchart from './components/echarts/LineEchart.vue';
</script>

<template>
  <MyTab />

  <router-view />
  <LineEchart></LineEchart>
</template>

<style scoped></style>
