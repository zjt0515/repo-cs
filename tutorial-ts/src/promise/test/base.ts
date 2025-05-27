import { Promise } from '..'

let promise = new Promise((resolve, rejet) => {
  resolve(1)
})

promise.then(
  (data) => {
    console.log(data)
  },
  (reason) => {
    console.log(reason)
  }
)
