'use strict'
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
}

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
}

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
}

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
}

const accounts = [account1, account2, account3, account4]

// Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');
// * =================== Section: 创建数组 ===================
{
  const emptyArr1 = []
  const emptyArr2 = new Array()
  const arr2 = new Array(100)
  const arr3 = Array.from({})
  const arr4 = Array.of(100)
  // 避免创建稀疏数组
  Array.apply(null, Array(3))
    ;[...new Array(3)]
  Array.from(Array(3))
}

// ! 空位<1 empty item>
{
  // 产生empty item
  const arr = [1, , 3]
  delete arr[2]
  console.log(arr)
  arr.forEach((value, index) => {
    console.log(value)
  })
}
// * =================== Section: 稀疏数组 ===================
// 创建稀疏数组, length值 > 元素个数
{
  let a = new Array(5)
  let b = []
  b[1000] = 0
  console.log(0 in a) // 0 索引没有元素
  // ? what fuck
  let testArr = [, , ,]
  console.log(0 in testArr)
}

// * =================== Section: 索引类型 ===================
{
  // 索引最终都转化为string，除了symbol
  var arr = []
  arr["0"] = 99
  console.log(arr[0])
  console.log(arr[0])
  console.log(arr["0"])

  // 对象作为索引，调用同toString()方法转为string
  var arr = []
  let key = { test: 1 }
  arr[key] = 999
  console.log(arr[key])
  console.log(arr[key.toString()])
  console.log(arr["[object Object]"])

  // 函数作为索引
  var arr = []
  function testArrIndex() { }
  arr[testArrIndex] = 66
  console.log(arr[testArrIndex.toString()]);
  console.log(testArrIndex.toString());

  // symbol直接作为索引，不会被转为string
  var arr = []
  let symbol = Symbol('index')
  arr[symbol] = 'hello'
  console.log(arr[symbol.toString()]); // ! undefined
  console.log(arr[symbol]);
}

// *   =================== Section: 循环 ===================

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
// fori
for (let i = 0; i < movements.length; i++) {
  // 跳过null、undefined、不存在
  if (!movements[i]) continue
  // 跳过undefined、不存在
  // if (a[i] === undefined) continue
  // 跳过不存在
  if (!(i in movements)) continue
}
// forin 处理稀疏数组
// 不存在的索引不会被遍历
for (const index in movements) {
  console.log(movements[index])
}
// for(const movement of movement){
for (const [i, movement] of movements.entries()) {
}
// 0:function(200)
// 1:function|(450)
// ...
movements.forEach((movement, index, array) => { })

// 批量制造数据
// 如果不fill，map无效
function createData() {
  Array.from({ length: 100 })
    .fill(null)
    .map((value, index) => ({ name: `name${index + 1}` }))
}

// * =================== Section: Map ===================
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
])

currencies.forEach((value, key, map) => { })

// * =================== Section: 类数组 ===================

// * =================== Section: 数组方法 ===================
let arr = ['a', 'b', 'c', 'd', 'e']
// push & pop 将数组当作栈使用
let stack = []
stack.pop()
stack.push(1, 2)
stack.pop()
console.log(stack)

// unshift & shift
{
  let a = []
  a.unshift(3)
  a.unshift(2)
  a.unshift(1)
  console.log(a)
  a.shift()
  a.shift()
  console.log(a)
  a.unshift(1, 2)
  console.log(a)
}

// toString & toLocaleString
{
  // 输出,分割的string
  console.log([1, 2, , 3].toString())
}

// * =================== Section: ES5数组方法 ===================

// indexOf和includes

console.log(arr.indexOf('b'))
console.log(arr.includes('c'))

{
  const naNarr = [NaN]
  console.log(naNarr.includes(NaN))
  console.log(naNarr.indexOf(NaN))

  const empArr = [,]
  console.log(empArr)
  console.log(empArr.includes(undefined))
  console.log(empArr.indexOf(undefined))

  const undArr = [undefined]
  console.log(undArr.includes(undefined))
  console.log(undArr.indexOf(undefined))

  // 判断是空位还是undefined，结果为false是空位，为true是undefined
  const empOrUndArr = [, undefined]
  console.log(1 in empOrUndArr)
  console.log(empOrUndArr.hasOwnProperty(1))
}

// * 数组查找方法
{
  // 都是短路操作
  const arr = [1, 2, 3, 4, 5]
  console.log(arr.some(1))
  console.log(arr.find(1))
  console.log(arr.findIndex(1))
  console.log(arr.every(1))
}

// SLICE切片 提取数组的任意部分
// slice(start?: number, end?: number)
// 不改变原数组
console.log(arr.slice(2)) // [ 'c', 'd', 'e' ]
console.log(arr.slice(2, 4)) // [ 'c', 'd' ]
console.log(arr.slice(-2)) // [ 'd', 'e' ]
console.log(arr.slice(1, -1)) // [ 'b', 'c', 'd' ] 从1开始提取，直到末尾2个
console.log(arr.slice()) // [ 'a', 'b', 'c', 'd', 'e' ] 无参
console.log([...arr]) //  可以创建浅拷贝的类似方法

// SPLICE拼接
// splice(start: number, deleteCount?: number)
// 返回被删除的元素
// 改变原数组, 可以用来删除元素
// console.log(arr.splice(1, 2)) // 从1开始删除2个
console.log(arr.splice(1)) // 从1开始删除，直到结束
// console.log(arr.splice(-1)) // 删除最后一个元素
console.log(arr.splice(1, 0, '2', '3'))

// REVERSE
// 副作用
{
  arr = ['a', 'b', 'c', 'd', 'e']
  const arr2 = ['j', 'i', 'h', 'g', 'f']
  console.log(arr2.reverse())
  console.log(arr2)
}

// CONCAT连接
// 无副作用
{
  let arr = [1, 2]
  let newArr = arr.concat(3, 4)
  console.log(newArr);
  let newArr2 = newArr.concat([5, 6])
  console.log(newArr2);

  let another = [...arr, 3, 4, ...[5, 6]]
  console.log(another);
}

// JOIN 利用分隔符将元素连接为string
console.log(letters.join(' - '))

// AT，可以使用负数索引
arr = [23, 11, 64]
console.log(arr[0])
console.log(arr.at(0))

console.log(arr[arr.length - 1])
console.log(arr.at(-1))
console.log(arr.slice(-1)[0])

// ! 副作用方法
{
  const arr = [1, 2, 3, 10]
  arr.sort()
  console.log(arr)
  arr.sort((a, b) => a - b)
  console.log(arr)
}

{
  const arr = [1]
  arr.push(2)
  arr.push(3)
  arr.pop()
  console.log(arr)
  arr.shift()
  console.log(arr)
  arr.unshift(1)
  console.log(arr)
}

// * =================== Section: Array类方法 ===================
Array.isArray

function test() { }

test()

// * =================== Section: 数组算法手写 ===================
// 多维数组扁平化
{
  let arr = [1, 2, 3, [4, 5, 6, [7, 8, 9], 10, 11, 12], 13, 14]

  Array.prototype.customFlatten = function () {
    let flat = []
    for (const item of this) {
      if (Array.isArray(item)) {
        flat = flat.concat(item.customFlatten())
      } else {
        // flat = flat.concat(item)
        flat.push(item)
      }
    }
    return flat
  }
  console.log(arr.customFlatten());
}

// 数组去重算法



