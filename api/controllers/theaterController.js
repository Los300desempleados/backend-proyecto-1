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

export { createTheater }
