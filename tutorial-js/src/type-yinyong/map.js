let map = new Map()
// * =================== Section: map方法 ===================
map.set('1', 'str1')
map.set(1, 'num1')
console.log(map.get('1'))
console.log(map.get(1))

console.log(map.has('1'))

// * =================== Section: map属性 ===================
console.log(map.size)
