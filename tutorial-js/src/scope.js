// * =================== Section: global ===================
// 未定义，直接赋值的变量
function inner() {
  i = 1
}
inner()
console.log(i)

// * =================== Section: let 块级===================
for (let z = 0; z < 3; z++) {
  console.log(z)
}

let z1 = 0
for (; z1 < 5; z1++) {
  console.log(z1)
}
// * =================== Section: var ===================
// i 和 j都是全局作用域，全局变量
var i = 0

for (var j = 0; j < 3; j++) {
  console.log(i, j)
}
console.log(j)

function test() {
  // 函数作用域
  var a = 100
}
console.log(a) // error
