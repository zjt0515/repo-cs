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

  // 根据可迭代对象生成
  const map = new Map()
  const arr4 = Array.from(map.values)
  const arr5 = Array.of(100)
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
  arr['0'] = 99
  console.log(arr[0])
  console.log(arr[0])
  console.log(arr['0'])

  // 对象作为索引，调用同toString()方法转为string
  var arr = []
  let key = { test: 1 }
  arr[key] = 999
  console.log(arr[key])
  console.log(arr[key.toString()])
  console.log(arr['[object Object]'])

  // 函数作为索引
  var arr = []
  function testArrIndex() {}
  arr[testArrIndex] = 66
  console.log(arr[testArrIndex.toString()])
  console.log(testArrIndex.toString())

  // symbol直接作为索引，不会被转为string
  var arr = []
  let symbol = Symbol('index')
  arr[symbol] = 'hello'
  console.log(arr[symbol.toString()]) // ! undefined
  console.log(arr[symbol])
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
// for in 处理稀疏数组
// 不存在的索引不会被遍历
for (const index in movements) {
  console.log(movements[index])
}
// for of 直接遍历 value
for (const movement of movement) {
}
for (const [i, movement] of movements.entries()) {
}
// 0:function(200)
// 1:function|(450)
// ...
movements.forEach((movement, index, array) => {})

// 批量制造数据
// 如果不fill，map无效
function createData() {
  Array.from({ length: 100 })
    .fill(null)
    .map((value, index) => ({ name: `name${index + 1}` }))
}

// * =================== Section: ES5 辅助迭代器 ===================
{
  const arr = [200, 450, -400, 3000, -650]
  // 遍历所有值，忽略返回值
  arr.forEach((val, idx, arr) => {
    console.log(val, idx, arr)
  })
  // 遍历，每次执行cb，直到cb返回false
  let res = arr.every((val, idx, arr) => {
    if (false) {
      return false
    }
  })
  console.log(res)
  // 运行到cb返回true
  res = arr.some((val, idx, arr) => {
    if (false) {
      return true
    }
  })
  console.log(res)
}

// * =================== Section: 类数组 ===================

// * =================== Section: 普通增删改查 ===================
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
// * 数组查找方法
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

{
  // 都是短路操作
  const arr = [1, '2', 3, 4, 5]
  console.log(arr.find((val, idx, arr) => val === '2'))
  console.log(arr.findIndex((val, idx, arr) => val === 4))

  arr.some()
  arr.every()
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
  console.log(newArr)
  let newArr2 = newArr.concat([5, 6])
  console.log(newArr2)

  let another = [...arr, 3, 4, ...[5, 6]]
  console.log(another)
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
  console.log(arr.pop())
  console.log(arr.pop())
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

function test() {}

test()

// * =================== Section: 数组算法手写 ===================
// # (多维)数组扁平化
{
  let arr = [1, 2, 3, [4, 5, 6, [7, 8, 9], 10, 11, 12], 13, 14]
  // 递归
  Array.prototype.customFlatten = function () {
    let res = []
    for (const item of this) {
      if (Array.isArray(item)) {
        res = res.concat(item.customFlatten())
      } else {
        res.push(item)
      }
    }
    return res
  }
  console.log(arr.customFlatten())
  // reduce + concat，类似递归？
  const FlattenArray1 = (arr) => {
    return arr.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? FlattenArray1(cur) : cur), [])
  }
  console.log(FlattenArray1(arr))
  // stack + ... 是数组就拆成元素再次入栈
  const FlattenArray2 = (arr) => {
    const res = []
    const s = [...arr]
    while (s.length) {
      const val = s.pop()
      if (Array.isArray(val)) {
        s.push(...val)
      } else {
        // 保持顺序不变用unshift
        res.unshift(val)
      }
    }
    return res
  }
  console.log(FlattenArray2(arr))
}

// # 数组去重算法
// arr -> Set -> arr
const arr = [1, 2, 3, 2, 4, 4]
const removeDuplicate1 = (arr) => {
  return Array.from(new Set(arr))
  return [...new Set(arr)]
}
// filter + indexOf
const removeDuplicate2 = (arr) => {
  return arr.filter((v, i, a) => {
    // if (a.indexOf(v) !== i) {
    //   return false
    // }
    // return true
    return a.indexOf(v) === i
  })
}

// 数组浅拷贝
{
  const arr = [1, 2, 3, 4, 5]
  // 浅拷贝
  console.log(arr.slice() === arr, arr.slice())
  console.log(arr.concat() === arr, arr.concat())
  console.log([...arr] === arr, [...arr])
  const newArr = Object.assign([], arr)
  console.log(newArr === arr, newArr)
  // 对于数组元素是对象/数组，浅拷贝复制的是引用
  const arr2 = [1, { name: 'zjt' }, [2]]
  const newArr2 = arr2.slice()
  newArr2[1].name = 'new_zjt'
  console.log(arr2)
}
// 数组深拷贝
{
  function cloneDeep(obj) {
    if (typeof obj !== 'object') {
      return
    }
    let newObj = obj instanceof Array ? [] : {}
    for (const element of obj) {
      console.log(element)
    }
  }
  cloneDeep([1, 2, 3])
}
