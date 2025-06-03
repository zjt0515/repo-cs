<template>
  <div class="bg-white sticky top-0 left-0 z-10">
    <ul ref="ulRef" class=" relative flex overflow-x-auto p-1 text-xs text-zinc-600">
      <!-- 滑块 -->
      <li ref="sliderRef" :style="sliderStyle" class=" absolute h-[22px] bg-zinc-900 rounded-lg duration-200"></li>
      <!-- 汉堡按钮 -->
      <li @click="showPopup" class=" fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white z-20">
        <m-svg-icon name="menu" class="w-1.5 h-1.5"></m-svg-icon>
      </li>
      <li v-for="(item, index) in data" :key="item.id" @click="itemClick(index)" :ref="getItemRef"
        class=" shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4 cursor-pointer select-none"
        :class="{ 'text-zinc-100': currentIndex === index }">
        {{ item.name }}
      </li>
    </ul>
    <popup @update:model-value="" v-model="popupVisible"></popup>
  </div>

  {{ }}
</template>

<script setup>
import { computed, onBeforeUpdate, ref, watch } from 'vue'
import { useScroll } from '@vueuse/core'
import { getREM } from '@/utils/flexible'
import popup from '@/components/popup/index.vue'

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})
const popupVisible = ref(false)
const ulRef = ref(null)
const sliderRef = ref(null)
const currentIndex = ref(0)
const itemRefs = ref([])
const { x: ulScrollLeft } = useScroll(ulRef)
const sliderStyle = ref({
  transform: 'translateX(0px)',
  width: `47px`
})

watch(currentIndex, (newVal) => {
  const padding = getREM() / 4
  const { left, width } = itemRefs.value[newVal].getBoundingClientRect()
  sliderStyle.value.transform = `translateX(${left + ulScrollLeft.value - padding}px)`
  sliderStyle.value.width = `${width}px`
})

function getItemRef(el) {
  if (el) {
    itemRefs.value.push(el)
  }
}

function itemClick(index) {
  currentIndex.value = index
}
function showPopup() {
  popupVisible.value = true
}

/**
 * 数据改变之后, dom变化前
 */
onBeforeUpdate(() => {
  itemRefs.value = []
})

</script>

<style lang="scss" scoped></style>