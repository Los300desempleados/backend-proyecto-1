import { Sale } from '../models/index.js'

const createSale = async (req, res) => {
  try {
    const { date, discount, totalPrice, projectionId } = req.body
    const { userId } = req
    if (!userId) return res.status(401).json({ msg: 'Unauthorized' })
    const newSale = new Sale({
      date,
      discount,
      totalPrice,
      user: userId,
      projection: projectionId
    })
    const saleSaved = await newSale.save()
    res.status(201).json({
      msg: 'Sale created successfully',
      sale: saleSaved
    })
  } catch (error) {
    res.status(400).json({
      msg: 'Error creating sale',
      error
    })
  }
}

export { createSale }
