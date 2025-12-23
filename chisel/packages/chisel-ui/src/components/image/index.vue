<template>
  <!-- <div :class="classes" :style="[displayStyle, positionStyle]">
    <mo-link v-if="src" :to="link" target="_blank">
      <img v-bind="$attrs" :src="src" class="image" :style="styles" />
    </mo-link>
    <div v-else class="no-image">
      <mo-empty description="暂无图片，请上传" />
    </div>
  </div> -->
  <div>
    <p>chisel-ui</p>
    <img :src="props.src" alt="" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi'
export default defineComponent({
  name: 'ch-image',
  props: {
    src: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped></style>
