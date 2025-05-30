let quantity = 2;
let price = 10
let p = {
  price,
  quantity
}

let total = 0

let effect = () => {
  total = p.price * p.quantity
}

Object.defineProperty(p, 'price', {
  set(newVal) {
    console.log('setter')
    price = newVal
    effect()
  },
  get() {
    console.log('getter')
    return price
  }
})

// effect()
// console.log(total)

p.price = 20

console.log(total)