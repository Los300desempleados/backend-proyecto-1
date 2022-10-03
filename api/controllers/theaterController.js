import { Theater } from '../models/index.js'

const createTheater = async (req, res) => {
  try {
    const theater = new Theater(req.body)
    await theater.save()
    return res.status(201).json({
      msg: 'Theater created successfully',
      theater
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'Error creating theater',
      error: error.message
    })
  }
}

const deleteById = async (req, res) => {
  const { id } = req.params
  try {
    await Theater.findByIdAndRemove(id)
    return res.json({
      msg: 'removed theater'
    })
  } catch (error) {
    res.status(500).json({
      msg: 'error removing theater',
      error
    })
  }
}

export { createTheater, deleteById }
