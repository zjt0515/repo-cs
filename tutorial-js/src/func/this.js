/**
全局作用域下的this
 */

// node环境
console.log(this)

// 浏览器环境：全局对象Window

/**
 * 函数作用域下的this
 */
// * =================== Section: this ===================
// 标准函数Func
function printThis() {
  console.log(this)
}
function returnThis() {
  return this
}
// ! this指向，取决于运行时
// window下调用
printThis()

let obj = {
  printThis,
}
// obj调用
obj.printThis()

//  '123'
printThis.call('123')

let name = 'let:name'
const person = {
  name: "person's name",
  getName() {
    return this.name
  },
}
console.log(person.getName())

// !箭头函数
function King() {
  this.royaltyName = 'Henry'
  // this 引用 King 的实例
  setTimeout(() => console.log(this), 1000)
  setTimeout(function () {
    console.log(this)
    // console.log(this.royaltyName)
  }, 2000)
}
King()
// * =================== Section: this绑定规则 ===================
// 默认绑定
// 隐式绑定
// 对象调用方法
{
  function printThis() {
    console.log(this)
  }
  let obj1 = {
    printThis,
  }
  let obj2 = {
    obj1,
  }
  // 谁直接调用函数，this绑定的就是谁
  obj2.obj1.printThis()
  // % 显式绑定
  // call / bind
  // printThis.call(window)
  // printThis.call(obj)

  const obj2printTHis = printThis.bind(obj2)

  obj2printTHis()
}

// * =================== Section: 丢失this ===================
let user = {
  name: 'John',
  sayHi() {
    console.log(this.name)
  },
}
// setTimeout的this时window，window.name不存在
setTimeout(user.sayHi, 1000)
// 想将一个对象方法传递到别的地方，如何确保在正确的上下文
// 使用包装函数
setTimeout(function () {
  user.sayHi()
}, 2000)
