// * =================== Section: ToString ===================
console.log(typeof String(true))
// a + ''
// 会对a调用vaoluef(), 再通过ToString抽象操作
let num = 123
let str = 123 + ''

// * =================== Section: ToNumber ===================
console.log(typeof Number('123'))

// ! 对undefined数字转换结果：NaN
console.log(Number(undefined))
console.log(Number('jt123'))

// 0
console.log(Number(null))
console.log(Number(false))

// a - 0 (*1 /1)
{
  // 对象的-
  let a = [5]
  let b = [5]
  console.log(a - b)
}

// * =================== Section: ToBoolean ===================
console.log(typeof Boolean(1))

// Boolean() 不常用
{
  console.log(Boolean(0))
  console.log(Boolean(NaN))
  console.log(Boolean(''))
  console.log(Boolean(null))
  console.log(Boolean(undefined))
}
// 常用 !!
{
  console.log(!!0)
  console.log(!!NaN)
  console.log(!!'')
  console.log(!!null)
  console.log(!!undefined)
}
// // ! true 非空的字符串都是true
// console.log(Boolean({}))
// console.log(Boolean('0'))
// console.log(Boolean(' '))

// ! 显式的隐式 彻底杜绝
// b = a? true:false
{
  a = {}
  let b = a ? true : false
}
