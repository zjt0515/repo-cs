import { cook, sweep, wash } from './util'
cook()
wash()
sweep()

cook()
  .then(() => wash())
  .then(() => sweep)

// * =================== Section: Promise 静态方法 ===================
const p1 = Promise.resolve(1)
const errP = Promise.reject(1)
console.log(p1)
// new Promise((resolve) => resolve(1))
// new Promise((resolve, reject) => reject(1))

const allResolvedPromisesPromise = Promise.all([Promise.resolve(1), Promise.resolve(2)])
setTimeout(() => {
  console.log(allResolvedPromisesPromise) // Promise { [ 1, 2 ] }
}, 1000)
