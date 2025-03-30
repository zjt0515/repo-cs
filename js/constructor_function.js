const Person = function (firstName, birthYear) {
  console.log(this);
  // this指向空对象后，为该对象创建属性
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // add methods but never do this
  // this.calcAge = () => new Date().getFullYear() - this.birthYear;

  console.log(this);
};

const me = new Person("me", 1999);

// 1. New {}
// 2. function is called
console.log(me);

// test
console.log(me instanceof Person);

/**
 * prototype
 *
 */
Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};
// 不要使用箭头函数，不能访问this
// Person.prototype.calcAge = () => new Date().getFullYear() - this.birthYear;
console.log(me.calcAge());

console.log(me.__proto__);
console.log(me.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(me));
