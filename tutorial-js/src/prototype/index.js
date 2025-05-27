// let obj = new object();
let obj = {}
console.log(obj.__proto__ === Object.prototype) // true
obj.__proto__ = Object.prototype
// tostring方法从Object.prototype获取
console.log(obj.toString())

// 原型链的顶端
console.log(Object.prototype.__proto__) // null

/**
 * 函数的原型链
 */
function f(){}
console.log(f.__proto__ === Function.prototype) // true

/**
 * 更改原生原型
 * 会影响所有实例，一般不修改
 */
String.prototype.show = function() {
  console.log(this)
}
"BOOM!".show()

/**
 * 修改函数的原型
 * 实现无参函数的延时调用
 * 进一步实现有参函数的延时调用
 * @param {*} ms 
 * @returns 
 */
// Function.prototype.defer = function(ms){
//   setTimeout(this, ms)
// }
Function.prototype.defer = function(ms) {
  let caller = this
  // 因为原函数有参数，这里需要返回一个匿名函数，供调用的函数传入参数执行
  let func = function(...args) {
    setTimeout(() => {
      caller.apply(this, args)
    }, ms)
  }
  return func
}

function sayHi() {
  console.log("Hi")
}
// 相当于setTimeout(sayHI, 2000)
// sayHi.defer(2000) // 2秒后输出Hi

function add(a, b){
  console.log(a + b)
}
add.defer(5000)(2,3)

// 原先的无参函数的使用
sayHi.defer(2000)() // 2秒后输出Hi