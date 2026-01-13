import { response } from '../utils/response.js'

// export async function error404Handler(err, req, res) {
//   res.json(response.apiNotFound())
// }

export async function errorHandler(err, req, res) {
  const msg = err.message
  res.json(response.fail(msg))
}

// dao执行环境, 错误自动捕获
export async function daoErrorHandler(handler) {
  if (typeof handler !== 'function') {
    throw new TypeError('handler must be a function')
  }
  try {
    const result = await handler()
    return { status: true, result }
  }
  catch (error) {
    return { status: false, message: error }
  }
}
