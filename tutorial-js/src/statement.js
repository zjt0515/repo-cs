// * =================== Section: if ===================
if (!0) {
  console.log('0是false')
}
if (!'') {
  console.log('空字符串是false')
}
if (!null) {
  console.log('null是false')
}
if (!undefined) {
  console.log('undefined是false')
}
if (!NaN) {
  console.log('NaN是false')
}
// true
if ({}) {
  console.log('空对象是true')
}

// * =================== Section: for ===================
let arr = [1, 2, 3, '4', '5', '6']
// fori
for (let i = 0; i < 10; i++) {}

// forin 遍历可枚举属性名
for (const prop in arr) {
  console.log(prop, typeof prop)
}
// forof 遍历可迭代对象

// * =================== Section: while ===================
while (true) {}

do {} while (true)
