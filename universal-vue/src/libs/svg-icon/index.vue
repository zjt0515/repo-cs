<template>
  <div>
    <svg aria-hidden="trues"></svg>
    <use :xlink-href="symbolId" :class="fillClass" :fill />
  </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String
  },
  fillClass: {
    type: String
  }
})

const symbolId = computed(() => `#icon-${props.name}`)
</script>

<style lang="scss" scoped></style>