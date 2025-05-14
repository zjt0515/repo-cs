<template>
  <div>
    <div class="box" :class="boxStyle">盒子模型</div>
    <span class="demonstration">Width</span>
    <el-slider v-model="boxWidth" />
    <button type="button" class="btn btn-light">切换</button>
    <p>当前盒子的offsetWidth:{{ boxOffsetWidth }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
const boxWidth = ref(50)
const boxPadding = ref(0)

const boxOffsetWidth = computed(() => boxWidth.value + boxPadding.value)
const boxStyle = computed(() => {
  const width: string = `${boxWidth.value}px`
  const padding: string = `${boxPadding.value}px`

  return {
    width,
    padding
  }
})
</script>

<style scoped>
.box {
  background-color: red;
}
</style>
