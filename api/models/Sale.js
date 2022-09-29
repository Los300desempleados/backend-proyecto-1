import mongoose from 'mongoose'

const ticketsSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  discount: {
    type: Number,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  projection: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Projection',
    required: true
  }
  /**
   * A qué usuario pertenece
   * y a qué proyección pertenece?
   */
})

export default mongoose.model('Sale', ticketsSchema)
