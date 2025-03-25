const Person = function (firstName, birthYear) { 
  this.name = firstName
  this.birth = birthYear
}

new Person('me', 1999)

// 1. New {}
// 2. function is called
console.log(Person)