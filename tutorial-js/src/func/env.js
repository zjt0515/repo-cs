const res = []

function addRes() {
  res.push([1])
}

addRes()
console.log(res)

{
  function f() {
    let count = 0
    return function () {
      count++
      console.log(count)
    }
  }
  // 返回的函数被保存
  let g = f()
  g()
  g()
  g()
  g = null
  g = f()
  g()
}
