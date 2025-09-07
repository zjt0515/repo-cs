const a = 1
const b = () => {
  console.log('b')
}
const arr = [1, 2, 3, 4, 5]
const [item1, item2] = arr

const obj = {
  c: 1,
  d: 2,
}
const { c, d } = obj

// promise
new Promise((resolve, reject) => {
  resolve('')
})

// class
class Person {}

Person()
