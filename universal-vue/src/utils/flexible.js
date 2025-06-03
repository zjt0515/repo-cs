import { PC_DEVICE_WIDTH } from "@/constants"
import { computed } from "vue"
import { useWindowSize } from "@vueuse/core"
// 响应式的屏幕宽度
const { width } = useWindowSize()
/**
 * 是否为移动设备
 * 根据屏幕宽度
 */
export const isMobileTerminal = computed(() => {
  return width.value < PC_DEVICE_WIDTH
  // return document.documentElement.clientWidth < PC_DEVICE_WIDTH

  // 实际开发中通过userAgent判断
  // return /Android|webOS|iPhone|iPad|BlackBerry|IEMobile|Opera Mini|/i.test(navigator.userAgent)
})

/**
 * 动态指定rem基准值
 * 
 */
export const useREM = () => {
  const MAX_FONT_SIZE = 40

  document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector('html')

    let fontSize = window.innerWidth / 10
    fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize

    html.style.fontSize = fontSize + 'px'
  })
}

/**
 * 获取1rem
 * @returns 
 */
export const getREM = () => {
  const html = document.querySelector('html')
  const returnd = parseFloat(html.style.fontSize)
  return returnd
}

