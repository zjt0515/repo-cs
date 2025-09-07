console.log(Function.prototype)
function f() {
  console.log(123)
}
console.log(f.__proto__ === Function.prototype) // true
