import { Projection } from '../models/index.js'

const create = async (req, res) => {
  try {
    const projection = await Projection.create(req.body)
    return res.json({
      msg: 'Pelicula creada satisfactoriamente',
      projection
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error al intentar crear pelicula',
      error
    })
  }
}

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

export { create, getAll }
