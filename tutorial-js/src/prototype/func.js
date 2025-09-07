function Foo() {}

var foo = new Foo()

console.log(Foo.prototype.constructor === Foo) // true

console.log(foo.constructor === Foo) // true
/**
 * 函数的原型
 */
console.log(Function.prototype)
function f() {
  console.log(123)
}
console.log(f.__proto__ === Function.prototype) // true

// * =================== Section: 构造函数 ===================
function Animal(name) {
  this.name = name
}
