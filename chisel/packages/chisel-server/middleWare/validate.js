// 验证参数中间件封装
// 返回中间件函数
export const validate = (schema, key = 'query') => {
  return (req, res, next) => {
    const { error } = schema.validate(req[key])
    if (error) {
      return res.json(response.fail(error.details[0].message))
    }
    next()
  }
}