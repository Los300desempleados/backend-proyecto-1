import { Router } from 'express'
import { ProjectionController } from '../controllers/index.js'

const router = Router()

router.post('/projection', ProjectionController.create)
export default router
