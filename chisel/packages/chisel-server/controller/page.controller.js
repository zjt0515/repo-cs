import Joi from 'joi'
import { pageDAO } from '../dao/index.js'
import { validate } from '../middleWare/validate.js'
import { response } from '../utils/response.js'

// TODO 完善schema校验

/**
 * 包含所有Controller方法的类
 * 每个方法，返回处理对应路由的中间件集合
 */
export class PageController {
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
      const { status, message, result } = await pageDAO.findAll(page, size)
      if (!status) {
        return res.json(response.fail(message))
      }
      else {
        return res.json(response.success(result))
      }
    }

    return [validate(schema), handler]
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
      const { status, message, result } = await pageDAO.findOne(id)
      if (!status) {
        return res.json(response.fail(message))
      }
      else {
        return res.json(response.success(result))
      }
    }

    return [validate(schema, 'params'), handler]
  }

  create() {
    const schema = Joi.object({
      name: Joi.string().min(2).max(10).required(),
      content: Joi.string().min(2).max(255),
    })
    const handler = async (req, res) => {
      const { status, message, result } = await pageDAO.create(req.body)
      if (!status) {
        return res.json(response.fail(message))
      }
      else {
        return res.json(response.success(result))
      }
    }

    return [validate(schema, 'body'), handler]
  }

  update() {
    const schema = Joi.object({
      name: Joi.string().min(2).max(10).required(),
      content: Joi.string().min(2).max(255),
    })
    const handler = async (req, res) => {
      const { id } = req.params
      const { status, message, result } = await pageDAO.update(req.body, id)
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
      const { status, message, result } = await pageDAO.delete(req.body, id)
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

// import express from 'express'
// const router = express.Router()

// getPages
// router.get('/', async (req, res, next) => {
//   // 参数校验
//   const schema = Joi.object({
//     page: Joi.number().min(1).optional(),
//     size: Joi.number().min(1).optional(),
//   })

//   const { error } = schema.validate(req.query)

//   if (error) {
//     return res.json(response.fail(error.details[0].message))
//   }
//   next()
// }, async (req, res) => {
//   // DAO
//   const { status, message, result } = await pageDAO.findAll(req.query)
//   if (!status) {
//     return res.json(response.fail(message))
//   }
//   else {
//     return res.json(response.success(result))
//   }
// })
// router.get('/:pageId', async (req, res, next) => {
// })
// router.post('/add', async (req, res, next) => {
// })
// router.post('/update', async (req, res, next) => {
// })
// router.post('/delete', async (req, res, next) => {

// })
// export default router
