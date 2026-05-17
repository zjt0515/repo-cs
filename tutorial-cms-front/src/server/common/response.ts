import type { ZodType } from 'zod'

import { resolver } from 'hono-openapi'

import { errorSchema } from './schema'

export const createOpResponse = <T extends ZodType, S extends number>(
  schema: T,
  status: S,
  description: string,
) => {
  return {
    [status]: {
      description,
      content: { 'application/json': { schema: resolver(schema) } },
    },
  }
}

/**
 * OP Success
 * @param schema
 * @param description
 */
export const createOpSuccessResponse = <T extends ZodType>(schema: T, description?: string) => {
  return createOpResponse(schema, 200, description ?? '请求成功')
}

/**
 * OP 201Success
 * @param schema
 * @param description
 */
export const createOp201SuccessResponse = <T extends ZodType>(schema: T, description?: string) => {
  return createOpResponse(schema, 201, description ?? '请求成功')
}

/**
 * OP ErrorResponse
 * 创建OpenAPI异常响应信息
 * @param description
 */
export const createErrorResponse = <S extends number>(description: string, status: S) => {
  return {
    [status]: {
      description,
      content: { 'application/json': { schema: resolver(errorSchema) } },
    },
  }
}

/**
 * OP ValidatorErrorResponse
 * 创建请求数据验证失败的响应信息
 * @param description
 */
export const createValidatorErrorResponse = (description?: string) => {
  return createErrorResponse(description ?? '请求数据验证失败', 400);
};

/**
 * OP ServerErrorResponse
 * 创建服务器错误响应信息
 * @param description
 */
export const createServerErrorResponse = (description?: string) => {
  return createErrorResponse(description ?? '服务器错误', 500);
};

/**
 * OP NotFoundErrorResponse
 * 创建数据不存在响应信息
 * @param description
 */
export const createNotFoundErrorResponse = (description?: string) => {
  return createErrorResponse(description ?? '数据不存在', 404);
};
