export type Method =
  'get' | 'GET' |
  'post' | 'POST' |
  'delete' | 'DELETE' |
  'put' | 'PUT' |
  'options' | 'OPTIONS';

export interface AxiosRequestConfig {
  method?: Method

  validateStatus?: (status: number) => boolean
}

export interface Axios {
  defaults: AxiosRequestConfig
  request: (config: AxiosRequestConfig) => Promise<any>
}

export interface AxiosInstance extends Axios {}
