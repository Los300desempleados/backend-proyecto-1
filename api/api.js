import express from 'express'
import authValidator from './middlewares/authValidator.js'
import {
  authRoutes,
  userRoutes,
  saleRoutes,
  theaterRoutes,
  commentRoutes
} from './routes/index.js'

const api = express()
api.use(express.json())

api.get('/status', (_, res) => {
  return res.json({
    msg: 'API Funcionando'
  })
})

api.use(authRoutes)
api.use(userRoutes)
api.use(theaterRoutes)
api.use(authValidator)

api.use(saleRoutes)

api.use(commentRoutes)

export default api
