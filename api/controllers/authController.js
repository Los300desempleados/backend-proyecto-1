import { User } from '../models/index.js'
import jwt from 'jwt-simple'
import bcrypt from 'bcrypt'
import config from '../config/index.js'
import sendEmail from '../helpers/sendEmail.js'
import template from '../helpers/emailTemplate.js'

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

    // send email to verify
    // the email has a link with a token on query params
    // the token is the user id
    const payload = {
      id: user.id
    }
    const token = jwt.encode(payload, config.tokens.secret)
    const url = `${config.app.url}/verifyEmail?token=${token}`
    const html = template({ link: url, message: 'Please, activate your account to get access to our platform', name: user.name })
    await sendEmail({
      email: user.email,
      subject: 'Verify your email',
      html
    })

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

const softDelete = async (req, res) => {
  const { id } = req.params
  try {
    const user = await User.findByIdAndUpdate(id, {
      isDeleted: true
    })
    return res.json({
      msg: `The user ${user.name} has been temporarily deleted`
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error temporarily deleting user',
      error
    })
  }
}
const verifyEmail = async (req, res) => {
  try {
    const { token } = req.query
    // decode token
    const { id } = jwt.decode(token, config.tokens.secret)
    // find and update user
    const user = await User.findByIdAndUpdate(id, {
      isActivated: true
    })
    return res.status(200).json({
      msg: `The user ${user.name} has been activated`
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error verifying email',
      error
    })
  }
}

export { register, login, softDelete, verifyEmail }
