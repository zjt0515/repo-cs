<template>
  <div>
    <teleport to='body'>
      <!-- 蒙版 -->
      <transition v-if="props.modelValue" name="fade">
        <div @click="emits('update:modelValue', false)"
          class="w-screen h-screen bg-zinc-900/80 z-40 fixed top-0 left-0"></div>
      </transition>
      <!-- 内容 -->
      <transition v-if="props.modelValue" name="popupDownUp">
        <div v-bind="$attrs" class=" w-screen bg-white z-50 fixed bottom-0">
          <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: true,
  type: Boolean,
  default: false
})
const emits = defineEmits(['update:modelValue'])

</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


.popupDownUp-enter-active,
.popupDownUp-leave-active {
  transition: all 0.3s;
}

.popupDownUp-enter-from,
.popupDownUp-leave-to {
  transform: translateY(100%);
}
</style>
