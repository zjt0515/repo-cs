import { isNil, isObject } from 'lodash'

/**
 * 通用服务端错误响应
 * @param title
 * @param error
 * @param code
 * @returns {code, message}
 */
export const createErrorResult = (title: string, error?: any, code?: number) => {
  let message = title
  if (!isNil(error)) {
    message =
      error instanceof Error || (isObject(error) && 'message' in error)
        ? `${title}:${error.message}`
        : `${title}:${error.toString()}`
  }
  return { code, message }
}
