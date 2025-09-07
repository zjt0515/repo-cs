// 一定时间内，持续多次触发，只触发最后一次
export function debounce(delay, fn) {
  let timerId = null
  return function (...args) {
    // 清除之前的计时
    if (timerId) {
      clearTimeout(timerId)
    }
    // 重新计时，如果delay时间内不被再次调用就会触发
    timerId = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
