import {response} from "../utils/response.js"

export const error404Handler = async function (err, req, res, next) {
 res.json(response.apiNotFound())
}

export const errorHandler = async function (err, req, res, next) {
  const msg = err.message
  res.json(response.fail(msg))
}