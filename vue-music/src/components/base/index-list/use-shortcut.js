import { computed, onMounted, ref } from 'vue'
export default function useShortcut(props, groupRef) {
  const scrollRef = ref(null)

  // [{title, ...}, ...] -> [title, ...]
  const shortcutList = computed(() => {
    return props.data.map((group) => group.title)
  })
  const touch = {}
  // item height
  const ANCHOR_HEIGHT = 18

  function onShortcutTouchStart(e) {
    const anchorIndex = parseInt(e.target.dataset.index)
    scrollTo(anchorIndex)

    touch.anchorIndex = anchorIndex
    touch.y1 = e.touches[0].pageY
  }

  function onShortcutTouchMove(e) {
    touch.y2 = e.touches[0].pageY
    // | 0 向下取整
    const delta = ((touch.y2 - touch.y1) / ANCHOR_HEIGHT) | 0
    const anchorIndex = touch.anchorIndex + delta
    scrollTo(anchorIndex)
  }

  // scrollTo targetEl
  function scrollTo(anchorIndex) {
    if (isNaN(anchorIndex)) return
    // [0, length - 1]
    anchorIndex = Math.max(
      0,
      Math.min(anchorIndex, shortcutList.value.length - 1)
    )
    const targetEl = groupRef.value.children[anchorIndex]

    const scroll = scrollRef.value.scroll
    scroll.scrollToElement(targetEl, 0)
  }

  return { shortcutList, onShortcutTouchStart, onShortcutTouchMove, scrollRef }
}
