import { Router } from 'express'
import { theaterController } from '../controllers/index.js'

const router = Router()

router.post('/theaters', theaterController.createTheater)

export default router
