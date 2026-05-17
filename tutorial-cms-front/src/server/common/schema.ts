import { z } from 'zod'

// 通用错误响应结构
export const errorSchema = z.object({
  code: z.number().optional().meta({ type: 'number' }),
})
