<template>
  <el-container>
    <!-- 宽度auto -->
    <el-aside width="auto">
      <nav-side :is-collapse="isCollapse" />
    </el-aside>
    <el-container>
      <el-header>
        <nav-header v-model:is-collapse="isCollapse"></nav-header>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavSide from './navSide/index.vue';
import NavHeader from './navHeader/index.vue'
const isCollapse = ref(false)

</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
}
</style>