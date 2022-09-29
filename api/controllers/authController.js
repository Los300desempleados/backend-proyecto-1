import jwt from 'jwt-simple'
import bcrypt from 'bcrypt'
import { User } from '../models/index.js'
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

const register = async (req, res) => {
  try {
    // Encripto contraseña
    const encrypted = await bcrypt.hash(req.body.password, 10)

    // Modifico el body para remplazar el pass con una encriptada
    req.body.password = encrypted

    // Creamos un usuario
    const user = await User.create(req.body)

    // Borramos el password para no mandarla en la respuesta
    user.password = undefined

    return res.json({
      msg: 'Usuario registrado exitosamente',
      user
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error al registrar usuario',
      error
    })
  }
}

export { register, login }
