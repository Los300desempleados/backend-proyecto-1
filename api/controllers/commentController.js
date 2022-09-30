import { Comments } from '../models/index.js'

const createComment = async (req, res) => {
  try {
    const { movieId, comment, date } = req.body
    const { userId } = req
    if (!userId) {
      return res.status(401).json({
        msg: 'Unathorized credentials'
      })
    }
    const newComment = new Comments({
      movie: movieId,
      comment,
      date,
      user: userId
    })

    const commentSaved = await newComment.save()
    return res.status(201).json({
      msg: 'Comentario creado exitosamente',
      comment: commentSaved
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error al crear comentario',
      error
    })
  }
}

export { createComment }
