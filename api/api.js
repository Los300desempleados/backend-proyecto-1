import express from 'express'
import { authRoutes, userRoutes } from './routes/index.js'

const api = express()

api.use(express.json())

api.get('/status', (_, res) => {
  return res.json({
    msg: 'API Funcionando'
  })
})

api.use(authRoutes);
api.use(userRoutes);

export default api
