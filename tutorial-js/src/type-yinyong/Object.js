// typeof null 返回 'object'
console.log(typeof null)
// 判断是否为Object
function isObject(val) {
  return val !== null
}
// * =================== Section: Object方法 ===================
let user = {
  name: 'John',
  age: 30,
}
// 返回对象的key数组
console.log(Object.keys(user))
// 返回对象的value数组
console.log(Object.values(user))
// 返回对象的key+value二维数组, key+value两列
console.log(Object.entries(user))
