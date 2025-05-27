console.log(23 === 23.0)
console.log(0.1 + 0.2 === 0.3)

// * =================== Section: NaN ===================
console.log(6 / 0);
console.log(0 / 0); // NaN

// NaN与任何相加 === NaN
console.log(NaN + true);
console.log(NaN + null);
console.log(NaN + undefined);

// NaN与任何值都不相等
console.log(NaN === NaN);
console.log(NaN === undefined);
console.log(NaN === null);

// isNaN 先尝试转换为数字，无法转换返回true
console.log(isNaN("123"));
console.log(isNaN("hello"));

// 直接检查一个值是否为NaN
console.log(Number.isNaN("123"));
console.log(Number.isNaN("hello"));



// * =================== Section: 转换 Conversion ===================
// string to number
console.log(Number('23'))
console.log(+'23')

// Parsing
console.log(Number.parseInt('23'))
console.log(Number.parseInt('23px '))
console.log(Number.parseInt('e23')) // NaN
console.log(Number.parseFloat('e23')) // NaN

// console.log(parseFloat(' 2.5rem'))

// Check if is NaN
Number.isNaN(20)
Number.isNaN('20')
Number.isNaN(+'20X') // true
Number.isNaN(23 / 0) // Infinite

// Check if is a number
Number.isFinite(20)

// Check if is a Integer
Number.isInteger

// * =================== Section: 不精确问题 ===================
console.log(0.1 + 0.2);

// 手搓十进制二进制转换
function numToString(val, radix) {
  if (radix === 2) {
    // val.
  }
}
console.log(9.375 % 2);

// * =================== Section: 进制 ===================
{
  let num = 65535
  console.log(num.toString(3))
  console.log(num.toString(2))
}

// * =================== Section: Math方法 ===================
// max, min
console.log(Math.max(1, 2, 3, 4))
console.log(Math.min(1, 2, 3, 4))

// n的power次幂
console.log(Math.pow(2, 16), Math.pow(2, 32))


// 向下取整
console.log(Math.floor(3.5))
// 向上取整
console.log(Math.ceil(3.5))
// 四舍五入
console.log(Math.round(3.4), Math.round(3.5))
// 忽略小数点后面的数
console.log(Math.trunc(3.5), Math.trunc(-3.5))

// parseInt取整
{
  // 正数向下，负数向上
  let num1 = 4.2
  let num2 = -4.2
  console.log(parseInt(num1));
  console.log(parseInt(num2));
}
// 随机数
console.log(Math.random()) // [0-1)

// ? min-max之间的随机整数实现
// ! 要求1：范围正确
// ! 要求2: 概率相同
function randomInt(min, max) {
  let num1 = Math.random() * (max - min + 1) // [0, max-min + 1)
  let num2 = min + num1 // [min, max + 1)
  return Math.floor(num2) // [min, max]
}
let res = [0, 0, 0, 0]
for (let index = 0; index < 10000000; index++) {
  let tmp = randomInt(1, 3)
  res[tmp] += 1
}
console.log(res)
