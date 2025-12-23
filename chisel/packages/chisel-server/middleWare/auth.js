import { response } from '../utils/response.js'

export function authFailedHandler(err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    return res.json(response.authorizeFailed())
  }
  next()
}
