import { projectionController } from '../controllers/index.js'
import express from 'express'

const router = express.Router()

router
  .route('/projection/:id')
  .delete(projectionController.deleteById)

export default router
