import express from 'express'
import { authRoutes, userRoutes, theaterRoutes, commentRoutes } from './routes/index.js'
// import { authValidator } from './middlewares/index.js'

const api = express()

api.use(express.json())

api.get('/status', (_, res) => {
  return res.json({
    msg: 'API Funcionando'
  })
})

api.use(userRoutes)
api.use(authRoutes)

api.use(theaterRoutes)

// api.use(authValidator)

api.use(commentRoutes)

export default api
