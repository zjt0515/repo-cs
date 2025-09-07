let map = new Map()
// 键值对二维数组
let map2 = new Map([
  [1, 2],
  [3, 4],
])
// 从对象创建
let obj = {
  1: 2,
  3: 4,
}
let map3 = new Map(Object.entries(obj))

// ? 从键值对数组创建obj
Object.fromEntries([[2, 3]])
// * =================== Section: map方法 ===================
{
  let map = new Map()
  const key = 1
  // add
  map.set('1', 'str1')
  map.set(1, 'num1')
  // contains key ?
  console.log(map.has('1'))
  // query
  map.get(key)
  console.log(map.values())
}
// * =================== Section: map属性 ===================
console.log(map.size)
// * =================== Section: 遍历Map ===================
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
])

// currencies.forEach((value, key, map) => {
//   console.log(key, value)
// })

for (const currency of currencies) {
  console.log(currency)
}
