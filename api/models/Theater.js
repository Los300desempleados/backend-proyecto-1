import mongoose from 'mongoose';

const TheaterSchema = new mongoose.Schema({
  address:{
    type: String,
  },
  seating:{
    type: Number,
    required: true,
  },
  name:{
    type: String,
  }
})

export default mongoose.model('Theater', TheaterSchema)
