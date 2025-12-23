import { TSchema, Type } from '@sinclair/typebox'

/**
 * AllViewPortsSchema(type) -> Type.Object({desktop: type, mobile: type})
 * @param params
 * @returns
 */
export const allViewPortsSchema = <T extends TSchema>(type: T) => {
  return Type.Object({
    desktop: type,
    mobile: type,
  })
}
