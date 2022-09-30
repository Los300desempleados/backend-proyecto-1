import express from 'express'
import authValidator from './middlewares/authValidator.js'
import {
  authRoutes,
  userRoutes,
  saleRoutes,
  theaterRoutes,
  projectionRoutes
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
api.use(projectionRoutes)
api.use(saleRoutes)

api.use(projectionRoutes)

export default api
