// !jsbug: typeof null 返回 'object'
console.log(typeof null)
// 判断是否为Object
function isObject(val) {
  return val !== null
}
// * =================== Section: Property ===================
// 属性描述符
{
  let obj = {
    a: 2,
  }
  console.log(Object.getOwnPropertyDescriptor(obj, 'a'))

  // 添加属性，显式指定特性
  Object.defineProperty(obj, 'a', {
    value: 3,
    writable: false,
    configurable: false,
  })

  console.log(Object.getOwnPropertyDescriptor(obj, 'a'))
  obj.a = 4
  console.log(obj.a)
}

// * =================== Section: Get Property ===================
{
  let myObj = {
    get a() {
      return 2
    },
  }
  console.log(myObj.a)
}

// # 可枚举
{
  let obj = { a: 1 }
  // 添加不可枚举的属性 b
  Object.defineProperty(obj, 'b', {
    value: 2,
    enumerable: false,
  })
  // b无法被遍历
  console.log(Object.keys(obj))
  for (const key in obj) {
    console.log(key)
  }
  // 可以遍历到不可枚举属性
  console.log(Object.getOwnPropertyNames(obj))
  console.log(Object.getOwnPropertySymbols(obj))
  console.log(Object.getOwnPropertyDescriptors(obj))

  // b有，只是不可枚举
  console.log('b' in obj)
  console.log(obj.hasOwnProperty('b'))
  console.log(obj.b)
}

// * =================== Section: Check Property ===================
console.log(4 in [2, 3, 4])
// * =================== Section: Object Method ===================
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

// 禁止添加新属性
Object.preventExtensions()
// 密封(preventExt + configurable=false)
Object.seal()
// 冻结(seal+writeable=false)
Object.freeze()

// * =================== Section: ShallowCopy Object ===================
{
  let age = 18
  let source = {
    name: 123,
    age,
  }
  let newObj = {}
  Object.assign(newObj, source)
  age = 20
  console.log(newObj)
}
// * =================== Section: DeepCopy Object ===================
// 对于JSON安全的对象
let obj = {
  name: 'zjt',
  age: 1,
}
let newObj = JSON.parse(JSON.stringify(obj))
// 递归
const deepCopy = (obj) => {
  let newObj = {}
}
