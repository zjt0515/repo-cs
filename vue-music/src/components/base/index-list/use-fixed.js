import { ref, watch, nextTick, computed } from 'vue'
export default function useFixed(props) {
  const groupRef = ref(null)
  // 列表的各个title高度数组
  const listHeights = ref([])
  // 纵向滚动值
  const scrollY = ref(0)

  const currentIndex = ref(0)

  /**
   * 当前应该固定展示的title
   */
  const fixedTitle = computed(() => {
    if (scrollY.value < 0) return ''
    const currentGroup = props.data[currentIndex.value]
    return currentGroup ? currentGroup.title : ''
  })
  /**
   * 监测data变化，重新计算高度数组
   */
  watch(
    () => props.data,
    async () => {
      await nextTick()
      calculate()
    },
    { deep: true }
  )
  /**
   * 监听位置变化
   */
  watch(scrollY, (newY) => {
    const listHeightsVal = listHeights.value
    for (let i = 0; i < listHeightsVal.length - 1; i++) {
      const heightTop = listHeightsVal[i]
      const heightBottom = listHeightsVal[i + 1]
      if (newY >= heightTop && newY < heightBottom) {
        currentIndex.value = i
        break
      }
    }
  })
  /**
   * 计算滚动条title的高度
   */
  function calculate() {
    const list = groupRef.value.children
    const listHeightsVal = listHeights.value
    let height = 0

    listHeightsVal.length = 0
    listHeightsVal.push(height)
    for (let i = 0; i < list.length; i++) {
      height += list[i].clientHeight
      listHeightsVal.push(height)
    }
  }

  /**
   * 获取当前位置
   */
  function onScroll(pos) {
    scrollY.value = -pos.y
  }
  return { groupRef, onScroll, fixedTitle }
}
