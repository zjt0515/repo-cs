import cors from 'cors'
import express from 'express'
import { expressjwt } from 'express-jwt'
import { SECRET_KEY } from './config/index.js'
import { pageController, userController } from './controller/index.js'
import { query } from './db/mysql.js'
import { authFailedHandler } from './middleWare/auth.js'
import { error404Handler, errorHandler } from './middleWare/error.js'
import { response } from './utils/response.js'
import 'express-async-errors'

const app = express()

// cors
app.use(cors())
app.use(express.json())
// unless:白名单
app.use(expressjwt({
  secret: SECRET_KEY,
  algorithms: ['HS256'],
}).unless({
  path: ['/api/v1/user/register', '/api/v1/user/login'],
}))
// , /^\/api\/v1\/page/
const port = 3000

app.listen(port, () => {
  console.warn(`Express app listening on port: ${port}`)
})

app.get('/test', async (req, res) => {
  const sql = `SELECT * FROM page WHERE page_id = ? LIMIT 1`
  const params = [1]
  const result = await query(sql, params)
  res.json(response.success(result))
})

// page router
// TODO注意顺序? get和use有什么区别
app.get('/api/v1/page', pageController.findAll())
app.get('/api/v1/page/:id', pageController.findOne())

// user
app.post('/api/v1/user/register', userController.register())
app.post('/api/v1/user/login', userController.login())

// 全局的错误中间件
app.use(authFailedHandler)
app.use(errorHandler)
app.use('*', error404Handler)
