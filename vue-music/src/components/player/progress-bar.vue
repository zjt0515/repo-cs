<template>
  <div
    ref="progressBarRef"
    class="progress-bar"
    @click="onClick"
  >
    <div class="bar-inner">
      <!-- 黄色进度条 -->
      <div
        ref="progressRef"
        class="progress"
        :style="progressStyle"
      ></div>
      <!-- 拖动按钮 -->
      <div
        class="progress-btn-wrapper"
        :style="btnStyle"
        @touchstart.prevent="onTouchStart"
        @touchmove.prevent="onTouchMove"
        @touchend.prevent="onTouchEnd"
      >
        <div class="progress-btn"></div>
      </div>
    </div>
  </div>
</template>

<script></script>

<script setup>
import {
  computed,
  defineProps,
  ref,
  watch,
  defineEmits,
  defineExpose
} from 'vue'
const emits = defineEmits(['progress-changing', 'progress-changed'])

const props = defineProps({
  progress: {
    type: Number,
    default: 0
  }
})

const progressBtnWidth = 16
const offset = ref(0)
const touch = ref({})
const progressBarRef = ref(null)
const progressRef = ref(null)

const progressStyle = computed(() => {
  return `width:${offset.value}px`
})

const btnStyle = computed(() => {
  return `transform: translate3d(${offset.value}px, 0, 0)`
})

// 监听progress, 改变offset
watch(
  () => props.progress,
  (newProgress) => {
    setOffset(newProgress)
  }
)

function onTouchStart(e) {
  // 点击的x
  touch.value.x1 = e.touches[0].pageX
  // 黄色进度条宽度
  touch.value.beginWidth = progressRef.value.clientWidth
}
function onTouchMove(e) {
  const delta = e.touches[0].pageX - touch.value.x1
  const tempWidth = touch.value.beginWidth + delta
  const barWidth = progressBarRef.value.clientWidth - progressBtnWidth

  const progress = Math.min(1, Math.max(tempWidth / barWidth, 0))

  offset.value = barWidth * progress

  // emits
  emits('progress-changing', progress)
}
function onTouchEnd(e) {
  const barWidth = progressBarRef.value.clientWidth - progressBtnWidth
  const progress = progressRef.value.clientWidth / barWidth
  // 触发事件，传出修改后的progress
  emits('progress-changed', progress)
}

function onClick(e) {
  const rect = progressBarRef.value.getBoundingClientRect()
  const offsetWidth = e.pageX - rect.left
  const barWidth = progressBarRef.value.clientWidth - progressBtnWidth
  const progress = offsetWidth / barWidth
  offset.value = offsetWidth
  emits('progress-changed', progress)
}
// 修复miniplayer暂停之后返回全屏，进度条bug
function setOffset(progress) {
  const barWidth = progressBarRef.value.clientWidth - progressBtnWidth
  offset.value = barWidth * progress
}

defineExpose({ setOffset })
</script>

<style lang="scss" scoped>
.progress-bar {
  height: 30px;

  .bar-inner {
    position: relative;
    top: 13px;
    height: 4px;
    background: rgba(0, 0, 0, 0.3);
  }

  .progress {
    position: absolute;
    height: 100%;
    background: $color-theme;
  }

  .progress-btn-wrapper {
    position: absolute;
    left: -8px;
    top: -13px;
    width: 30px;
    height: 30px;

    .progress-btn {
      position: relative;
      top: 7px;
      left: 7px;
      box-sizing: border-box;
      width: 16px;
      height: 16px;
      border: 3px solid $color-text;
      border-radius: 50%;
      background: $color-theme;
    }
  }
}
</style>
