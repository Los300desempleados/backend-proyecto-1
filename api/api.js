import express from 'express'
import authValidator from './middlewares/authValidator.js'
import {
  authRoutes,
  userRoutes,
  saleRoutes,
  theaterRoutes,
  ProjectionRoutes
} from './routes/index.js'

const api = express()
api.use(express.json())
api.use(authRoutes)
api.use(authValidator)

api.get('/status', (_, res) => {
  return res.json({
    msg: 'API Funcionando'
  })
})

api.use(userRoutes)
api.use(theaterRoutes)
api.use(ProjectionRoutes)
api.use(saleRoutes)

export default api
