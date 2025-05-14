<template>
  <div
    class="recommand"
    v-loading="loading"
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
const loading = ref(true)
onMounted(async () => {
  const result = await getRecommend()
  sliders.value = result.sliders
  loading.value = false
})
</script>
<style lang="scss" scoped></style>
