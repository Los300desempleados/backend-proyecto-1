import jwt from 'jwt-simple'
import config from '../config/index.js'

const authValidator = (req, res, next) => {
  const token = req.headers.authorization

  if (!token) {
    return res.status(401).json({
      msg: 'Authorization no encontrada'
    })
  }

  try {
    jwt.decode(token, config.token.secret)
    next()
  } catch (error) {
    res.status(401).json({
      msg: 'Invalid token'
    })
  }
}

export default authValidator
