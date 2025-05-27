let clg = console.log
// generator函数
function* generateSequence() {
  yield 1;
  yield 2;
  return 3
}

let generator = generateSequence()
console.log(generator);
// next()返回{value:xx, done: true/false}
// clg(generator.next())
// clg(generator.next())
// clg(generator.next())

// generator对象可迭代
for (const value of generator) {
  clg(value)
}