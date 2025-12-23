<template>
  <div class="icon">
    <!-- tooltip -->
    <el-tooltip class="tip" effect="dark" :content="content" :placement="placement">
      <div class="image-box">
        <!-- optional Icon -->
        <v-icon v-if="icon" class="image" :icon="icon" />
        <!-- optional Image -->
        <slot v-else class="image"></slot>
      </div>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import vIcon from './v-icon.vue'
const props = defineProps({
  icon: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  placement: {
    type: String,
    default: 'bottom',
  },
})
</script>

<style scoped>
.icon {
  .tip {
    .image-box {
      width: 26px;
      height: 26px;
      padding: 3px;

      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: var(--color-icon-hover);
      }
      .image {
      }
    }
  }
}
</style>
