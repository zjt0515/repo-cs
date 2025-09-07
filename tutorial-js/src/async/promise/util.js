export function cook() {
  return new Promise((resolve, reject) => {
    console.log('start cook')
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve('cook Finished')
      } else {
        reject('cook Error')
      }
    }, 2000)
  })
}
export function wash() {
  return new Promise((resolve, reject) => {
    console.log('start wash')
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve('wash Finished')
      } else {
        reject('wash Error')
      }
    }, 2500)
  })
}
export function sweep() {
  return new Promise((resolve, reject) => {
    console.log('start sweep')
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve('SWEEP Finished')
      } else {
        reject('SWEEP Error')
      }
    }, 3000)
  })
}
