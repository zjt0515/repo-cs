// * =================== Section: var ===================
// scope
// var变量: 全局/函数作用域
var global = 'globalScope'
function test() {
  var funcScope = 'funcScope'
}

// 在非函数的块级作用域中，外部可以访问var
{
  var canBeUsed = 'canBeUsed'
}
console.log(canBeUsed);


// var变量提升
{
  // var test
  console.log(test);
  var test = 'hello'
}

// * =================== Section: let & const ===================
// scope：块级作用域
{ let test }
// 不能重新声明
let let1 = 1
// let let1 = 2

// 变量提升
{
  let test
  console.log(test);
  // let test = 'hello'
}

// * =================== Section: 基础/原始类型 ===================
// 1. number
// 2. string
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol

// undefined: 未被赋值
let und
console.log(und)
console.log(null == undefined)
console.log(null === undefined)
// * =================== Section: 隐式转换 ===================
/**
 * 宽松比较==
 */
// NaN：和任意都不==
console.log(NaN == NaN) // false

// null undefined
console.log(null == undefined) // true
console.log(null == 0) // false
// NaN

// boolean 和其他：boolean转成数字

// 数字和字符串：转成数字
console.log('0' == false) // true


