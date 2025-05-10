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

function swap(arr, i, j){
  let tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}