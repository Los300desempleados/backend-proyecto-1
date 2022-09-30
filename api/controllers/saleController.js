import { Sale, User } from '../models/index.js'

const createSale = async (req, res) => {
  try {
    const { date, discount, totalPrice, projection } = req.body
    const { userId } = req
    const user = await User.findById(userId)
    const newSale = new Sale({
      date,
      discount,
      totalPrice,
      user,
      projection
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
