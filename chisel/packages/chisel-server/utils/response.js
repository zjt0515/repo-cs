const SUCCESS = { code: 200, message: 'success' }
const FAIL = { code: 500, message: 'fail' }
const VALIDATE_FAILED = { code: 400, message: 'validate faild' }
const AUTHORIZE_FAILED = { code: 401, message: 'authorize faild' }
const API_NOT_FOUND = { code: 404, message: 'api not found' }

// TODO 参数校验失败，msg中要显示什么参数，失败原因
class Response {
  code
  message
  data
  constructor(code, message, data) {
    this.code = code
    this.message = message || ''
    this.data = data || null
  }

  static success(data) {
    return new Response(SUCCESS.code, SUCCESS.message, data)
  }

  static fail(msg) {
    return new Response(FAIL.code, `${FAIL.message}: ${msg}`)
  }

  static validateFailed(keys) {
    return new Response(VALIDATE_FAILED.code, `${VALIDATE_FAILED.message}${keys ? `:${keys}` : ''}`)
  }

  static authorizeFailed(msg) {
    return new Response(AUTHORIZE_FAILED.code, `${AUTHORIZE_FAILED.message}: ${msg}`)
  }

  static apiNotFound() {
    return new Response(API_NOT_FOUND.code, API_NOT_FOUND.message)
  }
}

export const response = Response
