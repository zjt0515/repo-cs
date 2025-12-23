<template>
  <el-select v-model="" value-key="" placeholder="" clearable filterable @change="">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
    </el-option>
  </el-select>
</template>

<script setup lang="ts">
import type { ViewPort } from '@/types/edit'
import { ref } from 'vue'

const props = defineProps({
  options: {
    type: Array,
    default: () => [
      {
        value: 'desktop',
        label: '桌面端',
      },
      {
        value: 'mobile',
        label: '移动端',
      },
    ],
  },
  width: {
    type: Number,
    default: 90,
  },
})

const viewport = ref<ViewPort>('desktop')
</script>
<style scoped></style>
