// 打乱source数组
// 无副作用
export function shuffle(source) {
  const arr = source.slice()
  for (let i = 0; i < arr.length; i++) {
    let j = getRandomInt(i)
    swap(arr, i, j)
  }
  return arr
}

// 获取0-max之间的随机数
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

function swap(arr, i, j) {
  let tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

export function formatTime(interval) {
  interval = interval | 0
  const minute = ((interval / 60 | 0) + '').padStart(2, '0')
  const second = (interval % 60 + '').padStart(2, '0')
  return `${minute}:${second}`
}
