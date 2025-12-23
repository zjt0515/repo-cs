<template>
  <Icon v-if="icon" class="image" :icon="iconSrc" />
</template>

<script setup lang="ts">
import iconConfig, { type ConfigIcon } from '@/config/icon'
import { Icon } from '@iconify/vue'
import { computed } from 'vue'
const props = defineProps({
  icon: {
    type: String,
    default: '',
  },
  content: {
    type: String,
  },
  placement: {
    type: String,
  },
})

const iconSrc = computed(() => iconConfig[props.icon as ConfigIcon])
</script>

<style scoped></style>
