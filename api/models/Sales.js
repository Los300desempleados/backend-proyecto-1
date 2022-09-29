import mongoose from 'mongoose'

const ticketsSchema = new mongoose.Schema({
  date: {
    type: Date,
    require: true
  },
  discount: {
    type: Number,
    require: true
  },
  totalPrice: {
    type: Number,
    require: true
  }
})

export default mongoose.model('Sales', ticketsSchema)
