import request from '@/utils/request'
import axios from 'axios';

/**
 * 获取分类列表
 * @returns 
 */
export const getCategory = () => {
  return request({
    url: '/category'
  })
}

