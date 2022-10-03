import { Comment } from '../models/index.js'

const createComment = async (req, res) => {
  try {
    const { movieId, comment, date } = req.body
    const { userId } = req
    if (!userId) {
      return res.status(401).json({
        msg: 'Unathorized credentials'
      })
    }
    const newComment = new Comment({
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
const deleteById = async (req, res) => {
  const { id } = req.params
  try {
    await Comment.findByIdAndRemove(id)
    return res.json({
      msg: 'delete comment'
    })
  } catch (error) {
    res.status(500).json({
      msg: 'error deleting comment',
      error
    })
  }
}

export { createComment, deleteById }
