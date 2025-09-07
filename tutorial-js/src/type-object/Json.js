// * =================== Section: Json对象 ===================
// json协议，格式，语法

// json对象字面量

const jsonStr = `
{
  "name": "zjt",
  "age": 12
}`
const jsonObj = JSON.parse(jsonStr, function (k, v) {
  // reviver函数，返回undefined就删除对应的属性和值
  // 顺序是深度遍历所有子属性
  // 用于过滤数据
  console.log('key:', k, ',this:', this)

  if (k == 'name') {
    return undefined
  }
  return v
})
console.log(`${typeof jsonObj}: `)
console.log(jsonObj)

// * =================== Section: JSON.stringify ===================
// json化：字符串使用双引号，对象属性名称也是用双引号
console.log(typeof JSON.stringify(jsonObj))
console.log(JSON.stringify(jsonObj))
// ! 序列化中被忽略的属性
let user = {
  sayHi() {
    // 函数属性被忽略
    alert('Hello')
  },
  [Symbol('id')]: 123, // Symbol被忽略
  something: undefined, // undefined被忽略
}
alert(JSON.stringify(user)) // {}（空对象）
