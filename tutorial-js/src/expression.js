'use strict'
// * =================== Section: Primary Expression ===================
// 表达式的最小单位
//
'hello'
//
1.23
//
true
// 关键字构成的表达式
null
this
// 变量表达式
undefined

// * =================== Section: + ===================
// 操作数是对象：转为原始值
// Symbol.toPrimitive
// Object.prototype.valueOf
// Object.prototype.toString
console.log([] + {})

// 一个操作数是string：另一个操作数也转为string，进行字符串拼接
console.log("123" + 456);

// 否则，操作数转为数字/NaN，进行加法

// 不能转为数字/两边不匹配/
console.log(10n + 10);
console.log(Symbol('a') + 10);

// * =================== Section: Invocation Expression ===================

// * =================== Section: cal Exp ===================
1 + 2
3 - 1
'1' + '2'

// * =================== Section: bit ===================
// 判断奇数偶数
function isJi(num) {
  return num & 1
}

// 3次^交换2个数
// 恒等律：a ^ 0 = a
// 归零律： a ^ a = 0
{
  let a = 10
  let b = 20
  a ^= b // a = a ^ b
  b ^= a // b =  b ^ a ^ b = a
  a ^= b // a = a ^ b ^ a = b
  console.log(a, b);
}

// * =================== Section: 运算符短路规则 ===================
// &&
console.log("hello" && 5); // 5
console.log(0 && "world"); // 0
console.log("" && false); // ""
console.log(true && "hello"); // "hello"

// ||
console.log("hello" || 5); // "hello"
console.log(0 || "world"); // "world"
console.log("" || false); // false
console.log(true || "hello"); // true
// * =================== Section: delete ===================
// 返回boolean，true代表删除没有发生异常，并非就是成功，false表示删除失败

// 不能删除的，即返回false
// configurable: false
var a = 1
let b = 2
const c = 3
console.log(delete a);
console.log(delete b);
console.log(delete c);
// 不可配置的
let obj = {}
Object.defineProperty(obj, 'name', { configurable: false })
console.log(delete obj.name);
console.log(delete undefined);
console.log(Object.getOwnPropertyDescriptor(global, 'undefined'));

// 可delete的
let user = {
  name: 'z',
  age: 18
}
delete user.age
delete user["name"]
console.log(user);

let arr = [1, 2, 3]
delete arr[1]
console.log(arr);