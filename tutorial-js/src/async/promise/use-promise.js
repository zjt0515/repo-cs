let errPromise = new Promise((res, rej) => {
  rej(new Error('abc'))
})

// 只处理失败, 效果完全一样
promise.catch(onRejected)
promise.then(null, onRejected)

new Promise((res) => {
  console.log('learning')
  res()
})
  .then(() => {
    console.log('examing')
  })
  .then(() => {})

{
  const p1 = new Promise((res, rej) => {
    res(1)
  })
  // const p2 = p1.then(() => {})
  const p2 = p1.catch(() => {})

  setTimeout(() => {
    console.log(p1)
    console.log(p2)
  }, 1000)
}
{
  const p1 = new Promise((res, rej) => {
    rej(0)
  })
  // const p2 = p1.then(() => {})
  const p2 = p1.catch(() => {})

  setTimeout(() => {
    console.log(p1)
    console.log(p2)
  }, 1000)
}
// * =================== Section:  ===================
function onRejected() {
  console.log('失败')
}

// * =================== Section: 链式调用面试题 ===================
{
  const p1 = new Promise((resolve, rej) => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })

  const p2 = p1.then((data) => {
    console.log(data)
    return data + 1
  })

  const p3 = p2.then((data) => {
    console.log(data)
    // return undefined
  })
  // pending
  console.log(p1, p2, p3)
  // 1 2 undefined
  setTimeout(() => {
    console.log(p1, p2, p3)
  }, 2000)
}
{
  const p1 = new Promise((resolve, rej) => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })

  const p2 = p1.then((data) => {
    throw 3
    return data + 1
  })

  const p3 = p2.then((data) => {
    console.log(data)
    // return undefined
  })
  // 1 rejected-3 rejected-3
  setTimeout(() => {
    console.log(p1, p2, p3)
  }, 2000)
}
