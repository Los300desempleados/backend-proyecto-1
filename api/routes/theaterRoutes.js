import { Router } from 'express'
import { theaterController } from '../controllers/index.js'

const router = Router()

router.post('/theaters', theaterController.createTheater)
router.delete('/Theater/:id', theaterController.deleteById)

export default router
