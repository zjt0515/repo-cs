// * =================== Section: async ===================
async function fn() {
  return 123
}
// fn().then((data) => {
//   console.log(data)
// })

{
  async function test() {
    await fn()
  }

  test()
}

// 没有回调
;(async () => {
  try {
    const data = await delay(1000)
    console.log('success')
  } catch (error) {
    console.log('error')
  }
})()

// delay(1000).then(
//   (data) => {},
//   (err) => {}
// )
// * =================== Section: 面试题 ===================
{
  async function m() {
    console.log(0)
    const n = await 1
    console.log(2)
  }
  console.log(m()) // Promise{<pending>}
  console.log(1)
}

{
  async function m() {
    console.log(0)
    const n = await 1
    console.log(2)
  }
  ;(async () => {
    await m()
    console.log(3)
  })()
  console.log(1)
}
