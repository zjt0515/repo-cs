// * =================== Section: typeof ===================
// * 识别基础类型，返回类型名的string，不能识别具体的引用类型

// ! 特殊
console.log(typeof null) // object
console.log(typeof NaN) // number
// console.log(typeof document.all) // undefined

// * =================== Section: constructor ===================
// ! 特殊

// ! constructor可以被改写
String.prototype.constructor = function a() { }
console.log('a'.constructor)

// * =================== Section: instanceof ===================
// 在原型链上查找: 右操作数是否在左操作数的原型链上
// 右操作数必须是函数/class

// * =================== Section: isPrototypeOf ===================
// 是否存在实例对象的原型链上

// * =================== Section: Object.prototype.toString ===================

// 自定义对象如何注册[object xxx]类型
class MyArray {
  get [Symbol.toStringTag]() {
    return 'MyArray'
  }
}
console.log(Object.prototype.toString.call(new MyArray()))

// * =================== Section: 鸭子类型检查 ===================
// 检查属性/方法

// * =================== Section: Symbol.toStringTag ===================

// * =================== Section: 等比较 ===================