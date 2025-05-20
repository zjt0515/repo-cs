import { config } from './../node_modules/rxjs/src/internal/config'
import { transformRequest } from './helpers/data'
import { processHeaders } from './helpers/header'
import { buildURL } from './helpers/url'
import { AxiosRequestConfig } from './types'
import xhr from './xhr'

function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

/**
 * 处理config
 * @param config
 */
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  // 先处理headers，再处理data
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

/**
 * url拼接params
 * @param config
 * @returns
 */
function transformURL(config: AxiosRequestConfig): string {
  // 调用工具方法
  const { url, params } = config
  return buildURL(url, params)
}
/**
 * 处理请求数据
 * @param config
 * @returns
 */
function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

function transformHeaders(config: AxiosRequestConfig): any {
  // headers = {} 保证headers存在
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}
export default axios
