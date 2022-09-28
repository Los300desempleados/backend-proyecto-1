import { Schema, model } from 'mongoose'

const movieSchema = new Schema({
  title: String,
  director: String,
  producer: String,
  release_date: String,
  genre: String,
  duration: Number,
  cast: [String],
  sinopsis: String,
  rating: Number,
  poster: String
})

export default model('Movie', movieSchema)
