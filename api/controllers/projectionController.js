import { Projection } from '../models/index.js'

const getAll = async (req, res) => {
  try {
    const projections = await Projection.findOne({
      movie: req.body.movie,
      date: req.body.date
    })
    return res.json({
      msg: 'Pelicula encontrada',
      projections
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error al consultar pelicula',
      error
    })
  }
}

export { getAll }
