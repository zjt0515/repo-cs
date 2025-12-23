<template>
  <div class="edit-header">
    <div class="header-left">
      <div class="back">
        <v-icon-tooltip icon="back" content="返回" />
        <div class="header-title">页面</div>
      </div>
    </div>

    <div class="line"></div>
    <div class="header-right">
      <el-button size="large" @click="">
        <v-icon icon="preview" />
        预览
      </el-button>
      <el-button type="primary" size="large" @click="">发布</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import vIconTooltip from '../base/v-icon-tooltip.vue'
import icon from '@/config/icon'
</script>

<style scoped lang="scss">
.edit-header {
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid var(--color-border);
  .header-left {
    padding-left: 30px;

    display: flex;

    .back {
      display: flex;
      .header-title {
      }
    }
  }
  .line {
    width: 1px;
    height: 20px;
    border-left: 1px solid var(--color-border);
  }
  .header-right {
    display: flex;
    padding-right: 20px;
  }
}
</style>
