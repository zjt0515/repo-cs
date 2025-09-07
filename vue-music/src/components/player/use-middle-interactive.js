import { ref } from 'vue'

export default function useMiddleInteractive() {
  const currentShow = ref('cd')
  // 拖动过程中保持不变，防止立即跳入另一个判断
  let currentView = 'cd'
  const middleLStyle = ref(null)
  const middleRStyle = ref(null)

  const touch = {}

  function onMiddleTouchStart(e) {
    // 获取touch开始的坐标x
    touch.startX = e.touches[0].pageX
    // 获取y
    touch.startY = e.touches[0].pageY
    // 方向锁
    touch.directionLocked = ''
  }

  function onMiddleTouchMove(e) {
    // touch2Left 负值
    const deltaX = e.touches[0].pageX - touch.startX
    const deltaY = e.touches[0].pageY - touch.startY

    const absDeltaX = Math.abs(deltaX)
    const absDeltaY = Math.abs(deltaY)

    // check touchX or touchY
    // then lock
    if (!touch.directionLocked) {
      touch.directionLocked = absDeltaX >= absDeltaY ? 'x' : 'y'
    }
    if (touch.directionLocked === 'y') {
      return
    }
    // touch X

    // left  cd: 0 lyric: -375
    const left = currentView === 'cd' ? 0 : -window.innerWidth
    // 最终的偏移量，限制在[-window.innerWidth, 0]
    const offsetWidth = Math.min(0, Math.max(left + deltaX, -window.innerWidth))
    touch.percent = Math.abs(offsetWidth / window.innerWidth)

    // change currentShow
    if (currentView === 'cd') {
      if (touch.percent > 0.2) {
        currentShow.value = 'lyric'
      } else {
        currentShow.value = 'cd'
      }
    } else {
      if (touch.percent < 0.8) {
        currentShow.value = 'cd'
      } else {
        currentShow.value = 'lyric'
      }
    }
    // change style
    middleLStyle.value = {
      opacity: 1 - touch.percent
    }
    middleRStyle.value = {
      transform: `translate3d(${offsetWidth}px, 0, 0)`
    }
  }

  function onMiddleTouchEnd() {
    // unlock
    touch.directionLocked = ''

    let offsetWidth
    let opacity
    if (currentShow.value === 'cd') {
      currentView = 'cd'

      offsetWidth = 0
      opacity = 1
    } else {
      currentView = 'lyric'

      offsetWidth = -window.innerWidth
      opacity = 0
    }
    // change style
    // 松开时要加上duration
    const duration = 300
    middleLStyle.value = {
      opacity,
      transitionDuration: `${duration}ms`
    }
    middleRStyle.value = {
      transform: `translate3d(${offsetWidth}px, 0, 0)`,
      transitionDuration: `${duration}ms`
    }
  }

  return {
    currentShow,
    middleLStyle,
    middleRStyle,
    onMiddleTouchStart,
    onMiddleTouchMove,
    onMiddleTouchEnd
  }
}
