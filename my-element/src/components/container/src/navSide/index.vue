<template>
  <el-menu class="aside-menu" default-active="2" :collapse="isCollapse">
    <el-menu-item index="1">
      <el-icon><el-icon-plus /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><el-icon-plus /></el-icon>
      <span>图标选择器</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
const props = defineProps<{
  isCollapse: boolean
}>()
</script>

<style scoped>
/* 没有收缩时固定宽度 */
.aside-menu:not(.el-menu--collapse) {
  width: 200px;
}
</style>