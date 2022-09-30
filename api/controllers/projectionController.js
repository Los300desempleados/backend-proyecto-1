import { Projection } from '../models/index'
const deleteById = async (req, res) => {
  const { id } = req.params
  try {
    await Projection.findByIdAndRemove(id)
    return res.json({
      msg: 'Proyeccion eliminada'
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error al eliminar proyecciòn',
      error
    })
  }
}

export { deleteById }
