import { Comments } from '../models/index.js'

const create = async (req, res) => {
  const userId = req.userId

  if (!userId) {
    return res.status(401).json({
      msg: 'Invalid token'
    })
  }
  try {
    const comment = await Comments.create(req.body)
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
