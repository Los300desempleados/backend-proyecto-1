import { Projection } from '../models/index.js'

const create = async (req, res) => {
  try {
    const projection = await Projection.create(req.body)
    return res.json({
      msg: 'Proyeccion creada satisfactoriamente',
      projection
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error al intentar crear proyeccion',
      error
    })
  }
}

// const getAll = async (_, res) => {
//   try {
//     const projection = await Projection.find()
//     return res.json({
//       msg: 'Proyeccion encontrada',
//       projection
//     })
//   } catch (error) {
//     res.status(500).json({
//       msg: 'Error al consultar proyeccion',
//       error
//     })
//   }
// }

// const getById = async (req, res) => {
//   const { id } = req.params
//   try {
//     const projection = await Projection.findById(id)
//     return res.json({
//       msg: 'Proyeccion id encontrados',
//       projection
//     })
//   } catch (error) {
//     res.status(500).json({
//       msg: 'Error al consultar id de proyeccion',
//       error
//     })
//   }
// }

// const updateById = async (req, res) => {
//   const { id } = req.params
//   try {
//     const updateProjection = await Projection.findByIdAndUpdate(id, req.body, {
//       new: true
//     })
//     return res.json({
//       msg: `Proyeccion ${updateProjection} actualizado`,
//       updateProjection
//     })
//   } catch (error) {
//     res.status(500).json({
//       msg: 'Error al actualizar Proyeccion',
//       error
//     })
//   }
// }

// const deleteById = async (req, res) => {
//   const { id } = req.params
//   try {
//     const projection = await Projection.findByIdAndRemove(id)
//     return res.json({
//       msg: 'Proyeccion eliminada',
//       projection
//     })
//   } catch (error) {
//     res.status(500).json({
//       msg: 'Error al eliminar proyeccion',
//       error
//     })
//   }
// }

// export { create, getAll, getById, updateById, deleteById }

const deleteById = async (req, res) => {
  const { id } = req.params
  try {
    await Projection.findByIdAndRemove(id)
    return res.json({
      msg: 'Proyeccion eliminada'
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error al eliminar proyeccion',
      error
    })
  }
}

export { create, deleteById }
