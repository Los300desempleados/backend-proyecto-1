const Projection = require('../../api/models/Projection')
const User = require('../../api/models/User')

module.exports = {
  create: async (req, res) => {
    console.log(req.params)
    // eslint-disable-next-line no-undef
    user = req.params
    /* eslint-disable no-undef */
    id = User.id
    const { date, lenguage, subtitles, room, movie, price } = req.body
    const projection = await Projection.create({
      date,
      lenguage,
      subtitles,
      room,
      movie,
      price,
      user: id
    })
    await projection.seve()

    const userById = await User.findById(id)

    userById.posts.push(projection)
    await userById.seve()

    return res.send(userById)
  },
  UserByProjection: async (req, res) => {
    const { id } = req.params
    const UserByProjection = await Projection.findById(id).populate('user')
    res.send(UserByProjection)
  }
}
