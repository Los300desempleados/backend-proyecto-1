import express from 'express'
import { authRoutes, theaterRoutes, ProjectionRoutes } from './routes/index.js'

const api = express()

api.use(express.json())

api.get('/status', (_, res) => {
  return res.json({
    msg: 'API Funcionando'
  })
})

api.use(authRoutes)
api.use(theaterRoutes)
api.use(ProjectionRoutes)
export default api
