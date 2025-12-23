import dayjs from 'dayjs'
import { customAlphabet } from 'nanoid'
import { query } from '../db/mysql.js'
import { daoErrorHandler } from '../utils/dao-errors.js'

// 每个方法就是DAO层调用数据库
// 返回值查看daoErrorHandler封装
// TODO 检查sql，尤其是findOne
export class UserDAO {
  async findOne(id) {
    const sql = `SELECT * FROM user WHERE user_id = ?`
    const params = [id].map(String)
    const result = await daoErrorHandler(() => query(sql, params))
    return result
  }

  async findAll(page = 1, size = 10) {
    const sql = `SELECT * FROM user ORDER BY user_id DESC LIMIT ?,?`
    const params = [(page - 1) * size, size].map(String)
    const result = await daoErrorHandler(() => query(sql, params))
    return result
  }

  async register(body) {
    // 构建sql
    const keys = Object.keys(body)
    const realKeys = [...keys, 'create_time']
    const sqlKeys = realKeys.join(',')
    const sqlValues = realKeys.map(() => '?').join(',')
    const sql = `INSERT INTO user (${sqlKeys}) VALUES (${sqlValues})`

    // 构建params
    const { username, password } = body
    const nanoid = customAlphabet('1234567890abcdef', 10)
    const id = nanoid()
    const time = dayjs().format()
    const params = [id, username, password, time].map(String)
    const result = await daoErrorHandler(() => query(sql, params))
    return result
  }

  async login(body) {
    // 构建sql
    const sql = `SELECT user_id FROM user WHERE username = ? and password = ? LIMIT 1`

    // 构建params
    const { username, password } = body
    const params = [username, password].map(String)
    const result = await daoErrorHandler(() => query(sql, params))
    return result
  }

  async update(body, id) {
    const values = Object.values(body)

    const sql = `UPDATE user set name = ?, content = ?, update_time = ? where user_id = ?`

    const time = dayjs().format()
    const params = [...values, time, id].map(String)
    const result = await daoErrorHandler(() => query(sql, params))
    return result
  }

  async remove(id) {
    // 构建keys
    const sql = `DELETE FROM user where user_id = ?`

    const params = [id].map(String)
    const result = await daoErrorHandler(() => query(sql, params))
    return result
  }
}
