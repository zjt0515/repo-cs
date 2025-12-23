import Joi from 'joi'
import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '../config/index.js'
import { userDAO } from '../dao/index.js'
import { validate } from '../middleWare/validate.js'
import { response } from '../utils/response.js'

// TODO 完善schema校验

/**
 * 包含所有Controller方法的类
 * 每个方法，返回处理对应路由的中间件集合
 */
export class UserController {
  findAll() {
    // validate-schema
    const schema = Joi.object({
      page: Joi.number().min(1).optional(),
      size: Joi.number().min(1).optional(),
    })

    // dao
    const handler = async (req, res) => {
      // 参数处理
      const { page, size } = req.query
      const { status, message, result } = await userDAO.findAll(page, size)
      if (!status) {
        return res.json(response.fail(message))
      }
      else {
        return res.json(response.success(result))
      }
    }

    return [validate(schema, 'query'), handler]
  }

  findOne() {
    // validate-schema
    const schema = Joi.object({
      id: Joi.number().min(1),
    })

    // dao
    const handler = async (req, res) => {
      // 参数处理
      const { id } = req.params
      const { status, message, result } = await userDAO.findOne(id)
      if (!status) {
        return res.json(response.fail(message))
      }
      else {
        return res.json(response.success(result))
      }
    }

    return [validate(schema, 'params'), handler]
  }

  register() {
    const schema = Joi.object({
      username: Joi.number().min(6).max(20).required(),
      password: Joi.number().min(8).max(32).required(),
    })
    const handler = async (req, res) => {
      const { status, message, result } = await userDAO.register(req.body)
      if (!status) {
        return res.json(response.fail(message))
      }
      else {
        return res.json(response.success(result))
      }
    }

    return [validate(schema, 'body'), handler]
  }

  login() {
    const schema = Joi.object({
      username: Joi.number().min(6).max(20).required(),
      password: Joi.number().min(8).max(32).required(),
    })
    const handler = async (req, res) => {
      const { status, message, result } = await userDAO.login(req.body)
      const [firstResult] = result
      if (!status) {
        return res.json(response.fail(message))
      }
      else {
        // 生成jwt token
        const token = jwt.sign({ id: firstResult.user_id }, SECRET_KEY, { expiresIn: '24h' })
        return res.json(response.success({ ...firstResult, token }))
      }
    }

    return [validate(schema, 'body'), handler]
  }

  update() {
    const schema = Joi.object({
      username: Joi.number().min(2).max(20).required(),
      password: Joi.number().min(8).max(32).required(),
    })
    const handler = async (req, res) => {
      const { id } = req.params
      const { status, message, result } = await userDAO.update(req.body, id)
      if (!status) {
        return res.json(response.fail(message))
      }
      else {
        return res.json(response.success(result))
      }
    }

    return [validate(schema, 'body'), handler]
  }

  delete() {
    const schema = Joi.object({
      id: Joi.number().required(),
    })
    const handler = async (req, res) => {
      const { id } = req.params
      const { status, message, result } = await userDAO.delete(req.body, id)
      if (!status) {
        return res.json(response.fail(message))
      }
      else {
        return res.json(response.success(result))
      }
    }

    return [validate(schema, 'params'), handler]
  }
}
