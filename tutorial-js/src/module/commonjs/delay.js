/**
 * 返回一个promise, ms后完成
 * @param {*} ms
 * @returns
 */
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

module.exports = delay
