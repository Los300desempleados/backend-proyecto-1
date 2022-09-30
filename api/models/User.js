import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  dni: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String
  },
  birthDate: {
    type: Date
  },
  role: {
    type: String,
    enum: ['admin', 'employee', 'customer'],
    defaut: 'employee',
    required: true
  },
  phone: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  alias: {
    type: String,
    required: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
})

export default mongoose.model('User', userSchema)
