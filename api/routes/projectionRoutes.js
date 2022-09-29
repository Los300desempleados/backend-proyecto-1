import express from 'express'
import { projectionController } from '../controllers/index.js'

const router = express.Router()

router
  .route('/projections')
  .get(projectionController.getAll)

router
  .route('/projections/:id')
  .put(projectionController.updateById)

export default router
