import bcrypt from 'bcrypt'
import jwt from 'jwt-simple'
import { User } from '../models/index,js'
import config from '../config/index.js'

const login = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email
    })
    if (!user) {
      return res.status(401).json({
        msg: 'Credenciales inválidas'
      })
    }

    const passwordMatched = await bcrypt.compare(
      req.body.password,
      user.password
    )

    if (!passwordMatched) {
      return res.status(401).json({
        msg: 'Credenciales inválidas'
      })
    }

    const payload = {
      userId: user.id
    }

    const token = jwt.encode(payload, config.tokens.secret)

    return res.json({
      msg: 'Login Satisfactorio',
      token
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al hacer login',
      error
    })
  }
}

export { login }
