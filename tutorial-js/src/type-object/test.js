const foo = {
  children: [],
}
const bar = {}

bar.children = foo.children

bar.children.push(1)

console.log(bar)
console.log(foo)

foo.children.push(2)

console.log(bar)
console.log(foo)
