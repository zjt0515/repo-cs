import axios from "axios";


const service = axios.create({
  // 根据项目状态自动切换
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000
})


/**
 * 响应拦截器
 * then之前被调用
 */
service.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  const { success, message, data } = response.data

  if (success) {
    return data
  } else {
    // TODO：业务请求错误
    return Promise.reject(new Error(message))
  }
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
});


export default service