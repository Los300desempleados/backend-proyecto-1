
import { User } from '../models/index.js'
import bcrypt from 'bcrypt'

const updatePassword = async (req, res) => {
  try {
    const { id } = req.params

    const encrypted = await bcrypt.hash(req.body.password, 10)

    req.body.password = encrypted

    const newPasswordOrEmail = await User.findByIdAndUpdate(id, req.body, {
      new: true
    })
    newPasswordOrEmail.password = undefined
    return res.json({
      msg: `User ${User.name} actualizado`,
      newPasswordOrEmail
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error al actualizar el password'
    })
  }
}

const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    if (req.body.password && req.body.email) {
      return res.status(401).json({
        msg: 'El correo y la contraseña no pueden ser modificados'
      })
    }
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true
    })
    return res.json({
      msg: `User ${User.name} actualizado`,
      user
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error al actualizar el usuario'
    })
  }
}
export { updatePassword, updateUser }
