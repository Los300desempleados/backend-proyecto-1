import mongoose from 'mongoose'

const projectionSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  subtitles: {
    type: String
  },
  room: {
    type: Number,
    required: true
  },
  movie: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
})

export default mongoose.model('Projection', projectionSchema)
