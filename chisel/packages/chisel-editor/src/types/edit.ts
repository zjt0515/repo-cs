import type { BlockSchemaValue } from '@/config/schema'

export const ViewPort = {
  MOBILE: 'mobile',
  DESKTOP: 'desktop',
}

export type ViewPort = 'mobile' | 'desktop'
/**
 * 通用组件配置
 */
export interface BaseBlock {
  /**
   * ID
   */
  id?: string
  /**
   * 组件
   */
  component?: string
  /**
   * 标题
   */
  title?: string
  /**
   * 图标
   */
  icon?: string
  /**
   * 是否是嵌套组件
   */
  nested?: boolean
  /**
   * 子项
   */
  children?: BaseBlock[]
  /**
   * 表单信息
   */
  formData?: BlockSchemaValue | Object
  /**
   * 父组件
   */
  parent?: string
}
