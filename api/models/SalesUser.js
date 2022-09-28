// relacion a modelo proyection y borrar todo  y a modelo user
// cuanto costo el boleto y cunado se hizo la compra
// precio del boleto y el descuento
import mongoose from 'mongoose'

const ticketsSchema = new mongoose.Schema({
  ticket: {
    date: Date,
    shoppingTime: String,
    discount: Number,
    price: Number
  }
})
export default mongoose.model('SalesUser', ticketsSchema)

const User = require('./User')
module.export = {
  create: async (req, res) => {
    const { name, lastname, role, phone, email, password } = req.body
    const user = await User.create({
      name,
      lastname,
      role,
      phone,
      email,
      password
    })
    return res.send(user)
  },
  find: async (req, res) => {
    const user = await User.find()
    return res.send(user)
  },
  UserByProjection: async (req, res) => {
    const { id } = req.params
    const user = await User.findById(id).populate('projection')

    res.send(user.projection)
  }
}
