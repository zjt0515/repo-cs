import { useStore } from 'vuex'
import { computed, watch, ref } from 'vue'
export default function useCD() {
  // data
  const cdRef = ref(null)
  const cdImageRef = ref(null)
  // vuex
  const store = useStore()
  // computed
  const playing = computed(() => store.state.playing)
  const cdPlayingCls = computed(() => {
    return playing.value ? 'playing' : ''
  })

  watch(playing, (newPlaying) => {
    // 暂停时同步角度
    if (!newPlaying) {
      syncTransform(cdRef.value, cdImageRef.value)
    }
  })

  function syncTransform(wrapper, inner) {
    const wrapperTransform = getComputedStyle(wrapper).transform
    // 获取内层
    const innerTransform = getComputedStyle(inner).transform
    // 最终同步角度
    wrapper.style.transform =
      wrapperTransform === 'none'
        ? innerTransform
        : innerTransform.concat(' ', wrapperTransform)
  }
  return { cdPlayingCls, cdRef, cdImageRef }
}
