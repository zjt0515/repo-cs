const allPromises = Promise.all([Promise.resolve(1), Promise.resolve(2)])
setTimeout(() => {
  console.log(allPromises)
}, 1000)