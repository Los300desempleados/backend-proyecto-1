import { Movie } from '../models/Movie.js'

const updateByID = async (req, res) => {
  const { id } = req.params
  try {
    const movie = await Movie.findByIdAndUpdate(id, req.body, {
      new: true
    })
    return res.json({
      msg: `Movie ${movie.title} updated`,
      movie
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error updating movie'
    })
  }
}

export { updateByID }
