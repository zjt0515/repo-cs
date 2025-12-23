// const mysql = require('mysql2');

// Create the connection to database
// const connection = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'root',
//   database: 'chisel',
// });

// import mysql from 'mysql2/promise';
import mysql from 'mysql2';
// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'chisel',
  port: '3306',
  connectionLimit: 5,
  waitForConnections: true,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

const Query = (sql, params) => {
  return new Promise(function (resolve, reject) {
    pool.getConnection((err, connection) => {
      if (err instanceof Error) {
        reject(err)
        return
      }
      connection.execute(sql, params, function (err, results) {
        if (err) {
          reject(err)
        } else {
          resolve(results)
        }
        pool.releaseConnection(connection)
      })
    })
  })
}
// pool.releaseConnection()

export const query = Query