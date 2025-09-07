// * =================== Section: 创建自定义iterable ===================
// 可以forof的对象是可迭代的
let customIterable = {
  from: 1,
  to: 5,
}
// forof循环启动后，调用可迭代对象的Symbol.iterator方法获取迭代器对象
customIterable[Symbol.iterator] = function () {
  // 返回迭代器对象
  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ }
      } else {
        return { done: true }
      }
    },
  }
}

for (const item of customIterable) {
  console.log(item)
}
// * =================== Section: 常见可迭代对象 ===================
// string
for (const char of 'string') {
  console.log(char)
}
// array
for (const item of [1, 2, 3]) {
  console.log(item)
}

// * =================== Section: 解构赋值 ===================
let [a, b, c, d, e] = customIterable
console.log(a, b, c, d, e)

// * 特殊用法
// 不需要第二个元素
let [firstName, , title] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic']
// 交换变量
{
  let a = 1
  let b = 2
  [a, b] = [b, a]
  console.log(a, b)
}
