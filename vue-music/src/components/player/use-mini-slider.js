import { computed, onMounted, onUnmounted, ref, watch, nextTick } from 'vue'
import { useStore } from 'vuex'
import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'
// register slide
BScroll.use(Slide)

export default function useMiniSlider() {
  const sliderWrapperRef = ref(null)
  const slider = ref(null)

  const store = useStore()
  const fullScreen = computed(() => store.state.fullScreen)
  const playlist = computed(() => store.state.playlist)
  const currentIndex = computed(() => store.state.currentIndex)

  // playlist存在 且 非全屏时 slider显示
  const sliderShow = computed(() => !fullScreen.value && !!playlist.value)

  onMounted(() => {
    let sliderVal
    watch(sliderShow, async (newSldierShow) => {
      if (newSldierShow) {
        await nextTick()
        // new once
        if (!sliderVal) {
          sliderVal = slider.value = new BScroll(sliderWrapperRef.value, {
            click: true,
            scrollX: true,
            scrollY: false,
            momentum: false,
            bounce: false,
            probeType: 2,
            slide: {
              autoplay: false,
              loop: true
            }
          })
          // 监听slidePageChanged
          sliderVal.on('slidePageChanged', ({ pageX }) => {
            store.commit('setCurrentIndex', pageX)
            store.commit('setPlayingState', true)
          })
        } else {
          sliderVal.refresh()
        }
        // 横向滚动
        sliderVal.goToPage(currentIndex.value, 0, 0)
      }
    })
    // make sure Show
    watch(currentIndex, (newIndex) => {
      if (sliderVal && sliderShow.value) {
        sliderVal.goToPage(newIndex, 0, 0)
      }
    })
  })

  // clear BScroll
  onUnmounted(() => {
    if (slider.value) {
      slider.value.destory()
    }
  })

  return { slider, sliderWrapperRef }
}
