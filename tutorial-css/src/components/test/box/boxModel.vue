<template>
  <div>
    <div class="wrapper">
      <div class="box" :style="boxStyle">
        盒子模型{{ isBorderBox ? 'border-box' : 'content-box' }}
      </div>
    </div>

    <button type="button" @click="toggleBoxSizing" class="btn btn-light">
      切换为{{ !isBorderBox ? 'border-box' : 'content-box' }}
    </button>
    <div class="slider-width">
      <span class="demonstration">Width</span>
      <el-slider v-model="boxWidth" show-input :max="1000" />
    </div>
    <div class="slider-padding">
      <span class="demonstration">Padding</span>
      <el-slider v-model="boxPadding" show-input :max="100" />
    </div>
    <div class="slider-padding">
      <span class="demonstration">Border</span>
      <el-slider v-model="boxBorderWidth" show-input :max="100" />
    </div>

    <p>当前盒子的offsetWidth:{{ boxOffsetWidth }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
const boxWidth = ref(50)
const boxPadding = ref(10)
const boxBorderWidth = ref(10)
const isBorderBox = ref(false)

const boxOffsetWidth = computed(() =>
  isBorderBox.value ? boxWidth.value : boxWidth.value + boxPadding.value + boxBorderWidth.value,
)
const boxStyle = computed(() => {
  const width: string = `${boxWidth.value}px`
  const padding: string = `${boxPadding.value}px`
  const border: string = `${boxBorderWidth.value}px solid #ccc`
  const boxSizing = isBorderBox.value ? 'border-box' : 'content-box'

  return {
    width,
    padding,
    border,
    'box-sizing': boxSizing,
  }
})
function toggleBoxSizing() {
  isBorderBox.value = !isBorderBox.value
}
</script>

<style scoped>
/* .wrapper {
  width: 1000px;
  height: 300px;
} */

.box {
  box-sizing: border-box;
  background-color: red;
}

.slider-width {
  max-width: 600px;
  display: flex;
  align-items: center;
}

.slider-padding {
  max-width: 600px;
  display: flex;
  align-items: center;
}
</style>
