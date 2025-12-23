<template>
  <div>
    <h1 class="text-[#50d71e]">标题</h1>
    <img :src="props.src" class="image" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  src: String,
})
</script>

<style lang="scss" scoped>
.image {
  width: 200px;
  height: 300px;
  margin: 0 auto;
}
</style>
