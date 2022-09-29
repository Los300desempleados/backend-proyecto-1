import { Comment } from '../models/index.js'

const create = async (req, res) => {
  try {
    const comment = await Comment.create(req.body)
    return res.json({
      msg: 'Comentario creado exitosamente',
      comment
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error al crear comentario',
      error
    })
  }
}

export { create }

/**
 * Crear comentario por el usuario registrado usando el token
 * mediante el req.user que vendrá del authValidator
 */
