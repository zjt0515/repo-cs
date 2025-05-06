<template>
  <div
    class="recommand"
    v-loading:[loadingText]="loading"
  >
    <div class="slider-wrapper">
      <div class="slider-content">
        <slider
          v-if="sliders.length"
          :sliders="sliders"
        ></slider>
      </div>
    </div>
  </div>
</template>
<script setup>
import { getRecommend } from '@/service/recommend.js'
import slider from '@/components/base/slider/slider.vue'
import { onMounted, ref } from 'vue'
const sliders = ref([])
const loadingText = ref('正在载入')
onMounted(async () => {
  const result = await getRecommend()
  sliders.value = result.sliders
})
</script>
<style lang="scss" scoped></style>
