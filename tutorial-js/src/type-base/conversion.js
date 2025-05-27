// * =================== Section: to string ===================
console.log(typeof String(true))

// * =================== Section: to number ===================
console.log(typeof Number('123'))

// ! 对undefined数字转换结果：NaN
console.log(Number(undefined))
console.log(Number('jt123'))

// 0
console.log(Number(null))
console.log(Number(false))

// * =================== Section: to boolean ===================
console.log(typeof Boolean(1))

// false
console.log(Boolean(0))
console.log(Boolean(NaN))
console.log(Boolean(''))
console.log(Boolean(null))
console.log(Boolean(undefined))

// ! true 非空的字符串都是true
console.log(Boolean({}))
console.log(Boolean('0'))
console.log(Boolean(' '))
