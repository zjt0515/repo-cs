<template>
  <div class="p1">
    p1
    <div class="p2">p2</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.p1 {
  width: 100;
  height: 100px;
  background: red;
  position: absolute;
  left: 200px;
  bottom: 200px;
}

.p2 {
  width: 50px;
  height: 50px;
  background: blue;
  position: absolute;
}
body {
  height: 5000;
}
</style>
