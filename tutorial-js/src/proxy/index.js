let product = {
  price: 10,
  quantity: 2,
}

let total = 0

let effect = () => {
  total = proxyProduct.price * proxyProduct.quantity
}

const proxyProduct = new Proxy(product, handler)

const handler = {
  set(target, key, newVal, receiver) {
    // console.log('setter')

    target[key] = newVal
    effect()

    return true
  },
  get(target, key, receiver) {
    // console.log('getter')

    return target[key]
  },
}
// 通过代理对象触发
proxyProduct.price
proxyProduct.price = 20

console.log(total)
// effect()

// console.log(total)

// * =================== Section: Refelct ===================
const zhangSan = {
  lastName: '张',
  firstName: '三',
  get fullName() {
    return this.lastName + this.firstName
  },
}
const liSi = {
  lastName: '李',
  firstName: '四',
  get fullName() {
    return this.lastName + this.firstName
  },
}
const proxy = new Proxy(zhangSan, {
  get(target, key, receiver) {
    console.log('getter')
    // 单次触发
    // return target[key]

    // 三次触发
    return Reflect.get(target, key, receiver)
  },
})
console.log(zhangSan.fullName)
console.log(Reflect.get(zhangSan, 'fullName', liSi))
