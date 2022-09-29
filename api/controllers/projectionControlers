import { Projection } from '../models/index.js'

const updateById = async (req, res) => {
  const { id } = req.params
  try {
    const book = await Projection.findByIdAndUpdate(id, req.body, {
      new: true
    })
    return res.json({
      msg: `Proyeccion ${Projection.title} actualizada`,
      book
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error al actualizar proyeccion'
    })
  }
}

export { updateById }
