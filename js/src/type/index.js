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

// * =================== Section: typeof ===================
// 识别基础和引用类型，返回类型名的string

// 特殊
console.log(typeof null) // object
console.log(typeof NaN) // number
// console.log(typeof document.all) // undefined

// * =================== Section: instanceof ===================
// 在原型链上查找，右操作数是否在左操作数的原型链上
