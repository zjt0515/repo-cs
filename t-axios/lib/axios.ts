import type { AxiosInstance, AxiosRequestConfig } from './types';

function createInstance(config: AxiosRequestConfig): AxiosInstance {
  const context = new Axios(config);

  return context as AxiosInstance;
}

const axios = createInstance({});

export default axios;
