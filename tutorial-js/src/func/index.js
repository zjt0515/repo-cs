// * =================== Section: 参数 ===================
const bookings = []

const createBooking = function (flightNum, numPassengers = 1, price = 100 * numPassengers) {
  // es5 方式参数默认值
  // numPassengers = numPassengers || 1;
  // price = price || 100;

  const booking = {
    flightNum,
    numPassengers,
    price,
  }
  console.log(booking)
  bookings.push(booking)
}
// 没有传递的参数，默认为undefined
createBooking('LH123')
createBooking('LH123', 2)
createBooking('LH123', 2, 200)
createBooking('LH123', undefined, 1000)

/**
 * 参数传递
 * 原始类型传递值
 * 引用类型传递引用的地址值
 */
const flight = '1'
const Jin = {
  name: 'jin',
  passport: 123,
}
const checkIn = function (flightNum, passenger) {
  flightNum = '2'
  passenger.name = 'Mr' + passenger.name
  if (passenger.passport === 123) {
    alert('check in')
  } else {
    alert('wrong passport')
  }
}
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1e9)
}
checkIn(flight, Jin)
console.log(flight)
console.log(Jin)

/**
 * rest参数...
 * @param  {...any} args 将任意个参数收集为一个数组
 * @returns
 * 可以选择将前n个参数收集为正常变量，剩余的参数收集为一个数组
 * ...args必须放在参数列表的末尾
 */
function sum(...args) {
  let sum = 0
  for (let arg of args) sum += arg
  return sum
}

// spread语法结合函数参数传递
{
  let arr = [1, 2, 3]
  console.log(Math.max(...arr))
}
// 没有被传入的参数为undefined
function lessArgu(arg1, arg2, arg3) {
  console.log(arg1)
  console.log(arg2)
  console.log(arg3 || [])
}
lessArgu(1)

/**
 * argumnest实参对象
 */
function test() {
  // 实参个数
  console.log(arguments.length)
  console.log(arguments)
}
test(1, 2, 3)

function max() {
  let max = Number.NEGATIVE_INFINITY
  for (let arg of arguments) {
    if (arg > max) max = arg
  }
  return max
}
console.log(max(1, 2, 3, 4))

// 形参个数
console.log(test.length)

// * =================== Section: 函数内部 ===================

/**
 * 函数对象的方法
 */
function sum(num1, num2) {
  return num1 + num2
}

function callSum(num1, num2) {
  return sum.call()
}

// * =================== Section: IIFE立即调用的函数表达式 ===================
// 可以用函数体模拟块级作用域
;(function () {
  console.log('立即被调用')
})()

// * =================== Section: 函数柯里化 ===================
// 一个多参数的函数 => 多个单参数的函数
// 每次调用返回新函数
function add(a, b) {
  return a + b
}

function add(x) {
  return function (y) {
    return x + y
  }
}
add(1)(2)
