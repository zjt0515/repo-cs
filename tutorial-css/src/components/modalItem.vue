<template>
  <button @click="openModal">开启蒙版</button>
  <div class="modal" :class="modalCls">
    <div class="login">登录</div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
const showModal = ref(false)
const modalCls = computed(() => {
  return showModal.value ? '' : 'no-modal'
})
function openModal() {
  showModal.value = true
}
</script>

<style scoped>
.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.no-modal {
  display: none;
}

.login {
  position: absolute;
  width: 400px;
  height: 200px;

  left: 50%;
  top: 50%;
  margin-right: 200px;
  margin-bottom: 100px;
}
</style>
