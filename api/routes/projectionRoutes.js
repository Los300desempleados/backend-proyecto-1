import { Router } from 'express'
import { projectionController } from '../controllers/index.js'

const router = Router()

router.post('/projection', projectionController.create)
router.delete('/projection/:id', projectionController.deleteById)
export default router
