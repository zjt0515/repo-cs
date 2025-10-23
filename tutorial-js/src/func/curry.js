/**
 * 柯里化函数
 * @param {*} func
 */
function curry(func) {
  return function curried(...rest1) {
    // 达到应有的参数数量
    if (rest1.length >= func.length) {
      // 调用
      return func.apply(this, ...rest1)
    } else {
      // 参数不足：返回包装器
      return function (...rest2) {
        // 重新应用curried
        // 拼接参数
        return curried.apply(this, rest1.concat(rest2))
      }
    }
  }
}

function sum(a, b) {
  return a + b
}

const _sum = curry(sum)

console.log(sum(1, 2))
console.log(_sum(1, 2))
console.log(_sum(1)(2))
