import dayjs from 'dayjs'
import { query } from '../db/mysql.js'
import { daoErrorHandler } from '../utils/dao-errors.js'

// 每个方法就是DAO层调用数据库
// 返回值查看daoErrorHandler封装
export class PageDAO {
  async findOne(id) {
    const sql = `SELECT * FROM page WHERE page_id = ?`
    const params = [id].map(String)
    const result = await daoErrorHandler(() => query(sql, params))
    return result
  }

  async findAll(page = 1, size = 10) {
    const sql = `SELECT * FROM page ORDER BY page_id DESC LIMIT ?,?`
    const params = [(page - 1) * size, size].map(String)
    const result = await daoErrorHandler(() => query(sql, params))
    return result
  }

  async create(body) {
    const keys = Object.keys(body)
    const values = Object.values(body)
    // 构建keys
    const realKeys = [...keys, 'create_time']
    const sqlKeys = realKeys.join(',')
    const sqlValues = realKeys.map(() => '?').join(',')
    const sql = `INSERT INTO page (${sqlKeys}) VALUES (${sqlValues})`

    const time = dayjs().format()
    const params = [...values, time].map(String)
    const result = await daoErrorHandler(() => query(sql, params))
    return result
  }

  async update(body, id) {
    const values = Object.values(body)

    const sql = `UPDATE page set name = ?, content = ?, update_time = ? where page_id = ?`

    const time = dayjs().format()
    const params = [...values, time, id].map(String)
    const result = await daoErrorHandler(() => query(sql, params))
    return result
  }

  async remove(id) {
    // 构建keys
    const sql = `DELETE FROM page where page_id = ?`

    const params = [id].map(String)
    const result = await daoErrorHandler(() => query(sql, params))
    return result
  }
}
