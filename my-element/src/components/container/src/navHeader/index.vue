<template>
  <div class="header">
    <span class="toggle" @click="toggleSide">
      <el-icon-expand></el-icon-expand>
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ isCollapse: boolean }>()

let emits = defineEmits(['update:isCollapse'])
const toggleSide = () => {
  // 需要修改父组件的数据
  emits('update:isCollapse', !props.isCollapse)
}
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  padding: 0 20px;
  // 居中
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.toggle {
  cursor: pointer;
}
</style>