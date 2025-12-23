/**
 * dao执行过程错误处理中间件，返回给service层
 * @param {*} handler () => query(...)
 * @returns
 */
export async function daoErrorHandler(handler) {
  if (typeof handler !== 'function') {
    throw new TypeError('handler is not a function')
  }

  try {
    const result = await handler()
    return { status: true, result }
  }
  catch (err) {
    return { status: false, message: err }
  }
}
