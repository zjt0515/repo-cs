// 引入ui项目中的schema配置
import { schema, type ComponentSchema } from '@chisel/ui'

export const blcokSchema = schema

export type BlockSchema = typeof schema
export type BlockSchemaFromData = ComponentSchema
export type BlockSchemaKeys = keyof BlockSchema

export type BlockSchemaValue = BlockSchema[BlockSchemaKeys]
