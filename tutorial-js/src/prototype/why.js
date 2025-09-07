function User(name, age) {
  this.name = name
  this.age = age

  // this.sayHi = function () {
  //   console.log(`${this.name}今年${this.age}岁`)
  // }
}

var u1 = new User('a', 18)
var u2 = new User('b', 18)
var u3 = new User('c', 18)

// 每个user 都有sayHi，造成内存空间浪费
// console.log(u1.sayHi === u2.sayHi)
// console.log(u1)
// console.log(u2)
// console.log(u3)
// * =================== Section: 解决 ===================
// 构造函数的prototype
console.log(u1.__proto__ === User.prototype)

// 将sayHi方法放到原型上
User.prototype.sayHi = function () {
  console.log(`${this.name}今年${this.age}岁`)
}
console.log(u1)
console.log(u2)
console.log(u3)

u1.sayHi()

console.dir(User)
