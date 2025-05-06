<template>
  <div class="loading">
    <div class="loading-content">
      <img
        src="./loading.gif"
        width="24"
        height="24"
        alt=""
      />
      <p class="title">{{ title }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const title = ref('正在载入...')
// eslint-disable-next-line
const setTitle = function (pTitle) {
  title.value = pTitle
}
</script>

<style lang="scss" scoped>
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  .loading-content {
    text-align: center;
    .title {
      line-height: 20px;
      font-size: $font-size-small;
      color: $color-text-l;
    }
  }
}
</style>
