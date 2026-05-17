type NonNull<T> = T extends null ? never : T

interface _DeepFormItemArray<T> extends Array<DBFormData<NonNull<T>>> {}

type _DeepFormItemObject<T> = {
  [P in keyof T]-?: DBFormData<NonNull<T[P]>>
}

/**
 * 构建没有skip的深层类型(你也可以直接关掉strictUndefinedChecks, 详情查看https://www.prisma.io/docs/orm/prisma-client/special-fields-and-types/null-and-undefined)
 */
export type DBFormData<T> = T extends (...args: any[]) => any
  ? T
  : T extends any[]
    ? _DeepFormItemArray<T[number]>
    : T extends object
      ? _DeepFormItemObject<T>
      : T

/**
 * 分页原数据
 */
export interface PaginateMeta {
  /**
   * 当前页项目数量
   */
  itemCount: number
  /**
   * 项目总数量
   */
  totalItems?: number
  /**
   * 每页显示数量
   */
  perPage: number
  /**
   * 总页数
   */
  totalPages?: number
  /**
   * 当前页数
   */
  currentPage: number
}

/**
 * 分页选项
 */
export interface PaginateOptions {
  /**
   * 当前页数
   */
  page?: number
  /**
   * 每页显示数量
   */
  limit?: number
}

/**
 * 分页返回数据
 */
export interface PaginateReturn<E extends Record<string, any>> {
  meta: PaginateMeta
  items: E[]
}

export interface IPost {
  /**
   * 文章ID
   */
  id: string
  /**
   * 文章标题
   */
  title: string
  /**
   * 文章内容
   */
  body: string
  /**
   * 文章封面图
   */
  thumb: string
  /**
   * 文章摘要
   */
  summary?: string

  createdAt: string
  updatedAt: string
}
