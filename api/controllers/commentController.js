import { Comments } from '../models/index.js'

const create = async (req, res) => {
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
