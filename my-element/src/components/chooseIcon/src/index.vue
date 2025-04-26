<template>
  <div>
    <el-button type="primary" size="default" @click="handleClick">选择图标
      <slot></slot>
    </el-button>
    <el-dialog class="m--choose-icon-dialog-body-height" :title="title" v-model="dialogVisible">
      <div class="container">
        <div class="item" v-for="(item, index) in Object.keys(ELIcons)" :key="index" @click="clickItem(item)">
          <!-- 动态组件 -->
          <div class="icon">
            <component :is="`el-icon-${toLine(item)}`"></component>
          </div>
          <!-- 文字描述 -->
          <div class="text">
            {{ item }}
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import * as ELIcons from '@element-plus/icons-vue'
import { toLine } from '../../../utils';
import { useCopy } from '../../../hooks/useCopy';

let props = defineProps<{
  // 弹出框标题
  title: string,
  // 控制弹出框的显隐
  visible: boolean
}>()

let emits = defineEmits(['update:visible'])

// 拷贝一份外部传入的visible
let dialogVisible = ref<boolean>(props.visible)

const handleClick = () => {
  // 切换visible
  dialogVisible.value = true
  emits('update:visible', !props.visible)
}
// 监听visible变化，变化后再次变回原值
watch(() => props.visible, val => {
  dialogVisible.value = val
  emits('update:visible', val)
})

const clickItem = (item: string) => {
  useCopy(`<el-icon-${toLine(item)}/>`)
}
</script>
<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.item {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  cursor: pointer;
  height: 70px;
}

.text {
  font-size: 14px;
}

svg {
  width: 2em;
  height: 2em;
}

el-dialog {
  height: 500px;
  overflow: scroll;
}
</style>