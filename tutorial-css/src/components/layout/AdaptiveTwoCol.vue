<template>
  <div class="left">
    <slot name="left"></slot>
  </div>

  <div class="right">
    <slot name="right"></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.left {
  width: 200px;
  float: left;
  height: 100vh;
}

.right {
  width: calc(100% - 200px);
  height: 100vh;
  overflow: hidden;
}
</style>
