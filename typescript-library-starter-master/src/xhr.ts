import { AxiosRequestConfig } from './types'

export default function xhr(config: AxiosRequestConfig): void {
  const { data = null, url, method = 'get', headers } = config
  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url, true)

  // 设置请求头
  Object.keys(headers).forEach(key => {
    if (data === null && key.toLowerCase() === 'content-type') {
      // 没有数据时content-type无意义
      delete headers[key]
    } else {
      request.setRequestHeader(key, headers[key])
    }
  })

  request.send(data)
}
