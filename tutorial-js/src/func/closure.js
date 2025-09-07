let i = 10
let not_use_i = 10.5
function a() {
  let j = 20
  let not_use_j = 20.5
  function b() {
    let k = 30
    let not_use_k = 30.5
    function c() {
      console.log(i, j, k)
    }
    c()
  }
  b()
}

a()
// 嵌套函数的词法作用域规则：定义时就明确了
let scope = 'global'
function checkScope() {
  let scope = 'local'
  function f() {
    return scope
  }
  // return f()
  return f
}
// console.log(checkScope())
console.log(checkScope()())

// 函数定义时的作用域链到函数执行时依然有效

function counter() {
  let n = 0

  return {
    count: function () {
      n++
    },
    reset: function () {
      n = 0
    },
    get: function () {
      return n
    },
  }
}
counter()
let c = counter(),
  d = counter()
c.count()
c.count()
c.reset()
c.count()
c.count()
console.log(c.get())
console.log(d.get())
// * =================== Section: 闭包垃圾回收===================
function Check() {
  let on = 'on' // 有引用，不被销毁
  let off = 'off' // 被销毁
  return function () {
    console.log(on)
  }
}
let alawys = Check()
alawys()

// * =================== Section: 应用场景 ===================
// 解决全局变量污染
var name = 'globalName'

function initComponentName() {
  let name = 'componentName'
  function logName() {
    console.log(name)
  }
  return function () {
    logName()
  }
}

function initColorName() {
  let name = 'colorName'
  function logName() {
    console.log(name)
  }
  return function () {
    logName()
  }
}

// * =================== Section: 面试题 ===================
{
  // 3 3 3
  for (var count1 = 0; count1 < 3; count1++) {
    setTimeout(function () {
      console.log(count1)
    }, 1000)
  }
  // 0 1 2
  for (let count2 = 0; count2 < 3; count2++) {
    setTimeout(function () {
      console.log(count2)
    }, 1000)
  }
  // 0 1 2 使用立即执行函数保存中途的变量
  // 让setimeout不再访问外部变量
  for (var count3 = 0; count3 < 3; count3++) {
    ;(function test(i) {
      // 将外部变量count3作为参数传入，不会创建闭包(local)
      setTimeout(function () {
        console.log(i)
      }, 1000)
    })(count3)
  }
}
