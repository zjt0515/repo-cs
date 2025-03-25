/**
 * Axios实例
 */
import type { AxiosRequestConfig, Axios as IAxios } from '@/types';
import { defineConfig } from 'vite';

export default class Axios implements IAxios {
  defaults: AxiosRequestConfig;
  constructor(initConfig: AxiosRequestConfig) {
    this.defaults = initConfig;
  }

  request(url: string | AxiosRequestConfig, config: AxiosRequestConfig = {}): Promise<any> {
  }
}
